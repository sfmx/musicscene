import React from 'react';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';

interface ChordProgressionVisualizationProps {
  songData: {
    musicalAnalysis?: {
      chordProgressions?: {
        mainProgression?: {
          chords: string[];
          progression: string;
          description: string;
        };
        sectionProgressions?: Array<{
          section: string;
          progression: string;
          romanNumerals: string;
          description: string;
        }>;
        harmonicFunction?: string[];
      };
    };
  };
}

export default function ChordProgressionVisualization({ songData }: ChordProgressionVisualizationProps) {
  // Check if the required data exists
  if (!songData.musicalAnalysis || !songData.musicalAnalysis.chordProgressions) {
    return null; // Don't render if data is missing
  }

  const chordProgressions = songData.musicalAnalysis.chordProgressions;
  
  // Check if chordProgressions has the required properties
  if (!chordProgressions.mainProgression) {
    return null;
  }

  const { mainProgression, sectionProgressions, harmonicFunction } = chordProgressions;

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Chord Progressions & Visualization</h2>
      
      {/* Main Progression */}
      <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Main Progression</h3>
        
        {/* Progression Info */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-medium text-blue-900 mb-2">Progression</h4>
            <p className="text-blue-800 text-sm mb-2">
              <strong>Chords:</strong> {mainProgression.chords.join(' - ')}
            </p>
            <p className="text-blue-800 text-sm">
              <strong>Roman Numerals:</strong> {mainProgression.progression}
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h4 className="font-medium text-green-900 mb-2">Analysis</h4>
            <p className="text-green-800 text-sm">{mainProgression.description}</p>
          </div>
        </div>

        {/* Chord Diagrams */}
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center">
            {mainProgression.chords.map((chord, index) => (
              <div key={index} className="text-center w-full">
                <SimpleFretboardDiagram chord={chord} />
                <p className="mt-2 text-sm font-medium text-gray-700">{chord}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Progressions */}
      {sectionProgressions && sectionProgressions.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Section Progressions</h3>
          <div className="grid gap-6">
            {sectionProgressions.map((section, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h4 className="text-lg font-medium text-gray-900 mb-2 md:mb-0">{section.section}</h4>
                  <div className="text-sm text-gray-600">
                    <span className="bg-gray-100 px-2 py-1 rounded">
                      {section.romanNumerals}
                    </span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Progression:</strong> {section.progression}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    {section.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
                  {section.progression.split(' - ').map((chord, chordIndex) => {
                    // Extract chord name (remove any extra formatting)
                    const cleanChord = chord.trim();
                    return (
                      <div key={chordIndex} className="text-center w-full">
                        <SimpleFretboardDiagram chord={cleanChord} />
                        <p className="text-xs mt-2 text-gray-600">{cleanChord}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Harmonic Function */}
      {harmonicFunction && harmonicFunction.length > 0 && (
        <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
          <h3 className="text-lg font-semibold text-purple-900 mb-4">Harmonic Function</h3>
          <div className="space-y-3">
            {harmonicFunction.map((func, index) => (
              <div key={index} className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-purple-800 text-sm">{func}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
