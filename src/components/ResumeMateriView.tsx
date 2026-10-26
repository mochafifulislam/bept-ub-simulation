import React, { useState } from 'react';
import { beptResumeMateri } from '../data/beptResumeMateri';
import { GrammarResumeTopic } from '../types/bept';
import { 
  BookOpen, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Lightbulb, 
  HelpCircle, 
  Search,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ResumeMateriViewProps {
  onStartExam: () => void;
}

export const ResumeMateriView: React.FC<ResumeMateriViewProps> = ({ onStartExam }) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(beptResumeMateri[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Interactive quiz state for quick practice
  const [userPracticeAnswers, setUserPracticeAnswers] = useState<Record<string, number>>({});
  const [showPracticeResult, setShowPracticeResult] = useState<Record<string, boolean>>({});

  const filteredTopics = beptResumeMateri.filter((topic) => {
    if (searchQuery.trim() === '') return true;
    const text = `${topic.title} ${topic.formula} ${topic.explanation} ${topic.keySignals.join(' ')}`.toLowerCase();
    return text.includes(searchQuery.toLowerCase());
  });

  const activeTopic = beptResumeMateri.find((t) => t.id === selectedTopicId) || beptResumeMateri[0];

  const handleSelectPracticeOption = (topicId: string, optionIndex: number) => {
    setUserPracticeAnswers((prev) => ({ ...prev, [topicId]: optionIndex }));
    setShowPracticeResult((prev) => ({ ...prev, [topicId]: true }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      
      {/* Header Banner */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="text-xs text-slate-500 flex items-center gap-2 mb-1">
            <span>BEPT UB Preparation</span>
            <span>/</span>
            <span className="font-semibold text-blue-900">Materi Esensial</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
            Resume Materi Kunci Wajib Dikuasai
          </h1>
          <p className="text-xs text-slate-600 mt-0.5">
            Ringkasan formula tata bahasa frekuensi tertinggi, pola jebakan TOEFL, dan kosakata Academic Word List.
          </p>
        </div>

        <button
          type="button"
          onClick={onStartExam}
          className="px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white rounded-lg text-xs font-bold shadow-sm transition-colors cursor-pointer flex items-center gap-2 shrink-0"
        >
          <span>Uji di Simulasi Tes</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Main 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Topic Sidebar (4 cols) */}
        <div className="lg:col-span-4 bg-white rounded-xl border border-slate-200 shadow-xs p-3 space-y-3">
          
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari materi / formula..."
              className="w-full pl-9 pr-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900"
            />
          </div>

          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-2">
            Topik Kunci ({filteredTopics.length})
          </div>

          <div className="max-h-[640px] overflow-y-auto space-y-1.5 pr-1">
            {filteredTopics.map((topic) => {
              const isSelected = topic.id === activeTopic.id;

              return (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopicId(topic.id)}
                  className={`w-full p-3 rounded-lg border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-900 text-white shadow-xs border-blue-900'
                      : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${
                      isSelected ? 'text-amber-300' : 'text-blue-900'
                    }`}>
                      {topic.category}
                    </span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {topic.frequencyInBEPT}
                    </span>
                  </div>

                  <div className="font-bold text-xs leading-snug">
                    {topic.title}
                  </div>
                </button>
              );
            })}
          </div>

        </div>

        {/* Right Active Topic Detail (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
          
          {/* Header */}
          <div className="pb-4 border-b border-slate-200 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">
                {activeTopic.category}
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-xs text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                Frekuensi Muncul: {activeTopic.frequencyInBEPT}
              </span>
            </div>
            
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              {activeTopic.title}
            </h2>
            
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {activeTopic.explanation}
            </p>
          </div>

          {/* Formula Card */}
          <div className="p-4 bg-slate-900 text-white rounded-xl shadow-xs space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Formula Standar BEPT / TOEFL:</span>
            </div>
            <div className="font-mono text-xs sm:text-sm text-emerald-300 font-semibold bg-slate-950 p-3 rounded-lg border border-slate-800 leading-relaxed overflow-x-auto">
              {activeTopic.formula}
            </div>
          </div>

          {/* Key Signals & Clues */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900 font-display flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <span>Kata Sinyal & Indikator Kunci di Soal:</span>
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {activeTopic.keySignals.map((signal, sIdx) => (
                <div
                  key={sIdx}
                  className="p-3 rounded-lg border border-slate-200 bg-slate-50/70 text-xs text-slate-700 leading-relaxed flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                  <span>{signal}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Correct vs Incorrect Comparison Examples */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900 font-display flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              <span>Analisis Jebakan Soal: Salah vs Benar</span>
            </h3>

            <div className="space-y-3">
              {activeTopic.examples.map((ex, exIdx) => (
                <div
                  key={exIdx}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2.5"
                >
                  {/* Incorrect */}
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-rose-900 bg-rose-50/80 p-2.5 rounded-lg border border-rose-200">
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold mr-1">SALAH:</span>
                      <span className="line-through">{ex.incorrect}</span>
                    </div>
                  </div>

                  {/* Correct */}
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-emerald-900 bg-emerald-50/80 p-2.5 rounded-lg border border-emerald-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold mr-1">BENAR:</span>
                      <span className="font-semibold">{ex.correct}</span>
                    </div>
                  </div>

                  {/* Note */}
                  <div className="text-xs text-slate-600 pl-6 pt-0.5 leading-relaxed">
                    <span className="font-bold text-slate-700">Penjelasan:</span> {ex.note}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Quick Practice Box */}
          <div className="p-5 rounded-xl border border-blue-200 bg-blue-50/40 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-wider">
                <HelpCircle className="w-4 h-4 text-blue-900" />
                <span>Kuis Latihan Cepat: Uji Pemahaman Anda</span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium">1 Pertanyaan</span>
            </div>

            <div className="text-xs sm:text-sm font-semibold text-slate-900">
              {activeTopic.quickPractice.question}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {activeTopic.quickPractice.options.map((opt, oIdx) => {
                const userChoice = userPracticeAnswers[activeTopic.id];
                const isSelected = userChoice === oIdx;
                const isChecked = showPracticeResult[activeTopic.id];
                const isCorrectOpt = oIdx === activeTopic.quickPractice.answerIndex;

                let optStyle = 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50';
                if (isChecked) {
                  if (isCorrectOpt) {
                    optStyle = 'bg-emerald-500 text-white border-emerald-600 font-bold';
                  } else if (isSelected && !isCorrectOpt) {
                    optStyle = 'bg-rose-500 text-white border-rose-600 font-bold';
                  }
                }

                return (
                  <button
                    key={oIdx}
                    type="button"
                    onClick={() => handleSelectPracticeOption(activeTopic.id, oIdx)}
                    className={`p-2.5 rounded-lg border text-xs text-left transition-colors cursor-pointer ${optStyle}`}
                  >
                    <span className="font-bold mr-1.5 uppercase">
                      {String.fromCharCode(65 + oIdx)}.
                    </span>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>

            {showPracticeResult[activeTopic.id] && (
              <div className="p-3 bg-white rounded-lg border border-blue-200 text-xs text-slate-800 leading-relaxed space-y-1 animate-in fade-in duration-150">
                <div className="font-bold text-blue-900">
                  {userPracticeAnswers[activeTopic.id] === activeTopic.quickPractice.answerIndex
                    ? 'Tepat sekali! Jawaban Anda Benar.'
                    : 'Kurang tepat. Perhatikan formula di atas.'}
                </div>
                <div>{activeTopic.quickPractice.explanation}</div>
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
