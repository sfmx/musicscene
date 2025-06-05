import React from 'react';

// Define the type for the combined data
type NoteTabData = {
  timing: number; // position in the bar
  string: number; // guitar string number (1 = high E)
  fret: number;   // fret number
  note: string;   // note name, e.g. 'F#'
};

interface MusicNotationVisualizerProps {
  data: NoteTabData[];
  beatsPerBar: number;
}

const STAFF_WIDTH = 300;
const STAFF_HEIGHT = 60;
const TAB_HEIGHT = 80;
const STRINGS = [1, 2, 3, 4, 5, 6]; // 1 = high E, 6 = low E

const MusicNotationVisualizer: React.FC<MusicNotationVisualizerProps> = ({ data, beatsPerBar }) => {
  // Calculate spacing
  const notesPerBar = beatsPerBar;
  const totalNotes = data.length;
  const noteSpacing = STAFF_WIDTH / (totalNotes + 1);

  // Map string number to vertical position for tab staff (1 = top)
  const stringY = (string: number) => 10 + (string - 1) * ((TAB_HEIGHT - 20) / 5);

  return (
    <div className="music-notation-visualizer" style={{ width: STAFF_WIDTH }}>
      {/* Notation staff */}
      <svg width={STAFF_WIDTH} height={STAFF_HEIGHT}>
        {/* Staff line */}
        <line x1={0} y1={STAFF_HEIGHT / 2} x2={STAFF_WIDTH} y2={STAFF_HEIGHT / 2} stroke="black" strokeWidth={2} />
        {/* Notes */}
        {data.map((item, idx) => (
          <g key={idx}>
            <text
              x={noteSpacing * (idx + 1)}
              y={STAFF_HEIGHT / 2 - 10}
              textAnchor="middle"
              fontSize="16"
              fontFamily="serif"
            >
              {item.note}
            </text>
            {/* Simple notehead */}
            <ellipse
              cx={noteSpacing * (idx + 1)}
              cy={STAFF_HEIGHT / 2}
              rx={7}
              ry={5}
              fill="black"
            />
          </g>
        ))}
      </svg>
      {/* Tab staff */}
      <svg width={STAFF_WIDTH} height={TAB_HEIGHT} style={{ marginTop: 8 }}>
        {/* 6 string lines */}
        {STRINGS.map((s) => (
          <line
            key={s}
            x1={0}
            y1={stringY(s)}
            x2={STAFF_WIDTH}
            y2={stringY(s)}
            stroke="black"
            strokeWidth={1}
          />
        ))}
        {/* Fret numbers */}
        {data.map((item, idx) => (
          <text
            key={idx}
            x={noteSpacing * (idx + 1)}
            y={stringY(item.string) + 5}
            textAnchor="middle"
            fontSize="14"
            fontFamily="monospace"
            fill="blue"
          >
            {item.fret}
          </text>
        ))}
        {/* String numbers on left */}
        {STRINGS.map((s) => (
          <text
            key={`label-${s}`}
            x={0}
            y={stringY(s) + 5}
            fontSize="10"
            fontFamily="monospace"
            fill="#888"
            textAnchor="end"
          >
            {s}
          </text>
        ))}
      </svg>
    </div>
  );
};

export default MusicNotationVisualizer;
