import React from 'react';
import { ChordData } from '@/lib/chordData';
import { ColorSchemeClasses } from '@/utils/theme';

interface ChordConstructionSectionProps {
  construction: ChordData['construction'];
  colorScheme: ColorSchemeClasses;
}

export default function ChordConstructionSection({ construction, colorScheme }: ChordConstructionSectionProps) {
  return (
    <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8 mb-12">
      <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-slate-800 flex items-center gap-2">
        <span>📐</span> {construction.title}
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {construction.boxes.map((box, i) => (
          <div
            key={i}
            className="bg-slate-950/80 rounded-xl p-5 border border-slate-800 hover:border-slate-700 transition-colors"
          >
            <h3 className="text-lg font-bold text-amber-300 mb-3">
              {box.title}
            </h3>
            <ul className="text-slate-300 text-sm space-y-2">
              {box.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">•</span>
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
