import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const bendingTechniques = [
  {
    name: 'Half-Step Bending',
    difficulty: 'Beginner',
    interval: 'Semitone (1 fret)',
    description: 'Basic string bending technique raising pitch by one semitone',
    theory: 'Creates smooth melodic transitions and blues expression',
    technique: 'Single finger strength, wrist support, accurate pitch targeting',
    musicalContext: 'Blues scales, rock solos, country licks',
    songs: ['"Layla" - Derek and the Dominos', '"Johnny B. Goode" - Chuck Berry']
  },
  {
    name: 'Whole-Step Bending',
    difficulty: 'Intermediate',
    interval: 'Whole tone (2 frets)',
    description: 'Full tone string bending for dramatic pitch changes',
    theory: 'Creates strong melodic intervals and emotional expression',
    technique: 'Multiple finger support, controlled release, sustain maintenance',
    musicalContext: 'Rock solos, blues expression, country steel guitar emulation',
    songs: ['"Comfortably Numb" - Pink Floyd', '"Hotel California" - Eagles']
  },
  {
    name: 'Pre-Bending',
    difficulty: 'Intermediate',
    interval: 'Various',
    description: 'Bending string before striking for smooth entrance',
    theory: 'Creates seamless pitch arrival without audible bend attack',
    technique: 'Silent bending, precise pitch targeting, clean attack',
    musicalContext: 'Sophisticated blues, jazz fusion, melodic rock',
    songs: ['"Sultans of Swing" - Dire Straits', '"While My Guitar Gently Weeps" - Beatles']
  },
  {
    name: 'Unison Bending',
    difficulty: 'Advanced',
    interval: 'Matching pitch',
    description: 'Bending one string to match pitch of adjacent string',
    theory: 'Creates harmonic reinforcement and unique timbral effects',
    technique: 'Precise pitch matching, clean execution, harmonic balance',
    musicalContext: 'Blues rock, classic rock solos, melodic emphasis',
    songs: ['"The Thrill Is Gone" - B.B. King', '"Pride and Joy" - Stevie Ray Vaughan']
  },
  {
    name: 'Release Bending',
    difficulty: 'Intermediate',
    interval: 'Return to original',
    description: 'Controlled return from bent pitch to original note',
    theory: 'Creates descending melodic motion and phrase resolution',
    technique: 'Controlled release, sustain maintenance, smooth transition',
    musicalContext: 'Blues phrasing, rock solos, expressive passages',
    songs: ['"Still Got the Blues" - Gary Moore', '"Black" - Pearl Jam']
  },
  {
    name: 'Microtonal Bending',
    difficulty: 'Advanced',
    interval: 'Quarter-tones',
    description: 'Subtle pitch variations between semitones',
    theory: 'Creates blue notes and non-tempered intervals',
    technique: 'Precise pressure control, ear training, expressive nuance',
    musicalContext: 'Authentic blues, world music, experimental playing',
    songs: ['Traditional blues recordings', 'Middle Eastern influenced music']
  }
];

const vibratoTechniques = [
  {
    name: 'Finger Vibrato',
    description: 'Vibrato produced by finger movement along the string',
    mechanism: 'Finger rolls along string length, changing tension',
    character: 'Subtle, controlled, classical in nature',
    application: 'Classical guitar, jazz, sophisticated melodic playing',
    speed: 'Moderate to slow, controlled oscillation'
  },
  {
    name: 'Wrist Vibrato',
    description: 'Vibrato created through wrist rotation movement',
    mechanism: 'Wrist rotation changes string tension rhythmically',
    character: 'Moderate intensity, good for sustained notes',
    application: 'Blues, rock, general melodic playing',
    speed: 'Variable, moderate intensity and width'
  },
  {
    name: 'Arm Vibrato',
    description: 'Wide vibrato using forearm movement',
    mechanism: 'Arm movement creates larger pitch variations',
    character: 'Wide, dramatic, intense emotional expression',
    application: 'Blues rock, dramatic solos, emotional climaxes',
    speed: 'Often slower but wider pitch variation'
  },
  {
    name: 'B.B. King Style',
    description: 'Distinctive fast, narrow vibrato technique',
    mechanism: 'Rapid finger movement with minimal pitch variation',
    character: 'Fast, narrow, immediately recognizable',
    application: 'Blues guitar, signature sound, sustained notes',
    speed: 'Very fast oscillation, narrow pitch range'
  }
];

const expressiveBending = [
  {
    concept: 'Target Note Accuracy',
    description: 'Precise pitch targeting for musical intervals',
    theory: 'Bent notes must reach exact pitches for harmonic correctness',
    practice: 'Use reference notes, tune by ear, develop muscle memory',
    importance: 'Essential for musical credibility and harmonic integration'
  },
  {
    concept: 'Bend Timing',
    description: 'Rhythmic placement and duration of bending motion',
    theory: 'Bend speed affects musical expression and phrasing',
    practice: 'Practice slow and fast bends, use metronome for timing',
    importance: 'Creates different emotional effects and musical characters'
  },
  {
    concept: 'Dynamic Control',
    description: 'Volume and intensity variation during bends',
    theory: 'Dynamics enhance expression and create musical shape',
    practice: 'Combine bending with volume swells and accent patterns',
    importance: 'Adds sophistication and emotional depth to bending'
  },
  {
    concept: 'Phrase Integration',
    description: 'Using bends as part of larger melodic phrases',
    theory: 'Bends serve melodic function, not just technical display',
    practice: 'Practice bends within scales and song contexts',
    importance: 'Ensures musical application rather than technical exercise'
  }
];

const theoryConcepts = [
  {
    title: 'The Physics of String Bending',
    content: 'String bending changes pitch by altering string tension. Understanding the physical relationship between finger pressure, string gauge, and pitch change helps develop accurate technique.',
    examples: [
      'Heavier strings require more force for same pitch change',
      'Higher frets require less bending distance for same interval',
      'String tension affects sustain and tone quality during bends',
      'Multiple finger support distributes force and improves control'
    ]
  },
  {
    title: 'Harmonic Function of Bent Notes',
    content: 'Bent notes must function harmonically within the musical context. Understanding scale relationships and chord tones guides appropriate bend targets and musical application.',
    examples: [
      'Bending to chord tones creates harmonic stability',
      'Bending between scale degrees creates tension and resolution',
      'Blue note bends add characteristic blues harmonic color',
      'Chromatic approach bends lead smoothly to target notes'
    ]
  },
  {
    title: 'Vibrato as Musical Expression',
    content: 'Vibrato adds life and emotion to sustained notes. Different vibrato styles convey different musical characters and emotional qualities.',
    examples: [
      'Fast, narrow vibrato - nervous energy, excitement',
      'Slow, wide vibrato - emotional depth, singing quality',
      'Classical vibrato - refined, controlled expression',
      'Blues vibrato - raw emotion, human vocal quality'
    ]
  }
];

export default function BendingTechniquesPage() {
  return (
    <Layout>
      <Header
        title="String Bending & Vibrato"
        subtitle="Master expressive techniques that bring emotion and character to your guitar playing"
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Introduction */}
        <section className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Voice of the Guitar</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Expressive Foundation</h3>
              <p className="text-gray-600">String bending and vibrato are fundamental expressive techniques that transform static notes into living, breathing musical phrases. These techniques bridge the gap between mechanical playing and human expression.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Musical Communication</h3>
              <p className="text-gray-600">Great bending and vibrato communicate emotion directly to listeners. Understanding the theory and technique behind these expressions enables authentic musical communication across all styles.</p>
            </div>
          </div>
        </section>

        {/* String Bending Techniques */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">String Bending Techniques</h2>
          <div className="grid gap-6">
            {bendingTechniques.map((technique, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{technique.name}</h3>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {technique.difficulty}
                      </span>
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                        {technique.interval}
                      </span>
                    </div>
                  </div>
                  <span className="text-2xl">🎶</span>
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

        {/* Vibrato Techniques */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Vibrato Techniques</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {vibratoTechniques.map((technique, index) => (
              <div key={index} className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">{technique.name}</h3>
                <p className="text-purple-800 mb-3">{technique.description}</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-purple-900">Mechanism:</span>
                    <span className="text-purple-700 ml-2">{technique.mechanism}</span>
                  </div>
                  <div>
                    <span className="font-medium text-purple-900">Character:</span>
                    <span className="text-purple-700 ml-2">{technique.character}</span>
                  </div>
                  <div>
                    <span className="font-medium text-purple-900">Application:</span>
                    <span className="text-purple-700 ml-2">{technique.application}</span>
                  </div>
                  <div>
                    <span className="font-medium text-purple-900">Speed:</span>
                    <span className="text-purple-700 ml-2">{technique.speed}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Expressive Bending Concepts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Expressive Bending Concepts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {expressiveBending.map((concept, index) => (
              <div key={index} className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">{concept.concept}</h3>
                <p className="text-blue-800 mb-3">{concept.description}</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-blue-900">Theory:</span>
                    <span className="text-blue-700 ml-2">{concept.theory}</span>
                  </div>
                  <div>
                    <span className="font-medium text-blue-900">Practice:</span>
                    <span className="text-blue-700 ml-2">{concept.practice}</span>
                  </div>
                  <div>
                    <span className="font-medium text-blue-900">Importance:</span>
                    <span className="text-blue-700 ml-2">{concept.importance}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Theory Deep Dive */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Bending & Vibrato Theory</h2>
          <div className="space-y-6">
            {theoryConcepts.map((concept, index) => (
              <div key={index} className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-indigo-900 mb-3">{concept.title}</h3>
                <p className="text-indigo-800 mb-4">{concept.content}</p>
                <div>
                  <h4 className="font-medium text-indigo-900 mb-2">Key Points:</h4>
                  <ul className="space-y-1 text-sm text-indigo-700">
                    {concept.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practice Development */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Development Progression</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-800 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-green-900 mb-2">Basic Bending</h3>
              <p className="text-green-700 text-sm">Master half-step and whole-step bends with accurate pitch targeting and clean execution.</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-yellow-800 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-yellow-900 mb-2">Vibrato Control</h3>
              <p className="text-yellow-700 text-sm">Develop consistent vibrato with control over speed, width, and musical application.</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-800 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-blue-900 mb-2">Advanced Techniques</h3>
              <p className="text-blue-700 text-sm">Master pre-bending, unison bends, and microtonal variations for sophisticated expression.</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-800 font-bold">4</span>
              </div>
              <h3 className="font-semibold text-purple-900 mb-2">Musical Expression</h3>
              <p className="text-purple-700 text-sm">Apply techniques musically with proper phrasing, dynamics, and emotional communication.</p>
            </div>
          </div>
        </section>

        {/* Featured Example */}
        <section className="mb-12 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-purple-900 mb-4">🎸 Case Study: David Gilmour's "Comfortably Numb" Solo</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-medium text-purple-800 mb-2">Bending Mastery</h4>
              <p className="text-purple-700 mb-3">Gilmour's solo demonstrates perfect pitch accuracy in string bending, with every bend reaching exact target notes. His sustained vibrato creates singing, vocal-like quality.</p>
              <p className="text-purple-700"><strong>Technique:</strong> Wide arm vibrato, precise whole-step bends, sustained notes with controlled dynamics.</p>
            </div>
            <div>
              <h4 className="font-medium text-purple-800 mb-2">Musical Expression</h4>
              <p className="text-purple-700 mb-3">Each bend and vibrato serves the emotional arc of the solo. Technical precision supports musical expression rather than displaying virtuosity for its own sake.</p>
              <p className="text-purple-700"><strong>Lesson:</strong> Perfect technique enables pure musical expression - the technique becomes invisible in service of the music.</p>
            </div>
          </div>
        </section>

        {/* Practice Tips */}
        <section className="mb-12 bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-amber-900 mb-4">🎯 Essential Practice Tips</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-medium text-amber-800 mb-2">Bending Practice</h4>
              <ul className="space-y-1 text-amber-700">
                <li>• Use reference notes to check pitch accuracy</li>
                <li>• Support bending finger with adjacent fingers</li>
                <li>• Practice slow bends for control and fast bends for expression</li>
                <li>• Focus on maintaining tone quality throughout the bend</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-amber-800 mb-2">Vibrato Development</h4>
              <ul className="space-y-1 text-amber-700">
                <li>• Start with slow, wide vibrato for control</li>
                <li>• Practice different vibrato styles for musical variety</li>
                <li>• Use vibrato on sustained notes in songs and scales</li>
                <li>• Record yourself to evaluate consistency and musicality</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="text-center">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Continue Your Technique Journey</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/lessons/songs/techniques/percussive"
                className="px-4 py-2 bg-white border border-purple-200 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors"
              >
                ← Percussive Techniques
              </Link>
              <Link 
                href="/lessons/songs/techniques"
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                All Techniques
              </Link>
              <Link 
                href="/lessons/songs/techniques/advanced-picking"
                className="px-4 py-2 bg-white border border-purple-200 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors"
              >
                Advanced Picking →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
