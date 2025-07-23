import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const topics = [
  {
    title: 'Intro Analysis',
    href: '/lessons/songs/breakdowns/intro',
    icon: '🚪',
    description: 'Understand how intros establish key centers, set the mood, and introduce musical themes.',
    focus: 'Key establishment, thematic introduction'
  },
  {
    title: 'Verse Analysis',
    href: '/lessons/songs/breakdowns/verse',
    icon: '📝',
    description: 'Learn how verses develop narratively while maintaining harmonic stability and melodic interest.',
    focus: 'Harmonic stability, melodic development'
  },
  {
    title: 'Chorus Analysis',
    href: '/lessons/songs/breakdowns/chorus',
    icon: '🎶',
    description: 'Explore how choruses create emotional peaks through harmonic tension and melodic climax.',
    focus: 'Emotional peaks, harmonic resolution'
  },
  {
    title: 'Bridge Analysis',
    href: '/lessons/songs/breakdowns/bridge',
    icon: '🌉',
    description: 'Analyze how bridges provide contrast through key changes, new progressions, and melodic departure.',
    focus: 'Harmonic contrast, melodic variation'
  },
  {
    title: 'Solo Analysis',
    href: '/lessons/songs/breakdowns/solo',
    icon: '🎤',
    description: 'Break down solo construction, scale choices, and how leads interact with underlying progressions.',
    focus: 'Scale application, melodic construction'
  },
  {
    title: 'Instrumental Breakdown',
    href: '/lessons/songs/breakdowns/instrumental',
    icon: '🎸',
    description: 'Study instrumental sections and how they develop musical themes without vocal elements.',
    focus: 'Instrumental development, thematic variation'
  },
  {
    title: 'Outro Analysis',
    href: '/lessons/songs/breakdowns/outro',
    icon: '🚦',
    description: 'Understand different ending techniques and how they provide harmonic and emotional closure.',
    focus: 'Harmonic closure, resolution techniques'
  },
  {
    title: 'Complete Song Analysis',
    href: '/lessons/songs/breakdowns/full',
    icon: '🔍',
    description: 'Full song breakdowns showing how all sections work together as a complete musical statement.',
    focus: 'Complete musical analysis'
  },
  {
    title: "We're Not Gonna Take It (Twisted Sister)",
    href: '/lessons/songs/breakdowns/were-not-gonna-take-it',
    icon: '🤘',
    description: 'Complete theory-based breakdown of this classic rock anthem with chord analysis and techniques.',
    focus: 'I-IV-V progression, power chords'
  },
];

export default function SongBreakdownsPage() {
  return (
    <Layout>
      <Header
        title="Song Breakdowns & Analysis"
        subtitle="Deep-dive analysis of songs through music theory - understand every section's role and construction."
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Overview Section */}
        <section className="mb-12 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Complete Song Analysis</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Section-by-Section</h3>
              <p className="text-gray-600">Each song section serves a specific purpose. Learn how intros, verses, choruses, and outros contribute to the musical journey.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Theory in Practice</h3>
              <p className="text-gray-600">See how theoretical concepts like chord progressions, scales, and song structure work together in real music.</p>
            </div>
          </div>
        </section>

        {/* Analysis Types */}
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
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                    {topic.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {topic.description}
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-green-800 text-xs font-medium">
                    Focus: {topic.focus}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* Analysis Process */}
        <section className="mt-16 bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Analysis Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-800 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Listen</h3>
              <p className="text-gray-600 text-sm">Identify the key, tempo, and overall structure of the song section.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-800 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Analyze</h3>
              <p className="text-gray-600 text-sm">Break down chord progressions, scales used, and harmonic functions.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-800 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Practice</h3>
              <p className="text-gray-600 text-sm">Learn the section with proper technique and understanding.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-800 font-bold">4</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Apply</h3>
              <p className="text-gray-600 text-sm">Use the concepts in your own playing and compositions.</p>
            </div>
          </div>
        </section>

        {/* Featured Breakdown */}
        <section className="mt-12 bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-amber-900 mb-4">🎵 Featured: "We're Not Gonna Take It" Complete Analysis</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-amber-800 mb-2"><strong>Key Center:</strong> E Major</p>
              <p className="text-amber-700">Classic I-IV-V progression in rock context</p>
            </div>
            <div>
              <p className="text-amber-800 mb-2"><strong>Structure:</strong> Verse-Chorus</p>
              <p className="text-amber-700">Simple but effective song form with strong hooks</p>
            </div>
            <div>
              <p className="text-amber-800 mb-2"><strong>Techniques:</strong> Power chords</p>
              <p className="text-amber-700">Palm muting, aggressive strumming patterns</p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mt-12 text-center">
          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">🚀 Start Your Analysis Journey</h3>
            <p className="text-gray-700 mb-4">
              Begin with complete song analyses to see how all sections work together, then dive into specific section types.
            </p>
            <Link 
              href="/lessons/songs/breakdowns/were-not-gonna-take-it"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
            >
              Start with "We're Not Gonna Take It" →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
