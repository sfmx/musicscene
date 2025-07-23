import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const latinRhythms = [
  {
    title: 'Bossa Nova',
    difficulty: 'Advanced',
    origin: 'Brazil',
    pattern: 'Syncopated fingerpicking with subtle swing',
    clave: '3-2 or 2-3 son clave',
    songs: ['Girl from Ipanema - Jobim', 'Corcovado - Jobim', 'Wave - Jobim', 'Desafinado - Jobim'],
    characteristics: ['Soft dynamics', 'Jazz harmony', 'Subtle syncopation', 'Fingerpicking technique'],
    theory: 'Brazilian rhythm with jazz influences, complex harmonic progressions'
  },
  {
    title: 'Samba',
    difficulty: 'Advanced',
    origin: 'Brazil',
    pattern: 'Driving 2/4 rhythm with strong accents',
    clave: 'Partido alto pattern',
    songs: ['Mas Que Nada', 'Aquarela do Brasil', 'Copacabana - Barry Manilow'],
    characteristics: ['Energetic tempo', 'Strong accents', 'Percussive elements', 'Carnival feel'],
    theory: 'Fast Brazilian rhythm with African influences, polyrhythmic complexity'
  },
  {
    title: 'Rhumba/Bolero',
    difficulty: 'Intermediate',
    origin: 'Cuba',
    pattern: 'Slow, romantic 4/4 with Cuban influence',
    clave: 'Son clave variations',
    songs: ['Besame Mucho', 'Historia de un Amor', 'La Vida es un Sueño'],
    characteristics: ['Romantic tempo', 'Expressive phrasing', 'Cuban harmony', 'Melodic emphasis'],
    theory: 'Slow Cuban rhythm emphasizing melody and romantic expression'
  },
  {
    title: 'Salsa/Son',
    difficulty: 'Advanced',
    origin: 'Cuba/Caribbean',
    pattern: 'Complex syncopated rhythm',
    clave: '3-2 or 2-3 son clave',
    songs: ['Oye Como Va - Santana', 'Smooth - Santana', 'El Cuarto de Tula'],
    characteristics: ['Complex syncopation', 'Montuno patterns', 'Call and response', 'Dance rhythm'],
    theory: 'Complex Cuban rhythm with African and Spanish influences'
  },
  {
    title: 'Tango',
    difficulty: 'Intermediate',
    origin: 'Argentina',
    pattern: 'Dramatic 2/4 or 4/4 with staccato elements',
    clave: 'Distinctive tango rhythm',
    songs: ['La Cumparsita', 'Por Una Cabeza', 'El Choclo'],
    characteristics: ['Dramatic dynamics', 'Staccato articulation', 'Passionate expression', 'Dance emphasis'],
    theory: 'Argentine rhythm with European and African influences'
  },
  {
    title: 'Reggaeton',
    difficulty: 'Intermediate',
    origin: 'Puerto Rico',
    pattern: 'Modern Latin urban rhythm',
    clave: 'Dembow rhythm pattern',
    songs: ['Gasolina - Daddy Yankee', 'Despacito - Luis Fonsi', 'Modern reggaeton hits'],
    characteristics: ['Urban feel', 'Electronic influence', 'Strong beat', 'Modern production'],
    theory: 'Contemporary Latin rhythm with hip-hop and electronic influences'
  },
  {
    title: 'Flamenco Compás',
    difficulty: 'Advanced',
    origin: 'Spain',
    pattern: 'Complex rhythmic cycles (12-beat, 8-beat, etc.)',
    clave: 'Various compás patterns',
    songs: ['Malagueña', 'Asturias', 'Entre Dos Aguas - Paco de Lucía'],
    characteristics: ['Complex meter', 'Percussive technique', 'Passionate expression', 'Virtuosic playing'],
    theory: 'Spanish gypsy rhythm with complex meter and passionate expression'
  },
  {
    title: 'Latin Rock Fusion',
    difficulty: 'Advanced',
    origin: 'Contemporary',
    pattern: 'Latin rhythms in rock context',
    clave: 'Adapted traditional patterns',
    songs: ['Black Magic Woman - Santana', 'Evil Ways - Santana', 'Latin rock standards'],
    characteristics: ['Rock instrumentation', 'Latin percussion', 'Electric guitar', 'Fusion harmony'],
    theory: 'Integration of Latin rhythms with rock and jazz elements'
  }
];

const clavePatterns = [
  {
    name: '3-2 Son Clave',
    pattern: 'X - X - X - - X - X -',
    description: 'Three hits in first measure, two in second',
    usage: 'Fundamental to Cuban music, salsa, and Latin jazz',
    feel: 'Forward-moving, energetic'
  },
  {
    name: '2-3 Son Clave',
    pattern: 'X - X - - X - X - X -',
    description: 'Two hits in first measure, three in second',
    usage: 'Reverse of 3-2, common in contemporary Latin music',
    feel: 'More laid-back, modern feel'
  },
  {
    name: 'Rhumba Clave',
    pattern: 'X - - X - X - - X - X -',
    description: 'Similar to son clave but with different spacing',
    usage: 'Traditional Afro-Cuban music, modern Latin styles',
    feel: 'More syncopated, African influence'
  },
  {
    name: 'Bossa Nova Pattern',
    pattern: 'Subtle syncopated feel',
    description: 'Less aggressive than Cuban clave',
    usage: 'Brazilian bossa nova and samba',
    feel: 'Subtle, sophisticated, jazzy'
  }
];

const technicalApproaches = [
  {
    title: 'Fingerpicking Style',
    icon: '🤚',
    description: 'Classical and contemporary fingerpicking for Latin music',
    techniques: ['Thumb bass patterns', 'Finger independence', 'Tremolo picking', 'Arpeggiated chords'],
    genres: 'Bossa nova, classical guitar, Spanish guitar',
    practice: 'Start with basic patterns, add complexity gradually'
  },
  {
    title: 'Percussive Elements',
    icon: '🥁',
    description: 'Adding rhythmic percussion to guitar playing',
    techniques: ['Palm slaps', 'String muting', 'Body percussion', 'Rasgueado'],
    genres: 'Flamenco, contemporary Latin, fusion',
    practice: 'Learn basic percussion, integrate with rhythm'
  },
  {
    title: 'Strumming Patterns',
    icon: '🎸',
    description: 'Adapted strumming for Latin rhythms',
    techniques: ['Syncopated strumming', 'Dynamic control', 'Accent placement', 'Muted strums'],
    genres: 'Latin rock, salsa, contemporary Latin pop',
    practice: 'Focus on accent placement and rhythmic precision'
  },
  {
    title: 'Harmonic Approach',
    icon: '🎼',
    description: 'Chord voicings and progressions in Latin music',
    techniques: ['Extended chords', 'Chromatic movement', 'Modal harmony', 'Jazz influences'],
    genres: 'Bossa nova, Latin jazz, contemporary Latin',
    practice: 'Learn chord voicings, practice smooth transitions'
  }
];

const practiceExercises = [
  {
    title: 'Clave Internalization',
    level: 'Beginner',
    description: 'Learn to feel basic clave patterns',
    exercise: 'Clap clave patterns while counting',
    focus: 'Internalizing the rhythmic foundation',
    progression: 'Add foot tapping, then guitar patterns'
  },
  {
    title: 'Basic Bossa Nova',
    level: 'Intermediate',
    description: 'Simple bossa nova fingerpicking',
    exercise: 'Basic thumb-finger pattern over jazz chords',
    focus: 'Smooth, subtle rhythm with proper feel',
    progression: 'Add melody, increase complexity'
  },
  {
    title: 'Salsa Montuno',
    level: 'Advanced',
    description: 'Piano-style montuno adapted for guitar',
    exercise: 'Syncopated chord patterns following clave',
    focus: 'Complex syncopation and harmonic movement',
    progression: 'Improvisation, call-and-response'
  },
  {
    title: 'Flamenco Compás',
    level: 'Advanced',
    description: 'Basic flamenco rhythmic cycles',
    exercise: 'Simple 12-beat compás with rasgueado',
    focus: 'Complex meter and passionate expression',
    progression: 'Advanced techniques, improvisation'
  }
];

const difficultyColors = {
  'Beginner': 'bg-green-100 text-green-800',
  'Intermediate': 'bg-yellow-100 text-yellow-800',
  'Advanced': 'bg-red-100 text-red-800'
} as const;

export default function LatinRhythms() {
  return (
    <Layout>
      <Header
        title="Latin Rhythms"
        subtitle="Explore the rich rhythmic traditions of Latin America and Spain. Master clave patterns, syncopation, and the passionate rhythms of Latin music."
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Navigation */}
        <nav className="mb-8">
          <Link href="/lessons/songs/rhythm" className="text-blue-600 hover:text-blue-800">
            ← Back to Rhythm & Strumming
          </Link>
        </nav>

        {/* Overview */}
        <section className="mb-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Soul of Latin Rhythm</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Clave Foundation</h3>
              <p className="text-gray-600">Latin rhythms are built on the clave, a rhythmic pattern that serves as the rhythmic foundation for most Latin music styles.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Cultural Richness</h3>
              <p className="text-gray-600">Each Latin rhythm carries the cultural heritage of its origin, from the passionate flamenco of Spain to the sophisticated bossa nova of Brazil.</p>
            </div>
          </div>
        </section>

        {/* Latin Rhythms */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Latin Rhythms</h2>
          <div className="grid gap-6">
            {latinRhythms.map((rhythm, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{rhythm.title}</h3>
                      <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                        {rhythm.origin}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{rhythm.pattern}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[rhythm.difficulty as keyof typeof difficultyColors]}`}>
                    {rhythm.difficulty}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Clave Pattern</h4>
                    <p className="text-sm text-gray-600">{rhythm.clave}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Theory</h4>
                    <p className="text-sm text-gray-600">{rhythm.theory}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-800 mb-2">Characteristics</h4>
                  <div className="flex flex-wrap gap-2">
                    {rhythm.characteristics.map((char, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {char}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Example Songs</h4>
                  <div className="flex flex-wrap gap-2">
                    {rhythm.songs.map((song, i) => (
                      <span key={i} className="bg-red-50 text-red-700 text-xs px-2 py-1 rounded">
                        {song}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Clave Patterns */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding Clave</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {clavePatterns.map((clave, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{clave.name}</h3>
                <div className="bg-gray-50 rounded-lg p-3 mb-3">
                  <code className="text-sm font-mono text-gray-800">{clave.pattern}</code>
                </div>
                <p className="text-gray-600 mb-3">{clave.description}</p>
                <div className="space-y-2">
                  <div>
                    <h4 className="font-medium text-gray-800 text-sm">Usage</h4>
                    <p className="text-sm text-gray-600">{clave.usage}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 text-sm">Feel</h4>
                    <p className="text-sm text-gray-600">{clave.feel}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Approaches */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Approaches</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {technicalApproaches.map((approach, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{approach.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-900">{approach.title}</h3>
                </div>
                <p className="text-gray-600 mb-3">{approach.description}</p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Techniques</h4>
                    <ul className="text-sm text-gray-600">
                      {approach.techniques.map((technique, i) => (
                        <li key={i} className="mb-1">• {technique}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Genre Application</h4>
                    <p className="text-sm text-gray-600">{approach.genres}</p>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-3">
                    <h4 className="font-medium text-amber-800 mb-1">Practice Approach</h4>
                    <p className="text-sm text-amber-700">{approach.practice}</p>
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

        {/* Cultural Context */}
        <section className="mb-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cultural Understanding</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Historical Roots</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• African rhythmic traditions brought through slavery</li>
                <li>• Spanish and Portuguese colonial influences</li>
                <li>• Indigenous American musical elements</li>
                <li>• Modern jazz and popular music integration</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Musical Elements</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Complex polyrhythmic structures</li>
                <li>• Call-and-response patterns</li>
                <li>• Syncopation and cross-rhythms</li>
                <li>• Dance-oriented rhythmic feel</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Song Learning Path */}
        <section className="mb-12 bg-red-50 border border-red-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-red-900 mb-4">🌶️ Progressive Song Study</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">1</span>
              <div>
                <h4 className="font-medium text-red-800">"La Bamba" - Basic Latin Rock</h4>
                <p className="text-sm text-red-700">Learn fundamental Latin rhythm in rock context</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">2</span>
              <div>
                <h4 className="font-medium text-red-800">"Girl from Ipanema" - Bossa Nova</h4>
                <p className="text-sm text-red-700">Master sophisticated Brazilian fingerpicking</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">3</span>
              <div>
                <h4 className="font-medium text-red-800">"Oye Como Va" - Salsa Feel</h4>
                <p className="text-sm text-red-700">Develop complex syncopated Latin rock rhythm</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">4</span>
              <div>
                <h4 className="font-medium text-red-800">"Entre Dos Aguas" - Flamenco</h4>
                <p className="text-sm text-red-700">Master complex flamenco compás and technique</p>
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
            <Link href="/lessons/songs/rhythm/shuffle" className="text-blue-600 hover:text-blue-800">
              ← Shuffle & Swing
            </Link>
            <Link href="/lessons/songs/rhythm/reggae" className="text-blue-600 hover:text-blue-800">
              Reggae & Ska →
            </Link>
          </div>
        </nav>
      </main>
      <Footer />
    </Layout>
  );
}
