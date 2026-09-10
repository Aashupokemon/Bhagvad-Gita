import { Children, cloneElement, isValidElement, type ReactNode } from 'react';
import hi from './locales/hi.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import de from './locales/de.json';
export type Language = 'en' | 'hi' | 'es' | 'fr' | 'de';
export const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
];
const dictionaries: Record<Language, Record<string, string>> = {
  en: {},
  hi,
  es,
  fr,
  de,
};
export function translateText(text: string, lang: Language): string {
  const key = text.replace(/\s+/g, ' ').trim();
  const translated = dictionaries[lang][key];
  if (!translated) return text;
  return (
    (text.match(/^\s*/)?.[0] || '') +
    translated +
    (text.match(/\s*$/)?.[0] || '')
  );
}
// Translate React children before rendering, preserving event handlers and state.
export function localizeTree(tree: ReactNode, lang: Language): ReactNode {
  return Children.map(tree, (node) => {
    if (typeof node === 'string') return translateText(node, lang);
    if (
      !isValidElement<{
        children?: ReactNode;
        lang?: string;
        translate?: string;
        'aria-label'?: string;
        title?: string;
      }>(node)
    )
      return node;
    if (node.props.lang === 'sa' || node.props.translate === 'no') return node;
    const props: {
      children?: ReactNode;
      'aria-label'?: string;
      title?: string;
    } = {};
    if (node.props.children !== undefined)
      props.children = localizeTree(node.props.children, lang);
    if (node.props['aria-label'])
      props['aria-label'] = translateText(node.props['aria-label'], lang);
    if (node.props.title) props.title = translateText(node.props.title, lang);
    return cloneElement(node, props);
  });
}
