"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const motifTypes = [
  {
    type: 'Rhythmic Motifs',
    description: 'Short rhythmic patterns that can be repeated and varied',
    characteristics: ['Strong rhythmic identity', 'Works with different pitches', 'Groove-oriented'],
    examples: ['Syncopated rhythm patterns', 'Dotted note rhythms', 'Triplet-based patterns'],
    difficulty: 'Beginner',
  },
  {
    type: 'Melodic Motifs',
    description: 'Short pitch sequences that create melodic identity',
    characteristics: ['Memorable pitch contour', 'Usually 2-5 notes', 'Easy to recognize'],
    examples: ['Scale fragments', 'Interval patterns', 'Chromatic approaches'],
    difficulty: 'Beginner',
  },
  {
    type: 'Intervallic Motifs',
    description: 'Based on specific interval relationships',
    characteristics: ['Consistent interval pattern', 'Transposable', 'Harmonic foundation'],
    examples: ['Perfect 4ths', 'Major 3rds', 'Minor 7ths', 'Tritones'],
    difficulty: 'Intermediate',
  },
  {
    type: 'Hybrid Motifs',
    description: 'Combine rhythmic and melodic elements',
    characteristics: ['Both pitch and rhythm identity', 'More complex to develop', 'Very memorable'],
    examples: ['Signature licks', 'Famous riffs', 'Classical themes'],
    difficulty: 'Advanced',
  },
];

const developmentTechniques = [
  {
    technique: 'Sequence',
    description: 'Repeat the motif at different pitch levels',
    method: 'Move motif up or down by consistent intervals',
    example: 'Play motif on different scale degrees',
    musicalEffect: 'Creates momentum and harmonic movement',
  },
  {
    technique: 'Inversion',
    description: 'Flip the melodic direction of intervals',
    method: 'Where motif goes up, make it go down (and vice versa)',
    example: 'C-E-D becomes C-Ab-Bb',
    musicalEffect: 'Maintains character while adding variety',
  },
  {
    technique: 'Augmentation',
    description: 'Make note values longer (usually double)',
    method: 'Change quarters to halves, eighths to quarters',
    example: 'Fast motif becomes slow and stately',
    musicalEffect: 'Changes character from active to reflective',
  },
  {
    technique: 'Diminution',
    description: 'Make note values shorter (usually half)',
    method: 'Change quarters to eighths, halves to quarters',
    example: 'Slow motif becomes quick and energetic',
    musicalEffect: 'Increases intensity and urgency',
  },
  {
    technique: 'Fragmentation',
    description: 'Use only part of the original motif',
    method: 'Take 1-2 notes from longer motif',
    example: 'Use just the first two notes repeatedly',
    musicalEffect: 'Creates focus and builds tension',
  },
  {
    technique: 'Extension',
    description: 'Add notes to the beginning or end',
    method: 'Extend motif with scales or arpeggios',
    example: 'Add approach tones or passing notes',
    musicalEffect: 'Expands ideas while maintaining core identity',
  },
];

const practiceExercises = [
  {
    title: 'Motif Creation Workshop',
    level: 'Beginner',
    description: 'Learn to create simple, memorable motifs',
    steps: [
      'Choose 3-4 notes from pentatonic scale',
      'Create a simple rhythm (2-4 beats)',
      'Play your motif 4 times exactly',
      'Rate it: Is it memorable? Interesting?',
      'Refine until you have a strong motif'
    ],
    tips: 'The best motifs are simple but distinctive',
  },
  {
    title: 'Development Technique Practice',
    level: 'Intermediate',
    description: 'Apply classical development techniques systematically',
    steps: [
      'Start with one simple motif',
      'Apply sequence: move up by steps',
      'Try inversion: flip melodic direction',
      'Practice augmentation: make notes longer',
      'Combine 2-3 techniques together'
    ],
    tips: 'Practice each technique separately before combining',
  },
  {
    title: 'Complete Solo Construction',
    level: 'Advanced',
    description: 'Build entire solos from one motif',
    steps: [
      'Create one strong 2-3 note motif',
      'Develop 8 variations using different techniques',
      'Arrange variations into 16-32 bar solo',
      'Practice over chord progressions',
      'Record and analyze the coherence'
    ],
    tips: 'Great solos tell stories with beginning, middle, and end',
  },
  {
    title: 'Genre-Specific Application',
    level: 'Advanced',
    description: 'Adapt motif development to different musical styles',
    steps: [
      'Choose a specific genre (blues, jazz, rock)',
      'Study motif use in that genre',
      'Create genre-appropriate motifs',
      'Apply development techniques stylistically',
      'Practice over typical chord progressions'
    ],
    tips: 'Each genre has its own motif development conventions',
  },
];

const famousMotifExamples = [
  {
    artist: 'Beethoven',
    piece: 'Symphony No. 5',
    motif: 'Four-note opening motif (da-da-da-DUM)',
    development: 'Appears in various forms throughout entire symphony',
    lesson: 'Simple motifs can sustain entire large-scale works',
  },
  {
    artist: 'Chuck Berry',
    piece: 'Johnny B. Goode',
    motif: 'Opening guitar riff',
    development: 'Variations appear throughout song with slight rhythmic and melodic changes',
    lesson: 'Rock music relies heavily on motif development',
  },
  {
    artist: 'John Coltrane',
    piece: 'Giant Steps',
    motif: 'Descending major third patterns',
    development: 'Complex harmonic sequences and rhythmic variations',
    lesson: 'Jazz improvisation often develops small intervallic ideas',
  },
  {
    artist: 'Led Zeppelin',
    piece: 'Black Dog',
    motif: 'Rhythmic riff motif',
    development: 'Appears in different registers and with different backing harmonies',
    lesson: 'Rhythm-based motifs can drive entire songs',
  },
];

export default function MotifDevelopmentPage() {
  return (
    <Layout>
      <Header
        title="Motif Development"
        subtitle="Build compelling solos from small musical ideas through classical composition techniques and creative transformation."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/lessons/practice/improv" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="mr-2">←</span>
            Back to Improvisation
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-600 to-red-700 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Motif Development</h1>
          <p className="text-xl opacity-90 mb-4">
            Transform simple musical ideas into compelling solos through classical composition techniques. 
            Learn how great composers and improvisers build entire pieces from tiny musical seeds.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">Compositional Thinking</span>
            <span className="bg-white/20 px-3 py-1 rounded">Classical Techniques</span>
            <span className="bg-white/20 px-3 py-1 rounded">Musical Unity</span>
            <span className="bg-white/20 px-3 py-1 rounded">Creative Development</span>
          </div>
        </div>

        {/* Theory Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory Fundamentals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">What is a Motif?</h3>
              <p className="text-gray-600 mb-4">
                A motif is a short musical idea (2-5 notes) that serves as a building block for larger musical structures. 
                Think of it as a musical "seed" that can grow into a complete solo through development techniques.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><strong>Memorable:</strong> Easy to recognize when it returns</li>
                <li><strong>Simple:</strong> Not too complex to develop effectively</li>
                <li><strong>Distinctive:</strong> Has unique character or personality</li>
                <li><strong>Flexible:</strong> Works in different musical contexts</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Why Use Motif Development?</h3>
              <p className="text-gray-600 mb-4">
                Motif development creates musical unity and coherence in improvisation, giving listeners something 
                to follow while providing you with endless material from a single idea.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><strong>Unity:</strong> Creates coherence in long solos</li>
                <li><strong>Recognition:</strong> Listeners can follow the musical story</li>
                <li><strong>Endless Material:</strong> One idea = many variations</li>
                <li><strong>Professional Sound:</strong> Compositional approach to improv</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Types of Motifs */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Types of Musical Motifs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {motifTypes.map((motif, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-medium text-gray-800">{motif.type}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    motif.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                    motif.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {motif.difficulty}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{motif.description}</p>
                <div className="space-y-2">
                  <div>
                    <h4 className="font-medium text-gray-700 text-sm">Characteristics:</h4>
                    <ul className="text-xs text-gray-600 ml-4">
                      {motif.characteristics.map((char, i) => (
                        <li key={i}>• {char}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 text-sm">Examples:</h4>
                    <ul className="text-xs text-gray-600 ml-4">
                      {motif.examples.map((example, i) => (
                        <li key={i}>• {example}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Development Techniques */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Classical Development Techniques</h2>
          <p className="text-gray-600 mb-6">
            These time-tested techniques from classical composition can transform your simple motifs into sophisticated musical statements.
          </p>
          <div className="grid md:grid-cols-1 gap-4">
            {developmentTechniques.map((technique, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">{technique.technique}</h3>
                <p className="text-gray-600 text-sm mb-3">{technique.description}</p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-gray-700">Method:</h4>
                    <p className="text-gray-600">{technique.method}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Example:</h4>
                    <p className="text-gray-600">{technique.example}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Musical Effect:</h4>
                    <p className="text-gray-600">{technique.musicalEffect}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {practiceExercises.map((exercise, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-medium text-gray-800">{exercise.title}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    exercise.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                    exercise.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {exercise.level}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{exercise.description}</p>
                <div>
                  <h4 className="font-medium text-gray-700 text-sm mb-2">Steps:</h4>
                  <ol className="text-xs text-gray-600 space-y-1 ml-4">
                    {exercise.steps.map((step, i) => (
                      <li key={i}>{i + 1}. {step}</li>
                    ))}
                  </ol>
                </div>
                <div className="mt-3 p-2 bg-blue-50 rounded text-xs text-blue-700">
                  <strong>Tip:</strong> {exercise.tips}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Practice Routine */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Daily Motif Development Practice Routine</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 border border-orange-200">
              <h3 className="text-lg font-medium text-orange-800 mb-3">Phase 1: Creation (5 mins)</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Create 3 simple motifs (2-4 notes each)</li>
                <li>• Use different scale patterns</li>
                <li>• Include rhythmic and melodic motifs</li>
                <li>• Test for memorability</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 border border-orange-200">
              <h3 className="text-lg font-medium text-orange-800 mb-3">Phase 2: Development (10 mins)</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Apply 2-3 development techniques</li>
                <li>• Try sequence and inversion first</li>
                <li>• Practice augmentation/diminution</li>
                <li>• Combine techniques creatively</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 border border-orange-200">
              <h3 className="text-lg font-medium text-orange-800 mb-3">Phase 3: Integration (10 mins)</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Build complete 8-16 bar solos</li>
                <li>• Use one motif throughout</li>
                <li>• Practice over chord progressions</li>
                <li>• Record and analyze results</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Famous Examples */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Famous Examples in Music</h2>
          <div className="grid md:grid-cols-1 gap-4">
            {famousMotifExamples.map((example, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-4">
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <h3 className="font-medium text-gray-800">{example.artist}</h3>
                    <p className="text-sm text-gray-600">{example.piece}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 text-sm">Motif:</h4>
                    <p className="text-sm text-gray-600">{example.motif}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 text-sm">Development:</h4>
                    <p className="text-sm text-gray-600">{example.development}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 text-sm">Lesson:</h4>
                    <p className="text-sm text-gray-600">{example.lesson}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Continue Your Journey */}
        <div className="bg-gradient-to-r from-orange-600 to-red-700 text-white rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Continue Your Improvisation Journey</h2>
          <p className="mb-6 opacity-90">
            Motif development is a cornerstone of sophisticated improvisation. Explore these related topics to deepen your understanding:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/lessons/practice/improv/phrasing" className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors">
              <h3 className="font-semibold mb-2">Musical Phrasing</h3>
              <p className="text-sm opacity-90">Learn to shape your motifs with natural, expressive phrasing</p>
            </Link>
            <Link href="/lessons/practice/improv/call-response" className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors">
              <h3 className="font-semibold mb-2">Call & Response</h3>
              <p className="text-sm opacity-90">Use motifs in conversational musical dialogue</p>
            </Link>
            <Link href="/lessons/practice/improv/target-notes" className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors">
              <h3 className="font-semibold mb-2">Target Notes</h3>
              <p className="text-sm opacity-90">Focus your motif development on strong harmonic destinations</p>
            </Link>
            <Link href="/lessons/practice/improv/rhythm" className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors">
              <h3 className="font-semibold mb-2">Rhythmic Variation</h3>
              <p className="text-sm opacity-90">Develop rhythmic motifs with sophisticated timing</p>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </Layout>
  );
}
