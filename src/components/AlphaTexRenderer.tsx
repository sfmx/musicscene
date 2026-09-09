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
  const [playerState, setPlayerState] = useState(0); // 0=stopped, 1=playing, 2=paused
  const [currentTime, setCurrentTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [metronomeOn, setMetronomeOn] = useState(false);
  const [countInOn, setCountInOn] = useState(false);

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

        // AlphaTab settings with player enabled
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
            soundFont: '/alphatab/soundfont/sonivox.sf2',
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

        api.playerReady.on(() => {
          if (isMounted) {
            setPlayerReady(true);
            // Adjust playback speed to match desired tempo (default AlphaTab tempo is 120 BPM)
            if (tempo && api) {
              api.playbackSpeed = tempo / 120;
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

        // Force render after a delay if needed
        setTimeout(() => {
          if (isMounted) {
            try {
              api.render();
            } catch (e) {
              console.warn(`Force render failed for ${title}:`, e);
            }
          }
        }, 2000);

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

  const handlePlayPause = useCallback(() => {
    if (apiRef.current) {
      apiRef.current.playPause();
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
      apiRef.current.playbackSpeed = baseRatio * speed;
    }
  }, [tempo]);

  const handleMetronomeToggle = useCallback(() => {
    setMetronomeOn(prev => {
      const newVal = !prev;
      if (apiRef.current) {
        apiRef.current.metronomeVolume = newVal ? 1.0 : 0.0;
      }
      return newVal;
    });
  }, []);

  const handleCountInToggle = useCallback(() => {
    setCountInOn(prev => {
      const newVal = !prev;
      if (apiRef.current) {
        apiRef.current.countInVolume = newVal ? 1.0 : 0.0;
      }
      return newVal;
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

      {/* Playback Controls - shown after render, with loading state until player ready */}
      {renderComplete && (
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2 px-3 py-2 bg-gray-50 rounded-lg border border-gray-200 text-sm">
          {/* Play/Pause & Stop */}
          <div className="flex items-center gap-1">
            <button
              onClick={handlePlayPause}
              disabled={!playerReady}
              className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
                playerReady
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              title={!playerReady ? 'Loading audio...' : playerState === 1 ? 'Pause' : 'Play'}
            >
              {playerState === 1 ? (
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
                  ? 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
              title="Stop"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <rect x="4" y="4" width="12" height="12" rx="2" />
              </svg>
            </button>
          </div>

          {/* Loading indicator or Time Display */}
          {!playerReady ? (
            <span className="text-xs text-gray-400 italic">Loading audio...</span>
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
              className="w-20 h-1 accent-blue-600"
              title={`${playbackSpeed}x speed`}
            />
            <span className="text-xs text-gray-700 font-medium min-w-[28px]">{playbackSpeed}x</span>
          </div>

          {/* Metronome & Count-in */}
          <div className="flex items-center gap-1.5 ml-auto">
            <button
              onClick={handleCountInToggle}
              className={`text-xs px-2 py-1 rounded transition-colors ${
                countInOn
                  ? 'bg-blue-100 text-blue-700 border border-blue-300'
                  : 'bg-gray-100 text-gray-500 border border-gray-200 hover:bg-gray-200'
              }`}
              title="Count-in before playback"
            >
              Count-in
            </button>
            <button
              onClick={handleMetronomeToggle}
              className={`text-xs px-2 py-1 rounded transition-colors ${
                metronomeOn
                  ? 'bg-blue-100 text-blue-700 border border-blue-300'
                  : 'bg-gray-100 text-gray-500 border border-gray-200 hover:bg-gray-200'
              }`}
              title="Toggle metronome"
            >
              Metronome
            </button>
          </div>
        </div>
      )}

      {/* Status Display - Hidden for cleaner UI */}
      {/*
      {status !== 'Render complete!' && (
        <div className="mt-2 text-xs text-gray-500 text-center">
          {status}
        </div>
      )}

      {status.includes('Render complete') && (
        <div className="mt-2 text-xs text-gray-500 text-center">
          rendered by alphaTab
        </div>
      )}
      */}
    </div>
  );
};

export default AlphaTexRenderer;
