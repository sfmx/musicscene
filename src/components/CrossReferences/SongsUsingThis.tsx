"use client";

import React from 'react';
import Link from 'next/link';
import { getSongsUsingScale, getSongsUsingChord } from '@/lib/crossReferences';
import { getWhySongWorks } from '@/data/whySongsWork';

interface Props {
  type: 'scale' | 'chord' | 'mode';
  slug: string;
}

const DIFFICULTY_COLORS: Record<string, string> = {
  'beginner': 'bg-green-100 text-green-700',
  'intermediate': 'bg-yellow-100 text-yellow-700',
  'advanced': 'bg-red-100 text-red-700',
  'expert': 'bg-purple-100 text-purple-700',
};

export default function SongsUsingThis({ type, slug }: Props) {
  // For modes, look up by scale slug (dorian, mixolydian, etc. exist in scale data)
  const songs = type === 'chord'
    ? getSongsUsingChord(slug)
    : getSongsUsingScale(slug);

  if (songs.length === 0) return null;

  const typeLabel = type === 'scale' ? 'Scale' : type === 'chord' ? 'Chord' : 'Mode';

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
      <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          Songs Using This {typeLabel}
        </h2>
        <Link
          href="/lessons/songs/why-songs-work/"
          className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          Why Songs Work Hub →
        </Link>
      </div>
      <p className="text-gray-600 text-sm mb-6">
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
              className={`rounded-lg p-4 border transition-all duration-200 flex flex-col justify-between ${
                hasCuratedBreakdown
                  ? 'bg-amber-50/70 border-amber-300 hover:bg-amber-100/80 hover:shadow-md'
                  : 'bg-orange-50 rounded-lg border-orange-200 hover:bg-orange-100 hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-1">
                  <h3 className="font-semibold text-gray-900 text-sm">{song.title}</h3>
                </div>

                {hasCuratedBreakdown && (
                  <div className="mt-1 mb-2">
                    <span className="text-[11px] font-semibold text-amber-800 bg-amber-200/60 border border-amber-300/80 px-2 py-0.5 rounded inline-flex items-center gap-1">
                      <span>💡</span> Harmonic Secret Available
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between mt-3 pt-2 border-t border-black/5">
                {song.difficulty ? (
                  <span className={`text-[11px] px-2 py-0.5 rounded-full ${DIFFICULTY_COLORS[song.difficulty] || 'bg-gray-100 text-gray-600'}`}>
                    {song.difficulty}
                  </span>
                ) : <span />}
                <span className="text-xs font-medium text-gray-500 hover:text-gray-900">
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

