"use client";

import React, { useState } from "react";
import SimpleFretboardDiagram from "@/components/SimpleFretboardDiagram";

interface ChordProgression {
  section: string;
  progression: string;
  romanNumerals: string;
  description: string;
}

interface ChordProgressionVisualizationProps {
  songData: any;
}

const ImprovedChordProgressionVisualization: React.FC<ChordProgressionVisualizationProps> = ({
  songData
}) => {
  const [selectedProgression, setSelectedProgression] = useState(0);

  // Get all progressions
  const progressions = [
    {
      section: "Main Progression",
      progression: songData.musicalAnalysis?.chordProgressions?.mainProgression?.progression || "",
      romanNumerals: songData.musicalAnalysis?.chordProgressions?.mainProgression?.progression || "",
      description: songData.musicalAnalysis?.chordProgressions?.mainProgression?.description || "",
      chords: songData.musicalAnalysis?.chordProgressions?.mainProgression?.chords || []
    },
    ...(songData.musicalAnalysis?.chordProgressions?.sectionProgressions || [])
  ];

  const currentProgression = progressions[selectedProgression];

  // Parse chord sequence for visualization
  const parseChordSequence = (progression: string) => {
    return progression.split(' - ').map(chord => chord.trim());
  };

  // Get unique chords from current progression
  const getUniqueChords = (chords: string[] | string) => {
    const chordArray = Array.isArray(chords) ? chords : parseChordSequence(chords);
    return Array.from(new Set(chordArray));
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Chord Progressions</h2>

      {/* Progression Selector Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
        {progressions.map((prog, index) => (
          <button
            key={index}
            onClick={() => setSelectedProgression(index)}
            className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px ${
              selectedProgression === index
                ? 'text-blue-600 border-blue-600'
                : 'text-gray-600 border-transparent hover:text-gray-800 hover:border-gray-300'
            }`}
          >
            {prog.section}
          </button>
        ))}
      </div>

      {/* Current Progression Info */}
      <div className="mb-6">
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {currentProgression?.section}
          </h3>

          {/* Progression Display */}
          <div className="mb-4">
            <div className="text-2xl font-mono font-bold text-gray-800 mb-1">
              {currentProgression?.progression}
            </div>
            {currentProgression?.romanNumerals && currentProgression.romanNumerals !== currentProgression.progression && (
              <div className="text-lg font-mono text-blue-600">
                {currentProgression.romanNumerals}
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-4">
            {currentProgression?.description}
          </p>

          {/* Theory Explanation */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-3 mb-4">
            <h4 className="font-medium text-blue-900 mb-1">Theory Insight:</h4>
            <p className="text-sm text-blue-800">
              {getTheoryExplanation(currentProgression)}
            </p>
          </div>

          {/* Chord Diagrams - Only unique chords */}
          <div className="mt-4">
            <h4 className="font-medium text-gray-800 mb-3">Chord Shapes Used:</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {getUniqueChords(currentProgression?.chords || currentProgression?.progression || "").map((chord, idx) => (
                <div key={idx} className="text-center">
                  <SimpleFretboardDiagram chord={chord} />
                  <p className="text-sm font-mono mt-1 text-gray-700">{chord}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Harmonic Function Reference */}
      {songData.musicalAnalysis?.chordProgressions?.harmonicFunction && (
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <h4 className="font-medium text-gray-800 mb-3">Harmonic Functions:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {songData.musicalAnalysis.chordProgressions.harmonicFunction.slice(0, 3).map((func: string, idx: number) => (
              <li key={idx} className="flex">
                <span className="font-mono font-medium text-gray-800 mr-2">
                  {func.split(' - ')[0]}:
                </span>
                <span>{func.split(' - ')[1]}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Helper function to provide educational context
function getTheoryExplanation(progression: any): string {
  const romanNumerals = progression?.romanNumerals || "";

  if (romanNumerals.includes("I - IV - V")) {
    return "The I-IV-V progression is the foundation of rock, blues, and countless other genres. The I chord (tonic) establishes home, IV (subdominant) creates movement, and V (dominant) builds tension that resolves back to I.";
  }
  if (romanNumerals.includes("I - V - vi - IV")) {
    return "This is one of the most popular progressions in modern music. The vi chord adds emotional depth, creating a bittersweet quality that works in both uplifting and melancholic contexts.";
  }
  if (romanNumerals.includes("♭VI") || romanNumerals.includes("♭III") || romanNumerals.includes("♭VII")) {
    return "These borrowed chords from the parallel minor key add darker, more dramatic colors to the progression. This modal interchange is common in rock and metal music.";
  }
  if (romanNumerals.includes("ii - V - I")) {
    return "The ii-V-I is the cornerstone of jazz harmony. The ii chord prepares the dominant V, which then resolves to I, creating smooth voice leading and a satisfying resolution.";
  }

  return "This progression creates a specific harmonic movement that defines the song's emotional character. Understanding the relationship between these chords helps in improvisation and songwriting.";
}

export default ImprovedChordProgressionVisualization;