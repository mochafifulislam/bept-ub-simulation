import React from 'react';
import { ExamAttempt } from '../types/bept';
import { Award, Clock, Calendar, CheckCircle2, RotateCcw, TrendingUp } from 'lucide-react';

interface ScoreHistoryViewProps {
  attempts: ExamAttempt[];
  onSelectAttempt: (attempt: ExamAttempt) => void;
  onStartFullExam: () => void;
  onClearHistory: () => void;
}

export const ScoreHistoryView: React.FC<ScoreHistoryViewProps> = ({
  attempts,
  onSelectAttempt,
  onStartFullExam,
  onClearHistory,
}) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      
      {/* Header */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="text-xs text-slate-500 flex items-center gap-2 mb-1">
            <span>BEPT UB</span>
            <span>/</span>
            <span className="font-semibold text-blue-900">Riwayat Hasil Pengerjaan</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
            Riwayat Simulasi & Peningkatan Skor
          </h1>
          <p className="text-xs text-slate-600 mt-0.5">
            Pantau perkembangan skor berkala Anda menuju target kelulusan Universitas Brawijaya.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {attempts.length > 0 && (
            <button
              type="button"
              onClick={onClearHistory}
              className="px-4 py-2 border border-slate-300 hover:bg-slate-50 text-slate-600 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
            >
              Hapus Riwayat
            </button>
          )}

          <button
            type="button"
            onClick={onStartFullExam}
            className="px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white rounded-lg text-xs font-bold shadow-sm transition-colors cursor-pointer flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Mulai Tes Baru</span>
          </button>
        </div>
      </div>

      {/* Attempts Table */}
      {attempts.length === 0 ? (
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-900 mx-auto flex items-center justify-center">
            <Award className="w-8 h-8 text-amber-500" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Belum Ada Riwayat Tes
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
              Selesaikan minimal satu sesi simulasi 140 soal atau latihan seksi untuk melihat grafik peningkatan skor Anda.
            </p>
          </div>
          <button
            type="button"
            onClick={onStartFullExam}
            className="px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold rounded-lg shadow-sm transition-colors cursor-pointer inline-flex items-center gap-2"
          >
            <span>Mulai Simulasi 140 Soal Sekarang</span>
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Daftar Riwayat Ujian ({attempts.length})
            </span>
            <span className="text-xs text-slate-500">
              Klik baris untuk meninjau hasil & kunci jawaban
            </span>
          </div>

          <div className="divide-y divide-slate-100 overflow-x-auto text-xs sm:text-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <th className="py-3 px-5">Waktu Ujian</th>
                  <th className="py-3 px-4">Mode Tes</th>
                  <th className="py-3 px-4">Listening</th>
                  <th className="py-3 px-4">Structure</th>
                  <th className="py-3 px-4">Reading</th>
                  <th className="py-3 px-5 font-mono text-right">Skor Total</th>
                  <th className="py-3 px-5 text-center">Status Kelulusan UB</th>
                  <th className="py-3 px-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {attempts.map((att) => (
                  <tr
                    key={att.id}
                    onClick={() => onSelectAttempt(att)}
                    className="hover:bg-slate-50/80 cursor-pointer transition-colors"
                  >
                    <td className="py-3.5 px-5 text-slate-800 font-medium">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{att.date}</span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>Durasi: {formatTime(att.timeSpentSeconds)}</span>
                      </div>
                    </td>

                    <td className="py-3.5 px-4 font-semibold text-slate-700 uppercase text-xs">
                      {att.mode === 'full' ? 'Simulasi 140 Soal' : `Drill ${att.mode}`}
                    </td>

                    <td className="py-3.5 px-4 font-mono">
                      <span className="font-bold text-slate-900">{att.scaledListening}</span>
                      <span className="text-slate-400 text-xs"> ({att.rawScoreListening}/50)</span>
                    </td>

                    <td className="py-3.5 px-4 font-mono">
                      <span className="font-bold text-slate-900">{att.scaledStructure}</span>
                      <span className="text-slate-400 text-xs"> ({att.rawScoreStructure}/40)</span>
                    </td>

                    <td className="py-3.5 px-4 font-mono">
                      <span className="font-bold text-slate-900">{att.scaledReading}</span>
                      <span className="text-slate-400 text-xs"> ({att.rawScoreReading}/50)</span>
                    </td>

                    <td className="py-3.5 px-5 text-right">
                      <span className="text-lg font-extrabold font-mono text-blue-900 tabular-nums">
                        {att.totalScore}
                      </span>
                      <span className="text-xs text-slate-500 font-normal"> / 677</span>
                    </td>

                    <td className="py-3.5 px-5 text-center">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold ${
                        att.ubPassingStatus.s1Pass
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                          : 'bg-rose-50 text-rose-800 border border-rose-200'
                      }`}>
                        <CheckCircle2 className="w-3 h-3" />
                        {att.ubPassingStatus.s1Pass ? 'Lulus S1 UB' : 'Perlu Belajar'}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 text-right">
                      <span className="text-xs font-semibold text-blue-900 hover:underline">
                        Lihat Detail &rarr;
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
};
