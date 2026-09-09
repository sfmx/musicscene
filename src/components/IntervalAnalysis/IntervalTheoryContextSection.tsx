import React from 'react';
import { IntervalData } from '@/lib/intervalData';

interface Props {
  context: IntervalData['theoreticalContext'];
}

export default function IntervalTheoryContextSection({ context }: Props) {
  return (
    <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8 mb-12">
      <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-slate-800 flex items-center gap-2">
        <span>📚</span> Theoretical Context
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-base font-bold text-cyan-300 mb-4">Harmonic Function</h3>
          <div className="space-y-3">
            {context.harmonicFunction.map((item, i) => (
              <div key={i} className="bg-slate-950/80 rounded-xl p-4 border border-slate-800">
                <h4 className="font-bold text-white mb-1 text-sm">{item.title}</h4>
                <p className="text-xs text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-base font-bold text-amber-300 mb-4">Historical Development</h3>
          <div className="space-y-3">
            {context.historicalDevelopment.map((item, i) => (
              <div key={i} className="bg-slate-950/80 rounded-xl p-4 border border-slate-800">
                <h4 className="font-bold text-white mb-1 text-sm">{item.title}</h4>
                <p className="text-xs text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
