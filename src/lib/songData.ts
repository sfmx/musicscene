import thunderstruckData from '@/data/songs/thunderstruck.json';
import forThoseAboutToRockData from '@/data/songs/for-those-about-to-rock.json';
import backInBlackData from '@/data/songs/back-in-black.json';
import highwayToHellData from '@/data/songs/highway-to-hell.json';
import youShookMeAllNightLongData from '@/data/songs/you-shook-me-all-night-long.json';
import wereNotGonnaTakeItData from '@/data/songs/were-not-gonna-take-it.json';
import sweetHomeAlabamaData from '@/data/songs/sweet-home-alabama.json';
import sweetChildOMineData from '@/data/songs/sweet-child-o-mine.json';
import enterSandmanData from '@/data/songs/enter-sandman.json';
import hurtSoGoodData from '@/data/songs/hurt-so-good.json';

export interface SongData {
  songInfo: {
    title: string;
    artist: string;
    album: string;
    released: string;
    genre: string;
    tempo: string;
    duration: string;
    key: string;
    tuning?: string;
  };
  difficulty: {
    overall: string;
    rhythmGuitar: string;
    leadGuitar: string;
    bass: string;
    drums: string;
  };
  musicalAnalysis?: {
    keyAndScale: {
      primaryKey: string;
      scalesUsed: Array<{
        scale: string;
        notes: string;
        application: string;
      }>;
      modalCharacter: string;
      keySignature: string;
      relativeMinor: string;
    };
    chordProgressions: {
      mainProgression: {
        chords: string[];
        progression: string;
        description: string;
      };
      sectionProgressions: Array<{
        section: string;
        progression: string;
        romanNumerals: string;
        description: string;
      }>;
      harmonicFunction: string[];
    };
  };
  techniques: Array<{
    name: string;
    description: string;
    difficulty: string;
    primaryTechnique: boolean;
    details: {
      notes?: string[];
      sequence?: string[];
      tips?: string[];
      chords?: string[];
      progression?: string;
    };
  }>;
  sections: Array<{
    name: string;
    timeStamp: string;
    technique: string;
    key: string;
    description: string;
    tab?: string;
    vexTab?: string;
    chords?: string[];
    progression?: string;
    notes: string[];
  }>;
  equipment: {
    guitar: {
      recommended: string;
      alternatives: string[];
      pickup: string;
    };
    amp: {
      recommended: string;
      alternatives: string[];
      settings: {
        gain: string;
        treble: string;
        middle: string;
        bass: string;
        presence: string;
      };
    };
    effects: {
      distortion: string;
      reverb: string;
      other: string;
    };
  };
  learningPath: {
    beginner: {
      title: string;
      steps: string[];
      timeEstimate: string;
    };
    intermediate: {
      title: string;
      steps: string[];
      timeEstimate: string;
    };
    advanced: {
      title: string;
      steps: string[];
      timeEstimate: string;
    };
  };
  relatedSongs: {
    acdc: Array<{
      title: string;
      link?: string;
      similarity: string;
    }>;
    similarTechniques: Array<{
      title: string;
      artist: string;
      technique?: string;
      similarity: string;
    }>;
  };
  practiceNotes: {
    commonMistakes: string[];
    practiceRoutine: string[];
    metronomeWork: string[];
    focusAreas?: string[];
  };
  references?: {
    ultimateGuitar?: string;
    officialTab?: string;
    videoLessons?: string[];
  };
  metadata?: {
    popularity: number;
    dateAdded: string;
    viewCount?: number;
    featured: boolean;
    decade: string;
    subGenre?: string;
    instruments?: string[];
    tags?: string[];
    learningValue?: string;
    iconicRiff?: boolean;
    estimatedLearningTime?: string;
  };
}

// Song metadata for listings and search
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

// Centralized song database
const songDatabase: Record<string, SongData> = {
  'thunderstruck': thunderstruckData as unknown as SongData,
  'for-those-about-to-rock': forThoseAboutToRockData as unknown as SongData,
  'back-in-black': backInBlackData as unknown as SongData,
  'highway-to-hell': highwayToHellData as unknown as SongData,
  'you-shook-me-all-night-long': youShookMeAllNightLongData as unknown as SongData,
  'were-not-gonna-take-it': wereNotGonnaTakeItData as unknown as SongData,
  'sweet-home-alabama': sweetHomeAlabamaData as unknown as SongData,
  'sweet-child-o-mine': sweetChildOMineData as unknown as SongData,
  'enter-sandman': enterSandmanData as unknown as SongData,
  'hurt-so-good': hurtSoGoodData as unknown as SongData,
};

export function getSongData(songSlug: string): SongData | null {
  return songDatabase[songSlug] || null;
}

export function getAllSongSlugs(): string[] {
  return Object.keys(songDatabase);
}

export function getAllSongs(): SongListItem[] {
  return Object.entries(songDatabase).map(([slug, data]) => ({
    slug,
    title: data.songInfo.title,
    artist: data.songInfo.artist,
    genre: data.songInfo.genre,
    difficulty: data.difficulty?.overall || 'Intermediate',
    year: data.songInfo.released,
    tempo: data.songInfo.tempo,
    key: data.songInfo.key,
    techniques: data.techniques.map(t => t.name),
    featured: data.metadata?.featured ?? isFeatureSong(slug),
    dateAdded: data.metadata?.dateAdded ?? getSongDateAdded(slug),
    popularity: data.metadata?.popularity ?? getDefaultPopularity(slug),
    decade: data.metadata?.decade ?? getDecadeFromYear(data.songInfo.released),
    subGenre: data.metadata?.subGenre ?? data.songInfo.genre,
    tags: data.metadata?.tags ?? generateDefaultTags(data),
    iconicRiff: data.metadata?.iconicRiff ?? false,
    estimatedLearningTime: data.metadata?.estimatedLearningTime,
    viewCount: data.metadata?.viewCount ?? 0,
  }));
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

  // New filters
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

// New utility functions for enhanced categorization
export function getPopularSongs(limit = 6): SongListItem[] {
  return getAllSongs()
    .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
    .slice(0, limit);
}

export function getRecentlyAdded(limit = 6): SongListItem[] {
  return getAllSongs()
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

// Helper functions for metadata
function isFeatureSong(slug: string): boolean {
  // Mark certain songs as featured - can be moved to song data later
  const featuredSlugs = ['thunderstruck', 'back-in-black', 'sweet-child-o-mine', 'hurt-so-good'];
  return featuredSlugs.includes(slug);
}

function getSongDateAdded(slug: string): string {
  // Default dates - can be moved to song data later
  const dates: Record<string, string> = {
    'hurt-so-good': '2025-01-31',
    'thunderstruck': '2024-12-01',
    'back-in-black': '2024-11-15',
    // Add more as needed
  };
  return dates[slug] || '2024-01-01';
}

function getDefaultPopularity(slug: string): number {
  // Default popularity scores based on classic status
  const popularityMap: Record<string, number> = {
    'thunderstruck': 95,
    'back-in-black': 98,
    'sweet-child-o-mine': 92,
    'highway-to-hell': 90,
    'you-shook-me-all-night-long': 88,
    'sweet-home-alabama': 94,
    'enter-sandman': 89,
    'were-not-gonna-take-it': 75,
    'for-those-about-to-rock': 82,
    'hurt-so-good': 65,
  };
  return popularityMap[slug] || 50;
}

function getDecadeFromYear(year: string): string {
  const yearNum = parseInt(year);
  if (yearNum >= 2020) return '2020s';
  if (yearNum >= 2010) return '2010s';
  if (yearNum >= 2000) return '2000s';
  if (yearNum >= 1990) return '1990s';
  if (yearNum >= 1980) return '1980s';
  if (yearNum >= 1970) return '1970s';
  if (yearNum >= 1960) return '1960s';
  return '1960s';
}

function generateDefaultTags(data: any): string[] {
  const tags: string[] = [];
  
  // Add difficulty-based tags
  if (data.difficulty?.overall === 'Beginner') tags.push('beginner-friendly');
  if (data.difficulty?.overall === 'Expert') tags.push('advanced-technique');
  
  // Add technique-based tags
  const techniques = data.techniques?.map((t: any) => t.name.toLowerCase()) || [];
  if (techniques.some((t: string) => t.includes('power'))) tags.push('power-chords');
  if (techniques.some((t: string) => t.includes('solo'))) tags.push('guitar-solo');
  if (techniques.some((t: string) => t.includes('riff'))) tags.push('iconic-riff');
  
  // Add genre-based tags
  if (data.songInfo?.genre?.includes('Rock')) tags.push('classic-rock');
  if (data.songInfo?.genre?.includes('Metal')) tags.push('metal');
  
  return tags;
}
