"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function InstallPwaPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isIos, setIsIos] = useState(false);
  const [showIosGuide, setShowIosGuide] = useState(false);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    // 1. Check if already installed & running in standalone app mode
    const standaloneMode =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true;

    if (standaloneMode) {
      setIsStandalone(true);
      return;
    }

    // 2. Check if dismissed recently (7 days)
    const dismissedTime = localStorage.getItem('musicscene_pwa_dismissed');
    if (dismissedTime && Date.now() - parseInt(dismissedTime, 10) < 7 * 24 * 60 * 60 * 1000) {
      return;
    }

    setDismissed(false);

    // 3. Detect iOS device in Safari
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isAppleDevice = /iphone|ipad|ipod/.test(userAgent);
    const isSafari = /safari/.test(userAgent) && !/chrome|crios|fxios/.test(userAgent);
    if (isAppleDevice && isSafari) {
      setIsIos(true);
    }

    // 4. Capture Chromium/Android install prompt
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        setDeferredPrompt(null);
        setDismissed(true);
      }
    } else if (isIos) {
      setShowIosGuide((prev) => !prev);
    }
  };

  const handleDismiss = () => {
    setDismissed(true);
    localStorage.setItem('musicscene_pwa_dismissed', Date.now().toString());
  };

  // Do not show if running as installed app or dismissed or desktop without prompt
  if (isStandalone || dismissed) {
    return null;
  }

  // Show if either deferred prompt is available (Android/Chrome/Edge) or iOS Safari detected
  if (!deferredPrompt && !isIos) {
    return null;
  }

  return (
    <aside aria-label="Install App" className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:w-96 z-50 animate-in slide-in-from-bottom duration-300">
      <div className="bg-slate-900/95 dark:bg-slate-900/95 border-2 border-amber-500/40 text-white rounded-2xl p-4 shadow-2xl backdrop-blur-md relative overflow-hidden">
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-amber-500/20 rounded-full blur-xl pointer-events-none" />

        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-slate-950 border border-amber-500/30 flex items-center justify-center p-1.5 shrink-0 shadow-md">
              <Image
                src="/icons/icon-192.png"
                alt="MusicScene App Icon"
                width={36}
                height={36}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-black text-white">MusicScene App</span>
                <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Free
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-tight mt-0.5">
                Instant offline practice, tuner & audio tools
              </p>
            </div>
          </div>

          <button
            onClick={handleDismiss}
            aria-label="Dismiss app install banner"
            className="text-slate-400 hover:text-white p-1 rounded-lg text-sm transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Action Button */}
        <div className="mt-3.5 flex items-center gap-2">
          <button
            onClick={handleInstallClick}
            className="flex-1 py-2 px-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black rounded-xl text-xs shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-1.5"
          >
            <span>📲</span>
            <span>{isIos ? 'Add to Home Screen' : 'Install Free App'}</span>
          </button>
          <button
            onClick={handleDismiss}
            className="py-2 px-3 text-slate-400 hover:text-white text-xs font-semibold rounded-xl border border-slate-700 hover:border-slate-600 transition-colors cursor-pointer"
          >
            Later
          </button>
        </div>

        {/* iOS Step-by-Step Popover Instructions */}
        {showIosGuide && (
          <div className="mt-3 p-3 bg-slate-950/90 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1.5 animate-in fade-in duration-200">
            <p className="font-bold text-amber-400 flex items-center gap-1">
              <span>🍎</span> Apple iOS Installation:
            </p>
            <ol className="list-decimal list-inside space-y-1 text-[11px] text-slate-300">
              <li>Tap the <strong className="text-white">Share</strong> button (box with upward arrow <span className="text-base leading-none">⎋</span>) at the bottom of Safari.</li>
              <li>Scroll down and tap <strong className="text-white">&ldquo;Add to Home Screen&rdquo;</strong> (<span className="text-base leading-none font-bold">+</span>).</li>
              <li>Tap <strong className="text-white">&ldquo;Add&rdquo;</strong> in the top right corner.</li>
            </ol>
          </div>
        )}
      </div>
    </aside>
  );
}

