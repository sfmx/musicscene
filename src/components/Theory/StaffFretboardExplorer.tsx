"use client";

import React, { useState, useCallback, useMemo } from 'react';
import { playGuitarNote, GUITAR_OPEN_STRINGS_MIDI } from '@/lib/guitarAudio';

export interface StaffNote {
  name: string;          // e.g. "C", "D#", "Eb"
  naturalName: string;   // "C", "D", "E", "F", "G", "A", "B"
  accidental: 'natural' | 'sharp' | 'flat';
  octave: number;        // Guitar written octave (e.g., 4 for Middle C in guitar notation)
  step: number;          // 0 = Line 1 (E4), -1 = D4, -2 = C4 (1st ledger line below), etc.
  soundingMidi: number;  // Actual sounding MIDI note on guitar (40 = Low E)
  description: string;   // e.g. "1st Ledger Line Below Staff (Middle C)"
  mnemonic?: string;     // e.g. "Every Good Boy Does Fine (Line 1)"
}

// 7 diatonic natural notes and their staff step offsets relative to E4 (step 0 = bottom line of treble staff)
const DIATONIC_STEPS: Record<string, number> = {
  C: -2,
  D: -1,
  E: 0,
  F: 1,
  G: 2,
  A: 3,
  B: 4,
};

// Standard reference notes in guitar written register (sounding 1 octave lower)
export const LANDMARK_NOTES: StaffNote[] = [
  { name: 'E3', naturalName: 'E', accidental: 'natural', octave: 3, step: -7, soundingMidi: 40, description: 'Space Below 3rd Ledger Line (String 6 Open - Lowest Guitar Note)', mnemonic: 'Anchor 3: Low E (Hangs Below 3 Lines)' },
  { name: 'F3', naturalName: 'F', accidental: 'natural', octave: 3, step: -6, soundingMidi: 41, description: '3rd Ledger Line Below (String 6, Fret 1)', mnemonic: 'Line Note: 3rd Ledger Line (C-A-F)' },
  { name: 'G3', naturalName: 'G', accidental: 'natural', octave: 3, step: -5, soundingMidi: 43, description: 'Space Below 2nd Ledger Line (String 6, Fret 3)', mnemonic: 'Space Note: Below 2nd Ledger Line' },
  { name: 'A3', naturalName: 'A', accidental: 'natural', octave: 3, step: -4, soundingMidi: 45, description: '2nd Ledger Line Below (String 5 Open)', mnemonic: 'Anchor 2: Double-Line A (Open 5th String)' },
  { name: 'B3', naturalName: 'B', accidental: 'natural', octave: 3, step: -3, soundingMidi: 47, description: 'Space Below 1st Ledger Line (String 5, Fret 2)', mnemonic: 'Space Note: Below 1st Ledger Line' },
  { name: 'C4', naturalName: 'C', accidental: 'natural', octave: 4, step: -2, soundingMidi: 48, description: '1st Ledger Line Below Staff (Middle C on Guitar)', mnemonic: 'Anchor 1: Middle C (1 Line Strike)' },
  { name: 'D4', naturalName: 'D', accidental: 'natural', octave: 4, step: -1, soundingMidi: 50, description: 'Space Hanging Below Line 1 (String 4 Open)', mnemonic: 'Anchor 0: Open D (0 Lines, Under Staff)' },
  { name: 'E4', naturalName: 'E', accidental: 'natural', octave: 4, step: 0, soundingMidi: 52, description: 'Line 1: Bottom Line of Staff (String 4, Fret 2)', mnemonic: 'Every (Line 1)' },
  { name: 'F4', naturalName: 'F', accidental: 'natural', octave: 4, step: 1, soundingMidi: 53, description: 'Space 1: Bottom Space (String 4, Fret 3)', mnemonic: 'F (in FACE)' },
  { name: 'G4', naturalName: 'G', accidental: 'natural', octave: 4, step: 2, soundingMidi: 55, description: 'Line 2: Treble Clef Target Line (String 3 Open)', mnemonic: 'Good (Line 2 - G Clef)' },
  { name: 'A4', naturalName: 'A', accidental: 'natural', octave: 4, step: 3, soundingMidi: 57, description: 'Space 2: Second Space (String 3, Fret 2)', mnemonic: 'A (in FACE)' },
  { name: 'B4', naturalName: 'B', accidental: 'natural', octave: 4, step: 4, soundingMidi: 59, description: 'Line 3: Center Line of Staff (String 2 Open)', mnemonic: 'Boy (Line 3)' },
  { name: 'C5', naturalName: 'C', accidental: 'natural', octave: 5, step: 5, soundingMidi: 60, description: 'Space 3: Third Space (String 2, Fret 1)', mnemonic: 'C (in FACE)' },
  { name: 'D5', naturalName: 'D', accidental: 'natural', octave: 5, step: 6, soundingMidi: 62, description: 'Line 4: Fourth Line (String 2, Fret 3)', mnemonic: 'Does (Line 4)' },
  { name: 'E5', naturalName: 'E', accidental: 'natural', octave: 5, step: 7, soundingMidi: 64, description: 'Space 4: Top Space of Staff (String 1 Open)', mnemonic: 'E (in FACE)' },
  { name: 'F5', naturalName: 'F', accidental: 'natural', octave: 5, step: 8, soundingMidi: 65, description: 'Line 5: Top Line of Staff (String 1, Fret 1)', mnemonic: 'Fine (Line 5)' },
  { name: 'G5', naturalName: 'G', accidental: 'natural', octave: 5, step: 9, soundingMidi: 67, description: 'Space Sitting on Top of Line 5 (String 1, Fret 3)', mnemonic: 'Above Staff' },
  { name: 'A5', naturalName: 'A', accidental: 'natural', octave: 5, step: 10, soundingMidi: 69, description: '1st Ledger Line Above Staff (String 1, Fret 5)', mnemonic: 'Concert A440' },
  { name: 'B5', naturalName: 'B', accidental: 'natural', octave: 5, step: 11, soundingMidi: 71, description: 'Space Above 1st Ledger Line (String 1, Fret 7)', mnemonic: 'High Treble' },
  { name: 'C6', naturalName: 'C', accidental: 'natural', octave: 6, step: 12, soundingMidi: 72, description: '2nd Ledger Line Above Staff (String 1, Fret 8)', mnemonic: 'High C' },
];

interface FretLocation {
  stringIndex: number; // 0 = Low E, 5 = High E
  stringName: string;
  fret: number;
  isOpenPosition: boolean;
}

export default function StaffFretboardExplorer() {
  const [selectedNoteIndex, setSelectedNoteIndex] = useState<number>(5); // default C4 (Middle C)
  const [activeAccidental, setActiveAccidental] = useState<'natural' | 'sharp' | 'flat'>('natural');
  const [activeTab, setActiveTab] = useState<'explore' | 'open-pos' | 'strings-1-2' | 'strings-3-4' | 'strings-5-6'>('explore');

  const baseNote = LANDMARK_NOTES[selectedNoteIndex] || LANDMARK_NOTES[5];

  // Adjust MIDI pitch and display name based on accidental
  const currentNote = useMemo(() => {
    let midiOffset = 0;
    let nameSuffix = '';
    if (activeAccidental === 'sharp') {
      midiOffset = 1;
      nameSuffix = '♯';
    } else if (activeAccidental === 'flat') {
      midiOffset = -1;
      nameSuffix = '♭';
    }

    return {
      ...baseNote,
      name: `${baseNote.naturalName}${nameSuffix}${baseNote.octave}`,
      accidental: activeAccidental,
      soundingMidi: baseNote.soundingMidi + midiOffset,
    };
  }, [baseNote, activeAccidental]);

  // Find all fretboard positions (frets 0 to 15) that produce this exact sounding pitch
  const fretLocations = useMemo<FretLocation[]>(() => {
    const stringNames = ['6 (Low E)', '5 (A)', '4 (D)', '3 (G)', '2 (B)', '1 (High E)'];
    const results: FretLocation[] = [];

    GUITAR_OPEN_STRINGS_MIDI.forEach((openMidi, strIdx) => {
      const fret = currentNote.soundingMidi - openMidi;
      if (fret >= 0 && fret <= 15) {
        results.push({
          stringIndex: strIdx,
          stringName: stringNames[strIdx],
          fret,
          isOpenPosition: fret <= 3,
        });
      }
    });

    return results;
  }, [currentNote.soundingMidi]);

  // Play audio for current note
  const handlePlayCurrentNote = useCallback(() => {
    if (fretLocations.length > 0) {
      // Prefer open position fret if available, else first match
      const preferred = fretLocations.find(l => l.isOpenPosition) || fretLocations[0];
      playGuitarNote(preferred.stringIndex, preferred.fret, { volume: 0.5, duration: 2.2 });
    }
  }, [fretLocations]);

  // Handle clicking a specific fret on the visual neck
  const handleFretClick = (stringIndex: number, fret: number) => {
    playGuitarNote(stringIndex, fret, { volume: 0.5, duration: 2.2 });
    const targetSoundingMidi = GUITAR_OPEN_STRINGS_MIDI[stringIndex] + fret;

    // Find landmark note closest to this pitch
    const matchedIdx = LANDMARK_NOTES.findIndex(n => n.soundingMidi === targetSoundingMidi);
    if (matchedIdx !== -1) {
      setSelectedNoteIndex(matchedIdx);
      setActiveAccidental('natural');
      return;
    }

    // Check if it matches a sharp of a landmark note
    const matchedSharpIdx = LANDMARK_NOTES.findIndex(n => n.soundingMidi + 1 === targetSoundingMidi);
    if (matchedSharpIdx !== -1) {
      setSelectedNoteIndex(matchedSharpIdx);
      setActiveAccidental('sharp');
      return;
    }

    // Check if it matches a flat of a landmark note
    const matchedFlatIdx = LANDMARK_NOTES.findIndex(n => n.soundingMidi - 1 === targetSoundingMidi);
    if (matchedFlatIdx !== -1) {
      setSelectedNoteIndex(matchedFlatIdx);
      setActiveAccidental('flat');
    }
  };

  // Staff SVG dimensions & metrics
  const staffWidth = 420;
  const staffHeight = 220;
  const staffCenterY = 110;
  const lineSpacing = 16;
  const line1Y = staffCenterY + lineSpacing * 2; // Bottom line (E4, step 0)

  // Calculate vertical Y coordinate on SVG for note step (each step = lineSpacing / 2)
  const noteY = line1Y - (currentNote.step * (lineSpacing / 2));
  const noteX = 230;

  // Determine ledger lines needed
  const ledgerLines: number[] = [];
  if (currentNote.step <= -2) {
    // Below staff: line notes at -2 (C4), -4 (A3), -6 (F3).
    // Space notes hang directly below their parent line (-3 = B3 under -2, -5 = G3 under -4, -7 = E3 under -6).
    const targetLine = currentNote.step % 2 === 0 ? currentNote.step : currentNote.step + 1;
    for (let s = -2; s >= targetLine; s -= 2) {
      ledgerLines.push(line1Y - (s * (lineSpacing / 2)));
    }
  } else if (currentNote.step >= 10) {
    // Above staff: line notes at 10 (A5), 12 (C6).
    // Space notes sit directly on top of their parent line (11 = B5 sits on 10).
    const targetLineAbove = currentNote.step % 2 === 0 ? currentNote.step : currentNote.step - 1;
    for (let s = 10; s <= targetLineAbove; s += 2) {
      ledgerLines.push(line1Y - (s * (lineSpacing / 2)));
    }
  }

  return (
    <div className="w-full bg-slate-900/90 dark:bg-slate-950 border border-slate-700/80 dark:border-slate-800 rounded-3xl p-4 sm:p-6 shadow-2xl text-slate-100 font-sans transition-all">
      {/* Header & Concept Callout */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30">
              Interactive Explorer
            </span>
            <span className="text-xs text-slate-400">Standard Notation to Fretboard Bridge</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <span>Staff-to-Fretboard Explorer</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
            Click any note on the staff or any fret on the guitar neck to see, hear, and understand how standard music notation maps to the fretboard.
          </p>
        </div>

        {/* Guided Modes Toggle */}
        <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700 text-xs">
          <button
            type="button"
            onClick={() => setActiveTab('explore')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
              activeTab === 'explore'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Free Explore
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab('open-pos');
              setSelectedNoteIndex(5); // C4 Middle C
              setActiveAccidental('natural');
            }}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
              activeTab === 'open-pos'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Open Position Guide
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab('strings-5-6');
              setSelectedNoteIndex(0); // E3 Low E
              setActiveAccidental('natural');
              playGuitarNote(0, LANDMARK_NOTES[0].soundingMidi - GUITAR_OPEN_STRINGS_MIDI[0], { volume: 0.45, duration: 1.5 });
            }}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
              activeTab === 'strings-5-6'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Bass Ledger Lines (Strings 4-6)
          </button>
        </div>
      </div>

      {/* Bass Ledger Lines Anchor Banner (Shown when activeTab === 'strings-5-6') */}
      {activeTab === 'strings-5-6' && (
        <div className="mb-4 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="font-bold text-amber-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span>Sub-Staff Ledger Realm: The 3 Open String Anchors</span>
            </div>
            <span className="text-[11px] text-amber-200/80">
              Rule: 0 Lines = Open D | 2 Lines = Open A | 3 Lines = Low E
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
            {[
              { idx: 0, label: 'Low E (E3)', sub: '3 Lines (Hangs)', anchor: true },
              { idx: 1, label: 'F3', sub: '3rd Line Strike', anchor: false },
              { idx: 2, label: 'G3', sub: 'Below 2nd Line', anchor: false },
              { idx: 3, label: 'Open A (A3)', sub: '2 Lines Strike', anchor: true },
              { idx: 4, label: 'B3', sub: 'Below 1st Line', anchor: false },
              { idx: 5, label: 'Middle C (C4)', sub: '1 Line Strike', anchor: true },
              { idx: 6, label: 'Open D (D4)', sub: '0 Lines (Under Staff)', anchor: true },
            ].map(item => (
              <button
                key={item.idx}
                type="button"
                onClick={() => {
                  setSelectedNoteIndex(item.idx);
                  setActiveAccidental('natural');
                  playGuitarNote(0, LANDMARK_NOTES[item.idx].soundingMidi - GUITAR_OPEN_STRINGS_MIDI[0], { volume: 0.45, duration: 1.5 });
                }}
                className={`p-2 rounded-xl text-center border transition-all cursor-pointer ${
                  selectedNoteIndex === item.idx
                    ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md scale-102'
                    : item.anchor
                      ? 'bg-slate-800/90 text-amber-300 border-amber-500/40 hover:bg-slate-800'
                      : 'bg-slate-900/60 text-slate-300 border-slate-700/80 hover:bg-slate-800'
                }`}
              >
                <div className="font-bold text-xs">{item.label}</div>
                <div className="text-[10px] opacity-80">{item.sub}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Grid: Staff Display (Left) + Note Intel & Fretboard (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Interactive 5-Line Musical Staff */}
        <div className="lg:col-span-5 bg-stone-950/70 border border-slate-800 rounded-2xl p-4 flex flex-col items-center shadow-inner">
          <div className="w-full flex items-center justify-between mb-2 px-1">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Treble Staff (Guitar Octave Clef)
            </span>
            <button
              type="button"
              onClick={handlePlayCurrentNote}
              className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 transition-colors font-medium cursor-pointer"
              title="Hear Note Pitch"
            >
              <span>🔊</span>
              <span>Hear Note</span>
            </button>
          </div>

          {/* SVG Musical Staff */}
          <div className="w-full max-w-[380px] aspect-[16/9] flex items-center justify-center bg-[#faf9f5] rounded-xl border border-stone-300 p-2 shadow-md overflow-hidden relative select-none">
            <svg
              viewBox={`0 0 ${staffWidth} ${staffHeight}`}
              className="w-full h-full"
              style={{ filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.05))' }}
            >
              {/* 5 Staff Lines */}
              {[0, 1, 2, 3, 4].map((i) => {
                const y = line1Y - i * lineSpacing;
                return (
                  <line
                    key={i}
                    x1="30"
                    y1={y}
                    x2={staffWidth - 25}
                    y2={y}
                    stroke="#1e293b"
                    strokeWidth="1.5"
                  />
                );
              })}

              {/* Treble Clef Symbol (Stylized SVG representation) */}
              <text
                x="45"
                y={line1Y - 10}
                fontSize="72"
                fontFamily="serif"
                fill="#0f172a"
                className="select-none pointer-events-none"
              >
                𝄞
              </text>
              <text
                x="65"
                y={line1Y + 16}
                fontSize="12"
                fontWeight="bold"
                fontFamily="sans-serif"
                fill="#475569"
                className="select-none pointer-events-none"
              >
                8vb
              </text>

              {/* Dynamic Ledger Lines */}
              {ledgerLines.map((y, idx) => (
                <line
                  key={idx}
                  x1={noteX - 18}
                  y1={y}
                  x2={noteX + 18}
                  y2={y}
                  stroke="#0f172a"
                  strokeWidth="1.8"
                />
              ))}

              {/* Accidental Symbol (Sharp / Flat) */}
              {activeAccidental === 'sharp' && (
                <text
                  x={noteX - 22}
                  y={noteY + 7}
                  fontSize="24"
                  fontWeight="bold"
                  fill="#d97706"
                  textAnchor="middle"
                  className="select-none"
                >
                  ♯
                </text>
              )}
              {activeAccidental === 'flat' && (
                <text
                  x={noteX - 20}
                  y={noteY + 6}
                  fontSize="24"
                  fontWeight="bold"
                  fill="#2563eb"
                  textAnchor="middle"
                  className="select-none"
                >
                  ♭
                </text>
              )}

              {/* Note Head (Rotated Oval) */}
              <ellipse
                cx={noteX}
                cy={noteY}
                rx="9.5"
                ry="6.5"
                fill="#0f172a"
                transform={`rotate(-22 ${noteX} ${noteY})`}
              />

              {/* Note Stem (Up if below middle line B4, down if B4 or above) */}
              {currentNote.step < 4 ? (
                <line
                  x1={noteX + 8.5}
                  y1={noteY - 2}
                  x2={noteX + 8.5}
                  y2={noteY - 48}
                  stroke="#0f172a"
                  strokeWidth="1.6"
                />
              ) : (
                <line
                  x1={noteX - 8.5}
                  y1={noteY + 2}
                  x2={noteX - 8.5}
                  y2={noteY + 48}
                  stroke="#0f172a"
                  strokeWidth="1.6"
                />
              )}
            </svg>
          </div>

          {/* Note Scrubbing Slider & Accidentals */}
          <div className="w-full mt-4 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Low Pitch (E3)</span>
              <span className="font-semibold text-amber-400">Pitch Navigation</span>
              <span>High Pitch (C6)</span>
            </div>

            <input
              type="range"
              min="0"
              max={LANDMARK_NOTES.length - 1}
              value={selectedNoteIndex}
              onChange={(e) => {
                const idx = parseInt(e.target.value, 10);
                setSelectedNoteIndex(idx);
                const note = LANDMARK_NOTES[idx];
                playGuitarNote(0, note.soundingMidi - GUITAR_OPEN_STRINGS_MIDI[0], { volume: 0.45, duration: 1.5 });
              }}
              className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
            />

            {/* Accidental Toggle Pills */}
            <div className="flex items-center justify-center gap-2 pt-1">
              <span className="text-xs text-slate-400 mr-1">Accidental:</span>
              <button
                type="button"
                onClick={() => setActiveAccidental('flat')}
                className={`px-2.5 py-1 rounded-md text-xs font-bold border transition-all cursor-pointer ${
                  activeAccidental === 'flat'
                    ? 'bg-blue-600 text-white border-blue-400 shadow-xs'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-600'
                }`}
              >
                ♭ Flat
              </button>
              <button
                type="button"
                onClick={() => setActiveAccidental('natural')}
                className={`px-2.5 py-1 rounded-md text-xs font-bold border transition-all cursor-pointer ${
                  activeAccidental === 'natural'
                    ? 'bg-amber-500 text-slate-950 border-amber-300 shadow-xs'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-600'
                }`}
              >
                ♮ Natural
              </button>
              <button
                type="button"
                onClick={() => setActiveAccidental('sharp')}
                className={`px-2.5 py-1 rounded-md text-xs font-bold border transition-all cursor-pointer ${
                  activeAccidental === 'sharp'
                    ? 'bg-amber-600 text-white border-amber-400 shadow-xs'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-600'
                }`}
              >
                ♯ Sharp
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Note Intel Card & Fretboard Visualizer */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* Active Note Intelligence Card */}
          <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-amber-500 text-slate-950 font-black text-2xl flex items-center justify-center shadow-lg border-2 border-amber-300">
                {currentNote.name}
              </div>
              <div>
                <div className="text-base font-bold text-white flex items-center gap-2">
                  <span>{currentNote.description}</span>
                </div>
                <div className="text-xs text-amber-300 font-medium flex items-center gap-1.5 mt-0.5">
                  <span>💡 Memory Rule:</span>
                  <span className="text-slate-300">{currentNote.mnemonic || 'Staff Contour Step'}</span>
                </div>
              </div>
            </div>

            <div className="text-left sm:text-right text-xs text-slate-400">
              <div>Sounding MIDI: <span className="font-mono text-amber-400 font-bold">{currentNote.soundingMidi}</span></div>
              <div>Staff Step: <span className="font-mono text-cyan-400 font-bold">{currentNote.step >= 0 ? `+${currentNote.step}` : currentNote.step}</span></div>
            </div>
          </div>

          {/* Fretboard Matches Summary */}
          <div className="flex items-center justify-between px-1 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-200">Matching Frets on Neck:</span>
              <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold">
                🟢 Open Position (Frets 0-3)
              </span>
              <span className="px-2 py-0.5 rounded-md bg-violet-500/20 text-violet-300 border border-violet-500/40 font-semibold">
                🟣 Higher Frets
              </span>
            </div>
            <span className="text-slate-400 text-[11px] hidden sm:inline">Click any fret to play</span>
          </div>

          {/* Interactive 15-Fret Neck */}
          <div className="w-full bg-[#1e1b18] border-2 border-stone-700 rounded-2xl p-3 shadow-2xl overflow-x-auto select-none">
            <div className="min-w-[620px] relative">
              {/* Fret Number Markers (Top) */}
              <div className="grid grid-cols-16 text-center text-[11px] font-bold text-stone-400 pb-2 border-b border-stone-800">
                <span className="text-amber-400">Open</span>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(f => (
                  <span key={f} className={f === 3 || f === 5 || f === 7 || f === 9 || f === 12 || f === 15 ? 'text-amber-400 font-extrabold' : ''}>
                    {f}
                  </span>
                ))}
              </div>

              {/* 6 Guitar Strings (From High E string 5 down to Low E string 0) */}
              {[5, 4, 3, 2, 1, 0].map((strIdx) => {
                const stringNames = ['6 (Low E)', '5 (A)', '4 (D)', '3 (G)', '2 (B)', '1 (High E)'];
                const stringGauges = [1.5, 2.0, 2.5, 3.2, 4.0, 5.0]; // string thickness in px
                const gauge = stringGauges[5 - strIdx];

                return (
                  <div key={strIdx} className="relative h-9 flex items-center">
                    {/* Background String Line */}
                    <div
                      className="absolute inset-x-0 bg-gradient-to-r from-stone-400 via-stone-300 to-stone-400 shadow-xs pointer-events-none"
                      style={{ height: `${gauge}px` }}
                    />

                    {/* Fret Cells (0 to 15) */}
                    <div className="grid grid-cols-16 w-full h-full relative z-10">
                      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((fret) => {
                        const isMatch = fretLocations.some(
                          l => l.stringIndex === strIdx && l.fret === fret
                        );
                        const matchData = fretLocations.find(
                          l => l.stringIndex === strIdx && l.fret === fret
                        );
                        const isOpenPos = matchData?.isOpenPosition ?? false;

                        return (
                          <button
                            key={fret}
                            type="button"
                            onClick={() => handleFretClick(strIdx, fret)}
                            className={`h-full border-r border-stone-700/60 flex items-center justify-center transition-all cursor-pointer relative group ${
                              fret === 0 ? 'border-r-4 border-amber-600/80 bg-stone-900/60' : ''
                            } hover:bg-white/10`}
                            title={`String ${stringNames[strIdx]}, Fret ${fret}`}
                          >
                            {/* Position inlays on fretboard wood (frets 3, 5, 7, 9, 12, 15) */}
                            {strIdx === 2 && (fret === 3 || fret === 5 || fret === 7 || fret === 9 || fret === 15) && (
                              <div className="w-2.5 h-2.5 rounded-full bg-stone-500/30 pointer-events-none" />
                            )}
                            {strIdx === 2 && fret === 12 && (
                              <div className="flex gap-1 pointer-events-none">
                                <div className="w-2 h-2 rounded-full bg-stone-500/40" />
                                <div className="w-2 h-2 rounded-full bg-stone-500/40" />
                              </div>
                            )}

                            {/* Active Note Badge */}
                            {isMatch && (
                              <div
                                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shadow-lg animate-pulse transition-transform transform scale-110 border-2 ${
                                  isOpenPos
                                    ? 'bg-emerald-500 text-slate-950 border-white'
                                    : 'bg-violet-600 text-white border-violet-300'
                                }`}
                              >
                                {currentNote.name}
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Explanation Callout */}
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 text-xs text-amber-200">
            <span className="font-bold text-amber-300 mr-1.5">🎓 The Guitar Reading Rule:</span>
            Notice how <span className="font-bold text-white">{currentNote.name}</span> appears in multiple spots on the guitar neck. When sight-reading, classical and modern guitarists prioritize the <span className="font-bold text-emerald-300">Open Position (green)</span> first because it requires zero position shifting along the neck.
          </div>
        </div>
      </div>
    </div>
  );
}

