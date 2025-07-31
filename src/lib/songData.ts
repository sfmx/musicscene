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

export function getSongData(songSlug: string): SongData | null {
  const songDataMap: Record<string, SongData> = {
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
    // Add more songs here as they're created
  };
  
  return songDataMap[songSlug] || null;
}

export function getAllSongSlugs(): string[] {
  return ['thunderstruck', 'for-those-about-to-rock', 'back-in-black', 'highway-to-hell', 'you-shook-me-all-night-long', 'were-not-gonna-take-it', 'sweet-home-alabama', 'sweet-child-o-mine', 'enter-sandman', 'hurt-so-good'];
}
