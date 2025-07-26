"use client";

import React from "react";
import SongAnalysisPage from '@/components/SongAnalysis/SongAnalysisPage';
import { getSongData } from '@/lib/songData';

interface SongAnalysisPageTemplateProps {
  songSlug: string;
  displayName?: string;
}

/**
 * Template component for all song analysis pages.
 * This component handles:
 * - Data loading from JSON
 * - Error handling for missing songs
 * - Consistent layout and structure
 * - Standardized error messages
 * 
 * Usage:
 * ```tsx
 * export default function MySongAnalysis() {
 *   return <SongAnalysisPageTemplate songSlug="my-song-slug" />;
 * }
 * ```
 */
export default function SongAnalysisPageTemplate({ 
  songSlug, 
  displayName 
}: SongAnalysisPageTemplateProps) {
  const songData = getSongData(songSlug);
  
  if (!songData) {
    const errorDisplayName = displayName || songSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Song Analysis Not Found</h1>
            <p className="text-gray-600 mb-4">
              Unable to load the song analysis for "{errorDisplayName}".
            </p>
          </div>
          
          <div className="space-y-3">
            <p className="text-sm text-gray-500">
              This could be because:
            </p>
            <ul className="text-xs text-gray-500 space-y-1 text-left">
              <li>• The song data file doesn't exist</li>
              <li>• The song isn't registered in the data loader</li>
              <li>• There's a typo in the song slug: "{songSlug}"</li>
            </ul>
          </div>
          
          <div className="mt-6 space-y-3">
            <a 
              href="/lessons/songs/song-analysis" 
              className="inline-block bg-cyan-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-cyan-700 transition-colors"
            >
              ← Back to Song Analysis
            </a>
            <div>
              <a 
                href="/" 
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Go to Home Page
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <SongAnalysisPage songData={songData} />;
}
