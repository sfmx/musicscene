"use client";

import React from 'react';
import { ScaleData } from '@/lib/scaleData';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';

interface ScaleFretboardSectionProps {
  scaleData: ScaleData;
}

export default function ScaleFretboardSection({ scaleData }: ScaleFretboardSectionProps) {
  return (
    <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8 mb-12">
      <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-slate-800 flex items-center gap-2">
        <span>🎸</span> Guitar Fretboard Patterns
      </h2>
      
      {/* Scale Patterns */}
      <div className="space-y-6">
        {scaleData.guitarFretboard.patterns.map((pattern, index) => (
          <div key={index} className="bg-slate-950/80 rounded-xl p-5 border border-slate-800">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="font-bold text-white text-base">
                  Pattern {pattern.patternNumber}: {pattern.position}
                </h4>
                <p className="text-slate-400 text-xs mt-1">{pattern.description}</p>
              </div>
              <span className="bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 px-2.5 py-1 rounded-md text-xs font-mono font-bold">
                Pattern {pattern.patternNumber}
              </span>
            </div>
            
            {/* AlphaTab Notation */}
            {pattern.alphaTex && pattern.alphaTex.trim() !== '' && (
              <div className="mb-4 bg-slate-900/90 rounded-lg p-2 border border-slate-800">
                <AlphaTexRenderer
                  alphaTex={pattern.alphaTex}
                  title={`${pattern.position} Pattern`}
                  className="scale-75"
                />
              </div>
            )}

            {/* Applications */}
            {pattern.applications && pattern.applications.length > 0 && (
              <div className="pt-3 border-t border-slate-800/80">
                <h5 className="font-semibold text-slate-400 text-xs uppercase tracking-wider mb-2">Best Used For:</h5>
                <div className="flex flex-wrap gap-1.5">
                  {pattern.applications.map((application, appIndex) => (
                    <span 
                      key={appIndex}
                      className="bg-slate-900 border border-slate-800 text-slate-300 px-2.5 py-0.5 rounded text-xs capitalize"
                    >
                      {application}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
