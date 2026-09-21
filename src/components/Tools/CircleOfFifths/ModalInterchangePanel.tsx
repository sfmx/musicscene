'use client';

import React, { useState } from 'react';
import { CircleKeyData, BorrowedChord } from '@/lib/circleOfFifthsData';
import { getChordShape, getActualFretNumbers } from '@/lib/chordVoicings';
import { strumChord } from '@/lib/guitarAudio';

interface ModalInterchangePanelProps {
  selectedKey: CircleKeyData;
}

export default function ModalInterchangePanel({
  selectedKey,
}: ModalInterchangePanelProps) {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [activeChord, setActiveChord] = useState<string | null>(null);

  function playBorrowedProgression(borrowed: BorrowedChord, index: number) {
    if (playingIndex !== null) return;
    setPlayingIndex(index);

    const stepMs = 850;
    borrowed.progressionContext.forEach((chordName, idx) => {
      setTimeout(() => {
        setActiveChord(chordName);
        const shape = getChordShape(chordName);
        const frets = getActualFretNumbers(shape);
        strumChord(frets, { speedMs: 16, volume: 0.35 });

        if (idx === borrowed.progressionContext.length - 1) {
          setTimeout(() => {
            setActiveChord(null);
            setPlayingIndex(null);
          }, stepMs);
        }
      }, idx * stepMs);
    });
  }

  function playSingleChord(chordName: string) {
    setActiveChord(chordName);
    const shape = getChordShape(chordName);
    const frets = getActualFretNumbers(shape);
    strumChord(frets, { speedMs: 16, volume: 0.36 });
    setTimeout(() => setActiveChord(null), 1000);
  }

  return (
    <div className="space-y-6">
      <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <span>🎭 Modal Interchange (Borrowed Chords)</span>
          <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold border border-purple-500/30">
            Parallel Minor of {selectedKey.displayName}
          </span>
        </h3>
        <p className="text-slate-400 text-xs mt-1 leading-relaxed">
          Modal mixture lets songwriters borrow chords from the parallel minor scale to inject instant cinematic drama, rock power, and emotional sorrow into a major key.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {selectedKey.borrowedChords.map((borrowed, idx) => {
          const isPlaying = playingIndex === idx;

          return (
            <div
              key={idx}
              className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                isPlaying
                  ? 'border-purple-500/60 bg-purple-950/20 shadow-lg'
                  : 'border-slate-800 bg-slate-900/80 hover:border-slate-700'
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-sm font-black bg-purple-500/20 text-purple-300 border border-purple-500/40">
                      {borrowed.degree}
                    </span>
                    <span className="text-2xl font-black text-white">{borrowed.chord}</span>
                  </div>
                  <span className="text-[11px] font-medium text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                    From {borrowed.sourceMode.split(' ')[0]}
                  </span>
                </div>

                {/* Mood Tag */}
                <div className="text-xs text-amber-300 font-semibold mb-3 flex items-center gap-1.5">
                  <span>✨ {borrowed.mood}</span>
                </div>

                {/* Context Progression */}
                <div className="mb-4">
                  <div className="text-[11px] text-slate-400 mb-1.5">Context Progression:</div>
                  <div className="flex items-center gap-2 font-mono text-sm font-bold">
                    {borrowed.progressionContext.map((ch, cIdx) => {
                      const isBorrowedChord = ch === borrowed.chord;
                      return (
                        <React.Fragment key={cIdx}>
                          <span
                            className={`px-2.5 py-1 rounded-lg border transition ${
                              activeChord === ch && isPlaying
                                ? 'bg-purple-500 text-white border-purple-400 scale-105'
                                : isBorrowedChord
                                ? 'bg-purple-900/50 border-purple-500/60 text-purple-200'
                                : 'bg-slate-950 border-slate-800 text-slate-300'
                            }`}
                          >
                            {ch}
                          </span>
                          {cIdx < borrowed.progressionContext.length - 1 && (
                            <span className="text-slate-600 font-normal">→</span>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>

                {/* Famous Songs */}
                <div className="pt-2 border-t border-slate-800/60">
                  <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-1">
                    Heard In Iconic Songs:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {borrowed.famousSongs.map((song, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[11px] border border-slate-700/60"
                      >
                        🎵 {song}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 mt-5 pt-3 border-t border-slate-800">
                <button
                  disabled={isPlaying}
                  onClick={() => playBorrowedProgression(borrowed, idx)}
                  className="flex-1 py-2 px-3 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer"
                >
                  <span>{isPlaying ? '🔊 Auditioning...' : '▶ Hear in Progression'}</span>
                </button>
                <button
                  onClick={() => playSingleChord(borrowed.chord)}
                  className="py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition cursor-pointer border border-slate-700/60"
                  title={`Strum ${borrowed.chord} alone`}
                >
                  Strum {borrowed.chord}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

