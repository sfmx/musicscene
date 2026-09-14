import React from 'react';
import { ChordVoicingGroup } from '@/lib/chordData';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';

interface ChordVoicingsSectionProps {
  voicingGroups: ChordVoicingGroup[];
}

export default function ChordVoicingsSection({ voicingGroups }: ChordVoicingsSectionProps) {
  return (
    <>
      {voicingGroups.map((group, groupIdx) => (
        <div key={groupIdx} className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-xl p-6 sm:p-8 mb-12 min-w-0 max-w-full overflow-hidden">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 pb-3 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
            <span>🎸</span> {group.title}
          </h2>

          {group.tipTitle && group.tipDescription && (
            <div className="bg-slate-50 dark:bg-slate-950/80 border border-cyan-200 dark:border-cyan-500/30 rounded-xl p-5 mb-6">
              <h3 className="text-base font-bold text-cyan-700 dark:text-cyan-300 mb-2 flex items-center gap-2">
                <span>💡</span> {group.tipTitle}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{group.tipDescription}</p>
            </div>
          )}

          <div className={`grid md:grid-cols-2 ${group.voicings.length > 2 ? 'lg:grid-cols-3' : ''} gap-6 min-w-0 max-w-full`}>
            {group.voicings.map((voicing, i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-950/80 rounded-xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 text-center">{voicing.name}</h3>
                  <div className="text-center mb-4 flex justify-center">
                    <SimpleFretboardDiagram chord={voicing.chord} />
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 bg-white dark:bg-slate-900/60 p-3 rounded-lg border border-slate-200 dark:border-slate-800/80">
                    <p><strong className="text-slate-500 dark:text-slate-400">Notes:</strong> <span className="font-mono text-cyan-700 dark:text-cyan-300">{voicing.notes}</span></p>
                    <p><strong className="text-slate-500 dark:text-slate-400">Fingering:</strong> <span className="text-slate-900 dark:text-white">{voicing.fingering}</span></p>
                    <p><strong className="text-slate-500 dark:text-slate-400">Use:</strong> <span className="text-slate-600 dark:text-slate-300">{voicing.use}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
