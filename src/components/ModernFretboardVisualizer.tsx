import React from 'react';

type ScaleNote = {
  string: number; // 1 = high E, 6 = low E
  fret: number;
  note?: string; // e.g. "C", "D#", etc.
  color?: string; // optional, for custom coloring
  root?: boolean;
};

type Props = {
  notes: ScaleNote[];
  frets?: number; // number of frets to show (default 12)
  showNoteNames?: boolean; // show note names in circles, otherwise show fret numbers
};

const stringNames = ['E', 'A', 'D', 'G', 'B', 'e'];
const defaultColors = [
  '#a5d6a7', // green
  '#90caf9', // blue
  '#f48fb1', // pink
  '#ffe082', // yellow
  '#ce93d8', // purple
  '#ffab91', // orange
  '#b0bec5', // gray
  '#fff59d', // light yellow
  '#80cbc4', // teal
  '#bcaaa4', // brown
  '#f8bbd0', // light pink
  '#b2dfdb', // light teal
];

export default function ModernFretboardVisualizer({
  notes,
  frets = 12,
  showNoteNames = true,
}: Props) {
  // Build a lookup for notes: string -> fret -> note
  const noteMap = new Map<string, ScaleNote>();
  notes.forEach(n => noteMap.set(`${n.string}-${n.fret}`, n));

  const stringCount = 6;
  const fretCount = frets;
  const leftPad = 50;
  const topPad = 30;
  const stringGap = 40;
  const fretGap = 60;
  const nutWidth = 12;
  const boardWidth = leftPad + fretCount * fretGap + 40;
  const boardHeight = topPad + (stringCount - 1) * stringGap + 60;

  // Assign a color to each note name for visual distinction
  const noteColorMap = new Map<string, string>();
  let colorIdx = 0;
  notes.forEach(n => {
    if (n.note && !noteColorMap.has(n.note)) {
      noteColorMap.set(n.note, defaultColors[colorIdx % defaultColors.length]);
      colorIdx++;
    }
  });

  return (
    <svg
      width={boardWidth}
      height={boardHeight}
      style={{ background: '#073642', borderRadius: 16, display: 'block', margin: '0 auto' }}
    >
      {/* Fretboard background */}
      <rect
        x={leftPad - nutWidth}
        y={topPad - 24}
        width={fretCount * fretGap + nutWidth * 2}
        height={(stringCount - 1) * stringGap + 48}
        rx={18}
        fill="#7c4a03"
        stroke="#5d3200"
        strokeWidth={2}
      />
      {/* Frets */}
      {[...Array(fretCount + 1)].map((_, fIdx) => (
        <line
          key={fIdx}
          x1={leftPad + fIdx * fretGap}
          y1={topPad - 18}
          x2={leftPad + fIdx * fretGap}
          y2={topPad + (stringCount - 1) * stringGap + 18}
          stroke="#e0a060"
          strokeWidth={fIdx === 0 ? 6 : 3}
          opacity={fIdx === 0 ? 0.7 : 0.5}
        />
      ))}
      {/* Strings */}
      {[...Array(stringCount)].map((_, sIdx) => (
        <line
          key={sIdx}
          x1={leftPad - nutWidth}
          y1={topPad + sIdx * stringGap}
          x2={leftPad + fretCount * fretGap + nutWidth}
          y2={topPad + sIdx * stringGap}
          stroke="#fff"
          strokeWidth={2 - sIdx * 0.15}
          opacity={0.8}
        />
      ))}
      {/* Fret numbers */}
      {[...Array(fretCount + 1)].map((_, fIdx) => (
        <text
          key={fIdx}
          x={leftPad + fIdx * fretGap}
          y={topPad + (stringCount - 1) * stringGap + 38}
          fontSize={20}
          fill={fIdx === 12 ? "#fff" : "#1976d2"}
          textAnchor="middle"
          fontWeight={fIdx === 12 ? "bold" : "normal"}
          style={fIdx === 12 ? { filter: "drop-shadow(0 0 4px #fff)" } : {}}
        >
          {fIdx}
        </text>
      ))}
      {/* Highlight 12th fret */}
      <rect
        x={leftPad + 12 * fretGap - fretGap / 2}
        y={topPad + (stringCount - 1) * stringGap + 20}
        width={fretGap}
        height={28}
        rx={8}
        fill="none"
        stroke="#fff"
        strokeWidth={2}
        opacity={0.7}
      />
      {/* String names at left */}
      {stringNames.map((name, i) => (
        <text
          key={name}
          x={leftPad - nutWidth - 18}
          y={topPad + i * stringGap + 7}
          fontSize={18}
          fill="#b2dfdb"
          textAnchor="end"
          fontWeight="bold"
        >
          {name}
        </text>
      ))}
      {/* Notes */}
      {[...Array(stringCount)].map((_, sIdx) =>
        [...Array(fretCount + 1)].map((_, fIdx) => {
          const string = stringCount - sIdx;
          const note = noteMap.get(`${string}-${fIdx}`);
          if (!note) return null;
          const color =
            note.color ||
            (note.note ? noteColorMap.get(note.note) : "#ffd700") ||
            "#ffd700";
          return (
            <g key={`${string}-${fIdx}`}>
              <circle
                cx={leftPad + fIdx * fretGap}
                cy={topPad + sIdx * stringGap}
                r={note.root ? 22 : 18}
                fill={color}
                stroke={note.root ? "#fff" : "#222"}
                strokeWidth={note.root ? 4 : 2}
                opacity={0.95}
                style={{ filter: note.root ? "drop-shadow(0 0 6px #fff)" : undefined }}
              />
              <text
                x={leftPad + fIdx * fretGap}
                y={topPad + sIdx * stringGap + 6}
                fontSize={note.root ? 22 : 18}
                fill="#222"
                textAnchor="middle"
                fontWeight="bold"
                style={{ textShadow: "0 1px 2px #fff" }}
              >
                {showNoteNames && note.note
                  ? note.note
                  : fIdx}
              </text>
            </g>
          );
        })
      )}
    </svg>
  );
}
