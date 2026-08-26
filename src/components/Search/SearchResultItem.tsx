"use client";

import React from 'react';
import Link from 'next/link';
import type { ContentEntry } from '@/lib/contentIndex';
import { getContentTypeLabel } from '@/lib/searchUtils';

const TYPE_COLORS: Record<string, { bg: string; text: string }> = {
  'chord': { bg: 'bg-green-100', text: 'text-green-700' },
  'scale': { bg: 'bg-blue-100', text: 'text-blue-700' },
  'interval': { bg: 'bg-purple-100', text: 'text-purple-700' },
  'mode': { bg: 'bg-indigo-100', text: 'text-indigo-700' },
  'progression': { bg: 'bg-orange-100', text: 'text-orange-700' },
  'song-analysis': { bg: 'bg-red-100', text: 'text-red-700' },
  'practice': { bg: 'bg-teal-100', text: 'text-teal-700' },
  'gear-lesson': { bg: 'bg-amber-100', text: 'text-amber-700' },
  'song-lesson': { bg: 'bg-pink-100', text: 'text-pink-700' },
};

interface SearchResultItemProps {
  entry: ContentEntry;
  isSelected: boolean;
  onClick: () => void;
}

export default function SearchResultItem({ entry, isSelected, onClick }: SearchResultItemProps) {
  const colors = TYPE_COLORS[entry.contentType] || { bg: 'bg-gray-100', text: 'text-gray-700' };

  return (
    <Link
      href={entry.url}
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 text-left transition-colors ${
        isSelected ? 'bg-blue-50' : 'hover:bg-gray-50'
      }`}
      role="option"
      aria-selected={isSelected}
    >
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-gray-900 truncate">{entry.title}</div>
        {entry.difficulty && (
          <span className="text-xs text-gray-500 capitalize">{entry.difficulty}</span>
        )}
      </div>
      <span className={`flex-shrink-0 text-xs px-2 py-0.5 rounded-full ${colors.bg} ${colors.text}`}>
        {getContentTypeLabel(entry.contentType)}
      </span>
    </Link>
  );
}
