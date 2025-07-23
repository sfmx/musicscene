import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const topics = [
  {
    title: 'Verse',
    href: '/lessons/songs/structure/verse',
    icon: '📝',
    description: 'The narrative foundation - learn how verses develop melodically and harmonically to tell the story.'
  },
  {
    title: 'Chorus',
    href: '/lessons/songs/structure/chorus',
    icon: '🎶',
    description: 'The emotional peak - understand how choruses use harmonic tension and melodic climax for impact.'
  },
  {
    title: 'Bridge',
    href: '/lessons/songs/structure/bridge',
    icon: '🌉',
    description: 'The contrast section - explore how bridges provide harmonic and melodic departure from main themes.'
  },
  {
    title: 'Intro',
    href: '/lessons/songs/structure/intro',
    icon: '🚪',
    description: 'Setting the stage - analyze how intros establish key, mood, and musical themes for the song.'
  },
  {
    title: 'Outro',
    href: '/lessons/songs/structure/outro',
    icon: '🚦',
    description: 'The resolution - study different ending techniques and how they provide harmonic closure.'
  },
  {
    title: 'Pre-Chorus',
    href: '/lessons/songs/structure/pre-chorus',
    icon: '⏭️',
    description: 'Building tension - learn how pre-choruses create harmonic and rhythmic momentum toward the chorus.'
  },
  {
    title: 'Song Forms',
    href: '/lessons/songs/structure/forms',
    icon: '�️',
    description: 'Common structures - understand AABA, verse-chorus, and other traditional song forms and their theory.'
  },
  {
    title: 'Transitions',
    href: '/lessons/songs/structure/transitions',
    icon: '�',
    description: 'Connecting sections - master the harmonic and rhythmic techniques that smoothly link song parts.'
  },
];

export default function SongStructurePage() {
  return (
    <Layout>
      <Header
        title="Song Structure & Form"
        subtitle="Master the architectural principles of songwriting through music theory analysis"
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction Section */}
        <section className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Song Architecture</h2>
          <div className="prose prose-lg text-gray-700 max-w-none">
            <p>
              Song structure is the blueprint that guides listeners through a musical journey. Rather than memorizing 
              patterns, we'll explore <strong>why</strong> certain structures work by understanding the underlying 
              harmonic, melodic, and rhythmic principles.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-indigo-600 mb-2">📊 Functional Analysis</h3>
                <p className="text-sm">Learn to identify the harmonic function of each section and how it serves the song's emotional arc.</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-indigo-600 mb-2">🎯 Tension & Release</h3>
                <p className="text-sm">Understand how sections create and resolve musical tension through chord progressions and melody.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Path */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">📚 Recommended Learning Path</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <ol className="space-y-2 text-gray-700">
              <li><strong>1. Song Forms</strong> - Start with understanding basic structural templates</li>
              <li><strong>2. Verse & Chorus</strong> - Master the core building blocks and their harmonic roles</li>
              <li><strong>3. Transitions</strong> - Learn how sections connect harmonically and rhythmically</li>
              <li><strong>4. Advanced Sections</strong> - Explore bridges, pre-choruses, and specialized parts</li>
            </ol>
          </div>
        </section>

        {/* Topic Cards */}
        <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {topics.map((topic) => (
            <Link
              key={topic.href}
              href={topic.href}
              className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-indigo-300 hover:shadow-lg transition-all duration-200"
            >
              <div className="text-4xl mb-3">{topic.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600">
                {topic.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {topic.description}
              </p>
            </Link>
          ))}
        </section>

        {/* Example Analysis */}
        <section className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🎵 Quick Analysis Example</h2>
          <div className="bg-white rounded-lg p-6 border-l-4 border-indigo-500">
            <h3 className="font-semibold text-gray-900 mb-2">"Sweet Child O' Mine" Structure Analysis</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <p><strong>Intro:</strong> Iconic riff in D major establishes harmonic center</p>
                <p><strong>Verse:</strong> D-C-G progression creates stable foundation</p>
                <p><strong>Chorus:</strong> Returns to D major with added harmonic movement</p>
              </div>
              <div>
                <p><strong>Bridge:</strong> Modulates to create contrast and build tension</p>
                <p><strong>Solo:</strong> Extended harmonic exploration over familiar progression</p>
                <p><strong>Outro:</strong> Gradual fade maintains energy while providing closure</p>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mt-12 text-center">
          <div className="bg-indigo-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">🎯 Ready to Start?</h3>
            <p className="text-gray-700 mb-4">
              Begin with our Song Forms lesson to understand the basic templates, then dive into specific sections.
            </p>
            <Link 
              href="/lessons/songs/structure/forms"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Start with Song Forms →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
