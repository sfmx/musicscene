import { SITE_CONFIG } from './siteConfig';
import {
  getArticleJsonLd,
  getHowToJsonLd,
  getFAQPageJsonLd,
  getMusicCompositionJsonLd,
  HowToStepItem,
  FAQItem,
} from './jsonLd';
import type { ChordData } from './chordData';
import type { ScaleData } from './scaleData';
import type { ModeData } from './modeData';
import type { ProgressionData } from './progressionData';
import type { PracticeDetailData } from './practiceData';
import type { SongData } from './songData';

// ---------------------------------------------------------------------------
// Helper: clean and truncate text
// ---------------------------------------------------------------------------
function cleanText(text: string | undefined | null, fallback: string = ''): string {
  if (!text) return fallback;
  return text.replace(/<[^>]*>/g, '').trim() || fallback;
}

// ---------------------------------------------------------------------------
// 1. Chord Structured Data (Article + HowTo + FAQPage)
// ---------------------------------------------------------------------------
export function getChordPageJsonLd(chordData: ChordData, chordSlug: string): object[] {
  const url = `/lessons/theory/chords/${chordSlug}/`;
  const name = chordData.chordInfo.name;
  const subtitle = chordData.chordInfo.subtitle;

  const formula = chordData.theory.fundamentals?.find((f) => /formula/i.test(f.label))?.value || '1 - 3 - 5';
  const intervals = chordData.theory.fundamentals?.find((f) => /interval/i.test(f.label))?.value || 'root, third, fifth';
  const emotional = chordData.theory.fundamentals?.find((f) => /character|emotion|sound/i.test(f.label))?.value || 'distinct';
  const role = chordData.theory.applications?.find((a) => /role|function|usage/i.test(a.label))?.value || subtitle;

  const chordWord = /chords?$/i.test(name) ? '' : ' Chord';

  // Article
  const article = getArticleJsonLd({
    title: `${name}${chordWord} - Theory, Construction & Voicings`,
    description: subtitle,
    url,
  });

  // HowTo
  const voicingList = (chordData.voicingGroups || [])
    .flatMap((g) => g.voicings.map((v) => v.name))
    .slice(0, 4)
    .join(', ');

  const progressionList = (chordData.progressions?.items || [])
    .map((p) => p.title)
    .slice(0, 3)
    .join(', ');

  const steps: HowToStepItem[] = [
    {
      name: `Understand the ${name} Formula`,
      text: `A ${name} chord is constructed using the formula ${formula} comprising intervals: ${intervals}. It delivers a ${emotional} sonic texture.`,
    },
    {
      name: 'Master Essential Guitar Voicings',
      text: voicingList
        ? `Learn and memorize common open and movable barre voicings including: ${voicingList}. Ensure fingers are curled on their tips for clarity.`
        : `Practice the primary open and barre fingerings for ${name}, ensuring clean note articulation without string buzz.`,
    },
    {
      name: 'Practice in Musical Chord Progressions',
      text: progressionList
        ? `Incorporate ${name} into rhythm progressions such as: ${progressionList}. Focus on smooth, efficient finger movement during transitions.`
        : `Integrate ${name} into rhythmic chord vamps to develop muscle memory and timing.`,
    },
    {
      name: 'Refine Finger Position & Strumming Balance',
      text: `Keep the fretting thumb aligned behind the guitar neck. Strum across the strings with balanced dynamics, muting unplayed strings with adjacent finger pads.`,
    },
  ];

  const howTo = getHowToJsonLd({
    title: `How to Play the ${name} Chord on Guitar`,
    description: `Learn how to construct, finger, and master the ${name} chord on guitar across open and barre positions.`,
    url,
    tool: ['Acoustic or Electric Guitar', 'Guitar Pick'],
    steps,
  });

  // FAQPage
  const famousSongsList = (chordData.famousSongs?.categories || [])
    .flatMap((cat) => cat.songs)
    .slice(0, 5)
    .join(', ');

  const questions: FAQItem[] = [
    {
      question: `What notes and formula make up a ${name} chord?`,
      answer: `The ${name} chord is built from the formula ${formula}, containing intervals ${intervals}.`,
    },
    {
      question: `What is the musical function and sound of a ${name} chord?`,
      answer: `${role}. In songwriting, it produces a ${emotional} mood.`,
    },
    {
      question: `How do you finger the ${name} chord cleanly on guitar?`,
      answer: `Position fretting fingers directly behind the frets on their tips, maintain an arched wrist, and strum each string individually to verify every note rings clear.`,
    },
  ];

  if (famousSongsList) {
    questions.push({
      question: `What famous songs feature the ${name} chord?`,
      answer: `Notable songs featuring the ${name} chord include: ${famousSongsList}.`,
    });
  }

  const faqPage = getFAQPageJsonLd({ questions, url });

  return [article, howTo, faqPage];
}

// ---------------------------------------------------------------------------
// 2. Scale Structured Data (Article + HowTo + FAQPage)
// ---------------------------------------------------------------------------
export function getScalePageJsonLd(scaleData: ScaleData, scaleSlug: string): object[] {
  const url = `/lessons/theory/scales/${scaleSlug}/`;
  const name = scaleData.scaleInfo.name;
  const mood = scaleData.scaleInfo.mood?.join(', ') || 'expressive';
  const pattern = scaleData.scaleInfo.intervalPattern || 'scale intervals';

  // Article
  const article = getArticleJsonLd({
    title: `${name} - Guitar Scale Patterns, Intervals & Solos`,
    description: `${scaleData.scaleInfo.character} scale with ${scaleData.scaleInfo.noteCount} notes. Fretboard diagrams, interval formulas, and guitar solo exercises.`,
    url,
  });

  // HowTo
  const steps: HowToStepItem[] = [
    {
      name: 'Memorize the Scale Interval Formula',
      text: `The ${name} scale consists of ${scaleData.scaleInfo.noteCount} notes following the pattern: ${pattern}. It creates ${mood} musical expressions.`,
    },
    {
      name: 'Practice the 5 Fretboard Box Positions',
      text: `Learn the 5 movable box patterns across the guitar neck. Begin in position 1 using alternate picking with a metronome at a relaxed tempo.`,
    },
    {
      name: 'Harmonize with Diatonic Chords',
      text: `Connect the scale notes to its underlying diatonic chords. Practice playing arpeggios of the chords within each scale pattern to visualize harmony.`,
    },
    {
      name: 'Improvise and Target Characteristic Notes',
      text: `Solo over backing tracks by resolving musical phrases onto root notes and characteristic chord tones to create melodic phrasing.`,
    },
  ];

  const howTo = getHowToJsonLd({
    title: `How to Play and Practice the ${name} on Guitar`,
    description: `Master the ${name} across all fretboard positions with note patterns, interval formulas, and soloing techniques.`,
    url,
    tool: ['Guitar', 'Metronome'],
    steps,
  });

  // FAQPage
  const famousSongsList = (scaleData.famousSongs || [])
    .map((s) => `${s.title} (${s.artist})`)
    .slice(0, 5)
    .join(', ');

  const questions: FAQItem[] = [
    {
      question: `What is the interval formula for the ${name}?`,
      answer: `The ${name} is a ${scaleData.scaleInfo.noteCount}-note scale built on the interval pattern ${pattern}, evoking a ${scaleData.scaleInfo.character} mood (${mood}).`,
    },
    {
      question: `How should I practice the ${name} on guitar?`,
      answer: `Practice each of the 5 fretboard patterns ascending and descending with strict alternate picking. Focus on clean articulation, rhythm accuracy, and fret hand positioning.`,
    },
    {
      question: `What chords work best for soloing with the ${name}?`,
      answer: `The scale harmonizes naturally over its diatonic chords and modal progressions, making it ideal for solos that highlight its characteristic intervals.`,
    },
  ];

  if (famousSongsList) {
    questions.push({
      question: `What famous songs use the ${name}?`,
      answer: `Well-known songs that feature the ${name} include: ${famousSongsList}.`,
    });
  }

  const faqPage = getFAQPageJsonLd({ questions, url });

  return [article, howTo, faqPage];
}

// ---------------------------------------------------------------------------
// 3. Mode Structured Data (Article + HowTo + FAQPage)
// ---------------------------------------------------------------------------
export function getModePageJsonLd(modeData: ModeData, modeSlug: string): object[] {
  const url = `/lessons/theory/modes/${modeSlug}/`;
  const name = modeData.modeInfo.name;
  const subtitle = modeData.modeInfo.subtitle;

  const formulaProp = modeData.theory.properties?.find((p) => /formula/i.test(p.label))?.value || 'diatonic modal structure';
  const characteristic = modeData.theory.properties?.find((p) => /characteristic|sound|flavor/i.test(p.label))?.value || subtitle;

  // Article
  const article = getArticleJsonLd({
    title: `${name} Mode - Guitar Modal Theory & Fretboard Shapes`,
    description: subtitle,
    url,
  });

  // HowTo
  const steps: HowToStepItem[] = [
    {
      name: 'Identify the Modal Formula & Characteristic Note',
      text: `The ${name} mode is defined by the formula ${formulaProp}. Identify the unique characteristic interval that sets it apart from the parallel major or minor scale.`,
    },
    {
      name: 'Map Modal Fretboard Positions',
      text: `Practice the primary modal shapes across all 6 strings. Anchor your fretting hand around tonic root notes on the 6th and 5th strings.`,
    },
    {
      name: 'Jam Over Modal Chord Vamps',
      text: `Play modal progressions that emphasize the tonic chord without allowing harmonic resolution back to the relative parent major key.`,
    },
    {
      name: 'Accentuate Characteristic Color Notes',
      text: `When soloing, land on the characteristic modal interval during strong beats over the primary vamp chord to showcase the mode's distinctive flavor.`,
    },
  ];

  const howTo = getHowToJsonLd({
    title: `How to Play and Solo in the ${name} Mode on Guitar`,
    description: `Master the ${name} mode on guitar with fretboard patterns, modal chord progressions, and characteristic note soloing.`,
    url,
    tool: ['Guitar', 'Backing Track Player'],
    steps,
  });

  // FAQPage
  const famousExamples = [
    ...(modeData.musicalExamples?.classic || []),
    ...(modeData.musicalExamples?.modern || []),
  ];
  const famousList = famousExamples
    .map((e) => `${e.title}${e.detail ? ` (${e.detail})` : ''}`)
    .slice(0, 5)
    .join(', ');

  const questions: FAQItem[] = [
    {
      question: `What is the ${name} mode and what is its formula?`,
      answer: `The ${name} mode is a musical mode constructed with the formula ${formulaProp}. ${subtitle}.`,
    },
    {
      question: `What gives the ${name} mode its unique sonic character?`,
      answer: `${characteristic}. In guitar improvisation, it creates an evocative atmosphere without relying on standard major or minor cadences.`,
    },
    {
      question: `How do you write or jam over a ${name} chord progression?`,
      answer: `Create a two- or three-chord vamp centered on the tonic chord that incorporates the chord highlighting the mode's characteristic note, avoiding strong dominant-to-tonic cadence resolution.`,
    },
  ];

  if (famousList) {
    questions.push({
      question: `What famous songs are written in the ${name} mode?`,
      answer: `Iconic songs utilizing the ${name} mode include: ${famousList}.`,
    });
  }

  const faqPage = getFAQPageJsonLd({ questions, url });

  return [article, howTo, faqPage];
}

// ---------------------------------------------------------------------------
// 4. Progression Structured Data (Article + HowTo + FAQPage)
// ---------------------------------------------------------------------------
export function getProgressionPageJsonLd(progressionData: ProgressionData, progressionSlug: string): object[] {
  const url = `/lessons/theory/progressions/${progressionSlug}/`;
  const name = progressionData.progressionInfo.name;
  const subtitle = progressionData.progressionInfo.subtitle;

  const romanNumeralProp = progressionData.theory.properties?.find((p) => /numeral|formula|pattern/i.test(p.label))?.value || name;

  // Article
  const article = getArticleJsonLd({
    title: `${name} - Guitar Chord Progression Analysis & Lessons`,
    description: subtitle,
    url,
  });

  // HowTo
  const steps: HowToStepItem[] = [
    {
      name: 'Learn the Harmonic Roman Numeral Sequence',
      text: `The ${name} progression follows the harmonic movement: ${romanNumeralProp}. Understand the tonic, subdominant, and dominant functions of each chord.`,
    },
    {
      name: 'Master Fundamental Chord Shapes',
      text: `Learn both open and movable barre chord shapes for each chord in the sequence to allow flexible transposition across different keys.`,
    },
    {
      name: 'Lock In Rhythmic Strumming',
      text: `Practice with a steady groove, maintaining consistent down-up strumming motions and smooth finger transitions on the measure downbeats.`,
    },
    {
      name: 'Solo and Improvise Over the Changes',
      text: `Target the root and third of each chord as the harmony moves through ${romanNumeralProp}, blending pentatonic and diatonic scales.`,
    },
  ];

  const howTo = getHowToJsonLd({
    title: `How to Play the ${name} Chord Progression on Guitar`,
    description: `Step-by-step guitar guide for playing, transposing, and soloing over the ${name} chord progression.`,
    url,
    tool: ['Guitar', 'Metronome'],
    steps,
  });

  // FAQPage
  const examplesList = [
    ...(progressionData.musicalExamples?.left?.examples || []),
    ...(progressionData.musicalExamples?.right?.examples || []),
  ]
    .map((s) => `${s.title}${s.detail ? ` (${s.detail})` : ''}`)
    .slice(0, 5)
    .join(', ');

  const questions: FAQItem[] = [
    {
      question: `What chords make up the ${name} progression?`,
      answer: `The progression follows the sequence ${romanNumeralProp}. ${subtitle}.`,
    },
    {
      question: `Why is the ${name} chord progression so effective?`,
      answer: `It establishes compelling harmonic tension and satisfying resolution, creating a familiar and musical foundation across countless genres.`,
    },
    {
      question: `How do you transpose ${name} to different keys?`,
      answer: `Assign the Roman numerals (${romanNumeralProp}) to the scale degrees of your target key to calculate the corresponding major and minor chords.`,
    },
  ];

  if (examplesList) {
    questions.push({
      question: `What famous songs use the ${name} chord progression?`,
      answer: `Notable songs that utilize this progression include: ${examplesList}.`,
    });
  }

  const faqPage = getFAQPageJsonLd({ questions, url });

  return [article, howTo, faqPage];
}

// ---------------------------------------------------------------------------
// 5. Practice Structured Data (Article + HowTo + FAQPage)
// ---------------------------------------------------------------------------
export function getPracticePageJsonLd(practiceData: PracticeDetailData, practiceSlug: string): object[] {
  const url = `/lessons/practice/${practiceData.category}/${practiceSlug}/`;
  const heroTitle = practiceData.pageInfo.heroTitle;
  const description = cleanText(practiceData.pageInfo.heroDescription, practiceData.pageInfo.subtitle);

  // Article
  const article = getArticleJsonLd({
    title: `${heroTitle} - Guitar Practice Drill & Routine`,
    description,
    url,
  });

  // HowTo: Extract steps from sections/exercises
  const exercises = (practiceData.sections || []).flatMap((s) => s.exercises || []);
  const steps: HowToStepItem[] = exercises.slice(0, 6).map((ex, i) => ({
    name: ex.numberText ? `${ex.numberText}: ${ex.title || `Exercise ${i + 1}`}` : (ex.title || `Exercise ${i + 1}`),
    text: cleanText(ex.description, `Perform exercise ${i + 1} with clean fretting and relaxed posture.`) +
      (ex.practiceNotes?.tempo ? ` (Target Tempo: ${ex.practiceNotes.tempo})` : ''),
  }));

  // Ensure at least 3 steps
  if (steps.length < 3) {
    steps.push({
      name: 'Warm Up with Slow Repetitions',
      text: 'Begin the routine at a relaxed tempo, focusing on finger accuracy and zero extraneous string noise.',
    });
    steps.push({
      name: 'Gradually Increase Metronome Speed',
      text: 'Increase the metronome tempo by 4-5 BPM once you can execute 4 consecutive measures without error.',
    });
  }

  const howTo = getHowToJsonLd({
    title: `How to Practice: ${heroTitle}`,
    description,
    url,
    tool: ['Guitar', 'Metronome'],
    totalTime: 'PT15M',
    steps,
  });

  // FAQPage
  const questions: FAQItem[] = [
    {
      question: `What is the objective of the ${heroTitle} routine?`,
      answer: description,
    },
    {
      question: `How fast should I practice these exercises?`,
      answer: `Start at a slow tempo where you can play with 100% accuracy and minimal physical tension. Only increase speed once timing and clean fretting are locked in.`,
    },
    {
      question: `How often should I practice this guitar routine?`,
      answer: `Dedicate 10 to 15 minutes daily during your warmup or practice block. Consistent daily repetitions build muscle memory and finger independence significantly faster than marathon weekly sessions.`,
    },
  ];

  const faqPage = getFAQPageJsonLd({ questions, url });

  return [article, howTo, faqPage];
}

// ---------------------------------------------------------------------------
// 6. Song Analysis Structured Data (MusicComposition + Article + FAQPage)
// ---------------------------------------------------------------------------
export function getSongPageJsonLd(songData: SongData, songSlug: string): object[] {
  const url = `/lessons/songs/song-analysis/${songSlug}/`;
  const title = songData.songInfo.title;
  const artist = songData.songInfo.artist;
  const key = songData.musicalAnalysis?.keyAndScale?.primaryKey || songData.songInfo.key || 'Standard Key';
  const tempo = songData.songInfo.tempo || 'Standard Tempo';
  const tuning = songData.songInfo.tuning || 'Standard (EADGBE)';

  // MusicComposition
  const composition = getMusicCompositionJsonLd({
    title,
    artist,
    album: songData.songInfo.album,
    genre: songData.songInfo.genre,
    musicalKey: key,
    timeRequired: songData.songInfo.duration,
    url,
  });

  // Article
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `"${title}" by ${artist} - Complete Guitar Analysis & Breakdown`,
    description: `Learn how to play and analyze "${title}" by ${artist}. Note-for-note AlphaTab breakdown, chord progressions, scales, techniques, and guitar tone analysis.`,
    author: {
      '@type': 'Person',
      name: 'Jason Smith',
      jobTitle: 'Founder & Lead Instructor',
      url: `${SITE_CONFIG.baseUrl}/about/`,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.baseUrl}${SITE_CONFIG.defaultOgImage}`,
      },
    },
    mainEntityOfPage: `${SITE_CONFIG.baseUrl}${url}`,
  };

  // FAQPage
  const scalesUsedList = (songData.musicalAnalysis?.keyAndScale?.scalesUsed || [])
    .map((s) => s.scale)
    .filter(Boolean)
    .join(', ');

  const mainProg = songData.musicalAnalysis?.chordProgressions?.mainProgression;
  const progDesc = mainProg?.description || (mainProg?.chords ? mainProg.chords.join(' - ') : null);

  const questions: FAQItem[] = [
    {
      question: `What key and tempo is "${title}" by ${artist}?`,
      answer: `"${title}" is in the musical key of ${key} with a recorded tempo of ${tempo}.`,
    },
    {
      question: `What guitar tuning is used on "${title}"?`,
      answer: `"${title}" is played in ${tuning}.`,
    },
  ];

  if (scalesUsedList) {
    questions.push({
      question: `What scales are used to solo in "${title}"?`,
      answer: `The lead guitar work and solos in "${title}" utilize: ${scalesUsedList}.`,
    });
  }

  if (progDesc) {
    questions.push({
      question: `What chords and progressions are in "${title}"?`,
      answer: `The primary chord progression in "${title}" is: ${progDesc}.`,
    });
  }

  const faqPage = getFAQPageJsonLd({ questions, url });

  return [composition, article, faqPage];
}
