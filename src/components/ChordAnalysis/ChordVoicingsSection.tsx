"use client";

import React, { useState } from 'react';
import { ChordVoicingGroup, ChordVoicing } from '@/lib/chordData';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import { getChordShape, getActualFretNumbers } from '@/lib/chordVoicings';
import { strumChord } from '@/lib/guitarAudio';

interface ChordVoicingsSectionProps {
  voicingGroups: ChordVoicingGroup[];
}

function VoicingCard({ voicing }: { voicing: ChordVoicing }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleStrum = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsPlaying(true);
    const chordData = getChordShape(voicing.chord);
    const actualFrets = getActualFretNumbers(chordData);
    strumChord(actualFrets, {
      speedMs: 18,
      volume: 0.35,
    });
    setTimeout(() => {
      setIsPlaying(false);
    }, 550);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950/80 rounded-xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm group">
      <div>
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
            {voicing.name}
          </h3>
          <button
            type="button"
            onClick={handleStrum}
            className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full transition-all cursor-pointer shadow-xs active:scale-95 ${
              isPlaying
                ? 'bg-cyan-600 text-white border border-cyan-500 scale-105'
                : 'bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800 hover:bg-cyan-100 dark:hover:bg-cyan-900/50 hover:border-cyan-300'
            }`}
            title={`Hear ${voicing.name} strummed with realistic guitar audio`}
          >
            <span>{isPlaying ? '🎵' : '🔊'}</span>
            <span>{isPlaying ? 'Playing...' : 'Strum'}</span>
          </button>
        </div>
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
  );
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
              <VoicingCard key={i} voicing={voicing} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
