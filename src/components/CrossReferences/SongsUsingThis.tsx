"use client";

import React from 'react';
import Link from 'next/link';
import { getSongsUsingScale, getSongsUsingChord } from '@/lib/crossReferences';

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
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
        Songs Using This {typeLabel}
      </h2>
      <p className="text-gray-600 text-sm mb-6">
        Hear how this {typeLabel.toLowerCase()} is used in real songs
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {songs.map(song => (
          <Link
            key={song.id}
            href={song.url}
            className="bg-orange-50 rounded-lg p-4 border border-orange-200 hover:bg-orange-100 hover:shadow-md transition-all duration-200"
          >
            <h3 className="font-semibold text-gray-900 text-sm">{song.title}</h3>
            {song.difficulty && (
              <span className={`text-xs px-2 py-0.5 rounded-full mt-2 inline-block ${DIFFICULTY_COLORS[song.difficulty] || 'bg-gray-100 text-gray-600'}`}>
                {song.difficulty}
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
