"use client";

import React from 'react';
import Link from 'next/link';

export default function WhySongsWorkSpotlight() {
  const highlights = [
    {
      title: 'Hotel California',
      artist: 'Eagles',
      category: 'Modal Mixture',
      categoryColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      key: 'B minor',
      device: 'Andalusian Cadence & Harmonic Minor V',
      summary: 'The iconic 8-chord intro borrows the major F# chord from B harmonic minor, inserting the sharp 7th (A#) to build haunting Spanish tension over a chromatic walking bassline.',
      progression: 'Bm - F# - A - E - G - D - Em - F#',
      slug: 'hotel-california',
    },
    {
      title: "Sweet Child O' Mine",
      artist: "Guns N' Roses",
      category: 'Mixolydian Swagger',
      categoryColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      key: 'D Mixolydian',
      device: 'The Flat-VII Rock Revolution',
      summary: 'Slash eliminates the stiff classical leading tone by using a flat-VII (C major) chord in the key of D, giving the iconic arpeggiated intro its effortless, swaggering rock propulsion.',
      progression: 'D - C - G - D (I - bVII - IV - I)',
      slug: 'sweet-child-o-mine',
    },
    {
      title: 'Comfortably Numb',
      artist: 'Pink Floyd',
      category: 'Key Modulation',
      categoryColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      key: 'B minor ➔ D Major',
      device: 'Psychological Verse-Chorus Shift',
      summary: 'The cold, isolated B minor verse shifts into a radiant D major chorus to mirror childhood memory, culminating in David Gilmour’s masterclass in chord-tone targeted phrasing.',
      progression: 'Verse: Bm - A - G | Chorus: D - A - C - G',
      slug: 'comfortably-numb',
    },
    {
      title: 'Sultans of Swing',
      artist: 'Dire Straits',
      category: 'Triad Voice Leading',
      categoryColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      key: 'D minor',
      device: 'Harmonic Minor A7 Turnaround',
      summary: 'Mark Knopfler moves beyond standard minor pentatonic boxes by outlining compact triads on the top 3 strings, locking directly into the flamenco-flavored A7 turnaround chord.',
      progression: 'Dm - C - Bb - A7 (i - VII - VI - V7)',
      slug: 'sultans-of-swing',
    },
    {
      title: 'Black Hole Sun',
      artist: 'Soundgarden',
      category: 'Borrowed Minor iv',
      categoryColor: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
      key: 'G Major',
      device: 'Beatlesque Chromatic Melancholia',
      summary: 'Chris Cornell inserts a borrowed minor iv chord (Fm in the key of G major), creating a bittersweet half-step descent (Ab to G) that defines the song’s psychedelic grunge gravity.',
      progression: 'G - Bb - F - Fm (I - bIII - bVII - iv)',
      slug: 'black-hole-sun',
    },
    {
      title: 'Wish You Were Here',
      artist: 'Pink Floyd',
      category: 'Pedal Tone Drones',
      categoryColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      key: 'G Major',
      device: 'Anchored 3rd-Fret Resonance',
      summary: 'High G and D notes on the 1st and 2nd strings remain locked down throughout the entire acoustic intro, creating shimmering harmonic continuity while the bass strings move underneath.',
      progression: 'Em7 - G - Em7 - G - Em7 - A7sus4 - G',
      slug: 'wish-you-were-here',
    },
  ];

  return (
    <section className="py-20 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">
              <span>💡 Harmonic Masterclasses</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              Why These Songs Sound So Good
            </h2>
            <p className="mt-2 text-base sm:text-lg text-slate-400 max-w-2xl">
              Ever get goosebumps from a chord change? We dissect the psychological and theoretical mechanisms behind guitar music&apos;s greatest moments.
            </p>
          </div>

          <Link
            href="/lessons/songs/why-songs-work"
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors whitespace-nowrap self-start md:self-end hover:underline"
          >
            <span>Explore All Harmonic Breakdowns</span>
            <span>➔</span>
          </Link>
        </div>

        {/* 6-Card Spotlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div
              key={item.slug}
              className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Category Pill & Key */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${item.categoryColor}`}>
                    {item.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {item.key}
                  </span>
                </div>

                {/* Song & Artist */}
                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-slate-400 mb-3">
                  by {item.artist}
                </p>

                {/* Specific Device Callout */}
                <div className="text-xs font-bold text-amber-400 mb-2">
                  ⚡ {item.device}
                </div>

                {/* Progression Bar */}
                <div className="font-mono text-xs text-slate-300 bg-slate-950 p-2.5 rounded-lg border border-slate-800 mb-3.5">
                  {item.progression}
                </div>

                {/* Summary Explanation */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              {/* Action Link */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <Link
                  href={`/lessons/songs/song-analysis/${item.slug}/#why-it-works`}
                  className="text-xs font-bold text-amber-400 group-hover:text-amber-300 inline-flex items-center gap-1 hover:underline"
                >
                  <span>Read Full Harmonic Breakdown</span>
                  <span>➔</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
