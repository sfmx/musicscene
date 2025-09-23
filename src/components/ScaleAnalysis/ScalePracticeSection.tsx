"use client";

import React from 'react';
import { ScaleData } from '@/lib/scaleData';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';

interface ScalePracticeSectionProps {
  scaleData: ScaleData;
}

export default function ScalePracticeSection({ scaleData }: ScalePracticeSectionProps) {
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
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
      
      <div className="space-y-6">
        {scaleData.practiceExercises.map((exercise, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">{exercise.name}</h3>
                <p className="text-gray-600 text-sm">{exercise.description}</p>
              </div>
              <div className="flex gap-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                  {exercise.type}
                </span>
                <span className={`px-2 py-1 rounded text-xs ${getDifficultyColor(exercise.difficulty)}`}>
                  {exercise.difficulty}
                </span>
              </div>
            </div>

            {/* AlphaTab Notation if available */}
            {exercise.alphaTex && (
              <div className="mb-4">
                <AlphaTexRenderer
                  alphaTex={exercise.alphaTex}
                  title={exercise.name}
                  className="bg-gray-50 rounded-lg p-4"
                />
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-4">
              {/* Practice Details */}
              <div>
                {exercise.tempo && (
                  <div className="mb-3">
                    <h4 className="font-medium text-gray-700 text-sm mb-1">Tempo Range:</h4>
                    <p className="text-gray-600 text-sm font-mono">{exercise.tempo}</p>
                  </div>
                )}
                
                <div className="mb-3">
                  <h4 className="font-medium text-gray-700 text-sm mb-2">Focus Areas:</h4>
                  <div className="flex flex-wrap gap-1">
                    {exercise.focus.map((focusArea, focusIndex) => (
                      <span 
                        key={focusIndex}
                        className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs"
                      >
                        {focusArea}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div>
                <h4 className="font-medium text-gray-700 text-sm mb-2">Instructions:</h4>
                <ol className="text-xs text-gray-600 space-y-1">
                  {exercise.instructions.map((instruction, instrIndex) => (
                    <li key={instrIndex}>{instrIndex + 1}. {instruction}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}