import React from 'react';

type FretboardProps = {
  chord?: string;
};

const chordShapes: Record<string, number[]> = {
  // EADGBE (low to high), -1 means muted, 0 means open
  'C': [-1, 3, 2, 0, 1, 0],
  'C_major': [-1, 3, 2, 0, 1, 0],
  'G': [3, 2, 0, 0, 3, 3],
  'G_major': [3, 2, 0, 0, 3, 3],
  'D': [-1, -1, 0, 2, 3, 2],
  'D_major': [-1, -1, 0, 2, 3, 2],
  'Em': [0, 2, 2, 0, 0, 0],
  'E_minor': [0, 2, 2, 0, 0, 0],
  'Am': [-1, 0, 2, 2, 1, 0],
  'A_minor': [-1, 0, 2, 2, 1, 0],
  'F': [1, 3, 3, 2, 1, 1],
  'F_major': [1, 3, 3, 2, 1, 1],
  'Dm': [-1, -1, 0, 2, 3, 1],
  'D_minor': [-1, -1, 0, 2, 3, 1],
  'Bm': [-1, 2, 4, 4, 3, 2],
  'B_minor': [-1, 2, 4, 4, 3, 2],
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
