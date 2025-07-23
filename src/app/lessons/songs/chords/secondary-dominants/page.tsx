import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const secondaryDominants = [
  {
    target: 'ii (Dm)',
    secondary: 'V/ii (A7)',
    example: 'A7 → Dm',
    analysis: 'A7 contains C# which leads strongly to D',
    usage: 'Very common - tonicizes the ii chord',
    songs: ['"Autumn Leaves"', 'Many folk songs']
  },
  {
    target: 'iii (Em)',
    secondary: 'V/iii (B7)',
    example: 'B7 → Em',
    analysis: 'B7 contains D# which leads to E',
    usage: 'Less common but effective for minor flavor',
    songs: ['"My Funny Valentine"', 'Jazz ballads']
  },
  {
    target: 'IV (F)',
    secondary: 'V/IV (C7)',
    example: 'C7 → F',
    analysis: 'C7 contains Bb which leads to F',
    usage: 'Common in country and folk',
    songs: ['"Sweet Caroline"', 'Country standards']
  },
  {
    target: 'V (G)',
    secondary: 'V/V (D7)',
    example: 'D7 → G7',
    analysis: 'D7 contains F# which leads to G',
    usage: 'Extremely common - prepares the dominant',
    songs: ['"I Got Rhythm"', 'Thousands of songs']
  },
  {
    target: 'vi (Am)',
    secondary: 'V/vi (E7)',
    example: 'E7 → Am',
    analysis: 'E7 contains G# which leads to A',
    usage: 'Very popular for dramatic effect',
    songs: ['"House of the Rising Sun"', '"California Dreamin\'"']
  }
];

const progressionExamples = [
  {
    name: 'Circle of Fifths with Secondary Dominants',
    basic: 'C - F - Bb - Eb - Ab - Db - Gb - B - E - A - D - G - C',
    withSecondaries: 'C - C7 - F - F7 - Bb - Bb7 - Eb...',
    analysis: 'I - V/IV - IV - V/bVII - bVII...',
    explanation: 'Each major chord becomes a dominant 7th leading to the next chord down a 5th',
    genre: 'Jazz, Advanced Harmony'
  },
  {
    name: 'Pop Song with V/vi',
    basic: 'C - Am - F - G',
    withSecondaries: 'C - E7 - Am - F - G',
    analysis: 'I - V/vi - vi - IV - V',
    explanation: 'E7 strongly tonicizes Am, making it feel temporarily like a tonic',
    genre: 'Pop, Folk, Country'
  },
  {
    name: 'Jazz ii-V with V/V',
    basic: 'Dm7 - G7 - C',
    withSecondaries: 'Dm7 - D7 - G7 - C',
    analysis: 'ii7 - V/V - V7 - I',
    explanation: 'D7 prepares G7 more strongly than simple ii7-V7 motion',
    genre: 'Jazz, Sophisticated Pop'
  },
  {
    name: 'Country/Folk IV preparation',
    basic: 'C - F - G - C',
    withSecondaries: 'C - C7 - F - G - C',
    analysis: 'I - V/IV - IV - V - I',
    explanation: 'C7 makes the move to F feel like a strong resolution',
    genre: 'Country, Folk, Bluegrass'
  }
];

const chromaticConcepts = [
  {
    concept: 'Leading Tone Creation',
    description: 'Secondary dominants create leading tones to non-tonic chords',
    example: 'In C major, D7 (V/V) creates F# which leads to G',
    application: 'Any time you want to strongly emphasize a target chord'
  },
  {
    concept: 'Temporary Tonicization',
    description: 'The target chord temporarily feels like a new tonic',
    example: 'E7 → Am makes Am feel like "home" momentarily',
    application: 'Creating key centers within a progression'
  },
  {
    concept: 'Chromatic Voice Leading',
    description: 'Secondary dominants often create chromatic bass lines',
    example: 'C - C7 - F creates bass line C - C - F with chromatic harmony',
    application: 'Smooth, sophisticated harmonic motion'
  },
  {
    concept: 'Circle of Fifths Motion',
    description: 'Chain secondary dominants for continuous forward motion',
    example: 'A7 - D7 - G7 - C (V/ii - V/V - V - I)',
    application: 'Building harmonic momentum and sophistication'
  }
];

export default function SecondaryDominantsPage() {
  return (
    <Layout>
      <Header
        title="Secondary Dominants"
        subtitle="Master the technique of tonicizing other keys temporarily for harmonic interest"
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Temporary Key Changes</h2>
          <div className="prose prose-lg text-gray-700 max-w-none">
            <p>
              Secondary dominants are like taking brief vacations to other keys without actually leaving home. 
              By treating <strong>any chord as if it were a temporary tonic</strong>, you can create stronger 
              resolutions and more sophisticated harmonic motion.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-red-600 mb-2">🎯 Stronger Resolutions</h3>
                <p className="text-sm">V7 → I is the strongest progression in music. Secondary dominants let you use this power anywhere.</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-red-600 mb-2">🌈 Chromatic Color</h3>
                <p className="text-sm">Adds chromatic notes that aren't in the key, creating sophisticated harmonic colors.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Theory Explanation */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">🎼 How Secondary Dominants Work</h2>
          <div className="bg-blue-50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">The Basic Principle</h3>
            <div className="bg-white p-4 rounded">
              <p className="text-sm text-gray-700 mb-2">
                <strong>Any chord can be preceded by its own dominant.</strong> In the key of C major:
              </p>
              <ul className="text-sm text-gray-700 ml-4 space-y-1">
                <li>• Dm can be preceded by A7 (the V7 of D minor)</li>
                <li>• F can be preceded by C7 (the V7 of F major)</li>
                <li>• Am can be preceded by E7 (the V7 of A minor)</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 p-4 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900">Common Secondary Dominants in C Major</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Target Chord</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Secondary Dominant</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Resolution</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Analysis</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Usage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {secondaryDominants.map((dom, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">{dom.target}</td>
                      <td className="px-4 py-3 text-lg font-mono font-bold text-red-600">{dom.secondary}</td>
                      <td className="px-4 py-3 text-sm font-mono text-gray-700">{dom.example}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{dom.analysis}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{dom.usage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Progression Examples */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">🎵 Secondary Dominants in Action</h2>
          <div className="space-y-6">
            {progressionExamples.map((progression, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{progression.name}</h3>
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">
                    {progression.genre}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-600 mb-1">Without secondary dominants:</p>
                      <p className="font-mono text-sm text-gray-800">{progression.basic}</p>
                    </div>
                    <div className="bg-red-50 p-3 rounded">
                      <p className="text-sm text-red-600 mb-1">With secondary dominants:</p>
                      <p className="font-mono text-lg text-red-800 font-bold">{progression.withSecondaries}</p>
                      <p className="text-xs text-red-600 mt-1">{progression.analysis}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700"><strong>Effect:</strong></p>
                    <p className="text-sm text-gray-600 mt-1">{progression.explanation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Advanced Concepts */}
        <section className="mb-12 bg-purple-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🔬 Advanced Secondary Dominant Concepts</h2>
          <div className="space-y-6">
            {chromaticConcepts.map((concept, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border-l-4 border-purple-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{concept.concept}</h3>
                <p className="text-gray-700 mb-3">{concept.description}</p>
                <div className="bg-gray-50 p-3 rounded mb-2">
                  <p className="text-sm text-gray-700"><strong>Example:</strong> {concept.example}</p>
                </div>
                <p className="text-sm text-gray-600"><strong>Application:</strong> {concept.application}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Real Song Analysis */}
        <section className="mb-12 bg-green-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🔍 Analysis: "Sweet Caroline" by Neil Diamond</h2>
          <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-900 mb-4">Secondary Dominants in Popular Music</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-mono text-lg"><strong>C - C7 - F - G - C</strong></p>
                  <p className="text-sm text-gray-600 mt-1">I - V/IV - IV - V - I (in C major)</p>
                </div>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>The V/IV (C7) Effect:</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>• C7 contains Bb (not in C major)</li>
                    <li>• Bb strongly wants to resolve down to A</li>
                    <li>• But it resolves to F instead, creating satisfaction</li>
                    <li>• Makes F feel like a temporary "home"</li>
                  </ul>
                </div>
              </div>
              <div className="text-sm text-gray-700 space-y-2">
                <p><strong>Why It's Effective:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Simple but sophisticated harmonic motion</li>
                  <li>• Creates forward momentum to the IV chord</li>
                  <li>• Adds just enough sophistication without complexity</li>
                  <li>• Perfect for sing-along accessibility</li>
                </ul>
                <p className="mt-3"><strong>Emotional Effect:</strong> Confident → Slightly uncertain → Resolved satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Patterns */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">📚 Essential Secondary Dominant Patterns</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">🎸 Popular Music Patterns</h3>
              <div className="space-y-3 text-sm">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-mono font-bold">I - V/vi - vi - IV</p>
                  <p className="text-gray-600">C - E7 - Am - F</p>
                  <p className="text-xs text-gray-500">Makes vi feel like temporary tonic</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-mono font-bold">I - V/IV - IV - V</p>
                  <p className="text-gray-600">C - C7 - F - G</p>
                  <p className="text-xs text-gray-500">Country/folk progression</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-mono font-bold">vi - V/V - V - I</p>
                  <p className="text-gray-600">Am - D7 - G - C</p>
                  <p className="text-xs text-gray-500">Strong cadential motion</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">🎷 Jazz/Advanced Patterns</h3>
              <div className="space-y-3 text-sm">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-mono font-bold">ii - V/V - V - I</p>
                  <p className="text-gray-600">Dm - D7 - G - C</p>
                  <p className="text-xs text-gray-500">Enhanced ii-V-I progression</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-mono font-bold">V/ii - ii - V - I</p>
                  <p className="text-gray-600">A7 - Dm - G - C</p>
                  <p className="text-xs text-gray-500">Extended ii-V-I approach</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-mono font-bold">Circle of Fifths</p>
                  <p className="text-gray-600">A7-D7-G7-C</p>
                  <p className="text-xs text-gray-500">Chain of secondary dominants</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Tips */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">🎯 How to Practice Secondary Dominants</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🎹 Step-by-Step Practice</h3>
              <ol className="space-y-2 text-sm text-gray-700">
                <li><strong>1.</strong> Learn all V7 chords in every key</li>
                <li><strong>2.</strong> Practice V7 → I resolutions</li>
                <li><strong>3.</strong> Insert secondary dominants into simple progressions</li>
                <li><strong>4.</strong> Practice circle of fifths with dominants</li>
                <li><strong>5.</strong> Analyze songs you know for secondary dominants</li>
              </ol>
            </div>
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🎵 Listening Practice</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Notice when a chord sounds "outside" the key</li>
                <li>• Feel the extra tension before resolution</li>
                <li>• Identify the chromatic notes being added</li>
                <li>• Listen for temporary key center shifts</li>
                <li>• Study jazz standards for advanced usage</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">🧭 Next Steps</h3>
            <div className="space-y-3">
              <Link 
                href="/lessons/songs/chords/inversions"
                className="block text-sm text-blue-700 hover:text-blue-800 font-medium"
              >
                → Master Chord Inversions
              </Link>
              <Link 
                href="/lessons/songs/chords/substitutions"
                className="block text-sm text-blue-700 hover:text-blue-800 font-medium"
              >
                → Advanced Substitutions
              </Link>
              <Link 
                href="/lessons/songs/analysis-method"
                className="block text-sm text-blue-700 hover:text-blue-800 font-medium"
              >
                → Apply to Song Analysis
              </Link>
            </div>
          </div>
          <div className="bg-purple-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">🔗 Related Topics</h3>
            <div className="space-y-3">
              <Link 
                href="/lessons/songs/chords/extended"
                className="block text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                → Extended Chords
              </Link>
              <Link 
                href="/lessons/songs/chords/modal-interchange"
                className="block text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                → Modal Interchange
              </Link>
              <Link 
                href="/lessons/songs/chords"
                className="block text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                ← Back to Chord Theory Overview
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
