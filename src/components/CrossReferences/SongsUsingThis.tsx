"use client";

import React from 'react';
import Link from 'next/link';
import { getSongsUsingScale, getSongsUsingChord } from '@/lib/crossReferences';
import { getWhySongWorks } from '@/data/whySongsWork';
import { getDifficultyColor } from '@/utils/theme';

interface Props {
  type: 'scale' | 'chord' | 'mode';
  slug: string;
}

export default function SongsUsingThis({ type, slug }: Props) {
  // For modes, look up by scale slug (dorian, mixolydian, etc. exist in scale data)
  const songs = type === 'chord'
    ? getSongsUsingChord(slug)
    : getSongsUsingScale(slug);

  if (songs.length === 0) return null;

  const typeLabel = type === 'scale' ? 'Scale' : type === 'chord' ? 'Chord' : 'Mode';

  return (
    <div className="bg-slate-900/90 rounded-xl border border-slate-800 shadow-xl p-6 mb-12">
      <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
        <h2 className="text-2xl font-bold text-white">
          Songs Using This {typeLabel}
        </h2>
        <Link
          href="/lessons/songs/why-songs-work/"
          className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Why Songs Work Hub →
        </Link>
      </div>
      <p className="text-slate-400 text-sm mb-6">
        Hear how this {typeLabel.toLowerCase()} is used in real songs with harmonic music theory breakdowns
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {songs.map(song => {
          const songSlug = song.slug || song.id.replace('song-analysis:', '');
          const breakdown = getWhySongWorks(songSlug);
          const hasCuratedBreakdown = breakdown?.isCurated;
          const targetUrl = hasCuratedBreakdown ? `${song.url}#why-it-works` : song.url;

          return (
            <Link
              key={song.id}
              href={targetUrl}
              className={`group rounded-xl p-4 border transition-all duration-200 flex flex-col justify-between ${
                hasCuratedBreakdown
                  ? 'bg-slate-950/90 border-amber-500/40 hover:border-amber-400 hover:bg-slate-900/90 hover:shadow-lg hover:shadow-amber-950/20'
                  : 'bg-slate-950/80 border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/80 hover:shadow-lg'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-1">
                  <h3 className="font-semibold text-white group-hover:text-cyan-300 transition-colors text-sm">{song.title}</h3>
                </div>

                {hasCuratedBreakdown && (
                  <div className="mt-1 mb-2">
                    <span className="text-[11px] font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded inline-flex items-center gap-1">
                      <span>💡</span> Harmonic Secret Available
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-800">
                {song.difficulty ? (
                  <span className={`text-[11px] px-2 py-0.5 rounded-full border ${getDifficultyColor(song.difficulty)}`}>
                    {song.difficulty}
                  </span>
                ) : <span />}
                <span className="text-xs font-medium text-slate-400 group-hover:text-cyan-400 transition-colors">
                  {hasCuratedBreakdown ? 'Why It Works →' : 'View Analysis →'}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
