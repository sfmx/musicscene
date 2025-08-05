"use client";

import Link from 'next/link';
import React from 'react';
import { SongListItem } from '@/lib/songData';

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
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'intermediate': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'advanced': return 'bg-red-100 text-red-800 border-red-200';
      case 'expert': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getLearningValueColor = (value?: string) => {
    switch (value?.toLowerCase()) {
      case 'high': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  const formatPopularity = (popularity?: number) => {
    if (!popularity) return null;
    const stars = Math.round(popularity / 20); // Convert 1-100 to 1-5 stars
    return '★'.repeat(stars) + '☆'.repeat(5 - stars);
  };

  const baseClasses = "bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200";
  
  const variantClasses = {
    default: "p-6",
    featured: "p-8 ring-2 ring-blue-200 bg-gradient-to-br from-white to-blue-50",
    compact: "p-4"
  };

  return (
    <Link 
      href={`/lessons/songs/song-analysis/${song.slug}`}
      className={`${baseClasses} ${variantClasses[variant]} block group`}
    >
      {/* Header Section */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1 min-w-0">
          <h3 className={`font-bold text-gray-900 group-hover:text-blue-700 transition-colors ${
            variant === 'featured' ? 'text-xl' : 'text-lg'
          }`}>
            {song.title}
          </h3>
          <p className="text-gray-600 font-medium mt-1">{song.artist}</p>
          <p className="text-sm text-gray-500 mt-1">{song.year} • {song.genre}</p>
        </div>
        
        {/* Featured Badge */}
        {song.featured && variant !== 'compact' && (
          <div className="ml-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
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
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">
              {song.genre}
            </span>
            {song.decade && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 border border-indigo-200">
                {song.decade}
              </span>
            )}
          </div>

          {/* Secondary Info Row */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            {song.popularity && (
              <div className="flex items-center gap-1">
                <span className="text-yellow-500">{formatPopularity(song.popularity)}</span>
                <span className="text-xs">({song.popularity}/100)</span>
              </div>
            )}
            {song.iconicRiff && (
              <span className="inline-flex items-center text-xs text-purple-700">
                🎸 Iconic Riff
              </span>
            )}
          </div>

          {/* Techniques */}
          {song.techniques.length > 0 && (
            <div className="pt-2 border-t border-gray-100">
              <div className="flex flex-wrap gap-1">
                {song.techniques.slice(0, variant === 'featured' ? 6 : 4).map((technique, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-blue-50 text-blue-700 border border-blue-100"
                  >
                    {technique}
                  </span>
                ))}
                {song.techniques.length > (variant === 'featured' ? 6 : 4) && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs text-gray-500">
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
                    className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-green-50 text-green-700 border border-green-100"
                  >
                    #{tag}
                  </span>
                ))}
                {song.tags.length > 4 && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs text-gray-500">
                    +{song.tags.length - 4} more
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Compact View Info */}
      {variant === 'compact' && (
        <div className="flex items-center justify-between mt-2">
          <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${getDifficultyColor(song.difficulty)}`}>
            {song.difficulty}
          </span>
          <span className="text-xs text-gray-500">{song.genre}</span>
        </div>
      )}
    </Link>
  );
}
