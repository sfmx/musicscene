"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VexTabRenderer from '@/components/VexTabRenderer';

const arpeggioExamples = [
  {
    title: 'Major 7th Arpeggio',
    description: 'C major 7th arpeggio - foundation of jazz harmony',
    notation: 'tabstave notation=true\nnotes 8-8/3 8-10/2 8-9/2 8-12/1 | 8-12/1 8-9/2 8-10/2 8-8/3',
    degrees: 'Root - 3rd - 5th - 7th and back down',
  },
  {
    title: 'Minor 7th Arpeggio',
    description: 'A minor 7th arpeggio - essential for minor chords',
    notation: 'tabstave notation=true\nnotes 5-5/4 5-7/3 5-5/3 5-8/2 | 5-8/2 5-5/3 5-7/3 5-5/4',
    degrees: 'Root - ♭3rd - 5th - ♭7th and back down',
  },
  {
    title: 'Dominant 7th Arpeggio',
    description: 'G7 arpeggio - perfect for blues and jazz progressions',
    notation: 'tabstave notation=true\nnotes 3-3/6 3-5/5 3-4/5 3-3/4 | 3-3/4 3-4/5 3-5/5 3-3/6',
    degrees: 'Root - 3rd - 5th - ♭7th and back down',
  },
];

const arpeggioTypes = [
  {
    type: 'Basic Triads',
    description: 'Three-note chord outlines - the foundation',
    arpeggios: ['Major (1-3-5)', 'Minor (1-♭3-5)', 'Diminished (1-♭3-♭5)', 'Augmented (1-3-#5)'],
    application: 'Perfect for outlining simple chord progressions',
    difficulty: 'Beginner',
  },
  {
    type: 'Seventh Chords',
    description: 'Four-note arpeggios with extended harmony',
    arpeggios: ['Major 7th (1-3-5-7)', 'Minor 7th (1-♭3-5-♭7)', 'Dominant 7th (1-3-5-♭7)', 'Half-diminished (1-♭3-♭5-♭7)'],
    application: 'Essential for jazz and sophisticated progressions',
    difficulty: 'Intermediate',
  },
  {
    type: 'Extended Chords',
    description: 'Adding color tones beyond the seventh',
    arpeggios: ['Add9 (1-3-5-9)', 'Major 6th (1-3-5-6)', '11th chords', '13th chords'],
    application: 'Creates sophisticated, colorful melodic lines',
    difficulty: 'Advanced',
  },
  {
    type: 'Altered Dominants',
    description: 'Modified dominant 7th chords with tension',
    arpeggios: ['7♯5 (1-3-#5-♭7)', '7♭5 (1-3-♭5-♭7)', '7♯9 variations', '7♭9 variations'],
    application: 'Essential for jazz and blues with harmonic sophistication',
    difficulty: 'Advanced',
  },
];

const practiceApproaches = [
  {
    approach: 'Chord Tone Target Practice',
    level: 'Beginner',
    description: 'Practice landing on chord tones on strong beats',
    steps: [
      'Play simple chord progression (like C-Am-F-G)',
      'Play scales but land on chord tones on beat 1',
      'Gradually land on chord tones on more beats',
      'Practice with different chord progressions',
      'Focus on smooth voice leading between chords'
    ],
    tips: 'Start slow and really hear how chord tones sound over each chord',
  },
  {
    approach: 'Arpeggio Connection Practice',
    level: 'Intermediate',
    description: 'Connect arpeggios smoothly through chord changes',
    steps: [
      'Learn arpeggio shapes for each chord in progression',
      'Practice playing each arpeggio separately',
      'Find common tones between adjacent chords',
      'Practice connecting arpeggios with scale passages',
      'Work on smooth transitions and voice leading'
    ],
    tips: 'Look for notes that are the same between different chord arpeggios',
  },
  {
    approach: 'Melodic Arpeggio Integration',
    level: 'Advanced',
    description: 'Blend arpeggios into flowing melodic lines',
    steps: [
      'Start with simple melodic phrases using chord tones',
      'Add passing tones between arpeggio notes',
      'Vary rhythm while keeping harmonic clarity',
      'Practice playing "through" the chord changes',
      'Work on creating longer melodic sentences'
    ],
    tips: 'The goal is melody first, with harmony supporting the musical line',
  },
];

const harmonicConcepts = [
  {
    concept: 'Voice Leading',
    description: 'Smooth melodic motion between chord tones',
    techniques: ['Common tones', 'Step-wise motion', 'Chromatic approaches', 'Contrary motion'],
    musicalEffect: 'Creates smooth, connected sounding lines',
  },
  {
    concept: 'Chord-Scale Relationships',
    description: 'How arpeggios relate to scales over the same chord',
    techniques: ['Arpeggio as skeleton', 'Scale as decoration', 'Combining both approaches', 'Context-dependent choices'],
    musicalEffect: 'Gives both harmonic clarity and melodic freedom',
  },
  {
    concept: 'Rhythmic Displacement',
    description: 'Playing arpeggios with varied rhythmic emphasis',
    techniques: ['Off-beat starts', 'Syncopated patterns', 'Cross-rhythm', 'Metric modulation'],
    musicalEffect: 'Prevents mechanical, predictable arpeggio playing',
  },
  {
    concept: 'Inversions and Extensions',
    description: 'Using different starting points and extended harmony',
    techniques: ['Root position', 'First inversion', 'Second inversion', 'Higher extensions'],
    musicalEffect: 'Creates variety and covers different register ranges',
  },
];

const masterPlayers = [
  {
    player: 'Wes Montgomery',
    style: 'Jazz guitar legend known for melodic arpeggio-based lines',
    approach: 'Used arpeggios to create flowing, horn-like melodic phrases with clear harmonic direction',
    signature: 'Octaves combined with single-note arpeggio passages',
  },
  {
    player: 'Joe Pass',
    style: 'Master of chord-melody and walking bass lines',
    approach: 'Seamlessly blended arpeggios with scales, often implying multiple chord voices',
    signature: 'Complex harmonic awareness in single-note lines',
  },
  {
    player: 'George Benson',
    style: 'Contemporary jazz with blues and R&B influences',
    approach: 'Used arpeggios to outline changes while maintaining strong rhythmic groove',
    signature: 'Fluid arpeggio runs with excellent timing and phrasing',
  },
  {
    player: 'Allan Holdsworth',
    style: 'Fusion pioneer with complex harmonic concepts',
    approach: 'Extended and altered arpeggios with wide interval leaps and modern voicings',
    signature: 'Sophisticated use of upper structure triads and extensions',
  },
];

export default function ImprovisingWithArpeggiosPage() {
  return (
    <Layout>
      <Header
        title="Arpeggio Application"
        subtitle="Master chord outline improvisation and harmonic clarity in your solos"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="mb-8">
          <Link 
            href="/lessons/practice/improv" 
            className="text-purple-600 hover:text-purple-800 font-medium"
          >
            ← Back to Improvisation
          </Link>
        </nav>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-8 mb-8 not-prose">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Arpeggio Application: Outlining Harmony with Clarity
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Master the art of improvising with arpeggios - the key to creating melodic lines 
              that clearly outline chord progressions while maintaining musical flow and sophistication.
            </p>
            <div className="bg-red-50 rounded-lg p-4">
              <h3 className="font-semibold text-red-800 mb-2">Master These Skills:</h3>
              <ul className="text-red-700 space-y-1">
                <li>• Chord tone targeting and voice leading</li>
                <li>• Connecting arpeggios through changes</li>
                <li>• Blending arpeggios with scales</li>
                <li>• Advanced harmonic extensions</li>
                <li>• Rhythmic sophistication with chord tones</li>
                <li>• Jazz and contemporary harmony application</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Fundamentals */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Arpeggios Matter</h2>
          
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">The Harmonic Foundation of Great Solos</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Benefits of Arpeggio-Based Playing</h4>
                <ul className="space-y-2 text-blue-700">
                  <li>• <strong>Harmonic clarity:</strong> Notes clearly support the chord</li>
                  <li>• <strong>Sophisticated sound:</strong> Professional, jazz-influenced approach</li>
                  <li>• <strong>Chord connection:</strong> Smooth transitions between changes</li>
                  <li>• <strong>Melodic coherence:</strong> Creates logical melodic lines</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Common Arpeggio Problems</h4>
                <ul className="space-y-2 text-blue-700">
                  <li>• <strong>Mechanical playing:</strong> Sounds like exercises</li>
                  <li>• <strong>No rhythm variation:</strong> Always same note values</li>
                  <li>• <strong>Poor voice leading:</strong> Awkward jumps between chords</li>
                  <li>• <strong>Ignoring melody:</strong> Only thinking harmony</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Musical Examples */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Essential Arpeggio Patterns</h2>
          
          <div className="space-y-8">
            {arpeggioExamples.map((example, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{example.title}</h3>
                <p className="text-gray-600 mb-4">{example.description}</p>
                
                <div className="bg-orange-50 p-4 rounded-lg mb-4">
                  <VexTabRenderer 
                    vextab={example.notation}
                    scale={0.8}
                  />
                </div>
                
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm text-gray-700"><strong>Chord Tones:</strong> {example.degrees}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Arpeggio Types */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Types of Arpeggios</h2>
          
          <div className="space-y-6">
            {arpeggioTypes.map((type, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{type.type}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    type.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                    type.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {type.difficulty}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{type.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Arpeggio Formulas</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {type.arpeggios.map((arpeggio, i) => (
                        <li key={i}>• {arpeggio}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Musical Application</h4>
                    <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">{type.application}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Harmonic Concepts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Advanced Harmonic Concepts</h2>
          
          <div className="space-y-6">
            {harmonicConcepts.map((concept, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{concept.concept}</h3>
                <p className="text-gray-600 mb-4">{concept.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Techniques</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {concept.techniques.map((technique, i) => (
                        <li key={i}>• {technique}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Musical Effect</h4>
                    <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">{concept.musicalEffect}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practice Approaches */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Practice Approaches</h2>
          
          <div className="space-y-6">
            {practiceApproaches.map((approach, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">{approach.approach}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    approach.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                    approach.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {approach.level}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{approach.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Practice Steps</h4>
                    <ol className="text-sm text-gray-600 space-y-1">
                      {approach.steps.map((step, i) => (
                        <li key={i}>{i + 1}. {step}</li>
                      ))}
                    </ol>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Pro Tip</h4>
                    <p className="text-sm text-gray-600 bg-blue-50 p-3 rounded">{approach.tips}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Master Players */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Masters of Arpeggio Playing</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {masterPlayers.map((player, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">{player.player}</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-700 text-sm">Style</h4>
                    <p className="text-sm text-gray-600">{player.style}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 text-sm">Approach</h4>
                    <p className="text-sm text-gray-600">{player.approach}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 text-sm">Signature Elements</h4>
                    <p className="text-sm text-gray-600 font-medium">{player.signature}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Common Arpeggio Mistakes</h2>
          
          <div className="bg-red-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-red-800">Avoid These Pitfalls</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Mechanical Playing</h4>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li>• <strong>Exercise mentality:</strong> Playing arpeggios like scales</li>
                  <li>• <strong>No phrasing:</strong> Ignoring musical sentences</li>
                  <li>• <strong>Same rhythm:</strong> All quarter or eighth notes</li>
                  <li>• <strong>No dynamics:</strong> Same volume throughout</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Harmonic Issues</h4>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li>• <strong>Ignoring chord changes:</strong> Playing wrong arpeggios</li>
                  <li>• <strong>Poor voice leading:</strong> Awkward jumps between chords</li>
                  <li>• <strong>Too academic:</strong> Sounds like homework, not music</li>
                  <li>• <strong>No melody:</strong> Only thinking about chord tones</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Routine */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Daily Arpeggio Practice</h2>
          
          <div className="bg-teal-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-teal-800">15-Minute Arpeggio Workout</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <h4 className="font-semibold text-teal-700 mb-2">Warm-up (3 min)</h4>
                <ul className="space-y-1 text-teal-700 text-sm">
                  <li>• Basic major triads</li>
                  <li>• Different positions</li>
                  <li>• Clean execution</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-teal-700 mb-2">Extensions (4 min)</h4>
                <ul className="space-y-1 text-teal-700 text-sm">
                  <li>• 7th chord arpeggios</li>
                  <li>• Different inversions</li>
                  <li>• Voice leading practice</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-teal-700 mb-2">Application (5 min)</h4>
                <ul className="space-y-1 text-teal-700 text-sm">
                  <li>• Chord progressions</li>
                  <li>• Melodic integration</li>
                  <li>• Rhythmic variation</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-teal-700 mb-2">Musical (3 min)</h4>
                <ul className="space-y-1 text-teal-700 text-sm">
                  <li>• Play with backing track</li>
                  <li>• Focus on phrasing</li>
                  <li>• Record and review</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Continue Your Improvisation Journey */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Continue Your Improvisation Journey</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link 
              href="/lessons/practice/improv"
              className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-blue-800 mb-2">Improvisation Overview</h3>
              <p className="text-blue-700 text-sm">Master the fundamentals of creative guitar improvisation</p>
            </Link>
            
            <Link 
              href="/lessons/practice/improv/call-response"
              className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-green-800 mb-2">Call & Response</h3>
              <p className="text-green-700 text-sm">Master musical conversation and interactive improvisation</p>
            </Link>
            
            <Link 
              href="/lessons/practice/improv/motif-development"
              className="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-purple-800 mb-2">Motif Development</h3>
              <p className="text-purple-700 text-sm">Build compelling solos from small musical ideas</p>
            </Link>
            
            <Link 
              href="/lessons/practice/improv/target-notes"
              className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-orange-800 mb-2">Target Notes</h3>
              <p className="text-orange-700 text-sm">Use harmonic anchor points to guide your improvisation</p>
            </Link>
            
            <Link 
              href="/lessons/practice/improv/rhythm"
              className="bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-red-800 mb-2">Rhythmic Variation</h3>
              <p className="text-red-700 text-sm">Add groove and timing sophistication to your solos</p>
            </Link>
            
            <Link 
              href="/lessons/practice/improv/scales"
              className="bg-gradient-to-r from-teal-50 to-teal-100 border border-teal-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-teal-800 mb-2">Scale Application</h3>
              <p className="text-teal-700 text-sm">Apply scales musically in your improvisation</p>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </Layout>
  );
}
