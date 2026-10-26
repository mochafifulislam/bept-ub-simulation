export type SectionType = 'listening' | 'structure' | 'reading';

export type ListeningPart = 'A' | 'B' | 'C';
export type StructurePart = 'structure' | 'written_expression';

export interface QuestionOption {
  key: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface QuestionAudioSegment {
  speaker: string; // e.g. "Man", "Woman", "Narrator", "Professor"
  text: string;
  voiceGender?: 'male' | 'female';
}

export interface Question {
  id: number; // 1 to 140
  section: SectionType;
  subSection: string; // e.g. "Part A: Short Dialogues", "Structure", "Written Expression", "Passage 1: ..."
  questionNumber: number; // 1 to 50, 1 to 40, etc. or global 1 to 140
  title?: string;
  prompt: string; // Question text or sentence with blank / underlined
  options: QuestionOption[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  strategyTip?: string;
  // Specific to Listening
  audioScript?: QuestionAudioSegment[];
  audioQuestionText?: string;
  // Specific to Reading
  passageId?: number;
  passageTitle?: string;
  passageText?: string;
  // Specific to Structure
  grammarTopic?: string;
  underlinedParts?: {
    [key in 'A' | 'B' | 'C' | 'D']?: string;
  };
}

export interface ExamAttempt {
  id: string;
  date: string;
  mode: 'full' | 'listening' | 'structure' | 'reading';
  totalQuestions: number;
  timeSpentSeconds: number;
  answers: Record<number, 'A' | 'B' | 'C' | 'D'>;
  flags: Record<number, boolean>;
  rawScoreListening: number;
  rawScoreStructure: number;
  rawScoreReading: number;
  scaledListening: number;
  scaledStructure: number;
  scaledReading: number;
  totalScore: number; // 310 to 677
  percentage: number;
  cefrLevel: 'A2' | 'B1' | 'B2' | 'C1';
  ubPassingStatus: {
    s1Pass: boolean;
    s2Pass: boolean;
    s3Pass: boolean;
  };
}

export interface SectionStrategy {
  id: string;
  title: string;
  section: SectionType;
  overview: string;
  timeLimit: string;
  numberOfQuestions: number;
  coreRules: {
    rule: string;
    description: string;
    trapToAvoid: string;
    example: {
      question: string;
      correctOption: string;
      reason: string;
    };
  }[];
  stepByStepAction: string[];
}

export interface GrammarResumeTopic {
  id: string;
  category: string;
  title: string;
  frequencyInBEPT: 'Sangat Sering (Tinggi)' | 'Sering' | 'Sedang';
  formula: string;
  explanation: string;
  keySignals: string[];
  commonMistakes: string[];
  examples: {
    incorrect: string;
    correct: string;
    note: string;
  }[];
  quickPractice: {
    question: string;
    options: string[];
    answerIndex: number;
    explanation: string;
  };
}
