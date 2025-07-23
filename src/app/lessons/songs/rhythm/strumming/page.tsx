import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const strummingPatterns = [
  {
    title: 'Basic Down Strumming',
    difficulty: 'Beginner',
    pattern: 'D - D - D - D',
    description: 'Four quarter note downstrokes per measure',
    timeSignature: '4/4',
    songs: ['Wild Thing - The Troggs', 'Louie Louie - The Kingsmen', 'For What It\'s Worth - Buffalo Springfield'],
    theory: 'Quarter note subdivision, steady tempo, consistent dynamics'
  },
  {
    title: 'Down-Up Strumming',
    difficulty: 'Beginner',
    pattern: 'D U D U D U D U',
    description: 'Alternating down and up strokes on eighth notes',
    timeSignature: '4/4',
    songs: ['Wonderwall - Oasis', 'Free Fallin\' - Tom Petty', 'Good Riddance - Green Day'],
    theory: 'Eighth note subdivision, alternating picking, upstroke lightness'
  },
  {
    title: 'Pop Ballad Pattern',
    difficulty: 'Beginner',
    pattern: 'D - D U - U D U',
    description: 'Common pop/country strumming with rests',
    timeSignature: '4/4',
    songs: ['Hey Soul Sister - Train', 'Count on Me - Bruno Mars', 'Perfect - Ed Sheeran'],
    theory: 'Syncopated feel, rhythmic space, emphasis on beat 2 and 4'
  },
  {
    title: 'Folk Strum Pattern',
    difficulty: 'Intermediate',
    pattern: 'D - D U - U D U',
    description: 'Traditional folk rhythm with subtle variations',
    timeSignature: '4/4',
    songs: ['Blackbird - Beatles', 'Fire and Rain - James Taylor', 'The Sound of Silence - Simon & Garfunkel'],
    theory: 'Folk rhythm conventions, fingerpicking transition, narrative support'
  },
  {
    title: 'Rock Anthem Pattern',
    difficulty: 'Intermediate',
    pattern: 'D - - U D U D U',
    description: 'Driving rock rhythm with powerful downbeats',
    timeSignature: '4/4',
    songs: ['Livin\' on a Prayer - Bon Jovi', 'Don\'t Stop Believin\' - Journey', 'We Will Rock You - Queen'],
    theory: 'Strong beat emphasis, rhythmic drive, anthemic feel'
  },
  {
    title: '6/8 Strumming',
    difficulty: 'Intermediate',
    pattern: 'D - D D - D',
    description: 'Compound time strumming pattern',
    timeSignature: '6/8',
    songs: ['House of the Rising Sun - Animals', 'Nothing Else Matters - Metallica', 'We Three Kings'],
    theory: 'Compound meter, dotted quarter pulse, triple subdivision'
  },
  {
    title: 'Reggae Upstroke',
    difficulty: 'Advanced',
    pattern: '- U - U - U - U',
    description: 'Off-beat emphasis characteristic of reggae',
    timeSignature: '4/4',
    songs: ['No Woman No Cry - Bob Marley', 'Three Little Birds - Bob Marley', 'Buffalo Soldier - Bob Marley'],
    theory: 'Off-beat emphasis, skank rhythm, reggae feel'
  },
  {
    title: 'Complex Pop Pattern',
    difficulty: 'Advanced',
    pattern: 'D - D U - U - U',
    description: 'Sophisticated rhythm with varied dynamics',
    timeSignature: '4/4',
    songs: ['Shape of You - Ed Sheeran', 'Counting Stars - OneRepublic', 'Riptide - Vance Joy'],
    theory: 'Complex syncopation, dynamic variation, modern pop feel'
  }
];

const technicalConcepts = [
  {
    title: 'Wrist Motion',
    icon: '🤝',
    description: 'Proper wrist movement for fluid strumming',
    technique: 'Relaxed wrist, pendulum motion, minimal arm movement',
    application: 'Prevents fatigue, improves speed, creates natural feel'
  },
  {
    title: 'String Contact',
    icon: '🎸',
    description: 'How the pick contacts the strings',
    technique: 'Light touch on upstrokes, firmer on downstrokes',
    application: 'Creates dynamic variation, prevents breaking strings'
  },
  {
    title: 'Rhythmic Accuracy',
    icon: '⏱️',
    description: 'Maintaining precise timing',
    technique: 'Metronome practice, internal pulse, subdivision counting',
    application: 'Solid foundation for playing with others, professional sound'
  },
  {
    title: 'Dynamic Control',
    icon: '📊',
    description: 'Varying volume and intensity',
    technique: 'Pick angle, contact pressure, hand position',
    application: 'Musical expression, dynamic arrangement support'
  }
];

const practiceExercises = [
  {
    title: 'Metronome Foundation',
    level: 'Beginner',
    description: 'Basic down strumming with metronome',
    bpm: '60-80 BPM',
    focus: 'Steady tempo, consistent dynamics',
    progression: 'Increase tempo gradually, maintain accuracy'
  },
  {
    title: 'Up-Down Coordination',
    level: 'Beginner',
    description: 'Alternating down-up patterns',
    bpm: '70-90 BPM',
    focus: 'Smooth transitions, even spacing',
    progression: 'Add chord changes, increase complexity'
  },
  {
    title: 'Pattern Variations',
    level: 'Intermediate',
    description: 'Practice different patterns over same chord progression',
    bpm: '80-120 BPM',
    focus: 'Pattern consistency, musical application',
    progression: 'Combine patterns, create arrangements'
  },
  {
    title: 'Song Application',
    level: 'Advanced',
    description: 'Apply patterns to complete songs',
    bpm: 'Song tempo',
    focus: 'Musical context, arrangement support',
    progression: 'Multiple songs, different genres'
  }
];

const difficultyColors = {
  'Beginner': 'bg-green-100 text-green-800',
  'Intermediate': 'bg-yellow-100 text-yellow-800',
  'Advanced': 'bg-red-100 text-red-800'
} as const;

export default function StrummingPatterns() {
  return (
    <Layout>
      <Header
        title="Strumming Patterns"
        subtitle="Master fundamental and advanced strumming patterns through real song examples and rhythmic theory."
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Navigation */}
        <nav className="mb-8">
          <Link href="/lessons/songs/rhythm" className="text-blue-600 hover:text-blue-800">
            ← Back to Rhythm & Strumming
          </Link>
        </nav>

        {/* Overview */}
        <section className="mb-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Art of Strumming</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Foundation of Rhythm Guitar</h3>
              <p className="text-gray-600">Strumming patterns provide the rhythmic foundation that supports melodies and creates the groove that makes music move.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Pattern Recognition</h3>
              <p className="text-gray-600">Learning common patterns helps you quickly adapt to new songs and understand how rhythm supports different musical styles.</p>
            </div>
          </div>
        </section>

        {/* Strumming Patterns */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Strumming Patterns</h2>
          <div className="grid gap-6">
            {strummingPatterns.map((pattern, index) => (
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
                
                <div className="grid md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Pattern</h4>
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{pattern.pattern}</code>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Time Signature</h4>
                    <span className="text-sm text-gray-600">{pattern.timeSignature}</span>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-medium text-gray-800 mb-1">Musical Theory</h4>
                    <p className="text-sm text-gray-600">{pattern.theory}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Example Songs</h4>
                  <div className="flex flex-wrap gap-2">
                    {pattern.songs.map((song, i) => (
                      <span key={i} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">
                        {song}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Concepts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Mastery</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {technicalConcepts.map((concept, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{concept.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-900">{concept.title}</h3>
                </div>
                <p className="text-gray-600 mb-3">{concept.description}</p>
                <div className="bg-blue-50 rounded-lg p-3 mb-3">
                  <p className="text-sm text-blue-800"><strong>Technique:</strong> {concept.technique}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-sm text-green-800"><strong>Application:</strong> {concept.application}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Progressive Practice Plan</h2>
          <div className="grid gap-4">
            {practiceExercises.map((exercise, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{exercise.title}</h3>
                    <p className="text-gray-600 mb-2">{exercise.description}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[exercise.level as keyof typeof difficultyColors]}`}>
                    {exercise.level}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Tempo Range</h4>
                    <p className="text-sm text-gray-600">{exercise.bpm}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Focus Areas</h4>
                    <p className="text-sm text-gray-600">{exercise.focus}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Progression Path</h4>
                    <p className="text-sm text-gray-600">{exercise.progression}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Song Learning Path */}
        <section className="mb-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Progressive Song Learning</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">1</span>
              <div>
                <h4 className="font-medium text-gray-800">"Wild Thing" - Basic Down Strumming</h4>
                <p className="text-sm text-gray-600">Start with simple quarter note downstrokes to build fundamental rhythm</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">2</span>
              <div>
                <h4 className="font-medium text-gray-800">"Wonderwall" - Down-Up Pattern</h4>
                <p className="text-sm text-gray-600">Add upstrokes for more fluid eighth note rhythm</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">3</span>
              <div>
                <h4 className="font-medium text-gray-800">"Perfect" - Pop Ballad Pattern</h4>
                <p className="text-sm text-gray-600">Introduce syncopation and rhythmic space</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">4</span>
              <div>
                <h4 className="font-medium text-gray-800">"Shape of You" - Complex Pop Pattern</h4>
                <p className="text-sm text-gray-600">Master sophisticated rhythmic variations and dynamics</p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12 bg-red-50 border border-red-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-red-900 mb-4">🚫 Common Strumming Mistakes</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-red-800 mb-2"><strong>Rushing the Tempo:</strong></p>
              <p className="text-red-700">Always practice with a metronome. Internal timing develops through consistent practice at steady tempos.</p>
            </div>
            <div>
              <p className="text-red-800 mb-2"><strong>Too Much Arm Movement:</strong></p>
              <p className="text-red-700">Use wrist motion for fluid strumming. Arm movement should be minimal and natural.</p>
            </div>
            <div>
              <p className="text-red-800 mb-2"><strong>Heavy Upstrokes:</strong></p>
              <p className="text-red-700">Upstrokes should be lighter than downstrokes. Let the pick glide across the strings on the way up.</p>
            </div>
            <div>
              <p className="text-red-800 mb-2"><strong>Ignoring Dynamics:</strong></p>
              <p className="text-red-700">Vary your strumming intensity to support the song's emotional content and arrangement.</p>
            </div>
          </div>
        </section>

        {/* Navigation Footer */}
        <nav className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Link href="/lessons/songs/rhythm" className="text-blue-600 hover:text-blue-800">
            ← Back to Rhythm & Strumming
          </Link>
          <div className="flex space-x-4">
            <Link href="/lessons/songs/rhythm/palm-muting" className="text-blue-600 hover:text-blue-800">
              Palm Muting →
            </Link>
            <Link href="/lessons/songs/rhythm/fingerpicking" className="text-blue-600 hover:text-blue-800">
              Fingerpicking Rhythms →
            </Link>
          </div>
        </nav>
      </main>
      <Footer />
    </Layout>
  );
}
