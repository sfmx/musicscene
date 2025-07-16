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
    description: 'Master the building blocks of harmony and melody',
    color: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
    iconColor: 'text-purple-600',
    concepts: ['Perfect, Major, Minor intervals', 'Consonance & Dissonance', 'Chord construction', 'Melodic movement']
  },
  {
    title: 'Scales',
    href: '/lessons/theory/scales',
    icon: '🎼',
    description: 'Understand the patterns that form melodies and harmony',
    color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
    iconColor: 'text-blue-600',
    concepts: ['Major & Minor scales', 'Pentatonic patterns', 'Scale degrees', 'Modal scales']
  },
  {
    title: 'Chords',
    href: '/lessons/theory/chords',
    icon: '🎸',
    description: 'Build and understand chord structures and voicings',
    color: 'bg-green-50 border-green-200 hover:bg-green-100',
    iconColor: 'text-green-600',
    concepts: ['Triads & 7th chords', 'Extensions & alterations', 'Voicings', 'Chord inversions']
  },
  {
    title: 'Modes',
    href: '/lessons/theory/modes',
    icon: '🎹',
    description: 'Explore the colors and moods of modal harmony',
    color: 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100',
    iconColor: 'text-indigo-600',
    concepts: ['Ionian to Locrian', 'Modal characteristics', 'Jazz modes', 'Modal interchange']
  },
  {
    title: 'Chord Progressions',
    href: '/lessons/theory/progressions',
    icon: '🔀',
    description: 'Learn how chords connect to create harmonic motion',
    color: 'bg-orange-50 border-orange-200 hover:bg-orange-100',
    iconColor: 'text-orange-600',
    concepts: ['Common progressions', 'Roman numeral analysis', 'Voice leading', 'Functional harmony']
  },
]

const learningPath = [
  { step: 1, title: 'Start with Intervals', description: 'Learn the distances between notes and how they create harmony' },
  { step: 2, title: 'Build Scales', description: 'Understand how intervals combine to form scales and keys' },
  { step: 3, title: 'Construct Chords', description: 'Use intervals and scales to build chord structures' },
  { step: 4, title: 'Explore Modes', description: 'Discover different tonal colors and harmonic possibilities' },
  { step: 5, title: 'Connect with Progressions', description: 'Learn how chords move and create musical narratives' },
]

const practicalBenefits = [
  {
    title: 'Understand Your Fretboard',
    description: 'See patterns instead of memorizing shapes',
    icon: '🎯',
    color: 'bg-red-50 border-red-200'
  },
  {
    title: 'Communicate with Musicians',
    description: 'Speak the universal language of music',
    icon: '🗣️',
    color: 'bg-blue-50 border-blue-200'
  },
  {
    title: 'Write Better Songs',
    description: 'Compose with intention and harmonic awareness',
    icon: '✍️',
    color: 'bg-green-50 border-green-200'
  },
  {
    title: 'Improvise Confidently',
    description: 'Know what notes work and why they work',
    icon: '🎭',
    color: 'bg-purple-50 border-purple-200'
  },
]

export default function TheoryLessonsPage() {
  return (
    <Layout>
      <Header
        title="Music Theory for Guitarists"
        subtitle="Master the language of music and unlock the fretboard with comprehensive theory lessons designed specifically for guitar players."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <div className="mb-8">
            <Link 
              href="/lessons" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span className="mr-2">←</span>
              Back to Lessons
            </Link>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">🎼</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Music Theory for Guitarists
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Move beyond memorizing chord shapes and scale patterns. Understand the "why" behind the music you play. 
              These theory lessons are designed specifically for guitarists, connecting abstract concepts to practical fretboard application.
            </p>
          </div>

          {/* Why Learn Theory */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Learn Music Theory?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {practicalBenefits.map((benefit, index) => (
                  <div key={index} className={`${benefit.color} rounded-lg p-6 border-2`}>
                    <div className="text-3xl mb-3">{benefit.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-700">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Learning Path */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recommended Learning Path</h2>
              <div className="space-y-6">
                {learningPath.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Theory Topics */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Theory Topics</h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {topics.map((topic) => (
                <Link
                  key={topic.href}
                  href={topic.href}
                  className={`${topic.color} border-2 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 group`}
                >
                  <div className="text-center mb-4">
                    <div className={`${topic.iconColor} text-4xl mb-3 group-hover:scale-110 transition-transform`}>
                      {topic.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{topic.title}</h3>
                    <p className="text-sm text-gray-700 mb-4">{topic.description}</p>
                  </div>
                  <div className="space-y-2">
                    {topic.concepts.map((concept, index) => (
                      <div key={index} className="text-xs bg-white bg-opacity-60 rounded px-3 py-1">
                        {concept}
                      </div>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Philosophy */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Approach to Theory</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Guitar-Focused Learning</h3>
                  <p className="text-gray-700 mb-4">
                    Every concept is explained with guitar-specific examples and fretboard diagrams. 
                    We connect theory to the physical layout of the guitar, making abstract concepts concrete and practical.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Visual fretboard representations</li>
                    <li>• Practical chord voicings and fingerings</li>
                    <li>• Scale patterns and position playing</li>
                    <li>• Real-world song examples</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Progressive Complexity</h3>
                  <p className="text-gray-700 mb-4">
                    Start with fundamental concepts and build complexity gradually. Each lesson builds on previous knowledge, 
                    ensuring you develop a solid foundation before moving to advanced topics.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Clear prerequisite structure</li>
                    <li>• Interactive exercises and examples</li>
                    <li>• Multiple difficulty levels</li>
                    <li>• Cross-references between topics</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Getting Started */}
          <section>
            <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Ready to Begin?</h2>
              <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
                Start your music theory journey today. Whether you're a complete beginner or looking to fill gaps in your knowledge, 
                these lessons will enhance your musical understanding and guitar playing.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/lessons/theory/intervals" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                      <span className="text-2xl">🎵</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Start with Intervals</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Master the building blocks of harmony and melody - the foundation of all music theory.
                    </p>
                    <span className="text-purple-600 font-medium text-sm group-hover:text-purple-700">
                      Build your foundation →
                    </span>
                  </div>
                </Link>
                
                <Link href="/lessons/theory/scales" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                      <span className="text-2xl">🎼</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Explore Scales</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Understand the patterns that form melodies and create different musical moods.
                    </p>
                    <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                      Discover patterns →
                    </span>
                  </div>
                </Link>
                
                <Link href="/lessons/theory/chords" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                      <span className="text-2xl">🎸</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Learn Chords</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Build and understand chord structures that create the harmony in your music.
                    </p>
                    <span className="text-green-600 font-medium text-sm group-hover:text-green-700">
                      Create harmony →
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}
