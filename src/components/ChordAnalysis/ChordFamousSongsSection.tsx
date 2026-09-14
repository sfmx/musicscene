import React from 'react';
import { ChordData } from '@/lib/chordData';

interface ChordFamousSongsSectionProps {
  famousSongs: ChordData['famousSongs'];
}

export default function ChordFamousSongsSection({ famousSongs }: ChordFamousSongsSectionProps) {
  return (
    <div className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-xl p-6 sm:p-8 mb-12">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 pb-3 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
        <span>🎶</span> {famousSongs.title}
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {famousSongs.categories.map((cat, i) => (
          <div key={i} className="bg-slate-50 dark:bg-slate-950/80 rounded-xl p-6 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
            <h3 className="text-lg font-bold text-cyan-700 dark:text-cyan-300 mb-3">{cat.title}</h3>
            <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
              {cat.songs.map((song, j) => (
                <li key={j} className="flex items-start gap-2">
                  <span className="text-cyan-600 dark:text-cyan-400 mt-0.5">•</span>
                  <span>{song}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
