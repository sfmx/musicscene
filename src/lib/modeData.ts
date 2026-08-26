import modeIndexData from '@/data/modes/mode-index.json';
import ionianData from '@/data/modes/ionian.json';
import dorianData from '@/data/modes/dorian.json';
import phrygianData from '@/data/modes/phrygian.json';
import lydianData from '@/data/modes/lydian.json';
import mixolydianData from '@/data/modes/mixolydian.json';
import aeolianData from '@/data/modes/aeolian.json';
import locrianData from '@/data/modes/locrian.json';

// --- Interfaces ---

export interface FretboardPattern {
  title: string;
  description: string;
  alphaTex: string;
  notes: string[];
  colorBg: string;
  colorBorder: string;
  colorTitle: string;
  colorText: string;
  colorDetail: string;
  notesLabel?: string;
}

export interface ApplicationSection {
  title: string;
  description: string;
  items: string[];
  colorBg: string;
  colorBorder: string;
  colorTitle: string;
  colorText: string;
}

export interface MusicalExample {
  title: string;
  description: string;
  detail: string;
}

export interface PracticeCategory {
  title: string;
  icon: string;
  items: string[];
  colorBg: string;
  colorBorder: string;
  colorTitle: string;
  colorText: string;
}

export interface NotatedExercise {
  title: string;
  description: string;
  alphaTex: string;
  colorBg: string;
  colorBorder: string;
  colorTitle: string;
  colorText: string;
}

export interface ScaleRelationship {
  title: string;
  description: string;
}

export interface RelatedMode {
  title: string;
  description: string;
  detail: string;
}

export interface KeyVariant {
  title: string;
  description: string;
  alphaTex: string;
  notesLabel: string;
  colorBg: string;
  colorBorder: string;
  colorTitle: string;
  colorText: string;
  colorDetail: string;
}

export interface JourneyLink {
  slug: string;
  title: string;
  description: string;
  linkText: string;
  icon: string;
  hoverBorder: string;
  iconBg: string;
  iconHoverBg: string;
  linkColor: string;
  linkHoverColor: string;
}

export interface ModeData {
  slug: string;
  modeInfo: {
    name: string;
    pageTitle: string;
    subtitle: string;
    heroGradient: string;
    tags: string[];
  };
  theory: {
    propertiesTitle: string;
    properties: { label: string; value: string }[];
    exampleTitle: string;
    examples: { label: string; value: string }[];
    bulletColor: string;
  };
  guitarApplications: {
    fretboardPatterns: FretboardPattern[];
    musicalApplications: ApplicationSection[];
  };
  musicalExamples: {
    classic: MusicalExample[];
    modern: MusicalExample[];
  };
  practiceCategories: PracticeCategory[];
  notatedExercises: NotatedExercise[];
  scaleRelationships: {
    relationships: ScaleRelationship[];
    relatedModes: RelatedMode[];
  };
  keyVariants: KeyVariant[];
  relatedScales: RelatedMode[];
  journeySection: {
    title: string;
    description: string;
    gradientFrom: string;
    gradientTo: string;
    borderColor: string;
    links: JourneyLink[];
  };
}

// --- Data loading ---

const modeDatabase: Record<string, ModeData> = {
  'ionian': ionianData as unknown as ModeData,
  'dorian': dorianData as unknown as ModeData,
  'phrygian': phrygianData as unknown as ModeData,
  'lydian': lydianData as unknown as ModeData,
  'mixolydian': mixolydianData as unknown as ModeData,
  'aeolian': aeolianData as unknown as ModeData,
  'locrian': locrianData as unknown as ModeData,
};

export function getModeData(slug: string): ModeData | null {
  return modeDatabase[slug] || null;
}

export function getAllModeSlugs(): string[] {
  return Object.keys(modeDatabase);
}

// --- Index Page Data ---

export interface ModeIndexData {
  pageTitle: string;
  subtitle: string;
  heroIcon: string;
  heroTitle: string;
  heroDescription: string;
  whatAreModes: {
    title: string;
    description: string;
    columns: {
      title: string;
      colorBg: string;
      colorTitle: string;
      colorText: string;
      items: string[];
    }[];
  };
  modeCategories: {
    name: string;
    modes: string[];
    description: string;
    color: string;
  }[];
  modalApplications: {
    title: string;
    description: string;
    icon: string;
    examples: string[];
  }[];
  modeTypes: {
    name: string;
    icon: string;
    href: string;
    description: string;
    formula: string;
    degrees: string;
    color: string;
    iconColor: string;
    mood: string;
    parentScale: string;
    characteristic: string;
  }[];
  journeySection: {
    title: string;
    description: string;
    links: JourneyLink[];
  };
}

export function getModeIndexData(): ModeIndexData {
  return modeIndexData as unknown as ModeIndexData;
}
