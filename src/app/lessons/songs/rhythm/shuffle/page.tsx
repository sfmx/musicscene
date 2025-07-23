import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const shufflePatterns = [
  {
    title: 'Basic Shuffle',
    difficulty: 'Beginner',
    pattern: 'Long-short, Long-short',
    description: 'Basic triplet feel with swing eighth notes',
    ratio: '2:1 ratio (long:short)',
    songs: ['Sweet Home Chicago - Blues standard', 'Cross Road Blues - Robert Johnson', 'Pride and Joy - Stevie Ray Vaughan'],
    theory: 'Triplet subdivision with emphasis on beats 1 and 3 of each triplet'
  },
  {
    title: 'Texas Shuffle',
    difficulty: 'Intermediate',
    pattern: 'Syncopated shuffle with muting',
    description: 'Aggressive shuffle with palm muting and string damping',
    ratio: 'Variable with percussive elements',
    songs: ['Cold Shot - Stevie Ray Vaughan', 'Crossfire - Stevie Ray Vaughan', 'Texas Flood - Stevie Ray Vaughan'],
    theory: 'Blues shuffle with Texas-style aggression and dynamics'
  },
  {
    title: 'Chicago Shuffle',
    difficulty: 'Intermediate',
    pattern: 'Walking bass with shuffle rhythm',
    description: 'Alternating bass notes with shuffle feel',
    ratio: 'Standard shuffle with walking bass',
    songs: ['Mannish Boy - Muddy Waters', 'Sweet Home Chicago', 'Hoochie Coochie Man - Muddy Waters'],
    theory: 'Chicago blues style with walking bass lines'
  },
  {
    title: 'Rockabilly Shuffle',
    difficulty: 'Intermediate',
    pattern: 'Upbeat shuffle with country influence',
    description: 'Bright, energetic shuffle common in rockabilly',
    ratio: 'Lighter shuffle feel',
    songs: ['Blue Suede Shoes - Elvis', 'That\'s All Right - Elvis', 'Rock Around the Clock - Bill Haley'],
    theory: 'Country and early rock influence on blues shuffle'
  },
  {
    title: 'Jazz Swing',
    difficulty: 'Advanced',
    pattern: 'Sophisticated swing with chord changes',
    description: 'Complex jazz harmony with swing feel',
    ratio: 'Subtle swing, often written as straight eighth notes',
    songs: ['All of Me', 'Autumn Leaves', 'Take Five - Dave Brubeck'],
    theory: 'Jazz harmony with swing rhythm, complex chord progressions'
  },
  {
    title: 'Slow Blues Shuffle',
    difficulty: 'Intermediate',
    pattern: 'Relaxed, emotional shuffle',
    description: 'Slower tempo shuffle for expressive playing',
    ratio: 'Exaggerated long-short feel',
    songs: ['The Thrill is Gone - B.B. King', 'Stormy Monday - T-Bone Walker', 'Red House - Jimi Hendrix'],
    theory: 'Emotional expression through timing and phrasing'
  },
  {
    title: 'Country Shuffle',
    difficulty: 'Intermediate',
    pattern: 'Bright shuffle with country picking',
    description: 'Clean, articulate shuffle common in country music',
    ratio: 'Moderate shuffle feel',
    songs: ['Folsom Prison Blues - Johnny Cash', 'Blue Eyes Crying in the Rain', 'Country shuffle standards'],
    theory: 'Country music application of shuffle rhythm'
  },
  {
    title: 'Modern Rock Shuffle',
    difficulty: 'Advanced',
    pattern: 'Contemporary shuffle in rock context',
    description: 'Modern interpretation of shuffle in rock music',
    ratio: 'Varies from subtle to pronounced',
    songs: ['Couldn\'t Stand the Weather - SRV', 'Modern rock ballads', 'Contemporary blues rock'],
    theory: 'Integration of shuffle feel in modern rock arrangements'
  }
];

const swingConcepts = [
  {
    title: 'Triplet Foundation',
    icon: '3️⃣',
    description: 'Understanding triplet subdivision as the basis of swing',
    theory: 'Swing eighth notes are based on triplet subdivision, not straight eighths',
    application: 'Creates the characteristic "bounce" of swing and shuffle',
    practice: 'Count triplets aloud, then emphasize beats 1 and 3'
  },
  {
    title: 'Swing Ratio',
    icon: '📏',
    description: 'The relationship between long and short notes in swing',
    theory: 'Ratios vary from 2:1 (strong swing) to nearly 1:1 (straight feel)',
    application: 'Different genres use different swing ratios',
    practice: 'Practice with different ratios, from subtle to exaggerated'
  },
  {
    title: 'Groove and Pocket',
    icon: '🎯',
    description: 'Finding the right rhythmic placement',
    theory: 'Swing feel is about placement and timing, not just note duration',
    application: 'Creates the characteristic groove of blues, jazz, and country',
    practice: 'Play with backing tracks to develop pocket sense'
  },
  {
    title: 'Cultural Context',
    icon: '🎼',
    description: 'How swing developed in different musical traditions',
    theory: 'Swing evolved from African-American musical traditions',
    application: 'Understanding origins enhances authentic performance',
    practice: 'Study recordings from different eras and styles'
  }
];

const genreApplications = [
  {
    genre: 'Blues',
    characteristics: 'Foundation of blues rhythm guitar',
    keyElements: ['12-bar progression', 'Walking bass', 'Emotional expression'],
    shuffleType: 'Traditional blues shuffle with strong swing feel',
    examples: ['Robert Johnson', 'Muddy Waters', 'B.B. King'],
    practice: 'Master 12-bar blues with authentic shuffle feel'
  },
  {
    genre: 'Jazz',
    characteristics: 'Sophisticated harmony with swing rhythm',
    keyElements: ['Complex chords', 'Improvisation', 'Swing standards'],
    shuffleType: 'Subtle swing, often written as straight eighth notes',
    examples: ['Django Reinhardt', 'Wes Montgomery', 'Joe Pass'],
    practice: 'Learn jazz standards with proper swing interpretation'
  },
  {
    genre: 'Country',
    characteristics: 'Clean, articulate shuffle with country flavor',
    keyElements: ['Fingerpicking', 'Clean tone', 'Storytelling support'],
    shuffleType: 'Moderate shuffle with clear articulation',
    examples: ['Chet Atkins', 'Johnny Cash', 'Brad Paisley'],
    practice: 'Focus on clean execution and rhythmic precision'
  },
  {
    genre: 'Rockabilly',
    characteristics: 'Energetic shuffle with rock attitude',
    keyElements: ['Slap-back echo', 'Energetic tempo', 'Rock influence'],
    shuffleType: 'Bright, driving shuffle with rock energy',
    examples: ['Scotty Moore', 'Brian Setzer', 'Early Elvis'],
    practice: 'Develop energetic attack and driving rhythm'
  },
  {
    genre: 'Contemporary',
    characteristics: 'Modern application of shuffle feel',
    keyElements: ['Rock production', 'Electric effects', 'Contemporary harmony'],
    shuffleType: 'Variable shuffle integrated with modern techniques',
    examples: ['Stevie Ray Vaughan', 'John Mayer', 'Modern blues rock'],
    practice: 'Blend traditional shuffle with contemporary techniques'
  }
];

const practiceExercises = [
  {
    title: 'Triplet Counting',
    level: 'Beginner',
    description: 'Learn to feel triplet subdivision',
    exercise: 'Count "1-trip-let, 2-trip-let" while clapping on 1 and 3',
    tempo: '60-80 BPM',
    focus: 'Internalizing triplet feel',
    progression: 'Add guitar strumming, then chord changes'
  },
  {
    title: 'Basic Shuffle Strum',
    level: 'Beginner',
    description: 'Apply triplet feel to simple strumming',
    exercise: 'Strum on 1 and 3 of each triplet group',
    tempo: '70-100 BPM',
    focus: 'Consistent shuffle rhythm',
    progression: 'Add palm muting, increase tempo'
  },
  {
    title: '12-Bar Shuffle',
    level: 'Intermediate',
    description: 'Apply shuffle to blues progression',
    exercise: 'Play 12-bar blues with shuffle rhythm',
    tempo: '80-120 BPM',
    focus: 'Maintaining shuffle through chord changes',
    progression: 'Add walking bass, variations'
  },
  {
    title: 'Jazz Standards',
    level: 'Advanced',
    description: 'Apply swing to jazz chord progressions',
    exercise: 'Play jazz standards with swing comping',
    tempo: 'Ballad to medium swing',
    focus: 'Sophisticated harmony with swing feel',
    progression: 'Improvisation, complex arrangements'
  }
];

const difficultyColors = {
  'Beginner': 'bg-green-100 text-green-800',
  'Intermediate': 'bg-yellow-100 text-yellow-800',
  'Advanced': 'bg-red-100 text-red-800'
} as const;

export default function ShuffleSwingRhythms() {
  return (
    <Layout>
      <Header
        title="Shuffle & Swing Rhythms"
        subtitle="Master the triplet-based rhythms that define blues, jazz, country, and rockabilly. Learn to feel and play authentic shuffle and swing patterns."
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Navigation */}
        <nav className="mb-8">
          <Link href="/lessons/songs/rhythm" className="text-blue-600 hover:text-blue-800">
            ← Back to Rhythm & Strumming
          </Link>
        </nav>

        {/* Overview */}
        <section className="mb-12 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Swing Revolution</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Triplet Foundation</h3>
              <p className="text-gray-600">Shuffle and swing rhythms are based on triplet subdivision, creating a "long-short" feel that gives music its characteristic bounce and groove.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Genre Cornerstone</h3>
              <p className="text-gray-600">These rhythms are fundamental to blues, jazz, country, and rockabilly, each genre developing its own distinct interpretation of the basic swing feel.</p>
            </div>
          </div>
        </section>

        {/* Shuffle Patterns */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Shuffle & Swing Patterns</h2>
          <div className="grid gap-6">
            {shufflePatterns.map((pattern, index) => (
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
                    <h4 className="font-medium text-gray-800 mb-1">Pattern Feel</h4>
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{pattern.pattern}</code>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Swing Ratio</h4>
                    <p className="text-sm text-gray-600">{pattern.ratio}</p>
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
                      <span key={i} className="bg-amber-50 text-amber-700 text-xs px-2 py-1 rounded">
                        {song}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Swing Concepts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding Swing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {swingConcepts.map((concept, index) => (
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {genreApplications.map((genre, index) => (
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
                    <h4 className="font-medium text-gray-800 mb-2">Shuffle Type</h4>
                    <p className="text-sm text-gray-600">{genre.shuffleType}</p>
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
        <section className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Mastering Shuffle Feel</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Feeling the Triplet</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Count triplets aloud: "1-trip-let, 2-trip-let"</li>
                <li>• Clap on beats 1 and 3 of each triplet</li>
                <li>• Feel the "long-short" relationship</li>
                <li>• Practice with a metronome set to triplets</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Rhythmic Nuance</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Different genres use different swing ratios</li>
                <li>• Listen to masters of each style</li>
                <li>• Practice with backing tracks</li>
                <li>• Adjust swing feel to match the musical context</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Song Learning Path */}
        <section className="mb-12 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-yellow-900 mb-4">🎵 Progressive Song Study</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">1</span>
              <div>
                <h4 className="font-medium text-yellow-800">"Sweet Home Chicago" - Basic Blues Shuffle</h4>
                <p className="text-sm text-yellow-700">Learn fundamental shuffle rhythm over 12-bar blues</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">2</span>
              <div>
                <h4 className="font-medium text-yellow-800">"All of Me" - Jazz Swing</h4>
                <p className="text-sm text-yellow-700">Apply swing feel to jazz chord progressions</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">3</span>
              <div>
                <h4 className="font-medium text-yellow-800">"Blue Suede Shoes" - Rockabilly Shuffle</h4>
                <p className="text-sm text-yellow-700">Master energetic rockabilly shuffle rhythm</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">4</span>
              <div>
                <h4 className="font-medium text-yellow-800">"Pride and Joy" - Texas Shuffle</h4>
                <p className="text-sm text-yellow-700">Develop aggressive Texas-style shuffle with dynamics</p>
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
            <Link href="/lessons/songs/rhythm/syncopation" className="text-blue-600 hover:text-blue-800">
              ← Syncopation
            </Link>
            <Link href="/lessons/songs/rhythm/latin" className="text-blue-600 hover:text-blue-800">
              Latin Rhythms →
            </Link>
          </div>
        </nav>
      </main>
      <Footer />
    </Layout>
  );
}
