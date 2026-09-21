'use client';

import React, { useState } from 'react';
import { CircleKeyData, DiatonicChord, CadenceProgression } from '@/lib/circleOfFifthsData';
import { strumChord } from '@/lib/guitarAudio';

interface DiatonicChordsPanelProps {
  selectedKey: CircleKeyData;
  onChordPlayed?: (chordName: string) => void;
}

export default function DiatonicChordsPanel({
  selectedKey,
  onChordPlayed,
}: DiatonicChordsPanelProps) {
  const [activeChord, setActiveChord] = useState<string | null>(null);
  const [isPlayingCadence, setIsPlayingCadence] = useState(false);

  // Play an individual chord
  function handlePlayChord(chord: DiatonicChord) {
    setActiveChord(chord.chord);
    onChordPlayed?.(chord.chord);
    strumChord(chord.guitarFrets, {
      speedMs: 16,
      volume: 0.35,
    });
    setTimeout(() => {
      setActiveChord((prev) => (prev === chord.chord ? null : prev));
    }, 1200);
  }

  // Play a full cadence progression sequentially
  function handlePlayCadence(cadence: CadenceProgression) {
    if (isPlayingCadence) return;
    setIsPlayingCadence(true);

    const stepDuration = 850; // ms per chord
    cadence.chords.forEach((chordName, idx) => {
      setTimeout(() => {
        const found = selectedKey.diatonicChords.find((c) => c.chord === chordName);
        if (found) {
          setActiveChord(found.chord);
          onChordPlayed?.(found.chord);
          strumChord(found.guitarFrets, { speedMs: 14, volume: 0.34 });
        }
        if (idx === cadence.chords.length - 1) {
          setTimeout(() => {
            setActiveChord(null);
            setIsPlayingCadence(false);
          }, stepDuration);
        }
      }, idx * stepDuration);
    });
  }

  return (
    <div className="space-y-8">
      {/* Header & Scale Overview */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xs">
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
            <span>Diatonic Chord Family</span>
            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30">
              Key of {selectedKey.displayName}
            </span>
          </h3>
          <p className="text-slate-400 text-xs mt-1">
            All 7 diatonic chords generated naturally from the {selectedKey.key} Major scale notes.
          </p>
        </div>

        {/* Scale Notes Pills */}
        <div className="flex flex-wrap gap-1.5 items-center">
          <span className="text-xs text-slate-500 font-medium mr-1">Scale Notes:</span>
          {selectedKey.scaleNotes.map((note, idx) => (
            <span
              key={idx}
              className={`px-2 py-1 rounded-md text-xs font-mono font-bold ${
                idx === 0
                  ? 'bg-amber-500 text-slate-950 shadow-xs'
                  : 'bg-slate-800 text-slate-200 border border-slate-700'
              }`}
            >
              {note}
            </span>
          ))}
        </div>
      </div>

      {/* 7 Diatonic Chords Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        {selectedKey.diatonicChords.map((chord) => {
          const isCurrentActive = activeChord === chord.chord;
          const isTonic = chord.degree === 'I';
          const isDominant = chord.degree === 'V';
          const isSubdominant = chord.degree === 'IV';

          let borderClass = 'border-slate-800 hover:border-slate-700';
          let badgeColor = 'bg-slate-800 text-slate-300';

          if (isTonic) {
            borderClass = 'border-amber-500/50 bg-amber-500/5';
            badgeColor = 'bg-amber-500/20 text-amber-300 border-amber-500/40';
          } else if (isDominant) {
            borderClass = 'border-blue-500/50 bg-blue-500/5';
            badgeColor = 'bg-blue-500/20 text-blue-300 border-blue-500/40';
          } else if (isSubdominant) {
            borderClass = 'border-indigo-500/50 bg-indigo-500/5';
            badgeColor = 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40';
          }

          return (
            <div
              key={chord.degree}
              className={`flex flex-col justify-between p-3.5 rounded-xl border bg-slate-900/80 transition-all duration-200 ${borderClass} ${
                isCurrentActive ? 'ring-2 ring-emerald-400 scale-[1.03] bg-emerald-950/40' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-2">
                  <span className={`px-2 py-0.5 rounded-md text-[11px] font-black border ${badgeColor}`}>
                    {chord.degree}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-slate-500">
                    {chord.quality}
                  </span>
                </div>

                <div className="text-2xl font-black text-white tracking-tight my-1">
                  {chord.chord}
                </div>

                <div className="text-[11px] text-slate-400 line-clamp-2 leading-tight min-h-[28px]">
                  {chord.function}
                </div>
              </div>

              {/* Play Chord Action */}
              <button
                onClick={() => handlePlayChord(chord)}
                className={`mt-3 w-full py-2 px-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  isCurrentActive
                    ? 'bg-emerald-500 text-slate-950 shadow-md scale-95'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700/60'
                }`}
                title={`Strum ${chord.name}`}
              >
                <span>{isCurrentActive ? '🔊 Playing' : '▶ Strum'}</span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Cadence Studio & Common Chord Progressions */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <span>⚡ Cadence & Song Progression Studio</span>
            </h4>
            <p className="text-xs text-slate-400">
              Listen to how these diatonic chords link into iconic songwriting cadences.
            </p>
          </div>
          {isPlayingCadence && (
            <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Audio Playback in Progress...
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
          {selectedKey.cadences.map((cadence, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-sm font-bold text-slate-200">{cadence.name}</span>
                  <div className="flex gap-1">
                    {cadence.degrees.map((deg, dIdx) => (
                      <span
                        key={dIdx}
                        className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] font-mono font-bold text-amber-400"
                      >
                        {deg}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 my-2 text-sm font-black text-white font-mono">
                  {cadence.chords.map((ch, cIdx) => (
                    <React.Fragment key={cIdx}>
                      <span
                        className={`px-2 py-1 rounded-md transition ${
                          activeChord === ch ? 'bg-emerald-500 text-slate-950' : 'bg-slate-900 border border-slate-800 text-slate-200'
                        }`}
                      >
                        {ch}
                      </span>
                      {cIdx < cadence.chords.length - 1 && <span className="text-slate-600">→</span>}
                    </React.Fragment>
                  ))}
                </div>

                <p className="text-xs text-slate-400 mt-2 leading-relaxed">{cadence.description}</p>
              </div>

              <button
                disabled={isPlayingCadence}
                onClick={() => handlePlayCadence(cadence)}
                className="mt-4 py-2 px-3 rounded-lg bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 text-xs font-black flex items-center justify-center gap-2 transition cursor-pointer"
              >
                <span>▶ Play Progression</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

