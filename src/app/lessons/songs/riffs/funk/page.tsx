import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const riffPatterns = [
  {
    name: 'Basic Funk Strum',
    difficulty: 'Beginner',
    key: 'E7',
    description: 'Foundation rhythm pattern with muted strums and chord stabs',
    theory: 'Dominant 7th chord, syncopated rhythm, muted strings',
    technique: 'Right-hand muting, precise timing, accent placement'
  },
  {
    name: 'The "One" Emphasis',
    difficulty: 'Beginner',
    key: 'Am7',
    description: 'Classic funk pattern emphasizing beat one with ghost notes',
    theory: 'Minor 7th chord, rhythmic displacement, ghost note function',
    technique: 'Palm muting, dynamic control, rhythmic precision'
  },
  {
    name: 'Nile Rodgers Style',
    difficulty: 'Intermediate',
    key: 'Cmaj7',
    description: 'Sophisticated chord voicings with tight rhythmic feel',
    theory: 'Extended chords, voice leading, chord inversions',
    technique: 'Clean articulation, string dampening, chord transitions'
  },
  {
    name: 'P-Funk Groove',
    difficulty: 'Intermediate',
    key: 'G7#9',
    description: 'Parliament-Funkadelic style with altered dominant chords',
    theory: 'Altered extensions, #9 intervals, chromatic harmony',
    technique: 'Wah-wah effects, string bending, rhythmic complexity'
  },
  {
    name: 'Slap Funk Hybrid',
    difficulty: 'Advanced',
    key: 'F#m7',
    description: 'Combining traditional strumming with percussive slap technique',
    theory: 'Polyrhythmic elements, bass line integration, chord-melody',
    technique: 'Slap/pop technique, string isolation, percussive effects'
  },
  {
    name: 'Jazz-Funk Fusion',
    difficulty: 'Advanced',
    key: 'Bbmaj7#11',
    description: 'Complex harmonic extensions with sophisticated voicings',
    theory: 'Lydian mode, #11 extensions, quartal harmony',
    technique: 'Advanced fingerings, smooth voice leading, jazz articulation'
  }
];

const techniques = [
  {
    name: 'The Muted Strum',
    description: 'Percussive attack with immediate muting for tight rhythmic feel',
    theory: 'Creates rhythmic punctuation without harmonic information',
    application: 'Essential for funk\'s characteristic "chops" and rhythmic drive'
  },
  {
    name: 'Ghost Notes',
    description: 'Subtle strums between main beats that add rhythmic texture',
    theory: 'Provides subdivisions that enhance groove without clutter',
    application: 'Fills rhythmic space and maintains momentum between accents'
  },
  {
    name: 'Chord Stabs',
    description: 'Sharp, accented chord attacks on specific beats',
    theory: 'Emphasizes important harmonic moments and creates dynamic contrast',
    application: 'Punctuates rhythm section and creates call-and-response with bass'
  },
  {
    name: 'Wah-Wah Integration',
    description: 'Using wah pedal to enhance rhythmic and tonal expression',
    theory: 'Filters frequencies to create vowel-like sounds and tonal variation',
    application: 'Adds expressiveness and creates the classic funk guitar voice'
  }
];

const theoryConcepts = [
  {
    title: 'Extended Chord Harmony',
    content: 'Funk relies heavily on 7th, 9th, and 11th chords. These extensions add color and sophistication while maintaining the groove-oriented foundation.',
    examples: ['Am7 - adds the minor 7th (G) to Am triad', 'E7#9 - the "Hendrix chord" with sharp 9th', 'Cmaj7 - major 7th creates smooth, sophisticated sound']
  },
  {
    title: 'Syncopation and Rhythmic Displacement',
    content: 'Funk emphasizes off-beats and creates tension by placing accents away from expected strong beats, particularly emphasizing the "one".',
    examples: ['Beat 1 emphasis with rests on beats 2-4', 'Sixteenth note subdivisions with strategic muting', 'Cross-rhythms that play against the bass line']
  },
  {
    title: 'Voice Leading in Chord Progressions',
    content: 'Smooth movement between chord tones, often using common tones and step-wise motion to maintain flow while changing harmony.',
    examples: ['Am7 to D7 - G note common to both chords', 'Cmaj7 to Fmaj7 - C moves to D (step-wise)', 'Circle of fifths progressions with 7th chords']
  }
];

export default function FunkRiffsPage() {
  return (
    <Layout>
      <Header
        title="Funk Riffs"
        subtitle="Master the rhythmic precision and harmonic sophistication of funk guitar through theory-based analysis"
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Introduction */}
        <section className="mb-12 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Science of Groove</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Rhythmic Foundation</h3>
              <p className="text-gray-600">Funk guitar is built on precise rhythmic execution and strategic use of silence. Understanding syncopation, ghost notes, and the emphasis on "the one" is crucial for authentic funk feel.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Harmonic Color</h3>
              <p className="text-gray-600">Extended chords (7ths, 9ths, 11ths) provide the sophisticated harmonic palette that distinguishes funk from simpler rock styles, while maintaining groove primacy.</p>
            </div>
          </div>
        </section>

        {/* Essential Riff Patterns */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Funk Riff Patterns</h2>
          <div className="grid gap-6">
            {riffPatterns.map((riff, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{riff.name}</h3>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                        {riff.difficulty}
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        Key: {riff.key}
                      </span>
                    </div>
                  </div>
                  <span className="text-2xl">🕺</span>
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

        {/* Core Techniques */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Funk Techniques</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {techniques.map((technique, index) => (
              <div key={index} className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">{technique.name}</h3>
                <p className="text-yellow-800 mb-3">{technique.description}</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-yellow-900">Theory:</span>
                    <span className="text-yellow-700 ml-2">{technique.theory}</span>
                  </div>
                  <div>
                    <span className="font-medium text-yellow-900">Application:</span>
                    <span className="text-yellow-700 ml-2">{technique.application}</span>
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
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{concept.title}</h3>
                <p className="text-gray-700 mb-4">{concept.content}</p>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Examples:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {concept.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Famous Examples */}
        <section className="mb-12 bg-orange-50 border border-orange-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-orange-900 mb-4">🎸 Classic Funk Riff Analysis</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-medium text-orange-800 mb-2">"Le Freak" by Chic (Nile Rodgers)</h4>
              <p className="text-orange-700 mb-3">Uses clean Stratocaster tone with precise muted strumming pattern over Am7-D7 progression.</p>
              <p className="text-orange-700"><strong>Theory:</strong> Minor 7th to dominant 7th progression with emphasis on rhythmic precision over complex harmony.</p>
            </div>
            <div>
              <h4 className="font-medium text-orange-800 mb-2">"Flash Light" by Parliament</h4>
              <p className="text-orange-700 mb-3">Features wah-wah filtered single-note riffs that interlock with the bass synthesizer.</p>
              <p className="text-orange-700"><strong>Theory:</strong> Pentatonic-based single note lines with heavy use of chromatic approach notes and rhythmic displacement.</p>
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
              <h3 className="font-semibold text-green-900 mb-2">Basic Rhythm</h3>
              <p className="text-green-700 text-sm">Master simple muted strumming patterns and basic 7th chord shapes. Focus on consistent timing and clean muting.</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-yellow-800 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-yellow-900 mb-2">Syncopation</h3>
              <p className="text-yellow-700 text-sm">Add ghost notes and off-beat accents. Learn to emphasize "the one" while maintaining steady groove.</p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 text-center">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-800 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-orange-900 mb-2">Advanced Harmony</h3>
              <p className="text-orange-700 text-sm">Incorporate extended chords, voice leading, and effects. Develop personal style while maintaining groove foundation.</p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="text-center">
          <div className="bg-purple-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Continue Your Riff Journey</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/lessons/songs/riffs/pop"
                className="px-4 py-2 bg-white border border-purple-200 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors"
              >
                ← Pop Riffs
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
