import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';

const categoryCards = [
  {
    name: 'Music Theory',
    icon: '🎵',
    href: '/lessons/theory',
    description: 'Unlock the fretboard with visual theory and harmonic maps.',
    bgClass: 'bg-amber-50/50 hover:bg-amber-50',
    glowClass: 'shadow-amber-200/50',
    textClass: 'text-amber-900',
    subtextClass: 'text-amber-800/70',
  },
  {
    name: 'Song Analysis',
    icon: '🎸',
    href: '/lessons/songs',
    description: 'Break down classic riffs and complex solos note-for-note.',
    bgClass: 'bg-orange-50/50 hover:bg-orange-50',
    glowClass: 'shadow-orange-200/50',
    textClass: 'text-orange-900',
    subtextClass: 'text-orange-800/70',
  },
  {
    name: 'Gear Lessons',
    icon: '⚡',
    href: '/lessons/gear',
    description: 'Tone shaping, pedalboard setups, and guitar maintenance.',
    bgClass: 'bg-blue-50/50 hover:bg-blue-50',
    glowClass: 'shadow-blue-200/50',
    textClass: 'text-blue-900',
    subtextClass: 'text-blue-800/70',
  },
  {
    name: 'Practice Tools',
    icon: '🎯',
    href: '/lessons/practice',
    description: 'Interactive metronomes and personalized routine trackers.',
    bgClass: 'bg-green-50/50 hover:bg-green-50',
    glowClass: 'shadow-green-200/50',
    textClass: 'text-green-900',
    subtextClass: 'text-green-800/70',
  },
];

const featuredContent = [
  {
    title: 'Sweet Child O\' Mine',
    artist: 'Guns N\' Roses',
    description: 'Master Slash\'s iconic arpeggiated intro and explore the song\'s structure, tuning, and techniques.',
    href: '/lessons/songs/song-analysis/sweet-child-o-mine',
    difficulty: 'Intermediate',
    difficultyClass: 'bg-amber-100 text-amber-800',
    image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&auto=format&fit=crop&q=80',
    imageAlt: 'Electric guitar with stage lighting',
  },
  {
    title: 'We\'re Not Gonna Take It',
    artist: 'Twisted Sister',
    description: 'Learn the powerful power chord progressions and anthemic chorus of this 80s metal classic.',
    href: '/lessons/songs/song-analysis/were-not-gonna-take-it',
    difficulty: 'Beginner',
    difficultyClass: 'bg-green-100 text-green-800',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=80',
    imageAlt: 'Concert stage with dramatic lighting',
  },
  {
    title: 'Scale Theory',
    artist: 'Theory Fundamentals',
    description: 'Explore major, minor, pentatonic, and modal scales with interactive fretboard diagrams.',
    href: '/lessons/theory/scales',
    difficulty: 'All Levels',
    difficultyClass: 'bg-blue-100 text-blue-800',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&auto=format&fit=crop&q=80',
    imageAlt: 'Guitar fretboard close-up',
  },
];

export default function HomePage() {
  return (
    <Layout>
      <div className="bg-gray-50/50">
        {/* Hero Section */}
        <section className="relative h-[450px] bg-gray-950 overflow-hidden flex items-center justify-center text-center px-4">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900 via-transparent to-transparent" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
              Master Guitar at Your Own Pace
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Comprehensive lessons, song analysis, and practice tools designed for every skill level, from bedroom hobbyists to stage performers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/lessons/songs"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Start Learning
              </Link>
              <Link
                href="/lessons/theory"
                className="px-8 py-4 border-2 border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                Learn Theory
              </Link>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50/50 to-transparent" />
        </section>

        {/* Category Cards Section */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="mb-12">
            <span className="text-sm font-bold tracking-widest text-blue-600 uppercase block mb-2">Curriculum</span>
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">Explore Our Lessons</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categoryCards.map((category) => (
              <Link key={category.href} href={category.href} className="block group">
                <div className={`${category.bgClass} rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${category.glowClass} h-full`}>
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                    <span className="text-3xl">{category.icon}</span>
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${category.textClass}`}>{category.name}</h3>
                  <p className={`${category.subtextClass} leading-relaxed`}>{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Content */}
        <section className="bg-gray-100/60 py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">Featured Song Analysis</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Deep dive into the techniques that define these iconic guitar masterpieces.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredContent.map((content) => (
                <Link key={content.href} href={content.href} className="block group">
                  <div className="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl h-full">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={content.image}
                        alt={content.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{content.title}</h3>
                          <p className="text-gray-500">{content.artist}</p>
                        </div>
                        <span className={`px-3 py-1 ${content.difficultyClass} text-xs font-bold rounded-full uppercase tracking-wider`}>
                          {content.difficulty}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">
                        {content.description}
                      </p>
                      <span className="inline-flex items-center text-blue-600 font-bold group-hover:gap-2 transition-all">
                        View Analysis <span className="ml-1 text-sm">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Benefits */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-sm font-bold tracking-widest text-blue-600 uppercase block mb-2">Why MusicScene</span>
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">Built for Guitarists, by Guitarists</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Analysis</h3>
                <p className="text-gray-600 leading-relaxed">Verified tabs and detailed analysis from experienced guitarists and music theory experts.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive</h3>
                <p className="text-gray-600 leading-relaxed">In-depth lessons covering theory, technique, historical context, and practical application.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl">🎮</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Interactive</h3>
                <p className="text-gray-600 leading-relaxed">Visual fretboard diagrams, tab notation, and interactive exercises to enhance learning.</p>
              </div>
            </div>

            {/* CTA Banner */}
            <div className="relative bg-gray-950 text-white p-12 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent" />
              <div className="relative z-10 text-center">
                <h3 className="text-3xl font-extrabold mb-4 tracking-tight">Ready to Start Your Guitar Journey?</h3>
                <p className="mb-8 text-slate-300 max-w-lg mx-auto">Join guitarists worldwide who are improving their skills with MusicScene.</p>
                <Link
                  href="/lessons"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 active:scale-95 inline-block"
                >
                  Browse All Lessons
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
