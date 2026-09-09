import React from 'react';
import { PracticeCategory } from '@/lib/intervalData';

interface Props {
  exercises: PracticeCategory[];
}

export default function IntervalPracticeSection({ exercises }: Props) {
  return (
    <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8 mb-12">
      <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-slate-800 flex items-center gap-2">
        <span>⚡</span> Practice Exercises
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {exercises.map((cat, i) => (
          <div key={i} className="bg-slate-950/80 rounded-xl p-5 border border-slate-800">
            <h3 className="text-base font-bold text-cyan-300 mb-3">{cat.title}</h3>
            <ul className="text-slate-300 text-xs space-y-2">
              {cat.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
