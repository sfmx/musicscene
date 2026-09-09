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
            stretchForce: 0.8
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
      {/* Cursor styles for AlphaTab playback */}
      <style>{`
        .at-cursor-bar { background: rgba(255, 242, 0, 0.25); }
        .at-cursor-beat { background: rgba(64, 64, 255, 0.75); width: 3px; }
        .at-selection div { background: rgba(64, 64, 255, 0.1); }
      `}</style>

      {title && (
        <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
      )}

      {/* Validation Results */}
      {showValidation && validationResult && (
        <div className="mb-3">
          {!validationResult.isValid && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-2">
              <h5 className="text-sm font-medium text-red-800 mb-1">Validation Errors:</h5>
              <ul className="text-xs text-red-700">
                {validationResult.errors.map((error: string, index: number) => (
                  <li key={index}>• {error}</li>
                ))}
              </ul>
            </div>
          )}

          {validationResult.warnings.length > 0 && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-2">
              <h5 className="text-sm font-medium text-yellow-800 mb-1">Warnings:</h5>
              <ul className="text-xs text-yellow-700">
                {validationResult.warnings.map((warning: string, index: number) => (
                  <li key={index}>• {warning}</li>
                ))}
              </ul>
            </div>
          )}

          {validationResult.isValid && validationResult.errors.length === 0 && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-2 mb-2">
              <span className="text-xs text-green-700">Valid AlphaTex notation</span>
            </div>
          )}
        </div>
      )}

      {/* AlphaTex String Display - Hidden by default */}
      {showValidation && (
        <div className="bg-gray-50 rounded-lg p-3 mb-3">
          <h5 className="text-sm font-medium text-gray-800 mb-1">AlphaTex:</h5>
          <code className="text-xs text-gray-700 font-mono break-all">{alphaTex}</code>
        </div>
      )}

      {/* Render Container */}
      <div
        ref={containerRef}
        className="alphatab-container"
        style={{ minHeight: '120px', width: '100%' }}
      />

      {/* Playback Controls - shown after render */}
      {renderComplete && (
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2 px-3 py-2 bg-gray-50 rounded-lg border border-gray-200 text-sm">
          {/* Play/Pause & Stop */}
          <div className="flex items-center gap-1">
            <button
              onClick={handlePlayPause}
              disabled={audioLoading}
              className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
                audioLoading
                  ? 'bg-blue-400 text-white cursor-wait animate-pulse'
                  : 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer'
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
              className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
                playerReady
                  ? 'bg-gray-200 hover:bg-gray-300 text-gray-700 cursor-pointer'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
              title="Stop"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <rect x="4" y="4" width="12" height="12" rx="2" />
              </svg>
            </button>
          </div>

          {/* Time Display or Loading Indicator */}
          {audioLoading ? (
            <span className="text-xs text-blue-600 italic font-medium">Loading audio...</span>
          ) : !playerReady ? (
            <span className="text-xs text-gray-400 italic">Click play to listen</span>
          ) : (
            <span className="text-xs text-gray-500 font-mono min-w-[70px]">
              {formatTime(currentTime)} / {formatTime(endTime)}
            </span>
          )}

          {/* Speed Control */}
          <div className="flex items-center gap-1.5">
            <label className="text-xs text-gray-600">Speed:</label>
            <input
              type="range"
              min="0.25"
              max="2"
              step="0.25"
              value={playbackSpeed}
              onChange={(e) => handleSpeedChange(parseFloat(e.target.value))}
              className="w-16 sm:w-20 h-1 accent-blue-600 cursor-pointer"
              title={`${playbackSpeed}x speed`}
            />
            <span className="text-xs text-gray-700 font-medium min-w-[28px]">{playbackSpeed}x</span>
          </div>

          {/* Sound / Instrument Selector */}
          <div className="flex items-center gap-1 sm:gap-1.5">
            <span className="text-xs text-gray-500 font-medium hidden sm:inline">Sound:</span>
            <div className="inline-flex rounded-lg bg-gray-200/80 p-0.5" role="group">
              {INSTRUMENT_OPTIONS.map((inst) => {
                const isActive = selectedInstrument === inst.id;
                return (
                  <button
                    key={inst.id}
                    type="button"
                    onClick={() => handleInstrumentChange(inst.id)}
                    className={`text-xs px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md transition-all flex items-center gap-1 font-medium cursor-pointer ${
                      isActive
                        ? 'bg-white text-blue-700 shadow-xs ring-1 ring-black/5 font-semibold'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
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

          {/* Metronome & Count-in */}
          <div className="flex items-center gap-1.5 ml-auto">
            <button
              onClick={handleCountInToggle}
              className={`text-xs px-2 py-1 rounded transition-colors cursor-pointer ${
                countInOn
                  ? 'bg-blue-100 text-blue-700 border border-blue-300 font-medium'
                  : 'bg-gray-100 text-gray-500 border border-gray-200 hover:bg-gray-200'
              }`}
              title="Count-in before playback"
            >
              Count-in
            </button>
            <button
              onClick={handleMetronomeToggle}
              className={`text-xs px-2 py-1 rounded transition-colors cursor-pointer ${
                metronomeOn
                  ? 'bg-blue-100 text-blue-700 border border-blue-300 font-medium'
                  : 'bg-gray-100 text-gray-500 border border-gray-200 hover:bg-gray-200'
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
