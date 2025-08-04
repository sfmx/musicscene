"use client";

import Link from 'next/link';
import React, { useState, useMemo } from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import { 
  getAllSongs, 
  getFeaturedSongs, 
  searchSongs, 
  getUniqueArtists, 
  getUniqueGenres, 
  getDifficultyLevels,
  SongListItem,
  SearchFilters 
} from '@/lib/songData';

export default function SongAnalysisPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<SearchFilters>({});
  const [showFilters, setShowFilters] = useState(false);

  const allSongs = getAllSongs();
  const featuredSongs = getFeaturedSongs(6);
  
  const filteredSongs = useMemo(() => {
    return searchSongs(searchQuery, filters);
  }, [searchQuery, filters]);

  const uniqueArtists = getUniqueArtists();
  const uniqueGenres = getUniqueGenres();
  const difficultyLevels = getDifficultyLevels();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-orange-100 text-orange-800'; 
      case 'advanced': return 'bg-red-100 text-red-800';
      case 'expert': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderSongCard = (song: SongListItem) => (
    <Link 
      key={song.slug}
      href={`/lessons/songs/song-analysis/${song.slug}`}
      className="bg-white rounded-lg border border-gray-200 p-6 hover:border-blue-300 hover:shadow-md transition-all"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-gray-900 text-lg mb-1">{song.title}</h3>
          <p className="text-gray-600 mb-2">{song.artist}</p>
          <p className="text-sm text-gray-500">{song.genre} • {song.year}</p>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs ${getDifficultyColor(song.difficulty)}`}>
          {song.difficulty}
        </span>
      </div>
      
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-2">
          <strong>Key:</strong> {song.key} • <strong>Tempo:</strong> {song.tempo}
        </p>
      </div>

      <div className="flex flex-wrap gap-1">
        {song.techniques.slice(0, 3).map((technique, index) => (
          <span key={index} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
            {technique}
          </span>
        ))}
        {song.techniques.length > 3 && (
          <span className="text-gray-400 text-xs">+{song.techniques.length - 3} more</span>
        )}
      </div>
    </Link>
  );

  return (
    <Layout>
      <Header
        title="Song Analysis Collection"
        subtitle="Complete breakdowns of classic songs with theory, techniques, and practice guidance"
      />
      
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Search and Filters */}
        <section className="mb-12">
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-4 mb-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search songs, artists, or techniques..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </button>
            </div>

            {showFilters && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
                  <select 
                    multiple
                    value={filters.difficulty || []}
                    onChange={(e) => setFilters({
                      ...filters, 
                      difficulty: Array.from(e.target.selectedOptions, option => option.value)
                    })}
                    className="w-full border border-gray-300 rounded text-sm"
                    size={4}
                  >
                    {difficultyLevels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Artist</label>
                  <select 
                    multiple
                    value={filters.artist || []}
                    onChange={(e) => setFilters({
                      ...filters, 
                      artist: Array.from(e.target.selectedOptions, option => option.value)
                    })}
                    className="w-full border border-gray-300 rounded text-sm"
                    size={4}
                  >
                    {uniqueArtists.map(artist => (
                      <option key={artist} value={artist}>{artist}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Genre</label>
                  <select 
                    multiple
                    value={filters.genre || []}
                    onChange={(e) => setFilters({
                      ...filters, 
                      genre: Array.from(e.target.selectedOptions, option => option.value)
                    })}
                    className="w-full border border-gray-300 rounded text-sm"
                    size={4}
                  >
                    {uniqueGenres.map(genre => (
                      <option key={genre} value={genre}>{genre}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Results Summary */}
        <section className="mb-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">
              {searchQuery || Object.keys(filters).length > 0 
                ? `Search Results (${filteredSongs.length} songs)`
                : `All Song Analyses (${allSongs.length} songs)`
              }
            </h2>
            {(searchQuery || Object.keys(filters).length > 0) && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setFilters({});
                }}
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                Clear all filters
              </button>
            )}
          </div>
        </section>

        {/* Featured Songs */}
        {!searchQuery && Object.keys(filters).length === 0 && featuredSongs.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Song Analyses</h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {featuredSongs.map(renderSongCard)}
            </div>
          </section>
        )}

        {/* All Songs Grid */}
        <section>
          {(searchQuery || Object.keys(filters).length > 0) && (
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              {filteredSongs.length === 0 ? 'No songs found' : 'Search Results'}
            </h2>
          )}
          
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {(searchQuery || Object.keys(filters).length > 0 
              ? filteredSongs 
              : allSongs
            ).map(renderSongCard)}
          </div>
          
          {filteredSongs.length === 0 && (searchQuery || Object.keys(filters).length > 0) && (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">No songs match your search criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setFilters({});
                }}
                className="text-blue-600 hover:text-blue-800"
              >
                View all songs
              </button>
            </div>
          )}
        </section>

        {/* Stats Section */}
        <section className="mt-16 bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Collection Stats</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">{allSongs.length}</div>
              <div className="text-sm text-gray-600">Total Songs</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">{uniqueArtists.length}</div>
              <div className="text-sm text-gray-600">Artists</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">{uniqueGenres.length}</div>
              <div className="text-sm text-gray-600">Genres</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">{featuredSongs.length}</div>
              <div className="text-sm text-gray-600">Featured</div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
