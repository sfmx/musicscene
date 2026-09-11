"use client";

import React, { useState } from "react";
import SimpleFretboardDiagram from "@/components/SimpleFretboardDiagram";

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
    <div className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 mb-8 shadow-xl backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400 bg-amber-100/70 dark:bg-amber-500/10 px-3 py-1 rounded-full border border-amber-300 dark:border-amber-500/20">
          Harmonic Engine
        </span>
        <h2 className="text-2xl font-black text-slate-900 dark:text-white">Chord Progressions & Movement</h2>
      </div>

      {/* Progression Selector Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
        {progressions.map((prog, index) => (
          <button
            key={index}
            onClick={() => setSelectedProgression(index)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              selectedProgression === index
                ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                : 'bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {prog.section}
          </button>
        ))}
      </div>

      {/* Current Progression Info */}
      <div className="mb-6">
        <div className="bg-slate-50 dark:bg-slate-950 rounded-xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800">
          <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">
            {currentProgression?.section}
          </h3>

          {/* Progression Display */}
          <div className="mb-4 bg-white dark:bg-slate-900/90 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="text-xl sm:text-2xl font-mono font-black text-amber-700 dark:text-amber-300 mb-1 tracking-wide">
              {currentProgression?.progression}
            </div>
            {currentProgression?.romanNumerals && currentProgression.romanNumerals !== currentProgression.progression && (
              <div className="text-sm font-mono font-bold text-cyan-700 dark:text-cyan-400">
                Formula: {currentProgression.romanNumerals}
              </div>
            )}
          </div>

          {/* Description */}
          {currentProgression?.description && (
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              {currentProgression?.description}
            </p>
          )}

          {/* Theory Explanation */}
          <div className="bg-amber-50/60 dark:bg-slate-900/80 rounded-xl border border-amber-200 dark:border-amber-500/30 p-4 mb-6">
            <h4 className="font-bold text-amber-850 dark:text-amber-300 text-xs mb-1.5 flex items-center gap-1.5">
              <span>💡</span> Theory Insight:
            </h4>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {getTheoryExplanation(currentProgression)}
            </p>
          </div>

          {/* Chord Diagrams - Only unique chords */}
          <div>
            <h4 className="font-bold text-slate-700 dark:text-slate-300 text-xs uppercase tracking-wider mb-3">Chord Shapes In This Section:</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {getUniqueChords(currentProgression?.chords || currentProgression?.progression || "").map((chord, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-center shadow-sm">
                  <div className="scale-75 origin-center">
                    <SimpleFretboardDiagram chord={chord} />
                  </div>
                  <p className="text-xs font-mono font-bold mt-1 text-amber-700 dark:text-amber-300">{chord}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Harmonic Function Reference */}
      {songData.musicalAnalysis?.chordProgressions?.harmonicFunction && (
        <div className="bg-slate-50 dark:bg-slate-950 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
          <h4 className="font-bold text-slate-800 dark:text-slate-200 text-xs uppercase tracking-wider mb-3">Harmonic Functions & Roles:</h4>
          <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-2">
            {songData.musicalAnalysis.chordProgressions.harmonicFunction.slice(0, 4).map((func: string, idx: number) => {
              const parts = func.split(' - ');
              return (
                <li key={idx} className="flex items-start gap-2 bg-white dark:bg-slate-900/80 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
                  <span className="font-mono font-bold text-amber-700 dark:text-amber-400 min-w-[80px]">
                    {parts[0]}
                  </span>
                  <span className="text-slate-700 dark:text-slate-300">{parts[1] || ''}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

// Helper function to provide educational context
function getTheoryExplanation(progression: any): string {
  const romanNumerals = progression?.romanNumerals || "";

  if (romanNumerals.includes("I - IV - V") || romanNumerals.includes("i - iv - v")) {
    return "The I-IV-V progression is the foundation of rock, blues, and countless other genres. The I chord (tonic) establishes home, IV (subdominant) creates movement, and V (dominant) builds tension that resolves back to I.";
  }
  if (romanNumerals.includes("I - V - vi - IV")) {
    return "This is one of the most popular progressions in modern music. The vi chord adds emotional depth, creating a bittersweet quality that works in both uplifting and melancholic contexts.";
  }
  if (romanNumerals.includes("♭VI") || romanNumerals.includes("♭III") || romanNumerals.includes("♭VII") || romanNumerals.includes("bVII")) {
    return "These borrowed chords from the parallel minor key add darker, more dramatic colors to the progression. This modal interchange gives rock and metal its signature swagger.";
  }
  if (romanNumerals.includes("ii - V - I")) {
    return "The ii-V-I is the cornerstone of jazz harmony. The ii chord prepares the dominant V, which then resolves to I, creating smooth voice leading and a satisfying resolution.";
  }

  return "This progression creates a specific harmonic movement that defines the song's emotional character. Understanding the relationship between these chords helps in improvisation and songwriting.";
}

export default ImprovedChordProgressionVisualization;