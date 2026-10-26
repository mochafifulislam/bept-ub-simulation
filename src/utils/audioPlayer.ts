import { QuestionAudioSegment } from '../types/bept';

export interface AudioPlaybackState {
  isPlaying: boolean;
  isPaused: boolean;
  currentSegmentIndex: number;
  totalSegments: number;
  speed: number;
  progressPercent: number; // 0 to 100
  elapsedSeconds: number;
  totalDurationSeconds: number;
}

class BeptAudioEngine {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private segments: QuestionAudioSegment[] = [];
  private currentSegmentIndex: number = 0;
  private speed: number = 1.0;
  private isPlaying: boolean = false;
  private isPaused: boolean = false;
  private timer: number | null = null;
  private elapsedSeconds: number = 0;
  private estimatedTotalSeconds: number = 20;
  private onStateChangeCallback: ((state: AudioPlaybackState) => void) | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
    }
  }

  public setSegments(segments: QuestionAudioSegment[], onStateChange: (state: AudioPlaybackState) => void) {
    this.stop();
    this.segments = segments;
    this.currentSegmentIndex = 0;
    this.elapsedSeconds = 0;
    this.onStateChangeCallback = onStateChange;

    // Estimate duration based on word count (approx 130 words per minute / 2.2 words per second)
    const totalWords = segments.reduce((acc, seg) => acc + seg.text.split(/\s+/).length, 0);
    this.estimatedTotalSeconds = Math.max(8, Math.round(totalWords / 2.5));
    this.broadcastState();
  }

  public setSpeed(speed: number) {
    this.speed = speed;
    if (this.isPlaying && !this.isPaused) {
      // Re-speak current segment at new speed
      if (this.synth) {
        this.synth.cancel();
        this.speakCurrentSegment();
      }
    }
    this.broadcastState();
  }

  public play() {
    if (!this.synth || this.segments.length === 0) {
      // Fallback timer simulation for environments where speech is unavailable
      this.simulatePlayback();
      return;
    }

    if (this.isPaused) {
      this.synth.resume();
      this.isPaused = false;
      this.isPlaying = true;
      this.startTimer();
      this.broadcastState();
      return;
    }

    this.stop();
    this.isPlaying = true;
    this.isPaused = false;
    this.currentSegmentIndex = 0;
    this.elapsedSeconds = 0;
    this.startTimer();
    this.speakCurrentSegment();
  }

  public pause() {
    if (this.synth && this.isPlaying && !this.isPaused) {
      this.synth.pause();
    }
    this.isPaused = true;
    this.stopTimer();
    this.broadcastState();
  }

  public stop() {
    if (this.synth) {
      this.synth.cancel();
    }
    this.isPlaying = false;
    this.isPaused = false;
    this.currentSegmentIndex = 0;
    this.elapsedSeconds = 0;
    this.stopTimer();
    this.broadcastState();
  }

  public replay() {
    this.stop();
    this.play();
  }

  private speakCurrentSegment() {
    if (!this.synth || this.currentSegmentIndex >= this.segments.length) {
      this.isPlaying = false;
      this.isPaused = false;
      this.stopTimer();
      this.elapsedSeconds = this.estimatedTotalSeconds;
      this.broadcastState();
      return;
    }

    const segment = this.segments[this.currentSegmentIndex];
    const textToSpeak = `${segment.speaker ? `${segment.speaker}: ` : ''}${segment.text}`;

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    this.currentUtterance = utterance;
    utterance.rate = this.speed;
    utterance.lang = 'en-US';

    // Voice selection heuristics
    const voices = this.synth.getVoices();
    if (voices && voices.length > 0) {
      const englishVoices = voices.filter(v => v.lang.startsWith('en'));
      if (segment.voiceGender === 'female' || segment.speaker.toLowerCase().includes('woman')) {
        const femaleVoice = englishVoices.find(v => /female|zira|samantha|victoria|karen|eva/i.test(v.name));
        if (femaleVoice) utterance.voice = femaleVoice;
        utterance.pitch = 1.15;
      } else if (segment.voiceGender === 'male' || segment.speaker.toLowerCase().includes('man')) {
        const maleVoice = englishVoices.find(v => /male|david|daniel|george|alex|fred/i.test(v.name));
        if (maleVoice) utterance.voice = maleVoice;
        utterance.pitch = 0.95;
      } else {
        utterance.pitch = 1.0;
      }
    }

    utterance.onend = () => {
      this.currentSegmentIndex++;
      if (this.currentSegmentIndex < this.segments.length) {
        // Small natural pause between speakers
        setTimeout(() => {
          if (this.isPlaying && !this.isPaused) {
            this.speakCurrentSegment();
          }
        }, 500);
      } else {
        this.isPlaying = false;
        this.isPaused = false;
        this.stopTimer();
        this.elapsedSeconds = this.estimatedTotalSeconds;
        this.broadcastState();
      }
    };

    utterance.onerror = () => {
      this.isPlaying = false;
      this.isPaused = false;
      this.stopTimer();
      this.broadcastState();
    };

    this.synth.speak(utterance);
    this.broadcastState();
  }

  private simulatePlayback() {
    this.isPlaying = true;
    this.isPaused = false;
    this.startTimer();
    this.broadcastState();
  }

  private startTimer() {
    this.stopTimer();
    this.timer = window.setInterval(() => {
      if (this.isPlaying && !this.isPaused) {
        this.elapsedSeconds += 1;
        if (this.elapsedSeconds >= this.estimatedTotalSeconds) {
          this.elapsedSeconds = this.estimatedTotalSeconds;
          if (!this.synth) {
            this.isPlaying = false;
            this.stopTimer();
          }
        }
        this.broadcastState();
      }
    }, 1000);
  }

  private stopTimer() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  private broadcastState() {
    if (this.onStateChangeCallback) {
      const duration = Math.max(1, this.estimatedTotalSeconds);
      const progress = Math.min(100, Math.round((this.elapsedSeconds / duration) * 100));
      this.onStateChangeCallback({
        isPlaying: this.isPlaying,
        isPaused: this.isPaused,
        currentSegmentIndex: this.currentSegmentIndex,
        totalSegments: this.segments.length,
        speed: this.speed,
        progressPercent: progress,
        elapsedSeconds: this.elapsedSeconds,
        totalDurationSeconds: this.estimatedTotalSeconds,
      });
    }
  }
}

export const audioPlayer = new BeptAudioEngine();
