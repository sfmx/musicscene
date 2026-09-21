'use client';

import React from 'react';
import { CircleKeyData, CIRCLE_OF_FIFTHS_DATA } from '@/lib/circleOfFifthsData';

interface CircleWheelSvgProps {
  selectedKey: CircleKeyData;
  onSelectKey: (key: CircleKeyData) => void;
  playingChordName?: string | null;
}

export default function CircleWheelSvg({
  selectedKey,
  onSelectKey,
  playingChordName,
}: CircleWheelSvgProps) {
  const size = 520;
  const center = size / 2;
  const outerRadius = 240;
  const middleRadius = 165;
  const innerRadius = 100;
  const coreRadius = 78;

  // 12 sectors, 30 deg each. Top (0 deg) = -90 in SVG coordinates
  const sectorAngle = 30;

  // Helper to convert polar to cartesian
  function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  }

  // Generate SVG arc path for an annulus sector
  function describeArcSector(
    x: number,
    y: number,
    innerR: number,
    outerR: number,
    startAngle: number,
    endAngle: number
  ) {
    const startOuter = polarToCartesian(x, y, outerR, endAngle);
    const endOuter = polarToCartesian(x, y, outerR, startAngle);
    const startInner = polarToCartesian(x, y, innerR, endAngle);
    const endInner = polarToCartesian(x, y, innerR, startAngle);

    return [
      'M', startOuter.x, startOuter.y,
      'A', outerR, outerR, 0, 0, 0, endOuter.x, endOuter.y,
      'L', endInner.x, endInner.y,
      'A', innerR, innerR, 0, 0, 1, startInner.x, startInner.y,
      'Z',
    ].join(' ');
  }

  // Calculate Roman numeral relationship relative to active key
  function getSectorRelationship(index: number) {
    const activeIdx = selectedKey.index;
    const diff = (index - activeIdx + 12) % 12;

    if (diff === 0) return 'I (Tonic)';
    if (diff === 1) return 'V (Dominant)';
    if (diff === 11) return 'IV (Subdominant)';
    if (diff === 2) return 'V/V (Sec. Dom)';
    if (diff === 10) return '♭VII (Rock)';
    return null;
  }

  function getInnerRelationship(index: number) {
    const activeIdx = selectedKey.index;
    const diff = (index - activeIdx + 12) % 12;

    if (diff === 0) return 'vi (Rel. Minor)';
    if (diff === 1) return 'iii';
    if (diff === 11) return 'ii';
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center select-none">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full max-w-[480px] h-auto drop-shadow-xl"
        role="img"
        aria-label="Interactive Circle of Fifths Diagram"
      >
        <defs>
          {/* Subtle radial background glow */}
          <radialGradient id="wheelCenterGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1e293b" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="1" />
          </radialGradient>
        </defs>

        {/* Base Background Circle */}
        <circle cx={center} cy={center} r={outerRadius + 8} className="fill-slate-900/60 stroke-slate-800" strokeWidth="2" />

        {/* 12 Outer Major Sectors */}
        {CIRCLE_OF_FIFTHS_DATA.map((item) => {
          const startAngle = item.index * sectorAngle - sectorAngle / 2;
          const endAngle = startAngle + sectorAngle;
          const isSelected = item.index === selectedKey.index;
          const relationship = getSectorRelationship(item.index);
          const isPlaying = playingChordName === item.key;

          // Color calculation
          let fillClass = 'fill-slate-800/80 hover:fill-slate-700/90';
          let strokeClass = 'stroke-slate-900';
          if (isSelected) {
            fillClass = 'fill-amber-500/90';
            strokeClass = 'stroke-amber-300';
          } else if (relationship === 'IV (Subdominant)' || relationship === 'V (Dominant)') {
            fillClass = 'fill-blue-600/50 hover:fill-blue-500/70';
            strokeClass = 'stroke-blue-400/60';
          } else if (relationship === 'V/V (Sec. Dom)' || relationship === '♭VII (Rock)') {
            fillClass = 'fill-purple-600/30 hover:fill-purple-500/50';
          }

          if (isPlaying) {
            fillClass = 'fill-emerald-500 animate-pulse';
            strokeClass = 'stroke-white';
          }

          // Label coordinates
          const textPos = polarToCartesian(center, center, (outerRadius + middleRadius) / 2, item.index * sectorAngle);
          const badgePos = polarToCartesian(center, center, outerRadius - 12, item.index * sectorAngle);

          return (
            <g
              key={`outer-${item.key}`}
              className="cursor-pointer transition-all duration-200"
              onClick={() => onSelectKey(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') onSelectKey(item);
              }}
            >
              <path
                d={describeArcSector(center, center, middleRadius, outerRadius, startAngle, endAngle)}
                className={`${fillClass} ${strokeClass} transition-colors duration-200`}
                strokeWidth={isSelected || isPlaying ? '3' : '1.5'}
              />
              <text
                x={textPos.x}
                y={textPos.y + 6}
                textAnchor="middle"
                className={`font-black tracking-wide ${
                  isSelected ? 'fill-slate-950 font-black text-xl' : 'fill-white text-lg'
                }`}
              >
                {item.key}
              </text>
              {/* Optional Roman relationship badge */}
              {relationship && (
                <text
                  x={badgePos.x}
                  y={badgePos.y}
                  textAnchor="middle"
                  className={`text-[9px] font-bold uppercase tracking-wider ${
                    isSelected ? 'fill-slate-900' : 'fill-amber-300'
                  }`}
                >
                  {relationship.split(' ')[0]}
                </text>
              )}
            </g>
          );
        })}

        {/* 12 Inner Relative Minor Sectors */}
        {CIRCLE_OF_FIFTHS_DATA.map((item) => {
          const startAngle = item.index * sectorAngle - sectorAngle / 2;
          const endAngle = startAngle + sectorAngle;
          const isSelectedMajor = item.index === selectedKey.index;
          const isPlaying = playingChordName === item.relativeMinor;
          const relationship = getInnerRelationship(item.index);

          let fillClass = 'fill-slate-900/90 hover:fill-slate-800';
          let strokeClass = 'stroke-slate-950';

          if (isSelectedMajor) {
            fillClass = 'fill-amber-600/70 hover:fill-amber-600/90';
            strokeClass = 'stroke-amber-400/80';
          } else if (relationship) {
            fillClass = 'fill-indigo-900/60 hover:fill-indigo-800/80';
            strokeClass = 'stroke-indigo-400/40';
          }

          if (isPlaying) {
            fillClass = 'fill-emerald-600 animate-pulse';
            strokeClass = 'stroke-white';
          }

          const textPos = polarToCartesian(center, center, (middleRadius + innerRadius) / 2, item.index * sectorAngle);

          return (
            <g
              key={`inner-${item.relativeMinor}`}
              className="cursor-pointer transition-all duration-200"
              onClick={() => onSelectKey(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') onSelectKey(item);
              }}
            >
              <path
                d={describeArcSector(center, center, innerRadius, middleRadius, startAngle, endAngle)}
                className={`${fillClass} ${strokeClass} transition-colors duration-200`}
                strokeWidth={isSelectedMajor || isPlaying ? '2.5' : '1'}
              />
              <text
                x={textPos.x}
                y={textPos.y + 4}
                textAnchor="middle"
                className={`text-xs font-semibold ${
                  isSelectedMajor ? 'fill-amber-100 font-bold' : 'fill-slate-300'
                }`}
              >
                {item.relativeMinor}
              </text>
            </g>
          );
        })}

        {/* Center Hub: Displays Active Key Information */}
        <circle cx={center} cy={center} r={coreRadius} className="fill-slate-950 stroke-amber-500/60" strokeWidth="2.5" />

        <text x={center} y={center - 24} textAnchor="middle" className="fill-amber-400 text-[10px] font-black uppercase tracking-widest">
          ACTIVE KEY
        </text>
        <text x={center} y={center + 6} textAnchor="middle" className="fill-white text-3xl font-black">
          {selectedKey.displayName}
        </text>
        <text x={center} y={center + 24} textAnchor="middle" className="fill-slate-400 text-xs font-medium">
          Rel: <tspan className="text-amber-300 font-bold">{selectedKey.relativeMinor}</tspan>
        </text>
        <text x={center} y={center + 42} textAnchor="middle" className="fill-emerald-400 text-[10px] font-semibold">
          {selectedKey.accidentalCount === 0
            ? '0 ♮ Natural'
            : `${Math.abs(selectedKey.accidentalCount)} ${selectedKey.accidentalType === 'sharps' ? '♯ Sharps' : '♭ Flats'}`}
        </text>
      </svg>

      {/* Legend & Quick Hint */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
          Tonic (I)
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-blue-600/70 inline-block"></span>
          Neighbors (IV & V)
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-amber-600/70 inline-block"></span>
          Relative Minor (vi)
        </span>
        <span className="text-slate-500 hidden sm:inline">|</span>
        <span className="text-slate-400 italic">Click any slice to explore its harmonic world</span>
      </div>
    </div>
  );
}

