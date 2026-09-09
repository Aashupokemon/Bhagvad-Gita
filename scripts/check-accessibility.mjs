import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { createElement } = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const cache = path.resolve('work/verify');
fs.mkdirSync(cache, { recursive: true });
for (const name of ['i18n', 'speech-utils']) {
  const ext = name === 'i18n' ? 'tsx' : 'ts';
  const output = ts.transpileModule(
    fs.readFileSync(`app/${name}.${ext}`, 'utf8'),
    {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        jsx: ts.JsxEmit.ReactJSX,
        target: ts.ScriptTarget.ES2022,
        esModuleInterop: true,
      },
    },
  ).outputText;
  fs.writeFileSync(path.join(cache, `${name}.cjs`), output);
}
fs.cpSync('app/locales', path.join(cache, 'locales'), { recursive: true });
const { translateText, localizeTree } = require(path.join(cache, 'i18n.cjs'));
const { splitSpeech } = require(path.join(cache, 'speech-utils.cjs'));
const codes = ['hi', 'es', 'fr', 'de', 'ar'];
let count;
for (const code of codes) {
  const d = JSON.parse(fs.readFileSync(`app/locales/${code}.json`, 'utf8'));
  count ??= Object.keys(d).length;
  assert.equal(Object.keys(d).length, count);
  for (const value of Object.values(d)) {
    assert.ok(value.trim());
    assert.ok(!value.includes('▁'));
  }
  assert.notEqual(translateText('Listen', code), 'Listen');
  const html = renderToStaticMarkup(
    localizeTree(
      createElement(
        'section',
        null,
        createElement('h2', null, 'Short lesson'),
        createElement('button', { 'aria-label': 'Listen' }, ' Listen '),
        createElement('p', { lang: 'sa' }, 'कर्मण्येवाधिकारस्ते'),
        createElement('span', { translate: 'no' }, 'English'),
      ),
      code,
    ),
  );
  assert.ok(html.includes(d['Short lesson']));
  assert.ok(html.includes('कर्मण्येवाधिकारस्ते'));
  assert.ok(html.includes('English'));
  const handler = () => {};
  const translated = localizeTree(
    createElement('button', { onClick: handler }, 'Listen'),
    code,
  );
  assert.equal(translated[0].props.onClick, handler);
  assert.equal(translateText(' Unknown label ', code), ' Unknown label ');
}
assert.deepEqual(splitSpeech('   '), []);
const text = 'This is a longer lesson. '.repeat(60).trim();
const chunks = splitSpeech(text);
assert.ok(chunks.length > 1);
assert.ok(chunks.every((c) => c.length <= 180));
assert.equal(chunks.join(' '), text);
for (const text of ['यह एक छोटा पाठ है।', 'هذا درس قصير.'])
  assert.equal(splitSpeech(text).join(' '), text);
console.log(
  `Passed: ${count} entries in each of 5 languages, translated rendering, preserved Sanskrit and handlers, fallback text, and speech chunking.`,
);
