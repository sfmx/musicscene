"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { getGuitarAudioContext } from '@/lib/guitarAudio';
import {
  playMetronomeTick,
  playWoodblockTick,
  playElectronicBeep,
  playKickDrum,
  playSnareDrum,
  playHiHat,
} from '@/lib/rhythmAudio';

export type TimeSignature = '2/4' | '3/4' | '4/4' | '5/4' | '6/8' | '7/8';
export type SoundPreset = 'click' | 'woodblock' | 'beep' | 'rock' | 'shuffle';
export type Subdivision = 1 | 2 | 3 | 4;

interface TimeSigInfo {
  beats: number;
  label: string;
  subdivisionDefault: Subdivision;
  accentIndices: number[]; // which beats have primary or secondary accents
}

const TIME_SIGNATURES: Record<TimeSignature, TimeSigInfo> = {
  '2/4': { beats: 2, label: '2/4 March', subdivisionDefault: 1, accentIndices: [0] },
  '3/4': { beats: 3, label: '3/4 Waltz', subdivisionDefault: 1, accentIndices: [0] },
  '4/4': { beats: 4, label: '4/4 Common', subdivisionDefault: 1, accentIndices: [0, 2] },
  '5/4': { beats: 5, label: '5/4 Odd Meter', subdivisionDefault: 1, accentIndices: [0, 3] },
  '6/8': { beats: 6, label: '6/8 Compound', subdivisionDefault: 1, accentIndices: [0, 3] },
  '7/8': { beats: 7, label: '7/8 Complex', subdivisionDefault: 1, accentIndices: [0, 2, 4] },
};

function getTempoTerm(bpm: number): { term: string; translation: string } {
  if (bpm < 45) return { term: 'Grave', translation: 'Very slow and solemn' };
  if (bpm < 60) return { term: 'Largo', translation: 'Broad and slow' };
  if (bpm < 72) return { term: 'Adagio', translation: 'Slow and expressive' };
  if (bpm < 88) return { term: 'Andante', translation: 'Walking pace' };
  if (bpm < 108) return { term: 'Moderato', translation: 'Moderate tempo' };
  if (bpm < 124) return { term: 'Allegretto', translation: 'Moderately fast' };
  if (bpm < 156) return { term: 'Allegro', translation: 'Fast, lively and bright' };
  if (bpm < 176) return { term: 'Vivace', translation: 'Lively and fast' };
  if (bpm < 210) return { term: 'Presto', translation: 'Very fast' };
  return { term: 'Prestissimo', translation: 'As fast as possible' };
}

interface RoutinePreset {
  id: string;
  name: string;
  bpm: number;
  timeSig: TimeSignature;
  subdivision: Subdivision;
  sound: SoundPreset;
  speedTrainer: boolean;
  stepBpm?: number;
  barInterval?: number;
  targetBpm?: number;
  desc: string;
}

const ROUTINE_PRESETS: RoutinePreset[] = [
  {
    id: 'spider',
    name: '🕷️ Spider Warm-up',
    bpm: 65,
    timeSig: '4/4',
    subdivision: 2,
    sound: 'woodblock',
    speedTrainer: false,
    desc: 'Clean 8th-note finger independence drill (1-2-3-4 across frets)',
  },
  {
    id: 'scales',
    name: '🎸 Scale & Arpeggio Flow',
    bpm: 85,
    timeSig: '4/4',
    subdivision: 2,
    sound: 'click',
    speedTrainer: false,
    desc: 'Strict alternate picking synchronization across CAGED positions',
  },
  {
    id: 'rock',
    name: '🥁 Rock Strumming Pocket',
    bpm: 118,
    timeSig: '4/4',
    subdivision: 1,
    sound: 'rock',
    speedTrainer: false,
    desc: 'Full 4/4 acoustic drum groove for solid rhythmic strumming pocket',
  },
  {
    id: 'shuffle',
    name: '🎷 Blues Shuffle Swing',
    bpm: 100,
    timeSig: '4/4',
    subdivision: 1,
    sound: 'shuffle',
    speedTrainer: false,
    desc: 'Classic swinging 12-bar blues groove for syncopated chord vamps',
  },
  {
    id: 'shred',
    name: '⚡ Speed Trainer Ladder',
    bpm: 90,
    timeSig: '4/4',
    subdivision: 4,
    sound: 'beep',
    speedTrainer: true,
    stepBpm: 5,
    barInterval: 4,
    targetBpm: 150,
    desc: 'Increases +5 BPM every 4 bars up to 150 BPM for picking mastery',
  },
  {
    id: 'ballad-68',
    name: '🌊 6/8 Ballad & Arpeggio',
    bpm: 56,
    timeSig: '6/8',
    subdivision: 1,
    sound: 'woodblock',
    speedTrainer: false,
    desc: 'Compound two-pulse meter for acoustic fingerpicking ballads',
  },
];

export default function MetronomeTrainer() {
  const [bpm, setBpm] = useState<number>(120);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [timeSignature, setTimeSignature] = useState<TimeSignature>('4/4');
  const [subdivision, setSubdivision] = useState<Subdivision>(1);
  const [soundPreset, setSoundPreset] = useState<SoundPreset>('click');
  const [volume, setVolume] = useState<number>(0.75);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [accentDownbeat, setAccentDownbeat] = useState<boolean>(true);

  // Visual state
  const [activeBeat, setActiveBeat] = useState<number>(0);
  const [isAccentTick, setIsAccentTick] = useState<boolean>(false);
  const [flashScreen, setFlashScreen] = useState<boolean>(false);

  // Speed Trainer state
  const [speedTrainer, setSpeedTrainer] = useState<boolean>(false);
  const [speedStep, setSpeedStep] = useState<number>(5);
  const [speedIntervalBars, setSpeedIntervalBars] = useState<number>(4);
  const [targetBpm, setTargetBpm] = useState<number>(160);
  const [currentBarInCycle, setCurrentBarInCycle] = useState<number>(0);
  const [totalBarsPlayed, setTotalBarsPlayed] = useState<number>(0);
  const [practiceSeconds, setPracticeSeconds] = useState<number>(0);

  // Tap tempo state
  const tapHistoryRef = useRef<number[]>([]);
  const [tapDisplay, setTapDisplay] = useState<string | null>(null);

  // Audio scheduling engine refs
  const schedulerTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const practiceTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const nextNoteTimeRef = useRef<number>(0);
  const currentSubbeatRef = useRef<number>(0); // 0 .. (beats * subdivision - 1)
  const currentBarRef = useRef<number>(0);

  // Up-to-date refs for lookahead loop
  const stateRef = useRef({
    bpm,
    timeSignature,
    subdivision,
    soundPreset,
    volume,
    isMuted,
    accentDownbeat,
    speedTrainer,
    speedStep,
    speedIntervalBars,
    targetBpm,
    isPlaying,
  });

  useEffect(() => {
    stateRef.current = {
      bpm,
      timeSignature,
      subdivision,
      soundPreset,
      volume,
      isMuted,
      accentDownbeat,
      speedTrainer,
      speedStep,
      speedIntervalBars,
      targetBpm,
      isPlaying,
    };
  }, [
    bpm,
    timeSignature,
    subdivision,
    soundPreset,
    volume,
    isMuted,
    accentDownbeat,
    speedTrainer,
    speedStep,
    speedIntervalBars,
    targetBpm,
    isPlaying,
  ]);

  // Total beats in bar
  const totalBeats = TIME_SIGNATURES[timeSignature].beats;

  // Handle speed increment
  const handleBpmChange = useCallback((newBpm: number) => {
    const clamped = Math.max(30, Math.min(280, Math.round(newBpm)));
    setBpm(clamped);
  }, []);

  // Tap tempo handler
  const handleTap = () => {
    const now = performance.now();
    const history = tapHistoryRef.current;
    // Discard taps older than 2.5 seconds
    const recent = history.filter((t) => now - t < 2500);
    recent.push(now);
    tapHistoryRef.current = recent;

    if (recent.length >= 2) {
      let totalDiff = 0;
      for (let i = 1; i < recent.length; i++) {
        totalDiff += recent[i] - recent[i - 1];
      }
      const avgDiff = totalDiff / (recent.length - 1);
      const calculatedBpm = Math.round(60000 / avgDiff);
      const clamped = Math.max(30, Math.min(280, calculatedBpm));
      handleBpmChange(clamped);
      setTapDisplay(`${clamped} BPM`);
    } else {
      setTapDisplay('Tap again...');
    }
  };

  // Sound playback dispatcher
  const playScheduledSound = useCallback(
    (
      ctx: AudioContext,
      time: number,
      isBeatStart: boolean,
      isDownbeat: boolean,
      preset: SoundPreset,
      vol: number
    ) => {
      if (vol <= 0) return;

      if (preset === 'rock' || preset === 'shuffle') {
        // Drum kit grooves
        const isShuffle = preset === 'shuffle';
        // Hi-hat on every subbeat or beat
        playHiHat(ctx, time, false, vol * 0.35);

        if (isDownbeat) {
          playKickDrum(ctx, time, vol * 0.85);
        } else if (isBeatStart) {
          // Snare on 2 and 4 in 4/4
          const beatIndex = Math.floor(currentSubbeatRef.current / stateRef.current.subdivision);
          if (beatIndex === 1 || beatIndex === 3) {
            playSnareDrum(ctx, time, vol * 0.8);
          } else {
            playKickDrum(ctx, time, vol * 0.65);
          }
        } else if (isShuffle) {
          // Swing groove
          playHiHat(ctx, time, false, vol * 0.25);
        }
      } else if (preset === 'woodblock') {
        if (isBeatStart) {
          playWoodblockTick(ctx, time, isDownbeat, vol * 0.7);
        } else {
          // Subtle subdivision click
          playWoodblockTick(ctx, time, false, vol * 0.35);
        }
      } else if (preset === 'beep') {
        if (isBeatStart) {
          playElectronicBeep(ctx, time, isDownbeat, vol * 0.6);
        } else {
          playElectronicBeep(ctx, time, false, vol * 0.25);
        }
      } else {
        // Standard studio click
        if (isBeatStart) {
          playMetronomeTick(ctx, time, isDownbeat, vol * 0.7);
        } else {
          playMetronomeTick(ctx, time, false, vol * 0.35);
        }
      }
    },
    []
  );

  // Web Audio scheduler lookahead loop
  const scheduleAheadTime = 0.1; // seconds
  const lookaheadMs = 25;

  const scheduler = useCallback(() => {
    const ctx = getGuitarAudioContext();
    if (!ctx || !stateRef.current.isPlaying) return;

    const {
      bpm: curBpm,
      timeSignature: curTimeSig,
      subdivision: curSubdiv,
      soundPreset: curPreset,
      volume: curVol,
      isMuted: curMuted,
      accentDownbeat: curAccent,
      speedTrainer: curSpeedTrainer,
      speedStep: curStep,
      speedIntervalBars: curInterval,
      targetBpm: curTarget,
    } = stateRef.current;

    const beatsInBar = TIME_SIGNATURES[curTimeSig].beats;
    const totalSubbeatsInBar = beatsInBar * curSubdiv;
    const secondsPerBeat = 60.0 / curBpm;
    const secondsPerSubbeat = secondsPerBeat / curSubdiv;

    while (nextNoteTimeRef.current < ctx.currentTime + scheduleAheadTime) {
      const subbeat = currentSubbeatRef.current;
      const isBeatStart = subbeat % curSubdiv === 0;
      const beatIndex = Math.floor(subbeat / curSubdiv);
      const isDownbeat = beatIndex === 0 && isBeatStart && curAccent;

      // Schedule sound if not muted
      if (!curMuted) {
        playScheduledSound(
          ctx,
          nextNoteTimeRef.current,
          isBeatStart,
          isDownbeat,
          curPreset,
          curVol
        );
      }

      // Schedule visual update synced with the audio time
      const delayMs = Math.max(0, (nextNoteTimeRef.current - ctx.currentTime) * 1000);
      setTimeout(() => {
        if (isBeatStart) {
          setActiveBeat(beatIndex);
          setIsAccentTick(isDownbeat);
          setFlashScreen(true);
          setTimeout(() => setFlashScreen(false), 70);
        }
      }, delayMs);

      // Advance subbeat
      currentSubbeatRef.current = (subbeat + 1) % totalSubbeatsInBar;

      // If completing a bar:
      if (currentSubbeatRef.current === 0) {
        currentBarRef.current += 1;
        setTotalBarsPlayed((b) => b + 1);

        if (curSpeedTrainer) {
          setCurrentBarInCycle((bar) => {
            const nextCycleBar = (bar + 1) % curInterval;
            if (nextCycleBar === 0) {
              // Increase tempo!
              setBpm((prevBpm) => {
                if (curTarget > 0 && prevBpm >= curTarget) {
                  return prevBpm;
                }
                const newBpm = Math.min(curTarget > 0 ? curTarget : 280, prevBpm + curStep);
                return newBpm;
              });
            }
            return nextCycleBar;
          });
        }
      }

      // Step time forward
      nextNoteTimeRef.current += secondsPerSubbeat;
    }
  }, [playScheduledSound]);

  // Start / Stop controller
  const startMetronome = () => {
    const ctx = getGuitarAudioContext();
    if (!ctx) return;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    currentSubbeatRef.current = 0;
    currentBarRef.current = 0;
    setCurrentBarInCycle(0);
    nextNoteTimeRef.current = ctx.currentTime + 0.05;
    setIsPlaying(true);

    if (schedulerTimerRef.current) clearInterval(schedulerTimerRef.current);
    schedulerTimerRef.current = setInterval(scheduler, lookaheadMs);

    // Practice duration timer
    if (practiceTimerRef.current) clearInterval(practiceTimerRef.current);
    practiceTimerRef.current = setInterval(() => {
      setPracticeSeconds((s) => s + 1);
    }, 1000);
  };

  const stopMetronome = () => {
    setIsPlaying(false);
    if (schedulerTimerRef.current) {
      clearInterval(schedulerTimerRef.current);
      schedulerTimerRef.current = null;
    }
    if (practiceTimerRef.current) {
      clearInterval(practiceTimerRef.current);
      practiceTimerRef.current = null;
    }
    setActiveBeat(0);
    setIsAccentTick(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopMetronome();
    } else {
      startMetronome();
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (schedulerTimerRef.current) clearInterval(schedulerTimerRef.current);
      if (practiceTimerRef.current) clearInterval(practiceTimerRef.current);
    };
  }, []);

  // Keyboard shortcut listeners (Space = play/pause, Up/Down = tempo, T = tap)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }
      if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
      } else if (e.code === 'ArrowUp') {
        e.preventDefault();
        handleBpmChange(bpm + (e.shiftKey ? 5 : 1));
      } else if (e.code === 'ArrowDown') {
        e.preventDefault();
        handleBpmChange(bpm - (e.shiftKey ? 5 : 1));
      } else if (e.key.toLowerCase() === 't') {
        e.preventDefault();
        handleTap();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [bpm, isPlaying, togglePlay, handleBpmChange]);

  const tempoInfo = getTempoTerm(bpm);

  // Apply a routine preset
  const applyPreset = (preset: RoutinePreset) => {
    setBpm(preset.bpm);
    setTimeSignature(preset.timeSig);
    setSubdivision(preset.subdivision);
    setSoundPreset(preset.sound);
    setSpeedTrainer(preset.speedTrainer);
    if (preset.stepBpm) setSpeedStep(preset.stepBpm);
    if (preset.barInterval) setSpeedIntervalBars(preset.barInterval);
    if (preset.targetBpm) setTargetBpm(preset.targetBpm);
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${rem.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden transition-colors">
      {/* Background visual flash when downbeat hits */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-75 ${
          flashScreen
            ? isAccentTick
              ? 'bg-amber-500/10 dark:bg-amber-400/10 opacity-100'
              : 'bg-cyan-500/5 dark:bg-cyan-400/5 opacity-100'
            : 'opacity-0'
        }`}
      />

      {/* Top Bar: Routine Presets & Practice Timer */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-slate-200 dark:border-slate-800 relative z-10">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5 mb-1">
            <span>⏱️ Precision Metronome</span>
            <span className="text-slate-400 dark:text-slate-600">•</span>
            <span className="text-slate-600 dark:text-slate-400">Web Audio Lookahead Clock</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Metronome &amp; Speed Trainer
          </h2>
        </div>

        {/* Practice Timer & Total Bars */}
        <div className="flex items-center gap-3">
          <div className="bg-slate-100 dark:bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700/60 text-right">
            <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">
              Session Time
            </div>
            <div className="text-lg font-mono font-black text-slate-900 dark:text-white">
              {formatTime(practiceSeconds)}
            </div>
          </div>
          <div className="bg-slate-100 dark:bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700/60 text-right">
            <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">
              Total Bars
            </div>
            <div className="text-lg font-mono font-black text-cyan-600 dark:text-cyan-400">
              {totalBarsPlayed}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Routine Presets Row */}
      <div className="py-4 border-b border-slate-200 dark:border-slate-800/60 relative z-10">
        <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
          <span>⚡ Quick Practice Routines:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {ROUTINE_PRESETS.map((p) => (
            <button
              key={p.id}
              onClick={() => applyPreset(p)}
              className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/70 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-medium border border-slate-200 dark:border-slate-700/80 transition-all cursor-pointer hover:border-amber-400 active:scale-95"
              title={p.desc}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Metronome Display: BPM Readout, Pendulum & Beat LEDs */}
      <div className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left / Center: Giant BPM Display + Pendulum */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center text-center">
          {/* Italian Tempo Term */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 mb-2">
            <span className="text-xs font-bold text-amber-700 dark:text-amber-300">
              {tempoInfo.term}
            </span>
            <span className="text-slate-400 dark:text-slate-500">•</span>
            <span className="text-xs text-slate-600 dark:text-slate-400">
              {tempoInfo.translation}
            </span>
          </div>

          {/* Giant BPM Readout */}
          <div className="relative my-2 select-none">
            <div className="text-7xl sm:text-9xl font-black font-mono tracking-tighter text-slate-900 dark:text-white drop-shadow-sm">
              {bpm}
            </div>
            <div className="text-xs uppercase font-extrabold tracking-widest text-slate-500 dark:text-slate-400 -mt-2">
              Beats Per Minute
            </div>
          </div>

          {/* Beat LEDs / Beat Circles */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 my-6">
            {Array.from({ length: totalBeats }).map((_, i) => {
              const isCurrent = isPlaying && activeBeat === i;
              const isAccent = i === 0;

              return (
                <div key={i} className="flex flex-col items-center gap-1.5">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center font-black text-sm transition-all duration-100 ${
                      isCurrent
                        ? isAccent
                          ? 'bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 scale-120 shadow-lg shadow-amber-500/50 ring-4 ring-amber-400/40'
                          : 'bg-gradient-to-br from-cyan-400 to-blue-600 text-white scale-110 shadow-lg shadow-cyan-500/40 ring-2 ring-cyan-400/30'
                        : isAccent
                        ? 'bg-amber-100 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 border border-amber-300 dark:border-amber-800/80'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {i + 1}
                  </div>
                  {isAccent && (
                    <span className="text-[10px] font-bold uppercase text-amber-600 dark:text-amber-400 tracking-wider">
                      Accent
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Adjustment Buttons Row */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center mt-2">
            {[-10, -5, -1, 1, 5, 10].map((delta) => (
              <button
                key={delta}
                onClick={() => handleBpmChange(bpm + delta)}
                className="px-3 py-1.5 text-xs font-bold rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 active:scale-95 transition-all cursor-pointer"
              >
                {delta > 0 ? `+${delta}` : delta}
              </button>
            ))}
          </div>

          {/* Slider */}
          <div className="w-full max-w-md mt-6 px-4">
            <input
              type="range"
              min={30}
              max={280}
              value={bpm}
              onChange={(e) => handleBpmChange(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <div className="flex justify-between text-[11px] font-mono text-slate-400 dark:text-slate-500 mt-1">
              <span>30 BPM (Largo)</span>
              <span>120 BPM</span>
              <span>280 BPM (Presto)</span>
            </div>
          </div>
        </div>

        {/* Right Column: Play / Pause, Tap Tempo, Sound Presets & Time Signatures */}
        <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-950/70 p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80 space-y-6">
          {/* Main Action Buttons: Big Play + Tap */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={togglePlay}
              className={`flex flex-col items-center justify-center py-6 px-4 rounded-2xl font-black text-lg transition-all shadow-xl cursor-pointer active:scale-95 ${
                isPlaying
                  ? 'bg-rose-600 hover:bg-rose-500 text-white shadow-rose-600/30'
                  : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-amber-500/30'
              }`}
            >
              <span className="text-3xl mb-1">{isPlaying ? '⏸️' : '▶️'}</span>
              <span>{isPlaying ? 'STOP' : 'START'}</span>
              <span className="text-[11px] font-normal opacity-80 mt-1">[Spacebar]</span>
            </button>

            <button
              onClick={handleTap}
              className="flex flex-col items-center justify-center py-6 px-4 rounded-2xl font-black text-lg bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 transition-all shadow-sm cursor-pointer active:scale-95 group"
            >
              <span className="text-3xl mb-1 group-active:scale-125 transition-transform">
                👆
              </span>
              <span>TAP TEMPO</span>
              <span className="text-[11px] font-normal text-amber-600 dark:text-amber-400 mt-1">
                {tapDisplay || 'Press [T]'}
              </span>
            </button>
          </div>

          {/* Time Signature Picker */}
          <div>
            <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">
              Time Signature
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(Object.keys(TIME_SIGNATURES) as TimeSignature[]).map((sig) => (
                <button
                  key={sig}
                  onClick={() => setTimeSignature(sig)}
                  className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                    timeSignature === sig
                      ? 'bg-cyan-600 text-white border-cyan-500 shadow-sm'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-cyan-400'
                  }`}
                >
                  {sig}
                </button>
              ))}
            </div>
          </div>

          {/* Subdivision Picker */}
          <div>
            <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">
              Subdivisions
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[
                { val: 1 as Subdivision, label: '♩ Quarter', desc: '1 click' },
                { val: 2 as Subdivision, label: '♫ 8ths', desc: '1 & 2 &' },
                { val: 3 as Subdivision, label: '3 Triplet', desc: '1-trip-let' },
                { val: 4 as Subdivision, label: '♬ 16ths', desc: '1-e-&-a' },
              ].map((sub) => (
                <button
                  key={sub.val}
                  onClick={() => setSubdivision(sub.val)}
                  className={`py-2 px-1 text-center rounded-xl border transition-all cursor-pointer ${
                    subdivision === sub.val
                      ? 'bg-amber-500 text-slate-950 font-black border-amber-400 shadow-sm'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-amber-400 font-semibold text-xs'
                  }`}
                  title={sub.desc}
                >
                  <div className="text-xs">{sub.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Sound Preset Picker */}
          <div>
            <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">
              Sound Preset
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { id: 'click' as SoundPreset, icon: '🔔', label: 'Studio Click' },
                { id: 'woodblock' as SoundPreset, icon: '🪵', label: 'Woodblock' },
                { id: 'beep' as SoundPreset, icon: '📟', label: 'Electronic' },
                { id: 'rock' as SoundPreset, icon: '🥁', label: 'Rock Drums' },
                { id: 'shuffle' as SoundPreset, icon: '🎷', label: 'Blues Shuffle' },
              ].map((snd) => (
                <button
                  key={snd.id}
                  onClick={() => setSoundPreset(snd.id)}
                  className={`py-2 px-2.5 text-xs font-semibold rounded-xl border flex items-center gap-1.5 transition-all cursor-pointer ${
                    soundPreset === snd.id
                      ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 border-slate-900 dark:border-white shadow-xs'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-400'
                  }`}
                >
                  <span>{snd.icon}</span>
                  <span className="truncate">{snd.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Volume and Mute Toggle */}
          <div className="flex items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-2 flex-1">
              <span className="text-xs text-slate-500 dark:text-slate-400">🔊</span>
              <input
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  setVolume(Number(e.target.value));
                  if (isMuted) setIsMuted(false);
                }}
                className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
            </div>

            <button
              onClick={() => setIsMuted(!isMuted)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                isMuted
                  ? 'bg-rose-500/10 text-rose-600 border-rose-300 dark:border-rose-800'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
              }`}
              title="Silent practice: flash screen without audio click"
            >
              {isMuted ? '🔇 Muted (Visual)' : '🔊 Audible'}
            </button>
          </div>
        </div>
      </div>

      {/* Speed Trainer Accelerator Panel */}
      <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 relative z-10">
        <div className="bg-gradient-to-r from-amber-500/10 via-slate-100 to-cyan-500/10 dark:from-amber-950/30 dark:via-slate-900/50 dark:to-cyan-950/30 p-6 rounded-2xl border border-amber-500/20 dark:border-amber-400/20">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xl font-bold">
                ⚡
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <span>Automated Speed Trainer Mode</span>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-amber-500 text-slate-950">
                    Pro Tool
                  </span>
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Gradually accelerates your tempo over time so your fingers build speed without muscle tension.
                </p>
              </div>
            </div>

            {/* Toggle Switch */}
            <button
              onClick={() => setSpeedTrainer(!speedTrainer)}
              className={`px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm active:scale-95 ${
                speedTrainer
                  ? 'bg-amber-500 text-slate-950 ring-2 ring-amber-400/50'
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {speedTrainer ? '✓ Speed Trainer ON' : 'Turn Speed Trainer ON'}
            </button>
          </div>

          {speedTrainer && (
            <div className="mt-4 pt-4 border-t border-amber-500/20 dark:border-amber-400/20 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Step Size */}
                <div className="bg-white dark:bg-slate-900/90 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800">
                  <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase mb-1.5">
                    Speed Step
                  </label>
                  <div className="flex gap-1.5">
                    {[1, 2, 3, 5, 10].map((step) => (
                      <button
                        key={step}
                        onClick={() => setSpeedStep(step)}
                        className={`flex-1 py-1.5 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                          speedStep === step
                            ? 'bg-amber-500 text-slate-950 border-amber-400 font-black'
                            : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                        }`}
                      >
                        +{step}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Interval in Bars */}
                <div className="bg-white dark:bg-slate-900/90 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800">
                  <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase mb-1.5">
                    Accelerate Every
                  </label>
                  <div className="flex gap-1.5">
                    {[2, 4, 8, 16, 32].map((bars) => (
                      <button
                        key={bars}
                        onClick={() => setSpeedIntervalBars(bars)}
                        className={`flex-1 py-1.5 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                          speedIntervalBars === bars
                            ? 'bg-amber-500 text-slate-950 border-amber-400 font-black'
                            : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                        }`}
                      >
                        {bars}b
                      </button>
                    ))}
                  </div>
                </div>

                {/* Target Ceiling */}
                <div className="bg-white dark:bg-slate-900/90 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800">
                  <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase mb-1.5">
                    Target Ceiling BPM
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min={bpm}
                      max={280}
                      value={targetBpm}
                      onChange={(e) => setTargetBpm(Number(e.target.value))}
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1 text-sm font-bold font-mono text-slate-900 dark:text-white"
                    />
                    <span className="text-xs text-slate-500 font-semibold">BPM</span>
                  </div>
                </div>
              </div>

              {/* Real-time Progress Bar */}
              <div className="bg-white dark:bg-slate-900/80 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
                <div className="space-y-1 flex-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-700 dark:text-slate-300">
                      Cycle Progress: Bar {currentBarInCycle + 1} of {speedIntervalBars}
                    </span>
                    <span className="text-amber-600 dark:text-amber-400 font-mono">
                      Next: {Math.min(targetBpm, bpm + speedStep)} BPM
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-300 rounded-full"
                      style={{
                        width: `${((currentBarInCycle + 1) / speedIntervalBars) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

