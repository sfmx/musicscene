"use client";

import React from 'react';
import { ScaleData } from '@/lib/scaleData';
import Link from 'next/link';

interface ScaleRelatedSectionProps {
  scaleData: ScaleData;
}

export default function ScaleRelatedSection({ scaleData }: ScaleRelatedSectionProps) {
  return (
    <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8 mb-12">
      <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-slate-800 flex items-center gap-2">
        <span>🔄</span> Related Scales
      </h2>
      
      <div className="grid md:grid-cols-2 gap-4">
        {scaleData.relatedScales.map((relatedScale, index) => (
          <div key={index} className="bg-slate-950/80 rounded-xl p-5 border border-slate-800 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-white text-base mb-2">{relatedScale.scale}</h3>
              
              <div className="space-y-2 text-xs">
                <div>
                  <span className="font-semibold text-slate-400">Relationship: </span>
                  <span className="text-slate-200">{relatedScale.relationship}</span>
                </div>
                
                {relatedScale.differences && (
                  <div>
                    <span className="font-semibold text-slate-400">Differences: </span>
                    <span className="text-amber-300">{relatedScale.differences}</span>
                  </div>
                )}
                
                {relatedScale.usage && (
                  <p className="text-slate-400 mt-2">
                    <strong className="text-slate-300">Usage:</strong> {relatedScale.usage}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/80">
              <Link 
                href={`/lessons/theory/scales/${relatedScale.scale.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-cyan-400 hover:text-cyan-300 text-xs font-semibold transition-colors"
              >
                Learn about {relatedScale.scale} &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
