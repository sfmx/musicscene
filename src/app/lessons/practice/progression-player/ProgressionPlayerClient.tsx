'use client';

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProgressionJammer from '@/components/Tools/ProgressionJammer';
import GearRecommendations from '@/components/Revenue/GearRecommendations';
import AdSlot from '@/components/Revenue/AdSlot';

const jammerGearItems = [
  {
    category: 'Pedal',
    product: 'TC Electronic Ditto Looper Pedal',
    reason: 'The gold standard simple one-knob looper pedal for recording on-the-fly chord vamps and soloing over them without a computer.',
  },
  {
    category: 'Recording',
    product: 'Focusrite Scarlett 2i2 USB Audio Interface',
    reason: 'Crystal-clear guitar input preamps with ultra-low latency for jamming along to digital backing tracks and DAW setups.',
  },
  {
    category: 'Recording',
    product: 'Audio-Technica ATH-M50x Professional Monitor Headphones',
    reason: 'Accurate sonic frequency response and high isolation allowing you to hear every nuance of chord voice-leading and guitar tone.',
  },
];

export default function ProgressionPlayerClient() {
  const pathname = '/lessons/practice/progression-player';

  return (
    <Layout>
      <div className="min-h-screen bg-slate-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Breadcrumbs Navigation */}
          <Breadcrumbs pathname={pathname} pageTitle="Chord Progression Jam Player" />

          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
              Interactive Soloing Utility
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Guitar Chord Progression Jam Player
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              Play and loop iconic chord progressions in Blues, Rock, Jazz, and Pop. Dial in your BPM, sync with the metronome, and improvise with real-time scale recommendations.
            </p>
          </div>

          {/* Interactive Player Component */}
          <div className="shadow-2xl rounded-2xl">
            <ProgressionJammer />
          </div>

          {/* AdSense Placement */}
          <div className="my-8">
            <AdSlot slotId="practice-tool-jammer-mid" format="banner" />
          </div>

          {/* Educational Soloing Guide */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
            <div className="border-b border-slate-200 pb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                How to Solo Over Chord Progressions (Target Notes & Voice Leading)
              </h2>
              <p className="text-slate-600 mt-2 leading-relaxed">
                The difference between an amateur solo that sounds like random scale runs and a professional solo that sounds melodic and soulful is <strong>chord-tone targeting</strong>. By landing on chord tones as the harmony changes, your guitar speaks with authority and intent.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Concept 1 */}
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3">
                <div className="text-3xl">🎯</div>
                <h3 className="text-xl font-bold text-slate-900">1. Target the 3rd of Each Chord</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The 3rd is the emotional heart of any chord. When moving from C Major (root C, 3rd E, 5th G) to F Major (root F, 3rd A, 5th C), bending or resolving into the note <strong>A</strong> right as the F chord strikes immediately outlines the harmony to the listener.
                </p>
              </div>

              {/* Concept 2 */}
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3">
                <div className="text-3xl">⏳</div>
                <h3 className="text-xl font-bold text-slate-900">2. Leave Breathing Space</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Great soloists treat notes like words in a sentence. Play a short 3-note or 4-note motif, pause for a beat or two to let the backing track breathe, and then respond to your own idea (call and response phrasing).
                </p>
              </div>

              {/* Concept 3 */}
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3">
                <div className="text-3xl">🔄</div>
                <h3 className="text-xl font-bold text-slate-900">3. Blend Major & Minor in Blues</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  In a 12-bar blues, stick to the minor pentatonic over the IV and V chords (e.g., A7 and B7 in an E blues). But over the I chord (E7), sneak in the <strong>Major Pentatonic</strong> (notes E, F#, G#, B, C#) for that sweet B.B. King / Eric Clapton vocal cry.
                </p>
              </div>
            </div>

            {/* Step-by-Step Soloing Practice Workflow */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 sm:p-8 rounded-xl border border-blue-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Recommended 3-Step Practice Workflow
              </h3>
              <div className="space-y-3 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                    1
                  </span>
                  <div>
                    <strong>Listen to the loop first:</strong> Start the player at a relaxed tempo (75-85 BPM). Count &ldquo;1, 2, 3, 4&rdquo; and hum vocal melodies before touching your guitar.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                    2
                  </span>
                  <div>
                    <strong>Limit yourself to 3 notes:</strong> Choose just 3 adjacent notes from the recommended scale (for example, frets 5, 7, and 8 on the B string). Focus entirely on rhythm, groove, and bending dynamics.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                    3
                  </span>
                  <div>
                    <strong>Increase tempo by 5 BPM:</strong> Once your phrasing feels effortless and locked in with the metronome, nudge the BPM slider up to build speed without sacrificing timing.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Gear Recommendations with Affiliate Price Checks */}
          <GearRecommendations
            title="Recommended Gear for Jamming & Soloing Practice"
            items={jammerGearItems}
          />

          {/* Related Theory & Song Analysis Lessons */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Explore Essential Song & Theory Lessons</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href="/lessons/theory/progressions/"
                className="p-5 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all group"
              >
                <div className="text-2xl mb-2">🎼</div>
                <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Chord Progressions Guide
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  The harmonic mechanics behind ii-V-I, I-V-vi-IV, and the Blues.
                </p>
              </Link>
              <Link
                href="/lessons/songs/song-analysis/hotel-california/"
                className="p-5 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all group"
              >
                <div className="text-2xl mb-2">🎸</div>
                <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Hotel California Solo Breakdown
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  How Don Felder & Joe Walsh used chord-tone arpeggio targeting.
                </p>
              </Link>
              <Link
                href="/lessons/songs/song-analysis/sultans-of-swing/"
                className="p-5 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all group"
              >
                <div className="text-2xl mb-2">⚡</div>
                <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Sultans of Swing Analysis
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Mark Knopfler&apos;s clean fingerstyle triad fills over Dm-C-Bb.
                </p>
              </Link>
              <Link
                href="/lessons/practice/fretboard-trainer/"
                className="p-5 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all group"
              >
                <div className="text-2xl mb-2">🗺️</div>
                <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Fretboard Trainer Tool
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Map intervals and locate root notes across all 6 strings.
                </p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
