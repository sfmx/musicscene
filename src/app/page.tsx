
// src/app/page.tsx (or App.tsx)

import React from 'react'
import SimpleFretboardDiagram from './components/SimpleFretboardDiagram'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image' // or just <img> if CRA

export default function Home() {
  return (
    <Layout>
      {/* 1) Hero */}
      <Header
        className="h-screen"
        title="MusicScene"
        subtitle="Lessons & Theory for real guitarists—go beyond tabs and master the music."
      />

      <main className="space-y-20 py-16">

        {/* 2) Lesson Tracks */}
        <section id="tracks" className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Lesson Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { title: 'Theory Lessons', href: '/lessons/theory', icon: '🎼' },
              { title: 'Song Analysis', href: '/lessons/songs', icon: '🎸' },
              { title: 'Gear & Effects', href: '/lessons/gear', icon: '⚙️' },
            ].map((t) => (
              <a
                key={t.href}
                href={t.href}
                className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">{t.icon}</div>
                <h3 className="text-xl font-medium">{t.title}</h3>
              </a>
            ))}
          </div>
        </section>

        {/* 3) Featured Song Path */}
        <section id="featured" className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Learning Path: “We’re Not Gonna Take It”
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'Chords Used', href: '/songs/were-not-gonna-take-it/chords' },
              { title: 'Key & Progression', href: '/songs/were-not-gonna-take-it/key' },
              { title: 'Scales & Riffs', href: '/songs/were-not-gonna-take-it/scales' },
              { title: 'Effects & Tone', href: '/songs/were-not-gonna-take-it/effects' },
            ].map((step) => (
              <a
                key={step.href}
                href={step.href}
                className="block p-4 bg-white rounded-lg border hover:bg-gray-50 transition"
              >
                {step.title}
              </a>
            ))}
          </div>
        </section>

        {/* 4) Interactive Teaser */}
        <section className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Try it out!
          </h2>
          <div className="border p-4 rounded-lg">
            {/* <SimpleFretboardDiagram chord="C" /> */}
          </div>
        </section>

      </main>

      {/* 5) Footer / Subscribe */}
      <Footer />
    </Layout>
  )
}
