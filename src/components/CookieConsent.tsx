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
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 text-white p-4 z-50 shadow-2xl">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-300">
          We use cookies and similar tracking technologies to personalize content and ads, provide social media features, and analyze our traffic. 
          By clicking &quot;Accept&quot;, you consent to our use of cookies. 
          Read our <Link href="/privacy-policy" className="text-blue-400 hover:text-blue-300 transition-colors underline">Privacy Policy</Link> for more information.
        </div>
        <div className="flex gap-3 shrink-0">
          <button 
            onClick={declineCookies}
            className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Decline
          </button>
          <button 
            onClick={acceptCookies}
            className="px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
