'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// Acoustic guitar chord voicings (MIDI notes played across strings)
const CHORD_VOICINGS: Record<string, { name: string; midis: number[]; fretDiagram: string; category: string }> = {
  C: { name: 'C Major', midis: [48, 52, 55, 60, 64], fretDiagram: 'x-3-2-0-1-0', category: 'Major' },
  G: { name: 'G Major', midis: [43, 47, 50, 55, 59, 67], fretDiagram: '3-2-0-0-0-3', category: 'Major' },
  Am: { name: 'A Minor', midis: [45, 52, 57, 60, 64], fretDiagram: 'x-0-2-2-1-0', category: 'Minor' },
  F: { name: 'F Major', midis: [41, 48, 53, 57, 60, 65], fretDiagram: '1-3-3-2-1-1', category: 'Major' },
  Em: { name: 'E Minor', midis: [40, 47, 52, 55, 59, 64], fretDiagram: '0-2-2-0-0-0', category: 'Minor' },
  Dm: { name: 'D Minor', midis: [50, 57, 62, 65], fretDiagram: 'x-x-0-2-3-1', category: 'Minor' },
  D: { name: 'D Major', midis: [50, 57, 62, 66], fretDiagram: 'x-x-0-2-3-2', category: 'Major' },
  E: { name: 'E Major', midis: [40, 47, 52, 56, 59, 64], fretDiagram: '0-2-2-1-0-0', category: 'Major' },
  A: { name: 'A Major', midis: [45, 52, 57, 61, 64], fretDiagram: 'x-0-2-2-2-0', category: 'Major' },
  E7: { name: 'E Dominant 7th', midis: [40, 47, 50, 56, 59, 64], fretDiagram: '0-2-0-1-0-0', category: '7th' },
  A7: { name: 'A Dominant 7th', midis: [45, 52, 55, 61, 64], fretDiagram: 'x-0-2-0-2-0', category: '7th' },
  B7: { name: 'B Dominant 7th', midis: [47, 51, 57, 63, 66], fretDiagram: 'x-2-1-2-0-2', category: '7th' },
  D7: { name: 'D Dominant 7th', midis: [50, 57, 60, 66], fretDiagram: 'x-x-0-2-1-2', category: '7th' },
  G7: { name: 'G Dominant 7th', midis: [43, 47, 50, 55, 59, 65], fretDiagram: '3-2-0-0-0-1', category: '7th' },
  Cmaj7: { name: 'C Major 7th', midis: [48, 52, 55, 59, 64], fretDiagram: 'x-3-2-0-0-0', category: 'Maj7' },
  Fmaj7: { name: 'F Major 7th', midis: [41, 48, 53, 57, 60, 64], fretDiagram: '1-3-3-2-1-0', category: 'Maj7' },
  Am7: { name: 'A Minor 7th', midis: [45, 52, 55, 60, 64], fretDiagram: 'x-0-2-0-1-0', category: 'm7' },
  Dm7: { name: 'D Minor 7th', midis: [50, 57, 60, 65], fretDiagram: 'x-x-0-2-1-1', category: 'm7' },
  Em7: { name: 'E Minor 7th', midis: [40, 47, 50, 55, 59, 64], fretDiagram: '0-2-0-0-0-0', category: 'm7' },
  Bm: { name: 'B Minor', midis: [47, 54, 59, 62, 66], fretDiagram: 'x-2-4-4-3-2', category: 'Minor' },
};

export interface JamPreset {
  id: string;
  name: string;
  genre: string;
  key: string;
  tempo: number;
  timeSignature: '4/4' | '3/4';
  chords: string[];
  suggestedScale: string;
  scaleLink: string;
  soloingTips: string;
}

const PRESETS: JamPreset[] = [
  {
    id: 'pop-classic',
    name: 'The 4-Chord Hitmaker (I - V - vi - IV)',
    genre: 'Pop / Rock',
    key: 'C Major',
    tempo: 95,
    timeSignature: '4/4',
    chords: ['C', 'G', 'Am', 'F'],
    suggestedScale: 'C Major Pentatonic or A Minor Pentatonic',
    scaleLink: '/lessons/theory/scales/pentatonic/',
    soloingTips: 'The ultimate pop loop. Focus on resolving your phrases to C over the C chord and A over the Am chord.',
  },
  {
    id: 'blues-12-bar-e',
    name: '12-Bar Texas Blues in E',
    genre: 'Blues',
    key: 'E Blues',
    tempo: 105,
    timeSignature: '4/4',
    chords: ['E7', 'E7', 'E7', 'E7', 'A7', 'A7', 'E7', 'E7', 'B7', 'A7', 'E7', 'B7'],
    suggestedScale: 'E Minor Blues Scale & E Major Pentatonic',
    scaleLink: '/lessons/theory/scales/blues/',
    soloingTips: 'Bend the minor 3rd (G) up slightly toward the major 3rd (G#) on the E7 chord for that classic Stevie Ray Vaughan bite.',
  },
  {
    id: 'blues-12-bar-a',
    name: 'Chicago Shuffle Blues in A',
    genre: 'Blues',
    key: 'A Blues',
    tempo: 110,
    timeSignature: '4/4',
    chords: ['A7', 'A7', 'A7', 'A7', 'D7', 'D7', 'A7', 'A7', 'E7', 'D7', 'A7', 'E7'],
    suggestedScale: 'A Minor Pentatonic (Fret 5) + Blues Note (Eb)',
    scaleLink: '/lessons/theory/scales/blues/',
    soloingTips: 'Mix the major 3rd (C#) into your box 1 pentatonic pattern when playing over the root A7 chord.',
  },
  {
    id: 'neo-soul-251',
    name: 'Smooth Neo-Soul / Jazz ii - V - I',
    genre: 'Neo-Soul / R&B',
    key: 'C Major',
    tempo: 82,
    timeSignature: '4/4',
    chords: ['Dm7', 'G7', 'Cmaj7', 'Am7'],
    suggestedScale: 'D Dorian Mode & C Major Pentatonic',
    scaleLink: '/lessons/theory/modes/dorian/',
    soloingTips: 'Target the 7th of each chord on the downbeat: C on Dm7, F on G7, and B on Cmaj7 for silky smooth jazz voice-leading.',
  },
  {
    id: 'andalusian-cadence',
    name: 'Andalusian Flamenco Rock (i - VII - VI - V)',
    genre: 'Flamenco / Metal / Rock',
    key: 'A Minor',
    tempo: 115,
    timeSignature: '4/4',
    chords: ['Am', 'G', 'F', 'E7'],
    suggestedScale: 'A Harmonic Minor & A Phrygian Dominant',
    scaleLink: '/lessons/theory/modes/phrygian/',
    soloingTips: 'When the chord hits E7, switch from standard minor to the G# note in A Harmonic Minor to nail the Spanish tension.',
  },
  {
    id: 'indie-rock',
    name: 'Emotional Indie Rock (vi - IV - I - V)',
    genre: 'Indie / Alt-Rock',
    key: 'C Major',
    tempo: 100,
    timeSignature: '4/4',
    chords: ['Am', 'F', 'C', 'G'],
    suggestedScale: 'A Minor Pentatonic / C Major Scale',
    scaleLink: '/lessons/theory/scales/pentatonic/',
    soloingTips: 'Use ringing open high E and B strings as pedal tones across all 4 chords for a massive, spacious atmospheric vibe.',
  },
  {
    id: 'dorian-groove',
    name: 'Santana / Pink Floyd Dorian Jam (i - IV)',
    genre: 'Classic Rock',
    key: 'D Dorian',
    tempo: 90,
    timeSignature: '4/4',
    chords: ['Dm7', 'G7', 'Dm7', 'G7'],
    suggestedScale: 'D Dorian Mode (D E F G A B C)',
    scaleLink: '/lessons/theory/modes/dorian/',
    soloingTips: 'The secret is the B natural note on the G7 chord against the D minor foundation (Oye Como Va / Breathe style).',
  },
  {
    id: 'country-ballad',
    name: 'Nashville Country 3-Chord (I - IV - V)',
    genre: 'Country / Folk',
    key: 'G Major',
    tempo: 88,
    timeSignature: '4/4',
    chords: ['G', 'C', 'D', 'G'],
    suggestedScale: 'G Major Pentatonic (G A B D E)',
    scaleLink: '/lessons/theory/scales/pentatonic/',
    soloingTips: 'Incorporate double-stops and pedal steel style oblique bends on the B and G strings.',
  },
];

export default function ProgressionJammer() {
  const [selectedPresetId, setSelectedPresetId] = useState<string>('pop-classic');
  const [currentPreset, setCurrentPreset] = useState<JamPreset>(PRESETS[0]);
  const [tempo, setTempo] = useState<number>(PRESETS[0].tempo);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentBarIndex, setCurrentBarIndex] = useState<number>(0);
  const [currentBeat, setCurrentBeat] = useState<number>(1);
  const [metronomeEnabled, setMetronomeEnabled] = useState<boolean>(true);
  const [strumStyle, setStrumStyle] = useState<'downstrum' | 'arpeggio' | 'rhythm'>('downstrum');

  // Audio refs
  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerIdRef = useRef<NodeJS.Timeout | null>(null);
  const stateRef = useRef({
    isPlaying: false,
    barIndex: 0,
    beat: 1,
    tempo: PRESETS[0].tempo,
    chords: PRESETS[0].chords,
    metronome: true,
    style: 'downstrum',
  });

  // Keep stateRef synced
  useEffect(() => {
    stateRef.current.tempo = tempo;
    stateRef.current.chords = currentPreset.chords;
    stateRef.current.metronome = metronomeEnabled;
    stateRef.current.style = strumStyle;
  }, [tempo, currentPreset, metronomeEnabled, strumStyle]);

  const getAudioContext = () => {
    if (typeof window === 'undefined') return null;
    if (!audioCtxRef.current) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        audioCtxRef.current = new AudioContextClass();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  const playClick = (isAccent: boolean) => {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(isAccent ? 1200 : 800, ctx.currentTime);

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(isAccent ? 0.18 : 0.08, ctx.currentTime + 0.005);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch (e) {
      // Ignore
    }
  };

  const playChordNote = (midi: number, offsetSec: number = 0, duration: number = 1.2) => {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const startTime = ctx.currentTime + offsetSec;
      const freq = 440 * Math.pow(2, (midi - 69) / 12);

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, startTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(2200, startTime);
      filter.frequency.exponentialRampToValueAtTime(300, startTime + duration);

      gain.gain.setValueAtTime(0.001, startTime);
      gain.gain.linearRampToValueAtTime(0.12, startTime + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + duration);
    } catch (e) {
      // Ignore
    }
  };

  const playChordStrum = (chordSymbol: string, beatNum: number) => {
    const voicing = CHORD_VOICINGS[chordSymbol];
    if (!voicing) return;

    const notes = voicing.midis;
    const style = stateRef.current.style;

    if (style === 'arpeggio') {
      // Pick one note per beat
      const noteIndex = (beatNum - 1) % notes.length;
      playChordNote(notes[noteIndex], 0, 0.8);
    } else if (style === 'rhythm') {
      // Play on beat 1 and beat 3 full, lighter on 2 and 4
      const isDownbeat = beatNum === 1 || beatNum === 3;
      notes.forEach((midi, i) => {
        playChordNote(midi, i * 0.012, isDownbeat ? 1.0 : 0.4);
      });
    } else {
      // Standard downstrum: full ring on beat 1, subtle pulse on beat 3
      if (beatNum === 1) {
        notes.forEach((midi, i) => {
          playChordNote(midi, i * 0.015, 1.8);
        });
      } else if (beatNum === 3) {
        notes.slice(1).forEach((midi, i) => {
          playChordNote(midi, i * 0.012, 0.9);
        });
      }
    }
  };

  const startPlayback = () => {
    getAudioContext();
    setIsPlaying(true);
    stateRef.current.isPlaying = true;
    stateRef.current.barIndex = 0;
    stateRef.current.beat = 1;
    setCurrentBarIndex(0);
    setCurrentBeat(1);

    tick();
  };

  const stopPlayback = () => {
    setIsPlaying(false);
    stateRef.current.isPlaying = false;
    if (timerIdRef.current) {
      clearTimeout(timerIdRef.current);
      timerIdRef.current = null;
    }
  };

  const tick = () => {
    if (!stateRef.current.isPlaying) return;

    const currentB = stateRef.current.beat;
    const currentBIdx = stateRef.current.barIndex;
    const currentChords = stateRef.current.chords;
    const chord = currentChords[currentBIdx % currentChords.length];

    // Play Metronome
    if (stateRef.current.metronome) {
      playClick(currentB === 1);
    }

    // Play Chord sound
    playChordStrum(chord, currentB);

    // Update React states for visual highlights
    setCurrentBarIndex(currentBIdx);
    setCurrentBeat(currentB);

    // Calculate next beat
    let nextBeat = currentB + 1;
    let nextBar = currentBIdx;

    if (nextBeat > 4) {
      nextBeat = 1;
      nextBar = (currentBIdx + 1) % currentChords.length;
    }

    stateRef.current.beat = nextBeat;
    stateRef.current.barIndex = nextBar;

    // Schedule next tick based on BPM (60,000 ms / BPM)
    const beatIntervalMs = (60 / stateRef.current.tempo) * 1000;
    timerIdRef.current = setTimeout(tick, beatIntervalMs);
  };

  // Preset switch handler
  const handleSelectPreset = (preset: JamPreset) => {
    const wasPlaying = isPlaying;
    if (wasPlaying) stopPlayback();

    setSelectedPresetId(preset.id);
    setCurrentPreset(preset);
    setTempo(preset.tempo);
    setCurrentBarIndex(0);
    setCurrentBeat(1);

    stateRef.current.chords = preset.chords;
    stateRef.current.tempo = preset.tempo;
    stateRef.current.barIndex = 0;
    stateRef.current.beat = 1;
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (timerIdRef.current) {
        clearTimeout(timerIdRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                Interactive Practice Utility
              </span>
              <span className="text-xs text-slate-400">Audio Loop Backing Engine</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Guitar Chord Progression Jam Player
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-1 max-w-2xl">
              Loop essential chord progressions across Blues, Rock, Pop, and Jazz. Practice soloing with real-time scale guidance.
            </p>
          </div>

          {/* Master Transport Play/Stop Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={isPlaying ? stopPlayback : startPlayback}
              className={'px-6 py-3.5 rounded-xl font-black text-base shadow-lg transition-all flex items-center gap-2.5 cursor-pointer ' +
                (isPlaying
                  ? 'bg-red-600 hover:bg-red-700 text-white ring-4 ring-red-600/30'
                  : 'bg-emerald-500 hover:bg-emerald-600 text-slate-950 ring-4 ring-emerald-500/30')}
            >
              <span className="text-lg">{isPlaying ? '⏹ Pause Jam' : '▶ Start Jamming'}</span>
            </button>
          </div>
        </div>

        {/* Preset Selector Badges */}
        <div className="mt-6 pt-4 border-t border-slate-800">
          <div className="text-xs uppercase font-bold text-slate-400 mb-2.5">
            Choose Progression Style / Preset:
          </div>
          <div className="flex flex-wrap gap-2">
            {PRESETS.map((preset) => {
              const isSelected = selectedPresetId === preset.id;
              return (
                <button
                  key={preset.id}
                  onClick={() => handleSelectPreset(preset)}
                  className={'px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ' +
                    (isSelected
                      ? 'bg-blue-600 text-white border-blue-500 shadow-md'
                      : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-800 hover:text-white')}
                >
                  {preset.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Controls Panel */}
      <div className="p-4 sm:p-6 lg:p-8 space-y-6">
        {/* Playback Settings & Tempo */}
        <div className="bg-slate-50 p-4 sm:p-6 rounded-xl border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Tempo Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700 uppercase tracking-wider">
              <span>Tempo</span>
              <span className="text-blue-600 text-sm font-black">{tempo} BPM</span>
            </div>
            <input
              type="range"
              min={50}
              max={180}
              value={tempo}
              onChange={(e) => setTempo(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>50 (Ballad)</span>
              <span>100 (Medium)</span>
              <span>180 (Fast)</span>
            </div>
          </div>

          {/* Strum Style Selection */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Guitar Playing Style
            </div>
            <div className="grid grid-cols-3 gap-1.5 bg-white p-1 rounded-lg border border-slate-300">
              <button
                onClick={() => setStrumStyle('downstrum')}
                className={'py-1.5 rounded text-xs font-semibold ' +
                  (strumStyle === 'downstrum' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:text-slate-900')}
              >
                Downstrum
              </button>
              <button
                onClick={() => setStrumStyle('rhythm')}
                className={'py-1.5 rounded text-xs font-semibold ' +
                  (strumStyle === 'rhythm' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:text-slate-900')}
              >
                Groove
              </button>
              <button
                onClick={() => setStrumStyle('arpeggio')}
                className={'py-1.5 rounded text-xs font-semibold ' +
                  (strumStyle === 'arpeggio' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:text-slate-900')}
              >
                Fingerpick
              </button>
            </div>
          </div>

          {/* Metronome & Beat Counter */}
          <div className="flex items-center justify-between bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
            <div>
              <div className="text-xs font-bold text-slate-600 uppercase">Metronome Click</div>
              <button
                onClick={() => setMetronomeEnabled(!metronomeEnabled)}
                className={'text-xs font-semibold px-2 py-0.5 rounded mt-1 ' +
                  (metronomeEnabled ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-500')}
              >
                {metronomeEnabled ? 'Click ON' : 'Muted'}
              </button>
            </div>

            <div className="text-right">
              <div className="text-[10px] font-bold text-slate-400 uppercase">Active Beat</div>
              <div className="flex items-center gap-1.5 mt-1">
                {[1, 2, 3, 4].map((beatNum) => (
                  <span
                    key={beatNum}
                    className={'w-6 h-6 rounded-full flex items-center justify-center text-xs font-black transition-all ' +
                      (isPlaying && currentBeat === beatNum
                        ? 'bg-blue-600 text-white scale-110 shadow-md ring-2 ring-blue-300'
                        : 'bg-slate-100 text-slate-400 border border-slate-200')}
                  >
                    {beatNum}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Active Chords Visual Progression Sequence */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Chord Progression Loop ({currentPreset.chords.length} Bars - Key: {currentPreset.key})
            </span>
            <span className="text-xs text-slate-500">
              Bar {currentBarIndex + 1} of {currentPreset.chords.length}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
            {currentPreset.chords.map((chordName, idx) => {
              const isActive = isPlaying && currentBarIndex === idx;
              const voicing = CHORD_VOICINGS[chordName];

              return (
                <div
                  key={idx}
                  className={'relative p-5 rounded-2xl border-2 transition-all flex flex-col justify-between ' +
                    (isActive
                      ? 'bg-blue-50/80 border-blue-600 shadow-xl ring-4 ring-blue-500/20 scale-[1.02]'
                      : 'bg-white border-slate-200 shadow-sm hover:border-slate-300')}
                >
                  {/* Active Bar Badge */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase font-bold text-slate-400">
                      Bar #{idx + 1}
                    </span>
                    {isActive && (
                      <span className="px-2 py-0.5 bg-blue-600 text-white text-[10px] font-bold rounded-full animate-pulse">
                        PLAYING
                      </span>
                    )}
                  </div>

                  {/* Chord Symbol */}
                  <div className="text-center py-2">
                    <div className={'text-3xl sm:text-4xl font-black ' + (isActive ? 'text-blue-700' : 'text-slate-900')}>
                      {chordName}
                    </div>
                    <div className="text-xs text-slate-500 font-medium mt-1">
                      {voicing?.name || 'Guitar Chord'}
                    </div>
                  </div>

                  {/* Fret Diagram String Coordinates */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span>Voicing:</span>
                    <span className="bg-slate-100 px-2 py-0.5 rounded font-bold text-slate-700">
                      {voicing?.fretDiagram || 'standard'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Soloing & Scale Recommendation Box */}
        <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white p-6 sm:p-8 rounded-2xl shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-yellow-400/20 text-yellow-300 text-xs font-bold uppercase tracking-wider border border-yellow-400/30">
                Soloing Scale Guide
              </div>
              <h3 className="text-2xl font-black text-white">
                Best Scale to Solo Over This Progression:
              </h3>
              <div className="text-xl font-bold text-yellow-400">
                {currentPreset.suggestedScale}
              </div>
              <p className="text-sm text-slate-300 leading-relaxed pt-1">
                {currentPreset.soloingTips}
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href={currentPreset.scaleLink}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all"
              >
                <span>Study Scale Patterns & Positions →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
