import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const riffPatterns = [
  {
    name: 'Travis Picking Foundation',
    difficulty: 'Beginner',
    key: 'C',
    description: 'Basic alternating bass pattern with thumb independence',
    theory: 'Root-fifth bass movement, thumb-finger coordination, steady pulse',
    technique: 'Thumb alternation, finger independence, consistent bass line'
  },
  {
    name: 'Celtic Fingerstyle',
    difficulty: 'Intermediate',
    key: 'D',
    description: 'Traditional Celtic patterns with drone strings and modal harmony',
    theory: 'Modal scales, drone harmonies, open string utilization',
    technique: 'Open string integration, melodic embellishment, rhythm maintenance'
  },
  {
    name: 'Classical Arpeggiation',
    difficulty: 'Intermediate',
    key: 'Am',
    description: 'Classical guitar techniques adapted for steel-string fingerstyle',
    theory: 'Arpeggiated triads, voice leading, classical harmony principles',
    technique: 'Right-hand patterns, fingertip attack, tone production'
  },
  {
    name: 'Contemporary Percussive',
    difficulty: 'Advanced',
    key: 'Em',
    description: 'Modern techniques combining melody, bass, and percussion',
    theory: 'Polyrhythmic elements, harmonic overtones, extended techniques',
    technique: 'Slapping, tapping, harmonic touches, body percussion'
  },
  {
    name: 'Jazz Chord-Melody',
    difficulty: 'Advanced',
    key: 'Gmaj7',
    description: 'Sophisticated harmony with simultaneous melody and bass lines',
    theory: 'Extended chords, voice leading, melodic harmonization',
    technique: 'Multiple voice control, dynamic balance, sophisticated fingerings'
  },
  {
    name: 'Flamenco-Inspired',
    difficulty: 'Expert',
    key: 'E (Phrygian)',
    description: 'Spanish techniques with distinctive rhythmic and harmonic elements',
    theory: 'Phrygian mode, flamenco harmony, rhythmic complexity',
    technique: 'Rasgueado patterns, thumb techniques, picado elements'
  }
];

const techniques = [
  {
    name: 'Thumb Independence',
    description: 'Developing the ability to maintain steady bass patterns while fingers play melody',
    theory: 'Creates polyrhythmic texture with bass and treble voices operating independently',
    application: 'Foundation for all fingerstyle playing - bass provides harmonic rhythm while melody flows above'
  },
  {
    name: 'Voice Leading',
    description: 'Smooth melodic movement between chord tones in multiple voices',
    theory: 'Each voice (bass, inner voices, melody) moves smoothly to create flowing harmony',
    application: 'Essential for chord-melody playing and sophisticated harmonic arrangements'
  },
  {
    name: 'Harmonic Integration',
    description: 'Using natural and artificial harmonics within fingerstyle arrangements',
    theory: 'Harmonics add ethereal quality and extend the guitar\'s tonal palette',
    application: 'Creates beautiful textural contrast and allows for bell-like melodic elements'
  },
  {
    name: 'Percussive Elements',
    description: 'Incorporating rhythmic attacks and body percussion into fingerstyle playing',
    theory: 'Adds rhythmic drive and expands the guitar\'s role as a complete rhythm section',
    application: 'Modern fingerstyle often includes these elements for fuller, more dynamic arrangements'
  }
];

const arrangementStyles = [
  {
    style: 'Travis Picking',
    origin: 'Country/Folk tradition',
    characteristics: 'Alternating bass thumb with syncopated melody fingers',
    theory: 'Root-fifth bass patterns with diatonic melody, emphasis on steady pulse',
    representatives: 'Merle Travis, Chet Atkins, Doc Watson'
  },
  {
    style: 'Classical Adaptation',
    origin: 'Classical guitar tradition',
    characteristics: 'Precise arpeggiation with careful attention to voice leading',
    theory: 'Classical harmony principles, counterpoint, formal structure',
    representatives: 'Andrés Segovia influence on steel-string adaptations'
  },
  {
    style: 'Contemporary Fingerstyle',
    origin: 'Modern innovation',
    characteristics: 'Extended techniques, percussive elements, harmonics',
    theory: 'Incorporates jazz harmony, world music elements, experimental techniques',
    representatives: 'Tommy Emmanuel, Andy McKee, Preston Reed'
  },
  {
    style: 'Celtic Fingerstyle',
    origin: 'Irish/Scottish tradition',
    characteristics: 'Open tunings, drone strings, modal harmonies',
    theory: 'Modal scales, pedal tones, traditional tune arrangements',
    representatives: 'Martin Simpson, Tony McManus, El McMeen'
  }
];

const theoryConcepts = [
  {
    title: 'Counterpoint in Fingerstyle',
    content: 'Fingerstyle guitar naturally creates multiple independent voices. Understanding counterpoint helps create arrangements where each voice has melodic interest.',
    examples: [
      'Bass line provides harmonic foundation and rhythmic pulse',
      'Middle voices fill harmonic gaps and provide inner movement',
      'Melody line maintains primary musical interest and direction',
      'Each voice should be melodically satisfying independently'
    ]
  },
  {
    title: 'Open String Utilization',
    content: 'Open strings provide resonance, sustain, and unique harmonic possibilities. Strategic use creates fuller sound and enables complex fingerings.',
    examples: [
      'Drone notes - sustained open strings under changing harmony',
      'Harmonic reinforcement - open strings that match fretted notes',
      'Practical benefits - allows complex chord shapes and smooth voice leading',
      'Tonal character - creates guitar-specific harmonic colors'
    ]
  },
  {
    title: 'Arrangement Principles',
    content: 'Effective fingerstyle arrangements balance melody, harmony, and rhythm while considering the guitar\'s physical limitations and strengths.',
    examples: [
      'Melody prominence - ensure main tune remains clear and recognizable',
      'Harmonic support - provide enough harmony without cluttering the texture',
      'Rhythmic foundation - maintain steady pulse and rhythmic interest',
      'Dynamic contrast - use techniques and voicings to create musical shape'
    ]
  }
];

export default function FingerstyleRiffsPage() {
  return (
    <Layout>
      <Header
        title="Fingerstyle Riffs"
        subtitle="Master the art of combining melody, harmony, and rhythm in solo guitar arrangements"
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Introduction */}
        <section className="mb-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Complete Guitar Approach</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Multi-Voice Playing</h3>
              <p className="text-gray-600">Fingerstyle guitar allows simultaneous melody, bass, and harmony. Understanding voice leading and counterpoint principles helps create sophisticated solo arrangements.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Technical Foundation</h3>
              <p className="text-gray-600">Proper right-hand technique, thumb independence, and finger coordination are essential for executing complex fingerstyle arrangements with clarity and musicality.</p>
            </div>
          </div>
        </section>

        {/* Essential Riff Patterns */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Fingerstyle Patterns</h2>
          <div className="grid gap-6">
            {riffPatterns.map((riff, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{riff.name}</h3>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        {riff.difficulty}
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        Key: {riff.key}
                      </span>
                    </div>
                  </div>
                  <span className="text-2xl">🖐️</span>
                </div>
                
                <p className="text-gray-700 mb-4">{riff.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Theory Focus</h4>
                    <p className="text-gray-600">{riff.theory}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Technique</h4>
                    <p className="text-gray-600">{riff.technique}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Techniques */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Fingerstyle Techniques</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {techniques.map((technique, index) => (
              <div key={index} className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-emerald-900 mb-3">{technique.name}</h3>
                <p className="text-emerald-800 mb-3">{technique.description}</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-emerald-900">Theory:</span>
                    <span className="text-emerald-700 ml-2">{technique.theory}</span>
                  </div>
                  <div>
                    <span className="font-medium text-emerald-900">Application:</span>
                    <span className="text-emerald-700 ml-2">{technique.application}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Arrangement Styles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Fingerstyle Arrangement Styles</h2>
          <div className="grid gap-6">
            {arrangementStyles.map((style, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{style.style}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
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
                    <h4 className="font-medium text-gray-800 mb-1">Key Artists</h4>
                    <p className="text-gray-600">{style.representatives}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Theory Deep Dive */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Arrangement Theory</h2>
          <div className="space-y-6">
            {theoryConcepts.map((concept, index) => (
              <div key={index} className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-3">{concept.title}</h3>
                <p className="text-green-800 mb-4">{concept.content}</p>
                <div>
                  <h4 className="font-medium text-green-900 mb-2">Key Principles:</h4>
                  <ul className="space-y-1 text-sm text-green-700">
                    {concept.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Example */}
        <section className="mb-12 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-emerald-900 mb-4">🎸 Case Study: "Blackbird" by The Beatles</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-medium text-emerald-800 mb-2">Arrangement Analysis</h4>
              <p className="text-emerald-700 mb-3">Uses alternating bass pattern with single-note melody lines. The arrangement cleverly uses open strings and strategic fingerings to create smooth voice leading.</p>
              <p className="text-emerald-700"><strong>Theory:</strong> G major with chromatic bass movement and melody that outlines chord tones while maintaining independence from bass line.</p>
            </div>
            <div>
              <h4 className="font-medium text-emerald-800 mb-2">Technical Elements</h4>
              <p className="text-emerald-700 mb-3">Demonstrates perfect thumb independence with steady bass pattern while fingers execute melodic phrases. Uses natural guitar resonance through open strings.</p>
              <p className="text-emerald-700"><strong>Learning Value:</strong> Excellent introduction to fingerstyle arrangement principles and thumb-finger independence.</p>
            </div>
          </div>
        </section>

        {/* Practice Progression */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Fingerstyle Learning Path</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-800 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-blue-900 mb-2">Basic Patterns</h3>
              <p className="text-blue-700 text-sm">Develop thumb independence with simple alternating bass patterns while fingers play basic melodies.</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-800 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-green-900 mb-2">Voice Independence</h3>
              <p className="text-green-700 text-sm">Learn to control multiple voices simultaneously with attention to voice leading and harmonic progression.</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-yellow-800 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-yellow-900 mb-2">Full Arrangements</h3>
              <p className="text-yellow-700 text-sm">Create complete solo guitar arrangements incorporating melody, harmony, and bass lines.</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-800 font-bold">4</span>
              </div>
              <h3 className="font-semibold text-purple-900 mb-2">Advanced Techniques</h3>
              <p className="text-purple-700 text-sm">Incorporate harmonics, percussive elements, and extended techniques for modern fingerstyle expression.</p>
            </div>
          </div>
        </section>

        {/* Practice Tips */}
        <section className="mb-12 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-yellow-900 mb-4">🎯 Essential Practice Tips</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-medium text-yellow-800 mb-2">Right-Hand Development</h4>
              <ul className="space-y-1 text-yellow-700">
                <li>• Practice thumb patterns independently before adding melody</li>
                <li>• Use metronome to develop steady, consistent bass lines</li>
                <li>• Focus on clean finger attack and tone production</li>
                <li>• Develop finger independence through targeted exercises</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-yellow-800 mb-2">Arrangement Approach</h4>
              <ul className="space-y-1 text-yellow-700">
                <li>• Start with simple melodies over basic bass patterns</li>
                <li>• Add harmony gradually, maintaining melodic clarity</li>
                <li>• Use open strings strategically for resonance and ease</li>
                <li>• Practice each voice separately before combining</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="text-center">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Continue Your Riff Journey</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/lessons/songs/riffs/jazz"
                className="px-4 py-2 bg-white border border-purple-200 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors"
              >
                ← Jazz Riffs
              </Link>
              <Link 
                href="/lessons/songs/riffs"
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                All Riff Types
              </Link>
              <Link 
                href="/lessons/songs/riffs/slide"
                className="px-4 py-2 bg-white border border-purple-200 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors"
              >
                Slide Riffs →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
