'use client';

import React, { useState } from 'react';
import IntervalQuiz from './IntervalQuiz';
import ChordQualityQuiz from './ChordQualityQuiz';
import MnemonicReference from './MnemonicReference';

export default function EarTrainer() {
  const [trainerMode, setTrainerMode] = useState<'intervals' | 'chords'>('intervals');
  const [difficulty, setDifficulty] = useState<'beginner' | 'intermediate' | 'advanced'>('intermediate');

  // Performance analytics
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);

  function handleAnswerResult(isCorrect: boolean) {
    setTotalAnswered((prev) => prev + 1);
    if (isCorrect) {
      setTotalCorrect((prev) => prev + 1);
      setStreak((prev) => {
        const next = prev + 1;
        setBestStreak((b) => Math.max(b, next));
        return next;
      });
    } else {
      setStreak(0);
    }
  }

  function handleResetScore() {
    setStreak(0);
    setBestStreak(0);
    setTotalAnswered(0);
    setTotalCorrect(0);
  }

  const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  return (
    <div className="space-y-8">
      {/* Top Header & Dashboard Bar */}
      <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Mode Selector */}
        <div className="flex p-1.5 rounded-2xl bg-slate-950 border border-slate-800 gap-1.5 w-full lg:w-auto">
          <button
            onClick={() => setTrainerMode('intervals')}
            className={`flex-1 lg:flex-none py-2 px-4 rounded-xl text-xs font-bold transition cursor-pointer flex items-center justify-center gap-1.5 ${
              trainerMode === 'intervals'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>🎵 Interval Quiz</span>
          </button>
          <button
            onClick={() => setTrainerMode('chords')}
            className={`flex-1 lg:flex-none py-2 px-4 rounded-xl text-xs font-bold transition cursor-pointer flex items-center justify-center gap-1.5 ${
              trainerMode === 'chords'
                ? 'bg-emerald-600 text-slate-950 shadow-md font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>🎸 Chord Quality Quiz</span>
          </button>
        </div>

        {/* Difficulty Tier Selector */}
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setDifficulty('beginner')}
            className={`py-1.5 px-3 rounded-lg font-bold transition cursor-pointer ${
              difficulty === 'beginner'
                ? 'bg-amber-500 text-slate-950 shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            🟢 Beginner
          </button>
          <button
            onClick={() => setDifficulty('intermediate')}
            className={`py-1.5 px-3 rounded-lg font-bold transition cursor-pointer ${
              difficulty === 'intermediate'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            🟡 Intermediate
          </button>
          <button
            onClick={() => setDifficulty('advanced')}
            className={`py-1.5 px-3 rounded-lg font-bold transition cursor-pointer ${
              difficulty === 'advanced'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            🔴 Advanced
          </button>
        </div>

        {/* Live Scorecard */}
        <div className="flex items-center gap-4 bg-slate-950/80 px-4 py-2 rounded-2xl border border-slate-800 text-xs">
          <div className="text-center">
            <span className="text-[10px] text-slate-400 uppercase font-bold block">Streak</span>
            <span className="text-base font-black text-amber-400 flex items-center gap-1 justify-center">
              🔥 {streak}
            </span>
          </div>

          <div className="w-px h-6 bg-slate-800" />

          <div className="text-center">
            <span className="text-[10px] text-slate-400 uppercase font-bold block">Best</span>
            <span className="text-base font-black text-white">🏆 {bestStreak}</span>
          </div>

          <div className="w-px h-6 bg-slate-800" />

          <div className="text-center">
            <span className="text-[10px] text-slate-400 uppercase font-bold block">Accuracy</span>
            <span className="text-base font-black text-emerald-400">
              {totalAnswered > 0 ? `${accuracy}%` : '--'}
            </span>
          </div>

          {totalAnswered > 0 && (
            <button
              onClick={handleResetScore}
              className="ml-2 text-slate-500 hover:text-slate-300 transition text-[10px]"
              title="Reset scores"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Main Quiz Arena */}
      {trainerMode === 'intervals' ? (
        <IntervalQuiz difficulty={difficulty} onAnswerResult={handleAnswerResult} />
      ) : (
        <ChordQualityQuiz difficulty={difficulty} onAnswerResult={handleAnswerResult} />
      )}

      {/* Expandable Mnemonic Cheatsheet */}
      <MnemonicReference />
    </div>
  );
}

