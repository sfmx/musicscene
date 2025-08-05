"use client";

import React, { useState, useMemo } from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import CategoryGrid from './CategoryGrid';
import SongCard from './SongCard';
import { 
  getAllSongs,
  getPopularSongs,
  getRecentlyAdded,
  getSongsByDecade,
  getSongsByTag,
  getIconicRiffSongs,
  getBeginnerFriendlySongs,
  getUniqueDecades,
  getUniqueTags,
  getUniqueArtists,
  getUniqueGenres,
  getDifficultyLevels,
  searchSongs,
  SearchFilters,
  SongListItem
} from '@/lib/songData';

export default function SongDiscoveryHub() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<SearchFilters>({});
  const [showFilters, setShowFilters] = useState(false);
  const [activeView, setActiveView] = useState<'discover' | 'search'>('discover');

  // Data fetching
  const allSongs = getAllSongs();
  const popularSongs = getPopularSongs().slice(0, 6);
  const recentSongs = getRecentlyAdded().slice(0, 6);
  const iconicRiffSongs = getIconicRiffSongs().slice(0, 6);
  const beginnerSongs = getBeginnerFriendlySongs().slice(0, 6);
  
  // Get songs by decade (showing top decades)
  const uniqueDecades = getUniqueDecades();
  const decadeSections = uniqueDecades.slice(0, 3).map(decade => ({
    title: `${decade} Classics`,
    description: `Iconic songs from the ${decade}`,
    songs: getSongsByDecade(decade).slice(0, 4),
    icon: decade === '1970s' ? '🕺' : decade === '1980s' ? '🎹' : '🎸',
    maxDisplay: 4
  }));

  // Search functionality
  const filteredSongs = useMemo(() => {
    if (!searchQuery.trim() && Object.keys(filters).length === 0) {
      return [];
    }
    return searchSongs(searchQuery, filters);
  }, [searchQuery, filters]);

  // Filter options
  const uniqueArtists = getUniqueArtists();
  const uniqueGenres = getUniqueGenres();
  const uniqueTags = getUniqueTags();
  const difficultyLevels = getDifficultyLevels();

  // View switching
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() || Object.keys(filters).length > 0) {
      setActiveView('search');
    } else {
      setActiveView('discover');
    }
  };

  const handleFilterChange = (newFilters: SearchFilters) => {
    setFilters(newFilters);
    if (Object.keys(newFilters).length > 0 || searchQuery.trim()) {
      setActiveView('search');
    } else {
      setActiveView('discover');
    }
  };

  const clearFiltersAndSearch = () => {
    setSearchQuery('');
    setFilters({});
    setActiveView('discover');
    setShowFilters(false);
  };

  // Category sections for discovery view
  const discoverySections = [
    {
      title: "Popular Songs",
      description: "Most loved by our community",
      songs: popularSongs,
      icon: "⭐",
      viewAllLink: "/lessons/songs/song-analysis/popular",
      maxDisplay: 6
    },
    {
      title: "Recently Added",
      description: "Latest additions to our song library",
      songs: recentSongs,
      icon: "🆕",
      viewAllLink: "/lessons/songs/song-analysis/recent",
      maxDisplay: 6
    },
    {
      title: "Iconic Riffs",
      description: "Songs with unforgettable guitar riffs",
      songs: iconicRiffSongs,
      icon: "🎸",
      viewAllLink: "/lessons/songs/song-analysis/riffs",
      maxDisplay: 6
    },
    {
      title: "Perfect for Beginners",
      description: "Great songs to start your guitar journey",
      songs: beginnerSongs,
      icon: "🌱",
      viewAllLink: "/lessons/songs/song-analysis/beginner",
      maxDisplay: 6
    },
    ...decadeSections
  ];

  return (
    <Layout>
      <Header
        title="Song Analysis Library"
        subtitle="Master your favorite songs with comprehensive theory-based breakdowns"
      />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search songs, artists, techniques, or tags..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg 
                className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`px-6 py-3 border rounded-lg font-medium transition-colors ${
                showFilters || Object.keys(filters).length > 0
                  ? 'bg-blue-50 border-blue-200 text-blue-700'
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              Filters {Object.keys(filters).length > 0 && `(${Object.keys(filters).length})`}
            </button>
          </div>

          {/* Active Search/Filter Indicator */}
          {(searchQuery || Object.keys(filters).length > 0) && (
            <div className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <span className="text-blue-700 font-medium">
                  {activeView === 'search' ? `Found ${filteredSongs.length} songs` : 'Active filters'}
                </span>
                {searchQuery && (
                  <span className="text-blue-600">
                    for "{searchQuery}"
                  </span>
                )}
              </div>
              <button
                onClick={clearFiltersAndSearch}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear all
              </button>
            </div>
          )}

          {/* Filter Panel */}
          {showFilters && (
            <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Difficulty Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Difficulty
                  </label>
                  <select
                    multiple
                    value={filters.difficulty || []}
                    onChange={(e) => {
                      const values = Array.from(e.target.selectedOptions, option => option.value);
                      handleFilterChange({ ...filters, difficulty: values.length ? values : undefined });
                    }}
                    className="w-full border border-gray-300 rounded-md p-2"
                    size={4}
                  >
                    {difficultyLevels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>

                {/* Genre Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Genre
                  </label>
                  <select
                    multiple
                    value={filters.genre || []}
                    onChange={(e) => {
                      const values = Array.from(e.target.selectedOptions, option => option.value);
                      handleFilterChange({ ...filters, genre: values.length ? values : undefined });
                    }}
                    className="w-full border border-gray-300 rounded-md p-2"
                    size={4}
                  >
                    {uniqueGenres.map(genre => (
                      <option key={genre} value={genre}>{genre}</option>
                    ))}
                  </select>
                </div>

                {/* Decade Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Decade
                  </label>
                  <select
                    multiple
                    value={filters.decade || []}
                    onChange={(e) => {
                      const values = Array.from(e.target.selectedOptions, option => option.value);
                      handleFilterChange({ ...filters, decade: values.length ? values : undefined });
                    }}
                    className="w-full border border-gray-300 rounded-md p-2"
                    size={4}
                  >
                    {uniqueDecades.map(decade => (
                      <option key={decade} value={decade}>{decade}</option>
                    ))}
                  </select>
                </div>

                {/* Tags Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tags
                  </label>
                  <select
                    multiple
                    value={filters.tags || []}
                    onChange={(e) => {
                      const values = Array.from(e.target.selectedOptions, option => option.value);
                      handleFilterChange({ ...filters, tags: values.length ? values : undefined });
                    }}
                    className="w-full border border-gray-300 rounded-md p-2"
                    size={4}
                  >
                    {uniqueTags.map(tag => (
                      <option key={tag} value={tag}>{tag}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Toggle Filters */}
              <div className="flex gap-4 pt-4 border-t border-gray-200">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.featured || false}
                    onChange={(e) => 
                      handleFilterChange({ 
                        ...filters, 
                        featured: e.target.checked ? true : undefined 
                      })
                    }
                    className="mr-2"
                  />
                  Featured Songs Only
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.iconicRiff || false}
                    onChange={(e) => 
                      handleFilterChange({ 
                        ...filters, 
                        iconicRiff: e.target.checked ? true : undefined 
                      })
                    }
                    className="mr-2"
                  />
                  Iconic Riffs Only
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Content Area */}
        {activeView === 'discover' ? (
          /* Discovery View */
          <CategoryGrid sections={discoverySections} />
        ) : (
          /* Search Results View */
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Search Results ({filteredSongs.length})
            </h2>
            {filteredSongs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSongs.map((song) => (
                  <SongCard key={song.slug} song={song} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <div className="text-gray-400 text-4xl mb-4">🔍</div>
                <p className="text-gray-600 text-lg mb-2">No songs found</p>
                <p className="text-gray-500">Try adjusting your search terms or filters</p>
              </div>
            )}
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">{allSongs.length}</div>
              <div className="text-gray-600">Total Songs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">{uniqueArtists.length}</div>
              <div className="text-gray-600">Artists</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">{uniqueGenres.length}</div>
              <div className="text-gray-600">Genres</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">{iconicRiffSongs.length}</div>
              <div className="text-gray-600">Iconic Riffs</div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
