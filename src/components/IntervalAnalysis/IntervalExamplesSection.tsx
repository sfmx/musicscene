import React from 'react';
import { IntervalData } from '@/lib/intervalData';

interface Props {
  musicalExamples: IntervalData['musicalExamples'];
}

export default function IntervalExamplesSection({ musicalExamples }: Props) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Musical Examples & Famous Uses</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">Classical Examples</h3>
          <div className="space-y-4">
            {musicalExamples.classical.map((ex, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800">{ex.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{ex.description}</p>
                <p className="text-xs text-gray-500">{ex.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">Popular Music</h3>
          <div className="space-y-4">
            {musicalExamples.popular.map((ex, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800">{ex.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{ex.description}</p>
                <p className="text-xs text-gray-500">{ex.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
