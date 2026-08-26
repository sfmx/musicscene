"use client";

import React, { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { filterContent, getContentTypeLabel, getContentTypeCounts } from '@/lib/searchUtils';
import { getTagsByCategory, getTagLabel } from '@/lib/tagTaxonomy';
import type { ContentType, ContentEntry } from '@/lib/contentIndex';
import Breadcrumbs from '@/components/Breadcrumbs';

const ALL_TYPES: ContentType[] = [
  'song-analysis', 'scale', 'chord', 'interval', 'mode', 'progression',
  'practice', 'gear-lesson', 'song-lesson',
];

const DIFFICULTIES = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

const TYPE_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  'chord': { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
  'scale': { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  'interval': { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  'mode': { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200' },
  'progression': { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
  'song-analysis': { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200' },
  'practice': { bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-200' },
  'gear-lesson': { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  'song-lesson': { bg: 'bg-pink-50', text: 'text-pink-700', border: 'border-pink-200' },
};

const DIFF_COLORS: Record<string, string> = {
  'beginner': 'bg-green-100 text-green-700',
  'intermediate': 'bg-yellow-100 text-yellow-700',
  'advanced': 'bg-orange-100 text-orange-700',
  'expert': 'bg-red-100 text-red-700',
};

export default function SearchBrowsePage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Parse initial state from URL
  const initialQuery = searchParams.get('q') || '';
  const initialTypes = searchParams.get('type')?.split(',').filter(Boolean) as ContentType[] || [];
  const initialDiffs = searchParams.get('difficulty')?.split(',').filter(Boolean) || [];
  const initialTags = searchParams.get('tags')?.split(',').filter(Boolean) || [];
  const initialSort = (searchParams.get('sort') || 'relevance') as 'relevance' | 'alphabetical' | 'difficulty';

  const [query, setQuery] = useState(initialQuery);
  const [selectedTypes, setSelectedTypes] = useState<ContentType[]>(initialTypes);
  const [selectedDiffs, setSelectedDiffs] = useState<string[]>(initialDiffs);
  const [selectedTags, setSelectedTags] = useState<string[]>(initialTags);
  const [sortBy, setSortBy] = useState<'relevance' | 'alphabetical' | 'difficulty'>(initialSort);
  const [showFilters, setShowFilters] = useState(false);

  const typeCounts = useMemo(() => getContentTypeCounts(), []);

  // Popular tags for filter
  const genreTags = useMemo(() => getTagsByCategory('genre'), []);
  const techniqueTags = useMemo(() => getTagsByCategory('technique').slice(0, 12), []);

  // Filter results
  const results = useMemo(() => {
    return filterContent({
      query: query || undefined,
      types: selectedTypes.length > 0 ? selectedTypes : undefined,
      difficulties: selectedDiffs.length > 0 ? selectedDiffs : undefined,
      tags: selectedTags.length > 0 ? selectedTags : undefined,
      sort: sortBy,
    });
  }, [query, selectedTypes, selectedDiffs, selectedTags, sortBy]);

  // Update URL
  const updateUrl = useCallback((params: Record<string, string>) => {
    const url = new URLSearchParams();
    if (params.q) url.set('q', params.q);
    if (params.type) url.set('type', params.type);
    if (params.difficulty) url.set('difficulty', params.difficulty);
    if (params.tags) url.set('tags', params.tags);
    if (params.sort && params.sort !== 'relevance') url.set('sort', params.sort);
    const qs = url.toString();
    router.replace(`/search${qs ? `?${qs}` : ''}`, { scroll: false });
  }, [router]);

  const handleQueryChange = (value: string) => {
    setQuery(value);
    updateUrl({
      q: value,
      type: selectedTypes.join(','),
      difficulty: selectedDiffs.join(','),
      tags: selectedTags.join(','),
      sort: sortBy,
    });
  };

  const toggleType = (type: ContentType) => {
    const next = selectedTypes.includes(type)
      ? selectedTypes.filter(t => t !== type)
      : [...selectedTypes, type];
    setSelectedTypes(next);
    updateUrl({ q: query, type: next.join(','), difficulty: selectedDiffs.join(','), tags: selectedTags.join(','), sort: sortBy });
  };

  const toggleDifficulty = (diff: string) => {
    const next = selectedDiffs.includes(diff)
      ? selectedDiffs.filter(d => d !== diff)
      : [...selectedDiffs, diff];
    setSelectedDiffs(next);
    updateUrl({ q: query, type: selectedTypes.join(','), difficulty: next.join(','), tags: selectedTags.join(','), sort: sortBy });
  };

  const toggleTag = (tag: string) => {
    const next = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(next);
    updateUrl({ q: query, type: selectedTypes.join(','), difficulty: selectedDiffs.join(','), tags: next.join(','), sort: sortBy });
  };

  const clearFilters = () => {
    setQuery('');
    setSelectedTypes([]);
    setSelectedDiffs([]);
    setSelectedTags([]);
    setSortBy('relevance');
    router.replace('/search', { scroll: false });
  };

  const hasFilters = query || selectedTypes.length > 0 || selectedDiffs.length > 0 || selectedTags.length > 0;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs pathname="/search" pageTitle="Search" />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse All Content</h1>
        <p className="text-gray-600">Search and filter across {results.length > 0 ? '200+' : ''} lessons, songs, theory guides, and more.</p>
      </div>

      {/* Search bar */}
      <div className="flex gap-3 mb-6">
        <div className="flex-1 relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <path strokeLinecap="round" d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            placeholder="Search lessons, songs, theory..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center gap-2 px-4 py-3 rounded-lg border transition-colors ${
            showFilters ? 'bg-blue-50 border-blue-300 text-blue-700' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" d="M3 4h18M6 8h12M9 12h6M11 16h2" />
          </svg>
          <span className="hidden sm:inline">Filters</span>
          {(selectedTypes.length + selectedDiffs.length + selectedTags.length) > 0 && (
            <span className="bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full">
              {selectedTypes.length + selectedDiffs.length + selectedTags.length}
            </span>
          )}
        </button>
      </div>

      {/* Active filter pills */}
      {hasFilters && (
        <div className="flex flex-wrap gap-2 mb-4">
          {selectedTypes.map(t => (
            <button key={t} onClick={() => toggleType(t)} className="flex items-center gap-1 text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200">
              {getContentTypeLabel(t)} <span className="text-blue-400">×</span>
            </button>
          ))}
          {selectedDiffs.map(d => (
            <button key={d} onClick={() => toggleDifficulty(d)} className="flex items-center gap-1 text-xs px-2.5 py-1 bg-yellow-100 text-yellow-700 rounded-full hover:bg-yellow-200">
              {d} <span className="text-yellow-400">×</span>
            </button>
          ))}
          {selectedTags.map(t => (
            <button key={t} onClick={() => toggleTag(t)} className="flex items-center gap-1 text-xs px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200">
              {getTagLabel(t)} <span className="text-purple-400">×</span>
            </button>
          ))}
          <button onClick={clearFilters} className="text-xs px-2.5 py-1 text-gray-500 hover:text-gray-700 underline">
            Clear all
          </button>
        </div>
      )}

      <div className="flex gap-6">
        {/* Filter panel */}
        {showFilters && (
          <aside className="w-64 flex-shrink-0 hidden md:block">
            <div className="bg-white rounded-lg border border-gray-200 p-4 sticky top-4">
              {/* Content Type */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Content Type</h3>
                <div className="space-y-1">
                  {ALL_TYPES.map(type => (
                    <label key={type} className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-50 rounded px-1 py-1">
                      <input
                        type="checkbox"
                        checked={selectedTypes.includes(type)}
                        onChange={() => toggleType(type)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{getContentTypeLabel(type)}</span>
                      <span className="text-gray-400 text-xs ml-auto">{typeCounts[type] || 0}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Difficulty */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Difficulty</h3>
                <div className="space-y-1">
                  {DIFFICULTIES.map(d => (
                    <label key={d} className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-50 rounded px-1 py-1">
                      <input
                        type="checkbox"
                        checked={selectedDiffs.includes(d)}
                        onChange={() => toggleDifficulty(d)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{d}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Genre tags */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Genre</h3>
                <div className="flex flex-wrap gap-1">
                  {genreTags.map(t => (
                    <button
                      key={t.slug}
                      onClick={() => toggleTag(t.slug)}
                      className={`text-xs px-2 py-1 rounded-full border transition-colors ${
                        selectedTags.includes(t.slug)
                          ? 'bg-blue-100 border-blue-300 text-blue-700'
                          : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Technique tags */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Technique</h3>
                <div className="flex flex-wrap gap-1">
                  {techniqueTags.map(t => (
                    <button
                      key={t.slug}
                      onClick={() => toggleTag(t.slug)}
                      className={`text-xs px-2 py-1 rounded-full border transition-colors ${
                        selectedTags.includes(t.slug)
                          ? 'bg-blue-100 border-blue-300 text-blue-700'
                          : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        )}

        {/* Results */}
        <div className="flex-1">
          {/* Sort + count bar */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-600">{results.length} result{results.length !== 1 ? 's' : ''}</span>
            <select
              value={sortBy}
              onChange={(e) => {
                const val = e.target.value as typeof sortBy;
                setSortBy(val);
                updateUrl({ q: query, type: selectedTypes.join(','), difficulty: selectedDiffs.join(','), tags: selectedTags.join(','), sort: val });
              }}
              className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 text-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="relevance">Sort: Relevance</option>
              <option value="alphabetical">Sort: A-Z</option>
              <option value="difficulty">Sort: Difficulty</option>
            </select>
          </div>

          {/* Results grid */}
          {results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {results.map((entry) => (
                <ResultCard key={entry.id} entry={entry} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <svg className="w-12 h-12 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <path strokeLinecap="round" d="m21 21-4.35-4.35" />
              </svg>
              <p className="text-gray-500 mb-2">No results found</p>
              <p className="text-gray-400 text-sm">Try adjusting your search or filters</p>
              {hasFilters && (
                <button onClick={clearFilters} className="mt-4 text-blue-600 hover:text-blue-800 text-sm underline">
                  Clear all filters
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ResultCard({ entry }: { entry: ContentEntry }) {
  const colors = TYPE_COLORS[entry.contentType] || { bg: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-200' };

  return (
    <Link
      href={entry.url}
      className={`block ${colors.bg} rounded-lg p-4 border ${colors.border} hover:shadow-md transition-all duration-200`}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-semibold text-gray-900 text-sm leading-tight">{entry.title}</h3>
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        <span className={`text-xs px-2 py-0.5 rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}>
          {getContentTypeLabel(entry.contentType)}
        </span>
        {entry.difficulty && (
          <span className={`text-xs px-2 py-0.5 rounded-full ${DIFF_COLORS[entry.difficulty.toLowerCase()] || 'bg-gray-100 text-gray-600'}`}>
            {entry.difficulty}
          </span>
        )}
      </div>
      {entry.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          {entry.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-xs text-gray-500 bg-white/70 px-1.5 py-0.5 rounded">
              {getTagLabel(tag)}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
