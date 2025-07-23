import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const leadTechniques = [
  {
    name: 'Alternate Picking',
    difficulty: 'Beginner',
    description: 'Foundation picking technique alternating down and up strokes',
    theory: 'Consistent attack, even note values, rhythmic precision',
    technique: 'Wrist motion, pick angle, economy of movement',
    musicalContext: 'Essential for scales, arpeggios, and single-note passages',
    songs: ['"Master of Puppets" - Metallica', '"Cliffs of Dover" - Eric Johnson']
  },
  {
    name: 'String Bending',
    difficulty: 'Intermediate',
    description: 'Pitch manipulation through physical string bending',
    theory: 'Semitone and whole-tone intervals, target pitch accuracy',
    technique: 'Finger strength, intonation, vibrato integration',
    musicalContext: 'Blues expression, rock solos, emotional melodic phrases',
    songs: ['"Comfortably Numb" - Pink Floyd', '"The Thrill Is Gone" - B.B. King']
  },
  {
    name: 'Vibrato Techniques',
    difficulty: 'Intermediate',
    description: 'Controlled pitch oscillation for expression and sustain',
    theory: 'Pitch variation speed and width, rhythmic timing',
    technique: 'Finger, wrist, or arm vibrato, pressure control',
    musicalContext: 'Emotional expression, note extension, classical and blues styles',
    songs: ['"Sultans of Swing" - Dire Straits', '"While My Guitar Gently Weeps" - Beatles']
  },
  {
    name: 'Legato Playing',
    difficulty: 'Intermediate',
    description: 'Smooth, connected notes using hammer-ons and pull-offs',
    theory: 'Connected phrasing, scalar passages, slur techniques',
    technique: 'Finger independence, clean articulation, dynamic control',
    musicalContext: 'Fluid melodic lines, jazz phrasing, classical passages',
    songs: ['"Eruption" - Van Halen', '"Technical Difficulties" - Paul Gilbert']
  },
  {
    name: 'Sweep Picking',
    difficulty: 'Advanced',
    description: 'Single pick stroke across multiple strings for arpeggios',
    theory: 'Arpeggio patterns, chord tone targeting, harmonic sequences',
    technique: 'Coordinated pick and fret hand, string dampening',
    musicalContext: 'Neoclassical metal, progressive rock, technical passages',
    songs: ['"Far Beyond the Sun" - Yngwie Malmsteen', '"Technical Ecstasy" - Marty Friedman']
  },
  {
    name: 'Tapping Techniques',
    difficulty: 'Advanced',
    description: 'Two-handed fretboard technique for extended range',
    theory: 'Extended scalar patterns, wide interval leaps, polyrhythmic possibilities',
    technique: 'Right-hand finger technique, left-hand coordination, muting',
    musicalContext: 'Progressive metal, fusion, contemporary instrumental music',
    songs: ['"Eruption" - Van Halen', '"For the Love of God" - Steve Vai']
  }
];

const expressiveTechniques = [
  {
    name: 'Phrasing and Articulation',
    description: 'How notes are connected and separated to create musical sentences',
    theory: 'Musical punctuation, breathing spaces, rhythmic placement',
    application: 'Creates musical meaning beyond just playing correct notes'
  },
  {
    name: 'Dynamic Control',
    description: 'Varying volume and intensity for emotional expression',
    theory: 'Attack strength, sustain control, crescendo and diminuendo',
    application: 'Builds musical tension and release, creates emotional impact'
  },
  {
    name: 'Rhythmic Displacement',
    description: 'Playing phrases ahead or behind the beat for groove',
    theory: 'Syncopation, anticipation, laid-back feel',
    application: 'Creates groove and style-specific feels in solos'
  },
  {
    name: 'Note Choice and Targeting',
    description: 'Strategic selection of notes for harmonic and melodic effect',
    theory: 'Chord tones, passing tones, tension and resolution',
    application: 'Creates harmonic sophistication and melodic direction'
  }
];

const scaleTechniques = [
  {
    scale: 'Pentatonic Scales',
    difficulty: 'Beginner',
    theory: 'Five-note scales removing half-steps for consonant sound',
    technique: 'Box patterns, position playing, bending integration',
    musicalUse: 'Blues, rock, country - fundamental for lead guitar',
    keyTechniques: ['String bending', 'Vibrato', 'Slide approaches']
  },
  {
    scale: 'Blues Scales',
    difficulty: 'Beginner',
    theory: 'Pentatonic plus blue note (b5) for characteristic blues sound',
    technique: 'Blue note emphasis, call-and-response phrasing',
    musicalUse: 'Blues, rock, jazz - expressive melodic playing',
    keyTechniques: ['Bending to blue notes', 'Microtonal bending', 'Vibrato']
  },
  {
    scale: 'Diatonic Modes',
    difficulty: 'Intermediate',
    theory: 'Seven-note scales with different tonal centers and characters',
    technique: 'Modal fingerings, characteristic note emphasis',
    musicalUse: 'Rock, jazz, fusion - sophisticated harmonic color',
    keyTechniques: ['Modal chord progressions', 'Characteristic intervals']
  },
  {
    scale: 'Harmonic Minor',
    difficulty: 'Advanced',
    theory: 'Natural minor with raised 7th for exotic sound',
    technique: 'Three-note-per-string patterns, sweep picking integration',
    musicalUse: 'Neoclassical, metal, Middle Eastern flavors',
    keyTechniques: ['Wide interval leaps', 'Exotic harmonic sequences']
  }
];

const theoryConcepts = [
  {
    title: 'Lead Guitar Role in Songs',
    content: 'Lead guitar serves multiple functions: melodic content, harmonic reinforcement, rhythmic counterpoint, and emotional expression. Understanding when and how to apply each technique serves the song.',
    examples: [
      'Melodic solos - primary musical focus',
      'Fills and embellishments - supporting the vocal',
      'Harmonic doubling - reinforcing chord progressions',
      'Textural elements - adding atmosphere and color'
    ]
  },
  {
    title: 'Technique Serving Expression',
    content: 'Technical proficiency must serve musical expression. Each technique has specific emotional and musical applications that determine when and how to use it effectively.',
    examples: [
      'Vibrato - adds warmth and sustain to long notes',
      'Bending - creates emotional tension and blues expression',
      'Legato - provides smooth, flowing melodic lines',
      'Staccato - creates rhythmic punctuation and clarity'
    ]
  },
  {
    title: 'Scale and Chord Relationship',
    content: 'Effective lead playing requires understanding how scales relate to underlying chord progressions. This knowledge guides note choice and creates harmonic sophistication.',
    examples: [
      'Chord tones on strong beats create stability',
      'Passing tones connect chord tones smoothly',
      'Approach notes create tension leading to targets',
      'Avoid notes create dissonance requiring resolution'
    ]
  }
];

export default function LeadTechniquesPage() {
  return (
    <Layout>
      <Header
        title="Lead Guitar Techniques"
        subtitle="Develop expressive melodic playing through advanced picking, bending, and phrasing techniques"
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Introduction */}
        <section className="mb-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Art of Musical Expression</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Technical Foundation</h3>
              <p className="text-gray-600">Lead guitar technique provides the tools for melodic expression. Mastering picking, bending, and vibrato creates the foundation for expressive playing across all styles.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Musical Application</h3>
              <p className="text-gray-600">Great lead playing balances technical skill with musical sensitivity. Understanding when and how to apply techniques serves the song and creates emotional connection.</p>
            </div>
          </div>
        </section>

        {/* Core Lead Techniques */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Lead Guitar Techniques</h2>
          <div className="grid gap-6">
            {leadTechniques.map((technique, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{technique.name}</h3>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm">
                      {technique.difficulty}
                    </span>
                  </div>
                  <span className="text-2xl">🎸</span>
                </div>
                
                <p className="text-gray-700 mb-4">{technique.description}</p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Theory</h4>
                    <p className="text-gray-600">{technique.theory}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Technique</h4>
                    <p className="text-gray-600">{technique.technique}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Musical Context</h4>
                    <p className="text-gray-600">{technique.musicalContext}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Example Songs</h4>
                    <ul className="text-gray-600">
                      {technique.songs.map((song, idx) => (
                        <li key={idx}>• {song}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Expressive Techniques */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Expressive Elements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {expressiveTechniques.map((technique, index) => (
              <div key={index} className="bg-pink-50 border border-pink-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-pink-900 mb-3">{technique.name}</h3>
                <p className="text-pink-800 mb-3">{technique.description}</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-pink-900">Theory:</span>
                    <span className="text-pink-700 ml-2">{technique.theory}</span>
                  </div>
                  <div>
                    <span className="font-medium text-pink-900">Application:</span>
                    <span className="text-pink-700 ml-2">{technique.application}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Scale Techniques */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Scale-Based Techniques</h2>
          <div className="grid gap-6">
            {scaleTechniques.map((scale, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{scale.scale}</h3>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm">
                    {scale.difficulty}
                  </span>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Theory</h4>
                    <p className="text-gray-600">{scale.theory}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Technique</h4>
                    <p className="text-gray-600">{scale.technique}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Musical Use</h4>
                    <p className="text-gray-600">{scale.musicalUse}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Key Techniques</h4>
                    <ul className="text-gray-600">
                      {scale.keyTechniques.map((tech, idx) => (
                        <li key={idx}>• {tech}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Theory Deep Dive */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Lead Guitar Theory</h2>
          <div className="space-y-6">
            {theoryConcepts.map((concept, index) => (
              <div key={index} className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-purple-900 mb-3">{concept.title}</h3>
                <p className="text-purple-800 mb-4">{concept.content}</p>
                <div>
                  <h4 className="font-medium text-purple-900 mb-2">Key Applications:</h4>
                  <ul className="space-y-1 text-sm text-purple-700">
                    {concept.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practice Progression */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Lead Guitar Development Path</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-800 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-green-900 mb-2">Picking Foundation</h3>
              <p className="text-green-700 text-sm">Master alternate picking and basic scale patterns for clean, accurate single-note playing.</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-yellow-800 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-yellow-900 mb-2">Expression Basics</h3>
              <p className="text-yellow-700 text-sm">Develop bending, vibrato, and legato techniques for musical expression and phrasing.</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-800 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-blue-900 mb-2">Musical Application</h3>
              <p className="text-blue-700 text-sm">Apply techniques to songs and solos, focusing on musical context and appropriate usage.</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-800 font-bold">4</span>
              </div>
              <h3 className="font-semibold text-purple-900 mb-2">Advanced Techniques</h3>
              <p className="text-purple-700 text-sm">Master sweep picking, tapping, and other advanced techniques for complex musical passages.</p>
            </div>
          </div>
        </section>

        {/* Featured Example */}
        <section className="mb-12 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-pink-900 mb-4">🎸 Case Study: "Comfortably Numb" Solo Techniques</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-medium text-pink-800 mb-2">Technical Elements</h4>
              <p className="text-pink-700 mb-3">David Gilmour's solo combines precise bending, sustained vibrato, and strategic note choice. Each bend targets specific intervals (whole step, half step) with perfect intonation.</p>
              <p className="text-pink-700"><strong>Key Techniques:</strong> Wide vibrato, sustained bends, melodic phrase construction.</p>
            </div>
            <div>
              <h4 className="font-medium text-pink-800 mb-2">Musical Function</h4>
              <p className="text-pink-700 mb-3">The solo serves as emotional climax, using space and silence as effectively as notes. Technique supports the emotional arc rather than displaying virtuosity.</p>
              <p className="text-pink-700"><strong>Lesson:</strong> Technical proficiency must serve musical expression and emotional communication.</p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="text-center">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Continue Your Technique Journey</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/lessons/songs/techniques/rhythm"
                className="px-4 py-2 bg-white border border-purple-200 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors"
              >
                ← Rhythm Techniques
              </Link>
              <Link 
                href="/lessons/songs/techniques"
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                All Techniques
              </Link>
              <Link 
                href="/lessons/songs/techniques/fingerpicking"
                className="px-4 py-2 bg-white border border-purple-200 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors"
              >
                Fingerpicking →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
