import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fingerpickingPatterns = [
  {
    title: 'Travis Picking',
    difficulty: 'Intermediate',
    description: 'Classic alternating bass pattern with melody notes',
    pattern: 'T-I-T-M or T-I-T-A',
    fingers: 'Thumb (T), Index (I), Middle (M), Ring/Annular (A)',
    songs: ['Dust in the Wind - Kansas', 'Blackbird - Beatles', 'The Boxer - Simon & Garfunkel'],
    theory: 'Bass-melody independence, alternating bass, syncopated melody'
  },
  {
    title: 'Classical Arpeggios',
    difficulty: 'Intermediate',
    description: 'Traditional classical guitar fingerpicking patterns',
    pattern: 'P-I-M-A-M-I',
    fingers: 'Thumb (P), Index (I), Middle (M), Ring/Annular (A)',
    songs: ['Nothing Else Matters - Metallica', 'Stairway to Heaven - Led Zeppelin', 'Tears in Heaven - Clapton'],
    theory: 'Arpeggiated harmony, classical technique, chord voicing'
  },
  {
    title: 'Folk Fingerpicking',
    difficulty: 'Beginner',
    description: 'Simple alternating pattern for folk and country',
    pattern: 'T-I-M-I',
    fingers: 'Thumb bass, index and middle alternating',
    songs: ['House of the Rising Sun - Animals', 'Scarborough Fair', 'The Water is Wide'],
    theory: 'Folk tradition, simple harmony support, vocal accompaniment'
  },
  {
    title: 'Bossa Nova Pattern',
    difficulty: 'Advanced',
    description: 'Sophisticated Latin fingerpicking with syncopation',
    pattern: 'T-I-T-M-T-I-M-I',
    fingers: 'Complex thumb/finger coordination',
    songs: ['Girl from Ipanema', 'Corcovado', 'Wave - Jobim'],
    theory: 'Latin rhythm, syncopated bass, jazz harmony'
  },
  {
    title: 'Celtic Picking',
    difficulty: 'Intermediate',
    description: 'Irish/Scottish patterns with drone strings',
    pattern: 'T-I-T-M-I-T-M-A',
    fingers: 'Open string drones with melody',
    songs: ['Celtic Woman', 'Danny Boy', 'Wild Mountain Thyme'],
    theory: 'Modal harmony, drone accompaniment, Celtic ornamentation'
  },
  {
    title: 'Blues Fingerpicking',
    difficulty: 'Advanced',
    description: 'Delta blues style with walking bass',
    pattern: 'Variable with walking bass',
    fingers: 'Thumb walking bass, fingers melody',
    songs: ['Dust My Broom - Robert Johnson', 'Come on in My Kitchen', 'Me and the Devil Blues'],
    theory: 'Blues harmony, walking bass lines, call-and-response'
  },
  {
    title: 'Contemporary Fingerstyle',
    difficulty: 'Advanced',
    description: 'Modern percussive fingerstyle techniques',
    pattern: 'Complex with percussion',
    fingers: 'All fingers plus palm percussion',
    songs: ['Drifting - Andy McKee', 'Rylynn - Andy McKee', 'Indaba - Andy McKee'],
    theory: 'Extended techniques, percussive elements, compositional approach'
  },
  {
    title: 'Flamenco Rasgueado',
    difficulty: 'Advanced',
    description: 'Spanish flamenco strumming and picking combination',
    pattern: 'Rasgueado + picado',
    fingers: 'All fingers in flamenco technique',
    songs: ['Malagueña', 'Asturias', 'Entre Dos Aguas - Paco de Lucía'],
    theory: 'Flamenco harmony, Phrygian mode, Spanish rhythm'
  }
];

const technicalFundamentals = [
  {
    title: 'Hand Position',
    icon: '✋',
    description: 'Proper right-hand positioning for fingerpicking',
    technique: 'Wrist straight, fingers curved, thumb forward of fingers',
    development: 'Practice basic finger independence exercises daily'
  },
  {
    title: 'Finger Assignment',
    icon: '👆',
    description: 'Traditional finger-to-string assignments',
    technique: 'Thumb: bass strings (E, A, D), Fingers: treble strings (G, B, E)',
    development: 'Start with simple patterns, gradually increase complexity'
  },
  {
    title: 'Nail vs. Flesh',
    icon: '💅',
    description: 'Sound production using fingertips',
    technique: 'Combination of nail and flesh for warm, full tone',
    development: 'Experiment with nail length and shape for optimal sound'
  },
  {
    title: 'Independence',
    icon: '🤲',
    description: 'Developing finger independence',
    technique: 'Practice each finger separately, then in combinations',
    development: 'Daily technical exercises, gradually increase tempo'
  }
];

const rhythmicConcepts = [
  {
    title: 'Bass-Melody Independence',
    description: 'Playing different rhythms simultaneously',
    application: 'Thumb maintains steady bass while fingers play syncopated melody',
    examples: ['Travis picking patterns', 'Classical guitar pieces', 'Folk accompaniments'],
    practice: 'Start with simple bass, add melody gradually'
  },
  {
    title: 'Polyrhythm',
    description: 'Multiple rhythmic patterns occurring simultaneously',
    application: 'Creates complex, sophisticated rhythmic textures',
    examples: ['Bossa nova patterns', 'African-influenced fingerstyle', 'Progressive fingerstyle'],
    practice: 'Practice each rhythm separately, then combine slowly'
  },
  {
    title: 'Syncopation',
    description: 'Emphasizing off-beats and weak beats',
    application: 'Creates forward motion and rhythmic interest',
    examples: ['Jazz fingerpicking', 'Latin patterns', 'Contemporary fingerstyle'],
    practice: 'Use metronome to feel syncopated accents clearly'
  },
  {
    title: 'Rhythmic Displacement',
    description: 'Shifting patterns to create variation',
    application: 'Develops sophisticated rhythmic vocabulary',
    examples: ['Celtic variations', 'Flamenco compás', 'Modern fingerstyle'],
    practice: 'Learn basic pattern first, then explore displacements'
  }
];

const practiceProgression = [
  {
    level: 'Beginner',
    title: 'Foundation Building',
    goals: ['Proper hand position', 'Basic finger assignment', 'Simple alternating patterns'],
    exercises: ['P-I alternation', 'P-I-M patterns', 'Simple arpeggios'],
    timeframe: '2-4 weeks',
    songs: ['Simple folk songs', 'Basic chord progressions']
  },
  {
    level: 'Intermediate',
    title: 'Pattern Development',
    goals: ['Travis picking mastery', 'Classical arpeggios', 'Bass-melody independence'],
    exercises: ['Travis variations', 'Classical études', 'Song accompaniments'],
    timeframe: '3-6 months',
    songs: ['Dust in the Wind', 'Blackbird', 'Nothing Else Matters']
  },
  {
    level: 'Advanced',
    title: 'Style Specialization',
    goals: ['Genre-specific techniques', 'Complex polyrhythms', 'Compositional skills'],
    exercises: ['Flamenco techniques', 'Jazz comping', 'Contemporary percussive'],
    timeframe: '6+ months',
    songs: ['Bossa nova standards', 'Flamenco pieces', 'Modern fingerstyle']
  }
];

const difficultyColors = {
  'Beginner': 'bg-green-100 text-green-800',
  'Intermediate': 'bg-yellow-100 text-yellow-800',
  'Advanced': 'bg-red-100 text-red-800'
} as const;

export default function FingerpickingRhythms() {
  return (
    <Layout>
      <Header
        title="Fingerpicking Rhythms"
        subtitle="Master the art of fingerpicking through traditional and contemporary patterns. Develop independence and create rich, complex textures."
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Navigation */}
        <nav className="mb-8">
          <Link href="/lessons/songs/rhythm" className="text-blue-600 hover:text-blue-800">
            ← Back to Rhythm & Strumming
          </Link>
        </nav>

        {/* Overview */}
        <section className="mb-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Art of Fingerpicking</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Multi-Voice Texture</h3>
              <p className="text-gray-600">Fingerpicking allows you to play bass, harmony, and melody simultaneously, creating rich, orchestral textures on a single guitar.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Rhythmic Sophistication</h3>
              <p className="text-gray-600">Advanced fingerpicking patterns create complex polyrhythms and syncopated feels that add depth to musical arrangements.</p>
            </div>
          </div>
        </section>

        {/* Fingerpicking Patterns */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Fingerpicking Patterns</h2>
          <div className="grid gap-6">
            {fingerpickingPatterns.map((pattern, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{pattern.title}</h3>
                    <p className="text-gray-600 mb-3">{pattern.description}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[pattern.difficulty as keyof typeof difficultyColors]}`}>
                    {pattern.difficulty}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Pattern</h4>
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{pattern.pattern}</code>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Finger Assignment</h4>
                    <p className="text-sm text-gray-600">{pattern.fingers}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Theory</h4>
                    <p className="text-sm text-gray-600">{pattern.theory}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Example Songs</h4>
                  <div className="flex flex-wrap gap-2">
                    {pattern.songs.map((song, i) => (
                      <span key={i} className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded">
                        {song}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Fundamentals */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Fundamentals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {technicalFundamentals.map((fundamental, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{fundamental.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-900">{fundamental.title}</h3>
                </div>
                <p className="text-gray-600 mb-3">{fundamental.description}</p>
                <div className="bg-blue-50 rounded-lg p-3 mb-3">
                  <p className="text-sm text-blue-800"><strong>Technique:</strong> {fundamental.technique}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-sm text-green-800"><strong>Development:</strong> {fundamental.development}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Rhythmic Concepts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced Rhythmic Concepts</h2>
          <div className="grid gap-6">
            {rhythmicConcepts.map((concept, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{concept.title}</h3>
                <p className="text-gray-600 mb-4">{concept.description}</p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Application</h4>
                    <p className="text-sm text-gray-600">{concept.application}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Examples</h4>
                    <ul className="text-sm text-gray-600">
                      {concept.examples.map((example, i) => (
                        <li key={i} className="mb-1">• {example}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Practice Approach</h4>
                    <p className="text-sm text-gray-600">{concept.practice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practice Progression */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Progression</h2>
          <div className="grid gap-6">
            {practiceProgression.map((stage, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{stage.title}</h3>
                    <span className="text-sm text-gray-500">Typical timeframe: {stage.timeframe}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[stage.level as keyof typeof difficultyColors]}`}>
                    {stage.level}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Goals</h4>
                    <ul className="text-sm text-gray-600">
                      {stage.goals.map((goal, i) => (
                        <li key={i} className="mb-1">• {goal}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Exercises</h4>
                    <ul className="text-sm text-gray-600">
                      {stage.exercises.map((exercise, i) => (
                        <li key={i} className="mb-1">• {exercise}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-medium text-gray-800 mb-2">Repertoire</h4>
                    <ul className="text-sm text-gray-600">
                      {stage.songs.map((song, i) => (
                        <li key={i} className="mb-1">• {song}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Song Learning Path */}
        <section className="mb-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Progressive Song Study</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">1</span>
              <div>
                <h4 className="font-medium text-gray-800">"House of the Rising Sun" - Basic Fingerpicking</h4>
                <p className="text-sm text-gray-600">Start with simple alternating bass and treble patterns in Am</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">2</span>
              <div>
                <h4 className="font-medium text-gray-800">"Dust in the Wind" - Travis Picking</h4>
                <p className="text-sm text-gray-600">Master the classic Travis picking pattern with melody integration</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">3</span>
              <div>
                <h4 className="font-medium text-gray-800">"Blackbird" - Advanced Independence</h4>
                <p className="text-sm text-gray-600">Develop complex bass-melody independence with chromatic movement</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">4</span>
              <div>
                <h4 className="font-medium text-gray-800">"Girl from Ipanema" - Bossa Nova Style</h4>
                <p className="text-sm text-gray-600">Master sophisticated Latin rhythms and jazz harmony</p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Tips */}
        <section className="mb-12 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">🎯 Fingerpicking Practice Tips</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-blue-800 mb-2"><strong>Start Slow:</strong></p>
              <p className="text-blue-700">Begin all patterns at very slow tempos to build accuracy and muscle memory before increasing speed.</p>
            </div>
            <div>
              <p className="text-blue-800 mb-2"><strong>Separate Hands:</strong></p>
              <p className="text-blue-700">Practice left-hand chord changes and right-hand patterns separately before combining them.</p>
            </div>
            <div>
              <p className="text-blue-800 mb-2"><strong>Focus on Independence:</strong></p>
              <p className="text-blue-700">Work on bass-melody independence daily. The thumb should be completely independent of the fingers.</p>
            </div>
            <div>
              <p className="text-blue-800 mb-2"><strong>Use a Metronome:</strong></p>
              <p className="text-blue-700">Even with rubato pieces, practice with a metronome to develop solid internal timing.</p>
            </div>
          </div>
        </section>

        {/* Navigation Footer */}
        <nav className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Link href="/lessons/songs/rhythm" className="text-blue-600 hover:text-blue-800">
            ← Back to Rhythm & Strumming
          </Link>
          <div className="flex space-x-4">
            <Link href="/lessons/songs/rhythm/strumming" className="text-blue-600 hover:text-blue-800">
              ← Strumming Patterns
            </Link>
            <Link href="/lessons/songs/rhythm/syncopation" className="text-blue-600 hover:text-blue-800">
              Syncopation →
            </Link>
          </div>
        </nav>
      </main>
      <Footer />
    </Layout>
  );
}
