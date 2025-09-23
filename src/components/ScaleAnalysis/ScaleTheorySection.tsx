"use client";

import React from 'react';
import { ScaleData } from '@/lib/scaleData';

interface ScaleTheorySectionProps {
  scaleData: ScaleData;
}

export default function ScaleTheorySection({ scaleData }: ScaleTheorySectionProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory Fundamentals</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Scale Structure */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">Scale Structure</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Intervals from Root:</h4>
              <p className="text-gray-600 font-mono text-lg bg-gray-50 p-3 rounded">
                {scaleData.theory.intervalsFromRoot}
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Scale Degrees:</h4>
              <div className="space-y-2">
                {scaleData.theory.scaleDegrees.map((degree, index) => (
                  <div key={index} className="flex items-center">
                    <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm font-mono w-8 text-center mr-3">
                      {index + 1}
                    </span>
                    <span className="text-gray-600 text-sm">{degree}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Scales */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">Scale Relationships</h3>
          <div className="space-y-4">
            {scaleData.theory.relativeScale && (
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-800 mb-2">
                  {scaleData.theory.relativeScale.relationship}
                </h4>
                <p className="text-blue-700 text-sm mb-1">
                  <strong>{scaleData.theory.relativeScale.name}</strong>
                </p>
                <p className="text-blue-600 text-xs">
                  {scaleData.theory.relativeScale.intervalDistance}
                </p>
              </div>
            )}

            {scaleData.theory.parallelScale && (
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-medium text-green-800 mb-2">Parallel Scale</h4>
                <p className="text-green-700 text-sm mb-2">
                  <strong>{scaleData.theory.parallelScale.name}</strong>
                </p>
                <p className="text-green-600 text-xs mb-1">Differences:</p>
                <ul className="text-green-600 text-xs">
                  {scaleData.theory.parallelScale.differences.map((diff, index) => (
                    <li key={index}>• {diff}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-purple-50 rounded-lg p-4">
              <h4 className="font-medium text-purple-800 mb-2">Modal Character</h4>
              <p className="text-purple-700 text-sm">{scaleData.theory.mode}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}