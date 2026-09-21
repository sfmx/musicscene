'use client';

import React from 'react';
import {
  CagedShapeLetter,
  CAGED_ORDER,
  CHROMATIC_NOTES,
  getNextCagedShape,
  getPrevCagedShape,
} from '@/lib/cagedData';

interface CagedShapeSelectorProps {
  currentRoot: string;
  onSelectRoot: (root: string) => void;
  currentShape: CagedShapeLetter;
  onSelectShape: (shape: CagedShapeLetter) => void;
  viewMode: 'chord' | 'pentatonic' | 'major';
  onSelectViewMode: (mode: 'chord' | 'pentatonic' | 'major') => void;
}

export default function CagedShapeSelector({
  currentRoot,
  onSelectRoot,
  currentShape,
  onSelectShape,
  viewMode,
  onSelectViewMode,
}: CagedShapeSelectorProps) {
  return (
    <div className="space-y-6 p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md">
      {/* Top Row: Root Note Selector */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] uppercase font-black tracking-widest text-amber-500 block mb-1">
            1. Select Root Pitch
          </span>
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            <span>Key Center:</span>
            <span className="px-3 py-0.5 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/40 text-lg">
              {currentRoot} Major
            </span>
          </h2>
        </div>

        {/* 12 Chromatic Pills */}
        <div className="flex flex-wrap gap-1.5 items-center">
          {CHROMATIC_NOTES.map((root) => {
            const isSelected = root === currentRoot;
            return (
              <button
                key={root}
                onClick={() => onSelectRoot(root)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition cursor-pointer ${
                  isSelected
                    ? 'bg-rose-500 text-white font-black shadow-md scale-105'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700/60'
                }`}
              >
                {root}
              </button>
            );
          })}
        </div>
      </div>

      {/* Middle Row: 5 CAGED Shapes */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] uppercase font-black tracking-widest text-amber-500">
            2. Choose CAGED Form (Neck Position)
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelectShape(getPrevCagedShape(currentShape))}
              className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold border border-slate-700 transition cursor-pointer"
            >
              ◀ Prev Shape
            </button>
            <button
              onClick={() => onSelectShape(getNextCagedShape(currentShape))}
              className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold border border-slate-700 transition cursor-pointer"
            >
              Next Shape ▶
            </button>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-2.5">
          {CAGED_ORDER.map((shape) => {
            const isSelected = shape === currentShape;
            return (
              <button
                key={shape}
                onClick={() => onSelectShape(shape)}
                className={`py-3 px-2 rounded-2xl border flex flex-col items-center justify-center transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-500 text-slate-950 border-amber-400 font-black shadow-lg shadow-amber-500/20 scale-[1.03]'
                    : 'bg-slate-950/60 hover:bg-slate-800/80 text-slate-300 border-slate-800'
                }`}
              >
                <span className="text-2xl font-black">{shape}</span>
                <span className="text-[11px] font-semibold opacity-90">Shape</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Row: View Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-800/80">
        <span className="text-[10px] uppercase font-black tracking-widest text-slate-400">
          Overlay Display Mode
        </span>

        <div className="flex p-1 rounded-xl bg-slate-950 border border-slate-800 gap-1 w-full sm:w-auto">
          <button
            onClick={() => onSelectViewMode('chord')}
            className={`flex-1 sm:flex-none py-1.5 px-3.5 rounded-lg text-xs font-bold transition cursor-pointer ${
              viewMode === 'chord'
                ? 'bg-amber-500 text-slate-950 shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            🎸 Chord Form (R-3-5)
          </button>
          <button
            onClick={() => onSelectViewMode('pentatonic')}
            className={`flex-1 sm:flex-none py-1.5 px-3.5 rounded-lg text-xs font-bold transition cursor-pointer ${
              viewMode === 'pentatonic'
                ? 'bg-emerald-500 text-slate-950 shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            ⚡ Pentatonic Box
          </button>
          <button
            onClick={() => onSelectViewMode('major')}
            className={`flex-1 sm:flex-none py-1.5 px-3.5 rounded-lg text-xs font-bold transition cursor-pointer ${
              viewMode === 'major'
                ? 'bg-purple-500 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            🎼 Major Scale (7 Modes)
          </button>
        </div>
      </div>
    </div>
  );
}

