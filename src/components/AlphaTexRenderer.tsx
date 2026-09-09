"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { AlphaTexValidator } from '@/lib/alphaTexValidator';

/**
 * Generic AlphaTex Renderer Component
 * Takes any valid AlphaTex string and renders it using AlphaTab
 * Includes audio playback with tempo control, metronome, and count-in
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

// Available playback instruments (all bundled inside sonivox.sf2)
const INSTRUMENT_OPTIONS = [
  { id: 25, label: 'Steel', icon: '🎸', title: 'Acoustic Guitar (Steel Strings)' },
  { id: 24, label: 'Nylon', icon: '🪕', title: 'Acoustic Guitar (Nylon Strings)' },
  { id: 27, label: 'Electric', icon: '⚡', title: 'Electric Guitar (Clean)' },
  { id: 0, label: 'Piano', icon: '🎹', title: 'Acoustic Grand Piano' },
];

const STORAGE_KEY = 'alphatab_preferred_instrument';
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

const AlphaTexRenderer: React.FC<AlphaTexRendererProps> = ({
  alphaTex,
  title = 'Music Notation',
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

        setStatus(`Importing AlphaTab for ${title}...`);
        const alphaTab = await import('@coderline/alphatab');

        if (!isMounted || !containerRef.current) return;
        setStatus(`AlphaTab imported for ${title}`);

        // Ensure container has responsive dimensions
        containerRef.current.style.width = '100%';
        containerRef.current.style.height = 'auto';
        containerRef.current.style.minHeight = '160px';
        containerRef.current.style.marginBottom = '10px';
        containerRef.current.style.position = 'relative';
        containerRef.current.innerHTML = '';

        setStatus(`Creating API for ${title}...`);

        // AlphaTab settings with player enabled but NO soundfont preloaded on mount
        const api = new alphaTab.AlphaTabApi(containerRef.current, {
          core: {
            useWorkers: true,
            fontDirectory: '/alphatab/font/'
          },
          display: {
            scale: 1.0,
            stretchForce: 0.8,
            resources: {
              staffLineColor: '#64748b',       // slate-500: clear, readable staff lines
              barSeparatorColor: '#94a3b8',    // slate-400: clear measure bars
              barNumberColor: '#f59e0b',       // amber-500: glowing bar numbers
              mainGlyphColor: '#f8fafc',       // slate-50: crisp, bright white notes, clefs, accidentals, tab numbers
              secondaryGlyphColor: '#94a3b8',  // slate-400: clear secondary notation
              scoreInfoColor: '#38bdf8',       // sky-400: tuning and tempo markings
            }
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

        apiRef.current = api;

        setStatus(`API created for ${title}, setting up events...`);

        api.renderStarted.on(() => {
          if (isMounted) setStatus(`Rendering ${title}...`);
        });

        api.renderFinished.on(() => {
          if (isMounted) {
            setStatus(`Render complete for ${title}!`);
            setRenderComplete(true);
          }
        });

        api.error.on((error: any) => {
          const message = error?.message || error?.detail?.message ||
                          error?.error?.message || (typeof error === 'string' ? error : 'rendering issue');
          console.warn(`AlphaTab error for ${title}:`, message);
          if (isMounted) setStatus(`Loaded ${title}`);
        });

        // Set initial instrument program before initial MIDI generation
        api.scoreLoaded.on((score: any) => {
          if (isMounted) {
            applyInstrumentToScore(score, selectedInstrumentRef.current);
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

        setStatus(`Loading AlphaTex for ${title}...`);

        // Process the AlphaTex string to handle escape sequences
        const processedAlphaTex = alphaTex.replace(/\\n/g, '\n');
        api.tex(processedAlphaTex);

      } catch (err) {
        console.error(`Render error for ${title}:`, err);
        if (isMounted) setStatus(`Error loading ${title}`);
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

    // If soundfont is already loaded, toggle play/pause immediately
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
        apiRef.current.loadSoundFont(soundFontData, false);
        // Fallback: if playerReady fired synchronously or is already ready
        if (apiRef.current.isReadyForPlayback && pendingPlayRef.current) {
          pendingPlayRef.current = false;
          setPlayerReady(true);
          setAudioLoading(false);
          isSoundFontLoadedRef.current = true;
          try {
            apiRef.current.play();
          } catch (e) {
            console.warn('Playback start error:', e);
          }
        }
      }
    } catch (err) {
      console.error('Failed to load soundfont for playback:', err);
      setAudioLoading(false);
      pendingPlayRef.current = false;
    }
  }, []);

  const handleStop = useCallback(() => {
    if (apiRef.current) {
      apiRef.current.stop();
    }
  }, []);

  const handleSpeedChange = useCallback((speed: number) => {
    setPlaybackSpeed(speed);
    if (apiRef.current) {
      // Multiply user's speed choice by the base tempo ratio
      const baseRatio = tempo ? tempo / 120 : 1;
      apiRef.current.playbackSpeed = speed * baseRatio;
    }
  }, [tempo]);

  const handleInstrumentChange = useCallback((program: number) => {
    setSelectedInstrument(program);
    selectedInstrumentRef.current = program;

    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, program.toString());
        window.dispatchEvent(
          new CustomEvent(INSTRUMENT_CHANGE_EVENT, { detail: { program } })
        );
      } catch (e) {
        console.warn('Failed to persist instrument preference:', e);
      }
    }

    if (apiRef.current?.score) {
      const wasPlaying = playerState === 1;
      applyInstrumentToScore(apiRef.current.score, program);
      try {
        apiRef.current.loadMidiForScore();
        if (wasPlaying) {
          setTimeout(() => {
            try {
              apiRef.current?.play();
            } catch {
              // ignore
            }
          }, 50);
        }
      } catch (e) {
        console.warn('Failed to reload MIDI for instrument change:', e);
      }
    }
  }, [playerState]);

  const handleMetronomeToggle = useCallback(() => {
    setMetronomeOn(prev => {
      const next = !prev;
      if (apiRef.current) {
        apiRef.current.metronomeVolume = next ? 1 : 0;
      }
      return next;
    });
  }, []);

  const handleCountInToggle = useCallback(() => {
    setCountInOn(prev => {
      const next = !prev;
      if (apiRef.current) {
        apiRef.current.countInVolume = next ? 1 : 0;
      }
      return next;
    });
  }, []);

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
    <div className={`w-full mb-4 ${className}`}>
      {/* Cursor & Dark Stage styles for AlphaTab playback */}
      <style>{`
        .at-cursor-bar {
          background: rgba(245, 158, 11, 0.18) !important;
          border-left: 2px solid rgba(245, 158, 11, 0.7) !important;
          border-radius: 4px;
        }
        .at-cursor-beat {
          background: #38bdf8 !important;
          width: 3px !important;
          box-shadow: 0 0 12px rgba(56, 189, 248, 0.9), 0 0 4px #38bdf8 !important;
          border-radius: 2px;
        }
        .at-selection div {
          background: rgba(56, 189, 248, 0.2) !important;
        }
      `}</style>

      {title && (
        <h4 className="text-sm font-bold text-slate-200 mb-2.5 flex items-center gap-2">
          <span className="w-1.5 h-3.5 rounded-full bg-cyan-400"></span>
          <span>{title}</span>
        </h4>
      )}

      {/* Validation Results */}
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
        className="alphatab-container w-full min-h-[140px] bg-slate-950/80 rounded-xl p-4 border border-slate-800/80 shadow-inner overflow-x-auto"
        style={{ minHeight: '140px', width: '100%' }}
      />

      {/* Playback Controls - shown after render */}
      {renderComplete && (
        <div className="flex flex-wrap items-center justify-between gap-3 mt-3 px-4 py-3 bg-slate-950/90 rounded-xl border border-slate-800 shadow-lg text-xs">
          {/* Play/Pause & Stop */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePlayPause}
              disabled={audioLoading}
              className={`w-9 h-9 flex items-center justify-center rounded-xl font-bold transition-all shadow-md ${
                audioLoading
                  ? 'bg-cyan-500/50 text-slate-950 cursor-wait animate-pulse'
                  : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-500/25 hover:scale-105 active:scale-95 cursor-pointer'
              }`}
              title={audioLoading ? 'Loading audio...' : playerState === 1 ? 'Pause' : 'Play'}
            >
              {audioLoading ? (
                <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
              ) : playerState === 1 ? (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <rect x="5" y="4" width="3" height="12" rx="1" />
                  <rect x="12" y="4" width="3" height="12" rx="1" />
                </svg>
              ) : (
                <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              )}
            </button>
            <button
              onClick={handleStop}
              disabled={!playerReady}
              className={`w-9 h-9 flex items-center justify-center rounded-xl transition-all ${
                playerReady
                  ? 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 hover:text-white cursor-pointer'
                  : 'bg-slate-900/50 text-slate-600 border border-slate-800/60 cursor-not-allowed'
              }`}
              title="Stop"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <rect x="4" y="4" width="12" height="12" rx="2" />
              </svg>
            </button>

            {/* Time Display or Loading Indicator */}
            {audioLoading ? (
              <span className="text-xs text-cyan-400 italic font-medium animate-pulse">Loading audio...</span>
            ) : !playerReady ? (
              <span className="text-xs text-slate-400 italic hidden sm:inline">Click play to listen</span>
            ) : (
              <span className="text-xs text-slate-300 font-mono bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
                {formatTime(currentTime)} / {formatTime(endTime)}
              </span>
            )}
          </div>

          {/* Center Controls: Speed & Instrument */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Speed Control */}
            <div className="flex items-center gap-2 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
              <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Speed:</label>
              <input
                type="range"
                min="0.25"
                max="2"
                step="0.25"
                value={playbackSpeed}
                onChange={(e) => handleSpeedChange(parseFloat(e.target.value))}
                className="w-16 sm:w-20 h-1.5 accent-cyan-400 bg-slate-800 rounded-lg cursor-pointer"
                title={`${playbackSpeed}x speed`}
              />
              <span className="text-xs text-cyan-300 font-mono font-bold min-w-[28px]">{playbackSpeed}x</span>
            </div>

            {/* Sound / Instrument Selector */}
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider hidden lg:inline">Sound:</span>
              <div className="inline-flex rounded-lg bg-slate-900 border border-slate-800 p-0.5" role="group">
                {INSTRUMENT_OPTIONS.map((inst) => {
                  const isActive = selectedInstrument === inst.id;
                  return (
                    <button
                      key={inst.id}
                      type="button"
                      onClick={() => handleInstrumentChange(inst.id)}
                      className={`text-xs px-2.5 py-1 rounded-md transition-all flex items-center gap-1 font-medium cursor-pointer ${
                        isActive
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-xs font-semibold'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                      }`}
                      title={inst.title}
                    >
                      <span>{inst.icon}</span>
                      <span>{inst.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Metronome & Count-in */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={handleCountInToggle}
              className={`text-xs px-2.5 py-1 rounded-lg border transition-all cursor-pointer font-medium ${
                countInOn
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-xs font-semibold'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
              }`}
              title="Count-in before playback"
            >
              Count-in
            </button>
            <button
              onClick={handleMetronomeToggle}
              className={`text-xs px-2.5 py-1 rounded-lg border transition-all cursor-pointer font-medium ${
                metronomeOn
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-xs font-semibold'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
              }`}
              title="Toggle metronome"
            >
              Metronome
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlphaTexRenderer;
