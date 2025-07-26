import React from 'react';

interface PracticeNotes {
  commonMistakes: string[];
  practiceRoutine: string[];
  metronomeWork: string[];
}

interface PracticeNotesProps {
  practiceNotes: PracticeNotes;
}

export default function PracticeNotesSection({ practiceNotes }: PracticeNotesProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Practice Notes & Tips</h2>
      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Common Mistakes */}
        <div className="bg-red-50 rounded-xl p-6 border border-red-200">
          <h3 className="text-lg font-semibold text-red-900 mb-4">⚠️ Common Mistakes</h3>
          <ul className="space-y-2 text-sm text-red-700">
            {practiceNotes.commonMistakes.map((mistake, i) => (
              <li key={i}>• {mistake}</li>
            ))}
          </ul>
        </div>

        {/* Practice Routine */}
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">📋 Practice Routine</h3>
          <ol className="space-y-2 text-sm text-blue-700">
            {practiceNotes.practiceRoutine.map((step, i) => (
              <li key={i}>{i + 1}. {step}</li>
            ))}
          </ol>
        </div>

        {/* Metronome Work */}
        <div className="bg-green-50 rounded-xl p-6 border border-green-200">
          <h3 className="text-lg font-semibold text-green-900 mb-4">🎵 Metronome Work</h3>
          <ul className="space-y-2 text-sm text-green-700">
            {practiceNotes.metronomeWork.map((tip, i) => (
              <li key={i}>• {tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
