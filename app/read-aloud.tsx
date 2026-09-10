'use client';
import { localizeTree, type Language } from './i18n';

import { useEffect, useRef, useState } from 'react';
import { Volume2, Pause, Play, Square } from 'lucide-react';
import {
  NativeSelect,
  NativeSelectOption,
} from '@/components/ui/native-select';

import { splitSpeech, matchingVoices } from './speech-utils';
export default function ReadAloud({
  lang = 'en',
  scope = 'main',
}: {
  lang?: Language;
  scope?: string;
}) {
  const [state, setState] = useState<'idle' | 'speaking' | 'paused'>('idle');
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voice, setVoice] = useState('');
  const [rate, setRate] = useState('1');
  const [message, setMessage] = useState('');
  const generation = useRef(0);
  const current = useRef<SpeechSynthesisUtterance | null>(null);
  useEffect(() => {
    if (!('speechSynthesis' in window)) {
      queueMicrotask(() =>
        setMessage(
          'Read aloud is not supported in this browser. Try Chrome, Edge or Safari.',
        ),
      );
      return;
    }
    const activeGeneration = generation;
    const update = () => setVoices(window.speechSynthesis.getVoices());
    queueMicrotask(update);
    // Some browsers load device voices late without dispatching voiceschanged.
    const retries = [250, 750, 1500, 3000].map((delay) =>
      window.setTimeout(update, delay),
    );
    const onHide = () => {
      activeGeneration.current++;
      window.speechSynthesis.cancel();
      setState('idle');
    };
    window.addEventListener('pagehide', onHide);
    window.speechSynthesis.addEventListener('voiceschanged', update);
    return () => {
      retries.forEach(window.clearTimeout);
      activeGeneration.current++;
      window.speechSynthesis.cancel();
      window.speechSynthesis.removeEventListener('voiceschanged', update);
      window.removeEventListener('pagehide', onHide);
    };
  }, []);
  const matching = matchingVoices(voices, lang);
  function stop() {
    generation.current++;
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    current.current = null;
    setState('idle');
  }
  function start() {
    if (!('speechSynthesis' in window)) {
      setMessage('Read aloud is not supported in this browser.');
      return;
    }
    const root = document.querySelector(scope);
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const text: string[] = [];
    let node: Node | null;
    while ((node = walker.nextNode())) {
      const parent = node.parentElement;
      if (
        !parent ||
        !parent.getClientRects().length ||
        parent.closest(
          'button:not(.chapter-card),select,script,style,[aria-hidden="true"],[lang="sa"],.transliteration,footer',
        )
      )
        continue;
      const value = node.textContent?.trim();
      if (value) text.push(value);
    }
    const chunks = splitSpeech(text.join(' '));
    if (!chunks.length) {
      setMessage('There is no visible text to read.');
      return;
    }
    const available = window.speechSynthesis.getVoices();
    setVoices(available);
    const freshMatching = matchingVoices(available, lang);
    const chosen =
      freshMatching.find((v) => v.voiceURI === voice) ||
      freshMatching.find((v) => v.default) ||
      freshMatching[0];
    if (!chosen) {
      setMessage(
        !available.length
          ? 'Voices are still loading. Wait a moment, then press Listen again.'
          : lang === 'hi'
            ? 'Add a Hindi voice in your device speech settings, then reopen this page. Hindi text needs a Hindi voice.'
            : "No voice for this language is installed on this device. Add a matching voice in your device's speech settings.",
      );
      return;
    }
    stop();
    const run = generation.current;
    setMessage(
      'Reading visible text. Sanskrit verses are skipped because device voices may not pronounce them accurately.',
    );
    setState('speaking');
    function speak(index: number) {
      if (run !== generation.current) return;
      if (index >= chunks.length) {
        current.current = null;
        setState('idle');
        setMessage('Finished reading.');
        return;
      }
      const utterance = new SpeechSynthesisUtterance(chunks[index]);
      current.current = utterance;
      utterance.lang = chosen?.lang || lang;
      utterance.rate = Number(rate);
      if (chosen) utterance.voice = chosen;
      utterance.onend = () => speak(index + 1);
      utterance.onerror = (event) => {
        if (run !== generation.current) return;
        setState('idle');
        setMessage(
          event.error === 'not-allowed'
            ? 'Your browser blocked speech. Press Listen again.'
            : 'Speech could not play. Try another installed voice.',
        );
      };
      window.speechSynthesis.speak(utterance);
    }
    speak(0);
  }
  return localizeTree(
    <div className="read-controls">
      <button className="secondary" onClick={start} disabled={state !== 'idle'}>
        <Volume2 size={18} /> Listen
      </button>
      {state !== 'idle' && (
        <>
          <button
            className="secondary"
            onClick={() => {
              if (state === 'speaking') {
                window.speechSynthesis.pause();
                setState('paused');
              } else {
                window.speechSynthesis.resume();
                setState('speaking');
              }
            }}
          >
            {state === 'speaking' ? <Pause size={17} /> : <Play size={17} />}{' '}
            {state === 'speaking' ? 'Pause' : 'Resume'}
          </button>
          <button
            className="secondary"
            onClick={() => {
              stop();
              setMessage('Stopped.');
            }}
          >
            <Square size={17} /> Stop
          </button>
        </>
      )}
      <NativeSelect
        aria-label="Reading speed"
        value={rate}
        disabled={state !== 'idle'}
        onChange={(e) => setRate(e.target.value)}
      >
        <NativeSelectOption value="0.75">Slow · 0.75×</NativeSelectOption>
        <NativeSelectOption value="1">Normal · 1×</NativeSelectOption>
        <NativeSelectOption value="1.25">Fast · 1.25×</NativeSelectOption>
      </NativeSelect>
      {matching.length > 0 && (
        <NativeSelect
          aria-label="Reading voice"
          value={voice}
          disabled={state !== 'idle'}
          onChange={(e) => setVoice(e.target.value)}
        >
          <NativeSelectOption value="">Default voice</NativeSelectOption>
          {matching.map((v) => (
            <NativeSelectOption key={v.voiceURI} value={v.voiceURI}>
              {v.name}
            </NativeSelectOption>
          ))}
        </NativeSelect>
      )}
      <output className="speech-message">
        {message ||
          'Hear the text on this page. Voices depend on your browser and device.'}
      </output>
    </div>,
    lang,
  );
}
