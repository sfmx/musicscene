'use client';

import React, { useState } from 'react';
import { INTERVALS_DATA, IntervalInfo } from '@/lib/earTrainingData';
import { playIntervalTone } from '@/lib/audioSynthesis';

export default function MnemonicReference() {
  const [isOpen, setIsOpen] = useState(false);
  const [playingSemitones, setPlayingSemitones] = useState<number | null>(null);

  function handlePlaySample(interval: IntervalInfo) {
    setPlayingSemitones(interval.semitones);
    playIntervalTone(60, interval.semitones, 'ascending');
    setTimeout(() => setPlayingSemitones(null), 1200);
  }

  return (
    <div className="rounded-3xl bg-slate-900/70 border border-slate-800 overflow-hidden shadow-xl">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 flex items-center justify-between text-left hover:bg-slate-800/40 transition cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <span className="text-xl">📚</span>
          <div>
            <h4 className="text-base font-bold text-white">
              Interval Song Mnemonic Cheatsheet
            </h4>
            <p className="text-xs text-slate-400">
              Famous songs that make interval recognition effortless.
            </p>
          </div>
        </div>

        <span className="text-sm text-slate-400 font-bold px-3 py-1 rounded-lg bg-slate-800 border border-slate-700">
          {isOpen ? '▲ Hide Reference' : '▼ View 12 Mnemonics'}
        </span>
      </button>

      {isOpen && (
        <div className="p-6 border-t border-slate-800 space-y-3 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {INTERVALS_DATA.map((item) => {
              const isPlaying = playingSemitones === item.semitones;

              return (
                <div
                  key={item.semitones}
                  className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-1.5">
                      <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono font-bold text-xs border border-indigo-500/30">
                        {item.shortName}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500">
                        {item.semitones} {item.semitones === 1 ? 'semitone' : 'semitones'}
                      </span>
                    </div>

                    <div className="text-sm font-bold text-white mb-2">
                      {item.name}
                    </div>

                    <div className="text-xs text-amber-300 font-medium mb-1">
                      ↗ {item.mnemonicAscending}
                    </div>
                    <div className="text-xs text-slate-400 font-medium mb-2">
                      ↘ {item.mnemonicDescending}
                    </div>

                    <div className="text-[11px] text-slate-500 italic">
                      🎸 {item.guitarFretDistance}
                    </div>
                  </div>

                  <button
                    disabled={isPlaying}
                    onClick={() => handlePlaySample(item)}
                    className="mt-3 py-1.5 px-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1 transition cursor-pointer border border-slate-700/60"
                  >
                    <span>{isPlaying ? '🔊 Playing...' : '▶ Listen'}</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

