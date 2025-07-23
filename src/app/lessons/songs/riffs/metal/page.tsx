import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const metalHarmonyElements = [
  {
    element: 'Chromatic Movement',
    theory: 'Movement by half-steps between chord roots',
    application: 'Creates tension and darkness characteristic of metal',
    example: 'E-F-F#-G progression using power chords',
    riffUsage: 'Foundation for many thrash and death metal riffs'
  },
  {
    element: 'Harmonic Minor Scale',
    theory: 'Natural minor with raised 7th degree',
    application: 'Creates exotic, dark sound with augmented 2nd interval',
    example: 'E harmonic minor: E-F#-G-A-B-C-D#-E',
    riffUsage: 'Neoclassical metal and progressive metal compositions'
  },
  {
    element: 'Tritone Intervals',
    theory: 'Augmented 4th/diminished 5th - "devil\'s interval"',
    application: 'Maximum harmonic tension and dissonance',
    example: 'E to Bb interval (6 semitones apart)',
    riffUsage: 'Creates the menacing character in heavy riffs'
  },
  {
    element: 'Drop Tunings',
    theory: 'Lower string tunings for extended range',
    application: 'Allows heavier, lower register playing',
    example: 'Drop D: D-A-D-G-B-E (low to high)',
    riffUsage: 'Enables palm-muted chugging and wider interval riffs'
  }
];

const metalSubgenres = [
  {
    style: 'Thrash Metal',
    characteristics: 'Fast tempo, aggressive palm muting, chromatic riffs',
    harmonyApproach: 'Chromatic movement, minor keys, tritone emphasis',
    techniques: 'Alternate picking, palm muting, tremolo picking',
    exampleBands: 'Metallica, Megadeth, Slayer',
    theoryFocus: 'Natural minor scale with chromatic passing tones',
    difficultyLevel: 'Advanced'
  },
  {
    style: 'Death Metal',
    characteristics: 'Complex rhythms, atonal passages, extreme low tuning',
    harmonyApproach: 'Dissonant intervals, chromatic clusters, atonality',
    techniques: 'Palm muting, artificial harmonics, sweep picking',
    exampleBands: 'Death, Cannibal Corpse, Gorguts',
    theoryFocus: 'Chromatic scales, diminished harmony, polyrhythm',
    difficultyLevel: 'Expert'
  },
  {
    style: 'Progressive Metal',
    characteristics: 'Complex time signatures, sophisticated harmony',
    harmonyApproach: 'Extended chords, modal interchange, jazz influences',
    techniques: 'Legato playing, tapping, complex picking patterns',
    exampleBands: 'Dream Theater, Tool, Opeth',
    theoryFocus: 'Modal scales, advanced chord theory, odd time signatures',
    difficultyLevel: 'Expert'
  },
  {
    style: 'Black Metal',
    characteristics: 'Tremolo picking, dissonant harmonies, raw production',
    harmonyApproach: 'Minor keys, diminished chords, modal darkness',
    techniques: 'Tremolo picking, blast beats coordination',
    exampleBands: 'Mayhem, Darkthrone, Emperor',
    theoryFocus: 'Natural minor modes, diminished harmony',
    difficultyLevel: 'Advanced'
  }
];

const iconicMetalRiffs = [
  {
    song: '"Master of Puppets"',
    artist: 'Metallica',
    key: 'E Minor',
    analysis: 'Chromatic descending riff with palm muting accents',
    technique: 'Precise alternate picking with palm mute control',
    theory: 'E natural minor with chromatic approach notes',
    difficulty: 'Advanced',
    lessonFocus: 'Chromatic movement and rhythmic precision',
    harmonic: 'Uses tritone intervals for maximum tension'
  },
  {
    song: '"Raining Blood"',
    artist: 'Slayer',
    key: 'E Minor',
    analysis: 'Fast tremolo picking with dissonant intervals',
    technique: 'High-speed alternate picking with consistent attack',
    theory: 'Chromatic sequences with diminished harmony',
    difficulty: 'Expert',
    lessonFocus: 'Speed development and dissonance usage',
    harmonic: 'Emphasizes tritone and minor 2nd intervals'
  },
  {
    song: '"Iron Man"',
    artist: 'Black Sabbath',
    key: 'E Minor',
    analysis: 'Heavy, simple power chord progression',
    technique: 'Basic downstrokes with heavy attack',
    theory: 'i-bVI-bVII progression in E minor',
    difficulty: 'Intermediate',
    lessonFocus: 'Introduction to metal harmony and rhythm',
    harmonic: 'Classic doom metal progression with modal borrowing'
  },
  {
    song: '"Painkiller"',
    artist: 'Judas Priest',
    key: 'E Minor',
    analysis: 'Fast single-note runs with harmonic minor flavoring',
    technique: 'Alternate picking with string skipping',
    theory: 'E harmonic minor scale passages',
    difficulty: 'Advanced',
    lessonFocus: 'Harmonic minor application and speed technique',
    harmonic: 'Uses raised 7th for exotic, neoclassical sound'
  }
];

const metalTechniques = [
  {
    technique: 'Palm Muting',
    description: 'Right hand palm dampens strings for percussive attack',
    theory: 'Reduces sustain, emphasizes rhythmic attack',
    practice: 'Rest palm edge lightly on strings near bridge',
    musicalEffect: 'Creates "chugga" sound essential to metal',
    difficulty: 'Beginner',
    application: 'Rhythmic emphasis and power chord clarity'
  },
  {
    technique: 'Tremolo Picking',
    description: 'Rapid alternate picking on single notes or chords',
    theory: 'Creates sustained effect through fast repetition',
    practice: 'Start slow, focus on even attack and timing',
    musicalEffect: 'Sustained, intense wall of sound',
    difficulty: 'Intermediate',
    application: 'Black metal, death metal atmospheric sections'
  },
  {
    technique: 'Sweep Picking',
    description: 'Smooth pick motion across multiple strings',
    theory: 'Efficient way to play arpeggios at high speed',
    practice: 'Practice major and minor arpeggios slowly',
    musicalEffect: 'Fluid, cascading melodic lines',
    difficulty: 'Advanced',
    application: 'Neoclassical metal, technical death metal'
  },
  {
    technique: 'Artificial Harmonics',
    description: 'Create harmonic overtones through pick technique',
    theory: 'Activate harmonic series nodes for bell-like tones',
    practice: 'Light thumb touch 12 frets above fretted note',
    musicalEffect: 'Piercing, ethereal overtones',
    difficulty: 'Intermediate',
    application: 'Death metal, progressive metal textures'
  }
];

export default function MetalRiffsPage() {
  return (
    <Layout>
      <Header
        title="Metal Riffs"
        subtitle="Explore metal riffs with focus on chromatic movement, palm muting techniques, and harmonic minor applications"
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12 bg-gradient-to-r from-gray-900 to-red-900 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">The Science of Heaviness</h2>
          <div className="prose prose-lg text-gray-200 max-w-none">
            <p>
              Metal riffs push harmony to its darkest extremes, using <strong>dissonance</strong>, 
              <strong>chromatic movement</strong>, and <strong>complex rhythms</strong> to create 
              maximum emotional and physical impact. Understanding metal theory reveals how calculated 
              musical choices create visceral reactions.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-black bg-opacity-30 p-4 rounded-lg border border-gray-600">
                <h3 className="font-semibold text-red-400 mb-2">⚡ Harmonic Tension</h3>
                <p className="text-sm text-gray-300">Metal maximizes dissonance through tritones, chromatic movement, and avoided resolutions.</p>
              </div>
              <div className="bg-black bg-opacity-30 p-4 rounded-lg border border-gray-600">
                <h3 className="font-semibold text-red-400 mb-2">🔥 Rhythmic Complexity</h3>
                <p className="text-sm text-gray-300">Complex time signatures and polyrhythms create intellectual and physical challenge.</p>
              </div>
              <div className="bg-black bg-opacity-30 p-4 rounded-lg border border-gray-600">
                <h3 className="font-semibold text-red-400 mb-2">🎸 Technical Mastery</h3>
                <p className="text-sm text-gray-300">Extreme techniques push instruments to their limits, requiring years of dedicated practice.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Harmonic Elements */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">🔬 Metal Harmonic Elements</h2>
          <div className="space-y-6">
            {metalHarmonyElements.map((element, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{element.element}</h3>
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">
                    Advanced Theory
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-600 mb-1">Theory:</p>
                      <p className="font-mono text-sm text-gray-800">{element.theory}</p>
                    </div>
                    <div className="bg-red-50 p-3 rounded">
                      <p className="text-sm text-red-600 mb-1">Example:</p>
                      <p className="text-sm text-red-800">{element.example}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-700"><strong>Application:</strong> {element.application}</p>
                    <p className="text-sm text-gray-600"><strong>In Riffs:</strong> {element.riffUsage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Metal Subgenres */}
        <section className="mb-12 bg-purple-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🎭 Metal Subgenre Analysis</h2>
          <div className="space-y-6">
            {metalSubgenres.map((genre, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border-l-4 border-purple-500">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{genre.style}</h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded ${
                    genre.difficultyLevel === 'Advanced' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {genre.difficultyLevel}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-600 mb-1">Characteristics:</p>
                      <p className="text-sm text-gray-800">{genre.characteristics}</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded">
                      <p className="text-sm text-purple-600 mb-1">Harmony Approach:</p>
                      <p className="text-sm text-purple-800">{genre.harmonyApproach}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="text-sm text-blue-600 mb-1">Key Techniques:</p>
                      <p className="text-sm text-blue-800">{genre.techniques}</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <p className="text-sm text-green-600 mb-1">Theory Focus:</p>
                      <p className="text-sm text-green-800">{genre.theoryFocus}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-orange-50 p-3 rounded">
                  <p className="text-sm text-orange-700"><strong>Example Bands:</strong> {genre.exampleBands}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Iconic Riffs */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">🤘 Legendary Metal Riffs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {iconicMetalRiffs.map((riff, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{riff.song}</h3>
                    <p className="text-sm text-gray-600">by {riff.artist}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      riff.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      riff.difficulty === 'Advanced' ? 'bg-orange-100 text-orange-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {riff.difficulty}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">Key: {riff.key}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-sm text-gray-600 mb-1">Analysis:</p>
                    <p className="text-sm text-gray-800">{riff.analysis}</p>
                  </div>
                  <div className="bg-red-50 p-3 rounded">
                    <p className="text-sm text-red-600 mb-1">Technique:</p>
                    <p className="text-sm text-red-800">{riff.technique}</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <p className="text-sm text-blue-600 mb-1">Theory:</p>
                    <p className="text-sm text-blue-800">{riff.theory}</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded">
                    <p className="text-sm text-purple-600 mb-1">Harmonic Character:</p>
                    <p className="text-sm text-purple-800">{riff.harmonic}</p>
                  </div>
                  <p className="text-sm text-gray-600"><strong>Focus:</strong> {riff.lessonFocus}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Essential Techniques */}
        <section className="mb-12 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🛠️ Essential Metal Techniques</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {metalTechniques.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{tech.technique}</h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded ${
                    tech.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                    tech.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {tech.difficulty}
                  </span>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-gray-700">{tech.description}</p>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-sm text-gray-600 mb-1">Theory:</p>
                    <p className="text-sm text-gray-800">{tech.theory}</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <p className="text-sm text-blue-600 mb-1">Practice:</p>
                    <p className="text-sm text-blue-800">{tech.practice}</p>
                  </div>
                  <p className="text-sm text-gray-600"><strong>Effect:</strong> {tech.musicalEffect}</p>
                  <p className="text-sm text-gray-600"><strong>Application:</strong> {tech.application}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Progressive Learning Path */}
        <section className="mb-12 bg-yellow-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">⚡ Metal Mastery Progression</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="font-semibold text-gray-900 mb-3">Stage 1: Foundation (Months 1-2)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-medium text-gray-800 mb-2">Essential Skills:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Master palm muting technique</li>
                    <li>• Learn basic power chord progressions</li>
                    <li>• Develop alternate picking precision</li>
                    <li>• Study "Iron Man" and "Paranoid"</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-800 mb-2">Theory Focus:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Natural minor scale</li>
                    <li>• Power chord construction</li>
                    <li>• Basic rhythm notation</li>
                    <li>• Drop D tuning theory</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-orange-500">
              <h3 className="font-semibold text-gray-900 mb-3">Stage 2: Advanced Harmony (Months 3-6)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-medium text-gray-800 mb-2">Essential Skills:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Chromatic riff construction</li>
                    <li>• Tremolo picking development</li>
                    <li>• Harmonic minor scale application</li>
                    <li>• Study Metallica and Megadeth riffs</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-800 mb-2">Theory Focus:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Chromatic harmony</li>
                    <li>• Tritone intervals</li>
                    <li>• Harmonic minor modes</li>
                    <li>• Complex time signatures</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
              <h3 className="font-semibold text-gray-900 mb-3">Stage 3: Technical Mastery (Months 7-12)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-medium text-gray-800 mb-2">Essential Skills:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Sweep picking arpeggios</li>
                    <li>• Advanced polyrhythms</li>
                    <li>• Artificial harmonics mastery</li>
                    <li>• Progressive and death metal study</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-800 mb-2">Theory Focus:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Atonal composition</li>
                    <li>• Extended harmony</li>
                    <li>• Polyrhythmic concepts</li>
                    <li>• Modal interchange mastery</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">🧭 Next Steps</h3>
            <div className="space-y-3">
              <Link 
                href="/lessons/songs/riffs/jazz"
                className="block text-sm text-blue-700 hover:text-blue-800 font-medium"
              >
                → Explore Jazz Harmonic Complexity
              </Link>
              <Link 
                href="/lessons/songs/riffs/classic-rock"
                className="block text-sm text-blue-700 hover:text-blue-800 font-medium"
              >
                → Study Rock Foundation
              </Link>
              <Link 
                href="/lessons/songs/chords/extended"
                className="block text-sm text-blue-700 hover:text-blue-800 font-medium"
              >
                → Learn Extended Chords
              </Link>
            </div>
          </div>
          <div className="bg-purple-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">🔗 Related Topics</h3>
            <div className="space-y-3">
              <Link 
                href="/lessons/songs/chords/modal-interchange"
                className="block text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                → Modal Interchange Theory
              </Link>
              <Link 
                href="/lessons/songs/techniques"
                className="block text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                → Advanced Techniques
              </Link>
              <Link 
                href="/lessons/songs/riffs"
                className="block text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                ← Back to Riffs Overview
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
