"use client";

import React from 'react';
import { ScaleData } from '@/lib/scaleData';
import Link from 'next/link';

interface ScaleRelatedSectionProps {
  scaleData: ScaleData;
}

export default function ScaleRelatedSection({ scaleData }: ScaleRelatedSectionProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Related Scales</h2>
      
      <div className="grid md:grid-cols-2 gap-4">
        {scaleData.relatedScales.map((relatedScale, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-2">{relatedScale.scale}</h3>
            
            <div className="space-y-2 text-sm">
              <div>
                <span className="font-medium text-gray-700">Relationship: </span>
                <span className="text-gray-600">{relatedScale.relationship}</span>
              </div>
              
              {relatedScale.differences && (
                <div>
                  <span className="font-medium text-gray-700">Differences: </span>
                  <span className="text-gray-600">{relatedScale.differences}</span>
                </div>
              )}
              
              {relatedScale.usage && (
                <p className="text-gray-600 text-xs mt-2">
                  <strong>Usage:</strong> {relatedScale.usage}
                </p>
              )}
            </div>

            {/* Try to link to related scale if it exists */}
            <div className="mt-3">
              <Link 
                href={`/lessons/theory/scales/${relatedScale.scale.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-blue-600 hover:text-blue-800 text-xs transition-colors"
              >
                Learn about {relatedScale.scale} →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}