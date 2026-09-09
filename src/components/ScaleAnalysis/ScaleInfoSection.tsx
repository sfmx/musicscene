"use client";

import React from 'react';
import { ScaleData } from '@/lib/scaleData';

interface ScaleInfoSectionProps {
  scaleData: ScaleData;
}

export default function ScaleInfoSection({ scaleData }: ScaleInfoSectionProps) {
  return (
    <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8 mb-12">
      <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-slate-800 flex items-center gap-2">
        <span>ℹ️</span> Scale Information
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Basic Properties */}
        <div className="bg-slate-950/80 rounded-xl p-6 border border-slate-800">
          <h3 className="text-base font-bold text-cyan-300 mb-4">Basic Properties</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
              <span className="font-semibold text-slate-400">Scale Type:</span>
              <span className="text-white">{scaleData.scaleInfo.scaleType}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
              <span className="font-semibold text-slate-400">Number of Notes:</span>
              <span className="text-amber-300 font-mono font-bold">{scaleData.scaleInfo.noteCount}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
              <span className="font-semibold text-slate-400">Interval Pattern:</span>
              <span className="text-cyan-300 font-mono">{scaleData.scaleInfo.intervalPattern}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
              <span className="font-semibold text-slate-400">Mode:</span>
              <span className="text-white">{scaleData.theory.mode}</span>
            </div>
            {scaleData.scaleInfo.alternateName && (
              <div className="flex justify-between items-center py-2">
                <span className="font-semibold text-slate-400">Also Known As:</span>
                <span className="text-slate-300">{scaleData.scaleInfo.alternateName}</span>
              </div>
            )}
          </div>
        </div>

        {/* Character and Mood */}
        <div className="bg-slate-950/80 rounded-xl p-6 border border-slate-800 flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-amber-300 mb-4">Character &amp; Mood</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-400 text-xs uppercase tracking-wider mb-1.5">Character:</h4>
                <p className="text-slate-200 text-sm leading-relaxed">{scaleData.scaleInfo.character}</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-400 text-xs uppercase tracking-wider mb-2">Emotional Qualities:</h4>
                <div className="flex flex-wrap gap-2">
                  {scaleData.scaleInfo.mood.map((mood, index) => (
                    <span 
                      key={index}
                      className="bg-purple-500/20 text-purple-300 border border-purple-500/30 px-3 py-1 rounded-lg text-xs capitalize font-medium"
                    >
                      {mood}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
