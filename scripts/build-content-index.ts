/**
 * Build-time content index generator.
 * Scans all JSON data files in src/data/ and generates a content index
 * with entries and a tag-based inverted index for cross-linking.
 *
 * Usage: npx tsx scripts/build-content-index.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { VALID_TAG_SLUGS, TAG_NORMALIZATION } from './lib/tag-taxonomy';
import {
  SITE_TOOLS,
  getInteractiveTools,
  getReferenceTools,
  getPracticeDrills,
} from '../src/data/tools-registry';

// ---- Types ----

type ContentType =
  | 'chord' | 'scale' | 'interval' | 'mode' | 'progression'
  | 'song-analysis' | 'practice' | 'gear-lesson' | 'song-lesson';

interface ContentEntry {
  id: string;
  contentType: ContentType;
  slug: string;
  title: string;
  url: string;
  tags: string[];
  difficulty?: string;
  category?: string;
}

interface ContentIndex {
  generatedAt: string;
  entryCount: number;
  entries: ContentEntry[];
  tagIndex: Record<string, string[]>;
  crossReferences: {
    scaleToSongs: Record<string, string[]>;
    modeToSongs: Record<string, string[]>;
    progressionToSongs: Record<string, string[]>;
    chordToSongs: Record<string, string[]>;
  };
}

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

export interface NavMenuItem {
  label: string;
  href: string;
  icon?: string;
}

export interface NavColumn {
  heading: string;
  headingHref?: string;
  items: NavMenuItem[];
}

export interface NavCategory {
  label: string;
  href: string;
  columns: NavColumn[];
  featured?: NavMenuItem[];
}

// ---- Tag Taxonomy (shared) ----
// VALID_TAG_SLUGS and TAG_NORMALIZATION imported from ./lib/tag-taxonomy

// ---- Directory/slug-based tag inference rules ----

const DIRECTORY_TAG_RULES: Record<string, string[]> = {
  'chords': ['chord-theory'],
  'scales': ['scale-theory'],
  'intervals': ['intervals'],
  'modes': ['modal', 'scale-theory'],
  'progressions': ['chord-progressions'],
  'songs': ['song-analysis'],
  'practice/warmups': ['warmup', 'exercise'],
  'practice/technique': ['exercise'],
  'practice/improv': ['exercise', 'improvisation'],
  'gear-lessons/guitars': [],
  'gear-lessons/amps': [],
  'gear-lessons/effects': [],
  'gear-lessons/recording': ['recording'],
  'gear-lessons/accessories': ['accessories'],
  'song-lessons/breakdowns': ['song-structure', 'lesson'],
  'song-lessons/chords': ['chord-theory', 'chord-progressions', 'lesson'],
  'song-lessons/effects': ['lesson'],
  'song-lessons/lead': ['lead-guitar', 'lesson'],
  'song-lessons/rhythm': ['rhythm-guitar', 'lesson'],
  'song-lessons/riffs': ['lesson'],
  'song-lessons/structure': ['song-structure', 'lesson'],
  'song-lessons/techniques': ['lesson'],
};

const SLUG_TAG_MAP: Record<string, string[]> = {
  'blues': ['blues'],
  'classic-rock': ['classic-rock'],
  'rock': ['classic-rock'],
  'metal': ['metal'],
  'jazz': ['jazz'],
  'country': ['country'],
  'funk': ['funk'],
  'pop': ['pop'],
  'reggae': ['reggae'],
  'latin': ['latin'],
  'folk': ['folk'],
  'fingerstyle': ['fingerstyle'],
  'overdrive': ['overdrive'],
  'distortion': ['distortion'],
  'delay': ['delay'],
  'reverb': ['reverb'],
  'fuzz': ['fuzz'],
  'chorus': ['chorus'],
  'wah': ['wah'],
  'compressor': ['compressor'],
  'tremolo': ['tremolo'],
  'palm-muting': ['palm-muting'],
  'alternate-picking': ['alternate-picking'],
  'hybrid-picking': ['hybrid-picking'],
  'sweep-picking': ['sweep-picking'],
  'fingerpicking': ['fingerpicking'],
  'tapping': ['tapping'],
  'legato': ['legato'],
  'bending': ['bending'],
  'bending-vibrato': ['bending', 'vibrato'],
  'string-skipping': ['string-skipping'],
  'arpeggios': ['arpeggios'],
  'strumming': ['strumming'],
  'syncopation': ['syncopation'],
  'power-chords': ['power-chords'],
  'slide': ['slide'],
  'slide-legato': ['slide', 'legato'],
  'percussive': ['percussive'],
  'tube': ['tube-amp'],
  'solid-state': ['solid-state-amp'],
  'modeling': ['modeling-amp'],
  'hybrid': ['tube-amp', 'solid-state-amp'],
  'mini': ['modeling-amp'],
  'bass': ['bass-guitar'],
  'acoustic': ['acoustic-guitar'],
  'electric': ['electric-guitar'],
  'classical': ['classical-guitar'],
  'baritone': ['electric-guitar'],
  '12-string': ['acoustic-guitar'],
  'microphones': ['microphones'],
  'interfaces': ['audio-interface'],
  'daw': ['daw'],
  'monitors-headphones': ['monitors'],
  'preamps': ['preamps'],
  'cables': ['accessories'],
  'capos': ['accessories'],
  'cases': ['accessories'],
  'metronomes': ['accessories'],
  'picks': ['accessories'],
  'slides': ['slide', 'accessories'],
  'stands': ['accessories'],
  'straps': ['accessories'],
  'tuners': ['accessories'],
  'pentatonic': ['pentatonic'],
  'major-pentatonic': ['pentatonic', 'major-key'],
  'minor-pentatonic': ['pentatonic', 'minor-key'],
  'harmonic-minor': ['harmonic-minor', 'minor-key'],
  'dorian': ['modal'],
  'mixolydian': ['modal'],
  'major': ['major-key'],
  'minor': ['minor-key'],
  'call-response': ['call-response'],
  'motif-development': ['motif-development'],
  'phrasing': ['phrasing'],
  'target-notes': ['target-notes'],
  'rhythm': ['rhythm-theory'],
  'scales': ['scale-theory'],
  'voice-leading': ['voice-leading'],
  'inversions': ['chord-theory'],
  'roman-numerals': ['roman-numerals'],
  'secondary-dominants': ['secondary-dominants'],
  'substitutions': ['substitutions'],
  'modal-interchange': ['modal-interchange'],
  'extended': ['chord-theory'],
  'progressions': ['chord-progressions'],
  'signal-chain': ['recording'],
  'compression': ['compressor'],
  'modulation': ['chorus'],
  'pitch': ['intervals'],
  'shuffle': ['rhythm-theory'],
  'advanced-picking': ['alternate-picking'],
  'chord-changes': ['chord-theory'],
  'finger-exercises': ['exercise'],
  'picking-patterns': ['alternate-picking'],
  'rhythm-drills': ['rhythm-theory'],
  'scales-modes': ['scale-theory', 'modal'],
  'stretching': ['warmup'],
  'i-iv-v': ['chord-progressions', 'major-key'],
  'i-v-vi-iv': ['chord-progressions'],
  'ii-v-i': ['chord-progressions', 'jazz'],
  'vi-iv-i-v': ['chord-progressions'],
  '12-bar-blues': ['chord-progressions', 'blues'],
  'circle-of-fifths': ['chord-progressions', 'scale-theory'],
};

// ---- Cross-reference helpers ----

function extractScaleAndModeSlugs(scaleName: string): { scaleSlug?: string; modeSlug?: string } {
  const lower = scaleName.toLowerCase().trim();
  const res: { scaleSlug?: string; modeSlug?: string } = {};

  // Modes
  if (lower.includes('dorian')) {
    res.modeSlug = 'dorian';
    res.scaleSlug = 'dorian';
  } else if (lower.includes('mixolydian')) {
    res.modeSlug = 'mixolydian';
    res.scaleSlug = 'mixolydian';
  } else if (lower.includes('aeolian')) {
    res.modeSlug = 'aeolian';
    res.scaleSlug = 'minor';
  } else if (lower.includes('ionian')) {
    res.modeSlug = 'ionian';
    res.scaleSlug = 'major';
  } else if (lower.includes('lydian')) {
    res.modeSlug = 'lydian';
    res.scaleSlug = 'lydian';
  } else if (lower.includes('phrygian')) {
    res.modeSlug = 'phrygian';
    res.scaleSlug = 'phrygian';
  } else if (lower.includes('locrian')) {
    res.modeSlug = 'locrian';
    res.scaleSlug = 'locrian';
  }

  // Scales
  if (!res.scaleSlug) {
    if (lower.includes('minor pentatonic') || lower.includes('pentatonic minor')) {
      res.scaleSlug = 'minor-pentatonic';
    } else if (lower.includes('major pentatonic') || lower.includes('pentatonic major')) {
      res.scaleSlug = 'major-pentatonic';
    } else if (lower.includes('blues')) {
      res.scaleSlug = 'blues';
    } else if (lower.includes('harmonic minor')) {
      res.scaleSlug = 'harmonic-minor';
    } else if (lower.includes('melodic minor')) {
      res.scaleSlug = 'melodic-minor';
    } else if (lower.includes('natural minor') || lower.includes('minor scale') || /\bminor\b/.test(lower)) {
      res.scaleSlug = 'minor';
      res.modeSlug = res.modeSlug || 'aeolian';
    } else if (lower.includes('major scale') || /\bmajor\b/.test(lower)) {
      res.scaleSlug = 'major';
      res.modeSlug = res.modeSlug || 'ionian';
    } else if (lower.includes('chromatic')) {
      res.scaleSlug = 'chromatic';
    } else if (lower.includes('whole tone') || lower.includes('whole-tone')) {
      res.scaleSlug = 'whole-tone';
    }
  }

  return res;
}

function normalizeRoman(str: string): string {
  return str
    .replace(/♭/g, 'b')
    .replace(/♯/g, '#')
    .replace(/(maj7|min7|dom7|dim7|aug|sus\d*|\+)/gi, '')
    .replace(/([ivIV]+)[0-9]+/g, '$1') // e.g. I7 -> I, IV7 -> IV, V7 -> V
    .replace(/\s*[-–—|/,]\s*/g, ' - ')
    .trim();
}

function extractProgressionSlugs(text: string): string[] {
  if (!text) return [];
  const norm = normalizeRoman(text).toLowerCase();
  const matched = new Set<string>();

  // Specific 4-chord and 3-chord progressions
  if (norm.includes('i - v - vi - iv')) matched.add('i-v-vi-iv');
  if (norm.includes('vi - iv - i - v')) matched.add('vi-iv-i-v');
  if (norm.includes('i - vi - iv - v')) matched.add('i-vi-iv-v');
  if (norm.includes('i - vi - ii - v')) matched.add('i-vi-ii-v');
  if (norm.includes('i - v - bvii - iv') || norm.includes('i - v - vii - iv')) matched.add('i-v-bvii-iv');
  if (norm.includes('i - bvii - iv') || norm.includes('i - vii - iv')) matched.add('i-bvii-iv');
  if (norm.includes('i - biii - bvii - iv') || norm.includes('i - iii - vii - iv')) matched.add('i-biii-bvii-iv');
  if (norm.includes('ii - v - i')) matched.add('ii-v-i');
  if (norm.includes('ii - iv - v')) matched.add('ii-iv-v');
  if (norm.includes('i - iv - v')) matched.add('i-iv-v');

  // 2-chord vamps (only if standalone or explicitly 2-chord)
  if (norm === 'i - iv' || norm === 'i - iv - i - iv' || norm.startsWith('i - iv - i - iv')) {
    matched.add('i-iv');
  }
  if (norm === 'iv - i' || norm === 'iv - i - iv - i') {
    matched.add('iv-i');
  }
  if (norm === 'i - v' || norm === 'i - v - i - v') {
    matched.add('i-v');
  }

  // 12-bar blues and minor blues
  if (/12-bar/i.test(text) || (norm.includes('i') && norm.includes('iv') && norm.includes('v') && /blues/i.test(text))) {
    if (/minor/i.test(text)) {
      matched.add('minor-blues');
    } else {
      matched.add('12-bar-blues');
    }
  }
  if (/minor.*blues/i.test(text)) {
    matched.add('minor-blues');
  }
  if (/circle of fifths/i.test(text)) {
    matched.add('circle-of-fifths');
  }

  return Array.from(matched);
}

function extractChordType(chordName: string): string | null {
  const trimmed = chordName.trim();
  const match = trimmed.match(/^[A-G][#b♯♭]?(.*)/);
  if (!match) return null;
  const quality = match[1].toLowerCase().trim();
  const CHORD_MAP: Record<string, string | null> = {
    '': 'major',
    'm': 'minor',
    'min': 'minor',
    'minor': 'minor',
    '7': 'seventh',
    'dom7': 'seventh',
    'maj7': 'major-seventh',
    'major7': 'major-seventh',
    'm7': 'minor-seventh',
    'min7': 'minor-seventh',
    'dim': 'diminished',
    'dim7': 'diminished',
    'aug': 'augmented',
    '+': 'augmented',
    'sus': 'suspended',
    'sus2': 'suspended',
    'sus4': 'suspended',
    '5': null,      // power chords - no matching content entry
    '9': 'extended',
    '11': 'extended',
    '13': 'extended',
    'add9': 'extended',
  };
  if (quality in CHORD_MAP) return CHORD_MAP[quality];
  return null;
}

// ---- URL construction ----

function buildUrl(contentType: ContentType, slug: string, category?: string): string {
  switch (contentType) {
    case 'chord': return `/lessons/theory/chords/${slug}/`;
    case 'scale': return `/lessons/theory/scales/${slug}/`;
    case 'interval': return `/lessons/theory/intervals/${slug}/`;
    case 'mode': return `/lessons/theory/modes/${slug}/`;
    case 'progression': return `/lessons/theory/progressions/${slug}/`;
    case 'song-analysis': return `/lessons/songs/song-analysis/${slug}/`;
    case 'practice': return `/lessons/practice/${category}/${slug}/`;
    case 'gear-lesson': return `/lessons/gear/${category}/${slug}/`;
    case 'song-lesson': return `/lessons/songs/${category}/${slug}/`;
    default: return '/';
  }
}

// ---- Helpers ----

const DATA_DIR = path.resolve(__dirname, '..', 'src', 'data');
const OUTPUT_FILE = path.resolve(DATA_DIR, '_generated', 'content-index.json');
const SONGS_LIST_OUTPUT_FILE = path.resolve(DATA_DIR, '_generated', 'songs-list.json');
const NAVIGATION_OUTPUT_FILE = path.resolve(DATA_DIR, '_generated', 'navigation-data.json');

function getDecadeFromYear(year: string): string {
  const yearMatch = year.match(/\b(19|20)\d{2}\b/);
  const yearNum = yearMatch ? parseInt(yearMatch[0]) : parseInt(year);

  if (isNaN(yearNum)) return '1970s';

  if (yearNum >= 2020) return '2020s';
  if (yearNum >= 2010) return '2010s';
  if (yearNum >= 2000) return '2000s';
  if (yearNum >= 1990) return '1990s';
  if (yearNum >= 1980) return '1980s';
  if (yearNum >= 1970) return '1970s';
  if (yearNum >= 1960) return '1960s';
  if (yearNum >= 1950) return '1950s';
  return '1950s';
}

function readJsonFile(filePath: string): Record<string, unknown> {
  const content = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(content);
}

function getJsonFiles(dir: string, skipPatterns: string[] = []): string[] {
  if (!fs.existsSync(dir)) return [];
  const files: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getJsonFiles(fullPath, skipPatterns));
    } else if (entry.name.endsWith('.json')) {
      const shouldSkip = skipPatterns.some(p => entry.name.includes(p));
      if (!shouldSkip) {
        files.push(fullPath);
      }
    }
  }
  return files;
}

function normalizeDifficulty(raw: string | undefined): string | undefined {
  if (!raw) return undefined;
  const lower = raw.toLowerCase();
  if (lower.includes('beginner') || lower === 'foundation') return 'beginner';
  if (lower.includes('intermediate') || lower === 'essential') return 'intermediate';
  if (lower.includes('advanced')) return 'advanced';
  if (lower.includes('expert')) return 'expert';
  return undefined;
}

function normalizeTags(rawTags: string[]): string[] {
  const normalized: string[] = [];
  for (const raw of rawTags) {
    const lower = raw.toLowerCase().trim();
    // Check direct match
    if (VALID_TAG_SLUGS.has(lower)) {
      normalized.push(lower);
      continue;
    }
    // Check normalization map
    const mapped = TAG_NORMALIZATION[lower];
    if (mapped !== undefined) {
      if (mapped !== null) normalized.push(mapped);
      // null means skip this tag
      continue;
    }
    // Skip formula patterns like W-H-W-W-W-H-W
    if (/^[whWH-]+$/.test(lower)) continue;
    // Skip pure number patterns like "7 Notes"
    if (/^\d+\s+\w+$/.test(lower)) continue;
  }
  return normalized;
}

function inferTagsFromSlug(slug: string): string[] {
  const tags: string[] = [];
  // Exact match
  if (SLUG_TAG_MAP[slug]) {
    tags.push(...SLUG_TAG_MAP[slug]);
  }
  // Partial match for compound slugs
  const parts = slug.split('-');
  for (const part of parts) {
    if (SLUG_TAG_MAP[part] && !tags.some(t => SLUG_TAG_MAP[part].includes(t))) {
      tags.push(...SLUG_TAG_MAP[part]);
    }
  }
  return tags;
}

function inferTagsFromDirectory(relativePath: string): string[] {
  for (const [dirPattern, tags] of Object.entries(DIRECTORY_TAG_RULES)) {
    if (relativePath.startsWith(dirPattern)) {
      return [...tags];
    }
  }
  return [];
}

function inferTagsFromSong(data: Record<string, unknown>): string[] {
  const tags: string[] = ['song-analysis'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const d = data as any;

  // Genre
  const genre = d.songInfo?.genre?.toLowerCase() ?? '';
  if (genre.includes('rock')) tags.push('classic-rock');
  if (genre.includes('blues')) tags.push('blues');
  if (genre.includes('metal')) tags.push('metal');
  if (genre.includes('punk')) tags.push('punk');
  if (genre.includes('jazz')) tags.push('jazz');

  // Difficulty
  const diff = normalizeDifficulty(d.difficulty?.overall);
  if (diff) tags.push(diff);

  // Techniques
  const techniques = d.techniques ?? [];
  for (const tech of techniques) {
    const name = (tech.name ?? '').toLowerCase().replace(/\s+/g, '-');
    if (SLUG_TAG_MAP[name]) tags.push(...SLUG_TAG_MAP[name]);
  }

  return tags;
}

// ---- Content Type Scanners ----

function scanTheoryContent(
  contentType: ContentType,
  subdir: string,
  titlePath: string,
  tagPath: string
): ContentEntry[] {
  const dir = path.join(DATA_DIR, subdir);
  const files = getJsonFiles(dir, ['index']);
  const entries: ContentEntry[] = [];

  for (const file of files) {
    const data = readJsonFile(file);
    const slug = (data.slug as string) ?? path.basename(file, '.json');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const d = data as any;

    // Navigate dot-separated path to extract title
    const titleParts = titlePath.split('.');
    let titleVal: unknown = d;
    for (const p of titleParts) { titleVal = (titleVal as Record<string, unknown>)?.[p]; }
    const title = (titleVal as string) ?? slug;

    // Extract existing tags
    const tagParts = tagPath.split('.');
    let tagVal: unknown = d;
    for (const p of tagParts) { tagVal = (tagVal as Record<string, unknown>)?.[p]; }
    const rawTags = Array.isArray(tagVal) ? tagVal.map(String) : [];

    // Build tag set
    const tags = new Set<string>();
    normalizeTags(rawTags).forEach(t => tags.add(t));
    inferTagsFromDirectory(subdir).forEach(t => tags.add(t));
    inferTagsFromSlug(slug).forEach(t => tags.add(t));

    // Difficulty
    const diff = normalizeDifficulty(d.learningPath?.difficulty);
    if (diff) tags.add(diff);

    entries.push({
      id: `${contentType}:${slug}`,
      contentType,
      slug,
      title,
      url: buildUrl(contentType, slug),
      tags: [...tags],
      difficulty: diff,
      category: subdir,
    });
  }

  return entries;
}

interface SongScanResult {
  entries: ContentEntry[];
  songsList: SongListItem[];
  crossRefs: {
    scaleToSongs: Record<string, string[]>;
    modeToSongs: Record<string, string[]>;
    progressionToSongs: Record<string, string[]>;
    chordToSongs: Record<string, string[]>;
  };
}

function scanSongs(): SongScanResult {
  const dir = path.join(DATA_DIR, 'songs');
  const files = getJsonFiles(dir, ['_template', 'index']);
  const entries: ContentEntry[] = [];
  const songsList: SongListItem[] = [];
  const scaleToSongs: Record<string, string[]> = {};
  const modeToSongs: Record<string, string[]> = {};
  const progressionToSongs: Record<string, string[]> = {};
  const chordToSongs: Record<string, string[]> = {};

  for (const file of files) {
    const data = readJsonFile(file);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const d = data as any;
    const slug = path.basename(file, '.json');
    const songId = `song-analysis:${slug}`;
    const title = d.songInfo?.title
      ? `${d.songInfo.title}${d.songInfo.artist ? ` by ${d.songInfo.artist}` : ''}`
      : slug;

    const rawTags = Array.isArray(d.metadata?.tags) ? d.metadata.tags.map(String) : [];
    const tags = new Set<string>();
    normalizeTags(rawTags).forEach(t => tags.add(t));
    inferTagsFromSong(data).forEach(t => tags.add(t));
    inferTagsFromSlug(slug).forEach(t => tags.add(t));

    const diff = normalizeDifficulty(d.difficulty?.overall);
    if (diff) tags.add(diff);

    entries.push({
      id: songId,
      contentType: 'song-analysis',
      slug,
      title,
      url: buildUrl('song-analysis', slug),
      tags: [...tags],
      difficulty: diff,
    });

    const songItem: SongListItem = {
      slug,
      title: d.songInfo?.title || slug,
      artist: d.songInfo?.artist || 'Unknown Artist',
      genre: d.songInfo?.genre || 'Rock',
      difficulty: d.difficulty?.overall || 'Intermediate',
      year: d.songInfo?.released || '',
      tempo: d.songInfo?.tempo || '',
      key: d.songInfo?.key || '',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      techniques: (d.techniques || []).map((t: any) => t.name).filter(Boolean),
      featured: d.metadata?.featured ?? false,
      dateAdded: d.metadata?.dateAdded ?? '2024-01-01',
      popularity: d.metadata?.popularity ?? 50,
      decade: d.metadata?.decade ?? getDecadeFromYear(d.songInfo?.released || ''),
      subGenre: d.metadata?.subGenre ?? d.songInfo?.genre ?? 'Rock',
      tags: d.metadata?.tags ?? [],
      iconicRiff: d.metadata?.iconicRiff ?? false,
      estimatedLearningTime: d.metadata?.estimatedLearningTime,
      viewCount: d.metadata?.viewCount ?? 0,
    };
    songsList.push(songItem);

    // Extract cross-references: scales and modes used in this song
    const scalesUsed = d.musicalAnalysis?.keyAndScale?.scalesUsed ?? [];
    for (const s of scalesUsed) {
      const { scaleSlug, modeSlug } = extractScaleAndModeSlugs(s.scale ?? '');
      if (scaleSlug) {
        if (!scaleToSongs[scaleSlug]) scaleToSongs[scaleSlug] = [];
        if (!scaleToSongs[scaleSlug].includes(songId)) {
          scaleToSongs[scaleSlug].push(songId);
        }
      }
      if (modeSlug) {
        if (!modeToSongs[modeSlug]) modeToSongs[modeSlug] = [];
        if (!modeToSongs[modeSlug].includes(songId)) {
          modeToSongs[modeSlug].push(songId);
        }
      }
    }

    // Extract cross-references: chord progressions used in this song
    const matchedProgressions = new Set<string>();
    const cp = d.musicalAnalysis?.chordProgressions;
    if (cp) {
      if (cp.mainProgression?.progression) {
        extractProgressionSlugs(cp.mainProgression.progression).forEach(p => matchedProgressions.add(p));
      }
      if (cp.mainProgression?.description) {
        extractProgressionSlugs(cp.mainProgression.description).forEach(p => matchedProgressions.add(p));
      }
      for (const sec of (cp.sectionProgressions ?? [])) {
        if (sec.romanNumerals) extractProgressionSlugs(sec.romanNumerals).forEach(p => matchedProgressions.add(p));
        if (sec.progression) extractProgressionSlugs(sec.progression).forEach(p => matchedProgressions.add(p));
        if (sec.description) extractProgressionSlugs(sec.description).forEach(p => matchedProgressions.add(p));
      }
    }
    for (const tech of (d.techniques ?? [])) {
      if (tech.name) extractProgressionSlugs(tech.name).forEach(p => matchedProgressions.add(p));
      if (tech.description) extractProgressionSlugs(tech.description).forEach(p => matchedProgressions.add(p));
      if (tech.details?.progression) extractProgressionSlugs(tech.details.progression).forEach(p => matchedProgressions.add(p));
    }
    for (const p of matchedProgressions) {
      if (!progressionToSongs[p]) progressionToSongs[p] = [];
      if (!progressionToSongs[p].includes(songId)) {
        progressionToSongs[p].push(songId);
      }
    }

    // Extract cross-references: chord types used in this song
    const seenChordTypes = new Set<string>();

    // From main progression chords array
    const mainChords: string[] = d.musicalAnalysis?.chordProgressions?.mainProgression?.chords ?? [];
    for (const chord of mainChords) {
      const chordType = extractChordType(chord);
      if (chordType && !seenChordTypes.has(chordType)) {
        seenChordTypes.add(chordType);
        if (!chordToSongs[chordType]) chordToSongs[chordType] = [];
        if (!chordToSongs[chordType].includes(songId)) {
          chordToSongs[chordType].push(songId);
        }
      }
    }

    // From section progressions
    const sections = d.musicalAnalysis?.chordProgressions?.sectionProgressions ?? [];
    for (const section of sections) {
      const progStr = (section.progression ?? '') as string;
      const sectionChords = progStr.split(/\s*[-–]\s*/);
      for (const chord of sectionChords) {
        const chordType = extractChordType(chord.trim());
        if (chordType && !seenChordTypes.has(chordType)) {
          seenChordTypes.add(chordType);
          if (!chordToSongs[chordType]) chordToSongs[chordType] = [];
          if (!chordToSongs[chordType].includes(songId)) {
            chordToSongs[chordType].push(songId);
          }
        }
      }
    }
  }

  return { entries, songsList, crossRefs: { scaleToSongs, modeToSongs, progressionToSongs, chordToSongs } };
}

function scanPractice(): ContentEntry[] {
  const entries: ContentEntry[] = [];
  const practiceDir = path.join(DATA_DIR, 'practice');
  const categories = ['warmups', 'technique', 'improv'];

  for (const category of categories) {
    const dir = path.join(practiceDir, category);
    const files = getJsonFiles(dir, ['index']);

    for (const file of files) {
      const data = readJsonFile(file);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const d = data as any;
      const slug = (d.slug as string) ?? path.basename(file, '.json');
      const title = d.pageInfo?.pageTitle ?? d.pageTitle ?? slug;

      const tags = new Set<string>();
      inferTagsFromDirectory(`practice/${category}`).forEach(t => tags.add(t));
      inferTagsFromSlug(slug).forEach(t => tags.add(t));

      entries.push({
        id: `practice:${slug}`,
        contentType: 'practice',
        slug,
        title,
        url: buildUrl('practice', slug, category),
        tags: [...tags],
        category,
      });
    }
  }

  // Also index interactive tools from the tools registry
  const interactiveTools = getInteractiveTools();
  for (const tool of interactiveTools) {
    entries.push({
      id: `practice:${tool.id}`,
      contentType: 'practice',
      slug: tool.id,
      title: tool.title,
      url: tool.href,
      tags: ['tools', 'practice', 'interactive-tool'],
      category: 'tools',
    });
  }

  return entries;
}

function scanGearLessons(): ContentEntry[] {
  const entries: ContentEntry[] = [];
  const gearDir = path.join(DATA_DIR, 'gear-lessons');
  const categories = ['guitars', 'amps', 'effects', 'recording', 'accessories'];

  for (const category of categories) {
    const dir = path.join(gearDir, category);
    const files = getJsonFiles(dir, ['index']);

    for (const file of files) {
      const data = readJsonFile(file);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const d = data as any;
      const rawSlug = (d.slug as string) ?? path.basename(file, '.json');
      const title = d.pageTitle ?? rawSlug;
      // Strip category prefix from slug if present (e.g., "effects-chorus" -> "chorus")
      const bareSlug = rawSlug.startsWith(`${category}-`) ? rawSlug.slice(category.length + 1) : rawSlug;
      const dataKey = `${category}-${bareSlug}`;

      const tags = new Set<string>();
      inferTagsFromDirectory(`gear-lessons/${category}`).forEach(t => tags.add(t));
      inferTagsFromSlug(bareSlug).forEach(t => tags.add(t));

      entries.push({
        id: `gear-lesson:${dataKey}`,
        contentType: 'gear-lesson',
        slug: bareSlug,
        title,
        url: buildUrl('gear-lesson', bareSlug, category),
        tags: [...tags],
        category,
      });
    }
  }

  return entries;
}

function scanSongLessons(): ContentEntry[] {
  const entries: ContentEntry[] = [];
  const songLessonDir = path.join(DATA_DIR, 'song-lessons');
  const categories = [
    'breakdowns', 'chords', 'effects', 'lead',
    'rhythm', 'riffs', 'structure', 'techniques'
  ];

  for (const category of categories) {
    const dir = path.join(songLessonDir, category);
    const files = getJsonFiles(dir, ['index']);

    for (const file of files) {
      const data = readJsonFile(file);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const d = data as any;
      const slug = (d.slug as string) ?? path.basename(file, '.json');
      const title = d.pageTitle ?? slug;
      const dataKey = `${category}-${slug}`;

      const tags = new Set<string>();
      inferTagsFromDirectory(`song-lessons/${category}`).forEach(t => tags.add(t));
      inferTagsFromSlug(slug).forEach(t => tags.add(t));

      entries.push({
        id: `song-lesson:${dataKey}`,
        contentType: 'song-lesson',
        slug,
        title,
        url: buildUrl('song-lesson', slug, category),
        tags: [...tags],
        category,
      });
    }
  }

  // Also scan analysis-method.json if it exists
  const analysisMethod = path.join(songLessonDir, 'analysis-method.json');
  if (fs.existsSync(analysisMethod)) {
    const data = readJsonFile(analysisMethod);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const d = data as any;
    entries.push({
      id: 'song-lesson:analysis-method',
      contentType: 'song-lesson',
      slug: 'analysis-method',
      title: d.pageTitle ?? 'Song Analysis Method',
      url: '/lessons/songs/analysis-method/',
      tags: ['song-analysis', 'lesson', 'song-structure'],
    });
  }

  return entries;
}

// ---- Main ----

function buildContentIndex(): { index: ContentIndex; songsList: SongListItem[]; navigationData: NavCategory[] } {
  const allEntries: ContentEntry[] = [];

  // Scan all content types
  console.log('Scanning content types...');

  const chords = scanTheoryContent('chord', 'chords', 'chordInfo.name', 'chordInfo.tags');
  console.log(`  Chords: ${chords.length} entries`);
  allEntries.push(...chords);

  const scales = scanTheoryContent('scale', 'scales', 'scaleInfo.name', 'metadata.tags');
  console.log(`  Scales: ${scales.length} entries`);
  allEntries.push(...scales);

  const intervals = scanTheoryContent('interval', 'intervals', 'intervalInfo.name', 'intervalInfo.tags');
  console.log(`  Intervals: ${intervals.length} entries`);
  allEntries.push(...intervals);

  const modes = scanTheoryContent('mode', 'modes', 'modeInfo.name', 'modeInfo.tags');
  console.log(`  Modes: ${modes.length} entries`);
  allEntries.push(...modes);

  const progressions = scanTheoryContent('progression', 'progressions', 'progressionInfo.name', 'progressionInfo.tags');
  console.log(`  Progressions: ${progressions.length} entries`);
  allEntries.push(...progressions);

  const songResult = scanSongs();
  console.log(`  Songs: ${songResult.entries.length} entries`);
  allEntries.push(...songResult.entries);
  console.log(`  Cross-refs: ${Object.keys(songResult.crossRefs.scaleToSongs).length} scales, ${Object.keys(songResult.crossRefs.modeToSongs).length} modes, ${Object.keys(songResult.crossRefs.progressionToSongs).length} progressions, ${Object.keys(songResult.crossRefs.chordToSongs).length} chord types`);

  const practice = scanPractice();
  console.log(`  Practice: ${practice.length} entries`);
  allEntries.push(...practice);

  const gear = scanGearLessons();
  console.log(`  Gear Lessons: ${gear.length} entries`);
  allEntries.push(...gear);

  const songLessons = scanSongLessons();
  console.log(`  Song Lessons: ${songLessons.length} entries`);
  allEntries.push(...songLessons);

  // Build tag inverted index
  const tagIndex: Record<string, string[]> = {};
  for (const entry of allEntries) {
    for (const tag of entry.tags) {
      if (!tagIndex[tag]) tagIndex[tag] = [];
      tagIndex[tag].push(entry.id);
    }
  }

  // Stats
  const tagCount = Object.keys(tagIndex).length;
  const avgTags = allEntries.length > 0
    ? (allEntries.reduce((sum, e) => sum + e.tags.length, 0) / allEntries.length).toFixed(1)
    : '0';
  const noTags = allEntries.filter(e => e.tags.length === 0).length;

  console.log(`\nContent Index Summary:`);
  console.log(`  Total entries: ${allEntries.length}`);
  console.log(`  Unique tags used: ${tagCount}`);
  console.log(`  Avg tags per entry: ${avgTags}`);
  if (noTags > 0) {
    console.log(`  Entries with no tags: ${noTags}`);
    for (const e of allEntries.filter(e => e.tags.length === 0)) {
      console.log(`    - ${e.id} (${e.title})`);
    }
  }

  const navigationData = generateNavigationData({
    chords,
    scales,
    intervals,
    modes,
    progressions,
    songsList: songResult.songsList,
    practice,
    gear,
    songLessons,
  });

  return {
    index: {
      generatedAt: new Date().toISOString(),
      entryCount: allEntries.length,
      entries: allEntries,
      tagIndex,
      crossReferences: songResult.crossRefs,
    },
    songsList: songResult.songsList,
    navigationData,
  };
}

function generateNavigationData(params: {
  chords: ContentEntry[];
  scales: ContentEntry[];
  intervals: ContentEntry[];
  modes: ContentEntry[];
  progressions: ContentEntry[];
  songsList: SongListItem[];
  practice: ContentEntry[];
  gear: ContentEntry[];
  songLessons: ContentEntry[];
}): NavCategory[] {
  const { chords, scales, intervals, modes, progressions, songsList, practice } = params;

  // 1. Theory Nav
  const popularScaleSlugs = ['major', 'minor', 'major-pentatonic', 'minor-pentatonic', 'blues', 'dorian'];
  const scaleItems: NavMenuItem[] = popularScaleSlugs
    .map(slug => scales.find(s => s.slug === slug))
    .filter((s): s is ContentEntry => Boolean(s))
    .map(s => ({ label: s.title, href: s.url }));
  scaleItems.push({
    label: `All ${scales.length} Scales`,
    href: '/lessons/theory/scales',
    icon: '→',
  });

  const popularChordSlugs = ['major', 'minor', 'seventh', 'extended', 'power', 'suspended'];
  const chordItems: NavMenuItem[] = popularChordSlugs
    .map(slug => chords.find(c => c.slug === slug))
    .filter((c): c is ContentEntry => Boolean(c))
    .map(c => ({ label: c.title, href: c.url }));
  chordItems.push({
    label: `All ${chords.length} Chords`,
    href: '/lessons/theory/chords',
    icon: '→',
  });

  const theoryNav: NavCategory = {
    label: 'Theory',
    href: '/lessons/theory',
    columns: [
      {
        heading: 'Scales',
        headingHref: '/lessons/theory/scales',
        items: scaleItems,
      },
      {
        heading: 'Chords',
        headingHref: '/lessons/theory/chords',
        items: chordItems,
      },
      {
        heading: 'More Theory',
        items: [
          { label: `Intervals (${intervals.length})`, href: '/lessons/theory/intervals', icon: '🎵' },
          { label: `Modes (${modes.length})`, href: '/lessons/theory/modes', icon: '🎭' },
          { label: `Chord Progressions (${progressions.length})`, href: '/lessons/theory/progressions', icon: '🔄' },
          { label: 'Circle of Fifths Explorer', href: '/lessons/practice/circle-of-fifths', icon: '⭕' },
          { label: 'Harmonic Minor Scale', href: '/lessons/theory/scales/harmonic-minor', icon: '🎼' },
        ],
      },
    ],
    featured: [
      { label: 'All Theory Topics', href: '/lessons/theory' },
      { label: 'Circle of Fifths Wheel', href: '/lessons/practice/circle-of-fifths' },
      { label: 'Scale & Mode Visualizer', href: '/lessons/theory/scales' },
    ],
  };

  // 2. Songs Nav
  const songCount = songsList.length;
  const songsNav: NavCategory = {
    label: 'Songs',
    href: '/lessons/songs',
    columns: [
      {
        heading: `Song Analysis (${songCount} Songs)`,
        headingHref: '/lessons/songs/song-analysis',
        items: [
          { label: `Browse All ${songCount} Songs`, href: '/lessons/songs/song-analysis', icon: '🎸' },
          { label: 'Why Songs Work (Harmonic Secrets)', href: '/lessons/songs/why-songs-work', icon: '💡' },
          { label: 'Songs by Difficulty', href: '/search?type=song-analysis&sort=difficulty' },
          { label: 'Songs by Genre', href: '/search?type=song-analysis' },
        ],
      },
      {
        heading: 'Song Learning',
        items: [
          { label: 'Riffs & Licks', href: '/lessons/songs/riffs' },
          { label: 'Lead Guitar', href: '/lessons/songs/lead' },
          { label: 'Rhythm Patterns', href: '/lessons/songs/rhythm' },
          { label: 'Song Effects', href: '/lessons/songs/effects' },
          { label: 'Song Techniques', href: '/lessons/songs/techniques' },
        ],
      },
      {
        heading: 'Techniques',
        items: [
          { label: '12-Bar Blues Progressions', href: '/lessons/theory/progressions/12-bar-blues' },
          { label: 'Minor Blues Jamming', href: '/lessons/theory/progressions/minor-blues' },
          { label: 'Classic Pop Progression', href: '/lessons/theory/progressions/i-v-vi-iv' },
          { label: 'Jazz ii-V-I Mastery', href: '/lessons/theory/progressions/ii-v-i' },
          { label: 'Andalusian Flamenco Loop', href: '/lessons/theory/progressions/i-bvii-iv' },
        ],
      },
    ],
    featured: [
      { label: 'Why Songs Work (Harmonic Breakdown Hub)', href: '/lessons/songs/why-songs-work' },
      { label: `Browse All ${songCount} Song Analyses`, href: '/lessons/songs/song-analysis' },
    ],
  };

  // 3. Tools Nav
  const interactive = getInteractiveTools();
  const reference = getReferenceTools();
  const drills = getPracticeDrills();

  const toolsNav: NavCategory = {
    label: 'Tools',
    href: '/lessons/practice/fretboard-trainer',
    columns: [
      {
        heading: 'Interactive Utilities',
        headingHref: '/lessons/practice/fretboard-trainer',
        items: interactive.map(t => ({
          label: t.shortTitle,
          href: t.href,
          icon: t.icon,
        })),
      },
      {
        heading: 'Visual Guides & Reference',
        headingHref: '/lessons/theory',
        items: reference.map(t => ({
          label: t.shortTitle,
          href: t.href,
          icon: t.icon,
        })),
      },
      {
        heading: 'Practice Drills',
        headingHref: '/lessons/practice',
        items: drills.map(t => ({
          label: t.shortTitle,
          href: t.href,
          icon: t.icon,
        })),
      },
    ],
    featured: [
      { label: 'Play the Fretboard Note Hunt Game', href: '/lessons/practice/fretboard-trainer' },
      { label: 'Circle of Fifths Studio', href: '/lessons/practice/circle-of-fifths' },
      { label: 'Master CAGED Fretboard', href: '/lessons/practice/caged-system' },
      { label: 'Interactive Ear Trainer', href: '/lessons/practice/ear-trainer' },
      { label: 'Download Free 3-Page Fretboard PDF', href: '/downloads/fretboard-cheat-sheet' },
    ],
  };

  // 4. Practice Nav
  const warmups = practice.filter(p => p.category === 'warmups').slice(0, 5);
  const technique = practice.filter(p => p.category === 'technique').slice(0, 5);
  const improv = practice.filter(p => p.category === 'improv').slice(0, 5);

  const practiceNav: NavCategory = {
    label: 'Practice',
    href: '/lessons/practice',
    columns: [
      {
        heading: 'Warm-ups & Speed',
        headingHref: '/lessons/practice/warmups',
        items: [
          ...warmups.map(w => ({ label: w.title, href: w.url })),
          { label: 'All Warm-ups', href: '/lessons/practice/warmups', icon: '→' },
        ],
      },
      {
        heading: 'Technique Drills',
        headingHref: '/lessons/practice/technique',
        items: [
          ...technique.map(t => ({ label: t.title, href: t.url })),
          { label: 'All Technique Drills', href: '/lessons/practice/technique', icon: '→' },
        ],
      },
      {
        heading: 'Improvisation',
        headingHref: '/lessons/practice/improv',
        items: [
          ...improv.map(i => ({ label: i.title, href: i.url })),
          { label: 'All Improv Drills', href: '/lessons/practice/improv', icon: '→' },
        ],
      },
    ],
    featured: [
      { label: 'All Practice Topics', href: '/lessons/practice' },
      { label: 'Fretboard Trainer', href: '/lessons/practice/fretboard-trainer' },
      { label: 'Circle of Fifths Explorer', href: '/lessons/practice/circle-of-fifths' },
      { label: 'CAGED System Visualizer', href: '/lessons/practice/caged-system' },
      { label: 'Ear Trainer', href: '/lessons/practice/ear-trainer' },
      { label: 'Progression Jammer', href: '/lessons/practice/progression-player' },
    ],
  };

  // 5. Gear Nav
  const gearRootPath = path.join(DATA_DIR, 'gear-lessons', 'gear-root-index.json');
  let gearCategories: { title: string; href: string }[] = [];
  if (fs.existsSync(gearRootPath)) {
    const gearRoot = readJsonFile(gearRootPath) as {
      gearCategories?: { title: string; href: string }[];
    };
    gearCategories = gearRoot.gearCategories || [];
  }

  const guitarsCat = gearCategories.find(c => c.title.includes('Guitar'));
  const ampsCat = gearCategories.find(c => c.title.includes('Amp'));
  const recordingCat = gearCategories.find(c => c.title.includes('Recording'));
  const accessoriesCat = gearCategories.find(c => c.title.includes('Accessories'));

  const gearNav: NavCategory = {
    label: 'Gear',
    href: '/lessons/gear',
    columns: [
      {
        heading: 'Guitars',
        headingHref: guitarsCat?.href ?? '/lessons/gear/guitars',
        items: [
          { label: 'Electric Guitars', href: '/lessons/gear/guitars/electric' },
          { label: 'Acoustic Guitars', href: '/lessons/gear/guitars/acoustic' },
          { label: 'Bass Guitars', href: '/lessons/gear/guitars/bass' },
          { label: 'Classical Guitars', href: '/lessons/gear/guitars/classical' },
          { label: 'All Guitars', href: '/lessons/gear/guitars', icon: '→' },
        ],
      },
      {
        heading: 'Amps & Effects',
        headingHref: ampsCat?.href ?? '/lessons/gear/amps',
        items: [
          { label: 'Tube Amps', href: '/lessons/gear/amps/tube' },
          { label: 'Solid-State Amps', href: '/lessons/gear/amps/solid-state' },
          { label: 'Modeling Amps', href: '/lessons/gear/amps/modeling' },
          { label: 'All Amps', href: '/lessons/gear/amps', icon: '→' },
          { label: 'Effects Pedals', href: '/lessons/gear/effects', icon: '→' },
        ],
      },
      {
        heading: 'Recording & More',
        items: [
          { label: 'Audio Interfaces', href: '/lessons/gear/recording/interfaces' },
          { label: 'Microphones', href: '/lessons/gear/recording/microphones' },
          { label: 'DAWs', href: '/lessons/gear/recording/daw' },
          { label: 'All Recording', href: recordingCat?.href ?? '/lessons/gear/recording', icon: '→' },
          { label: 'Accessories', href: accessoriesCat?.href ?? '/lessons/gear/accessories', icon: '→' },
        ],
      },
    ],
    featured: [
      { label: 'All Gear Guides', href: '/lessons/gear' },
    ],
  };

  return [theoryNav, songsNav, toolsNav, practiceNav, gearNav];
}

// Run single pass
const { index, songsList, navigationData } = buildContentIndex();

// Ensure output directory exists
const outDir = path.dirname(OUTPUT_FILE);
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(index, null, 2), 'utf-8');
console.log(`\nWritten to: ${OUTPUT_FILE}`);
console.log(`\nWritten content index to: ${OUTPUT_FILE}`);

fs.writeFileSync(SONGS_LIST_OUTPUT_FILE, JSON.stringify(songsList, null, 2), 'utf-8');
console.log(`Written songs list to: ${SONGS_LIST_OUTPUT_FILE}`);

fs.writeFileSync(NAVIGATION_OUTPUT_FILE, JSON.stringify(navigationData, null, 2), 'utf-8');
console.log(`Written navigation data to: ${NAVIGATION_OUTPUT_FILE}`);
