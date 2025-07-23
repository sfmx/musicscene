import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inversionTypes = [
  {
    name: 'Root Position',
    symbol: 'C',
    bassNote: 'Root (C)',
    formula: '1-3-5',
    example: 'C-E-G',
    stability: 'Most Stable',
    usage: 'Strong, decisive, foundational',
    commonUse: 'Beginnings, endings, strong beats'
  },
  {
    name: 'First Inversion',
    symbol: 'C/E',
    bassNote: '3rd (E)',
    formula: '3-5-1',
    example: 'E-G-C',
    stability: 'Moderately Stable',
    usage: 'Smooth bass lines, lighter feel',
    commonUse: 'Connecting chords, melodic bass'
  },
  {
    name: 'Second Inversion',
    symbol: 'C/G',
    bassNote: '5th (G)',
    formula: '5-1-3',
    example: 'G-C-E',
    stability: 'Unstable',
    usage: 'Passing chord, creates motion',
    commonUse: 'Between chords, cadential 6/4'
  }
];

const bassLineExamples = [
  {
    progression: 'C - Am - F - G',
    withInversions: 'C - Am/C - F/A - G/B',
    bassLine: 'C - C - A - B',
    analysis: 'Chromatic bass line using inversions',
    effect: 'Smooth, connected bass movement',
    genre: 'Pop, Folk'
  },
  {
    progression: 'F - C/E - Dm - G',
    bassLine: 'F - E - D - G',
    analysis: 'Descending bass line in F major',
    effect: 'Strong melodic bass, sophisticated sound',
    genre: 'Singer-songwriter, Ballads'
  },
  {
    progression: 'C - C/E - F - F/A - Bb - C',
    bassLine: 'C - E - F - A - Bb - C',
    analysis: 'Ascending bass line with inversions',
    effect: 'Building momentum, cinematic quality',
    genre: 'Film music, Progressive'
  }
];

const practicalApplications = [
  {
    situation: 'Smoother Voice Leading',
    problem: 'Chord changes sound choppy or disconnected',
    solution: 'Use inversions to create stepwise bass motion',
    example: 'C - F becomes C - F/A (bass moves C-A instead of C-F)',
    benefit: 'More professional, flowing sound'
  },
  {
    situation: 'Melodic Bass Lines',
    problem: 'Bass line lacks interest or direction',
    solution: 'Choose inversions to create singable bass melodies',
    example: 'I - vi - IV - V becomes I - vi/I - IV - V/VII',
    benefit: 'Bass becomes a counter-melody'
  },
  {
    situation: 'Harmonic Rhythm',
    problem: 'All chords feel equally important',
    solution: 'Use root position for strong beats, inversions for weak',
    example: 'Strong beat = root position, passing beat = inversion',
    benefit: 'Creates rhythmic hierarchy'
  },
  {
    situation: 'Genre Appropriateness',
    problem: 'Chord voicings don\'t fit the style',
    solution: 'Match inversion usage to genre expectations',
    example: 'Folk: more inversions, Rock: more root position',
    benefit: 'Authentic style implementation'
  }
];

const instrumentSpecific = [
  {
    instrument: 'Piano',
    techniques: [
      'Practice inversions across the entire keyboard',
      'Use left hand for bass note, right for upper structure',
      'Learn common voicing patterns (shell voicings, etc.)',
      'Practice scales using different inversion patterns'
    ],
    voicingTips: [
      'Spread voicings across both hands for rich sound',
      'Use pedal to connect inverted chords smoothly',
      'Practice "walking" bass lines with right hand chords'
    ]
  },
  {
    instrument: 'Guitar',
    techniques: [
      'Learn moveable inversion shapes up the neck',
      'Practice bass note on lowest available string',
      'Use partial chords - don\'t need all notes',
      'Combine open strings with fretted inversions'
    ],
    voicingTips: [
      'Focus on clarity - not all notes need to sound',
      'Use thumb for bass notes when necessary',
      'Learn which chord tones are most important'
    ]
  },
  {
    instrument: 'Bass Guitar',
    techniques: [
      'Think about the harmonic function of your note choice',
      'Use chord tones other than root for sophistication',
      'Practice walking bass lines using inversions',
      'Coordinate with other instruments\' voicings'
    ],
    voicingTips: [
      'Root position for stability, inversions for movement',
      'Use inversions to outline chord progressions',
      'Consider the melody when choosing bass notes'
    ]
  }
];

export default function InversionsPage() {
  return (
    <Layout>
      <Header
        title="Chord Inversions"
        subtitle="Understand how bass note choice affects harmonic stability and melodic bass lines"
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Power of the Bass Note</h2>
          <div className="prose prose-lg text-gray-700 max-w-none">
            <p>
              A chord inversion is simply putting a <strong>different chord tone in the bass</strong>. 
              This small change dramatically affects the chord's stability, function, and how it connects 
              to other chords. It's the difference between choppy chord changes and smooth, professional-sounding progressions.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-emerald-600 mb-2">🎯 Voice Leading</h3>
                <p className="text-sm">Inversions create smooth bass lines and better voice leading between chords</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-emerald-600 mb-2">⚖️ Stability Control</h3>
                <p className="text-sm">Choose stability levels: root position = stable, inversions = less stable</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-emerald-600 mb-2">🎵 Melodic Bass</h3>
                <p className="text-sm">Turn your bass line into a melody that supports the harmony</p>
              </div>
            </div>
          </div>
        </section>

        {/* Inversion Types */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">🔄 Types of Inversions</h2>
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 p-4 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900">C Major Chord in All Inversions</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Inversion</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Symbol</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Bass Note</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Notes</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Stability</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Common Usage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {inversionTypes.map((inversion, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">{inversion.name}</td>
                      <td className="px-4 py-3 text-lg font-mono font-bold text-emerald-600">{inversion.symbol}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{inversion.bassNote}</td>
                      <td className="px-4 py-3 text-sm font-mono text-gray-700">{inversion.example}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{inversion.stability}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{inversion.commonUse}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Bass Line Examples */}
        <section className="mb-12 bg-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🎸 Creating Melodic Bass Lines</h2>
          <div className="space-y-6">
            {bassLineExamples.map((example, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border-l-4 border-blue-500">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-900">Basic vs. Inverted Progression</h3>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-600 mb-1">Basic progression:</p>
                      <p className="font-mono text-sm text-gray-800">{example.progression}</p>
                    </div>
                    {example.withInversions && (
                      <div className="bg-blue-50 p-3 rounded">
                        <p className="text-sm text-blue-600 mb-1">With inversions:</p>
                        <p className="font-mono text-lg text-blue-800 font-bold">{example.withInversions}</p>
                      </div>
                    )}
                    <div className="bg-emerald-50 p-3 rounded">
                      <p className="text-sm text-emerald-600 mb-1">Bass line:</p>
                      <p className="font-mono text-lg text-emerald-800 font-bold">{example.bassLine}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-700"><strong>Analysis:</strong> {example.analysis}</p>
                    <p className="text-sm text-gray-700"><strong>Effect:</strong> {example.effect}</p>
                    <p className="text-sm text-gray-600"><strong>Genre:</strong> {example.genre}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Applications */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">🎯 When and Why to Use Inversions</h2>
          <div className="space-y-4">
            {practicalApplications.map((app, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{app.situation}</h3>
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2 py-1 rounded">
                    Solution
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-700"><strong>Problem:</strong> {app.problem}</p>
                    <p className="text-sm text-emerald-700"><strong>Solution:</strong> {app.solution}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-700"><strong>Example:</strong> {app.example}</p>
                    </div>
                    <p className="text-sm text-gray-600"><strong>Benefit:</strong> {app.benefit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Real Song Analysis */}
        <section className="mb-12 bg-purple-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🔍 Analysis: "Let It Be" Verse</h2>
          <div className="bg-white rounded-lg p-6 border-l-4 border-purple-500">
            <h3 className="font-semibold text-gray-900 mb-4">Paul McCartney's Masterful Use of Inversions</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-mono text-lg"><strong>C - G/B - Am - F</strong></p>
                  <p className="text-sm text-gray-600 mt-1">I - V/VII - vi - IV (with G/B inversion)</p>
                </div>
                <div className="bg-purple-50 p-3 rounded">
                  <p className="text-sm text-purple-600 mb-1">Bass line:</p>
                  <p className="font-mono text-lg text-purple-800 font-bold">C - B - A - F</p>
                </div>
                <p className="text-sm text-gray-700">
                  The G/B (first inversion) creates a beautiful descending bass line C-B-A-F
                </p>
              </div>
              <div className="text-sm text-gray-700 space-y-2">
                <p><strong>Why It's Genius:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Creates melodic bass line that supports the vocal</li>
                  <li>• G/B is less stable than G, keeps motion flowing</li>
                  <li>• Descending line mirrors emotional content</li>
                  <li>• Smooth voice leading throughout</li>
                </ul>
                <p className="mt-3"><strong>Alternative:</strong> C - G - Am - F would have bass line C-G-A-F (awkward leap)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Instrument-Specific Techniques */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">🎹 Instrument-Specific Approaches</h2>
          <div className="space-y-6">
            {instrumentSpecific.map((instrument, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{instrument.instrument}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Practice Techniques:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      {instrument.techniques.map((technique, techIndex) => (
                        <li key={techIndex} className="flex items-start">
                          <span className="text-emerald-500 mr-2">•</span>
                          <span>{technique}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Voicing Tips:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      {instrument.voicingTips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Patterns */}
        <section className="mb-12 bg-yellow-50 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">📚 Essential Inversion Patterns</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">🎵 Descending Bass Lines</h3>
              <div className="space-y-2 text-sm">
                <div className="bg-gray-50 p-2 rounded font-mono">I - V/VII - vi - V/II - IV</div>
                <div className="bg-gray-50 p-2 rounded font-mono">C - G/B - Am - F/A - F</div>
                <p className="text-gray-600">Creates smooth descending motion</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">🎵 Ascending Bass Lines</h3>
              <div className="space-y-2 text-sm">
                <div className="bg-gray-50 p-2 rounded font-mono">I - I/III - IV - IV/VI</div>
                <div className="bg-gray-50 p-2 rounded font-mono">C - C/E - F - F/A</div>
                <p className="text-gray-600">Builds momentum and energy</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">🎵 Chromatic Bass Motion</h3>
              <div className="space-y-2 text-sm">
                <div className="bg-gray-50 p-2 rounded font-mono">I - I/III - IV - #iv° - V</div>
                <div className="bg-gray-50 p-2 rounded font-mono">C - C/E - F - F#° - G</div>
                <p className="text-gray-600">Sophisticated chromatic movement</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">🎵 Pedal Point Bass</h3>
              <div className="space-y-2 text-sm">
                <div className="bg-gray-50 p-2 rounded font-mono">I - IV/I - V/I - I</div>
                <div className="bg-gray-50 p-2 rounded font-mono">C - F/C - G/C - C</div>
                <p className="text-gray-600">Harmony changes over static bass</p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">🏃‍♂️ Practice Exercises</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🎹 Beginner Practice</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Learn all inversions of major and minor triads</li>
                <li>• Practice I-V-vi-IV with different bass notes</li>
                <li>• Play simple melodies, harmonize with inversions</li>
                <li>• Focus on smooth bass line movement</li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🔥 Advanced Practice</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Practice inversions with 7th chords</li>
                <li>• Create bass lines that tell musical stories</li>
                <li>• Reharmonize songs using strategic inversions</li>
                <li>• Study classical voice leading principles</li>
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
                href="/lessons/songs/chords/voice-leading"
                className="block text-sm text-blue-700 hover:text-blue-800 font-medium"
              >
                → Master Voice Leading
              </Link>
              <Link 
                href="/lessons/songs/chords/extended"
                className="block text-sm text-blue-700 hover:text-blue-800 font-medium"
              >
                → Learn Extended Chord Inversions
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
                href="/lessons/songs/chords/progressions"
                className="block text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                → Common Chord Progressions
              </Link>
              <Link 
                href="/lessons/songs/chords/substitutions"
                className="block text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                → Chord Substitutions
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
