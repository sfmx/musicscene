import React from 'react';
import { ChordData } from '@/lib/chordData';
import { ColorSchemeClasses } from '@/utils/theme';

interface ChordConstructionSectionProps {
  construction: ChordData['construction'];
  colorScheme: ColorSchemeClasses;
}

export default function ChordConstructionSection({ construction, colorScheme }: ChordConstructionSectionProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">{construction.title}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {construction.boxes.map((box, i) => (
          <div
            key={i}
            className={`${colorScheme.constructionBg[i] || 'bg-gray-50'} rounded-lg p-4 border ${colorScheme.constructionBorder[i] || 'border-gray-200'}`}
          >
            <h3 className={`text-lg font-semibold ${colorScheme.constructionTitle[i] || 'text-gray-800'} mb-3`}>
              {box.title}
            </h3>
            <ul className={`${colorScheme.constructionText[i] || 'text-gray-700'} text-sm space-y-2`}>
              {box.items.map((item, j) => (
                <li key={j}>• <strong>{item.split(':')[0]}:</strong>{item.split(':').slice(1).join(':')}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
