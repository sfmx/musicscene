'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  IntervalInfo,
  getIntervalsForDifficulty,
} from '@/lib/earTrainingData';
import {
  playIntervalTone,
  playSuccessChime,
  playErrorBeep,
} from '@/lib/audioSynthesis';

interface IntervalQuizProps {
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  onAnswerResult: (isCorrect: boolean) => void;
}

export default function IntervalQuiz({
  difficulty,
  onAnswerResult,
}: IntervalQuizProps) {
  const [currentInterval, setCurrentInterval] = useState<IntervalInfo | null>(null);
  const [rootMidi, setRootMidi] = useState<number>(60); // Middle C (MIDI 60)
  const [playbackMode, setPlaybackMode] = useState<'ascending' | 'descending' | 'harmonic'>('ascending');
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [options, setOptions] = useState<IntervalInfo[]>([]);

  // Generate a new quiz question
  const generateNewQuestion = useCallback(() => {
    const pool = getIntervalsForDifficulty(difficulty);
    const target = pool[Math.floor(Math.random() * pool.length)];

    // Random root between A3 (57) and F4 (65) for comfortable hearing range
    const randomRoot = 57 + Math.floor(Math.random() * 9);

    // Pick 4 multiple choice options including the target
    const optionPool = [...pool];
    const shuffled = optionPool.sort(() => 0.5 - Math.random());
    const fourOptions = [target];

    for (const opt of shuffled) {
      if (fourOptions.length >= Math.min(4, pool.length)) break;
      if (!fourOptions.some((o) => o.semitones === opt.semitones)) {
        fourOptions.push(opt);
      }
    }

    // Sort options by semitones ascending for clean UI
    fourOptions.sort((a, b) => a.semitones - b.semitones);

    setCurrentInterval(target);
    setRootMidi(randomRoot);
    setOptions(fourOptions);
    setSelectedAnswer(null);
    setIsAnswered(false);

    // Automatically audition the new interval
    setTimeout(() => {
      playIntervalTone(randomRoot, target.semitones, playbackMode);
    }, 150);
  }, [difficulty, playbackMode]);

  // Initial load and difficulty change
  useEffect(() => {
    generateNewQuestion();
  }, [generateNewQuestion]);

  // Replay audio
  function handleReplay() {
    if (!currentInterval) return;
    playIntervalTone(rootMidi, currentInterval.semitones, playbackMode);
  }

  // Handle user answer selection
  function handleSelectAnswer(semitones: number) {
    if (isAnswered || !currentInterval) return;

    const isCorrect = semitones === currentInterval.semitones;
    setSelectedAnswer(semitones);
    setIsAnswered(true);

    if (isCorrect) {
      playSuccessChime();
    } else {
      playErrorBeep();
    }

    onAnswerResult(isCorrect);
  }

  return (
    <div className="space-y-6">
      {/* Listening Box & Audio Controls */}
      <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 shadow-2xl text-center flex flex-col items-center justify-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider">
          <span>🎧 Listen Closely</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-white">
          What Interval Was Played?
        </h3>

        {/* Big Replay Button */}
        <button
          onClick={handleReplay}
          className="w-20 h-20 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl shadow-indigo-600/30 flex items-center justify-center text-3xl transition transform active:scale-95 cursor-pointer"
          title="Play audio again"
        >
          <span>🔊</span>
        </button>

        {/* Playback Mode Toggles */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800 text-xs">
          <button
            onClick={() => setPlaybackMode('ascending')}
            className={`py-1.5 px-3 rounded-lg font-bold transition cursor-pointer ${
              playbackMode === 'ascending'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            ↗ Ascending
          </button>
          <button
            onClick={() => setPlaybackMode('descending')}
            className={`py-1.5 px-3 rounded-lg font-bold transition cursor-pointer ${
              playbackMode === 'descending'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            ↘ Descending
          </button>
          <button
            onClick={() => setPlaybackMode('harmonic')}
            className={`py-1.5 px-3 rounded-lg font-bold transition cursor-pointer ${
              playbackMode === 'harmonic'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            🎶 Harmonic (Together)
          </button>
        </div>
      </div>

      {/* Multiple Choice Options Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {options.map((opt) => {
          const isTarget = currentInterval?.semitones === opt.semitones;
          const isChosen = selectedAnswer === opt.semitones;

          let buttonStyle = 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-800';

          if (isAnswered) {
            if (isTarget) {
              buttonStyle = 'bg-emerald-500 text-slate-950 font-black border-emerald-400 ring-2 ring-emerald-300 shadow-lg';
            } else if (isChosen && !isTarget) {
              buttonStyle = 'bg-rose-600 text-white font-black border-rose-500 ring-2 ring-rose-400';
            } else {
              buttonStyle = 'bg-slate-950/60 text-slate-500 border-slate-800 opacity-60';
            }
          }

          return (
            <button
              key={opt.semitones}
              disabled={isAnswered}
              onClick={() => handleSelectAnswer(opt.semitones)}
              className={`p-4 rounded-2xl border transition-all duration-150 flex flex-col items-center justify-center cursor-pointer ${buttonStyle}`}
            >
              <span className="text-xl font-black">{opt.shortName}</span>
              <span className="text-xs font-semibold mt-1 opacity-90">{opt.name}</span>
            </button>
          );
        })}
      </div>

      {/* Answer Reveal Card & Song Mnemonic */}
      {isAnswered && currentInterval && (
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span
                  className={`px-2.5 py-0.5 rounded-full text-xs font-black uppercase ${
                    selectedAnswer === currentInterval.semitones
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                  }`}
                >
                  {selectedAnswer === currentInterval.semitones ? '✓ Correct!' : '✗ Not Quite'}
                </span>
                <span className="text-lg font-black text-white">
                  {currentInterval.name} ({currentInterval.shortName})
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {currentInterval.semitones} semitones
                </span>
              </div>
            </div>

            <button
              onClick={generateNewQuestion}
              className="py-2.5 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition cursor-pointer flex items-center justify-center gap-1.5 shadow-md self-end sm:self-auto"
            >
              <span>Next Interval ▶</span>
            </button>
          </div>

          {/* Mnemonic & Learning Tip */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3 border-t border-slate-800">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80">
              <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block mb-1">
                🎵 Song Mnemonic Hook
              </span>
              <p className="text-xs text-slate-300 font-medium">
                {currentInterval.mnemonicAscending}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80">
              <span className="text-[10px] uppercase font-bold text-blue-400 tracking-wider block mb-1">
                🎸 Guitar Fretboard Shape
              </span>
              <p className="text-xs text-slate-300 font-medium">
                {currentInterval.guitarFretDistance}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

