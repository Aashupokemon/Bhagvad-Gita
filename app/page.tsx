'use client';
/* oxlint-disable next/no-img-element -- A static asset avoids the Next image shim in this Vinext app. */
import { useEffect, useState } from 'react';
import { localizeTree, languages, type Language } from './i18n';
import {
  NativeSelect,
  NativeSelectOption,
} from '@/components/ui/native-select';
import ReadAloud from './read-aloud';
import { Colorit, Gallery, Quotes } from './creative';
import {
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Sparkles,
  Sprout,
  Clock3,
  Check,
  Heart,
  Lightbulb,
  GraduationCap,
  Feather,
  RotateCcw,
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { chapters } from './lessons';
export default function Home() {
  const [kids, setKids] = useState(false),
    [selected, setSelected] = useState<number | null>(null),
    [stage, setStage] = useState('lesson'),
    [answer, setAnswer] = useState<number | null>(null),
    [checked, setChecked] = useState(false),
    [completed, setCompleted] = useState<number[]>([]);
  const [language, setLanguage] = useState<Language>('en');
  const [view, setView] = useState('learn');
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = 'ltr';
  }, [language]);
  const c = chapters.find((c) => c.id === selected);
  function open(id: number) {
    setSelected(id);
    setStage('lesson');
    setAnswer(null);
    setChecked(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return localizeTree(
    <div className="app-shell">
      <header className="topbar">
        <button
          className="brand"
          translate="no"
          onClick={() => {
            setSelected(null);
            setView('learn');
          }}
          aria-label="Gita Path home"
        >
          <span className="brand-mark">
            <Feather size={25} />
          </span>
          <span>
            gita<span className="brand-light">path</span>
            <small>WISDOM FOR EVERYDAY LIFE</small>
          </span>
        </button>
        <span className="header-note">
          A little wisdom. A little every day.
        </span>
        <div className="mode-control" aria-label="Learning mode">
          <button
            aria-pressed={!kids}
            className={!kids ? 'active' : ''}
            onClick={() => setKids(false)}
          >
            Everyone
          </button>
          <button
            aria-pressed={kids}
            className={kids ? 'active' : ''}
            onClick={() => setKids(true)}
          >
            <Sprout size={16} /> Kids
          </button>
        </div>
      </header>
      <div className="language-bar">
        <label htmlFor="site-language">Language</label>
        <NativeSelect
          id="site-language"
          value={language}
          onChange={(e) => setLanguage(e.target.value as Language)}
        >
          {languages.map((item) => (
            <NativeSelectOption
              key={item.code}
              value={item.code}
              translate="no"
            >
              {item.label}
            </NativeSelectOption>
          ))}
        </NativeSelect>
        {language !== 'en' && (
          <p>
            Machine translation — check English for the original explanation.
            Sanskrit stays unchanged.
          </p>
        )}
      </div>
      <ReadAloud
        lang={language}
        key={`${view}-${selected}-${stage}-${kids}-${checked}-${language}`}
      />
      <Tabs
        value={view}
        onValueChange={(value) => setView(String(value))}
        className="site-tabs"
      >
        <TabsList aria-label="Explore Gita Path" className="site-nav">
          <TabsTrigger value="learn">Learn</TabsTrigger>
          <TabsTrigger value="colorit">Colorit</TabsTrigger>
          <TabsTrigger value="gallery">Gallery</TabsTrigger>
          <TabsTrigger value="quotes">Quotes</TabsTrigger>
        </TabsList>
        <main>
          <TabsContent value="colorit" keepMounted>
            <Colorit lang={language} />
          </TabsContent>
          <TabsContent value="gallery">
            <Gallery lang={language} />
          </TabsContent>
          <TabsContent value="quotes">
            <Quotes lang={language} />
          </TabsContent>
          <TabsContent value="learn">
            {!c ? (
              <>
                <div className="welcome">
                  <div>
                    <p className="eyebrow">
                      <span /> YOUR JOURNEY INWARD
                    </p>
                    <h1>
                      {kids
                        ? 'Big wisdom for little explorers.'
                        : 'Ancient wisdom, everyday discoveries.'}
                    </h1>
                    <p>
                      {kids
                        ? 'Little stories. Thoughtful choices. A new discovery in every chapter.'
                        : 'Explore the Bhagavad Gita, one short lesson at a time.'}
                    </p>
                  </div>
                  <span className="edition">
                    <BookOpen size={18} /> 18 chapters · Your own pace
                  </span>
                </div>
                <div className="home-grid">
                  <div>
                    <section className="featured">
                      <img
                        width={1536}
                        height={1024}
                        fetchPriority="high"
                        decoding="async"
                        src="./krishna-arjuna.png"
                        alt="Illustration of Krishna and Arjuna in peaceful conversation beside a chariot"
                      />
                      <div className="featured-shade" />
                      <div className="featured-content">
                        <span className="pill">A GOOD PLACE TO BEGIN</span>
                        <h2>
                          Your effort.
                          <br />
                          Your superpower.
                        </h2>
                        <p>
                          A cricket match, a school test, a big dream.
                          <br />
                          Discover what is truly in your hands.
                        </p>
                        <button className="primary" onClick={() => open(2)}>
                          Explore the lesson <ArrowRight size={17} />
                        </button>
                        <div className="feature-meta">
                          <Clock3 size={14} /> 4 min <span>•</span> Chapter 2 ·
                          Sankhya Yoga
                        </div>
                      </div>
                    </section>
                    <section className="chapters-section">
                      <div className="section-heading">
                        <div>
                          <p className="eyebrow">THE 18-CHAPTER JOURNEY</p>
                          <h2>Find your next discovery</h2>
                        </div>
                        <span>Start anywhere</span>
                      </div>
                      <div className="chapter-grid">
                        {chapters.map((ch) => (
                          <button
                            key={ch.id}
                            className={'chapter-card tone-' + (ch.id % 4)}
                            onClick={() => open(ch.id)}
                          >
                            <div className="card-top">
                              <span className="chapter-number">
                                {String(ch.id).padStart(2, '0')}
                              </span>
                              {completed.includes(ch.id) ? (
                                <span className="done">
                                  <Check size={14} /> Explored
                                </span>
                              ) : (
                                <ArrowRight size={18} />
                              )}
                            </div>
                            <p className="sanskrit-name">{ch.name}</p>
                            <h3>{kids ? ch.kidTitle : ch.title}</h3>
                            <p className="card-description">{ch.summary}</p>
                            <div className="card-bottom">
                              <Clock3 size={14} /> 4 min <span /> 1 lesson +
                              quiz
                            </div>
                          </button>
                        ))}
                      </div>
                    </section>
                  </div>
                  <aside className="wisdom-column">
                    <section className="shloka-card">
                      <div className="aside-heading">
                        <span className="icon-circle">
                          <Sparkles size={20} />
                        </span>
                        <span>A MOMENT OF WISDOM</span>
                      </div>
                      <p className="verse-ref">BHAGAVAD GITA · 2.47</p>
                      <p lang="sa" className="daily-sanskrit">
                        कर्मण्येवाधिकारस्ते
                        <br />
                        मा फलेषु कदाचन।
                      </p>
                      <div className="small-rule" />
                      <h3>
                        Give your best.
                        <br />
                        Let go of the rest.
                      </h3>
                      <p>
                        A simple learning takeaway: care about your effort
                        without letting the result define you.
                      </p>
                      <button className="text-button" onClick={() => open(2)}>
                        Understand this shloka <ArrowRight size={16} />
                      </button>
                    </section>
                    <section className="journey-card">
                      <Sprout size={26} />
                      <h3>Small steps, real growth</h3>
                      <p>
                        Every chapter is a chance to bring a little more wisdom
                        into your day.
                      </p>
                      <div className="progress-label">
                        <span>Chapters explored</span>
                        <b>{completed.length} / 18</b>
                      </div>
                      <Progress
                        value={(completed.length / 18) * 100}
                        aria-label="Chapters explored"
                      />
                      <small>Progress lasts for this visit.</small>
                    </section>
                    <section className="gentle-note">
                      <Heart size={19} />
                      <p>
                        {kids
                          ? 'Explore with a parent or teacher. There is always room for questions.'
                          : 'Made for curious minds of every age. No prior knowledge needed.'}
                      </p>
                    </section>
                  </aside>
                </div>
              </>
            ) : (
              <>
                <button
                  className="back text-button"
                  onClick={() => setSelected(null)}
                >
                  <ArrowLeft size={17} /> All chapters
                </button>
                <div className="lesson-heading">
                  <p className="eyebrow">
                    CHAPTER {c.id} · {c.name.toUpperCase()}
                  </p>
                  <h1>{kids ? c.kidTitle : c.title}</h1>
                  <p>{c.summary}</p>
                </div>
                <div className="lesson-layout">
                  <section className="lesson-surface">
                    <Tabs
                      value={stage}
                      onValueChange={(v) => setStage(String(v))}
                    >
                      <TabsList className="lesson-tabs">
                        <TabsTrigger value="lesson">
                          <BookOpen /> Short lesson
                        </TabsTrigger>
                        <TabsTrigger value="example">
                          <Lightbulb /> Everyday example
                        </TabsTrigger>
                        <TabsTrigger value="quiz">
                          <GraduationCap /> Quick quiz
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="lesson" className="lesson-body">
                        <span className="reading-label">
                          <Clock3 size={15} /> A moment to understand
                        </span>
                        <h2>
                          {kids
                            ? 'Let’s discover the idea'
                            : 'The idea to carry with you'}
                        </h2>
                        <p>{kids ? c.kids : c.lesson}</p>
                        <div className="takeaway">
                          <Sprout size={22} />
                          <div>
                            <b>One small practice</b>
                            <p>{c.practice}</p>
                          </div>
                        </div>
                        <button
                          className="primary"
                          onClick={() => setStage('example')}
                        >
                          See it in everyday life <ArrowRight size={17} />
                        </button>
                      </TabsContent>
                      <TabsContent value="example" className="lesson-body">
                        <span className="reading-label">
                          AN ORIGINAL EVERYDAY STORY
                        </span>
                        <h2>{kids ? c.kidExampleTitle : c.exampleTitle}</h2>
                        <p>{kids ? c.kidExample : c.example}</p>
                        <div className="takeaway">
                          <Lightbulb size={22} />
                          <div>
                            <b>Pause and reflect</b>
                            <p>{c.reflect}</p>
                          </div>
                        </div>
                        <button
                          className="primary"
                          onClick={() => setStage('quiz')}
                        >
                          Try the quick quiz <ArrowRight size={17} />
                        </button>
                      </TabsContent>
                      <TabsContent value="quiz" className="lesson-body">
                        <span className="reading-label">
                          ONE THOUGHTFUL QUESTION · NO TIMER
                        </span>
                        <h2>{c.question}</h2>
                        <RadioGroup
                          className="answers"
                          value={answer === null ? '' : String(answer)}
                          onValueChange={(v) => setAnswer(Number(v))}
                          disabled={checked}
                          aria-label="Choose your answer"
                        >
                          {c.options.map((option, i) => (
                            <label
                              key={option}
                              className={
                                'answer ' +
                                (answer === i ? 'chosen ' : '') +
                                (checked && i === c.correct ? 'correct ' : '') +
                                (checked && answer === i && i !== c.correct
                                  ? 'incorrect'
                                  : '')
                              }
                            >
                              <RadioGroupItem value={String(i)} />
                              <span className="answer-letter">
                                {String.fromCharCode(65 + i)}
                              </span>
                              {option}
                              {checked && i === c.correct && (
                                <Check size={18} />
                              )}
                            </label>
                          ))}
                        </RadioGroup>
                        {checked ? (
                          <output className="feedback">
                            <h3>
                              {answer === c.correct
                                ? 'A thoughtful choice!'
                                : 'A little reflection helps us grow.'}
                            </h3>
                            <p>{c.explanation}</p>
                          </output>
                        ) : null}
                        <div className="quiz-actions">
                          {!checked ? (
                            <button
                              className="primary"
                              disabled={answer === null}
                              onClick={() => {
                                setChecked(true);
                                if (answer === c.correct)
                                  setCompleted((prev) =>
                                    prev.includes(c.id)
                                      ? prev
                                      : [...prev, c.id],
                                  );
                              }}
                            >
                              Check my answer <ArrowRight size={17} />
                            </button>
                          ) : (
                            <>
                              <button
                                className="secondary"
                                onClick={() => {
                                  setAnswer(null);
                                  setChecked(false);
                                }}
                              >
                                <RotateCcw size={16} /> Try again
                              </button>
                              <button
                                className="primary"
                                onClick={() =>
                                  c.id < 18 ? open(c.id + 1) : setSelected(null)
                                }
                              >
                                {c.id < 18
                                  ? 'Next chapter'
                                  : 'Back to all chapters'}{' '}
                                <ArrowRight size={17} />
                              </button>
                            </>
                          )}
                        </div>
                      </TabsContent>
                    </Tabs>
                  </section>
                  <aside className="verse-panel">
                    <p className="eyebrow">
                      <Feather size={17} /> THE SHLOKA · {c.id}.{c.verse}
                    </p>
                    <p className="full-sanskrit" lang="sa">
                      {c.sanskrit}
                    </p>
                    <p className="transliteration">{c.transliteration}</p>
                    <div className="small-rule" />
                    <h3>In simple words</h3>
                    <p>{c.meaning}</p>
                    <a href={c.source} target="_blank" rel="noreferrer">
                      Read the verse in context ↗
                    </a>
                    <small>
                      Simplified educational interpretation. Everyday stories
                      are modern illustrations, not events from the scripture.
                      Interpretations vary across traditions.
                    </small>
                  </aside>
                </div>
              </>
            )}
          </TabsContent>
          <footer>
            <span className="footer-brand" translate="no">
              <Feather size={17} /> gitapath
            </span>
            <p>Rooted in the Bhagavad Gita. Open to every curious mind.</p>
            <span>Learn · Reflect · Grow</span>
          </footer>
        </main>
      </Tabs>
    </div>,
    language,
  );
}
