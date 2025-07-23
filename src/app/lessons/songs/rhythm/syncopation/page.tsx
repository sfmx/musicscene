import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const syncopationPatterns = [
  {
    title: 'Off-Beat Emphasis',
    difficulty: 'Beginner',
    pattern: '- D - D - D - D',
    description: 'Emphasizing the weak beats (2 and 4)',
    feel: 'Creates forward motion and rhythmic interest',
    songs: ['I Want to Hold Your Hand - Beatles', 'Happy - Pharrell Williams', 'Count on Me - Bruno Mars'],
    theory: 'Displacement of accent from strong to weak beats'
  },
  {
    title: 'Anticipated Downbeat',
    difficulty: 'Intermediate',
    pattern: 'D - D U D - D U',
    description: 'Playing slightly ahead of the downbeat',
    feel: 'Creates urgency and forward momentum',
    songs: ['Brown Eyed Girl - Van Morrison', 'Mustang Sally - Wilson Pickett', 'Sweet Caroline - Neil Diamond'],
    theory: 'Rhythmic anticipation, common in pop and R&B'
  },
  {
    title: 'Reggae Skank',
    difficulty: 'Intermediate',
    pattern: '- U - U - U - U',
    description: 'All upstrokes on off-beats',
    feel: 'Laid-back, relaxed groove characteristic of reggae',
    songs: ['No Woman No Cry - Bob Marley', 'One Love - Bob Marley', 'Three Little Birds - Bob Marley'],
    theory: 'Complete rhythmic displacement, defining reggae feel'
  },
  {
    title: 'Funk Syncopation',
    difficulty: 'Advanced',
    pattern: 'D - D U - D - U',
    description: 'Complex mix of on and off-beat emphasis',
    feel: 'Tight, groove-based rhythm with percussive elements',
    songs: ['Superstition - Stevie Wonder', 'Get Up - James Brown', 'Give It Away - RHCP'],
    theory: 'Advanced syncopation with ghost notes and accents'
  },
  {
    title: 'Latin Syncopation',
    difficulty: 'Advanced',
    pattern: 'D - D U D U - U',
    description: 'Clave-based rhythmic patterns',
    feel: 'Complex polyrhythmic feel characteristic of Latin music',
    songs: ['Smooth - Santana', 'La Bamba - Ritchie Valens', 'Oye Como Va - Santana'],
    theory: 'Based on 3-2 or 2-3 clave rhythmic foundation'
  },
  {
    title: 'Jazz Comping',
    difficulty: 'Advanced',
    pattern: 'Variable syncopated',
    description: 'Improvised syncopated accompaniment',
    feel: 'Swing feel with sophisticated harmonic support',
    songs: ['Autumn Leaves', 'All of Me', 'Fly Me to the Moon'],
    theory: 'Jazz harmony with swing rhythm and chord extensions'
  },
  {
    title: 'Hip-Hop Influenced',
    difficulty: 'Intermediate',
    pattern: 'D - - U D - - U',
    description: 'Modern syncopation from hip-hop production',
    feel: 'Contemporary feel with strong rhythmic gaps',
    songs: ['Closer - Chainsmokers', 'Shape of You - Ed Sheeran', 'Blinding Lights - The Weeknd'],
    theory: 'Modern pop syncopation influenced by electronic music'
  },
  {
    title: 'Polyrhythmic Syncopation',
    difficulty: 'Advanced',
    description: 'Multiple conflicting rhythmic patterns',
    feel: 'Complex, layered rhythmic texture',
    songs: ['Tool songs', 'King Crimson', 'Progressive rock compositions'],
    theory: 'Multiple time signatures or rhythmic layers simultaneously'
  }
];

const musicalConcepts = [
  {
    title: 'Rhythmic Tension',
    icon: '⚡',
    description: 'How syncopation creates musical tension and release',
    theory: 'Displacement of expected accents creates tension that resolves',
    application: 'Builds energy and maintains listener interest',
    development: 'Practice feeling the underlying pulse while playing off-beats'
  },
  {
    title: 'Groove Pocket',
    icon: '🎯',
    description: 'Finding the perfect rhythmic placement',
    theory: 'Slight variations in timing create different feels and grooves',
    application: 'Essential for playing with rhythm sections and backing tracks',
    development: 'Practice with metronome and backing tracks to develop pocket'
  },
  {
    title: 'Cultural Context',
    icon: '🌍',
    description: 'How different cultures approach syncopation',
    theory: 'Each musical culture has distinct syncopated patterns and feels',
    application: 'Understanding cultural context enhances authentic performance',
    development: 'Study traditional music from various cultures and genres'
  },
  {
    title: 'Harmonic Support',
    icon: '🎼',
    description: 'How syncopated rhythm supports harmonic progression',
    theory: 'Rhythmic placement can emphasize or de-emphasize harmonic changes',
    application: 'Creates sophisticated accompaniment and arrangement support',
    development: 'Practice syncopated patterns over various chord progressions'
  }
];

const genreSpecific = [
  {
    genre: 'Reggae',
    characteristics: 'Emphasis on beats 2 and 4 with upstrokes',
    keyElements: ['Skank rhythm', 'Off-beat emphasis', 'Laid-back feel'],
    examples: ['Bob Marley', 'Jimmy Cliff', 'Steel Pulse'],
    practice: 'Focus on relaxed upstrokes and consistent off-beat timing'
  },
  {
    genre: 'Funk',
    characteristics: 'Tight, percussive syncopation with ghost notes',
    keyElements: ['Sixteenth note feel', 'Ghost notes', 'Rhythmic precision'],
    examples: ['James Brown', 'Nile Rodgers', 'Prince'],
    practice: 'Develop tight timing and percussive attack'
  },
  {
    genre: 'Latin',
    characteristics: 'Clave-based rhythmic patterns',
    keyElements: ['3-2 or 2-3 clave', 'Polyrhythmic layers', 'Complex syncopation'],
    examples: ['Santana', 'Jesse Cook', 'Latin jazz standards'],
    practice: 'Learn basic clave patterns and apply to guitar'
  },
  {
    genre: 'Jazz',
    characteristics: 'Swing feel with sophisticated harmony',
    keyElements: ['Swing eighth notes', 'Chord extensions', 'Improvisational'],
    examples: ['Django Reinhardt', 'Wes Montgomery', 'Joe Pass'],
    practice: 'Develop swing feel and chord-melody techniques'
  },
  {
    genre: 'Hip-Hop/R&B',
    characteristics: 'Modern syncopation with strong grooves',
    keyElements: ['Strong pocket', 'Space and silence', 'Electronic influence'],
    examples: ['D\'Angelo', 'John Mayer', 'Modern R&B'],
    practice: 'Focus on groove and rhythmic space'
  }
];

const practiceExercises = [
  {
    title: 'Metronome Off-Beats',
    level: 'Beginner',
    description: 'Practice playing on beats 2 and 4 with metronome',
    exercise: 'Set metronome to click on 2 and 4, strum on clicks',
    focus: 'Feeling off-beat timing naturally',
    progression: 'Add chord changes, increase tempo'
  },
  {
    title: 'Anticipated Strums',
    level: 'Intermediate',
    description: 'Practice playing slightly ahead of the beat',
    exercise: 'Strum just before beat 1 and 3',
    focus: 'Controlled anticipation, maintaining steady tempo',
    progression: 'Apply to songs, vary anticipation amount'
  },
  {
    title: 'Genre Pattern Study',
    level: 'Intermediate',
    description: 'Learn characteristic patterns from different genres',
    exercise: 'Practice reggae, funk, Latin patterns separately',
    focus: 'Authentic feel for each genre',
    progression: 'Combine elements, create variations'
  },
  {
    title: 'Song Application',
    level: 'Advanced',
    description: 'Apply syncopation to complete songs',
    exercise: 'Take simple songs and add syncopated elements',
    focus: 'Musical application, arrangement skills',
    progression: 'Original compositions, complex arrangements'
  }
];

const difficultyColors = {
  'Beginner': 'bg-green-100 text-green-800',
  'Intermediate': 'bg-yellow-100 text-yellow-800',
  'Advanced': 'bg-red-100 text-red-800'
} as const;

export default function SyncopationOffbeats() {
  return (
    <Layout>
      <Header
        title="Syncopation & Off-beats"
        subtitle="Master the art of syncopation to create rhythmic interest, tension, and groove in your guitar playing."
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Navigation */}
        <nav className="mb-8">
          <Link href="/lessons/songs/rhythm" className="text-blue-600 hover:text-blue-800">
            ← Back to Rhythm & Strumming
          </Link>
        </nav>

        {/* Overview */}
        <section className="mb-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Magic of Syncopation</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Rhythmic Interest</h3>
              <p className="text-gray-600">Syncopation creates forward motion and rhythmic tension by placing emphasis on unexpected beats, making music more engaging and dynamic.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Genre Foundation</h3>
              <p className="text-gray-600">Syncopation is fundamental to many genres including reggae, funk, jazz, and Latin music, each with distinct syncopated characteristics.</p>
            </div>
          </div>
        </section>

        {/* Syncopation Patterns */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Syncopation Patterns</h2>
          <div className="grid gap-6">
            {syncopationPatterns.map((pattern, index) => (
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
                    <h4 className="font-medium text-gray-800 mb-1">Musical Feel</h4>
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
                      <span key={i} className="bg-indigo-50 text-indigo-700 text-xs px-2 py-1 rounded">
                        {song}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Musical Concepts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding Syncopation</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {musicalConcepts.map((concept, index) => (
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
                    <p className="text-sm text-amber-800"><strong>Development:</strong> {concept.development}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Genre-Specific Applications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Genre-Specific Syncopation</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {genreSpecific.map((genre, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{genre.genre}</h3>
                <p className="text-gray-600 mb-4">{genre.characteristics}</p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Key Elements</h4>
                    <ul className="text-sm text-gray-600">
                      {genre.keyElements.map((element, i) => (
                        <li key={i} className="mb-1">• {element}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Examples</h4>
                    <div className="flex flex-wrap gap-1">
                      {genre.examples.map((example, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-3">
                    <h4 className="font-medium text-yellow-800 mb-1">Practice Focus</h4>
                    <p className="text-sm text-yellow-700">{genre.practice}</p>
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

        {/* Timing and Feel */}
        <section className="mb-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Developing Syncopated Feel</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Internal Pulse</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Feel the underlying beat even when playing off-beats</li>
                <li>• Practice counting aloud while playing syncopated patterns</li>
                <li>• Use body movement to internalize the groove</li>
                <li>• Start slow and gradually increase tempo</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Musical Application</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Listen to how different artists use syncopation</li>
                <li>• Practice with backing tracks and drum loops</li>
                <li>• Experiment with slight timing variations</li>
                <li>• Record yourself to hear timing accuracy</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Song Learning Path */}
        <section className="mb-12 bg-purple-50 border border-purple-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-purple-900 mb-4">🎵 Progressive Song Study</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">1</span>
              <div>
                <h4 className="font-medium text-purple-800">"I Want to Hold Your Hand" - Basic Off-Beat</h4>
                <p className="text-sm text-purple-700">Learn to emphasize beats 2 and 4 with simple strumming</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">2</span>
              <div>
                <h4 className="font-medium text-purple-800">"Brown Eyed Girl" - Anticipated Downbeats</h4>
                <p className="text-sm text-purple-700">Practice playing slightly ahead of the beat for forward motion</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">3</span>
              <div>
                <h4 className="font-medium text-purple-800">"No Woman No Cry" - Reggae Skank</h4>
                <p className="text-sm text-purple-700">Master the classic reggae off-beat upstroke pattern</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">4</span>
              <div>
                <h4 className="font-medium text-purple-800">"Superstition" - Funk Syncopation</h4>
                <p className="text-sm text-purple-700">Develop complex syncopated patterns with percussive elements</p>
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
            <Link href="/lessons/songs/rhythm/palm-muting" className="text-blue-600 hover:text-blue-800">
              ← Palm Muting
            </Link>
            <Link href="/lessons/songs/rhythm/shuffle" className="text-blue-600 hover:text-blue-800">
              Shuffle & Swing →
            </Link>
          </div>
        </nav>
      </main>
      <Footer />
    </Layout>
  );
}
