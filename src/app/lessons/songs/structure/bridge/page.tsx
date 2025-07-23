import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const bridgeTypes = [
  {
    type: 'Harmonic Bridge',
    description: 'Provides harmonic contrast through new chord progressions or key centers',
    characteristics: ['New chord progressions', 'Possible key changes', 'Different harmonic rhythm'],
    theory: 'Often moves to relative minor, parallel major, or distant keys via pivot chords',
    examples: ['Classic rock ballads', 'Jazz standards', 'Pop songs with key changes']
  },
  {
    type: 'Melodic Bridge',
    description: 'Features contrasting melodic material while maintaining similar harmony',
    characteristics: ['New melodic themes', 'Different vocal range', 'Contrasting rhythmic patterns'],
    theory: 'Uses same harmonic foundation but explores different melodic possibilities',
    examples: ['Folk songs', 'Singer-songwriter material', 'Traditional AABA forms']
  },
  {
    type: 'Textural Bridge',
    description: 'Changes instrumentation and arrangement while keeping familiar harmonic/melodic elements',
    characteristics: ['Sparse or dense arrangements', 'Solo sections', 'Different instrumental colors'],
    theory: 'Harmonic and melodic content may remain similar, focus on timbral contrast',
    examples: ['Progressive rock', 'Orchestral pop', 'Modern indie music']
  }
];

const commonBridgeProgressions = [
  {
    name: 'Relative Minor Excursion',
    progression: 'vi - ii - V - I (in relative minor)',
    example: 'Am - Dm - G - C (from C major to A minor)',
    function: 'Moves to relative minor for emotional depth, returns to major',
    effect: 'Creates introspective or melancholic contrast'
  },
  {
    name: 'Circle of Fifths Movement',
    progression: 'iii - vi - ii - V - I',
    example: 'Em - Am - Dm - G - C',
    function: 'Systematic movement through related keys',
    effect: 'Strong sense of harmonic journey and inevitable return'
  },
  {
    name: 'Modal Interchange Bridge',
    progression: '♭VII - ♭VI - ♭VII - I',
    example: 'B♭ - F - B♭ - C (in C major)',
    function: 'Borrows from parallel minor (Mixolydian)',
    effect: 'Darker, more mysterious color before return to major'
  },
  {
    name: 'Secondary Dominant Chain',
    progression: 'V/V - V - I',
    example: 'D - G - C (in C major)',
    function: 'Creates expectation through dominant relationships',
    effect: 'Building tension that resolves strongly back to home key'
  }
];

const bridgeFunctions = [
  {
    function: 'Contrast Provider',
    description: 'Breaks up repetition between verses and choruses',
    techniques: ['New harmonic material', 'Different key centers', 'Contrasting rhythms'],
    goal: 'Prevent listener fatigue, maintain interest'
  },
  {
    function: 'Emotional Pivot',
    description: 'Shifts the emotional perspective or narrative viewpoint',
    techniques: ['Minor mode exploration', 'Lyrical perspective change', 'Dynamic shifts'],
    goal: 'Add emotional depth and complexity'
  },
  {
    function: 'Harmonic Journey',
    description: 'Explores distant harmonic territories before returning home',
    techniques: ['Modulation', 'Chromatic harmony', 'Extended progressions'],
    goal: 'Create sense of adventure and satisfying return'
  },
  {
    function: 'Textural Break',
    description: 'Provides instrumental or arrangement contrast',
    techniques: ['Solo sections', 'Stripped arrangements', 'New instruments'],
    goal: 'Refresh the sonic palette'
  }
];

export default function BridgeStructurePage() {
  return (
    <Layout>
      <Header
        title="Bridge Structure Analysis"
        subtitle="Understanding how bridges provide harmonic and melodic contrast while maintaining song unity"
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
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Bridge: Musical and Emotional Contrast</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The bridge serves as a crucial contrast section that prevents repetition fatigue while maintaining 
              the song's overall unity. It's where composers can explore new harmonic territories, present different 
              melodic material, or shift the emotional perspective before returning to familiar material with renewed impact.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <div className="text-purple-600 text-2xl mb-2">🌉</div>
                <h3 className="font-semibold text-gray-900 mb-2">Contrast Creation</h3>
                <p className="text-gray-600 text-sm">Provides harmonic, melodic, or textural departure</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <div className="text-purple-600 text-2xl mb-2">🔄</div>
                <h3 className="font-semibold text-gray-900 mb-2">Return Preparation</h3>
                <p className="text-gray-600 text-sm">Sets up satisfying return to familiar sections</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <div className="text-purple-600 text-2xl mb-2">💫</div>
                <h3 className="font-semibold text-gray-900 mb-2">Emotional Pivot</h3>
                <p className="text-gray-600 text-sm">Shifts perspective or deepens emotional content</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bridge Functions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Functions of Bridges</h2>
          <div className="grid gap-6">
            {bridgeFunctions.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-purple-300 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.function}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Common Techniques</h4>
                    <ul className="space-y-1">
                      {item.techniques.map((technique, i) => (
                        <li key={i} className="text-gray-700 text-sm flex items-center gap-2">
                          <span className="text-purple-500">•</span>
                          {technique}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Goal</h4>
                    <p className="text-gray-700 text-sm">{item.goal}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Types of Bridges */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Types of Bridge Structures</h2>
          <div className="space-y-6">
            {bridgeTypes.map((bridge, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 px-6 py-4">
                  <h3 className="text-xl font-bold text-white">{bridge.type}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{bridge.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Characteristics</h4>
                      <ul className="space-y-1">
                        {bridge.characteristics.map((char, i) => (
                          <li key={i} className="text-gray-700 text-sm flex items-center gap-2">
                            <span className="text-purple-500">•</span>
                            {char}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Theory Application</h4>
                      <p className="text-gray-700 text-sm">{bridge.theory}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Common In</h4>
                    <div className="flex flex-wrap gap-2">
                      {bridge.examples.map((example, i) => (
                        <span key={i} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
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

        {/* Common Bridge Progressions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Effective Bridge Progressions</h2>
          <div className="space-y-6">
            {commonBridgeProgressions.map((prog, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{prog.name}</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Progression</h4>
                    <div className="font-mono text-sm">{prog.progression}</div>
                    <div className="text-xs text-gray-600 mt-2">Example: {prog.example}</div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Emotional Effect</h4>
                    <p className="text-gray-700 text-sm">{prog.effect}</p>
                  </div>
                </div>
                
                <div className="bg-indigo-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Harmonic Function</h4>
                  <p className="text-gray-700 text-sm">{prog.function}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bridge Placement and Length */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Bridge Placement & Structure</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🎯 Typical Placement</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-medium text-gray-900">After Second Chorus</div>
                  <div className="text-sm text-gray-600">Verse - Chorus - Verse - Chorus - Bridge - Chorus</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-medium text-gray-900">AABA Form</div>
                  <div className="text-sm text-gray-600">A section - A section - B section (bridge) - A section</div>
                </div>
                <p className="text-gray-700 text-sm">
                  Strategic placement maximizes contrast impact and sets up final chorus return.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">📏 Length Considerations</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-medium text-gray-900">Short Bridge (4-8 bars)</div>
                  <div className="text-sm text-gray-600">Brief contrast, maintains momentum</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-medium text-gray-900">Standard Bridge (8-16 bars)</div>
                  <div className="text-sm text-gray-600">Full harmonic journey, substantial contrast</div>
                </div>
                <p className="text-gray-700 text-sm">
                  Length depends on complexity of harmonic journey and amount of contrast needed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Bridge Techniques */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Advanced Bridge Techniques</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🎵 Modulation Bridges</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-mono text-sm">C major → E♭ major → C major</div>
                  <div className="text-xs text-gray-600 mt-1">Moves to ♭III, returns via common chord</div>
                </div>
                <p className="text-gray-700 text-sm">
                  Key changes in bridges create dramatic contrast and make the return to 
                  the original key feel fresh and exciting.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🔄 Sequential Bridges</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-mono text-sm">vi-IV-I-V → v-♭III-♭VII-IV</div>
                  <div className="text-xs text-gray-600 mt-1">Same pattern, different pitch level</div>
                </div>
                <p className="text-gray-700 text-sm">
                  Sequences create forward momentum and building excitement while 
                  maintaining harmonic logic.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🎭 Deceptive Bridges</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-mono text-sm">Expected: V-I → Actual: V-vi</div>
                  <div className="text-xs text-gray-600 mt-1">Delays resolution, extends journey</div>
                </div>
                <p className="text-gray-700 text-sm">
                  Avoiding expected harmonic goals creates surprise and extends 
                  the emotional journey before final resolution.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🌊 Pedal Point Bridges</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-mono text-sm">Bass: C (sustained) → Harmony: F-G-Am-Dm</div>
                  <div className="text-xs text-gray-600 mt-1">Static bass, moving harmony above</div>
                </div>
                <p className="text-gray-700 text-sm">
                  Sustained bass notes create harmonic tension and unity while 
                  upper voices provide movement and color.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Analysis Framework */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Bridge Analysis Framework</h2>
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🎵 Musical Elements</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Harmonic departure:</strong> How does it differ harmonically?</li>
                  <li>• <strong>Key relationships:</strong> What keys are explored?</li>
                  <li>• <strong>Melodic content:</strong> New themes or variations?</li>
                  <li>• <strong>Rhythmic changes:</strong> Different feels or meters?</li>
                  <li>• <strong>Textural shifts:</strong> Arrangement differences?</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🔄 Structural Function</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Contrast level:</strong> How much departure is created?</li>
                  <li>• <strong>Return preparation:</strong> How is the return set up?</li>
                  <li>• <strong>Emotional shift:</strong> What new perspective is offered?</li>
                  <li>• <strong>Unity maintenance:</strong> What connects it to the whole?</li>
                  <li>• <strong>Placement logic:</strong> Why is it positioned here?</li>
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
                <li>1. Identify where bridges occur in familiar songs</li>
                <li>2. Compare bridge harmony to verse and chorus progressions</li>
                <li>3. Notice how bridges prepare the return to familiar material</li>
                <li>4. Analyze the emotional effect of different bridge types</li>
                <li>5. Study how bridge length affects its impact</li>
              </ol>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🎸 Composition Practice</h3>
              <ol className="space-y-2 text-gray-700 text-sm">
                <li>1. Take a simple verse-chorus song and add a bridge</li>
                <li>2. Experiment with relative minor bridges</li>
                <li>3. Try modulating bridges that change key</li>
                <li>4. Create textural bridges with different arrangements</li>
                <li>5. Practice smooth transitions into and out of bridges</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <Link href="/lessons/songs/structure/chorus" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
              ← Previous: Chorus Structure
            </Link>
            <Link href="/lessons/songs/structure/intro" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
              Next: Intro Structure →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
