import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const substitutionTypes = [
  {
    type: 'Relative Substitution',
    description: 'Replace a chord with its relative major/minor',
    examples: [
      { original: 'I (C)', substitute: 'vi (Am)', explanation: 'Share two common tones (C-E)' },
      { original: 'vi (Am)', substitute: 'I (C)', explanation: 'Brightens minor with major' },
      { original: 'IV (F)', substitute: 'ii (Dm)', explanation: 'Both serve subdominant function' }
    ],
    difficulty: 'Beginner'
  },
  {
    type: 'Tritone Substitution',
    description: 'Replace dominant chord with another dominant a tritone away',
    examples: [
      { original: 'G7 (V7)', substitute: 'Db7 (bII7)', explanation: 'Same tritone interval (B-F), different root' },
      { original: 'D7 (V7/V)', substitute: 'Ab7 (bII7/V)', explanation: 'Chromatic bass movement' }
    ],
    difficulty: 'Advanced'
  },
  {
    type: 'Circle of Fifths',
    description: 'Replace chord with one a 5th away that shares function',
    examples: [
      { original: 'IV (F)', substitute: 'bVII (Bb)', explanation: 'Both move away from tonic' },
      { original: 'vi (Am)', substitute: 'iii (Em)', explanation: 'Parallel motion down the circle' }
    ],
    difficulty: 'Intermediate'
  },
  {
    type: 'Diminished Passing',
    description: 'Use diminished chords between diatonic chords',
    examples: [
      { original: 'I-ii (C-Dm)', substitute: 'I-#idim-ii (C-C#dim-Dm)', explanation: 'Chromatic bass line C-C#-D' },
      { original: 'vi-V (Am-G)', substitute: 'vi-#vidim-V (Am-A#dim-G)', explanation: 'Smooth voice leading' }
    ],
    difficulty: 'Intermediate'
  }
];

const functionalGroups = [
  {
    function: 'Tonic Function',
    chords: ['I', 'vi', 'iii'],
    description: 'Chords that feel stable and at rest',
    substitutions: [
      'I ↔ vi (most common)',
      'I → iii (less stable)',
      'vi → iii (minor to minor)'
    ]
  },
  {
    function: 'Subdominant Function', 
    chords: ['IV', 'ii', 'bVII'],
    description: 'Chords that move away from home',
    substitutions: [
      'IV ↔ ii (both very common)',
      'IV → bVII (rock/modal sound)',
      'ii → bVII (darker color)'
    ]
  },
  {
    function: 'Dominant Function',
    chords: ['V', 'V7', 'vii°', 'bII7'],
    description: 'Chords that create tension and want to resolve',
    substitutions: [
      'V ↔ V7 (add tension)',
      'V7 ↔ bII7 (tritone sub)',
      'V → vii° (leading tone emphasis)'
    ]
  }
];

const practicalExamples = [
  {
    song: '"Let It Be" - Verse',
    original: 'C - G - Am - F',
    romanNumerals: 'I - V - vi - IV',
    substitutions: [
      {
        description: 'Replace vi with iii',
        result: 'C - G - Em - F',
        explanation: 'Em (iii) is less stable than Am (vi), creates more forward motion'
      },
      {
        description: 'Replace IV with ii',
        result: 'C - G - Am - Dm',
        explanation: 'Dm (ii) is darker than F (IV), more melancholic feeling'
      },
      {
        description: 'Add diminished passing',
        result: 'C - G - Am - A#dim - F/Bb',
        explanation: 'A#dim creates chromatic bass line A-A#-Bb'
      }
    ]
  },
  {
    song: '"Yesterday" - Bridge',
    original: 'Em - A7 - Dm - G7',
    romanNumerals: 'iii - VI7 - ii - V7',
    substitutions: [
      {
        description: 'Tritone substitute A7',
        result: 'Em - Eb7 - Dm - G7',
        explanation: 'Eb7 replaces A7, creates chromatic bass movement'
      },
      {
        description: 'Replace iii with I',
        result: 'C - A7 - Dm - G7',
        explanation: 'C major brighter than Em, changes emotional color'
      }
    ]
  }
];

export default function SubstitutionsPage() {
  return (
    <Layout>
      <Header
        title="Chord Substitutions"
        subtitle="Learn how different chords can serve the same harmonic function while adding sophistication"
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Art of Harmonic Choice</h2>
          <div className="prose prose-lg text-gray-700 max-w-none">
            <p>
              Chord substitution is like having a vocabulary of synonyms in music. When you know that several 
              different chords can serve the same <strong>harmonic function</strong>, you can choose the one 
              that best fits the emotional color and voice leading you want.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-orange-600 mb-2">🎨 Emotional Color</h3>
                <p className="text-sm">Same function, different feeling: vi feels nostalgic, iii feels uncertain, both can replace I</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-orange-600 mb-2">🌊 Voice Leading</h3>
                <p className="text-sm">Choose substitutions that create smoother connections between chords</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-orange-600 mb-2">🎯 Sophistication</h3>
                <p className="text-sm">Transform simple progressions into more interesting harmonic journeys</p>
              </div>
            </div>
          </div>
        </section>

        {/* Functional Groups */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">🎯 Substitution by Function</h2>
          <div className="space-y-6">
            {functionalGroups.map((group, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{group.function}</h3>
                    <p className="text-sm text-gray-600 mt-1">{group.description}</p>
                  </div>
                  <div className="bg-gray-100 px-3 py-1 rounded">
                    <span className="text-sm font-mono text-gray-700">{group.chords.join(', ')}</span>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-3">
                  {group.substitutions.map((sub, subIndex) => (
                    <div key={subIndex} className="bg-gray-50 p-3 rounded text-sm text-gray-700">
                      {sub}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Substitution Types */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">🔄 Types of Substitutions</h2>
          <div className="space-y-6">
            {substitutionTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{type.type}</h3>
                    <p className="text-sm text-gray-600 mt-1">{type.description}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded ${
                    type.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                    type.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {type.difficulty}
                  </span>
                </div>
                <div className="space-y-3">
                  {type.examples.map((example, exIndex) => (
                    <div key={exIndex} className="bg-gray-50 p-4 rounded">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-mono text-sm font-medium">
                          {example.original} → {example.substitute}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{example.explanation}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Examples */}
        <section className="mb-12 bg-purple-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🎵 Substitutions in Popular Songs</h2>
          <div className="space-y-8">
            {practicalExamples.map((example, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border-l-4 border-purple-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{example.song}</h3>
                <div className="bg-gray-50 p-4 rounded mb-4">
                  <p className="font-mono text-sm"><strong>Original:</strong> {example.original}</p>
                  <p className="font-mono text-sm text-gray-600"><strong>Analysis:</strong> {example.romanNumerals}</p>
                </div>
                <div className="space-y-4">
                  {example.substitutions.map((sub, subIndex) => (
                    <div key={subIndex} className="border-l-2 border-gray-200 pl-4">
                      <h4 className="font-medium text-gray-900 mb-1">{sub.description}</h4>
                      <p className="font-mono text-sm text-purple-600 mb-1">{sub.result}</p>
                      <p className="text-sm text-gray-600">{sub.explanation}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Jazz vs Pop Substitutions */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">🎭 Genre-Specific Approaches</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">🎷 Jazz Substitutions</h3>
              <div className="space-y-3 text-sm text-blue-700">
                <div className="bg-white p-3 rounded">
                  <p><strong>ii-V-I becomes:</strong> ii-bII7-I</p>
                  <p className="text-xs text-blue-600">Tritone substitute creates chromatic bass movement</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p><strong>Dominant chains:</strong> VII7-III7-VI7-II7-V7-I</p>
                  <p className="text-xs text-blue-600">Each dominant resolves down a 5th</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p><strong>Diminished passing:</strong> Abundant use between any two chords</p>
                  <p className="text-xs text-blue-600">Creates sophisticated harmonic rhythm</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-4">🎸 Pop/Rock Substitutions</h3>
              <div className="space-y-3 text-sm text-green-700">
                <div className="bg-white p-3 rounded">
                  <p><strong>Modal interchange:</strong> bVII, bVI, bIII from parallel minor</p>
                  <p className="text-xs text-green-600">Adds darkness and modal flavor</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p><strong>Relative substitutions:</strong> I ↔ vi most common</p>
                  <p className="text-xs text-green-600">Emotional contrast without losing function</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p><strong>Power chord movement:</strong> Focus on bass line motion</p>
                  <p className="text-xs text-green-600">Function less important than melodic bass</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="mb-12 bg-yellow-50 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">🤔 How to Choose the Right Substitution</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Consider These Factors:</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="bg-white p-3 rounded">
                  <p><strong>1. Voice Leading:</strong> Does it create smoother connections?</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p><strong>2. Emotional Color:</strong> Does it match the lyrical content?</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p><strong>3. Genre Expectations:</strong> What sounds natural in this style?</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p><strong>4. Melody Support:</strong> Does it support the vocal melody?</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Decision Framework:</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Start with function:</strong> What job does this chord need to do?</p>
                <p><strong>Consider context:</strong> What chords come before and after?</p>
                <p><strong>Test alternatives:</strong> Try different options and trust your ears</p>
                <p><strong>Remember the melody:</strong> Some substitutions clash with vocal lines</p>
                <p><strong>Serve the song:</strong> Sophistication should enhance, not distract</p>
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
                <li>• Practice I-vi-IV-V with different tonic substitutions</li>
                <li>• Replace IV with ii in simple progressions</li>
                <li>• Try vi instead of I at the end of phrases</li>
                <li>• Learn to hear functional equivalents</li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🔥 Advanced Practice</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Practice tritone substitutions in ii-V-I progressions</li>
                <li>• Add diminished passing chords to standards</li>
                <li>• Reharmonize simple songs with complex substitutions</li>
                <li>• Analyze jazz standards for substitution patterns</li>
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
                href="/lessons/songs/chords/modal-interchange"
                className="block text-sm text-blue-700 hover:text-blue-800 font-medium"
              >
                → Explore Modal Interchange
              </Link>
              <Link 
                href="/lessons/songs/chords/secondary-dominants"
                className="block text-sm text-blue-700 hover:text-blue-800 font-medium"
              >
                → Learn Secondary Dominants
              </Link>
              <Link 
                href="/lessons/songs/chords/extended"
                className="block text-sm text-blue-700 hover:text-blue-800 font-medium"
              >
                → Master Extended Chords
              </Link>
            </div>
          </div>
          <div className="bg-purple-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">🔗 Related Topics</h3>
            <div className="space-y-3">
              <Link 
                href="/lessons/songs/chords/voice-leading"
                className="block text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                → Voice Leading Principles
              </Link>
              <Link 
                href="/lessons/songs/chords/roman-numerals"
                className="block text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                → Roman Numeral Analysis
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
