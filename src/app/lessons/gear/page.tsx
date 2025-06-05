import Link from 'next/link'
import React from 'react'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const topics = [
  {
    title: 'Guitar Types',
    href: '/lessons/gear/guitars',
    icon: '🎸',
  },
  {
    title: 'Amps & Cabinets',
    href: '/lessons/gear/amps',
    icon: '🔊',
  },
  {
    title: 'Effects Pedals',
    href: '/lessons/gear/effects',
    icon: '🎛️',
  },
  {
    title: 'Recording Gear',
    href: '/lessons/gear/recording',
    icon: '🎙️',
  },
  {
    title: 'Accessories',
    href: '/lessons/gear/accessories',
    icon: '🧰',
  },
]

export default function GearLessonsPage() {
  return (
    <Layout>
      <Header
        title="Gear & Effects Lessons"
        subtitle="Discover the tools of the trade—guitars, amps, pedals, and more to shape your sound!"
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
            Click a card above to explore gear and effects lessons!
          </p>
        </section>
      </main>
      <Footer />
    </Layout>
  )
}
