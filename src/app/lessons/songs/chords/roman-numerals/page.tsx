import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const majorScaleChords = [
  { numeral: 'I', quality: 'Major', example: 'C', function: 'Tonic', stability: 'Very Stable' },
  { numeral: 'ii', quality: 'minor', example: 'Dm', function: 'Subdominant', stability: 'Moderately Stable' },
  { numeral: 'iii', quality: 'minor', example: 'Em', function: 'Tonic (weak)', stability: 'Unstable' },
  { numeral: 'IV', quality: 'Major', example: 'F', function: 'Subdominant', stability: 'Stable' },
  { numeral: 'V', quality: 'Major', example: 'G', function: 'Dominant', stability: 'Unstable (resolves to I)' },
  { numeral: 'vi', quality: 'minor', example: 'Am', function: 'Tonic (relative)', stability: 'Moderately Stable' },
  { numeral: 'vii°', quality: 'diminished', example: 'B°', function: 'Dominant', stability: 'Very Unstable' }
];

const commonProgressions = [
  { name: 'I-V-vi-IV', numerals: 'I - V - vi - IV', keys: 'C - G - Am - F', description: 'The "pop progression" - stable to tension to departure to return preparation' },
  { name: 'vi-IV-I-V', numerals: 'vi - IV - I - V', keys: 'Am - F - C - G', description: 'Emotional journey from introspection to resolution to tension' },
  { name: 'I-vi-IV-V', numerals: 'I - vi - IV - V', keys: 'C - Am - F - G', description: 'Classic 50s progression - smooth voice leading with strong functional movement' },
  { name: 'ii-V-I', numerals: 'ii - V - I', keys: 'Dm - G - C', description: 'Jazz standard cadence - subdominant preparation to dominant resolution' }
];

export default function RomanNumeralsPage() {
  return (
    <Layout>
      <Header
        title="Roman Numeral Analysis"
        subtitle="Learn the universal language for understanding harmonic function and chord relationships"
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Universal Language of Harmony</h2>
          <div className="prose prose-lg text-gray-700 max-w-none">
            <p>
              Roman numeral analysis is like having X-ray vision for music. Instead of just seeing chord names, 
              you'll understand <strong>harmonic function</strong> - why chords work together and how they create 
              emotional movement. This system works across all keys and genres.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-blue-600 mb-2">🔑 Key Independence</h3>
                <p className="text-sm">Learn patterns once, apply them in any key. I-V-vi-IV works in C major, G major, or any major key.</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-blue-600 mb-2">🎯 Functional Understanding</h3>
                <p className="text-sm">See how chords have jobs: I = home, V = tension, IV = departure. Understanding function predicts resolution.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Basic System */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">📊 The Roman Numeral System</h2>
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 p-4 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900">Major Scale Chord Functions (Key of C)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Numeral</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Quality</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Example (C)</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Function</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Stability</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {majorScaleChords.map((chord, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-lg font-mono font-bold text-blue-600">{chord.numeral}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{chord.quality}</td>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">{chord.example}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{chord.function}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{chord.stability}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Notation Rules */}
          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">📝 Notation Rules</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <p><strong>Uppercase = Major chords:</strong> I, IV, V</p>
                <p><strong>Lowercase = minor chords:</strong> ii, iii, vi</p>
                <p><strong>° = diminished chord:</strong> vii°</p>
              </div>
              <div>
                <p><strong>Extensions:</strong> V7, ii7, IM7</p>
                <p><strong>Inversions:</strong> V6 (first inversion), V64 (second inversion)</p>
                <p><strong>Secondary dominants:</strong> V/V (five of five)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Progressions */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">🎵 Common Progressions in Roman Numerals</h2>
          <div className="grid gap-6">
            {commonProgressions.map((progression, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{progression.name}</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                    Universal Pattern
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-mono text-lg text-blue-600 font-bold">{progression.numerals}</p>
                    <p className="text-sm text-gray-600 mt-1">Example in C: {progression.keys}</p>
                  </div>
                  <p className="text-sm text-gray-700">{progression.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Analysis Example */}
        <section className="mb-12 bg-purple-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🔍 Analysis in Action: "Wonderwall" by Oasis</h2>
          <div className="bg-white rounded-lg p-6 border-l-4 border-purple-500">
            <h3 className="font-semibold text-gray-900 mb-4">Verse Progression Analysis</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-mono text-lg"><strong>Em - G - D - C</strong></p>
                  <p className="text-sm text-gray-600 mt-1">Key of G: vi - I - V - IV</p>
                </div>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>Functional Analysis:</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>• <strong>vi (Em):</strong> Relative minor - introspective, emotional</li>
                    <li>• <strong>I (G):</strong> Tonic - home, resolution</li>
                    <li>• <strong>V (D):</strong> Dominant - tension, forward motion</li>
                    <li>• <strong>IV (C):</strong> Subdominant - departure, sets up return</li>
                  </ul>
                </div>
              </div>
              <div className="text-sm text-gray-700 space-y-2">
                <p><strong>Why This Works:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Starts with emotional vulnerability (vi)</li>
                  <li>• Moves to stability (I)</li>
                  <li>• Creates forward momentum (V)</li>
                  <li>• Leaves us hanging on IV, wanting resolution back to vi</li>
                </ul>
                <p className="mt-3"><strong>Emotional Arc:</strong> Melancholy → Hope → Tension → Yearning (perfect for the lyrics!)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">🎯 Practice Exercises</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🎹 Beginner Practice</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Practice I-V-vi-IV in 3 different keys</li>
                <li>• Identify the Roman numerals in simple pop songs</li>
                <li>• Play the major scale and identify each chord's numeral</li>
                <li>• Listen to progressions and predict where they'll resolve</li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🔥 Advanced Practice</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Analyze Beatles songs using Roman numerals</li>
                <li>• Practice secondary dominants (V/V, V/vi)</li>
                <li>• Identify borrowed chords from parallel minor</li>
                <li>• Transpose complex progressions to new keys</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quick Reference */}
        <section className="mb-12 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">📚 Quick Reference Guide</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-green-600 mb-2">Stable Functions</h3>
              <p className="text-sm text-gray-700">I (tonic), vi (relative minor), iii (weak tonic) - these feel like "home" or resting points</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-blue-600 mb-2">Departure Functions</h3>
              <p className="text-sm text-gray-700">IV (subdominant), ii (subdominant) - these move away from home, create motion</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-red-600 mb-2">Dominant Functions</h3>
              <p className="text-sm text-gray-700">V (dominant), vii° (leading tone) - these create tension that wants to resolve to I</p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">🧭 Next Steps</h3>
            <div className="space-y-3">
              <Link 
                href="/lessons/songs/chords/progressions"
                className="block text-sm text-blue-700 hover:text-blue-800 font-medium"
              >
                → Master Common Chord Progressions
              </Link>
              <Link 
                href="/lessons/songs/chords/voice-leading"
                className="block text-sm text-blue-700 hover:text-blue-800 font-medium"
              >
                → Learn Voice Leading Principles
              </Link>
              <Link 
                href="/lessons/songs/analysis-method"
                className="block text-sm text-blue-700 hover:text-blue-800 font-medium"
              >
                → Apply Analysis to Real Songs
              </Link>
            </div>
          </div>
          <div className="bg-purple-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">🔗 Related Topics</h3>
            <div className="space-y-3">
              <Link 
                href="/lessons/songs/chords/substitutions"
                className="block text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                → Chord Substitutions
              </Link>
              <Link 
                href="/lessons/songs/chords/secondary-dominants"
                className="block text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                → Secondary Dominants
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
