import { moreChapters } from './more-lessons';
export type Chapter = {
  id: number;
  name: string;
  title: string;
  kidTitle: string;
  summary: string;
  lesson: string;
  kids: string;
  practice: string;
  exampleTitle: string;
  example: string;
  kidExampleTitle: string;
  kidExample: string;
  reflect: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  verse: string;
  sanskrit: string;
  transliteration: string;
  meaning: string;
  source: string;
};
const coreChapters: Chapter[] = [
  {
    id: 2,
    name: 'Sankhya Yoga',
    title: 'Your effort. Your superpower.',
    kidTitle: 'Play your best game',
    summary: 'Find a steadier mind by focusing on what you can do.',
    lesson:
      'Arjuna’s uncertainty opens a conversation about the self, wisdom and action. Krishna teaches that we can commit to our responsibilities without treating success as something we fully control. This is not a reason to stop caring or avoid work. We can plan carefully, act sincerely and learn from the outcome, while loosening our grip on praise and rewards.',
    kids: 'Imagine you are planting a seed. You can water it and give it sunlight, but you cannot pull it taller! Krishna teaches us to give our best effort without getting stuck worrying about the prize. Keep trying, learn what helps, and remember that one result does not decide your worth.',
    practice:
      'Choose one task today. Name the effort you can make and one part of the outcome you cannot control.',
    exampleTitle: 'The presentation and the applause',
    example:
      'Mira prepares carefully for a presentation. She checks her facts and rehearses, but the audience is quieter than she hoped. Instead of deciding she has failed, she asks for useful feedback. Her preparation and willingness to improve are hers to choose; everyone’s reaction is not.',
    kidExampleTitle: 'The cricket scoreboard',
    kidExample:
      'Aarav practises his bowling and encourages his teammates. His team still loses. He feels disappointed, then remembers the catches he improved. Next practice, he works on his aim. Playing with care matters even when the scoreboard does not go his way.',
    reflect:
      'If nobody could promise you a prize, what would still make your effort worthwhile?',
    question:
      'You prepare well but do not get the result you hoped for. What fits this lesson?',
    options: [
      'Give up because effort did not matter.',
      'Learn from the result and keep making a sincere effort.',
      'Believe that you can control every outcome.',
    ],
    correct: 1,
    explanation:
      'Sincere action still matters. Verse 2.47 teaches freedom from attachment to rewards and also warns against becoming attached to inaction.',
    verse: '47',
    sanskrit: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥',
    transliteration:
      'karmaṇy evādhikāras te mā phaleṣu kadācana; mā karma-phala-hetur bhūr mā te saṅgo ’stv akarmaṇi.',
    meaning:
      'Your responsibility is to act, without claiming ownership over the fruits of action. Do not let reward be your only motive, and do not turn away from action.',
    source: 'https://www.holy-bhagavad-gita.org/chapter/2/verse/47/',
  },
];

export const chapters: Chapter[] = [...coreChapters, ...moreChapters].sort(
  (a, b) => a.id - b.id,
);
