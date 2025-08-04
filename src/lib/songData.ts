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
      skills: string[];
      timeEstimate: string;
    };
    intermediate: {
      title: string;
      skills: string[];
      timeEstimate: string;
    };
    advanced: {
      title: string;
      skills: string[];
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
  };
  references?: {
    ultimateGuitar?: string;
    officialTab?: string;
    videoLessons?: string[];
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
}

export interface SearchFilters {
  difficulty?: string[];
  genre?: string[];
  artist?: string[];
  techniques?: string[];
  yearRange?: [number, number];
}

// Centralized song database
const songDatabase: Record<string, SongData> = {
  'thunderstruck': thunderstruckData as SongData,
  'for-those-about-to-rock': forThoseAboutToRockData as SongData,
  'back-in-black': backInBlackData as SongData,
  'highway-to-hell': highwayToHellData as SongData,
  'you-shook-me-all-night-long': youShookMeAllNightLongData as SongData,
  'were-not-gonna-take-it': wereNotGonnaTakeItData as SongData,
  'sweet-home-alabama': sweetHomeAlabamaData as SongData,
  'sweet-child-o-mine': sweetChildOMineData as SongData,
  'enter-sandman': enterSandmanData as SongData,
  'hurt-so-good': hurtSoGoodData as SongData,
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
    difficulty: data.difficulty.overall,
    year: data.songInfo.released,
    tempo: data.songInfo.tempo,
    key: data.songInfo.key,
    techniques: data.techniques.map(t => t.name),
    featured: isFeatureSong(slug),
    dateAdded: getSongDateAdded(slug)
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
        song.techniques.some(tech => tech.toLowerCase().includes(term))
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
