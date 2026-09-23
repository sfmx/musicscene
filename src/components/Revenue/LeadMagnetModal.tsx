'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { REVENUE_CONFIG } from '@/lib/revenueConfig';

const STORAGE_SUBSCRIBED = 'musicscene_lead_magnet_subscribed';
const STORAGE_DISMISSED = 'musicscene_lead_magnet_dismissed';
const SNOOZE_DAYS = 14;

export default function LeadMagnetModal() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isTeaserVisible, setIsTeaserVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Check if current route is eligible for lead magnet (educational and practice pages)
  const isEligibleRoute = Boolean(
    pathname &&
    (pathname.startsWith('/lessons') || pathname === '/' || pathname.startsWith('/tools')) &&
    !pathname.includes('/privacy-policy') &&
    !pathname.includes('/terms-of-service') &&
    !pathname.includes('/about')
  );

  const isSuppressed = useCallback(() => {
    if (typeof window === 'undefined') return true;
    try {
      if (localStorage.getItem(STORAGE_SUBSCRIBED) === 'true') {
        return true;
      }
      const dismissedTime = localStorage.getItem(STORAGE_DISMISSED);
      if (dismissedTime) {
        const diffDays = (Date.now() - parseInt(dismissedTime, 10)) / (1000 * 60 * 60 * 24);
        if (diffDays < SNOOZE_DAYS) {
          return true;
        }
      }
    } catch {
      // localStorage unavailable
    }
    return false;
  }, []);

  useEffect(() => {
    if (!isEligibleRoute) {
      setIsTeaserVisible(false);
      setIsOpen(false);
      return;
    }

    if (isSuppressed()) {
      setIsTeaserVisible(false);
      return;
    }

    // Show subtle floating teaser after 5 seconds
    const teaserTimer = setTimeout(() => {
      if (!isSuppressed()) {
        setIsTeaserVisible(true);
      }
    }, 5000);

    // Auto slide-in after 35 seconds of engaged reading
    const modalTimer = setTimeout(() => {
      if (!isSuppressed()) {
        setIsOpen(true);
      }
    }, 35000);

    // Desktop exit-intent trigger
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5 && !isSuppressed() && window.innerWidth >= 768) {
        setIsOpen(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(teaserTimer);
      clearTimeout(modalTimer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isEligibleRoute, isSuppressed]);

  const handleDismiss = () => {
    setIsOpen(false);
    setIsTeaserVisible(false);
    try {
      localStorage.setItem(STORAGE_DISMISSED, Date.now().toString());
    } catch {
      // ignore
    }
  };

  const triggerDownload = () => {
    const link = document.createElement('a');
    link.href = '/downloads/fretboard-interval-modal-roadmap.pdf';
    link.download = 'fretboard-interval-modal-roadmap.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    setStatus('loading');

    // Trigger PDF file download immediately
    triggerDownload();

    // Submit to newsletter endpoint if configured
    if (REVENUE_CONFIG.newsletterEndpoint) {
      try {
        await fetch(REVENUE_CONFIG.newsletterEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, source: 'lead_magnet_fretboard_pdf' }),
        });
      } catch (err) {
        console.warn('Newsletter submission error:', err);
      }
    }

    try {
      localStorage.setItem(STORAGE_SUBSCRIBED, 'true');
    } catch {
      // ignore
    }

    setStatus('success');
  };

  if (!isEligibleRoute) return null;

  return (
    <>
      {/* Floating Teaser Pill in bottom-right corner */}
      {isTeaserVisible && !isOpen && status !== 'success' && (
        <div className="fixed bottom-5 right-5 z-40 animate-fade-in-up">
          <div className="flex items-center gap-1.5 bg-gradient-to-r from-blue-700 to-indigo-700 text-white px-3.5 py-2 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer border border-white/20">
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 text-xs font-semibold tracking-wide cursor-pointer"
            >
              <span className="text-sm">🎁</span>
              <span>Free Fretboard PDF</span>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDismiss();
              }}
              className="text-white/70 hover:text-white ml-1 p-0.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              title="Dismiss"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Main Value Exchange Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div
            className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-slate-800 animate-scale-up"
            role="dialog"
            aria-modal="true"
          >
            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="absolute top-3.5 right-3.5 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-500 dark:text-slate-400 hover:text-gray-800 dark:hover:text-white transition-colors cursor-pointer"
              title="Close"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header with gradient banner */}
            <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 px-6 pt-7 pb-6 text-white text-center relative">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mb-3 border border-white/20">
                <span className="text-2xl">📄</span>
              </div>
              <span className="block text-xs font-semibold tracking-wider text-blue-200 uppercase mb-1">
                Free Printable Reference Guide
              </span>
              <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                The Ultimate Fretboard &amp; Modal Roadmap
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 mt-1 max-w-sm mx-auto">
                High-resolution 3-page cheat sheet for practicing guitar anywhere — zero guesswork.
              </p>
            </div>

            {/* Body */}
            <div className="p-6">
              {status === 'success' ? (
                <div className="text-center py-4">
                  <div className="w-14 h-14 bg-green-100 dark:bg-emerald-950/60 text-green-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl border border-transparent dark:border-emerald-800/40">
                    ✓
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Download Started!</h4>
                  <p className="text-sm text-gray-600 dark:text-slate-300 mb-4">
                    Your PDF has been downloaded to your device. Keep it on your desktop or print it for your practice stand!
                  </p>
                  <button
                    onClick={triggerDownload}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-slate-950 rounded-lg text-sm font-medium transition-colors cursor-pointer"
                  >
                    <span>Download Again</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                </div>
              ) : (
                <>
                  {/* Feature checklist */}
                  <ul className="space-y-2 mb-5 text-xs sm:text-sm text-gray-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-amber-400 font-bold">✓</span>
                      <span><strong className="text-gray-900 dark:text-white">Complete 12-Fret Note Grid:</strong> All natural &amp; accidental notes mapped across 6 strings.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-amber-400 font-bold">✓</span>
                      <span><strong className="text-gray-900 dark:text-white">Universal Interval Matrix:</strong> Formulas, semitones &amp; harmonic colors for every interval.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-amber-400 font-bold">✓</span>
                      <span><strong className="text-gray-900 dark:text-white">The 7 Modes at a Glance:</strong> Characteristic notes &amp; song examples from Lydian to Locrian.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-amber-400 font-bold">✓</span>
                      <span><strong className="text-gray-900 dark:text-white">5 CAGED Pentatonic Box Shapes:</strong> Root positions &amp; blue note placements.</span>
                    </li>
                  </ul>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-600 dark:focus:ring-amber-400 focus:border-blue-600 dark:focus:border-amber-400 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 outline-none transition-all"
                      />
                      {errorMessage && (
                        <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errorMessage}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-2.5 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {status === 'loading' ? (
                        <span>Preparing download...</span>
                      ) : (
                        <>
                          <span>Send &amp; Download PDF</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>

                  <p className="text-[11px] text-gray-400 dark:text-slate-500 text-center mt-3">
                    Instant free download • 100% spam-free • Unsubscribe anytime with 1 click
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
