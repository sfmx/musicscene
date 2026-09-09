"use client";

import React from "react";
import SimpleFretboardDiagram from "@/components/SimpleFretboardDiagram";

interface ChordReferenceBoxProps {
  chords: string[];
  title?: string;
}

const ChordReferenceBox: React.FC<ChordReferenceBoxProps> = ({
  chords,
  title = "Primary Chords Used"
}) => {
  // Remove duplicates while preserving order
  const uniqueChords = Array.from(new Set(chords.filter(Boolean)));

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 mb-8 shadow-xl backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
          Voicing Dictionary
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-white">{title}</h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {uniqueChords.map((chord) => (
          <div
            key={chord}
            className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex flex-col items-center hover:border-slate-700 transition-all group"
          >
            <div className="scale-75 origin-center">
              <SimpleFretboardDiagram chord={chord} />
            </div>
            <span className="mt-2 text-xs font-bold font-mono text-amber-300 group-hover:text-amber-200">
              {chord}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChordReferenceBox;