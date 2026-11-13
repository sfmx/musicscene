"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { getGuitarAudioContext } from '@/lib/guitarAudio';
import { playMetronomeTick, playWoodblockTick } from '@/lib/rhythmAudio';
import {
  RHYTHM_PATTERNS,
  RhythmNote,
  evaluateRhythmTap,
  HitRating,
  HitEvaluation,
} from '@/lib/rhythmTrainerData';

interface NoteFeedback {
  noteId: string;
  rating: HitRating;
  label: string;
  deltaMs: number;
}

export default function RhythmTrainerClient() {
  const [selectedPatternId, setSelectedPatternId] = useState<string>(RHYTHM_PATTERNS[0].id);
  const [bpm, setBpm] = useState<number>(RHYTHM_PATTERNS[0].recommendedBpm);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [countInBeat, setCountInBeat] = useState<number | null>(null); // 1, 2, 3, 4
  const [currentBeatProgress, setCurrentBeatProgress] = useState<number>(0); // 0 to 4 beats
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [selectedLevel, setSelectedLevel] = useState<number>(1);

  // Scoring & Performance
  const [feedbacks, setFeedbacks] = useState<Record<string, NoteFeedback>>({});
  const [lastTapResult, setLastTapResult] = useState<HitEvaluation | null>(null);
  const [streak, setStreak] = useState<number>(0);
  const [bestStreak, setBestStreak] = useState<number>(0);
  const [roundComplete, setRoundComplete] = useState<boolean>(false);

  // Audio Engine Refs
  const rafIdRef = useRef<number | null>(null);
  const currentMeasureStartAudioTimeRef = useRef<number>(0);
  const tappedNotesRef = useRef<Set<string>>(new Set());
  const isPlayingRef = useRef<boolean>(false);
  const feedbacksRef = useRef<Record<string, NoteFeedback>>({});

  const currentPattern = useMemo(() => {
    return RHYTHM_PATTERNS.find(p => p.id === selectedPatternId) || RHYTHM_PATTERNS[0];
  }, [selectedPatternId]);

  // Keep feedbacks ref synced
  useEffect(() => {
    feedbacksRef.current = feedbacks;
  }, [feedbacks]);

  // Handle Level Switch
  const handleLevelSelect = (lvl: number) => {
    setSelectedLevel(lvl);
    const firstInLevel = RHYTHM_PATTERNS.find(p => p.level === lvl) || RHYTHM_PATTERNS[0];
    setSelectedPatternId(firstInLevel.id);
    setBpm(firstInLevel.recommendedBpm);
    stopPlayback();
    resetRound();
  };

  // Handle Pattern Switch
  const handlePatternSelect = (patternId: string) => {
    setSelectedPatternId(patternId);
    const pat = RHYTHM_PATTERNS.find(p => p.id === patternId);
    if (pat) setBpm(pat.recommendedBpm);
    stopPlayback();
    resetRound();
  };

  const resetRound = () => {
    setFeedbacks({});
    setLastTapResult(null);
    tappedNotesRef.current = new Set();
    setRoundComplete(false);
    setCurrentBeatProgress(0);
    setCountInBeat(null);
  };

  // Play a pleasant wood percussive tap for tactile feedback
  const playTapAudio = useCallback(() => {
    if (!soundEnabled) return;
    const ctx = getGuitarAudioContext();
    if (!ctx) return;
    // Play warm acoustic wood strike
    playWoodblockTick(ctx, ctx.currentTime, false, 0.45);
  }, [soundEnabled]);

  // Stop Playback
  const stopPlayback = useCallback(() => {
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
    isPlayingRef.current = false;
    setIsPlaying(false);
    setCountInBeat(null);
  }, []);

  // Process user tap (Spacebar, Screen Button, or Keyboard)
  const handleTap = useCallback(() => {
    playTapAudio();

    if (!isPlayingRef.current || countInBeat !== null) {
      // If tapped while waiting or counting in, show ready flash
      return;
    }

    const ctx = getGuitarAudioContext();
    if (!ctx) return;

    const secondsPerBeat = 60 / bpm;
    const currentMeasureAudioTime = currentMeasureStartAudioTimeRef.current;
    const elapsedSeconds = ctx.currentTime - currentMeasureAudioTime;
    const currentBeat = 1.0 + (elapsedSeconds / secondsPerBeat);

    // Find playable (non-rest) notes in pattern that haven't been tapped
    const nonRestNotes = currentPattern.notes.filter(n => !n.isRest);

    let bestCandidate: RhythmNote | null = null;
    let minDeltaMs = Infinity;

    for (const note of nonRestNotes) {
      if (tappedNotesRef.current.has(note.id)) continue;

      const noteBeat = note.beat;
      const deltaBeats = currentBeat - noteBeat;
      const deltaMs = deltaBeats * secondsPerBeat * 1000;

      if (Math.abs(deltaMs) < Math.abs(minDeltaMs)) {
        minDeltaMs = deltaMs;
        bestCandidate = note;
      }
    }

    if (bestCandidate && Math.abs(minDeltaMs) <= 220) {
      tappedNotesRef.current.add(bestCandidate.id);
      const evalResult = evaluateRhythmTap(minDeltaMs);

      const feedback: NoteFeedback = {
        noteId: bestCandidate.id,
        rating: evalResult.rating,
        label: evalResult.label,
        deltaMs: Math.round(minDeltaMs),
      };

      setFeedbacks(prev => ({ ...prev, [bestCandidate!.id]: feedback }));
      setLastTapResult(evalResult);

      if (evalResult.rating === 'perfect' || evalResult.rating === 'good') {
        setStreak(prev => {
          const next = prev + 1;
          setBestStreak(b => Math.max(b, next));
          return next;
        });
      } else {
        setStreak(0);
      }
    } else {
      // Extra tap or tap on rest
      const extraEval: HitEvaluation = {
        rating: 'extra',
        deltaMs: 0,
        score: 0,
        label: 'OFF BEAT',
      };
      setLastTapResult(extraEval);
      setStreak(0);
    }
  }, [bpm, currentPattern, countInBeat, playTapAudio]);

  // Start Playback Loop with Lookahead Audio Scheduling
  const startPlayback = useCallback(() => {
    const ctx = getGuitarAudioContext();
    if (!ctx) return;

    resetRound();
    setIsPlaying(true);
    isPlayingRef.current = true;

    const secondsPerBeat = 60 / bpm;
    const now = ctx.currentTime + 0.1; // small lead-in

    // 4 count-in beats
    for (let c = 0; c < 4; c++) {
      const clickTime = now + c * secondsPerBeat;
      if (soundEnabled) {
        playMetronomeTick(ctx, clickTime, c === 0, 0.45);
      }
    }

    // Pattern measure start
    const measureStartTime = now + 4 * secondsPerBeat;
    currentMeasureStartAudioTimeRef.current = measureStartTime;

    // Schedule pattern metronome clicks (beats 1, 2, 3, 4)
    for (let b = 0; b < currentPattern.totalBeats; b++) {
      const clickTime = measureStartTime + b * secondsPerBeat;
      if (soundEnabled) {
        playMetronomeTick(ctx, clickTime, b === 0, 0.4);
      }
    }

    const measureEndTime = measureStartTime + currentPattern.totalBeats * secondsPerBeat;

    // Animation & State Tracking Loop
    const tick = () => {
      if (!isPlayingRef.current) return;
      const currentTime = ctx.currentTime;

      if (currentTime < measureStartTime) {
        // Count-in phase
        const elapsedCountIn = currentTime - now;
        const currentCount = Math.floor(elapsedCountIn / secondsPerBeat) + 1;
        setCountInBeat(Math.min(4, Math.max(1, currentCount)));
        setCurrentBeatProgress(0);
      } else if (currentTime <= measureEndTime + 0.1) {
        // Measure active phase
        setCountInBeat(null);
        const elapsedMeasure = currentTime - measureStartTime;
        const beatProgress = Math.min(4, elapsedMeasure / secondsPerBeat);
        setCurrentBeatProgress(beatProgress);

        // Check for missed notes
        const currentBeatNumber = 1.0 + (elapsedMeasure / secondsPerBeat);
        currentPattern.notes.forEach(note => {
          if (!note.isRest && !tappedNotesRef.current.has(note.id)) {
            const deltaBeats = currentBeatNumber - note.beat;
            const deltaMs = deltaBeats * secondsPerBeat * 1000;
            // If more than 170ms past without a tap, mark as miss
            if (deltaMs > 170) {
              tappedNotesRef.current.add(note.id);
              const missFeedback: NoteFeedback = {
                noteId: note.id,
                rating: 'miss',
                label: 'MISS',
                deltaMs: Math.round(deltaMs),
              };
              setFeedbacks(prev => ({ ...prev, [note.id]: missFeedback }));
              setStreak(0);
            }
          }
        });
      } else {
        // Measure completed!
        stopPlayback();
        setRoundComplete(true);
        setCurrentBeatProgress(4);
        return;
      }

      rafIdRef.current = requestAnimationFrame(tick);
    };

    rafIdRef.current = requestAnimationFrame(tick);
  }, [bpm, currentPattern, soundEnabled, stopPlayback]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  // Listen for Spacebar
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.code === 'Space' || e.key === ' ') {
        e.preventDefault();
        handleTap();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleTap]);

  // Performance calculations
  const nonRestNotes = useMemo(() => currentPattern.notes.filter(n => !n.isRest), [currentPattern]);
  const totalNotes = nonRestNotes.length;
  const gradedNotes = useMemo(() => Object.values(feedbacks), [feedbacks]);
  const perfectCount = gradedNotes.filter(g => g.rating === 'perfect').length;
  const goodCount = gradedNotes.filter(g => g.rating === 'good').length;
  const earlyCount = gradedNotes.filter(g => g.rating === 'early').length;
  const lateCount = gradedNotes.filter(g => g.rating === 'late').length;
  const missCount = gradedNotes.filter(g => g.rating === 'miss').length;

  const totalScore = gradedNotes.reduce((acc, g) => {
    if (g.rating === 'perfect') return acc + 100;
    if (g.rating === 'good') return acc + 75;
    if (g.rating === 'early' || g.rating === 'late') return acc + 40;
    return acc;
  }, 0);

  const maxPossibleScore = totalNotes * 100;
  const accuracyPercent = maxPossibleScore > 0 ? Math.round((totalScore / maxPossibleScore) * 100) : 100;

  // Render note SVG on staff
  const staffWidth = 600;
  const staffHeight = 160;
  const staffTopY = 40;
  const lineSpacing = 16;
  const staffCenterY = staffTopY + lineSpacing * 2; // Middle line (B4)

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Top Banner & Mode Bar */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 sm:p-6 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold text-xs border border-amber-500/20">
                Practice Trainer
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">Rhythm Sight-Reading &amp; Timing</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Interactive Rhythm Sight-Reading Trainer
            </h1>
          </div>

          {/* Sound & Pitch Link */}
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
              <span>{soundEnabled ? '🔊 Audio Click On' : '🔇 Muted'}</span>
            </button>

            <Link
              href="/lessons/practice/sight-reading"
              className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 hover:bg-amber-500/20 transition-all flex items-center gap-1"
            >
              <span>Staff Notes Trainer</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Level Preset Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          {[
            { level: 1, label: 'Level 1: Quarters & Halves' },
            { level: 2, label: 'Level 2: Eighth Notes (1 &)' },
            { level: 3, label: 'Level 3: Rests & Syncopation' },
            { level: 4, label: 'Level 4: Dotted Rhythms' },
            { level: 5, label: 'Level 5: Sixteenth Notes (1 e & a)' },
          ].map(lvl => (
            <button
              key={lvl.level}
              type="button"
              onClick={() => handleLevelSelect(lvl.level)}
              className={`px-3 py-2 rounded-xl font-medium transition-all cursor-pointer whitespace-nowrap border ${
                selectedLevel === lvl.level
                  ? 'bg-slate-900 text-white dark:bg-amber-500 dark:text-slate-950 border-transparent font-bold shadow-md'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-400'
              }`}
            >
              {lvl.label}
            </button>
          ))}
        </div>

        {/* Pattern Picker & Tempo Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
          {/* Pattern selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-semibold">Pattern:</span>
            <select
              value={selectedPatternId}
              onChange={(e) => handlePatternSelect(e.target.value)}
              className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white px-3 py-1.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 cursor-pointer outline-none"
            >
              {RHYTHM_PATTERNS.filter(p => p.level === selectedLevel).map(p => (
                <option key={p.id} value={p.id}>
                  {p.title}
                </option>
              ))}
            </select>
          </div>

          {/* BPM Slider & Presets */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 font-semibold">Tempo:</span>
            <div className="flex items-center gap-1.5">
              <input
                type="range"
                min="50"
                max="140"
                value={bpm}
                onChange={(e) => setBpm(Number(e.target.value))}
                className="w-28 accent-amber-500 cursor-pointer"
              />
              <span className="font-mono font-bold text-xs text-amber-500 min-w-[50px]">
                {bpm} BPM
              </span>
            </div>

            <div className="flex items-center gap-1">
              {[60, 75, 90, 110].map(speed => (
                <button
                  key={speed}
                  type="button"
                  onClick={() => setBpm(speed)}
                  className={`px-2 py-0.5 rounded-lg text-[10px] font-bold transition-all cursor-pointer border ${
                    bpm === speed
                      ? 'bg-amber-500 text-slate-950 border-amber-500'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {speed}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-3 pt-2">
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-center">
            <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Score</span>
            <span className="text-xl font-black text-slate-900 dark:text-white">
              {totalScore} <span className="text-xs text-slate-400">/ {maxPossibleScore}</span>
            </span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-center">
            <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Streak</span>
            <span className="text-xl font-black text-amber-500 flex items-center justify-center gap-1">
              <span>🔥</span>
              <span>{streak}</span>
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
              {accuracyPercent}%
            </span>
          </div>
        </div>
      </div>

      {/* Main Rhythm Score Stage */}
      <div className="relative bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden flex flex-col items-center">
        {/* Pattern Title & Description */}
        <div className="text-center mb-4">
          <h2 className="text-xl font-black text-slate-900 dark:text-white">
            {currentPattern.title}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-lg mt-0.5">
            {currentPattern.description}
          </p>
        </div>

        {/* Live Feedback Toast */}
        {lastTapResult && (
          <div className={`mb-3 px-4 py-1.5 rounded-full font-black text-xs shadow-md transition-all animate-bounce ${
            lastTapResult.rating === 'perfect'
              ? 'bg-emerald-500 text-slate-950'
              : lastTapResult.rating === 'good'
              ? 'bg-teal-500 text-slate-950'
              : lastTapResult.rating === 'early' || lastTapResult.rating === 'late'
              ? 'bg-amber-500 text-slate-950'
              : 'bg-red-500 text-white'
          }`}>
            <span>{lastTapResult.label}</span>
            {lastTapResult.deltaMs !== 0 && (
              <span className="ml-1 opacity-80 text-[10px]">
                ({lastTapResult.deltaMs > 0 ? `+${lastTapResult.deltaMs}` : lastTapResult.deltaMs}ms)
              </span>
            )}
          </div>
        )}

        {/* Score Notation Canvas / SVG */}
        <div className="w-full max-w-2xl bg-[#faf9f5] border border-stone-300 rounded-2xl p-4 shadow-inner relative overflow-hidden select-none">
          {/* Count-in Overlay Banner */}
          {countInBeat !== null && (
            <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-xs z-30 flex flex-col items-center justify-center animate-fade-in">
              <span className="text-amber-400 font-bold text-xs uppercase tracking-widest mb-1">Get Ready</span>
              <span className="text-5xl font-black text-white animate-ping">
                {countInBeat}
              </span>
              <span className="text-stone-300 text-xs mt-2">Listen to 4 count-in clicks...</span>
            </div>
          )}

          {/* SVG Music Score */}
          <svg viewBox={`0 0 ${staffWidth} ${staffHeight}`} className="w-full h-auto">
            {/* 5 Staff Lines */}
            {[0, 1, 2, 3, 4].map(i => {
              const y = staffTopY + i * lineSpacing;
              return (
                <line
                  key={i}
                  x1="20"
                  y1={y}
                  x2={staffWidth - 20}
                  y2={y}
                  stroke="#1e293b"
                  strokeWidth="1.6"
                />
              );
            })}

            {/* Treble Clef */}
            <text x="30" y={staffTopY + lineSpacing * 3.5} fontSize="56" fontFamily="serif" fill="#0f172a">
              𝄞
            </text>

            {/* 4/4 Time Signature */}
            <text x="75" y={staffTopY + lineSpacing * 1.8} fontSize="28" fontWeight="bold" fontFamily="serif" fill="#0f172a">
              4
            </text>
            <text x="75" y={staffTopY + lineSpacing * 3.8} fontSize="28" fontWeight="bold" fontFamily="serif" fill="#0f172a">
              4
            </text>

            {/* Left bar line */}
            <line x1="95" y1={staffTopY} x2="95" y2={staffTopY + lineSpacing * 4} stroke="#1e293b" strokeWidth="1.5" />

            {/* Right final double bar line */}
            <line x1={staffWidth - 30} y1={staffTopY} x2={staffWidth - 30} y2={staffTopY + lineSpacing * 4} stroke="#1e293b" strokeWidth="1.5" />
            <line x1={staffWidth - 24} y1={staffTopY} x2={staffWidth - 24} y2={staffTopY + lineSpacing * 4} stroke="#1e293b" strokeWidth="3.5" />

            {/* Measure Beats Guides (1, 2, 3, 4) */}
            {[1, 2, 3, 4].map(b => {
              const usableWidth = staffWidth - 140;
              const x = 110 + ((b - 1) / 4) * usableWidth;
              return (
                <text key={b} x={x + 10} y={staffHeight - 10} fontSize="11" fontWeight="bold" fill="#94a3b8">
                  Beat {b}
                </text>
              );
            })}

            {/* Rhythm Notes Render */}
            {currentPattern.notes.map((note) => {
              const usableWidth = staffWidth - 150;
              // note.beat ranges from 1.0 to 4.0
              const noteX = 110 + ((note.beat - 1.0) / 4.0) * usableWidth;
              const noteY = staffCenterY;
              const feedback = feedbacks[note.id];

              let noteColor = '#0f172a';
              if (feedback) {
                if (feedback.rating === 'perfect') noteColor = '#10b981';
                else if (feedback.rating === 'good') noteColor = '#14b8a6';
                else if (feedback.rating === 'early' || feedback.rating === 'late') noteColor = '#f59e0b';
                else if (feedback.rating === 'miss') noteColor = '#ef4444';
              }

              return (
                <g key={note.id} className="transition-all duration-150">
                  {/* Note hit rating badge */}
                  {feedback && (
                    <text
                      x={noteX}
                      y={staffTopY - 14}
                      fontSize="10"
                      fontWeight="bold"
                      fill={noteColor}
                      textAnchor="middle"
                    >
                      {feedback.label}
                    </text>
                  )}

                  {/* Rest vs Note Rendering */}
                  {note.isRest ? (
                    // Rest Glyphs
                    <text
                      x={noteX - 6}
                      y={noteY + 8}
                      fontSize="30"
                      fontFamily="serif"
                      fill="#64748b"
                      textAnchor="middle"
                    >
                      {note.durationBeats >= 1.0 ? '𝄽' : '𝄾'}
                    </text>
                  ) : (
                    // Note Head & Stem
                    <g>
                      {/* Note Head */}
                      <ellipse
                        cx={noteX}
                        cy={noteY}
                        rx="8.5"
                        ry="6"
                        fill={note.durationBeats >= 2.0 ? '#faf9f5' : noteColor}
                        stroke={noteColor}
                        strokeWidth="2.0"
                        transform={`rotate(-22 ${noteX} ${noteY})`}
                      />

                      {/* Dotted note dot */}
                      {note.durationBeats === 1.5 && (
                        <circle cx={noteX + 14} cy={noteY} r="3" fill={noteColor} />
                      )}

                      {/* Stem */}
                      <line
                        x1={noteX + 7.5}
                        y1={noteY - 2}
                        x2={noteX + 7.5}
                        y2={noteY - 42}
                        stroke={noteColor}
                        strokeWidth="1.8"
                      />

                      {/* Eighth Note Flag */}
                      {note.durationBeats === 0.5 && (
                        <path
                          d={`M ${noteX + 7.5} ${noteY - 42} Q ${noteX + 22} ${noteY - 32} ${noteX + 16} ${noteY - 18}`}
                          stroke={noteColor}
                          strokeWidth="2"
                          fill="none"
                        />
                      )}

                      {/* Sixteenth Note Double Flag */}
                      {note.durationBeats === 0.25 && (
                        <>
                          <path
                            d={`M ${noteX + 7.5} ${noteY - 42} Q ${noteX + 22} ${noteY - 32} ${noteX + 16} ${noteY - 20}`}
                            stroke={noteColor}
                            strokeWidth="2"
                            fill="none"
                          />
                          <path
                            d={`M ${noteX + 7.5} ${noteY - 32} Q ${noteX + 22} ${noteY - 22} ${noteX + 16} ${noteY - 10}`}
                            stroke={noteColor}
                            strokeWidth="2"
                            fill="none"
                          />
                        </>
                      )}
                    </g>
                  )}

                  {/* Counting Syllable beneath the note */}
                  <text
                    x={noteX}
                    y={staffHeight - 26}
                    fontSize="11"
                    fontWeight="bold"
                    fill={noteColor}
                    textAnchor="middle"
                  >
                    {note.syllable}
                  </text>
                </g>
              );
            })}

            {/* Glowing Sweep Playhead */}
            {isPlaying && countInBeat === null && (
              <line
                x1={110 + (currentBeatProgress / 4.0) * (staffWidth - 150)}
                y1={staffTopY - 10}
                x2={110 + (currentBeatProgress / 4.0) * (staffWidth - 150)}
                y2={staffHeight - 20}
                stroke="#f59e0b"
                strokeWidth="2.5"
                strokeDasharray="none"
                className="animate-pulse"
              />
            )}
          </svg>
        </div>

        {/* Big Tap Button & Playback Controls */}
        <div className="w-full max-w-md mt-6 space-y-4 text-center">
          {!isPlaying ? (
            <button
              type="button"
              onClick={startPlayback}
              className="w-full py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-lg shadow-xl hover:shadow-amber-500/20 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>▶</span>
              <span>{roundComplete ? 'Play Pattern Again' : 'Start Rhythm Pattern'}</span>
            </button>
          ) : (
            <div className="space-y-3">
              <button
                type="button"
                onClick={handleTap}
                className="w-full py-8 rounded-3xl bg-slate-900 dark:bg-amber-500 text-white dark:text-slate-950 font-black text-2xl sm:text-3xl shadow-2xl hover:scale-[1.02] active:scale-95 transition-all cursor-pointer border-4 border-amber-400 dark:border-amber-300 flex flex-col items-center justify-center gap-1 select-none"
              >
                <span>🥁 TAP THE BEAT</span>
                <span className="text-xs font-semibold opacity-70 tracking-widest uppercase">
                  (Or Press SPACEBAR)
                </span>
              </button>

              <button
                type="button"
                onClick={stopPlayback}
                className="text-xs text-slate-500 dark:text-slate-400 hover:text-red-500 font-semibold transition-colors cursor-pointer"
              >
                ⏹ Stop Pattern
              </button>
            </div>
          )}

          {/* Performance Summary Banner */}
          {roundComplete && (
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2 animate-fade-in">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-900 dark:text-white">Pattern Complete!</span>
                <span className="font-black text-emerald-500">{accuracyPercent}% Accuracy</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500">
                <span className="text-emerald-500 font-bold">{perfectCount} Perfect</span>
                <span className="text-teal-500 font-bold">{goodCount} Good</span>
                <span className="text-amber-500 font-bold">{earlyCount + lateCount} Early/Late</span>
                <span className="text-red-500 font-bold">{missCount} Missed</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Cross-Link Back to Theory Guide */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
        <div>
          Want to review note values, rests, and mathematical subdivisions?
        </div>
        <Link
          href="/lessons/theory/reading-sheet-music#module-5-rhythm"
          className="font-bold text-amber-500 hover:text-amber-400 transition-colors flex items-center gap-1"
        >
          <span>Read Full Rhythm &amp; Note Values Guide</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
