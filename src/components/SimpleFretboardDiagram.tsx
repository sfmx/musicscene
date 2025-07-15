import React from 'react';

type FretboardProps = {
  chord?: string;
};

const chordShapes: Record<string, { frets: number[], fingers?: number[] }> = {
  // EADGBE (low to high), -1 means muted, 0 means open
  'C': { frets: [-1, 3, 2, 0, 1, 0], fingers: [-1, 3, 2, 0, 1, 0] },
  'C_major': { frets: [-1, 3, 2, 0, 1, 0], fingers: [-1, 3, 2, 0, 1, 0] },
  'G': { frets: [3, 2, 0, 0, 3, 3], fingers: [3, 1, 0, 0, 2, 4] },
  'G_major': { frets: [3, 2, 0, 0, 3, 3], fingers: [3, 1, 0, 0, 2, 4] },
  'D': { frets: [-1, -1, 0, 2, 3, 2], fingers: [-1, -1, 0, 1, 3, 2] },
  'D_major': { frets: [-1, -1, 0, 2, 3, 2], fingers: [-1, -1, 0, 1, 3, 2] },
  'Em': { frets: [0, 2, 2, 0, 0, 0], fingers: [0, 2, 3, 0, 0, 0] },
  'E_minor': { frets: [0, 2, 2, 0, 0, 0], fingers: [0, 2, 3, 0, 0, 0] },
  'Am': { frets: [-1, 0, 2, 2, 1, 0], fingers: [-1, 0, 2, 3, 1, 0] },
  'A_minor': { frets: [-1, 0, 2, 2, 1, 0], fingers: [-1, 0, 2, 3, 1, 0] },
  'F': { frets: [1, 3, 3, 2, 1, 1], fingers: [1, 3, 4, 2, 1, 1] },
  'F_major': { frets: [1, 3, 3, 2, 1, 1], fingers: [1, 3, 4, 2, 1, 1] },
  'Dm': { frets: [-1, -1, 0, 2, 3, 1], fingers: [-1, -1, 0, 2, 3, 1] },
  'D_minor': { frets: [-1, -1, 0, 2, 3, 1], fingers: [-1, -1, 0, 2, 3, 1] },
  'Bm': { frets: [-1, 2, 4, 4, 3, 2], fingers: [-1, 1, 3, 4, 2, 1] },
  'B_minor': { frets: [-1, 2, 4, 4, 3, 2], fingers: [-1, 1, 3, 4, 2, 1] },
  // Augmented chords
  'C+': { frets: [-1, 3, 2, 1, 1, 0], fingers: [-1, 4, 3, 1, 2, 0] },
  'C_augmented': { frets: [-1, 3, 2, 1, 1, 0], fingers: [-1, 4, 3, 1, 2, 0] },
  'F+': { frets: [1, 0, 3, 2, 2, 1], fingers: [1, 0, 4, 2, 3, 1] },
  'F_augmented': { frets: [1, 0, 3, 2, 2, 1], fingers: [1, 0, 4, 2, 3, 1] },
  'G+': { frets: [3, 2, 1, 0, 0, 3], fingers: [4, 3, 1, 0, 0, 2] },
  'G_augmented': { frets: [3, 2, 1, 0, 0, 3], fingers: [4, 3, 1, 0, 0, 2] },
  'D+': { frets: [-1, -1, 0, 3, 3, 2], fingers: [-1, -1, 0, 2, 3, 1] },
  'D_augmented': { frets: [-1, -1, 0, 3, 3, 2], fingers: [-1, -1, 0, 2, 3, 1] },
  // Seventh chords
  'G7': { frets: [3, 2, 0, 0, 0, 1], fingers: [3, 2, 0, 0, 0, 1] },
  'E7': { frets: [0, 2, 0, 1, 0, 0], fingers: [0, 2, 0, 1, 0, 0] },
  'Am7': { frets: [-1, 0, 2, 0, 1, 0], fingers: [-1, 0, 2, 0, 1, 0] },
  'Em7': { frets: [0, 2, 0, 0, 0, 0], fingers: [0, 2, 0, 0, 0, 0] },
  'CMaj7': { frets: [-1, 3, 2, 0, 0, 0], fingers: [-1, 3, 2, 0, 0, 0] },
  'FMaj7': { frets: [1, 3, 2, 1, 0, -1], fingers: [1, 3, 2, 1, 0, -1] },
  'DMaj7': { frets: [-1, -1, 0, 2, 2, 2], fingers: [-1, -1, 0, 1, 1, 1] },
  'BMaj7': { frets: [-1, 2, 4, 3, 4, -1], fingers: [-1, 1, 3, 2, 4, -1] },
  'Dm7': { frets: [-1, -1, 0, 2, 1, 1], fingers: [-1, -1, 0, 2, 1, 1] },
  'Bm7': { frets: [-1, 2, 0, 2, 0, 2], fingers: [-1, 1, 0, 2, 0, 3] },
  // Suspended chords
  'Dsus4': { frets: [-1, -1, 0, 2, 3, 3], fingers: [-1, -1, 0, 1, 2, 3] },
  'Asus4': { frets: [-1, 0, 2, 2, 3, 0], fingers: [-1, 0, 1, 2, 3, 0] },
  'Esus4': { frets: [0, 2, 2, 2, 0, 0], fingers: [0, 1, 2, 3, 0, 0] },
  'Dsus2': { frets: [-1, -1, 0, 2, 3, 0], fingers: [-1, -1, 0, 1, 2, 0] },
  'Asus2': { frets: [-1, 0, 2, 2, 0, 0], fingers: [-1, 0, 1, 2, 0, 0] },
  'Esus2': { frets: [0, 2, 4, 4, 0, 0], fingers: [0, 1, 2, 3, 0, 0] },
  // Diminished chords
  'Adim': { frets: [-1, 0, 1, 2, 1, -1], fingers: [-1, 0, 1, 3, 2, -1] },
  'A°': { frets: [-1, 0, 1, 2, 1, -1], fingers: [-1, 0, 1, 3, 2, -1] },
  'Bdim': { frets: [-1, 2, 3, 4, 3, -1], fingers: [-1, 1, 2, 4, 3, -1] },
  'B°': { frets: [-1, 2, 3, 4, 3, -1], fingers: [-1, 1, 2, 4, 3, -1] },
  'Cdim': { frets: [-1, 3, 1, 2, 1, -1], fingers: [-1, 4, 1, 3, 2, -1] },
  'C°': { frets: [-1, 3, 1, 2, 1, -1], fingers: [-1, 4, 1, 3, 2, -1] },
  'Ddim': { frets: [-1, -1, 0, 1, 0, 1], fingers: [-1, -1, 0, 1, 0, 2] },
  'D°': { frets: [-1, -1, 0, 1, 0, 1], fingers: [-1, -1, 0, 1, 0, 2] },
  'Edim': { frets: [0, 1, 2, 0, 2, 0], fingers: [0, 1, 3, 0, 4, 0] },
  'E°': { frets: [0, 1, 2, 0, 2, 0], fingers: [0, 1, 3, 0, 4, 0] },
  'Fdim': { frets: [1, 2, 3, 1, 3, 1], fingers: [1, 2, 4, 1, 3, 1] },
  'F°': { frets: [1, 2, 3, 1, 3, 1], fingers: [1, 2, 4, 1, 3, 1] },
  'Gdim': { frets: [3, 1, 2, 0, 2, 0], fingers: [4, 1, 2, 0, 3, 0] },
  'G°': { frets: [3, 1, 2, 0, 2, 0], fingers: [4, 1, 2, 0, 3, 0] },
  // Diminished 7th chords
  'Gdim7': { frets: [3, 4, 3, 4, 3, -1], fingers: [1, 3, 1, 4, 2, -1] },
  'G°7': { frets: [3, 4, 3, 4, 3, -1], fingers: [1, 3, 1, 4, 2, -1] },
  'Adim7': { frets: [5, 6, 5, 6, 5, -1], fingers: [1, 3, 1, 4, 2, -1] },
  'A°7': { frets: [5, 6, 5, 6, 5, -1], fingers: [1, 3, 1, 4, 2, -1] },
  // Half-diminished chords
  'Am7b5': { frets: [-1, 0, 1, 0, 1, 0], fingers: [-1, 0, 1, 0, 2, 0] },
  'Aø7': { frets: [-1, 0, 1, 0, 1, 0], fingers: [-1, 0, 1, 0, 2, 0] },
  'Bm7b5': { frets: [-1, 2, 3, 2, 3, -1], fingers: [-1, 1, 3, 2, 4, -1] },
  'Bø7': { frets: [-1, 2, 3, 2, 3, -1], fingers: [-1, 1, 3, 2, 4, -1] },
};

export default function SimpleFretboardDiagram({ chord = 'C' }: FretboardProps) {
  const chordData = chordShapes[chord] || chordShapes['C'];
  const { frets, fingers } = chordData;
  
  const fretboardWidth = 100;  // Made narrower
  const fretboardHeight = 120; // Made taller for better proportions
  const fretSpacing = 24; // Space between frets (increased for taller board)
  const startX = 30;  // Reduced to give more room on right
  const startY = 30;
  
  // Calculate string positions - evenly spaced across the fretboard width
  const stringPositions = [...Array(6)].map((_, i) => 
    startX + (i * fretboardWidth) / 5 // 5 intervals for 6 strings
  );

  return (
    <svg width={170} height={160} style={{ background: 'transparent' }}> {/* Increased width for markers */}
      {/* Fretboard background */}
      <rect
        x={startX}
        y={startY}
        width={fretboardWidth}
        height={fretboardHeight}
        fill="#f8f9fa"
        stroke="#333"
        strokeWidth={2}
      />
      
      {/* Fret lines (horizontal) */}
      {[...Array(5)].map((_, fret) => (
        <line
          key={fret}
          x1={startX}
          y1={startY + (fret + 1) * fretSpacing}
          x2={startX + fretboardWidth}
          y2={startY + (fret + 1) * fretSpacing}
          stroke="#333"
          strokeWidth={1.5}
        />
      ))}
      
      {/* String lines (vertical) */}
      {stringPositions.map((x, string) => (
        <line
          key={string}
          x1={x}
          y1={startY}
          x2={x}
          y2={startY + fretboardHeight}
          stroke="#666"
          strokeWidth={1}
        />
      ))}
      
      {/* Nut (thick top line) */}
      <line
        x1={startX}
        y1={startY}
        x2={startX + fretboardWidth}
        y2={startY}
        stroke="#000"
        strokeWidth={4}
      />
      
      {/* X/O markers at top */}
      {frets.map((fret, string) => (
        fret === 0 || fret === -1 ? (
          <text
            key={`marker-${string}`}
            x={stringPositions[string]}
            y={startY - 8}
            fontSize={14}
            fill={fret === 0 ? '#1976d2' : '#d32f2f'}
            fontWeight="bold"
            textAnchor="middle"
          >
            {fret === 0 ? 'O' : 'X'}
          </text>
        ) : null
      ))}
      
      {/* Finger positions */}
      {frets.map((fret, string) => {
        if (fret > 0) {
          const fingerNumber = fingers?.[string] || fret;
          return (
            <g key={`finger-${string}`}>
              <circle
                cx={stringPositions[string]}
                cy={startY + (fret - 0.5) * fretSpacing}
                r={8}
                fill="#1976d2"
                stroke="#fff"
                strokeWidth={1}
              />
              <text
                x={stringPositions[string]}
                y={startY + (fret - 0.5) * fretSpacing + 4}
                fontSize={11}
                fill="white"
                fontWeight="bold"
                textAnchor="middle"
              >
                {fingerNumber}
              </text>
            </g>
          );
        }
        return null;
      })}
    </svg>
  );
}
