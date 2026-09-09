"use client";

import React from 'react';
import { ScaleData } from '@/lib/scaleData';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';

interface ScaleHarmonicSectionProps {
  scaleData: ScaleData;
}

export default function ScaleHarmonicSection({ scaleData }: ScaleHarmonicSectionProps) {
  return (
    <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8 mb-12">
      <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-slate-800 flex items-center gap-2">
        <span>🎼</span> Harmonic Applications
      </h2>
      
      {/* Diatonic Chords */}
      <div className="mb-10">
        <h3 className="text-lg font-bold text-cyan-300 mb-4">Diatonic Chords</h3>
        <div className="overflow-x-auto bg-slate-950/80 rounded-xl border border-slate-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 text-xs uppercase tracking-wider">
                <th className="text-left py-3 px-4 font-semibold">Degree</th>
                <th className="text-left py-3 px-4 font-semibold">Chord</th>
                <th className="text-left py-3 px-4 font-semibold">Quality</th>
                <th className="text-left py-3 px-4 font-semibold">Function</th>
                <th className="text-left py-3 px-4 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {scaleData.harmonicApplications.diatonicChords.map((chord, index) => (
                <tr key={index} className="hover:bg-slate-900/50 transition-colors">
                  <td className="py-3 px-4">
                    <span className="bg-slate-900 border border-slate-800 text-cyan-300 px-2 py-0.5 rounded text-xs font-mono font-bold">
                      {chord.degree}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-bold text-white">{chord.chord}</td>
                  <td className="py-3 px-4 text-slate-300">{chord.quality}</td>
                  <td className="py-3 px-4 text-slate-400 text-xs">{chord.function}</td>
                  <td className="py-3 px-4 text-amber-300 font-mono text-xs">{chord.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Common Progressions */}
      <div>
        <h3 className="text-lg font-bold text-amber-300 mb-4">Common Progressions</h3>
        <div className="space-y-4">
          {scaleData.harmonicApplications.commonProgressions.map((progression, index) => (
            <div key={index} className="bg-slate-950/80 rounded-xl p-5 border border-slate-800">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-bold text-white text-base">
                    {progression.name || `Progression ${index + 1}`}
                  </h4>
                  <p className="text-slate-400 text-xs mt-0.5">{progression.description}</p>
                </div>
              </div>
              <div className="mt-3 bg-slate-900/90 rounded-lg p-3 border border-slate-800 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">Chords:</span>
                <span className="font-mono text-cyan-300 font-bold text-sm">{progression.chords}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
