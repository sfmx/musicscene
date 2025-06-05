import React from 'react';

type TabNote = {
  string: number; // 1 = high E, 6 = low E
  fret: number;
  idx: number; // sequential position (for horizontal placement)
};

type Note = {
  name: string; // e.g. "A", "F#"
  idx: number;  // sequential position (for horizontal placement)
};

type Props = {
  tabNotes: TabNote[]; // all tab notes, with idx for time position
  notes?: Note[];      // optional: note names above tab, with idx for time position
  beatsPerBar?: number;
  noteSpacing?: number;
  title?: string;      // optional: title for the visualization
};

const stringNames = ['e', 'B', 'G', 'D', 'A', 'E'];

export default function TabAndNoteVisualizer({
  tabNotes = [],
  notes = [],
  beatsPerBar = 4,
  noteSpacing = 48,
  title,
}: Props) {
  // Defensive: ensure arrays
  const safeTabNotes = Array.isArray(tabNotes) ? tabNotes : [];
  const safeNotes = Array.isArray(notes) ? notes : [];
  const steps = Math.max(
    safeTabNotes.length > 0 ? Math.max(...safeTabNotes.map(n => n.idx)) + 1 : 0,
    safeNotes.length > 0 ? Math.max(...safeNotes.map(n => n.idx)) + 1 : 0
  );
  const stringCount = 6;
  const leftPad = 40;
  const topPad = 140; // Increased to give more room for stacked notes
  const stringGap = 28;
  const tabWidth = leftPad + steps * noteSpacing + 40;
  const tabHeight = topPad + (stringCount - 1) * stringGap + 70;

  // Group tab notes by string and idx for rendering
  const tabMap = new Map<string, TabNote>();
  tabNotes.forEach(n => tabMap.set(`${n.string}-${n.idx}`, n));

  // Group notes by idx for rendering
  const noteMap = new Map<number, Note>();
  notes.forEach(n => noteMap.set(n.idx, n));

  return (
    <svg
      width={tabWidth}
      height={tabHeight}
      style={{ background: '#fff', borderRadius: 12, display: 'block', margin: '0 auto' }}
    >
      {/* Title text */}
      {title && (
        <text
          x="50%"
          y={topPad - 90} // Adjusted position for title
          fontSize={24}
          fill="#333"
          textAnchor="middle"
          fontWeight="bold"
        >
          {title}
        </text>
      )}
      {/* Note names above tab - stacked vertically for chords */}
      {Array.from({ length: steps }).map((_, idx) => {
        // Group notes by idx to handle chords
        const chordNotes = notes.filter(n => n.idx === idx);
        if (chordNotes.length === 0) return null;
        
        return (
          <g key={`note-${idx}`}>
            <rect
              x={leftPad + idx * noteSpacing - 22}
              y={topPad - 85}
              width={44}
              height={chordNotes.length * 28 + 8} // Increased height per note
              rx={8}
              fill="#ffe082"
              stroke="#bdb76b"
              strokeWidth={2}
            />
            {chordNotes.map((note, noteIdx) => (
              <text
                key={`note-${idx}-${noteIdx}`}
                x={leftPad + idx * noteSpacing}
                y={topPad - 60 + (noteIdx * 28)} // Increased spacing between notes
                fontSize={18}
                fill="#333"
                textAnchor="middle"
                fontWeight="bold"
              >
                {note.name}
              </text>
            ))}
          </g>
        );
      })}
      
      {/* String lines */}
      {[...Array(stringCount)].map((_, sIdx) => (
        <line
          key={sIdx}
          x1={leftPad}
          y1={topPad + sIdx * stringGap}
          x2={leftPad + steps * noteSpacing}
          y2={topPad + sIdx * stringGap}
          stroke="#222"
          strokeWidth={1.5}
        />
      ))}
      {/* Bar lines */}
      {steps > 0 && beatsPerBar > 0 &&
        Array.from({ length: Math.ceil(steps / beatsPerBar) + 1 }).map((_, barIdx) => {
          const x = leftPad + barIdx * beatsPerBar * noteSpacing;
          return (
            <line
              key={barIdx}
              x1={x}
              y1={topPad - 18}
              x2={x}
              y2={topPad + (stringCount - 1) * stringGap + 18}
              stroke="#bbb"
              strokeWidth={2}
              opacity={0.7}
            />
          );
        })}
      {/* Fret numbers for each string, at their correct horizontal position */}
      {Array.from({ length: stringCount }, (_, sIdx) => {
        const stringNum = stringCount - sIdx;
        return Array.from({ length: steps }, (_, idx) => {
          const note = tabMap.get(`${stringNum}-${idx}`);
          if (!note) return null;
          return (
            <text
              key={`${stringNum}-${idx}`}
              x={leftPad + idx * noteSpacing}
              y={topPad + sIdx * stringGap + 7}
              fontSize={20}
              fill="#1976d2"
              textAnchor="middle"
              fontWeight="bold"
              style={{ textShadow: "0 1px 2px #fff" }}
            >
              {note.fret}
            </text>
          );
        });
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
    </svg>
  );
}
