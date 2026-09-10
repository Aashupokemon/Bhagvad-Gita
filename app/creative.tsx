'use client';
/* oxlint-disable next/no-img-element -- Original static artwork, also used in canvas exports. */
import { useEffect, useRef, useState, type PointerEvent } from 'react';
import { localizeTree, translateText, type Language } from './i18n';
import {
  NativeSelect,
  NativeSelectOption,
} from '@/components/ui/native-select';
import { Download, Share2, Undo2, RotateCcw } from 'lucide-react';

const sketches = [
  { id: 'teaching', title: 'Krishna and Arjuna', src: './art/teaching.png' },
  { id: 'lotus', title: 'Krishna with a lotus', src: './art/lotus.png' },
  {
    id: 'meditation',
    title: 'Arjuna finding stillness',
    src: './art/meditation.png',
  },
];
const palette = [
  '#c74229',
  '#ec822e',
  '#f2ca48',
  '#408d55',
  '#3a9caa',
  '#426cbe',
  '#8554aa',
  '#db73a0',
  '#885b3d',
  '#252b32',
  '#ffffff',
];
type Point = { x: number; y: number };
type Stroke = { color: string; width: number; points: Point[] };
function saveBlob(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  a.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function canvasBlob(canvas: HTMLCanvasElement): Promise<Blob> {
  return new Promise((resolve, reject) =>
    canvas.toBlob(
      (blob) =>
        blob ? resolve(blob) : reject(new Error('Image export failed')),
      'image/png',
    ),
  );
}
export function Colorit({ lang }: { lang: Language }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const outline = useRef<HTMLImageElement | null>(null);
  const strokes = useRef<Stroke[]>([]);
  const history = useRef<Stroke[][]>([]);
  const pointer = useRef<number | null>(null);
  const [sketch, setSketch] = useState(sketches[0].id);
  const [color, setColor] = useState(palette[0]);
  const [width, setWidth] = useState('22');
  const [ready, setReady] = useState(false);
  const [revision, setRevision] = useState(0);
  const [canUndo, setCanUndo] = useState(false);
  const [hasPaint, setHasPaint] = useState(false);
  const [message, setMessage] = useState('');
  const drafts = useRef<Record<string, Stroke[]>>({});
  const currentSketch = sketches.find((item) => item.id === sketch)!;
  function paint() {
    const ctx = canvas.current?.getContext('2d');
    if (!ctx) return;
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, 1024, 1024);
    for (const stroke of strokes.current) {
      ctx.strokeStyle = stroke.color;
      ctx.fillStyle = stroke.color;
      ctx.lineWidth = stroke.width;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.beginPath();
      ctx.moveTo(stroke.points[0].x, stroke.points[0].y);
      for (const p of stroke.points) ctx.lineTo(p.x, p.y);
      ctx.stroke();
      if (stroke.points.length === 1) {
        const p = stroke.points[0];
        ctx.beginPath();
        ctx.arc(p.x, p.y, stroke.width / 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    if (outline.current) {
      ctx.globalCompositeOperation = 'multiply';
      ctx.drawImage(outline.current, 0, 0, 1024, 1024);
      ctx.globalCompositeOperation = 'source-over';
    }
  }
  useEffect(() => {
    let disposed = false;
    outline.current = null;
    strokes.current = drafts.current[sketch] || [];
    history.current = [];
    pointer.current = null;
    const img = new Image();
    img.onload = () => {
      if (!disposed) {
        outline.current = img;
        paint();
        setReady(true);
        setCanUndo(false);
        setHasPaint(strokes.current.length > 0);
        setMessage('');
        setRevision((r) => r + 1);
      }
    };
    img.onerror = () => {
      if (!disposed) {
        setReady(false);
        setMessage('The picture could not load. Please reload the page.');
      }
    };
    img.src = currentSketch.src;
    return () => {
      disposed = true;
    };
  }, [sketch, currentSketch.src]);
  function remember() {
    history.current.push(
      strokes.current.map((s) => ({ ...s, points: [...s.points] })),
    );
    if (history.current.length > 30) history.current.shift();
  }
  function sync() {
    setCanUndo(history.current.length > 0);
    setHasPaint(strokes.current.length > 0);
    drafts.current[sketch] = strokes.current;
    paint();
    setRevision((r) => r + 1);
  }
  function point(e: PointerEvent<HTMLCanvasElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    return {
      x: ((e.clientX - rect.left) * 1024) / rect.width,
      y: ((e.clientY - rect.top) * 1024) / rect.height,
    };
  }
  return localizeTree(
    <section className="creative-page">
      <div className="creative-heading">
        <div>
          <p className="eyebrow">CREATE WITH CURIOSITY</p>
          <h1>Colorit</h1>
          <p>Choose a sketch. Pick your colors. Make it yours.</p>
        </div>
        <span className="creative-note">
          Your drawings stay here during this visit. Download to keep them.
        </span>
      </div>
      <div className="color-workspace">
        <aside className="art-tools">
          <label htmlFor="sketch">Choose a sketch</label>
          <NativeSelect
            id="sketch"
            value={sketch}
            onChange={(e) => {
              setReady(false);
              setSketch(e.target.value);
            }}
          >
            {sketches.map((s) => (
              <NativeSelectOption key={s.id} value={s.id}>
                {s.title}
              </NativeSelectOption>
            ))}
          </NativeSelect>
          <label htmlFor="paint-color">Brush color</label>
          <div className="palette">
            {palette.map((c) => (
              <button
                key={c}
                style={{ backgroundColor: c }}
                aria-label={`${translateText('Brush color', lang)} ${c}`}
                aria-pressed={c === color}
                onClick={() => setColor(c)}
              />
            ))}
          </div>
          <input
            id="paint-color"
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <label htmlFor="brush-width">Brush size</label>
          <NativeSelect
            id="brush-width"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          >
            <NativeSelectOption value="8">Fine</NativeSelectOption>
            <NativeSelectOption value="22">Medium</NativeSelectOption>
            <NativeSelectOption value="48">Broad</NativeSelectOption>
          </NativeSelect>
          <p>
            Paint with your finger, mouse or pen. Use white to erase color. The
            outlines stay visible.
          </p>
          <button
            className="secondary"
            disabled={!ready || !canUndo}
            onClick={() => {
              strokes.current = history.current.pop()!;
              sync();
            }}
          >
            <Undo2 size={17} />
            Undo
          </button>
          <button
            className="secondary"
            disabled={!ready || !hasPaint}
            onClick={() => {
              remember();
              strokes.current = [];
              sync();
            }}
          >
            <RotateCcw size={17} />
            Reset
          </button>
          <button
            className="primary"
            disabled={!ready}
            onClick={async () => {
              try {
                saveBlob(
                  await canvasBlob(canvas.current!),
                  `gita-colorit-${sketch}.png`,
                );
                setMessage('Picture downloaded.');
              } catch {
                setMessage('Download failed. Please try again.');
              }
            }}
          >
            <Download size={17} />
            Download picture
          </button>
          <output aria-live="polite">
            {message || (!ready ? 'Loading picture…' : '')}
          </output>
        </aside>
        <div
          className="drawing-paper"
          aria-busy={!ready}
          data-revision={revision}
        >
          <canvas
            ref={canvas}
            width={1024}
            height={1024}
            aria-label={translateText(currentSketch.title, lang)}
            onPointerDown={(e) => {
              if (
                !ready ||
                pointer.current !== null ||
                (e.pointerType === 'mouse' && e.button !== 0)
              )
                return;
              e.currentTarget.setPointerCapture(e.pointerId);
              pointer.current = e.pointerId;
              remember();
              strokes.current.push({
                color,
                width: Number(width),
                points: [point(e)],
              });
              sync();
            }}
            onPointerMove={(e) => {
              if (pointer.current !== e.pointerId) return;
              strokes.current.at(-1)?.points.push(point(e));
              paint();
            }}
            onPointerUp={(e) => {
              if (pointer.current === e.pointerId) {
                pointer.current = null;
                sync();
              }
            }}
            onPointerCancel={(e) => {
              if (pointer.current === e.pointerId) {
                pointer.current = null;
                sync();
              }
            }}
            onLostPointerCapture={() => {
              pointer.current = null;
            }}
          />
          <a href={currentSketch.src} download>
            Download outline to color on paper
          </a>
        </div>
      </div>
    </section>,
    lang,
  );
}
export function Gallery({ lang }: { lang: Language }) {
  return localizeTree(
    <section className="creative-page">
      <div className="creative-heading">
        <div>
          <p className="eyebrow">THE GITA IN PICTURES</p>
          <h1>Gallery</h1>
          <p>Moments of wisdom, courage and stillness.</p>
        </div>
      </div>
      <figure className="gallery-feature">
        <img
          src="./krishna-arjuna.png"
          alt={translateText(
            'Krishna and Arjuna in conversation beside a chariot',
            lang,
          )}
          width={1536}
          height={1024}
        />
        <figcaption>
          <h2>A conversation that changes everything</h2>
          <p>Krishna guides Arjuna as he searches for clarity.</p>
        </figcaption>
      </figure>
      <h2>The sketch collection</h2>
      <div className="art-grid">
        {sketches.map((s) => (
          <figure key={s.id}>
            <a href={s.src} target="_blank" rel="noreferrer">
              <img
                src={s.src}
                alt={translateText(s.title, lang)}
                width={1024}
                height={1024}
                loading="lazy"
              />
            </a>
            <figcaption>
              <h3>{s.title}</h3>
              <a href={s.src} download>
                Download outline
              </a>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="creative-note">
        Original AI-generated illustrations inspired by the Gita. Symbolic
        scenes, not historical records.
      </p>
    </section>,
    lang,
  );
}
const quotes = [
  {
    verse: '2.47',
    chapter: 2,
    number: 47,
    text: 'Give your attention to your actions, without making the reward your only reason to act.',
    color: '#263e36',
  },
  {
    verse: '6.26',
    chapter: 6,
    number: 26,
    text: 'When the mind wanders, patiently bring it back to the Self.',
    color: '#70422c',
  },
  {
    verse: '17.15',
    chapter: 17,
    number: 15,
    text: 'Let your words be truthful, kind and helpful, without causing distress.',
    color: '#354b75',
  },
];
export function Quotes({ lang }: { lang: Language }) {
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);
  async function exportQuote(q: (typeof quotes)[number], share: boolean) {
    setBusy(true);
    setMessage('');
    try {
      await document.fonts.ready;
      const c = document.createElement('canvas');
      c.width = 1080;
      c.height = 1080;
      const ctx = c.getContext('2d')!;
      ctx.fillStyle = q.color;
      ctx.fillRect(0, 0, 1080, 1080);
      ctx.strokeStyle = '#d8b86f';
      ctx.lineWidth = 2;
      ctx.strokeRect(48, 48, 984, 984);
      ctx.fillStyle = '#e9c981';
      ctx.font = '26px sans-serif';
      ctx.fillText('GITA PATH', 100, 140);
      ctx.fillStyle = '#fffaf1';
      ctx.font = '48px sans-serif';
      const words = translateText(q.text, lang).split(/\s+/);
      const lines: string[] = [];
      let line = '';
      for (const word of words) {
        const next = line ? `${line} ${word}` : word;
        if (ctx.measureText(next).width > 880 && line) {
          lines.push(line);
          line = word;
        } else line = next;
      }
      if (line) lines.push(line);
      lines.forEach((text, i) => ctx.fillText(text, 100, 290 + i * 76));
      ctx.fillStyle = '#e9c981';
      ctx.font = '28px sans-serif';
      ctx.fillText(`Bhagavad Gita · ${q.verse}`, 100, 880);
      ctx.font = '24px sans-serif';
      ctx.fillText(translateText('Educational paraphrase', lang), 100, 930);
      const blob = await canvasBlob(c);
      const file = new File([blob], `gita-quote-${q.verse}.png`, {
        type: 'image/png',
      });
      if (share && navigator.canShare?.({ files: [file] })) {
        try {
          await navigator.share({
            files: [file],
            title: `Bhagavad Gita ${q.verse}`,
          });
          setMessage('Picture shared.');
        } catch (error) {
          if (error instanceof DOMException && error.name === 'AbortError')
            return;
          saveBlob(blob, file.name);
          setMessage(
            'Sharing is unavailable here. Your image was downloaded instead.',
          );
        }
      } else {
        saveBlob(blob, file.name);
        setMessage(
          share
            ? 'Sharing is unavailable here. Your image was downloaded instead.'
            : 'Picture downloaded.',
        );
      }
    } catch (error) {
      if (!(error instanceof DOMException && error.name === 'AbortError'))
        setMessage('Download failed. Please try again.');
    } finally {
      setBusy(false);
    }
  }
  return localizeTree(
    <section className="creative-page">
      <div className="creative-heading">
        <div>
          <p className="eyebrow">WISDOM TO CARRY WITH YOU</p>
          <h1>Shareable quotes</h1>
          <p>A little reflection for your day, and someone else’s.</p>
        </div>
      </div>
      <div className="art-grid">
        {quotes.map((q) => (
          <article key={q.verse} className="quote-item">
            <div className="quote-image" style={{ background: q.color }}>
              <span translate="no">GITA PATH</span>
              <p>{q.text}</p>
              <div>
                <strong translate="no">Bhagavad Gita · {q.verse}</strong>
                <small>Educational paraphrase</small>
              </div>
            </div>
            <div className="quote-actions">
              <button
                className="secondary"
                disabled={busy}
                onClick={() => exportQuote(q, false)}
              >
                <Download size={17} />
                Download
              </button>
              <button
                className="secondary"
                disabled={busy}
                onClick={() => exportQuote(q, true)}
              >
                <Share2 size={17} />
                Share
              </button>
            </div>
            <a
              href={`https://www.holy-bhagavad-gita.org/chapter/${q.chapter}/verse/${q.number}/`}
              target="_blank"
              rel="noreferrer"
            >
              Read the verse in context
            </a>
          </article>
        ))}
      </div>
      <output aria-live="polite">{message}</output>
      <p className="creative-note">
        These are educational paraphrases, not word-for-word translations.
      </p>
    </section>,
    lang,
  );
}
