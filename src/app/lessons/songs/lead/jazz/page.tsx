import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const jazzConcepts = [
  {
    concept: 'Chord-Scale Relationships',
    description: 'Matching appropriate scales to each chord in a progression',
    application: 'Use Dorian over minor 7th chords, Mixolydian over dominant 7th, Ionian over major 7th',
    complexity: 'Advanced',
    practiceIdea: 'Practice ii-V-I progressions with correct scales for each chord'
  },
  {
    concept: 'Altered Scales',
    description: 'Scales with chromatic alterations that create sophisticated harmony',
    application: 'Use altered scale over V7alt chords, harmonic minor over mMaj7 chords',
    complexity: 'Advanced',
    practiceIdea: 'Learn altered scale (7th mode of melodic minor) and practice over V7alt chords'
  },
  {
    concept: 'Chromatic Approach Notes',
    description: 'Using half-step approaches to target chord tones',
    application: 'Approach chord tones from above and below chromatically',
    complexity: 'Intermediate',
    practiceIdea: 'Practice approaching every chord tone from a half-step above and below'
  },
  {
    concept: 'Bebop Lines',
    description: 'Linear, single-note lines that outline chord progressions',
    application: 'Create flowing eighth-note lines that connect chord changes smoothly',
    complexity: 'Advanced',
    practiceIdea: 'Learn bebop scales (major, minor, dominant) and practice over standards'
  }
];

const jazzScales = [
  {
    scale: 'Dorian Mode',
    degrees: '1-2-♭3-4-5-6-♭7',
    usage: 'Minor 7th chords',
    character: 'Sophisticated minor sound',
    jazzContext: 'Minor ii chords, minor modal tunes',
    example: 'D Dorian over Dm7 in C major'
  },
  {
    scale: 'Mixolydian Mode',
    degrees: '1-2-3-4-5-6-♭7',
    usage: 'Dominant 7th chords',
    character: 'Bluesy major with flat 7th',
    jazzContext: 'V7 chords, blues, swing',
    example: 'G Mixolydian over G7 in C major'
  },
  {
    scale: 'Altered Scale',
    degrees: '1-♭2-♯2-3-♯4-♯5-♭7',
    usage: 'Altered dominant chords',
    character: 'Dark, sophisticated tension',
    jazzContext: 'V7alt chords, modern jazz',
    example: 'G altered over G7♯11♭13'
  },
  {
    scale: 'Harmonic Minor',
    degrees: '1-2-♭3-4-5-♭6-7',
    usage: 'Minor major 7th chords',
    character: 'Exotic, Middle Eastern flavor',
    jazzContext: 'mMaj7 chords, exotic harmony',
    example: 'A harmonic minor over AmMaj7'
  },
  {
    scale: 'Bebop Dominant',
    degrees: '1-2-3-4-5-6-♭7-7',
    usage: 'Dominant 7th chords with passing tones',
    character: 'Classic bebop sound',
    jazzContext: 'Fast bebop lines, V7 chords',
    example: 'G bebop dominant over G7'
  }
];

const jazzProgressions = [
  {
    name: 'ii-V-I Major',
    progression: 'Dm7-G7-CMaj7',
    scales: ['D Dorian', 'G Mixolydian', 'C Ionian'],
    approach: 'Most important jazz progression - practice in all keys',
    variations: ['ii-V-I minor', 'Extended ii-V-I', 'Tritone substitution']
  },
  {
    name: 'ii-V-i Minor',
    progression: 'Dm7♭5-G7alt-Cm7',
    scales: ['D Locrian', 'G Altered', 'C Dorian'],
    approach: 'Minor version requires different scale choices',
    variations: ['Natural minor ii-V', 'Harmonic minor ii-V']
  },
  {
    name: 'Rhythm Changes',
    progression: 'I-VI-ii-V (A section)',
    scales: ['Target chord tones, use bebop scales'],
    approach: 'Based on "I Got Rhythm", fundamental jazz form',
    variations: ['Different bridge harmonies', 'Reharmonizations']
  },
  {
    name: 'Giant Steps Changes',
    progression: 'Major 3rd cycle movements',
    scales: ['Different scale for each chord center'],
    approach: 'Advanced harmonic movement, requires smooth voice leading',
    variations: ['Coltrane changes', 'Cycle of thirds']
  }
];

const jazzTechniques = [
  {
    technique: 'Voice Leading',
    description: 'Smooth melodic connection between chord changes',
    application: 'Move to nearest chord tone on chord changes, create smooth lines',
    difficulty: 'Intermediate',
    exercise: 'Practice moving between chord tones using smallest intervals possible'
  },
  {
    technique: 'Enclosures',
    description: 'Surrounding target notes with upper and lower neighbors',
    application: 'Approach chord tones from above and below for sophisticated sound',
    difficulty: 'Intermediate',
    exercise: 'Practice enclosing every chord tone from half-step above and below'
  },
  {
    technique: 'Digital Patterns',
    description: 'Number-based melodic patterns applied to scales',
    application: 'Create systematic ways to practice scales and develop technical facility',
    difficulty: 'Intermediate',
    exercise: 'Practice 1-2-3-5, 1-3-2-4, and other patterns through scales'
  },
  {
    technique: 'Superimposition',
    description: 'Playing scales or patterns that are outside the basic harmony',
    application: 'Create tension and color by temporarily ignoring underlying harmony',
    difficulty: 'Advanced',
    exercise: 'Practice playing pentatonic scales from different roots over static chords'
  }
];

export default function JazzLeadPage() {
  return (
    <Layout>
      <Header
        title="Jazz Lead Guitar Concepts"
        subtitle="Explore jazz lead guitar through chord substitutions, altered scales, and sophisticated harmonic concepts."
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Core Concept */}
        <section className="mb-12 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Jazz Guitar: Harmony in Motion</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">🎭 Sophisticated Harmony</h3>
              <p className="text-gray-600 mb-3">
                Jazz lead guitar is built on understanding complex harmony. Every note choice is informed by the underlying chord progression and harmonic movement.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Key Principle:</strong> Know what chord is playing and choose scales/notes that enhance the harmony
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">🎯 Linear Thinking</h3>
              <p className="text-gray-600 mb-3">
                Jazz emphasizes horizontal (melodic) thinking over vertical (chordal) thinking. Create flowing lines that connect chord changes smoothly.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Goal:</strong> Seamless, flowing eighth-note lines that outline the harmony while creating forward motion
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Jazz Concepts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Jazz Lead Concepts</h2>
          <div className="space-y-6">
            {jazzConcepts.map((concept, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="grid md:grid-cols-12 gap-4">
                  <div className="md:col-span-3">
                    <div className="flex items-center mb-2">
                      <h3 className="font-semibold text-gray-800 text-lg mr-3">{concept.concept}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        concept.complexity === 'Advanced' ? 'bg-red-100 text-red-800' :
                        concept.complexity === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {concept.complexity}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{concept.description}</p>
                  </div>
                  <div className="md:col-span-4">
                    <h4 className="font-medium text-gray-700 mb-2">Application:</h4>
                    <p className="text-sm text-gray-600">{concept.application}</p>
                  </div>
                  <div className="md:col-span-5">
                    <h4 className="font-medium text-gray-700 mb-2">Practice Idea:</h4>
                    <p className="text-xs text-gray-500 italic">{concept.practiceIdea}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Jazz Scales */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Jazz Scales</h2>
          <div className="grid md:grid-cols-1 gap-6">
            {jazzScales.map((scale, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <div className="grid md:grid-cols-5 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-1">{scale.scale}</h3>
                    <p className="text-blue-800 font-mono text-sm">{scale.degrees}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-800 mb-2">Usage:</h4>
                    <p className="text-sm text-blue-700">{scale.usage}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-800 mb-2">Character:</h4>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                      {scale.character}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-800 mb-2">Jazz Context:</h4>
                    <p className="text-sm text-blue-700">{scale.jazzContext}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-800 mb-2">Example:</h4>
                    <p className="text-xs text-blue-600 italic">{scale.example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Jazz Progressions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Jazz Progressions</h2>
          <div className="space-y-6">
            {jazzProgressions.map((progression, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-2">{progression.name}</h3>
                    <p className="text-sm text-green-600 font-mono">{progression.progression}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Scale Choices:</h4>
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
                    <h4 className="font-medium text-gray-700 mb-2">Variations:</h4>
                    <div className="space-y-1">
                      {progression.variations.map((variation, i) => (
                        <span key={i} className="block text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                          {variation}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Jazz Techniques */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced Jazz Lead Techniques</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {jazzTechniques.map((technique, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-purple-900">{technique.technique}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    technique.difficulty === 'Advanced' ? 'bg-red-100 text-red-800' :
                    technique.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {technique.difficulty}
                  </span>
                </div>
                <p className="text-purple-800 text-sm mb-3">{technique.description}</p>
                <div className="mb-3">
                  <h4 className="font-medium text-purple-800 mb-2">Application:</h4>
                  <p className="text-purple-700 text-sm">{technique.application}</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <h4 className="font-medium text-purple-800 mb-2">Exercise:</h4>
                  <p className="text-purple-600 text-xs">{technique.exercise}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practice Method */}
        <section className="mb-12 bg-green-50 rounded-xl p-8 border border-green-200">
          <h2 className="text-2xl font-bold text-green-900 mb-6">🎯 Jazz Lead Practice Method</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-4">
              <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                <span className="text-green-800 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-green-800 mb-2">Learn the Changes</h3>
              <p className="text-green-700 text-sm">
                Before soloing, play through the chord progression slowly. Know every chord and its function.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                <span className="text-green-800 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-green-800 mb-2">Scale-Chord Practice</h3>
              <p className="text-green-700 text-sm">
                Practice appropriate scales over each chord. Start slowly, focus on smooth transitions.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                <span className="text-green-800 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-green-800 mb-2">Arpeggios & Voice Leading</h3>
              <p className="text-green-700 text-sm">
                Practice chord arpeggios and voice leading between chords. This creates the harmonic foundation.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                <span className="text-green-800 font-bold">4</span>
              </div>
              <h3 className="font-semibold text-green-800 mb-2">Linear Development</h3>
              <p className="text-green-700 text-sm">
                Create flowing eighth-note lines that connect chord changes. Focus on horizontal movement.
              </p>
            </div>
          </div>
        </section>

        {/* Jazz Standards */}
        <section className="mb-12 bg-amber-50 rounded-xl p-8 border border-amber-200">
          <h2 className="text-2xl font-bold text-amber-900 mb-6">🎵 Essential Jazz Standards for Guitar</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-amber-800 mb-2">"Autumn Leaves" - ii-V-I Practice</h3>
              <p className="text-amber-700 text-sm">
                <strong>Key Centers:</strong> Bb Major/G minor | <strong>Focus:</strong> Major and minor ii-V-I progressions
                <br/><strong>Practice:</strong> Perfect for learning chord-scale relationships and voice leading
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-amber-800 mb-2">"All The Things You Are" - Advanced Changes</h3>
              <p className="text-amber-700 text-sm">
                <strong>Key Centers:</strong> Multiple keys | <strong>Focus:</strong> Key center modulation and complex harmony
                <br/><strong>Practice:</strong> Advanced harmonic movement and sophisticated chord substitutions
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-amber-800 mb-2">"Blue Bossa" - Latin Jazz</h3>
              <p className="text-amber-700 text-sm">
                <strong>Key Centers:</strong> Cm/Db Major | <strong>Focus:</strong> Latin rhythm and minor ii-V-I
                <br/><strong>Practice:</strong> Combining jazz harmony with Latin rhythmic feel
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-amber-800 mb-2">"Giant Steps" - Coltrane Changes</h3>
              <p className="text-amber-700 text-sm">
                <strong>Key Centers:</strong> B-G-Eb cycle | <strong>Focus:</strong> Rapid harmonic movement, major 3rd cycles
                <br/><strong>Practice:</strong> Advanced technique and harmonic sophistication
              </p>
            </div>
          </div>
        </section>

        {/* Jazz Guitar Masters */}
        <section className="mb-12 bg-indigo-50 rounded-xl p-8 border border-indigo-200">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6">🎸 Jazz Guitar Masters to Study</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-800 mb-2">Wes Montgomery - Octaves and Thumb Picking</h3>
              <p className="text-indigo-700 text-sm">
                <strong>Signature:</strong> Octave melodies, thumb picking, chord-melody playing
                <br/><strong>Learn:</strong> Octave technique, single-note lines, and how to build solos in sections
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-800 mb-2">Joe Pass - Solo Guitar Mastery</h3>
              <p className="text-indigo-700 text-sm">
                <strong>Signature:</strong> Solo guitar arrangements, chord-melody, virtuosic technique
                <br/><strong>Learn:</strong> How to play melody, harmony, and bass lines simultaneously
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-800 mb-2">Jim Hall - Subtle Sophistication</h3>
              <p className="text-indigo-700 text-sm">
                <strong>Signature:</strong> Understated style, perfect note choice, harmonic sophistication
                <br/><strong>Learn:</strong> Economy of motion, chord substitutions, melodic development
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-800 mb-2">Pat Metheny - Modern Jazz Fusion</h3>
              <p className="text-indigo-700 text-sm">
                <strong>Signature:</strong> Modern harmony, long flowing lines, electronic integration
                <br/><strong>Learn:</strong> Contemporary jazz concepts, wide interval leaps, modal playing
              </p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="text-center">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Continue Your Lead Guitar Journey</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/lessons/songs/lead/country"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Next: Country Lead Techniques →
              </Link>
              <Link 
                href="/lessons/songs/lead/rock"
                className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
              >
                ← Previous: Rock Lead Guitar
              </Link>
              <Link 
                href="/lessons/songs/lead"
                className="inline-flex items-center px-4 py-2 bg-gray-500 text-white font-medium rounded-lg hover:bg-gray-600 transition-colors"
              >
                Lead Guitar Overview
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
