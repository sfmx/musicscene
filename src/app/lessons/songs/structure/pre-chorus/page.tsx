import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const preChorusFunctions = [
  {
    function: 'Tension Building',
    description: 'Creates harmonic and rhythmic momentum toward the chorus',
    techniques: ['Ascending bass lines', 'Increased subdivision', 'Sequential progressions', 'Vocal range expansion'],
    theory: 'Often uses progressions that avoid tonic, building expectation for chorus resolution'
  },
  {
    function: 'Dynamic Bridge',
    description: 'Transitions energy level from verse to chorus',
    techniques: ['Gradual volume increase', 'Instrumental additions', 'Rhythmic intensification'],
    theory: 'Serves as musical "ramp" between contrasting energy levels'
  },
  {
    function: 'Harmonic Preparation',
    description: 'Sets up the harmonic context for the chorus',
    techniques: ['Dominant prolongation', 'Circle of fifths movement', 'Secondary dominants'],
    theory: 'Establishes dominant or predominant harmony to make chorus tonic arrival powerful'
  },
  {
    function: 'Lyrical Setup',
    description: 'Provides narrative or emotional setup for chorus message',
    techniques: ['Question-answer structure', 'Emotional escalation', 'Perspective shift'],
    theory: 'Creates lyrical momentum that makes chorus feel inevitable and necessary'
  }
];

const commonProgressions = [
  {
    name: 'Dominant Prolongation',
    progression: 'V/V - V - V7',
    example: 'D - G - G7 (in C major)',
    function: 'Extends dominant harmony to build maximum tension',
    resolution: 'Resolves powerfully to I in chorus',
    usage: 'When strong, decisive chorus entry is needed'
  },
  {
    name: 'Ascending Sequential',
    progression: 'vi - IV - V - V/V',
    example: 'Am - F - G - D (in C major)',
    function: 'Builds through circle of fifths motion',
    resolution: 'Natural momentum leads to chorus',
    usage: 'Creates sense of inevitable forward motion'
  },
  {
    name: 'Chromatic Ascent',
    progression: 'I - ♭II - ii - V',
    example: 'C - D♭ - Dm - G (in C major)',
    function: 'Half-step bass motion creates rising energy',
    resolution: 'Strong V-I cadence into chorus',
    usage: 'When dramatic build is desired'
  },
  {
    name: 'Relative Minor Escape',
    progression: 'vi - IV - V',
    example: 'Am - F - G (in C major)',
    function: 'Starts in relative minor, moves to dominant preparation',
    resolution: 'Brightness of major chorus feels like emergence',
    usage: 'When contrast between dark pre-chorus and bright chorus is wanted'
  }
];

const preChorusCharacteristics = [
  {
    aspect: 'Length',
    typical: '2-8 bars',
    consideration: 'Long enough to build momentum, short enough to maintain urgency',
    examples: ['4 bars most common', '8 bars for extended builds', '2 bars for quick transitions']
  },
  {
    aspect: 'Harmonic Rhythm',
    typical: 'Faster than verse, similar to or slower than chorus',
    consideration: 'Should accelerate harmonic motion toward chorus',
    examples: ['One chord per beat vs. verse two beats per chord', 'Faster changes create urgency']
  },
  {
    aspect: 'Melodic Range',
    typical: 'Higher than verse, approaches or exceeds chorus range',
    consideration: 'Bridges the vocal register gap between sections',
    examples: ['Ascending melodic lines', 'Gradual range expansion', 'Peak notes approach chorus']
  },
  {
    aspect: 'Rhythmic Density',
    typical: 'Increased subdivision and activity',
    consideration: 'More active than verse to build energy',
    examples: ['Eighth notes vs. quarter notes', 'Drum fills', 'Busier bass lines']
  }
];

const structuralVariations = [
  {
    type: 'Standard Pre-Chorus',
    structure: 'Verse → Pre-Chorus → Chorus',
    description: 'Traditional placement between verse and chorus',
    usage: 'Most common in pop, rock, and contemporary music',
    effect: 'Smooth energy transition and harmonic preparation'
  },
  {
    type: 'Double Pre-Chorus',
    structure: 'Verse → Pre-Chorus 1 → Pre-Chorus 2 → Chorus',
    description: 'Two distinct pre-chorus sections with building intensity',
    usage: 'Epic ballads, progressive rock, dramatic builds',
    effect: 'Extended tension building for maximum chorus impact'
  },
  {
    type: 'Pre-Chorus Only',
    structure: 'Verse → Pre-Chorus → Verse → Chorus',
    description: 'Pre-chorus appears before some but not all choruses',
    usage: 'When different approaches to chorus are desired',
    effect: 'Creates structural variation and surprise'
  },
  {
    type: 'Extended Pre-Chorus',
    structure: 'Verse → Extended Pre-Chorus → Chorus',
    description: 'Longer pre-chorus with internal development',
    usage: 'Progressive music, complex arrangements',
    effect: 'Substantial bridge between verse and chorus energies'
  }
];

export default function PreChorusStructurePage() {
  return (
    <Layout>
      <Header
        title="Pre-Chorus Structure Analysis"
        subtitle="Understanding how pre-choruses build harmonic and rhythmic momentum toward the chorus"
      />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Navigation */}
        <section className="bg-blue-50 rounded-lg p-4 mb-8">
          <Link href="/lessons/songs/structure" className="text-blue-600 hover:text-blue-800 text-sm">
            ← Back to Song Structure
          </Link>
        </section>

        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Pre-Chorus: Building Momentum and Expectation</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The pre-chorus serves as a crucial transitional section that bridges the gap between verse and chorus, 
              both harmonically and energetically. It creates momentum, builds tension, and sets up the chorus for 
              maximum impact. Understanding pre-chorus construction reveals how composers create forward motion and 
              make chorus arrivals feel both inevitable and exciting.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-cyan-200">
                <div className="text-cyan-600 text-2xl mb-2">⚡</div>
                <h3 className="font-semibold text-gray-900 mb-2">Tension Building</h3>
                <p className="text-gray-600 text-sm">Creates harmonic and rhythmic momentum</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-cyan-200">
                <div className="text-cyan-600 text-2xl mb-2">🌉</div>
                <h3 className="font-semibold text-gray-900 mb-2">Energy Bridge</h3>
                <p className="text-gray-600 text-sm">Transitions between verse and chorus energy levels</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-cyan-200">
                <div className="text-cyan-600 text-2xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-900 mb-2">Chorus Setup</h3>
                <p className="text-gray-600 text-sm">Prepares harmonic and emotional context for chorus</p>
              </div>
            </div>
          </div>
        </section>

        {/* Functions of Pre-Choruses */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Essential Functions of Pre-Choruses</h2>
          <div className="grid gap-6">
            {preChorusFunctions.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-cyan-300 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.function}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Common Techniques</h4>
                    <ul className="space-y-1">
                      {item.techniques.map((technique, i) => (
                        <li key={i} className="text-gray-700 text-sm flex items-center gap-2">
                          <span className="text-cyan-500">•</span>
                          {technique}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-cyan-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Theory</h4>
                    <p className="text-gray-700 text-sm">{item.theory}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pre-Chorus Characteristics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Pre-Chorus Characteristics</h2>
          <div className="grid gap-6">
            {preChorusCharacteristics.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.aspect}</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Typical Range</h4>
                    <p className="text-gray-700 text-sm">{item.typical}</p>
                  </div>
                  <div className="bg-cyan-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Key Consideration</h4>
                    <p className="text-gray-700 text-sm">{item.consideration}</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Examples</h4>
                    <ul className="space-y-1">
                      {item.examples.map((example, i) => (
                        <li key={i} className="text-gray-700 text-xs">{example}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Pre-Chorus Progressions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Effective Pre-Chorus Progressions</h2>
          <div className="space-y-6">
            {commonProgressions.map((prog, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-4">
                  <h3 className="text-xl font-bold text-white">{prog.name}</h3>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Progression</h4>
                      <div className="font-mono text-sm">{prog.progression}</div>
                      <div className="text-xs text-gray-600 mt-2">Example: {prog.example}</div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Best Used When</h4>
                      <p className="text-gray-700 text-sm">{prog.usage}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-cyan-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Harmonic Function</h4>
                      <p className="text-gray-700 text-sm">{prog.function}</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Chorus Resolution</h4>
                      <p className="text-gray-700 text-sm">{prog.resolution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Structural Variations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Pre-Chorus Structural Variations</h2>
          <div className="grid gap-6">
            {structuralVariations.map((variation, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{variation.type}</h3>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Structure</h4>
                  <div className="font-mono text-sm">{variation.structure}</div>
                </div>
                
                <p className="text-gray-700 mb-4">{variation.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Common In</h4>
                    <p className="text-gray-700 text-sm">{variation.usage}</p>
                  </div>
                  <div className="bg-cyan-50 rounded-lg p-3">
                    <h4 className="font-medium text-gray-900 mb-2">Musical Effect</h4>
                    <p className="text-gray-700 text-sm">{variation.effect}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Advanced Techniques */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Advanced Pre-Chorus Techniques</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🎵 Vocal Range Expansion</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-mono text-sm">Verse: C4-G4 → Pre-chorus: G4-C5</div>
                  <div className="text-xs text-gray-600 mt-1">Gradual upward movement</div>
                </div>
                <p className="text-gray-700 text-sm">
                  Systematically expanding vocal range through the pre-chorus builds 
                  excitement and sets up chorus high notes naturally.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🥁 Rhythmic Acceleration</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-mono text-sm">♩ ♩ → ♪ ♪ ♪ ♪ → ♬ ♬ ♬ ♬</div>
                  <div className="text-xs text-gray-600 mt-1">Increasing subdivision density</div>
                </div>
                <p className="text-gray-700 text-sm">
                  Progressive increase in rhythmic activity creates forward momentum 
                  and makes the chorus arrival feel like a release.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🎹 Harmonic Acceleration</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-mono text-sm">2 chords/bar → 1 chord/bar → 2 chords/bar</div>
                  <div className="text-xs text-gray-600 mt-1">Faster harmonic rhythm</div>
                </div>
                <p className="text-gray-700 text-sm">
                  Increasing the rate of chord changes creates urgency and makes 
                  the chorus feel like the natural destination.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🌊 Dynamic Builds</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-mono text-sm">mf → f → ff (into chorus)</div>
                  <div className="text-xs text-gray-600 mt-1">Progressive volume increase</div>
                </div>
                <p className="text-gray-700 text-sm">
                  Systematic volume increases through the pre-chorus create 
                  anticipation and make chorus arrival more impactful.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Analysis Framework */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Pre-Chorus Analysis Framework</h2>
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🎵 Musical Elements</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Harmonic progression:</strong> How does it build toward chorus?</li>
                  <li>• <strong>Melodic direction:</strong> Does melody ascend or build energy?</li>
                  <li>• <strong>Rhythmic activity:</strong> How does subdivision change?</li>
                  <li>• <strong>Dynamic progression:</strong> How does volume/intensity grow?</li>
                  <li>• <strong>Length and pacing:</strong> Does timing feel appropriate?</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🔄 Functional Analysis</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Momentum creation:</strong> Does it successfully build energy?</li>
                  <li>• <strong>Tension building:</strong> Is expectation for chorus created?</li>
                  <li>• <strong>Transition quality:</strong> How smooth is the flow to chorus?</li>
                  <li>• <strong>Harmonic preparation:</strong> Does it set up chorus effectively?</li>
                  <li>• <strong>Structural necessity:</strong> Does the song need this section?</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Practice Exercises</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🎯 Analysis Practice</h3>
              <ol className="space-y-2 text-gray-700 text-sm">
                <li>1. Identify pre-choruses in familiar songs</li>
                <li>2. Notice how they build energy toward choruses</li>
                <li>3. Compare songs with and without pre-choruses</li>
                <li>4. Analyze the harmonic progressions used</li>
                <li>5. Study how vocal range expands through pre-choruses</li>
              </ol>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🎸 Composition Practice</h3>
              <ol className="space-y-2 text-gray-700 text-sm">
                <li>1. Add pre-choruses to existing verse-chorus songs</li>
                <li>2. Practice different pre-chorus progression types</li>
                <li>3. Experiment with building dynamics and energy</li>
                <li>4. Try varying pre-chorus lengths and their effects</li>
                <li>5. Create pre-choruses that set up specific chorus keys</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <Link href="/lessons/songs/structure/outro" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
              ← Previous: Outro Structure
            </Link>
            <Link href="/lessons/songs/structure/forms" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
              Next: Song Forms →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
