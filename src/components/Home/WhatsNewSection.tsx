'use client';

import React from 'react';
import Link from 'next/link';
import NewsletterSignup from '@/components/Revenue/NewsletterSignup';
import { getDifficultyColor } from '@/lib/utils';

interface NewSongSpotlight {
  slug: string;
  title: string;
  artist: string;
  year: string;
  genre: string;
  key: string;
  tempo: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  signatureTechnique: string;
  harmonicHook: string;
}

const LATEST_SONGS: NewSongSpotlight[] = [
  {
    slug: 'while-my-guitar-gently-weeps',
    title: 'While My Guitar Gently Weeps',
    artist: 'The Beatles',
    year: '1968',
    genre: 'Classic Rock',
    key: 'A Minor',
    tempo: '66 BPM',
    difficulty: 'Intermediate',
    signatureTechnique: 'Descending Line Cliché & Slow Blues Bends',
    harmonicHook: 'Descending chromatic bassline meeting an ecstatic parallel A Major bridge modulation.',
  },
  {
    slug: 'dont-look-back-in-anger',
    title: "Don't Look Back in Anger",
    artist: 'Oasis',
    year: '1995',
    genre: 'Britpop',
    key: 'C Major',
    tempo: '84 BPM',
    difficulty: 'Intermediate',
    signatureTechnique: 'Secondary Dominant E7 & Stadium Solo',
    harmonicHook: 'Major E7 secondary dominant (V of vi) paired with a tear-jerking borrowed minor iv (Fm).',
  },
  {
    slug: 'whats-my-scene',
    title: "What's My Scene",
    artist: 'Hoodoo Gurus',
    year: '1987',
    genre: 'Alternative Rock',
    key: 'E Major',
    tempo: '124 BPM',
    difficulty: 'Intermediate',
    signatureTechnique: 'Jangly Open-String Double-Stops',
    harmonicHook: 'Open pedal-point double stops with an ascending scalar chord walkup into the solo.',
  },
  {
    slug: 'the-wind-cries-mary',
    title: 'The Wind Cries Mary',
    artist: 'Jimi Hendrix',
    year: '1967',
    genre: 'Blues Rock',
    key: 'F Major',
    tempo: '80 BPM',
    difficulty: 'Intermediate',
    signatureTechnique: 'Thumb-Over Chords & Sliding Triads',
    harmonicHook: 'Parallel chromatic sliding triads (Eb -> E -> F) and delicate Curtis Mayfield-style R&B fills.',
  },
  {
    slug: 'plug-in-baby',
    title: 'Plug In Baby',
    artist: 'Muse',
    year: '2001',
    genre: 'Alternative Rock',
    key: 'B Minor',
    tempo: '136 BPM',
    difficulty: 'Advanced',
    signatureTechnique: 'B Harmonic Minor Alternate-Picked Arpeggios',
    harmonicHook: 'Neoclassical sweeps opening on the dominant F# with the exotic A# leading tone and gated fuzz.',
  },
];

export default function WhatsNewSection() {
  return (
    <section id="whats-new" className="py-20 bg-slate-100/70 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-3">
              <span>✨ Fresh in the Practice Room</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              What&apos;s New: 5 Masterclass Additions
            </h2>
            <p className="mt-2 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              Freshly transcribed, pedagogical breakdowns featuring interactive AlphaTab, Roman numeral harmonic theory, and dial-in tone stack presets.
            </p>
          </div>

          <Link
            href="/lessons/songs/song-analysis?sort=recent"
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors whitespace-nowrap self-start md:self-end hover:underline"
          >
            <span>View All Recently Added</span>
            <span>➔</span>
          </Link>
        </div>

        {/* 5 Song Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {LATEST_SONGS.map((song) => {
            const diffColor = getDifficultyColor(song.difficulty);
            return (
              <div
                key={song.slug}
                className="group relative flex flex-col justify-between bg-white dark:bg-slate-950 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:border-amber-500/50 dark:hover:border-amber-500/40 transition-all duration-300"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300 font-bold text-[11px] border border-amber-200 dark:border-amber-500/20">
                      <span>✨</span>
                      <span>JUST ADDED</span>
                    </span>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${diffColor}`}>
                      {song.difficulty}
                    </span>
                  </div>

                  {/* Title & Artist */}
                  <h3 className="text-xl font-black text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    <Link href={`/lessons/songs/song-analysis/${song.slug}`} className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {song.title}
                    </Link>
                  </h3>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1 mb-4">
                    {song.artist} • <span className="font-mono text-xs">{song.year}</span>
                  </p>

                  {/* Quick Meta Stats */}
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-slate-50 dark:bg-slate-900/80 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 mb-4">
                    <div>
                      <span className="text-slate-400 dark:text-slate-500 block text-[10px] uppercase font-sans font-bold">Key Center</span>
                      <span className="font-semibold">{song.key}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 dark:text-slate-500 block text-[10px] uppercase font-sans font-bold">Tempo</span>
                      <span className="font-semibold">{song.tempo}</span>
                    </div>
                  </div>

                  {/* Harmonic Hook */}
                  <div className="mb-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1">
                      💡 Why It Works:
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                      {song.harmonicHook}
                    </p>
                  </div>
                </div>

                {/* Footer Link & Technique Tag */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400 truncate max-w-[170px]" title={song.signatureTechnique}>
                    🎯 {song.signatureTechnique}
                  </span>
                  <span className="font-bold text-amber-600 dark:text-amber-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 shrink-0">
                    Practice Breakdown <span>➔</span>
                  </span>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Queued Up Newsletter CTA Card */}
          <div className="relative flex flex-col justify-between bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-950 text-white rounded-2xl p-6 border-2 border-amber-500/30 shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 -mr-6 -mt-6 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs uppercase tracking-wider mb-4 border border-amber-500/30">
                <span>📬</span>
                <span>Queued Up Newsletter</span>
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight mb-2">
                Get Every New Song & Tone Dial Free
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Join our free weekly newsletter. We curate new masterclasses, harmonic secret breakdowns, tone stack dial settings, and printable exercises directly to your inbox.
              </p>
            </div>

            <div className="relative z-10">
              <NewsletterSignup
                variant="inline"
                heading="Subscribe to Queued Up"
                subtext="Zero spam. Unsubscribe anytime."
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
