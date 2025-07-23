"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { VexTab } from '@/components/VexTab';

const arpeggioTypes = [
  {
    name: 'Basic Triads',
    description: 'Three-note chords that outline fundamental harmonic structures',
    arpeggios: ['Major Triad (1-3-5)', 'Minor Triad (1-♭3-5)', 'Diminished Triad (1-♭3-♭5)', 'Augmented Triad (1-3-♯5)'],
    characteristics: ['Clear harmonic outline', 'Easy to hear chord changes', 'Fundamental building blocks'],
    bestFor: ['Country music', 'Folk', 'Basic rock', 'Classical'],
    difficulty: 'Beginner',
  },
  {
    name: 'Seventh Chords',
    description: 'Four-note arpeggios that add harmonic sophistication and jazz flavor',
    arpeggios: ['Major 7th (1-3-5-7)', 'Dominant 7th (1-3-5-♭7)', 'Minor 7th (1-♭3-5-♭7)', 'Half-Diminished (1-♭3-♭5-♭7)'],
    characteristics: ['Rich harmonic color', 'Jazz standard vocabulary', 'Smooth voice leading'],
    bestFor: ['Jazz', 'Blues', 'R&B', 'Sophisticated pop'],
    difficulty: 'Intermediate',
  },
  {
    name: 'Extended Chords',
    description: 'Complex arpeggios that include 9ths, 11ths, and 13ths for modern sounds',
    arpeggios: ['Major 9th', 'Minor 9th', 'Dominant 13th', 'Minor 11th', 'Major 7#11'],
    characteristics: ['Modern harmonic color', 'Complex but beautiful', 'Professional sound'],
    bestFor: ['Jazz fusion', 'Contemporary jazz', 'Modern pop', 'Film music'],
    difficulty: 'Advanced',
  },
  {
    name: 'Altered Dominants',
    description: 'Modified dominant arpeggios that create tension and sophisticated resolution',
    arpeggios: ['7♭5', '7♯5', '7♭9', '7♯9', '7alt (♭9♯9♯11♭13)'],
    characteristics: ['Maximum tension', 'Jazz sophistication', 'Strong resolution tendency'],
    bestFor: ['Bebop', 'Modern jazz', 'Fusion', 'Advanced improvisation'],
    difficulty: 'Advanced',
  },
];

const arpeggioTechniques = [
  {
    technique: 'Chord Outlining',
    description: 'Play arpeggio notes to clearly define the underlying harmony',
    method: 'Land on chord tones on strong beats, especially chord changes',
    example: 'Over Cmaj7-Am7-Dm7-G7, play respective arpeggio tones',
    musicalEffect: 'Creates harmonic clarity and professional sound',
  },
  {
    technique: 'Connecting Arpeggios',
    description: 'Link arpeggios smoothly through chord progressions',
    method: 'Use common tones and stepwise motion between arpeggios',
    example: 'Connect C major to A minor via shared tones (C and E)',
    musicalEffect: 'Smooth voice leading and flowing melodic lines',
  },
  {
    technique: 'Arpeggio Patterns',
    description: 'Use recurring patterns within arpeggios for rhythmic interest',
    method: 'Play arpeggios in 3rds, 4ths, or skip patterns',
    example: '1-3-5-7-5-3 or 1-5-3-7 patterns',
    musicalEffect: 'Adds structure and memorability to lines',
  },
  {
    technique: 'Scale-Arpeggio Integration',
    description: 'Combine arpeggios with scale passages for variety',
    method: 'Use arpeggios for chord tones, scales for passing tones',
    example: 'Arpeggio on beats 1&3, scalar fills on beats 2&4',
    musicalEffect: 'Balances harmonic clarity with melodic flow',
  },
  {
    technique: 'Rhythmic Displacement',
    description: 'Play arpeggios with different rhythmic groupings',
    method: 'Use triplets, quintuplets, or syncopated rhythms',
    example: 'Play 4-note arpeggio as triplet grouping',
    musicalEffect: 'Creates rhythmic sophistication and interest',
  },
];

const practiceExercises = [
  {
    title: 'Arpeggio Foundation',
    level: 'Beginner',
    description: 'Build solid arpeggio technique across the fretboard',
    steps: [
      'Practice major and minor triads in multiple positions',
      'Play arpeggios ascending and descending',
      'Use alternate picking for clean articulation',
      'Practice with metronome at various tempos',
      'Memorize arpeggio shapes without looking'
    ],
    tips: 'Focus on clean, even notes rather than speed',
  },
  {
    title: 'Chord Progression Mapping',
    level: 'Intermediate',
    description: 'Learn to play appropriate arpeggios over chord changes',
    steps: [
      'Choose a simple progression (I-vi-IV-V)',
      'Identify the correct arpeggio for each chord',
      'Practice each arpeggio separately',
      'Connect arpeggios through the progression',
      'Add scalar passages between chord tones'
    ],
    tips: 'Listen for how arpeggios outline the harmony',
  },
  {
    title: 'Jazz Standard Application',
    level: 'Intermediate',
    description: 'Apply arpeggios to real jazz standards',
    steps: [
      'Choose a simple jazz standard (Autumn Leaves)',
      'Analyze the chord progression',
      'Practice appropriate arpeggios for each chord',
      'Work on smooth voice leading between chords',
      'Add rhythmic and melodic variations'
    ],
    tips: 'Start slowly and focus on harmonic accuracy',
  },
  {
    title: 'Advanced Arpeggio Integration',
    level: 'Advanced',
    description: 'Combine multiple arpeggio concepts in improvisation',
    steps: [
      'Practice extended and altered arpeggios',
      'Work on rapid arpeggio sequences',
      'Combine with chromatic approach tones',
      'Practice over complex jazz progressions',
      'Record and analyze harmonic accuracy'
    ],
    tips: 'Advanced arpeggios require significant practice to sound musical',
  },
];

const famousArpeggioPlayers = [
  {
    artist: 'Wes Montgomery',
    style: 'Smooth arpeggio lines with octave technique',
    signature: 'Fluid arpeggios that outline complex jazz harmony',
    lesson: 'Arpeggios can be both harmonically sophisticated and melodically beautiful',
  },
  {
    artist: 'Pat Metheny',
    style: 'Wide interval arpeggios with modern extensions',
    signature: 'Uses extended arpeggios for contemporary jazz sounds',
    lesson: 'Extended chords create modern, sophisticated harmonic colors',
  },
  {
    artist: 'Allan Holdsworth',
    style: 'Rapid legato arpeggios with complex harmony',
    signature: 'Lightning-fast arpeggios through dense chord changes',
    lesson: 'Technical mastery enables navigation of any harmony',
  },
  {
    artist: 'George Benson',
    style: 'R&B influenced arpeggios with strong groove',
    signature: 'Combines technical arpeggio work with strong rhythmic feel',
    lesson: 'Arpeggios work in all genres when applied musically',
  },
];

export default function ImprovisingWithArpeggiosPage() {
  return (
    <Layout>
      <Header
        title="Improvising with Arpeggios"
        subtitle="Master the art of outlining chords and creating melodic lines with harmonic clarity through arpeggio-based improvisation."
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
          <h1 className="text-3xl font-bold mb-4">Improvising with Arpeggios</h1>
          <p className="text-xl opacity-90 mb-4">
            Arpeggios are the skeleton of harmony made melodic. Learn to outline chord changes with clarity and sophistication, 
            creating melodic lines that highlight the harmonic structure of your solos.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">Harmonic Clarity</span>
            <span className="bg-white/20 px-3 py-1 rounded">Chord Outlining</span>
            <span className="bg-white/20 px-3 py-1 rounded">Jazz Sophistication</span>
            <span className="bg-white/20 px-3 py-1 rounded">Melodic Structure</span>
          </div>
        </div>

        {/* Theory Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory Fundamentals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Arpeggios as Harmonic Roadmaps</h3>
              <p className="text-gray-600 mb-4">
                Arpeggios are broken chords played melodically. They provide the essential chord tones that define harmony, 
                giving your improvisation harmonic clarity and professional sophistication.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><strong>Chord Definition:</strong> Arpeggios clearly outline underlying harmony</li>
                <li><strong>Strong Foundation:</strong> Chord tones are always harmonically safe</li>
                <li><strong>Professional Sound:</strong> Essential for jazz and sophisticated playing</li>
                <li><strong>Melodic Structure:</strong> Provides framework for melodic development</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">When to Use Arpeggios</h3>
              <p className="text-gray-600 mb-4">
                Arpeggios are particularly effective during chord changes, over complex harmony, and when you want 
                to create harmonic clarity in your improvisation.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><strong>Chord Changes:</strong> Outline each chord as harmony changes</li>
                <li><strong>Complex Harmony:</strong> Navigate difficult chord progressions</li>
                <li><strong>Strong Beats:</strong> Land on chord tones on important beats</li>
                <li><strong>Harmonic Clarity:</strong> When you want to highlight the harmony</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Arpeggio Types */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Essential Arpeggio Types</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {arpeggioTypes.map((type, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-medium text-gray-800">{type.name}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    type.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                    type.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {type.difficulty}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{type.description}</p>
                <div className="space-y-2">
                  <div>
                    <h4 className="font-medium text-gray-700 text-sm">Included Arpeggios:</h4>
                    <ul className="text-xs text-gray-600 ml-4">
                      {type.arpeggios.map((arp, i) => (
                        <li key={i}>• {arp}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 text-sm">Best For:</h4>
                    <ul className="text-xs text-gray-600 ml-4">
                      {type.bestFor.map((genre, i) => (
                        <li key={i}>• {genre}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arpeggio Techniques */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Arpeggio Application Techniques</h2>
          <p className="text-gray-600 mb-6">
            Learn how to use arpeggios musically to create sophisticated, harmonically clear improvisation.
          </p>
          <div className="grid md:grid-cols-1 gap-4">
            {arpeggioTechniques.map((technique, index) => (
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
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Daily Arpeggio Practice Routine</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 border border-orange-200">
              <h3 className="text-lg font-medium text-orange-800 mb-3">Phase 1: Technical (10 mins)</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Practice basic triads in multiple positions</li>
                <li>• Work on clean, even articulation</li>
                <li>• Use metronome for steady timing</li>
                <li>• Practice ascending and descending</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 border border-orange-200">
              <h3 className="text-lg font-medium text-orange-800 mb-3">Phase 2: Harmonic (15 mins)</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Apply arpeggios to chord progressions</li>
                <li>• Practice connecting different arpeggios</li>
                <li>• Work on voice leading between chords</li>
                <li>• Add seventh and extended arpeggios</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 border border-orange-200">
              <h3 className="text-lg font-medium text-orange-800 mb-3">Phase 3: Musical (10 mins)</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Improvise using day's arpeggios</li>
                <li>• Combine arpeggios with scale passages</li>
                <li>• Practice over backing tracks</li>
                <li>• Record and analyze harmonic accuracy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Famous Arpeggio Masters */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Famous Arpeggio Masters</h2>
          <div className="grid md:grid-cols-1 gap-4">
            {famousArpeggioPlayers.map((artist, index) => (
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
        <div className="bg-gradient-to-r from-orange-600 to-red-700 text-white rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Continue Your Improvisation Journey</h2>
          <p className="mb-6 opacity-90">
            Arpeggio mastery is essential for sophisticated improvisation. Explore these related topics to deepen your harmonic understanding:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/lessons/practice/improv/scales" className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors">
              <h3 className="font-semibold mb-2">Scale Integration</h3>
              <p className="text-sm opacity-90">Combine arpeggios with scales for complete harmonic vocabulary</p>
            </Link>
            <Link href="/lessons/practice/improv/target-notes" className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors">
              <h3 className="font-semibold mb-2">Target Notes</h3>
              <p className="text-sm opacity-90">Use arpeggio tones as strong harmonic destinations</p>
            </Link>
            <Link href="/lessons/practice/improv/phrasing" className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors">
              <h3 className="font-semibold mb-2">Musical Phrasing</h3>
              <p className="text-sm opacity-90">Shape your arpeggio lines with expressive phrasing</p>
            </Link>
            <Link href="/lessons/practice/improv/call-response" className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors">
              <h3 className="font-semibold mb-2">Call & Response</h3>
              <p className="text-sm opacity-90">Use arpeggios in musical conversation and dialogue</p>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </Layout>
  );
}
