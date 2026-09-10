# Gita Path — working learning app

This repository now includes a runnable React application with 18 introductory chapter lessons, Sanskrit shlokas with transliteration and source links, separate child-friendly explanations and stories, reflection prompts, and a quiz for each chapter.

## Run locally

Requires Node.js 22.13 or newer.

```sh
npm ci
npm run dev
```

Open the local address printed by the development server.

```sh
npm run build
npm run lint
npx tsc --noEmit
```

The app uses the generated Sites/Vinext starter and Cloudflare Workers build output. Lint covers authored application code; the unmodified generated component catalogue and its mobile hook are excluded from lint because they contain upstream lint violations. Type checking still covers all included TypeScript files.

## Current scope

- One introductory lesson and one multiple-choice quiz for each of the 18 chapters.
- Everyone and Kids modes change the explanations, titles and example stories.
- Quiz explanations, retries and next-chapter navigation.
- Chapter completion records correct answers for the current visit only; refreshing resets progress.
- Responsive layout and keyboard-accessible lesson tabs and answer choices.
- No accounts, audio recordings, full 700-verse reader or server-side learner storage yet.

The Sanskrit is ancient source text. English explanations, transliterations and modern stories are educational renderings, not quotations from a particular published translation. Each lesson links to the verse used for reference. Chapter names and verse numbering can differ by edition, especially chapter 13. The feature illustration was generated for this app. These short lessons introduce selected ideas, rather than claim to cover each chapter in full.

The original project vision is preserved below; its future features are not all implemented in this version.

---

# 🕉️ Bhagavad Gita — A Journey of Wisdom

# 📖 Bhagavad Gita

### **Read. Listen. Understand. Reflect.**

A simple and accessible web application to explore the teachings of the **Bhagavad Gita**, one chapter and one milestone at a time.

![Status](https://img.shields.io/badge/Status-Under%20Development-orange?style=for-the-badge)  
![Platform](https://img.shields.io/badge/Platform-Web-blue?style=for-the-badge)  
![Content](https://img.shields.io/badge/Content-Bhagavad%20Gita-purple?style=for-the-badge)  
![License](https://img.shields.io/badge/License-To%20Be%20Decided-lightgrey?style=for-the-badge)

---

## 🌱 About the Project

The **Bhagavad Gita Web App** is an educational and spiritual reading platform designed to make the Bhagavad Gita easier to explore for everyone.

Instead of presenting all 18 chapters as one large body of text, the application will break the Gita into **small, meaningful milestones**.

Users will be able to:

- 📖 Read chapters and verses
- 🎧 Listen to verses/audio
- 🕉️ Explore Sanskrit text
- 🌐 Read translations
- 💡 Understand the meaning of teachings
- 📚 Progress chapter by chapter
- ✅ Complete learning milestones
- 🔖 Bookmark meaningful verses
- 🌙 Read comfortably with a focused interface
- 📱 Access the experience across devices

The goal is simple:

> **Make the wisdom of the Bhagavad Gita accessible, understandable, and easy to experience at your own pace.**

---

# 🎯 Project Vision

The Bhagavad Gita contains **18 chapters** and **700 verses**.

Rather than encouraging users to consume everything at once, this project follows a milestone-based approach.

```text
        🕉️ BEGIN YOUR JOURNEY
                 │
                 ▼
          📖 CHOOSE A CHAPTER
                 │
                 ▼
          📚 READ THE VERSES
                 │
                 ▼
          🎧 LISTEN & REFLECT
                 │
                 ▼
          💡 UNDERSTAND
                 │
                 ▼
          ✅ COMPLETE MILESTONE
                 │
                 ▼
          🌱 CONTINUE JOURNEY
                 │
                 ▼
            🕉️ COMPLETE

```

---

# 📚 The 18 Chapters

The application will gradually introduce all 18 chapters.

| #   | Chapter                         | Focus                                |
| --- | ------------------------------- | ------------------------------------ |
| 01  | Arjuna Vishada Yoga             | The Dilemma of Arjuna                |
| 02  | Sankhya Yoga                    | Knowledge and the Self               |
| 03  | Karma Yoga                      | The Path of Action                   |
| 04  | Jnana Karma Sannyasa Yoga       | Knowledge and Renunciation of Action |
| 05  | Karma Sannyasa Yoga             | Renunciation and Action              |
| 06  | Dhyana Yoga                     | The Path of Meditation               |
| 07  | Jnana Vijnana Yoga              | Knowledge and Realization            |
| 08  | Akshara Brahma Yoga             | The Eternal Absolute                 |
| 09  | Raja Vidya Raja Guhya Yoga      | The Royal Knowledge and Secret       |
| 10  | Vibhuti Yoga                    | Divine Manifestations                |
| 11  | Vishvarupa Darshana Yoga        | The Universal Form                   |
| 12  | Bhakti Yoga                     | The Path of Devotion                 |
| 13  | Kshetra Kshetrajna Vibhaga Yoga | The Field and the Knower             |
| 14  | Gunatraya Vibhaga Yoga          | The Three Gunas                      |
| 15  | Purushottama Yoga               | The Supreme Being                    |
| 16  | Daivasura Sampad Vibhaga Yoga   | Divine and Demonic Qualities         |
| 17  | Shraddhatraya Vibhaga Yoga      | Three Types of Faith                 |
| 18  | Moksha Sannyasa Yoga            | Liberation and Renunciation          |

---

# 🏆 Milestone-Based Learning

The application will divide the journey into manageable milestones.

### 🌱 Level 1 — Begin

- Introduction to the Bhagavad Gita
- Meet Arjuna and Krishna
- Understand the context
- Begin Chapter 1

### 📖 Level 2 — Explore

Complete:

- Chapters 1–3

Focus:

**Doubt → Knowledge → Action**

### 🧠 Level 3 — Understand

Complete:

- Chapters 4–6

Focus:

**Knowledge → Discipline → Meditation**

### 🌌 Level 4 — Discover

Complete:

- Chapters 7–9

Focus:

**Divinity → Reality → Devotion**

### 👁️ Level 5 — Experience

Complete:

- Chapters 10–12

Focus:

**Divine manifestations → Universal form → Devotion**

### 🌿 Level 6 — Reflect

Complete:

- Chapters 13–15

Focus:

**Self → Nature → Supreme reality**

### 🕉️ Level 7 — Complete

Complete:

- Chapters 16–18

Focus:

**Values → Faith → Liberation**

---

# 🎧 Read & Listen

A major goal of the application is to support both **reading and listening**.

Each chapter/verse can eventually provide:

```text
┌───────────────────────────────┐
│         Verse 2.47            │
│                               │
│      [ Sanskrit Text ]        │
│                               │
│      [ Translation ]          │
│                               │
│   ▶ Listen to Verse           │
│                               │
│   💡 Meaning & Reflection     │
│                               │
│   🔖 Bookmark                 │
└───────────────────────────────┘

```

Possible audio features:

- ▶️ Play
- ⏸️ Pause
- ⏭️ Next verse
- ⏮️ Previous verse
- 🔊 Audio speed control
- 📖 Read while listening
- 🎧 Chapter-level audio

---

# 💡 Understanding the Teachings

The application should not simply display verses.

Where appropriate, users should be able to explore:

### 📖 Verse

The original Sanskrit text.

### 🌐 Translation

A properly licensed or public-domain translation.

### 💡 Explanation

A concise, accessible explanation.

### 🧘 Reflection

A question encouraging the reader to reflect on the teaching.

Example:

```text
VERSE
  ↓
TRANSLATION
  ↓
WHAT DOES IT MEAN?
  ↓
WHY DOES IT MATTER?
  ↓
HOW CAN I REFLECT ON IT?

```

Explanations should clearly distinguish **the original scripture, translation, commentary, and modern interpretation**.

---

# 📱 Planned Features

## 📖 Reading

- Chapter navigation
- Verse navigation
- Sanskrit text
- Translation
- Responsive reading interface
- Dark/light reading modes

## 🎧 Audio

- Verse audio
- Chapter audio
- Play/pause
- Progress tracking
- Background-friendly listening where supported

## 🔖 Personal Journey

- Bookmark verses
- Reading history
- Completed chapters
- Milestone tracking
- Personal notes

## 🔎 Search

Search by:

- Chapter
- Verse
- Keyword
- Topic
- Theme

Possible themes:

```text
Karma
Dharma
Bhakti
Knowledge
Meditation
Duty
Fear
Doubt
Self
Peace
Discipline
Liberation

```

---

# 🧭 User Journey

A new user should be able to:

```text
LANDING PAGE
     ↓
INTRODUCTION
     ↓
START JOURNEY
     ↓
CHAPTER 01
     ↓
VERSE 01
     ↓
READ / LISTEN
     ↓
UNDERSTAND
     ↓
MARK COMPLETE
     ↓
NEXT VERSE
     ↓
CHAPTER COMPLETE
     ↓
NEXT MILESTONE

```

The experience should feel **calm, focused, respectful, and distraction-free**.

---

# 🛠️ Planned Technology

The exact stack may evolve during development.

Possible architecture:

### Frontend

- HTML / CSS / JavaScript
- React or Next.js
- Responsive UI
- Progressive Web App capabilities

### Backend

- Node.js
- REST API or serverless functions

### Database

Potentially:

- PostgreSQL
- Supabase
- Firebase

### Audio

- Audio files/CDN
- Streaming-compatible player
- Chapter/verse metadata

### Deployment

Potential options:

- Vercel
- Netlify
- GitHub Pages
- Cloud hosting

---

# 🗂️ Proposed Project Structure

```text
bhagavad-gita/
│
├── README.md
├── LICENSE
├── .gitignore
│
├── docs/
│   ├── project-plan.md
│   ├── content-guidelines.md
│   └── contribution-guide.md
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── data/
│   ├── audio/
│   ├── styles/
│   └── utils/
│
├── public/
│   ├── images/
│   └── icons/
│
└── tests/

```

---

# 🚧 Development Status

## 🏗️ PROJECT UNDER DEVELOPMENT

The project is currently in the **planning and foundation phase**.

### Current Progress

```text
Project Concept       ████████████████████ 100%
Research               ████████████░░░░░░░░  60%
Architecture           ████████░░░░░░░░░░░░  40%
UI/UX Design           ████░░░░░░░░░░░░░░░░  20%
Content Preparation    ██░░░░░░░░░░░░░░░░░░  10%
Development            ██░░░░░░░░░░░░░░░░░░  10%
Audio                  ░░░░░░░░░░░░░░░░░░░░   0%
Testing                ░░░░░░░░░░░░░░░░░░░░   0%
Launch                  ░░░░░░░░░░░░░░░░░░░░   0%

```

---

# 🗺️ Roadmap

## Phase 1 — Foundation

- Project concept
- Initial README
- Finalize application architecture
- Select technology stack
- Design database structure
- Establish content/licensing sources

## Phase 2 — Content

- Chapter metadata
- Verse database
- Sanskrit content
- Translation content
- Content verification
- Audio planning

## Phase 3 — Core Web App

- Landing page
- Chapter listing
- Chapter reader
- Verse navigation
- Audio player
- Progress tracking

## Phase 4 — Personal Features

- User accounts
- Bookmarks
- Reading history
- Personal notes
- Milestone tracking

## Phase 5 — Enhanced Experience

- Search
- Topics/themes
- Daily verse
- Reading streaks
- Accessibility improvements
- PWA support

## Phase 6 — Launch

- Testing
- Content review
- Security review
- Performance optimization
- Mobile testing
- Public launch 🚀

---

# 🔐 Content & Accuracy

This project aims to treat the source material with **respect and accuracy**.

Content will be separated into clearly identified categories:

```text
ORIGINAL TEXT
      ↓
TRANSLATION
      ↓
TRADITIONAL COMMENTARY
      ↓
MODERN EXPLANATION
      ↓
PERSONAL REFLECTION

```

Translations, commentaries, audio recordings, images, and other third-party materials will only be included where the project has appropriate rights or permission to redistribute them.

---

# 🤝 Contributing

Contributions will eventually be welcome.

Potential contribution areas:

- 💻 Development
- 🎨 UI/UX
- 📚 Content research
- 🔎 Fact checking
- 🌐 Translation
- 🎧 Audio
- ♿ Accessibility
- 🧪 Testing
- 📝 Documentation

Before contributing content, please ensure that it is **accurate, respectful, and legally reusable**.

Contribution guidelines will be expanded as development progresses.

---

# 🌱 Project Philosophy

The purpose of this project is not to tell people what to believe.

It is to create a place where people can:

**Read. Listen. Learn. Reflect.**

Whether someone is discovering the Bhagavad Gita for the first time or returning to it after years, the application should provide a simple way to continue the journey.

---

# 🕉️ The Journey Begins

### 18 Chapters

### 700 Verses

### One Journey

> **Start small. Read one verse. Reflect on one teaching.**

## 🚧 COMING SOON 🚧

**The Bhagavad Gita Web Experience**

⭐ Star the repository to follow the journey.

---

**Built with ❤️, curiosity, and respect for timeless wisdom.**

🕉️ **Read • Listen • Learn • Reflect**

## GitHub Pages deployment

The app is hosted from this repository at https://aashupokemon.github.io/Bhagvad-Gita/ . The Pages workflow builds and deploys on every push to main; it can also be started manually in the Actions tab.

`npm run build:pages` creates `dist-pages/` using the same lesson components and content as the local app. All Pages assets use the `/Bhagvad-Gita/` base path. This is a browser-only build and requires no server, API key or account. The existing `npm run build` command remains available for the original Workers build.

## Read aloud and languages

Use the Language selector for English, Hindi, Spanish, French or German. The bundled JSON language packs cover the lesson and story text, questions, answer choices, feedback and interface labels. Sanskrit and transliteration are preserved. Translations were generated locally with Argos/OPUS models through CTranslate2, with corrections to navigation labels and selected passages. They remain machine translations and have not had a complete scholarly or native-speaker review; English remains available for comparison.

Listen reads the currently displayed content using the browser Speech Synthesis API. Pause, Resume, Stop, speed and installed voice selection are available. Changing the chapter, lesson tab, learning mode or language stops playback. Sanskrit and transliteration are excluded from speech rather than promising accurate recitation. Voices depend on the browser and operating system; a missing language voice produces guidance instead of deliberately selecting a different language. Some device voices may use online speech services. Translation switching itself needs no translation API or server.

Run `node scripts/check-accessibility.mjs` to check all four translated language packs, React text translation, Sanskrit preservation, retained event handlers and speech chunking. These checks do not validate physical audio playback on every device.

Translation model provenance: https://github.com/argosopentech/argospm-index . Language pairs and versions: en-hi 1.1, en-es 1.0, en-fr 1.9, en-de 1.3. Models are not distributed with the app. OPUS-MT attribution: Jörg Tiedemann and Santhosh Thottingal, “OPUS-MT — Building open translation services for the World,” EAMT 2020. Model documentation identifies the original OPUS models as CC-BY 4.0.

## Creative activities

Colorit includes three original AI-generated outline sketches with a touch/mouse/pen brush, custom colors, brush sizes, 30-step undo, reset, and PNG export. Sketch drafts remain during the current visit, including switching tabs; reload clears them. White paints over color while preserving outlines. Download outlines to color on paper.

Gallery includes an original colored Krishna–Arjuna illustration and the three outline artworks. These are symbolic artistic interpretations. Quotes offers three original educational paraphrases (2.47, 6.26, 17.15), verse context links, localized PNG downloads and device sharing where supported. Unsupported sharing falls back to downloading. The new creative interface and quotes are translated into all four supported translation languages.

Hindi speech requires a Hindi voice exposed by the device/browser. Voice lists refresh after delayed loading, and Listen checks the latest list; an English voice is never selected for Hindi text. Install a Hindi speech voice in device settings if none is available. Physical audio playback still depends on the device.
