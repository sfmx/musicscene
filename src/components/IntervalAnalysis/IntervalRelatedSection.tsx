import React from 'react';
import { RelatedInterval } from '@/lib/intervalData';

interface Props {
  intervals: RelatedInterval[];
}

export default function IntervalRelatedSection({ intervals }: Props) {
  return (
    <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8 mb-12">
      <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-slate-800 flex items-center gap-2">
        <span>🔄</span> Related Intervals &amp; Comparisons
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {intervals.map((interval, i) => (
          <div key={i} className="bg-slate-950/80 rounded-xl p-5 border border-slate-800">
            <h3 className="font-bold text-white mb-2 text-sm">{interval.title}</h3>
            <p className="text-xs text-slate-300 mb-2">{interval.description}</p>
            <p className="text-xs text-cyan-300 font-mono">{interval.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
