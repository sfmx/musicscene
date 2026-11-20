"use client";

import React, { useState, useEffect } from 'react';
import {
  ShareStreakOptions,
  buildStreakShareData,
  triggerNativeOrCopyShare,
} from '@/lib/shareStreak';

interface ShareStreakModalProps {
  isOpen: boolean;
  onClose: () => void;
  options: ShareStreakOptions;
  isMilestone?: boolean;
}

export default function ShareStreakModal({
  isOpen,
  onClose,
  options,
  isMilestone = false,
}: ShareStreakModalProps) {
  const [copied, setCopied] = useState(false);
  const shareData = buildStreakShareData(options);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = async () => {
    const res = await triggerNativeOrCopyShare(shareData);
    if (res === 'copied') {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer,width=600,height=500');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Glow Accent */}
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-gradient-to-tr from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header Icon & Title */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-3xl shadow-lg shadow-orange-500/25 mb-3">
            {options.streak > 0 ? '🔥' : '🎸'}
          </div>
          <h2
            id="share-modal-title"
            className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white"
          >
            {isMilestone && options.streak > 0
              ? `${options.streak}-Note Streak Milestone!`
              : options.streak > 0
              ? `Share Your ${options.streak}-Note Streak!`
              : 'Challenge Your Friends!'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
            {options.streak > 0
              ? 'Share your score and see if your friends can beat your sight-reading streak.'
              : 'Invite friends to practice guitar sight-reading with real-time mic detection.'}
          </p>
        </div>

        {/* Challenge Preview Box */}
        <div className="p-3.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/70 rounded-2xl mb-5 text-left">
          <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            Challenge Message
          </span>
          <p className="text-xs text-slate-700 dark:text-slate-200 italic leading-relaxed font-mono">
            &ldquo;{shareData.text}&rdquo;
          </p>
        </div>

        {/* Quick Action: Copy / Native Share */}
        <div className="mb-4">
          <button
            type="button"
            onClick={handleCopy}
            className={`w-full py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all ${
              copied
                ? 'bg-emerald-600 text-white'
                : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-cyan-600/20'
            }`}
          >
            {copied ? (
              <>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Link Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                <span>Share / Copy Challenge Link</span>
              </>
            )}
          </button>
        </div>

        {/* Social Quick Share Grid */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {/* X / Twitter */}
          <button
            type="button"
            onClick={() => handleSocialClick(shareData.twitterUrl)}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/60 transition-colors flex flex-col items-center gap-1 group"
            title="Share on X"
          >
            <svg className="w-5 h-5 text-slate-800 dark:text-slate-100 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300">X / Twitter</span>
          </button>

          {/* Facebook */}
          <button
            type="button"
            onClick={() => handleSocialClick(shareData.facebookUrl)}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/60 transition-colors flex flex-col items-center gap-1 group"
            title="Share on Facebook"
          >
            <svg className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300">Facebook</span>
          </button>

          {/* WhatsApp */}
          <button
            type="button"
            onClick={() => handleSocialClick(shareData.whatsappUrl)}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/60 transition-colors flex flex-col items-center gap-1 group"
            title="Send on WhatsApp"
          >
            <svg className="w-5 h-5 text-emerald-500 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
            </svg>
            <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300">WhatsApp</span>
          </button>
        </div>

        {/* Dismiss / Keep Playing Button */}
        <div className="text-center pt-2 border-t border-slate-100 dark:border-slate-800">
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-bold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white py-1 transition-colors"
          >
            Keep Playing
          </button>
        </div>
      </div>
    </div>
  );
}
