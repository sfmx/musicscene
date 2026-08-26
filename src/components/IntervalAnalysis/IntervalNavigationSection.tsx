import React from 'react';
import Link from 'next/link';
import { IntervalData } from '@/lib/intervalData';

interface Props {
  journeySection: IntervalData['journeySection'];
}

export default function IntervalNavigationSection({ journeySection }: Props) {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8 border border-gray-200 mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">{journeySection.title}</h2>
      <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">{journeySection.description}</p>
      <div className="grid md:grid-cols-3 gap-6">
        {journeySection.links.map((link, i) => (
          <Link
            key={i}
            href={`/lessons/theory/intervals/${link.slug}`}
            className={`group bg-white rounded-lg p-6 border border-gray-200 ${link.hoverBorder} hover:shadow-lg transition-all duration-300`}
          >
            <div className="text-center">
              <div className={`w-12 h-12 ${link.iconBg} rounded-full flex items-center justify-center mx-auto mb-4 ${link.iconHoverBg} transition-colors`}>
                <span className="text-2xl">{link.icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{link.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{link.description}</p>
              <span className={`${link.linkColor} font-medium text-sm ${link.linkHoverColor}`}>
                {link.linkText} &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
