import React from 'react';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';
import { IntervalData } from '@/lib/intervalData';

interface Props {
  guitarApplications: IntervalData['guitarApplications'];
}

export default function IntervalGuitarSection({ guitarApplications }: Props) {
  const { intervalExamples, chordConstructions, fretboardPatterns } = guitarApplications;

  return (
    <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8 mb-12">
      <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-slate-800 flex items-center gap-2">
        <span>🎸</span> Guitar Applications
      </h2>

      {/* Interval Examples */}
      <div className="mb-10">
        <h3 className="text-lg font-bold text-cyan-300 mb-2">{intervalExamples.title}</h3>
        <p className="text-xs text-slate-400 mb-6 leading-relaxed">{intervalExamples.description}</p>
        <div className="grid lg:grid-cols-3 gap-6">
          {intervalExamples.examples.map((ex, i) => (
            <div key={i} className="bg-slate-950/80 rounded-xl p-5 border border-slate-800">
              <div className="text-center mb-4">
                <h4 className="text-base font-bold text-white mb-1">{ex.title}</h4>
                <p className="text-xs text-slate-400 mb-3">{ex.subtitle}</p>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="text-center bg-slate-900/90 rounded-lg p-3 border border-slate-800">
                    <div className="flex justify-center">
                      <SimpleFretboardDiagram chord={ex.chord1} />
                    </div>
                    <p className="text-xs font-mono text-cyan-300 mt-1">{ex.chord1Label}</p>
                  </div>
                  <div className="text-center bg-slate-900/90 rounded-lg p-3 border border-slate-800">
                    <div className="flex justify-center">
                      <SimpleFretboardDiagram chord={ex.chord2} />
                    </div>
                    <p className="text-xs font-mono text-amber-300 mt-1">{ex.chord2Label}</p>
                  </div>
                </div>
                <div className="bg-slate-900/90 rounded-lg p-2 border border-slate-800 mb-3">
                  <AlphaTexRenderer alphaTex={ex.alphaTex} title={ex.alphaTexTitle} className="scale-75" />
                </div>
                <p className="text-xs text-slate-400 italic">{ex.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chord Constructions */}
      {chordConstructions && chordConstructions.items && chordConstructions.items.length > 0 && (
        <div>
          <h3 className="text-lg font-bold text-amber-300 mb-6">{chordConstructions.title}</h3>
          <div className="grid lg:grid-cols-3 gap-6">
            {chordConstructions.items.map((item, i) => (
              <div key={i} className="bg-slate-950/80 rounded-xl p-5 border border-slate-800">
                <h4 className="text-base font-bold text-white mb-4 text-center">{item.title}</h4>
                <div className="space-y-4">
                  <div className="text-center bg-slate-900/90 rounded-lg p-3 border border-slate-800">
                    <div className="flex justify-center">
                      <SimpleFretboardDiagram chord={item.chord} />
                    </div>
                    <p className="text-xs text-amber-400 font-mono mt-2">{item.chordLabel}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
