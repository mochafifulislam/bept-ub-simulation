import React, { useState } from 'react';
import { X, Key, Clock, AlertCircle } from 'lucide-react';

interface StartAttemptModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStart: () => void;
  modeName?: string;
  durationMinutes?: number;
  questionCount?: number;
}

export const StartAttemptModal: React.FC<StartAttemptModalProps> = ({
  isOpen,
  onClose,
  onStart,
  modeName = 'Brawijaya English Proficiency Test (BEPT)',
  durationMinutes = 120,
  questionCount = 140,
}) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleStart = () => {
    // In actual UB CBT, proctor provides password. Here, allow proctor default password "BEPT2025" or allow direct start.
    onStart();
  };

  const fillDefaultPassword = () => {
    setPassword('BEPT2025');
    setError('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-slate-900 font-display">
              Start attempt
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-md transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 text-sm text-slate-700">
          
          {/* Breadcrumb info */}
          <div className="text-xs text-slate-500 pb-2 border-b border-slate-100 flex items-center gap-1.5">
            <span>E-CBT UB</span>
            <span>/</span>
            <span>BEPT</span>
            <span>/</span>
            <span className="font-semibold text-blue-900">{modeName}</span>
          </div>

          {/* Password Prompt (from UB Guide page 3) */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
              Password
            </label>
            <p className="text-xs text-slate-500">
              To attempt this quiz you need to know the quiz password (diberikan oleh pengawas ujian UB).
            </p>
            <div className="relative">
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan password ujian (atau gunakan default)"
                className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-800/20 focus:border-blue-800"
              />
            </div>
            <div className="flex items-center justify-between text-xs pt-1">
              <span className="text-slate-400">Password resmi simulasi: BEPT2025</span>
              <button
                type="button"
                onClick={fillDefaultPassword}
                className="text-blue-700 hover:text-blue-900 font-semibold underline cursor-pointer"
              >
                Gunakan Password Pengawas
              </button>
            </div>
          </div>

          {/* Time limit section (exact wording from UB Guide page 3) */}
          <div className="rounded-lg bg-amber-50/70 border border-amber-200/80 p-4 space-y-2">
            <div className="flex items-center gap-2 text-amber-900 font-semibold text-sm">
              <Clock className="w-4 h-4 text-amber-700" />
              <span>Time limit: {durationMinutes} minutes ({Math.round(durationMinutes / 60)} hours)</span>
            </div>
            <p className="text-xs text-amber-900/90 leading-relaxed">
              Your attempt will have a time limit of {Math.round(durationMinutes / 60)} hours ({questionCount} questions). 
              When you start, the timer will begin to count down and cannot be paused. You must finish your attempt before it expires.
            </p>
            <p className="text-xs font-semibold text-amber-950 pt-1">
              Are you sure you wish to start now?
            </p>
          </div>

        </div>

        {/* Modal Footer (exact buttons from UB Guide page 3) */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleStart}
            className="px-5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>Start attempt</span>
          </button>
        </div>

      </div>
    </div>
  );
};
