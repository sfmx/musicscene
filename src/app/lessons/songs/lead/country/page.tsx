import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const countryTechniques = [
  {
    technique: 'Chicken Picking',
    description: 'Hybrid picking technique combining pick and fingers for distinctive attack',
    application: 'Alternate between pick attack and finger plucking for percussive, country sound',
    fingeringDetails: 'Use pick for down beats, middle finger for upbeats and accents',
    examples: 'Albert Lee, Brad Paisley, Keith Urban',
    practiceIdea: 'Practice scales alternating pick and finger attacks'
  },
  {
    technique: 'Hybrid Picking',
    description: 'Using pick and fingers simultaneously for complex patterns',
    application: 'Play multiple strings at once, create arpeggiated patterns with control',
    fingeringDetails: 'Pick + middle and ring fingers, various combinations',
    examples: 'Chet Atkins, Tommy Emmanuel, Jerry Reed',
    practiceIdea: 'Practice playing melody with pick while fingers play harmony'
  },
  {
    technique: 'Telecaster-Style Bending',
    description: 'Characteristic string bending associated with Telecaster guitars',
    application: 'Quick, precise bends with immediate release, often on higher strings',
    fingeringDetails: 'Use multiple fingers for support, focus on accuracy',
    examples: 'James Burton, Don Rich, Brent Mason',
    practiceIdea: 'Practice bending G string (3rd fret) up whole step with quick release'
  },
  {
    technique: 'Pedal Steel Emulation',
    description: 'Guitar techniques that mimic pedal steel guitar sounds',
    application: 'Volume swells, slides, and bends that create steel guitar-like effects',
    fingeringDetails: 'Use volume knob, string bending, and slide techniques',
    examples: 'Jerry Donahue, Danny Gatton, Albert Lee',
    practiceIdea: 'Practice volume swells combined with string bending'
  }
];

const countryScales = [
  {
    scale: 'Major Pentatonic',
    degrees: '1-2-3-5-6',
    character: 'Bright, uplifting, classic country',
    usage: 'Foundation of country lead playing, works over most major progressions',
    countryContext: 'Chicken picking, fast runs, happy melodies',
    example: 'G major pentatonic: G-A-B-D-E'
  },
  {
    scale: 'Mixolydian Mode',
    degrees: '1-2-3-4-5-6-♭7',
    character: 'Bluesy-major with flat 7th',
    usage: 'Over dominant 7th chords, country-rock, Southern rock',
    countryContext: 'Adds bluesy flavor to major progressions',
    example: 'G Mixolydian: G-A-B-C-D-E-F'
  },
  {
    scale: 'Country Minor Pentatonic',
    degrees: '1-♭3-4-5-♭7 (with added major 3rd)',
    character: 'Minor pentatonic with major 3rd added',
    usage: 'Creates major/minor ambiguity, very country-specific sound',
    countryContext: 'Classic country blues, honky-tonk style',
    example: 'G minor pentatonic + B natural'
  },
  {
    scale: 'Major Scale',
    degrees: '1-2-3-4-5-6-7',
    character: 'Pure major sound',
    usage: 'For more sophisticated country harmony, ballads',
    countryContext: 'Modern country, country-pop crossover',
    example: 'G major: G-A-B-C-D-E-F#'
  }
];

const countryProgressions = [
  {
    name: 'I-V-vi-IV Progression',
    example: 'G-D-Em-C',
    character: 'Modern country, country-pop',
    scales: ['G major pentatonic', 'G major scale'],
    approach: 'Use major pentatonic as foundation, add passing tones from major scale',
    songs: '"Friends in Low Places", "Cruise", many modern country hits'
  },
  {
    name: 'I-IV-V Progression',
    example: 'G-C-D-G',
    character: 'Traditional country, honky-tonk',
    scales: ['G major pentatonic', 'G Mixolydian'],
    approach: 'Classic three-chord country, emphasize major pentatonic',
    songs: '"Honky Tonk Blues", "Your Cheatin\' Heart", traditional country'
  },
  {
    name: 'ii-V-I Country',
    example: 'Am-D-G',
    character: 'Country ballads, sophisticated harmony',
    scales: ['A Dorian', 'D Mixolydian', 'G major'],
    approach: 'More jazz-influenced, but with country phrasing and techniques',
    songs: '"He Stopped Loving Her Today", country ballads'
  },
  {
    name: 'I-♭VII-IV Progression',
    example: 'G-F-C-G',
    character: 'Country-rock, Southern rock influence',
    scales: ['G Mixolydian', 'G major pentatonic'],
    approach: 'Use Mixolydian mode to handle the ♭VII chord',
    songs: '"Sweet Home Alabama" influence in country'
  }
];

const countrySubgenres = [
  {
    style: 'Traditional Country',
    period: '1940s-1960s',
    characteristics: 'Simple melodies, major pentatonic focus, Telecaster tone',
    keyPlayers: 'James Burton, Don Rich, Roy Nichols',
    techniques: 'Basic bending, Telecaster-style picking, clean tone',
    equipment: 'Fender Telecaster, tube amps, minimal effects'
  },
  {
    style: 'Country-Rock',
    period: '1970s-1980s',
    characteristics: 'Rock influence, more aggressive playing, power chords',
    keyPlayers: 'Danny Gatton, Albert Lee, Jerry Donahue',
    techniques: 'Hybrid picking, rock-influenced bending, higher gain',
    equipment: 'Telecasters and Strats, Marshall amps, some effects'
  },
  {
    style: 'Modern Country',
    period: '1990s-present',
    characteristics: 'Pop influence, sophisticated harmony, production-heavy',
    keyPlayers: 'Brad Paisley, Keith Urban, Brent Mason',
    techniques: 'Advanced hybrid picking, effects usage, technical virtuosity',
    equipment: 'Various guitars, digital effects, modern production'
  },
  {
    style: 'Country Blues',
    period: 'All eras',
    characteristics: 'Blues influence in country context, minor pentatonic usage',
    keyPlayers: 'Jerry Reed, Chet Atkins, Tommy Emmanuel',
    techniques: 'Fingerstyle elements, blues bending, complex arrangements',
    equipment: 'Hollow-body guitars, acoustic guitars, vintage amps'
  }
];

const countryLicks = [
  {
    name: 'Classic Telecaster Bend',
    description: 'Quick whole-step bend on G string with immediate release',
    technique: 'Bend 3rd fret G string up to 5th fret pitch, release quickly',
    usage: 'End of phrases, turnarounds, classic country punctuation',
    variation: 'Can be done with pre-bend, or combined with open strings'
  },
  {
    name: 'Chicken Pickin\' Run',
    description: 'Fast major pentatonic run using hybrid picking',
    technique: 'Alternate pick and middle finger attacks for percussive sound',
    usage: 'Fast passages, fills between vocal lines, showing off',
    variation: 'Can be played with different rhythmic subdivisions'
  },
  {
    name: 'Open String Pull-off',
    description: 'Pull-off to open strings for bright, ringing sound',
    technique: 'Fret note, pull off to open string for country brightness',
    usage: 'Creates classic country "jangle", works in many contexts',
    variation: 'Combine with hammer-ons for flowing passages'
  },
  {
    name: 'Pedal Steel Simulation',
    description: 'Volume swell combined with string bending',
    technique: 'Use volume knob to create swell while bending strings',
    usage: 'Ballads, emotional passages, mimicking pedal steel guitar',
    variation: 'Can be combined with slide techniques'
  }
];

export default function CountryLeadPage() {
  return (
    <Layout>
      <Header
        title="Country Lead Guitar Techniques"
        subtitle="Learn country lead guitar including chicken picking, hybrid picking, and Telecaster-style phrasing."
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Core Concept */}
        <section className="mb-12 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Country Lead Guitar: Twang Meets Technique</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">🤠 The Telecaster Sound</h3>
              <p className="text-gray-600 mb-3">
                Country lead guitar is built around the bright, articulate sound of the Fender Telecaster. Clean, percussive attack and precise technique are essential.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Core Elements:</strong> Hybrid picking, string bending, major pentatonic scales, clean articulation
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">🎯 Precision and Clarity</h3>
              <p className="text-gray-600 mb-3">
                Country lead emphasizes clean execution and musical taste over speed or complexity. Every note should be clear and purposeful.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Philosophy:</strong> Technical proficiency serves the song, not the other way around. Melody and groove are paramount.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Country Techniques */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Country Lead Techniques</h2>
          <div className="space-y-6">
            {countryTechniques.map((technique, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="grid md:grid-cols-12 gap-4">
                  <div className="md:col-span-3">
                    <h3 className="font-semibold text-gray-800 text-lg mb-2">{technique.technique}</h3>
                    <p className="text-sm text-gray-600">{technique.description}</p>
                  </div>
                  <div className="md:col-span-3">
                    <h4 className="font-medium text-gray-700 mb-2">Application:</h4>
                    <p className="text-sm text-gray-600">{technique.application}</p>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-medium text-gray-700 mb-2">Technique:</h4>
                    <p className="text-xs text-gray-600">{technique.fingeringDetails}</p>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-medium text-gray-700 mb-2">Key Players:</h4>
                    <p className="text-xs text-gray-500">{technique.examples}</p>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-medium text-gray-700 mb-2">Practice:</h4>
                    <p className="text-xs text-gray-500 italic">{technique.practiceIdea}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Country Scales */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Country Scales</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {countryScales.map((scale, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-200">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-orange-900">{scale.scale}</h3>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                    {scale.character}
                  </span>
                </div>
                <p className="text-orange-800 font-mono text-sm mb-3">{scale.degrees}</p>
                <p className="text-orange-700 text-sm mb-3">{scale.usage}</p>
                <div className="bg-white p-3 rounded-lg mb-3">
                  <p className="text-sm text-orange-600">
                    <strong>Example:</strong> {scale.example}
                  </p>
                </div>
                <p className="text-orange-600 text-xs italic">
                  <strong>Country Context:</strong> {scale.countryContext}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Country Progressions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Country Progressions & Scale Applications</h2>
          <div className="space-y-6">
            {countryProgressions.map((progression, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="grid md:grid-cols-5 gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-2">{progression.name}</h3>
                    <p className="text-sm text-blue-600 font-mono">{progression.example}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Character:</h4>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
                      {progression.character}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Best Scales:</h4>
                    <div className="space-y-1">
                      {progression.scales.map((scale, i) => (
                        <span key={i} className="block text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded">
                          {scale}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Approach:</h4>
                    <p className="text-sm text-gray-600">{progression.approach}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Examples:</h4>
                    <p className="text-xs text-gray-500 italic">{progression.songs}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Country Subgenres */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Country Guitar Through the Decades</h2>
          <div className="space-y-6">
            {countrySubgenres.map((style, index) => (
              <div key={index} className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 border border-green-200">
                <div className="grid md:grid-cols-6 gap-4">
                  <div>
                    <h3 className="font-semibold text-green-800 text-lg mb-1">{style.style}</h3>
                    <p className="text-sm text-green-600">{style.period}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">Sound:</h4>
                    <p className="text-sm text-green-600">{style.characteristics}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">Key Players:</h4>
                    <p className="text-xs text-green-500">{style.keyPlayers}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">Techniques:</h4>
                    <p className="text-xs text-green-600">{style.techniques}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">Equipment:</h4>
                    <p className="text-xs text-green-500">{style.equipment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Classic Country Licks */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Classic Country Licks</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {countryLicks.map((lick, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                <h3 className="text-lg font-semibold text-amber-900 mb-2">{lick.name}</h3>
                <p className="text-amber-800 text-sm mb-3">{lick.description}</p>
                <div className="mb-3">
                  <h4 className="font-medium text-amber-800 mb-1">Technique:</h4>
                  <p className="text-amber-700 text-sm">{lick.technique}</p>
                </div>
                <div className="mb-3">
                  <h4 className="font-medium text-amber-800 mb-1">Usage:</h4>
                  <p className="text-amber-700 text-sm">{lick.usage}</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="text-amber-600 text-xs">
                    <strong>Variation:</strong> {lick.variation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hybrid Picking Guide */}
        <section className="mb-12 bg-purple-50 rounded-xl p-8 border border-purple-200">
          <h2 className="text-2xl font-bold text-purple-900 mb-6">🎸 Hybrid Picking Mastery</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-purple-800 mb-3">Basic Hybrid Picking</h3>
              <p className="text-purple-700 text-sm mb-3">
                Use pick for bass strings, middle finger for treble strings. Start slowly with simple patterns.
              </p>
              <p className="text-xs text-purple-600 italic">
                Foundation for all country lead techniques
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-purple-800 mb-3">Chicken Picking</h3>
              <p className="text-purple-700 text-sm mb-3">
                Aggressive finger attack creates percussive "pop" sound. Use for fast passages and accents.
              </p>
              <p className="text-xs text-purple-600 italic">
                Signature country sound, requires practice for clean execution
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-purple-800 mb-3">Advanced Patterns</h3>
              <p className="text-purple-700 text-sm mb-3">
                Use pick + multiple fingers for complex arpeggios and fast scalar passages.
              </p>
              <p className="text-xs text-purple-600 italic">
                Allows for incredible speed and precision when mastered
              </p>
            </div>
          </div>
        </section>

        {/* Famous Country Players */}
        <section className="mb-12 bg-indigo-50 rounded-xl p-8 border border-indigo-200">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6">🎵 Country Guitar Masters</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-800 mb-2">Chet Atkins - "Mr. Guitar"</h3>
              <p className="text-indigo-700 text-sm">
                <strong>Signature:</strong> Fingerstyle country, sophisticated harmony, "Nashville Sound"
                <br/><strong>Learn:</strong> Fingerstyle technique, chord-melody playing, musical sophistication
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-800 mb-2">Brad Paisley - Modern Country Virtuoso</h3>
              <p className="text-indigo-700 text-sm">
                <strong>Signature:</strong> Technical mastery, hybrid picking, modern country style
                <br/><strong>Learn:</strong> Advanced hybrid picking, effects usage, contemporary country approach
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-800 mb-2">Albert Lee - Country-Rock Pioneer</h3>
              <p className="text-indigo-700 text-sm">
                <strong>Signature:</strong> Incredible speed, hybrid picking mastery, country-rock fusion
                <br/><strong>Learn:</strong> Speed with control, musical phrasing, genre-crossing ability
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-800 mb-2">Brent Mason - Nashville Session King</h3>
              <p className="text-indigo-700 text-sm">
                <strong>Signature:</strong> Incredible versatility, perfect technique, countless hit records
                <br/><strong>Learn:</strong> Professional approach, technical perfection, musical adaptability
              </p>
            </div>
          </div>
        </section>

        {/* Practice Routine */}
        <section className="mb-12 bg-green-50 rounded-xl p-8 border border-green-200">
          <h2 className="text-2xl font-bold text-green-900 mb-6">🎯 Country Lead Practice Routine</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4">
              <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                <span className="text-green-800 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-green-800 mb-2">Hybrid Picking</h3>
              <p className="text-green-700 text-sm">
                Practice basic hybrid picking patterns. Start with scales, progress to arpeggios and complex patterns.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                <span className="text-green-800 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-green-800 mb-2">String Bending</h3>
              <p className="text-green-700 text-sm">
                Practice precise string bending with quick release. Focus on accuracy and clean execution.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                <span className="text-green-800 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-green-800 mb-2">Country Licks</h3>
              <p className="text-green-700 text-sm">
                Learn classic country licks and practice them in different keys and contexts.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                <span className="text-green-800 font-bold">4</span>
              </div>
              <h3 className="font-semibold text-green-800 mb-2">Song Application</h3>
              <p className="text-green-700 text-sm">
                Apply techniques to real country songs. Focus on serving the song rather than showing off.
              </p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="text-center">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Complete Your Lead Guitar Journey</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/lessons/songs/lead"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                ← Back to Lead Guitar Overview
              </Link>
              <Link 
                href="/lessons/songs/lead/jazz"
                className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
              >
                ← Previous: Jazz Lead Concepts
              </Link>
              <Link 
                href="/lessons/songs"
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
              >
                All Song Lessons →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
