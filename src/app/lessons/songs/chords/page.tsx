import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const topics = [
  {
    title: 'Chord Progressions',
    href: '/lessons/songs/chords/progressions',
    icon: '�',
    description: 'Master the harmonic language of popular music through functional analysis of common progressions.',
    difficulty: 'Beginner'
  },
  {
    title: 'Roman Numeral Analysis',
    href: '/lessons/songs/chords/roman-numerals',
    icon: 'Ⅰ',
    description: 'Learn to analyze chord functions using Roman numeral notation to understand harmonic relationships.',
    difficulty: 'Beginner'
  },
  {
    title: 'Voice Leading',
    href: '/lessons/songs/chords/voice-leading',
    icon: '🎼',
    description: 'Understand how individual chord tones move between chords to create smooth harmonic motion.',
    difficulty: 'Intermediate'
  },
  {
    title: 'Chord Substitutions',
    href: '/lessons/songs/chords/substitutions',
    icon: '♻️',
    description: 'Explore how different chords can serve the same harmonic function and add sophistication.',
    difficulty: 'Intermediate'
  },
  {
    title: 'Modal Interchange',
    href: '/lessons/songs/chords/modal-interchange',
    icon: '🔄',
    description: 'Discover how borrowing chords from parallel modes adds color and emotional depth.',
    difficulty: 'Intermediate'
  },
  {
    title: 'Extended Chords',
    href: '/lessons/songs/chords/extended',
    icon: '9️⃣',
    description: 'Learn the theory and application of 7th, 9th, 11th, and 13th chords in popular music.',
    difficulty: 'Intermediate'
  },
  {
    title: 'Secondary Dominants',
    href: '/lessons/songs/chords/secondary-dominants',
    icon: '🎯',
    description: 'Master the technique of tonicizing other keys temporarily for harmonic interest.',
    difficulty: 'Advanced'
  },
  {
    title: 'Chord Inversions',
    href: '/lessons/songs/chords/inversions',
    icon: '🔀',
    description: 'Understand how bass note choice affects harmonic stability and melodic bass lines.',
    difficulty: 'Beginner'
  }
];

const difficultyColors = {
  'Beginner': 'bg-green-100 text-green-800',
  'Intermediate': 'bg-yellow-100 text-yellow-800',
  'Advanced': 'bg-red-100 text-red-800'
};

export default function SongChordsPage() {
  return (
    <Layout>
      <Header
        title="Chord Theory in Songs"
        subtitle="Understand how chords create the harmonic foundation and emotional landscape of music"
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction Section */}
        <section className="mb-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Language of Harmony</h2>
          <div className="prose prose-lg text-gray-700 max-w-none">
            <p>
              Chords are more than finger positions—they're the emotional vocabulary of music. Understanding 
              <strong> harmonic function</strong> and <strong>chord relationships</strong> will transform how you 
              hear, play, and create music across any genre.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-purple-600 mb-2">🎼 Functional Harmony</h3>
                <p className="text-sm">Learn how chords have jobs: tonic (home), dominant (tension), subdominant (departure).</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-purple-600 mb-2">🔄 Chord Relationships</h3>
                <p className="text-sm">Discover how chord progressions create musical momentum and emotional arcs.</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-purple-600 mb-2">🎨 Color and Texture</h3>
                <p className="text-sm">Explore how chord voicings and extensions add sophistication and character.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Path */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">📚 Recommended Learning Path</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <ol className="space-y-2 text-gray-700">
              <li><strong>1. Roman Numeral Analysis</strong> - Learn the universal language of harmonic analysis</li>
              <li><strong>2. Chord Progressions</strong> - Master common progressions and their emotional qualities</li>
              <li><strong>3. Voice Leading</strong> - Understand how chords connect smoothly</li>
              <li><strong>4. Inversions & Substitutions</strong> - Add sophistication to basic progressions</li>
              <li><strong>5. Advanced Concepts</strong> - Explore modal interchange and secondary dominants</li>
            </ol>
          </div>
        </section>

        {/* Topic Cards */}
        <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {topics.map((topic) => (
            <Link
              key={topic.href}
              href={topic.href}
              className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-purple-300 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="text-4xl">{topic.icon}</div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${difficultyColors[topic.difficulty]}`}>
                  {topic.difficulty}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600">
                {topic.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {topic.description}
              </p>
            </Link>
          ))}
        </section>

        {/* Practical Example */}
        <section className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🎵 Theory in Action: "Let It Be"</h2>
          <div className="bg-white rounded-lg p-6 border-l-4 border-purple-500">
            <h3 className="font-semibold text-gray-900 mb-4">Harmonic Analysis in C Major</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded">
                  <p><strong>C - Am - F - G</strong></p>
                  <p className="text-sm text-gray-600">I - vi - IV - V (Classic "vi-IV-I-V" in disguise)</p>
                </div>
                <p className="text-sm text-gray-700">
                  <strong>Function:</strong> Tonic → Relative minor (smooth voice leading) → 
                  Subdominant (departure) → Dominant (tension back to tonic)
                </p>
              </div>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Voice Leading:</strong> Notice how the top voice moves C→A→A→B, creating a descending line that pulls us back to C.</p>
                <p><strong>Emotional Arc:</strong> Stability → Introspection → Departure → Return (mirrors the lyrical content)</p>
                <p><strong>Why it works:</strong> Strong bass movement (C→A→F→G) with smooth inner voices.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Tools */}
        <section className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">🎹 Practice Tips</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Play progressions in different keys to understand patterns</li>
              <li>• Listen for bass movement - it often reveals harmonic function</li>
              <li>• Practice chord progressions with a metronome</li>
              <li>• Analyze songs you already know to see theory in action</li>
            </ul>
          </div>
          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">🎯 Next Steps</h3>
            <div className="space-y-3">
              <Link 
                href="/lessons/songs/chords/roman-numerals"
                className="block text-sm text-green-700 hover:text-green-800 font-medium"
              >
                → Start with Roman Numeral Analysis
              </Link>
              <Link 
                href="/lessons/songs/chords/progressions"
                className="block text-sm text-green-700 hover:text-green-800 font-medium"
              >
                → Explore Common Progressions
              </Link>
              <Link 
                href="/lessons/songs/analysis-method"
                className="block text-sm text-green-700 hover:text-green-800 font-medium"
              >
                → Learn Song Analysis Method
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
