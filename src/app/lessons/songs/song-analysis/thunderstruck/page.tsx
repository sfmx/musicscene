"use client";

import React from "react";
import SongAnalysisPage from '@/components/SongAnalysis/SongAnalysisPage';
import { getSongData } from '@/lib/songData';

export default function ThunderstruckAnalysis() {
  const songData = getSongData('thunderstruck');
  
  if (!songData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Song Data Not Found</h1>
          <p className="text-gray-600">Unable to load Thunderstruck analysis data.</p>
        </div>
      </div>
    );
  }

  return <SongAnalysisPage songData={songData} />;
}
