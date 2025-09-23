"use client";

import React from 'react';
import { ScaleData } from '@/lib/scaleData';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';

interface ScaleHarmonicSectionProps {
  scaleData: ScaleData;
}

export default function ScaleHarmonicSection({ scaleData }: ScaleHarmonicSectionProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Harmonic Applications</h2>
      
      {/* Diatonic Chords */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Diatonic Chords</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 px-3 text-sm font-semibold text-gray-700">Degree</th>
                <th className="text-left py-2 px-3 text-sm font-semibold text-gray-700">Chord</th>
                <th className="text-left py-2 px-3 text-sm font-semibold text-gray-700">Quality</th>
                <th className="text-left py-2 px-3 text-sm font-semibold text-gray-700">Function</th>
                <th className="text-left py-2 px-3 text-sm font-semibold text-gray-700">Notes</th>
              </tr>
            </thead>
            <tbody>
              {scaleData.harmonicApplications.diatonicChords.map((chord, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-3 px-3">
                    <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm font-mono">
                      {chord.degree}
                    </span>
                  </td>
                  <td className="py-3 px-3 font-semibold text-gray-800">{chord.chord}</td>
                  <td className="py-3 px-3 text-gray-600">{chord.quality}</td>
                  <td className="py-3 px-3 text-gray-600 text-sm">{chord.function}</td>
                  <td className="py-3 px-3 text-gray-600 font-mono text-sm">{chord.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Common Progressions */}
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-4">Common Progressions</h3>
        <div className="space-y-6">
          {scaleData.harmonicApplications.commonProgressions.map((progression, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    {progression.name || `Progression ${index + 1}`}
                  </h4>
                  <p className="text-gray-600 text-sm">{progression.description}</p>
                </div>
                {progression.genre && (
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                    {progression.genre}
                  </span>
                )}
              </div>

              {/* Chord Progression Display */}
              <div className="mb-3">
                <div className="flex flex-wrap gap-2 mb-2">
                  {progression.chords.map((chord, chordIndex) => (
                    <span 
                      key={chordIndex}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded font-mono"
                    >
                      {chord}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  <strong>Roman Numerals:</strong> {progression.romanNumerals}
                </p>
              </div>

              {/* AlphaTab Notation if available */}
              {progression.alphaTex && (
                <div className="mt-3">
                  <AlphaTexRenderer
                    alphaTex={progression.alphaTex}
                    title={progression.name || "Progression"}
                    className="bg-gray-50 rounded-lg p-4"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}