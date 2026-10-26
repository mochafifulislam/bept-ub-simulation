import React from 'react';
import { 
  BookOpen, 
  Clock, 
  HelpCircle, 
  Sparkles, 
  Award, 
  Layers,
  GraduationCap
} from 'lucide-react';

export type ActiveTab = 'exam' | 'practice' | 'review' | 'strategy' | 'resume' | 'history';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onStartFullExam: () => void;
  hasActiveExam: boolean;
  onReturnToActiveExam: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onStartFullExam,
  hasActiveExam,
  onReturnToActiveExam,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-8">
          
          {/* Zone 1: Single text element wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-lg bg-blue-900 text-amber-400 flex items-center justify-center font-bold text-lg shadow-sm">
              UB
            </div>
            <button 
              onClick={() => setActiveTab('exam')}
              className="text-left group cursor-pointer"
            >
              <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-blue-900 transition-colors whitespace-nowrap">
                BEPT Master
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs text-slate-500 font-medium">
                Universitas Brawijaya
              </span>
            </button>
          </div>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            <button
              onClick={() => setActiveTab('exam')}
              className={`hover:text-blue-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1 border-b-2 ${
                activeTab === 'exam' ? 'border-blue-900 text-blue-900 font-semibold' : 'border-transparent'
              }`}
            >
              Simulasi E-CBT
            </button>

            <button
              onClick={() => setActiveTab('practice')}
              className={`hover:text-blue-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1 border-b-2 ${
                activeTab === 'practice' ? 'border-blue-900 text-blue-900 font-semibold' : 'border-transparent'
              }`}
            >
              Latihan per Seksi
            </button>

            <button
              onClick={() => setActiveTab('strategy')}
              className={`hover:text-blue-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1 border-b-2 ${
                activeTab === 'strategy' ? 'border-blue-900 text-blue-900 font-semibold' : 'border-transparent'
              }`}
            >
              Strategi Tiap Bagian
            </button>

            <button
              onClick={() => setActiveTab('resume')}
              className={`hover:text-blue-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1 border-b-2 ${
                activeTab === 'resume' ? 'border-blue-900 text-blue-900 font-semibold' : 'border-transparent'
              }`}
            >
              Resume Materi Kunci
            </button>

            <button
              onClick={() => setActiveTab('review')}
              className={`hover:text-blue-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1 border-b-2 ${
                activeTab === 'review' ? 'border-blue-900 text-blue-900 font-semibold' : 'border-transparent'
              }`}
            >
              Kunci & Pembahasan
            </button>

            <button
              onClick={() => setActiveTab('history')}
              className={`hover:text-blue-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1 border-b-2 ${
                activeTab === 'history' ? 'border-blue-900 text-blue-900 font-semibold' : 'border-transparent'
              }`}
            >
              Riwayat Skor
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-2 shrink-0">
            {hasActiveExam ? (
              <button
                onClick={onReturnToActiveExam}
                className="px-4 py-2 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
              >
                <Clock className="w-3.5 h-3.5" />
                Lanjutkan Ujian
              </button>
            ) : (
              <button
                onClick={onStartFullExam}
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
              >
                <GraduationCap className="w-4 h-4 text-amber-400" />
                Mulai Tes 140 Soal
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation bar */}
        <div className="flex lg:hidden overflow-x-auto py-2 border-t border-slate-100 gap-2 no-scrollbar text-xs">
          <button
            onClick={() => setActiveTab('exam')}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap ${activeTab === 'exam' ? 'bg-blue-900 text-white font-medium' : 'text-slate-600 bg-slate-100'}`}
          >
            Simulasi E-CBT
          </button>
          <button
            onClick={() => setActiveTab('practice')}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap ${activeTab === 'practice' ? 'bg-blue-900 text-white font-medium' : 'text-slate-600 bg-slate-100'}`}
          >
            Latihan Seksi
          </button>
          <button
            onClick={() => setActiveTab('strategy')}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap ${activeTab === 'strategy' ? 'bg-blue-900 text-white font-medium' : 'text-slate-600 bg-slate-100'}`}
          >
            Strategi
          </button>
          <button
            onClick={() => setActiveTab('resume')}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap ${activeTab === 'resume' ? 'bg-blue-900 text-white font-medium' : 'text-slate-600 bg-slate-100'}`}
          >
            Resume Materi
          </button>
          <button
            onClick={() => setActiveTab('review')}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap ${activeTab === 'review' ? 'bg-blue-900 text-white font-medium' : 'text-slate-600 bg-slate-100'}`}
          >
            Pembahasan
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap ${activeTab === 'history' ? 'bg-blue-900 text-white font-medium' : 'text-slate-600 bg-slate-100'}`}
          >
            Riwayat
          </button>
        </div>
      </div>
    </header>
  );
};
