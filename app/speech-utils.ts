export function splitSpeech(text: string, max = 180): string[] {
  const words = text.replace(/\s+/g, ' ').trim().split(' ');
  const chunks: string[] = [];
  let part = '';
  for (const word of words) {
    if (part && part.length + word.length + 1 > max) {
      chunks.push(part);
      part = '';
    }
    part += (part ? ' ' : '') + word;
  }
  if (part) chunks.push(part);
  return chunks;
}

export function matchingVoices<T extends { lang: string }>(
  voices: T[],
  language: string,
): T[] {
  const base = (tag: string) =>
    tag.toLowerCase().replace(/_/g, '-').split('-')[0];
  return voices.filter((voice) => base(voice.lang) === base(language));
}
