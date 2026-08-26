import React from 'react';
import { IntervalData } from '@/lib/intervalData';

interface Props {
  theory: IntervalData['theory'];
  colorScheme: string;
}

const bulletColors: Record<string, string> = {
  yellow: 'text-yellow-500',
  blue: 'text-blue-500',
  green: 'text-green-500',
  red: 'text-red-500',
  purple: 'text-purple-500',
  orange: 'text-orange-500',
  amber: 'text-amber-500',
  indigo: 'text-indigo-500',
  teal: 'text-teal-500',
  cyan: 'text-cyan-500',
  pink: 'text-pink-500',
  emerald: 'text-emerald-500',
  rose: 'text-rose-500',
};

export default function IntervalTheorySection({ theory, colorScheme }: Props) {
  const bulletColor = bulletColors[colorScheme] || 'text-blue-500';

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory Fundamentals</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-3">{theory.propertiesTitle}</h3>
          <ul className="space-y-2 text-gray-600">
            {theory.properties.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className={`${bulletColor} mt-1`}>•</span>
                <span><strong>{item.label}:</strong> {item.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-3">{theory.examplesTitle}</h3>
          <ul className="space-y-2 text-gray-600">
            {theory.examples.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className={`${bulletColor} mt-1`}>•</span>
                <span><strong>{item.label}:</strong> {item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
