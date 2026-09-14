'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if the user has already made a choice
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'true');
    setShowConsent(false);
    // In a production GDPR-compliant environment, you would dynamically 
    // load your AdSense and analytics scripts here, or trigger a page reload.
  };

  const declineCookies = () => {
    localStorage.setItem('cookie_consent', 'false');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white p-4 z-50 shadow-2xl transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-600 dark:text-slate-300">
          We use cookies and similar tracking technologies to personalize content and ads, provide social media features, and analyze our traffic. 
          By clicking &quot;Accept&quot;, you consent to our use of cookies. 
          Read our <Link href="/privacy-policy" className="text-blue-600 dark:text-cyan-400 hover:underline transition-colors">Privacy Policy</Link> for more information.
        </div>
        <div className="flex gap-3 shrink-0">
          <button 
            onClick={declineCookies}
            className="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            Decline
          </button>
          <button 
            onClick={acceptCookies}
            className="px-4 py-2 text-sm font-bold bg-blue-600 hover:bg-blue-700 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 rounded-xl transition-all shadow-sm cursor-pointer"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
