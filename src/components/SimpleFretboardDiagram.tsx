"use client";

import React, { useState, useRef, useCallback } from 'react';
import { getChordShape, getActualFretNumbers } from '@/lib/chordVoicings';
import { playGuitarNote, strumChord } from '@/lib/guitarAudio';

export type FretboardProps = {
  chord?: string;
  className?: string;
  showSoundIcon?: boolean;
};

export default function SimpleFretboardDiagram({
  chord = 'C',
  className = '',
  showSoundIcon = true,
}: FretboardProps) {
  const [isStrumming, setIsStrumming] = useState<boolean>(false);
  const [activeString, setActiveString] = useState<number | null>(null);
  const activeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const chordData = getChordShape(chord);
  const { frets, fingers, baseFret = 1 } = chordData;
  const actualFrets = getActualFretNumbers(chordData);

  const fretboardWidth = 100;
  const fretboardHeight = 120;
  const fretSpacing = 24;
  const startX = 34; // Room on left for baseFret indicator
  const startY = 30;

  // Calculate string positions (Low E string 0 to High E string 5)
  const stringPositions = [...Array(6)].map((_, i) =>
    startX + (i * fretboardWidth) / 5
  );

  const handleStrum = useCallback((e?: React.MouseEvent | React.KeyboardEvent) => {
    if (e) e.stopPropagation();

    setIsStrumming(true);
    strumChord(actualFrets, {
      speedMs: 18,
      volume: 0.35,
      onStringPlucked: (sIdx) => {
        setActiveString(sIdx);
      },
    });

    if (activeTimerRef.current) clearTimeout(activeTimerRef.current);
    activeTimerRef.current = setTimeout(() => {
      setIsStrumming(false);
      setActiveString(null);
    }, 450);
  }, [actualFrets]);

  const handleNoteClick = (stringIndex: number, actualFret: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (actualFret < 0) return;

    setActiveString(stringIndex);
    playGuitarNote(stringIndex, actualFret, { volume: 0.45, duration: 1.5 });

    if (activeTimerRef.current) clearTimeout(activeTimerRef.current);
    activeTimerRef.current = setTimeout(() => {
      setActiveString(null);
    }, 350);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`Interactive guitar chord diagram for ${chord}. Click to strum.`}
      onClick={handleStrum}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          handleStrum(e);
        }
      }}
      className={`inline-block relative cursor-pointer select-none group focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-xl transition-transform active:scale-95 ${className}`}
      title="Click to strum chord"
    >
      <svg
        width={170}
        height={160}
        className="overflow-visible"
        style={{ background: 'transparent' }}
      >
        {/* Base fret indicator (e.g., '4fr' for barre chords) */}
        {baseFret > 1 && (
          <text
            x={startX - 7}
            y={startY + 17}
            fontSize={11}
            fontWeight="bold"
            textAnchor="end"
            className="fill-amber-600 dark:fill-amber-400 font-mono tracking-tighter"
          >
            {baseFret}fr
          </text>
        )}

        {/* Fretboard background */}
        <rect
          x={startX}
          y={startY}
          width={fretboardWidth}
          height={fretboardHeight}
          className={`fill-slate-50 dark:fill-slate-900 transition-colors ${
            isStrumming
              ? 'stroke-amber-400 dark:stroke-cyan-400'
              : 'stroke-slate-300 dark:stroke-slate-700'
          }`}
          strokeWidth={isStrumming ? 2.5 : 2}
        />

        {/* Fret lines (horizontal) */}
        {[...Array(5)].map((_, fret) => (
          <line
            key={fret}
            x1={startX}
            y1={startY + (fret + 1) * fretSpacing}
            x2={startX + fretboardWidth}
            y2={startY + (fret + 1) * fretSpacing}
            className="stroke-slate-300 dark:stroke-slate-700"
            strokeWidth={1.5}
          />
        ))}

        {/* String lines (vertical) */}
        {stringPositions.map((x, string) => {
          const isActive = activeString === string;
          return (
            <line
              key={string}
              x1={x}
              y1={startY}
              x2={x}
              y2={startY + fretboardHeight}
              className={`transition-all duration-75 ${
                isActive
                  ? 'stroke-amber-500 dark:stroke-cyan-400'
                  : 'stroke-slate-400 dark:stroke-slate-600'
              }`}
              strokeWidth={isActive ? 2.5 : 1}
            />
          );
        })}

        {/* Nut (thick top line) or thin fret wire if baseFret > 1 */}
        <line
          x1={startX}
          y1={startY}
          x2={startX + fretboardWidth}
          y2={startY}
          className={
            baseFret > 1
              ? 'stroke-slate-400 dark:stroke-slate-600'
              : 'stroke-slate-900 dark:stroke-slate-200'
          }
          strokeWidth={baseFret > 1 ? 1.5 : 4}
        />

        {/* X/O markers at top */}
        {frets.map((fret, string) => {
          if (fret === 0 || fret === -1) {
            const isOpen = fret === 0;
            const isActive = activeString === string;
            return (
              <text
                key={`marker-${string}`}
                x={stringPositions[string]}
                y={startY - 8}
                fontSize={14}
                onClick={(e) => handleNoteClick(string, isOpen ? 0 : -1, e)}
                className={`font-bold select-none cursor-pointer transition-transform hover:scale-125 ${
                  isOpen
                    ? isActive
                      ? 'fill-amber-500 dark:fill-cyan-300'
                      : 'fill-blue-600 dark:fill-cyan-400'
                    : 'fill-red-600 dark:fill-rose-400'
                }`}
                fontWeight="bold"
                textAnchor="middle"
              >
                {isOpen ? 'O' : 'X'}
              </text>
            );
          }
          return null;
        })}

        {/* Finger positions */}
        {frets.map((fret, string) => {
          if (fret > 0) {
            const fingerNumber = fingers?.[string] || fret;
            const actualFret = actualFrets[string];
            const isActive = activeString === string;

            return (
              <g
                key={`finger-${string}`}
                className="cursor-pointer"
                onClick={(e) => handleNoteClick(string, actualFret, e)}
              >
                <circle
                  cx={stringPositions[string]}
                  cy={startY + (fret - 0.5) * fretSpacing}
                  r={isActive ? 9.5 : 8}
                  className={`transition-all duration-100 stroke-white dark:stroke-slate-900 ${
                    isActive
                      ? 'fill-amber-500 dark:fill-cyan-400 scale-110'
                      : 'fill-blue-600 dark:fill-cyan-500 hover:fill-blue-500 dark:hover:fill-cyan-400'
                  }`}
                  strokeWidth={1.5}
                />
                <text
                  x={stringPositions[string]}
                  y={startY + (fret - 0.5) * fretSpacing + 4}
                  fontSize={11}
                  className="fill-white dark:fill-slate-950 font-black select-none pointer-events-none"
                  textAnchor="middle"
                >
                  {fingerNumber}
                </text>
              </g>
            );
          }
          return null;
        })}

        {/* Interactive sound indicator badge */}
        {showSoundIcon && (
          <g
            className={`transition-all duration-200 transform ${
              isStrumming
                ? 'scale-110 opacity-100'
                : 'opacity-50 group-hover:opacity-100 hover:scale-110'
            }`}
            transform="translate(144, 10)"
          >
            <circle
              cx={9}
              cy={9}
              r={9}
              className={`transition-colors ${
                isStrumming
                  ? 'fill-amber-500/20 stroke-amber-500 dark:fill-cyan-500/20 dark:stroke-cyan-400'
                  : 'fill-slate-100 dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-700'
              }`}
              strokeWidth={1}
            />
            {/* Speaker icon */}
            <path
              d="M4.5 7.5v3h2l2.5 2.2V5.3L6.5 7.5h-2z"
              className={`${
                isStrumming
                  ? 'fill-amber-600 dark:fill-cyan-300'
                  : 'fill-slate-600 dark:fill-slate-400'
              }`}
            />
            {/* Sound wave */}
            <path
              d="M10.5 6.5c.8.8.8 3.2 0 4M12 5c1.7 1.7 1.7 5.3 0 7"
              fill="none"
              strokeWidth={1}
              strokeLinecap="round"
              className={`${
                isStrumming
                  ? 'stroke-amber-600 dark:stroke-cyan-300 animate-pulse'
                  : 'stroke-slate-500 dark:stroke-slate-400'
              }`}
            />
          </g>
        )}
      </svg>
    </div>
  );
}
