import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';

const categoryCards = [
  {
    name: 'Guitar Theory',
    icon: <span style={{ fontSize: 32 }}>🎵</span>,
    href: '/lessons/theory',
    description: 'Master scales, chords, and music theory fundamentals with clear explanations and visual guides.',
    color: 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100',
    textColor: 'text-yellow-700',
    linkColor: 'text-yellow-600 hover:text-yellow-800'
  },
  {
    name: 'Song Analysis',
    icon: <span style={{ fontSize: 32 }}>🎸</span>,
    href: '/lessons/songs',
    description: 'Deep dives into iconic songs with verified tabs, technique breakdowns, and historical context.',
    color: 'bg-orange-50 border-orange-200 hover:bg-orange-100',
    textColor: 'text-orange-700',
    linkColor: 'text-orange-600 hover:text-orange-800'
  },
  {
    name: 'Gear Reviews',
    icon: <span style={{ fontSize: 32 }}>⚡</span>,
    href: '/lessons/gear',
    description: 'Expert reviews of guitars, amps, pedals, and accessories to help you make informed decisions.',
    color: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
    textColor: 'text-purple-700',
    linkColor: 'text-purple-600 hover:text-purple-800'
  },
  {
    name: 'Practice Tools',
    icon: <span style={{ fontSize: 32 }}>🎯</span>,
    href: '/lessons/practice',
    description: 'Interactive exercises, chord visualizers, and practice routines to accelerate your progress.',
    color: 'bg-green-50 border-green-200 hover:bg-green-100',
    textColor: 'text-green-700',
    linkColor: 'text-green-600 hover:text-green-800'
  }
];

const featuredContent = [
  {
    title: 'Sweet Child O\' Mine',
    artist: 'Guns N\' Roses',
    description: 'Master Slash\'s iconic arpeggiated intro and explore the song\'s structure, tuning, and techniques.',
    href: '/lessons/songs/song-analysis/sweet-child-o-mine',
    icon: '🎸',
    color: 'bg-rose-50 border-rose-200 hover:bg-rose-100',
    textColor: 'text-rose-700',
    linkColor: 'text-rose-600 hover:text-rose-800'
  },
  {
    title: 'We\'re Not Gonna Take It',
    artist: 'Twisted Sister',
    description: 'Learn the powerful power chord progressions and anthemic chorus of this 80s metal classic.',
    href: '/lessons/songs/song-analysis/were-not-gonna-take-it',
    icon: '🤘',
    color: 'bg-red-50 border-red-200 hover:bg-red-100',
    textColor: 'text-red-700',
    linkColor: 'text-red-600 hover:text-red-800'
  },
  {
    title: 'Scale Theory',
    artist: 'Theory Fundamentals',
    description: 'Explore major, minor, pentatonic, and modal scales with interactive fretboard diagrams.',
    href: '/lessons/theory/scales',
    icon: '🎼',
    color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
    textColor: 'text-blue-700',
    linkColor: 'text-blue-600 hover:text-blue-800'
  }
];

export default function HomePage() {
  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Master Guitar with Music Scene
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-200">
              Your complete resource for guitar theory, technique, gear reviews, and in-depth song analysis. 
              Learn from detailed breakdowns of iconic songs and build your skills with expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/lessons/songs" 
                className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Song Analysis
              </Link>
              <Link 
                href="/lessons/theory" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                Learn Theory
              </Link>
            </div>
          </div>
        </section>

        {/* Main Categories */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Explore Guitar Learning</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive lessons covering all aspects of guitar playing, from basic theory to advanced techniques
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryCards.map((category, index) => (
              <Link key={index} href={category.href} className="block">
                <div className={`${category.color} border-2 rounded-lg p-6 transition-all duration-200 h-full`}>
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">{category.icon}</div>
                    <h3 className={`text-xl font-bold mb-3 ${category.textColor}`}>{category.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {category.description}
                    </p>
                    <div className={`${category.linkColor} font-semibold text-sm transition-colors mt-auto`}>
                      Explore →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Content */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Featured Lessons</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Start with these popular lessons and discover the techniques behind legendary performances
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredContent.map((content, index) => (
                <Link key={index} href={content.href} className="block">
                  <div className={`${content.color} border-2 rounded-lg p-6 transition-all duration-200 h-full`}>
                    <div className="flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <span style={{ fontSize: 24 }} className="mr-3">{content.icon}</span>
                        <div>
                          <h3 className={`font-bold text-lg ${content.textColor}`}>{content.title}</h3>
                          <p className="text-sm text-gray-500">{content.artist}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                        {content.description}
                      </p>
                      <div className={`${content.linkColor} font-semibold text-sm transition-colors`}>
                        Learn More →
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Benefits */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Why Choose Music Scene?</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-6">
                <div className="text-4xl mb-4">🎯</div>
                <div className="text-xl font-bold text-gray-900 mb-2">Expert Analysis</div>
                <div className="text-gray-600">Verified tabs and detailed analysis from experienced guitarists and music theory experts</div>
              </div>
              <div className="p-6">
                <div className="text-4xl mb-4">📚</div>
                <div className="text-xl font-bold text-gray-900 mb-2">Comprehensive</div>
                <div className="text-gray-600">In-depth lessons covering theory, technique, historical context, and practical application</div>
              </div>
              <div className="p-6">
                <div className="text-4xl mb-4">🎮</div>
                <div className="text-xl font-bold text-gray-900 mb-2">Interactive</div>
                <div className="text-gray-600">Visual fretboard diagrams, tab notation, and interactive exercises to enhance learning</div>
              </div>
            </div>
            
            <div className="bg-gray-900 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Guitar Journey?</h3>
              <p className="mb-6 text-gray-200">Join guitarists worldwide who are improving their skills with Music Scene</p>
              <Link 
                href="/lessons" 
                className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Browse All Lessons
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
