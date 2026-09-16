/**
 * Web Audio Guitar Synthesis Engine for MusicScene
 * Provides zero-latency, realistic acoustic guitar strumming and note plucking
 * without requiring heavy external SoundFont downloads.
 */

// Standard tuning open string MIDI pitch numbers: E2, A2, D3, G3, B3, E4
export const GUITAR_OPEN_STRINGS_MIDI = [40, 45, 50, 55, 59, 64] as const;

let audioCtx: AudioContext | null = null;

/**
 * Returns a shared AudioContext singleton, initialized or resumed on user gesture.
 */
export function getGuitarAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;

  if (!audioCtx) {
    const AudioCtxClass = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (AudioCtxClass) {
      audioCtx = new AudioCtxClass();
    }
  }

  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }

  return audioCtx;
}

/**
 * Converts guitar string index (0 = Low E, 5 = High E) and fret number to frequency (Hz).
 */
export function getGuitarFrequency(stringIndex: number, fret: number): number {
  if (stringIndex < 0 || stringIndex >= GUITAR_OPEN_STRINGS_MIDI.length || fret < 0) {
    return 0;
  }
  const midiNote = GUITAR_OPEN_STRINGS_MIDI[stringIndex] + fret;
  return 440 * Math.pow(2, (midiNote - 69) / 12);
}

export interface PlayNoteOptions {
  duration?: number;
  volume?: number;
  timeOffset?: number;
}

/**
 * Synthesizes a single plucked guitar string note with realistic body resonance and overtones.
 */
export function playGuitarNote(
  stringIndex: number,
  fret: number,
  options: PlayNoteOptions = {}
): void {
  if (fret < 0) return; // Muted string

  const ctx = getGuitarAudioContext();
  if (!ctx) return;

  const freq = getGuitarFrequency(stringIndex, fret);
  if (freq <= 0) return;

  const duration = options.duration ?? 1.8;
  const volume = Math.min(1, Math.max(0.01, options.volume ?? 0.3));
  const startTime = ctx.currentTime + (options.timeOffset ?? 0);

  try {
    // 1. Resonant Acoustic Body Filter
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.Q.value = 1.8;
    filter.frequency.setValueAtTime(Math.min(3200, freq * 7), startTime);
    filter.frequency.exponentialRampToValueAtTime(Math.max(220, freq * 1.5), startTime + duration * 0.7);

    // 2. Fundamental string oscillator (warm triangle wave)
    const osc = ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, startTime);

    const oscGain = ctx.createGain();
    oscGain.gain.setValueAtTime(0.0001, startTime);
    oscGain.gain.linearRampToValueAtTime(volume * 0.75, startTime + 0.006);
    oscGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(filter);
    filter.connect(oscGain);
    oscGain.connect(ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + duration);

    // 3. Secondary acoustic overtone oscillator (2nd harmonic sparkle)
    const harmonicOsc = ctx.createOscillator();
    harmonicOsc.type = 'sine';
    harmonicOsc.frequency.setValueAtTime(freq * 2, startTime);

    const harmonicGain = ctx.createGain();
    harmonicGain.gain.setValueAtTime(0.0001, startTime);
    harmonicGain.gain.linearRampToValueAtTime(volume * 0.25, startTime + 0.004);
    harmonicGain.gain.exponentialRampToValueAtTime(0.0001, startTime + Math.min(duration, 0.75));

    harmonicOsc.connect(filter);
    harmonicOsc.connect(harmonicGain);
    harmonicGain.connect(ctx.destination);

    harmonicOsc.start(startTime);
    harmonicOsc.stop(startTime + Math.min(duration, 0.75));
  } catch (e) {
    // Graceful fallback if audio context has issues
  }
}

export interface StrumOptions {
  direction?: 'down' | 'up';
  speedMs?: number; // Milliseconds between string plucks
  volume?: number;
  duration?: number;
  onStringPlucked?: (stringIndex: number) => void;
}

/**
 * Strums a full guitar chord across the 6 strings with micro-timed pick travel.
 * @param frets Array of 6 fret numbers [-1, 3, 2, 0, 1, 0] (-1 = muted, 0 = open)
 */
export function strumChord(
  frets: number[],
  options: StrumOptions = {}
): void {
  if (!frets || frets.length !== 6) return;

  const direction = options.direction ?? 'down';
  const speedMs = options.speedMs ?? 18;
  const volume = options.volume ?? 0.32;
  const duration = options.duration ?? 2.0;

  // Filter playable strings
  const stringIndices = direction === 'down'
    ? [0, 1, 2, 3, 4, 5]
    : [5, 4, 3, 2, 1, 0];

  let pluckCount = 0;
  stringIndices.forEach((sIdx) => {
    const fret = frets[sIdx];
    if (fret >= 0) {
      const timeOffset = (pluckCount * speedMs) / 1000;
      
      playGuitarNote(sIdx, fret, {
        duration: Math.max(1.0, duration - timeOffset),
        volume: volume * (0.85 + Math.random() * 0.15), // subtle organic velocity variation
        timeOffset,
      });

      if (options.onStringPlucked) {
        setTimeout(() => {
          options.onStringPlucked?.(sIdx);
        }, pluckCount * speedMs);
      }

      pluckCount++;
    }
  });
}
