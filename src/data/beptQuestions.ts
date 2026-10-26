import { Question, SectionType } from '../types/bept';
import { listeningQuestions } from './questions/listeningQuestions';
import { structureQuestions } from './questions/structureQuestions';
import { readingQuestions } from './questions/readingQuestions';

export const allBeptQuestions: Question[] = [
  ...listeningQuestions,
  ...structureQuestions,
  ...readingQuestions,
];

export function getQuestionById(id: number): Question | undefined {
  return allBeptQuestions.find(q => q.id === id);
}

export function getQuestionsBySection(section: SectionType): Question[] {
  return allBeptQuestions.filter(q => q.section === section);
}

export const SECTION_METADATA = {
  listening: {
    name: 'Section 1: Listening Comprehension',
    shortName: 'Listening',
    count: 50,
    startId: 1,
    endId: 50,
    timeMinutes: 35,
    focus: 'Pemahaman percakapan dan penyampaian lisan dalam bahasa Inggris akademis.',
  },
  structure: {
    name: 'Section 2: Structure and Written Expression',
    shortName: 'Structure',
    count: 40,
    startId: 51,
    endId: 90,
    timeMinutes: 25,
    focus: 'Tata bahasa (grammar), struktur kalimat, dan identifikasi ekspresi tertulis.',
  },
  reading: {
    name: 'Section 3: Reading Comprehension',
    shortName: 'Reading',
    count: 50,
    startId: 91,
    endId: 140,
    timeMinutes: 55,
    focus: 'Pemahaman membaca teks akademis dan artikel ilmiah pendek.',
  },
};
