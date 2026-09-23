"use client";

import React, { useMemo } from 'react';
import Link from 'next/link';
import { ScaleData } from '@/lib/scaleData';
import { getAllSongs, SongListItem } from '@/lib/songList';
import { hasCuratedHarmonicBreakdown } from '@/data/curatedHarmonicSlugs';
import { getDifficultyColor } from '@/utils/theme';

interface ScaleSongsSectionProps {
  scaleData: ScaleData;
  scaleSlug?: string;
}

function normalizeTitle(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

export default function ScaleSongsSection({ scaleData }: ScaleSongsSectionProps) {
  const { slugMap, normalizedTitleMap } = useMemo(() => {
    const allSongs = getAllSongs();
    const slugMap = new Map<string, SongListItem>();
    const normalizedTitleMap = new Map<string, SongListItem>();

    for (const s of allSongs) {
      slugMap.set(s.slug.toLowerCase(), s);
      normalizedTitleMap.set(normalizeTitle(s.title), s);
      normalizedTitleMap.set(s.title.toLowerCase().trim(), s);
    }
    return { slugMap, normalizedTitleMap };
  }, []);

  function resolveSong(song: ScaleData['famousSongs'][number]): {
    matchedSong: SongListItem | null;
    targetUrl: string;
    isCatalogSong: boolean;
  } {
    if (song.slug && slugMap.has(song.slug.toLowerCase())) {
      const matched = slugMap.get(song.slug.toLowerCase())!;
      return {
        matchedSong: matched,
        targetUrl: `/lessons/songs/song-analysis/${matched.slug}/`,
        isCatalogSong: true,
      };
    }

    if (song.url) {
      return {
        matchedSong: null,
        targetUrl: song.url,
        isCatalogSong: true,
      };
    }

    const norm = normalizeTitle(song.title);
    if (normalizedTitleMap.has(norm)) {
      const matched = normalizedTitleMap.get(norm)!;
      return {
        matchedSong: matched,
        targetUrl: `/lessons/songs/song-analysis/${matched.slug}/`,
        isCatalogSong: true,
      };
    }

    for (const [key, item] of normalizedTitleMap.entries()) {
      if (key.length > 5 && norm.length > 5 && (key.startsWith(norm) || norm.startsWith(key))) {
        return {
          matchedSong: item,
          targetUrl: `/lessons/songs/song-analysis/${item.slug}/`,
          isCatalogSong: true,
        };
      }
    }

    return {
      matchedSong: null,
      targetUrl: `/search?q=${encodeURIComponent(song.title)}`,
      isCatalogSong: false,
    };
  }

  return (
    <div className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-xl p-6 sm:p-8 mb-12">
      <div className="flex items-center justify-between flex-wrap gap-2 mb-6 pb-3 border-b border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span>🎶</span> Famous Songs Using This Scale
        </h2>
        <a
          href="#songs-using-this"
          className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
        >
          <span>See All Songs Using This Scale</span>
          <span>↓</span>
        </a>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        {scaleData.famousSongs.map((song, index) => {
          const { matchedSong, targetUrl, isCatalogSong } = resolveSong(song);
          const songSlug = matchedSong?.slug || song.slug;
          const hasCuratedSecret = songSlug ? hasCuratedHarmonicBreakdown(songSlug) : false;
          const displayDifficulty = song.difficulty || matchedSong?.difficulty;
          const displayGenre = song.genre || matchedSong?.genre;

          return (
            <Link
              key={index}
              href={targetUrl}
              className={`group flex flex-col justify-between rounded-xl p-5 border transition-all duration-200 ${
                isCatalogSong
                  ? 'bg-slate-50 dark:bg-slate-950/80 hover:bg-white dark:hover:bg-slate-900/90 border-slate-200 dark:border-slate-800 hover:border-cyan-500/60 dark:hover:border-cyan-400/50 hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-cyan-950/20'
                  : 'bg-slate-50 dark:bg-slate-950/60 hover:bg-white dark:hover:bg-slate-900/60 border-slate-200 dark:border-slate-800/80 hover:border-slate-400/50 hover:shadow-sm'
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-3 gap-2">
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                      <span>{song.title}</span>
                      <span className="text-slate-400 dark:text-slate-500 group-hover:text-cyan-500 group-hover:translate-x-0.5 transition-all text-sm">
                        →
                      </span>
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs mt-0.5">{song.artist}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    {displayDifficulty && (
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${getDifficultyColor(displayDifficulty)}`}>
                        {displayDifficulty}
                      </span>
                    )}
                    {hasCuratedSecret && (
                      <span className="text-[10px] font-semibold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-500/15 border border-amber-200 dark:border-amber-500/30 px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                        <span>💡</span> Secret
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-800/80">
                    <span className="text-slate-500 dark:text-slate-400">Key:</span>
                    <span className="font-mono text-cyan-700 dark:text-cyan-300 font-bold">{song.key}</span>
                  </div>
                  {displayGenre && (
                    <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-800/80">
                      <span className="text-slate-500 dark:text-slate-400">Genre:</span>
                      <span className="text-slate-700 dark:text-slate-200">{displayGenre}</span>
                    </div>
                  )}
                  {song.usage && (
                    <p className="text-slate-600 dark:text-slate-300 pt-1">
                      <strong className="text-slate-700 dark:text-slate-400">Usage:</strong> {song.usage}
                    </p>
                  )}
                  {song.learningValue && (
                    <p className="text-amber-800 dark:text-amber-300/90 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-500/20 p-2.5 rounded-lg mt-2">
                      <strong className="text-amber-800 dark:text-amber-300">Learning Value:</strong> {song.learningValue}
                    </p>
                  )}
                </div>
              </div>

              {/* Action Bar */}
              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs">
                {isCatalogSong ? (
                  <>
                    <span className="font-semibold text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-500 flex items-center gap-1">
                      <span>🎸</span> Interactive Tab &amp; Analysis
                    </span>
                    <span className="text-slate-400 group-hover:text-cyan-500 transition-colors font-medium">
                      Learn Song →
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-slate-500 dark:text-slate-400">
                      Scale Reference Track
                    </span>
                    <span className="text-cyan-600 dark:text-cyan-400 group-hover:underline">
                      Search Catalog →
                    </span>
                  </>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
