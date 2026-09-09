import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Layout from '@/components/Layout';
import HomeHero from '@/components/Home/HomeHero';
import InteractiveToolsSection from '@/components/Home/InteractiveToolsSection';
import HomeSongExplorer from '@/components/Home/HomeSongExplorer';
import WhySongsWorkSpotlight from '@/components/Home/WhySongsWorkSpotlight';
import TheoryCurriculumSection from '@/components/Home/TheoryCurriculumSection';

export const metadata: Metadata = {
  title: 'MusicScene — Stop Memorizing Tabs. Start Understanding Music.',
  description: 'Bridge the gap between mechanical guitar tabs and abstract theory. 107+ iconic song analyses, interactive fretboard trainer & note hunt, progression jam player, and free printable fretboard cheat sheet.',
  openGraph: {
    title: 'MusicScene — Stop Memorizing Tabs. Start Understanding Music.',
    description: 'Bridge the gap between guitar tabs and music theory. 107+ song breakdowns, interactive fretboard tools, and free cheat sheet.',
    url: 'https://musicscene.com.au',
    siteName: 'MusicScene',
    images: [
      {
        url: 'https://musicscene.com.au/images/og-default.png',
        width: 1200,
        height: 630,
        alt: 'MusicScene Guitar Learning Platform',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MusicScene — Stop Memorizing Tabs. Start Understanding Music.',
    description: '107+ song breakdowns, interactive fretboard note hunt game, progression jam player, and free cheat sheet.',
    images: ['https://musicscene.com.au/images/og-default.png'],
  },
};

export default function HomePage() {
  return (
    <Layout>
      <div className="bg-slate-950 min-h-screen text-slate-100">
        {/* 1. Hero Section: The Tab vs. Theory Bridge */}
        <HomeHero />

        {/* 2. Interactive Practice Tools Suite Showcase */}
        <InteractiveToolsSection />

        {/* 3. Direct Song Analysis Library & Interactive Search/Filter Engine */}
        <HomeSongExplorer />

        {/* 4. "Why Songs Work" Curated Harmonic Secrets Spotlight */}
        <WhySongsWorkSpotlight />

        {/* 5. Music Theory Curriculum Matrix */}
        <TheoryCurriculumSection />

        {/* 6. Final Conversion & Practice CTA */}
        <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden border-t border-slate-800">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 mb-6 inline-block">
              Start Your Fretboard Transformation
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6">
              Ready to Understand What You Play?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Join thousands of guitarists learning how iconic songs really work. Jump into our interactive tools, search 100+ song breakdowns, or grab the free 3-page fretboard cheat sheet.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/lessons/practice/fretboard-trainer"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black rounded-xl shadow-xl shadow-amber-500/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-base inline-flex items-center justify-center gap-2"
              >
                <span>🎯 Play Fretboard Note Hunt</span>
              </Link>
              <Link
                href="/downloads/fretboard-cheat-sheet"
                className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-base inline-flex items-center justify-center gap-2"
              >
                <span>📄 Download Free Fretboard PDF</span>
              </Link>
              <Link
                href="/lessons/songs/song-analysis"
                className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-slate-800/80 text-slate-300 hover:text-white font-semibold rounded-xl border border-slate-800 hover:border-slate-700 transition-all duration-200 text-base inline-flex items-center justify-center gap-2"
              >
                <span>Browse All 107 Songs ➔</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
