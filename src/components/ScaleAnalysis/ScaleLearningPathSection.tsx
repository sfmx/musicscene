"use client";

import React from 'react';
import { ScaleData } from '@/lib/scaleData';

interface ScaleLearningPathSectionProps {
  scaleData: ScaleData;
}

export default function ScaleLearningPathSection({ scaleData }: ScaleLearningPathSectionProps) {
  if (!scaleData.learningPath) {
    return null;
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Learning Path</h2>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Difficulty Level */}
        <div className="bg-white rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-3">Difficulty Level</h3>
          <span className={`px-3 py-1 rounded ${getDifficultyColor(scaleData.learningPath.difficulty)}`}>
            {scaleData.learningPath.difficulty}
          </span>
        </div>

        {/* Prerequisites */}
        <div className="bg-white rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-3">Prerequisites</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            {scaleData.learningPath.prerequisites.map((prereq, index) => (
              <li key={index}>• {prereq}</li>
            ))}
          </ul>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-3">Next Steps</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            {scaleData.learningPath.nextSteps.map((step, index) => (
              <li key={index}>• {step}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Practice Routine */}
      <div className="bg-white rounded-lg p-6">
        <h3 className="font-semibold text-gray-800 mb-4">Structured Practice Routine</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {scaleData.learningPath.practiceRoutine.map((phase, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-semibold text-gray-800">{phase.phase}</h4>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                  {phase.duration}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm mb-3">{phase.focus}</p>
              
              <div>
                <h5 className="font-medium text-gray-700 text-sm mb-2">Exercises:</h5>
                <ul className="text-xs text-gray-600 space-y-1">
                  {phase.exercises.map((exercise, exerciseIndex) => (
                    <li key={exerciseIndex}>• {exercise}</li>
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