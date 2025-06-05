import React from 'react';

type ChordVisualizerProps = {
  name: string;         // e.g. "D Major"
  symbol?: string;      // e.g. "M, maj"
  steps?: string;       // e.g. "1-3-5"
  notes?: string;       // e.g. "D F# A"
  positions: {
    string: number;     // 1-6, where 1 is high E
    fret: number;      // 0 for open string, -1 for muted
    finger?: number;    // 1-4 for fingering
  }[];
  startFret?: number;   // First fret to show (0-indexed, e.g., 0 means nut, 1 means first fret is the start)
  endFret?: number;     // Last fret to show
};

const stringNames = ['E', 'B', 'G', 'D', 'A', 'E'];

export default function ChordVisualizer({
  name,
  symbol = '',
  steps = '',
  notes = '',
  positions,
  startFret = 0, // This is the first fret label shown
  endFret = 5
}: ChordVisualizerProps) {
  const leftPad = 50;
  const topPad = 120;
  const stringGap = 30;
  const fretGap = 40;
  const nutWidth = 8;
  const stringCount = 6;
  const fretCount = endFret - startFret + 1;
  
  const width = leftPad + fretCount * fretGap + 40;
  const height = topPad + (stringCount - 1) * stringGap + 40;

  return (
    <svg
      width={width}
      height={height}
      style={{ background: '#fff', borderRadius: 12, display: 'block', margin: '0 auto' }}
    >
      {/* Chord Information */}
      <text x="50%" y={40} fontSize={24} textAnchor="middle" fontWeight="bold">
        {name}
      </text>
      <text x="50%" y={65} fontSize={16} textAnchor="middle">
        Symbols: {symbol}
      </text>
      <text x="50%" y={85} fontSize={16} textAnchor="middle">
        Steps: {steps}
      </text>
      <text x="50%" y={105} fontSize={16} textAnchor="middle">
        Notes: {notes}
      </text>

      {/* String labels and muted/open indicators */}
      {stringNames.map((name, idx) => {
        const currentStringNum = idx + 1; // stringNum for positions: 1=highE (idx 0)
        const positionData = positions.find(p => p.string === currentStringNum);
        const isMuted = positionData ? positionData.fret === -1 : false; 

        return (
          <g key={`string-label-${idx}`}>
            <text
              x={leftPad - 25}
              y={topPad + idx * stringGap + 5}
              fontSize={14}
              textAnchor="middle"
            >
              {name}
            </text>
            {isMuted && (
              <text
                x={leftPad - 7} 
                y={topPad + idx * stringGap + 5}
                fontSize={16}
                textAnchor="middle"
                fontWeight="bold"
                fill="#ff0000"
              >
                X
              </text>
            )}
          </g>
        );
      })}

      {/* Fret numbers */}
      {[...Array(fretCount)].map((_, idx) => (
        // idx is the 0-indexed space on the diagram
        // Label text is startFret + idx
        <text
          key={`fret-num-${idx}`}
          x={leftPad + idx * fretGap + fretGap / 2} // Center of the (idx)-th space
          y={topPad - 10}
          fontSize={12}
          textAnchor="middle"
        >
          {startFret + idx} 
        </text>
      ))}

      {/* Strings */}
      {[...Array(stringCount)].map((_, idx) => (
        <line
          key={`string-line-${idx}`}
          x1={leftPad}
          y1={topPad + idx * stringGap}
          x2={leftPad + fretCount * fretGap}
          y2={topPad + idx * stringGap}
          stroke="#000"
          strokeWidth={1}
        />
      ))}

      {/* Frets */}
      {[...Array(fretCount + 1)].map((_, idx) => (
        <line
          key={`fret-line-${idx}`}
          x1={leftPad + idx * fretGap}
          y1={topPad}
          x2={leftPad + idx * fretGap}
          y2={topPad + (stringCount - 1) * stringGap}
          stroke="#666"
          // The first line is the nut if startFret is 0 (or the diagram starts before the 1st actual fret)
          strokeWidth={(idx === 0 && startFret === 0) ? nutWidth : 2}
        />
      ))}

      {/* Finger positions */}
      {positions.map((pos, idx) => {
        if (pos.fret < 0) return null; // Don't render muted strings as dots

        let cxValue;
        if (pos.fret === 0) { // Open string
          cxValue = leftPad; // Centered on the nut line
        } else {
          // For fretted notes:
          // pos.fret is 1-indexed (1st fret, 2nd fret, etc.)
          // The 0-indexed actual fret space is (pos.fret - 1).
          // The 0-indexed space on the diagram is (pos.fret - 1) - startFret.
          // startFret is the label of the first space on the diagram.
          const displaySpaceIndex = (pos.fret - 1) - startFret;
          
          // Ensure the note is within the visible fret range of the diagram
          if (displaySpaceIndex >= 0 && displaySpaceIndex < fretCount) {
            cxValue = leftPad + displaySpaceIndex * fretGap + fretGap / 2;
          } else {
            return null; // Fret is outside the current diagram's range
          }
        }
        
        const cyValue = topPad + (pos.string - 1) * stringGap;

        return (
          <g key={`position-${idx}`}>
            <circle
              cx={cxValue}
              cy={cyValue} 
              r={10} 
              fill={pos.fret === 0 ? '#ADD8E6' : '#FFD700'} 
              stroke="#333"
              strokeWidth={1.5}
            />
            {pos.finger && (
              <text
                x={cxValue}
                y={cyValue}
                fontSize={14} 
                textAnchor="middle"
                fill="#000"
                fontWeight="bold"
                dominantBaseline="middle"
              >
                {pos.finger}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}