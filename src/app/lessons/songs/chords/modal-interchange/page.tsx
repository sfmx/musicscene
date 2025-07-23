import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const borrowedChords = [
  {
    chord: 'bVII',
    example: 'Bb in C major',
    from: 'C minor',
    function: 'Subtonic',
    usage: 'Very common in rock - creates modal/bluesy feel',
    songs: ['"Sweet Child O\' Mine"', '"Don\'t Stop Believin\'"']
  },
  {
    chord: 'bVI',
    example: 'Ab in C major',
    from: 'C minor',
    function: 'Submediant',
    usage: 'Dramatic, cinematic quality - often before bVII',
    songs: ['"Creep"', '"While My Guitar Gently Weeps"']
  },
  {
    chord: 'bIII',
    example: 'Eb in C major',
    from: 'C minor',
    function: 'Mediant',
    usage: 'Dark, mysterious - less common but powerful',
    songs: ['"Blackbird"', '"Michelle"']
  },
  {
    chord: 'iv',
    example: 'Fm in C major',
    from: 'C minor',
    function: 'Minor subdominant',
    usage: 'Adds melancholy to major keys - "picardy third"',
    songs: ['"Hey Jude"', '"Eleanor Rigby"']
  },
  {
    chord: 'ii°',
    example: 'D° in C major',
    from: 'C minor',
    function: 'Diminished supertonic',
    usage: 'Tension and instability - often passing',
    songs: ['Jazz standards', 'Classical music']
  }
];

const modalInterchangeProgressions = [
  {
    name: 'I - bVII - IV progression',
    example: 'C - Bb - F',
    analysis: 'I - bVII - IV',
    description: 'Classic rock progression mixing major and minor',
    context: 'The bVII (Bb) is borrowed from C minor, creating a modal sound',
    songs: ['"Sweet Child O\' Mine"', '"Don\'t Stop Believin\'"'],
    emotionalEffect: 'Triumphant yet grounded, anthemic quality'
  },
  {
    name: 'vi - bVI - bVII - I',
    example: 'Am - Ab - Bb - C',
    analysis: 'vi - bVI - bVII - I',
    description: 'Chromatic descent with dramatic resolution',
    context: 'Both bVI and bVII borrowed from parallel minor',
    songs: ['"Creep" by Radiohead', '"While My Guitar Gently Weeps"'],
    emotionalEffect: 'Melancholic buildup to hopeful resolution'
  },
  {
    name: 'I - iv - I progression',
    example: 'C - Fm - C',
    analysis: 'I - iv - I',
    description: 'Major-minor contrast in same tonic',
    context: 'The iv (Fm) creates immediate emotional shift',
    songs: ['"Hey Jude" (Na na na section)', '"Eleanor Rigby"'],
    emotionalEffect: 'Bittersweet, adds depth and complexity'
  },
  {
    name: 'I - bIII - bVII - IV',
    example: 'C - Eb - Bb - F',
    analysis: 'I - bIII - bVII - IV',
    description: 'Multiple borrowed chords create modal landscape',
    context: 'Eb and Bb both from C minor, F remains diatonic',
    songs: ['Progressive rock', 'Cinematic scoring'],
    emotionalEffect: 'Epic, mysterious, otherworldly'
  }
];

const modalColors = [
  {
    mode: 'Dorian (ii)',
    chords: 'i - ii - bIII - IV - v - vi° - bVII',
    character: 'Sophisticated minor - jazzy, folk-like',
    borrowTo: 'Natural minor',
    example: 'D Dorian in C major context',
    usage: 'Jazz, folk, sophisticated pop'
  },
  {
    mode: 'Mixolydian (V)',
    chords: 'I - ii - iii° - IV - v - vi - bVII',
    character: 'Major with b7 - bluesy, rock-oriented',
    borrowTo: 'Major',
    example: 'G Mixolydian in C major context',
    usage: 'Rock, blues, country'
  },
  {
    mode: 'Aeolian (vi)',
    chords: 'i - ii° - bIII - iv - v - bVI - bVII',
    character: 'Natural minor - dark, serious',
    borrowTo: 'Major',
    example: 'A minor (Aeolian) in C major context',
    usage: 'Most common modal interchange source'
  }
];

export default function ModalInterchangePage() {
  return (
    <Layout>
      <Header
        title="Modal Interchange"
        subtitle="Discover how borrowing chords from parallel modes adds color and emotional depth"
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Borrowing From Parallel Worlds</h2>
          <div className="prose prose-lg text-gray-700 max-w-none">
            <p>
              Modal interchange is like having access to a parallel universe of your key. While staying in 
              <strong> C major</strong>, you can borrow chords from <strong>C minor</strong> (or other C modes) 
              to add emotional colors that pure major can't provide.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-indigo-600 mb-2">🌗 Parallel Keys</h3>
                <p className="text-sm">C major and C minor share the same tonic but have different scale tones, creating contrasting harmonic palettes.</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-indigo-600 mb-2">🎨 Emotional Colors</h3>
                <p className="text-sm">Borrowed chords add darkness to major keys, brightness to minor keys, or modal flavors like blues or folk.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Borrowed Chords */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">🎵 Most Common Borrowed Chords</h2>
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 p-4 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900">Borrowing from Parallel Minor (C major ← C minor)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Borrowed Chord</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Example</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Function</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Usage</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Famous Songs</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {borrowedChords.map((chord, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-lg font-mono font-bold text-indigo-600">{chord.chord}</td>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">{chord.example}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{chord.function}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{chord.usage}</td>
                      <td className="px-4 py-3 text-xs text-gray-500">
                        {chord.songs.map((song, i) => (
                          <div key={i}>{song}</div>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Famous Progressions */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">🎸 Modal Interchange in Action</h2>
          <div className="space-y-6">
            {modalInterchangeProgressions.map((progression, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{progression.name}</h3>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded">
                    {progression.analysis}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="font-mono text-lg text-indigo-600 font-bold">{progression.example}</p>
                      <p className="text-sm text-gray-600 mt-1">{progression.description}</p>
                    </div>
                    <p className="text-sm text-gray-700"><strong>Context:</strong> {progression.context}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-700"><strong>Emotional Effect:</strong> {progression.emotionalEffect}</p>
                    <div className="text-sm text-gray-600">
                      <p><strong>Heard in:</strong></p>
                      <ul className="ml-4 mt-1">
                        {progression.songs.map((song, i) => (
                          <li key={i}>• {song}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modal Colors */}
        <section className="mb-12 bg-purple-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🌈 Modal Color Palette</h2>
          <div className="space-y-6">
            {modalColors.map((mode, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border-l-4 border-purple-500">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{mode.mode}</h3>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded">
                    {mode.usage}
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-700 mb-2"><strong>Character:</strong> {mode.character}</p>
                    <p className="text-xs text-gray-600 font-mono bg-gray-50 p-2 rounded">{mode.chords}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 mb-1"><strong>Borrows to:</strong> {mode.borrowTo}</p>
                    <p className="text-sm text-gray-600">{mode.example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Real Song Analysis */}
        <section className="mb-12 bg-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🔍 Analysis: "Creep" by Radiohead</h2>
          <div className="bg-white rounded-lg p-6 border-l-4 border-blue-500">
            <h3 className="font-semibold text-gray-900 mb-4">The Power of bVI and bVII</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-mono text-lg"><strong>G - B - C - Cm</strong></p>
                  <p className="text-sm text-gray-600 mt-1">I - III - IV - iv (in G major)</p>
                </div>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>Modal Interchange Analysis:</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>• <strong>Cm (iv):</strong> Borrowed from G minor</li>
                    <li>• Creates immediate shift from bright to dark</li>
                    <li>• The word "creep" lands on this borrowed chord</li>
                  </ul>
                </div>
              </div>
              <div className="text-sm text-gray-700 space-y-2">
                <p><strong>Why It's Genius:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Major progressions sound hopeful and confident</li>
                  <li>• The borrowed iv chord introduces self-doubt</li>
                  <li>• Perfect musical metaphor for the lyrics</li>
                  <li>• The contrast is jarring but beautiful</li>
                </ul>
                <p className="mt-3"><strong>Emotional Journey:</strong> Confidence → Brightness → Stability → Self-doubt</p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">🎯 How to Apply Modal Interchange</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Best Practices</h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li>• Start with common borrowed chords (bVII, bVI, iv)</li>
                <li>• Use sparingly - too much loses the contrast</li>
                <li>• Consider the lyrics and emotional context</li>
                <li>• Practice voice leading between major and borrowed chords</li>
                <li>• Listen to how others use these chords</li>
              </ul>
            </div>
            <div className="bg-yellow-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">⚠️ Common Mistakes</h3>
              <ul className="space-y-2 text-sm text-yellow-700">
                <li>• Using too many borrowed chords - sounds unfocused</li>
                <li>• Ignoring voice leading - creates awkward jumps</li>
                <li>• Not considering the melody - some clash</li>
                <li>• Using borrowed chords just to be "sophisticated"</li>
                <li>• Forgetting the emotional purpose they serve</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="mb-12 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">🏃‍♂️ Practice Exercises</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">🎹 Beginner Practice</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Practice I-bVII-IV in multiple keys</li>
                <li>• Replace IV with iv in simple progressions</li>
                <li>• Learn the parallel minor scale for any major key</li>
                <li>• Listen for borrowed chords in rock songs</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">🔥 Advanced Practice</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Experiment with Dorian and Mixolydian borrowed chords</li>
                <li>• Reharmonize pop songs with modal interchange</li>
                <li>• Practice smooth voice leading with borrowed chords</li>
                <li>• Write progressions that tell emotional stories</li>
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
              <Link 
                href="/lessons/songs/chords/substitutions"
                className="block text-sm text-blue-700 hover:text-blue-800 font-medium"
              >
                → Explore More Substitutions
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
                href="/lessons/songs/chords/voice-leading"
                className="block text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                → Voice Leading Principles
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
