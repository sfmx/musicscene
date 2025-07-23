import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fingerpickingPatterns = [
  {
    name: 'Basic P-I-M-A Pattern',
    difficulty: 'Beginner',
    description: 'Foundation four-finger pattern using thumb, index, middle, and ring fingers',
    theory: 'Sequential finger assignment, consistent timing, finger independence',
    technique: 'Proper hand position, finger curvature, nail/fingertip attack',
    musicalContext: 'Classical guitar foundation, acoustic ballads, folk music',
    songs: ['"Blackbird" - Beatles', '"Dust in the Wind" - Kansas']
  },
  {
    name: 'Travis Picking',
    difficulty: 'Intermediate',
    description: 'Alternating bass thumb with syncopated melody fingers',
    theory: 'Root-fifth bass patterns, melody over bass, polyrhythmic coordination',
    technique: 'Thumb independence, finger syncopation, consistent bass pulse',
    musicalContext: 'Country, folk, fingerstyle blues, acoustic arrangements',
    songs: ['"The Boxer" - Simon & Garfunkel', '"Never Going Back Again" - Fleetwood Mac']
  },
  {
    name: 'Classical Arpeggios',
    difficulty: 'Intermediate',
    description: 'Systematic broken chord patterns in classical style',
    theory: 'Chord tone sequences, voice leading, harmonic rhythm',
    technique: 'Rest strokes, free strokes, consistent tone production',
    musicalContext: 'Classical guitar repertoire, romantic ballads, sophisticated pop',
    songs: ['Bach "Bourée in E minor"', '"Romance Anónimo"']
  },
  {
    name: 'Flamenco Picado',
    difficulty: 'Advanced',
    description: 'Rapid single-note passages using alternating index and middle fingers',
    theory: 'Scalar passages, melodic development, rhythmic precision',
    technique: 'Rest stroke technique, finger strength, speed development',
    musicalContext: 'Flamenco guitar, Spanish classical, rapid melodic passages',
    songs: ['Traditional flamenco falsetas', 'Paco de Lucía compositions']
  },
  {
    name: 'Contemporary Percussive',
    difficulty: 'Advanced',
    description: 'Modern fingerstyle combining melody, bass, and percussion',
    theory: 'Polyrhythmic elements, harmonic extensions, textural variety',
    technique: 'Slapping, tapping, harmonic touches, body percussion',
    musicalContext: 'Modern fingerstyle, acoustic instrumental music, fusion',
    songs: ['"Drifting" - Andy McKee', '"Tight Trite Night" - Tommy Emmanuel']
  },
  {
    name: 'Celtic Fingerstyle',
    difficulty: 'Intermediate',
    description: 'Traditional Celtic patterns with drone strings and modal harmony',
    theory: 'Modal scales, drone harmonies, traditional tune structures',
    technique: 'Open string integration, ornamental techniques, rhythmic drive',
    musicalContext: 'Irish traditional music, Celtic fusion, folk arrangements',
    songs: ['"She Moved Through the Fair"', '"The Water is Wide"']
  }
];

const rightHandTechniques = [
  {
    name: 'Rest Stroke (Apoyando)',
    description: 'Finger follows through to rest on adjacent string',
    theory: 'Produces fuller tone and greater volume through string contact',
    application: 'Melody lines, important bass notes, classical technique',
    advantages: 'Strong tone, good control, classical precision'
  },
  {
    name: 'Free Stroke (Tirando)',
    description: 'Finger moves freely away from strings without contact',
    theory: 'Allows simultaneous playing of multiple strings',
    application: 'Arpeggios, chord playing, contemporary styles',
    advantages: 'Speed, multiple voices, modern versatility'
  },
  {
    name: 'Nail Technique',
    description: 'Using fingernails for bright, projecting tone',
    theory: 'Nail length and shape affect tone quality and technique',
    application: 'Classical guitar, contemporary fingerstyle, projection',
    advantages: 'Bright tone, projection, articulation clarity'
  },
  {
    name: 'Flesh Technique',
    description: 'Using fingertips without nails for warm tone',
    theory: 'Softer attack creates warmer, more intimate sound',
    application: 'Folk music, intimate settings, warm tonal colors',
    advantages: 'Warm tone, easy maintenance, natural feel'
  }
];

const fingerpickingStyles = [
  {
    style: 'Classical Guitar',
    origin: 'European classical tradition',
    characteristics: 'Precise technique, formal structure, complex polyphony',
    theory: 'Classical harmony, counterpoint, voice leading principles',
    technique: 'Rest and free strokes, nail technique, formal positioning',
    repertoire: 'Bach, Tárrega, Villa-Lobos, modern classical composers'
  },
  {
    style: 'Fingerstyle Blues',
    origin: 'American blues tradition',
    characteristics: 'Alternating bass, blue notes, call-and-response',
    theory: 'Blues scales, 12-bar progressions, bending integration',
    technique: 'Thumb independence, finger bending, percussive elements',
    repertoire: 'Mississippi John Hurt, Blind Blake, modern blues fingerstyle'
  },
  {
    style: 'Contemporary Fingerstyle',
    origin: 'Modern acoustic guitar movement',
    characteristics: 'Extended techniques, percussive elements, harmonics',
    theory: 'Jazz harmony, world music influences, experimental approaches',
    technique: 'Tapping, slapping, harmonics, body percussion',
    repertoire: 'Michael Hedges, Preston Reed, Andy McKee, Tommy Emmanuel'
  },
  {
    style: 'Bossa Nova',
    origin: 'Brazilian music tradition',
    characteristics: 'Subtle rhythm, jazz harmony, melodic sophistication',
    theory: 'Brazilian rhythm, jazz chord extensions, syncopation',
    technique: 'Subtle dynamics, chord-melody, rhythmic precision',
    repertoire: 'João Gilberto, Baden Powell, modern Brazilian guitarists'
  }
];

const theoryConcepts = [
  {
    title: 'Fingerpicking Independence',
    content: 'Developing independent finger control allows simultaneous melody, harmony, and bass lines. This polyrhythmic capability makes fingerstyle guitar a complete musical instrument.',
    examples: [
      'Thumb maintains steady bass line while fingers play melody',
      'Different fingers can play at different dynamics simultaneously',
      'Polyrhythmic patterns create complex musical textures',
      'Voice leading principles apply to multiple simultaneous voices'
    ]
  },
  {
    title: 'Arrangement Principles',
    content: 'Effective fingerstyle arrangements balance melody prominence, harmonic support, and rhythmic foundation while considering the guitar\'s physical capabilities and resonant qualities.',
    examples: [
      'Melody on higher strings for prominence and clarity',
      'Bass lines on lower strings for harmonic foundation',
      'Middle voices fill harmonic gaps without cluttering',
      'Open strings provide resonance and facilitate complex fingerings'
    ]
  },
  {
    title: 'Tone Production in Fingerstyle',
    content: 'Fingerstyle tone production involves multiple factors: finger attack angle, nail shape and length, string contact point, and dynamic control across different fingers.',
    examples: [
      'Attack angle affects brightness vs. warmth',
      'Nail shape influences tone consistency and projection',
      'Bridge vs. sound hole positioning changes tonal character',
      'Individual finger dynamics create musical balance'
    ]
  }
];

export default function FingerpickingTechniquesPage() {
  return (
    <Layout>
      <Header
        title="Fingerpicking Patterns"
        subtitle="Master the art of fingerstyle guitar through classical and contemporary approaches"
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Introduction */}
        <section className="mb-12 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Complete Guitar Experience</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Multi-Voice Capability</h3>
              <p className="text-gray-600">Fingerpicking allows simultaneous melody, bass, and harmony, making the guitar a complete musical instrument capable of sophisticated arrangements and solo performances.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Technical Precision</h3>
              <p className="text-gray-600">Proper fingerpicking technique requires precise finger independence, consistent tone production, and understanding of classical and contemporary approaches to fingerstyle playing.</p>
            </div>
          </div>
        </section>

        {/* Essential Fingerpicking Patterns */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Fingerpicking Patterns</h2>
          <div className="grid gap-6">
            {fingerpickingPatterns.map((pattern, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{pattern.name}</h3>
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-sm">
                      {pattern.difficulty}
                    </span>
                  </div>
                  <span className="text-2xl">🤚</span>
                </div>
                
                <p className="text-gray-700 mb-4">{pattern.description}</p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Theory</h4>
                    <p className="text-gray-600">{pattern.theory}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Technique</h4>
                    <p className="text-gray-600">{pattern.technique}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Musical Context</h4>
                    <p className="text-gray-600">{pattern.musicalContext}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Example Songs</h4>
                    <ul className="text-gray-600">
                      {pattern.songs.map((song, idx) => (
                        <li key={idx}>• {song}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Right Hand Techniques */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Right Hand Techniques</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {rightHandTechniques.map((technique, index) => (
              <div key={index} className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">{technique.name}</h3>
                <p className="text-green-800 mb-3">{technique.description}</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-green-900">Theory:</span>
                    <span className="text-green-700 ml-2">{technique.theory}</span>
                  </div>
                  <div>
                    <span className="font-medium text-green-900">Application:</span>
                    <span className="text-green-700 ml-2">{technique.application}</span>
                  </div>
                  <div>
                    <span className="font-medium text-green-900">Advantages:</span>
                    <span className="text-green-700 ml-2">{technique.advantages}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fingerpicking Styles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Fingerpicking Styles</h2>
          <div className="grid gap-6">
            {fingerpickingStyles.map((style, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{style.style}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Origin</h4>
                    <p className="text-gray-600">{style.origin}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Characteristics</h4>
                    <p className="text-gray-600">{style.characteristics}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Theory</h4>
                    <p className="text-gray-600">{style.theory}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Technique</h4>
                    <p className="text-gray-600">{style.technique}</p>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="font-medium text-gray-800 mb-1">Key Repertoire</h4>
                    <p className="text-gray-600">{style.repertoire}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Theory Deep Dive */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Fingerpicking Theory</h2>
          <div className="space-y-6">
            {theoryConcepts.map((concept, index) => (
              <div key={index} className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-emerald-900 mb-3">{concept.title}</h3>
                <p className="text-emerald-800 mb-4">{concept.content}</p>
                <div>
                  <h4 className="font-medium text-emerald-900 mb-2">Key Principles:</h4>
                  <ul className="space-y-1 text-sm text-emerald-700">
                    {concept.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Fingerpicking Development Path</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-800 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-blue-900 mb-2">Basic Patterns</h3>
              <p className="text-blue-700 text-sm">Master simple P-I-M-A patterns and develop finger independence with consistent timing.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-800 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-green-900 mb-2">Thumb Independence</h3>
              <p className="text-green-700 text-sm">Develop Travis picking and alternating bass patterns while maintaining melody lines.</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-yellow-800 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-yellow-900 mb-2">Style Integration</h3>
              <p className="text-yellow-700 text-sm">Apply techniques to classical, folk, and contemporary fingerstyle repertoire.</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-800 font-bold">4</span>
              </div>
              <h3 className="font-semibold text-purple-900 mb-2">Advanced Techniques</h3>
              <p className="text-purple-700 text-sm">Master percussive techniques, harmonics, and complex contemporary fingerstyle approaches.</p>
            </div>
          </div>
        </section>

        {/* Featured Example */}
        <section className="mb-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-green-900 mb-4">🎸 Case Study: "Blackbird" Fingerpicking Pattern</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-medium text-green-800 mb-2">Pattern Analysis</h4>
              <p className="text-green-700 mb-3">Uses alternating bass with single-note melody lines. The thumb maintains steady quarter notes while fingers execute the chromatic melody line with perfect independence.</p>
              <p className="text-green-700"><strong>Technique:</strong> Thumb plays bass notes on beats 1 and 3, fingers play melody with chromatic movement.</p>
            </div>
            <div>
              <h4 className="font-medium text-green-800 mb-2">Musical Function</h4>
              <p className="text-green-700 mb-3">The arrangement creates a complete musical texture with bass line providing harmonic foundation and melody line carrying the song's main theme.</p>
              <p className="text-green-700"><strong>Learning Value:</strong> Perfect introduction to thumb independence and demonstrates how fingerpicking can create complete musical arrangements.</p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="text-center">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Continue Your Technique Journey</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/lessons/songs/techniques/lead"
                className="px-4 py-2 bg-white border border-green-200 text-green-700 rounded-lg hover:bg-green-50 transition-colors"
              >
                ← Lead Techniques
              </Link>
              <Link 
                href="/lessons/songs/techniques"
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                All Techniques
              </Link>
              <Link 
                href="/lessons/songs/techniques/percussive"
                className="px-4 py-2 bg-white border border-green-200 text-green-700 rounded-lg hover:bg-green-50 transition-colors"
              >
                Percussive Techniques →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
