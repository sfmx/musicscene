import React from 'react';
import { IntervalData } from '@/lib/intervalData';

interface Props {
  musicalExamples: IntervalData['musicalExamples'];
}

export default function IntervalExamplesSection({ musicalExamples }: Props) {
  return (
    <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8 mb-12">
      <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-slate-800 flex items-center gap-2">
        <span>🎶</span> Musical Examples &amp; Famous Uses
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-base font-bold text-cyan-300 mb-4">Classical Examples</h3>
          <div className="space-y-4">
            {musicalExamples.classical.map((ex, i) => (
              <div key={i} className="bg-slate-950/80 rounded-xl p-5 border border-slate-800">
                <h4 className="font-bold text-white mb-1">{ex.title}</h4>
                <p className="text-xs text-slate-300 mb-2 leading-relaxed">{ex.description}</p>
                <p className="text-xs text-cyan-300 font-mono">{ex.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-base font-bold text-amber-300 mb-4">Popular Music</h3>
          <div className="space-y-4">
            {musicalExamples.popular.map((ex, i) => (
              <div key={i} className="bg-slate-950/80 rounded-xl p-5 border border-slate-800">
                <h4 className="font-bold text-white mb-1">{ex.title}</h4>
                <p className="text-xs text-slate-300 mb-2 leading-relaxed">{ex.description}</p>
                <p className="text-xs text-amber-300 font-mono">{ex.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
