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
  const [numFrets, setNumFrets] = useState(12);

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

    return (
      <div className="bg-gray-50 p-4 rounded-xl">
        {/* Fret markers */}
        <div className="flex mb-3">
          <div className="w-8"></div> {/* Space for string labels */}
          <div className="flex flex-1">
            {/* Open position spacer (no number) */}
            <div className="flex-1"></div>
            {/* Fret numbers - one for each fret space */}
            {Array.from({ length: numFrets }, (_, i) => {
              const fretNum = i + 1;
              return (
                <div key={fretNum} className="flex-1 text-center">
                  <div className={`text-xs font-semibold whitespace-nowrap ${
                    [3, 5, 7, 9, 12, 15, 17, 19, 21, 24].includes(fretNum) ? 'text-amber-200' : 'text-amber-300'
                  }`}>
                    {fretNum}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

            {/* Fretboard area with wood grain */}
            <div
              className="relative rounded-lg shadow-2xl border-2 border-amber-800 overflow-hidden"
              style={{
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.1)'
              }}
            >
          {/* Wood grain base */}
          <div
            className="absolute inset-0"
            style={{ background: '#3E2723' }}
          ></div>

          {/* Wood grain texture layers */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 2px,
                  rgba(139, 90, 60, 0.3) 2px,
                  rgba(139, 90, 60, 0.3) 4px
                ),
                repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 8px,
                  rgba(101, 69, 31, 0.4) 8px,
                  rgba(101, 69, 31, 0.4) 10px
                ),
                repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 20px,
                  rgba(62, 39, 35, 0.5) 20px,
                  rgba(62, 39, 35, 0.5) 23px
                )
              `,
              mixBlendMode: 'multiply'
            }}
          ></div>

          {/* Wood grain variation */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(90deg,
                  transparent 0%,
                  rgba(101, 69, 31, 0.3) 15%,
                  transparent 30%,
                  rgba(139, 90, 60, 0.2) 45%,
                  transparent 60%,
                  rgba(101, 69, 31, 0.3) 75%,
                  transparent 90%
                )
              `,
              backgroundSize: '200px 100%'
            }}
          ></div>

          {/* Subtle highlights for depth */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: 'linear-gradient(90deg, rgba(139, 90, 60, 0.3) 0%, transparent 50%, rgba(139, 90, 60, 0.3) 100%)'
            }}
          ></div>

          {/* Fretboard content */}
          <div className="relative z-10 p-3">
            {/* Container for strings and frets */}
            <div className="flex">
              {/* String labels column */}
              <div className="w-8 flex flex-col justify-around">
                {stringTuning.slice().reverse().map((string, displayIndex) => (
                  <div key={`label-${displayIndex}`} className="h-10 flex items-center">
                    <span className="text-amber-200 font-semibold text-sm drop-shadow-md">{string.note}</span>
                  </div>
                ))}
              </div>

              {/* Fretboard area */}
              <div className="relative flex-1">
                {/* Nut - thick vertical line at start */}
                <div
                  className="absolute left-0 top-0 bottom-0 z-20"
                  style={{
                    width: '4px',
                    background: 'linear-gradient(to right, #3a3a3a, #6a6a6a, #4a4a4a)',
                    boxShadow: '2px 0 6px rgba(0,0,0,0.7), -1px 0 2px rgba(255,255,255,0.3)',
                    borderRadius: '2px'
                  }}
                ></div>

                {/* Fret wires - continuous vertical lines */}
                {Array.from({ length: numFrets }, (_, fretNum) => {
                  const fretWirePercent = ((fretNum + 1) / (numFrets + 1)) * 100;
                  return (
                    <div
                      key={`fret-${fretNum + 1}`}
                      className="absolute top-0 bottom-0 z-10"
                      style={{
                        left: `${fretWirePercent}%`,
                        width: '3px',
                        background: 'linear-gradient(to right, #8a8a8a, #c0c0c0, #a0a0a0)',
                        boxShadow: '2px 0 4px rgba(0,0,0,0.6), -1px 0 2px rgba(255,255,255,0.4)',
                        borderRadius: '0 2px 2px 0'
                      }}
                    ></div>
                  );
                })}

                {/* Fret position inlays on the fretboard */}
                {/* Single dot inlays */}
                {[3, 5, 7, 9, 15, 17, 19, 21].filter(f => f <= numFrets).map(fretNum => {
                  const inlayPercent = ((fretNum + 0.5) / (numFrets + 1)) * 100;
                  return (
                    <div
                      key={`inlay-${fretNum}`}
                      className="absolute z-5"
                      style={{
                        left: `${inlayPercent}%`,
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle at 35% 35%, #f5f5f5, #b0b0b0)',
                        boxShadow: 'inset 0 2px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(255,255,255,0.3)',
                        opacity: 0.6
                      }}
                    ></div>
                  );
                })}

                {/* Double dots at 12th and 24th frets */}
                {[12, 24].filter(f => f <= numFrets).map(fretNum => {
                  const doubleInlayPercent = ((fretNum + 0.5) / (numFrets + 1)) * 100;
                  return (
                    <React.Fragment key={`double-${fretNum}`}>
                      <div
                        className="absolute z-5"
                        style={{
                          left: `${doubleInlayPercent}%`,
                          top: '30%',
                          transform: 'translate(-50%, -50%)',
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: 'radial-gradient(circle at 35% 35%, #f5f5f5, #b0b0b0)',
                          boxShadow: 'inset 0 2px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(255,255,255,0.3)',
                          opacity: 0.6
                        }}
                      ></div>
                      <div
                        className="absolute z-5"
                        style={{
                          left: `${doubleInlayPercent}%`,
                          top: '70%',
                          transform: 'translate(-50%, -50%)',
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: 'radial-gradient(circle at 35% 35%, #f5f5f5, #b0b0b0)',
                          boxShadow: 'inset 0 2px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(255,255,255,0.3)',
                          opacity: 0.6
                        }}
                      ></div>
                    </React.Fragment>
                  );
                })}

                {/* Strings and notes */}
                {stringTuning.slice().reverse().map((string, displayIndex) => {
                  const stringIndex = stringTuning.length - 1 - displayIndex;
                  // Calculate string thickness (thicker for lower strings)
                  const stringThickness = displayIndex === 0 || displayIndex === 5 ? 2 : displayIndex <= 2 ? 1.5 : 1;

                  return (
                    <div key={`string-${stringIndex}`} className="relative h-10 flex items-center">
                      {/* String line - realistic metal string appearance */}
                      <div
                        className="absolute top-1/2 left-0 right-0 z-0"
                        style={{
                          height: `${stringThickness}px`,
                          background: `linear-gradient(to bottom, #b8b8b8, #e0e0e0, #c0c0c0)`,
                          transform: 'translateY(-50%)',
                          boxShadow: '0 1px 2px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.3)'
                        }}
                      ></div>

                      {/* Notes on this string */}
                      <div className="flex relative z-30 w-full">
                        {Array.from({ length: numFrets + 1 }, (_, fret) => {
                          const noteAtFret = getNoteAtFret(stringIndex, fret);
                          const isInScale = isNoteInScale(noteAtFret, scaleNotes);
                          const isRoot = noteAtFret === primaryKey.split(' ')[0];

                          return (
                            <div key={fret} className="flex-1 h-10 flex items-center justify-center relative">
                              {/* Note dot */}
                              {isInScale && (
                                <div
                                  className="group/note relative w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all cursor-pointer"
                                  title={`${noteAtFret}${isRoot ? ' (Root)' : ''}`}
                                  style={
                                    isRoot
                                      ? {
                                          background: 'radial-gradient(circle at 30% 30%, #ff6b6b, #c92a2a)',
                                          border: '2px solid #ff8787',
                                          boxShadow: '0 4px 8px rgba(201, 42, 42, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.3)',
                                          color: 'white'
                                        }
                                      : {
                                          background: 'radial-gradient(circle at 30% 30%, #4dabf7, #1971c2)',
                                          border: '2px solid #74c0fc',
                                          boxShadow: '0 4px 8px rgba(25, 113, 194, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.3)',
                                          color: 'white'
                                        }
                                  }
                                >
                                  {noteAtFret}
                                  {/* Tooltip - positioned above, only appears when hovering the note circle */}
                                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover/note:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-30 shadow-lg">
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
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Scale Patterns in {primaryKey}
      </h3>

      {/* Scale and Fret Selector */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        {/* Scale Selector */}
        <div className="flex flex-wrap gap-2">
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

        {/* Fret Count Selector */}
        <div className="flex gap-2 sm:ml-auto">
          <button
            onClick={() => setNumFrets(12)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              numFrets === 12
                ? 'bg-amber-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            12 Frets
          </button>
          <button
            onClick={() => setNumFrets(24)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              numFrets === 24
                ? 'bg-amber-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            24 Frets
          </button>
        </div>
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
        <div className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #ff6b6b, #c92a2a)',
              border: '1px solid #ff8787',
              boxShadow: '0 2px 4px rgba(201, 42, 42, 0.4)'
            }}
          ></div>
          <span className="font-medium">Root Note</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #4dabf7, #1971c2)',
              border: '1px solid #74c0fc',
              boxShadow: '0 2px 4px rgba(25, 113, 194, 0.4)'
            }}
          ></div>
          <span className="font-medium">Scale Notes</span>
        </div>
        <span className="text-gray-500">• Hover over notes for details</span>
      </div>
    </div>
  );
};

export default ScaleVisualization;