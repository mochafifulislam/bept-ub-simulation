import React from 'react';
import { ExamAttempt } from '../types/bept';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  BookOpen, 
  RotateCcw, 
  Clock, 
  ArrowRight,
  TrendingUp,
  FileText
} from 'lucide-react';

interface ScoreReportViewProps {
  attempt: ExamAttempt;
  onOpenReview: () => void;
  onRetakeExam: () => void;
  onGoToStrategy: () => void;
  onGoToResume: () => void;
}

export const ScoreReportView: React.FC<ScoreReportViewProps> = ({
  attempt,
  onOpenReview,
  onRetakeExam,
  onGoToStrategy,
  onGoToResume,
}) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins} menit ${secs} detik`;
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      
      {/* Official UB CBT Attempt Banner (matches page 10 of PDF) */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-slate-100 gap-2">
          <div>
            <div className="text-xs text-slate-500 flex items-center gap-2">
              <span>E-CBT UB</span>
              <span>/</span>
              <span>BEPT</span>
              <span>/</span>
              <span className="font-semibold text-blue-900">Hasil & Konversi Skor</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 font-display mt-1">
              Brawijaya English Proficiency Test (BEPT)
            </h1>
          </div>
          <div className="text-xs text-right text-slate-500">
            <div>State: <span className="font-semibold text-emerald-700">Finished</span></div>
            <div>Time taken: <span className="font-mono font-medium text-slate-800">{formatTime(attempt.timeSpentSeconds)}</span></div>
          </div>
        </div>

        {/* Big Score Showcase Card */}
        <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
              Total Scaled TOEFL ITP Score
            </span>
            <div className="flex items-baseline gap-3 justify-center md:justify-start">
              <span className="text-5xl sm:text-6xl font-extrabold font-mono text-white tracking-tight tabular-nums">
                {attempt.totalScore}
              </span>
              <span className="text-slate-400 text-sm font-medium">
                / 677 (Rentang 310 - 677)
              </span>
            </div>
            <p className="text-xs text-slate-300 max-w-md leading-relaxed">
              Dihitung menggunakan matriks konversi resmi skala TOEFL ITP 140 butir soal Universitas Brawijaya.
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-end gap-3 shrink-0">
            <div className="px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-xs border border-white/20 text-xs font-bold text-amber-300 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Predikat CEFR: Level {attempt.cefrLevel}</span>
            </div>
            <div className="text-xs text-slate-300">
              Akurasi: <span className="font-mono font-bold text-white">{attempt.percentage}%</span> ({attempt.rawScoreListening + attempt.rawScoreStructure + attempt.rawScoreReading} / {attempt.totalQuestions} soal)
            </div>
          </div>
        </div>

        {/* Section Score Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          
          {/* Section 1: Listening */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-blue-900 uppercase">
                Section 1: Listening
              </span>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-900">
                Scaled {attempt.scaledListening}
              </span>
            </div>
            <div className="text-2xl font-bold font-mono text-slate-900 tabular-nums">
              {attempt.rawScoreListening} <span className="text-xs text-slate-400 font-sans">/ 50 benar</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
              <div 
                className="bg-blue-600 h-full rounded-full" 
                style={{ width: `${(attempt.rawScoreListening / 50) * 100}%` }}
              />
            </div>
            <div className="text-[11px] text-slate-500">
              Skala standar: 31 – 68
            </div>
          </div>

          {/* Section 2: Structure */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-purple-900 uppercase">
                Section 2: Structure
              </span>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-900">
                Scaled {attempt.scaledStructure}
              </span>
            </div>
            <div className="text-2xl font-bold font-mono text-slate-900 tabular-nums">
              {attempt.rawScoreStructure} <span className="text-xs text-slate-400 font-sans">/ 40 benar</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
              <div 
                className="bg-purple-600 h-full rounded-full" 
                style={{ width: `${(attempt.rawScoreStructure / 40) * 100}%` }}
              />
            </div>
            <div className="text-[11px] text-slate-500">
              Skala standar: 31 – 68
            </div>
          </div>

          {/* Section 3: Reading */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-900 uppercase">
                Section 3: Reading
              </span>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-900">
                Scaled {attempt.scaledReading}
              </span>
            </div>
            <div className="text-2xl font-bold font-mono text-slate-900 tabular-nums">
              {attempt.rawScoreReading} <span className="text-xs text-slate-400 font-sans">/ 50 benar</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
              <div 
                className="bg-emerald-600 h-full rounded-full" 
                style={{ width: `${(attempt.rawScoreReading / 50) * 100}%` }}
              />
            </div>
            <div className="text-[11px] text-slate-500">
              Skala standar: 31 – 67
            </div>
          </div>

        </div>

        {/* Universitas Brawijaya Graduation Requirements Check */}
        <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-3">
          <h3 className="text-sm font-bold text-slate-900 font-display flex items-center gap-2">
            <Award className="w-4 h-4 text-blue-900" />
            <span>Kesesuaian Standar Kelulusan Universitas Brawijaya</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            
            {/* S1 */}
            <div className={`p-3 rounded-lg border ${
              attempt.ubPassingStatus.s1Pass 
                ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950' 
                : 'bg-rose-50/70 border-rose-300 text-rose-950'
            }`}>
              <div className="font-semibold text-slate-700">Program Sarjana (S1 UB)</div>
              <div className="text-[11px] text-slate-500">Syarat minimal: 450</div>
              <div className="mt-2 flex items-center gap-1.5 font-bold">
                {attempt.ubPassingStatus.s1Pass ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700">MEMENUHI SYARAT</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-rose-600" />
                    <span className="text-rose-700">BELUM MEMENUHI</span>
                  </>
                )}
              </div>
            </div>

            {/* S2 */}
            <div className={`p-3 rounded-lg border ${
              attempt.ubPassingStatus.s2Pass 
                ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950' 
                : 'bg-rose-50/70 border-rose-300 text-rose-950'
            }`}>
              <div className="font-semibold text-slate-700">Program Magister (S2 UB)</div>
              <div className="text-[11px] text-slate-500">Syarat minimal: 500</div>
              <div className="mt-2 flex items-center gap-1.5 font-bold">
                {attempt.ubPassingStatus.s2Pass ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700">MEMENUHI SYARAT</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-rose-600" />
                    <span className="text-rose-700">BELUM MEMENUHI</span>
                  </>
                )}
              </div>
            </div>

            {/* S3 */}
            <div className={`p-3 rounded-lg border ${
              attempt.ubPassingStatus.s3Pass 
                ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950' 
                : 'bg-rose-50/70 border-rose-300 text-rose-950'
            }`}>
              <div className="font-semibold text-slate-700">Program Doktoral (S3 UB)</div>
              <div className="text-[11px] text-slate-500">Syarat minimal: 550</div>
              <div className="mt-2 flex items-center gap-1.5 font-bold">
                {attempt.ubPassingStatus.s3Pass ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700">MEMENUHI SYARAT</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-rose-600" />
                    <span className="text-rose-700">BELUM MEMENUHI</span>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Primary Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="button"
          onClick={onRetakeExam}
          className="w-full sm:w-auto px-5 py-2.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Ulangi Simulasi Tes</span>
        </button>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <button
            type="button"
            onClick={onGoToStrategy}
            className="w-full sm:w-auto px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
          >
            Pelajari Strategi
          </button>
          
          <button
            type="button"
            onClick={onOpenReview}
            className="w-full sm:w-auto px-6 py-2.5 bg-blue-900 hover:bg-blue-800 text-white rounded-lg text-xs font-bold shadow-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>Tinjau Kunci Jawaban & Pembahasan Lengkap</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};
