"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { getAllSongs, SongListItem } from '@/lib/songData';

const CURATED_SECRETS_SLUGS = new Set([
  'hotel-california',
  'sweet-child-o-mine',
  'comfortably-numb',
  'black-hole-sun',
  'under-the-bridge',
  'sultans-of-swing',
  'wish-you-were-here',
  'wonderwall',
  'stairway-to-heaven',
  'crazy-train',
  'all-along-the-watchtower',
  'while-my-guitar-gently-weeps',
]);

const GENRE_CATEGORIES = [
  { id: 'all', label: 'All Genres' },
  { id: 'classic-rock', label: 'Classic & Hard Rock' },
  { id: 'metal', label: 'Metal & Heavy' },
  { id: 'blues-soul', label: 'Blues & Soul' },
  { id: 'acoustic-folk', label: 'Acoustic & Folk' },
  { id: 'alternative-90s', label: '90s & Alternative' },
];

const DIFFICULTY_LEVELS = [
  { id: 'all', label: 'All Levels' },
  { id: 'Beginner', label: 'Beginner' },
  { id: 'Intermediate', label: 'Intermediate' },
  { id: 'Advanced', label: 'Advanced' },
];

function matchesGenre(genre: string, category: string): boolean {
  if (category === 'all') return true;
  const g = genre.toLowerCase();
  if (category === 'classic-rock') {
    return g.includes('classic') || g.includes('rock') || g.includes('arena') || g.includes('progressive');
  }
  if (category === 'metal') {
    return g.includes('metal') || g.includes('heavy');
  }
  if (category === 'blues-soul') {
    return g.includes('blues') || g.includes('soul') || g.includes('funk') || g.includes('r&b') || g.includes('jazz');
  }
  if (category === 'acoustic-folk') {
    return g.includes('folk') || g.includes('acoustic') || g.includes('country');
  }
  if (category === 'alternative-90s') {
    return g.includes('alternative') || g.includes('grunge') || g.includes('punk') || g.includes('indie') || g.includes('britpop');
  }
  return true;
}

export default function HomeSongExplorer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [visibleCount, setVisibleCount] = useState(12);

  const allSongs = useMemo(() => getAllSongs(), []);

  // Filter songs based on search and filters
  const filteredSongs = useMemo(() => {
    return allSongs.filter((song) => {
      // Search text filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = song.title.toLowerCase().includes(q);
        const matchesArtist = song.artist.toLowerCase().includes(q);
        const matchesKey = song.key.toLowerCase().includes(q);
        const matchesGenre = song.genre.toLowerCase().includes(q);
        const matchesTechnique = song.techniques.some((t) => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesArtist && !matchesKey && !matchesGenre && !matchesTechnique) {
          return false;
        }
      }

      // Genre filter
      if (!matchesGenre(song.genre, selectedGenre)) {
        return false;
      }

      // Difficulty filter
      if (selectedDifficulty !== 'all' && song.difficulty !== selectedDifficulty) {
        return false;
      }

      return true;
    });
  }, [allSongs, searchQuery, selectedGenre, selectedDifficulty]);

  const displayedSongs = filteredSongs.slice(0, visibleCount);

  return (
    <section id="song-library" className="py-20 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-3 shadow-xs">
              <span>🎸 107 Note-for-Note Deconstructions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              Song Analysis Library
            </h2>
            <p className="mt-2 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              Don&apos;t just practice exercises in a vacuum. Learn guitar through iconic songs while discovering the exact harmonic theory that makes each riff legendary.
            </p>
          </div>

          <Link
            href="/lessons/songs/song-analysis"
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors whitespace-nowrap self-start md:self-end hover:underline"
          >
            <span>View Complete Directory (107 Songs)</span>
            <span>➔</span>
          </Link>
        </div>

        {/* Search & Filter Controls Card */}
        <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl mb-10 space-y-5">
          {/* Live Search Input */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 dark:text-slate-500 text-lg">
              🔍
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(12);
              }}
              placeholder="Search 100+ songs by title, artist, or key... (e.g. Hotel California, Guns N' Roses, B minor)"
              className="w-full pl-12 pr-10 py-3.5 bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm"
              >
                ✕
              </button>
            )}
          </div>

          {/* Genre & Difficulty Filter Pills */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-2 border-t border-slate-200 dark:border-slate-800/80">
            {/* Genre Pills */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 mr-1">Genre:</span>
              {GENRE_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedGenre(cat.id);
                    setVisibleCount(12);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedGenre === cat.id
                      ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                      : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Difficulty Pills */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 mr-1">Difficulty:</span>
              {DIFFICULTY_LEVELS.map((lvl) => (
                <button
                  key={lvl.id}
                  onClick={() => {
                    setSelectedDifficulty(lvl.id);
                    setVisibleCount(12);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedDifficulty === lvl.id
                      ? 'bg-blue-600 text-white shadow-md font-bold'
                      : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                  }`}
                >
                  {lvl.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 text-xs text-slate-500 dark:text-slate-400">
          <span>
            Showing <strong className="text-slate-900 dark:text-white">{displayedSongs.length}</strong> of{' '}
            <strong className="text-slate-900 dark:text-white">{filteredSongs.length}</strong> songs
          </span>
          {(searchQuery || selectedGenre !== 'all' || selectedDifficulty !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedGenre('all');
                setSelectedDifficulty('all');
              }}
              className="text-amber-600 dark:text-amber-400 hover:underline font-semibold"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Songs Grid */}
        {displayedSongs.length === 0 ? (
          <div className="bg-white dark:bg-slate-950 rounded-2xl p-12 text-center border border-slate-200 dark:border-slate-800">
            <span className="text-4xl mb-3 block">🎸</span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">No songs matched your search</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
              Try searching by artist name (e.g. &quot;Pink Floyd&quot;) or clear your filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedGenre('all');
                setSelectedDifficulty('all');
              }}
              className="px-5 py-2.5 bg-amber-500 text-slate-950 font-bold text-xs rounded-xl hover:bg-amber-400 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedSongs.map((song: SongListItem) => {
              const hasCuratedSecret = CURATED_SECRETS_SLUGS.has(song.slug);
              
              // Difficulty color
              const diffBadge =
                song.difficulty === 'Beginner'
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
                  : song.difficulty === 'Advanced'
                  ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30'
                  : 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/30';

              return (
                <div
                  key={song.slug}
                  className="bg-white dark:bg-slate-950 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 shadow-sm hover:shadow-xl flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row: Genre & Difficulty */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 truncate max-w-[160px]">
                        {song.genre}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${diffBadge}`}>
                        {song.difficulty}
                      </span>
                    </div>

                    {/* Song Title & Artist */}
                    <Link
                      href={`/lessons/songs/song-analysis/${song.slug}`}
                      className="block group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors"
                    >
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors line-clamp-1">
                        {song.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-medium line-clamp-1">
                        {song.artist} ({song.year})
                      </p>
                    </Link>

                    {/* Musical Context (Key & Tempo) */}
                    <div className="flex items-center gap-2 mt-4 text-xs font-mono text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800/80">
                      <span>🎹 Key: <strong className="text-amber-700 dark:text-amber-300 font-bold">{song.key}</strong></span>
                      <span className="text-slate-400 dark:text-slate-600">•</span>
                      <span>⏱️ {song.tempo}</span>
                    </div>

                    {/* Harmonic Secret Tag or Technique highlight */}
                    <div className="mt-3.5">
                      {hasCuratedSecret ? (
                        <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-500/20">
                          <span>💡</span>
                          <span>Harmonic Secret Breakdown Available</span>
                        </div>
                      ) : song.techniques.length > 0 ? (
                        <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                          <span className="text-slate-400 font-medium">Techniques: </span>
                          {song.techniques.slice(0, 2).join(', ')}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  {/* Dual Action Links */}
                  <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between gap-2 text-xs font-bold">
                    <Link
                      href={`/lessons/songs/song-analysis/${song.slug}`}
                      className="text-slate-800 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors inline-flex items-center gap-1 hover:underline"
                    >
                      <span>Tabs & Analysis</span>
                      <span>➔</span>
                    </Link>

                    <Link
                      href={`/lessons/songs/song-analysis/${song.slug}#why-it-works`}
                      className="text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 transition-colors inline-flex items-center gap-1 hover:underline bg-amber-50 dark:bg-slate-900 px-2.5 py-1 rounded-lg border border-amber-200 dark:border-slate-800"
                      title="Jump straight to the harmonic theory breakdown"
                    >
                      <span>💡 Why It Works</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Load More Button */}
        {filteredSongs.length > visibleCount && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount((prev) => Math.min(prev + 12, filteredSongs.length))}
              className="px-8 py-3.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-sm rounded-xl border border-slate-200 dark:border-slate-700 transition-all shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              Show More Songs ({filteredSongs.length - visibleCount} remaining)
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

