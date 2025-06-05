import React from 'react';

type ScaleNote = {
  string: number; // 1 = high E, 6 = low E
  fret: number;
  root?: boolean; // highlight root notes
};

type Props = {
  notes: ScaleNote[];
  frets?: number; // number of frets to show
};

const stringNames = ['E', 'A', 'D', 'G', 'B', 'E'];

export default function SimpleScaleFretboardDiagram({ notes, frets = 5 }: Props) {
  // Build a lookup for notes: string -> fret -> note
  const noteMap = new Map<string, ScaleNote>();
  notes.forEach(n => noteMap.set(`${n.string}-${n.fret}`, n));

  // Tab-like vertical spacing
  const stringCount = 6;
  const fretCount = frets;
  const leftPad = 40;
  const topPad = 20;
  const stringGap = 18;
  const fretGap = 32;

  return (
    <svg
      width={leftPad + fretCount * fretGap + 60}
      height={topPad + stringCount * stringGap + 30}
      style={{ background: '#fff' }}
    >
      {/* String lines */}
      {[...Array(stringCount)].map((_, sIdx) => (
        <line
          key={sIdx}
          x1={leftPad}
          y1={topPad + sIdx * stringGap}
          x2={leftPad + fretCount * fretGap}
          y2={topPad + sIdx * stringGap}
          stroke="#222"
          strokeWidth={1.5}
        />
      ))}
      {/* Fret lines */}
      {[...Array(fretCount + 1)].map((_, fIdx) => (
        <line
          key={fIdx}
          x1={leftPad + fIdx * fretGap}
          y1={topPad}
          x2={leftPad + fIdx * fretGap}
          y2={topPad + (stringCount - 1) * stringGap}
          stroke="#bbb"
          strokeWidth={fIdx === 0 ? 3 : 1}
        />
      ))}
      {/* Fret numbers at bottom */}
      {[...Array(fretCount + 1)].map((_, fIdx) => (
        <text
          key={fIdx}
          x={leftPad + fIdx * fretGap}
          y={topPad + stringCount * stringGap + 10}
          fontSize={11}
          fill="#888"
          textAnchor="middle"
        >
          {fIdx}
        </text>
      ))}
      {/* String names at left */}
      {stringNames.map((name, i) => (
        <text
          key={name}
          x={leftPad - 20}
          y={topPad + i * stringGap + 4}
          fontSize={13}
          fill="#555"
          textAnchor="end"
        >
          {name}
        </text>
      ))}
      {/* Fret numbers on strings (tab style) */}
      {[...Array(stringCount)].map((_, sIdx) =>
        [...Array(fretCount + 1)].map((_, fIdx) => {
          const string = stringCount - sIdx;
          const note = noteMap.get(`${string}-${fIdx}`);
          if (!note) return null;
          return (
            <text
              key={`${string}-${fIdx}`}
              x={leftPad + fIdx * fretGap}
              y={topPad + sIdx * stringGap + 5}
              fontSize={note.root ? 15 : 13}
              fill={note.root ? '#d32f2f' : '#1976d2'}
              fontWeight={note.root ? 'bold' : 'normal'}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {fIdx}
            </text>
          );
        })
      )}
    </svg>
  );
}
