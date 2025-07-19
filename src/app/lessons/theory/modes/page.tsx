import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const modeTypes = [
  {
    name: 'Ionian (Major)',
    icon: <span style={{ fontSize: 32 }}>☀️</span>,
    href: '/lessons/theory/modes/ionian',
    description: 'The foundation mode - bright, happy, and optimistic. The standard major scale.',
    formula: 'W-W-H-W-W-W-H',
    degrees: '1-2-3-4-5-6-7',
    color: 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100',
    iconColor: 'text-yellow-600',
    mood: 'Happy & Bright',
    parentScale: 'C Major',
    characteristic: 'Perfect foundation'
  },
  {
    name: 'Dorian',
    icon: <span style={{ fontSize: 32 }}>🎷</span>,
    href: '/lessons/theory/modes/dorian',
    description: 'Minor with a twist - sophisticated and jazzy. Raised 6th gives it brightness.',
    formula: 'W-H-W-W-W-H-W',
    degrees: '1-2-♭3-4-5-6-♭7',
    color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
    iconColor: 'text-blue-600',
    mood: 'Jazz & Sophisticated',
    parentScale: 'C Major (D Dorian)',
    characteristic: 'Minor with bright 6th'
  },
  {
    name: 'Phrygian',
    icon: <span style={{ fontSize: 32 }}>�</span>,
    href: '/lessons/theory/modes/phrygian',
    description: 'Exotic and Spanish flavored. The flat 2nd creates distinctive Mediterranean sound.',
    formula: 'H-W-W-W-H-W-W',
    degrees: '1-♭2-♭3-4-5-♭6-♭7',
    color: 'bg-red-50 border-red-200 hover:bg-red-100',
    iconColor: 'text-red-600',
    mood: 'Exotic & Spanish',
    parentScale: 'C Major (E Phrygian)',
    characteristic: 'Flat 2nd interval'
  },
  {
    name: 'Lydian',
    icon: <span style={{ fontSize: 32 }}>🌟</span>,
    href: '/lessons/theory/modes/lydian',
    description: 'Dreamy and ethereal. The raised 4th creates a floating, magical quality.',
    formula: 'W-W-W-H-W-W-H',
    degrees: '1-2-3-#4-5-6-7',
    color: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
    iconColor: 'text-purple-600',
    mood: 'Dreamy & Floating',
    parentScale: 'C Major (F Lydian)',
    characteristic: 'Raised 4th (tritone)'
  },
  {
    name: 'Mixolydian',
    icon: <span style={{ fontSize: 32 }}>🎸</span>,
    href: '/lessons/theory/modes/mixolydian',
    description: 'Bluesy and dominant. Major scale with flat 7th - perfect for rock and blues.',
    formula: 'W-W-H-W-W-H-W',
    degrees: '1-2-3-4-5-6-♭7',
    color: 'bg-orange-50 border-orange-200 hover:bg-orange-100',
    iconColor: 'text-orange-600',
    mood: 'Bluesy & Dominant',
    parentScale: 'C Major (G Mixolydian)',
    characteristic: 'Flat 7th degree'
  },
  {
    name: 'Aeolian (Natural Minor)',
    icon: <span style={{ fontSize: 32 }}>🌙</span>,
    href: '/lessons/theory/modes/aeolian',
    description: 'The natural minor scale - emotional, melancholic, and deeply expressive.',
    formula: 'W-H-W-W-H-W-W',
    degrees: '1-2-♭3-4-5-♭6-♭7',
    color: 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100',
    iconColor: 'text-indigo-600',
    mood: 'Sad & Emotional',
    parentScale: 'C Major (A Aeolian)',
    characteristic: 'Natural minor scale'
  },
  {
    name: 'Locrian',
    icon: <span style={{ fontSize: 32 }}>⚡</span>,
    href: '/lessons/theory/modes/locrian',
    description: 'Unstable and dissonant. Rare but creates unique tension with flat 2nd and 5th.',
    formula: 'H-W-W-H-W-W-W',
    degrees: '1-♭2-♭3-4-♭5-♭6-♭7',
    color: 'bg-gray-50 border-gray-200 hover:bg-gray-100',
    iconColor: 'text-gray-600',
    mood: 'Tense & Unstable',
    parentScale: 'C Major (B Locrian)',
    characteristic: 'Flat 2nd and 5th'
  }
];

const modeCategories = [
  { 
    name: 'Major Character',
    modes: ['Ionian', 'Lydian', 'Mixolydian'],
    description: 'Modes with major third intervals that create bright, uplifting sounds.',
    color: 'bg-yellow-50 border-yellow-200'
  },
  { 
    name: 'Minor Character',
    modes: ['Dorian', 'Phrygian', 'Aeolian', 'Locrian'],
    description: 'Modes with minor third intervals that create darker, more introspective sounds.',
    color: 'bg-blue-50 border-blue-200'
  },
  { 
    name: 'Jazz Favorites',
    modes: ['Dorian', 'Mixolydian', 'Lydian'],
    description: 'Most commonly used modes in jazz improvisation and composition.',
    color: 'bg-green-50 border-green-200'
  },
  { 
    name: 'Rock & Blues',
    modes: ['Mixolydian', 'Dorian', 'Aeolian'],
    description: 'Essential modes for rock, blues, and contemporary guitar styles.',
    color: 'bg-orange-50 border-orange-200'
  }
];

const modalApplications = [
  {
    title: 'Modal Improvisation',
    description: 'Each mode creates distinctive improvisational flavors and moods',
    icon: '🎭',
    examples: ['Dorian for jazz solos', 'Mixolydian for rock leads', 'Phrygian for exotic flavor']
  },
  {
    title: 'Chord Progressions',
    description: 'Modes determine characteristic chord progressions and harmonic movement',
    icon: '🎼',
    examples: ['Dorian: ii-IV progressions', 'Mixolydian: I-♭VII movements', 'Lydian: I-II progressions']
  },
  {
    title: 'Genre Definition',
    description: 'Different modes define the characteristic sounds of musical genres',
    icon: '🎵',
    examples: ['Jazz: Dorian, Mixolydian', 'Flamenco: Phrygian', 'Celtic: Dorian, Mixolydian']
  },
  {
    title: 'Emotional Expression',
    description: 'Modes provide specific emotional colors and atmospheric qualities',
    icon: '💫',
    examples: ['Lydian: dreamy, floating', 'Phrygian: dark, exotic', 'Mixolydian: confident, bluesy']
  }
];

export default function ModesPage() {
  return (
    <Layout>
      <Header
        title="Music Theory: Modal Scales"
        subtitle="Master the seven modes of the major scale and unlock new dimensions of musical expression"
      />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <div className="mb-8">
            <Link 
              href="/lessons/theory" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span className="mr-2">←</span>
              Back to Music Theory
            </Link>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">🎭</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Understanding Musical Modes
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Modes are variations of the major scale that create distinct musical colors and emotional qualities. 
              Each mode starts from a different degree of the major scale, producing unique interval patterns that 
              define genres, create atmosphere, and expand your improvisational vocabulary beyond basic major and minor scales.
            </p>
          </div>

          {/* What Are Modes */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Are Musical Modes?</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Modes are different starting points within the same set of notes, creating unique interval relationships and 
                  characteristic sounds. All seven modes use the same notes as their parent major scale, but each mode emphasizes 
                  different tonal centers and creates distinct musical personalities:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-purple-900 mb-4">Modal Character</h3>
                    <ul className="text-purple-800 space-y-2">
                      <li>• Unique interval patterns and relationships</li>
                      <li>• Distinctive emotional and atmospheric qualities</li>
                      <li>• Characteristic chord progressions and movements</li>
                      <li>• Genre-defining sounds and applications</li>
                    </ul>
                  </div>
                  <div className="bg-indigo-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-indigo-900 mb-4">Musical Applications</h3>
                    <ul className="text-indigo-800 space-y-2">
                      <li>• Jazz and fusion improvisation</li>
                      <li>• Rock and blues lead guitar</li>
                      <li>• Folk and world music traditions</li>
                      <li>• Contemporary composition and arrangement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mode Categories */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Modal Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {modeCategories.map((category, index) => (
                  <div key={index} className={`${category.color} rounded-lg p-6 border-2`}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{category.name}</h3>
                    <p className="text-sm text-gray-700 mb-4">{category.description}</p>
                    <div className="space-y-1">
                      {category.modes.map((mode, modeIndex) => (
                        <div key={modeIndex} className="text-xs bg-white bg-opacity-60 rounded px-2 py-1">
                          {mode}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Modal Applications */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Modal Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {modalApplications.map((app, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="text-3xl mb-4 text-center">{app.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">{app.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 text-center">{app.description}</p>
                    <div className="space-y-2">
                      {app.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="text-xs text-gray-500 bg-white rounded px-3 py-2">
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* All Modes */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Seven Musical Modes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {modeTypes.map((mode) => (
                  <Link
                    key={mode.name}
                    href={mode.href}
                    className={`${mode.color} rounded-lg border-2 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group`}
                  >
                    <div className="text-center mb-4">
                      <div className={`text-4xl mb-2 ${mode.iconColor}`}>{mode.icon}</div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700">
                        {mode.name}
                      </h3>
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm text-gray-600 text-center">{mode.description}</p>
                      <div className="bg-white bg-opacity-60 rounded p-3 space-y-2">
                        <div className="text-xs text-gray-500">
                          <span className="font-medium">Formula:</span> {mode.formula}
                        </div>
                        <div className="text-xs text-gray-500">
                          <span className="font-medium">Degrees:</span> {mode.degrees}
                        </div>
                        <div className="text-xs text-gray-500">
                          <span className="font-medium">Mood:</span> {mode.mood}
                        </div>
                        <div className="text-xs text-gray-500">
                          <span className="font-medium">Character:</span> {mode.characteristic}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Get Started */}
          <section>
            <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Start Your Modal Journey</h2>
              <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
                Begin with the most practical and commonly used modes, then expand to explore more exotic sounds. 
                Understanding modes opens up new worlds of musical expression and improvisational possibilities.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/lessons/theory/modes/dorian" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                      <span className="text-2xl">🎷</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Start with Dorian</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      The most practical mode - sophisticated minor sound with jazzy brightness.
                    </p>
                    <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                      Jazz foundation →
                    </span>
                  </div>
                </Link>
                
                <Link href="/lessons/theory/modes/mixolydian" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                      <span className="text-2xl">🎸</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Master Mixolydian</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Essential for rock and blues - major scale with bluesy flat 7th.
                    </p>
                    <span className="text-orange-600 font-medium text-sm group-hover:text-orange-700">
                      Rock & blues →
                    </span>
                  </div>
                </Link>
                
                <Link href="/lessons/theory/modes/lydian" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                      <span className="text-2xl">🌟</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Explore Lydian</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Create dreamy, floating atmospheres with the magical raised 4th.
                    </p>
                    <span className="text-purple-600 font-medium text-sm group-hover:text-purple-700">
                      Dreamy sounds →
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
  );
}
