import Link from 'next/link'
import React from 'react'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const topics = [
  {
    title: 'Song Breakdowns',
    href: '/lessons/songs/breakdowns',
    icon: '🔍',
  },
  {
    title: 'Riffs & Licks',
    href: '/lessons/songs/riffs',
    icon: '🎸',
  },
  {
    title: 'Chords in Songs',
    href: '/lessons/songs/chords',
    icon: '🎼',
  },
  {
    title: 'Song Structures',
    href: '/lessons/songs/structure',
    icon: '🧩',
  },
  {
    title: 'Techniques',
    href: '/lessons/songs/techniques',
    icon: '🤘',
  },
]

export default function SongLessonsPage() {
  return (
    <Layout>
      <Header
        title="Song Analysis Lessons"
        subtitle="Learn how to break down, play, and understand your favorite songs—beyond just tabs!"
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
            Click a card above to explore song-based lessons!
          </p>
        </section>
      </main>
      <Footer />
    </Layout>
  )
}
