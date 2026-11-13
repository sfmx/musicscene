"use client";

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import Link from 'next/link';
import { playGuitarNote, GUITAR_OPEN_STRINGS_MIDI } from '@/lib/guitarAudio';
import { LANDMARK_NOTES, StaffNote } from '@/components/Theory/StaffFretboardExplorer';
import {
  autoCorrelate,
  frequencyToPitch,
  midiToPitch,
  pitchClassMatch,
  exactPitchMatch,
  PitchResult,
} from '@/lib/pitchDetection';

export type TrainerLevel =
  | 'open-position'
  | 'strings-1-2'
  | 'strings-3-4'
  | 'strings-5-6'
  | 'accidentals'
  | 'full-neck';

interface LevelConfig {
  id: TrainerLevel;
  name: string;
  badge: string;
  description: string;
  notes: StaffNote[];
  includeAccidentals?: boolean;
}

// Generate sharp and flat variants of natural notes for the accidentals level
const ACCIDENTAL_NOTES: StaffNote[] = [
  { name: 'F#4', naturalName: 'F', accidental: 'sharp', octave: 4, step: 1, soundingMidi: 54, description: 'Line 1 Space (F#) - String 4, Fret 4' },
  { name: 'G#4', naturalName: 'G', accidental: 'sharp', octave: 4, step: 2, soundingMidi: 56, description: 'Line 2 Sharp (G#) - String 3, Fret 1' },
  { name: 'Bb4', naturalName: 'B', accidental: 'flat', octave: 4, step: 4, soundingMidi: 58, description: 'Line 3 Flat (Bb) - String 3, Fret 3' },
  { name: 'C#5', naturalName: 'C', accidental: 'sharp', octave: 5, step: 5, soundingMidi: 61, description: 'Space 3 Sharp (C#) - String 2, Fret 2' },
  { name: 'Eb5', naturalName: 'E', accidental: 'flat', octave: 5, step: 7, soundingMidi: 63, description: 'Space 4 Flat (Eb) - String 2, Fret 4' },
  { name: 'F#5', naturalName: 'F', accidental: 'sharp', octave: 5, step: 8, soundingMidi: 66, description: 'Line 5 Sharp (F#) - String 1, Fret 2' },
];

export default function SightReadingTrainerClient() {
  const [level, setLevel] = useState<TrainerLevel>('open-position');
  const [targetNote, setTargetNote] = useState<StaffNote>(LANDMARK_NOTES[5]); // Middle C default
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [currentStreak, setCurrentStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [lastResult, setLastResult] = useState<'correct' | 'wrong' | null>(null);
  const [revealedHint, setRevealedHint] = useState<string | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [inputMode, setInputMode] = useState<'letters' | 'fretboard' | 'mic'>('letters');

  // Microphone real-instrument practice state
  const [isMicListening, setIsMicListening] = useState(false);
  const [micPermissionError, setMicPermissionError] = useState<string | null>(null);
  const [micLevel, setMicLevel] = useState(0); // 0 to 100 for VU meter
  const [detectedPitch, setDetectedPitch] = useState<PitchResult | null>(null);
  const [octaveMode, setOctaveMode] = useState<'strict' | 'any'>('strict');
  const [micSensitivity, setMicSensitivity] = useState<'normal' | 'sensitive' | 'quiet'>('normal');
  const [holdProgress, setHoldProgress] = useState(0); // 0 to 100% confirmation bar
  const [micFeedbackMsg, setMicFeedbackMsg] = useState<string | null>(null);

  // Audio stream refs
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const rafIdRef = useRef<number | null>(null);
  const consecutiveMatchesRef = useRef<number>(0);
  const cooldownUntilRef = useRef<number>(0);
  const targetNoteRef = useRef<StaffNote>(targetNote);
  const octaveModeRef = useRef<'strict' | 'any'>(octaveMode);
  const micSensitivityRef = useRef<'normal' | 'sensitive' | 'quiet'>(micSensitivity);

  // Keep refs in sync with state for requestAnimationFrame loop
  useEffect(() => {
    targetNoteRef.current = targetNote;
  }, [targetNote]);

  useEffect(() => {
    octaveModeRef.current = octaveMode;
  }, [octaveMode]);

  useEffect(() => {
    micSensitivityRef.current = micSensitivity;
  }, [micSensitivity]);

  // Filter available target notes by selected level
  const activePool = useMemo<StaffNote[]>(() => {
    switch (level) {
      case 'strings-1-2':
        // Notes on strings 1 & 2 in open pos: B4, C5, D5, E5, F5, G5
        return LANDMARK_NOTES.filter(n => n.step >= 4 && n.step <= 9);
      case 'strings-3-4':
        // Notes on strings 3 & 4 in open pos: D4, E4, F4, G4, A4
        return LANDMARK_NOTES.filter(n => n.step >= -1 && n.step <= 3);
      case 'strings-5-6':
        // Notes on strings 4, 5 & 6 (Sub-staff ledger lines): E3, F3, G3, A3, B3, C4, D4
        return LANDMARK_NOTES.filter(n => n.step >= -7 && n.step <= -1);
      case 'accidentals':
        return ACCIDENTAL_NOTES;
      case 'full-neck':
        return [...LANDMARK_NOTES, ...ACCIDENTAL_NOTES];
      case 'open-position':
      default:
        // All natural notes from Low E3 to High G5
        return LANDMARK_NOTES.filter(n => n.step >= -7 && n.step <= 9);
    }
  }, [level]);

  // Pick a new random target note different from current
  const pickNewTarget = useCallback(() => {
    if (activePool.length === 0) return;
    let next: StaffNote;
    do {
      const idx = Math.floor(Math.random() * activePool.length);
      next = activePool[idx];
    } while (activePool.length > 1 && next.name === targetNote.name);

    setTargetNote(next);
    setLastResult(null);
    setRevealedHint(null);
    setHoldProgress(0);
    setMicFeedbackMsg(null);
    consecutiveMatchesRef.current = 0;
    // Set a 600ms cooldown so the ringing guitar note doesn't instantly match the new note
    cooldownUntilRef.current = Date.now() + 650;
  }, [activePool, targetNote.name]);

  // Handle Level Change
  const handleLevelChange = (newLevel: TrainerLevel) => {
    setLevel(newLevel);
    setCurrentStreak(0);
    setScore({ correct: 0, total: 0 });
    setLastResult(null);
    setRevealedHint(null);
    setHoldProgress(0);
    setMicFeedbackMsg(null);
    consecutiveMatchesRef.current = 0;
  };

  // Pick first note when level changes
  useEffect(() => {
    pickNewTarget();
  }, [level]);

  // Play audio on successful answer
  const playTargetSound = useCallback((note: StaffNote) => {
    if (!soundEnabled) return;
    // Find matching string/fret for note
    for (let s = 0; s < GUITAR_OPEN_STRINGS_MIDI.length; s++) {
      const fret = note.soundingMidi - GUITAR_OPEN_STRINGS_MIDI[s];
      if (fret >= 0 && fret <= 15) {
        playGuitarNote(s, fret, { volume: 0.5, duration: 2.0 });
        break;
      }
    }
  }, [soundEnabled]);

  // Trigger correct answer flow
  const handleSuccess = useCallback((note: StaffNote) => {
    playTargetSound(note);
    setLastResult('correct');
    setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
    setCurrentStreak(prev => {
      const next = prev + 1;
      setBestStreak(b => Math.max(b, next));
      return next;
    });

    setTimeout(() => {
      pickNewTarget();
    }, 700);
  }, [playTargetSound, pickNewTarget]);

  // Check Letter Answer (A, B, C, D, E, F, G)
  const handleLetterGuess = (letter: string) => {
    const isCorrect = targetNote.naturalName.toUpperCase() === letter.toUpperCase();

    if (isCorrect) {
      handleSuccess(targetNote);
    } else {
      setLastResult('wrong');
      setScore(prev => ({ ...prev, total: prev.total + 1 }));
      setCurrentStreak(0);
    }
  };

  // Check Fretboard Click (stringIndex 0-5, fret 0-15)
  const handleFretboardClick = (stringIndex: number, fret: number) => {
    const clickedMidi = GUITAR_OPEN_STRINGS_MIDI[stringIndex] + fret;
    const isCorrect = clickedMidi === targetNote.soundingMidi;

    if (soundEnabled) {
      playGuitarNote(stringIndex, fret, { volume: 0.45, duration: 1.5 });
    }

    if (isCorrect) {
      handleSuccess(targetNote);
    } else {
      setLastResult('wrong');
      setScore(prev => ({ ...prev, total: prev.total + 1 }));
      setCurrentStreak(0);
    }
  };

  // Stop microphone stream safely
  const stopMicrophone = useCallback(() => {
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
      mediaStreamRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close().catch(() => {});
      audioContextRef.current = null;
    }
    analyserRef.current = null;
    setIsMicListening(false);
    setDetectedPitch(null);
    setMicLevel(0);
    setHoldProgress(0);
    consecutiveMatchesRef.current = 0;
  }, []);

  // Continuous microphone pitch detection loop
  const runMicPitchLoop = useCallback(() => {
    const analyser = analyserRef.current;
    const ctx = audioContextRef.current;
    if (!analyser || !ctx) return;

    const buffer = new Float32Array(analyser.fftSize);

    const updateFrame = () => {
      if (!analyserRef.current || !audioContextRef.current) return;

      analyserRef.current.getFloatTimeDomainData(buffer);

      // 1. Calculate RMS volume for live VU meter
      let sumSq = 0;
      for (let i = 0; i < buffer.length; i++) {
        sumSq += buffer[i] * buffer[i];
      }
      const rms = Math.sqrt(sumSq / buffer.length);
      const normalizedLevel = Math.min(100, Math.round(rms * 450));
      setMicLevel(normalizedLevel);

      // Sensitivity threshold
      let minRms = 0.012;
      if (micSensitivityRef.current === 'sensitive') minRms = 0.007;
      if (micSensitivityRef.current === 'quiet') minRms = 0.022;

      const freq = autoCorrelate(buffer, ctx.sampleRate, minRms);

      // Guitar frequencies typically range from 60 Hz to 1200 Hz
      if (freq > 60 && freq < 1200) {
        const pitch = frequencyToPitch(freq);
        setDetectedPitch(pitch);

        const currentTarget = targetNoteRef.current;
        const now = Date.now();

        // Check if during cooldown window
        if (now >= cooldownUntilRef.current) {
          const isExact = exactPitchMatch(pitch.roundedMidi, currentTarget.soundingMidi);
          const isPitchClass = pitchClassMatch(pitch.roundedMidi, currentTarget.soundingMidi);

          const matches = octaveModeRef.current === 'strict' ? isExact : isPitchClass;

          if (matches) {
            consecutiveMatchesRef.current += 1;
            // Fill hold progress bar (reaches 100% after ~8 stable frames, roughly 130-200ms)
            const progress = Math.min(100, Math.round((consecutiveMatchesRef.current / 8) * 100));
            setHoldProgress(progress);

            if (consecutiveMatchesRef.current >= 8) {
              // Confirmed pitch strike!
              setHoldProgress(100);
              setMicFeedbackMsg(`✓ Perfect Note! Recognized ${pitch.scientificName}`);
              handleSuccess(currentTarget);
              consecutiveMatchesRef.current = 0;
            }
          } else {
            // Decay match progress if player hits wrong note or pitch wanders
            consecutiveMatchesRef.current = Math.max(0, consecutiveMatchesRef.current - 1);
            setHoldProgress(Math.min(100, Math.round((consecutiveMatchesRef.current / 8) * 100)));

            // Provide octave coaching if same note but wrong register
            if (isPitchClass && !isExact && octaveModeRef.current === 'strict') {
              const targetPitchInfo = midiToPitch(currentTarget.soundingMidi);
              if (pitch.roundedMidi > currentTarget.soundingMidi) {
                setMicFeedbackMsg(`Played ${pitch.scientificName} (Higher octave) - play lower note on guitar (${targetPitchInfo.scientificName})`);
              } else {
                setMicFeedbackMsg(`Played ${pitch.scientificName} (Lower octave) - play higher note on guitar (${targetPitchInfo.scientificName})`);
              }
            } else {
              setMicFeedbackMsg(null);
            }
          }
        }
      } else {
        // No clear periodic guitar note in this frame
        if (Date.now() >= cooldownUntilRef.current) {
          consecutiveMatchesRef.current = Math.max(0, consecutiveMatchesRef.current - 0.5);
          setHoldProgress(Math.min(100, Math.round((consecutiveMatchesRef.current / 8) * 100)));
        }
      }

      rafIdRef.current = requestAnimationFrame(updateFrame);
    };

    rafIdRef.current = requestAnimationFrame(updateFrame);
  }, [handleSuccess]);

  // Start microphone stream
  const startMicrophone = async () => {
    setMicPermissionError(null);
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

      setIsMicListening(true);
      runMicPitchLoop();
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error ? err.message : 'Microphone access denied or not available.';
      setMicPermissionError(
        `Microphone permission required: ${errorMsg}. Ensure your microphone is plugged in and allowed in browser site settings.`
      );
      setIsMicListening(false);
    }
  };

  // Clean up microphone when leaving mic mode or unmounting
  useEffect(() => {
    if (inputMode !== 'mic' && isMicListening) {
      stopMicrophone();
    }
    return () => {
      stopMicrophone();
    };
  }, [inputMode, isMicListening, stopMicrophone]);

  // Listen to physical keyboard shortcuts (A, B, C, D, E, F, G)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      const key = e.key.toUpperCase();
      if (['A', 'B', 'C', 'D', 'E', 'F', 'G'].includes(key)) {
        handleLetterGuess(key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [targetNote]);

  // Staff SVG dimensions & metrics
  const staffWidth = 360;
  const staffHeight = 200;
  const staffCenterY = 100;
  const lineSpacing = 16;
  const line1Y = staffCenterY + lineSpacing * 2; // Bottom line (E4, step 0)
  const noteY = line1Y - (targetNote.step * (lineSpacing / 2));
  const noteX = 180;

  // Ledger lines
  const ledgerLines: number[] = [];
  if (targetNote.step <= -2) {
    const targetLine = targetNote.step % 2 === 0 ? targetNote.step : targetNote.step + 1;
    for (let s = -2; s >= targetLine; s -= 2) {
      ledgerLines.push(line1Y - (s * (lineSpacing / 2)));
    }
  } else if (targetNote.step >= 10) {
    const targetLineAbove = targetNote.step % 2 === 0 ? targetNote.step : targetNote.step - 1;
    for (let s = 10; s <= targetLineAbove; s -= 2) {
      ledgerLines.push(line1Y - (s * (lineSpacing / 2)));
    }
  }

  // Accuracy percentage
  const accuracy = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 100;

  // Target note pitch information for display in mic mode
  const targetPitchDetails = useMemo(() => {
    return midiToPitch(targetNote.soundingMidi);
  }, [targetNote.soundingMidi]);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Level Select & Header Bar */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 sm:p-6 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold text-xs border border-amber-500/20">
                Practice Trainer
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">Sight-Reading Note Flashcards</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Interactive Sight-Reading Trainer
            </h1>
          </div>

          {/* Sound & Mode Switchers */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer flex items-center gap-1.5 ${
                soundEnabled
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-400 border-slate-300 dark:border-slate-700'
              }`}
            >
              <span>{soundEnabled ? '🔊 Audio On' : '🔇 Audio Muted'}</span>
            </button>

            {/* Input Modes: Letters, Fretboard, Mic In */}
            <div className="flex items-center gap-0.5 bg-slate-100 dark:bg-slate-800 p-0.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
              <button
                type="button"
                onClick={() => setInputMode('letters')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  inputMode === 'letters'
                    ? 'bg-amber-500 text-slate-950 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Letters
              </button>
              <button
                type="button"
                onClick={() => setInputMode('fretboard')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  inputMode === 'fretboard'
                    ? 'bg-amber-500 text-slate-950 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Fretboard
              </button>
              <button
                type="button"
                onClick={() => setInputMode('mic')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1 ${
                  inputMode === 'mic'
                    ? 'bg-amber-500 text-slate-950 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>🎤</span>
                <span>Guitar Mic</span>
              </button>
            </div>
          </div>
        </div>

        {/* Level Preset Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          {[
            { id: 'open-position', label: '1. Open Position (Frets 0-3)', badge: 'Core' },
            { id: 'strings-1-2', label: '2. Strings 1 & 2 (High E & B)', badge: 'Treble' },
            { id: 'strings-3-4', label: '3. Strings 3 & 4 (G & D)', badge: 'Mid' },
            { id: 'strings-5-6', label: '4. Sub-Staff Ledger Lines (Strings 4-6)', badge: 'Bass Focus' },
            { id: 'accidentals', label: '5. Sharps & Flats', badge: 'Accidentals' },
            { id: 'full-neck', label: '6. Full Fretboard (Frets 0-12)', badge: 'Master' },
          ].map(lvl => (
            <button
              key={lvl.id}
              type="button"
              onClick={() => handleLevelChange(lvl.id as TrainerLevel)}
              className={`px-3 py-2 rounded-xl font-medium transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 border ${
                level === lvl.id
                  ? 'bg-slate-900 text-white dark:bg-amber-500 dark:text-slate-950 border-transparent font-bold shadow-md'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-400'
              }`}
            >
              <span>{lvl.label}</span>
            </button>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-3 pt-2">
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-center">
            <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Score</span>
            <span className="text-xl font-black text-slate-900 dark:text-white">
              {score.correct} <span className="text-xs text-slate-400">/ {score.total}</span>
            </span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-center">
            <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Streak</span>
            <span className="text-xl font-black text-amber-500 flex items-center justify-center gap-1">
              <span>🔥</span>
              <span>{currentStreak}</span>
            </span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-center">
            <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Best Streak</span>
            <span className="text-xl font-black text-emerald-600 dark:text-emerald-400">
              {bestStreak}
            </span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-center">
            <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Accuracy</span>
            <span className="text-xl font-black text-cyan-600 dark:text-cyan-400">
              {accuracy}%
            </span>
          </div>
        </div>
      </div>

      {/* Main Flashcard Card: Staff Presentation */}
      <div className={`relative bg-white dark:bg-slate-900 border-2 rounded-3xl p-6 sm:p-8 shadow-2xl transition-all duration-300 flex flex-col items-center ${
        lastResult === 'correct'
          ? 'border-emerald-500/80 ring-4 ring-emerald-500/20'
          : lastResult === 'wrong'
          ? 'border-red-500/80 ring-4 ring-red-500/20'
          : 'border-slate-200 dark:border-slate-800'
      }`}>
        {/* Floating Feedback Banner */}
        {lastResult === 'correct' && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-emerald-500 text-slate-950 font-black text-xs shadow-lg animate-bounce flex items-center gap-1">
            <span>✓ CORRECT!</span>
            <span>{targetNote.name}</span>
          </div>
        )}
        {lastResult === 'wrong' && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-red-500 text-white font-black text-xs shadow-lg animate-pulse flex items-center gap-1">
            <span>✗ TRY AGAIN</span>
            <span>({targetNote.name})</span>
          </div>
        )}

        {/* Staff SVG Display */}
        <div className="w-full max-w-[340px] aspect-[16/9] flex items-center justify-center bg-[#faf9f5] rounded-2xl border border-stone-300 p-2 shadow-inner overflow-hidden select-none mb-6">
          <svg viewBox={`0 0 ${staffWidth} ${staffHeight}`} className="w-full h-full">
            {/* 5 Staff Lines */}
            {[0, 1, 2, 3, 4].map((i) => {
              const y = line1Y - i * lineSpacing;
              return (
                <line
                  key={i}
                  x1="30"
                  y1={y}
                  x2={staffWidth - 30}
                  y2={y}
                  stroke="#1e293b"
                  strokeWidth="1.6"
                />
              );
            })}

            {/* Treble Clef */}
            <text x="45" y={line1Y - 10} fontSize="68" fontFamily="serif" fill="#0f172a" className="select-none pointer-events-none">
              𝄞
            </text>
            <text x="65" y={line1Y + 16} fontSize="11" fontWeight="bold" fontFamily="sans-serif" fill="#475569">
              8vb
            </text>

            {/* Ledger lines */}
            {ledgerLines.map((y, idx) => (
              <line key={idx} x1={noteX - 18} y1={y} x2={noteX + 18} y2={y} stroke="#0f172a" strokeWidth="1.8" />
            ))}

            {/* Accidental */}
            {targetNote.accidental === 'sharp' && (
              <text x={noteX - 22} y={noteY + 7} fontSize="24" fontWeight="bold" fill="#d97706" textAnchor="middle">
                ♯
              </text>
            )}
            {targetNote.accidental === 'flat' && (
              <text x={noteX - 20} y={noteY + 6} fontSize="24" fontWeight="bold" fill="#2563eb" textAnchor="middle">
                ♭
              </text>
            )}

            {/* Note head */}
            <ellipse cx={noteX} cy={noteY} rx="9.5" ry="6.5" fill="#0f172a" transform={`rotate(-22 ${noteX} ${noteY})`} />

            {/* Stem */}
            {targetNote.step < 4 ? (
              <line x1={noteX + 8.5} y1={noteY - 2} x2={noteX + 8.5} y2={noteY - 48} stroke="#0f172a" strokeWidth="1.6" />
            ) : (
              <line x1={noteX - 8.5} y1={noteY + 2} x2={noteX - 8.5} y2={noteY + 48} stroke="#0f172a" strokeWidth="1.6" />
            )}
          </svg>
        </div>

        {/* Sub-Staff Ledger Clue (When testing notes below the staff) */}
        {targetNote.step <= -1 && (
          <div className="flex items-center justify-center -mt-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30 text-xs font-semibold flex items-center gap-1.5 shadow-xs">
              <span>💡 Ledger Clue:</span>
              <span className="font-normal text-slate-700 dark:text-slate-300">
                {targetNote.step === -1 && 'Hangs directly below Staff Line 1 (0 Ledger Lines = Open D)'}
                {targetNote.step === -2 && '1 Ledger Line Strike (Middle C • String 5, Fret 3)'}
                {targetNote.step === -3 && 'Hangs below 1st Ledger Line (B • String 5, Fret 2)'}
                {targetNote.step === -4 && '2 Ledger Lines Strike (Open 5th String A)'}
                {targetNote.step === -5 && 'Hangs below 2nd Ledger Line (G • String 6, Fret 3)'}
                {targetNote.step === -6 && '3rd Ledger Line Strike (F • String 6, Fret 1)'}
                {targetNote.step === -7 && 'Hangs below 3rd Ledger Line (Lowest Guitar Note = Low E, String 6 Open)'}
              </span>
            </span>
          </div>
        )}

        {/* Input Option 1: Note Letter Buttons (A to G) */}
        {inputMode === 'letters' && (
          <div className="w-full space-y-4">
            <div className="text-center text-xs text-slate-500 dark:text-slate-400">
              Identify the note pitch on the staff (Click button or press key <span className="font-mono font-bold text-amber-500">A-G</span> on your keyboard):
            </div>

            <div className="grid grid-cols-7 gap-2 max-w-lg mx-auto">
              {['C', 'D', 'E', 'F', 'G', 'A', 'B'].map((letter) => (
                <button
                  key={letter}
                  type="button"
                  onClick={() => handleLetterGuess(letter)}
                  className="py-3 sm:py-4 rounded-2xl bg-slate-100 hover:bg-amber-500 hover:text-slate-950 dark:bg-slate-800 dark:hover:bg-amber-500 dark:hover:text-slate-950 text-slate-900 dark:text-white font-black text-lg sm:text-xl transition-all shadow-md active:scale-95 cursor-pointer border border-slate-200 dark:border-slate-700"
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Option 2: Interactive Fretboard Click */}
        {inputMode === 'fretboard' && (
          <div className="w-full space-y-3">
            <div className="text-center text-xs text-slate-500 dark:text-slate-400">
              Click the exact string &amp; fret on the guitar neck that plays this note:
            </div>

            <div className="w-full bg-[#1e1b18] border-2 border-stone-700 rounded-2xl p-3 shadow-inner overflow-x-auto select-none">
              <div className="min-w-[620px] relative">
                {/* Fret Markers */}
                <div className="grid grid-cols-16 text-center text-[10px] font-bold text-stone-400 pb-1.5 border-b border-stone-800">
                  <span className="text-amber-400">Open</span>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(f => (
                    <span key={f} className={f === 3 || f === 5 || f === 7 || f === 9 || f === 12 || f === 15 ? 'text-amber-400 font-extrabold' : ''}>
                      {f}
                    </span>
                  ))}
                </div>

                {/* Strings (From High E string 5 down to Low E string 0) */}
                {[5, 4, 3, 2, 1, 0].map((strIdx) => {
                  const stringGauges = [1.5, 2.0, 2.5, 3.2, 4.0, 5.0];
                  const gauge = stringGauges[5 - strIdx];

                  return (
                    <div key={strIdx} className="relative h-8 flex items-center">
                      <div className="absolute inset-x-0 bg-stone-300 shadow-xs pointer-events-none" style={{ height: `${gauge}px` }} />
                      <div className="grid grid-cols-16 w-full h-full relative z-10">
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((fret) => (
                          <button
                            key={fret}
                            type="button"
                            onClick={() => handleFretboardClick(strIdx, fret)}
                            className={`h-full border-r border-stone-700/50 flex items-center justify-center transition-all cursor-pointer hover:bg-amber-500/30 ${
                              fret === 0 ? 'border-r-4 border-amber-600/80 bg-stone-900/60' : ''
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Input Option 3: Real Guitar Microphone Pitch Detection */}
        {inputMode === 'mic' && (
          <div className="w-full max-w-xl mx-auto space-y-4">
            {/* Permission Alert if Denied */}
            {micPermissionError && (
              <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-300 text-xs">
                {micPermissionError}
              </div>
            )}

            {!isMicListening ? (
              <div className="text-center p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/70 space-y-3">
                <div className="inline-flex p-3 rounded-2xl bg-amber-500/10 text-amber-500 text-2xl">
                  🎸
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Play with Your Real Guitar
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                  Position your guitar near your laptop or phone microphone (or connect through an audio interface). Pluck each note on your guitar to answer.
                </p>

                <button
                  type="button"
                  onClick={startMicrophone}
                  className="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-lg hover:shadow-amber-500/20 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  <span>🎙️</span>
                  <span>Start Microphone Listening</span>
                </button>
              </div>
            ) : (
              <div className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-4">
                {/* Listening Status & Stop Button */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      Listening to Guitar...
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={stopMicrophone}
                    className="px-2.5 py-1 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-red-500 hover:text-white text-xs font-bold transition-all cursor-pointer"
                  >
                    ⏹️ Stop Mic
                  </button>
                </div>

                {/* Target Pitch Note Card */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 text-center">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Target Note
                    </span>
                    <span className="text-2xl font-black text-slate-900 dark:text-white">
                      {targetNote.name}
                    </span>
                    <span className="block text-[11px] text-amber-500 font-semibold mt-0.5">
                      Sounding {targetPitchDetails.scientificName}
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 text-center">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Detected Pitch
                    </span>
                    <span className={`text-2xl font-black ${
                      detectedPitch
                        ? exactPitchMatch(detectedPitch.roundedMidi, targetNote.soundingMidi)
                          ? 'text-emerald-500'
                          : 'text-amber-500'
                        : 'text-slate-400'
                    }`}>
                      {detectedPitch ? detectedPitch.scientificName : '--'}
                    </span>
                    <span className="block text-[11px] text-slate-500 font-medium mt-0.5">
                      {detectedPitch ? `${detectedPitch.freq} Hz (${detectedPitch.cents > 0 ? '+' : ''}${detectedPitch.cents}¢)` : 'Pluck string...'}
                    </span>
                  </div>
                </div>

                {/* Note Stability Hold Confirmation Progress */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">Pitch Recognition Hold</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{holdProgress}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 transition-all duration-75 rounded-full"
                      style={{ width: `${holdProgress}%` }}
                    />
                  </div>
                </div>

                {/* Real-Time Input VU Level Meter */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[10px] text-slate-400">
                    <span>Microphone Input Level</span>
                    <span>{micLevel}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-75 rounded-full ${
                        micLevel > 65 ? 'bg-red-500' : micLevel > 20 ? 'bg-emerald-500' : 'bg-slate-400'
                      }`}
                      style={{ width: `${micLevel}%` }}
                    />
                  </div>
                </div>

                {/* Dynamic Pitch Feedback Message */}
                {micFeedbackMsg && (
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs text-center font-medium">
                    {micFeedbackMsg}
                  </div>
                )}

                {/* Mic Configuration Options */}
                <div className="pt-2 border-t border-slate-200 dark:border-slate-700/60 flex flex-wrap items-center justify-between gap-2 text-xs">
                  {/* Octave Mode Switcher */}
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-500 font-medium">Register:</span>
                    <div className="flex items-center gap-0.5 bg-slate-200 dark:bg-slate-700 p-0.5 rounded-lg">
                      <button
                        type="button"
                        onClick={() => setOctaveMode('strict')}
                        className={`px-2 py-0.5 rounded-md font-bold text-[11px] transition-all cursor-pointer ${
                          octaveMode === 'strict'
                            ? 'bg-amber-500 text-slate-950 shadow-xs'
                            : 'text-slate-600 dark:text-slate-300'
                        }`}
                      >
                        Strict Octave
                      </button>
                      <button
                        type="button"
                        onClick={() => setOctaveMode('any')}
                        className={`px-2 py-0.5 rounded-md font-bold text-[11px] transition-all cursor-pointer ${
                          octaveMode === 'any'
                            ? 'bg-amber-500 text-slate-950 shadow-xs'
                            : 'text-slate-600 dark:text-slate-300'
                        }`}
                      >
                        Any Octave
                      </button>
                    </div>
                  </div>

                  {/* Sensitivity Switcher */}
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-500 font-medium">Mic Sensitivity:</span>
                    <select
                      value={micSensitivity}
                      onChange={(e) => setMicSensitivity(e.target.value as 'normal' | 'sensitive' | 'quiet')}
                      className="bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-2 py-0.5 rounded-lg text-[11px] font-semibold border-none cursor-pointer outline-none"
                    >
                      <option value="normal">Normal</option>
                      <option value="sensitive">High Gain (Quiet Pick)</option>
                      <option value="quiet">Noisy Room Filter</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Hint & Skip Buttons */}
        <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 w-full justify-between">
          <button
            type="button"
            onClick={() => {
              setRevealedHint(targetNote.description);
            }}
            className="text-xs px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-amber-500 font-medium transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>💡 Need a Hint?</span>
          </button>

          {revealedHint && (
            <span className="text-xs text-amber-500 font-semibold animate-pulse">
              {revealedHint}
            </span>
          )}

          <button
            type="button"
            onClick={pickNewTarget}
            className="text-xs px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium transition-colors cursor-pointer"
          >
            Skip Note →
          </button>
        </div>
      </div>

      {/* Cross-Link Back to Theory Guide */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
        <div>
          Need to review the staff lines, spaces, and Open Position notes?
        </div>
        <Link
          href="/lessons/theory/reading-sheet-music"
          className="font-bold text-amber-500 hover:text-amber-400 transition-colors flex items-center gap-1"
        >
          <span>Read Full Sheet Music Guide</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
