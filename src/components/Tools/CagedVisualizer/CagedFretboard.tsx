'use client';

import React, { useState } from 'react';
import { CagedShapeData, CagedFretboardNote, STRING_OPEN_NOTES } from '@/lib/cagedData';
import { playGuitarNote } from '@/lib/guitarAudio';

interface CagedFretboardProps {
  cagedData: CagedShapeData;
  viewMode: 'chord' | 'pentatonic' | 'major';
}

export default function CagedFretboard({ cagedData, viewMode }: CagedFretboardProps) {
  const [activePluckedNote, setActivePluckedNote] = useState<string | null>(null);
  const totalFrets = 16;
  const singleDotFrets = [3, 5, 7, 9, 15];
  const doubleDotFrets = [12];

  // String gauges for realistic visual representation (Low E string = index 0 is thickest)
  const stringHeights = [4.5, 3.8, 3.2, 2.6, 2.0, 1.4];

  function handlePluckNote(stringIndex: number, fret: number) {
    const key = `${stringIndex}-${fret}`;
    setActivePluckedNote(key);
    playGuitarNote(stringIndex, fret, { duration: 1.8, volume: 0.35 });
    setTimeout(() => {
      setActivePluckedNote((prev) => (prev === key ? null : prev));
    }, 800);
  }

  // Filter notes based on active viewMode
  function shouldDisplayNote(note: CagedFretboardNote): boolean {
    if (viewMode === 'chord') return note.isChordTone;
    if (viewMode === 'pentatonic') return note.isPentatonic;
    return note.isDiatonic;
  }

  function getNoteBadgeStyle(note: CagedFretboardNote) {
    if (note.isRoot) {
      return 'bg-rose-500 text-white font-black ring-2 ring-rose-300 shadow-md shadow-rose-500/50';
    }
    if (note.interval === '3') {
      return 'bg-amber-400 text-slate-950 font-black ring-1 ring-amber-200';
    }
    if (note.interval === '5') {
      return 'bg-sky-400 text-slate-950 font-black ring-1 ring-sky-200';
    }
    if (note.isPentatonic) {
      return 'bg-emerald-500 text-slate-950 font-bold';
    }
    return 'bg-purple-400 text-slate-950 font-bold';
  }

  return (
    <div className="w-full overflow-x-auto pb-4">
      <div className="min-w-[780px] select-none p-6 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl">
        {/* Fret Markers Top Row */}
        <div className="grid grid-cols-[56px_repeat(16,1fr)] mb-2 text-center text-xs font-mono font-bold text-slate-500">
          <div>Nut</div>
          {Array.from({ length: totalFrets }, (_, i) => i + 1).map((f) => (
            <div
              key={f}
              className={`${
                f >= cagedData.fretSpan[0] && f <= cagedData.fretSpan[1]
                  ? 'text-amber-400 font-black'
                  : ''
              }`}
            >
              {f}
            </div>
          ))}
        </div>

        {/* Fretboard Surface */}
        <div className="relative border-y-4 border-slate-700 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 rounded-xl overflow-hidden shadow-inner py-3">
          {/* Active CAGED Zone Highlight Ribbon */}
          {cagedData.fretSpan && (
            <div
              className="absolute top-0 bottom-0 bg-amber-500/10 border-x-2 border-amber-500/30 pointer-events-none transition-all duration-300"
              style={{
                left: `calc(56px + ${(Math.max(0, cagedData.fretSpan[0] - 1) / totalFrets) * (100 - 8)}%)`,
                right: `calc(${(Math.max(0, totalFrets - cagedData.fretSpan[1]) / totalFrets) * (100 - 8)}%)`,
              }}
            />
          )}

          {/* 6 Guitar Strings (Index 5 High E at top, Index 0 Low E at bottom) */}
          {[5, 4, 3, 2, 1, 0].map((sIdx) => {
            const stringName = STRING_OPEN_NOTES[sIdx];

            return (
              <div
                key={sIdx}
                className="relative flex items-center h-12 border-b border-slate-800/40 last:border-b-0"
              >
                {/* Metallic String Wire */}
                <div
                  className="absolute left-0 right-0 bg-gradient-to-b from-slate-300 via-slate-400 to-slate-500 shadow-xs pointer-events-none"
                  style={{ height: `${stringHeights[sIdx]}px` }}
                />

                {/* String Open Nut Header */}
                <div className="w-14 flex items-center justify-center z-10">
                  <button
                    onClick={() => handlePluckNote(sIdx, 0)}
                    className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-600 text-xs font-mono font-black text-slate-200 flex items-center justify-center transition cursor-pointer shadow-md"
                    title={`Open string ${stringName}`}
                  >
                    {stringName}
                  </button>
                </div>

                {/* Frets 1 to 16 */}
                <div className="flex-1 grid grid-cols-16 h-full relative">
                  {Array.from({ length: totalFrets }, (_, i) => i + 1).map((fret) => {
                    const noteKey = `${sIdx}-${fret}`;
                    const isPlucked = activePluckedNote === noteKey;

                    // Check if a note exists on this string/fret
                    const note = cagedData.notes.find(
                      (n) => n.stringIndex === sIdx && n.fret === fret
                    );

                    const showNote = note && shouldDisplayNote(note);

                    return (
                      <div
                        key={fret}
                        className="relative flex items-center justify-center border-r-2 border-slate-600/80 last:border-r-0 hover:bg-slate-800/30 transition cursor-pointer"
                        onClick={() => handlePluckNote(sIdx, fret)}
                      >
                        {/* Position Inlay Dots */}
                        {sIdx === 2 && singleDotFrets.includes(fret) && (
                          <div className="absolute w-3 h-3 rounded-full bg-slate-700/60 pointer-events-none" />
                        )}
                        {sIdx === 1 && doubleDotFrets.includes(fret) && (
                          <div className="absolute -top-1 w-2.5 h-2.5 rounded-full bg-slate-600/80 pointer-events-none" />
                        )}
                        {sIdx === 3 && doubleDotFrets.includes(fret) && (
                          <div className="absolute -bottom-1 w-2.5 h-2.5 rounded-full bg-slate-600/80 pointer-events-none" />
                        )}

                        {/* Placed Note Pill */}
                        {showNote && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePluckNote(sIdx, fret);
                            }}
                            className={`w-7 h-7 rounded-full flex flex-col items-center justify-center text-[10px] z-20 transition-all duration-150 cursor-pointer ${getNoteBadgeStyle(
                              note
                            )} ${isPlucked ? 'scale-125 ring-4 ring-white' : 'hover:scale-110'}`}
                            title={`${note.note} (${note.interval}) - String ${sIdx + 1}, Fret ${fret}`}
                          >
                            <span>{note.interval}</span>
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Fretboard Legend */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-5 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5 font-semibold">
              <span className="w-3.5 h-3.5 rounded-full bg-rose-500 text-[9px] text-white flex items-center justify-center font-black">
                R
              </span>
              Root
            </span>
            <span className="flex items-center gap-1.5 font-semibold">
              <span className="w-3.5 h-3.5 rounded-full bg-amber-400 text-[9px] text-slate-950 flex items-center justify-center font-black">
                3
              </span>
              Major 3rd
            </span>
            <span className="flex items-center gap-1.5 font-semibold">
              <span className="w-3.5 h-3.5 rounded-full bg-sky-400 text-[9px] text-slate-950 flex items-center justify-center font-black">
                5
              </span>
              Perfect 5th
            </span>
            {viewMode !== 'chord' && (
              <span className="flex items-center gap-1.5 font-semibold">
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 text-[9px] text-slate-950 flex items-center justify-center font-black">
                  2/6
                </span>
                Pentatonic
              </span>
            )}
            {viewMode === 'major' && (
              <span className="flex items-center gap-1.5 font-semibold">
                <span className="w-3.5 h-3.5 rounded-full bg-purple-400 text-[9px] text-slate-950 flex items-center justify-center font-black">
                  4/7
                </span>
                Major Diatonic
              </span>
            )}
          </div>

          <div className="text-slate-500 italic">
            Click any note to hear pitch with WebAudio
          </div>
        </div>
      </div>
    </div>
  );
}

