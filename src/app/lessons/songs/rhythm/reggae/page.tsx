import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const reggaePatterns = [
  {
    title: 'Classic Reggae Skank',
    difficulty: 'Intermediate',
    pattern: '- U - U - U - U',
    description: 'All upstrokes on beats 2 and 4 (and "and" of 1 and 3)',
    feel: 'Laid-back, relaxed groove with emphasis on off-beats',
    songs: ['No Woman No Cry - Bob Marley', 'One Love - Bob Marley', 'Three Little Birds - Bob Marley'],
    theory: 'Complete rhythmic displacement emphasizing weak beats'
  },
  {
    title: 'One Drop',
    difficulty: 'Advanced',
    pattern: '- - - D - - - D',
    description: 'Emphasis only on beat 3, with space on beat 1',
    feel: 'Spacious, hypnotic groove characteristic of roots reggae',
    songs: ['Get Up Stand Up - Bob Marley', 'Exodus - Bob Marley', 'Jamming - Bob Marley'],
    theory: 'Extreme syncopation with focus on beat 3 only'
  },
  {
    title: 'Rockers',
    difficulty: 'Intermediate',
    pattern: 'D - U - D - U -',
    description: 'More driving rhythm with emphasis on all four beats',
    feel: 'More energetic and driving than classic skank',
    songs: ['Concrete Jungle - Bob Marley', 'Positive Vibration - Bob Marley', 'Lively Up Yourself'],
    theory: 'Balanced rhythm with both down and upstrokes emphasized'
  },
  {
    title: 'Ska Upstroke',
    difficulty: 'Beginner',
    pattern: '- U - U - U - U',
    description: 'Fast upstrokes on every off-beat',
    feel: 'Energetic, bouncy feel characteristic of ska music',
    songs: ['A Message to You Rudy - The Specials', 'Ghost Town - The Specials', 'Madness songs'],
    theory: 'Precursor to reggae, emphasizing upbeats at faster tempo'
  },
  {
    title: 'Steppers',
    difficulty: 'Advanced',
    pattern: 'D - D - D - D -',
    description: 'Four-on-the-floor with hi-hat on off-beats',
    feel: 'Modern, driving reggae feel',
    songs: ['Marcus Garvey - Burning Spear', 'Modern roots reggae', 'Digital reggae'],
    theory: 'Contemporary reggae adaptation with steady four-beat emphasis'
  },
  {
    title: 'Reggae-Rock Fusion',
    difficulty: 'Intermediate',
    pattern: 'D U D U with reggae emphasis',
    description: 'Rock strumming with reggae off-beat emphasis',
    feel: 'Fusion of rock energy with reggae groove',
    songs: ['Red Red Wine - UB40', 'Every Breath You Take - Police', 'Modern reggae-rock'],
    theory: 'Contemporary fusion maintaining reggae feel in rock context'
  },
  {
    title: 'Dub Style',
    difficulty: 'Advanced',
    pattern: 'Sparse, effects-heavy',
    description: 'Minimal playing with emphasis on space and effects',
    feel: 'Spacious, echo-heavy, minimal approach',
    songs: ['King Tubby productions', 'Lee "Scratch" Perry', 'Dub classics'],
    theory: 'Emphasis on space, echo, and minimal rhythmic elements'
  },
  {
    title: 'Dancehall',
    difficulty: 'Intermediate',
    pattern: 'Digital reggae with modern elements',
    description: 'Modern reggae with electronic influences',
    feel: 'Contemporary, often faster tempo with digital elements',
    songs: ['Modern dancehall hits', 'Sean Paul songs', 'Contemporary Jamaican music'],
    theory: 'Modern evolution of reggae with hip-hop and electronic influences'
  }
];

const culturalContext = [
  {
    title: 'Jamaican Roots',
    icon: '🇯🇲',
    description: 'Understanding the cultural origins of reggae',
    background: 'Born in Jamaica in the late 1960s from ska and rocksteady',
    significance: 'Expression of Rastafarian spirituality and social consciousness',
    influence: 'Influenced by American R&B, jazz, and traditional Caribbean music'
  },
  {
    title: 'Rastafarian Connection',
    icon: '👑',
    description: 'The spiritual dimension of reggae music',
    background: 'Deeply connected to Rastafarian religious and cultural movement',
    significance: 'Music as spiritual expression and social commentary',
    influence: 'Emphasis on peace, love, unity, and social justice'
  },
  {
    title: 'Rhythmic Philosophy',
    icon: '🥁',
    description: 'The unique approach to rhythm in reggae',
    background: 'Emphasis on the off-beat creates meditative, hypnotic quality',
    significance: 'Rhythm as spiritual practice and cultural identity',
    influence: 'African rhythmic traditions adapted to Caribbean context'
  },
  {
    title: 'Global Impact',
    icon: '🌍',
    description: 'How reggae influenced world music',
    background: 'Spread globally through Bob Marley and other artists',
    significance: 'Influenced rock, pop, hip-hop, and world music',
    influence: 'Universal message of peace and social justice'
  }
];

const technicalElements = [
  {
    title: 'Off-Beat Emphasis',
    description: 'The defining characteristic of reggae guitar',
    technique: 'Upstrokes on beats 2 and 4, and off-beats',
    practice: 'Start with metronome, emphasize upstrokes only',
    common_mistakes: 'Playing on downbeats, rushing the upstrokes'
  },
  {
    title: 'Clean Tone',
    description: 'Reggae typically uses clean, crisp guitar tones',
    technique: 'Clean amp settings, possible chorus or reverb',
    practice: 'Focus on clarity and articulation',
    common_mistakes: 'Using too much distortion or effects'
  },
  {
    title: 'Chord Voicings',
    description: 'Simple but effective chord progressions',
    technique: 'Major and minor triads, occasional sevenths',
    practice: 'Master basic open chords and barre chords',
    common_mistakes: 'Overcomplicating chord voicings'
  },
  {
    title: 'Rhythmic Precision',
    description: 'Exact timing is crucial for authentic reggae feel',
    technique: 'Precise upstroke timing, consistent tempo',
    practice: 'Practice with metronome, record yourself',
    common_mistakes: 'Rushing or dragging the beat'
  }
];

const practiceExercises = [
  {
    title: 'Metronome Off-Beat',
    level: 'Beginner',
    description: 'Learn to feel reggae timing',
    exercise: 'Set metronome to click on beats 2 and 4 only',
    focus: 'Feeling the off-beat as the main pulse',
    progression: 'Add guitar upstrokes, then chord changes'
  },
  {
    title: 'Basic Skank Pattern',
    level: 'Intermediate',
    description: 'Master the fundamental reggae rhythm',
    exercise: 'Play upstrokes on 2, 4, and the "and" of 1 and 3',
    focus: 'Consistent upstroke technique and timing',
    progression: 'Add dynamics, palm muting variations'
  },
  {
    title: 'Chord Progression Practice',
    level: 'Intermediate',
    description: 'Apply reggae rhythm to common progressions',
    exercise: 'Play reggae skank over I-vi-IV-V progressions',
    focus: 'Smooth chord changes while maintaining rhythm',
    progression: 'More complex progressions, key changes'
  },
  {
    title: 'Song Study',
    level: 'Advanced',
    description: 'Learn complete reggae songs',
    exercise: 'Master full arrangements of classic reggae songs',
    focus: 'Authentic feel, arrangement understanding',
    progression: 'Improvisation, creating original arrangements'
  }
];

const difficultyColors = {
  'Beginner': 'bg-green-100 text-green-800',
  'Intermediate': 'bg-yellow-100 text-yellow-800',
  'Advanced': 'bg-red-100 text-red-800'
} as const;

export default function ReggaeSkarhythms() {
  return (
    <Layout>
      <Header
        title="Reggae & Ska Rhythms"
        subtitle="Master the iconic off-beat rhythms of Jamaica. Learn the spiritual and cultural foundation of reggae and the energetic precursor of ska."
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Navigation */}
        <nav className="mb-8">
          <Link href="/lessons/songs/rhythm" className="text-blue-600 hover:text-blue-800">
            ← Back to Rhythm & Strumming
          </Link>
        </nav>

        {/* Overview */}
        <section className="mb-12 bg-gradient-to-r from-green-50 to-yellow-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">One Love, One Rhythm</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Off-Beat Revolution</h3>
              <p className="text-gray-600">Reggae revolutionized popular music by emphasizing the off-beat, creating a hypnotic, meditative groove that became a global phenomenon.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Cultural Movement</h3>
              <p className="text-gray-600">More than just music, reggae carries messages of peace, unity, and social consciousness rooted in Jamaican culture and Rastafarian spirituality.</p>
            </div>
          </div>
        </section>

        {/* Reggae Patterns */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Reggae & Ska Patterns</h2>
          <div className="grid gap-6">
            {reggaePatterns.map((pattern, index) => (
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
                      <span key={i} className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded">
                        {song}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cultural Context */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cultural Understanding</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {culturalContext.map((context, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{context.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-900">{context.title}</h3>
                </div>
                <p className="text-gray-600 mb-3">{context.description}</p>
                <div className="space-y-3">
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-sm text-green-800"><strong>Background:</strong> {context.background}</p>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-3">
                    <p className="text-sm text-yellow-800"><strong>Significance:</strong> {context.significance}</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-sm text-blue-800"><strong>Influence:</strong> {context.influence}</p>
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
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{element.title}</h3>
                <p className="text-gray-600 mb-4">{element.description}</p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Technique</h4>
                    <p className="text-sm text-gray-600">{element.technique}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Practice Approach</h4>
                    <p className="text-sm text-gray-600">{element.practice}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Common Mistakes</h4>
                    <p className="text-sm text-red-600">{element.common_mistakes}</p>
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

        {/* Evolution Timeline */}
        <section className="mb-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Evolution of Jamaican Rhythm</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">1960s</span>
              <div>
                <h4 className="font-medium text-gray-800">Ska Origins</h4>
                <p className="text-sm text-gray-600">Fast, energetic upstroke rhythm developed from jazz and Caribbean music</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">Mid-60s</span>
              <div>
                <h4 className="font-medium text-gray-800">Rocksteady</h4>
                <p className="text-sm text-gray-600">Slower tempo precursor to reggae with emphasis on bass lines</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">Late 60s</span>
              <div>
                <h4 className="font-medium text-gray-800">Reggae Birth</h4>
                <p className="text-sm text-gray-600">Classic reggae emerges with distinctive off-beat emphasis</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">1970s-80s</span>
              <div>
                <h4 className="font-medium text-gray-800">Global Spread</h4>
                <p className="text-sm text-gray-600">Bob Marley and others bring reggae to worldwide audiences</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">1980s+</span>
              <div>
                <h4 className="font-medium text-gray-800">Dancehall & Digital</h4>
                <p className="text-sm text-gray-600">Modern evolution with electronic elements and faster tempos</p>
              </div>
            </div>
          </div>
        </section>

        {/* Spiritual Practice */}
        <section className="mb-12 bg-green-50 border border-green-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-green-900 mb-4">🕊️ Reggae as Spiritual Practice</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-green-800 mb-2"><strong>Meditative Quality:</strong></p>
              <p className="text-green-700">The repetitive off-beat creates a meditative, hypnotic quality that can induce a trance-like state of consciousness.</p>
            </div>
            <div>
              <p className="text-green-800 mb-2"><strong>Unity and Peace:</strong></p>
              <p className="text-green-700">Reggae rhythms embody messages of unity, peace, and social consciousness central to Rastafarian philosophy.</p>
            </div>
            <div>
              <p className="text-green-800 mb-2"><strong>Collective Experience:</strong></p>
              <p className="text-green-700">The rhythm creates a sense of community and shared experience among players and listeners.</p>
            </div>
            <div>
              <p className="text-green-800 mb-2"><strong>Healing Power:</strong></p>
              <p className="text-green-700">Many practitioners believe reggae music has healing properties for both individuals and communities.</p>
            </div>
          </div>
        </section>

        {/* Song Learning Path */}
        <section className="mb-12 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-yellow-900 mb-4">🌟 Progressive Song Study</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">1</span>
              <div>
                <h4 className="font-medium text-yellow-800">"Three Little Birds" - Basic Skank</h4>
                <p className="text-sm text-yellow-700">Learn fundamental reggae upstroke with simple chord progression</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">2</span>
              <div>
                <h4 className="font-medium text-yellow-800">"No Woman No Cry" - Classic Reggae</h4>
                <p className="text-sm text-yellow-700">Master the definitive reggae rhythm and feel</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">3</span>
              <div>
                <h4 className="font-medium text-yellow-800">"Get Up Stand Up" - One Drop</h4>
                <p className="text-sm text-yellow-700">Learn the spacious one drop rhythm style</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">4</span>
              <div>
                <h4 className="font-medium text-yellow-800">"A Message to You Rudy" - Ska Energy</h4>
                <p className="text-sm text-yellow-700">Master the fast, energetic ska upstroke style</p>
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
            <Link href="/lessons/songs/rhythm/latin" className="text-blue-600 hover:text-blue-800">
              ← Latin Rhythms
            </Link>
            <Link href="/lessons/songs/rhythm/funk" className="text-blue-600 hover:text-blue-800">
              Funk Rhythms →
            </Link>
          </div>
        </nav>
      </main>
      <Footer />
    </Layout>
  );
}
