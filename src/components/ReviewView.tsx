import React, { useState } from 'react';
import { Question } from '../types/bept';
import { 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Flag, 
  BookOpen, 
  Volume2, 
  ChevronRight,
  Filter,
  Lightbulb,
  Search
} from 'lucide-react';
import { AudioPlayerWidget } from './AudioPlayerWidget';

interface ReviewViewProps {
  questions: Question[];
  userAnswers: Record<number, 'A' | 'B' | 'C' | 'D'>;
  flags: Record<number, boolean>;
  onBackToDashboard: () => void;
}

export const ReviewView: React.FC<ReviewViewProps> = ({
  questions,
  userAnswers,
  flags,
  onBackToDashboard,
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'incorrect' | 'flagged' | 'listening' | 'structure' | 'reading'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeQuestionId, setActiveQuestionId] = useState<number>(questions[0]?.id || 1);

  const filteredQuestions = questions.filter((q) => {
    const userAns = userAnswers[q.id];
    const isCorrect = userAns === q.correctAnswer;
    const isFlagged = Boolean(flags[q.id]);

    if (filterMode === 'incorrect' && isCorrect) return false;
    if (filterMode === 'flagged' && !isFlagged) return false;
    if (filterMode === 'listening' && q.section !== 'listening') return false;
    if (filterMode === 'structure' && q.section !== 'structure') return false;
    if (filterMode === 'reading' && q.section !== 'reading') return false;

    if (searchQuery.trim() !== '') {
      const qText = `${q.prompt} ${q.subSection} ${q.explanation}`.toLowerCase();
      return qText.includes(searchQuery.toLowerCase());
    }

    return true;
  });

  const selectedQuestion = questions.find((q) => q.id === activeQuestionId) || filteredQuestions[0] || questions[0];

  const totalQuestions = questions.length;
  const correctCount = questions.filter((q) => userAnswers[q.id] === q.correctAnswer).length;
  const incorrectCount = totalQuestions - correctCount;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      
      {/* Header Bar */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="text-xs text-slate-500 flex items-center gap-2 mb-1">
            <span>BEPT UB</span>
            <span>/</span>
            <span className="font-semibold text-blue-900">Kunci Jawaban & Pembahasan Lengkap</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
            Bank Kunci Jawaban & Pembahasan 140 Soal
          </h1>
          <p className="text-xs text-slate-600 mt-0.5">
            Pelajari alasan gramatikal, transkrip audio percakapan, dan strategi melacak bukti bacaan.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-3.5 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{correctCount} Benar</span>
          </div>
          <div className="px-3.5 py-1.5 rounded-lg bg-rose-50 text-rose-800 border border-rose-200 text-xs font-semibold flex items-center gap-1.5">
            <XCircle className="w-4 h-4 text-rose-600" />
            <span>{incorrectCount} Salah / Kosong</span>
          </div>
        </div>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-xs flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
        
        {/* Filter Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5">
          {[
            { id: 'all', label: `Semua (${totalQuestions})` },
            { id: 'incorrect', label: `Salah (${incorrectCount})` },
            { id: 'flagged', label: `Flagged (${Object.values(flags).filter(Boolean).length})` },
            { id: 'listening', label: 'Listening (50)' },
            { id: 'structure', label: 'Structure (40)' },
            { id: 'reading', label: 'Reading (50)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterMode(tab.id as any)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                filterMode === tab.id
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative min-w-56">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari topik grammar atau kata kunci..."
            className="w-full pl-9 pr-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900"
          />
        </div>

      </div>

      {/* Split Review Explorer: Left Question Grid List, Right Detail Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left List of Questions (4 cols) */}
        <div className="lg:col-span-4 bg-white rounded-xl border border-slate-200 shadow-xs p-3 space-y-3">
          <div className="text-xs font-bold text-slate-600 uppercase tracking-wider px-2">
            Pilih Nomor Soal ({filteredQuestions.length})
          </div>

          <div className="max-h-[620px] overflow-y-auto space-y-1.5 pr-1">
            {filteredQuestions.length === 0 ? (
              <div className="p-8 text-center text-xs text-slate-400">
                Tidak ada soal yang cocok dengan filter ini.
              </div>
            ) : (
              filteredQuestions.map((q) => {
                const userAns = userAnswers[q.id];
                const isCorrect = userAns === q.correctAnswer;
                const isSelected = q.id === selectedQuestion.id;
                const isFlagged = Boolean(flags[q.id]);

                return (
                  <button
                    key={q.id}
                    onClick={() => setActiveQuestionId(q.id)}
                    className={`w-full p-2.5 rounded-lg border text-left transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'border-blue-900 bg-blue-50/70 ring-1 ring-blue-900/20'
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <span className="font-mono text-xs font-bold w-7 text-slate-600">
                        #{q.id}
                      </span>
                      <div className="truncate">
                        <div className="text-xs font-semibold text-slate-800 truncate">
                          {q.title || `Soal ${q.id}`}
                        </div>
                        <div className="text-[11px] text-slate-400 truncate">
                          {q.subSection}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {isFlagged && (
                        <Flag className="w-3 h-3 text-rose-500 fill-rose-500" />
                      )}

                      {userAns ? (
                        isCorrect ? (
                          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/80 px-1.5 py-0.5 rounded">
                            Benar ({userAns})
                          </span>
                        ) : (
                          <span className="text-[11px] font-bold text-rose-700 bg-rose-100/80 px-1.5 py-0.5 rounded">
                            Salah ({userAns})
                          </span>
                        )
                      ) : (
                        <span className="text-[11px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                          Kosong
                        </span>
                      )}
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </div>

        {/* Right Detail Pane (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-xl border border-slate-200 shadow-xs p-6 space-y-6">
          
          {/* Header of Active Question */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200">
            <div>
              <div className="text-xs text-blue-900 font-bold uppercase tracking-wider">
                {selectedQuestion.subSection} · Soal #{selectedQuestion.id}
              </div>
              <h2 className="text-lg font-bold text-slate-900 font-display mt-0.5">
                {selectedQuestion.title || `Question ${selectedQuestion.id}`}
              </h2>
            </div>

            {/* User status badge */}
            <div className="flex items-center gap-2">
              {userAnswers[selectedQuestion.id] === selectedQuestion.correctAnswer ? (
                <div className="px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Jawaban Anda Benar ({userAnswers[selectedQuestion.id]})</span>
                </div>
              ) : (
                <div className="px-3 py-1 rounded-md bg-rose-50 text-rose-700 border border-rose-200 text-xs font-bold flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 text-rose-600" />
                  <span>
                    {userAnswers[selectedQuestion.id]
                      ? `Jawaban Anda Salah (${userAnswers[selectedQuestion.id]})`
                      : 'Belum Dijawab Saat Ujian'}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Audio Player for Listening */}
          {selectedQuestion.section === 'listening' && (
            <div className="space-y-3">
              <AudioPlayerWidget
                questionId={selectedQuestion.id}
                segments={selectedQuestion.audioScript}
                isPracticeMode={true}
              />
              
              {/* Full Transcript Box */}
              {selectedQuestion.audioScript && (
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                  <div className="text-xs font-bold text-blue-900 uppercase flex items-center gap-1.5">
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Naskah Percakapan Lengkap (Audio Transcript):</span>
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-700 leading-relaxed">
                    {selectedQuestion.audioScript.map((seg, idx) => (
                      <div key={idx} className="flex gap-2">
                        <span className="font-bold text-slate-900 min-w-16 shrink-0">
                          {seg.speaker}:
                        </span>
                        <span className="text-slate-800">{seg.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Reading Passage Container */}
          {selectedQuestion.section === 'reading' && selectedQuestion.passageText && (
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2 text-xs sm:text-sm text-slate-700 max-h-60 overflow-y-auto font-serif leading-relaxed">
              <div className="font-bold text-slate-900 font-sans pb-1 border-b border-slate-200 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-900" />
                <span>{selectedQuestion.passageTitle || 'Bacaan Soal'}</span>
              </div>
              <div className="whitespace-pre-line leading-relaxed">
                {selectedQuestion.passageText}
              </div>
            </div>
          )}

          {/* Question Prompt */}
          <div className="p-4 bg-slate-100/70 rounded-lg border border-slate-200">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Kalimat Soal:
            </div>
            <div className="text-sm font-semibold text-slate-900 leading-relaxed">
              {selectedQuestion.prompt}
            </div>
          </div>

          {/* Options List with Highlighted Correct and User Answer */}
          <div className="space-y-2">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Pilihan Jawaban:
            </div>

            {selectedQuestion.options.map((opt) => {
              const isCorrectOpt = opt.key === selectedQuestion.correctAnswer;
              const isUserOpt = userAnswers[selectedQuestion.id] === opt.key;

              let style = 'bg-white border-slate-200 text-slate-700';
              if (isCorrectOpt) {
                style = 'bg-emerald-50/80 border-emerald-500 text-emerald-950 font-semibold ring-1 ring-emerald-500/20';
              } else if (isUserOpt && !isCorrectOpt) {
                style = 'bg-rose-50/80 border-rose-400 text-rose-950 line-through';
              }

              return (
                <div
                  key={opt.key}
                  className={`p-3 rounded-lg border text-xs sm:text-sm flex items-start justify-between gap-3 ${style}`}
                >
                  <div className="flex items-start gap-2">
                    <span className="font-bold uppercase w-5 shrink-0">
                      {opt.key}.
                    </span>
                    <span>{opt.text}</span>
                  </div>

                  <div className="shrink-0 flex items-center gap-2 text-xs">
                    {isCorrectOpt && (
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                        Kunci Jawaban Benar
                      </span>
                    )}
                    {isUserOpt && !isCorrectOpt && (
                      <span className="text-[11px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded">
                        Pilihan Anda (Salah)
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Explanation in Indonesian */}
          <div className="p-5 bg-blue-50/50 rounded-xl border border-blue-200/80 space-y-3">
            <div className="flex items-center gap-2 text-blue-900 font-bold text-xs uppercase tracking-wider">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <span>Pembahasan Analitis & Aturan Tata Bahasa:</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {selectedQuestion.explanation}
            </p>

            {selectedQuestion.strategyTip && (
              <div className="pt-2 border-t border-blue-200/60 text-xs text-blue-900 font-medium flex items-start gap-2">
                <span className="font-bold shrink-0">Tips Trik BEPT:</span>
                <span>{selectedQuestion.strategyTip}</span>
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
