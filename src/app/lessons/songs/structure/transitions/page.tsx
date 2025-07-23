import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const transitionTypes = [
  {
    type: 'Harmonic Transitions',
    description: 'Use chord progressions to smoothly connect different sections',
    techniques: ['Pivot chords', 'Common tones', 'Sequential progressions', 'Circle of fifths movement'],
    theory: 'Shared harmonic material creates smooth voice leading between sections',
    examples: ['V chord of old key becomes vi of new key', 'Pivot chord modulations', 'Common tone modulations']
  },
  {
    type: 'Melodic Transitions',
    description: 'Melodic lines that bridge the gap between section endings and beginnings',
    techniques: ['Pickup notes', 'Melodic sequences', 'Stepwise connections', 'Motivic development'],
    theory: 'Smooth melodic motion creates continuity across formal boundaries',
    examples: ['Bass walk-ups', 'Guitar fills', 'Vocal pickups', 'Instrumental bridges']
  },
  {
    type: 'Rhythmic Transitions',
    description: 'Rhythmic techniques that maintain or change momentum between sections',
    techniques: ['Drum fills', 'Rhythmic acceleration', 'Metric modulation', 'Stop-time'],
    theory: 'Rhythmic continuity or strategic breaks control energy flow',
    examples: ['Drum fills into choruses', 'Stop-time before big sections', 'Tempo changes']
  },
  {
    type: 'Textural Transitions',
    description: 'Changes in instrumentation and arrangement density',
    techniques: ['Instrument dropouts', 'Gradual builds', 'Sudden texture changes', 'Solo-to-full arrangements'],
    theory: 'Varying musical density creates contrast and directs attention',
    examples: ['Verse to chorus builds', 'Bridge stripping down', 'Instrumental breaks']
  }
];

const commonTransitionTechniques = [
  {
    technique: 'Pivot Chord Modulation',
    musical_example: 'Am (vi in C) → Am (ii in G)',
    function: 'Chord functions in both keys for smooth key change',
    usage: 'Key changes between sections',
    theory: 'Reinterprets a chord\'s function to move between tonal centers'
  },
  {
    technique: 'Chromatic Voice Leading',
    musical_example: 'C - C#dim - Dm',
    function: 'Half-step bass motion creates smooth connection',
    usage: 'Connecting chords with different functions',
    theory: 'Stepwise motion in bass or inner voices creates continuity'
  },
  {
    technique: 'Sequential Transitions',
    musical_example: 'C - F - Bb - Eb (circle of fifths)',
    function: 'Pattern repetition at different pitch levels',
    usage: 'Building energy through predictable harmonic motion',
    theory: 'Sequences create momentum through expectation and fulfillment'
  },
  {
    technique: 'Pedal Point Transitions',
    musical_example: 'Bass G held while harmony changes above',
    function: 'Static bass with moving harmony',
    usage: 'Creating tension before resolution into new section',
    theory: 'Held tone creates stability while upper voices create movement'
  },
  {
    technique: 'Deceptive Transitions',
    musical_example: 'V - vi instead of expected V - I',
    function: 'Avoids expected resolution to create surprise',
    usage: 'Extending sections or creating unexpected continuations',
    theory: 'Defeats listener expectations to create interest'
  }
];

const transitionPlacements = [
  {
    placement: 'Verse to Chorus',
    common_techniques: ['Harmonic buildup', 'Dynamic increase', 'Pre-chorus addition', 'Rhythmic acceleration'],
    typical_progression: 'V - V7 → I (chorus)',
    goal: 'Build energy and create arrival on chorus',
    considerations: ['Energy differential', 'Key relationships', 'Melodic pickup lines', 'Rhythmic momentum']
  },
  {
    placement: 'Chorus to Verse',
    common_techniques: ['Energy decrease', 'Texture reduction', 'Return to tonic', 'Rhythmic settling'],
    typical_progression: 'I → vi or I → V/vi (verse)',
    goal: 'Return to lower energy for narrative continuation',
    considerations: ['Smooth energy transition', 'Avoiding abruptness', 'Maintaining momentum', 'Harmonic reset']
  },
  {
    placement: 'To Bridge',
    common_techniques: ['Key change preparation', 'Texture contrast', 'Harmonic departure', 'Dynamic shift'],
    typical_progression: 'I → vi or I → IV (relative keys)',
    goal: 'Create contrast and harmonic exploration',
    considerations: ['Degree of contrast needed', 'Key relationships', 'Return preparation', 'Textural changes']
  },
  {
    placement: 'From Bridge',
    common_techniques: ['Dominant preparation', 'Energy building', 'Key return', 'Climactic buildup'],
    typical_progression: 'V/V - V → I (final chorus)',
    goal: 'Strong return to main key and final chorus',
    considerations: ['Strength of return', 'Energy level for finale', 'Harmonic resolution', 'Climactic placement']
  }
];

const advancedTechniques = [
  {
    technique: 'Elision',
    description: 'End of one section becomes beginning of next',
    musical_effect: 'Seamless connection without pause',
    harmonic_approach: 'Chord serves dual function in both sections',
    usage: 'When continuous flow is desired',
    example: 'Last chord of verse = first chord of chorus'
  },
  {
    technique: 'Link Passages',
    description: 'Short transitional passages between main sections',
    musical_effect: 'Provides breathing space and preparation',
    harmonic_approach: 'Often focuses on dominant preparation',
    usage: 'When sections need clear separation',
    example: '2-4 bar instrumental transitions'
  },
  {
    technique: 'Cross-fading',
    description: 'Overlapping of section endings and beginnings',
    musical_effect: 'Creates layered, complex transitions',
    harmonic_approach: 'May involve temporary harmonic ambiguity',
    usage: 'Studio recordings, complex arrangements',
    example: 'Verse melody continues under new chorus harmony'
  },
  {
    technique: 'Metric Modulation',
    description: 'Tempo change through rhythmic reinterpretation',
    musical_effect: 'Smooth tempo change without abruptness',
    harmonic_approach: 'Usually maintains harmonic continuity',
    usage: 'When tempo changes are needed',
    example: 'Quarter note becomes dotted quarter'
  }
];

export default function TransitionsPage() {
  return (
    <Layout>
      <Header
        title="Musical Transitions"
        subtitle="Mastering the harmonic and rhythmic techniques that smoothly connect song sections"
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
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Musical Transitions: The Art of Connection</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Transitions are the connective tissue of songs—they determine how smoothly or dramatically 
              sections flow into each other. Well-crafted transitions can make formal changes feel inevitable 
              and natural, while poor transitions can make songs feel disjointed. Understanding transition 
              techniques reveals how composers control pacing, energy, and harmonic flow throughout songs.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-rose-200">
                <div className="text-rose-600 text-2xl mb-2">🌊</div>
                <h3 className="font-semibold text-gray-900 mb-2">Smooth Flow</h3>
                <p className="text-gray-600 text-sm">Creates seamless connections between sections</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-rose-200">
                <div className="text-rose-600 text-2xl mb-2">⚡</div>
                <h3 className="font-semibold text-gray-900 mb-2">Energy Control</h3>
                <p className="text-gray-600 text-sm">Manages momentum and dynamics between parts</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-rose-200">
                <div className="text-rose-600 text-2xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-900 mb-2">Structural Clarity</h3>
                <p className="text-gray-600 text-sm">Helps listeners navigate song architecture</p>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Transitions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Types of Musical Transitions</h2>
          <div className="space-y-6">
            {transitionTypes.map((transition, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-rose-500 to-pink-500 px-6 py-4">
                  <h3 className="text-xl font-bold text-white">{transition.type}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{transition.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Common Techniques</h4>
                      <ul className="space-y-1">
                        {transition.techniques.map((technique, i) => (
                          <li key={i} className="text-gray-700 text-sm flex items-center gap-2">
                            <span className="text-rose-500">•</span>
                            {technique}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Theory</h4>
                      <p className="text-gray-700 text-sm">{transition.theory}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Examples</h4>
                    <div className="flex flex-wrap gap-2">
                      {transition.examples.map((example, i) => (
                        <span key={i} className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Transition Techniques */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Common Transition Techniques</h2>
          <div className="grid gap-6">
            {commonTransitionTechniques.map((technique, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{technique.technique}</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Musical Example</h4>
                    <div className="font-mono text-sm">{technique.musical_example}</div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Primary Function</h4>
                    <p className="text-gray-700 text-sm">{technique.function}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Best Used For</h4>
                    <p className="text-gray-700 text-sm">{technique.usage}</p>
                  </div>
                  <div className="bg-rose-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Theory</h4>
                    <p className="text-gray-700 text-sm">{technique.theory}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Transition Placements */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Strategic Transition Placements</h2>
          <div className="grid gap-6">
            {transitionPlacements.map((placement, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{placement.placement}</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Common Techniques</h4>
                    <ul className="space-y-1">
                      {placement.common_techniques.map((technique, i) => (
                        <li key={i} className="text-gray-700 text-sm flex items-center gap-2">
                          <span className="text-rose-500">•</span>
                          {technique}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Primary Goal</h4>
                    <p className="text-gray-700 text-sm">{placement.goal}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Typical Progression</h4>
                    <div className="font-mono text-sm">{placement.typical_progression}</div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Key Considerations</h4>
                    <ul className="space-y-1">
                      {placement.considerations.map((consideration, i) => (
                        <li key={i} className="text-gray-700 text-xs">• {consideration}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Advanced Techniques */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Advanced Transition Techniques</h2>
          <div className="grid gap-6">
            {advancedTechniques.map((technique, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{technique.technique}</h3>
                <p className="text-gray-700 mb-4">{technique.description}</p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <h4 className="font-medium text-gray-900 mb-1">Effect</h4>
                    <p className="text-gray-700 text-sm">{technique.musical_effect}</p>
                  </div>
                  <div className="bg-rose-50 rounded-lg p-3">
                    <h4 className="font-medium text-gray-900 mb-1">Harmony</h4>
                    <p className="text-gray-700 text-sm">{technique.harmonic_approach}</p>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-3">
                    <h4 className="font-medium text-gray-900 mb-1">Usage</h4>
                    <p className="text-gray-700 text-sm">{technique.usage}</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3">
                    <h4 className="font-medium text-gray-900 mb-1">Example</h4>
                    <p className="text-gray-700 text-sm">{technique.example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Energy Management */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Energy Management Through Transitions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">📈 Building Energy</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-medium text-gray-900 mb-1">Techniques</h4>
                  <ul className="text-sm text-gray-700">
                    <li>• Rhythmic acceleration</li>
                    <li>• Dynamic increases</li>
                    <li>• Ascending sequences</li>
                    <li>• Harmonic tension</li>
                  </ul>
                </div>
                <p className="text-gray-700 text-sm">
                  Use transitions to gradually or suddenly increase musical intensity 
                  leading into climactic sections like choruses.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">📉 Reducing Energy</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-medium text-gray-900 mb-1">Techniques</h4>
                  <ul className="text-sm text-gray-700">
                    <li>• Textural reduction</li>
                    <li>• Dynamic decrease</li>
                    <li>• Slower harmonic rhythm</li>
                    <li>• Resolution to tonic</li>
                  </ul>
                </div>
                <p className="text-gray-700 text-sm">
                  Transitions can provide breathing space and return to lower 
                  energy levels for contrast and pacing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Analysis Framework */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Transition Analysis Framework</h2>
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🎵 Musical Elements</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Harmonic connection:</strong> How do chords link sections?</li>
                  <li>• <strong>Melodic continuity:</strong> Are there connecting melodic lines?</li>
                  <li>• <strong>Rhythmic flow:</strong> How does rhythm bridge sections?</li>
                  <li>• <strong>Dynamic changes:</strong> How does energy level shift?</li>
                  <li>• <strong>Textural evolution:</strong> How does arrangement change?</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Functional Analysis</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Smoothness:</strong> How seamless is the connection?</li>
                  <li>• <strong>Appropriateness:</strong> Does it fit the song's character?</li>
                  <li>• <strong>Energy management:</strong> Is the energy change effective?</li>
                  <li>• <strong>Structural clarity:</strong> Do listeners understand the form?</li>
                  <li>• <strong>Emotional impact:</strong> Does it enhance the song's expression?</li>
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
                <li>1. Identify transition points in familiar songs</li>
                <li>2. Analyze how different transition types affect song flow</li>
                <li>3. Compare abrupt vs. smooth transitions in similar songs</li>
                <li>4. Study how energy builds through transitions</li>
                <li>5. Notice harmonic techniques used in key changes</li>
              </ol>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🎸 Composition Practice</h3>
              <ol className="space-y-2 text-gray-700 text-sm">
                <li>1. Write transitions using each major technique type</li>
                <li>2. Practice pivot chord modulations between sections</li>
                <li>3. Create both smooth and dramatic transition styles</li>
                <li>4. Experiment with different energy management approaches</li>
                <li>5. Compose link passages that enhance song structure</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <Link href="/lessons/songs/structure/forms" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
              ← Previous: Song Forms
            </Link>
            <Link href="/lessons/songs/structure" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
              Back to Song Structure →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
