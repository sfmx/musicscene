"use client";

import React, { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { playGuitarNote, GUITAR_OPEN_STRINGS_MIDI } from '@/lib/guitarAudio';
import { LANDMARK_NOTES } from '@/components/Theory/StaffFretboardExplorer';
import { frequencyToPitch } from '@/lib/pitchDetection';

interface FretMatch {
  stringIndex: number;
  fret: number;
  stringName: string;
  isOpenPosition: boolean;
  positionLabel: string;
}

export default function NotationSandboxClient() {
  const [selectedNoteIndex, setSelectedNoteIndex] = useState<number>(5); // default C4 (Middle C)
  const [activeAccidental, setActiveAccidental] = useState<'natural' | 'sharp' | 'flat'>('natural');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  const baseNote = LANDMARK_NOTES[selectedNoteIndex] || LANDMARK_NOTES[5];

  // Compute active pitch details
  const activeNote = useMemo(() => {
    let midiOffset = 0;
    let symbol = '';
    if (activeAccidental === 'sharp') {
      midiOffset = 1;
      symbol = '♯';
    } else if (activeAccidental === 'flat') {
      midiOffset = -1;
      symbol = '♭';
    }

    const soundingMidi = baseNote.soundingMidi + midiOffset;
    const freq = 440 * Math.pow(2, (soundingMidi - 69) / 12);
    const pitchDetails = frequencyToPitch(freq);

    return {
      ...baseNote,
      name: `${baseNote.naturalName}${symbol}${baseNote.octave}`,
      accidental: activeAccidental,
      soundingMidi,
      freq: Math.round(freq * 10) / 10,
      scientificName: pitchDetails.scientificName,
    };
  }, [baseNote, activeAccidental]);

  // Find all fretboard positions (frets 0 to 18) that play this pitch
  const fretMatches = useMemo<FretMatch[]>(() => {
    const stringNames = ['6 (Low E)', '5 (A)', '4 (D)', '3 (G)', '2 (B)', '1 (High E)'];
    const results: FretMatch[] = [];

    GUITAR_OPEN_STRINGS_MIDI.forEach((openMidi, strIdx) => {
      const fret = activeNote.soundingMidi - openMidi;
      if (fret >= 0 && fret <= 18) {
        let positionLabel = 'Upper Register';
        if (fret <= 3) positionLabel = 'Open Position (Frets 0-3)';
        else if (fret <= 8) positionLabel = 'Mid-Neck Position (Frets 4-8)';
        else if (fret <= 12) positionLabel = 'Upper Position (Frets 9-12)';

        results.push({
          stringIndex: strIdx,
          fret,
          stringName: stringNames[strIdx],
          isOpenPosition: fret <= 3,
          positionLabel,
        });
      }
    });

    return results;
  }, [activeNote.soundingMidi]);

  // Play audio for current note
  const playCurrentPitch = useCallback(() => {
    if (!soundEnabled) return;
    if (fretMatches.length > 0) {
      const preferred = fretMatches.find(m => m.isOpenPosition) || fretMatches[0];
      playGuitarNote(preferred.stringIndex, preferred.fret, { volume: 0.5, duration: 2.2 });
    }
  }, [fretMatches, soundEnabled]);

  // Handle clicking a fret directly on the guitar fretboard
  const handleFretClick = (strIdx: number, fret: number) => {
    if (soundEnabled) {
      playGuitarNote(strIdx, fret, { volume: 0.5, duration: 2.0 });
    }

    const clickedSoundingMidi = GUITAR_OPEN_STRINGS_MIDI[strIdx] + fret;

    // Check natural landmark match
    const naturalIdx = LANDMARK_NOTES.findIndex(n => n.soundingMidi === clickedSoundingMidi);
    if (naturalIdx !== -1) {
      setSelectedNoteIndex(naturalIdx);
      setActiveAccidental('natural');
      return;
    }

    // Check sharp match
    const sharpIdx = LANDMARK_NOTES.findIndex(n => n.soundingMidi + 1 === clickedSoundingMidi);
    if (sharpIdx !== -1) {
      setSelectedNoteIndex(sharpIdx);
      setActiveAccidental('sharp');
      return;
    }

    // Check flat match
    const flatIdx = LANDMARK_NOTES.findIndex(n => n.soundingMidi - 1 === clickedSoundingMidi);
    if (flatIdx !== -1) {
      setSelectedNoteIndex(flatIdx);
      setActiveAccidental('flat');
    }
  };

  // Staff SVG dimensions
  const staffWidth = 460;
  const staffHeight = 220;
  const staffCenterY = 110;
  const lineSpacing = 16;
  const line1Y = staffCenterY + lineSpacing * 2; // Bottom line (E4, step 0)
  const noteY = line1Y - (activeNote.step * (lineSpacing / 2));
  const noteX = 240;

  // Ledger lines
  const ledgerLines: number[] = [];
  if (activeNote.step <= -2) {
    const targetLine = activeNote.step % 2 === 0 ? activeNote.step : activeNote.step + 1;
    for (let s = -2; s >= targetLine; s -= 2) {
      ledgerLines.push(line1Y - (s * (lineSpacing / 2)));
    }
  } else if (activeNote.step >= 10) {
    const targetLineAbove = activeNote.step % 2 === 0 ? activeNote.step : activeNote.step - 1;
    for (let s = 10; s <= targetLineAbove; s += 2) {
      ledgerLines.push(line1Y - (s * (lineSpacing / 2)));
    }
  }

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Top Banner */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 sm:p-6 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold text-xs border border-amber-500/20">
                Interactive Sandbox
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">Two-Way Notation &amp; Fretboard Scratchpad</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Staff to Fretboard Interactive Sandbox
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer flex items-center gap-1.5 ${
                soundEnabled
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-400 border-slate-300 dark:border-slate-700'
              }`}
            >
              <span>{soundEnabled ? '🔊 Audio Pluck On' : '🔇 Audio Muted'}</span>
            </button>

            <Link
              href="/lessons/practice/sight-reading"
              className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 hover:bg-amber-500/20 transition-all flex items-center gap-1"
            >
              <span>Flashcard Quiz</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Note Range Stepper Buttons */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>Select Staff Pitch (From Lowest Guitar Note Low E to High C):</span>
            <span className="font-bold text-amber-500">
              {activeNote.description}
            </span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            {LANDMARK_NOTES.map((note, idx) => (
              <button
                key={note.name}
                type="button"
                onClick={() => {
                  setSelectedNoteIndex(idx);
                  if (soundEnabled) {
                    playGuitarNote(0, note.soundingMidi - GUITAR_OPEN_STRINGS_MIDI[0], { volume: 0.45, duration: 1.5 });
                  }
                }}
                className={`px-2.5 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer border ${
                  selectedNoteIndex === idx
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md'
                    : note.step <= -2
                    ? 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20 hover:bg-amber-500/20'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-400'
                }`}
              >
                {note.name}
              </button>
            ))}
          </div>
        </div>

        {/* Accidental Sharp / Flat / Natural Selector */}
        <div className="flex items-center gap-3 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
          <span className="text-slate-500 font-semibold">Accidental:</span>
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-0.5 rounded-xl border border-slate-200 dark:border-slate-700">
            {(['flat', 'natural', 'sharp'] as const).map(acc => (
              <button
                key={acc}
                type="button"
                onClick={() => setActiveAccidental(acc)}
                className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer capitalize ${
                  activeAccidental === acc
                    ? 'bg-amber-500 text-slate-950 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {acc === 'flat' ? '♭ Flat' : acc === 'sharp' ? '♯ Sharp' : '♮ Natural'}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={playCurrentPitch}
            className="ml-auto px-3 py-1 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 font-bold transition-colors cursor-pointer flex items-center gap-1"
          >
            <span>🔊 Pluck Sound</span>
          </button>
        </div>
      </div>

      {/* Main Sandbox Workspace: Staff (Left) + Pitch Inspector (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left 6 Cols: Standard Notation Display */}
        <div className="lg:col-span-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col items-center">
          <div className="w-full flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Treble Staff (Guitar 8vb)
            </span>
            <span className="text-xs font-mono font-bold text-amber-500">
              Pitch Step: {activeNote.step > 0 ? `+${activeNote.step}` : activeNote.step}
            </span>
          </div>

          <div className="w-full max-w-[380px] aspect-[16/9] flex items-center justify-center bg-[#faf9f5] rounded-2xl border border-stone-300 p-3 shadow-inner overflow-hidden select-none mb-4">
            <svg viewBox={`0 0 ${staffWidth} ${staffHeight}`} className="w-full h-full">
              {/* 5 Staff Lines */}
              {[0, 1, 2, 3, 4].map((i) => {
                const y = line1Y - i * lineSpacing;
                return (
                  <line
                    key={i}
                    x1="25"
                    y1={y}
                    x2={staffWidth - 25}
                    y2={y}
                    stroke="#1e293b"
                    strokeWidth="1.6"
                  />
                );
              })}

              {/* Treble Clef */}
              <text x="40" y={line1Y - 10} fontSize="72" fontFamily="serif" fill="#0f172a">
                𝄞
              </text>
              <text x="60" y={line1Y + 16} fontSize="12" fontWeight="bold" fontFamily="sans-serif" fill="#475569">
                8vb
              </text>

              {/* Dynamic Ledger Lines */}
              {ledgerLines.map((y, idx) => (
                <line key={idx} x1={noteX - 22} y1={y} x2={noteX + 22} y2={y} stroke="#0f172a" strokeWidth="1.8" />
              ))}

              {/* Accidental */}
              {activeNote.accidental === 'sharp' && (
                <text x={noteX - 24} y={noteY + 7} fontSize="26" fontWeight="bold" fill="#d97706" textAnchor="middle">
                  ♯
                </text>
              )}
              {activeNote.accidental === 'flat' && (
                <text x={noteX - 22} y={noteY + 6} fontSize="26" fontWeight="bold" fill="#2563eb" textAnchor="middle">
                  ♭
                </text>
              )}

              {/* Note Head */}
              <ellipse
                cx={noteX}
                cy={noteY}
                rx="10"
                ry="7"
                fill="#0f172a"
                transform={`rotate(-22 ${noteX} ${noteY})`}
              />

              {/* Stem */}
              {activeNote.step < 4 ? (
                <line x1={noteX + 9} y1={noteY - 2} x2={noteX + 9} y2={noteY - 50} stroke="#0f172a" strokeWidth="1.8" />
              ) : (
                <line x1={noteX - 9} y1={noteY + 2} x2={noteX - 9} y2={noteY + 50} stroke="#0f172a" strokeWidth="1.8" />
              )}
            </svg>
          </div>

          {/* Ledger Rule Hint if Below Staff */}
          {activeNote.step <= -1 && (
            <div className="w-full p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-700 dark:text-amber-300 text-center font-medium">
              💡 Sub-Staff Bass Rule: {activeNote.step <= -7 ? 'Hangs below 3rd Ledger Line (Lowest Guitar Note)' : activeNote.step <= -4 ? '2nd Ledger Line Realm (Open A String)' : activeNote.step <= -2 ? '1st Ledger Line Realm (Middle C)' : 'Hangs below Staff Line 1 (Open D)'}
            </div>
          )}
        </div>

        {/* Right 6 Cols: Multi-Position Guitar Neck Intel */}
        <div className="lg:col-span-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h2 className="text-xl font-black text-slate-900 dark:text-white">
                Fretboard Locations ({fretMatches.length})
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                On guitar, this single sheet music note can be played at multiple frets:
              </p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-black text-amber-500">{activeNote.name}</span>
              <span className="block text-[11px] text-slate-400 font-mono">{activeNote.freq} Hz</span>
            </div>
          </div>

          {/* Location Cards */}
          <div className="space-y-2 max-h-[260px] overflow-y-auto pr-1">
            {fretMatches.map((loc, idx) => (
              <div
                key={idx}
                onClick={() => handleFretClick(loc.stringIndex, loc.fret)}
                className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                  loc.isOpenPosition
                    ? 'bg-emerald-500/10 border-emerald-500/30 hover:bg-emerald-500/20'
                    : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 hover:border-slate-400'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-xl font-black text-xs flex items-center justify-center shadow-xs ${
                    loc.isOpenPosition
                      ? 'bg-emerald-500 text-slate-950 font-black'
                      : 'bg-slate-800 text-white'
                  }`}>
                    {loc.fret === 0 ? 'Open' : `F${loc.fret}`}
                  </span>
                  <div>
                    <span className="font-bold text-xs text-slate-900 dark:text-white block">
                      String {loc.stringName} • Fret {loc.fret}
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400">
                      {loc.positionLabel}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {loc.isOpenPosition && (
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-bold text-[10px]">
                      Recommended
                    </span>
                  )}
                  <span className="text-xs text-slate-400">🔊 Pluck</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full 18-Fret Interactive Fretboard Visualizer */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xl space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>🎸 Full Guitar Neck Map</span>
              <span className="text-xs font-normal text-slate-500 dark:text-slate-400">
                (Click any fret to see its note on the staff)
              </span>
            </h3>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
              <span className="text-slate-600 dark:text-slate-300">Open Pos (0-3)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-cyan-500"></span>
              <span className="text-slate-600 dark:text-slate-300">Upper Neck</span>
            </span>
          </div>
        </div>

        {/* Fretboard SVG / Canvas */}
        <div className="w-full bg-[#1c1917] border-2 border-stone-700 rounded-2xl p-3 shadow-inner overflow-x-auto select-none">
          <div className="min-w-[720px] relative">
            {/* Fret Markers */}
            <div className="grid grid-cols-19 text-center text-[10px] font-bold text-stone-400 pb-1.5 border-b border-stone-800">
              <span className="text-amber-400">Open</span>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(f => (
                <span key={f} className={f === 3 || f === 5 || f === 7 || f === 9 || f === 12 || f === 15 || f === 17 ? 'text-amber-400 font-extrabold' : ''}>
                  {f}
                </span>
              ))}
            </div>

            {/* 6 Guitar Strings (High E String 5 down to Low E String 0) */}
            {[5, 4, 3, 2, 1, 0].map(strIdx => {
              const stringGauges = [1.5, 2.0, 2.5, 3.2, 4.0, 5.0];
              const gauge = stringGauges[5 - strIdx];

              return (
                <div key={strIdx} className="relative h-9 flex items-center">
                  <div className="absolute inset-x-0 bg-stone-300 shadow-xs pointer-events-none" style={{ height: `${gauge}px` }} />
                  <div className="grid grid-cols-19 w-full h-full relative z-10">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(fret => {
                      const isMatch = fretMatches.some(m => m.stringIndex === strIdx && m.fret === fret);
                      const isRecommended = isMatch && fret <= 3;

                      return (
                        <button
                          key={fret}
                          type="button"
                          onClick={() => handleFretClick(strIdx, fret)}
                          className={`h-full border-r border-stone-700/50 flex items-center justify-center transition-all cursor-pointer hover:bg-amber-500/20 relative ${
                            fret === 0 ? 'border-r-4 border-amber-600/80 bg-stone-900/60' : ''
                          }`}
                        >
                          {isMatch && (
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center font-black text-[10px] shadow-lg animate-pulse ${
                              isRecommended
                                ? 'bg-emerald-500 text-slate-950 ring-2 ring-emerald-300'
                                : 'bg-cyan-500 text-slate-950 ring-2 ring-cyan-300'
                            }`}>
                              {activeNote.naturalName}
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
      </div>
    </div>
  );
}
