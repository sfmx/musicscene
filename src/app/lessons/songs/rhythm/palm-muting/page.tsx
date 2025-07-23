import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const palmMutingTechniques = [
  {
    title: 'Basic Palm Muting',
    difficulty: 'Beginner',
    description: 'Light palm contact with strings near the bridge',
    technique: 'Edge of palm touches strings lightly',
    effect: 'Dampened, percussive sound',
    songs: ['Smoke on the Water - Deep Purple', 'Come As You Are - Nirvana', 'Seven Nation Army - White Stripes'],
    application: 'Rock rhythm, punk power chords, controlled dynamics'
  },
  {
    title: 'Aggressive Palm Muting',
    difficulty: 'Intermediate',
    description: 'Heavy palm pressure for tight, punchy sound',
    technique: 'Firm palm pressure, precise attack',
    effect: 'Tight, staccato, aggressive tone',
    songs: ['Master of Puppets - Metallica', 'Chop Suey! - System of a Down', 'Walk - Pantera'],
    application: 'Metal rhythm, heavy rock, percussive effects'
  },
  {
    title: 'Variable Palm Muting',
    difficulty: 'Intermediate',
    description: 'Dynamic control of muting pressure',
    technique: 'Adjusting palm pressure during playing',
    effect: 'Dynamic variation from muted to open',
    songs: ['Enter Sandman - Metallica', 'Smells Like Teen Spirit - Nirvana', 'Black - Pearl Jam'],
    application: 'Dynamic arrangements, expressive control'
  },
  {
    title: 'Partial String Muting',
    difficulty: 'Advanced',
    description: 'Muting specific strings while leaving others open',
    technique: 'Selective palm contact',
    effect: 'Complex rhythmic textures',
    songs: ['Tool songs', 'Progressive metal', 'Modern rock arrangements'],
    application: 'Complex rhythms, polyrhythmic textures'
  },
  {
    title: 'Muted Chord Strumming',
    difficulty: 'Intermediate',
    description: 'Palm muting applied to full chord strumming',
    technique: 'Muting entire chord progression',
    effect: 'Percussive chord rhythm',
    songs: ['Punk rock songs', 'Reggae skank', 'Funk rhythm guitar'],
    application: 'Rhythmic emphasis, percussive accompaniment'
  },
  {
    title: 'Ghost Note Muting',
    difficulty: 'Advanced',
    description: 'Creating percussive ghost notes',
    technique: 'Complete muting for rhythmic effect',
    effect: 'Rhythmic percussion without pitch',
    songs: ['Funk rhythm sections', 'R&B guitar', 'Modern pop arrangements'],
    application: 'Rhythmic complexity, groove enhancement'
  }
];

const dynamicConcepts = [
  {
    title: 'Rhythmic Articulation',
    icon: '🎯',
    description: 'Using muting to create rhythmic clarity',
    theory: 'Palm muting defines rhythmic attacks and separates notes',
    application: 'Essential for tight rhythm sections and clear chord changes',
    practice: 'Practice switching between muted and open with consistent timing'
  },
  {
    title: 'Dynamic Range',
    icon: '📊',
    description: 'Controlling volume and intensity',
    theory: 'Muting pressure directly affects volume and tone character',
    application: 'Creates dynamic variation within arrangements',
    practice: 'Practice gradual pressure changes while maintaining rhythm'
  },
  {
    title: 'Textural Variety',
    icon: '🎨',
    description: 'Adding tonal colors to arrangements',
    theory: 'Different muting techniques create distinct sonic textures',
    application: 'Supports song dynamics and emotional content',
    practice: 'Experiment with different palm positions and pressures'
  },
  {
    title: 'Groove Enhancement',
    icon: '🎵',
    description: 'Supporting rhythmic feel and pocket',
    theory: 'Muting emphasizes the groove and rhythmic subdivisions',
    application: 'Essential for funk, metal, and rock rhythm playing',
    practice: 'Play with backing tracks to develop groove sensitivity'
  }
];

const genreApplications = [
  {
    genre: 'Metal',
    characteristics: 'Heavy, aggressive muting for tight control',
    technique: 'Firm palm pressure, precise picking, string damping',
    examples: ['Metallica - rhythm sections', 'Pantera - groove metal', 'Tool - progressive patterns'],
    theory: 'Creates tight, percussive rhythm foundation for heavy music'
  },
  {
    genre: 'Punk',
    characteristics: 'Fast, percussive chord muting',
    technique: 'Consistent muting pressure, rapid chord changes',
    examples: ['Ramones - power chord muting', 'Sex Pistols', 'Green Day'],
    theory: 'Maintains clarity during fast, distorted playing'
  },
  {
    genre: 'Reggae',
    characteristics: 'Off-beat muted emphasis',
    technique: 'Sharp, staccato muted upstrokes',
    examples: ['Bob Marley - skank rhythm', 'Steel Pulse', 'Jimmy Cliff'],
    theory: 'Creates the characteristic reggae "skank" sound'
  },
  {
    genre: 'Funk',
    characteristics: 'Tight, percussive muting with ghost notes',
    technique: 'Precise muting for rhythmic definition',
    examples: ['James Brown rhythm sections', 'Nile Rodgers', 'Red Hot Chili Peppers'],
    theory: 'Emphasizes the groove and rhythmic complexity'
  },
  {
    genre: 'Alternative Rock',
    characteristics: 'Dynamic muting for textural variety',
    technique: 'Variable pressure for dynamic expression',
    examples: ['Nirvana - dynamic arrangements', 'Pearl Jam', 'Soundgarden'],
    theory: 'Supports song dynamics and emotional intensity'
  }
];

const practiceExercises = [
  {
    title: 'Basic Muting Control',
    level: 'Beginner',
    description: 'Learn consistent palm muting pressure',
    exercise: 'Single note exercises with muting on/off',
    tempo: '60-80 BPM',
    focus: 'Consistent muting pressure, clean switching',
    progression: 'Add chord changes, increase tempo'
  },
  {
    title: 'Chord Muting Patterns',
    level: 'Intermediate',
    description: 'Apply muting to chord progressions',
    exercise: 'Common progressions with muted/open combinations',
    tempo: '80-120 BPM',
    focus: 'Rhythmic consistency, clean chord changes',
    progression: 'Complex progressions, faster tempos'
  },
  {
    title: 'Dynamic Muting',
    level: 'Intermediate',
    description: 'Variable muting pressure for expression',
    exercise: 'Gradual pressure changes within patterns',
    tempo: '70-100 BPM',
    focus: 'Smooth pressure transitions, musical expression',
    progression: 'Song applications, arrangement support'
  },
  {
    title: 'Genre-Specific Patterns',
    level: 'Advanced',
    description: 'Master style-specific muting techniques',
    exercise: 'Metal, funk, punk, and reggae patterns',
    tempo: 'Genre-appropriate',
    focus: 'Authentic style characteristics, groove feel',
    progression: 'Complex arrangements, improvisation'
  }
];

const difficultyColors = {
  'Beginner': 'bg-green-100 text-green-800',
  'Intermediate': 'bg-yellow-100 text-yellow-800',
  'Advanced': 'bg-red-100 text-red-800'
} as const;

export default function PalmMutingDynamics() {
  return (
    <Layout>
      <Header
        title="Palm Muting & Dynamics"
        subtitle="Master palm muting techniques to control dynamics, create rhythmic clarity, and add percussive textures to your playing."
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Navigation */}
        <nav className="mb-8">
          <Link href="/lessons/songs/rhythm" className="text-blue-600 hover:text-blue-800">
            ← Back to Rhythm & Strumming
          </Link>
        </nav>

        {/* Overview */}
        <section className="mb-12 bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Power of Palm Muting</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Rhythmic Control</h3>
              <p className="text-gray-600">Palm muting provides precise control over note duration and attack, creating clear rhythmic definition essential for tight rhythm playing.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Dynamic Expression</h3>
              <p className="text-gray-600">Variable muting pressure allows for dynamic control and textural variety, supporting the emotional content of musical arrangements.</p>
            </div>
          </div>
        </section>

        {/* Palm Muting Techniques */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Palm Muting Techniques</h2>
          <div className="grid gap-6">
            {palmMutingTechniques.map((technique, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{technique.title}</h3>
                    <p className="text-gray-600 mb-3">{technique.description}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[technique.difficulty as keyof typeof difficultyColors]}`}>
                    {technique.difficulty}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Technique</h4>
                    <p className="text-sm text-gray-600">{technique.technique}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Sound Effect</h4>
                    <p className="text-sm text-gray-600">{technique.effect}</p>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-medium text-gray-800 mb-1">Musical Application</h4>
                    <p className="text-sm text-gray-600">{technique.application}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Example Songs</h4>
                  <div className="flex flex-wrap gap-2">
                    {technique.songs.map((song, i) => (
                      <span key={i} className="bg-slate-50 text-slate-700 text-xs px-2 py-1 rounded">
                        {song}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dynamic Concepts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Dynamic Concepts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {dynamicConcepts.map((concept, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{concept.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-900">{concept.title}</h3>
                </div>
                <p className="text-gray-600 mb-3">{concept.description}</p>
                <div className="space-y-3">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-sm text-blue-800"><strong>Theory:</strong> {concept.theory}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-sm text-green-800"><strong>Application:</strong> {concept.application}</p>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-3">
                    <p className="text-sm text-amber-800"><strong>Practice:</strong> {concept.practice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Genre Applications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Genre-Specific Applications</h2>
          <div className="grid gap-6">
            {genreApplications.map((genre, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{genre.genre}</h3>
                <p className="text-gray-600 mb-4">{genre.characteristics}</p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Technique Focus</h4>
                    <p className="text-sm text-gray-600">{genre.technique}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Examples</h4>
                    <ul className="text-sm text-gray-600">
                      {genre.examples.map((example, i) => (
                        <li key={i} className="mb-1">• {example}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Theory</h4>
                    <p className="text-sm text-gray-600">{genre.theory}</p>
                  </div>
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
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Exercise</h4>
                    <p className="text-sm text-gray-600">{exercise.exercise}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Tempo</h4>
                    <p className="text-sm text-gray-600">{exercise.tempo}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Focus</h4>
                    <p className="text-sm text-gray-600">{exercise.focus}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Progression</h4>
                    <p className="text-sm text-gray-600">{exercise.progression}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Tips */}
        <section className="mb-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Mastery Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Hand Position</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Position palm edge near bridge pickup</li>
                <li>• Keep wrist straight and relaxed</li>
                <li>• Maintain consistent hand angle</li>
                <li>• Adjust pressure, not position</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Pressure Control</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Start with light pressure and gradually increase</li>
                <li>• Practice pressure changes without losing rhythm</li>
                <li>• Use muscle memory for consistent results</li>
                <li>• Listen carefully to tone changes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Song Learning Path */}
        <section className="mb-12 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">🎸 Progressive Song Study</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">1</span>
              <div>
                <h4 className="font-medium text-blue-800">"Smoke on the Water" - Basic Muting</h4>
                <p className="text-sm text-blue-700">Learn consistent palm muting with the famous riff</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">2</span>
              <div>
                <h4 className="font-medium text-blue-800">"Come As You Are" - Dynamic Muting</h4>
                <p className="text-sm text-blue-700">Practice variable muting pressure for expression</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">3</span>
              <div>
                <h4 className="font-medium text-blue-800">"Master of Puppets" - Aggressive Muting</h4>
                <p className="text-sm text-blue-700">Master tight, aggressive muting for metal rhythm</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">4</span>
              <div>
                <h4 className="font-medium text-blue-800">Funk/Reggae Patterns - Percussive Muting</h4>
                <p className="text-sm text-blue-700">Develop groove-oriented muting for rhythmic complexity</p>
              </div>
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
