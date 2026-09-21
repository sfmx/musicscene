'use client';

import React, { useState } from 'react';
import { CircleKeyData, ModulationRoute } from '@/lib/circleOfFifthsData';
import { getChordShape, getActualFretNumbers } from '@/lib/chordVoicings';
import { strumChord } from '@/lib/guitarAudio';

interface ModulationGuideProps {
  selectedKey: CircleKeyData;
  onNavigateToKey?: (keyName: string) => void;
}

export default function ModulationGuide({
  selectedKey,
  onNavigateToKey,
}: ModulationGuideProps) {
  const [playingProgressionIndex, setPlayingProgressionIndex] = useState<number | null>(null);
  const [activeChord, setActiveChord] = useState<string | null>(null);

  function playModulationProgression(route: ModulationRoute, index: number) {
    if (playingProgressionIndex !== null) return;
    setPlayingProgressionIndex(index);

    const stepMs = 900;
    route.progression.forEach((chordName, idx) => {
      setTimeout(() => {
        setActiveChord(chordName);
        const shape = getChordShape(chordName);
        const frets = getActualFretNumbers(shape);
        strumChord(frets, { speedMs: 16, volume: 0.35 });

        if (idx === route.progression.length - 1) {
          setTimeout(() => {
            setActiveChord(null);
            setPlayingProgressionIndex(null);
          }, stepMs);
        }
      }, idx * stepMs);
    });
  }

  return (
    <div className="space-y-6">
      <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <span>🔄 Key Modulation Pathways</span>
          <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-500/30">
            From {selectedKey.displayName}
          </span>
        </h3>
        <p className="text-slate-400 text-xs mt-1 leading-relaxed">
          How to transition seamlessly out of {selectedKey.displayName} into related tonal centers using pivot chords, secondary dominants, and voice leading.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {selectedKey.modulations.map((route, idx) => {
          const isPlaying = playingProgressionIndex === idx;

          return (
            <div
              key={idx}
              className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                isPlaying
                  ? 'border-emerald-500/60 bg-emerald-950/20 shadow-lg'
                  : 'border-slate-800 bg-slate-900/80 hover:border-slate-700'
              }`}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-slate-800 text-amber-400 border border-slate-700">
                    {route.relationship}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    Target: <span className="text-white text-sm">{route.targetKey}</span>
                  </span>
                </div>

                {/* Pivot Chord */}
                <div className="text-xs text-slate-400 mb-2">
                  Pivot / Gateway Chord:{' '}
                  <span className="text-amber-300 font-bold font-mono">{route.pivotChord}</span>
                </div>

                {/* Progression Display */}
                <div className="flex items-center gap-2 my-3 font-mono font-bold text-sm">
                  {route.progression.map((chord, cIdx) => (
                    <React.Fragment key={cIdx}>
                      <span
                        className={`px-2.5 py-1.5 rounded-lg border transition ${
                          activeChord === chord && isPlaying
                            ? 'bg-emerald-500 text-slate-950 border-emerald-400 scale-105'
                            : 'bg-slate-950 border-slate-800 text-white'
                        }`}
                      >
                        {chord}
                      </span>
                      {cIdx < route.progression.length - 1 && (
                        <span className="text-slate-600 font-normal">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mt-3">
                  {route.explanation}
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 mt-5 pt-3 border-t border-slate-800/80">
                <button
                  disabled={isPlaying}
                  onClick={() => playModulationProgression(route, idx)}
                  className="flex-1 py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer"
                >
                  <span>{isPlaying ? '🔊 Modulating...' : '▶ Listen to Modulation'}</span>
                </button>

                {onNavigateToKey && (
                  <button
                    onClick={() => onNavigateToKey(route.targetKey)}
                    className="py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition cursor-pointer border border-slate-700/60"
                    title={`Switch circle to ${route.targetKey}`}
                  >
                    Switch to {route.targetKey}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

