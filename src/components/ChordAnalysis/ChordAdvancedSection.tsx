import React from 'react';
import { ChordData } from '@/lib/chordData';

interface ChordAdvancedSectionProps {
  advancedConcepts: ChordData['advancedConcepts'];
}

export default function ChordAdvancedSection({ advancedConcepts }: ChordAdvancedSectionProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">{advancedConcepts.title}</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {advancedConcepts.concepts.map((concept, i) => (
          <div key={i} className={`${concept.colorBg} rounded-lg p-6 border ${concept.colorBorder}`}>
            <h3 className={`text-lg font-semibold ${concept.colorTitle} mb-3`}>{concept.title}</h3>
            <ul className={`space-y-2 text-sm ${concept.colorText}`}>
              {concept.items.map((item, j) => (
                <li key={j}>• <strong>{item.split(':')[0]}:</strong>{item.split(':').slice(1).join(':')}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
