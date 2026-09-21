import songsListData from '@/data/_generated/songs-list.json';

export interface SongListItem {
  slug: string;
  title: string;
  artist: string;
  genre: string;
  difficulty: string;
  year: string;
  tempo: string;
  key: string;
  techniques: string[];
  featured?: boolean;
  dateAdded?: string;
  popularity?: number;
  decade?: string;
  subGenre?: string;
  tags?: string[];
  iconicRiff?: boolean;
  estimatedLearningTime?: string;
  viewCount?: number;
}

export interface SearchFilters {
  difficulty?: string[];
  genre?: string[];
  artist?: string[];
  techniques?: string[];
  yearRange?: [number, number];
  decade?: string[];
  tags?: string[];
  featured?: boolean;
  iconicRiff?: boolean;
}

const songsList: SongListItem[] = songsListData as SongListItem[];

export function getAllSongs(): SongListItem[] {
  return songsList;
}

export function getAllSongSlugs(): string[] {
  return songsList.map(song => song.slug);
}

export function getFeaturedSongs(limit = 6): SongListItem[] {
  return getAllSongs()
    .filter(song => song.featured)
    .slice(0, limit);
}

export function searchSongs(query: string, filters: SearchFilters = {}): SongListItem[] {
  let songs = getAllSongs();
  
  // Text search across title, artist, and techniques
  if (query.trim()) {
    const searchTerms = query.toLowerCase().split(' ');
    songs = songs.filter(song => 
      searchTerms.every(term =>
        song.title.toLowerCase().includes(term) ||
        song.artist.toLowerCase().includes(term) ||
        song.techniques.some(tech => tech.toLowerCase().includes(term)) ||
        song.tags?.some(tag => tag.toLowerCase().includes(term))
      )
    );
  }
  
  // Apply filters
  if (filters.difficulty?.length) {
    songs = songs.filter(song => filters.difficulty!.includes(song.difficulty));
  }
  
  if (filters.genre?.length) {
    songs = songs.filter(song => 
      filters.genre!.some(genre => song.genre.toLowerCase().includes(genre.toLowerCase()))
    );
  }
  
  if (filters.artist?.length) {
    songs = songs.filter(song => filters.artist!.includes(song.artist));
  }
  
  if (filters.techniques?.length) {
    songs = songs.filter(song =>
      filters.techniques!.some(tech => 
        song.techniques.some(songTech => 
          songTech.toLowerCase().includes(tech.toLowerCase())
        )
      )
    );
  }
  
  if (filters.yearRange) {
    const [startYear, endYear] = filters.yearRange;
    songs = songs.filter(song => {
      const year = parseInt(song.year);
      return year >= startYear && year <= endYear;
    });
  }

  // Decade filter
  if (filters.decade?.length) {
    songs = songs.filter(song => filters.decade!.includes(song.decade || ''));
  }

  if (filters.tags?.length) {
    songs = songs.filter(song => 
      filters.tags!.some(tag => song.tags?.includes(tag))
    );
  }

  if (filters.featured !== undefined) {
    songs = songs.filter(song => song.featured === filters.featured);
  }

  if (filters.iconicRiff !== undefined) {
    songs = songs.filter(song => song.iconicRiff === filters.iconicRiff);
  }
  
  return songs;
}

export function getSongsByArtist(artist: string): SongListItem[] {
  return getAllSongs().filter(song => 
    song.artist.toLowerCase() === artist.toLowerCase()
  );
}

export function getSongsByGenre(genre: string): SongListItem[] {
  return getAllSongs().filter(song => 
    song.genre.toLowerCase().includes(genre.toLowerCase())
  );
}

export function getSongsByDifficulty(difficulty: string): SongListItem[] {
  return getAllSongs().filter(song => 
    song.difficulty.toLowerCase() === difficulty.toLowerCase()
  );
}

// Get unique values for filter options
export function getUniqueArtists(): string[] {
  return [...new Set(getAllSongs().map(song => song.artist))].sort();
}

export function getUniqueGenres(): string[] {
  return [...new Set(getAllSongs().map(song => song.genre))].sort();
}

export function getUniqueTechniques(): string[] {
  const allTechniques = getAllSongs().flatMap(song => song.techniques);
  return [...new Set(allTechniques)].sort();
}

export function getDifficultyLevels(): string[] {
  return ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
}

export function getPopularSongs(limit = 6): SongListItem[] {
  return getAllSongs()
    .slice()
    .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
    .slice(0, limit);
}

export function getRecentlyAdded(limit = 6): SongListItem[] {
  return getAllSongs()
    .slice()
    .sort((a, b) => new Date(b.dateAdded || '2024-01-01').getTime() - new Date(a.dateAdded || '2024-01-01').getTime())
    .slice(0, limit);
}

export function getSongsByDecade(decade: string): SongListItem[] {
  return getAllSongs().filter(song => song.decade === decade);
}

export function getSongsByTag(tag: string): SongListItem[] {
  return getAllSongs().filter(song => song.tags?.includes(tag));
}

export function getIconicRiffSongs(): SongListItem[] {
  return getAllSongs().filter(song => song.iconicRiff === true);
}

export function getBeginnerFriendlySongs(): SongListItem[] {
  return getAllSongs().filter(song => 
    song.difficulty === 'Beginner' || song.tags?.includes('beginner-friendly')
  );
}

export function getUniqueDecades(): string[] {
  const decades = new Set(getAllSongs().map(song => song.decade).filter((decade): decade is string => Boolean(decade)));
  return Array.from(decades).sort();
}

export function getUniqueTags(): string[] {
  const allTags = getAllSongs().flatMap(song => song.tags || []);
  const uniqueTags = new Set(allTags);
  return Array.from(uniqueTags).sort();
}

export function getSongCategories() {
  return {
    popular: getPopularSongs(6),
    recent: getRecentlyAdded(6),
    beginnerFriendly: getBeginnerFriendlySongs(),
    iconicRiffs: getIconicRiffSongs(),
    byDecade: {
      '1970s': getSongsByDecade('1970s'),
      '1980s': getSongsByDecade('1980s'),
      '1990s': getSongsByDecade('1990s'),
      '2000s': getSongsByDecade('2000s'),
    }
  };
}

