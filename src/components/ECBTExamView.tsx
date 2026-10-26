import React, { useState } from 'react';
import { Question } from '../types/bept';
import { 
  Flag, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  Menu, 
  X, 
  Volume2, 
  BookOpen, 
  Layers, 
  Send,
  HelpCircle,
  RotateCcw
} from 'lucide-react';
import { AudioPlayerWidget } from './AudioPlayerWidget';

interface ECBTExamViewProps {
  questions: Question[];
  currentQuestionIndex: number;
  onNavigateQuestion: (index: number) => void;
  answers: Record<number, 'A' | 'B' | 'C' | 'D'>;
  onSelectAnswer: (questionId: number, answer: 'A' | 'B' | 'C' | 'D') => void;
  onClearAnswer: (questionId: number) => void;
  flags: Record<number, boolean>;
  onToggleFlag: (questionId: number) => void;
  timeRemainingSeconds: number;
  onFinishAttempt: () => void;
  isPracticeMode?: boolean;
}

export const ECBTExamView: React.FC<ECBTExamViewProps> = ({
  questions,
  currentQuestionIndex,
  onNavigateQuestion,
  answers,
  onSelectAnswer,
  onClearAnswer,
  flags,
  onToggleFlag,
  timeRemainingSeconds,
  onFinishAttempt,
  isPracticeMode = false,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [activeSectionFilter, setActiveSectionFilter] = useState<'all' | 'listening' | 'structure' | 'reading'>('all');

  const currentQ = questions[currentQuestionIndex] || questions[0];
  const isFirst = currentQuestionIndex === 0;
  const isLast = currentQuestionIndex === questions.length - 1;

  const isAnswered = Boolean(answers[currentQ.id]);
  const isFlagged = Boolean(flags[currentQ.id]);

  // Format global countdown timer
  const formatTimer = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const isLowTime = timeRemainingSeconds < 900; // < 15 mins

  // Filter questions for quiz navigation drawer
  const displayedDrawerQuestions = questions.filter((q) => {
    if (activeSectionFilter === 'listening') return q.section === 'listening';
    if (activeSectionFilter === 'structure') return q.section === 'structure';
    if (activeSectionFilter === 'reading') return q.section === 'reading';
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col text-slate-800">
      
      {/* Official E-CBT UB Header Bar (from screenshots on pages 4-8) */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
          
          {/* Breadcrumb Path */}
          <div className="flex items-center gap-2 text-xs text-slate-600 truncate">
            <span className="font-semibold text-slate-800">BEPT</span>
            <span className="text-slate-400">/</span>
            <span className="truncate hidden sm:inline">Brawijaya English Proficiency Test</span>
            <span className="text-slate-400 hidden sm:inline">/</span>
            <span className="font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded text-[11px]">
              {currentQ.section.toUpperCase()}
            </span>
          </div>

          {/* Right cluster: Timer + Drawer toggle */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Timer (matches "Time left 1:48:13" on E-CBT UB screenshot) */}
            <div
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border font-mono text-xs sm:text-sm font-bold tabular-nums transition-colors ${
                isLowTime
                  ? 'bg-rose-50 border-rose-300 text-rose-700 animate-pulse'
                  : 'bg-white border-slate-300 text-slate-800 shadow-xs'
              }`}
            >
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-[11px] font-sans font-medium text-slate-500 hidden sm:inline">
                Time left
              </span>
              <span>{formatTimer(timeRemainingSeconds)}</span>
            </div>

            {/* Toggle Drawer button */}
            <button
              type="button"
              onClick={() => setDrawerOpen(!drawerOpen)}
              className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md border border-slate-200 transition-colors cursor-pointer"
              title={drawerOpen ? 'Tutup Panel Navigasi' : 'Buka Panel Navigasi'}
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

      {/* Main Content Layout with 2-Column E-CBT Architecture */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 flex-1 flex flex-col lg:flex-row gap-6 items-start">
        
        {/* LEFT / CENTER: Question Container */}
        <div className="flex-1 w-full space-y-4">
          
          {/* Main Question Box */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden flex flex-col md:flex-row items-stretch">
            
            {/* Left status panel of the question (matches screenshots on p.5, 6, 7) */}
            <div className="w-full md:w-56 p-4 md:p-5 bg-slate-50/80 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col justify-between space-y-4 shrink-0">
              <div className="space-y-1.5">
                <div className="text-base font-bold text-slate-900 font-display">
                  Question {currentQ.id}
                </div>
                
                <div
                  className={`text-xs font-semibold ${
                    isAnswered ? 'text-slate-900' : 'text-slate-500 italic'
                  }`}
                >
                  {isAnswered ? 'Answer saved' : 'Not yet answered'}
                </div>

                <div className="text-[11px] text-slate-400">
                  Marked out of 1.00
                </div>
              </div>

              {/* Flag Question Toggle (exact wording from UB Guide: "Flag question / Remove flag") */}
              <div>
                <button
                  type="button"
                  onClick={() => onToggleFlag(currentQ.id)}
                  className={`w-full py-1.5 px-2.5 rounded-lg border text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                    isFlagged
                      ? 'bg-rose-50 border-rose-300 text-rose-700'
                      : 'bg-white border-slate-300 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Flag className={`w-3.5 h-3.5 ${isFlagged ? 'fill-rose-600 text-rose-600' : ''}`} />
                  <span>{isFlagged ? 'Remove flag' : 'Flag question'}</span>
                </button>
              </div>
            </div>

            {/* Right Question Body & Options */}
            <div className="flex-1 p-5 sm:p-7 space-y-5">
              
              {/* Subsection info tag */}
              <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
                <span className="font-semibold text-blue-900">
                  {currentQ.subSection}
                </span>
                <span className="font-mono text-slate-400 tabular-nums">
                  Soal #{currentQ.id} dari {questions.length}
                </span>
              </div>

              {/* Section 1: Listening Audio Player */}
              {currentQ.section === 'listening' && (
                <AudioPlayerWidget
                  questionId={currentQ.id}
                  segments={currentQ.audioScript}
                  isPracticeMode={isPracticeMode}
                />
              )}

              {/* Section 3: Reading Passage Container */}
              {currentQ.section === 'reading' && currentQ.passageText && (
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed max-h-72 overflow-y-auto space-y-3 font-serif">
                  <div className="font-bold text-slate-900 font-sans pb-1 border-b border-slate-200 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-blue-900" />
                    <span>{currentQ.passageTitle || 'Academic Reading Passage'}</span>
                  </div>
                  <div className="whitespace-pre-line leading-relaxed">
                    {currentQ.passageText}
                  </div>
                </div>
              )}

              {/* Question Text / Prompt */}
              <div className="text-sm sm:text-base font-medium text-slate-900 leading-relaxed">
                {currentQ.prompt}
              </div>

              {/* Radio Choices a., b., c., d. (from screenshots) */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Choose the correct answer:
                </div>

                {currentQ.options.map((option) => {
                  const isSelected = answers[currentQ.id] === option.key;

                  return (
                    <label
                      key={option.key}
                      onClick={() => onSelectAnswer(currentQ.id, option.key)}
                      className={`flex items-start gap-3 p-3 rounded-lg border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-blue-50/70 border-blue-500 text-slate-900 ring-1 ring-blue-500/20'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50/80 hover:border-slate-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`question-${currentQ.id}`}
                        checked={isSelected}
                        onChange={() => onSelectAnswer(currentQ.id, option.key)}
                        className="mt-1 h-4 w-4 text-blue-900 border-slate-300 focus:ring-blue-900 cursor-pointer shrink-0"
                      />
                      <div className="text-xs sm:text-sm leading-relaxed">
                        <span className="font-bold mr-1.5 lowercase">
                          {option.key}.
                        </span>
                        <span>{option.text}</span>
                      </div>
                    </label>
                  );
                })}
              </div>

              {/* "Clear my choice" link (exact wording from UB Guide page 5, 7, 8) */}
              {isAnswered && (
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => onClearAnswer(currentQ.id)}
                    className="text-xs text-blue-800 hover:text-blue-950 underline font-medium cursor-pointer"
                  >
                    Clear my choice
                  </button>
                </div>
              )}

            </div>
          </div>

          {/* Navigation Controls: Previous page / Next page (from screenshots on p.5, 6, 8) */}
          <div className="flex items-center justify-between gap-4 pt-2">
            <button
              type="button"
              disabled={isFirst}
              onClick={() => onNavigateQuestion(currentQuestionIndex - 1)}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${
                isFirst
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 cursor-pointer shadow-xs'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous page</span>
            </button>

            {isLast ? (
              <button
                type="button"
                onClick={onFinishAttempt}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
              >
                <span>Finish attempt...</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => onNavigateQuestion(currentQuestionIndex + 1)}
                className="px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
              >
                <span>Next page</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

        {/* RIGHT DRAWER: "Quiz navigation" (from screenshots on p.4, 5, 6, 7, 8) */}
        {drawerOpen && (
          <aside className="w-full lg:w-80 bg-white rounded-xl border border-slate-200 shadow-xs p-4 sm:p-5 shrink-0 space-y-4">
            
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-sm font-bold text-slate-900 font-display">
                  Quiz navigation
                </h3>
                <div className="text-[11px] text-slate-500">
                  {Object.keys(answers).length} dari {questions.length} terjawab
                </div>
              </div>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-md cursor-pointer"
                title="Tutup Drawer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Section tabs for fast navigation */}
            <div className="grid grid-cols-4 gap-1 p-1 bg-slate-100 rounded-lg text-[11px] font-semibold text-slate-600">
              <button
                type="button"
                onClick={() => setActiveSectionFilter('all')}
                className={`py-1 rounded text-center transition-colors cursor-pointer ${
                  activeSectionFilter === 'all'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'hover:text-slate-900'
                }`}
              >
                All (140)
              </button>
              <button
                type="button"
                onClick={() => setActiveSectionFilter('listening')}
                className={`py-1 rounded text-center transition-colors cursor-pointer ${
                  activeSectionFilter === 'listening'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'hover:text-slate-900'
                }`}
              >
                Sec 1 (50)
              </button>
              <button
                type="button"
                onClick={() => setActiveSectionFilter('structure')}
                className={`py-1 rounded text-center transition-colors cursor-pointer ${
                  activeSectionFilter === 'structure'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'hover:text-slate-900'
                }`}
              >
                Sec 2 (40)
              </button>
              <button
                type="button"
                onClick={() => setActiveSectionFilter('reading')}
                className={`py-1 rounded text-center transition-colors cursor-pointer ${
                  activeSectionFilter === 'reading'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'hover:text-slate-900'
                }`}
              >
                Sec 3 (50)
              </button>
            </div>

            {/* Number Tiles Grid (matches screenshot on page 4-8) */}
            <div className="max-h-80 overflow-y-auto pr-1">
              <div className="grid grid-cols-5 gap-1.5">
                {displayedDrawerQuestions.map((q) => {
                  const globalIdx = questions.findIndex((item) => item.id === q.id);
                  const isCurrent = globalIdx === currentQuestionIndex;
                  const hasAnswer = Boolean(answers[q.id]);
                  const hasFlag = Boolean(flags[q.id]);

                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => onNavigateQuestion(globalIdx)}
                      className={`relative h-9 rounded text-xs font-mono font-bold transition-all flex items-center justify-center cursor-pointer ${
                        isCurrent
                          ? 'ring-2 ring-blue-900 ring-offset-1 z-10'
                          : ''
                      } ${
                        hasAnswer
                          ? 'bg-slate-700 text-white hover:bg-slate-800'
                          : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50'
                      }`}
                      title={`Question ${q.id}: ${hasAnswer ? 'Answer saved' : 'Not yet answered'}`}
                    >
                      <span>{q.id}</span>

                      {/* Red triangle / flag indicator in upper-right corner (from PDF p.6) */}
                      {hasFlag && (
                        <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-rose-600 rounded-bl-sm" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Legend info */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 bg-slate-700 rounded-xs inline-block" />
                <span>Terjawab</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 bg-white border border-slate-300 rounded-xs inline-block" />
                <span>Kosong</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 bg-rose-600 rounded-xs inline-block" />
                <span>Flag</span>
              </div>
            </div>

            {/* "Finish attempt..." link (exact wording from UB Guide page 8) */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onFinishAttempt}
                className="w-full py-2 px-3 text-xs font-semibold text-blue-900 hover:text-blue-950 bg-blue-50/80 hover:bg-blue-100/80 rounded-lg text-center transition-colors cursor-pointer"
              >
                Finish attempt...
              </button>
            </div>

          </aside>
        )}

      </div>

    </div>
  );
};
