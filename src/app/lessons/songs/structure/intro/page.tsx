import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const introTypes = [
  {
    type: 'Harmonic Introduction',
    description: 'Establishes the key center and main harmonic foundation',
    characteristics: ['Clear tonic establishment', 'Main chord progression preview', 'Stable harmonic rhythm'],
    theory: 'Usually begins and ends on tonic, may preview verse or chorus harmony',
    examples: ['Classical pieces', 'Folk songs', 'Traditional pop ballads']
  },
  {
    type: 'Motivic Introduction',
    description: 'Presents main melodic or rhythmic themes that will appear later',
    characteristics: ['Distinctive melodic phrases', 'Rhythmic patterns', 'Instrumental hooks'],
    theory: 'Introduces thematic material that unifies the song structure',
    examples: ['Rock songs with signature riffs', 'Classical symphonies', 'Jazz standards']
  },
  {
    type: 'Atmospheric Introduction',
    description: 'Creates mood and sonic landscape without revealing main themes',
    characteristics: ['Ambient textures', 'Gradual builds', 'Non-functional harmony'],
    theory: 'May avoid tonic, use pedal points, or explore tonal ambiguity',
    examples: ['Progressive rock', 'Ambient music', 'Film scores']
  },
  {
    type: 'Rhythmic Introduction',
    description: 'Establishes the groove and rhythmic feel before harmonic content',
    characteristics: ['Drum patterns', 'Percussion emphasis', 'Rhythmic instruments'],
    theory: 'Focuses on temporal organization before pitch organization',
    examples: ['Funk', 'Hip-hop', 'Latin music', 'Some rock songs']
  }
];

const introFunctions = [
  {
    function: 'Key Establishment',
    description: 'Clearly defines the tonal center for the listener',
    techniques: ['Strong I-V-I progressions', 'Tonic pedal points', 'Scalar passages in key'],
    importance: 'Provides harmonic reference point for entire song'
  },
  {
    function: 'Mood Setting',
    description: 'Creates the emotional atmosphere and energy level',
    techniques: ['Tempo choices', 'Dynamic levels', 'Instrumental timbres', 'Harmonic color'],
    importance: 'Prepares listener for the emotional journey ahead'
  },
  {
    function: 'Thematic Preview',
    description: 'Introduces musical ideas that will be developed later',
    techniques: ['Motivic statements', 'Melodic fragments', 'Rhythmic patterns'],
    importance: 'Creates unity and coherence throughout the song'
  },
  {
    function: 'Attention Grabbing',
    description: 'Captures listener interest from the first moment',
    techniques: ['Distinctive sounds', 'Unexpected harmonies', 'Dynamic contrasts'],
    importance: 'Essential for maintaining listener engagement'
  }
];

const commonIntroProgressions = [
  {
    name: 'Tonic Establishment',
    progression: 'I - V - vi - IV - I',
    example: 'C - G - Am - F - C',
    function: 'Clearly establishes key through strong tonic-dominant relationships',
    effect: 'Stable, confident opening that defines harmonic home'
  },
  {
    name: 'Dominant Approach',
    progression: 'V - I',
    example: 'G - C (in C major)',
    function: 'Creates expectation and resolution to establish tonic',
    effect: 'Strong, decisive opening with clear harmonic direction'
  },
  {
    name: 'Plagal Introduction',
    progression: 'IV - I',
    example: 'F - C (in C major)',
    function: 'Subdominant to tonic motion, gentler than dominant approach',
    effect: 'Softer, more contemplative opening feeling'
  },
  {
    name: 'Ambiguous Opening',
    progression: 'vi - IV - I - V',
    example: 'Am - F - C - G',
    function: 'Begins on relative minor, gradually reveals major tonality',
    effect: 'Creates tonal suspense before key confirmation'
  }
];

const introLengthGuidelines = [
  {
    length: 'Short (1-4 bars)',
    purpose: 'Quick setup, minimal development',
    characteristics: ['Direct entry', 'Basic key establishment', 'Simple patterns'],
    usage: 'Pop songs, punk rock, when immediate impact is desired'
  },
  {
    length: 'Medium (4-8 bars)',
    purpose: 'Adequate theme introduction and development',
    characteristics: ['Main motif presentation', 'Basic harmonic journey', 'Moderate complexity'],
    usage: 'Most popular songs, balanced setup without excess'
  },
  {
    length: 'Extended (8-16 bars)',
    purpose: 'Full thematic development and atmospheric creation',
    characteristics: ['Complex harmonies', 'Multiple themes', 'Gradual builds'],
    usage: 'Progressive rock, classical, complex arrangements'
  },
  {
    length: 'Epic (16+ bars)',
    purpose: 'Extensive mood setting and thematic exploration',
    characteristics: ['Multiple sections', 'Key changes', 'Instrumental showcases'],
    usage: 'Symphonic music, prog rock, concept albums'
  }
];

export default function IntroStructurePage() {
  return (
    <Layout>
      <Header
        title="Intro Structure Analysis"
        subtitle="Understanding how introductions establish key centers, mood, and musical themes"
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
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Intro: Setting the Musical Stage</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Song introductions are like opening scenes in films—they establish the world, set expectations, 
              and draw the audience in. Musically, intros have the crucial job of defining key centers, 
              presenting thematic material, and creating the emotional atmosphere for everything that follows.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-emerald-200">
                <div className="text-emerald-600 text-2xl mb-2">🗝️</div>
                <h3 className="font-semibold text-gray-900 mb-2">Key Establishment</h3>
                <p className="text-gray-600 text-sm">Defines the tonal center and harmonic foundation</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-emerald-200">
                <div className="text-emerald-600 text-2xl mb-2">🎭</div>
                <h3 className="font-semibold text-gray-900 mb-2">Mood Creation</h3>
                <p className="text-gray-600 text-sm">Sets emotional tone and energy level</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-emerald-200">
                <div className="text-emerald-600 text-2xl mb-2">🧩</div>
                <h3 className="font-semibold text-gray-900 mb-2">Theme Introduction</h3>
                <p className="text-gray-600 text-sm">Presents musical ideas for later development</p>
              </div>
            </div>
          </div>
        </section>

        {/* Functions of Intros */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Essential Functions of Introductions</h2>
          <div className="grid gap-6">
            {introFunctions.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-emerald-300 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.function}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Common Techniques</h4>
                    <ul className="space-y-1">
                      {item.techniques.map((technique, i) => (
                        <li key={i} className="text-gray-700 text-sm flex items-center gap-2">
                          <span className="text-emerald-500">•</span>
                          {technique}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Why It Matters</h4>
                    <p className="text-gray-700 text-sm">{item.importance}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Types of Introductions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Types of Introduction Structures</h2>
          <div className="space-y-6">
            {introTypes.map((intro, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-4">
                  <h3 className="text-xl font-bold text-white">{intro.type}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{intro.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Characteristics</h4>
                      <ul className="space-y-1">
                        {intro.characteristics.map((char, i) => (
                          <li key={i} className="text-gray-700 text-sm flex items-center gap-2">
                            <span className="text-emerald-500">•</span>
                            {char}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Theory Application</h4>
                      <p className="text-gray-700 text-sm">{intro.theory}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Common In</h4>
                    <div className="flex flex-wrap gap-2">
                      {intro.examples.map((example, i) => (
                        <span key={i} className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">
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

        {/* Common Intro Progressions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Effective Intro Progressions</h2>
          <div className="space-y-6">
            {commonIntroProgressions.map((prog, index) => (
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
                
                <div className="bg-teal-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Harmonic Function</h4>
                  <p className="text-gray-700 text-sm">{prog.function}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Intro Length Guidelines */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Introduction Length Guidelines</h2>
          <div className="grid gap-6">
            {introLengthGuidelines.map((guideline, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{guideline.length}</h3>
                <p className="text-gray-700 mb-4">{guideline.purpose}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Typical Characteristics</h4>
                    <ul className="space-y-1">
                      {guideline.characteristics.map((char, i) => (
                        <li key={i} className="text-gray-700 text-sm flex items-center gap-2">
                          <span className="text-emerald-500">•</span>
                          {char}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Best Used In</h4>
                    <p className="text-gray-700 text-sm">{guideline.usage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Advanced Intro Techniques */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Advanced Introduction Techniques</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🎵 False Starts</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-mono text-sm">Stop → Restart with full band</div>
                  <div className="text-xs text-gray-600 mt-1">Creates anticipation and surprise</div>
                </div>
                <p className="text-gray-700 text-sm">
                  Beginning softly or incompletely, then stopping to restart with 
                  full impact creates dramatic effect and listener engagement.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🌊 Gradual Build</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-mono text-sm">Solo → Duo → Band → Full arrangement</div>
                  <div className="text-xs text-gray-600 mt-1">Progressive layering of elements</div>
                </div>
                <p className="text-gray-700 text-sm">
                  Starting with minimal elements and gradually adding instruments 
                  creates excitement and anticipation for the main song.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🎭 Tonal Ambiguity</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-mono text-sm">Am → F → ? → C (reveals C major)</div>
                  <div className="text-xs text-gray-600 mt-1">Delayed key confirmation</div>
                </div>
                <p className="text-gray-700 text-sm">
                  Avoiding clear tonic establishment creates mystery and makes 
                  the eventual key revelation more satisfying.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🔄 Motivic Development</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-mono text-sm">Simple motif → Variations → Full theme</div>
                  <div className="text-xs text-gray-600 mt-1">Progressive thematic revelation</div>
                </div>
                <p className="text-gray-700 text-sm">
                  Presenting a simple musical idea and gradually developing it 
                  creates unity and prepares the main thematic content.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Analysis Framework */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Introduction Analysis Framework</h2>
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🎵 Musical Elements</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Key establishment:</strong> How is tonic defined?</li>
                  <li>• <strong>Harmonic content:</strong> What progressions are used?</li>
                  <li>• <strong>Thematic material:</strong> What motifs are introduced?</li>
                  <li>• <strong>Rhythmic character:</strong> What groove is established?</li>
                  <li>• <strong>Instrumentation:</strong> What sonic palette is presented?</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Functional Analysis</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Length appropriateness:</strong> Does duration fit the song?</li>
                  <li>• <strong>Energy level:</strong> Does it match the song's character?</li>
                  <li>• <strong>Transition quality:</strong> How smoothly does it lead to verse?</li>
                  <li>• <strong>Interest level:</strong> Does it capture attention effectively?</li>
                  <li>• <strong>Unity creation:</strong> How does it connect to the whole?</li>
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
                <li>1. Identify how different song intros establish their key centers</li>
                <li>2. Compare intro themes to main song melodies</li>
                <li>3. Notice how intro length affects song pacing</li>
                <li>4. Analyze how intros transition to first verses</li>
                <li>5. Study different approaches to creating opening impact</li>
              </ol>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🎸 Composition Practice</h3>
              <ol className="space-y-2 text-gray-700 text-sm">
                <li>1. Create intros of different lengths for the same song</li>
                <li>2. Write intros that preview main chord progressions</li>
                <li>3. Experiment with gradual builds vs. immediate impact</li>
                <li>4. Practice creating smooth transitions to verses</li>
                <li>5. Try writing intros that establish different moods</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <Link href="/lessons/songs/structure/bridge" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
              ← Previous: Bridge Structure
            </Link>
            <Link href="/lessons/songs/structure/outro" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
              Next: Outro Structure →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
