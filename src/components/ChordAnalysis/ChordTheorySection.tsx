import React from 'react';
import { ChordData } from '@/lib/chordData';
import { ColorSchemeClasses } from '@/utils/theme';

interface ChordTheorySectionProps {
  theory: ChordData['theory'];
  colorScheme: ColorSchemeClasses;
}

export default function ChordTheorySection({ theory, colorScheme }: ChordTheorySectionProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory Fundamentals</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-3">{theory.fundamentalsTitle}</h3>
          <ul className="space-y-2 text-gray-600">
            {theory.fundamentals.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className={`${colorScheme.bulletColor} mt-1`}>•</span>
                <span><strong>{item.label}:</strong> {item.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-3">{theory.applicationsTitle}</h3>
          <ul className="space-y-2 text-gray-600">
            {theory.applications.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className={`${colorScheme.bulletColor} mt-1`}>•</span>
                <span><strong>{item.label}:</strong> {item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
