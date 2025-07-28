import React from 'react';
import SimpleFretboardDiagram from "@/components/SimpleFretboardDiagram";
import { SongData } from '@/lib/songData';

interface MusicalAnalysisSectionProps {
  songData: SongData;
}

export default function MusicalAnalysisSection({ songData }: MusicalAnalysisSectionProps) {
  // Only render if musical analysis data exists
  if (!songData.musicalAnalysis) {
    return null;
  }

  const { keyAndScale, chordProgressions } = songData.musicalAnalysis;

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Musical Analysis</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Key & Scale Structure - Left Side */}
        <div className="bg-blue-50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Key & Scale Structure</h3>
          
          {/* Primary Key */}
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Primary Key</h4>
            <div className="bg-white rounded-lg p-4">
              <p className="text-gray-700 mb-2">
                <strong>{keyAndScale.primaryKey}</strong>
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Key Signature: {keyAndScale.keySignature}
              </p>
              <p className="text-sm text-gray-600">
                Relative Minor: {keyAndScale.relativeMinor}
              </p>
            </div>
          </div>

          {/* Scales Used */}
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Scales Used</h4>
            <div className="space-y-3">
              {keyAndScale.scalesUsed.map((scale, index) => (
                <div key={index} className="bg-white rounded-lg p-4">
                  <h5 className="font-medium text-gray-800 mb-1">{scale.scale}</h5>
                  <p className="text-sm font-mono text-gray-600 mb-2">{scale.notes}</p>
                  <p className="text-xs text-gray-600">{scale.application}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Character */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Modal Character</h4>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm text-gray-600">{keyAndScale.modalCharacter}</p>
            </div>
          </div>
        </div>

        {/* Chord Progressions - Right Side */}
        <div className="bg-green-50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Chord Progressions</h3>
          
          {/* Main Progression */}
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Main Progression</h4>
            <div className="bg-white rounded-lg p-4">
              <div className="grid grid-cols-3 gap-2 mb-3">
                {chordProgressions.mainProgression.chords.map((chord, index) => (
                  <div key={index} className="text-center">
                    <div className="mb-1">
                      <SimpleFretboardDiagram chord={chord} />
                    </div>
                    <p className="text-xs font-medium text-gray-800">{chord}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm font-mono text-gray-600 mb-2">
                {chordProgressions.mainProgression.progression}
              </p>
              <p className="text-xs text-gray-600">
                {chordProgressions.mainProgression.description}
              </p>
            </div>
          </div>

          {/* Section Progressions */}
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Section Progressions</h4>
            <div className="space-y-3">
              {chordProgressions.sectionProgressions.map((section, index) => (
                <div key={index} className="bg-white rounded-lg p-4">
                  <h5 className="font-medium text-gray-800 mb-1">{section.section}</h5>
                  <p className="text-sm font-mono text-gray-600 mb-1">{section.progression}</p>
                  <p className="text-xs text-gray-500 mb-2">{section.romanNumerals}</p>
                  <p className="text-xs text-gray-600">{section.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Harmonic Function */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Harmonic Function</h4>
            <div className="bg-white rounded-lg p-4">
              <ul className="space-y-1">
                {chordProgressions.harmonicFunction.map((func, index) => (
                  <li key={index} className="text-xs text-gray-600">• {func}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
