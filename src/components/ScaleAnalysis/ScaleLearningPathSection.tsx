"use client";

import React from 'react';
import { ScaleData } from '@/lib/scaleData';
import { getDifficultyColor } from '@/utils/theme';

interface ScaleLearningPathSectionProps {
  scaleData: ScaleData;
}

export default function ScaleLearningPathSection({ scaleData }: ScaleLearningPathSectionProps) {
  if (!scaleData.learningPath) {
    return null;
  }

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8 mb-12">
      <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-slate-800 flex items-center gap-2">
        <span>🗺️</span> Learning Path
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Difficulty Level */}
        <div className="bg-slate-950/80 rounded-xl p-5 border border-slate-800">
          <h3 className="font-bold text-white mb-3 text-sm">Difficulty Level</h3>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(scaleData.learningPath.difficulty)}`}>
            {scaleData.learningPath.difficulty}
          </span>
        </div>

        {/* Prerequisites */}
        <div className="bg-slate-950/80 rounded-xl p-5 border border-slate-800">
          <h3 className="font-bold text-white mb-3 text-sm">Prerequisites</h3>
          <ul className="text-xs text-slate-300 space-y-1.5">
            {scaleData.learningPath.prerequisites.map((prereq, index) => (
              <li key={index} className="flex items-start gap-1.5">
                <span className="text-cyan-400">•</span>
                <span>{prereq}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Next Steps */}
        <div className="bg-slate-950/80 rounded-xl p-5 border border-slate-800">
          <h3 className="font-bold text-white mb-3 text-sm">Next Steps</h3>
          <ul className="text-xs text-slate-300 space-y-1.5">
            {scaleData.learningPath.nextSteps.map((step, index) => (
              <li key={index} className="flex items-start gap-1.5">
                <span className="text-amber-400">•</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Practice Routine */}
      <div className="bg-slate-950/80 rounded-xl p-6 border border-slate-800">
        <h3 className="font-bold text-white mb-4 text-base">Structured Practice Routine</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {scaleData.learningPath.practiceRoutine.map((phase, index) => (
            <div key={index} className="bg-slate-900/90 border border-slate-800 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-cyan-300 text-sm">{phase.phase}</h4>
                <span className="bg-slate-950 border border-slate-800 text-slate-300 px-2 py-0.5 rounded text-xs font-mono">
                  {phase.duration}
                </span>
              </div>
              <p className="text-slate-400 text-xs mb-3">{phase.focus}</p>
              <div>
                <h5 className="font-semibold text-slate-400 text-xs mb-1.5">Exercises:</h5>
                <ul className="text-xs text-slate-300 space-y-1">
                  {phase.exercises.map((exercise, exerciseIndex) => (
                    <li key={exerciseIndex} className="flex items-start gap-1.5">
                      <span className="text-cyan-400">•</span>
                      <span>{exercise}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
