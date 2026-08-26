// Gear lesson data loader - educational pages under /lessons/gear/
// Covers: guitars, amps, effects, recording, accessories

// === Root + Index imports ===
import gearRootIndex from '@/data/gear-lessons/gear-root-index.json';
import guitarsIndex from '@/data/gear-lessons/guitars/guitars-index.json';
import ampsIndex from '@/data/gear-lessons/amps/amps-index.json';
import effectsIndex from '@/data/gear-lessons/effects/effects-index.json';
import recordingIndex from '@/data/gear-lessons/recording/recording-index.json';
import accessoriesIndex from '@/data/gear-lessons/accessories/accessories-index.json';

// === Guitars detail imports ===
import guitarsAcoustic from '@/data/gear-lessons/guitars/acoustic.json';
import guitarsElectric from '@/data/gear-lessons/guitars/electric.json';
import guitarsBass from '@/data/gear-lessons/guitars/bass.json';
import guitarsClassical from '@/data/gear-lessons/guitars/classical.json';
import guitars12String from '@/data/gear-lessons/guitars/12-string.json';
import guitarsBaritone from '@/data/gear-lessons/guitars/baritone.json';

// === Amps detail imports ===
import ampsTube from '@/data/gear-lessons/amps/tube.json';
import ampsSolidState from '@/data/gear-lessons/amps/solid-state.json';
import ampsModeling from '@/data/gear-lessons/amps/modeling.json';
import ampsHybrid from '@/data/gear-lessons/amps/hybrid.json';
import ampsBass from '@/data/gear-lessons/amps/bass.json';
import ampsMini from '@/data/gear-lessons/amps/mini.json';

// === Effects detail imports ===
import effectsOverdrive from '@/data/gear-lessons/effects/overdrive.json';
import effectsDistortion from '@/data/gear-lessons/effects/distortion.json';
import effectsFuzz from '@/data/gear-lessons/effects/fuzz.json';
import effectsChorus from '@/data/gear-lessons/effects/chorus.json';
import effectsDelay from '@/data/gear-lessons/effects/delay.json';
import effectsReverb from '@/data/gear-lessons/effects/reverb.json';
import effectsWah from '@/data/gear-lessons/effects/wah.json';
import effectsCompressor from '@/data/gear-lessons/effects/compressor.json';
import effectsTremolo from '@/data/gear-lessons/effects/tremolo.json';

// === Recording detail imports ===
import recordingInterfaces from '@/data/gear-lessons/recording/interfaces.json';
import recordingMicrophones from '@/data/gear-lessons/recording/microphones.json';
import recordingDaw from '@/data/gear-lessons/recording/daw.json';
import recordingMonitors from '@/data/gear-lessons/recording/monitors-headphones.json';
import recordingPreamps from '@/data/gear-lessons/recording/preamps.json';
import recordingCables from '@/data/gear-lessons/recording/cables.json';

// === Accessories detail imports ===
import accessoriesPicks from '@/data/gear-lessons/accessories/picks.json';
import accessoriesCapos from '@/data/gear-lessons/accessories/capos.json';
import accessoriesTuners from '@/data/gear-lessons/accessories/tuners.json';
import accessoriesStraps from '@/data/gear-lessons/accessories/straps.json';
import accessoriesCables from '@/data/gear-lessons/accessories/cables.json';
import accessoriesCases from '@/data/gear-lessons/accessories/cases.json';
import accessoriesStands from '@/data/gear-lessons/accessories/stands.json';
import accessoriesSlides from '@/data/gear-lessons/accessories/slides.json';
import accessoriesMetronomes from '@/data/gear-lessons/accessories/metronomes.json';

// ============================================================
// Interfaces
// ============================================================

export interface GearRootIndexData {
  pageTitle: string;
  subtitle: string;
  heroIcon: string;
  backLink: { href: string; label: string };
  gearCategories: {
    title: string;
    href: string;
    icon: string;
    description: string;
    color: string;
    iconColor: string;
    concepts: string[];
  }[];
  gearPhilosophy: {
    title: string;
    description: string;
    icon: string;
    color: string;
  }[];
  budgetGuide: {
    category: string;
    budget: string;
    description: string;
    items: string[];
    color: string;
  }[];
  toneChain: {
    component: string;
    description: string;
    icon: string;
  }[];
  maintenanceTips: {
    title: string;
    description: string;
    icon: string;
    tips: string[];
  }[];
  buyingStrategies: {
    title: string;
    items: string[];
  }[];
  gettingStarted: {
    title: string;
    description: string;
    links: { href: string; label: string; color: string }[];
  };
}

export interface GearIndexData {
  pageTitle: string;
  subtitle: string;
  heroGradient: string;
  heroInfo?: { title?: string; text?: string; items?: string[] };
  types: {
    name: string;
    icon: string;
    href: string;
    description: string;
    category?: string;
  }[];
  sections: GearContentSection[];
}

export interface GearContentCard {
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

export interface GearContentSection {
  title: string;
  subtitle?: string;
  bgColor?: string;
  borderColor?: string;
  warningText?: string;
  layout: 'grid-2' | 'grid-3' | 'grid-4' | 'list' | 'numbered-steps' | 'table';
  cards?: GearContentCard[];
  tableHeaders?: string[];
  tableRows?: string[][];
}

export interface GearDetailData {
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
  sections: GearContentSection[];
  relatedTopics?: {
    title: string;
    href: string;
    description?: string;
    icon?: string;
    bgColor?: string;
  }[];
}

// ============================================================
// Data maps
// ============================================================

const indexDataMap: Record<string, unknown> = {
  'guitars': guitarsIndex,
  'amps': ampsIndex,
  'effects': effectsIndex,
  'recording': recordingIndex,
  'accessories': accessoriesIndex,
};

const detailDataMap: Record<string, unknown> = {
  // Guitars
  'guitars-acoustic': guitarsAcoustic,
  'guitars-electric': guitarsElectric,
  'guitars-bass': guitarsBass,
  'guitars-classical': guitarsClassical,
  'guitars-12-string': guitars12String,
  'guitars-baritone': guitarsBaritone,
  // Amps
  'amps-tube': ampsTube,
  'amps-solid-state': ampsSolidState,
  'amps-modeling': ampsModeling,
  'amps-hybrid': ampsHybrid,
  'amps-bass': ampsBass,
  'amps-mini': ampsMini,
  // Effects
  'effects-overdrive': effectsOverdrive,
  'effects-distortion': effectsDistortion,
  'effects-fuzz': effectsFuzz,
  'effects-chorus': effectsChorus,
  'effects-delay': effectsDelay,
  'effects-reverb': effectsReverb,
  'effects-wah': effectsWah,
  'effects-compressor': effectsCompressor,
  'effects-tremolo': effectsTremolo,
  // Recording
  'recording-interfaces': recordingInterfaces,
  'recording-microphones': recordingMicrophones,
  'recording-daw': recordingDaw,
  'recording-monitors-headphones': recordingMonitors,
  'recording-preamps': recordingPreamps,
  'recording-cables': recordingCables,
  // Accessories
  'accessories-picks': accessoriesPicks,
  'accessories-capos': accessoriesCapos,
  'accessories-tuners': accessoriesTuners,
  'accessories-straps': accessoriesStraps,
  'accessories-cables': accessoriesCables,
  'accessories-cases': accessoriesCases,
  'accessories-stands': accessoriesStands,
  'accessories-slides': accessoriesSlides,
  'accessories-metronomes': accessoriesMetronomes,
};

// ============================================================
// Accessor functions
// ============================================================

export function getGearRootIndexData(): GearRootIndexData {
  return gearRootIndex as unknown as GearRootIndexData;
}

export function getGearIndexData(category: string): GearIndexData {
  const data = indexDataMap[category];
  if (!data) throw new Error(`Gear index not found: ${category}`);
  return data as unknown as GearIndexData;
}

export function getGearDetailData(key: string): GearDetailData {
  const data = detailDataMap[key];
  if (!data) throw new Error(`Gear detail not found: ${key}`);
  return data as unknown as GearDetailData;
}
