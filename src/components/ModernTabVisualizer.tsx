import React from 'react';

type TabNote = {
  string: number; // 1 = high E, 6 = low E
  fret: number;
  beat?: number; // optional, for bar lines
};

type Props = {
  notes: TabNote[];
  beatsPerBar?: number; // how many beats per bar (default 4)
  noteSpacing?: number; // horizontal space per note (default 48)
};

const stringNames = ['e', 'B', 'G', 'D', 'A', 'E'];

export default function ModernTabVisualizer({
  notes,
  beatsPerBar = 4,
  noteSpacing = 48,
}: Props) {
  // Sort notes by their order in the array (sequential)
  // Group notes by their position in the sequence (time)
  // Each note gets a sequential "step" (column)
  const steps = notes.length;
  const stringCount = 6;
  const leftPad = 40;
  const topPad = 30;
  const stringGap = 28;
  const tabWidth = leftPad + steps * noteSpacing + 40;
  const tabHeight = topPad + (stringCount - 1) * stringGap + 40;

  // Reverse the notes array so the first note is on the left (matches tab reading direction)
  // const reversedNotes = [...notes].reverse();

  // Instead, keep the notes in their original order for left-to-right tab reading
  const orderedNotes = notes;

  // Instead of rendering each note sequentially, render all notes for each string in their correct horizontal position.
  // Group notes by string, then for each string, render the fret numbers at the correct horizontal (step) position.

  // Build a 2D array: string (1-6) -> array of { fret, idx }
  const stringNotes: { [stringNum: number]: { fret: number; idx: number }[] } = {};
  notes.forEach((note, idx) => {
    if (!stringNotes[note.string]) stringNotes[note.string] = [];
    stringNotes[note.string].push({ fret: note.fret, idx });
  });

  return (
    <svg
      width={tabWidth}
      height={tabHeight}
      style={{ background: '#222', borderRadius: 12, display: 'block', margin: '0 auto' }}
    >
      {/* String lines */}
      {[...Array(stringCount)].map((_, sIdx) => (
        <line
          key={sIdx}
          x1={leftPad}
          y1={topPad + sIdx * stringGap}
          x2={leftPad + steps * noteSpacing}
          y2={topPad + sIdx * stringGap}
          stroke="#fff"
          strokeWidth={2 - sIdx * 0.12}
          opacity={0.85}
        />
      ))}
      {/* Bar lines */}
      {[...Array(Math.ceil(steps / beatsPerBar) + 1)].map((_, barIdx) => {
        const x = leftPad + barIdx * beatsPerBar * noteSpacing;
        return (
          <line
            key={barIdx}
            x1={x}
            y1={topPad - 10}
            x2={x}
            y2={topPad + (stringCount - 1) * stringGap + 10}
            stroke="#ffe082"
            strokeWidth={3}
            opacity={0.7}
          />
        );
      })}
      {/* Fret numbers for each string, at their correct horizontal position */}
      {Array.from({ length: stringCount }, (_, sIdx) => {
        const stringNum = stringCount - sIdx;
        const notesForString = stringNotes[stringNum] || [];
        return notesForString.map(({ fret, idx }) => (
          <text
            key={`${stringNum}-${idx}`}
            x={leftPad + idx * noteSpacing}
            y={topPad + sIdx * stringGap + 7}
            fontSize={20}
            fill="#4fc3f7" // Changed from "#ffd700" to a blue that stands out from the bar lines
            textAnchor="middle"
            fontWeight="bold"
            style={{ textShadow: "0 1px 2px #000" }}
          >
            {fret}
          </text>
        ));
      })}
      {/* String names at left */}
      {stringNames.map((name, i) => (
        <text
          key={name}
          x={leftPad - 18}
          y={topPad + i * stringGap + 7}
          fontSize={16}
          fill="#b2dfdb"
          textAnchor="end"
          fontWeight="bold"
        >
          {name}
        </text>
      ))}
      {/* Step numbers (optional, for debugging) */}
      {/* {[...Array(steps)].map((_, idx) => (
        <text
          key={idx}
          x={leftPad + idx * noteSpacing}
          y={topPad + stringCount * stringGap + 18}
          fontSize={10}
          fill="#888"
          textAnchor="middle"
        >
          {idx + 1}
        </text>
      ))} */}
    </svg>
  );
}
