import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Volume2, FastForward } from 'lucide-react';
import { QuestionAudioSegment } from '../types/bept';
import { audioPlayer, AudioPlaybackState } from '../utils/audioPlayer';

interface AudioPlayerWidgetProps {
  questionId: number;
  segments?: QuestionAudioSegment[];
  isPracticeMode?: boolean;
}

export const AudioPlayerWidget: React.FC<AudioPlayerWidgetProps> = ({
  questionId,
  segments = [],
  isPracticeMode = false,
}) => {
  const [playbackState, setPlaybackState] = useState<AudioPlaybackState>({
    isPlaying: false,
    isPaused: false,
    currentSegmentIndex: 0,
    totalSegments: segments.length,
    speed: 1.0,
    progressPercent: 0,
    elapsedSeconds: 0,
    totalDurationSeconds: 20,
  });

  const [showTranscript, setShowTranscript] = useState(false);
  const [speedMenuOpen, setSpeedMenuOpen] = useState(false);

  // Initialize or reset audio whenever question changes
  useEffect(() => {
    audioPlayer.stop();
    if (segments && segments.length > 0) {
      audioPlayer.setSegments(segments, (state) => {
        setPlaybackState(state);
      });
    }
    setShowTranscript(false);

    return () => {
      audioPlayer.stop();
    };
  }, [questionId, segments]);

  const handlePlayPause = () => {
    if (playbackState.isPlaying && !playbackState.isPaused) {
      audioPlayer.pause();
    } else {
      audioPlayer.play();
    }
  };

  const handleReplay = () => {
    audioPlayer.replay();
  };

  const handleSpeedSelect = (speed: number) => {
    audioPlayer.setSpeed(speed);
    setSpeedMenuOpen(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="bg-slate-900 text-white rounded-lg p-3 sm:p-4 my-4 shadow-sm border border-slate-800">
      
      {/* Upper bar: Track title & Playback stats */}
      <div className="flex items-center justify-between text-xs text-slate-300 pb-2.5 mb-2.5 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Volume2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="font-semibold text-slate-200">
            Listening Track #{questionId}
          </span>
          <span className="hidden sm:inline text-slate-500">·</span>
          <span className="hidden sm:inline text-slate-400 text-xs">
            E-CBT Audio Player
          </span>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-slate-300 tabular-nums">
          <span>{formatTime(playbackState.elapsedSeconds)}</span>
          <span className="text-slate-600">/</span>
          <span>{formatTime(playbackState.totalDurationSeconds)}</span>
        </div>
      </div>

      {/* Main player controls (matches E-CBT UB screenshot on page 5 of PDF) */}
      <div className="flex items-center gap-3">
        
        {/* Play / Pause button */}
        <button
          type="button"
          onClick={handlePlayPause}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer shrink-0 ${
            playbackState.isPlaying && !playbackState.isPaused
              ? 'bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-md'
              : 'bg-emerald-500 hover:bg-emerald-600 text-slate-950 shadow-md'
          }`}
          title={playbackState.isPlaying && !playbackState.isPaused ? 'Pause Audio' : 'Play Audio'}
        >
          {playbackState.isPlaying && !playbackState.isPaused ? (
            <Pause className="w-5 h-5 fill-current" />
          ) : (
            <Play className="w-5 h-5 fill-current translate-x-0.5" />
          )}
        </button>

        {/* Progress Bar & Waveform Simulation */}
        <div className="flex-1 space-y-1.5">
          <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden relative cursor-pointer">
            <div
              className="bg-emerald-400 h-full transition-all duration-300 rounded-full"
              style={{ width: `${playbackState.progressPercent}%` }}
            />
          </div>
          
          {/* Subtle animated sound wave bars when audio is playing */}
          <div className="flex items-center gap-1 h-3 px-1">
            {Array.from({ length: 24 }).map((_, i) => (
              <span
                key={i}
                className={`w-1 rounded-full transition-all duration-200 ${
                  playbackState.isPlaying && !playbackState.isPaused
                    ? 'bg-emerald-400/80 animate-pulse'
                    : 'bg-slate-700'
                }`}
                style={{
                  height: playbackState.isPlaying && !playbackState.isPaused
                    ? `${Math.max(4, ((i * 7) % 12) + 3)}px`
                    : '3px',
                  animationDelay: `${(i % 5) * 120}ms`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Replay button */}
        <button
          type="button"
          onClick={handleReplay}
          className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors cursor-pointer shrink-0"
          title="Putar Ulang dari Awal"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        {/* Speed Selector (from page 5 of UB Guide: "kecepatan audio bisa dipercepat atau diperlambat") */}
        <div className="relative shrink-0">
          <button
            type="button"
            onClick={() => setSpeedMenuOpen(!speedMenuOpen)}
            className="px-2.5 py-1 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700 rounded-md flex items-center gap-1 cursor-pointer"
            title="Ubah Kecepatan Putar Audio"
          >
            <span>{playbackState.speed}x</span>
          </button>

          {speedMenuOpen && (
            <div className="absolute right-0 bottom-full mb-1 bg-slate-800 border border-slate-700 rounded-md shadow-xl py-1 z-30 min-w-20">
              {[0.75, 1.0, 1.25, 1.5].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => handleSpeedSelect(s)}
                  className={`w-full text-left px-3 py-1 text-xs transition-colors cursor-pointer ${
                    playbackState.speed === s
                      ? 'bg-emerald-500/20 text-emerald-300 font-bold'
                      : 'text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {s}x {s === 1.0 ? '(Normal)' : ''}
                </button>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Guide note from UB CBT manual: FN+F2 and FN+F3 */}
      <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-[11px] text-slate-400 gap-2">
        <div className="flex items-center gap-2">
          <span>Tips E-CBT: Audio dapat di-pause dan diputar berulang kali.</span>
          <span className="hidden md:inline text-slate-600">·</span>
          <span className="hidden md:inline">Volume: FN+F2 (turunkan) / FN+F3 (naikkan).</span>
        </div>
        
        {isPracticeMode && (
          <button
            type="button"
            onClick={() => setShowTranscript(!showTranscript)}
            className="text-emerald-400 hover:underline cursor-pointer font-medium"
          >
            {showTranscript ? 'Sembunyikan Naskah' : 'Lihat Naskah Percakapan'}
          </button>
        )}
      </div>

      {/* Optional practice mode transcript */}
      {isPracticeMode && showTranscript && segments.length > 0 && (
        <div className="mt-3 p-3 bg-slate-950/70 border border-slate-800 rounded-md space-y-2 text-xs text-slate-300">
          <div className="font-semibold text-emerald-400 text-[11px] uppercase tracking-wider">
            Transkrip Audio:
          </div>
          {segments.map((seg, i) => (
            <div key={i} className="flex gap-2">
              <span className="font-bold text-slate-100 shrink-0 min-w-16">
                {seg.speaker}:
              </span>
              <span className="text-slate-300">{seg.text}</span>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
