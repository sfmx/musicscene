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
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
      aria-label="Search all content (Ctrl+K)"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" />
        <path strokeLinecap="round" d="m21 21-4.35-4.35" />
      </svg>
      {!compact && (
        <span className="hidden sm:flex items-center gap-1 text-xs text-gray-500">
          <kbd className="px-1.5 py-0.5 bg-gray-700 rounded text-[10px] font-mono">Ctrl</kbd>
          <kbd className="px-1.5 py-0.5 bg-gray-700 rounded text-[10px] font-mono">K</kbd>
        </span>
      )}
    </button>
  );
}
