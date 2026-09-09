"use client";

import React from 'react';
import { ScaleData } from '@/lib/scaleData';
import { getDifficultyColor } from '@/utils/theme';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';

interface ScalePracticeSectionProps {
  scaleData: ScaleData;
}

export default function ScalePracticeSection({ scaleData }: ScalePracticeSectionProps) {
  return (
    <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8 mb-12">
      <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-slate-800 flex items-center gap-2">
        <span>⚡</span> Practice Exercises
      </h2>
      
      <div className="space-y-6">
        {scaleData.practiceExercises.map((exercise, index) => (
          <div key={index} className="bg-slate-950/80 rounded-xl p-5 border border-slate-800">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-white text-base mb-1">{exercise.name}</h3>
                <p className="text-slate-400 text-xs">{exercise.description}</p>
              </div>
              <div className="flex gap-2">
                <span className="bg-slate-900 border border-slate-800 text-cyan-300 px-2.5 py-0.5 rounded text-xs font-mono">
                  {exercise.type}
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${getDifficultyColor(exercise.difficulty)}`}>
                  {exercise.difficulty}
                </span>
              </div>
            </div>

            {/* AlphaTab Notation if available */}
            {exercise.alphaTex && (
              <div className="mb-4 bg-slate-900/90 rounded-lg p-2 border border-slate-800">
                <AlphaTexRenderer
                  alphaTex={exercise.alphaTex}
                  title={exercise.name}
                  className="scale-75"
                />
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-4 text-xs">
              {/* Practice Details */}
              <div>
                {exercise.tempo && (
                  <div className="mb-3">
                    <h4 className="font-semibold text-slate-400 mb-1">Tempo Range:</h4>
                    <p className="text-cyan-300 font-mono">{exercise.tempo}</p>
                  </div>
                )}
                
                <div className="mb-3">
                  <h4 className="font-semibold text-slate-400 mb-2">Focus Areas:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {exercise.focus.map((focusArea, focusIndex) => (
                      <span 
                        key={focusIndex}
                        className="bg-slate-900 border border-slate-800 text-slate-300 px-2 py-0.5 rounded"
                      >
                        {focusArea}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div>
                <h4 className="font-semibold text-slate-400 mb-2">Practice Steps:</h4>
                <ul className="text-slate-300 space-y-1">
                  {exercise.instructions.map((instruction, instIndex) => (
                    <li key={instIndex} className="flex items-start gap-1.5">
                      <span className="text-cyan-400">•</span>
                      <span>{instruction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
