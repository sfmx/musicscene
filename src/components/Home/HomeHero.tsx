"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getAllSongs } from '@/lib/songList';
import { getDifficultyColor } from '@/lib/utils';

export interface HeroSongCard {
  slug: string;
  title: string;
  artist: string;
  year: string;
  key: string;
  tempo: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  genre: string;
  badge: string;
  badgeColor: string;
  technique: string;
  secretHook: string;
  tabDisplay: string;
}

export interface HeroToolCard {
  id: string;
  title: string;
  badge: string;
  badgeColor: string;
  icon: string;
  description: string;
  highlights: string[];
  href: string;
  ctaText: string;
  buttonColor: string;
}

export type VibeTabType = 'favorites' | 'new' | 'beginner' | 'hardrock' | 'blues' | 'aussie' | 'tools';

// 1. ALL-TIME FAN FAVORITES (8 Songs)
const FAN_FAVORITE_SONGS: HeroSongCard[] = [
  {
    slug: 'hotel-california',
    title: 'Hotel California',
    artist: 'Eagles',
    year: '1976',
    key: 'B Minor',
    tempo: '75 BPM',
    difficulty: 'Advanced',
    genre: 'Classic Rock',
    badge: '🔥 FAN FAVORITE',
    badgeColor: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30',
    technique: 'Dual Harmony Solo & 12-String Arpeggios',
    secretHook: 'Major V (F#) borrowed from B Harmonic Minor creates the haunting Andalusian line cliché.',
    tabDisplay: 'Bm ➔ F# ➔ A ➔ E ➔ G ➔ D ➔ Em ➔ F#7',
  },
  {
    slug: 'back-in-black',
    title: 'Back in Black',
    artist: 'AC/DC',
    year: '1980',
    key: 'E Major',
    tempo: '93 BPM',
    difficulty: 'Intermediate',
    genre: 'Hard Rock',
    badge: '🔥 FAN FAVORITE',
    badgeColor: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30',
    technique: 'Downstroke Power Chords & Blues Pull-Offs',
    secretHook: 'Flattened ♭VII (D5) and IV (A5) rock cadence driving pure arena rock swagger.',
    tabDisplay: 'E5 ➔ D5 ➔ A5 (♭VII - IV Cadence)',
  },
  {
    slug: 'comfortably-numb',
    title: 'Comfortably Numb',
    artist: 'Pink Floyd',
    year: '1979',
    key: 'Bm / D Major',
    tempo: '63 BPM',
    difficulty: 'Advanced',
    genre: 'Prog Rock',
    badge: '🔥 FAN FAVORITE',
    badgeColor: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30',
    technique: 'David Gilmour 1.5-Step Singing Vibrato',
    secretHook: 'Gloomy B minor verse shifts to radiant D major chorus, delivering epic cinematic relief.',
    tabDisplay: 'Bm ➔ A ➔ G ➔ Em | D ➔ A ➔ G',
  },
  {
    slug: 'sultans-of-swing',
    title: 'Sultans of Swing',
    artist: 'Dire Straits',
    year: '1978',
    key: 'D Minor',
    tempo: '148 BPM',
    difficulty: 'Advanced',
    genre: 'Classic Rock',
    badge: '🔥 FAN FAVORITE',
    badgeColor: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30',
    technique: 'Fingerstyle Clawhammer & Rapid Triads',
    secretHook: 'Knopfler outlines diatonic triads with bare fingers, hitting C# on A7 from D Harmonic Minor.',
    tabDisplay: 'Dm ➔ C ➔ Bb ➔ A7 (Fingerstyle Run)',
  },
  {
    slug: 'sweet-child-o-mine',
    title: "Sweet Child O' Mine",
    artist: "Guns N' Roses",
    year: '1987',
    key: 'D Mixolydian',
    tempo: '128 BPM',
    difficulty: 'Advanced',
    genre: 'Hard Rock',
    badge: '🔥 FAN FAVORITE',
    badgeColor: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30',
    technique: 'String-Skipping Arpeggios & Wah Bends',
    secretHook: 'Flattened 7th (C Major) eliminates classical leading tension in favor of blues-rock strut.',
    tabDisplay: 'D ➔ C (♭VII) ➔ G (IV) ➔ D',
  },
  {
    slug: 'bohemian-rhapsody',
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    year: '1975',
    key: 'Bb / Eb Major',
    tempo: '72 BPM',
    difficulty: 'Advanced',
    genre: 'Prog Rock',
    badge: '🔥 FAN FAVORITE',
    badgeColor: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30',
    technique: 'Multi-Track Orchestration & Operatic Shifts',
    secretHook: 'Multisection operatic modulation moving from tender ballad to operatic hard rock fury.',
    tabDisplay: 'Bb ➔ Gm ➔ Cm7 ➔ F7 ➔ Dm ➔ Gm',
  },
  {
    slug: 'little-wing',
    title: 'Little Wing',
    artist: 'Jimi Hendrix',
    year: '1967',
    key: 'G Major / Em',
    tempo: '71 BPM',
    difficulty: 'Advanced',
    genre: 'Blues Rock',
    badge: '🔥 FAN FAVORITE',
    badgeColor: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30',
    technique: 'Thumb-Fretted Chords & Double-Stop Fills',
    secretHook: 'Continuous rhythm embellishments and hybrid modal chord substitution over walking bass.',
    tabDisplay: 'Em ➔ G ➔ Am ➔ Em ➔ Bm ➔ Am',
  },
  {
    slug: 'black-dog',
    title: 'Black Dog',
    artist: 'Led Zeppelin',
    year: '1971',
    key: 'A Mixolydian',
    tempo: '82 BPM',
    difficulty: 'Advanced',
    genre: 'Hard Rock',
    badge: '🔥 FAN FAVORITE',
    badgeColor: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30',
    technique: 'Polymetric Syncopation & String Bends',
    secretHook: 'Syncopated riff in shifting time signatures over John Bonham’s driving 4/4 backbeat.',
    tabDisplay: 'A5 ➔ E5 ➔ D5 (Polymetric Riff)',
  },
];

// 2. FRESH JUST ADDED (5 Songs)
const NEW_ADDITIONS_SONGS: HeroSongCard[] = [
  {
    slug: 'while-my-guitar-gently-weeps',
    title: 'While My Guitar Gently Weeps',
    artist: 'The Beatles (feat. Clapton)',
    year: '1968',
    key: 'A Minor',
    tempo: '66 BPM',
    difficulty: 'Intermediate',
    genre: 'Classic Rock',
    badge: '✨ JUST ADDED',
    badgeColor: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30',
    technique: 'Descending Line Cliché & Soulful Bends',
    secretHook: 'Mournful chromatic bass descent (A -> G -> F# -> F) meets radiant parallel A Major bridge.',
    tabDisplay: 'Am ➔ Am/G ➔ Am/F# ➔ Fmaj7',
  },
  {
    slug: 'dont-look-back-in-anger',
    title: "Don't Look Back in Anger",
    artist: 'Oasis',
    year: '1995',
    key: 'C Major',
    tempo: '84 BPM',
    difficulty: 'Intermediate',
    genre: 'Britpop',
    badge: '✨ JUST ADDED',
    badgeColor: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30',
    technique: 'Secondary Dominant E7 & Stadium Solo',
    secretHook: 'Major E7 (V/vi) injects sharp G# leading tone, paired with borrowed minor iv (Fm) in pre-chorus.',
    tabDisplay: 'C ➔ G ➔ Am ➔ E7 ➔ F ➔ Fm',
  },
  {
    slug: 'whats-my-scene',
    title: "What's My Scene",
    artist: 'Hoodoo Gurus',
    year: '1987',
    key: 'E Major',
    tempo: '124 BPM',
    difficulty: 'Intermediate',
    genre: 'Alt Rock',
    badge: '✨ JUST ADDED',
    badgeColor: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30',
    technique: 'Jangly Open-String Double Stops',
    secretHook: 'High double-stop chime over open E drones, building with an ascending scalar chord walkup.',
    tabDisplay: 'E ➔ B ➔ A ➔ B (Pedal Tone Chime)',
  },
  {
    slug: 'the-wind-cries-mary',
    title: 'The Wind Cries Mary',
    artist: 'Jimi Hendrix',
    year: '1967',
    key: 'F Major',
    tempo: '80 BPM',
    difficulty: 'Intermediate',
    genre: 'Blues Rock',
    badge: '✨ JUST ADDED',
    badgeColor: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30',
    technique: 'Thumb-Fretted Chords & Sliding Triads',
    secretHook: 'Parallel chromatic sliding triads (Eb -> E -> F) and delicate Curtis Mayfield R&B fills.',
    tabDisplay: 'Eb ➔ E ➔ F ➔ C ➔ Bb',
  },
  {
    slug: 'plug-in-baby',
    title: 'Plug In Baby',
    artist: 'Muse',
    year: '2001',
    key: 'B Minor',
    tempo: '136 BPM',
    difficulty: 'Advanced',
    genre: 'Alt Rock',
    badge: '✨ JUST ADDED',
    badgeColor: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30',
    technique: 'B Harmonic Minor Arpeggio Sweeps',
    secretHook: 'Riff opens on dominant F# with exotic A# leading tone before detonating into gated fuzz power chords.',
    tabDisplay: 'F# ➔ G ➔ D ➔ A ➔ Bm',
  },
];

// 3. BEGINNER FRIENDLY FIRST SONGS (4 Songs)
const BEGINNER_SONGS: HeroSongCard[] = [
  {
    slug: 'knockin-on-heavens-door',
    title: "Knockin' on Heaven's Door",
    artist: 'Bob Dylan',
    year: '1973',
    key: 'G Major',
    tempo: '68 BPM',
    difficulty: 'Beginner',
    genre: 'Folk Rock',
    badge: '🌱 EASY START',
    badgeColor: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30',
    technique: 'Relaxed Cowboy Chords & Steady Strumming',
    secretHook: 'Simple cyclic alternating cadence (G - D - Am7 then G - D - C) that feels endlessly resolving.',
    tabDisplay: 'G ➔ D ➔ Am7 | G ➔ D ➔ C',
  },
  {
    slug: 'wish-you-were-here',
    title: 'Wish You Were Here',
    artist: 'Pink Floyd',
    year: '1975',
    key: 'G Major',
    tempo: '60 BPM',
    difficulty: 'Beginner',
    genre: 'Classic Rock',
    badge: '🌱 EASY START',
    badgeColor: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30',
    technique: 'Anchor Fingers on High E & B Strings',
    secretHook: 'Rhythm guitar locks fingers 3 and 4 at the 3rd fret while the bass notes outline folk movement.',
    tabDisplay: 'Em7 ➔ G ➔ Em7 ➔ G ➔ Em7 ➔ A7sus4',
  },
  {
    slug: 'wonderwall',
    title: 'Wonderwall',
    artist: 'Oasis',
    year: '1995',
    key: 'Em / G Major',
    tempo: '87 BPM',
    difficulty: 'Beginner',
    genre: 'Britpop',
    badge: '🌱 EASY START',
    badgeColor: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30',
    technique: 'Fixed High D & G Pedals With 16th Strum',
    secretHook: 'Permanent ringing pedal tones on strings 1 & 2 transform basic cowboy chords into shimmering anthems.',
    tabDisplay: 'Em7 ➔ G ➔ Dsus4 ➔ A7sus4',
  },
  {
    slug: 'to-her-door',
    title: 'To Her Door',
    artist: 'Paul Kelly',
    year: '1987',
    key: 'G Major',
    tempo: '108 BPM',
    difficulty: 'Beginner',
    genre: 'Folk Rock',
    badge: '🌱 EASY START',
    badgeColor: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-amber-500/30',
    technique: 'Open Cowboy Chords & Storytelling Pulse',
    secretHook: 'The definitive demonstration of standard diatonic I-IV-V chord movements supporting narrative lyrics.',
    tabDisplay: 'G ➔ C ➔ D ➔ Em',
  },
];

// 4. HARD ROCK & METAL RIFFS (4 Songs)
const HARD_ROCK_SONGS: HeroSongCard[] = [
  {
    slug: 'enter-sandman',
    title: 'Enter Sandman',
    artist: 'Metallica',
    year: '1991',
    key: 'E Minor',
    tempo: '123 BPM',
    difficulty: 'Intermediate',
    genre: 'Heavy Metal',
    badge: '⚡ RIFF HEAVY',
    badgeColor: 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/30',
    technique: 'Tritone Flatted 5th & Palm-Muted Chug',
    secretHook: 'Dissonant flatted 5th (B♭) creates ominous tension before detonating into driving open E5 chords.',
    tabDisplay: 'E5 ➔ F5 ➔ Bb5 (Tritone Riff)',
  },
  {
    slug: 'crazy-train',
    title: 'Crazy Train',
    artist: 'Ozzy Osbourne (Randy Rhoads)',
    year: '1980',
    key: 'F# Minor',
    tempo: '138 BPM',
    difficulty: 'Advanced',
    genre: 'Heavy Metal',
    badge: '⚡ RIFF HEAVY',
    badgeColor: 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/30',
    technique: 'F# Natural Minor Alternate Picking Riff',
    secretHook: 'Neoclassical pedal-point riffing alternating between root F# and ascending diatonic scalar notes.',
    tabDisplay: 'F#m ➔ D ➔ E (Pedal Point Riff)',
  },
  {
    slug: 'sweet-child-o-mine',
    title: "Sweet Child O' Mine",
    artist: "Guns N' Roses",
    year: '1987',
    key: 'D Mixolydian',
    tempo: '128 BPM',
    difficulty: 'Advanced',
    genre: 'Hard Rock',
    badge: '⚡ RIFF HEAVY',
    badgeColor: 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/30',
    technique: 'String-Skipping Arpeggios & Wah Bends',
    secretHook: 'Flattened 7th (C Major) eliminates classical leading tension in favor of blues-rock strut.',
    tabDisplay: 'D ➔ C (♭VII) ➔ G (IV) ➔ D',
  },
  {
    slug: 'plug-in-baby',
    title: 'Plug In Baby',
    artist: 'Muse',
    year: '2001',
    key: 'B Minor',
    tempo: '136 BPM',
    difficulty: 'Advanced',
    genre: 'Alt Rock',
    badge: '⚡ RIFF HEAVY',
    badgeColor: 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/30',
    technique: 'B Harmonic Minor Arpeggio Sweeps',
    secretHook: 'Riff opens on dominant F# with exotic A# leading tone before detonating into gated fuzz power chords.',
    tabDisplay: 'F# ➔ G ➔ D ➔ A ➔ Bm',
  },
];

// 5. HENDRIX & BLUES MASTERY (4 Songs)
const BLUES_SONGS: HeroSongCard[] = [
  {
    slug: 'little-wing',
    title: 'Little Wing',
    artist: 'Jimi Hendrix',
    year: '1967',
    key: 'G Major / Em',
    tempo: '71 BPM',
    difficulty: 'Advanced',
    genre: 'Blues Rock',
    badge: '🎸 BLUES & HENDRIX',
    badgeColor: 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/30',
    technique: 'Thumb-Fretted Chords & Double-Stop Fills',
    secretHook: 'Continuous rhythm embellishments and hybrid modal chord substitution over walking bass.',
    tabDisplay: 'Em ➔ G ➔ Am ➔ Em ➔ Bm ➔ Am',
  },
  {
    slug: 'the-wind-cries-mary',
    title: 'The Wind Cries Mary',
    artist: 'Jimi Hendrix',
    year: '1967',
    key: 'F Major',
    tempo: '80 BPM',
    difficulty: 'Intermediate',
    genre: 'Blues Rock',
    badge: '🎸 BLUES & HENDRIX',
    badgeColor: 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/30',
    technique: 'Thumb-Fretted Chords & Sliding Triads',
    secretHook: 'Parallel chromatic sliding triads (Eb -> E -> F) and delicate Curtis Mayfield R&B fills.',
    tabDisplay: 'Eb ➔ E ➔ F ➔ C ➔ Bb',
  },
  {
    slug: 'pride-and-joy',
    title: 'Pride and Joy',
    artist: 'Stevie Ray Vaughan',
    year: '1983',
    key: 'Eb Blues',
    tempo: '126 BPM',
    difficulty: 'Advanced',
    genre: 'Texas Blues',
    badge: '🎸 BLUES & HENDRIX',
    badgeColor: 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/30',
    technique: 'Texas Shuffle Muted Strum & Rake Bends',
    secretHook: 'Percussive constant-motion pick strokes muting unwanted strings while punching explosive accent notes.',
    tabDisplay: 'E7 ➔ A7 ➔ B7 (Texas Shuffle)',
  },
  {
    slug: 'crossroads',
    title: 'Crossroads',
    artist: 'Cream (Eric Clapton)',
    year: '1968',
    key: 'A Blues',
    tempo: '132 BPM',
    difficulty: 'Advanced',
    genre: 'Blues Rock',
    badge: '🎸 BLUES & HENDRIX',
    badgeColor: 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/30',
    technique: 'Delta Blues Riffing in 12-Bar Rock Shuffle',
    secretHook: 'Robert Johnson’s Mississippi Delta blues reimagined with aggressive Marshall tube saturation and pentatonic speed.',
    tabDisplay: 'A7 ➔ D7 ➔ E7 (Rockin’ 12-Bar)',
  },
];

// 6. AUSSIE CLASSICS (4 Songs)
const AUSSIE_CLASSICS_SONGS: HeroSongCard[] = [
  {
    slug: 'whats-my-scene',
    title: "What's My Scene",
    artist: 'Hoodoo Gurus',
    year: '1987',
    key: 'E Major',
    tempo: '124 BPM',
    difficulty: 'Intermediate',
    genre: 'Aussie Rock',
    badge: '🇦🇺 AUSSIE ANTHEM',
    badgeColor: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30',
    technique: 'Jangly Open-String Double Stops',
    secretHook: 'High double-stop chime over open E drones, building with an ascending scalar chord walkup.',
    tabDisplay: 'E ➔ B ➔ A ➔ B (Aussie Power-Pop)',
  },
  {
    slug: 'back-in-black',
    title: 'Back in Black',
    artist: 'AC/DC',
    year: '1980',
    key: 'E Major',
    tempo: '93 BPM',
    difficulty: 'Intermediate',
    genre: 'Hard Rock',
    badge: '🇦🇺 AUSSIE ANTHEM',
    badgeColor: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30',
    technique: 'Downstroke Power Chords & Blues Pull-Offs',
    secretHook: 'Angus Young’s iconic ♭VII and IV rock cadence driving pure arena rock swagger.',
    tabDisplay: 'E5 ➔ D5 ➔ A5 (The Ultimate Rock Trio)',
  },
  {
    slug: 'beds-are-burning',
    title: 'Beds Are Burning',
    artist: 'Midnight Oil',
    year: '1987',
    key: 'E Minor',
    tempo: '118 BPM',
    difficulty: 'Intermediate',
    genre: 'Pub Rock',
    badge: '🇦🇺 AUSSIE ANTHEM',
    badgeColor: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30',
    technique: 'Driving Syncopated Rhythms & Brass Stabs',
    secretHook: 'Political powerhouse with driving horn-line guitar emulation and sharp syncopation.',
    tabDisplay: 'Em ➔ G ➔ D ➔ C (Anthemic Drive)',
  },
  {
    slug: 'to-her-door',
    title: 'To Her Door',
    artist: 'Paul Kelly',
    year: '1987',
    key: 'G Major',
    tempo: '108 BPM',
    difficulty: 'Beginner',
    genre: 'Folk Rock',
    badge: '🇦🇺 AUSSIE ANTHEM',
    badgeColor: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30',
    technique: 'Open Cowboy Chords & Steady Strumming',
    secretHook: 'Australian storytelling masterpiece demonstrating the narrative power of I-IV-V folk chord architecture.',
    tabDisplay: 'G ➔ C ➔ D ➔ Em (Classic Folk Strum)',
  },
];

// 7. AUDIO PRACTICE TOOLS (4 Interactive Suites)
const AUDIO_PRACTICE_TOOLS: HeroToolCard[] = [
  {
    id: 'fretboard-trainer',
    title: 'Fretboard Note Hunt',
    badge: '🎮 Interactive Game',
    badgeColor: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30',
    icon: '🎯',
    description: 'Master all 15 frets with interactive WebAudio note synthesis, timed challenges, and victory fanfare.',
    highlights: ['15-Fret Board', 'Real-Time Audio', 'Timed Accuracy Game'],
    href: '/lessons/practice/fretboard-trainer',
    ctaText: 'Play Note Hunt ➔',
    buttonColor: 'bg-emerald-600 hover:bg-emerald-500 text-white',
  },
  {
    id: 'circle-of-fifths',
    title: 'Circle of Fifths Studio',
    badge: '🔄 Playable Strums',
    badgeColor: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/30',
    icon: '🔄',
    description: 'Interactive SVG harmonic wheel with instant guitar chord strums, relative keys, and cadence loop player.',
    highlights: ['7-Chord Families', 'Key Signatures', 'Audio Strum Loops'],
    href: '/lessons/practice/circle-of-fifths',
    ctaText: 'Open Circle Studio ➔',
    buttonColor: 'bg-amber-500 hover:bg-amber-400 text-slate-950 font-black',
  },
  {
    id: 'caged-system',
    title: 'CAGED Visualizer',
    badge: '🎸 5 Movable Shapes',
    badgeColor: 'bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/30',
    icon: '🎸',
    description: 'Connect open grips (C-A-G-E-D) to movable pentatonic boxes across the neck with triad inversion inspector.',
    highlights: ['16-Fret Neck', 'Pentatonic Overlays', 'Triad Inversions'],
    href: '/lessons/practice/caged-system',
    ctaText: 'Master CAGED ➔',
    buttonColor: 'bg-rose-600 hover:bg-rose-500 text-white',
  },
  {
    id: 'fretboard-cheat-sheet',
    title: 'Printable Fretboard Guide',
    badge: '📄 Free 3-Page PDF',
    badgeColor: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/30',
    icon: '📄',
    description: 'Crisp 300 DPI desk reference with all note positions, scale patterns, and Roman numeral reference chart.',
    highlights: ['300 DPI High-Res', 'Instant Download', 'Zero Spam / Free'],
    href: '/downloads/fretboard-cheat-sheet',
    ctaText: 'Download Free PDF ➔',
    buttonColor: 'bg-blue-600 hover:bg-blue-500 text-white',
  },
];

// OPTION 1: QUICK JUMP HUB TILES DATA
const QUICK_JUMP_TILES = [
  {
    title: 'Song Masterclasses',
    count: '226 Songs',
    icon: '🎸',
    tag: 'Tabs + Theory',
    description: 'Deconstruct iconic songs with interactive AlphaTab and harmonic secrets.',
    href: '/lessons/songs/song-analysis',
    accent: 'hover:border-amber-500/60 hover:shadow-amber-500/10',
  },
  {
    title: 'Fretboard Note Hunt',
    count: 'Audio Game',
    icon: '🎯',
    tag: '15 Frets',
    description: 'Playable WebAudio game to locate any note across the neck with speed scoring.',
    href: '/lessons/practice/fretboard-trainer',
    accent: 'hover:border-emerald-500/60 hover:shadow-emerald-500/10',
  },
  {
    title: 'Circle of Fifths',
    count: 'Chord Strums',
    icon: '🔄',
    tag: 'Diatonic Audio',
    description: 'Interactive SVG wheel to audition chord families, relative minors, and key modulations.',
    href: '/lessons/practice/circle-of-fifths',
    accent: 'hover:border-amber-500/60 hover:shadow-amber-500/10',
  },
  {
    title: 'CAGED Visualizer',
    count: '5 Shapes',
    icon: '🎸',
    tag: 'Full Neck',
    description: 'Link open chord grips to movable pentatonic boxes and triad inversions.',
    href: '/lessons/practice/caged-system',
    accent: 'hover:border-rose-500/60 hover:shadow-rose-500/10',
  },
  {
    title: 'Fretboard PDF',
    count: '3-Page Desk Ref',
    icon: '📄',
    tag: 'Free Download',
    description: 'Printable 300 DPI cheat sheet with notes, chord formulas, and scale diagrams.',
    href: '/downloads/fretboard-cheat-sheet',
    accent: 'hover:border-blue-500/60 hover:shadow-blue-500/10',
  },
];

const QUICK_SEARCH_PILLS = [
  { label: "Don't Look Back in Anger", query: "Don't Look Back in Anger" },
  { label: 'Hotel California', query: 'Hotel California' },
  { label: 'While My Guitar Gently Weeps', query: 'While My Guitar Gently Weeps' },
  { label: 'Hendrix', query: 'Hendrix' },
  { label: 'Back in Black', query: 'Back in Black' },
  { label: 'Hoodoo Gurus', query: 'Hoodoo Gurus' },
  { label: 'Pink Floyd', query: 'Pink Floyd' },
  { label: 'Muse', query: 'Muse' },
];

const ICONIC_ARTISTS = [
  'The Beatles',
  'Oasis',
  'Pink Floyd',
  'AC/DC',
  'Jimi Hendrix',
  'Queen',
  'Led Zeppelin',
  'Hoodoo Gurus',
  'Dire Straits',
  'Muse',
  'Cold Chisel',
  'Eagles',
  'Fleetwood Mac',
  'Nirvana',
  'Green Day',
  'Radiohead',
];

export default function HomeHero() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<VibeTabType>('favorites');
  const [pageIndex, setPageIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const allSongs = useMemo(() => getAllSongs(), []);

  // Filter songs live for the search bar dropdown
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return allSongs
      .filter((song) => {
        return (
          song.title.toLowerCase().includes(q) ||
          song.artist.toLowerCase().includes(q) ||
          song.key.toLowerCase().includes(q) ||
          song.genre.toLowerCase().includes(q) ||
          song.techniques.some((t) => t.toLowerCase().includes(q))
        );
      })
      .slice(0, 6);
  }, [allSongs, searchQuery]);

  const handlePillClick = (query: string) => {
    setSearchQuery(query);
    const match = allSongs.find(
      (s) => s.title.toLowerCase() === query.toLowerCase() || s.artist.toLowerCase().includes(query.toLowerCase())
    );
    if (match) {
      router.push(`/lessons/songs/song-analysis/${match.slug}`);
    }
  };

  // Get active items and pagination
  const currentSongDataset = useMemo(() => {
    switch (activeTab) {
      case 'favorites':
        return FAN_FAVORITE_SONGS;
      case 'new':
        return NEW_ADDITIONS_SONGS;
      case 'beginner':
        return BEGINNER_SONGS;
      case 'hardrock':
        return HARD_ROCK_SONGS;
      case 'blues':
        return BLUES_SONGS;
      case 'aussie':
        return AUSSIE_CLASSICS_SONGS;
      default:
        return [];
    }
  }, [activeTab]);

  const totalPages = Math.ceil(currentSongDataset.length / 4);
  const displayedSongs = currentSongDataset.slice(pageIndex * 4, pageIndex * 4 + 4);

  const handleTabChange = (tab: VibeTabType) => {
    setActiveTab(tab);
    setPageIndex(0);
  };

  const handleNextPage = () => {
    setPageIndex((prev) => (prev + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setPageIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="relative bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white pt-4 pb-10 sm:pt-6 sm:pb-12 border-b border-slate-200 dark:border-slate-800 transition-colors overflow-hidden">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_10%,_var(--tw-gradient-stops))] from-amber-500/25 via-blue-600/10 dark:via-purple-950 to-transparent" />
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 -right-24 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* COMPACT HERO HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-4">
          
          {/* Catalog Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-amber-600 dark:text-amber-300 shadow-2xs mb-2.5">
            <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
            <span>Interactive Guitar Masterclass Library</span>
            <span className="text-slate-400 dark:text-slate-500">•</span>
            <span className="text-slate-700 dark:text-slate-300 font-bold">226 Iconic Breakdowns & Audio Tools</span>
          </div>

          {/* Compact Main Headline */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight text-slate-900 dark:text-white">
            Stop Memorizing Tabs.{' '}
            <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 dark:from-amber-400 dark:via-orange-300 dark:to-yellow-200 bg-clip-text text-transparent">
              Start Understanding Music.
            </span>
          </h1>

          {/* 1-Line Value Proposition */}
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl mx-auto leading-relaxed">
            Deconstruct 226+ iconic songs with interactive audio tabs, uncover harmonic secrets behind legendary riffs, and train your ears with gamified practice tools.
          </p>

          {/* Hero Live Search Engine */}
          <div className="relative max-w-xl mx-auto mt-3">
            <div className="relative flex items-center">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 text-sm">
                🔍
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                placeholder="Search 226+ songs, artists, or tools... (e.g. Oasis, Beatles, Hotel California)"
                className="w-full pl-9 pr-8 py-2 bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm font-medium shadow-xs focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-white text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Instant Live Dropdown */}
            {isSearchFocused && searchResults.length > 0 && (
              <div className="absolute z-30 left-0 right-0 mt-1.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden divide-y divide-slate-100 dark:divide-slate-800 text-left">
                <div className="px-3.5 py-1.5 bg-slate-50 dark:bg-slate-950 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex justify-between items-center">
                  <span>Matching Songs & Breakdowns ({searchResults.length})</span>
                  <span className="text-[10px] text-amber-600 dark:text-amber-400">Click to Practice</span>
                </div>
                {searchResults.map((song) => {
                  const diffColor = getDifficultyColor(song.difficulty);
                  return (
                    <Link
                      key={song.slug}
                      href={`/lessons/songs/song-analysis/${song.slug}`}
                      className="flex items-center justify-between p-2.5 hover:bg-amber-50/60 dark:hover:bg-slate-800/80 transition-colors group"
                      onClick={() => setIsSearchFocused(false)}
                    >
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                          {song.title}
                        </p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          {song.artist} • <span className="font-mono">{song.key}</span>
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${diffColor}`}>
                          {song.difficulty}
                        </span>
                        <span className="text-amber-600 dark:text-amber-400 text-xs">➔</span>
                      </div>
                    </Link>
                  );
                })}
                <div className="p-2 bg-slate-50 dark:bg-slate-950 text-center">
                  <Link
                    href="/lessons/songs/song-analysis"
                    className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline"
                  >
                    View All 226 Songs in Directory ➔
                  </Link>
                </div>
              </div>
            )}

            {/* Quick Trending Filter Pills */}
            <div className="flex items-center justify-center gap-1.5 flex-wrap pt-2 text-[11px]">
              <span className="text-slate-500 dark:text-slate-400 font-semibold mr-0.5">Trending:</span>
              {QUICK_SEARCH_PILLS.map((pill) => (
                <button
                  key={pill.label}
                  onClick={() => handlePillClick(pill.query)}
                  className="px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-400 text-[11px] font-medium transition-all shadow-2xs hover:scale-105 active:scale-95 cursor-pointer"
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* PATTERN 3: "NEW HERE? CHOOSE YOUR LEARNING PATHWAY" ONBOARDING DOCK       */}
        {/* ========================================================================= */}
        <div className="mt-4 mb-4 bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 sm:p-3.5 backdrop-blur-md shadow-2xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2.5">
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                <span>🎯</span>
                <span>New Here? Choose Your Learning Goal:</span>
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full lg:w-auto">
              <button
                onClick={() => handleTabChange('tools')}
                className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 text-xs font-bold transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <span>🎮</span>
                <span className="truncate">Memorize Fretboard</span>
              </button>

              <button
                onClick={() => handleTabChange('favorites')}
                className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 hover:border-amber-500 text-slate-800 dark:text-slate-200 hover:text-amber-600 dark:hover:text-amber-400 text-xs font-bold transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <span>💡</span>
                <span className="truncate">Unlock Song Theory</span>
              </button>

              <button
                onClick={() => handleTabChange('beginner')}
                className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 hover:border-blue-500 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 text-xs font-bold transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <span>🌱</span>
                <span className="truncate">Play Easy Songs</span>
              </button>

              <Link
                href="/downloads/fretboard-cheat-sheet"
                className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 hover:border-purple-500 text-slate-800 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 text-xs font-bold transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <span>📄</span>
                <span className="truncate">Free Desk PDF</span>
              </Link>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PATTERN 1: "QUICK JUMP HUB" 5-TILE CORE DESTINATION DOCK                 */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 mb-5">
          {QUICK_JUMP_TILES.map((tile) => (
            <Link
              key={tile.title}
              href={tile.href}
              className={`group flex flex-col justify-between p-3 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-2xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 ${tile.accent}`}
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span className="text-xl sm:text-2xl">{tile.icon}</span>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                    {tile.tag}
                  </span>
                </div>
                <h3 className="font-black text-xs sm:text-sm text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-1">
                  {tile.title}
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2 leading-snug">
                  {tile.description}
                </p>
              </div>

              <div className="pt-2 mt-1 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-bold text-amber-600 dark:text-amber-400">
                <span>{tile.count}</span>
                <span className="group-hover:translate-x-1 transition-transform">➔</span>
              </div>
            </Link>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* PATTERN 2: "EXPLORE BY VIBE & LEVEL" PILLS + 4-CARD LIVE CONTENT MATRIX   */}
        {/* ========================================================================= */}
        <div className="mt-2">
          
          {/* Filter Pills Bar & Shelf Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 pb-3 border-b border-slate-200 dark:border-slate-800">
            
            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-bold w-full sm:w-auto overflow-x-auto">
              
              <button
                onClick={() => handleTabChange('favorites')}
                className={`py-1.5 px-2.5 rounded-lg transition-all text-xs font-bold whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'favorites'
                    ? 'bg-amber-500 text-slate-950 shadow-xs font-black'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>🔥</span>
                <span>All-Time Hits</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/10 dark:bg-white/10">8</span>
              </button>

              <button
                onClick={() => handleTabChange('new')}
                className={`py-1.5 px-2.5 rounded-lg transition-all text-xs font-bold whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'new'
                    ? 'bg-amber-500 text-slate-950 shadow-xs font-black'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>✨</span>
                <span>5 Just Added</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 font-black">New</span>
              </button>

              <button
                onClick={() => handleTabChange('beginner')}
                className={`py-1.5 px-2.5 rounded-lg transition-all text-xs font-bold whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'beginner'
                    ? 'bg-amber-500 text-slate-950 shadow-xs font-black'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>🌱</span>
                <span>Beginner Friendly</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/10 dark:bg-white/10">4</span>
              </button>

              <button
                onClick={() => handleTabChange('hardrock')}
                className={`py-1.5 px-2.5 rounded-lg transition-all text-xs font-bold whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'hardrock'
                    ? 'bg-amber-500 text-slate-950 shadow-xs font-black'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>⚡</span>
                <span>Hard Rock & Metal</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/10 dark:bg-white/10">4</span>
              </button>

              <button
                onClick={() => handleTabChange('blues')}
                className={`py-1.5 px-2.5 rounded-lg transition-all text-xs font-bold whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'blues'
                    ? 'bg-amber-500 text-slate-950 shadow-xs font-black'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>🎸</span>
                <span>Hendrix & Blues</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/10 dark:bg-white/10">4</span>
              </button>

              <button
                onClick={() => handleTabChange('aussie')}
                className={`py-1.5 px-2.5 rounded-lg transition-all text-xs font-bold whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'aussie'
                    ? 'bg-amber-500 text-slate-950 shadow-xs font-black'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>🇦🇺</span>
                <span>Aussie Rock</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/10 dark:bg-white/10">4</span>
              </button>

              <button
                onClick={() => handleTabChange('tools')}
                className={`py-1.5 px-2.5 rounded-lg transition-all text-xs font-bold whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'tools'
                    ? 'bg-blue-600 text-white shadow-xs font-black'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>🎯</span>
                <span>Audio Tools</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20">4</span>
              </button>
            </div>

            {/* Pagination Controls & Catalog Link */}
            <div className="flex items-center gap-3 shrink-0 text-xs">
              {activeTab !== 'tools' && totalPages > 1 && (
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-500 dark:text-slate-400 text-[11px] font-mono">
                    Page {pageIndex + 1} of {totalPages}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={handlePrevPage}
                      className="p-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500 text-slate-700 dark:text-slate-300 hover:text-amber-600 text-xs font-bold shadow-2xs cursor-pointer transition-all active:scale-95"
                      aria-label="Previous Songs"
                    >
                      ◀
                    </button>
                    <button
                      onClick={handleNextPage}
                      className="p-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500 text-slate-700 dark:text-slate-300 hover:text-amber-600 text-xs font-bold shadow-2xs cursor-pointer transition-all active:scale-95"
                      aria-label="Next Songs"
                    >
                      ▶
                    </button>
                  </div>
                </div>
              )}

              <Link
                href="/lessons/songs/song-analysis"
                className="font-bold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1"
              >
                <span>All 226 Songs</span>
                <span>➔</span>
              </Link>
            </div>

          </div>

          {/* 4-CARD SIDE-BY-SIDE VISUAL GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            
            {/* VIEW 1: SONG MASTERCLASS CARDS */}
            {activeTab !== 'tools' &&
              displayedSongs.map((song) => {
                const diffColor = getDifficultyColor(song.difficulty);
                return (
                  <div
                    key={song.slug}
                    className="relative flex flex-col justify-between bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm hover:shadow-xl hover:border-amber-500/50 dark:hover:border-amber-500/40 transition-all duration-200 group"
                  >
                    <div>
                      {/* Top Bar: Badge & Difficulty */}
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border ${song.badgeColor}`}>
                          {song.badge}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${diffColor}`}>
                          {song.difficulty}
                        </span>
                      </div>

                      {/* Song Title & Artist */}
                      <h3 className="font-black text-slate-900 dark:text-white text-base group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-1">
                        <Link href={`/lessons/songs/song-analysis/${song.slug}`} className="focus:outline-none">
                          {song.title}
                        </Link>
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-3 truncate">
                        {song.artist} • <span className="font-mono">{song.year}</span>
                      </p>

                      {/* Key & Tempo Pill */}
                      <div className="grid grid-cols-3 gap-1 py-1.5 px-2 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 text-[11px] font-mono text-center mb-3">
                        <div>
                          <span className="text-[9px] uppercase font-sans font-bold text-slate-400 dark:text-slate-500 block">Key</span>
                          <span className="font-bold text-slate-900 dark:text-slate-200 truncate block">{song.key}</span>
                        </div>
                        <div>
                          <span className="text-[9px] uppercase font-sans font-bold text-slate-400 dark:text-slate-500 block">Tempo</span>
                          <span className="font-bold text-slate-900 dark:text-slate-200 truncate block">{song.tempo}</span>
                        </div>
                        <div>
                          <span className="text-[9px] uppercase font-sans font-bold text-slate-400 dark:text-slate-500 block">Genre</span>
                          <span className="font-bold text-slate-700 dark:text-slate-300 truncate block">{song.genre}</span>
                        </div>
                      </div>

                      {/* Harmonic Engine Preview */}
                      <div className="bg-amber-500/5 dark:bg-slate-950 p-2.5 rounded-xl border border-amber-500/20 mb-3.5">
                        <div className="font-mono text-[10px] sm:text-[11px] font-bold text-amber-900 dark:text-amber-300 truncate mb-1">
                          {song.tabDisplay}
                        </div>
                        <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug line-clamp-2">
                          <span className="font-bold text-amber-600 dark:text-amber-400">💡 Why It Works: </span>
                          {song.secretHook}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Action Button */}
                    <div className="pt-1">
                      <Link
                        href={`/lessons/songs/song-analysis/${song.slug}`}
                        className="w-full py-2.5 px-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl text-center text-xs shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98] inline-flex items-center justify-center gap-1.5"
                      >
                        <span>Practice Breakdown</span>
                        <span>➔</span>
                      </Link>
                    </div>
                  </div>
                );
              })}

            {/* VIEW 2: AUDIO PRACTICE TOOLS CARDS */}
            {activeTab === 'tools' &&
              AUDIO_PRACTICE_TOOLS.map((tool) => (
                <div
                  key={tool.id}
                  className="relative flex flex-col justify-between bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm hover:shadow-xl hover:border-amber-500/50 dark:hover:border-amber-500/40 transition-all duration-200 group"
                >
                  <div>
                    {/* Top Bar: Icon & Badge */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="text-2xl">{tool.icon}</span>
                      <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border ${tool.badgeColor}`}>
                        {tool.badge}
                      </span>
                    </div>

                    {/* Tool Title */}
                    <h3 className="font-black text-slate-900 dark:text-white text-base group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors mb-2">
                      <Link href={tool.href} className="focus:outline-none">
                        {tool.title}
                      </Link>
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3 line-clamp-2">
                      {tool.description}
                    </p>

                    {/* Feature Highlights */}
                    <div className="space-y-1.5 bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 mb-3.5">
                      {tool.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-600 dark:text-slate-300">
                          <span className="text-emerald-500 font-bold">✓</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Button */}
                  <div className="pt-1">
                    <Link
                      href={tool.href}
                      className={`w-full py-2.5 px-3 rounded-xl text-center text-xs shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98] inline-flex items-center justify-center gap-1.5 font-bold ${tool.buttonColor}`}
                    >
                      <span>{tool.ctaText}</span>
                    </Link>
                  </div>
                </div>
              ))}

          </div>

        </div>

        {/* ========================================================================= */}
        {/* ARTIST QUICK-ACCESS MARQUEE RIBBON                                       */}
        {/* ========================================================================= */}
        <div className="mt-6 pt-3.5 border-t border-slate-200 dark:border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-2">
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              ⚡ Iconic Song Breakdowns by:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {ICONIC_ARTISTS.map((artist) => (
              <button
                key={artist}
                onClick={() => handlePillClick(artist)}
                className="px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px] font-medium text-slate-700 dark:text-slate-300 hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50/50 dark:hover:bg-slate-800 transition-all shadow-2xs hover:scale-105 active:scale-95 cursor-pointer"
              >
                {artist}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
