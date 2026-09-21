'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  ChordQualityInfo,
  getChordQualitiesForDifficulty,
} from '@/lib/earTrainingData';
import {
  playChordTones,
  playSuccessChime,
  playErrorBeep,
} from '@/lib/audioSynthesis';

interface ChordQualityQuizProps {
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  onAnswerResult: (isCorrect: boolean) => void;
}

export default function ChordQualityQuiz({
  difficulty,
  onAnswerResult,
}: ChordQualityQuizProps) {
  const [currentChord, setCurrentChord] = useState<ChordQualityInfo | null>(null);
  const [rootMidi, setRootMidi] = useState<number>(60); // Middle C
  const [playArpeggiated, setPlayArpeggiated] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [options, setOptions] = useState<ChordQualityInfo[]>([]);

  // Generate question
  const generateNewQuestion = useCallback(() => {
    const pool = getChordQualitiesForDifficulty(difficulty);
    const target = pool[Math.floor(Math.random() * pool.length)];

    // Random root between E3 (52) and D4 (62)
    const randomRoot = 52 + Math.floor(Math.random() * 10);

    const optionPool = [...pool];
    const shuffled = optionPool.sort(() => 0.5 - Math.random());
    const choices = [target];

    for (const opt of shuffled) {
      if (choices.length >= Math.min(4, pool.length)) break;
      if (!choices.some((c) => c.id === opt.id)) {
        choices.push(opt);
      }
    }

    setCurrentChord(target);
    setRootMidi(randomRoot);
    setOptions(choices.sort(() => 0.5 - Math.random()));
    setSelectedAnswer(null);
    setIsAnswered(false);

    // Audio audition
    setTimeout(() => {
      const midiNotes = target.intervals.map((i) => randomRoot + i);
      playChordTones(midiNotes, { arpeggiate: playArpeggiated });
    }, 150);
  }, [difficulty, playArpeggiated]);

  useEffect(() => {
    generateNewQuestion();
  }, [generateNewQuestion]);

  function handleReplay() {
    if (!currentChord) return;
    const midiNotes = currentChord.intervals.map((i) => rootMidi + i);
    playChordTones(midiNotes, { arpeggiate: playArpeggiated });
  }

  function handleSelectAnswer(id: string) {
    if (isAnswered || !currentChord) return;

    const isCorrect = id === currentChord.id;
    setSelectedAnswer(id);
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
      {/* Audio Playback Stage */}
      <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 shadow-2xl text-center flex flex-col items-center justify-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
          <span>🎸 Chord Quality Test</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-white">
          Identify the Chord Quality
        </h3>

        {/* Big Replay Button */}
        <button
          onClick={handleReplay}
          className="w-20 h-20 rounded-full bg-emerald-600 hover:bg-emerald-500 text-slate-950 shadow-xl shadow-emerald-600/30 flex items-center justify-center text-3xl transition transform active:scale-95 cursor-pointer"
          title="Play chord audio again"
        >
          <span>🔊</span>
        </button>

        {/* Playback Mode Toggles */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800 text-xs">
          <button
            onClick={() => setPlayArpeggiated(false)}
            className={`py-1.5 px-3 rounded-lg font-bold transition cursor-pointer ${
              !playArpeggiated
                ? 'bg-emerald-600 text-slate-950 shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            🎶 Strum Together
          </button>
          <button
            onClick={() => setPlayArpeggiated(true)}
            className={`py-1.5 px-3 rounded-lg font-bold transition cursor-pointer ${
              playArpeggiated
                ? 'bg-emerald-600 text-slate-950 shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            ↗ Arpeggiated Notes
          </button>
        </div>
      </div>

      {/* Multiple Choice Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {options.map((opt) => {
          const isTarget = currentChord?.id === opt.id;
          const isChosen = selectedAnswer === opt.id;

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
              key={opt.id}
              disabled={isAnswered}
              onClick={() => handleSelectAnswer(opt.id)}
              className={`p-4 rounded-2xl border transition-all duration-150 flex flex-col items-center justify-center cursor-pointer ${buttonStyle}`}
            >
              <span className="text-xl font-black">{opt.shortName}</span>
              <span className="text-xs font-semibold mt-1 opacity-90">{opt.name}</span>
            </button>
          );
        })}
      </div>

      {/* Answer Explanation & Mood Analysis */}
      {isAnswered && currentChord && (
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span
                  className={`px-2.5 py-0.5 rounded-full text-xs font-black uppercase ${
                    selectedAnswer === currentChord.id
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                  }`}
                >
                  {selectedAnswer === currentChord.id ? '✓ Correct!' : '✗ Not Quite'}
                </span>
                <span className="text-lg font-black text-white">
                  {currentChord.name} ({currentChord.shortName})
                </span>
                <span className="text-xs text-amber-400 font-mono font-bold">
                  Formula: {currentChord.formula}
                </span>
              </div>
            </div>

            <button
              onClick={generateNewQuestion}
              className="py-2.5 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition cursor-pointer flex items-center justify-center gap-1.5 shadow-md self-end sm:self-auto"
            >
              <span>Next Chord ▶</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3 border-t border-slate-800">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80">
              <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider block mb-1">
                ✨ Harmonic Mood & Texture
              </span>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                {currentChord.mood}. {currentChord.soundDescription}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80">
              <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block mb-1">
                🎵 Iconic Example Songs
              </span>
              <div className="flex flex-wrap gap-1 mt-1">
                {currentChord.famousExamples.map((ex, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px] border border-slate-700"
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

