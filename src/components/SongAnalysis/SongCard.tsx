"use client";

import Link from 'next/link';
import React from 'react';
import { SongListItem } from '@/lib/songData';
import { getDifficultyColor } from '@/utils/theme';

interface SongCardProps {
  song: SongListItem;
  variant?: 'default' | 'featured' | 'compact';
  showMetadata?: boolean;
}

export default function SongCard({
  song,
  variant = 'default',
  showMetadata = true
}: SongCardProps) {
  const formatPopularity = (popularity?: number) => {
    if (!popularity) return null;
    const stars = Math.round(popularity / 20);
    return '★'.repeat(stars) + '☆'.repeat(5 - stars);
  };

  const baseClasses = "bg-white dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:shadow-xl transition-all duration-300 shadow-md";
  
  const variantClasses = {
    default: "p-6",
    featured: "p-8 border-amber-500/40 bg-gradient-to-br from-amber-50/60 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900/95 dark:to-amber-950/20 shadow-lg shadow-amber-950/10",
    compact: "p-4"
  };

  return (
    <Link 
      href={`/lessons/songs/song-analysis/${song.slug}`}
      className={`${baseClasses} ${variantClasses[variant]} block group flex flex-col justify-between`}
    >
      <div>
        {/* Header Section */}
        <div className="flex items-start justify-between mb-4 gap-2">
          <div className="flex-1 min-w-0">
            <h3 className={`font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors truncate ${
              variant === 'featured' ? 'text-xl' : 'text-lg'
            }`}>
              {song.title}
            </h3>
            <p className="text-slate-700 dark:text-slate-300 font-medium mt-1">{song.artist}</p>
            <p className="text-xs text-slate-500 mt-1">{song.year} • {song.genre}</p>
          </div>
          
          {/* Featured Badge */}
          {song.featured && variant !== 'compact' && (
            <div className="ml-2 flex-shrink-0">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100/80 dark:bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-500/30">
                ⭐ Featured
              </span>
            </div>
          )}
        </div>

        {/* Metadata Section */}
        {showMetadata && variant !== 'compact' && (
          <div className="space-y-3">
            {/* Primary Info Row */}
            <div className="flex flex-wrap gap-2">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getDifficultyColor(song.difficulty)}`}>
                {song.difficulty}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                {song.genre}
              </span>
              {song.decade && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/30">
                  {song.decade}
                </span>
              )}
            </div>

            {/* Secondary Info Row */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
              {song.popularity && (
                <div className="flex items-center gap-1">
                  <span className="text-amber-500 dark:text-amber-400">{formatPopularity(song.popularity)}</span>
                  <span className="text-slate-400 dark:text-slate-500">({song.popularity}/100)</span>
                </div>
              )}
              {song.iconicRiff && (
                <span className="inline-flex items-center text-xs text-purple-600 dark:text-purple-400 font-medium">
                  🎸 Iconic Riff
                </span>
              )}
            </div>

            {/* Techniques */}
            {song.techniques.length > 0 && (
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                <div className="flex flex-wrap gap-1">
                  {song.techniques.slice(0, variant === 'featured' ? 6 : 4).map((technique, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-cyan-50 dark:bg-slate-950/80 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-slate-800"
                    >
                      {technique}
                    </span>
                  ))}
                  {song.techniques.length > (variant === 'featured' ? 6 : 4) && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs text-slate-400 dark:text-slate-500">
                      +{song.techniques.length - (variant === 'featured' ? 6 : 4)} more
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Tags */}
            {song.tags && song.tags.length > 0 && variant === 'featured' && (
              <div className="pt-2">
                <div className="flex flex-wrap gap-1">
                  {song.tags.slice(0, 4).map((tag, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-emerald-50 dark:bg-slate-950/80 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-slate-800"
                    >
                      #{tag}
                    </span>
                  ))}
                  {song.tags.length > 4 && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs text-slate-400 dark:text-slate-500">
                      +{song.tags.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Compact View Info */}
      {variant === 'compact' && (
        <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-200 dark:border-slate-800 text-xs">
          <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${getDifficultyColor(song.difficulty)}`}>
            {song.difficulty}
          </span>
          <span className="text-slate-600 dark:text-slate-400">{song.genre}</span>
        </div>
      )}
    </Link>
  );
}
