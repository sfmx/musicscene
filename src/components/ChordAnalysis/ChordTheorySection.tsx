import React from 'react';
import { ChordData } from '@/lib/chordData';
import { ColorSchemeClasses } from '@/utils/theme';

interface ChordTheorySectionProps {
  theory: ChordData['theory'];
  colorScheme: ColorSchemeClasses;
}

export default function ChordTheorySection({ theory, colorScheme }: ChordTheorySectionProps) {
  return (
    <div className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-xl p-6 sm:p-8 mb-12">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 pb-3 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
        <span>📖</span> Theory Fundamentals
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-50 dark:bg-slate-950/80 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
          <h3 className="text-base font-bold text-cyan-700 dark:text-cyan-300 mb-4">{theory.fundamentalsTitle}</h3>
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            {theory.fundamentals.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-cyan-600 dark:text-cyan-400 mt-0.5">•</span>
                <span><strong className="text-slate-900 dark:text-white">{item.label}:</strong> {item.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-slate-50 dark:bg-slate-950/80 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
          <h3 className="text-base font-bold text-amber-700 dark:text-amber-300 mb-4">{theory.applicationsTitle}</h3>
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            {theory.applications.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-amber-600 dark:text-amber-400 mt-0.5">•</span>
                <span><strong className="text-slate-900 dark:text-white">{item.label}:</strong> {item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
