"use client";

import React from 'react';
import { ScaleData } from '@/lib/scaleData';

interface ScaleInfoSectionProps {
  scaleData: ScaleData;
}

export default function ScaleInfoSection({ scaleData }: ScaleInfoSectionProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Scale Information</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Basic Properties */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">Basic Properties</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="font-medium text-gray-700">Scale Type:</span>
              <span className="text-gray-600">{scaleData.scaleInfo.scaleType}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="font-medium text-gray-700">Number of Notes:</span>
              <span className="text-gray-600">{scaleData.scaleInfo.noteCount}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="font-medium text-gray-700">Interval Pattern:</span>
              <span className="text-gray-600 font-mono">{scaleData.scaleInfo.intervalPattern}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="font-medium text-gray-700">Mode:</span>
              <span className="text-gray-600">{scaleData.theory.mode}</span>
            </div>
            {scaleData.scaleInfo.alternateName && (
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="font-medium text-gray-700">Also Known As:</span>
                <span className="text-gray-600">{scaleData.scaleInfo.alternateName}</span>
              </div>
            )}
          </div>
        </div>

        {/* Character and Mood */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">Character & Mood</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Character:</h4>
              <p className="text-gray-600">{scaleData.scaleInfo.character}</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Emotional Qualities:</h4>
              <div className="flex flex-wrap gap-2">
                {scaleData.scaleInfo.mood.map((mood, index) => (
                  <span 
                    key={index}
                    className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm capitalize"
                  >
                    {mood}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Examples */}
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Common Key Examples</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {scaleData.keyExamples.map((keyExample, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">{keyExample.key}</h4>
              <p className="text-sm text-gray-600 font-mono mb-2">{keyExample.notes}</p>
              {keyExample.keySignature && (
                <p className="text-xs text-gray-500 mb-1">
                  <strong>Key Signature:</strong> {keyExample.keySignature}
                </p>
              )}
              {keyExample.commonUse && (
                <p className="text-xs text-gray-500">
                  <strong>Usage:</strong> {keyExample.commonUse}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}