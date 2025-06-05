
// src/app/page.tsx (or App.tsx)

import React from 'react'
import SimpleFretboardDiagram from './components/SimpleFretboardDiagram'
import Image from 'next/image' // or just <img> if CRA

export default function Home() {
  return (
    <div className="font-sans">
      {/* 1) Hero */}
      <header className="relative h-screen bg-gray-900 text-white">
        {/* <Image
          src="/music-scene-hero.jpg" 
          alt="Music Scene Lessons & Theory"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="opacity-50"
        /> */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="text-5xl font-bold">MusicScene</h1>
          <p className="mt-4 text-xl max-w-2xl">
            Lessons & Theory for real guitarists—go beyond tabs and master the music.
          </p>
          <div className="mt-8 space-x-4">
            <a
              href="#tracks"
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-md"
            >
              Browse Lessons
            </a>
            <a
              href="#featured"
              className="px-6 py-3 border border-white rounded-md hover:bg-white hover:text-gray-900"
            >
              Start with a Song
            </a>
          </div>
        </div>
      </header>

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
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-md mx-auto text-center">
          <h3 className="text-xl mb-2">Stay in Tune</h3>
          <p className="mb-4">Get new lessons straight to your inbox.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-grow px-4 py-2 rounded-l border-none"
            />
            <button type="submit" className="px-4 bg-indigo-500 hover:bg-indigo-600 rounded-r">
              Subscribe
            </button>
          </form>
        </div>
      </footer>
    </div>
  )
}
