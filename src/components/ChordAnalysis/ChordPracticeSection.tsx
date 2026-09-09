import React from 'react';
import { ChordData } from '@/lib/chordData';

interface ChordPracticeSectionProps {
  practiceExercises: ChordData['practiceExercises'];
}

export default function ChordPracticeSection({ practiceExercises }: ChordPracticeSectionProps) {
  return (
    <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8 mb-12">
      <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-slate-800 flex items-center gap-2">
        <span>⚡</span> {practiceExercises.title}
      </h2>

      {practiceExercises.tipTitle && practiceExercises.tipDescription && (
        <div className="bg-slate-950/80 border border-cyan-500/30 rounded-xl p-5 mb-6">
          <h3 className="text-base font-bold text-cyan-300 mb-2 flex items-center gap-2">
            <span>💡</span> {practiceExercises.tipTitle}
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">{practiceExercises.tipDescription}</p>
        </div>
      )}

      <div className="space-y-6">
        {practiceExercises.exercises.map((exercise, i) => (
          <div key={i} className="bg-slate-950/80 rounded-xl border border-slate-800 p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs flex items-center justify-center font-bold">{i + 1}</span>
              {exercise.title}
            </h3>
            <div className="bg-slate-900/90 rounded-xl p-4 mb-2 border border-slate-800/80">
              <p className="font-semibold text-cyan-300 mb-1 text-sm">{exercise.content}</p>
              <p className="text-xs text-slate-400 mb-2 leading-relaxed">{exercise.detail}</p>
              {exercise.tip && (
                <p className="text-xs text-amber-300/90 bg-amber-950/20 border border-amber-500/20 rounded-lg p-2.5 mt-2">
                  <strong className="text-amber-300">Tip:</strong> {exercise.tip}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
