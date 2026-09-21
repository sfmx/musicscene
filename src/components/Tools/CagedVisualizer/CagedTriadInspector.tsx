'use client';

import React, { useState } from 'react';
import { CagedShapeData } from '@/lib/cagedData';
import { strumChord, playGuitarNote } from '@/lib/guitarAudio';

interface CagedTriadInspectorProps {
  cagedData: CagedShapeData;
}

export default function CagedTriadInspector({ cagedData }: CagedTriadInspectorProps) {
  const [isPlayingTriad, setIsPlayingTriad] = useState(false);

  function handleStrumTriad() {
    setIsPlayingTriad(true);
    strumChord(cagedData.triad.frets, { speedMs: 18, volume: 0.38 });
    setTimeout(() => setIsPlayingTriad(false), 900);
  }

  function handleArpeggiateTriad() {
    setIsPlayingTriad(true);
    // Strings 3, 4, 5 (G, B, High E)
    const activePlucks: { sIdx: number; fret: number }[] = [];
    [3, 4, 5].forEach((sIdx) => {
      const f = cagedData.triad.frets[sIdx];
      if (f >= 0) activePlucks.push({ sIdx, fret: f });
    });

    activePlucks.forEach((p, idx) => {
      setTimeout(() => {
        playGuitarNote(p.sIdx, p.fret, { duration: 1.6, volume: 0.36 });
        if (idx === activePlucks.length - 1) {
          setTimeout(() => setIsPlayingTriad(false), 800);
        }
      }, idx * 220);
    });
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left Card: Triad Inversion Details */}
      <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Top 3-String Triad
            </span>
            <span className="text-xs font-mono font-bold text-slate-400">
              {cagedData.triad.strings}
            </span>
          </div>

          <h3 className="text-2xl font-black text-white mb-1">
            {cagedData.triad.inversion}
          </h3>

          <div className="text-sm font-mono text-amber-400 font-bold mb-3">
            Interval Formula: {cagedData.triad.formula}
          </div>

          <p className="text-xs text-slate-300 leading-relaxed mb-4">
            {cagedData.triad.description}
          </p>
        </div>

        {/* Triad Audio Actions */}
        <div className="flex gap-2 pt-4 border-t border-slate-800">
          <button
            disabled={isPlayingTriad}
            onClick={handleStrumTriad}
            className="flex-1 py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 text-xs font-black transition cursor-pointer flex items-center justify-center gap-1.5"
          >
            <span>▶ Strum Triad</span>
          </button>
          <button
            disabled={isPlayingTriad}
            onClick={handleArpeggiateTriad}
            className="flex-1 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-white text-xs font-bold border border-slate-700 transition cursor-pointer flex items-center justify-center gap-1.5"
          >
            <span>🎶 Arpeggiate</span>
          </button>
        </div>
      </div>

      {/* Right Card: CAGED Shape Advantages & Famous Riffs */}
      <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl flex flex-col justify-between">
        <div>
          <div className="text-[10px] uppercase font-black tracking-widest text-amber-500 mb-2">
            Fretboard Superpower & Applications
          </div>
          <h4 className="text-lg font-bold text-white mb-3">
            Why Master the {cagedData.shape} Shape?
          </h4>

          <ul className="space-y-2 mb-5">
            {cagedData.advantages.map((adv, idx) => (
              <li key={idx} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                <span className="text-amber-400 font-bold mt-0.5">✓</span>
                <span>{adv}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Iconic Riffs Badge List */}
        <div className="pt-4 border-t border-slate-800">
          <div className="text-[10px] uppercase font-bold text-slate-500 mb-1.5 tracking-wider">
            Heard In Classic Riffs & Solos:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {cagedData.famousRiffs.map((riff, rIdx) => (
              <span
                key={rIdx}
                className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-200 text-xs border border-slate-700/60 font-medium"
              >
                🎸 {riff}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

