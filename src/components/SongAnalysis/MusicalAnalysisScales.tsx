import React from 'react';
import SimpleAlphaTabScale from "@/components/SimpleAlphaTabScale";
import { SongData } from '@/lib/songData';

interface MusicalAnalysisScalesProps {
  songData: SongData;
}

export default function MusicalAnalysisScales({ songData }: MusicalAnalysisScalesProps) {
  // Only render if musical analysis data exists
  if (!songData.musicalAnalysis?.keyAndScale?.scalesUsed) {
    return null;
  }

  const { keyAndScale } = songData.musicalAnalysis;

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Scale Analysis & Visualization</h2>
      
      <div className="mb-6">
        <p className="text-gray-700 mb-4">
          Explore the scales used in <strong>{songData.songInfo.title}</strong> by <strong>{songData.songInfo.artist}</strong>. 
          Each scale shows both standard music notation and guitar tablature to help you understand how these patterns work on the fretboard.
        </p>
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-sm text-gray-700">
            <strong>Key:</strong> {keyAndScale.primaryKey} | 
            <strong> Key Signature:</strong> {keyAndScale.keySignature} | 
            <strong> Relative Minor:</strong> {keyAndScale.relativeMinor}
          </p>
        </div>
      </div>

      {/* Scales Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {keyAndScale.scalesUsed.map((scale, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{scale.scale}</h3>
              <p className="text-sm text-gray-600 mb-3">{scale.application}</p>
            </div>
            
            {/* AlphaTab Scale Rendering */}
            <div className="mb-4">
              <SimpleAlphaTabScale 
                scaleName={scale.scale}
              />
            </div>
            
            {/* Scale Notes */}
            <div className="bg-gray-50 rounded-lg p-3">
              <h4 className="text-sm font-medium text-gray-800 mb-2">Scale Notes:</h4>
              <p className="font-mono text-sm text-gray-700">{scale.notes}</p>
            </div>

            {/* Scale Information */}
            <div className="mt-4 text-xs text-gray-600">
              {getScaleInfo(scale.scale)}
            </div>
          </div>
        ))}
      </div>

      {/* Modal Character Section */}
      <div className="mt-8 bg-blue-50 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Modal Character & Harmonic Context</h3>
        <p className="text-gray-700">{keyAndScale.modalCharacter}</p>
      </div>
    </section>
  );
}

// Helper function to provide additional information about each scale
function getScaleInfo(scaleName: string): string {
  const scaleInfo: { [key: string]: string } = {
    "G major scale": "Contains all seven notes of the key. Perfect for understanding the harmonic foundation and chord relationships.",
    "G major pentatonic": "Five-note scale that omits the 4th and 7th degrees. Extremely versatile for lead guitar and creates a strong, memorable melodic sound.",
    "G minor pentatonic": "The relative minor pentatonic. Great for adding bluesy, more aggressive tones while still fitting the key center.",
    "G blues scale": "Adds the flat 5th (♭5) to the minor pentatonic, creating the classic 'blue note' for authentic blues-rock flavor.",
    "C major scale": "The scale built on the IV chord. Understanding this helps with melody over the C5 chord and adds harmonic sophistication."
  };
  
  return scaleInfo[scaleName] || "Essential scale for understanding the harmonic and melodic structure of this song.";
}
