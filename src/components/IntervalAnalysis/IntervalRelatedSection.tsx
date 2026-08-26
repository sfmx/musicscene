import React from 'react';
import { RelatedInterval } from '@/lib/intervalData';

interface Props {
  intervals: RelatedInterval[];
}

export default function IntervalRelatedSection({ intervals }: Props) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Related Intervals & Comparisons</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {intervals.map((interval, i) => (
          <div key={i} className={`${interval.colorBg} rounded-lg p-4 ${interval.colorBorder}`}>
            <h3 className={`font-semibold ${interval.colorTitle} mb-2`}>{interval.title}</h3>
            <p className={`text-sm ${interval.colorText} mb-2`}>{interval.description}</p>
            <p className={`text-xs ${interval.colorDetail}`}>{interval.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
