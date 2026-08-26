import React from 'react';
import { ChordData } from '@/lib/chordData';

interface ChordPracticeSectionProps {
  practiceExercises: ChordData['practiceExercises'];
}

export default function ChordPracticeSection({ practiceExercises }: ChordPracticeSectionProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">{practiceExercises.title}</h2>

      {practiceExercises.tipTitle && practiceExercises.tipDescription && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">{practiceExercises.tipTitle}</h3>
          <p className="text-blue-700">{practiceExercises.tipDescription}</p>
        </div>
      )}

      <div className="space-y-6">
        {practiceExercises.exercises.map((exercise, i) => (
          <div key={i} className="bg-gray-50 rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">{exercise.title}</h3>
            <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
              <p className="font-medium mb-2">{exercise.content}</p>
              <p className="text-sm text-gray-600 mb-2">{exercise.detail}</p>
              {exercise.tip && <p className="text-sm">{exercise.tip}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
