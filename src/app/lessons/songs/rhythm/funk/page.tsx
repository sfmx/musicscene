import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const funkPatterns = [
  {
    title: 'Classic Funk Strum',
    difficulty: 'Advanced',
    pattern: 'D - D U - D - U',
    description: 'Tight, percussive strumming with ghost notes',
    feel: 'Punchy, rhythmic emphasis on the groove',
    songs: ['Get Up (I Feel Like Being a) Sex Machine - James Brown', 'Superstition - Stevie Wonder', 'Le Freak - Chic'],
    theory: 'Sixteenth note subdivision with emphasis on "the one"'
  },
  {
    title: 'Ghost Note Pattern',
    difficulty: 'Advanced',
    pattern: 'D x D U x D x U',
    description: 'Incorporating muted ghost notes for rhythmic texture',
    feel: 'Complex rhythmic texture with percussive elements',
    songs: ['Thank You (Falettinme Be Mice Elf Agin) - Sly Stone', 'Flash Light - Parliament', 'Brick House - Commodores'],
    theory: 'Ghost notes create polyrhythmic feel and groove complexity'
  },
  {
    title: 'Nile Rodgers Style',
    difficulty: 'Advanced',
    pattern: 'Syncopated disco-funk',
    description: 'Clean, articulate funk with disco influences',
    feel: 'Sophisticated, danceable groove',
    songs: ['Le Freak - Chic', 'Good Times - Chic', 'I Want Your Love - Chic'],
    theory: 'Clean funk with emphasis on melodic and harmonic sophistication'
  },
  {
    title: 'Slap Funk Simulation',
    difficulty: 'Advanced',
    pattern: 'Percussive muted strums',
    description: 'Simulating bass slap technique on guitar',
    feel: 'Highly percussive, bass-like rhythmic feel',
    songs: ['Higher Ground - RHCP', 'Give It Away - RHCP', 'Funk rock standards'],
    theory: 'Guitar emulating bass slap technique for rhythmic emphasis'
  },
  {
    title: 'P-Funk Style',
    difficulty: 'Advanced',
    pattern: 'Extended, hypnotic grooves',
    description: 'Long-form funk with psychedelic elements',
    feel: 'Hypnotic, extended groove-based playing',
    songs: ['Flash Light - Parliament', 'One Nation Under a Groove - Funkadelic', 'Atomic Dog - George Clinton'],
    theory: 'Extended grooves with minimal harmonic movement'
  },
  {
    title: 'Modern Funk Rock',
    difficulty: 'Advanced',
    pattern: 'Rock energy with funk precision',
    description: 'Contemporary fusion of funk and rock elements',
    feel: 'High energy with funk rhythmic precision',
    songs: ['Can\'t Stop - RHCP', 'Uptown Funk - Bruno Mars', 'Modern funk rock'],
    theory: 'Contemporary adaptation of funk principles in rock context'
  },
  {
    title: 'R&B Funk',
    difficulty: 'Intermediate',
    pattern: 'Smooth funk with R&B influences',
    description: 'Laid-back funk suitable for R&B and soul',
    feel: 'Smooth, groove-oriented with emotional expression',
    songs: ['What\'s Going On - Marvin Gaye', 'I Want You Back - Jackson 5', 'Classic Motown'],
    theory: 'Funk principles applied to melodic and harmonic R&B context'
  },
  {
    title: 'Jazz-Funk Fusion',
    difficulty: 'Advanced',
    pattern: 'Complex harmonies with funk rhythm',
    description: 'Sophisticated jazz harmony with funk groove',
    feel: 'Intellectual funk with complex harmonic movement',
    songs: ['Herbie Hancock - Chameleon', 'Miles Davis electric period', 'Jazz fusion standards'],
    theory: 'Complex jazz harmony with funk rhythmic foundation'
  }
];

const funkConcepts = [
  {
    title: 'The One',
    icon: '1️⃣',
    description: 'The fundamental concept of funk rhythm',
    theory: 'Everything revolves around beat one - the strongest emphasis',
    application: 'Creates the pocket and groove foundation',
    practice: 'Practice feeling and emphasizing beat one consistently'
  },
  {
    title: 'Ghost Notes',
    icon: '👻',
    description: 'Muted, percussive notes that enhance rhythm',
    theory: 'Create rhythmic texture without harmonic content',
    application: 'Add complexity and groove to simple patterns',
    practice: 'Master muting technique, integrate with regular notes'
  },
  {
    title: 'Rhythmic Precision',
    icon: '🎯',
    description: 'Exact timing and tight execution',
    theory: 'Funk requires machine-like precision and consistency',
    application: 'Creates the tight pocket essential to funk',
    practice: 'Metronome work, playing with drum machines'
  },
  {
    title: 'Groove Over Melody',
    icon: '🌊',
    description: 'Prioritizing rhythmic feel over melodic content',
    theory: 'Funk emphasizes rhythm and feel over complex melodies',
    application: 'Simple parts that serve the overall groove',
    practice: 'Focus on feel and rhythm, simplify melodic content'
  }
];

const technicalElements = [
  {
    title: 'String Muting',
    technique: 'Left and right hand muting for percussive effect',
    application: 'Creates ghost notes and rhythmic texture',
    practice: 'Both hands working together to control string resonance',
    difficulty: 'Advanced'
  },
  {
    title: 'Attack Control',
    technique: 'Varying pick attack for dynamic contrast',
    application: 'Creates accents and rhythmic emphasis',
    practice: 'Practice different attack intensities consistently',
    difficulty: 'Intermediate'
  },
  {
    title: 'Syncopated Chord Changes',
    technique: 'Chord changes on off-beats and syncopated rhythms',
    application: 'Maintains groove while changing harmony',
    practice: 'Practice chord changes without losing rhythmic feel',
    difficulty: 'Advanced'
  },
  {
    title: 'Percussive Strumming',
    technique: 'Using guitar as percussion instrument',
    application: 'Adds rhythmic complexity and texture',
    practice: 'Develop both pitched and muted strumming',
    difficulty: 'Advanced'
  }
];

const genreEvolution = [
  {
    era: '1960s - Origins',
    description: 'James Brown develops funk from R&B and soul',
    characteristics: ['Emphasis on rhythm over melody', 'Strong beat one', 'Call and response'],
    keyArtists: ['James Brown', 'Sly & The Family Stone']
  },
  {
    era: '1970s - Golden Age',
    description: 'P-Funk, disco-funk, and sophisticated funk emerge',
    characteristics: ['Extended grooves', 'Sophisticated harmony', 'Danceable rhythms'],
    keyArtists: ['Parliament-Funkadelic', 'Chic', 'Earth Wind & Fire']
  },
  {
    era: '1980s - Pop Integration',
    description: 'Funk influences mainstream pop and rock',
    characteristics: ['Clean production', 'Rock fusion', 'MTV-friendly'],
    keyArtists: ['Prince', 'Red Hot Chili Peppers', 'Living Colour']
  },
  {
    era: '1990s-Present',
    description: 'Hip-hop sampling and contemporary funk rock',
    characteristics: ['Sample-based', 'Alternative rock fusion', 'Electronic elements'],
    keyArtists: ['Red Hot Chili Peppers', 'D\'Angelo', 'Jamiroquai']
  }
];

const practiceExercises = [
  {
    title: 'Basic Funk Strum',
    level: 'Intermediate',
    description: 'Learn fundamental funk strumming pattern',
    exercise: 'Practice D-x-D-U-x-D-x-U pattern with muting',
    focus: 'Clean execution, consistent muting',
    progression: 'Add chord changes, increase tempo'
  },
  {
    title: 'Ghost Note Development',
    level: 'Advanced',
    description: 'Integrate muted ghost notes',
    exercise: 'Alternate between pitched and muted strums',
    focus: 'Clear distinction between notes and mutes',
    progression: 'Complex patterns, rhythmic variations'
  },
  {
    title: 'Groove Pocket',
    level: 'Advanced',
    description: 'Develop consistent rhythmic pocket',
    exercise: 'Play with drum tracks, focus on locking in',
    focus: 'Steady tempo, consistent feel',
    progression: 'Different tempos, various drum styles'
  },
  {
    title: 'Song Application',
    level: 'Advanced',
    description: 'Apply funk concepts to complete songs',
    exercise: 'Learn classic funk songs note-for-note',
    focus: 'Authentic feel, arrangement understanding',
    progression: 'Improvisation, original compositions'
  }
];

const difficultyColors = {
  'Beginner': 'bg-green-100 text-green-800',
  'Intermediate': 'bg-yellow-100 text-yellow-800',
  'Advanced': 'bg-red-100 text-red-800'
} as const;

export default function FunkRhythms() {
  return (
    <Layout>
      <Header
        title="Funk Rhythms"
        subtitle="Master the tight, percussive rhythms that define funk. Learn to create the groove that makes people move with precision and soul."
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get On Up: The Funk Revolution</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Rhythmic Precision</h3>
              <p className="text-gray-600">Funk demands machine-like precision and tight execution. Every note serves the groove, and the groove is everything.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">The Pocket</h3>
              <p className="text-gray-600">Funk is about finding and maintaining "the pocket" - that perfect rhythmic placement that makes the music irresistibly danceable.</p>
            </div>
          </div>
        </section>

        {/* Funk Patterns */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Funk Patterns</h2>
          <div className="grid gap-6">
            {funkPatterns.map((pattern, index) => (
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
                  {pattern.pattern && (
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Pattern</h4>
                      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{pattern.pattern}</code>
                    </div>
                  )}
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Feel</h4>
                    <p className="text-sm text-gray-600">{pattern.feel}</p>
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

        {/* Funk Concepts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Funk Concepts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {funkConcepts.map((concept, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{concept.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-900">{concept.title}</h3>
                </div>
                <p className="text-gray-600 mb-3">{concept.description}</p>
                <div className="space-y-3">
                  <div className="bg-purple-50 rounded-lg p-3">
                    <p className="text-sm text-purple-800"><strong>Theory:</strong> {concept.theory}</p>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-3">
                    <p className="text-sm text-pink-800"><strong>Application:</strong> {concept.application}</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-sm text-blue-800"><strong>Practice:</strong> {concept.practice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Elements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Mastery</h2>
          <div className="grid gap-6">
            {technicalElements.map((element, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{element.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[element.difficulty as keyof typeof difficultyColors]}`}>
                    {element.difficulty}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Technique</h4>
                    <p className="text-sm text-gray-600">{element.technique}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Application</h4>
                    <p className="text-sm text-gray-600">{element.application}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Practice Focus</h4>
                    <p className="text-sm text-gray-600">{element.practice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Genre Evolution */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Evolution of Funk</h2>
          <div className="grid gap-6">
            {genreEvolution.map((era, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{era.era}</h3>
                <p className="text-gray-600 mb-4">{era.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Characteristics</h4>
                    <ul className="text-sm text-gray-600">
                      {era.characteristics.map((char, i) => (
                        <li key={i} className="mb-1">• {char}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Key Artists</h4>
                    <div className="flex flex-wrap gap-2">
                      {era.keyArtists.map((artist, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          {artist}
                        </span>
                      ))}
                    </div>
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
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Exercise</h4>
                    <p className="text-sm text-gray-600">{exercise.exercise}</p>
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

        {/* Funk Philosophy */}
        <section className="mb-12 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Funk Philosophy</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Less is More</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Simple parts that serve the overall groove</li>
                <li>• Every note must have a purpose</li>
                <li>• Space and silence are as important as notes</li>
                <li>• Restraint creates more powerful impact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">The Collective Groove</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Individual parts lock together as one unit</li>
                <li>• Listen to other instruments, play as a team</li>
                <li>• The groove is bigger than any single part</li>
                <li>• Ego serves the funk, not the other way around</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Song Learning Path */}
        <section className="mb-12 bg-purple-50 border border-purple-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-purple-900 mb-4">🕺 Progressive Song Study</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">1</span>
              <div>
                <h4 className="font-medium text-purple-800">"I Want You Back" - Motown Funk</h4>
                <p className="text-sm text-purple-700">Learn basic funk rhythm in accessible pop context</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">2</span>
              <div>
                <h4 className="font-medium text-purple-800">"Superstition" - Classic Funk</h4>
                <p className="text-sm text-purple-700">Master the definitive funk rhythm guitar style</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">3</span>
              <div>
                <h4 className="font-medium text-purple-800">"Le Freak" - Disco Funk</h4>
                <p className="text-sm text-purple-700">Develop clean, sophisticated funk technique</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">4</span>
              <div>
                <h4 className="font-medium text-purple-800">"Give It Away" - Funk Rock</h4>
                <p className="text-sm text-purple-700">Master modern funk rock with complex rhythmic patterns</p>
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
            <Link href="/lessons/songs/rhythm/reggae" className="text-blue-600 hover:text-blue-800">
              ← Reggae & Ska
            </Link>
            <Link href="/lessons/songs/techniques" className="text-blue-600 hover:text-blue-800">
              Guitar Techniques →
            </Link>
          </div>
        </nav>
      </main>
      <Footer />
    </Layout>
  );
}
