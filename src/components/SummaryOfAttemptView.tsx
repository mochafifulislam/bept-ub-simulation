import React, { useState } from 'react';
import { Question } from '../types/bept';
import { Flag, ArrowLeft, Send, CheckCircle2, AlertCircle, X } from 'lucide-react';

interface SummaryOfAttemptViewProps {
  questions: Question[];
  answers: Record<number, 'A' | 'B' | 'C' | 'D'>;
  flags: Record<number, boolean>;
  onReturnToQuestion: (questionId: number) => void;
  onSubmitExam: () => void;
  timeRemainingSeconds: number;
}

export const SummaryOfAttemptView: React.FC<SummaryOfAttemptViewProps> = ({
  questions,
  answers,
  flags,
  onReturnToQuestion,
  onSubmitExam,
  timeRemainingSeconds,
}) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [filterType, setFilterType] = useState<'all' | 'unanswered' | 'flagged'>('all');

  const answeredCount = Object.keys(answers).length;
  const unansweredCount = questions.length - answeredCount;
  const flaggedCount = Object.values(flags).filter(Boolean).length;

  const filteredQuestions = questions.filter((q) => {
    if (filterType === 'unanswered') {
      return !answers[q.id];
    }
    if (filterType === 'flagged') {
      return Boolean(flags[q.id]);
    }
    return true;
  });

  const formatTimer = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      
      {/* Top Banner / Breadcrumb */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="text-xs text-slate-500 flex items-center gap-2 mb-1">
            <span>E-CBT UB</span>
            <span>/</span>
            <span>BEPT</span>
            <span>/</span>
            <span className="font-semibold text-blue-900">Summary of attempt</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
            Summary of attempt
          </h1>
          <p className="text-xs text-slate-600 mt-0.5">
            Periksa seluruh status 140 soal sebelum melakukan pengumpulan jawaban akhir.
          </p>
        </div>

        {/* Timer Widget */}
        <div className="px-4 py-2.5 rounded-lg bg-slate-900 text-white flex items-center gap-3 shrink-0">
          <span className="text-xs text-slate-300 font-medium">Time left</span>
          <span className="font-mono text-base font-bold text-amber-400 tabular-nums">
            {formatTimer(timeRemainingSeconds)}
          </span>
        </div>
      </div>

      {/* Metrics / Filter Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <button
          type="button"
          onClick={() => setFilterType('all')}
          className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
            filterType === 'all'
              ? 'bg-blue-50/80 border-blue-400 text-blue-950 shadow-xs'
              : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
          }`}
        >
          <div className="text-xs text-slate-500 font-medium">Total Soal</div>
          <div className="text-xl font-bold text-slate-900 font-mono tabular-nums">
            {questions.length} Soal
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">
            {answeredCount} Terjawab ({Math.round((answeredCount / questions.length) * 100)}%)
          </div>
        </button>

        <button
          type="button"
          onClick={() => setFilterType('unanswered')}
          className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
            filterType === 'unanswered'
              ? 'bg-amber-50/80 border-amber-400 text-amber-950 shadow-xs'
              : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
          }`}
        >
          <div className="text-xs text-amber-700 font-medium">Belum Dijawab</div>
          <div className="text-xl font-bold text-amber-950 font-mono tabular-nums">
            {unansweredCount} Soal
          </div>
          <div className="text-[11px] text-amber-800 mt-0.5">
            {unansweredCount === 0 ? 'Semua soal terisi rapi!' : 'Periksa kembali nomor ini'}
          </div>
        </button>

        <button
          type="button"
          onClick={() => setFilterType('flagged')}
          className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
            filterType === 'flagged'
              ? 'bg-rose-50/80 border-rose-400 text-rose-950 shadow-xs'
              : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
          }`}
        >
          <div className="text-xs text-rose-700 font-medium flex items-center gap-1.5">
            <Flag className="w-3 h-3 text-rose-600 fill-rose-600" />
            <span>Ditandai (Flagged)</span>
          </div>
          <div className="text-xl font-bold text-rose-950 font-mono tabular-nums">
            {flaggedCount} Soal
          </div>
          <div className="text-[11px] text-rose-800 mt-0.5">
            Perlu dicek ulang sebelum selesai
          </div>
        </button>
      </div>

      {/* Official Summary Table (matches page 8 and 9 of PDF) */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Daftar Soal & Status Pengerjaan ({filteredQuestions.length})
          </span>
          <span className="text-xs text-slate-500">
            Klik baris untuk langsung menuju soal
          </span>
        </div>

        <div className="max-h-96 overflow-y-auto divide-y divide-slate-100 text-sm">
          {filteredQuestions.length === 0 ? (
            <div className="py-12 text-center text-slate-500 text-xs">
              Tidak ada soal dengan filter ini.
            </div>
          ) : (
            filteredQuestions.map((q) => {
              const hasAnswer = Boolean(answers[q.id]);
              const isFlagged = Boolean(flags[q.id]);

              return (
                <div
                  key={q.id}
                  onClick={() => onReturnToQuestion(q.id)}
                  className="px-5 py-3 hover:bg-slate-50/90 flex items-center justify-between cursor-pointer transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 font-mono text-xs font-bold text-slate-600 group-hover:text-blue-900">
                      #{q.id}
                    </span>
                    <span className="font-medium text-slate-800 group-hover:text-blue-900">
                      Question {q.id}
                    </span>
                    <span className="text-xs text-slate-400 hidden sm:inline">
                      ({q.subSection})
                    </span>
                    {isFlagged && (
                      <span className="inline-flex items-center gap-1 text-[11px] text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                        <Flag className="w-2.5 h-2.5 fill-rose-600 text-rose-600" />
                        Flagged
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-semibold ${
                        hasAnswer ? 'text-slate-900' : 'text-slate-400 italic'
                      }`}
                    >
                      {hasAnswer ? 'Answer saved' : 'Not yet answered'}
                    </span>
                    <span className="text-xs text-blue-700 font-medium group-hover:underline">
                      Periksa &rarr;
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Action Buttons (matches page 9 of PDF) */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <button
          type="button"
          onClick={() => onReturnToQuestion(1)}
          className="w-full sm:w-auto px-5 py-2.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold rounded-lg text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to attempt</span>
        </button>

        <button
          type="button"
          onClick={() => setShowConfirmModal(true)}
          className="w-full sm:w-auto px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs shadow-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
        >
          <Send className="w-4 h-4" />
          <span>Submit all and finish</span>
        </button>
      </div>

      {/* Confirmation Modal (from page 9 of PDF) */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <h3 className="text-base font-bold text-slate-900 font-display">
                Submit all your answers and finish?
              </h3>
              <button
                onClick={() => setShowConfirmModal(false)}
                className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs text-slate-700">
              <p className="leading-relaxed">
                Once you submit your answers, you won't be able to change them.
              </p>

              {unansweredCount > 0 ? (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-2.5 text-amber-900">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold">
                      Questions without a response: {unansweredCount}
                    </div>
                    <div className="mt-0.5 text-amber-800">
                      Disarankan untuk memilih jawaban pada semua soal karena tidak ada pengurangan nilai untuk jawaban yang salah.
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-2.5 text-emerald-900">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">
                    Semua 140 soal telah terisi lengkap!
                  </span>
                </div>
              )}
            </div>

            <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowConfirmModal(false);
                  onSubmitExam();
                }}
                className="px-5 py-2 text-xs font-bold text-white bg-blue-900 hover:bg-blue-800 rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                Submit all and finish
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
