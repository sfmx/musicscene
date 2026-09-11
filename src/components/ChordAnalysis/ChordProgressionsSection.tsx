import React from 'react';
import { ChordData } from '@/lib/chordData';
import { ColorSchemeClasses } from '@/utils/theme';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';

interface ChordProgressionsSectionProps {
  progressions: ChordData['progressions'];
  colorScheme: ColorSchemeClasses;
}

export default function ChordProgressionsSection({ progressions, colorScheme }: ChordProgressionsSectionProps) {
  return (
    <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8 mb-12 min-w-0 max-w-full overflow-hidden">
      <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-slate-800 flex items-center gap-2">
        <span>🎼</span> {progressions.title}
      </h2>

      <div className="grid gap-8 mb-6 min-w-0 max-w-full">
        <div className="space-y-6 min-w-0 max-w-full">
          {progressions.items.map((prog, i) => (
            <div key={i} className="bg-slate-950/80 rounded-xl p-6 border border-slate-800 min-w-0 max-w-full overflow-hidden">
              <h4 className="text-xl font-bold mb-4 text-center text-cyan-300">{prog.title}</h4>

              <div className="grid md:grid-cols-2 gap-6 mb-6 min-w-0 max-w-full">
                <div>
                  <h5 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">Chord Sequence</h5>
                  <div className={`grid ${prog.chords.length <= 3 ? 'grid-cols-3' : 'grid-cols-2'} gap-3 mb-4`}>
                    {prog.chords.map((c, j) => (
                      <div key={j} className="text-center bg-slate-900/90 rounded-lg p-3 border border-slate-800">
                        <div className="flex justify-center">
                          <SimpleFretboardDiagram chord={c.chord} />
                        </div>
                        <p className="text-sm font-bold text-white mt-2">{c.label}</p>
                        <p className="text-xs text-amber-400 font-mono">{c.numeral}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">Strumming Pattern</h5>
                  <div className="bg-slate-900/90 rounded-lg p-4 mb-4 border border-slate-800">
                    <p className="text-sm font-mono text-cyan-300 text-center font-bold tracking-widest">{prog.strumming.pattern}</p>
                    <p className="text-xs text-slate-400 text-center mt-1">{prog.strumming.description}</p>
                  </div>
                  <div className="text-xs text-slate-300 space-y-1.5 bg-slate-900/50 rounded-lg p-3 border border-slate-800/80">
                    <p><strong className="text-slate-400">Tempo:</strong> <span className="text-white font-mono">{prog.strumming.tempo}</span></p>
                    <p><strong className="text-slate-400">Feel:</strong> <span className="text-white">{prog.strumming.feel}</span></p>
                    <p><strong className="text-slate-400">Genre:</strong> <span className="text-cyan-300">{prog.strumming.genre}</span></p>
                  </div>
                </div>
              </div>

              <AlphaTexRenderer
                alphaTex={prog.alphaTex}
                title={prog.alphaTexTitle}
                className="mb-4"
              />

              <p className="text-xs text-slate-400 italic text-center">{prog.description}</p>
            </div>
          ))}

          {/* Practice Tips */}
          <div className="bg-slate-950/90 rounded-xl p-6 border border-cyan-500/30 mt-6">
            <h4 className="text-base font-bold text-cyan-300 mb-4 flex items-center gap-2">
              <span>💡</span> Practice Tips for Chord Progressions
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2">Technique Focus</h5>
                <ul className="text-sm text-slate-300 space-y-1.5">
                  {progressions.practiceTips.techniqueItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2">Musical Application</h5>
                <ul className="text-sm text-slate-300 space-y-1.5">
                  {progressions.practiceTips.applicationItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-400 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
