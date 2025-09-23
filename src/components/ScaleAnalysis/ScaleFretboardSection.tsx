"use client";

import React from 'react';
import { ScaleData } from '@/lib/scaleData';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';

interface ScaleFretboardSectionProps {
  scaleData: ScaleData;
}

export default function ScaleFretboardSection({ scaleData }: ScaleFretboardSectionProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Guitar Fretboard Patterns</h2>
      
      {/* Scale Patterns */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Essential Patterns</h3>
        <div className="space-y-6">
          {scaleData.guitarFretboard.patterns.map((pattern, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Pattern {pattern.patternNumber}: {pattern.position}
                  </h4>
                  <p className="text-gray-600 text-sm">{pattern.description}</p>
                </div>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">
                  Pattern {pattern.patternNumber}
                </span>
              </div>
              
              {/* AlphaTab Notation */}
              <div className="mb-4">
                <AlphaTexRenderer
                  alphaTex={pattern.alphaTex}
                  title={`${pattern.position} Pattern`}
                  className="bg-gray-50 rounded-lg p-4"
                />
              </div>

              {/* Applications */}
              <div>
                <h5 className="font-medium text-gray-700 text-sm mb-2">Best Used For:</h5>
                <div className="flex flex-wrap gap-2">
                  {pattern.applications.map((application, appIndex) => (
                    <span 
                      key={appIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs capitalize"
                    >
                      {application}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Common Positions */}
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-4">Common Fretboard Positions</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {scaleData.guitarFretboard.commonPositions.map((position, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">{position.position}</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Frets:</span>
                  <span className="font-mono text-gray-800">{position.frets}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Difficulty:</span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    position.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                    position.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {position.difficulty}
                  </span>
                </div>
                <p className="text-gray-600 text-xs mt-2">{position.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}