"use client";

import React from 'react';
import Link from 'next/link';
import type { ContentEntry } from '@/lib/contentIndex';
import { getContentTypeLabel } from '@/lib/searchUtils';

const TYPE_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  'chord': { bg: 'bg-emerald-100 dark:bg-emerald-500/10', text: 'text-emerald-800 dark:text-emerald-400', border: 'border-emerald-300 dark:border-emerald-500/30' },
  'scale': { bg: 'bg-cyan-100 dark:bg-cyan-500/10', text: 'text-cyan-800 dark:text-cyan-400', border: 'border-cyan-300 dark:border-cyan-500/30' },
  'interval': { bg: 'bg-blue-100 dark:bg-blue-500/10', text: 'text-blue-800 dark:text-blue-400', border: 'border-blue-300 dark:border-blue-500/30' },
  'mode': { bg: 'bg-teal-100 dark:bg-teal-500/10', text: 'text-teal-800 dark:text-teal-400', border: 'border-teal-300 dark:border-teal-500/30' },
  'progression': { bg: 'bg-violet-100 dark:bg-violet-500/10', text: 'text-violet-800 dark:text-violet-400', border: 'border-violet-300 dark:border-violet-500/30' },
  'song-analysis': { bg: 'bg-amber-100 dark:bg-amber-500/10', text: 'text-amber-800 dark:text-amber-400', border: 'border-amber-300 dark:border-amber-500/30' },
  'practice': { bg: 'bg-emerald-100 dark:bg-emerald-500/10', text: 'text-emerald-800 dark:text-emerald-400', border: 'border-emerald-300 dark:border-emerald-500/30' },
  'gear-lesson': { bg: 'bg-purple-100 dark:bg-purple-500/10', text: 'text-purple-800 dark:text-purple-400', border: 'border-purple-300 dark:border-purple-500/30' },
  'song-lesson': { bg: 'bg-orange-100 dark:bg-orange-500/10', text: 'text-orange-800 dark:text-orange-400', border: 'border-orange-300 dark:border-orange-500/30' },
};

interface SearchResultItemProps {
  entry: ContentEntry;
  isSelected: boolean;
  onClick: () => void;
}

export default function SearchResultItem({ entry, isSelected, onClick }: SearchResultItemProps) {
  const colors = TYPE_COLORS[entry.contentType] || { bg: 'bg-slate-100 dark:bg-slate-800', text: 'text-slate-700 dark:text-slate-300', border: 'border-slate-300 dark:border-slate-700' };

  return (
    <Link
      href={entry.url}
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 text-left transition-colors border-b border-slate-100 dark:border-slate-800/40 last:border-0 ${
        isSelected
          ? 'bg-blue-50 dark:bg-slate-800 text-blue-900 dark:text-white'
          : 'hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-200'
      }`}
      role="option"
      aria-selected={isSelected}
    >
      <div className="flex-1 min-w-0">
        <div className="text-sm font-semibold truncate text-slate-900 dark:text-white">{entry.title}</div>
        {entry.difficulty && (
          <span className="text-xs text-slate-500 dark:text-slate-400 capitalize">{entry.difficulty}</span>
        )}
      </div>
      <span className={`flex-shrink-0 text-[11px] px-2 py-0.5 rounded-full border ${colors.bg} ${colors.text} ${colors.border}`}>
        {getContentTypeLabel(entry.contentType)}
      </span>
    </Link>
  );
}
