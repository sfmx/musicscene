import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const riffPatterns = [
  {
    name: 'Power Pop Progressions',
    difficulty: 'Beginner',
    key: 'G',
    description: 'Bright, energetic chord progressions using I-V-vi-IV pattern',
    theory: 'Diatonic harmony, circle progressions, major scale relationships',
    technique: 'Clean picking, open chord transitions, consistent strumming'
  },
  {
    name: 'Arpeggiated Pop Hooks',
    difficulty: 'Beginner',
    key: 'C',
    description: 'Melodic broken chord patterns that create memorable hooks',
    theory: 'Triad arpeggiation, melodic intervals, hook construction',
    technique: 'Fingerpicking patterns, note separation, dynamic control'
  },
  {
    name: 'Octave Displacement Riffs',
    difficulty: 'Intermediate',
    key: 'Am',
    description: 'Single-note melodies using octave jumps for dramatic effect',
    theory: 'Octave intervals, melodic contour, harmonic rhythm',
    technique: 'Position shifts, string skipping, melodic phrasing'
  },
  {
    name: 'Sus Chord Progressions',
    difficulty: 'Intermediate',
    key: 'D',
    description: 'Suspended chords creating tension and resolution in pop contexts',
    theory: 'Suspended intervals, non-chord tones, resolution patterns',
    technique: 'Smooth voice leading, finger independence, chord transitions'
  },
  {
    name: 'Modal Pop Riffs',
    difficulty: 'Advanced',
    key: 'Em (Dorian)',
    description: 'Using modal scales to create distinctive pop flavors',
    theory: 'Dorian mode, modal characteristics, borrowed chords',
    technique: 'Modal fingerings, characteristic note emphasis, scalar runs'
  },
  {
    name: 'Pop-Rock Hybrids',
    difficulty: 'Advanced',
    key: 'F#m',
    description: 'Combining pop sensibilities with rock power and drive',
    theory: 'Power chord integration, melodic development, dynamic contrast',
    technique: 'Hybrid picking, palm muting, articulation variety'
  }
];

const songAnalysis = [
  {
    song: '"Don\'t Stop Believin\'" - Journey',
    riff: 'Opening piano riff adapted for guitar',
    theory: 'I-V-vi-IV progression in E major, emphasizing stepwise bass movement',
    why: 'Memorable melodic contour with strong harmonic foundation creates instant recognition'
  },
  {
    song: '"Sweet Caroline" - Neil Diamond',
    riff: 'Main chord progression and turnaround',
    theory: 'Circle of fifths movement with strategic use of secondary dominants',
    why: 'Predictable yet satisfying harmonic movement that encourages audience participation'
  },
  {
    song: '"Mr. Brightside" - The Killers',
    riff: 'Verse guitar pattern',
    theory: 'Alternating between major and minor tonalities using borrowed chords',
    why: 'Creates emotional ambiguity while maintaining pop accessibility'
  },
  {
    song: '"Somebody That I Used to Know" - Gotye',
    riff: 'Xylophone melody adapted for guitar',
    theory: 'Pentatonic-based melody over static harmony with rhythmic displacement',
    why: 'Simple yet distinctive melodic hook with unexpected rhythmic placement'
  }
];

const popCharacteristics = [
  {
    element: 'Memorable Hooks',
    description: 'Short, catchy melodic phrases that stick in memory',
    theory: 'Uses stepwise motion, simple intervals, and repetitive patterns',
    application: 'Create riffs using 3-5 note patterns with clear melodic direction'
  },
  {
    element: 'Harmonic Simplicity',
    description: 'Accessible chord progressions based on functional harmony',
    theory: 'Primarily uses I, IV, V, vi chords with occasional ii and iii',
    application: 'Build riffs around common progressions: I-V-vi-IV, vi-IV-I-V'
  },
  {
    element: 'Rhythmic Accessibility',
    description: 'Clear, predictable rhythmic patterns that support melody',
    theory: 'Emphasizes strong beats, avoids complex syncopation',
    application: 'Use quarter and eighth note patterns with clear downbeat emphasis'
  },
  {
    element: 'Dynamic Range',
    description: 'Contrast between verses and choruses through dynamics',
    theory: 'Uses textural and harmonic density changes for emotional impact',
    application: 'Vary strumming intensity, add/remove notes, change chord voicings'
  }
];

const theoryConcepts = [
  {
    title: 'The Pop Formula: I-V-vi-IV',
    content: 'This progression appears in countless pop songs because it provides strong harmonic movement while remaining accessible. Each chord has a specific emotional function.',
    examples: [
      'I (tonic) - Home, stability, resolution',
      'V (dominant) - Tension, forward motion',
      'vi (relative minor) - Emotional depth, contrast',
      'IV (subdominant) - Warmth, return preparation'
    ]
  },
  {
    title: 'Hook Construction Principles',
    content: 'Pop hooks use specific melodic and rhythmic patterns that maximize memorability through repetition, sequence, and motivic development.',
    examples: [
      'Motivic repetition - same pattern at different pitch levels',
      'Sequence - melodic pattern repeated at different scale degrees',
      'Rhythmic consistency - predictable note placement aids memory'
    ]
  },
  {
    title: 'Modal Borrowing in Pop',
    content: 'Pop music frequently borrows chords from parallel modes to add color while maintaining accessibility.',
    examples: [
      'bVII chord (from mixolydian) - adds rock flavor',
      'bVI chord (from natural minor) - creates emotional depth',
      'ii° chord (from natural minor) - adds sophistication'
    ]
  }
];

export default function PopRiffsPage() {
  return (
    <Layout>
      <Header
        title="Pop Riffs"
        subtitle="Learn the harmonic and melodic principles behind memorable pop guitar riffs"
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Introduction */}
        <section className="mb-12 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Art of Memorable Melodies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Accessibility First</h3>
              <p className="text-gray-600">Pop riffs prioritize memorability and emotional connection over technical complexity. Understanding why certain patterns stick in our minds is key to creating effective pop guitar parts.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Harmonic Foundation</h3>
              <p className="text-gray-600">Pop music relies on proven harmonic formulas that create emotional responses. Learning these patterns gives you the tools to craft compelling musical hooks.</p>
            </div>
          </div>
        </section>

        {/* Essential Riff Patterns */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Pop Riff Patterns</h2>
          <div className="grid gap-6">
            {riffPatterns.map((riff, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{riff.name}</h3>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full">
                        {riff.difficulty}
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        Key: {riff.key}
                      </span>
                    </div>
                  </div>
                  <span className="text-2xl">🎤</span>
                </div>
                
                <p className="text-gray-700 mb-4">{riff.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Theory Focus</h4>
                    <p className="text-gray-600">{riff.theory}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Technique</h4>
                    <p className="text-gray-600">{riff.technique}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pop Characteristics */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pop Music Characteristics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {popCharacteristics.map((char, index) => (
              <div key={index} className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">{char.element}</h3>
                <p className="text-purple-800 mb-3">{char.description}</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-purple-900">Theory:</span>
                    <span className="text-purple-700 ml-2">{char.theory}</span>
                  </div>
                  <div>
                    <span className="font-medium text-purple-900">Application:</span>
                    <span className="text-purple-700 ml-2">{char.application}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Song Analysis */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Classic Pop Riff Analysis</h2>
          <div className="grid gap-6">
            {songAnalysis.map((analysis, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{analysis.song}</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Riff Element</h4>
                    <p className="text-gray-600">{analysis.riff}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Theory Analysis</h4>
                    <p className="text-gray-600">{analysis.theory}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Why It Works</h4>
                    <p className="text-gray-600">{analysis.why}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Theory Deep Dive */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Theory Deep Dive</h2>
          <div className="space-y-6">
            {theoryConcepts.map((concept, index) => (
              <div key={index} className="bg-pink-50 border border-pink-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-pink-900 mb-3">{concept.title}</h3>
                <p className="text-pink-800 mb-4">{concept.content}</p>
                <div>
                  <h4 className="font-medium text-pink-900 mb-2">Key Points:</h4>
                  <ul className="space-y-1 text-sm text-pink-700">
                    {concept.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Example */}
        <section className="mb-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-purple-900 mb-4">🎸 Case Study: "Wonderwall" by Oasis</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-medium text-purple-800 mb-2">Harmonic Analysis</h4>
              <p className="text-purple-700 mb-3">Uses capo at 2nd fret to create unique chord voicings. The progression Em7-G-D-C creates a strong sense of movement despite static strumming.</p>
              <p className="text-purple-700"><strong>Theory:</strong> The Em7 to G movement (i7 to III) is borrowed from natural minor, adding emotional depth to major key context.</p>
            </div>
            <div>
              <h4 className="font-medium text-purple-800 mb-2">Why It's Memorable</h4>
              <p className="text-purple-700 mb-3">Consistent strumming pattern, distinctive chord voicings from capo position, and predictable harmonic rhythm make it instantly recognizable.</p>
              <p className="text-purple-700"><strong>Application:</strong> Shows how capo usage and chord voicings can create distinctive sounds from common progressions.</p>
            </div>
          </div>
        </section>

        {/* Practice Progression */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Progression</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-800 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-green-900 mb-2">Basic Progressions</h3>
              <p className="text-green-700 text-sm">Master I-V-vi-IV and vi-IV-I-V progressions with clean chord transitions and consistent strumming.</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-yellow-800 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-yellow-900 mb-2">Melodic Elements</h3>
              <p className="text-yellow-700 text-sm">Add arpeggiation, single-note hooks, and suspended chords to create more interesting textures.</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-800 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-purple-900 mb-2">Advanced Harmony</h3>
              <p className="text-purple-700 text-sm">Incorporate modal borrowing, extended chords, and sophisticated voice leading while maintaining pop accessibility.</p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="text-center">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Continue Your Riff Journey</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/lessons/songs/riffs/funk"
                className="px-4 py-2 bg-white border border-purple-200 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors"
              >
                ← Funk Riffs
              </Link>
              <Link 
                href="/lessons/songs/riffs"
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                All Riff Types
              </Link>
              <Link 
                href="/lessons/songs/riffs/jazz"
                className="px-4 py-2 bg-white border border-purple-200 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors"
              >
                Jazz Riffs →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
