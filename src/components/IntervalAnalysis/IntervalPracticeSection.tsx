import React from 'react';
import { PracticeCategory } from '@/lib/intervalData';

interface Props {
  exercises: PracticeCategory[];
}

export default function IntervalPracticeSection({ exercises }: Props) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {exercises.map((cat, i) => (
          <div key={i} className={`${cat.colorBg} rounded-lg p-4 ${cat.colorBorder}`}>
            <h3 className={`text-lg font-semibold ${cat.colorTitle} mb-3`}>{cat.title}</h3>
            <ul className={`${cat.colorText} text-sm space-y-2`}>
              {cat.items.map((item, j) => (
                <li key={j}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
