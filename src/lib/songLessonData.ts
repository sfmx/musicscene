// Song Lesson data loader - educational topic pages under /lessons/songs/
// Covers: breakdowns, chords, effects, lead, rhythm, riffs, structure, techniques

// === Index JSON imports ===
import songsRootIndex from '@/data/song-lessons/songs-root-index.json';
import analysisMethodData from '@/data/song-lessons/analysis-method.json';
import breakdownsIndex from '@/data/song-lessons/breakdowns/breakdowns-index.json';
import chordsIndex from '@/data/song-lessons/chords/chords-index.json';
import effectsIndex from '@/data/song-lessons/effects/effects-index.json';
import leadIndex from '@/data/song-lessons/lead/lead-index.json';
import rhythmIndex from '@/data/song-lessons/rhythm/rhythm-index.json';
import riffsIndex from '@/data/song-lessons/riffs/riffs-index.json';
import structureIndex from '@/data/song-lessons/structure/structure-index.json';
import techniquesIndex from '@/data/song-lessons/techniques/techniques-index.json';

// === Breakdowns detail imports ===
import breakdownsVerse from '@/data/song-lessons/breakdowns/verse.json';
import breakdownsChorus from '@/data/song-lessons/breakdowns/chorus.json';
import breakdownsBridge from '@/data/song-lessons/breakdowns/bridge.json';
import breakdownsIntro from '@/data/song-lessons/breakdowns/intro.json';
import breakdownsOutro from '@/data/song-lessons/breakdowns/outro.json';
import breakdownsSolo from '@/data/song-lessons/breakdowns/solo.json';
import breakdownsInstrumental from '@/data/song-lessons/breakdowns/instrumental.json';
import breakdownsFull from '@/data/song-lessons/breakdowns/full.json';

// === Chords detail imports ===
import chordsProgressions from '@/data/song-lessons/chords/progressions.json';
import chordsRomanNumerals from '@/data/song-lessons/chords/roman-numerals.json';
import chordsVoiceLeading from '@/data/song-lessons/chords/voice-leading.json';
import chordsSubstitutions from '@/data/song-lessons/chords/substitutions.json';
import chordsModalInterchange from '@/data/song-lessons/chords/modal-interchange.json';
import chordsExtended from '@/data/song-lessons/chords/extended.json';
import chordsSecondaryDominants from '@/data/song-lessons/chords/secondary-dominants.json';
import chordsInversions from '@/data/song-lessons/chords/inversions.json';

// === Effects detail imports ===
import effectsDistortion from '@/data/song-lessons/effects/distortion.json';
import effectsDelay from '@/data/song-lessons/effects/delay.json';
import effectsReverb from '@/data/song-lessons/effects/reverb.json';
import effectsModulation from '@/data/song-lessons/effects/modulation.json';
import effectsWah from '@/data/song-lessons/effects/wah.json';
import effectsCompression from '@/data/song-lessons/effects/compression.json';
import effectsPitch from '@/data/song-lessons/effects/pitch.json';
import effectsSignalChain from '@/data/song-lessons/effects/signal-chain.json';

// === Lead detail imports ===
import leadScales from '@/data/song-lessons/lead/scales.json';
import leadPhrasing from '@/data/song-lessons/lead/phrasing.json';
import leadConstruction from '@/data/song-lessons/lead/construction.json';
import leadIntervals from '@/data/song-lessons/lead/intervals.json';
import leadBlues from '@/data/song-lessons/lead/blues.json';
import leadRock from '@/data/song-lessons/lead/rock.json';
import leadJazz from '@/data/song-lessons/lead/jazz.json';
import leadCountry from '@/data/song-lessons/lead/country.json';

// === Rhythm detail imports ===
import rhythmStrumming from '@/data/song-lessons/rhythm/strumming.json';
import rhythmFingerpicking from '@/data/song-lessons/rhythm/fingerpicking.json';
import rhythmPalmMuting from '@/data/song-lessons/rhythm/palm-muting.json';
import rhythmSyncopation from '@/data/song-lessons/rhythm/syncopation.json';
import rhythmShuffle from '@/data/song-lessons/rhythm/shuffle.json';
import rhythmLatin from '@/data/song-lessons/rhythm/latin.json';
import rhythmReggae from '@/data/song-lessons/rhythm/reggae.json';
import rhythmFunk from '@/data/song-lessons/rhythm/funk.json';

// === Riffs detail imports ===
import riffsBlues from '@/data/song-lessons/riffs/blues.json';
import riffsClassicRock from '@/data/song-lessons/riffs/classic-rock.json';
import riffsMetal from '@/data/song-lessons/riffs/metal.json';
import riffsFunk from '@/data/song-lessons/riffs/funk.json';
import riffsPop from '@/data/song-lessons/riffs/pop.json';
import riffsJazz from '@/data/song-lessons/riffs/jazz.json';
import riffsFingerstyle from '@/data/song-lessons/riffs/fingerstyle.json';
import riffsSlide from '@/data/song-lessons/riffs/slide.json';

// === Structure detail imports ===
import structureVerse from '@/data/song-lessons/structure/verse.json';
import structureChorus from '@/data/song-lessons/structure/chorus.json';
import structureBridge from '@/data/song-lessons/structure/bridge.json';
import structureIntro from '@/data/song-lessons/structure/intro.json';
import structureOutro from '@/data/song-lessons/structure/outro.json';
import structurePreChorus from '@/data/song-lessons/structure/pre-chorus.json';
import structureForms from '@/data/song-lessons/structure/forms.json';
import structureTransitions from '@/data/song-lessons/structure/transitions.json';

// === Techniques detail imports ===
import techniquesRhythm from '@/data/song-lessons/techniques/rhythm.json';
import techniquesLead from '@/data/song-lessons/techniques/lead.json';
import techniquesFingerpicking from '@/data/song-lessons/techniques/fingerpicking.json';
import techniquesPercussive from '@/data/song-lessons/techniques/percussive.json';
import techniquesBending from '@/data/song-lessons/techniques/bending.json';
import techniquesAdvancedPicking from '@/data/song-lessons/techniques/advanced-picking.json';
import techniquesSlideLegato from '@/data/song-lessons/techniques/slide-legato.json';
import techniquesEffects from '@/data/song-lessons/techniques/effects.json';
import techniquesPowerChords from '@/data/song-lessons/techniques/power-chords.json';

// ============================================================
// Interfaces
// ============================================================

export interface SongLessonIndexData {
  pageTitle: string;
  subtitle: string;
  heroGradient?: string;
  overview: {
    title: string;
    text?: string;
    bulletItems?: string[];
    columns?: { title?: string; text: string; icon?: string }[];
  };
  topics: {
    title: string;
    href: string;
    icon: string;
    description: string;
    difficulty?: string;
    theory?: string;
    focus?: string;
    context?: string;
  }[];
  learningPath?: {
    title: string;
    type: 'pills' | 'ordered-list' | 'numbered-steps';
    steps: {
      number?: number;
      title: string;
      description?: string;
      colorBg?: string;
      colorText?: string;
    }[];
  };
  featured?: {
    title: string;
    bgColor?: string;
    borderColor?: string;
    columns?: { title: string; text: string }[];
  };
  infoSections?: {
    title: string;
    icon?: string;
    bgColor?: string;
    borderColor?: string;
    titleColor?: string;
    textColor?: string;
    content?: string;
    items?: string[];
    columns?: { title: string; text: string }[];
    links?: { href: string; label: string }[];
  }[];
  nextSteps?: {
    title: string;
    description?: string;
    bgColor?: string;
    link?: { href: string; label: string; bgColor?: string };
  };
}

// Root songs index has a slightly different featured section
export interface SongsRootIndexData {
  pageTitle: string;
  subtitle: string;
  overview: {
    title: string;
    text: string;
    bulletItems: string[];
  };
  learningPath: {
    title: string;
    steps: { title: string; colorBg: string; colorText: string }[];
  };
  topics: {
    title: string;
    href: string;
    icon: string;
    description: string;
  }[];
  featured: {
    title: string;
    icon: string;
    subtitle: string;
    description: string;
    link: { href: string; label: string };
    viewAllLink: { href: string; label: string };
  };
}

export interface ContentCard {
  title: string;
  description?: string;
  icon?: string;
  number?: number;
  badge?: { text: string; color: string };
  borderColor?: string;
  bgColor?: string;
  fields?: { label: string; value: string }[];
  items?: string[];
}

export interface ContentSection {
  title: string;
  subtitle?: string;
  bgColor?: string;
  borderColor?: string;
  layout?: 'grid-2' | 'grid-3' | 'grid-4' | 'list' | 'numbered-steps';
  cards?: ContentCard[];
}

export interface SongLessonDetailData {
  slug: string;
  category: string;
  pageTitle: string;
  subtitle: string;
  heroGradient: string;
  backLink: { href: string; label: string };
  introduction: {
    title?: string;
    text: string;
    quote?: string;
    columns?: { title?: string; text: string; icon?: string }[];
  };
  sections: ContentSection[];
  practiceSection?: {
    title: string;
    bgColor?: string;
    items?: string[];
    steps?: { number?: number; title: string; description: string }[];
  };
  relatedTopics?: {
    title?: string;
    label?: string;
    href?: string;
    description?: string;
    icon?: string;
    bgColor?: string;
    links?: { href: string; label: string; style?: string }[];
  }[];
}

// ============================================================
// Data maps
// ============================================================

const indexDataMap: Record<string, unknown> = {
  'breakdowns': breakdownsIndex,
  'chords': chordsIndex,
  'effects': effectsIndex,
  'lead': leadIndex,
  'rhythm': rhythmIndex,
  'riffs': riffsIndex,
  'structure': structureIndex,
  'techniques': techniquesIndex,
};

const detailDataMap: Record<string, unknown> = {
  // Breakdowns
  'breakdowns-verse': breakdownsVerse,
  'breakdowns-chorus': breakdownsChorus,
  'breakdowns-bridge': breakdownsBridge,
  'breakdowns-intro': breakdownsIntro,
  'breakdowns-outro': breakdownsOutro,
  'breakdowns-solo': breakdownsSolo,
  'breakdowns-instrumental': breakdownsInstrumental,
  'breakdowns-full': breakdownsFull,
  // Chords
  'chords-progressions': chordsProgressions,
  'chords-roman-numerals': chordsRomanNumerals,
  'chords-voice-leading': chordsVoiceLeading,
  'chords-substitutions': chordsSubstitutions,
  'chords-modal-interchange': chordsModalInterchange,
  'chords-extended': chordsExtended,
  'chords-secondary-dominants': chordsSecondaryDominants,
  'chords-inversions': chordsInversions,
  // Effects
  'effects-distortion': effectsDistortion,
  'effects-delay': effectsDelay,
  'effects-reverb': effectsReverb,
  'effects-modulation': effectsModulation,
  'effects-wah': effectsWah,
  'effects-compression': effectsCompression,
  'effects-pitch': effectsPitch,
  'effects-signal-chain': effectsSignalChain,
  // Lead
  'lead-scales': leadScales,
  'lead-phrasing': leadPhrasing,
  'lead-construction': leadConstruction,
  'lead-intervals': leadIntervals,
  'lead-blues': leadBlues,
  'lead-rock': leadRock,
  'lead-jazz': leadJazz,
  'lead-country': leadCountry,
  // Rhythm
  'rhythm-strumming': rhythmStrumming,
  'rhythm-fingerpicking': rhythmFingerpicking,
  'rhythm-palm-muting': rhythmPalmMuting,
  'rhythm-syncopation': rhythmSyncopation,
  'rhythm-shuffle': rhythmShuffle,
  'rhythm-latin': rhythmLatin,
  'rhythm-reggae': rhythmReggae,
  'rhythm-funk': rhythmFunk,
  // Riffs
  'riffs-blues': riffsBlues,
  'riffs-classic-rock': riffsClassicRock,
  'riffs-metal': riffsMetal,
  'riffs-funk': riffsFunk,
  'riffs-pop': riffsPop,
  'riffs-jazz': riffsJazz,
  'riffs-fingerstyle': riffsFingerstyle,
  'riffs-slide': riffsSlide,
  // Structure
  'structure-verse': structureVerse,
  'structure-chorus': structureChorus,
  'structure-bridge': structureBridge,
  'structure-intro': structureIntro,
  'structure-outro': structureOutro,
  'structure-pre-chorus': structurePreChorus,
  'structure-forms': structureForms,
  'structure-transitions': structureTransitions,
  // Techniques
  'techniques-rhythm': techniquesRhythm,
  'techniques-lead': techniquesLead,
  'techniques-fingerpicking': techniquesFingerpicking,
  'techniques-percussive': techniquesPercussive,
  'techniques-bending': techniquesBending,
  'techniques-advanced-picking': techniquesAdvancedPicking,
  'techniques-slide-legato': techniquesSlideLegato,
  'techniques-effects': techniquesEffects,
  'techniques-power-chords': techniquesPowerChords,
  // Special
  'analysis-method': analysisMethodData,
};

// ============================================================
// Accessor functions
// ============================================================

export function getSongsRootIndexData(): SongsRootIndexData {
  return songsRootIndex as unknown as SongsRootIndexData;
}

export function getSongLessonIndexData(category: string): SongLessonIndexData {
  const data = indexDataMap[category];
  if (!data) throw new Error(`Song lesson index not found: ${category}`);
  return data as unknown as SongLessonIndexData;
}

export function getSongLessonDetailData(key: string): SongLessonDetailData {
  const data = detailDataMap[key];
  if (!data) throw new Error(`Song lesson detail not found: ${key}`);
  return data as unknown as SongLessonDetailData;
}
