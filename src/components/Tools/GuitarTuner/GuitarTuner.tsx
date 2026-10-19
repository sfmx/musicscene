"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { getGuitarAudioContext, playGuitarFrequency } from '@/lib/guitarAudio';

export interface TunedString {
  stringNumber: number; // 6 to 1 (6 = lowest string)
  name: string; // e.g. "E2"
  note: string; // e.g. "E"
  octave: number; // e.g. 2
  targetFreq: number; // in Hz
}

export interface GuitarTuning {
  id: string;
  name: string;
  category: string;
  description: string;
  strings: TunedString[];
}

export const GUITAR_TUNINGS: GuitarTuning[] = [
  {
    id: 'standard',
    name: 'Standard Tuning',
    category: 'Standard',
    description: 'E - A - D - G - B - E • Standard pitch used in 95% of guitar music.',
    strings: [
      { stringNumber: 6, name: 'E2', note: 'E', octave: 2, targetFreq: 82.41 },
      { stringNumber: 5, name: 'A2', note: 'A', octave: 2, targetFreq: 110.0 },
      { stringNumber: 4, name: 'D3', note: 'D', octave: 3, targetFreq: 146.83 },
      { stringNumber: 3, name: 'G3', note: 'G', octave: 3, targetFreq: 196.0 },
      { stringNumber: 2, name: 'B3', note: 'B', octave: 3, targetFreq: 246.94 },
      { stringNumber: 1, name: 'E4', note: 'E', octave: 4, targetFreq: 329.63 },
    ],
  },
  {
    id: 'drop-d',
    name: 'Drop D',
    category: 'Rock & Metal',
    description: 'D - A - D - G - B - E • Drop the 6th string 1 full step for heavy one-finger power chords.',
    strings: [
      { stringNumber: 6, name: 'D2', note: 'D', octave: 2, targetFreq: 73.42 },
      { stringNumber: 5, name: 'A2', note: 'A', octave: 2, targetFreq: 110.0 },
      { stringNumber: 4, name: 'D3', note: 'D', octave: 3, targetFreq: 146.83 },
      { stringNumber: 3, name: 'G3', note: 'G', octave: 3, targetFreq: 196.0 },
      { stringNumber: 2, name: 'B3', note: 'B', octave: 3, targetFreq: 246.94 },
      { stringNumber: 1, name: 'E4', note: 'E', octave: 4, targetFreq: 329.63 },
    ],
  },
  {
    id: 'half-step-down',
    name: 'Half-Step Down (Eb / D#)',
    category: 'Blues & Hard Rock',
    description: 'Eb - Ab - Db - Gb - Bb - Eb • Slacker string tension used by Hendrix, SRV, and Guns N\' Roses.',
    strings: [
      { stringNumber: 6, name: 'E♭2', note: 'E♭', octave: 2, targetFreq: 77.78 },
      { stringNumber: 5, name: 'A♭2', note: 'A♭', octave: 2, targetFreq: 103.83 },
      { stringNumber: 4, name: 'D♭3', note: 'D♭', octave: 3, targetFreq: 138.59 },
      { stringNumber: 3, name: 'G♭3', note: 'G♭', octave: 3, targetFreq: 185.0 },
      { stringNumber: 2, name: 'B♭3', note: 'B♭', octave: 3, targetFreq: 233.08 },
      { stringNumber: 1, name: 'E♭4', note: 'E♭', octave: 4, targetFreq: 311.13 },
    ],
  },
  {
    id: 'dadgad',
    name: 'DADGAD (Celtic / Folk)',
    category: 'Open Tunings',
    description: 'D - A - D - G - A - D • Lush modal tuning famous in Celtic folk, Jimmy Page (Kashmir), and acoustic fingerstyle.',
    strings: [
      { stringNumber: 6, name: 'D2', note: 'D', octave: 2, targetFreq: 73.42 },
      { stringNumber: 5, name: 'A2', note: 'A', octave: 2, targetFreq: 110.0 },
      { stringNumber: 4, name: 'D3', note: 'D', octave: 3, targetFreq: 146.83 },
      { stringNumber: 3, name: 'G3', note: 'G', octave: 3, targetFreq: 196.0 },
      { stringNumber: 2, name: 'A3', note: 'A', octave: 3, targetFreq: 220.0 },
      { stringNumber: 1, name: 'D4', note: 'D', octave: 4, targetFreq: 293.66 },
    ],
  },
  {
    id: 'open-g',
    name: 'Open G (Rolling Stones)',
    category: 'Open Tunings',
    description: 'D - G - D - G - B - D • Keith Richards classic tuning for Brown Sugar, Start Me Up, and slide guitar.',
    strings: [
      { stringNumber: 6, name: 'D2', note: 'D', octave: 2, targetFreq: 73.42 },
      { stringNumber: 5, name: 'G2', note: 'G', octave: 2, targetFreq: 98.0 },
      { stringNumber: 4, name: 'D3', note: 'D', octave: 3, targetFreq: 146.83 },
      { stringNumber: 3, name: 'G3', note: 'G', octave: 3, targetFreq: 196.0 },
      { stringNumber: 2, name: 'B3', note: 'B', octave: 3, targetFreq: 246.94 },
      { stringNumber: 1, name: 'D4', note: 'D', octave: 4, targetFreq: 293.66 },
    ],
  },
  {
    id: 'open-d',
    name: 'Open D (Vestapol)',
    category: 'Open Tunings',
    description: 'D - A - D - F# - A - D • Full major chord when strummed open, beloved by blues slide guitarists.',
    strings: [
      { stringNumber: 6, name: 'D2', note: 'D', octave: 2, targetFreq: 73.42 },
      { stringNumber: 5, name: 'A2', note: 'A', octave: 2, targetFreq: 110.0 },
      { stringNumber: 4, name: 'D3', note: 'D', octave: 3, targetFreq: 146.83 },
      { stringNumber: 3, name: 'F#3', note: 'F#', octave: 3, targetFreq: 185.0 },
      { stringNumber: 2, name: 'A3', note: 'A', octave: 3, targetFreq: 220.0 },
      { stringNumber: 1, name: 'D4', note: 'D', octave: 4, targetFreq: 293.66 },
    ],
  },
  {
    id: 'drop-c',
    name: 'Drop C',
    category: 'Rock & Metal',
    description: 'C - G - C - F - A - D • Full step down with low string dropped to C for modern metal riffs.',
    strings: [
      { stringNumber: 6, name: 'C2', note: 'C', octave: 2, targetFreq: 65.41 },
      { stringNumber: 5, name: 'G2', note: 'G', octave: 2, targetFreq: 98.0 },
      { stringNumber: 4, name: 'C3', note: 'C', octave: 3, targetFreq: 130.81 },
      { stringNumber: 3, name: 'F3', note: 'F', octave: 3, targetFreq: 174.61 },
      { stringNumber: 2, name: 'A3', note: 'A', octave: 3, targetFreq: 220.0 },
      { stringNumber: 1, name: 'D4', note: 'D', octave: 4, targetFreq: 293.66 },
    ],
  },
];

const NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

/**
 * Autocorrelation algorithm with quadratic interpolation
 * Estimates fundamental frequency (f0) of audio signal in buffer.
 */
function autoCorrelate(buffer: Float32Array, sampleRate: number): number {
  const size = buffer.length;
  let rms = 0;

  for (let i = 0; i < size; i++) {
    const val = buffer[i];
    rms += val * val;
  }
  rms = Math.sqrt(rms / size);

  // Signal is too quiet
  if (rms < 0.012) {
    return -1;
  }

  // Clip buffer to focus on main signal
  let r1 = 0;
  let r2 = size - 1;
  const thres = 0.2;
  for (let i = 0; i < size / 2; i++) {
    if (Math.abs(buffer[i]) < thres) {
      r1 = i;
      break;
    }
  }
  for (let i = 1; i < size / 2; i++) {
    if (Math.abs(buffer[size - i]) < thres) {
      r2 = size - i;
      break;
    }
  }

  const trimmed = buffer.subarray(r1, r2);
  const trimmedSize = trimmed.length;

  // Correlation buffer
  const c = new Float32Array(trimmedSize);
  for (let i = 0; i < trimmedSize; i++) {
    for (let j = 0; j < trimmedSize - i; j++) {
      c[i] += trimmed[j] * trimmed[j + i];
    }
  }

  // Find first peak after first trough
  let d = 0;
  while (c[d] > c[d + 1]) {
    d++;
    if (d >= trimmedSize - 1) return -1;
  }

  let maxval = -1;
  let maxpos = -1;
  for (let i = d; i < trimmedSize; i++) {
    if (c[i] > maxval) {
      maxval = c[i];
      maxpos = i;
    }
  }

  let T0 = maxpos;

  // Parabolic interpolation for sub-sample accuracy
  const x1 = c[T0 - 1];
  const x2 = c[T0];
  const x3 = c[T0 + 1];
  const a = (x1 + x3 - 2 * x2) / 2;
  const b = (x3 - x1) / 2;
  if (a) {
    T0 = T0 - b / (2 * a);
  }

  return sampleRate / T0;
}

export default function GuitarTuner() {
  const [isListening, setIsListening] = useState<boolean>(false);
  const [permissionError, setPermissionError] = useState<string | null>(null);
  const [selectedTuningId, setSelectedTuningId] = useState<string>('standard');
  const [lockedStringNumber, setLockedStringNumber] = useState<number | null>(null); // null = Auto-detect
  const [a4Calibration, setA4Calibration] = useState<number>(440);

  // Tuner analysis state
  const [detectedFreq, setDetectedFreq] = useState<number | null>(null);
  const [detectedNote, setDetectedNote] = useState<string>('--');
  const [detectedOctave, setDetectedOctave] = useState<number | null>(null);
  const [targetFreq, setTargetFreq] = useState<number | null>(null);
  const [centsDiff, setCentsDiff] = useState<number>(0);
  const [matchedString, setMatchedString] = useState<TunedString | null>(null);
  const [playingStringNum, setPlayingStringNum] = useState<number | null>(null);

  // Audio nodes refs
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const rafIdRef = useRef<number | null>(null);
  const smoothedCentsRef = useRef<number>(0);

  const currentTuning =
    GUITAR_TUNINGS.find((t) => t.id === selectedTuningId) || GUITAR_TUNINGS[0];

  // Pluck reference guitar note
  const handlePlayReference = (str: TunedString) => {
    setPlayingStringNum(str.stringNumber);
    // Play with realistic guitar synthesis
    playGuitarFrequency(str.targetFreq, {
      duration: 2.2,
      volume: 0.45,
    });
    setTimeout(() => {
      setPlayingStringNum(null);
    }, 1200);
  };

  // Start microphone stream
  const startTuner = async () => {
    setPermissionError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: false,
          autoGainControl: false,
          noiseSuppression: false,
        },
      });

      mediaStreamRef.current = stream;

      const AudioCtxClass =
        window.AudioContext ||
        (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtxClass();
      audioContextRef.current = ctx;

      const source = ctx.createMediaStreamSource(stream);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 2048;
      source.connect(analyser);
      analyserRef.current = analyser;

      setIsListening(true);
      runPitchDetection();
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error ? err.message : 'Microphone access denied or not available.';
      setPermissionError(
        `Microphone permission required for auto pitch detection: ${errorMsg}. You can also use the audio reference buttons below to tune by ear.`
      );
      setIsListening(false);
    }
  };

  // Stop microphone stream
  const stopTuner = useCallback(() => {
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      mediaStreamRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close().catch(() => {});
      audioContextRef.current = null;
    }
    setIsListening(false);
    setDetectedFreq(null);
    setCentsDiff(0);
  }, []);

  // Continuous pitch detection loop
  const runPitchDetection = useCallback(() => {
    const analyser = analyserRef.current;
    const ctx = audioContextRef.current;

    if (!analyser || !ctx) return;

    const buffer = new Float32Array(analyser.fftSize);

    const updatePitch = () => {
      analyser.getFloatTimeDomainData(buffer);
      const freq = autoCorrelate(buffer, ctx.sampleRate);

      // Guitar frequencies typically range from 60 Hz to 1100 Hz
      if (freq > 60 && freq < 1200) {
        setDetectedFreq(Math.round(freq * 10) / 10);

        // Calculate MIDI note and cents offset
        const a4 = a4Calibration;
        const midiNumber = 69 + 12 * Math.log2(freq / a4);
        const roundedMidi = Math.round(midiNumber);
        const noteIndex = ((roundedMidi % 12) + 12) % 12;
        const octave = Math.floor(roundedMidi / 12) - 1;
        const noteName = NOTE_NAMES[noteIndex];

        // Theoretical frequency of rounded note
        const noteTargetFreq = a4 * Math.pow(2, (roundedMidi - 69) / 12);
        const rawCents = 1200 * Math.log2(freq / noteTargetFreq);
        const clampedCents = Math.max(-50, Math.min(50, rawCents));

        // Smooth cents to avoid jittery needle
        smoothedCentsRef.current =
          smoothedCentsRef.current * 0.65 + clampedCents * 0.35;
        const displayCents = Math.round(smoothedCentsRef.current * 10) / 10;

        setDetectedNote(noteName);
        setDetectedOctave(octave);
        setTargetFreq(Math.round(noteTargetFreq * 10) / 10);
        setCentsDiff(displayCents);

        // Find nearest string in current tuning
        const activeStrings = currentTuning.strings;
        if (lockedStringNumber !== null) {
          const locked = activeStrings.find(
            (s) => s.stringNumber === lockedStringNumber
          );
          if (locked) setMatchedString(locked);
        } else {
          // Auto-detect closest string
          let bestString = activeStrings[0];
          let minDiff = Math.abs(freq - activeStrings[0].targetFreq);
          for (let i = 1; i < activeStrings.length; i++) {
            const diff = Math.abs(freq - activeStrings[i].targetFreq);
            if (diff < minDiff) {
              minDiff = diff;
              bestString = activeStrings[i];
            }
          }
          setMatchedString(bestString);
        }
      }

      rafIdRef.current = requestAnimationFrame(updatePitch);
    };

    rafIdRef.current = requestAnimationFrame(updatePitch);
  }, [a4Calibration, currentTuning, lockedStringNumber]);

  useEffect(() => {
    return () => {
      stopTuner();
    };
  }, [stopTuner]);

  // Status badge styling
  const isInTune = Math.abs(centsDiff) <= 3;
  const isFlat = centsDiff < -3;
  const isSharp = centsDiff > 3;

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden transition-colors">
      {/* Background radial glow */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(circle_at_50%_20%,_var(--tw-gradient-stops))] from-emerald-500/30 dark:from-emerald-600 via-transparent to-transparent" />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-slate-200 dark:border-slate-800 relative z-10">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mb-1">
            <span>🎯 High-Precision Pitch Engine</span>
            <span className="text-slate-400 dark:text-slate-600">•</span>
            <span className="text-slate-600 dark:text-slate-400">Microphone Autocorrelation</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Interactive Guitar Tuner
          </h2>
        </div>

        {/* Start / Stop Microphone Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={isListening ? stopTuner : startTuner}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-black text-sm uppercase tracking-wider transition-all shadow-lg cursor-pointer active:scale-95 ${
              isListening
                ? 'bg-rose-600 hover:bg-rose-500 text-white shadow-rose-600/30 ring-2 ring-rose-400/40'
                : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/30 ring-2 ring-emerald-400/40'
            }`}
          >
            <span className={`w-3 h-3 rounded-full ${isListening ? 'bg-white animate-pulse' : 'bg-emerald-200'}`} />
            <span>{isListening ? 'Stop Listening' : 'Enable Microphone'}</span>
          </button>
        </div>
      </div>

      {permissionError && (
        <div className="my-4 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-xs sm:text-sm">
          {permissionError}
        </div>
      )}

      {/* Tuning Presets Row */}
      <div className="py-4 border-b border-slate-200 dark:border-slate-800/60 relative z-10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
            Select Guitar Tuning:
          </span>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <span>A4 =</span>
            <select
              value={a4Calibration}
              onChange={(e) => setA4Calibration(Number(e.target.value))}
              className="bg-slate-100 dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700 px-1 py-0.5 text-xs font-bold text-slate-900 dark:text-white"
            >
              {[432, 436, 438, 440, 442, 444].map((hz) => (
                <option key={hz} value={hz}>
                  {hz} Hz
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {GUITAR_TUNINGS.map((tuning) => (
            <button
              key={tuning.id}
              onClick={() => {
                setSelectedTuningId(tuning.id);
                setLockedStringNumber(null);
              }}
              className={`text-xs px-3 py-1.5 rounded-xl border transition-all cursor-pointer font-bold ${
                selectedTuningId === tuning.id
                  ? 'bg-emerald-600 text-white border-emerald-500 shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-emerald-400'
              }`}
            >
              {tuning.name}
            </button>
          ))}
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 italic">
          {currentTuning.description}
        </p>
      </div>

      {/* Central Tuner Gauge & Meter */}
      <div className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left / Center: Dynamic Needle Gauge & Big Note Display */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center text-center">
          {/* In-Tune / Flat / Sharp Badge */}
          <div className="mb-3">
            {!isListening ? (
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold border border-slate-200 dark:border-slate-700">
                <span>🎙️ Click &ldquo;Enable Microphone&rdquo; or pluck string below</span>
              </span>
            ) : detectedFreq === null ? (
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 text-xs font-bold border border-amber-200 dark:border-amber-800 animate-pulse">
                <span>🎵 Listening... Pluck a guitar string</span>
              </span>
            ) : isInTune ? (
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-black shadow-lg shadow-emerald-500/40 ring-4 ring-emerald-400/30 animate-bounce">
                <span>✓ PERFECTLY IN TUNE</span>
              </span>
            ) : isFlat ? (
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-500 text-slate-950 text-xs font-black shadow-md shadow-amber-500/30">
                <span>▲ TUNE UP (FLAT by {Math.abs(centsDiff)}¢)</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-indigo-600 text-white text-xs font-black shadow-md shadow-indigo-600/30">
                <span>▼ TUNE DOWN (SHARP by {centsDiff}¢)</span>
              </span>
            )}
          </div>

          {/* Large Note Name Display */}
          <div className="relative my-2 select-none">
            <div
              className={`text-8xl sm:text-9xl font-black font-mono tracking-tighter drop-shadow-sm transition-colors duration-150 ${
                isInTune && isListening
                  ? 'text-emerald-500 dark:text-emerald-400 scale-105'
                  : 'text-slate-900 dark:text-white'
              }`}
            >
              {detectedNote}
              {detectedOctave !== null && (
                <span className="text-3xl sm:text-4xl align-super text-slate-400 dark:text-slate-500 font-bold ml-1">
                  {detectedOctave}
                </span>
              )}
            </div>
            <div className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 mt-1">
              {detectedFreq ? `${detectedFreq} Hz` : '-- Hz'}{' '}
              {targetFreq ? `(Target: ${targetFreq} Hz)` : ''}
            </div>
          </div>

          {/* Visual Cents Meter Needle */}
          <div className="w-full max-w-lg mt-6 px-4">
            {/* Meter Scale Markings */}
            <div className="flex justify-between text-[11px] font-mono text-slate-400 dark:text-slate-500 mb-2">
              <span className="text-amber-600 dark:text-amber-400 font-bold">-50¢ Flat</span>
              <span>-25¢</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-extrabold text-sm">
                0¢
              </span>
              <span>+25¢</span>
              <span className="text-indigo-600 dark:text-indigo-400 font-bold">+50¢ Sharp</span>
            </div>

            {/* Needle Track */}
            <div className="relative h-6 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden border border-slate-300 dark:border-slate-700 shadow-inner">
              {/* Center Green In-Tune Zone */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-emerald-500/30 dark:bg-emerald-400/30 border-x border-emerald-500/50" />
              {/* Zero center tick */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-emerald-500 dark:bg-emerald-400" />

              {/* Moving Pointer Needle */}
              <div
                className={`absolute top-0 bottom-0 w-2.5 rounded-full transition-all duration-75 ease-out shadow-lg ${
                  isInTune
                    ? 'bg-emerald-500 shadow-emerald-500 ring-4 ring-emerald-400/40'
                    : isFlat
                    ? 'bg-amber-500 shadow-amber-500'
                    : 'bg-indigo-600 shadow-indigo-600'
                }`}
                style={{
                  left: `calc(${((centsDiff + 50) / 100) * 100}% - 5px)`,
                }}
              />
            </div>

            {/* Cents Readout */}
            <div className="text-center mt-3 text-sm font-mono font-bold">
              <span
                className={
                  isInTune
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : isFlat
                    ? 'text-amber-600 dark:text-amber-400'
                    : 'text-indigo-600 dark:text-indigo-400'
                }
              >
                {centsDiff > 0 ? `+${centsDiff}` : centsDiff} Cents
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: 6-String Headstock Pegboard & Reference Tones */}
        <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-950/70 p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-white">
                Strings &amp; Reference Tones
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Click any string to hear its audio pitch or lock tuning detection.
              </p>
            </div>
            {lockedStringNumber !== null && (
              <button
                onClick={() => setLockedStringNumber(null)}
                className="text-[11px] font-bold text-amber-600 dark:text-amber-400 hover:underline cursor-pointer"
              >
                Reset to Auto
              </button>
            )}
          </div>

          {/* 6 String Peg Cards */}
          <div className="space-y-2">
            {currentTuning.strings.map((str) => {
              const isLocked = lockedStringNumber === str.stringNumber;
              const isAutoMatched =
                lockedStringNumber === null && matchedString?.stringNumber === str.stringNumber;
              const isPlaying = playingStringNum === str.stringNumber;

              return (
                <div
                  key={str.stringNumber}
                  onClick={() => setLockedStringNumber(isLocked ? null : str.stringNumber)}
                  className={`flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer ${
                    isLocked || isAutoMatched
                      ? isInTune && isListening
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-slate-900 dark:text-white ring-2 ring-emerald-400/30'
                        : 'bg-amber-50 dark:bg-amber-950/30 border-amber-400 text-slate-900 dark:text-white ring-2 ring-amber-400/30'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                        isLocked || isAutoMatched
                          ? 'bg-amber-500 text-slate-950'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {str.stringNumber}
                    </div>
                    <div>
                      <span className="font-mono font-black text-base text-slate-900 dark:text-white mr-1.5">
                        {str.name}
                      </span>
                      <span className="text-xs text-slate-500 font-mono">
                        {str.targetFreq} Hz
                      </span>
                    </div>
                  </div>

                  {/* Play Reference Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlayReference(str);
                    }}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      isPlaying
                        ? 'bg-emerald-600 text-white scale-105 shadow-md shadow-emerald-500/30'
                        : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700'
                    }`}
                    title={`Hear ${str.name} reference audio`}
                  >
                    <span>{isPlaying ? '🎵' : '🔊'}</span>
                    <span>{isPlaying ? 'Plucking...' : 'Hear Pitch'}</span>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="pt-2 text-center text-xs text-slate-500 dark:text-slate-400">
            💡 Tip: Pluck firmly near the 12th fret with thumb or pick for the cleanest fundamental harmonic tone.
          </div>
        </div>
      </div>
    </div>
  );
}

