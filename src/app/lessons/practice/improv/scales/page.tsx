"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';

const scaleCategories = [
  {
    name: 'Major Family',
    description: 'Bright, stable scales perfect for happy and uplifting sounds',
    scales: ['Major Scale (Ionian)', 'Dorian Mode', 'Phrygian Mode', 'Lydian Mode', 'Mixolydian Mode'],
    characteristics: ['Bright tonality', 'Strong resolution', 'Versatile across genres'],
    bestFor: ['Pop music', 'Country', 'Folk', 'Rock choruses'],
    difficulty: 'Beginner',
  },
  {
    name: 'Minor Family',
    description: 'Darker, more emotional scales for introspective and dramatic music',
    scales: ['Natural Minor', 'Harmonic Minor', 'Melodic Minor', 'Aeolian Mode', 'Locrian Mode'],
    characteristics: ['Darker tonality', 'Emotional depth', 'Complex harmonic possibilities'],
    bestFor: ['Ballads', 'Jazz', 'Progressive rock', 'Classical'],
    difficulty: 'Beginner',
  },
  {
    name: 'Pentatonic Scales',
    description: 'Five-note scales that sound great in virtually any musical context',
    scales: ['Major Pentatonic', 'Minor Pentatonic', 'Blues Scale', 'Japanese Pentatonic'],
    characteristics: ['Always sounds good', 'Easy to memorize', 'Cross-cultural appeal'],
    bestFor: ['Blues', 'Rock solos', 'Country', 'World music'],
    difficulty: 'Beginner',
  },
  {
    name: 'Exotic Scales',
    description: 'Unique scales from world music traditions and modern composition',
    scales: ['Harmonic Major', 'Hungarian Minor', 'Arabian Scale', 'Whole Tone', 'Diminished'],
    characteristics: ['Distinctive sound', 'Cultural flavors', 'Modern harmonies'],
    bestFor: ['Jazz fusion', 'World music', 'Progressive styles', 'Film scoring'],
    difficulty: 'Advanced',
  },
];

const scaleApplications = [
  {
    technique: 'Chord-Tone Targeting',
    description: 'Emphasize notes that belong to the underlying chord',
    method: 'Land on chord tones (1, 3, 5, 7) on strong beats',
    example: 'Over Cmaj7, emphasize C, E, G, B from C major scale',
    musicalEffect: 'Creates harmonic clarity and sophistication',
  },
  {
    technique: 'Scalar Runs',
    description: 'Play consecutive scale notes for smooth melodic lines',
    method: 'Connect chord tones with stepwise motion',
    example: 'C-D-E-F-G ascending run in C major',
    musicalEffect: 'Provides fluid, connected sound',
  },
  {
    technique: 'Scale Patterns',
    description: 'Use recurring patterns within scales for rhythmic interest',
    method: 'Play scales in groups (3rds, 4ths, sequences)',
    example: 'C-E-D-F-E-G pattern from C major scale',
    musicalEffect: 'Adds structure and memorability',
  },
  {
    technique: 'Modal Interchange',
    description: 'Borrow scales from parallel modes for color',
    method: 'Use minor scale over major chord (or vice versa)',
    example: 'C natural minor scale over C major chord',
    musicalEffect: 'Creates unexpected harmonic color',
  },
  {
    technique: 'Chromatic Approach',
    description: 'Use non-scale tones to approach scale notes',
    method: 'Add chromatic passing tones between scale notes',
    example: 'C-C#-D or C-Db-D approaching D',
    musicalEffect: 'Adds tension and jazz sophistication',
  },
];

const practiceExercises = [
  {
    title: 'Scale Visualization',
    level: 'Beginner',
    description: 'Learn to see and hear scales across the fretboard',
    steps: [
      'Practice one scale in multiple positions',
      'Play scale ascending and descending',
      'Practice in different rhythms (quarters, eighths, triplets)',
      'Sing along while playing to internalize sound',
      'Practice with a metronome at various tempos'
    ],
    tips: 'Visualize the scale shapes, don\'t just memorize finger patterns',
  },
  {
    title: 'Chord-Scale Relationships',
    level: 'Intermediate',
    description: 'Match appropriate scales to chord progressions',
    steps: [
      'Choose a simple chord progression (I-vi-IV-V)',
      'Identify appropriate scale for each chord',
      'Practice scales over each chord separately',
      'Connect scales smoothly through progression',
      'Create melodic phrases using appropriate scales'
    ],
    tips: 'Focus on smooth voice leading between scale choices',
  },
  {
    title: 'Modal Exploration',
    level: 'Intermediate',
    description: 'Explore the unique character of each mode',
    steps: [
      'Choose one mode (Dorian, Phrygian, etc.)',
      'Play the mode over its characteristic chord',
      'Identify the unique intervals that define the mode',
      'Create phrases that highlight these intervals',
      'Practice switching between modes'
    ],
    tips: 'Each mode has a distinct emotional character to explore',
  },
  {
    title: 'Scale Integration',
    level: 'Advanced',
    description: 'Combine multiple scales in single improvisation',
    steps: [
      'Start with one primary scale',
      'Identify points to introduce secondary scales',
      'Practice smooth transitions between scales',
      'Use chromatic notes to connect different scales',
      'Record and analyze the harmonic result'
    ],
    tips: 'Advanced players seamlessly blend multiple scale sources',
  },
];

const famousScaleUsers = [
  {
    artist: 'David Gilmour',
    style: 'Melodic pentatonic with blues inflections',
    signature: 'Emotional bending and space within pentatonic framework',
    lesson: 'Less is more - master simple scales deeply',
  },
  {
    artist: 'Joe Satriani',
    style: 'Modal mastery with exotic scale integration',
    signature: 'Uses modes and exotic scales for otherworldly sounds',
    lesson: 'Modes and exotic scales create unique sonic landscapes',
  },
  {
    artist: 'John Coltrane',
    style: 'Rapid scale sequences and complex harmony',
    signature: 'Lightning-fast scalar runs through complex changes',
    lesson: 'Scale mastery enables navigation of complex harmony',
  },
  {
    artist: 'Yngwie Malmsteen',
    style: 'Classical harmonic minor and diminished scales',
    signature: 'Neoclassical approach using harmonic minor extensively',
    lesson: 'Classical scales work brilliantly in rock contexts',
  },
];

export default function ImprovisingWithScalesPage() {
  return (
    <Layout>
      <Header
        title="Improvising with Scales"
        subtitle="Master the art of using scales as melodic foundations and harmonic roadmaps for compelling improvisation."
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
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Improvising with Scales</h1>
          <p className="text-xl opacity-90 mb-4">
            Scales are the melodic vocabulary of improvisation. Learn to use major, minor, modal, and exotic scales 
            as foundations for creating harmonically rich and emotionally compelling solos.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">Melodic Foundation</span>
            <span className="bg-white/20 px-3 py-1 rounded">Harmonic Roadmaps</span>
            <span className="bg-white/20 px-3 py-1 rounded">Modal Mastery</span>
            <span className="bg-white/20 px-3 py-1 rounded">Cultural Flavors</span>
          </div>
        </div>

        {/* Theory Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory Fundamentals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Scales as Melodic Vocabulary</h3>
              <p className="text-gray-600 mb-4">
                Scales provide the notes available for improvisation over specific chords or progressions. 
                Each scale has its own character, emotional quality, and harmonic function.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><strong>Harmonic Foundation:</strong> Scales relate to underlying chords</li>
                <li><strong>Emotional Character:</strong> Each scale evokes different feelings</li>
                <li><strong>Cultural Context:</strong> Scales carry geographical and stylistic associations</li>
                <li><strong>Technical Framework:</strong> Scales provide finger patterns and positions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Choosing the Right Scale</h3>
              <p className="text-gray-600 mb-4">
                The key to effective scale-based improvisation is matching the right scale to the musical context, 
                considering both harmonic function and desired emotional effect.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><strong>Chord Function:</strong> Choose scales that support the harmony</li>
                <li><strong>Genre Style:</strong> Different genres favor different scales</li>
                <li><strong>Emotional Goal:</strong> Select scales for their expressive qualities</li>
                <li><strong>Technical Comfort:</strong> Use scales you can play fluently</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Scale Categories */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Essential Scale Categories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {scaleCategories.map((category, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-medium text-gray-800">{category.name}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    category.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                    category.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {category.difficulty}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                <div className="space-y-2">
                  <div>
                    <h4 className="font-medium text-gray-700 text-sm">Included Scales:</h4>
                    <ul className="text-xs text-gray-600 ml-4">
                      {category.scales.map((scale, i) => (
                        <li key={i}>• {scale}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 text-sm">Best For:</h4>
                    <ul className="text-xs text-gray-600 ml-4">
                      {category.bestFor.map((genre, i) => (
                        <li key={i}>• {genre}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Techniques */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Scale Application Techniques</h2>
          <p className="text-gray-600 mb-6">
            Learn how to use scales musically rather than just running up and down them mechanically.
          </p>
          <div className="grid md:grid-cols-1 gap-4">
            {scaleApplications.map((technique, index) => (
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
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Daily Scale Practice Routine</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <h3 className="text-lg font-medium text-green-800 mb-3">Phase 1: Technical (10 mins)</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Practice 2-3 scales in multiple positions</li>
                <li>• Focus on clean, even articulation</li>
                <li>• Use metronome for steady timing</li>
                <li>• Practice ascending and descending</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <h3 className="text-lg font-medium text-green-800 mb-3">Phase 2: Musical (15 mins)</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Apply scales to chord progressions</li>
                <li>• Practice chord-tone targeting</li>
                <li>• Create melodic phrases using scales</li>
                <li>• Work on scale transitions</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <h3 className="text-lg font-medium text-green-800 mb-3">Phase 3: Creative (10 mins)</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Improvise freely using day's scales</li>
                <li>• Experiment with different rhythms</li>
                <li>• Try modal and exotic scales</li>
                <li>• Record and analyze results</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Famous Scale Masters */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Famous Scale Masters</h2>
          <div className="grid md:grid-cols-1 gap-4">
            {famousScaleUsers.map((artist, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-4">
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <h3 className="font-medium text-gray-800">{artist.artist}</h3>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 text-sm">Style:</h4>
                    <p className="text-sm text-gray-600">{artist.style}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 text-sm">Signature:</h4>
                    <p className="text-sm text-gray-600">{artist.signature}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 text-sm">Lesson:</h4>
                    <p className="text-sm text-gray-600">{artist.lesson}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Continue Your Journey */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Continue Your Improvisation Journey</h2>
          <p className="mb-6 opacity-90">
            Scale mastery opens doors to sophisticated improvisation. Explore these related topics to expand your musical vocabulary:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/lessons/practice/improv/arpeggios" className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors">
              <h3 className="font-semibold mb-2">Arpeggio Integration</h3>
              <p className="text-sm opacity-90">Combine scales with arpeggios for harmonic clarity</p>
            </Link>
            <Link href="/lessons/practice/improv/target-notes" className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors">
              <h3 className="font-semibold mb-2">Target Notes</h3>
              <p className="text-sm opacity-90">Focus your scale work on strong harmonic destinations</p>
            </Link>
            <Link href="/lessons/practice/improv/motif-development" className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors">
              <h3 className="font-semibold mb-2">Motif Development</h3>
              <p className="text-sm opacity-90">Create compelling ideas from scale fragments</p>
            </Link>
            <Link href="/lessons/practice/improv/phrasing" className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors">
              <h3 className="font-semibold mb-2">Musical Phrasing</h3>
              <p className="text-sm opacity-90">Shape your scale-based lines with expressive phrasing</p>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </Layout>
  );
}
