"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getSongsRootIndexData } from '@/lib/songLessonData';
import { getAllSongs, getSongLearningPathways, SongListItem } from '@/lib/songList';
import { getDifficultyColor } from '@/lib/utils';
import LeadMagnetBanner from '@/components/Revenue/LeadMagnetBanner';

export default function SongsRootIndexPageTemplate() {
  const data = getSongsRootIndexData();
  const allSongs = useMemo(() => getAllSongs(), []);
  const pathways = useMemo(() => getSongLearningPathways(), []);

  const [searchQuery, setSearchQuery] = useState('');
  const [activePathwayId, setActivePathwayId] = useState<string>(pathways[0]?.id || 'beginner-first-5');

  // Live quick search matching
  const matchingSongs = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return allSongs
      .filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.artist.toLowerCase().includes(q) ||
          s.genre.toLowerCase().includes(q) ||
          s.techniques.some((t) => t.toLowerCase().includes(q))
      )
      .slice(0, 6);
  }, [searchQuery, allSongs]);

  const activePathway = useMemo(() => {
    return pathways.find((p) => p.id === activePathwayId) || pathways[0];
  }, [activePathwayId, pathways]);

  // Featured marquee songs
  const featuredSongSlugs = [
    'hotel-california',
    'wonderwall',
    'sultans-of-swing',
    'sweet-child-o-mine',
    'comfortably-numb',
    'smoke-on-the-water',
  ];

  const featuredSongs = useMemo(() => {
    const songsMap = new Map(allSongs.map((s) => [s.slug, s]));
    return featuredSongSlugs
      .map((slug) => songsMap.get(slug))
      .filter((s): s is SongListItem => Boolean(s));
  }, [allSongs]);

  return (
    <Layout>
      <Header
        title={data.pageTitle}
        subtitle={data.subtitle}
        category="Song Repertoire & Harmonic Analysis"
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Navigation Breadcrumbs */}
        <Breadcrumbs pathname="/lessons/songs" pageTitle={data.pageTitle} />

        {/* Hero Quick-Search & Level Jump-In */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10 max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white backdrop-blur-md mb-3">
                <span>🎸</span>
                <span>The Definitive Guitar Song Library</span>
              </span>
              <h1 className="text-2xl sm:text-4xl font-black tracking-tight mb-3">
                Master 128+ Iconic Songs Note-for-Note
              </h1>
              <p className="text-blue-100 text-xs sm:text-base leading-relaxed mb-6">
                Connect every riff, chord voicing, and solo to fundamental music theory. Learn faster with synchronized AlphaTab audio playback, Roman numeral chord analysis, and progressive skill pathways.
              </p>

              {/* Instant Search Bar */}
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search 128 songs or artists (e.g. Wonderwall, Pink Floyd, Hotel California)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-10 py-3.5 bg-white text-slate-900 rounded-2xl placeholder:text-slate-400 outline-none text-xs sm:text-sm font-medium shadow-2xl focus:ring-4 focus:ring-amber-400/50 transition-all"
                />
                <span className="absolute left-4 top-3.5 text-base">🔍</span>
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600 text-xs font-bold p-1 cursor-pointer"
                  >
                    ✕
                  </button>
                )}

                {/* Instant Search Results Dropdown */}
                {matchingSongs.length > 0 && (
                  <div className="absolute left-0 right-0 top-full mt-2 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-30 divide-y divide-slate-100 dark:divide-slate-800">
                    {matchingSongs.map((song) => (
                      <Link
                        key={song.slug}
                        href={`/lessons/songs/song-analysis/${song.slug}`}
                        className="flex items-center justify-between p-3.5 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors text-slate-900 dark:text-white group"
                      >
                        <div>
                          <div className="font-bold text-xs sm:text-sm group-hover:text-blue-600 dark:group-hover:text-amber-400 transition-colors">
                            {song.title}
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            {song.artist} • {song.genre}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] px-2 py-0.5 rounded-full border ${getDifficultyColor(song.difficulty)}`}>
                            {song.difficulty}
                          </span>
                          <span className="text-xs font-semibold text-blue-600 dark:text-amber-400 group-hover:translate-x-0.5 transition-transform">
                            &rarr;
                          </span>
                        </div>
                      </Link>
                    ))}
                    <div className="p-2.5 bg-slate-50 dark:bg-slate-950 text-center">
                      <Link
                        href={`/lessons/songs/song-analysis?q=${encodeURIComponent(searchQuery)}`}
                        className="text-xs font-bold text-blue-600 dark:text-amber-400 hover:underline"
                      >
                        View all results in Song Directory &rarr;
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Fast Filter Shortcut Badges */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                <span className="text-blue-200">Quick Jump:</span>
                <Link
                  href="/lessons/songs/song-analysis?difficulty=Beginner"
                  className="px-3 py-1 rounded-xl bg-white/15 hover:bg-white/25 text-white backdrop-blur-xs transition-colors flex items-center gap-1.5"
                >
                  <span>🟢</span>
                  <span>Beginner (44)</span>
                </Link>
                <Link
                  href="/lessons/songs/song-analysis?difficulty=Intermediate"
                  className="px-3 py-1 rounded-xl bg-white/15 hover:bg-white/25 text-white backdrop-blur-xs transition-colors flex items-center gap-1.5"
                >
                  <span>🟡</span>
                  <span>Intermediate (52)</span>
                </Link>
                <Link
                  href="/lessons/songs/song-analysis?difficulty=Advanced"
                  className="px-3 py-1 rounded-xl bg-white/15 hover:bg-white/25 text-white backdrop-blur-xs transition-colors flex items-center gap-1.5"
                >
                  <span>🔴</span>
                  <span>Advanced (25)</span>
                </Link>
                <Link
                  href="/lessons/songs/song-analysis?filter=riffs"
                  className="px-3 py-1 rounded-xl bg-white/15 hover:bg-white/25 text-white backdrop-blur-xs transition-colors flex items-center gap-1.5"
                >
                  <span>🎸</span>
                  <span>Iconic Riffs (82)</span>
                </Link>
                <Link
                  href="/lessons/songs/why-songs-work"
                  className="px-3 py-1 rounded-xl bg-amber-400 text-slate-950 font-bold hover:bg-amber-300 transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <span>🧠</span>
                  <span>Why Songs Work</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pedagogical Overview */}
        <section className="mb-12">
          <div className="bg-white dark:bg-slate-900/90 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-xl">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{data.overview.title}</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {data.overview.text}
            </p>
            {data.overview.bulletItems && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-6">
                {data.overview.bulletItems.map((item, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200/80 dark:border-slate-800 flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200"
                  >
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Interactive 5-Stage Song Mastery Roadmap */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-amber-400">
                Structured Curriculum
              </span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {data.learningPath.title}
              </h2>
            </div>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 hidden sm:inline-block">
              5 Steps from Analysis to Performance
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {data.learningPath.steps.map((step, i) => {
              const href = step.href || '/lessons/songs/analysis-method';
              return (
                <Link
                  key={i}
                  href={href}
                  className="bg-white dark:bg-slate-900/90 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-amber-400 hover:shadow-lg dark:hover:shadow-amber-500/5 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 font-bold text-xs flex items-center justify-center border border-blue-200 dark:border-blue-800/40 mb-3 group-hover:scale-110 transition-transform">
                      {i + 1}
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-amber-400 transition-colors mb-1.5">
                      {step.title}
                    </h3>
                    {step.description && (
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        {step.description}
                      </p>
                    )}
                  </div>
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-amber-400 group-hover:translate-x-0.5 transition-transform">
                    <span>Explore Stage</span>
                    <span>&rarr;</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Curated Song Learning Pathways */}
        <section className="mb-14">
          <div className="bg-white dark:bg-slate-900/90 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm dark:shadow-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Pedagogical Roadmaps
                </span>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Choose Your Song Learning Pathway
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
                  Sequential 5-song milestones curated by difficulty, genre, and technical development.
                </p>
              </div>

              <Link
                href="/lessons/songs/song-analysis?tab=pathways"
                className="text-xs font-bold text-blue-600 dark:text-amber-400 hover:underline shrink-0"
              >
                View all pathways &rarr;
              </Link>
            </div>

            {/* Pathway Selector Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {pathways.map((p) => {
                const isActive = p.id === activePathway.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActivePathwayId(p.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-blue-600 dark:bg-amber-500 text-white dark:text-slate-950 shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    <span>{p.icon}</span>
                    <span>{p.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Pathway Details Card */}
            <div className="bg-slate-50/80 dark:bg-slate-950/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 mb-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{activePathway.icon}</span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{activePathway.title}</h3>
                  <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold border ${getDifficultyColor(activePathway.difficulty)}`}>
                    {activePathway.difficulty}
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{activePathway.subtitle}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {activePathway.description}
              </p>

              {/* Pathway Song Steps */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                {activePathway.songs.map((song) => (
                  <Link
                    key={song.slug}
                    href={`/lessons/songs/song-analysis/${song.slug}`}
                    className="bg-white dark:bg-slate-900 rounded-xl p-3.5 border border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-slate-700 transition-all flex flex-col justify-between group shadow-xs"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1.5">
                        <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 font-bold text-[10px] flex items-center justify-center">
                          {song.stepNumber}
                        </span>
                        <span className={`text-[9px] px-1.5 py-0.2 rounded-full border ${getDifficultyColor(song.difficulty)}`}>
                          {song.difficulty}
                        </span>
                      </div>
                      <div className="font-bold text-xs text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-amber-400 transition-colors line-clamp-1">
                        {song.title}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                        {song.artist}
                      </div>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-semibold text-blue-600 dark:text-amber-400">
                      <span>Learn Tab</span>
                      <span>&rarr;</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 10 Topic Cards Grid */}
        <section className="mb-14">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              Curriculum Topics
            </span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Explore Song Learning by Topic
            </h2>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data.topics.map((topic) => (
              <Link
                key={topic.href}
                href={topic.href}
                className="group bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 hover:border-blue-400 dark:hover:border-slate-700 hover:shadow-lg dark:hover:shadow-amber-500/5 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 group-hover:scale-110 transition-transform">
                      {topic.icon}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-amber-400 transition-colors">
                      {topic.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {topic.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-amber-400 group-hover:translate-x-0.5 transition-transform">
                  <span>Explore Lessons</span>
                  <span>&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Real Songs Showcase */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Iconic Breakdowns
              </span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Featured Guitar Masterclasses
              </h2>
            </div>
            <Link
              href="/lessons/songs/song-analysis"
              className="text-xs sm:text-sm font-bold text-blue-600 dark:text-amber-400 hover:underline"
            >
              Browse all 128 songs &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSongs.map((song) => (
              <Link
                key={song.slug}
                href={`/lessons/songs/song-analysis/${song.slug}`}
                className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 hover:border-amber-400 dark:hover:border-slate-700 hover:shadow-lg dark:hover:shadow-amber-500/5 transition-all flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-amber-400 transition-colors">
                        {song.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mt-0.5">
                        {song.artist} • {song.year}
                      </p>
                    </div>
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold border shrink-0 ${getDifficultyColor(song.difficulty)}`}>
                      {song.difficulty}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 my-3 text-xs">
                    <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono">
                      Key: {song.key}
                    </span>
                    {song.tempo && (
                      <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono">
                        {song.tempo}
                      </span>
                    )}
                    <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {song.genre}
                    </span>
                  </div>

                  {song.techniques && song.techniques.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {song.techniques.slice(0, 3).map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800/40"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-blue-600 dark:text-amber-400 group-hover:translate-x-0.5 transition-transform">
                  <span>Learn Tabs & Theory</span>
                  <span>&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Lead Magnet Banner */}
        <LeadMagnetBanner className="mt-12" />
      </main>
    </Layout>
  );
}
