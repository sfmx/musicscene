"use client";

import React from 'react';
import Link from 'next/link';
import type { ContentEntry } from '@/lib/contentIndex';
import { getContentTypeLabel } from '@/lib/searchUtils';

const TYPE_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  'chord': { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30' },
  'scale': { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/30' },
  'interval': { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30' },
  'mode': { bg: 'bg-teal-500/10', text: 'text-teal-400', border: 'border-teal-500/30' },
  'progression': { bg: 'bg-violet-500/10', text: 'text-violet-400', border: 'border-violet-500/30' },
  'song-analysis': { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30' },
  'practice': { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30' },
  'gear-lesson': { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30' },
  'song-lesson': { bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/30' },
};

interface SearchResultItemProps {
  entry: ContentEntry;
  isSelected: boolean;
  onClick: () => void;
}

export default function SearchResultItem({ entry, isSelected, onClick }: SearchResultItemProps) {
  const colors = TYPE_COLORS[entry.contentType] || { bg: 'bg-slate-800', text: 'text-slate-300', border: 'border-slate-700' };

  return (
    <Link
      href={entry.url}
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 text-left transition-colors border-b border-slate-800/40 last:border-0 ${
        isSelected ? 'bg-slate-800 text-white' : 'hover:bg-slate-800/60 text-slate-200'
      }`}
      role="option"
      aria-selected={isSelected}
    >
      <div className="flex-1 min-w-0">
        <div className="text-sm font-semibold truncate text-white">{entry.title}</div>
        {entry.difficulty && (
          <span className="text-xs text-slate-400 capitalize">{entry.difficulty}</span>
        )}
      </div>
      <span className={`flex-shrink-0 text-[11px] px-2 py-0.5 rounded-full border ${colors.bg} ${colors.text} ${colors.border}`}>
        {getContentTypeLabel(entry.contentType)}
      </span>
    </Link>
  );
}
