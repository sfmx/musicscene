import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { getEntriesByType } from '@/lib/contentIndex';

const theoryCount =
  getEntriesByType('chord').length +
  getEntriesByType('scale').length +
  getEntriesByType('interval').length +
  getEntriesByType('mode').length +
  getEntriesByType('progression').length;
const songsCount = getEntriesByType('song-analysis').length + getEntriesByType('song-lesson').length;
const gearCount = getEntriesByType('gear-lesson').length;
const practiceCount = getEntriesByType('practice').length;
const totalCount = theoryCount + songsCount + gearCount + practiceCount;

const statsBar = [
  { value: `${totalCount}+`, label: 'Total Lessons' },
  { value: `${getEntriesByType('song-analysis').length}+`, label: 'Songs Analyzed' },
  { value: `${gearCount}+`, label: 'Gear Guides' },
  { value: '4', label: 'Core Categories' },
];

const categoryCards = [
  {
    name: 'Music Theory',
    icon: '🎵',
    href: '/lessons/theory',
    description: 'Unlock the fretboard with visual theory and harmonic maps.',
    count: theoryCount,
    bgClass: 'bg-amber-50/50 hover:bg-amber-50',
    glowClass: 'shadow-amber-200/50',
    textClass: 'text-amber-900',
    subtextClass: 'text-amber-800/70',
    chipClass: 'bg-white/70 text-amber-900 hover:bg-white',
    subtopics: [
      { label: 'Scales', href: '/lessons/theory/scales' },
      { label: 'Chords', href: '/lessons/theory/chords' },
      { label: 'Progressions', href: '/lessons/theory/progressions' },
      { label: 'Modes', href: '/lessons/theory/modes' },
      { label: 'Intervals', href: '/lessons/theory/intervals' },
    ],
  },
  {
    name: 'Song Analysis',
    icon: '🎸',
    href: '/lessons/songs',
    description: 'Break down classic riffs and complex solos note-for-note.',
    count: songsCount,
    bgClass: 'bg-orange-50/50 hover:bg-orange-50',
    glowClass: 'shadow-orange-200/50',
    textClass: 'text-orange-900',
    subtextClass: 'text-orange-800/70',
    chipClass: 'bg-white/70 text-orange-900 hover:bg-white',
    subtopics: [
      { label: 'Song Breakdowns', href: '/lessons/songs/song-analysis' },
      { label: 'Riffs & Licks', href: '/lessons/songs/riffs' },
      { label: 'Lead Guitar', href: '/lessons/songs/lead' },
      { label: 'Rhythm Patterns', href: '/lessons/songs/rhythm' },
      { label: 'Techniques', href: '/lessons/songs/techniques' },
    ],
  },
  {
    name: 'Gear Lessons',
    icon: '⚡',
    href: '/lessons/gear',
    description: 'Tone shaping, pedalboard setups, and guitar maintenance.',
    count: gearCount,
    bgClass: 'bg-blue-50/50 hover:bg-blue-50',
    glowClass: 'shadow-blue-200/50',
    textClass: 'text-blue-900',
    subtextClass: 'text-blue-800/70',
    chipClass: 'bg-white/70 text-blue-900 hover:bg-white',
    subtopics: [
      { label: 'Guitars', href: '/lessons/gear/guitars' },
      { label: 'Amps', href: '/lessons/gear/amps' },
      { label: 'Effects Pedals', href: '/lessons/gear/effects' },
      { label: 'Recording', href: '/lessons/gear/recording' },
      { label: 'Accessories', href: '/lessons/gear/accessories' },
    ],
  },
  {
    name: 'Practice Tools',
    icon: '🎯',
    href: '/lessons/practice',
    description: 'Interactive metronomes and personalized routine trackers.',
    count: practiceCount,
    bgClass: 'bg-green-50/50 hover:bg-green-50',
    glowClass: 'shadow-green-200/50',
    textClass: 'text-green-900',
    subtextClass: 'text-green-800/70',
    chipClass: 'bg-white/70 text-green-900 hover:bg-white',
    subtopics: [
      { label: 'Fretboard Trainer', href: '/lessons/practice/fretboard-trainer' },
      { label: 'Progression Jammer', href: '/lessons/practice/progression-player' },
      { label: 'Warm-ups', href: '/lessons/practice/warmups' },
      { label: 'Technique', href: '/lessons/practice/technique' },
      { label: 'Improvisation', href: '/lessons/practice/improv' },
    ],
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

        {/* Stats Bar */}
        <section className="border-b border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {statsBar.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-extrabold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Category Cards Section */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="mb-12">
            <span className="text-sm font-bold tracking-widest text-blue-600 uppercase block mb-2">Curriculum</span>
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">Explore Our Lessons</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categoryCards.map((category) => (
              <div
                key={category.href}
                className={`${category.bgClass} rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${category.glowClass} h-full flex flex-col`}
              >
                <Link href={category.href} className="block group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <span className="text-3xl">{category.icon}</span>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full bg-white/70 ${category.textClass}`}>
                      {category.count}+ lessons
                    </span>
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${category.textClass} group-hover:underline`}>{category.name}</h3>
                  <p className={`${category.subtextClass} leading-relaxed mb-5`}>{category.description}</p>
                </Link>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.subtopics.map((topic) => (
                    <Link
                      key={topic.href}
                      href={topic.href}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${category.chipClass}`}
                    >
                      {topic.label}
                    </Link>
                  ))}
                </div>
              </div>
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

        {/* CTA Banner */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
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
