"use client";

import React from 'react';
import { ScaleData } from '@/lib/scaleData';

interface ScaleGenreSectionProps {
  scaleData: ScaleData;
}

export default function ScaleGenreSection({ scaleData }: ScaleGenreSectionProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Genre Applications</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {scaleData.genreApplications.map((genre, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-2">{genre.genre}</h3>
            <p className="text-gray-600 text-sm mb-3">{genre.usage}</p>
            
            {/* Characteristics */}
            <div className="mb-3">
              <h4 className="font-medium text-gray-700 text-sm mb-2">Characteristics:</h4>
              <div className="flex flex-wrap gap-1">
                {genre.characteristics.map((characteristic, charIndex) => (
                  <span 
                    key={charIndex}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
                  >
                    {characteristic}
                  </span>
                ))}
              </div>
            </div>

            {/* Examples */}
            <div>
              <h4 className="font-medium text-gray-700 text-sm mb-2">Examples:</h4>
              <ul className="text-xs text-gray-600 space-y-1">
                {genre.examples.map((example, exampleIndex) => (
                  <li key={exampleIndex}>• {example}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}