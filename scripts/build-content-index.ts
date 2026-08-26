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
    chordToSongs: Record<string, string[]>;
  };
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

function extractScaleSlug(scaleName: string): string | null {
  const lower = scaleName.toLowerCase().trim();
  const parts = lower.split(/\s+/);
  // Strip root note (e.g., "E", "C#", "Bb")
  if (/^[a-g][#b♯♭]?$/.test(parts[0])) {
    parts.shift();
  }
  const remainder = parts.join(' ');
  const SCALE_MAP: Record<string, string> = {
    'natural minor': 'minor',
    'minor': 'minor',
    'major': 'major',
    'minor pentatonic': 'minor-pentatonic',
    'major pentatonic': 'major-pentatonic',
    'pentatonic minor': 'minor-pentatonic',
    'pentatonic major': 'major-pentatonic',
    'blues': 'blues',
    'blues scale': 'blues',
    'harmonic minor': 'harmonic-minor',
    'dorian': 'dorian',
    'mixolydian': 'mixolydian',
    'aeolian': 'minor',
    'ionian': 'major',
  };
  return SCALE_MAP[remainder] ?? null;
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
    case 'chord': return `/lessons/theory/chords/${slug}`;
    case 'scale': return `/lessons/theory/scales/${slug}`;
    case 'interval': return `/lessons/theory/intervals/${slug}`;
    case 'mode': return `/lessons/theory/modes/${slug}`;
    case 'progression': return `/lessons/theory/progressions/${slug}`;
    case 'song-analysis': return `/lessons/songs/song-analysis/${slug}`;
    case 'practice': return `/lessons/practice/${category}/${slug}`;
    case 'gear-lesson': return `/lessons/gear/${category}/${slug}`;
    case 'song-lesson': return `/lessons/songs/${category}/${slug}`;
    default: return '/';
  }
}

// ---- Helpers ----

const DATA_DIR = path.resolve(__dirname, '..', 'src', 'data');
const OUTPUT_FILE = path.resolve(DATA_DIR, '_generated', 'content-index.json');

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
  crossRefs: {
    scaleToSongs: Record<string, string[]>;
    chordToSongs: Record<string, string[]>;
  };
}

function scanSongs(): SongScanResult {
  const dir = path.join(DATA_DIR, 'songs');
  const files = getJsonFiles(dir, ['_template', 'index']);
  const entries: ContentEntry[] = [];
  const scaleToSongs: Record<string, string[]> = {};
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

    // Extract cross-references: scales used in this song
    const scalesUsed = d.musicalAnalysis?.keyAndScale?.scalesUsed ?? [];
    for (const s of scalesUsed) {
      const scaleSlug = extractScaleSlug(s.scale ?? '');
      if (scaleSlug) {
        if (!scaleToSongs[scaleSlug]) scaleToSongs[scaleSlug] = [];
        if (!scaleToSongs[scaleSlug].includes(songId)) {
          scaleToSongs[scaleSlug].push(songId);
        }
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

  return { entries, crossRefs: { scaleToSongs, chordToSongs } };
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
      url: '/lessons/songs/analysis-method',
      tags: ['song-analysis', 'lesson', 'song-structure'],
    });
  }

  return entries;
}

// ---- Main ----

function buildContentIndex(): ContentIndex {
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
  console.log(`  Cross-refs: ${Object.keys(songResult.crossRefs.scaleToSongs).length} scales, ${Object.keys(songResult.crossRefs.chordToSongs).length} chord types`);

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

  return {
    generatedAt: new Date().toISOString(),
    entryCount: allEntries.length,
    entries: allEntries,
    tagIndex,
    crossReferences: songResult.crossRefs,
  };
}

// Run
const index = buildContentIndex();

// Ensure output directory exists
const outDir = path.dirname(OUTPUT_FILE);
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(index, null, 2), 'utf-8');
console.log(`\nWritten to: ${OUTPUT_FILE}`);
