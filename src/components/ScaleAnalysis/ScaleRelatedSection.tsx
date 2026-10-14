"use client";

import React from 'react';
import { ScaleData } from '@/lib/scaleData';
import Link from 'next/link';

interface ScaleRelatedSectionProps {
  scaleData: ScaleData;
}

function getRelatedScaleUrl(scaleName: string): { url: string; isDirect: boolean } {
  const lower = scaleName.toLowerCase().replace(/[()]/g, '').trim();
  if (lower.includes('harmonic minor')) return { url: '/lessons/theory/scales/harmonic-minor/', isDirect: true };
  if (lower.includes('melodic minor')) return { url: '/lessons/theory/scales/melodic-minor/', isDirect: true };
  if (lower.includes('minor pentatonic')) return { url: '/lessons/theory/scales/minor-pentatonic/', isDirect: true };
  if (lower.includes('major pentatonic')) return { url: '/lessons/theory/scales/major-pentatonic/', isDirect: true };
  if (lower.includes('pentatonic')) return { url: '/lessons/theory/scales/minor-pentatonic/', isDirect: true };
  if (lower.includes('blues')) return { url: '/lessons/theory/scales/blues/', isDirect: true };
  if (lower.includes('dorian')) return { url: '/lessons/theory/scales/dorian/', isDirect: true };
  if (lower.includes('phrygian')) return { url: '/lessons/theory/scales/phrygian/', isDirect: true };
  if (lower.includes('lydian')) return { url: '/lessons/theory/scales/lydian/', isDirect: true };
  if (lower.includes('mixolydian')) return { url: '/lessons/theory/scales/mixolydian/', isDirect: true };
  if (lower.includes('locrian')) return { url: '/lessons/theory/scales/locrian/', isDirect: true };
  if (lower.includes('natural minor') || lower === 'minor') return { url: '/lessons/theory/scales/minor/', isDirect: true };
  if (lower.includes('major scale') || lower === 'major') return { url: '/lessons/theory/scales/major/', isDirect: true };
  if (lower.includes('chromatic')) return { url: '/lessons/theory/scales/chromatic/', isDirect: true };
  if (lower.includes('whole tone')) return { url: '/lessons/theory/scales/whole-tone/', isDirect: true };
  return { url: '/lessons/theory/scales/', isDirect: false };
}

export default function ScaleRelatedSection({ scaleData }: ScaleRelatedSectionProps) {
  return (
    <div className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-xl p-6 sm:p-8 mb-12">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 pb-3 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
        <span>🔄</span> Related Scales
      </h2>
      
      <div className="grid md:grid-cols-2 gap-4">
        {scaleData.relatedScales.map((relatedScale, index) => {
          const { url, isDirect } = getRelatedScaleUrl(relatedScale.scale);
          return (
            <div key={index} className="bg-slate-50 dark:bg-slate-950/80 rounded-xl p-5 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2">{relatedScale.scale}</h3>
                
                <div className="space-y-2 text-xs">
                  <div>
                    <span className="font-semibold text-slate-500 dark:text-slate-400">Relationship: </span>
                    <span className="text-slate-700 dark:text-slate-200">{relatedScale.relationship}</span>
                  </div>
                  
                  {relatedScale.differences && (
                    <div>
                      <span className="font-semibold text-slate-500 dark:text-slate-400">Differences: </span>
                      <span className="text-amber-700 dark:text-amber-300">{relatedScale.differences}</span>
                    </div>
                  )}
                  
                  {relatedScale.usage && (
                    <p className="text-slate-600 dark:text-slate-400 mt-2">
                      <strong className="text-slate-700 dark:text-slate-300">Usage:</strong> {relatedScale.usage}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80">
                <Link 
                  href={url}
                  className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 text-xs font-semibold transition-colors"
                >
                  {isDirect ? `Learn about ${relatedScale.scale}` : 'Explore All Scales'} &rarr;
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
