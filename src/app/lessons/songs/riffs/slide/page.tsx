import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const riffPatterns = [
  {
    name: 'Basic Open Slide',
    difficulty: 'Beginner',
    key: 'Open G',
    description: 'Foundation slide techniques using open G tuning with basic position slides',
    theory: 'Open tuning harmonics, major triad relationships, position awareness',
    technique: 'Slide contact, intonation, vibrato, string dampening'
  },
  {
    name: 'Delta Blues Patterns',
    difficulty: 'Intermediate',
    key: 'Open D',
    description: 'Traditional Delta blues slide licks and turnarounds',
    theory: 'Blues scale applications, 12-bar structure, call-and-response patterns',
    technique: 'Slide articulation, palm muting, rhythmic precision'
  },
  {
    name: 'Hawaiian Steel Influence',
    difficulty: 'Intermediate',
    key: 'Open C',
    description: 'Melodic slide approaches derived from Hawaiian steel guitar traditions',
    theory: 'Chromatic harmony, pedal steel concepts, voice leading through slides',
    technique: 'Smooth glissando, harmonic clarity, melodic phrasing'
  },
  {
    name: 'Rock Slide Lead',
    difficulty: 'Advanced',
    key: 'Standard/Open',
    description: 'Aggressive slide techniques for rock and blues-rock contexts',
    theory: 'Pentatonic scales, power chord relationships, harmonic intervals',
    technique: 'Aggressive attack, string bending integration, effects usage'
  },
  {
    name: 'Lap Steel Adaptations',
    difficulty: 'Advanced',
    key: 'Various Open',
    description: 'Adapting lap steel techniques to standard guitar slide playing',
    theory: 'Complex chord voicings, harmonic series utilization, interval relationships',
    technique: 'Multi-string slides, chord blocking, advanced dampening'
  },
  {
    name: 'Microtonal Expression',
    difficulty: 'Expert',
    key: 'Various',
    description: 'Using slide for precise pitch bending and microtonal effects',
    theory: 'Just intonation, blue notes, non-tempered intervals',
    technique: 'Precise pitch control, expressive bending, tonal manipulation'
  }
];

const tunings = [
  {
    name: 'Open G (DGDGBD)',
    description: 'Most popular slide tuning, provides major triad across all strings',
    theory: 'G major triad: G-B-D intervals naturally align with slide positions',
    advantages: 'Easy chord forms, natural harmonics, familiar key relationships',
    challenges: 'Limited to G major family without repositioning'
  },
  {
    name: 'Open D (DADF#AD)',
    description: 'Delta blues favorite, deeper resonance than Open G',
    theory: 'D major triad with strong fundamental frequencies',
    advantages: 'Rich low end, powerful for blues, many classic songs use this tuning',
    challenges: 'String tension differences, requires careful setup'
  },
  {
    name: 'Open E (EBEG#BE)',
    description: 'Standard tuning raised to open E chord',
    theory: 'E major triad, familiar relationships from standard tuning',
    advantages: 'Can use standard tuning knowledge, bright sound',
    challenges: 'High string tension, requires lighter gauge strings'
  },
  {
    name: 'Vestapol/Open D Minor',
    description: 'Open D tuning lowered to minor (DADFAD)',
    theory: 'Minor triad creates different harmonic possibilities',
    advantages: 'Natural minor chord access, haunting sound quality',
    challenges: 'Less common, fewer reference songs'
  }
];

const slidePhysics = [
  {
    concept: 'Intonation and the Fret',
    description: 'Slide must be positioned directly over the fret wire, not between frets',
    theory: 'Fret wire position creates the proper string length for accurate pitch',
    application: 'Visual reference using fret markers, develop muscle memory for positions'
  },
  {
    concept: 'String Contact Pressure',
    description: 'Slide should barely touch strings - just enough to make contact',
    theory: 'Excessive pressure creates sharp pitch and poor tone quality',
    application: 'Practice with minimal pressure, let slide weight do the work'
  },
  {
    concept: 'Harmonic Series Access',
    description: 'Open tunings align with natural harmonic series for richer resonance',
    theory: 'Open strings create harmonic relationships that reinforce fundamental frequencies',
    application: 'Utilize natural harmonics at 12th, 7th, and 5th frets for bell-like tones'
  },
  {
    concept: 'Vibrato and Expression',
    description: 'Side-to-side motion creates vibrato while maintaining pitch center',
    theory: 'Controlled pitch variation adds emotional expression without losing intonation',
    application: 'Practice consistent vibrato speed and width for musical effect'
  }
];

const theoryConcepts = [
  {
    title: 'Open Tuning Harmony',
    content: 'Open tunings create natural chord voicings that are impossible in standard tuning. Understanding the harmonic relationships helps navigate the fretboard effectively.',
    examples: [
      'Open G: Barre at any fret creates major chord',
      'Partial barres create different chord qualities',
      'Natural harmonics align with open tuning intervals',
      'Drone strings provide harmonic pedal tones'
    ]
  },
  {
    title: 'Slide as Expressive Tool',
    content: 'Slide guitar excels at pitch bending, glissando effects, and microtonal expression that fixed-fret instruments cannot achieve.',
    examples: [
      'Blue notes - pitches between semitones',
      'Glissando - smooth pitch transitions',
      'Portamento - expressive pitch slides',
      'Microtonal bending for emotional effect'
    ]
  },
  {
    title: 'Rhythmic Integration',
    content: 'Slide playing must integrate with rhythm section while maintaining the unique expressive qualities of the slide technique.',
    examples: [
      'Slide attacks can emphasize rhythmic accents',
      'Sustained notes create rhythmic contrast',
      'Glissando effects can bridge rhythmic gaps',
      'Palm muting provides rhythmic punctuation'
    ]
  }
];

export default function SlideRiffsPage() {
  return (
    <Layout>
      <Header
        title="Slide Riffs"
        subtitle="Explore the expressive world of slide guitar through open tunings and advanced techniques"
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Introduction */}
        <section className="mb-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Voice of Expression</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Unique Tonal Possibilities</h3>
              <p className="text-gray-600">Slide guitar offers unparalleled expressive capabilities through continuous pitch variation, open tuning harmonies, and the ability to access microtonal intervals impossible on fretted instruments.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Technical Foundation</h3>
              <p className="text-gray-600">Mastering slide requires understanding of intonation, string dampening, open tuning theory, and the physical principles that govern slide contact and tone production.</p>
            </div>
          </div>
        </section>

        {/* Essential Riff Patterns */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Slide Riff Patterns</h2>
          <div className="grid gap-6">
            {riffPatterns.map((riff, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{riff.name}</h3>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                        {riff.difficulty}
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {riff.key}
                      </span>
                    </div>
                  </div>
                  <span className="text-2xl">🧊</span>
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

        {/* Open Tunings */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Open Tunings</h2>
          <div className="grid gap-6">
            {tunings.map((tuning, index) => (
              <div key={index} className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-orange-900 mb-2">{tuning.name}</h3>
                <p className="text-orange-800 mb-3">{tuning.description}</p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-orange-900 mb-1">Theory</h4>
                    <p className="text-orange-700">{tuning.theory}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-orange-900 mb-1">Advantages</h4>
                    <p className="text-orange-700">{tuning.advantages}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-orange-900 mb-1">Challenges</h4>
                    <p className="text-orange-700">{tuning.challenges}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Slide Physics */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Slide Technique Physics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {slidePhysics.map((physics, index) => (
              <div key={index} className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">{physics.concept}</h3>
                <p className="text-blue-800 mb-3">{physics.description}</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-blue-900">Physics:</span>
                    <span className="text-blue-700 ml-2">{physics.theory}</span>
                  </div>
                  <div>
                    <span className="font-medium text-blue-900">Application:</span>
                    <span className="text-blue-700 ml-2">{physics.application}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Theory Deep Dive */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Slide Guitar Theory</h2>
          <div className="space-y-6">
            {theoryConcepts.map((concept, index) => (
              <div key={index} className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-amber-900 mb-3">{concept.title}</h3>
                <p className="text-amber-800 mb-4">{concept.content}</p>
                <div>
                  <h4 className="font-medium text-amber-900 mb-2">Key Applications:</h4>
                  <ul className="space-y-1 text-sm text-amber-700">
                    {concept.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-amber-500 mr-2">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Famous Examples */}
        <section className="mb-12 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-orange-900 mb-4">🎸 Legendary Slide Performances</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-medium text-orange-800 mb-2">"Duane Allman - Layla (Unplugged)"</h4>
              <p className="text-orange-700 mb-3">Demonstrates sophisticated slide melody over complex chord changes, showing how slide can work in non-blues contexts.</p>
              <p className="text-orange-700"><strong>Theory:</strong> Uses slide to create smooth voice leading over jazz-influenced chord progressions while maintaining rock sensibility.</p>
            </div>
            <div>
              <h4 className="font-medium text-orange-800 mb-2">"Robert Johnson - Cross Road Blues"</h4>
              <p className="text-orange-700 mb-3">Perfect example of Delta blues slide integration with rhythm playing in Open G tuning.</p>
              <p className="text-orange-700"><strong>Theory:</strong> Demonstrates how slide can provide both melodic content and harmonic accompaniment simultaneously.</p>
            </div>
          </div>
        </section>

        {/* Equipment Considerations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Equipment and Setup</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Slide Material</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Glass:</strong> Bright, clear tone with smooth feel</p>
                <p><strong>Metal:</strong> Warmer tone with more sustain</p>
                <p><strong>Ceramic:</strong> Balanced characteristics, good for beginners</p>
                <p><strong>Weight:</strong> Heavier slides require less pressure</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">String Setup</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Action:</strong> Higher action prevents fret contact</p>
                <p><strong>Gauge:</strong> Medium-heavy strings for stability</p>
                <p><strong>Intonation:</strong> Critical for slide accuracy</p>
                <p><strong>Nut height:</strong> Affects open string clarity</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Amplification</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Compression:</strong> Evens out slide dynamics</p>
                <p><strong>Reverb:</strong> Enhances sustain and ambience</p>
                <p><strong>Volume control:</strong> Essential for slide expression</p>
                <p><strong>Clean headroom:</strong> Prevents unwanted distortion</p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Progression */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Slide Learning Progression</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-800 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-green-900 mb-2">Basic Intonation</h3>
              <p className="text-green-700 text-sm">Master slide placement over frets and develop clean intonation with simple single-note exercises.</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-yellow-800 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-yellow-900 mb-2">Open Tuning Navigation</h3>
              <p className="text-yellow-700 text-sm">Learn open tuning chord positions and basic slide scales for melodic and harmonic playing.</p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 text-center">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-800 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-orange-900 mb-2">Style Integration</h3>
              <p className="text-orange-700 text-sm">Apply slide techniques to blues, rock, and country styles with appropriate rhythmic and harmonic context.</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-800 font-bold">4</span>
              </div>
              <h3 className="font-semibold text-purple-900 mb-2">Advanced Expression</h3>
              <p className="text-purple-700 text-sm">Develop sophisticated vibrato, microtonal techniques, and integration with standard fretting techniques.</p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="text-center">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Complete Your Riff Journey</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/lessons/songs/riffs/fingerstyle"
                className="px-4 py-2 bg-white border border-purple-200 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors"
              >
                ← Fingerstyle Riffs
              </Link>
              <Link 
                href="/lessons/songs/riffs"
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                All Riff Types
              </Link>
              <Link 
                href="/lessons/songs"
                className="px-4 py-2 bg-white border border-purple-200 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors"
              >
                Back to Songs →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
