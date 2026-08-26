import type { Metadata } from 'next';
import { SITE_CONFIG } from './siteConfig';
import { getChordData } from './chordData';
import { getScaleData } from './scaleData';
import { getIntervalData } from './intervalData';
import { getModeData } from './modeData';
import { getProgressionData } from './progressionData';
import { getSongData } from './songData';
import { getPracticeData } from './practiceData';
import { getGearDetailData } from './gearLessonData';
import { getSongLessonDetailData } from './songLessonData';

// ── Helpers ──────────────────────────────────────────────────────────

function buildCanonicalUrl(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  const withSlash = clean.endsWith('/') ? clean : `${clean}/`;
  return `${SITE_CONFIG.baseUrl}${withSlash}`;
}

function buildMeta(
  title: string,
  description: string,
  url: string,
  keywords?: string[],
): Metadata {
  return {
    title,
    description,
    keywords: keywords?.join(', '),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      siteName: SITE_CONFIG.name,
      locale: 'en_US',
      images: [{ url: SITE_CONFIG.defaultOgImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

// ── Per-Content-Type Metadata Generators ─────────────────────────────

export function getChordMetadata(slug: string): Metadata {
  const data = getChordData(slug);
  if (!data) return { title: 'Chord Not Found' };

  const title = `${data.chordInfo.pageTitle} - Guitar Chord Theory`;
  const description = `Learn ${data.chordInfo.name} chords on guitar. ${data.chordInfo.subtitle}. Voicings, progressions, and practice exercises.`;
  const url = buildCanonicalUrl(`/lessons/theory/chords/${slug}`);
  return buildMeta(title, description, url, data.chordInfo.tags);
}

export async function getScaleMetadata(slug: string): Promise<Metadata> {
  const data = await getScaleData(slug);
  if (!data) return { title: 'Scale Not Found' };

  const title = `${data.scaleInfo.name} - Guitar Scale Guide`;
  const description = `Master the ${data.scaleInfo.name} on guitar. ${data.scaleInfo.character}. Fretboard patterns, exercises, and famous songs.`;
  const url = buildCanonicalUrl(`/lessons/theory/scales/${slug}`);
  return buildMeta(title, description, url, data.metadata.tags);
}

export function getIntervalMetadata(slug: string): Metadata {
  const data = getIntervalData(slug);
  if (!data) return { title: 'Interval Not Found' };

  const title = `${data.intervalInfo.pageTitle} - Music Intervals`;
  const description = `Understand the ${data.intervalInfo.name} interval on guitar. ${data.intervalInfo.subtitle}. Ear training, fretboard patterns, and exercises.`;
  const url = buildCanonicalUrl(`/lessons/theory/intervals/${slug}`);
  return buildMeta(title, description, url, data.intervalInfo.tags);
}

export function getModeMetadata(slug: string): Metadata {
  const data = getModeData(slug);
  if (!data) return { title: 'Mode Not Found' };

  const title = `${data.modeInfo.pageTitle} - Guitar Modes`;
  const description = `Learn the ${data.modeInfo.name} mode on guitar. ${data.modeInfo.subtitle}. Fretboard patterns, musical applications, and practice exercises.`;
  const url = buildCanonicalUrl(`/lessons/theory/modes/${slug}`);
  return buildMeta(title, description, url, data.modeInfo.tags);
}

export function getProgressionMetadata(slug: string): Metadata {
  const data = getProgressionData(slug);
  if (!data) return { title: 'Progression Not Found' };

  const title = `${data.progressionInfo.pageTitle} - Chord Progressions`;
  const description = `Master the ${data.progressionInfo.name} chord progression on guitar. ${data.progressionInfo.subtitle}. Theory, voicings, and practice exercises.`;
  const url = buildCanonicalUrl(`/lessons/theory/progressions/${slug}`);
  return buildMeta(title, description, url, data.progressionInfo.tags);
}

export function getSongAnalysisMetadata(slug: string): Metadata {
  const data = getSongData(slug);
  if (!data) return { title: 'Song Not Found' };

  const title = `${data.songInfo.title} by ${data.songInfo.artist} - Guitar Analysis`;
  const description = `Complete guitar analysis of "${data.songInfo.title}" by ${data.songInfo.artist}. Chords, techniques, tab breakdowns, and practice tips. ${data.difficulty.overall} difficulty.`;
  const url = buildCanonicalUrl(`/lessons/songs/song-analysis/${slug}`);
  const keywords = [
    data.songInfo.title,
    data.songInfo.artist,
    'guitar tab',
    'song analysis',
    data.songInfo.genre,
    ...(data.metadata?.tags ?? []),
  ];
  return buildMeta(title, description, url, keywords);
}

export function getPracticeMetadata(slug: string): Metadata {
  try {
    const data = getPracticeData(slug);
    const title = `${data.pageInfo.pageTitle} - Guitar Practice`;
    const description = `${data.pageInfo.heroDescription}`;
    const url = buildCanonicalUrl(`/lessons/practice/${data.category}/${slug}`);
    return buildMeta(title, description, url);
  } catch {
    return { title: 'Practice Exercise Not Found' };
  }
}

export function getGearLessonMetadata(key: string): Metadata {
  try {
    const data = getGearDetailData(key);
    const title = `${data.pageTitle} - Guitar Gear Guide`;
    const description = `${data.subtitle}. Expert guide to ${data.pageTitle.toLowerCase()} for guitarists.`;
    const url = buildCanonicalUrl(`/lessons/gear/${data.category}/${data.slug}`);
    return buildMeta(title, description, url);
  } catch {
    return { title: 'Gear Lesson Not Found' };
  }
}

export function getSongLessonMetadata(key: string): Metadata {
  try {
    const data = getSongLessonDetailData(key);
    const title = `${data.pageTitle} - Song Lessons`;
    const description = `${data.subtitle}. Learn ${data.pageTitle.toLowerCase()} techniques for guitar.`;
    const url = buildCanonicalUrl(`/lessons/songs/${data.category}/${data.slug}`);
    return buildMeta(title, description, url);
  } catch {
    return { title: 'Song Lesson Not Found' };
  }
}
