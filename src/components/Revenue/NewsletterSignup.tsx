'use client';

import React, { useState, useEffect } from 'react';
import { REVENUE_CONFIG } from '@/lib/revenueConfig';

interface NewsletterSignupProps {
  variant: 'footer' | 'inline';
  heading?: string;
  subtext?: string;
}

const STORAGE_KEY = 'musicscene_newsletter_subscribed';

export default function NewsletterSignup({
  variant,
  heading = 'Join Queued Up',
  subtext = 'New song breakdowns, harmonic secrets, and tone dials straight to your inbox.',
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Clear any legacy permanent lock from previous sessions so the signup form is accessible
  useEffect(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // localStorage unavailable
    }
  }, []);

  const isFooter = variant === 'footer';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    setStatus('loading');

    if (!REVENUE_CONFIG.newsletterEndpoint) {
      // No endpoint configured — simulate success
      setTimeout(() => {
        setStatus('success');
      }, 500);
      return;
    }

    try {
      const res = await fetch(REVENUE_CONFIG.newsletterEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: isFooter ? 'footer_newsletter' : 'inline_newsletter',
          page: typeof window !== 'undefined' ? window.location.pathname : '',
        }),
      });
      if (!res.ok) throw new Error('Subscription failed');
      setStatus('success');
    } catch {
      setErrorMessage('Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setEmail('');
    setErrorMessage('');
  };

  if (status === 'success') {
    return (
      <div className={`text-center py-2 ${isFooter ? '' : 'bg-indigo-50 dark:bg-slate-900/90 rounded-2xl p-6 border border-indigo-200 dark:border-slate-800'}`}>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold mb-2 border border-emerald-300 dark:border-emerald-800">
          <span>✓</span>
          <span>{REVENUE_CONFIG.newsletterEndpoint ? "Subscribed!" : "Received!"}</span>
        </div>
        <p className="text-base font-semibold text-slate-900 dark:text-white">
          {REVENUE_CONFIG.newsletterEndpoint
            ? "You're subscribed! Check your inbox for updates."
            : "Thanks! We'll notify you when our newsletter launches."}
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="mt-3 text-xs text-blue-600 dark:text-blue-400 hover:underline cursor-pointer font-medium"
        >
          Subscribe another email
        </button>
      </div>
    );
  }

  return (
    <div className={isFooter ? '' : 'bg-indigo-50 dark:bg-slate-900/90 rounded-2xl p-6 border border-indigo-200 dark:border-slate-800'}>
      <h3 className={`text-xl font-bold mb-2 ${isFooter ? 'text-slate-900 dark:text-white' : 'text-gray-900 dark:text-white'}`}>{heading}</h3>
      <p className={`mb-4 text-sm ${isFooter ? 'text-slate-600 dark:text-slate-300' : 'text-gray-600 dark:text-slate-300'}`}>{subtext}</p>
      <form onSubmit={handleSubmit} className="flex max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className={`flex-grow px-4 py-2 rounded-l border text-sm ${
            isFooter
              ? 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500'
              : 'border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500'
          } focus:outline-hidden`}
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-r disabled:opacity-50 cursor-pointer font-medium"
        >
          {status === 'loading' ? 'Sending...' : 'Subscribe'}
        </button>
      </form>
      {status === 'error' && errorMessage && (
        <p className={`text-sm mt-2 text-center ${isFooter ? 'text-red-300' : 'text-red-600 dark:text-red-400'}`}>
          {errorMessage}
        </p>
      )}
    </div>
  );
}
