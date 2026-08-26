import React from 'react';
import { IntervalData } from '@/lib/intervalData';

interface Props {
  context: IntervalData['theoreticalContext'];
}

export default function IntervalTheoryContextSection({ context }: Props) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theoretical Context</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">Harmonic Function</h3>
          <div className="space-y-3">
            {context.harmonicFunction.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">Historical Development</h3>
          <div className="space-y-3">
            {context.historicalDevelopment.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
