import React, { useState } from 'react';
import { SectionType, Question } from '../types/bept';
import { SECTION_METADATA } from '../data/beptQuestions';
import { Volume2, BookOpen, Layers, Clock, ArrowRight, Play, CheckCircle2 } from 'lucide-react';

interface PracticeSectionViewProps {
  onStartSectionQuiz: (section: SectionType) => void;
  onStartFullExam: () => void;
}

export const PracticeSectionView: React.FC<PracticeSectionViewProps> = ({
  onStartSectionQuiz,
  onStartFullExam,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white rounded-2xl p-6 sm:p-10 shadow-md space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-xs font-semibold text-blue-200">
          <span>Mode Latihan Mandiri & Drill Terfokus</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
          Latihan Intensif Berdasarkan Seksi Tes
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
          Pilih salah satu dari 3 seksi BEPT untuk mengasah kelemahan Anda secara spesifik dengan fitur transkrip audio, kunci pembahasan instan, dan alokasi waktu fleksibel.
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={onStartFullExam}
            className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-colors cursor-pointer flex items-center gap-2"
          >
            <span>Atau Mulai Simulasi Lengkap 140 Soal (2 Jam)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 3 Section Drill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Section 1: Listening Comprehension */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 flex flex-col justify-between hover:shadow-md transition-shadow space-y-5">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center font-bold">
              <Volume2 className="w-6 h-6" />
            </div>
            
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
                Seksi 1
              </span>
              <h3 className="text-lg font-bold text-slate-900 font-display mt-0.5">
                Listening Comprehension
              </h3>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              50 Soal · Part A (Short Dialogues), Part B (Longer Conversations), Part C (Mini-Lectures). Dilengkapi audio player sintetis dan transkrip.
            </p>

            <div className="space-y-1.5 text-xs text-slate-500 pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <span>Jumlah Soal:</span>
                <span className="font-bold text-slate-800">50 Soal</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Waktu Pengerjaan:</span>
                <span className="font-bold text-slate-800">35 Menit</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Skala Skor TOEFL:</span>
                <span className="font-bold text-slate-800">31 – 68</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onStartSectionQuiz('listening')}
            className="w-full py-2.5 px-4 bg-blue-900 hover:bg-blue-800 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Mulai Drill Listening (50 Soal)</span>
          </button>
        </div>

        {/* Section 2: Structure & Written Expression */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 flex flex-col justify-between hover:shadow-md transition-shadow space-y-5">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-900 flex items-center justify-center font-bold">
              <Layers className="w-6 h-6" />
            </div>
            
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-900">
                Seksi 2
              </span>
              <h3 className="text-lg font-bold text-slate-900 font-display mt-0.5">
                Structure & Written Expression
              </h3>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              40 Soal · 15 Soal Melengkapi Kalimat + 25 Soal Mencari Kesalahan Kata Bergaris Bawah (Error Identification).
            </p>

            <div className="space-y-1.5 text-xs text-slate-500 pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <span>Jumlah Soal:</span>
                <span className="font-bold text-slate-800">40 Soal</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Waktu Pengerjaan:</span>
                <span className="font-bold text-slate-800">25 Menit</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Skala Skor TOEFL:</span>
                <span className="font-bold text-slate-800">31 – 68</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onStartSectionQuiz('structure')}
            className="w-full py-2.5 px-4 bg-purple-900 hover:bg-purple-800 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Mulai Drill Structure (40 Soal)</span>
          </button>
        </div>

        {/* Section 3: Reading Comprehension */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 flex flex-col justify-between hover:shadow-md transition-shadow space-y-5">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-900 flex items-center justify-center font-bold">
              <BookOpen className="w-6 h-6" />
            </div>
            
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                Seksi 3
              </span>
              <h3 className="text-lg font-bold text-slate-900 font-display mt-0.5">
                Reading Comprehension
              </h3>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              50 Soal · 5 Teks Akademis Ilmiah (Bioluminescence, Gutenberg, Carbon Allotropes, Urbanization, Architecture).
            </p>

            <div className="space-y-1.5 text-xs text-slate-500 pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <span>Jumlah Soal:</span>
                <span className="font-bold text-slate-800">50 Soal</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Waktu Pengerjaan:</span>
                <span className="font-bold text-slate-800">55 Menit</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Skala Skor TOEFL:</span>
                <span className="font-bold text-slate-800">31 – 67</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onStartSectionQuiz('reading')}
            className="w-full py-2.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Mulai Drill Reading (50 Soal)</span>
          </button>
        </div>

      </div>

    </div>
  );
};
