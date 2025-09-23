"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const rhythmicElements = [
  {
    name: 'Note Value Variation',
    description: 'Using different note durations to create rhythmic interest and groove',
    techniques: ['Quarter note emphasis', 'Eighth note runs', 'Triplet groupings', 'Sixteenth note passages'],
    characteristics: ['Creates forward motion', 'Builds and releases tension', 'Defines groove'],
    bestFor: ['All genres', 'Building solos', 'Creating dynamics', 'Expressing emotion'],
    difficulty: 'Beginner',
  },
  {
    name: 'Syncopation',
    description: 'Emphasizing off-beats and weak beats for rhythmic sophistication',
    techniques: ['Off-beat accents', 'Delayed attacks', 'Cross-rhythms', 'Displaced patterns'],
    characteristics: ['Sophisticated groove', 'Jazz and R&B feel', 'Unexpected accents'],
    bestFor: ['Jazz', 'R&B', 'Funk', 'Latin music'],
    difficulty: 'Intermediate',
  },
  {
    name: 'Polyrhythmic Concepts',
    description: 'Playing different rhythmic patterns simultaneously or in succession',
    techniques: ['3 against 2', '4 against 3', 'Metric modulation', 'Hemiola'],
    characteristics: ['Complex rhythmic layers', 'Advanced sophistication', 'Compositional approach'],
    bestFor: ['Progressive music', 'Jazz fusion', 'World music', 'Contemporary classical'],
    difficulty: 'Advanced',
  },
  {
    name: 'Groove-Based Patterns',
    description: 'Rhythmic patterns that lock into specific musical grooves',
    techniques: ['Shuffle feel', 'Swing rhythm', 'Latin clave', 'Rock subdivisions'],
    characteristics: ['Style-specific feel', 'Cultural authenticity', 'Dance-oriented'],
    bestFor: ['Blues', 'Jazz', 'Latin', 'Rock'],
    difficulty: 'Intermediate',
  },
];

const rhythmicTechniques = [
  {
    technique: 'Rhythmic Displacement',
    description: 'Play the same phrase starting at different points in the measure',
    method: 'Take a phrase and start it on beat 2, 3, or 4 instead of beat 1',
    example: 'Play C-D-E-F on beats 1-2-3-4, then on beats 2-3-4-1',
    musicalEffect: 'Creates rhythmic sophistication and variety',
  },
  {
    technique: 'Metric Modulation',
    description: 'Change the perceived beat or time signature within the same tempo',
    method: 'Group notes to suggest different time signatures',
    example: 'Play triplets in 4/4 to suggest 3/4 feel',
    musicalEffect: 'Advanced rhythmic complexity and interest',
  },
  {
    technique: 'Dynamic Accenting',
    description: 'Use volume and attack variations to create rhythmic emphasis',
    method: 'Play certain notes louder or with different attack',
    example: 'Accent off-beats or weak subdivisions',
    musicalEffect: 'Highlights rhythm without changing notes',
  },
  {
    technique: 'Rest Utilization',
    description: 'Use silence as a rhythmic element to create space and emphasis',
    method: 'Place rests on strong beats or create rhythmic holes',
    example: 'Rest on beat 1, enter on the "&" of 2',
    musicalEffect: 'Creates anticipation and rhythmic tension',
  },
  {
    technique: 'Cross-Rhythm Integration',
    description: 'Layer different rhythmic patterns to create complex polyrhythms',
    method: 'Play one rhythm while implying another',
    example: 'Play in 3s while the band plays in 4s',
    musicalEffect: 'Advanced rhythmic sophistication',
  },
];

const practiceExercises = [
  {
    title: 'Rhythmic Note Values',
    level: 'Beginner',
    description: 'Master basic note value variations for rhythmic interest',
    steps: [
      'Practice same melody with different note values',
      'Play whole notes, then halves, quarters, eighths',
      'Use metronome to maintain steady tempo',
      'Focus on clean articulation of each note value',
      'Combine different note values in single phrases'
    ],
    tips: 'Even simple note value changes create dramatic rhythmic effects',
  },
  {
    title: 'Syncopation Development',
    level: 'Intermediate',
    description: 'Learn to create sophisticated off-beat rhythmic patterns',
    steps: [
      'Start with simple off-beat accents',
      'Practice playing on "&" of beats',
      'Work on delayed entrances and early attacks',
      'Practice syncopated rhythms from different genres',
      'Apply syncopation to scales and arpeggios'
    ],
    tips: 'Listen to R&B and jazz to internalize syncopated feels',
  },
  {
    title: 'Groove Matching',
    level: 'Intermediate',
    description: 'Adapt your rhythmic playing to different musical grooves',
    steps: [
      'Study characteristic rhythms of different genres',
      'Practice playing to backing tracks in various styles',
      'Focus on matching the feel, not just the notes',
      'Work on shuffle, swing, Latin, and rock feels',
      'Record yourself playing over different grooves'
    ],
    tips: 'Each musical style has its own rhythmic vocabulary',
  },
  {
    title: 'Polyrhythmic Exploration',
    level: 'Advanced',
    description: 'Develop complex rhythmic layering and independence',
    steps: [
      'Practice playing 3 against 2 patterns',
      'Work on metric modulation exercises',
      'Study world music polyrhythmic concepts',
      'Practice with complex time signatures',
      'Combine multiple rhythmic layers in improvisation'
    ],
    tips: 'Polyrhythms require patience and gradual development',
  },
];

const famousRhythmicPlayers = [
  {
    artist: 'John Bonham',
    style: 'Powerful rock rhythms with complex subdivisions',
    signature: 'Heavy emphasis with sophisticated internal rhythmic patterns',
    lesson: 'Power and complexity can coexist in rhythmic playing',
  },
  {
    artist: 'Buddy Rich',
    style: 'Lightning-fast jazz rhythms with perfect subdivision',
    signature: 'Incredible speed and accuracy in complex rhythmic patterns',
    lesson: 'Technical mastery enables unlimited rhythmic expression',
  },
  {
    artist: 'Tito Puente',
    style: 'Latin polyrhythmic mastery with cultural authenticity',
    signature: 'Complex Latin rhythms that maintain danceable groove',
    lesson: 'Cultural rhythmic traditions offer deep sophistication',
  },
  {
    artist: 'Danny Carey',
    style: 'Progressive polyrhythmic concepts in rock context',
    signature: 'Complex time signatures and polyrhythms in accessible music',
    lesson: 'Advanced rhythmic concepts can work in popular music',
  },
];

export default function RhythmicVariationPage() {
  return (
    <Layout>
      <Header
        title="Rhythmic Variation"
        subtitle="Master the art of creating rhythmic interest and groove through sophisticated timing, syncopation, and polyrhythmic concepts."
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
        <div className="bg-gradient-to-r from-red-600 to-pink-700 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Rhythmic Variation</h1>
          <p className="text-xl opacity-90 mb-4">
            Rhythm is the heartbeat of music. Learn to create compelling rhythmic interest through varied note durations, 
            syncopation, and sophisticated groove-based phrasing that makes your solos dance.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">Groove Mastery</span>
            <span className="bg-white/20 px-3 py-1 rounded">Syncopation</span>
            <span className="bg-white/20 px-3 py-1 rounded">Polyrhythmic Concepts</span>
            <span className="bg-white/20 px-3 py-1 rounded">Cultural Rhythms</span>
          </div>
        </div>

        {/* Theory Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory Fundamentals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Rhythm as Musical Foundation</h3>
              <p className="text-gray-600 mb-4">
                Rhythm is what makes music move and groove. It's the element that makes people tap their feet, 
                dance, and feel the music physically. Strong rhythmic skills separate good players from great ones.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><strong>Groove Foundation:</strong> Rhythm creates the feel and drive</li>
                <li><strong>Emotional Impact:</strong> Different rhythms evoke different feelings</li>
                <li><strong>Cultural Identity:</strong> Rhythms define musical styles and cultures</li>
                <li><strong>Physical Connection:</strong> Rhythm connects music to body movement</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Elements of Rhythmic Variation</h3>
              <p className="text-gray-600 mb-4">
                Rhythmic variation involves changing note durations, accents, timing, and patterns to create 
                interest and maintain listener engagement throughout your improvisation.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><strong>Note Duration:</strong> Vary between long and short notes</li>
                <li><strong>Accent Patterns:</strong> Emphasize different beats and subdivisions</li>
                <li><strong>Timing Feel:</strong> Play ahead, behind, or on the beat</li>
                <li><strong>Rest Usage:</strong> Use silence as a rhythmic element</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Rhythmic Elements */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Essential Rhythmic Elements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {rhythmicElements.map((element, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-medium text-gray-800">{element.name}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    element.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                    element.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {element.difficulty}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{element.description}</p>
                <div className="space-y-2">
                  <div>
                    <h4 className="font-medium text-gray-700 text-sm">Techniques:</h4>
                    <ul className="text-xs text-gray-600 ml-4">
                      {element.techniques.map((tech, i) => (
                        <li key={i}>• {tech}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 text-sm">Best For:</h4>
                    <ul className="text-xs text-gray-600 ml-4">
                      {element.bestFor.map((genre, i) => (
                        <li key={i}>• {genre}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rhythmic Techniques */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Advanced Rhythmic Techniques</h2>
          <p className="text-gray-600 mb-6">
            These sophisticated rhythmic concepts will add professional-level sophistication to your improvisation.
          </p>
          <div className="grid md:grid-cols-1 gap-4">
            {rhythmicTechniques.map((technique, index) => (
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
        <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Daily Rhythmic Practice Routine</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 border border-red-200">
              <h3 className="text-lg font-medium text-red-800 mb-3">Phase 1: Foundation (10 mins)</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Practice with metronome at various tempos</li>
                <li>• Work on steady quarter and eighth notes</li>
                <li>• Practice basic note value variations</li>
                <li>• Focus on clean articulation</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 border border-red-200">
              <h3 className="text-lg font-medium text-red-800 mb-3">Phase 2: Groove (15 mins)</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Practice syncopated patterns</li>
                <li>• Work on genre-specific rhythms</li>
                <li>• Use backing tracks in different styles</li>
                <li>• Focus on locking into the groove</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 border border-red-200">
              <h3 className="text-lg font-medium text-red-800 mb-3">Phase 3: Advanced (10 mins)</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Experiment with polyrhythmic concepts</li>
                <li>• Practice rhythmic displacement</li>
                <li>• Work on metric modulation</li>
                <li>• Combine multiple rhythmic techniques</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Famous Rhythmic Masters */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Famous Rhythmic Masters</h2>
          <div className="grid md:grid-cols-1 gap-4">
            {famousRhythmicPlayers.map((artist, index) => (
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
        <div className="bg-gradient-to-r from-red-600 to-pink-700 text-white rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Continue Your Improvisation Journey</h2>
          <p className="mb-6 opacity-90">
            Rhythmic mastery is essential for compelling improvisation. Explore these related topics to develop your complete musical vocabulary:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/lessons/practice/improv/phrasing" className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors">
              <h3 className="font-semibold mb-2">Musical Phrasing</h3>
              <p className="text-sm opacity-90">Combine rhythmic sophistication with expressive phrasing</p>
            </Link>
            <Link href="/lessons/practice/improv/motif-development" className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors">
              <h3 className="font-semibold mb-2">Motif Development</h3>
              <p className="text-sm opacity-90">Develop rhythmic motifs through classical techniques</p>
            </Link>
            <Link href="/lessons/practice/improv/call-response" className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors">
              <h3 className="font-semibold mb-2">Call & Response</h3>
              <p className="text-sm opacity-90">Use rhythmic patterns in musical conversation</p>
            </Link>
            <Link href="/lessons/practice/improv/scales" className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors">
              <h3 className="font-semibold mb-2">Scale Application</h3>
              <p className="text-sm opacity-90">Apply rhythmic concepts to scale-based improvisation</p>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </Layout>
  );
}
