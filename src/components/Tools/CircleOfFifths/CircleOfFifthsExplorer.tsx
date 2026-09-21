'use client';

import React, { useState } from 'react';
import { CircleKeyData, CIRCLE_OF_FIFTHS_DATA, getCircleKey } from '@/lib/circleOfFifthsData';
import CircleWheelSvg from './CircleWheelSvg';
import DiatonicChordsPanel from './DiatonicChordsPanel';
import ModulationGuide from './ModulationGuide';
import ModalInterchangePanel from './ModalInterchangePanel';

export default function CircleOfFifthsExplorer() {
  const [selectedKey, setSelectedKey] = useState<CircleKeyData>(CIRCLE_OF_FIFTHS_DATA[0]); // C Major default
  const [activeTab, setActiveTab] = useState<'diatonic' | 'modulations' | 'borrowed'>('diatonic');
  const [playingChordName, setPlayingChordName] = useState<string | null>(null);

  function handleSelectKey(key: CircleKeyData) {
    setSelectedKey(key);
  }

  function handleChordPlayed(chordName: string) {
    setPlayingChordName(chordName);
    setTimeout(() => {
      setPlayingChordName((prev) => (prev === chordName ? null : prev));
    }, 1000);
  }

  function handlePrevKey() {
    const prevIdx = (selectedKey.index - 1 + 12) % 12;
    setSelectedKey(CIRCLE_OF_FIFTHS_DATA[prevIdx]);
  }

  function handleNextKey() {
    const nextIdx = (selectedKey.index + 1) % 12;
    setSelectedKey(CIRCLE_OF_FIFTHS_DATA[nextIdx]);
  }

  return (
    <div className="space-y-8">
      {/* Top Controller Bar */}
      <div className="p-4 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Quick Stepper */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <button
            onClick={handlePrevKey}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition cursor-pointer flex items-center gap-1.5 text-xs font-bold"
            title="Move counter-clockwise (Add flat / remove sharp)"
          >
            <span>◀ -1 Fifth</span>
          </button>

          <div className="text-center px-3">
            <span className="text-[10px] uppercase font-black tracking-widest text-amber-500 block">
              Current Key Center
            </span>
            <span className="text-xl sm:text-2xl font-black text-white">
              {selectedKey.displayName}
            </span>
          </div>

          <button
            onClick={handleNextKey}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition cursor-pointer flex items-center gap-1.5 text-xs font-bold"
            title="Move clockwise (Add sharp / remove flat)"
          >
            <span>+1 Fifth ▶</span>
          </button>
        </div>

        {/* 12 Key Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {CIRCLE_OF_FIFTHS_DATA.map((k) => {
            const isSelected = k.index === selectedKey.index;
            return (
              <button
                key={k.key}
                onClick={() => handleSelectKey(k)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition cursor-pointer ${
                  isSelected
                    ? 'bg-amber-500 text-slate-950 font-black shadow-md scale-105'
                    : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700/60'
                }`}
              >
                {k.key}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive SVG Wheel (5 cols on lg) */}
        <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 shadow-2xl flex flex-col items-center justify-center backdrop-blur-md">
          <CircleWheelSvg
            selectedKey={selectedKey}
            onSelectKey={handleSelectKey}
            playingChordName={playingChordName}
          />
        </div>

        {/* Right Column: Harmonic Explorer Panels (7 cols on lg) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Tab Navigation */}
          <div className="flex border-b border-slate-800 bg-slate-900/40 p-1.5 rounded-2xl gap-1">
            <button
              onClick={() => setActiveTab('diatonic')}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTab === 'diatonic'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <span>🎸 Diatonic Chords</span>
            </button>

            <button
              onClick={() => setActiveTab('modulations')}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTab === 'modulations'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <span>🔄 Key Modulations</span>
            </button>

            <button
              onClick={() => setActiveTab('borrowed')}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTab === 'borrowed'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <span>🎭 Borrowed Chords</span>
            </button>
          </div>

          {/* Tab Contents */}
          {activeTab === 'diatonic' && (
            <DiatonicChordsPanel
              selectedKey={selectedKey}
              onChordPlayed={handleChordPlayed}
            />
          )}

          {activeTab === 'modulations' && (
            <ModulationGuide
              selectedKey={selectedKey}
              onNavigateToKey={(targetKey) => {
                const found = getCircleKey(targetKey);
                setSelectedKey(found);
              }}
            />
          )}

          {activeTab === 'borrowed' && (
            <ModalInterchangePanel selectedKey={selectedKey} />
          )}
        </div>
      </div>
    </div>
  );
}

