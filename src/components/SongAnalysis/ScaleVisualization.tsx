"use client";

import React, { useState } from "react";

interface ScaleVisualizationProps {
  scales: Array<{
    scale: string;
    notes: string;
    application: string;
  }>;
  primaryKey: string;
}

const ScaleVisualization: React.FC<ScaleVisualizationProps> = ({
  scales,
  primaryKey
}) => {
  const [selectedScale, setSelectedScale] = useState(0);

  // Note mapping for chromatic scale
  const chromaticNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

  // Standard guitar tuning (low to high)
  const stringTuning = [
    { note: 'E', octave: 2 }, // 6th string (lowest)
    { note: 'A', octave: 2 }, // 5th string
    { note: 'D', octave: 3 }, // 4th string
    { note: 'G', octave: 3 }, // 3rd string
    { note: 'B', octave: 3 }, // 2nd string
    { note: 'E', octave: 4 }  // 1st string (highest)
  ];

  // Get note at specific string and fret
  const getNoteAtFret = (stringIndex: number, fret: number): string => {
    const openString = stringTuning[stringIndex];
    const openNoteIndex = chromaticNotes.indexOf(openString.note);
    const noteIndex = (openNoteIndex + fret) % 12;
    return chromaticNotes[noteIndex];
  };

  // Parse scale notes from string format
  const parseScaleNotes = (notesString: string): string[] => {
    const notes = notesString.split(' - ').map(note => {
      // Clean up the note and handle sharps/flats
      let cleaned = note.trim();
      // Replace unicode sharp with regular sharp
      cleaned = cleaned.replace(/♯/g, '#');
      // Handle D# specifically since it's showing as D# in the data
      cleaned = cleaned.replace(/D#/g, 'D#');
      return cleaned;
    });

    // Remove duplicate octave note if present (e.g., "E" at the end)
    const uniqueNotes: string[] = [];
    notes.forEach(note => {
      // Only add if it's not already in the array (case for removing octave duplicates)
      if (!uniqueNotes.some(n => n === note)) {
        uniqueNotes.push(note);
      }
    });

    return uniqueNotes;
  };

  // Check if a note is in the scale
  const isNoteInScale = (note: string, scaleNotes: string[]): boolean => {
    // Direct check first - most efficient for exact matches
    if (scaleNotes.includes(note)) {
      return true;
    }

    // Handle enharmonic equivalents only if needed
    const enharmonics: { [key: string]: string[] } = {
      'C#': ['Db'],
      'D#': ['Eb'],
      'F#': ['Gb'],
      'G#': ['Ab'],
      'A#': ['Bb'],
      'Db': ['C#'],
      'Eb': ['D#'],
      'Gb': ['F#'],
      'Ab': ['G#'],
      'Bb': ['A#']
    };

    // Check if any enharmonic equivalent is in the scale
    const equivalents = enharmonics[note] || [];
    return equivalents.some(equiv => scaleNotes.includes(equiv));
  };

  // Generate fretboard with accurate note positions
  const generateFretboard = () => {
    const selectedScaleData = scales[selectedScale];
    const scaleNotes = parseScaleNotes(selectedScaleData?.notes || '');
    const numFrets = 12;

    return (
      <div className="bg-amber-900 p-4 rounded-lg shadow-lg" style={{ backgroundImage: 'linear-gradient(90deg, #8B4513 0%, #A0522D 100%)' }}>
        {/* Fret markers */}
        <div className="flex justify-center mb-2">
          <div className="flex">
            <div className="w-8"></div> {/* Space for string labels */}
            {Array.from({ length: numFrets + 1 }, (_, i) => (
              <div key={i} className="w-12 text-center">
                {i === 0 ? '' : (
                  <div className={`text-xs font-medium ${
                    [3, 5, 7, 9].includes(i) ? 'text-white' : 'text-gray-300'
                  }`}>
                    {i}
                    {[3, 5, 7, 9].includes(i) && (
                      <div className="w-2 h-2 bg-white rounded-full mx-auto mt-1 opacity-60"></div>
                    )}
                    {i === 12 && (
                      <div className="flex gap-1 justify-center mt-1">
                        <div className="w-1 h-1 bg-white rounded-full opacity-60"></div>
                        <div className="w-1 h-1 bg-white rounded-full opacity-60"></div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Strings and frets */}
        {stringTuning.slice().reverse().map((string, displayIndex) => {
          const stringIndex = stringTuning.length - 1 - displayIndex; // Reverse for display
          return (
            <div key={`string-${stringIndex}`} className="flex items-center mb-2 last:mb-0">
              {/* String label */}
              <div className="w-8 text-right pr-2">
                <span className="text-white font-medium text-sm">{string.note}</span>
              </div>

              {/* Frets */}
              <div className="flex relative">
                {/* String line */}
                <div
                  className="absolute top-1/2 left-0 right-0 bg-gray-400 z-0"
                  style={{
                    height: displayIndex === 0 || displayIndex === 5 ? '1px' : '0.8px',
                    transform: 'translateY(-50%)'
                  }}
                ></div>

                {Array.from({ length: numFrets + 1 }, (_, fret) => {
                  const noteAtFret = getNoteAtFret(stringIndex, fret);
                  const isInScale = isNoteInScale(noteAtFret, scaleNotes);
                  const isRoot = noteAtFret === primaryKey.split(' ')[0]; // Extract root note

                  return (
                    <div key={fret} className="w-12 h-8 flex items-center justify-center relative z-10">
                      {/* Fret line */}
                      {fret > 0 && (
                        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-600"></div>
                      )}

                      {/* Note dot */}
                      {isInScale && (
                        <div className="relative group">
                          <div
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-medium transition-all cursor-pointer ${
                              isRoot
                                ? 'bg-red-500 border-red-300 text-white shadow-lg'
                                : 'bg-blue-500 border-blue-300 text-white hover:scale-110'
                            }`}
                          >
                            {noteAtFret}
                          </div>
                          {/* Tooltip */}
                          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                            {noteAtFret} {isRoot ? '(Root)' : ''}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Scale Patterns in {primaryKey}
      </h3>

      {/* Scale Selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {scales.map((scale, index) => (
          <button
            key={index}
            onClick={() => setSelectedScale(index)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedScale === index
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {scale.scale}
          </button>
        ))}
      </div>

      {/* Selected Scale Info */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-2">
          {scales[selectedScale]?.scale}
        </h4>
        <p className="text-gray-600 mb-2">
          <strong>Notes:</strong> {scales[selectedScale]?.notes}
        </p>
        <p className="text-gray-600">
          <strong>Application:</strong> {scales[selectedScale]?.application}
        </p>
      </div>

      {/* Fretboard Visualization */}
      <div className="mb-4">
        <h5 className="font-medium text-gray-800 mb-3">Fretboard Pattern</h5>
        {generateFretboard()}
      </div>

      <div className="flex items-center gap-4 text-xs text-gray-600">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <span>Root Note</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span>Scale Notes</span>
        </div>
        <span>• Hover over notes for details</span>
      </div>
    </div>
  );
};

export default ScaleVisualization;