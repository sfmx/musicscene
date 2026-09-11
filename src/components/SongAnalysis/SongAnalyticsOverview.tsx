"use client";

import React from 'react';
import { 
  getAllSongs,
  getUniqueArtists,
  getUniqueGenres,
  getUniqueDecades,
  getPopularSongs,
  getIconicRiffSongs
} from '@/lib/songData';

interface StatsCardProps {
  title: string;
  value: number;
  description: string;
  icon: string;
  color: string;
}

function StatsCard({ title, value, description, icon, color }: StatsCardProps) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${color} dark:bg-slate-800`}>
          <span className="text-2xl">{icon}</span>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-slate-900 dark:text-white">{value}</div>
          <div className="text-sm text-slate-500 dark:text-slate-400">{title}</div>
        </div>
      </div>
      <p className="text-slate-600 dark:text-slate-300 text-sm">{description}</p>
    </div>
  );
}

export default function SongAnalyticsOverview() {
  const allSongs = getAllSongs();
  const uniqueArtists = getUniqueArtists();
  const uniqueGenres = getUniqueGenres();
  const uniqueDecades = getUniqueDecades();
  const popularSongs = getPopularSongs();
  const iconicRiffSongs = getIconicRiffSongs();

  // Calculate difficulty distribution
  const difficultyStats = allSongs.reduce((acc, song) => {
    acc[song.difficulty] = (acc[song.difficulty] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Calculate average popularity
  const songsWithPopularity = allSongs.filter(song => song.popularity);
  const avgPopularity = songsWithPopularity.length > 0
    ? Math.round(songsWithPopularity.reduce((sum, song) => sum + (song.popularity || 0), 0) / songsWithPopularity.length)
    : 0;

  const stats = [
    {
      title: "Total Songs",
      value: allSongs.length,
      description: "Complete song analyses with theory breakdowns",
      icon: "🎵",
      color: "bg-blue-100 text-blue-700 dark:text-blue-300"
    },
    {
      title: "Artists Covered",
      value: uniqueArtists.length,
      description: "Diverse range of musicians and bands",
      icon: "🎤",
      color: "bg-green-100 text-green-700 dark:text-green-300"
    },
    {
      title: "Musical Genres",
      value: uniqueGenres.length,
      description: "From classic rock to modern metal",
      icon: "🎸",
      color: "bg-purple-100 text-purple-700 dark:text-purple-300"
    },
    {
      title: "Decades Covered",
      value: uniqueDecades.length,
      description: "Music spanning multiple generations",
      icon: "📅",
      color: "bg-orange-100 text-orange-700 dark:text-orange-300"
    },
    {
      title: "Highly Popular",
      value: popularSongs.length,
      description: "Community favorites with high ratings",
      icon: "⭐",
      color: "bg-yellow-100 text-yellow-700 dark:text-yellow-300"
    },
    {
      title: "Iconic Riffs",
      value: iconicRiffSongs.length,
      description: "Songs with memorable guitar riffs",
      icon: "🔥",
      color: "bg-red-100 text-red-700 dark:text-red-300"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Detailed Breakdowns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Difficulty Distribution */}
        <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Difficulty Distribution
          </h3>
          <div className="space-y-3">
            {Object.entries(difficultyStats).map(([difficulty, count]) => {
              const percentage = Math.round((count / allSongs.length) * 100);
              const colorMap = {
                'Beginner': 'bg-green-500',
                'Intermediate': 'bg-orange-500',
                'Advanced': 'bg-red-500',
                'Expert': 'bg-purple-500'
              };
              
              return (
                <div key={difficulty} className="flex items-center justify-between">
                  <span className="text-sm text-slate-700 dark:text-slate-300 capitalize">{difficulty}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-slate-200 dark:bg-slate-800 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${colorMap[difficulty as keyof typeof colorMap] || 'bg-slate-400'}`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-slate-600 dark:text-slate-400 min-w-[3rem]">
                      {count} ({percentage}%)
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Top Decades */}
        <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Songs by Decade
          </h3>
          <div className="space-y-3">
            {uniqueDecades.slice(0, 5).map(decade => {
              const songsInDecade = allSongs.filter(song => song.decade === decade).length;
              const percentage = Math.round((songsInDecade / allSongs.length) * 100);
              
              return (
                <div key={decade} className="flex items-center justify-between">
                  <span className="text-sm text-slate-700 dark:text-slate-300">{decade}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-slate-200 dark:bg-slate-800 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-indigo-500"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-slate-600 dark:text-slate-400 min-w-[3rem]">
                      {songsInDecade} ({percentage}%)
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quick Facts */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-950/40 rounded-lg border border-blue-200 dark:border-indigo-800/60 p-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          📊 Quick Facts
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{avgPopularity}/100</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Average Popularity</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {Math.round((iconicRiffSongs.length / allSongs.length) * 100)}%
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Feature Iconic Riffs</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {difficultyStats['Beginner'] || 0}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Beginner-Friendly Songs</div>
          </div>
        </div>
      </div>
    </div>
  );
}
