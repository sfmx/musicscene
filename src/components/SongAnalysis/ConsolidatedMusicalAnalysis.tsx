"use client";

import React from "react";

interface ConsolidatedMusicalAnalysisProps {
  songData: any;
}

const ConsolidatedMusicalAnalysis: React.FC<ConsolidatedMusicalAnalysisProps> = ({
  songData
}) => {
  const keyAndScale = songData.musicalAnalysis?.keyAndScale;

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Musical Analysis</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Key & Tonality */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Key & Tonality</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center py-1 border-b border-gray-100">
              <span className="text-sm text-gray-600">Primary Key:</span>
              <span className="font-mono font-medium text-gray-900">{keyAndScale?.primaryKey}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-gray-100">
              <span className="text-sm text-gray-600">Mode:</span>
              <span className="font-mono font-medium text-gray-900">{keyAndScale?.modalCharacter}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-gray-100">
              <span className="text-sm text-gray-600">Relative Minor:</span>
              <span className="font-mono font-medium text-gray-900">{keyAndScale?.relativeMinor}</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-sm text-gray-600">Key Signature:</span>
              <span className="font-mono font-medium text-gray-900">{keyAndScale?.keySignature}</span>
            </div>
          </div>
        </div>

        {/* Song Structure */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Song Structure</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center py-1 border-b border-gray-100">
              <span className="text-sm text-gray-600">Tempo:</span>
              <span className="font-mono font-medium text-gray-900">{songData.songInfo?.tempo}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-gray-100">
              <span className="text-sm text-gray-600">Duration:</span>
              <span className="font-mono font-medium text-gray-900">{songData.songInfo?.duration}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-gray-100">
              <span className="text-sm text-gray-600">Tuning:</span>
              <span className="font-mono font-medium text-gray-900">{songData.songInfo?.tuning}</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-sm text-gray-600">Genre:</span>
              <span className="font-mono font-medium text-gray-900">{songData.songInfo?.genre}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Theory Explanation Box */}
      <div className="mt-6 bg-blue-50 border-l-4 border-blue-400 p-4">
        <h4 className="font-semibold text-blue-900 mb-2">Understanding {keyAndScale?.primaryKey}:</h4>
        <p className="text-sm text-blue-800 mb-2">
          {getKeyExplanation(keyAndScale?.primaryKey, keyAndScale?.modalCharacter)}
        </p>
        <p className="text-sm text-blue-700">
          <strong>Pro Tip:</strong> {getProTip(keyAndScale?.primaryKey, songData.songInfo?.genre)}
        </p>
      </div>
    </div>
  );
};

// Educational helper functions
function getKeyExplanation(key: string, mode: string): string {
  if (!key) return "";

  const keyRoot = key?.split(' ')[0];
  const isMajor = key?.toLowerCase().includes('major');

  if (isMajor) {
    return `${key} has a bright, uplifting character typical of major keys. The ${mode || 'Ionian'} mode gives it a stable, resolved feeling. This key works well for anthemic rock songs and creates a powerful, confident mood.`;
  } else {
    return `${key} has a darker, more introspective character. The ${mode || 'Aeolian'} mode creates tension and emotion. This key is perfect for expressing melancholy or aggressive themes in rock music.`;
  }
}

function getProTip(key: string, genre: string): string {
  const keyRoot = key?.split(' ')[0];

  if (keyRoot === 'E' || keyRoot === 'A') {
    return "These keys utilize open strings on guitar, making them ideal for powerful, ringing chords. The open strings add natural sustain and harmonic richness.";
  }
  if (genre?.toLowerCase().includes('rock') || genre?.toLowerCase().includes('metal')) {
    return "Power chords (5ths) work exceptionally well in this key for rock/metal, as they avoid the major/minor quality and focus on raw power.";
  }
  return "Practice the scales and chord progressions in this key to internalize its unique character and improve your improvisation.";
}

export default ConsolidatedMusicalAnalysis;