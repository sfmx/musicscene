"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { searchAllContent, getContentTypeLabel } from '@/lib/searchUtils';
import type { ContentEntry } from '@/lib/contentIndex';
import SearchResultItem from './SearchResultItem';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ContentEntry[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Focus input when opening
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setResults([]);
      setSelectedIndex(0);
      // Small delay to ensure the modal is rendered
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Debounced search
  const handleQueryChange = useCallback((value: string) => {
    setQuery(value);
    setSelectedIndex(0);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      if (value.trim()) {
        setResults(searchAllContent(value, 20));
      } else {
        setResults([]);
      }
    }, 150);
  }, []);

  // Navigate to result
  const navigateToResult = useCallback((entry: ContentEntry) => {
    onClose();
    router.push(entry.url);
  }, [onClose, router]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(i => Math.min(i + 1, results.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(i => Math.max(i - 1, 0));
        break;
      case 'Enter':
        e.preventDefault();
        if (results[selectedIndex]) {
          navigateToResult(results[selectedIndex]);
        }
        break;
      case 'Escape':
        e.preventDefault();
        onClose();
        break;
    }
  }, [results, selectedIndex, navigateToResult, onClose]);

  // Group results by type
  const groupedResults = results.reduce<Record<string, ContentEntry[]>>((acc, entry) => {
    const type = entry.contentType;
    if (!acc[type]) acc[type] = [];
    acc[type].push(entry);
    return acc;
  }, {});

  // Flatten for index tracking
  let flatIndex = 0;

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-[100]"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[101] flex items-start justify-center pt-[15vh] px-4">
        <div
          className="bg-white rounded-xl shadow-2xl border border-gray-200 w-full max-w-xl overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Search content"
        >
          {/* Search input */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200">
            <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path strokeLinecap="round" d="m21 21-4.35-4.35" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => handleQueryChange(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search lessons, songs, theory..."
              className="flex-1 text-sm text-gray-900 placeholder:text-gray-400 outline-none bg-transparent"
              role="combobox"
              aria-expanded={results.length > 0}
              aria-controls="search-results"
              aria-activedescendant={results[selectedIndex] ? `result-${selectedIndex}` : undefined}
            />
            <kbd className="hidden sm:inline-flex px-2 py-0.5 text-xs text-gray-400 bg-gray-100 rounded">Esc</kbd>
          </div>

          {/* Results */}
          <div
            id="search-results"
            className="max-h-[60vh] overflow-y-auto"
            role="listbox"
          >
            {query.trim() && results.length === 0 && (
              <div className="px-4 py-8 text-center text-sm text-gray-500">
                No results found for &quot;{query}&quot;
              </div>
            )}

            {Object.entries(groupedResults).map(([type, entries]) => (
              <div key={type}>
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide bg-gray-50 sticky top-0">
                  {getContentTypeLabel(type)}
                </div>
                {entries.map((entry) => {
                  const currentFlatIndex = flatIndex++;
                  return (
                    <SearchResultItem
                      key={entry.id}
                      entry={entry}
                      isSelected={currentFlatIndex === selectedIndex}
                      onClick={() => navigateToResult(entry)}
                    />
                  );
                })}
              </div>
            ))}

            {!query.trim() && (
              <div className="px-4 py-6 text-center text-sm text-gray-500">
                <p>Start typing to search 202+ lessons, songs, and guides</p>
                <p className="mt-2 text-xs text-gray-400">
                  Try: &quot;blues scale&quot;, &quot;stairway&quot;, &quot;bending&quot;, &quot;tube amp&quot;
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          {results.length > 0 && (
            <div className="flex items-center justify-between px-4 py-2 border-t border-gray-100 text-xs text-gray-400">
              <span>{results.length} result{results.length !== 1 ? 's' : ''}</span>
              <div className="flex items-center gap-2">
                <span>↑↓ navigate</span>
                <span>↵ open</span>
                <span>esc close</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
