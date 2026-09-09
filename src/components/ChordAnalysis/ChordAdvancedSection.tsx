import React from 'react';
import { ChordData } from '@/lib/chordData';

interface ChordAdvancedSectionProps {
  advancedConcepts: ChordData['advancedConcepts'];
}

export default function ChordAdvancedSection({ advancedConcepts }: ChordAdvancedSectionProps) {
  return (
    <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8 mb-12">
      <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-slate-800 flex items-center gap-2">
        <span>🚀</span> {advancedConcepts.title}
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {advancedConcepts.concepts.map((concept, i) => (
          <div key={i} className="bg-slate-950/80 rounded-xl p-6 border border-slate-800 hover:border-slate-700 transition-colors">
            <h3 className="text-lg font-bold text-cyan-300 mb-3">{concept.title}</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {concept.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">•</span>
                  <span><strong className="text-white">{item.split(':')[0]}:</strong>{item.split(':').slice(1).join(':')}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
