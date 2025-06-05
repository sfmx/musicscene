// src/app/lessons/theory/page.tsx

import Link from 'next/link'
import React from 'react'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const topics = [
  {
    title: 'Intervals',
    href: '/lessons/theory/intervals',
    icon: '🎵',
  },
  {
    title: 'Scales',
    href: '/lessons/theory/scales',
    icon: '🎼',
  },
  {
    title: 'Chords',
    href: '/lessons/theory/chords',
    icon: '🎸',
  },
  {
    title: 'Modes',
    href: '/lessons/theory/modes',
    icon: '🎹',
  },
  {
    title: 'Chord Progressions',
    href: '/lessons/theory/progressions',
    icon: '🔀',
  },
]

export default function TheoryLessonsPage() {
  return (
    <Layout>
      <Header
        title="Theory Lessons"
        subtitle="Explore the fundamentals of music theory for guitarists. Go beyond shapes—understand the music!"
      />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="flex flex-col items-center justify-center space-y-2 p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-5xl">{t.icon}</div>
              <div className="text-lg font-medium">{t.title}</div>
            </Link>
          ))}
        </section>
        <section className="mt-16 text-center">
          <p className="text-gray-700">
            Click a card above to dive in!
          </p>
        </section>
      </main>
      <Footer />
    </Layout>
  )
}
