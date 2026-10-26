import React, { useState } from 'react';
import { beptStrategies, SectionStrategyGuide } from '../data/beptStrategies';
import { 
  CheckCircle2, 
  Lightbulb, 
  Clock, 
  Target, 
  Zap, 
  Volume2, 
  Layers, 
  BookOpen,
  ArrowRight
} from 'lucide-react';

interface StrategyViewProps {
  onStartExam: () => void;
  onGoToResume: () => void;
}

export const StrategyView: React.FC<StrategyViewProps> = ({
  onStartExam,
  onGoToResume,
}) => {
  const [selectedStrategyId, setSelectedStrategyId] = useState<string>('general');

  const currentStrategy = beptStrategies.find((s) => s.id === selectedStrategyId) || beptStrategies[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      
      {/* Header Banner */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="text-xs text-slate-500 flex items-center gap-2 mb-1">
            <span>Panduan Sukses BEPT UB</span>
            <span>/</span>
            <span className="font-semibold text-blue-900">Masterclass Strategi</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
            Strategi Menghadapi Tiap Bagian Tes BEPT
          </h1>
          <p className="text-xs text-slate-600 mt-0.5">
            Panduan taktis teruji untuk menembus skor 550+ pada sistem Computer Based Testing Universitas Brawijaya.
          </p>
        </div>

        <button
          type="button"
          onClick={onStartExam}
          className="px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white rounded-lg text-xs font-bold shadow-sm transition-colors cursor-pointer flex items-center gap-2 shrink-0"
        >
          <span>Praktekkan di Simulasi E-CBT</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Section Navigation Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {beptStrategies.map((strat) => {
          const isSelected = strat.id === selectedStrategyId;

          return (
            <button
              key={strat.id}
              onClick={() => setSelectedStrategyId(strat.id)}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                isSelected
                  ? 'bg-blue-900 text-white shadow-md border-blue-900 ring-2 ring-blue-900/20'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50/70'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[11px] font-bold uppercase tracking-wider ${
                  isSelected ? 'text-amber-300' : 'text-blue-900'
                }`}>
                  {strat.id === 'general' ? 'Panduan Umum' : `Seksi ${strat.id.toUpperCase()}`}
                </span>
                <span className="text-xs font-mono tabular-nums opacity-80">
                  {strat.totalQuestions} Soal
                </span>
              </div>
              <div className="font-bold text-sm truncate">
                {strat.sectionTitle}
              </div>
              <div className={`text-xs mt-1 truncate ${
                isSelected ? 'text-slate-300' : 'text-slate-500'
              }`}>
                {strat.timeAllocation}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Strategy Detail Body */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-8">
        
        {/* Title & Key Metrics Strip */}
        <div className="border-b border-slate-100 pb-6 space-y-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
              {currentStrategy.sectionSubtitle}
            </span>
            <h2 className="text-2xl font-bold text-slate-900 font-display mt-1">
              {currentStrategy.sectionTitle}
            </h2>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              {currentStrategy.overview}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <div className="text-[11px] text-slate-500 font-medium">Alokasi Waktu Resmi</div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">{currentStrategy.timeAllocation}</div>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <div className="text-[11px] text-slate-500 font-medium">Pacing & Ritme Ideal</div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">{currentStrategy.idealPacing}</div>
            </div>
            <div className="p-3 bg-emerald-50/70 rounded-lg border border-emerald-200">
              <div className="text-[11px] text-emerald-800 font-medium">Target Raw Score (550+)</div>
              <div className="text-sm font-bold text-emerald-950 mt-0.5">{currentStrategy.targetRawScore}</div>
            </div>
          </div>
        </div>

        {/* Subsections & Golden Rules */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-slate-900 font-display flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-500" />
            <span>Aturan Emas & Taktik Eksekusi Lapangan</span>
          </h3>

          <div className="space-y-6">
            {currentStrategy.subsections.map((sub, idx) => (
              <div key={idx} className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-4">
                <div>
                  <h4 className="text-base font-bold text-slate-900 font-display">
                    {sub.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    {sub.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sub.goldenRules.map((rule, rIdx) => (
                    <div
                      key={rIdx}
                      className="p-4 bg-white rounded-lg border border-slate-200 shadow-xs space-y-2"
                    >
                      <div className="flex items-start gap-2.5 text-sm font-bold text-slate-900">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{rule.rule}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed pl-6">
                        {rule.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pro Tips Box */}
        <div className="p-5 bg-amber-50/70 rounded-xl border border-amber-200 space-y-3">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
            <Lightbulb className="w-4 h-4 text-amber-600" />
            <span>Pro-Tips Khusus Ujian BEPT di CBT UB</span>
          </div>
          <ul className="space-y-2 text-xs text-amber-950 leading-relaxed list-disc list-inside">
            {currentStrategy.proTips.map((tip, tIdx) => (
              <li key={tIdx} className="leading-relaxed">
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom CTA to Resume Materi */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
          <div className="text-xs text-slate-500">
            Kombinasikan strategi ini dengan penguasaan formula tata bahasa kunci.
          </div>
          <button
            type="button"
            onClick={onGoToResume}
            className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-blue-900" />
            <span>Buka Resume Materi Kunci Wajib Dikuasai</span>
          </button>
        </div>

      </div>

    </div>
  );
};
