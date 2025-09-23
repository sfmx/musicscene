"use client";

import React from 'react';
import { ScaleData } from '@/lib/scaleData';

interface ScaleSongsSectionProps {
  scaleData: ScaleData;
}

export default function ScaleSongsSection({ scaleData }: ScaleSongsSectionProps) {
  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty?.toLowerCase()) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Famous Songs Using This Scale</h2>
      
      <div className="grid md:grid-cols-2 gap-4">
        {scaleData.famousSongs.map((song, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-gray-800">{song.title}</h3>
                <p className="text-gray-600 text-sm">{song.artist}</p>
              </div>
              {song.difficulty && (
                <span className={`px-2 py-1 rounded text-xs ${getDifficultyColor(song.difficulty)}`}>
                  {song.difficulty}
                </span>
              )}
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Key:</span>
                <span className="font-mono text-gray-800">{song.key}</span>
              </div>
              {song.genre && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Genre:</span>
                  <span className="text-gray-800">{song.genre}</span>
                </div>
              )}
              {song.usage && (
                <p className="text-gray-600 text-xs">
                  <strong>Usage:</strong> {song.usage}
                </p>
              )}
              {song.learningValue && (
                <p className="text-blue-600 text-xs bg-blue-50 p-2 rounded">
                  <strong>Learning Value:</strong> {song.learningValue}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}