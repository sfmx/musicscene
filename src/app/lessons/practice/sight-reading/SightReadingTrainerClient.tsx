"use client";

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import Link from 'next/link';
import { playGuitarNote, GUITAR_OPEN_STRINGS_MIDI } from '@/lib/guitarAudio';
import { LANDMARK_NOTES, StaffNote } from '@/components/Theory/StaffFretboardExplorer';

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
  const [inputMode, setInputMode] = useState<'letters' | 'fretboard'>('letters');

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
        // Notes on strings 5 & 6 (ledger lines): E3, F3, G3, A3, B3, C4
        return LANDMARK_NOTES.filter(n => n.step >= -7 && n.step <= -2);
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
  }, [activePool, targetNote.name]);

  // Handle Level Change
  const handleLevelChange = (newLevel: TrainerLevel) => {
    setLevel(newLevel);
    setCurrentStreak(0);
    setScore({ correct: 0, total: 0 });
    setLastResult(null);
    setRevealedHint(null);
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

  // Check Letter Answer (A, B, C, D, E, F, G)
  const handleLetterGuess = (letter: string) => {
    const isCorrect = targetNote.naturalName.toUpperCase() === letter.toUpperCase();

    if (isCorrect) {
      playTargetSound(targetNote);
      setLastResult('correct');
      setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
      const newStreak = currentStreak + 1;
      setCurrentStreak(newStreak);
      if (newStreak > bestStreak) setBestStreak(newStreak);

      setTimeout(() => {
        pickNewTarget();
      }, 700);
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
      setLastResult('correct');
      setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
      const newStreak = currentStreak + 1;
      setCurrentStreak(newStreak);
      if (newStreak > bestStreak) setBestStreak(newStreak);

      setTimeout(() => {
        pickNewTarget();
      }, 700);
    } else {
      setLastResult('wrong');
      setScore(prev => ({ ...prev, total: prev.total + 1 }));
      setCurrentStreak(0);
    }
  };

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
    for (let s = -2; s >= targetNote.step - 1; s -= 2) {
      ledgerLines.push(line1Y - (s * (lineSpacing / 2)));
    }
  } else if (targetNote.step >= 10) {
    for (let s = 10; s <= targetNote.step + 1; s += 2) {
      ledgerLines.push(line1Y - (s * (lineSpacing / 2)));
    }
  }

  // Accuracy percentage
  const accuracy = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 100;

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
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer flex items-center gap-1.5 ${
                soundEnabled
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-400 border-slate-300 dark:border-slate-700'
              }`}
            >
              <span>{soundEnabled ? '🔊 Sound On' : '🔇 Muted'}</span>
            </button>

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
            </div>
          </div>
        </div>

        {/* Level Preset Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          {[
            { id: 'open-position', label: '1. Open Position (Frets 0-3)', badge: 'Core' },
            { id: 'strings-1-2', label: '2. Strings 1 & 2 (High E & B)', badge: 'Treble' },
            { id: 'strings-3-4', label: '3. Strings 3 & 4 (G & D)', badge: 'Mid' },
            { id: 'strings-5-6', label: '4. Strings 5 & 6 (A & Low E)', badge: 'Ledger Lines' },
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
