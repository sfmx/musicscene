"use client";

import React from 'react';

interface SearchTriggerProps {
  onClick: () => void;
  compact?: boolean;
}

export default function SearchTrigger({ onClick, compact }: SearchTriggerProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-1.5 rounded-xl border bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-xs cursor-pointer"
      aria-label="Search all content (Ctrl+K)"
    >
      <svg className="w-4 h-4 text-slate-500 dark:text-slate-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" />
        <path strokeLinecap="round" d="m21 21-4.35-4.35" />
      </svg>
      {!compact && (
        <span className="hidden sm:flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500">
          <kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-[10px] font-mono shadow-xs text-slate-600 dark:text-slate-400">Ctrl</kbd>
          <kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-[10px] font-mono shadow-xs text-slate-600 dark:text-slate-400">K</kbd>
        </span>
      )}
    </button>
  );
}
