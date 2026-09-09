"use client";

import React from 'react';
import { ScaleData } from '@/lib/scaleData';

interface ScaleGenreSectionProps {
  scaleData: ScaleData;
}

export default function ScaleGenreSection({ scaleData }: ScaleGenreSectionProps) {
  return (
    <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8 mb-12">
      <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-slate-800 flex items-center gap-2">
        <span>🎧</span> Genre Applications
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {scaleData.genreApplications.map((genre, index) => (
          <div key={index} className="bg-slate-950/80 rounded-xl p-5 border border-slate-800">
            <h3 className="font-bold text-white text-base mb-2">{genre.genre}</h3>
            <p className="text-slate-400 text-xs mb-4 leading-relaxed">{genre.usage}</p>
            
            {/* Characteristics */}
            <div className="mb-4">
              <h4 className="font-semibold text-slate-400 text-xs uppercase tracking-wider mb-2">Characteristics:</h4>
              <div className="flex flex-wrap gap-1.5">
                {genre.characteristics.map((characteristic, charIndex) => (
                  <span 
                    key={charIndex}
                    className="bg-slate-900 border border-cyan-500/30 text-cyan-300 px-2 py-0.5 rounded text-xs"
                  >
                    {characteristic}
                  </span>
                ))}
              </div>
            </div>

            {/* Examples */}
            <div>
              <h4 className="font-semibold text-slate-400 text-xs uppercase tracking-wider mb-2">Examples:</h4>
              <ul className="text-xs text-slate-300 space-y-1">
                {genre.examples.map((example, exampleIndex) => (
                  <li key={exampleIndex} className="flex items-start gap-1.5">
                    <span className="text-cyan-400">•</span>
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
