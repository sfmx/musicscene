import React from 'react';

type FretboardProps = {
  chord?: string;
};

const chordShapes: Record<string, number[]> = {
  // EADGBE (low to high), -1 means muted, 0 means open
  C: [-1, 3, 2, 0, 1, 0],
  // Add more chords as needed
};

const stringNames = ['E', 'A', 'D', 'G', 'B', 'e'];

export default function SimpleFretboardDiagram({ chord = 'C' }: FretboardProps) {
  const shape = chordShapes[chord] || chordShapes['C'];

  return (
    <svg width={180} height={120} style={{ background: '#fff' }}>
      {/* Frets */}
      {[...Array(6)].map((_, fret) => (
        <line
          key={fret}
          x1={30 + fret * 25}
          y1={20}
          x2={30 + fret * 25}
          y2={100}
          stroke="#bbb"
          strokeWidth={fret === 0 ? 4 : 2}
        />
      ))}
      {/* Strings */}
      {shape.map((_, string) => (
        <line
          key={string}
          x1={30}
          y1={30 + string * 12}
          x2={30 + 5 * 25}
          y2={30 + string * 12}
          stroke="#333"
          strokeWidth={1.5}
        />
      ))}
      {/* Dots for finger positions */}
      {shape.map((fret, string) =>
        fret > 0 ? (
          <circle
            key={string}
            cx={30 + fret * 25 - 12.5}
            cy={30 + string * 12}
            r={7}
            fill="#1976d2"
          />
        ) : null
      )}
      {/* X/O for open/muted */}
      {shape.map((fret, string) =>
        fret === 0 || fret === -1 ? (
          <text
            key={string}
            x={30 + -20}
            y={34 + string * 12}
            fontSize={12}
            fill={fret === 0 ? '#1976d2' : '#d32f2f'}
            fontWeight="bold"
          >
            {fret === 0 ? 'O' : 'X'}
          </text>
        ) : null
      )}
      {/* String names */}
      {stringNames.map((name, i) => (
        <text
          key={name}
          x={30 + 5 * 25 + 10}
          y={34 + i * 12}
          fontSize={10}
          fill="#555"
        >
          {name}
        </text>
      ))}
    </svg>
  );
}
