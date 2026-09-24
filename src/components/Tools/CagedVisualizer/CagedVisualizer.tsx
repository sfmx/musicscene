'use client';

import React, { useState } from 'react';
import {
  CagedShapeLetter,
  getCagedShapeData,
} from '@/lib/cagedData';
import { strumChord, playGuitarNote } from '@/lib/guitarAudio';
import CagedShapeSelector from './CagedShapeSelector';
import CagedFretboard from './CagedFretboard';
import CagedTriadInspector from './CagedTriadInspector';

export default function CagedVisualizer() {
  const [currentRoot, setCurrentRoot] = useState<string>('C');
  const [currentShape, setCurrentShape] = useState<CagedShapeLetter>('C');
  const [viewMode, setViewMode] = useState<'chord' | 'pentatonic' | 'major'>('chord');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const cagedData = getCagedShapeData(currentShape, currentRoot);

  // Strum the full CAGED chord shape
  function handleStrumChord() {
    if (isPlayingAudio) return;
    setIsPlayingAudio(true);
    strumChord(cagedData.chordFrets, { speedMs: 18, volume: 0.36 });
    setTimeout(() => setIsPlayingAudio(false), 900);
  }

  // Arpeggiate the full chord shape
  function handleArpeggiateChord() {
    if (isPlayingAudio) return;
    setIsPlayingAudio(true);

    const activePlucks: { sIdx: number; fret: number }[] = [];
    cagedData.chordFrets.forEach((fret, sIdx) => {
      if (fret >= 0) activePlucks.push({ sIdx, fret });
    });

    activePlucks.forEach((p, idx) => {
      setTimeout(() => {
        playGuitarNote(p.sIdx, p.fret, { duration: 1.6, volume: 0.35 });
        if (idx === activePlucks.length - 1) {
          setTimeout(() => setIsPlayingAudio(false), 800);
        }
      }, idx * 180);
    });
  }

  // Play ascending scale notes in the active box
  function handlePlayScale() {
    if (isPlayingAudio) return;
    setIsPlayingAudio(true);

    // Filter notes depending on viewMode, sort by pitch (string 0 ascending, or fret ascending)
    const activeNotes = cagedData.notes
      .filter((n) => (viewMode === 'major' ? n.isDiatonic : n.isPentatonic))
      .sort((a, b) => a.stringIndex - b.stringIndex || a.fret - b.fret);

    activeNotes.forEach((n, idx) => {
      setTimeout(() => {
        playGuitarNote(n.stringIndex, n.fret, { duration: 1.2, volume: 0.32 });
        if (idx === activeNotes.length - 1) {
          setTimeout(() => setIsPlayingAudio(false), 700);
        }
      }, idx * 160);
    });
  }

  return (
    <div className="space-y-8">
      {/* Top Controller: Root, Shape & View Mode */}
      <CagedShapeSelector
        currentRoot={currentRoot}
        onSelectRoot={setCurrentRoot}
        currentShape={currentShape}
        onSelectShape={setCurrentShape}
        viewMode={viewMode}
        onSelectViewMode={setViewMode}
      />

      {/* Main Fretboard Stage */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-2">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>🎸 Fretboard Map: {cagedData.name}</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Pentatonic Box {cagedData.pentatonicBoxNumber}
              </span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Primary root located on string {cagedData.rootStringName} ({cagedData.rootStringIndex + 1}th string).
            </p>
          </div>

          {/* Quick Play Controls */}
          <div className="flex items-center gap-2">
            <button
              disabled={isPlayingAudio}
              onClick={handleStrumChord}
              className="py-2 px-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 text-xs font-black transition cursor-pointer flex items-center gap-1.5 shadow-md"
            >
              <span>▶ Strum Chord</span>
            </button>
            <button
              disabled={isPlayingAudio}
              onClick={handleArpeggiateChord}
              className="py-2 px-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-white text-xs font-bold border border-slate-700 transition cursor-pointer flex items-center gap-1.5"
            >
              <span>🎶 Arpeggiate</span>
            </button>
            <button
              disabled={isPlayingAudio}
              onClick={handlePlayScale}
              className="py-2 px-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white text-xs font-bold transition cursor-pointer flex items-center gap-1.5"
            >
              <span>⚡ Play Scale</span>
            </button>
          </div>
        </div>

        {/* Interactive Fretboard */}
        <CagedFretboard cagedData={cagedData} viewMode={viewMode} />
      </div>

      {/* Triad Inspector & Practical Application Guide */}
      <CagedTriadInspector cagedData={cagedData} />
    </div>
  );
}

