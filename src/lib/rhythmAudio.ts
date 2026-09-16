/**
 * Web Audio Rhythm & Metronome Synthesis Engine for MusicScene
 * 
 * Provides:
 * 1. Studio Metronome Click (High-pitch accented downbeat, crisp mid-pitch beat ticks)
 * 2. Count-In Controller with visual countdown callback and audio ticks
 * 3. Precision Lookahead Rhythm Track Scheduler for:
 *    - 'none': Silent
 *    - 'metronome': Accent on beat 1, normal ticks on 2, 3, 4
 *    - 'rock': Standard 4/4 rock groove (Kick on 1 & 3, Snare on 2 & 4, 8th-note Hi-hats)
 *    - 'shuffle': Blues shuffle swing groove (Kick, Snare, and triplet swing hats)
 */

import { getGuitarAudioContext } from '@/lib/guitarAudio';

export type RhythmPreset = 'none' | 'metronome' | 'rock' | 'shuffle';

export interface RhythmPresetOption {
  id: RhythmPreset;
  label: string;
  icon: string;
  description: string;
}

export const RHYTHM_PRESETS: RhythmPresetOption[] = [
  { id: 'none', label: 'Off', icon: '🔇', description: 'No rhythm backing' },
  { id: 'metronome', label: 'Click', icon: '🔔', description: 'Clean metronome click' },
  { id: 'rock', label: 'Rock', icon: '🥁', description: 'Driving 4/4 rock drum groove' },
  { id: 'shuffle', label: 'Shuffle', icon: '🎷', description: 'Classic blues shuffle swing feel' },
];

/**
 * Synthesizes a high-definition metronome click with sharp transient.
 */
export function playMetronomeTick(
  ctx: AudioContext,
  time: number,
  isDownbeat: boolean = false,
  volume: number = 0.45
): void {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  // Woodblock / high click frequencies
  osc.type = 'sine';
  osc.frequency.setValueAtTime(isDownbeat ? 1760 : 880, time); // A6 vs A5

  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.linearRampToValueAtTime(volume * (isDownbeat ? 1.0 : 0.7), time + 0.002);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + (isDownbeat ? 0.05 : 0.035));

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(time);
  osc.stop(time + (isDownbeat ? 0.05 : 0.035));
}

/**
 * Synthesizes a punchy acoustic kick drum.
 */
export function playKickDrum(ctx: AudioContext, time: number, volume: number = 0.5): void {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  // Rapid pitch drop gives the drum strike punch
  osc.frequency.setValueAtTime(140, time);
  osc.frequency.exponentialRampToValueAtTime(45, time + 0.08);

  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.linearRampToValueAtTime(volume, time + 0.004);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.28);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(time);
  osc.stop(time + 0.28);
}

/**
 * Synthesizes a crisp acoustic snare drum (noise burst + resonant shell).
 */
export function playSnareDrum(ctx: AudioContext, time: number, volume: number = 0.42): void {
  // 1. Noise buffer for snare wire rattle
  const bufferSize = Math.floor(ctx.sampleRate * 0.18);
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  const noise = ctx.createBufferSource();
  noise.buffer = buffer;

  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(1200, time);
  filter.Q.setValueAtTime(1.5, time);

  const noiseGain = ctx.createGain();
  noiseGain.gain.setValueAtTime(0.0001, time);
  noiseGain.gain.linearRampToValueAtTime(volume * 0.75, time + 0.002);
  noiseGain.gain.exponentialRampToValueAtTime(0.0001, time + 0.18);

  noise.connect(filter);
  filter.connect(noiseGain);
  noiseGain.connect(ctx.destination);

  noise.start(time);
  noise.stop(time + 0.18);

  // 2. Resonant shell tone
  const shellOsc = ctx.createOscillator();
  const shellGain = ctx.createGain();

  shellOsc.type = 'triangle';
  shellOsc.frequency.setValueAtTime(185, time);
  shellOsc.frequency.exponentialRampToValueAtTime(110, time + 0.08);

  shellGain.gain.setValueAtTime(0.0001, time);
  shellGain.gain.linearRampToValueAtTime(volume * 0.6, time + 0.002);
  shellGain.gain.exponentialRampToValueAtTime(0.0001, time + 0.12);

  shellOsc.connect(shellGain);
  shellGain.connect(ctx.destination);

  shellOsc.start(time);
  shellOsc.stop(time + 0.12);
}

/**
 * Synthesizes a metal hi-hat cymbal (closed or open).
 */
export function playHiHat(
  ctx: AudioContext,
  time: number,
  isOpen: boolean = false,
  volume: number = 0.25
): void {
  const duration = isOpen ? 0.22 : 0.045;
  const bufferSize = Math.floor(ctx.sampleRate * duration);
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  const noise = ctx.createBufferSource();
  noise.buffer = buffer;

  const filter = ctx.createBiquadFilter();
  filter.type = 'highpass';
  filter.frequency.setValueAtTime(7500, time);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.linearRampToValueAtTime(volume, time + 0.002);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  noise.start(time);
  noise.stop(time + duration);
}

export interface CountInOptions {
  bpm: number;
  beats?: number; // default 4 for 4/4
  onTick?: (remaining: number) => void;
  onComplete: () => void;
}

/**
 * Runs an audible 1-measure count-in (4, 3, 2, 1) with metronome audio clicks.
 * Returns an abort function if playback is stopped/paused before count-in completes.
 */
export function executeCountIn({
  bpm,
  beats = 4,
  onTick,
  onComplete,
}: CountInOptions): () => void {
  const ctx = getGuitarAudioContext();
  let isAborted = false;
  const timeouts: ReturnType<typeof setTimeout>[] = [];

  const beatDurationMs = (60 / Math.max(30, Math.min(260, bpm))) * 1000;

  for (let i = 0; i < beats; i++) {
    const delay = i * beatDurationMs;
    const remainingCount = beats - i;
    const isDownbeat = i === 0;

    const t = setTimeout(() => {
      if (isAborted) return;

      // Play audio click
      if (ctx) {
        try {
          playMetronomeTick(ctx, ctx.currentTime, isDownbeat, 0.55);
        } catch {
          // ignore
        }
      }

      // Notify callback
      if (onTick) {
        onTick(remainingCount);
      }
    }, delay);

    timeouts.push(t);
  }

  // Complete trigger right after last beat
  const finalTimeout = setTimeout(() => {
    if (!isAborted) {
      onComplete();
    }
  }, beats * beatDurationMs);

  timeouts.push(finalTimeout);

  return () => {
    isAborted = true;
    timeouts.forEach(clearTimeout);
  };
}

/**
 * RhythmTrackScheduler
 * Precision WebAudio lookahead scheduler for metronome & drum rhythm backing.
 */
export class RhythmTrackScheduler {
  private bpm: number;
  private preset: RhythmPreset;
  private isRunning: boolean = false;
  private isMuted: boolean = false;
  private nextNoteTime: number = 0;
  private currentStep: number = 0;
  private timerId: ReturnType<typeof setInterval> | null = null;
  private readonly lookaheadMs: number = 25;
  private readonly scheduleAheadTimeSec: number = 0.1;

  constructor(bpm: number = 80, preset: RhythmPreset = 'none') {
    this.bpm = bpm;
    this.preset = preset;
  }

  public setBpm(newBpm: number) {
    this.bpm = Math.max(30, Math.min(260, newBpm));
  }

  public setPreset(newPreset: RhythmPreset) {
    this.preset = newPreset;
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
  }

  public start(offsetTimeSec: number = 0) {
    if (this.isRunning) return;

    const ctx = getGuitarAudioContext();
    if (!ctx) return;

    this.isRunning = true;
    this.currentStep = 0;
    this.nextNoteTime = ctx.currentTime + Math.max(0, offsetTimeSec);

    this.timerId = setInterval(() => {
      this.scheduler();
    }, this.lookaheadMs);
  }

  /**
   * Starts rhythm scheduler synchronized to a specific song playhead position in seconds.
   */
  public startAtPosition(positionSec: number = 0) {
    if (this.isRunning) {
      this.stop();
    }

    const ctx = getGuitarAudioContext();
    if (!ctx) return;

    this.isRunning = true;
    const secondsPerBeat = 60.0 / this.bpm;
    const secondsPer16th = secondsPerBeat / 4.0;
    const measureDurationSec = secondsPerBeat * 4.0; // 4/4 signature

    const timeInMeasure = ((positionSec % measureDurationSec) + measureDurationSec) % measureDurationSec;
    const rawStep = timeInMeasure / secondsPer16th;
    const stepIndex = Math.floor(rawStep);
    const fractionOfStep = rawStep - stepIndex;

    if (fractionOfStep < 0.08 || positionSec <= 0.02) {
      // Near start of step
      this.currentStep = stepIndex % 16;
      this.nextNoteTime = ctx.currentTime;
    } else {
      // Align with upcoming 16th step
      this.currentStep = (stepIndex + 1) % 16;
      this.nextNoteTime = ctx.currentTime + (1.0 - fractionOfStep) * secondsPer16th;
    }

    this.timerId = setInterval(() => {
      this.scheduler();
    }, this.lookaheadMs);
  }

  public stop() {
    this.isRunning = false;
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
    this.currentStep = 0;
  }

  private scheduler() {
    const ctx = getGuitarAudioContext();
    if (!ctx || !this.isRunning) return;

    while (this.nextNoteTime < ctx.currentTime + this.scheduleAheadTimeSec) {
      if (this.preset !== 'none' && !this.isMuted) {
        this.schedulePattern(ctx, this.nextNoteTime, this.currentStep, this.preset);
      }
      this.advanceStep();
    }
  }

  private advanceStep() {
    // 16th-note step advance for flexible grooves
    const secondsPer16th = (60.0 / this.bpm) / 4.0;
    this.nextNoteTime += secondsPer16th;
    this.currentStep = (this.currentStep + 1) % 16;
  }

  private schedulePattern(
    ctx: AudioContext,
    time: number,
    step: number,
    preset: RhythmPreset
  ) {
    // Steps 0..15 represent four beats divided into 16th notes:
    // Beat 1: steps 0, 1, 2, 3
    // Beat 2: steps 4, 5, 6, 7
    // Beat 3: steps 8, 9, 10, 11
    // Beat 4: steps 12, 13, 14, 15

    switch (preset) {
      case 'metronome': {
        // Quarter note clicks on 0, 4, 8, 12
        if (step % 4 === 0) {
          const isDownbeat = step === 0;
          playMetronomeTick(ctx, time, isDownbeat, 0.45);
        }
        break;
      }

      case 'rock': {
        // Hi-Hat on every eighth note (0, 2, 4, 6, 8, 10, 12, 14)
        if (step % 2 === 0) {
          playHiHat(ctx, time, false, 0.22);
        }
        // Kick on beats 1 and 3 (0 and 8), plus syncopated 16th on 10 (beat 3&)
        if (step === 0 || step === 8 || step === 10) {
          playKickDrum(ctx, time, 0.5);
        }
        // Snare on beats 2 and 4 (4 and 12)
        if (step === 4 || step === 12) {
          playSnareDrum(ctx, time, 0.45);
        }
        break;
      }

      case 'shuffle': {
        // Blues triplet shuffle (swing on 0, 3, 4, 7, 8, 11, 12, 15 approx)
        if (step % 4 === 0 || step % 4 === 3) {
          playHiHat(ctx, time, false, 0.22);
        }
        // Kick on beats 1 and 3
        if (step === 0 || step === 8) {
          playKickDrum(ctx, time, 0.5);
        }
        // Snare on beats 2 and 4
        if (step === 4 || step === 12) {
          playSnareDrum(ctx, time, 0.45);
        }
        break;
      }

      default:
        break;
    }
  }
}
