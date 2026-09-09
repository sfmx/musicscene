"use client";

import React from 'react';
import { ScaleData } from '@/lib/scaleData';

interface ScaleTheorySectionProps {
  scaleData: ScaleData;
}

export default function ScaleTheorySection({ scaleData }: ScaleTheorySectionProps) {
  return (
    <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8 mb-12">
      <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-slate-800 flex items-center gap-2">
        <span>📖</span> Theory Fundamentals
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Scale Structure */}
        <div className="bg-slate-950/80 rounded-xl p-6 border border-slate-800">
          <h3 className="text-base font-bold text-cyan-300 mb-4">Scale Structure</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-slate-400 text-xs uppercase tracking-wider mb-2">Intervals from Root:</h4>
              <p className="text-cyan-300 font-mono text-base bg-slate-900/90 p-3 rounded-lg border border-slate-800">
                {scaleData.theory.intervalsFromRoot}
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-400 text-xs uppercase tracking-wider mb-2">Scale Degrees:</h4>
              <div className="space-y-2">
                {scaleData.theory.scaleDegrees.map((degree, index) => (
                  <div key={index} className="flex items-center">
                    <span className="bg-cyan-950 border border-cyan-500/30 text-cyan-300 px-2.5 py-0.5 rounded text-xs font-mono font-bold w-9 text-center mr-3">
                      {index + 1}
                    </span>
                    <span className="text-slate-300 text-sm">{degree}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Scales */}
        <div className="bg-slate-950/80 rounded-xl p-6 border border-slate-800">
          <h3 className="text-base font-bold text-amber-300 mb-4">Scale Relationships</h3>
          <div className="space-y-4">
            {scaleData.theory.relativeScale && (
              <div className="bg-slate-900/90 rounded-lg p-4 border border-slate-800">
                <h4 className="font-semibold text-amber-300 text-sm mb-1">
                  {scaleData.theory.relativeScale.relationship}
                </h4>
                <p className="text-white text-base font-bold mb-1">
                  {scaleData.theory.relativeScale.name}
                </p>
                <p className="text-slate-400 text-xs font-mono">
                  {scaleData.theory.relativeScale.intervalDistance}
                </p>
              </div>
            )}

            {scaleData.theory.parallelScale && (
              <div className="bg-slate-900/90 rounded-lg p-4 border border-slate-800">
                <h4 className="font-semibold text-cyan-300 text-sm mb-2">Parallel Scale</h4>
                <p className="text-white text-base font-bold mb-2">
                  {scaleData.theory.parallelScale.name}
                </p>
                <p className="text-slate-400 text-xs mb-1 font-semibold">Differences:</p>
                <ul className="text-slate-300 text-xs space-y-1">
                  {scaleData.theory.parallelScale.differences.map((diff, index) => (
                    <li key={index} className="flex items-start gap-1.5">
                      <span className="text-cyan-400">•</span>
                      <span>{diff}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-slate-900/90 rounded-lg p-4 border border-slate-800">
              <h4 className="font-semibold text-purple-300 text-sm mb-1">Modal Character</h4>
              <p className="text-slate-200 text-sm">{scaleData.theory.mode}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
