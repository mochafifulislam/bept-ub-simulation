import React, { useState, useEffect } from 'react';
import { 
  Question, 
  SectionType, 
  ExamAttempt 
} from './types/bept';
import { 
  allBeptQuestions, 
  getQuestionsBySection,
  SECTION_METADATA 
} from './data/beptQuestions';
import { convertRawToScaled } from './data/toeflScoring';
import { Navbar, ActiveTab } from './components/Navbar';
import { ECBTExamView } from './components/ECBTExamView';
import { SummaryOfAttemptView } from './components/SummaryOfAttemptView';
import { ScoreReportView } from './components/ScoreReportView';
import { ReviewView } from './components/ReviewView';
import { StrategyView } from './components/StrategyView';
import { ResumeMateriView } from './components/ResumeMateriView';
import { PracticeSectionView } from './components/PracticeSectionView';
import { ScoreHistoryView } from './components/ScoreHistoryView';
import { StartAttemptModal } from './components/StartAttemptModal';
import { 
  BookOpen, 
  Clock, 
  Award, 
  Layers, 
  Volume2, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle,
  ShieldCheck,
  Zap,
  Sparkles
} from 'lucide-react';

const STORAGE_KEY_ATTEMPTS = 'bept_ub_exam_attempts_v1';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('exam');
  const [examStatus, setExamStatus] = useState<'intro' | 'testing' | 'summary' | 'result'>('intro');
  const [activeQuestions, setActiveQuestions] = useState<Question[]>(allBeptQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>({});
  const [flags, setFlags] = useState<Record<number, boolean>>({});
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState<number>(7200); // 120 mins = 7200s
  const [totalAllocatedSeconds, setTotalAllocatedSeconds] = useState<number>(7200);
  const [examMode, setExamMode] = useState<'full' | 'listening' | 'structure' | 'reading'>('full');
  const [startModalOpen, setStartModalOpen] = useState<boolean>(false);
  const [latestAttempt, setLatestAttempt] = useState<ExamAttempt | null>(null);
  const [historyAttempts, setHistoryAttempts] = useState<ExamAttempt[]>([]);

  // Load history from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ATTEMPTS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setHistoryAttempts(parsed);
        }
      }
    } catch (e) {
      console.warn('Failed to load history from localStorage', e);
    }
  }, []);

  // Save history to localStorage
  const saveAttemptToHistory = (newAttempt: ExamAttempt) => {
    const updated = [newAttempt, ...historyAttempts];
    setHistoryAttempts(updated);
    try {
      localStorage.setItem(STORAGE_KEY_ATTEMPTS, JSON.stringify(updated));
    } catch (e) {
      console.warn('Failed to save history to localStorage', e);
    }
  };

  // Exam Countdown Timer
  useEffect(() => {
    let timer: number | null = null;
    if (examStatus === 'testing' && timeRemainingSeconds > 0) {
      timer = window.setInterval(() => {
        setTimeRemainingSeconds((prev) => {
          if (prev <= 1) {
            // Auto submit when time expires
            handleFinishAndScore();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timer !== null) clearInterval(timer);
    };
  }, [examStatus, timeRemainingSeconds]);

  // Start Full Exam Setup
  const handleOpenStartFullExamModal = () => {
    setExamMode('full');
    setActiveQuestions(allBeptQuestions);
    setStartModalOpen(true);
  };

  // Start Single Section Drill
  const handleStartSectionQuiz = (section: SectionType) => {
    const sectionQuestions = getQuestionsBySection(section);
    setActiveQuestions(sectionQuestions);
    setExamMode(section);
    
    // Set section duration
    let dur = 35; // default listening
    if (section === 'structure') dur = 25;
    if (section === 'reading') dur = 55;
    
    setTotalAllocatedSeconds(dur * 60);
    setTimeRemainingSeconds(dur * 60);
    setAnswers({});
    setFlags({});
    setCurrentQuestionIndex(0);
    setExamStatus('testing');
    setActiveTab('exam');
  };

  // Execute Start Attempt after modal confirmation
  const handleConfirmStartAttempt = () => {
    setStartModalOpen(false);
    setAnswers({});
    setFlags({});
    setCurrentQuestionIndex(0);

    const seconds = examMode === 'full' ? 7200 : totalAllocatedSeconds;
    setTimeRemainingSeconds(seconds);
    setTotalAllocatedSeconds(seconds);
    setExamStatus('testing');
    setActiveTab('exam');
  };

  // Select Answer
  const handleSelectAnswer = (questionId: number, answer: 'A' | 'B' | 'C' | 'D') => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  // Clear Answer (matches "clear my choice" in UB guide)
  const handleClearAnswer = (questionId: number) => {
    setAnswers((prev) => {
      const copy = { ...prev };
      delete copy[questionId];
      return copy;
    });
  };

  // Toggle Flag
  const handleToggleFlag = (questionId: number) => {
    setFlags((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  // Navigate to Question
  const handleNavigateQuestion = (index: number) => {
    if (index >= 0 && index < activeQuestions.length) {
      setCurrentQuestionIndex(index);
    }
  };

  // Open Summary of Attempt page
  const handleOpenSummary = () => {
    setExamStatus('summary');
  };

  // Return from summary to specific question
  const handleReturnToQuestion = (questionId: number) => {
    const idx = activeQuestions.findIndex((q) => q.id === questionId);
    if (idx !== -1) {
      setCurrentQuestionIndex(idx);
    }
    setExamStatus('testing');
  };

  // Submit and Calculate Official TOEFL ITP Score
  const handleFinishAndScore = () => {
    let rawL = 0;
    let rawS = 0;
    let rawR = 0;

    allBeptQuestions.forEach((q) => {
      const isCorrect = answers[q.id] === q.correctAnswer;
      if (isCorrect) {
        if (q.section === 'listening') rawL++;
        if (q.section === 'structure') rawS++;
        if (q.section === 'reading') rawR++;
      }
    });

    // If single section drill, scale others proportionately or default
    if (examMode === 'listening') {
      rawS = Math.round((rawL / 50) * 40);
      rawR = rawL;
    } else if (examMode === 'structure') {
      rawL = Math.round((rawS / 40) * 50);
      rawR = Math.round((rawS / 40) * 50);
    } else if (examMode === 'reading') {
      rawL = rawR;
      rawS = Math.round((rawR / 50) * 40);
    }

    const {
      scaledListening,
      scaledStructure,
      scaledReading,
      totalScore,
      cefr,
      ubPassingStatus
    } = convertRawToScaled(rawL, rawS, rawR);

    const timeSpent = totalAllocatedSeconds - timeRemainingSeconds;
    const answeredCount = Object.keys(answers).length;
    const accuracyPercent = Math.round(
      ((rawL + rawS + rawR) / Math.max(1, activeQuestions.length)) * 100
    );

    const newAttempt: ExamAttempt = {
      id: `attempt_${Date.now()}`,
      date: new Date().toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      mode: examMode,
      totalQuestions: activeQuestions.length,
      timeSpentSeconds: Math.max(1, timeSpent),
      answers: { ...answers },
      flags: { ...flags },
      rawScoreListening: rawL,
      rawScoreStructure: rawS,
      rawScoreReading: rawR,
      scaledListening,
      scaledStructure,
      scaledReading,
      totalScore,
      percentage: accuracyPercent,
      cefrLevel: cefr,
      ubPassingStatus,
    };

    setLatestAttempt(newAttempt);
    saveAttemptToHistory(newAttempt);
    setExamStatus('result');
  };

  // Reset or retake exam
  const handleRetakeExam = () => {
    handleOpenStartFullExamModal();
  };

  const handleClearHistory = () => {
    if (window.confirm('Apakah Anda yakin ingin menghapus seluruh riwayat pengerjaan tes?')) {
      setHistoryAttempts([]);
      localStorage.removeItem(STORAGE_KEY_ATTEMPTS);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      
      {/* Universal Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
        }}
        onStartFullExam={handleOpenStartFullExamModal}
        hasActiveExam={examStatus === 'testing' || examStatus === 'summary'}
        onReturnToActiveExam={() => {
          setActiveTab('exam');
        }}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {activeTab === 'exam' && (
          <>
            {examStatus === 'intro' && (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10">
                
                {/* Hero Section */}
                <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-blue-900/50 relative overflow-hidden">
                  <div className="relative z-10 space-y-5 max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-xs font-semibold text-amber-300">
                      <ShieldCheck className="w-4 h-4 text-amber-400" />
                      <span>Standar Resmi Computer-Based Testing Universitas Brawijaya</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
                      Simulasi Brawijaya English Proficiency Test (BEPT)
                    </h1>

                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                      Sistem simulasi ujian presisi tinggi yang mengadaptasi struktur TOEFL ITP Universitas Brawijaya. Terdiri dari 140 butir soal lengkap dengan durasi 120 menit, audio player interaktif, navigasi Moodle E-CBT asli, kunci jawaban, dan pembahasan mendalam.
                    </p>

                    <div className="pt-3 flex flex-wrap items-center gap-4">
                      <button
                        type="button"
                        onClick={handleOpenStartFullExamModal}
                        className="px-7 py-3.5 bg-amber-400 hover:bg-amber-500 text-slate-950 rounded-xl text-sm font-bold shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
                      >
                        <Clock className="w-4 h-4" />
                        <span>Mulai Simulasi 140 Soal (120 Menit)</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <button
                        type="button"
                        onClick={() => setActiveTab('strategy')}
                        className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl text-sm font-semibold transition-colors cursor-pointer"
                      >
                        Pelajari Strategi Pengerjaan
                      </button>
                    </div>
                  </div>
                </div>

                {/* Section Structure Breakdown (from User Brief) */}
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200 pb-3">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
                        Spesifikasi Tes Resmi
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                        Struktur & Distribusi Soal BEPT
                      </h2>
                    </div>
                    <div className="text-xs text-slate-500">
                      Skor Akhir: <span className="font-bold text-blue-900">310 hingga 677</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    
                    {/* Section 1 */}
                    <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
                          <Volume2 className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono font-bold text-blue-900 bg-blue-50 px-2.5 py-1 rounded-full">
                          50 Soal
                        </span>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 font-display">
                          Section 1: Listening Comprehension
                        </h3>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          Pemahaman percakapan pendek kampus, diskusi akademik, dan perkuliahan sains/sejarah.
                        </p>
                      </div>
                      <div className="text-xs text-slate-500 pt-3 border-t border-slate-100 space-y-1">
                        <div>Part A: Short Dialogues (1-30)</div>
                        <div>Part B: Longer Conversations (31-38)</div>
                        <div>Part C: Academic Lectures (39-50)</div>
                      </div>
                    </div>

                    {/* Section 2 */}
                    <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center font-bold">
                          <Layers className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono font-bold text-purple-900 bg-purple-50 px-2.5 py-1 rounded-full">
                          40 Soal
                        </span>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 font-display">
                          Section 2: Structure & Expression
                        </h3>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          Tata bahasa baku (grammar), struktur kalimat rumpang, dan identifikasi ekspresi tertulis salah.
                        </p>
                      </div>
                      <div className="text-xs text-slate-500 pt-3 border-t border-slate-100 space-y-1">
                        <div>Structure: Melengkapi Kalimat (51-65)</div>
                        <div>Written Expression: Error Hunt (66-90)</div>
                        <div>Fokus: Inversi, Tenses, Paralelisme</div>
                      </div>
                    </div>

                    {/* Section 3 */}
                    <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold">
                          <BookOpen className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono font-bold text-emerald-900 bg-emerald-50 px-2.5 py-1 rounded-full">
                          50 Soal
                        </span>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 font-display">
                          Section 3: Reading Comprehension
                        </h3>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          Pemahaman membaca artikel ilmiah dan teks akademis bertaraf universitas.
                        </p>
                      </div>
                      <div className="text-xs text-slate-500 pt-3 border-t border-slate-100 space-y-1">
                        <div>5 Teks Bacaan Akademis (91-140)</div>
                        <div>Soal Main Idea, Detil, & Kosakata</div>
                        <div>Pacing: ~1 menit per pertanyaan</div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Quick Access Action Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  <div 
                    onClick={() => setActiveTab('strategy')}
                    className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-900 hover:shadow-md transition-all cursor-pointer space-y-2 group"
                  >
                    <div className="text-blue-900 font-bold text-sm flex items-center justify-between">
                      <span>Strategi Tiap Bagian Tes</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Aturan emas "Second Speaker", teknik deteksi grammar error, dan trik skimming reading.
                    </p>
                  </div>

                  <div 
                    onClick={() => setActiveTab('resume')}
                    className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-900 hover:shadow-md transition-all cursor-pointer space-y-2 group"
                  >
                    <div className="text-blue-900 font-bold text-sm flex items-center justify-between">
                      <span>Resume Materi Kunci</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Cheat-sheet formula Subject-Verb Agreement, Inversi, Participle, dan 20 kata kunci AWL.
                    </p>
                  </div>

                  <div 
                    onClick={() => setActiveTab('review')}
                    className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-900 hover:shadow-md transition-all cursor-pointer space-y-2 group"
                  >
                    <div className="text-blue-900 font-bold text-sm flex items-center justify-between">
                      <span>Bank Kunci & Pembahasan</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Akses langsung ke seluruh 140 pembahasan analitis tanpa harus menunggu ujian selesai.
                    </p>
                  </div>
                </div>

              </div>
            )}

            {examStatus === 'testing' && (
              <ECBTExamView
                questions={activeQuestions}
                currentQuestionIndex={currentQuestionIndex}
                onNavigateQuestion={handleNavigateQuestion}
                answers={answers}
                onSelectAnswer={handleSelectAnswer}
                onClearAnswer={handleClearAnswer}
                flags={flags}
                onToggleFlag={handleToggleFlag}
                timeRemainingSeconds={timeRemainingSeconds}
                onFinishAttempt={handleOpenSummary}
                isPracticeMode={examMode !== 'full'}
              />
            )}

            {examStatus === 'summary' && (
              <SummaryOfAttemptView
                questions={activeQuestions}
                answers={answers}
                flags={flags}
                onReturnToQuestion={handleReturnToQuestion}
                onSubmitExam={handleFinishAndScore}
                timeRemainingSeconds={timeRemainingSeconds}
              />
            )}

            {examStatus === 'result' && latestAttempt && (
              <ScoreReportView
                attempt={latestAttempt}
                onOpenReview={() => setActiveTab('review')}
                onRetakeExam={handleRetakeExam}
                onGoToStrategy={() => setActiveTab('strategy')}
                onGoToResume={() => setActiveTab('resume')}
              />
            )}
          </>
        )}

        {activeTab === 'practice' && (
          <PracticeSectionView
            onStartSectionQuiz={handleStartSectionQuiz}
            onStartFullExam={handleOpenStartFullExamModal}
          />
        )}

        {activeTab === 'strategy' && (
          <StrategyView
            onStartExam={handleOpenStartFullExamModal}
            onGoToResume={() => setActiveTab('resume')}
          />
        )}

        {activeTab === 'resume' && (
          <ResumeMateriView
            onStartExam={handleOpenStartFullExamModal}
          />
        )}

        {activeTab === 'review' && (
          <ReviewView
            questions={allBeptQuestions}
            userAnswers={answers}
            flags={flags}
            onBackToDashboard={() => {
              setActiveTab('exam');
              setExamStatus('intro');
            }}
          />
        )}

        {activeTab === 'history' && (
          <ScoreHistoryView
            attempts={historyAttempts}
            onSelectAttempt={(att) => {
              setLatestAttempt(att);
              setAnswers(att.answers);
              setFlags(att.flags);
              setExamStatus('result');
              setActiveTab('exam');
            }}
            onStartFullExam={handleOpenStartFullExamModal}
            onClearHistory={handleClearHistory}
          />
        )}
      </main>

      {/* Start Attempt Password Modal (from UB Guide page 3) */}
      <StartAttemptModal
        isOpen={startModalOpen}
        onClose={() => setStartModalOpen(false)}
        onStart={handleConfirmStartAttempt}
        modeName={examMode === 'full' ? 'Brawijaya English Proficiency Test (BEPT)' : `Drill ${examMode}`}
        durationMinutes={examMode === 'full' ? 120 : Math.round(totalAllocatedSeconds / 60)}
        questionCount={activeQuestions.length}
      />

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-700">BEPT Master</span>
            <span>·</span>
            <span>Simulasi Ujian Brawijaya English Proficiency Test</span>
          </div>
          <div className="text-slate-400">
            Mengacu pada panduan resmi E-CBT ecbt.ub.ac.id & format standar TOEFL ITP (310 – 677).
          </div>
        </div>
      </footer>

    </div>
  );
}
