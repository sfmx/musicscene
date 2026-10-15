"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePracticeStore, type SongPracticeStatus } from '@/lib/practiceStore';

interface SaveSongActionProps {
  slug: string;
  title: string;
  artist: string;
  difficulty: string;
  key: string;
  tempo?: string;
}

export default function SaveSongAction({
  slug,
  title,
  artist,
  difficulty,
  key,
  tempo,
}: SaveSongActionProps) {
  const { mounted, songs, toggleSaveSong, updateSongStatus } = usePracticeStore();
  const [showStatusMenu, setShowStatusMenu] = useState(false);

  const existingSong = mounted ? songs.find(s => s.slug === slug) : undefined;
  const isSaved = !!existingSong;

  const handleToggle = () => {
    toggleSaveSong({
      slug,
      title,
      artist,
      difficulty,
      key,
      tempo,
    });
  };

  const handleStatusChange = (status: SongPracticeStatus) => {
    updateSongStatus(slug, status);
    setShowStatusMenu(false);
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
      {/* Primary Save / Status Button */}
      <div className="relative">
        <button
          type="button"
          onClick={handleToggle}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-xs ${
            isSaved
              ? 'bg-amber-500 hover:bg-amber-600 text-slate-950 ring-2 ring-amber-400/50'
              : 'bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950'
          }`}
          title={isSaved ? "Song is saved in your Practice Room" : "Save this song to your practice list"}
        >
          <span>{isSaved ? '★' : '☆'}</span>
          <span>
            {isSaved
              ? existingSong.status === 'mastered'
                ? 'Mastered in Practice Room'
                : 'In Practice Room'
              : 'Add to Practice Room'}
          </span>
        </button>

        {/* Status Dropdown Trigger for saved songs */}
        {isSaved && (
          <button
            type="button"
            onClick={() => setShowStatusMenu(!showStatusMenu)}
            className="ml-1 px-2 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-slate-950 text-xs font-bold transition-all"
            title="Change practice status"
          >
            ▾
          </button>
        )}

        {/* Dropdown Menu */}
        {isSaved && showStatusMenu && (
          <div className="absolute left-0 top-full mt-1.5 w-48 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl z-30 p-1.5 text-xs">
            <button
              type="button"
              onClick={() => handleStatusChange('learning')}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${
                existingSong.status === 'learning'
                  ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-bold'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <span>🎸 Currently Learning</span>
              {existingSong.status === 'learning' && <span>✓</span>}
            </button>

            <button
              type="button"
              onClick={() => handleStatusChange('queue')}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${
                existingSong.status === 'queue'
                  ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-bold'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <span>📋 In Queue (Next Up)</span>
              {existingSong.status === 'queue' && <span>✓</span>}
            </button>

            <button
              type="button"
              onClick={() => handleStatusChange('mastered')}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${
                existingSong.status === 'mastered'
                  ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 font-bold'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <span>🏆 Mastered</span>
              {existingSong.status === 'mastered' && <span>✓</span>}
            </button>

            <div className="border-t border-slate-200 dark:border-slate-800 my-1" />

            <button
              type="button"
              onClick={handleToggle}
              className="w-full text-left px-3 py-1.5 rounded-lg text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
            >
              ✕ Remove from Practice Room
            </button>
          </div>
        )}
      </div>

      {/* Print Analysis Button */}
      <button
        type="button"
        onClick={handlePrint}
        className="px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-850 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-750 transition-colors flex items-center gap-1.5"
        title="Print or Save PDF study sheet"
      >
        <span>🖨️</span>
        <span>Print Sheet</span>
      </button>

      {/* Direct link to Practice Room */}
      <Link
        href="/lessons/practice/my-practice"
        className="ml-auto text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-1"
      >
        <span>My Practice Room</span>
        <span>→</span>
      </Link>
    </div>
  );
}

