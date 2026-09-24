"use client";

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import CategoryGrid from './CategoryGrid';
import SongCard from './SongCard';
import { 
  getAllSongs,
  getPopularSongs,
  getRecentlyAdded,
  getSongsByDecade,
  getIconicRiffSongs,
  getBeginnerFriendlySongs,
  getUniqueDecades,
  getUniqueGenres,
  getDifficultyLevels,
  getSongLearningPathways,
  SongListItem,
  SongLearningPathway
} from '@/lib/songList';
import { getDifficultyColor } from '@/lib/utils';

export default function SongDiscoveryHub() {
  const [activeTab, setActiveTab] = useState<'discover' | 'directory' | 'pathways'>('discover');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [selectedGenre, setSelectedGenre] = useState<string>('All');
  const [selectedDecade, setSelectedDecade] = useState<string>('All');
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [iconicRiffOnly, setIconicRiffOnly] = useState(false);
  const [sortBy, setSortBy] = useState<string>('popularity');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  // Check URL hash or query on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get('tab');
      const diffParam = params.get('difficulty');
      const filterParam = params.get('filter');
      const qParam = params.get('q');

      if (tabParam === 'directory' || tabParam === 'all' || diffParam || filterParam || qParam) {
        setActiveTab('directory');
      } else if (tabParam === 'pathways') {
        setActiveTab('pathways');
      }

      if (diffParam) setSelectedDifficulty(diffParam);
      if (filterParam === 'riffs') setIconicRiffOnly(true);
      if (filterParam === 'featured') setFeaturedOnly(true);
      if (qParam) setSearchQuery(qParam);
    }
  }, []);

  const allSongs = useMemo(() => getAllSongs(), []);
  const popularSongs = useMemo(() => getPopularSongs(6), []);
  const recentSongs = useMemo(() => getRecentlyAdded(6), []);
  const iconicRiffSongs = useMemo(() => getIconicRiffSongs(), []);
  const beginnerSongs = useMemo(() => getBeginnerFriendlySongs(), []);
  const pathways = useMemo(() => getSongLearningPathways(), []);

  // Filter options
  const difficultyLevels = ['All', ...getDifficultyLevels()];
  const uniqueDecades = ['All', ...getUniqueDecades()];
  const topGenres = ['All', 'Rock', 'Hard Rock', 'Classic Rock', 'Heavy Metal', 'Folk Rock', 'Blues Rock', 'Alternative Rock'];

  // Counts for badges
  const difficultyCounts = useMemo(() => {
    const counts: Record<string, number> = { All: allSongs.length };
    allSongs.forEach((s) => {
      counts[s.difficulty] = (counts[s.difficulty] || 0) + 1;
    });
    return counts;
  }, [allSongs]);

  // Reset filters helper
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedDifficulty('All');
    setSelectedGenre('All');
    setSelectedDecade('All');
    setFeaturedOnly(false);
    setIconicRiffOnly(false);
    setSortBy('popularity');
  };

  const hasActiveFilters = 
    searchQuery.trim() !== '' ||
    selectedDifficulty !== 'All' ||
    selectedGenre !== 'All' ||
    selectedDecade !== 'All' ||
    featuredOnly ||
    iconicRiffOnly;

  // Filter & Sort Logic for Directory
  const filteredAndSortedSongs = useMemo(() => {
    let result = [...allSongs];

    // Text search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const terms = q.split(' ');
      result = result.filter((song) =>
        terms.every(
          (t) =>
            song.title.toLowerCase().includes(t) ||
            song.artist.toLowerCase().includes(t) ||
            song.genre.toLowerCase().includes(t) ||
            song.techniques.some((tech) => tech.toLowerCase().includes(t)) ||
            song.tags?.some((tag) => tag.toLowerCase().includes(t))
        )
      );
    }

    // Difficulty
    if (selectedDifficulty !== 'All') {
      result = result.filter((song) => song.difficulty.toLowerCase() === selectedDifficulty.toLowerCase());
    }

    // Genre
    if (selectedGenre !== 'All') {
      result = result.filter((song) => song.genre.toLowerCase().includes(selectedGenre.toLowerCase()));
    }

    // Decade
    if (selectedDecade !== 'All') {
      result = result.filter((song) => song.decade === selectedDecade);
    }

    // Toggles
    if (featuredOnly) {
      result = result.filter((song) => song.featured);
    }
    if (iconicRiffOnly) {
      result = result.filter((song) => song.iconicRiff);
    }

    // Sorting
    result.sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return (b.popularity || 0) - (a.popularity || 0);
        case 'title-asc':
          return a.title.localeCompare(b.title);
        case 'title-desc':
          return b.title.localeCompare(a.title);
        case 'artist-asc':
          return a.artist.localeCompare(b.artist);
        case 'difficulty-asc': {
          const rank: Record<string, number> = { Beginner: 1, Intermediate: 2, Advanced: 3, Expert: 4 };
          return (rank[a.difficulty] || 2) - (rank[b.difficulty] || 2);
        }
        case 'difficulty-desc': {
          const rank: Record<string, number> = { Beginner: 1, Intermediate: 2, Advanced: 3, Expert: 4 };
          return (rank[b.difficulty] || 2) - (rank[a.difficulty] || 2);
        }
        case 'year-desc':
          return parseInt(b.year || '0') - parseInt(a.year || '0');
        case 'year-asc':
          return parseInt(a.year || '0') - parseInt(b.year || '0');
        default:
          return 0;
      }
    });

    return result;
  }, [allSongs, searchQuery, selectedDifficulty, selectedGenre, selectedDecade, featuredOnly, iconicRiffOnly, sortBy]);

  // Category sections for discover tab with interactive onViewAll triggers
  const discoverySections = [
    {
      title: "Popular Songs",
      description: "Most loved guitar songs in our community",
      songs: popularSongs,
      totalCount: allSongs.length,
      icon: "⭐",
      onViewAll: () => {
        resetFilters();
        setSortBy('popularity');
        setActiveTab('directory');
      },
      maxDisplay: 6
    },
    {
      title: "Perfect for Beginners",
      description: "Great tracks with open chords and foundational rhythms",
      songs: beginnerSongs,
      totalCount: beginnerSongs.length,
      icon: "🌱",
      onViewAll: () => {
        resetFilters();
        setSelectedDifficulty('Beginner');
        setActiveTab('directory');
      },
      maxDisplay: 6
    },
    {
      title: "Iconic Guitar Riffs",
      description: "Unforgettable riffs that defined rock, metal, and blues history",
      songs: iconicRiffSongs,
      totalCount: iconicRiffSongs.length,
      icon: "🎸",
      onViewAll: () => {
        resetFilters();
        setIconicRiffOnly(true);
        setActiveTab('directory');
      },
      maxDisplay: 6
    },
    {
      title: "Recently Added",
      description: "Latest song breakdowns added to our masterclass library",
      songs: recentSongs,
      totalCount: allSongs.length,
      icon: "🆕",
      onViewAll: () => {
        resetFilters();
        setSortBy('year-desc');
        setActiveTab('directory');
      },
      maxDisplay: 6
    },
    {
      title: "1970s Classics",
      description: "The golden age of classic rock, acoustic anthems, and proto-metal",
      songs: getSongsByDecade('1970s'),
      totalCount: getSongsByDecade('1970s').length,
      icon: "🕺",
      onViewAll: () => {
        resetFilters();
        setSelectedDecade('1970s');
        setActiveTab('directory');
      },
      maxDisplay: 6
    },
    {
      title: "1980s Rock & Shred",
      description: "High-octane hard rock, arena anthems, and neoclassical virtuosity",
      songs: getSongsByDecade('1980s'),
      totalCount: getSongsByDecade('1980s').length,
      icon: "🎹",
      onViewAll: () => {
        resetFilters();
        setSelectedDecade('1980s');
        setActiveTab('directory');
      },
      maxDisplay: 6
    },
    {
      title: "1990s Alternative & Grunge",
      description: "Raw emotive rock, grunge drop-tunings, and melodic acoustic masterpieces",
      songs: getSongsByDecade('1990s'),
      totalCount: getSongsByDecade('1990s').length,
      icon: "⚡",
      onViewAll: () => {
        resetFilters();
        setSelectedDecade('1990s');
        setActiveTab('directory');
      },
      maxDisplay: 6
    }
  ];

  return (
    <Layout>
      <Header
        title="Guitar Song Analysis & Tab Library"
        subtitle="128+ complete note-for-note breakdowns with interactive AlphaTab, Roman numeral chord progressions, and tone guides"
        category="Song Repertoire & Harmonic Analysis"
      />
      
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-8 transition-colors">
        <main className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumbs pathname="/lessons/songs/song-analysis" pageTitle="Song Analysis" />

          {/* Primary View Switcher Navigation */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">
            <div className="flex flex-wrap items-center gap-2 bg-slate-200/70 dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-300/80 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setActiveTab('discover')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'discover'
                    ? 'bg-white dark:bg-amber-500 text-slate-900 dark:text-slate-950 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>✨</span>
                <span>Curated Collections</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('directory')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'directory'
                    ? 'bg-white dark:bg-amber-500 text-slate-900 dark:text-slate-950 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>📚</span>
                <span>All {allSongs.length} Songs Directory</span>
                <span className="hidden sm:inline-block text-[11px] px-2 py-0.2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono">
                  {filteredAndSortedSongs.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('pathways')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'pathways'
                    ? 'bg-white dark:bg-amber-500 text-slate-900 dark:text-slate-950 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>🎯</span>
                <span>Learning Pathways ({pathways.length})</span>
              </button>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/lessons/songs/why-songs-work"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-500/30 hover:bg-amber-100 dark:hover:bg-amber-500/20 transition-all shadow-xs"
              >
                <span>🧠</span>
                <span>Why Songs Work (Theory Secrets)</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>

          {/* TAB 1: CURATED COLLECTIONS */}
          {activeTab === 'discover' && (
            <div>
              {/* Quick Jump Bar */}
              <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-amber-500/10 dark:bg-slate-900/90 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">Looking for a specific song or technique?</h2>
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
                    Explore all 128 songs with instant filtering by level, decade, genre, or guitar tuning.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2.5 shrink-0">
                  <button
                    type="button"
                    onClick={() => {
                      resetFilters();
                      setSelectedDifficulty('Beginner');
                      setActiveTab('directory');
                    }}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800/40 hover:scale-105 transition-all cursor-pointer"
                  >
                    🟢 Beginner Songs (44)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      resetFilters();
                      setSelectedDifficulty('Intermediate');
                      setActiveTab('directory');
                    }}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800/40 hover:scale-105 transition-all cursor-pointer"
                  >
                    🟡 Intermediate (52)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      resetFilters();
                      setIconicRiffOnly(true);
                      setActiveTab('directory');
                    }}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border border-purple-300 dark:border-purple-800/40 hover:scale-105 transition-all cursor-pointer"
                  >
                    🎸 Iconic Riffs (82)
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('directory')}
                    className="px-4 py-1.5 rounded-xl text-xs font-bold bg-blue-600 dark:bg-amber-500 text-white dark:text-slate-950 hover:bg-blue-700 dark:hover:bg-amber-400 transition-all cursor-pointer shadow-xs"
                  >
                    Browse All 128 &rarr;
                  </button>
                </div>
              </div>

              {/* Discovery Sections */}
              <CategoryGrid sections={discoverySections} />
            </div>
          )}

          {/* TAB 2: ALL 128 SONGS DIRECTORY */}
          {activeTab === 'directory' && (
            <div className="space-y-6">
              {/* Search & Filter Header Bar */}
              <div className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 space-y-5">
                {/* Search Input */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search 128 songs by title, artist (e.g. Led Zeppelin, Pink Floyd), technique, or tag..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-10 py-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-sm transition-all shadow-inner"
                  />
                  <span className="absolute left-4 top-3.5 text-lg text-slate-400">🔍</span>
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3.5 top-3.5 text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* Filter Chips: Level */}
                <div>
                  <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Difficulty Level
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {difficultyLevels.map((level) => {
                      const count = difficultyCounts[level] ?? 0;
                      const isSelected = selectedDifficulty === level;
                      return (
                        <button
                          key={level}
                          type="button"
                          onClick={() => setSelectedDifficulty(level)}
                          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                            isSelected
                              ? 'bg-blue-600 dark:bg-amber-500 text-white dark:text-slate-950 shadow-sm ring-2 ring-blue-500/20'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/60'
                          }`}
                        >
                          <span>{level}</span>
                          <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                            isSelected ? 'bg-white/20 dark:bg-black/20' : 'bg-slate-200 dark:bg-slate-700'
                          }`}>
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Filter Chips: Decades & Genres & Toggles */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  {/* Decades */}
                  <div>
                    <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                      Decade / Era
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {uniqueDecades.map((dec) => {
                        const isSelected = selectedDecade === dec;
                        return (
                          <button
                            key={dec}
                            type="button"
                            onClick={() => setSelectedDecade(dec)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-xs'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                            }`}
                          >
                            {dec}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Quick Toggles */}
                  <div>
                    <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                      Special Highlights
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => setIconicRiffOnly(!iconicRiffOnly)}
                        className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                          iconicRiffOnly
                            ? 'bg-purple-600 dark:bg-purple-500 text-white shadow-sm'
                            : 'bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/40 hover:bg-purple-100'
                        }`}
                      >
                        <span>🎸</span>
                        <span>Iconic Riffs Only ({iconicRiffSongs.length})</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFeaturedOnly(!featuredOnly)}
                        className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                          featuredOnly
                            ? 'bg-amber-600 dark:bg-amber-500 text-white dark:text-slate-950 shadow-sm'
                            : 'bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/40 hover:bg-amber-100'
                        }`}
                      >
                        <span>⭐</span>
                        <span>Featured Songs</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Genre Selector Pills */}
                <div className="pt-2">
                  <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Popular Genres
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {topGenres.map((genre) => {
                      const isSelected = selectedGenre === genre;
                      return (
                        <button
                          key={genre}
                          type="button"
                          onClick={() => setSelectedGenre(genre)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xs'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                          }`}
                        >
                          {genre}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Status Bar, Sort Dropdown & Layout Mode */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <span className="font-bold text-slate-900 dark:text-white">
                    Showing {filteredAndSortedSongs.length} of {allSongs.length} songs
                  </span>
                  {hasActiveFilters && (
                    <button
                      type="button"
                      onClick={resetFilters}
                      className="text-xs font-semibold text-rose-600 dark:text-rose-400 hover:underline cursor-pointer"
                    >
                      Clear all filters
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  {/* Sort By Dropdown */}
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">Sort:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      aria-label="Sort songs by"
                      className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 dark:text-slate-200 font-medium outline-none focus:border-amber-500 cursor-pointer"
                    >
                      <option value="popularity">Popularity (Highest)</option>
                      <option value="title-asc">Title (A &rarr; Z)</option>
                      <option value="title-desc">Title (Z &rarr; A)</option>
                      <option value="artist-asc">Artist (A &rarr; Z)</option>
                      <option value="difficulty-asc">Difficulty (Easiest First)</option>
                      <option value="difficulty-desc">Difficulty (Hardest First)</option>
                      <option value="year-desc">Release Year (Newest)</option>
                      <option value="year-asc">Release Year (Oldest)</option>
                    </select>
                  </div>

                  {/* View Mode Toggle */}
                  <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700">
                    <button
                      type="button"
                      onClick={() => setViewMode('grid')}
                      title="Grid Card View"
                      className={`p-1.5 rounded text-xs transition-colors cursor-pointer ${
                        viewMode === 'grid' ? 'bg-white dark:bg-slate-900 text-amber-600 dark:text-amber-400 shadow-xs' : 'text-slate-400 hover:text-slate-700'
                      }`}
                    >
                      ▦ Grid
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewMode('table')}
                      title="Table List View"
                      className={`p-1.5 rounded text-xs transition-colors cursor-pointer ${
                        viewMode === 'table' ? 'bg-white dark:bg-slate-900 text-amber-600 dark:text-amber-400 shadow-xs' : 'text-slate-400 hover:text-slate-700'
                      }`}
                    >
                      ☰ Table
                    </button>
                  </div>
                </div>
              </div>

              {/* Directory Content Display */}
              {filteredAndSortedSongs.length === 0 ? (
                <div className="text-center py-16 bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-8">
                  <div className="text-5xl mb-4">🔍</div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">No matching songs found</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm max-w-md mx-auto mb-6">
                    We could not find any songs matching your exact search criteria or filter combinations.
                  </p>
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="px-5 py-2 rounded-xl text-xs font-bold bg-blue-600 dark:bg-amber-500 text-white dark:text-slate-950 hover:bg-blue-700 dark:hover:bg-amber-400 transition-colors cursor-pointer"
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : viewMode === 'grid' ? (
                /* Grid View */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredAndSortedSongs.map((song) => (
                    <SongCard key={song.slug} song={song} />
                  ))}
                </div>
              ) : (
                /* Table / List View */
                <div className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-slate-100/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-semibold">
                        <tr>
                          <th className="py-3.5 px-4">Song & Artist</th>
                          <th className="py-3.5 px-4">Difficulty</th>
                          <th className="py-3.5 px-4 hidden md:table-cell">Genre & Year</th>
                          <th className="py-3.5 px-4 hidden lg:table-cell">Key & Tempo</th>
                          <th className="py-3.5 px-4 text-right">Breakdown</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80 text-slate-800 dark:text-slate-200">
                        {filteredAndSortedSongs.map((song) => (
                          <tr key={song.slug} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors group">
                            <td className="py-3 px-4">
                              <Link
                                href={`/lessons/songs/song-analysis/${song.slug}`}
                                className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-amber-400 transition-colors block"
                              >
                                {song.title}
                              </Link>
                              <span className="text-xs text-slate-500 dark:text-slate-400">{song.artist}</span>
                            </td>
                            <td className="py-3 px-4">
                              <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getDifficultyColor(song.difficulty)}`}>
                                {song.difficulty}
                              </span>
                            </td>
                            <td className="py-3 px-4 hidden md:table-cell text-xs text-slate-600 dark:text-slate-400">
                              {song.genre} • {song.year}
                            </td>
                            <td className="py-3 px-4 hidden lg:table-cell text-xs font-mono text-slate-600 dark:text-slate-400">
                              {song.key} {song.tempo ? `• ${song.tempo}` : ''}
                            </td>
                            <td className="py-3 px-4 text-right">
                              <Link
                                href={`/lessons/songs/song-analysis/${song.slug}`}
                                className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-blue-600 dark:hover:bg-amber-500 hover:text-white dark:hover:text-slate-950 transition-colors shadow-xs"
                              >
                                <span>Learn Tab</span>
                                <span>&rarr;</span>
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: GUIDED LEARNING PATHWAYS */}
          {activeTab === 'pathways' && (
            <div className="space-y-12">
              <div className="bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-blue-500/10 dark:bg-slate-900/90 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Curated Song Learning Pathways
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed max-w-3xl">
                  Step-by-step song progressions designed by professional guitar educators. Rather than jumping randomly between unrelated songs, these roadmaps develop specific musical skills in a logical sequence—from open chords and steady downbeats to expressive lead guitar bends.
                </p>
              </div>

              <div className="space-y-12">
                {pathways.map((pathway) => (
                  <section
                    key={pathway.id}
                    id={pathway.id}
                    className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm dark:shadow-xl"
                  >
                    {/* Pathway Header */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
                      <div className="flex items-start gap-4">
                        <span className="text-3xl sm:text-4xl shrink-0 p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl">
                          {pathway.icon}
                        </span>
                        <div>
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{pathway.title}</h3>
                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getDifficultyColor(pathway.difficulty)}`}>
                              {pathway.difficulty}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">{pathway.subtitle}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">{pathway.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Skills Learned Badges */}
                    <div className="mb-6 flex flex-wrap items-center gap-2 text-xs">
                      <span className="font-bold text-slate-700 dark:text-slate-300">Skills Acquired:</span>
                      {pathway.skillsLearned.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium border border-slate-200 dark:border-slate-700/60"
                        >
                          ✓ {skill}
                        </span>
                      ))}
                    </div>

                    {/* Step-by-Step Song Timeline Cards */}
                    <div className="space-y-4">
                      {pathway.songs.map((song) => (
                        <div
                          key={song.slug}
                          className="bg-slate-50/80 dark:bg-slate-950/80 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:border-amber-400 dark:hover:border-slate-700 transition-all"
                        >
                          <div className="flex items-start gap-4 flex-1">
                            <div className="shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 font-bold flex items-center justify-center text-sm border border-blue-200 dark:border-blue-800/40">
                              {song.stepNumber}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 flex-wrap mb-1">
                                <Link
                                  href={`/lessons/songs/song-analysis/${song.slug}`}
                                  className="text-base font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-amber-400 transition-colors"
                                >
                                  {song.title}
                                </Link>
                                <span className="text-xs text-slate-500 dark:text-slate-400">• {song.artist}</span>
                                <span className={`text-[11px] px-2 py-0.2 rounded-full border ${getDifficultyColor(song.difficulty)}`}>
                                  {song.difficulty}
                                </span>
                              </div>
                              <p className="text-xs text-slate-600 dark:text-slate-300 mb-2 leading-relaxed">
                                {song.whyLearn}
                              </p>
                              <div className="flex flex-wrap gap-1.5 text-[11px]">
                                {song.keySkills.map((sk, kIdx) => (
                                  <span
                                    key={kIdx}
                                    className="px-2 py-0.5 rounded bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                                  >
                                    {sk}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="shrink-0 w-full md:w-auto flex md:flex-col items-center md:items-end justify-between gap-2 border-t md:border-t-0 pt-3 md:pt-0 border-slate-200 dark:border-slate-800">
                            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{song.tuning}</span>
                            <Link
                              href={`/lessons/songs/song-analysis/${song.slug}`}
                              className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 dark:bg-amber-500 text-white dark:text-slate-950 hover:bg-blue-700 dark:hover:bg-amber-400 transition-colors shadow-xs flex items-center gap-1.5"
                            >
                              <span>Learn Song & Tab</span>
                              <span>&rarr;</span>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          )}

          {/* Stats Bar */}
          <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-5 bg-white dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm">
                <div className="text-3xl font-black text-amber-600 dark:text-amber-400">{allSongs.length}</div>
                <div className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1 font-semibold">Total Songs Analyzed</div>
              </div>
              <div className="p-5 bg-white dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm">
                <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400">{iconicRiffSongs.length}</div>
                <div className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1 font-semibold">Iconic Riffs Breakdown</div>
              </div>
              <div className="p-5 bg-white dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm">
                <div className="text-3xl font-black text-purple-600 dark:text-purple-400">{pathways.length}</div>
                <div className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1 font-semibold">Guided Learning Pathways</div>
              </div>
              <div className="p-5 bg-white dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm">
                <div className="text-3xl font-black text-cyan-600 dark:text-cyan-400">100%</div>
                <div className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1 font-semibold">Interactive Tab & Audio</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
