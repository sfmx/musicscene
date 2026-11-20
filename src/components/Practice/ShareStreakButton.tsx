"use client";

import React, { useState } from 'react';
import ShareStreakModal from './ShareStreakModal';
import { ShareStreakOptions } from '@/lib/shareStreak';

interface ShareStreakButtonProps {
  options: ShareStreakOptions;
  className?: string;
  variant?: 'compact' | 'badge' | 'full';
}

export default function ShareStreakButton({
  options,
  className = '',
  variant = 'compact',
}: ShareStreakButtonProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const streak = options.streak || options.bestStreak || 0;

  return (
    <>
      {variant === 'badge' ? (
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30 hover:border-amber-500/50 ${className}`}
          title="Share streak and challenge friends"
        >
          <span>🔥</span>
          <span>Share {streak > 0 ? `${streak} Streak` : 'Score'}</span>
          <svg className="w-3.5 h-3.5 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
        </button>
      ) : variant === 'full' ? (
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className={`w-full py-3 px-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-400 hover:to-rose-400 text-white shadow-lg shadow-orange-500/20 transition-all ${className}`}
        >
          <span>🔥</span>
          <span>Challenge Friends {streak > 0 ? `(Streak: ${streak})` : ''}</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-sm ${className}`}
          title="Share streak and challenge friends"
        >
          <span className="text-amber-500">🔥</span>
          <span>Share {streak > 0 ? `${streak} Streak` : 'Score'}</span>
        </button>
      )}

      <ShareStreakModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        options={options}
      />
    </>
  );
}
