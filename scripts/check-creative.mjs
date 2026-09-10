import fs from 'node:fs';
import assert from 'node:assert/strict';
import ts from 'typescript';
const source = fs.readFileSync('app/creative.tsx', 'utf8');
const tree = ts.createSourceFile(
  'creative.tsx',
  source,
  ts.ScriptTarget.Latest,
  true,
  ts.ScriptKind.TSX,
);
const required = new Set();
function visit(node) {
  if (ts.isJsxText(node)) {
    const text = node.text.replace(/\s+/g, ' ').trim();
    if (
      /[A-Za-z]{3}/.test(text) &&
      !text.includes('GITA PATH') &&
      !text.includes('Bhagavad Gita')
    )
      required.add(text);
  }
  if (
    ts.isPropertyAssignment(node) &&
    ['text', 'title'].includes(node.name.getText(tree)) &&
    ts.isStringLiteral(node.initializer)
  )
    required.add(node.initializer.text);
  if (
    ts.isCallExpression(node) &&
    node.expression.getText(tree) === 'setMessage' &&
    node.arguments[0] &&
    ts.isStringLiteral(node.arguments[0]) &&
    node.arguments[0].text
  )
    required.add(node.arguments[0].text);
  ts.forEachChild(node, visit);
}
visit(tree);
for (const code of ['hi', 'es', 'fr', 'de']) {
  const dictionary = JSON.parse(
    fs.readFileSync(`app/locales/${code}.json`, 'utf8'),
  );
  for (const text of required)
    assert.ok(dictionary[text], `${code}: Missing ${text}`);
}
for (const name of ['teaching', 'lotus', 'meditation']) {
  const png = fs.readFileSync(`public/art/${name}.png`);
  assert.equal(png.subarray(1, 4).toString(), 'PNG');
  assert.ok(png.readUInt32BE(16) >= 1024 && png.readUInt32BE(20) >= 1024);
}
assert.ok(!fs.existsSync('app/locales/ar.json'));
console.log(
  `Passed: ${required.size} creative text translations in all 4 languages, three valid high-resolution PNG assets, Arabic removed.`,
);
