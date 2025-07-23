import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const topics = [
  {
    title: 'Classic Rock Riffs',
    href: '/lessons/songs/riffs/classic-rock',
    icon: '🤘',
    description: 'Analyze iconic rock riffs and understand their harmonic foundation, rhythmic patterns, and melodic construction.',
    difficulty: 'Intermediate',
    theory: 'Power chords, pentatonic scales, chord progressions'
  },
  {
    title: 'Blues Riffs',
    href: '/lessons/songs/riffs/blues',
    icon: '🎷',
    description: 'Master blues riffs through understanding of blues scales, 12-bar progressions, and call-and-response patterns.',
    difficulty: 'Beginner',
    theory: 'Blues scale, dominant 7th chords, shuffle rhythms'
  },
  {
    title: 'Metal Riffs',
    href: '/lessons/songs/riffs/metal',
    icon: '⚡',
    description: 'Explore metal riffs with focus on chromatic movement, palm muting techniques, and harmonic minor applications.',
    difficulty: 'Advanced',
    theory: 'Chromatic scales, harmonic minor, tritone intervals'
  },
  {
    title: 'Funk Riffs',
    href: '/lessons/songs/riffs/funk',
    icon: '🕺',
    description: 'Learn funk riffs emphasizing rhythmic precision, muted strumming, and chord extensions in groovy contexts.',
    difficulty: 'Intermediate',
    theory: 'Extended chords, syncopation, rhythmic emphasis'
  },
  {
    title: 'Pop Riffs',
    href: '/lessons/songs/riffs/pop',
    icon: '🎤',
    description: 'Study memorable pop riffs and their use of hooks, melodic intervals, and catchy rhythmic patterns.',
    difficulty: 'Beginner',
    theory: 'Major scales, basic intervals, song structure'
  },
  {
    title: 'Jazz Riffs',
    href: '/lessons/songs/riffs/jazz',
    icon: '🎺',
    description: 'Understand jazz riffs through chord substitutions, altered scales, and sophisticated harmonic movement.',
    difficulty: 'Advanced',
    theory: 'Altered scales, chord substitutions, complex harmonies'
  },
  {
    title: 'Fingerstyle Riffs',
    href: '/lessons/songs/riffs/fingerstyle',
    icon: '🖐️',
    description: 'Develop fingerstyle riffs combining melody and bass lines with understanding of counterpoint and voice leading.',
    difficulty: 'Intermediate',
    theory: 'Counterpoint, bass lines, melodic independence'
  },
  {
    title: 'Slide Riffs',
    href: '/lessons/songs/riffs/slide',
    icon: '🧊',
    description: 'Learn slide guitar riffs focusing on pitch bending, open tunings, and their unique harmonic qualities.',
    difficulty: 'Intermediate',
    theory: 'Open tunings, pitch relationships, harmonic series'
  },
];

export default function SongRiffsPage() {
  return (
    <Layout>
      <Header
        title="Riffs & Licks in Songs"
        subtitle="Learn iconic riffs through music theory analysis - understand what makes them memorable and how to apply these concepts."
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Overview Section */}
        <section className="mb-12 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Theory Behind Great Riffs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Musical Memorability</h3>
              <p className="text-gray-600">Great riffs use specific melodic intervals, rhythmic patterns, and harmonic progressions that stick in our minds. Understanding why helps you create your own.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Genre Characteristics</h3>
              <p className="text-gray-600">Each style uses different scales, chord structures, and techniques. Learning the theory reveals why certain approaches work for specific genres.</p>
            </div>
          </div>
        </section>

        {/* Riff Categories */}
        <section className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <Link
              key={topic.href}
              href={topic.href}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{topic.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {topic.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {topic.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                    {topic.difficulty}
                  </span>
                  <span className="text-gray-500 text-xs">
                    {topic.theory}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* Learning Approach */}
        <section className="mt-16 bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Riff Learning Method</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-800 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Analyze</h3>
              <p className="text-gray-600 text-sm">Break down the riff's harmonic structure, scale patterns, and rhythmic elements to understand its construction.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-800 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Practice</h3>
              <p className="text-gray-600 text-sm">Learn the riff with proper technique while understanding how each note functions within the harmonic context.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-800 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Apply</h3>
              <p className="text-gray-600 text-sm">Use the theoretical concepts to create variations, transpose to different keys, or adapt the style to new songs.</p>
            </div>
          </div>
        </section>

        {/* Featured Example */}
        <section className="mt-12 bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-amber-900 mb-4">🎸 Example: "Smoke on the Water" Main Riff</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-amber-800 mb-2"><strong>Harmonic Analysis:</strong></p>
              <p className="text-amber-700">Uses power chords built from the G blues scale. The riff outlines a G-Bb-C progression, creating a strong sense of resolution to G.</p>
            </div>
            <div>
              <p className="text-amber-800 mb-2"><strong>Why It Works:</strong></p>
              <p className="text-amber-700">Simple rhythm, memorable intervals (perfect 4th jumps), and repetition that reinforces the tonal center make it instantly recognizable.</p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mt-12 text-center">
          <div className="bg-purple-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">🚀 Ready to Start?</h3>
            <p className="text-gray-700 mb-4">
              Begin with blues riffs to understand foundational concepts, then explore other genres as your theory knowledge grows.
            </p>
            <Link 
              href="/lessons/songs/riffs/blues"
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
            >
              Start with Blues Riffs →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
