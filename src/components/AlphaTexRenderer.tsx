"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { AlphaTexValidator } from '@/lib/alphaTexValidator';

/**
 * Modern Interactive AlphaTex Music Notation & Audio Player
 * Supports dark stage & clean studio paper themes, dynamic tempo, metronome,
 * count-in, and multi-instrument playback (Steel, Nylon, Electric, Piano).
 */

interface AlphaTexRendererProps {
  alphaTex: string;
  title?: string;
  tempo?: number;
  showValidation?: boolean;
  className?: string;
}

// Global SoundFont cache shared across all AlphaTexRenderer instances on the page
let sharedSoundFontBuffer: Uint8Array | null = null;
let soundFontFetchPromise: Promise<Uint8Array> | null = null;

const getSharedSoundFont = async (): Promise<Uint8Array> => {
  if (sharedSoundFontBuffer) {
    return sharedSoundFontBuffer;
  }
  if (!soundFontFetchPromise) {
    soundFontFetchPromise = fetch('/alphatab/soundfont/sonivox.sf2')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status} loading soundfont`);
        return res.arrayBuffer();
      })
      .then((buf) => {
        sharedSoundFontBuffer = new Uint8Array(buf);
        return sharedSoundFontBuffer;
      })
      .catch((err) => {
        soundFontFetchPromise = null;
        throw err;
      });
  }
  return soundFontFetchPromise;
};

// Available playback instruments (bundled inside sonivox.sf2)
const INSTRUMENT_OPTIONS = [
  { id: 25, label: 'Steel', icon: '🎸', title: 'Acoustic Guitar (Steel Strings)' },
  { id: 24, label: 'Nylon', icon: '🪕', title: 'Acoustic Guitar (Nylon Strings)' },
  { id: 27, label: 'Electric', icon: '⚡', title: 'Electric Guitar (Clean)' },
  { id: 0, label: 'Piano', icon: '🎹', title: 'Acoustic Grand Piano' },
];

const STORAGE_KEY = 'alphatab_preferred_instrument';
const THEME_STORAGE_KEY = 'alphatab_score_theme';
const INSTRUMENT_CHANGE_EVENT = 'alphatab-instrument-change';

/**
 * Updates track playbackInfo program and all beat automations (type 2)
 * so that MIDI generation uses the desired instrument.
 */
const applyInstrumentToScore = (score: any, program: number) => {
  if (!score?.tracks) return;
  score.tracks.forEach((track: any) => {
    if (track.playbackInfo) {
      track.playbackInfo.program = program;
    }
    track.staves?.forEach((staff: any) => {
      staff.bars?.forEach((bar: any) => {
        bar.voices?.forEach((voice: any) => {
          voice.beats?.forEach((beat: any) => {
            beat.automations?.forEach((auto: any) => {
              if (auto.type === 2) {
                auto.value = program;
              }
            });
          });
        });
      });
    });
  });
};

const getThemeResources = (theme: 'dark' | 'light') => {
  if (theme === 'dark') {
    return {
      staffLineColor: '#64748b',       // Slate-500: crisp & clearly visible on dark background
      barSeparatorColor: '#94a3b8',    // Slate-400: clear measure bars
      barNumberColor: '#f59e0b',       // Amber-500: glowing bar numbers
      mainGlyphColor: '#f8fafc',       // Slate-50: bright white notes, clefs, accidentals, tab numbers
      secondaryGlyphColor: '#cbd5e1',  // Slate-300: crisp secondary notation
      scoreInfoColor: '#38bdf8',       // Sky-400: tuning and tempo markings
    };
  }
  return {
    staffLineColor: '#cbd5e1',         // Slate-300: crisp engraved staff lines
    barSeparatorColor: '#475569',      // Slate-600: clear measure bars
    barNumberColor: '#dc2626',         // Red-600: classic red measure numbers
    mainGlyphColor: '#0f172a',         // Slate-900: rich black engraved notes & tab numbers
    secondaryGlyphColor: '#64748b',    // Slate-500: secondary notation
    scoreInfoColor: '#0f172a',         // Slate-900: tuning and tempo markings
  };
};

/**
 * Updates AlphaTab's display resources and triggers internal settings propagation.
 * AlphaTab requires calling `updateSettings()` to inform the renderer of resource changes.
 */
const applyThemeToApi = (api: any, res: ReturnType<typeof getThemeResources>) => {
  if (!api?.settings?.display?.resources) return;
  try {
    api.settings.fillFromJson({ display: { resources: res } });
  } catch {
    // fallback
  }
  try {
    const Color = (api.settings.display.resources.staffLineColor as any)?.constructor;
    if (Color?.fromJson) {
      api.settings.display.resources.staffLineColor = Color.fromJson(res.staffLineColor);
      api.settings.display.resources.barSeparatorColor = Color.fromJson(res.barSeparatorColor);
      api.settings.display.resources.barNumberColor = Color.fromJson(res.barNumberColor);
      api.settings.display.resources.mainGlyphColor = Color.fromJson(res.mainGlyphColor);
      api.settings.display.resources.secondaryGlyphColor = Color.fromJson(res.secondaryGlyphColor);
      api.settings.display.resources.scoreInfoColor = Color.fromJson(res.scoreInfoColor);
    }
  } catch {
    // ignore
  }
  try {
    api.updateSettings();
  } catch (e) {
    console.warn('AlphaTab updateSettings notice:', e);
  }
};

const AlphaTexRenderer: React.FC<AlphaTexRendererProps> = ({
  alphaTex,
  title,
  tempo,
  showValidation = false,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<any>(null);
  const [status, setStatus] = useState('Starting...');
  const [validationResult, setValidationResult] = useState<any>(null);
  const [renderComplete, setRenderComplete] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const [audioLoading, setAudioLoading] = useState(false);
  const [playerState, setPlayerState] = useState(0); // 0=stopped, 1=playing, 2=paused
  const [currentTime, setCurrentTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [metronomeOn, setMetronomeOn] = useState(false);
  const [countInOn, setCountInOn] = useState(false);

  // Score View Mode: 'dark' (Dark Stage) vs 'light' (Studio Paper)
  const [scoreTheme, setScoreTheme] = useState<'dark' | 'light'>('light');
  const scoreThemeRef = useRef<'dark' | 'light'>('light');

  // Initialize selected instrument from localStorage or default to Steel Acoustic (25)
  const [selectedInstrument, setSelectedInstrument] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = parseInt(saved, 10);
          if (INSTRUMENT_OPTIONS.some(inst => inst.id === parsed)) {
            return parsed;
          }
        }
      } catch {
        // ignore
      }
    }
    return 25;
  });

  const selectedInstrumentRef = useRef<number>(selectedInstrument);
  useEffect(() => {
    selectedInstrumentRef.current = selectedInstrument;
  }, [selectedInstrument]);

  const isSoundFontLoadedRef = useRef(false);
  const pendingPlayRef = useRef(false);

  // Synchronize instrument choice across all AlphaTexRenderer instances on the page
  useEffect(() => {
    const handleInstrumentSync = (e: Event) => {
      const customEvent = e as CustomEvent<{ program: number }>;
      const newProgram = customEvent.detail?.program;
      if (typeof newProgram === 'number' && INSTRUMENT_OPTIONS.some(inst => inst.id === newProgram)) {
        if (selectedInstrumentRef.current !== newProgram) {
          setSelectedInstrument(newProgram);
          selectedInstrumentRef.current = newProgram;
          if (apiRef.current?.score) {
            applyInstrumentToScore(apiRef.current.score, newProgram);
            try {
              apiRef.current.loadMidiForScore();
            } catch {
              // ignore
            }
          }
        }
      }
    };

    window.addEventListener(INSTRUMENT_CHANGE_EVENT, handleInstrumentSync);
    return () => {
      window.removeEventListener(INSTRUMENT_CHANGE_EVENT, handleInstrumentSync);
    };
  }, []);

  // Dynamic score theme updater
  const updateScoreTheme = useCallback((nextTheme: 'dark' | 'light') => {
    setScoreTheme(nextTheme);
    scoreThemeRef.current = nextTheme;
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      } catch {
        // ignore
      }
    }
    if (apiRef.current) {
      const res = getThemeResources(nextTheme);
      applyThemeToApi(apiRef.current, res);
      try {
        apiRef.current.render();
      } catch (e) {
        console.warn('AlphaTab re-render notice:', e);
      }
    }
  }, []);

  // Toggle between Dark Stage and Studio Paper
  const toggleScoreTheme = useCallback(() => {
    const nextTheme = scoreThemeRef.current === 'dark' ? 'light' : 'dark';
    updateScoreTheme(nextTheme);
  }, [updateScoreTheme]);

  // Synchronize with global theme changes and localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isDark = document.documentElement.classList.contains('dark');
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      let targetTheme: 'dark' | 'light' = isDark ? 'dark' : 'light';
      if (saved === 'light' || saved === 'dark') {
        targetTheme = saved;
      }
      setScoreTheme(targetTheme);
      scoreThemeRef.current = targetTheme;

      const handleGlobalThemeChange = (e: Event) => {
        const customEvent = e as CustomEvent<{ theme: 'light' | 'dark' }>;
        const next = customEvent.detail?.theme;
        if (next === 'light' || next === 'dark') {
          updateScoreTheme(next);
        }
      };

      window.addEventListener('theme-change', handleGlobalThemeChange);
      return () => window.removeEventListener('theme-change', handleGlobalThemeChange);
    }
  }, [updateScoreTheme]);

  useEffect(() => {
    if (!alphaTex || !alphaTex.trim()) {
      return;
    }
    let isMounted = true;

    // Suppress AlphaTab internal errors from showing as Next.js runtime error overlay
    const suppressAlphaTabError = (e: ErrorEvent) => {
      if (e.message === '[object Event]' ||
          e.error?.toString() === '[object Event]' ||
          e.filename?.includes('alphatab')) {
        e.preventDefault();
        return true;
      }
    };
    window.addEventListener('error', suppressAlphaTabError);

    const renderAlphaTex = async () => {
      try {
        // Validate the AlphaTex input first
        const validation = AlphaTexValidator.validate(alphaTex);
        setValidationResult(validation);

        if (!validation.isValid && showValidation) {
          setStatus(`Validation failed: ${validation.errors.join(', ')}`);
          return;
        }

        setStatus('Importing AlphaTab...');
        const alphaTab = await import('@coderline/alphatab');

        if (!isMounted || !containerRef.current) return;
        setStatus('AlphaTab imported');

        // Ensure container has responsive dimensions
        containerRef.current.style.width = '100%';
        containerRef.current.style.maxWidth = '100%';
        containerRef.current.style.overflowX = 'auto';
        containerRef.current.style.height = 'auto';
        containerRef.current.style.minHeight = '140px';
        containerRef.current.style.position = 'relative';
        containerRef.current.innerHTML = '';

        setStatus('Creating notation renderer...');

        // Determine initial theme matching current state or global mode
        let initialTheme: 'dark' | 'light' = 'light';
        if (typeof window !== 'undefined') {
          if (document.documentElement.classList.contains('dark')) {
            initialTheme = 'dark';
          }
          try {
            const saved = localStorage.getItem(THEME_STORAGE_KEY);
            if (saved === 'light' || saved === 'dark') {
              initialTheme = saved;
            }
          } catch {
            // ignore
          }
        }
        if (scoreThemeRef.current) {
          initialTheme = scoreThemeRef.current;
        }

        const themeRes = getThemeResources(initialTheme);

        // AlphaTab settings with responsive scaling and custom theme resources
        const api = new alphaTab.AlphaTabApi(containerRef.current, {
          core: {
            useWorkers: false, // Direct, synchronous rendering on main canvas; eliminates missing worker script & IPC lag
            fontDirectory: '/alphatab/font/'
          },
          display: {
            scale: 0.9,
            stretchForce: 0.8,
            padding: [16, 16],
            resources: themeRes
          },
          notation: {
            rhythmMode: 'hidden', // Hide rhythm stems for clean tablature
            notationMode: 'songbook'
          },
          player: {
            enablePlayer: true,
            enableCursor: true,
            soundFont: null, // Zero soundfont download on page load
            scrollMode: 0 // off - don't scroll during playback
          }
        });

        applyThemeToApi(api, themeRes);
        apiRef.current = api;

        setStatus('Notation initialized, setting up playback...');

        api.renderStarted.on(() => {
          if (isMounted) setStatus('Rendering notation...');
        });

        api.renderFinished.on(() => {
          if (isMounted) {
            setStatus('Render complete!');
            setRenderComplete(true);
          }
        });

        api.error.on((error: any) => {
          const message = error?.message || error?.detail?.message ||
                          error?.error?.message || (typeof error === 'string' ? error : 'rendering issue');
          console.warn('AlphaTab notice:', message);
          if (isMounted) setStatus('Loaded notation');
        });

        // Set initial instrument program before initial MIDI generation
        api.scoreLoaded.on((score: any) => {
          if (isMounted) {
            applyInstrumentToScore(score, selectedInstrumentRef.current);
            if (scoreThemeRef.current) {
              applyThemeToApi(api, getThemeResources(scoreThemeRef.current));
            }
          }
        });

        api.playerReady.on(() => {
          if (isMounted) {
            setPlayerReady(true);
            setAudioLoading(false);
            isSoundFontLoadedRef.current = true;

            // Adjust playback speed to match desired tempo (default AlphaTab tempo is 120 BPM)
            if (tempo && api) {
              api.playbackSpeed = tempo / 120;
            }

            if (pendingPlayRef.current) {
              pendingPlayRef.current = false;
              try {
                api.play();
              } catch (e) {
                console.warn('Auto-play after soundfont load failed:', e);
              }
            }
          }
        });

        api.playerStateChanged.on((e: any) => {
          if (isMounted) setPlayerState(e.state);
        });

        api.playerPositionChanged.on((e: any) => {
          if (isMounted) {
            setCurrentTime(e.currentTime);
            setEndTime(e.endTime);
          }
        });

        setStatus('Loading tablature...');

        // Process the AlphaTex string to handle escape sequences
        const processedAlphaTex = alphaTex.replace(/\\n/g, '\n');
        api.tex(processedAlphaTex);

      } catch (err) {
        console.error('Notation render error:', err);
        if (isMounted) setStatus('Error loading notation');
      }
    };

    renderAlphaTex();

    return () => {
      isMounted = false;
      window.removeEventListener('error', suppressAlphaTabError);
      if (apiRef.current) {
        try { apiRef.current.stop(); } catch (e) { /* ignore */ }
        try { apiRef.current.destroy(); } catch (e) { /* ignore */ }
        apiRef.current = null;
      }
    };
  }, [alphaTex, title, tempo, showValidation]);

  const handlePlayPause = useCallback(async () => {
    if (!apiRef.current) return;

    if (isSoundFontLoadedRef.current) {
      apiRef.current.playPause();
      return;
    }

    // On-demand soundfont load: fetched once globally, then injected into player
    try {
      setAudioLoading(true);
      pendingPlayRef.current = true;
      const soundFontData = await getSharedSoundFont();
      if (apiRef.current) {
        apiRef.current.loadSoundFont(soundFontData.buffer);
      }
    } catch (err) {
      console.error('Failed to load SoundFont:', err);
      setAudioLoading(false);
      pendingPlayRef.current = false;
    }
  }, []);

  const handleStop = useCallback(() => {
    if (!apiRef.current) return;
    try {
      apiRef.current.stop();
    } catch (e) {
      // ignore
    }
  }, []);

  const handleSpeedChange = useCallback((newSpeed: number) => {
    setPlaybackSpeed(newSpeed);
    if (apiRef.current) {
      const baseSpeed = tempo ? tempo / 120 : 1.0;
      apiRef.current.playbackSpeed = baseSpeed * newSpeed;
    }
  }, [tempo]);

  const handleInstrumentChange = useCallback((program: number) => {
    setSelectedInstrument(program);
    selectedInstrumentRef.current = program;

    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, program.toString());
      } catch {
        // ignore
      }
      window.dispatchEvent(
        new CustomEvent(INSTRUMENT_CHANGE_EVENT, { detail: { program } })
      );
    }

    if (apiRef.current?.score) {
      applyInstrumentToScore(apiRef.current.score, program);
      try {
        apiRef.current.loadMidiForScore();
      } catch {
        // ignore
      }
    }
  }, []);

  const handleCountInToggle = useCallback(() => {
    const next = !countInOn;
    setCountInOn(next);
    if (apiRef.current) {
      apiRef.current.countInVolume = next ? 1 : 0;
    }
  }, [countInOn]);

  const handleMetronomeToggle = useCallback(() => {
    const next = !metronomeOn;
    setMetronomeOn(next);
    if (apiRef.current) {
      apiRef.current.metronomeVolume = next ? 1 : 0;
    }
  }, [metronomeOn]);

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!alphaTex || !alphaTex.trim()) {
    return null;
  }

  return (
    <div className={`w-full max-w-full min-w-0 mb-4 overflow-hidden ${className}`}>
      {/* Precision Playhead & Dark Scrollbar Styles */}
      <style>{`
        /* Completely eliminate muddy bar cursor overlay */
        .at-cursor-bar {
          display: none !important;
        }
        /* Laser playhead needle - vibrant, high-contrast, fully visible */
        .at-cursor-beat {
          background: #00f0ff !important;
          width: 300px !important; /* AlphaTab scales by 0.01, resulting in a crisp 3.0px rendered needle */
          opacity: 1 !important;
          pointer-events: none !important;
        }
        .score-theme-light .at-cursor-beat {
          background: #1d4ed8 !important; /* Bold Royal Blue for Studio Paper */
          width: 300px !important;
          opacity: 1 !important;
        }
        .at-selection div {
          background: rgba(56, 189, 248, 0.2) !important;
        }
        .score-theme-light .at-selection div {
          background: rgba(59, 130, 246, 0.2) !important;
        }
        /* Sleek modern custom dark scrollbar - eliminates native Windows scrollbars */
        .alphatab-container {
          scrollbar-width: thin !important;
          scrollbar-color: #334155 transparent !important;
        }
        .alphatab-container::-webkit-scrollbar {
          height: 6px !important;
        }
        .alphatab-container::-webkit-scrollbar-track {
          background: transparent !important;
        }
        .alphatab-container::-webkit-scrollbar-thumb {
          background: #334155 !important;
          border-radius: 9999px !important;
        }
        .alphatab-container::-webkit-scrollbar-thumb:hover {
          background: #475569 !important;
        }
      `}</style>

      {/* Optional Title & Theme View Switcher */}
      <div className="flex items-center justify-between mb-2">
        {title ? (
          <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
            <span className="w-1.5 h-3.5 rounded-full bg-cyan-500"></span>
            <span>{title}</span>
          </h4>
        ) : <div />}

        {/* Studio Paper vs Dark Stage View Toggle */}
        <button
          type="button"
          onClick={toggleScoreTheme}
          className={`text-xs px-2.5 py-1 rounded-lg border transition-all flex items-center gap-1.5 font-medium cursor-pointer shadow-xs ${
            scoreTheme === 'light'
              ? 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/30'
              : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700 hover:border-slate-600'
          }`}
          title={scoreTheme === 'light' ? 'Switch to Dark Stage notation' : 'Switch to Clean Studio Paper notation'}
        >
          <span>{scoreTheme === 'light' ? '🌙 Dark Stage' : '📄 Studio Paper'}</span>
        </button>
      </div>

      {/* Validation Results (hidden unless showValidation=true) */}
      {showValidation && validationResult && (
        <div className="mb-3">
          {!validationResult.isValid && (
            <div className="bg-red-950/40 border border-red-500/30 rounded-lg p-3 mb-2">
              <h5 className="text-sm font-medium text-red-300 mb-1">Validation Errors:</h5>
              <ul className="text-xs text-red-400 space-y-0.5">
                {validationResult.errors.map((error: string, index: number) => (
                  <li key={index}>• {error}</li>
                ))}
              </ul>
            </div>
          )}

          {validationResult.warnings.length > 0 && (
            <div className="bg-amber-950/40 border border-amber-500/30 rounded-lg p-3 mb-2">
              <h5 className="text-sm font-medium text-amber-300 mb-1">Warnings:</h5>
              <ul className="text-xs text-amber-400 space-y-0.5">
                {validationResult.warnings.map((warning: string, index: number) => (
                  <li key={index}>• {warning}</li>
                ))}
              </ul>
            </div>
          )}

          {validationResult.isValid && validationResult.errors.length === 0 && (
            <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-lg p-2 mb-2">
              <span className="text-xs text-emerald-300">Valid AlphaTex notation</span>
            </div>
          )}
        </div>
      )}

      {/* AlphaTex String Display - Hidden by default */}
      {showValidation && (
        <div className="bg-slate-950/80 border border-slate-800 rounded-lg p-3 mb-3">
          <h5 className="text-sm font-medium text-slate-300 mb-1">AlphaTex:</h5>
          <code className="text-xs text-slate-400 font-mono break-all">{alphaTex}</code>
        </div>
      )}

      {/* Render Container */}
      <div
        ref={containerRef}
        className={`alphatab-container w-full max-w-full min-w-0 min-h-[140px] rounded-xl p-3 sm:p-4 transition-all duration-200 overflow-x-auto shadow-inner ${
          scoreTheme === 'light'
            ? 'bg-[#fcfbf9] border border-stone-300 score-theme-light shadow-md'
            : 'bg-slate-950/95 border border-slate-800 text-slate-100'
        }`}
        style={{ minHeight: '140px', width: '100%', maxWidth: '100%' }}
      />

      {/* Playback Controls Console */}
      {renderComplete && (
        <div className="mt-3 px-3 sm:px-4 py-3 bg-white dark:bg-slate-950/90 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl text-xs flex flex-wrap items-center justify-between gap-3 text-slate-800 dark:text-slate-100">
          {/* Play/Pause, Stop & Time Counter */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePlayPause}
              disabled={audioLoading}
              className={`h-9 sm:h-10 px-3 sm:px-4 flex items-center justify-center gap-1.5 rounded-xl font-bold transition-all shadow-md ${
                audioLoading
                  ? 'bg-cyan-500/50 text-slate-950 cursor-wait animate-pulse'
                  : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-cyan-500/25 hover:scale-105 active:scale-95 cursor-pointer'
              }`}
              title={audioLoading ? 'Loading audio...' : playerState === 1 ? 'Pause' : 'Play'}
            >
              {audioLoading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                  </svg>
                  <span className="text-xs hidden sm:inline">Loading...</span>
                </>
              ) : playerState === 1 ? (
                <>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <rect x="5" y="4" width="3" height="12" rx="1" />
                    <rect x="12" y="4" width="3" height="12" rx="1" />
                  </svg>
                  <span className="text-xs">Pause</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                  <span className="text-xs">Play</span>
                </>
              )}
            </button>

            <button
              onClick={handleStop}
              disabled={!playerReady}
              className={`h-9 sm:h-10 w-9 sm:w-10 flex items-center justify-center rounded-xl transition-all ${
                playerReady
                  ? 'bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:text-slate-900 dark:hover:text-white cursor-pointer active:scale-95'
                  : 'bg-slate-100/50 dark:bg-slate-900/50 text-slate-400 dark:text-slate-600 border border-slate-200 dark:border-slate-800/60 cursor-not-allowed'
              }`}
              title="Stop"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <rect x="5" y="5" width="10" height="10" rx="1.5" />
              </svg>
            </button>

            {/* Time Counter */}
            <span className="text-[11px] sm:text-xs font-mono font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 px-2.5 py-1.5 sm:py-2 rounded-xl border border-slate-200 dark:border-slate-800">
              {formatTime(currentTime)} <span className="text-slate-400 dark:text-slate-500">/</span> {formatTime(endTime || 0)}
            </span>
          </div>

          {/* Speed Preset Controls */}
          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900/90 px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800">
            <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider hidden md:inline">Speed:</span>
            {[0.5, 0.75, 1.0, 1.25].map((speed) => (
              <button
                key={speed}
                type="button"
                onClick={() => handleSpeedChange(speed)}
                className={`text-[11px] px-1.5 sm:px-2 py-0.5 rounded-md font-mono font-bold transition-all cursor-pointer ${
                  playbackSpeed === speed
                    ? 'bg-blue-600 dark:bg-cyan-500 text-white dark:text-slate-950 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                {speed}x
              </button>
            ))}
          </div>

          {/* Instrument Selector */}
          <div className="flex items-center gap-1">
            <div className="inline-flex rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-0.5 sm:p-1" role="group">
              {INSTRUMENT_OPTIONS.map((inst) => {
                const isActive = selectedInstrument === inst.id;
                return (
                  <button
                    key={inst.id}
                    type="button"
                    onClick={() => handleInstrumentChange(inst.id)}
                    className={`text-xs px-2 sm:px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 font-medium cursor-pointer ${
                      isActive
                        ? 'bg-blue-600/20 dark:bg-cyan-500/20 text-blue-700 dark:text-cyan-300 border border-blue-500/30 dark:border-cyan-500/40 shadow-xs font-bold'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800/60'
                    }`}
                    title={inst.title}
                  >
                    <span>{inst.icon}</span>
                    <span className="hidden md:inline">{inst.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Practice Tools: Count-in & Metronome */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={handleCountInToggle}
              className={`text-xs px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl border transition-all cursor-pointer font-semibold flex items-center gap-1 ${
                countInOn
                  ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/40 shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
              title="Count-in before playback"
            >
              <span>⏱️</span>
              <span className="hidden sm:inline">Count-in</span>
            </button>
            <button
              onClick={handleMetronomeToggle}
              className={`text-xs px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl border transition-all cursor-pointer font-semibold flex items-center gap-1 ${
                metronomeOn
                  ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/40 shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
              title="Toggle metronome click"
            >
              <span>🔔</span>
              <span className="hidden sm:inline">Metronome</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlphaTexRenderer;
