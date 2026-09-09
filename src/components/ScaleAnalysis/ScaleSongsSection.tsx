"use client";

import React from 'react';
import { ScaleData } from '@/lib/scaleData';
import { getDifficultyColor } from '@/utils/theme';

interface ScaleSongsSectionProps {
  scaleData: ScaleData;
}

export default function ScaleSongsSection({ scaleData }: ScaleSongsSectionProps) {
  return (
    <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8 mb-12">
      <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-slate-800 flex items-center gap-2">
        <span>🎶</span> Famous Songs Using This Scale
      </h2>
      
      <div className="grid md:grid-cols-2 gap-4">
        {scaleData.famousSongs.map((song, index) => (
          <div key={index} className="bg-slate-950/80 rounded-xl p-5 border border-slate-800">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-white text-base">{song.title}</h3>
                <p className="text-slate-400 text-xs">{song.artist}</p>
              </div>
              {song.difficulty && (
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${getDifficultyColor(song.difficulty)}`}>
                  {song.difficulty}
                </span>
              )}
            </div>
            
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-800/80">
                <span className="text-slate-400">Key:</span>
                <span className="font-mono text-cyan-300 font-bold">{song.key}</span>
              </div>
              {song.genre && (
                <div className="flex justify-between py-1 border-b border-slate-800/80">
                  <span className="text-slate-400">Genre:</span>
                  <span className="text-slate-200">{song.genre}</span>
                </div>
              )}
              {song.usage && (
                <p className="text-slate-300 pt-1">
                  <strong className="text-slate-400">Usage:</strong> {song.usage}
                </p>
              )}
              {song.learningValue && (
                <p className="text-amber-300/90 bg-amber-950/20 border border-amber-500/20 p-2.5 rounded-lg mt-2">
                  <strong className="text-amber-300">Learning Value:</strong> {song.learningValue}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
