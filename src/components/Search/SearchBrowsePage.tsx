"use client";

import React, { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import { filterContent, getContentTypeLabel, getContentTypeCounts } from '@/lib/searchUtils';
import { getTagsByCategory, getTagLabel } from '@/lib/tagTaxonomy';
import type { ContentType, ContentEntry } from '@/lib/contentIndex';
import { getDifficultyColor } from '@/utils/theme';

const ALL_TYPES: ContentType[] = [
  'song-analysis', 'scale', 'chord', 'interval', 'mode', 'progression',
  'practice', 'gear-lesson', 'song-lesson',
];

const DIFFICULTIES = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

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
    <Layout>
      <Header
        title="Browse All Content"
        subtitle="Search and filter across 200+ lessons, songs, theory guides, and practice routines"
        category="Content Search & Filter"
      />

      <div className="min-h-screen bg-slate-950 text-slate-100 py-8">
        <main className="max-w-7xl mx-auto px-4">
          <Breadcrumbs pathname="/search" pageTitle="Search" />

          {/* Search bar */}
          <div className="flex gap-3 mb-6">
            <div className="flex-1 relative">
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <path strokeLinecap="round" d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                value={query}
                onChange={(e) => handleQueryChange(e.target.value)}
                placeholder="Search lessons, songs, theory..."
                className="w-full pl-11 pr-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl border transition-colors font-medium ${
                showFilters ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300' : 'bg-slate-900/90 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" d="M3 4h18M6 8h12M9 12h6M11 16h2" />
              </svg>
              <span className="hidden sm:inline">Filters</span>
              {(selectedTypes.length + selectedDiffs.length + selectedTags.length) > 0 && (
                <span className="bg-cyan-500 text-slate-950 text-xs font-bold px-1.5 py-0.5 rounded-full">
                  {selectedTypes.length + selectedDiffs.length + selectedTags.length}
                </span>
              )}
            </button>
          </div>

          {/* Active filter pills */}
          {hasFilters && (
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedTypes.map(t => (
                <button key={t} onClick={() => toggleType(t)} className="flex items-center gap-1 text-xs px-3 py-1 bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 rounded-full hover:bg-cyan-500/25 transition-colors">
                  {getContentTypeLabel(t)} <span className="text-cyan-400">×</span>
                </button>
              ))}
              {selectedDiffs.map(d => (
                <button key={d} onClick={() => toggleDifficulty(d)} className="flex items-center gap-1 text-xs px-3 py-1 bg-amber-500/15 text-amber-300 border border-amber-500/30 rounded-full hover:bg-amber-500/25 transition-colors">
                  {d} <span className="text-amber-400">×</span>
                </button>
              ))}
              {selectedTags.map(t => (
                <button key={t} onClick={() => toggleTag(t)} className="flex items-center gap-1 text-xs px-3 py-1 bg-purple-500/15 text-purple-300 border border-purple-500/30 rounded-full hover:bg-purple-500/25 transition-colors">
                  {getTagLabel(t)} <span className="text-purple-400">×</span>
                </button>
              ))}
              <button onClick={clearFilters} className="text-xs px-2.5 py-1 text-slate-400 hover:text-white underline transition-colors">
                Clear all
              </button>
            </div>
          )}

          <div className="flex gap-6">
            {/* Filter panel */}
            {showFilters && (
              <aside className="w-64 flex-shrink-0 hidden md:block">
                <div className="bg-slate-900/90 rounded-xl border border-slate-800 p-5 sticky top-4 shadow-xl space-y-6">
                  {/* Content Type */}
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-2">Content Type</h3>
                    <div className="space-y-1">
                      {ALL_TYPES.map(type => (
                        <label key={type} className="flex items-center gap-2 text-sm cursor-pointer hover:bg-slate-800/60 rounded px-1.5 py-1 transition-colors">
                          <input
                            type="checkbox"
                            checked={selectedTypes.includes(type)}
                            onChange={() => toggleType(type)}
                            className="rounded border-slate-700 bg-slate-950 text-cyan-500 focus:ring-cyan-500"
                          />
                          <span className="text-slate-300">{getContentTypeLabel(type)}</span>
                          <span className="text-slate-500 text-xs ml-auto">{typeCounts[type] || 0}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Difficulty */}
                  <div className="pt-4 border-t border-slate-800">
                    <h3 className="text-sm font-semibold text-white mb-2">Difficulty</h3>
                    <div className="space-y-1">
                      {DIFFICULTIES.map(d => (
                        <label key={d} className="flex items-center gap-2 text-sm cursor-pointer hover:bg-slate-800/60 rounded px-1.5 py-1 transition-colors">
                          <input
                            type="checkbox"
                            checked={selectedDiffs.includes(d)}
                            onChange={() => toggleDifficulty(d)}
                            className="rounded border-slate-700 bg-slate-950 text-cyan-500 focus:ring-cyan-500"
                          />
                          <span className="text-slate-300">{d}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Genre tags */}
                  <div className="pt-4 border-t border-slate-800">
                    <h3 className="text-sm font-semibold text-white mb-2">Genre</h3>
                    <div className="flex flex-wrap gap-1">
                      {genreTags.map(t => (
                        <button
                          key={t.slug}
                          onClick={() => toggleTag(t.slug)}
                          className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                            selectedTags.includes(t.slug)
                              ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300'
                              : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Technique tags */}
                  <div className="pt-4 border-t border-slate-800">
                    <h3 className="text-sm font-semibold text-white mb-2">Technique</h3>
                    <div className="flex flex-wrap gap-1">
                      {techniqueTags.map(t => (
                        <button
                          key={t.slug}
                          onClick={() => toggleTag(t.slug)}
                          className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                            selectedTags.includes(t.slug)
                              ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300'
                              : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
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
                <span className="text-sm text-slate-400">{results.length} result{results.length !== 1 ? 's' : ''}</span>
                <select
                  value={sortBy}
                  onChange={(e) => {
                    const val = e.target.value as typeof sortBy;
                    setSortBy(val);
                    updateUrl({ q: query, type: selectedTypes.join(','), difficulty: selectedDiffs.join(','), tags: selectedTags.join(','), sort: val });
                  }}
                  className="text-sm bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-slate-200 outline-none focus:border-cyan-500"
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
                <div className="text-center py-16 bg-slate-900/50 rounded-xl border border-slate-800">
                  <svg className="w-12 h-12 text-slate-600 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" />
                    <path strokeLinecap="round" d="m21 21-4.35-4.35" />
                  </svg>
                  <p className="text-slate-300 font-medium mb-2">No results found</p>
                  <p className="text-slate-500 text-sm">Try adjusting your search or filters</p>
                  {hasFilters && (
                    <button onClick={clearFilters} className="mt-4 text-cyan-400 hover:text-cyan-300 text-sm underline transition-colors">
                      Clear all filters
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

function ResultCard({ entry }: { entry: ContentEntry }) {
  const colors = TYPE_COLORS[entry.contentType] || { bg: 'bg-slate-800', text: 'text-slate-300', border: 'border-slate-700' };

  return (
    <Link
      href={entry.url}
      className="block bg-slate-900/90 rounded-xl p-4 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/80 shadow-lg transition-all duration-200 group flex flex-col justify-between"
    >
      <div>
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-white group-hover:text-cyan-300 transition-colors text-sm leading-tight">{entry.title}</h3>
        </div>
        <div className="flex items-center gap-2 flex-wrap mb-2">
          <span className={`text-xs px-2 py-0.5 rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}>
            {getContentTypeLabel(entry.contentType)}
          </span>
          {entry.difficulty && (
            <span className={`text-xs px-2 py-0.5 rounded-full border ${getDifficultyColor(entry.difficulty)}`}>
              {entry.difficulty}
            </span>
          )}
        </div>
      </div>
      {entry.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2 pt-2 border-t border-slate-800/60">
          {entry.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[11px] text-slate-400 bg-slate-950/80 border border-slate-800/80 px-1.5 py-0.5 rounded">
              {getTagLabel(tag)}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
