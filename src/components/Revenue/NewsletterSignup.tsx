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
  heading = 'Stay in Tune',
  subtext = 'Get new lessons straight to your inbox.',
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === 'true') {
        setStatus('success');
      }
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
        try { localStorage.setItem(STORAGE_KEY, 'true'); } catch { /* noop */ }
      }, 500);
      return;
    }

    try {
      const res = await fetch(REVENUE_CONFIG.newsletterEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error('Subscription failed');
      setStatus('success');
      try { localStorage.setItem(STORAGE_KEY, 'true'); } catch { /* noop */ }
    } catch {
      setErrorMessage('Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={`text-center ${isFooter ? 'text-white' : 'text-gray-700'}`}>
        <p className="text-lg font-medium">
          {REVENUE_CONFIG.newsletterEndpoint
            ? "You're subscribed!"
            : "Thanks! We'll notify you when our newsletter launches."}
        </p>
      </div>
    );
  }

  return (
    <div className={isFooter ? '' : 'bg-indigo-50 rounded-xl p-6 border border-indigo-200'}>
      <h3 className={`text-xl mb-2 ${isFooter ? 'text-white' : 'text-gray-900'}`}>{heading}</h3>
      <p className={`mb-4 ${isFooter ? 'text-gray-300' : 'text-gray-600'}`}>{subtext}</p>
      <form onSubmit={handleSubmit} className="flex max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className={`flex-grow px-4 py-2 rounded-l border-none text-gray-900 ${
            isFooter ? '' : 'border border-gray-300'
          }`}
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-r disabled:opacity-50"
        >
          {status === 'loading' ? 'Sending...' : 'Subscribe'}
        </button>
      </form>
      {status === 'error' && errorMessage && (
        <p className={`text-sm mt-2 text-center ${isFooter ? 'text-red-300' : 'text-red-600'}`}>
          {errorMessage}
        </p>
      )}
    </div>
  );
}
