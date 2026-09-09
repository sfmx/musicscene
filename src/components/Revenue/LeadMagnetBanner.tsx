'use client';

import React, { useState } from 'react';
import { REVENUE_CONFIG } from '@/lib/revenueConfig';

interface LeadMagnetBannerProps {
  className?: string;
}

export default function LeadMagnetBanner({ className = '' }: LeadMagnetBannerProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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
    triggerDownload();

    if (REVENUE_CONFIG.newsletterEndpoint) {
      try {
        await fetch(REVENUE_CONFIG.newsletterEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, source: 'inline_lead_magnet_banner' }),
        });
      } catch (err) {
        console.warn('Newsletter submission error:', err);
      }
    }

    try {
      localStorage.setItem('musicscene_lead_magnet_subscribed', 'true');
    } catch {
      // ignore
    }

    setStatus('success');
  };

  return (
    <div className={`bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-xl border border-blue-800/50 my-8 ${className}`}>
      <div className="flex flex-col lg:flex-row items-center gap-6 justify-between">
        <div className="max-w-xl text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-xs font-semibold mb-3">
            <span>🎁 FREE PRINTABLE PDF</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
            The Ultimate Fretboard & Modal Roadmap
          </h3>
          <p className="text-sm text-blue-200 leading-relaxed">
            Get our complete 3-page reference guide with the 12-fret note map, universal interval formulas, 7 modes matrix, and CAGED pentatonic boxes. Perfect for your music stand.
          </p>
        </div>

        <div className="w-full lg:w-auto min-w-[300px] max-w-md">
          {status === 'success' ? (
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 text-center">
              <span className="text-2xl block mb-1">🎉</span>
              <p className="text-sm font-semibold text-white">Your download has started!</p>
              <p className="text-xs text-blue-200 mt-1 mb-2">Check your browser downloads.</p>
              <button
                onClick={triggerDownload}
                className="text-xs text-blue-300 hover:text-white underline cursor-pointer"
              >
                Download again
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-2.5 rounded-xl bg-white text-gray-900 placeholder-gray-400 text-sm outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
              >
                {status === 'loading' ? 'Sending...' : 'Get Free PDF'}
              </button>
            </form>
          )}
          {errorMessage && (
            <p className="text-xs text-red-400 mt-2 text-center lg:text-left">{errorMessage}</p>
          )}
          <p className="text-[11px] text-blue-300/80 text-center lg:text-left mt-2">
            Instant download • 100% free • Unsubscribe anytime
          </p>
        </div>
      </div>
    </div>
  );
}
