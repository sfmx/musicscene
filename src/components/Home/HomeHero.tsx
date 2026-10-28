"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getAllSongs } from '@/lib/songList';
import { getDifficultyColor } from '@/lib/utils';

// Curated Top Featured Songs for the Hero Visual Deck
const FAN_FAVORITE_SONGS = [
  {
    slug: 'hotel-california',
    title: 'Hotel California',
    artist: 'Eagles',
    year: '1976',
    key: 'B Minor',
    tempo: '75 BPM',
    difficulty: 'Advanced',
    genre: 'Classic Rock',
    technique: 'Dual Harmony Solo & 12-String Arpeggios',
    secretHook: 'Major V (F#) borrowed from B Harmonic Minor creates the haunting Andalusian line cliché.',
    tabPreview: ':8 2.5 3.4 4.3 2.2 :4 (2.5 3.4 4.3 2.2) | :8 2.6 4.5 4.4 3.3 :4 (2.6 4.5 4.4 3.3) |',
    tabDisplay: 'Bm ➔ F# (Major V) ➔ A ➔ E (Descending Tetrachord)',
  },
  {
    slug: 'back-in-black',
    title: 'Back in Black',
    artist: 'AC/DC',
    year: '1980',
    key: 'E Major',
    tempo: '93 BPM',
    difficulty: 'Intermediate',
    genre: 'Hard Rock',
    technique: 'Downstroke Power Chords & Pentatonic Pull-Offs',
    secretHook: 'Flattened ♭VII (D5) and IV (A5) rock cadence driving pure arena rock swagger.',
    tabPreview: ':4 (0.6 2.5 2.4) :8 r.8 :4 (0.4 2.3 3.2) | :8 r.8 :4 (0.5 2.4 2.3) :8 3.1 0.1 3.2 0.2 |',
    tabDisplay: 'E5 ➔ D5 ➔ A5 (The Ultimate Rock Power Trio)',
  },
  {
    slug: 'comfortably-numb',
    title: 'Comfortably Numb',
    artist: 'Pink Floyd',
    year: '1979',
    key: 'B Minor / D Major',
    tempo: '63 BPM',
    difficulty: 'Advanced',
    genre: 'Progressive Rock',
    technique: 'David Gilmour 1.5-Step Bends & Singing Vibrato',
    secretHook: 'Verse in gloomy B minor shifts to radiant D major chorus, providing epic cinematic relief.',
    tabPreview: ':4 (2.5 4.4 4.3 3.2 2.1) (0.5 2.4 0.3 1.2 0.1) | :4 (3.6 2.5 0.4 0.3 3.2 3.1) (0.6 2.5 2.4 1.3 0.2 0.1) |',
    tabDisplay: 'Bm ➔ A ➔ G ➔ Em (Gilmour Legendary Tone)',
  },
  {
    slug: 'sultans-of-swing',
    title: 'Sultans of Swing',
    artist: 'Dire Straits',
    year: '1978',
    key: 'D Minor',
    tempo: '148 BPM',
    difficulty: 'Advanced',
    genre: 'Classic Rock',
    technique: 'Fingerstyle Clawhammer & Rapid Triad Arpeggios',
    secretHook: 'Knopfler outlines diatonic triads with bare fingers, hitting C# on A7 from D Harmonic Minor.',
    tabPreview: ':8 5.5 7.4 7.3 6.2 5.1 6.2 7.3 7.4 | :8 3.5 5.4 5.3 5.2 3.1 5.2 5.3 5.4 |',
    tabDisplay: 'Dm ➔ C ➔ Bb ➔ A7 (Fingerstyle Masterclass)',
  },
  {
    slug: 'sweet-child-o-mine',
    title: "Sweet Child O' Mine",
    artist: "Guns N' Roses",
    year: '1987',
    key: 'D Major / Mixolydian',
    tempo: '128 BPM',
    difficulty: 'Advanced',
    genre: 'Hard Rock',
    technique: 'Circular String-Skipping Arpeggios & Wah Bends',
    secretHook: 'Flattened 7th (C Major) eliminates classical tension in favor of carefree blues-rock strut.',
    tabPreview: ':8 12.4 15.2 14.3 12.3 15.1 14.3 14.1 14.3 | :8 12.4 15.2 14.3 12.3 15.1 14.3 14.1 14.3 |',
    tabDisplay: 'D ➔ C (♭VII) ➔ G (IV) ➔ D (Mixolydian Riff)',
  },
];

const NEW_ADDITION_SONGS = [
  {
    slug: 'while-my-guitar-gently-weeps',
    title: 'While My Guitar Gently Weeps',
    artist: 'The Beatles (feat. Eric Clapton)',
    year: '1968',
    key: 'A Minor',
    tempo: '66 BPM',
    difficulty: 'Intermediate',
    genre: 'Classic Rock',
    technique: 'Descending Line Cliché & Soulful Vocal Bends',
    secretHook: 'Mournful chromatic bass descent (A -> G -> F# -> F) meets radiant parallel A Major bridge.',
    tabDisplay: 'Am ➔ Am/G ➔ Am/F# ➔ Fmaj7 (The Weeping Line)',
  },
  {
    slug: 'dont-look-back-in-anger',
    title: "Don't Look Back in Anger",
    artist: 'Oasis',
    year: '1995',
    key: 'C Major',
    tempo: '84 BPM',
    difficulty: 'Intermediate',
    genre: 'Britpop',
    technique: 'Secondary Dominant E7 & Stadium Pentatonic Solo',
    secretHook: 'Major E7 (V/vi) injects sharp G# leading tone, followed by borrowed minor iv (Fm) in pre-chorus.',
    tabDisplay: 'C ➔ G ➔ Am ➔ E7 ➔ F (Stadium Anthem Chords)',
  },
  {
    slug: 'whats-my-scene',
    title: "What's My Scene",
    artist: 'Hoodoo Gurus',
    year: '1987',
    key: 'E Major',
    tempo: '124 BPM',
    difficulty: 'Intermediate',
    genre: 'Alternative Rock',
    technique: 'Jangly Open-String Double Stops & Pumping Chug',
    secretHook: 'High double-stop chime over open E drones, building with an ascending pre-solo scalar climb.',
    tabDisplay: 'E ➔ B ➔ A ➔ B (Aussie Power-Pop Perfection)',
  },
  {
    slug: 'the-wind-cries-mary',
    title: 'The Wind Cries Mary',
    artist: 'Jimi Hendrix',
    year: '1967',
    key: 'F Major',
    tempo: '80 BPM',
    difficulty: 'Intermediate',
    genre: 'Blues Rock',
    technique: 'Thumb-Fretted Chords & Parallel Sliding Triads',
    secretHook: 'Parallel chromatic sliding triads (Eb -> E -> F) and delicate Curtis Mayfield-style R&B fills.',
    tabDisplay: 'Eb ➔ E ➔ F ➔ C ➔ Bb (Effortless Hendrix Cool)',
  },
  {
    slug: 'plug-in-baby',
    title: 'Plug In Baby',
    artist: 'Muse',
    year: '2001',
    key: 'B Minor',
    tempo: '136 BPM',
    difficulty: 'Advanced',
    genre: 'Alternative Rock',
    technique: 'B Harmonic Minor Neoclassical Arpeggio Sweeps',
    secretHook: 'Riff opens on dominant F# with exotic A# leading tone before detonating into gated fuzz power chords.',
    tabDisplay: 'F# ➔ G ➔ D ➔ A ➔ Bm (Neoclassical Fuzz Riff)',
  },
];

const QUICK_SEARCH_PILLS = [
  { label: "Don't Look Back in Anger", query: "Don't Look Back in Anger" },
  { label: 'Hotel California', query: 'Hotel California' },
  { label: 'While My Guitar Gently Weeps', query: 'While My Guitar Gently Weeps' },
  { label: 'Back in Black', query: 'Back in Black' },
  { label: 'Hendrix', query: 'Hendrix' },
  { label: 'Pink Floyd', query: 'Pink Floyd' },
  { label: 'Hoodoo Gurus', query: 'Hoodoo Gurus' },
  { label: 'Muse', query: 'Muse' },
];

const ICONIC_ARTISTS = [
  'The Beatles',
  'Oasis',
  'Pink Floyd',
  'AC/DC',
  'Jimi Hendrix',
  'Queen',
  'Led Zeppelin',
  'Hoodoo Gurus',
  'Nirvana',
  'Metallica',
  'Muse',
  'Eric Clapton',
  'Dire Straits',
  'Cold Chisel',
  'Eagles',
  'Fleetwood Mac',
  'Green Day',
  'Pearl Jam',
  'Radiohead',
  'Red Hot Chili Peppers',
];

export default function HomeHero() {
  const router = useRouter();
  const [activeDeckTab, setActiveDeckTab] = useState<'favorites' | 'new' | 'tools'>('favorites');
  const [deckIndex, setDeckIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const allSongs = useMemo(() => getAllSongs(), []);

  // Filter songs live for the search bar dropdown
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return allSongs
      .filter((song) => {
        return (
          song.title.toLowerCase().includes(q) ||
          song.artist.toLowerCase().includes(q) ||
          song.key.toLowerCase().includes(q) ||
          song.genre.toLowerCase().includes(q) ||
          song.techniques.some((t) => t.toLowerCase().includes(q))
        );
      })
      .slice(0, 5);
  }, [allSongs, searchQuery]);

  const currentSongList = activeDeckTab === 'favorites' ? FAN_FAVORITE_SONGS : NEW_ADDITION_SONGS;
  const currentSong = currentSongList[deckIndex % currentSongList.length];

  const handleNext = () => {
    setDeckIndex((prev) => (prev + 1) % currentSongList.length);
  };

  const handlePrev = () => {
    setDeckIndex((prev) => (prev - 1 + currentSongList.length) % currentSongList.length);
  };

  const handlePillClick = (query: string) => {
    setSearchQuery(query);
    // Find exact match or jump
    const match = allSongs.find(
      (s) => s.title.toLowerCase() === query.toLowerCase() || s.artist.toLowerCase().includes(query.toLowerCase())
    );
    if (match) {
      router.push(`/lessons/songs/song-analysis/${match.slug}`);
    }
  };

  return (
    <section className="relative bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden pt-8 pb-16 border-b border-slate-200 dark:border-slate-800 transition-colors">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_15%,_var(--tw-gradient-stops))] from-amber-500/20 via-blue-600/10 dark:via-purple-950 to-transparent" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Headline + Search on Left | Visual Masterclass Deck on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
          
          {/* Left Column: Instant Headline, Value Prop & Hero Search */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-amber-600 dark:text-amber-300 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              <span>Interactive Guitar Masterclass Library</span>
              <span className="text-slate-400 dark:text-slate-500">•</span>
              <span className="text-slate-600 dark:text-slate-300">226 Iconic Breakdowns</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900 dark:text-white">
              Stop Memorizing Tabs.{' '}
              <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 dark:from-amber-400 dark:via-orange-300 dark:to-yellow-200 bg-clip-text text-transparent">
                Start Understanding The Music.
              </span>
            </h1>

            {/* Concise Value Proposition */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Don&apos;t just memorize numbers on a line. Deconstruct <strong className="text-slate-900 dark:text-white font-semibold">226+ iconic songs</strong> with interactive audio tabs, uncover the music theory behind every legendary riff, and build real fretboard fluency with gamified audio tools.
            </p>

            {/* Above-The-Fold Live Search Engine */}
            <div className="relative max-w-xl mx-auto lg:mx-0 pt-2">
              <div className="relative flex items-center">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 text-base">
                  🔍
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  placeholder="Search 226+ songs, artists, or tools... (e.g. Oasis, Beatles, Hotel California)"
                  className="w-full pl-11 pr-10 py-3.5 bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm font-medium shadow-md focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-500/20 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-white text-sm"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Floating Instant Search Results Dropdown */}
              {isSearchFocused && searchResults.length > 0 && (
                <div className="absolute z-30 left-0 right-0 mt-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden divide-y divide-slate-100 dark:divide-slate-800 text-left">
                  <div className="px-4 py-2 bg-slate-50 dark:bg-slate-950 text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex justify-between items-center">
                    <span>Matching Masterclasses ({searchResults.length})</span>
                    <span className="text-[10px] text-amber-600 dark:text-amber-400">Click to Practice</span>
                  </div>
                  {searchResults.map((song) => {
                    const diffColor = getDifficultyColor(song.difficulty);
                    return (
                      <Link
                        key={song.slug}
                        href={`/lessons/songs/song-analysis/${song.slug}`}
                        className="flex items-center justify-between p-3 hover:bg-amber-50/60 dark:hover:bg-slate-800/80 transition-colors group"
                        onClick={() => setIsSearchFocused(false)}
                      >
                        <div>
                          <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                            {song.title}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            {song.artist} • <span className="font-mono">{song.key}</span>
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${diffColor}`}>
                            {song.difficulty}
                          </span>
                          <span className="text-amber-600 dark:text-amber-400 text-xs">➔</span>
                        </div>
                      </Link>
                    );
                  })}
                  <div className="p-2.5 bg-slate-50 dark:bg-slate-950 text-center">
                    <Link
                      href="/lessons/songs/song-analysis"
                      className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline"
                    >
                      View All 226 Songs in Directory ➔
                    </Link>
                  </div>
                </div>
              )}

              {/* Quick Trending Filter Pills */}
              <div className="flex items-center gap-1.5 flex-wrap pt-3 text-xs">
                <span className="text-slate-500 dark:text-slate-400 font-semibold mr-1">Trending:</span>
                {QUICK_SEARCH_PILLS.map((pill) => (
                  <button
                    key={pill.label}
                    onClick={() => handlePillClick(pill.query)}
                    className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-400 text-xs font-medium transition-all shadow-2xs hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    {pill.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Action Navigation CTAs */}
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start pt-2">
              <Link
                href="/lessons/songs/song-analysis"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black rounded-xl shadow-lg shadow-amber-500/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base"
              >
                <span>🎸</span>
                <span>Browse All 226 Songs</span>
              </Link>
              <Link
                href="/lessons/practice/fretboard-trainer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base shadow-xs"
              >
                <span>🎯</span>
                <span>Play Fretboard Game</span>
              </Link>
              <Link
                href="/downloads/fretboard-cheat-sheet"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-transparent hover:bg-slate-200/50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-semibold rounded-xl border border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 transition-all duration-200 text-sm"
              >
                <span>📄 Free Fretboard PDF</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Visual Masterclass Showcase Deck Above The Fold */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-slate-900/95 border-2 border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-6 relative overflow-hidden backdrop-blur-md">
              
              {/* Category Selector Tabs */}
              <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 mb-5">
                <button
                  onClick={() => {
                    setActiveDeckTab('favorites');
                    setDeckIndex(0);
                  }}
                  className={`py-2 px-1 text-xs font-bold rounded-lg transition-all text-center cursor-pointer ${
                    activeDeckTab === 'favorites'
                      ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  🔥 Fan Favorites
                </button>
                <button
                  onClick={() => {
                    setActiveDeckTab('new');
                    setDeckIndex(0);
                  }}
                  className={`py-2 px-1 text-xs font-bold rounded-lg transition-all text-center cursor-pointer ${
                    activeDeckTab === 'new'
                      ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  ✨ Just Added
                </button>
                <button
                  onClick={() => {
                    setActiveDeckTab('tools');
                    setDeckIndex(0);
                  }}
                  className={`py-2 px-1 text-xs font-bold rounded-lg transition-all text-center cursor-pointer ${
                    activeDeckTab === 'tools'
                      ? 'bg-blue-600 text-white shadow-md font-black'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  🎯 Audio Tools
                </button>
              </div>

              {/* View 1 & 2: Song Cards Carousel */}
              {(activeDeckTab === 'favorites' || activeDeckTab === 'new') && currentSong && (
                <div className="space-y-4">
                  
                  {/* Song Header Card */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                          {activeDeckTab === 'new' ? '✨ NEW ADDITION' : '🔥 FLAGSHIP MASTERCLASS'}
                        </span>
                        <span className="text-xs text-slate-400 dark:text-slate-500 font-mono font-bold">
                          {deckIndex + 1} of {currentSongList.length}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                        {currentSong.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 mt-0.5">
                        {currentSong.artist} • <span className="font-mono">{currentSong.year}</span>
                      </p>
                    </div>

                    {/* Next / Prev Controls */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={handlePrev}
                        className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-sm transition-all cursor-pointer shadow-2xs hover:scale-105 active:scale-95"
                        aria-label="Previous Song"
                      >
                        ◀
                      </button>
                      <button
                        onClick={handleNext}
                        className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-sm transition-all cursor-pointer shadow-2xs hover:scale-105 active:scale-95"
                        aria-label="Next Song"
                      >
                        ▶
                      </button>
                    </div>
                  </div>

                  {/* Key Stats Bar */}
                  <div className="grid grid-cols-3 gap-2 py-2 px-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-mono text-center">
                    <div>
                      <span className="text-[10px] uppercase font-sans font-bold text-slate-400 dark:text-slate-500 block">Key</span>
                      <span className="font-bold text-slate-900 dark:text-slate-200">{currentSong.key}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-sans font-bold text-slate-400 dark:text-slate-500 block">Tempo</span>
                      <span className="font-bold text-slate-900 dark:text-slate-200">{currentSong.tempo}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-sans font-bold text-slate-400 dark:text-slate-500 block">Level</span>
                      <span className="font-bold text-amber-600 dark:text-amber-400">{currentSong.difficulty}</span>
                    </div>
                  </div>

                  {/* Visual Tab / Harmonic Preview Box */}
                  <div className="bg-slate-50 dark:bg-slate-950/80 p-3.5 rounded-xl border border-amber-500/30">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wide text-[11px]">
                        🎯 Harmonic Engine:
                      </span>
                      <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                        {currentSong.genre}
                      </span>
                    </div>
                    
                    {/* Progression Highlight */}
                    <div className="font-mono text-xs text-amber-950 dark:text-amber-200 bg-amber-50 dark:bg-slate-900 p-2.5 rounded-lg border border-amber-200 dark:border-slate-800 font-bold mb-2">
                      {currentSong.tabDisplay}
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                      {currentSong.secretHook}
                    </p>
                  </div>

                  {/* Direct Action Launch Link */}
                  <div className="pt-2 flex items-center justify-between">
                    <Link
                      href={`/lessons/songs/song-analysis/${currentSong.slug}`}
                      className="w-full py-3 px-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black rounded-xl text-center text-sm shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] inline-flex items-center justify-center gap-2"
                    >
                      <span>Practice {currentSong.title}</span>
                      <span>➔</span>
                    </Link>
                  </div>

                </div>
              )}

              {/* View 3: Quick Interactive Audio Tools Showcase */}
              {activeDeckTab === 'tools' && (
                <div className="space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1 flex items-center justify-between">
                    <span>Playable Audio Practice Tools</span>
                    <span className="text-[10px] bg-blue-500/10 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full border border-blue-500/20">7 Tools</span>
                  </div>

                  <Link
                    href="/lessons/practice/fretboard-trainer"
                    className="group block bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all hover:scale-[1.02]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl">🎯</span>
                        <div>
                          <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                            Fretboard Note Hunt
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">Gamified note finder with real audio playback across 15 frets</p>
                        </div>
                      </div>
                      <span className="text-emerald-500 font-bold text-xs">Play ➔</span>
                    </div>
                  </Link>

                  <Link
                    href="/lessons/practice/circle-of-fifths"
                    className="group block bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 transition-all hover:scale-[1.02]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl">🔄</span>
                        <div>
                          <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                            Circle of Fifths Studio
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">Playable SVG wheel with diatonic chord family strum audio</p>
                        </div>
                      </div>
                      <span className="text-amber-500 font-bold text-xs">Explore ➔</span>
                    </div>
                  </Link>

                  <Link
                    href="/lessons/practice/caged-system"
                    className="group block bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-rose-500/50 transition-all hover:scale-[1.02]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl">🎸</span>
                        <div>
                          <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-rose-500 transition-colors">
                            CAGED System Visualizer
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">Movable chord shapes & pentatonic scale overlay on the neck</p>
                        </div>
                      </div>
                      <span className="text-rose-500 font-bold text-xs">Master ➔</span>
                    </div>
                  </Link>

                  <div className="pt-1 text-center">
                    <Link
                      href="/lessons/practice"
                      className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      View All 7 Audio Practice Tools ➔
                    </Link>
                  </div>
                </div>
              )}

              {/* Deck Footer: Free PDF Reference Link */}
              <div className="mt-4 pt-3.5 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <span>📄</span> Free 3-Page Desk Reference:
                </span>
                <Link
                  href="/downloads/fretboard-cheat-sheet"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-bold hover:underline"
                >
                  Download Free PDF ➔
                </Link>
              </div>

            </div>
          </div>

        </div>

        {/* Above-The-Fold Artist & Catalog Marquee Ribbon */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              ⚡ Explore Iconic Masterclasses by Legendary Artists:
            </span>
            <Link
              href="/lessons/songs/song-analysis"
              className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline"
            >
              See All 226 Songs by 85+ Artists ➔
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {ICONIC_ARTISTS.map((artist) => (
              <button
                key={artist}
                onClick={() => handlePillClick(artist)}
                className="px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50/50 dark:hover:bg-slate-800 transition-all shadow-2xs hover:scale-105 active:scale-95 cursor-pointer"
              >
                {artist}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
