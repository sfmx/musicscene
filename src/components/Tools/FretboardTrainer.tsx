'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';

// Tuning: Standard E A D G B E (Index 0 = String 1 High E, Index 5 = String 6 Low E)
const STRINGS = [
  { name: 'e', label: '1 (High E)', openMidi: 64, openPitch: 'E' },
  { name: 'B', label: '2 (B)', openMidi: 59, openPitch: 'B' },
  { name: 'G', label: '3 (G)', openMidi: 55, openPitch: 'G' },
  { name: 'D', label: '4 (D)', openMidi: 50, openPitch: 'D' },
  { name: 'A', label: '5 (A)', openMidi: 45, openPitch: 'A' },
  { name: 'E', label: '6 (Low E)', openMidi: 40, openPitch: 'E' },
];

const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

const INTERVALS = [
  { semitones: 0, name: 'Root', symbol: 'R', color: 'bg-red-500 text-white border-red-600 ring-red-400' },
  { semitones: 1, name: 'Minor 2nd', symbol: 'b2', color: 'bg-pink-400 text-white border-pink-500 ring-pink-300' },
  { semitones: 2, name: 'Major 2nd', symbol: '2', color: 'bg-amber-400 text-gray-900 border-amber-500 ring-amber-300' },
  { semitones: 3, name: 'Minor 3rd', symbol: 'b3', color: 'bg-orange-500 text-white border-orange-600 ring-orange-400' },
  { semitones: 4, name: 'Major 3rd', symbol: '3', color: 'bg-yellow-400 text-gray-900 border-yellow-500 ring-yellow-300' },
  { semitones: 5, name: 'Perfect 4th', symbol: '4', color: 'bg-lime-500 text-gray-900 border-lime-600 ring-lime-300' },
  { semitones: 6, name: 'Diminished 5th (Tritone)', symbol: 'b5', color: 'bg-teal-500 text-white border-teal-600 ring-teal-300' },
  { semitones: 7, name: 'Perfect 5th', symbol: '5', color: 'bg-emerald-500 text-white border-emerald-600 ring-emerald-300' },
  { semitones: 8, name: 'Minor 6th', symbol: 'b6', color: 'bg-cyan-500 text-white border-cyan-600 ring-cyan-300' },
  { semitones: 9, name: 'Major 6th', symbol: '6', color: 'bg-sky-500 text-white border-sky-600 ring-sky-300' },
  { semitones: 10, name: 'Minor 7th', symbol: 'b7', color: 'bg-blue-600 text-white border-blue-700 ring-blue-400' },
  { semitones: 11, name: 'Major 7th', symbol: '7', color: 'bg-purple-600 text-white border-purple-700 ring-purple-400' },
];

const PRESETS = {
  pentatonicMinor: {
    label: 'Minor Pentatonic',
    intervals: [0, 3, 5, 7, 10],
    desc: 'The bedrock of Rock, Blues, and Soloing (R, b3, 4, 5, b7)',
  },
  pentatonicMajor: {
    label: 'Major Pentatonic',
    intervals: [0, 2, 4, 7, 9],
    desc: 'Bright, soulful sound popular in Country, R&B, and Classic Rock (R, 2, 3, 5, 6)',
  },
  blues: {
    label: 'Blues Scale',
    intervals: [0, 3, 5, 6, 7, 10],
    desc: 'Minor pentatonic plus the expressive "blue note" flattened 5th (R, b3, 4, b5, 5, b7)',
  },
  major: {
    label: 'Major (Ionian)',
    intervals: [0, 2, 4, 5, 7, 9, 11],
    desc: 'The standard 7-note diatonic scale from which all modes originate',
  },
  minor: {
    label: 'Natural Minor (Aeolian)',
    intervals: [0, 2, 3, 5, 7, 8, 10],
    desc: 'The pure minor scale with mournful, emotional character',
  },
  dorian: {
    label: 'Dorian Mode',
    intervals: [0, 2, 3, 5, 7, 9, 10],
    desc: 'Minor scale with a bright natural 6th - Carlos Santana and Pink Floyd vibe',
  },
  mixolydian: {
    label: 'Mixolydian Mode',
    intervals: [0, 2, 4, 5, 7, 9, 10],
    desc: 'Major scale with flat 7th - ideal for dominant 7th chords and classic Southern rock',
  },
  majorTriad: {
    label: 'Major Triad Arpeggio',
    intervals: [0, 4, 7],
    desc: 'Root, Major 3rd, and 5th across the entire fretboard',
  },
  minorTriad: {
    label: 'Minor Triad Arpeggio',
    intervals: [0, 3, 7],
    desc: 'Root, Minor 3rd, and 5th chord tones',
  },
  dom7: {
    label: 'Dominant 7th Arpeggio',
    intervals: [0, 4, 7, 10],
    desc: 'Essential for Blues, Funk, and Jazz progressions',
  },
  all: {
    label: 'All 12 Notes (Chromatic)',
    intervals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    desc: 'Full chromatic map of every single fret',
  },
};

const SINGLE_DOT_FRETS = [3, 5, 7, 9, 15];
const DOUBLE_DOT_FRETS = [12];
const TOTAL_FRETS = 15;

export default function FretboardTrainer() {
  const [activeTab, setActiveTab] = useState<'visualizer' | 'quiz' | 'finder'>('visualizer');
  const [rootNote, setRootNote] = useState<string>('A');
  const [activeIntervals, setActiveIntervals] = useState<number[]>([0, 3, 5, 7, 10]); // Minor Pentatonic default
  const [labelMode, setLabelMode] = useState<'notes' | 'intervals' | 'both'>('intervals');
  const [selectedStringFilter, setSelectedStringFilter] = useState<number | 'all'>('all');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Audio Context Ref
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Quiz State
  const [quizStringFilter, setQuizStringFilter] = useState<'all' | 'low' | 'high' | '1'>('all');
  const [quizMaxFret, setQuizMaxFret] = useState<number>(12);
  const [targetString, setTargetString] = useState<number>(0);
  const [targetFret, setTargetFret] = useState<number>(0);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [quizAttempts, setQuizAttempts] = useState<number>(0);
  const [quizStreak, setQuizStreak] = useState<number>(0);
  const [quizBestStreak, setQuizBestStreak] = useState<number>(0);
  const [quizFeedback, setQuizFeedback] = useState<{ status: 'correct' | 'wrong' | null; message: string }>({
    status: null,
    message: '',
  });

  // Finder Game State
  const [finderTargetNote, setFinderTargetNote] = useState<string>('C');
  const [finderFoundLocations, setFinderFoundLocations] = useState<Set<string>>(new Set());
  const [finderFeedback, setFinderFeedback] = useState<string>('');
  const [finderCompleted, setFinderCompleted] = useState<boolean>(false);

  // Audio synthesis
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

  const playMidiNote = (midi: number, duration: number = 0.8) => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const freq = 440 * Math.pow(2, (midi - 69) / 12);
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Guitar acoustic low-pass filter decay
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(2000, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(350, ctx.currentTime + duration);

      // Guitar pluck envelope
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.35, ctx.currentTime + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      // Audio autoplay restriction handling
    }
  };

  const playSoundFeedback = (isCorrect: boolean) => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      if (isCorrect) {
        const notes = [72, 76, 79];
        notes.forEach((midi, i) => {
          setTimeout(() => playMidiNote(midi, 0.35), i * 70);
        });
      } else {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(130, ctx.currentTime);
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
      }
    } catch (e) {
      // Ignore
    }
  };

  const getMidiForFret = (stringIndex: number, fret: number) => {
    return STRINGS[stringIndex].openMidi + fret;
  };

  const getNoteForFret = (stringIndex: number, fret: number) => {
    const midi = getMidiForFret(stringIndex, fret);
    return NOTES[midi % 12];
  };

  const getIntervalForNote = (note: string) => {
    const rootIdx = NOTES.indexOf(rootNote);
    const noteIdx = NOTES.indexOf(note);
    const semitones = (noteIdx - rootIdx + 12) % 12;
    return INTERVALS.find((i) => i.semitones === semitones) || INTERVALS[0];
  };

  const generateNewQuizQuestion = () => {
    let allowedStrings = [0, 1, 2, 3, 4, 5];
    if (quizStringFilter === 'low') allowedStrings = [4, 5];
    if (quizStringFilter === 'high') allowedStrings = [0, 1, 2];
    if (quizStringFilter === '1') allowedStrings = [0];

    const randomString = allowedStrings[Math.floor(Math.random() * allowedStrings.length)];
    const randomFret = Math.floor(Math.random() * (quizMaxFret + 1));

    setTargetString(randomString);
    setTargetFret(randomFret);
    setQuizFeedback({ status: null, message: '' });
  };

  const resetQuiz = () => {
    setQuizScore(0);
    setQuizAttempts(0);
    setQuizStreak(0);
    setQuizFeedback({ status: null, message: '' });
    generateNewQuizQuestion();
  };

  useEffect(() => {
    if (activeTab === 'quiz') {
      generateNewQuizQuestion();
    }
  }, [activeTab, quizStringFilter, quizMaxFret]);

  const handleQuizAnswer = (selectedNote: string) => {
    const correctNote = getNoteForFret(targetString, targetFret);
    const isCorrect = selectedNote === correctNote;

    setQuizAttempts((prev) => prev + 1);

    if (isCorrect) {
      playSoundFeedback(true);
      const newScore = quizScore + 1;
      const newStreak = quizStreak + 1;
      setQuizScore(newScore);
      setQuizStreak(newStreak);
      if (newStreak > quizBestStreak) {
        setQuizBestStreak(newStreak);
      }
      setQuizFeedback({
        status: 'correct',
        message: 'Correct! ' + STRINGS[targetString].label + ' at fret ' + targetFret + ' is indeed ' + correctNote + '.',
      });
      setTimeout(() => {
        generateNewQuizQuestion();
      }, 1000);
    } else {
      playSoundFeedback(false);
      setQuizStreak(0);
      setQuizFeedback({
        status: 'wrong',
        message: 'Not quite! ' + STRINGS[targetString].label + ' at fret ' + targetFret + ' is ' + correctNote + ' (you guessed ' + selectedNote + ').',
      });
    }
  };

  const playVictoryFanfare = () => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const fanfareNotes = [60, 64, 67, 72, 76]; // C4, E4, G4, C5, E5 arpeggio
      fanfareNotes.forEach((midi, idx) => {
        setTimeout(() => playMidiNote(midi, 0.7), idx * 110);
      });
    } catch (e) {
      // Ignore
    }
  };

  const totalFinderInstances = useMemo(() => {
    let count = 0;
    for (let s = 0; s < 6; s++) {
      for (let f = 0; f <= TOTAL_FRETS; f++) {
        if (getNoteForFret(s, f) === finderTargetNote) {
          count++;
        }
      }
    }
    return count;
  }, [finderTargetNote]);

  const getNextNote = (current: string) => {
    const idx = NOTES.indexOf(current);
    return NOTES[(idx + 1) % NOTES.length];
  };

  const handleTargetNoteChange = (note: string) => {
    setFinderTargetNote(note);
    setFinderFoundLocations(new Set());
    setFinderFeedback('');
    setFinderCompleted(false);
  };

  const selectNextFinderNote = () => {
    handleTargetNoteChange(getNextNote(finderTargetNote));
  };

  const resetFinder = () => {
    setFinderFoundLocations(new Set());
    setFinderFeedback('');
    setFinderCompleted(false);
  };

  const handleFinderFretClick = (stringIndex: number, fret: number) => {
    const note = getNoteForFret(stringIndex, fret);
    playMidiNote(getMidiForFret(stringIndex, fret));

    const key = stringIndex + '-' + fret;
    if (note === finderTargetNote) {
      if (finderFoundLocations.has(key)) {
        return; // Already found this exact position
      }
      playSoundFeedback(true);
      const updated = new Set(finderFoundLocations);
      updated.add(key);
      setFinderFoundLocations(updated);

      if (updated.size >= totalFinderInstances) {
        setFinderCompleted(true);
        playVictoryFanfare();
        setFinderFeedback('Incredible! You found all ' + totalFinderInstances + ' positions of ' + finderTargetNote + ' across the fretboard!');
      } else {
        setFinderFeedback('Found ' + updated.size + ' of ' + totalFinderInstances + ' positions. Keep hunting!');
      }
    } else {
      playSoundFeedback(false);
      setFinderFeedback('That fret is ' + note + ', not ' + finderTargetNote + '. Try another string or fret!');
    }
  };

  const handlePresetSelect = (presetKey: string) => {
    if (PRESETS[presetKey as keyof typeof PRESETS]) {
      setActiveIntervals([...PRESETS[presetKey as keyof typeof PRESETS].intervals]);
    }
  };

  const toggleInterval = (semitones: number) => {
    if (semitones === 0) return;
    setActiveIntervals((prev) =>
      prev.includes(semitones) ? prev.filter((i) => i !== semitones) : [...prev, semitones].sort((a, b) => a - b)
    );
  };

  const playVisibleScale = () => {
    const ctx = getAudioContext();
    if (!ctx) return;

    const visibleMidis: number[] = [];
    for (let s = 5; s >= 0; s--) {
      for (let f = 0; f <= TOTAL_FRETS; f++) {
        const note = getNoteForFret(s, f);
        const interval = getIntervalForNote(note);
        if (activeIntervals.includes(interval.semitones)) {
          visibleMidis.push(getMidiForFret(s, f));
        }
      }
    }

    const uniqueSorted = Array.from(new Set(visibleMidis)).sort((a, b) => a - b).slice(0, 16);
    uniqueSorted.forEach((midi, idx) => {
      setTimeout(() => {
        playMidiNote(midi, 0.45);
      }, idx * 110);
    });
  };

  function renderFretNoteCircle(stringIndex: number, fret: number) {
    const note = getNoteForFret(stringIndex, fret);
    const interval = getIntervalForNote(note);
    const midi = getMidiForFret(stringIndex, fret);

    // MODE 2: SPEED QUIZ
    if (activeTab === 'quiz') {
      const isTarget = stringIndex === targetString && fret === targetFret;
      if (isTarget) {
        return (
          <button
            onClick={() => playMidiNote(midi)}
            className="w-9 h-9 rounded-full bg-yellow-400 text-slate-950 font-black text-sm border-2 border-white shadow-lg animate-bounce flex items-center justify-center cursor-pointer ring-4 ring-yellow-400/50"
            title="Identify this note!"
          >
            ?
          </button>
        );
      }
      return null;
    }

    // MODE 3: NOTE FINDER
    if (activeTab === 'finder') {
      const key = stringIndex + '-' + fret;
      const isFound = finderFoundLocations.has(key);

      if (isFound) {
        return (
          <button
            onClick={() => playMidiNote(midi)}
            className={'w-8 h-8 rounded-full font-black text-xs border-2 shadow-md flex items-center justify-center transition-all cursor-pointer ' +
              (finderCompleted
                ? 'bg-emerald-400 text-slate-950 border-white ring-4 ring-emerald-300 shadow-emerald-400/50 animate-pulse'
                : 'bg-yellow-400 text-slate-950 border-white ring-2 ring-yellow-300')}
          >
            {note}
          </button>
        );
      }

      return (
        <button
          onClick={() => handleFinderFretClick(stringIndex, fret)}
          disabled={finderCompleted}
          className={'w-7 h-7 rounded-full bg-white/5 hover:bg-white/20 transition-all flex items-center justify-center text-[10px] ' +
            (finderCompleted ? 'opacity-20 cursor-default' : 'text-white/0 hover:text-white/40 cursor-pointer')}
          title={finderCompleted ? 'All found!' : 'Click to guess this note'}
        >
          •
        </button>
      );
    }

    // MODE 1: VISUALIZER
    const isVisible = activeIntervals.includes(interval.semitones);
    if (!isVisible) {
      return (
        <button
          onClick={() => playMidiNote(midi)}
          className="w-6 h-6 rounded-full opacity-0 hover:opacity-40 bg-white/20 transition-opacity flex items-center justify-center text-[9px] text-white"
          title={note + ' (' + STRINGS[stringIndex].label + ', Fret ' + fret + ')'}
        >
          {note}
        </button>
      );
    }

    const isRoot = interval.semitones === 0;

    let displayLabel = note;
    if (labelMode === 'intervals') {
      displayLabel = interval.symbol;
    } else if (labelMode === 'both') {
      displayLabel = note;
    }

    return (
      <button
        onClick={() => playMidiNote(midi)}
        className={'w-8 h-8 rounded-full border-2 shadow-md flex flex-col items-center justify-center font-bold transition-transform hover:scale-110 active:scale-95 cursor-pointer ' +
          interval.color +
          (isRoot ? ' ring-2 ring-white scale-105 z-20' : ' z-10')}
        title={note + ' - ' + interval.name + ' (' + STRINGS[stringIndex].label + ', Fret ' + fret + ')'}
      >
        <span className="text-[11px] leading-tight">{displayLabel}</span>
        {labelMode === 'both' && (
          <span className="text-[8px] font-normal leading-none opacity-80">{interval.symbol}</span>
        )}
      </button>
    );
  }

  return (
    <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      {/* Top Header Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Interactive Guitar Tool
              </span>
              <span className="text-xs text-slate-400">Standard Tuning (E A D G B E)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Interactive Fretboard Trainer & Visualizer
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-1 max-w-2xl">
              Master intervals, visualize scale geometry across all 6 strings, and train rapid fretboard note recall.
            </p>
          </div>

          {/* Sound Toggle */}
          <div className="flex items-center gap-3 self-start md:self-auto bg-slate-800/80 px-3.5 py-2 rounded-xl border border-slate-700/60">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-200 hover:text-white transition-colors"
              title="Toggle Audio Pluck Feedback"
            >
              <span>{soundEnabled ? '🔊 Audio Pluck ON' : '🔇 Audio Muted'}</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-slate-800">
          <button
            onClick={() => setActiveTab('visualizer')}
            className={'px-4 py-2 rounded-lg text-sm font-semibold transition-all ' +
              (activeTab === 'visualizer'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white')}
          >
            🗺️ Fretboard & Interval Explorer
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={'px-4 py-2 rounded-lg text-sm font-semibold transition-all ' +
              (activeTab === 'quiz'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white')}
          >
            ⚡ Speed Quiz Game
          </button>
          <button
            onClick={() => setActiveTab('finder')}
            className={'px-4 py-2 rounded-lg text-sm font-semibold transition-all ' +
              (activeTab === 'finder'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white')}
          >
            🎯 Note Hunt Challenge
          </button>
        </div>
      </div>

      {/* Main Body */}
      <div className="p-4 sm:p-6 lg:p-8 space-y-6">
        {/* ================= MODE 1: VISUALIZER CONTROLS ================= */}
        {activeTab === 'visualizer' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-50 p-4 sm:p-6 rounded-xl border border-slate-200">
              {/* Root Note Picker */}
              <div className="lg:col-span-4 space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                  Select Root Note (Tonic)
                </label>
                <div className="grid grid-cols-6 gap-1.5">
                  {NOTES.map((n) => {
                    const isSelected = rootNote === n;
                    return (
                      <button
                        key={n}
                        onClick={() => setRootNote(n)}
                        className={'py-2 text-sm font-bold rounded-lg border transition-all ' +
                          (isSelected
                            ? 'bg-red-600 text-white border-red-700 shadow-md ring-2 ring-red-300'
                            : 'bg-white text-slate-800 border-slate-300 hover:bg-slate-100 hover:border-slate-400')}
                      >
                        {n}
                      </button>
                    );
                  })}
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-slate-500">
                    Current Key: <strong className="text-red-600 font-bold text-sm">{rootNote}</strong>
                  </span>
                  <button
                    onClick={playVisibleScale}
                    className="text-xs bg-indigo-50 text-indigo-700 font-semibold px-3 py-1.5 rounded-lg border border-indigo-200 hover:bg-indigo-100 flex items-center gap-1.5 transition-colors"
                  >
                    <span>▶ Play Scale Run</span>
                  </button>
                </div>
              </div>

              {/* Presets */}
              <div className="lg:col-span-8 space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                  Scale, Mode & Arpeggio Presets
                </label>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(PRESETS).map(([key, preset]) => {
                    const isActive =
                      preset.intervals.length === activeIntervals.length &&
                      preset.intervals.every((v, i) => v === activeIntervals[i]);
                    return (
                      <button
                        key={key}
                        onClick={() => handlePresetSelect(key)}
                        className={'px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ' +
                          (isActive
                            ? 'bg-blue-600 text-white border-blue-700 shadow-sm'
                            : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100')}
                        title={preset.desc}
                      >
                        {preset.label}
                      </button>
                    );
                  })}
                </div>
                <p className="text-xs text-slate-500 italic">
                  Tip: Toggle custom intervals below to build suspended chords, altered scales, or modal pentatonics.
                </p>
              </div>
            </div>

            {/* Custom Interval Badges */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Active Intervals relative to {rootNote}
                </span>
                <span className="text-xs text-slate-500">Click any interval badge to toggle on/off</span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 gap-1.5">
                {INTERVALS.map((inv) => {
                  const isActive = activeIntervals.includes(inv.semitones);
                  return (
                    <button
                      key={inv.semitones}
                      onClick={() => toggleInterval(inv.semitones)}
                      disabled={inv.semitones === 0}
                      className={'p-2 text-center rounded-lg border text-xs font-medium transition-all ' +
                        (isActive
                          ? inv.color + ' shadow-sm ring-1'
                          : 'bg-slate-50 text-slate-400 border-slate-200 opacity-60 hover:opacity-90') +
                        (inv.semitones === 0 ? ' cursor-not-allowed' : ' cursor-pointer')}
                    >
                      <div className="font-bold text-sm leading-tight">{inv.symbol}</div>
                      <div className="text-[10px] truncate">{inv.name}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Display Options Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-3 bg-slate-100 rounded-xl text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-700">Label Mode:</span>
                <div className="inline-flex bg-white p-1 rounded-lg border border-slate-300 shadow-inner">
                  <button
                    onClick={() => setLabelMode('intervals')}
                    className={'px-2.5 py-1 rounded text-xs font-semibold ' +
                      (labelMode === 'intervals' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:text-slate-900')}
                  >
                    Intervals (R, b3, 5)
                  </button>
                  <button
                    onClick={() => setLabelMode('notes')}
                    className={'px-2.5 py-1 rounded text-xs font-semibold ' +
                      (labelMode === 'notes' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:text-slate-900')}
                  >
                    Note Names (A, C, E)
                  </button>
                  <button
                    onClick={() => setLabelMode('both')}
                    className={'px-2.5 py-1 rounded text-xs font-semibold ' +
                      (labelMode === 'both' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:text-slate-900')}
                  >
                    Both
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-700">String Filter:</span>
                <select
                  value={selectedStringFilter}
                  onChange={(e) => setSelectedStringFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                  className="bg-white border border-slate-300 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-700 focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All 6 Strings</option>
                  <option value="0">String 1 (High E)</option>
                  <option value="1">String 2 (B)</option>
                  <option value="2">String 3 (G)</option>
                  <option value="3">String 4 (D)</option>
                  <option value="4">String 5 (A)</option>
                  <option value="5">String 6 (Low E)</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* ================= MODE 2: SPEED QUIZ ================= */}
        {activeTab === 'quiz' && (
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-6">
            {/* Scoreboard Header with Reset Button */}
            <div className="flex items-center justify-between">
              <div className="text-xs uppercase font-bold text-slate-500 tracking-wider">
                Speed Quiz Scoreboard
              </div>
              <button
                onClick={resetQuiz}
                className="px-3 py-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                title="Reset your score, attempts, and streak to start fresh"
              >
                <span>🔄 Reset Quiz / Start Over</span>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
                <div className="text-xs uppercase font-bold text-slate-400">Score</div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900">
                  {quizScore} <span className="text-sm font-normal text-slate-400">/ {quizAttempts}</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
                <div className="text-xs uppercase font-bold text-slate-400">Accuracy</div>
                <div className="text-2xl sm:text-3xl font-black text-blue-600">
                  {quizAttempts === 0 ? '100%' : Math.round((quizScore / quizAttempts) * 100) + '%'}
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
                <div className="text-xs uppercase font-bold text-slate-400">Current Streak</div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-600">{quizStreak}</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
                <div className="text-xs uppercase font-bold text-slate-400">Best Streak</div>
                <div className="text-2xl sm:text-3xl font-black text-purple-600">{quizBestStreak}</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-6 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-emerald-200">
                  Question #{quizAttempts + 1}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black mt-1">
                  What note is on{' '}
                  <span className="underline decoration-yellow-400 underline-offset-4">
                    {STRINGS[targetString].label}
                  </span>{' '}
                  at{' '}
                  <span className="underline decoration-yellow-400 underline-offset-4">
                    {targetFret === 0 ? 'Open String' : 'Fret ' + targetFret}
                  </span>
                  ?
                </h3>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => playMidiNote(getMidiForFret(targetString, targetFret))}
                  className="px-3.5 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all border border-white/30 cursor-pointer"
                >
                  <span>🔊 Hear Note</span>
                </button>
                <button
                  onClick={generateNewQuizQuestion}
                  className="px-3.5 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all border border-white/30 cursor-pointer"
                  title="Skip to next question"
                >
                  <span>Skip ➔</span>
                </button>
              </div>
            </div>

            {quizFeedback.status && (
              <div
                className={'p-4 rounded-xl text-sm font-bold flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-all ' +
                  (quizFeedback.status === 'correct'
                    ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                    : 'bg-red-100 text-red-900 border border-red-300')}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{quizFeedback.status === 'correct' ? '✅' : '❌'}</span>
                  <span>{quizFeedback.message}</span>
                </div>

                {quizFeedback.status === 'wrong' && (
                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                    <button
                      onClick={() => setQuizFeedback({ status: null, message: '' })}
                      className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-bold transition-all shadow-sm cursor-pointer"
                    >
                      ↺ Try Again
                    </button>
                    <button
                      onClick={generateNewQuizQuestion}
                      className="px-3.5 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-black transition-all shadow-sm flex items-center gap-1 cursor-pointer"
                    >
                      Next Question ➔
                    </button>
                  </div>
                )}
              </div>
            )}

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Select the Note:
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-2">
                {NOTES.map((note) => (
                  <button
                    key={note}
                    onClick={() => handleQuizAnswer(note)}
                    className="py-3 sm:py-4 bg-white hover:bg-blue-50 active:scale-95 border-2 border-slate-200 hover:border-blue-500 rounded-xl font-black text-lg sm:text-xl text-slate-800 hover:text-blue-600 transition-all shadow-sm"
                  >
                    {note}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200 text-xs text-slate-600">
              <div className="flex items-center gap-3">
                <span className="font-bold">String Scope:</span>
                <select
                  value={quizStringFilter}
                  onChange={(e) => setQuizStringFilter(e.target.value as any)}
                  className="bg-white border border-slate-300 rounded-lg px-2.5 py-1 font-semibold text-slate-700"
                >
                  <option value="all">All 6 Strings</option>
                  <option value="low">Bass Strings (Low E & A - Barre chord roots)</option>
                  <option value="high">High Strings (G, B, High E - Solos)</option>
                  <option value="1">High E String Only</option>
                </select>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-bold">Fret Range:</span>
                <select
                  value={quizMaxFret}
                  onChange={(e) => setQuizMaxFret(Number(e.target.value))}
                  className="bg-white border border-slate-300 rounded-lg px-2.5 py-1 font-semibold text-slate-700"
                >
                  <option value="5">Frets 0 - 5 (Beginner Open Position)</option>
                  <option value="12">Frets 0 - 12 (One Full Octave)</option>
                  <option value="15">Frets 0 - 15 (Extended Range)</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* ================= MODE 3: NOTE FINDER ================= */}
        {activeTab === 'finder' && (
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-6">
            {/* End State Success Celebration Banner */}
            {finderCompleted ? (
              <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white p-6 sm:p-8 rounded-2xl shadow-xl border-2 border-emerald-300/80 flex flex-col md:flex-row items-center justify-between gap-6 animate-fadeIn">
                <div className="flex items-center gap-5 text-center md:text-left">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/20 border-2 border-white/40 flex items-center justify-center text-3xl sm:text-4xl shadow-inner shrink-0">
                    🎉
                  </div>
                  <div>
                    <div className="flex items-center gap-2 justify-center md:justify-start mb-1">
                      <span className="text-xs uppercase font-extrabold tracking-wider bg-emerald-950/40 text-emerald-200 px-3 py-0.5 rounded-full border border-emerald-400/40">
                        🏆 Note Hunt Complete!
                      </span>
                      <span className="text-xs text-emerald-100 font-semibold">
                        {totalFinderInstances}/{totalFinderInstances} (100%) Found
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                      Outstanding! You found every &apos;{finderTargetNote}&apos;!
                    </h3>
                    <p className="text-emerald-100 text-xs sm:text-sm mt-1 max-w-xl leading-relaxed">
                      You have mastered all {totalFinderInstances} positions of <strong>{finderTargetNote}</strong> across all 6 strings (frets 0 to {TOTAL_FRETS}). This octave-visualization skill is essential for moving chord grips and lead solos anywhere on the guitar.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col items-center gap-2.5 shrink-0 w-full sm:w-auto">
                  <button
                    onClick={selectNextFinderNote}
                    className="w-full sm:w-auto px-6 py-3.5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-sm rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Hunt Next Note ({getNextNote(finderTargetNote)}) ➔</span>
                  </button>
                  <button
                    onClick={resetFinder}
                    className="w-full sm:w-auto px-4 py-2 bg-white/15 hover:bg-white/25 text-white font-bold text-xs rounded-lg transition-all border border-white/20 cursor-pointer text-center"
                  >
                    ↺ Replay &apos;{finderTargetNote}&apos;
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white p-6 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-purple-200">
                    Fretboard Note Hunt
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black mt-1">
                    Find every single <span className="text-yellow-300 font-extrabold">{finderTargetNote}</span> on the fretboard!
                  </h3>
                  <p className="text-purple-200 text-xs sm:text-sm mt-1">
                    Click notes directly on the fretboard below to locate all {totalFinderInstances} positions across all 6 strings (frets 0 to {TOTAL_FRETS}).
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 px-4 py-2 rounded-xl border border-white/20 text-center">
                    <div className="text-xs text-purple-200 uppercase font-bold">Found</div>
                    <div className="text-2xl font-black text-yellow-300">
                      {finderFoundLocations.size} / {totalFinderInstances}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-2">Choose Target Note:</span>
              {NOTES.map((n) => (
                <button
                  key={n}
                  onClick={() => handleTargetNoteChange(n)}
                  className={'px-3 py-1.5 text-xs font-bold rounded-lg border transition-all ' +
                    (finderTargetNote === n
                      ? 'bg-purple-600 text-white border-purple-700 shadow-md ring-2 ring-purple-300'
                      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100')}
                >
                  {n}
                </button>
              ))}
            </div>

            {finderFeedback && !finderCompleted && (
              <div className="p-3.5 bg-purple-50 text-purple-900 border border-purple-200 rounded-xl text-sm font-semibold flex items-center justify-between">
                <span>{finderFeedback}</span>
                <span className="text-xs text-purple-600 font-bold">
                  {finderFoundLocations.size} / {totalFinderInstances}
                </span>
              </div>
            )}
          </div>
        )}

        {/* ================= SVG INTERACTIVE FRETBOARD ================= */}
        <div className="relative overflow-x-auto rounded-2xl border border-slate-800 shadow-2xl bg-[#1c1a17]">
          <div className="min-w-[860px] p-6">
            <div className="grid grid-cols-[80px_repeat(16,1fr)] mb-2 text-center text-xs font-extrabold text-slate-400 select-none">
              <div>Nut (0)</div>
              {Array.from({ length: TOTAL_FRETS }, (_, i) => i + 1).map((fret) => (
                <div key={fret} className={DOUBLE_DOT_FRETS.includes(fret) ? 'text-amber-400 font-black' : ''}>
                  {fret}
                </div>
              ))}
            </div>

            <div className="relative space-y-0 rounded-xl bg-gradient-to-r from-[#201d19] via-[#28231d] to-[#1e1b17] border-y-2 border-r-2 border-amber-900/60 shadow-inner overflow-hidden py-3">
              <div className="absolute inset-0 pointer-events-none grid grid-cols-[80px_repeat(16,1fr)] items-center">
                <div />
                {Array.from({ length: TOTAL_FRETS }, (_, i) => i + 1).map((fret) => {
                  const isSingle = SINGLE_DOT_FRETS.includes(fret);
                  const isDouble = DOUBLE_DOT_FRETS.includes(fret);

                  return (
                    <div key={fret} className="flex flex-col items-center justify-center h-full gap-8">
                      {isSingle && (
                        <div className="w-3 h-3 rounded-full bg-amber-100/30 border border-amber-200/50 shadow-inner" />
                      )}
                      {isDouble && (
                        <div className="flex flex-col gap-7">
                          <div className="w-3 h-3 rounded-full bg-amber-100/40 border border-amber-200/60 shadow-inner" />
                          <div className="w-3 h-3 rounded-full bg-amber-100/40 border border-amber-200/60 shadow-inner" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {STRINGS.map((guitarString, stringIndex) => {
                const isStringFiltered =
                  activeTab === 'visualizer' &&
                  selectedStringFilter !== 'all' &&
                  selectedStringFilter !== stringIndex;

                const stringHeight = 1.5 + stringIndex * 0.6;

                return (
                  <div
                    key={stringIndex}
                    className={'relative grid grid-cols-[80px_repeat(16,1fr)] h-12 items-center transition-opacity ' +
                      (isStringFiltered ? 'opacity-20 pointer-events-none' : 'opacity-100')}
                  >
                    <div
                      className="absolute left-0 right-0 z-0 bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200 shadow-sm"
                      style={{ height: stringHeight + 'px' }}
                    />

                    <div className="relative z-10 flex items-center justify-center border-r-4 border-slate-300 pr-2">
                      {renderFretNoteCircle(stringIndex, 0)}
                    </div>

                    {Array.from({ length: TOTAL_FRETS }, (_, i) => i + 1).map((fret) => (
                      <div
                        key={fret}
                        className="relative z-10 flex items-center justify-center border-r-2 border-slate-500/80 h-full"
                      >
                        {renderFretNoteCircle(stringIndex, fret)}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500 inline-block" /> Root (Tonic)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" /> 5th (Dominant)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-orange-500 inline-block" /> 3rd / Minor 3rd
                </span>
              </div>
              <div>Click any note marker to play audio pitch</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
