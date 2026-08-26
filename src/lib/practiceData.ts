import warmupIndexData from '@/data/practice/warmups/warmup-index.json';
import techniqueIndexData from '@/data/practice/technique/technique-index.json';
import improvIndexData from '@/data/practice/improv/improv-index.json';

// --- Shared Practice Interfaces ---

export interface PracticeGuideline {
  title: string;
  items: { bulletColor: string; text: string }[];
}

export interface PracticeExercise {
  number: number;
  title: string;
  difficulty: string;
  borderColor: string;
  difficultyBg: string;
  difficultyText: string;
  numberBg: string;
  numberText: string;
  description: string;
  chordDiagrams?: { label: string; chord: string }[];
  notation?: { title: string; alphaTex: string; staveTitle?: string };
  practiceNotes?: {
    colorBg: string;
    colorBorder: string;
    colorTitle: string;
    colorText: string;
    colorAccent: string;
    title: string;
    text: string;
    tempo?: string;
  };
  patternNote?: { colorBg: string; colorText: string; text: string };
}

export interface PracticeSection {
  title: string;
  exercises: PracticeExercise[];
}

export interface PracticeTip {
  title: string;
  colorBg: string;
  colorBorder: string;
  colorTitle: string;
  colorText: string;
  bulletColor?: string;
  items?: string[];
  challenges?: { title: string; text: string }[];
}

export interface PracticeDetailData {
  slug: string;
  category: 'warmups' | 'technique' | 'improv';
  pageInfo: {
    pageTitle: string;
    subtitle: string;
    heroGradient: string;
    heroTitle: string;
    heroDescription: string;
  };
  guidelines: {
    title: string;
    columns: PracticeGuideline[];
  };
  sections: PracticeSection[];
  tips: {
    title: string;
    items: PracticeTip[];
  };
  gearRecommendations?: {
    title?: string;
    items: { category: string; product: string; reason: string }[];
  };
  journeySection?: {
    title: string;
    description: string;
    gradientFrom: string;
    gradientTo: string;
    borderColor: string;
    links: {
      href: string;
      title: string;
      description: string;
      linkText: string;
      icon: string;
      hoverBorder: string;
      iconBg: string;
      iconHoverBg: string;
      linkColor: string;
      linkHoverColor: string;
    }[];
  };
}

// --- Practice Detail Data Loading ---

// Warmup imports
import chordChangesData from '@/data/practice/warmups/chord-changes.json';
import fingerExercisesData from '@/data/practice/warmups/finger-exercises.json';
import pickingPatternsData from '@/data/practice/warmups/picking-patterns.json';
import rhythmDrillsData from '@/data/practice/warmups/rhythm-drills.json';
import scalesModesData from '@/data/practice/warmups/scales-modes.json';
import stretchingData from '@/data/practice/warmups/stretching.json';
import fretboardNavigationData from '@/data/practice/warmups/fretboard-navigation.json';
import dynamicsControlData from '@/data/practice/warmups/dynamics-control.json';

// Technique imports
import alternatePickingData from '@/data/practice/technique/alternate-picking.json';
import bendingVibratoData from '@/data/practice/technique/bending-vibrato.json';
import hybridPickingData from '@/data/practice/technique/hybrid-picking.json';
import legatoData from '@/data/practice/technique/legato.json';
import palmMutingData from '@/data/practice/technique/palm-muting.json';
import stringSkippingData from '@/data/practice/technique/string-skipping.json';
import sweepPickingData from '@/data/practice/technique/sweep-picking.json';
import tappingData from '@/data/practice/technique/tapping.json';
import slideTechniquesData from '@/data/practice/technique/slide-techniques.json';
import harmonicsData from '@/data/practice/technique/harmonics.json';

// Improv imports
import arpeggiosData from '@/data/practice/improv/arpeggios.json';
import callResponseData from '@/data/practice/improv/call-response.json';
import motifDevelopmentData from '@/data/practice/improv/motif-development.json';
import improvPhrasingData from '@/data/practice/improv/phrasing.json';
import improvRhythmData from '@/data/practice/improv/rhythm.json';
import improvScalesData from '@/data/practice/improv/scales.json';
import targetNotesData from '@/data/practice/improv/target-notes.json';
import chordToneSoloingData from '@/data/practice/improv/chord-tone-soloing.json';
import modalImprovisationData from '@/data/practice/improv/modal-improvisation.json';

const practiceDataMap: Record<string, Record<string, unknown>> = {
  // Warmups
  'chord-changes': chordChangesData,
  'finger-exercises': fingerExercisesData,
  'picking-patterns': pickingPatternsData,
  'rhythm-drills': rhythmDrillsData,
  'scales-modes': scalesModesData,
  'stretching': stretchingData,
  'fretboard-navigation': fretboardNavigationData,
  'dynamics-control': dynamicsControlData,
  // Technique
  'alternate-picking': alternatePickingData,
  'bending-vibrato': bendingVibratoData,
  'hybrid-picking': hybridPickingData,
  'legato': legatoData,
  'palm-muting': palmMutingData,
  'string-skipping': stringSkippingData,
  'sweep-picking': sweepPickingData,
  'tapping': tappingData,
  'slide-techniques': slideTechniquesData,
  'harmonics': harmonicsData,
  // Improv
  'arpeggios': arpeggiosData,
  'call-response': callResponseData,
  'motif-development': motifDevelopmentData,
  'phrasing': improvPhrasingData,
  'rhythm': improvRhythmData,
  'scales': improvScalesData,
  'target-notes': targetNotesData,
  'chord-tone-soloing': chordToneSoloingData,
  'modal-improvisation': modalImprovisationData,
};

export function getPracticeData(slug: string): PracticeDetailData {
  const data = practiceDataMap[slug];
  if (!data) throw new Error(`Practice data not found for slug: ${slug}`);
  return data as unknown as PracticeDetailData;
}

// --- Index Data Interfaces ---

interface IndexJourneyLink {
  href: string;
  label: string;
  colorBg: string;
  colorText: string;
  colorHover: string;
}

export interface PracticeIndexData {
  pageTitle: string;
  subtitle: string;
  heroIcon: string;
  heroTitle: string;
  heroDescription: string;
  backLink: { href: string; label: string };
  heroGradient: string;
  introSection: {
    title: string;
    description?: string;
    items?: { icon: string; title: string; description: string }[];
    columns?: { title: string; colorBg: string; colorBorder?: string; colorTitle: string; colorText: string; items: string[] }[];
    tips?: { icon: string; title: string; description: string }[];
    progressiveSteps?: {
      number?: number;
      colorBg?: string;
      colorText?: string;
      title: string;
      description?: string;
      icon?: string;
      items?: string[];
    }[];
  };
  extraSections?: {
    title: string;
    type: 'routines' | 'mistakes' | 'grid';
    content: unknown;
  }[];
  itemTypes: {
    name: string;
    icon: string;
    href: string;
    description: string;
    duration?: string;
    difficulty?: string;
    color: string;
    iconColor: string;
  }[];
  journeySection?: {
    title: string;
    description: string;
    links: IndexJourneyLink[];
  };
}

export function getWarmupIndexData(): PracticeIndexData {
  return warmupIndexData as unknown as PracticeIndexData;
}

export function getTechniqueIndexData(): PracticeIndexData {
  return techniqueIndexData as unknown as PracticeIndexData;
}

export function getImprovIndexData(): PracticeIndexData {
  return improvIndexData as unknown as PracticeIndexData;
}

const indexDataMap: Record<string, unknown> = {
  'warmups': warmupIndexData,
  'technique': techniqueIndexData,
  'improv': improvIndexData,
};

export function getPracticeIndexData(category: string): PracticeIndexData {
  const data = indexDataMap[category];
  if (!data) throw new Error(`Practice index not found: ${category}`);
  return data as unknown as PracticeIndexData;
}
