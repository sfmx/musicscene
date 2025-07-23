import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const rhythmPatterns = [
  {
    name: 'Basic Down-Up Strumming',
    difficulty: 'Beginner',
    timeSignature: '4/4',
    description: 'Foundation strumming pattern using downstrokes and upstrokes',
    theory: 'Quarter note and eighth note subdivisions, consistent timing',
    technique: 'Wrist motion, pick angle, dynamic control',
    songs: ['"Wonderwall" - Oasis', '"Good Riddance" - Green Day']
  },
  {
    name: 'Syncopated Strumming',
    difficulty: 'Intermediate',
    timeSignature: '4/4',
    description: 'Off-beat emphasis and rhythmic displacement for groove',
    theory: 'Syncopation, off-beat accents, rhythmic tension and release',
    technique: 'Selective string hitting, accent control, timing precision',
    songs: ['"Hotel California" - Eagles', '"Blackbird" - Beatles']
  },
  {
    name: 'Palm Muting Patterns',
    difficulty: 'Intermediate',
    timeSignature: '4/4',
    description: 'Controlled muting for percussive and dynamic effects',
    theory: 'Articulation control, rhythmic punctuation, texture variation',
    technique: 'Palm placement, pressure control, selective muting',
    songs: ['"Creep" - Radiohead', '"Come As You Are" - Nirvana']
  },
  {
    name: 'Complex Time Signatures',
    difficulty: 'Advanced',
    timeSignature: '7/8, 5/4',
    description: 'Odd time signatures and complex rhythmic patterns',
    theory: 'Irregular meter, compound time, rhythmic groupings',
    technique: 'Internal subdivision, accent placement, phrase counting',
    songs: ['"Money" - Pink Floyd (7/4)', '"Take Five" - Dave Brubeck (5/4)']
  },
  {
    name: 'Reggae Skank',
    difficulty: 'Intermediate',
    timeSignature: '4/4',
    description: 'Classic reggae upstroke emphasis and rhythmic feel',
    theory: 'Off-beat emphasis, syncopated rhythm, chord stabs',
    technique: 'Upstroke emphasis, chord dampening, rhythmic precision',
    songs: ['"No Woman No Cry" - Bob Marley', '"Three Little Birds" - Bob Marley']
  },
  {
    name: 'Flamenco Rasgueado',
    difficulty: 'Advanced',
    timeSignature: '12/8',
    description: 'Spanish strumming technique with finger rolls',
    theory: 'Compound meter, triplet feel, rhythmic complexity',
    technique: 'Finger independence, nail technique, dynamic variation',
    songs: ['Traditional flamenco forms', 'Spanish classical pieces']
  }
];

const mutingTechniques = [
  {
    name: 'Left-Hand Muting',
    description: 'Using fretting hand to dampen unwanted string resonance',
    theory: 'Prevents sympathetic vibrations and string noise',
    application: 'Essential for clean chord changes and precise rhythm'
  },
  {
    name: 'Right-Hand Palm Muting',
    description: 'Using picking hand palm to control string sustain',
    theory: 'Creates percussive attack and controls note length',
    application: 'Adds rhythmic punch and dynamic control to strumming'
  },
  {
    name: 'Selective String Muting',
    description: 'Targeting specific strings while allowing others to ring',
    theory: 'Creates textural contrast and harmonic clarity',
    application: 'Advanced rhythm guitar techniques and complex chord voicings'
  },
  {
    name: 'Fret-Hand Dampening',
    description: 'Light finger touch to create muted percussive sounds',
    theory: 'Produces rhythmic texture without pitched content',
    application: 'Funk rhythm, percussive strumming, rhythmic accents'
  }
];

const chordTransitions = [
  {
    name: 'Common Finger Anchoring',
    description: 'Keeping common fingers in place during chord changes',
    theory: 'Efficient movement reduces timing gaps and improves smoothness',
    example: 'G to C: keep 3rd finger on 3rd fret',
    difficulty: 'Beginner'
  },
  {
    name: 'Voice Leading Principles',
    description: 'Moving individual voices smoothly between chords',
    theory: 'Stepwise motion and common tones create musical continuity',
    example: 'Am to F: stepwise bass movement A-F',
    difficulty: 'Intermediate'
  },
  {
    name: 'Barre Chord Efficiency',
    description: 'Smooth transitions between barre chord positions',
    theory: 'Consistent hand position and finger pressure distribution',
    example: 'F major to Bb major: parallel movement',
    difficulty: 'Intermediate'
  },
  {
    name: 'Open String Utilization',
    description: 'Using open strings during transitions for smoothness',
    theory: 'Open strings provide time for finger repositioning',
    example: 'D to G using open B and E strings',
    difficulty: 'Advanced'
  }
];

const theoryConcepts = [
  {
    title: 'Rhythmic Subdivision',
    content: 'Understanding how to divide beats into smaller units is fundamental to rhythm guitar. Each subdivision creates different rhythmic feels and musical characters.',
    examples: [
      'Quarter notes - strong, steady feel (folk, country)',
      'Eighth notes - flowing, moderate energy (pop, rock)',
      'Sixteenth notes - driving energy (funk, metal)',
      'Triplets - lilting, swinging feel (blues, jazz)'
    ]
  },
  {
    title: 'Syncopation and Accent Placement',
    content: 'Syncopation creates rhythmic interest by emphasizing weak beats or off-beats. Strategic accent placement drives the groove and creates musical excitement.',
    examples: [
      'On-beat emphasis - stable, grounded feel',
      'Off-beat emphasis - creates forward motion',
      'Displaced accents - rhythmic surprise and tension',
      'Cross-rhythms - complex polyrhythmic textures'
    ]
  },
  {
    title: 'Harmonic Rhythm',
    content: 'The rate at which chords change affects the musical energy and forward motion. Understanding harmonic rhythm helps create appropriate strumming patterns.',
    examples: [
      'Slow harmonic rhythm - contemplative, spacious',
      'Fast harmonic rhythm - energetic, driving',
      'Varied harmonic rhythm - creates musical shape',
      'Static harmony - builds tension through rhythm'
    ]
  }
];

export default function RhythmTechniquesPage() {
  return (
    <Layout>
      <Header
        title="Rhythm Guitar Techniques"
        subtitle="Master the foundation of guitar playing through rhythm, timing, and groove"
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Introduction */}
        <section className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Heartbeat of Music</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Rhythmic Foundation</h3>
              <p className="text-gray-600">Rhythm guitar provides the harmonic and rhythmic foundation that supports melody and drives songs forward. Mastering rhythm techniques is essential for all guitar styles.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Musical Context</h3>
              <p className="text-gray-600">Great rhythm playing requires understanding how technique serves the song. Each pattern and technique has specific musical applications and emotional effects.</p>
            </div>
          </div>
        </section>

        {/* Essential Rhythm Patterns */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Rhythm Patterns</h2>
          <div className="grid gap-6">
            {rhythmPatterns.map((pattern, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{pattern.name}</h3>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {pattern.difficulty}
                      </span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        {pattern.timeSignature}
                      </span>
                    </div>
                  </div>
                  <span className="text-2xl">🥁</span>
                </div>
                
                <p className="text-gray-700 mb-4">{pattern.description}</p>
                
                <div className="grid md:grid-cols-3 gap-4 text-sm mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Theory</h4>
                    <p className="text-gray-600">{pattern.theory}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Technique</h4>
                    <p className="text-gray-600">{pattern.technique}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Example Songs</h4>
                    <ul className="text-gray-600">
                      {pattern.songs.map((song, idx) => (
                        <li key={idx}>• {song}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Muting Techniques */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Muting Techniques</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {mutingTechniques.map((technique, index) => (
              <div key={index} className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-indigo-900 mb-3">{technique.name}</h3>
                <p className="text-indigo-800 mb-3">{technique.description}</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-indigo-900">Theory:</span>
                    <span className="text-indigo-700 ml-2">{technique.theory}</span>
                  </div>
                  <div>
                    <span className="font-medium text-indigo-900">Application:</span>
                    <span className="text-indigo-700 ml-2">{technique.application}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Chord Transitions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Smooth Chord Transitions</h2>
          <div className="grid gap-6">
            {chordTransitions.map((transition, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{transition.name}</h3>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">
                    {transition.difficulty}
                  </span>
                </div>
                <p className="text-gray-700 mb-3">{transition.description}</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-800">Theory:</span>
                    <span className="text-gray-600 ml-2">{transition.theory}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">Example:</span>
                    <span className="text-gray-600 ml-2">{transition.example}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Theory Deep Dive */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Rhythm Theory</h2>
          <div className="space-y-6">
            {theoryConcepts.map((concept, index) => (
              <div key={index} className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{concept.title}</h3>
                <p className="text-blue-800 mb-4">{concept.content}</p>
                <div>
                  <h4 className="font-medium text-blue-900 mb-2">Applications:</h4>
                  <ul className="space-y-1 text-sm text-blue-700">
                    {concept.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practice Approach */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Practice Methodology</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-800 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-green-900 mb-2">Metronome Work</h3>
              <p className="text-green-700 text-sm">Develop internal timing with consistent metronome practice at various tempos.</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-yellow-800 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-yellow-900 mb-2">Pattern Isolation</h3>
              <p className="text-yellow-700 text-sm">Practice rhythm patterns separately before applying to chord progressions.</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-800 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-blue-900 mb-2">Song Application</h3>
              <p className="text-blue-700 text-sm">Apply patterns to real songs to understand musical context and function.</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-800 font-bold">4</span>
              </div>
              <h3 className="font-semibold text-purple-900 mb-2">Dynamic Control</h3>
              <p className="text-purple-700 text-sm">Develop ability to vary dynamics and accents for musical expression.</p>
            </div>
          </div>
        </section>

        {/* Featured Example */}
        <section className="mb-12 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-indigo-900 mb-4">🎸 Case Study: "Wonderwall" Strumming Pattern</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-medium text-indigo-800 mb-2">Pattern Analysis</h4>
              <p className="text-indigo-700 mb-3">The iconic pattern uses down-up strumming with specific accent placement and strategic upstroke emphasis to create the characteristic groove.</p>
              <p className="text-indigo-700"><strong>Count:</strong> "Down, down-up, up-down-up" creates the distinctive feel that drives the song.</p>
            </div>
            <div>
              <h4 className="font-medium text-indigo-800 mb-2">Musical Function</h4>
              <p className="text-indigo-700 mb-3">The pattern provides steady forward motion while the upstroke accents create rhythmic interest that supports the vocal melody.</p>
              <p className="text-indigo-700"><strong>Key Element:</strong> Consistent timing with slight dynamic variation makes it both driving and musical.</p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="text-center">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Continue Your Technique Journey</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/lessons/songs/techniques"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                All Techniques
              </Link>
              <Link 
                href="/lessons/songs/techniques/lead"
                className="px-4 py-2 bg-white border border-blue-200 text-blue-700 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Lead Techniques →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
