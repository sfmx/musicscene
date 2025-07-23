import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const chorusCharacteristics = [
  {
    aspect: 'Harmonic Function',
    description: 'Creates emotional peaks through strategic harmonic tension',
    theory: 'Often moves away from tonic, uses dominant preparation, modal interchange',
    example: 'vi-IV-I-V creates emotional lift, ♭VII-IV-I adds modal color'
  },
  {
    aspect: 'Melodic Contour',
    description: 'Higher register, wider intervals, more dramatic leaps',
    theory: 'Expands beyond verse range, uses climactic high notes',
    example: 'Octave jumps, ascending sequences, peak notes on strong beats'
  },
  {
    aspect: 'Rhythmic Energy',
    description: 'Increased subdivision, syncopation, or metric emphasis',
    theory: 'Shorter note values, accented off-beats, polyrhythmic elements',
    example: 'Eighth note strumming vs quarter note verse, snare accents'
  },
  {
    aspect: 'Textural Density',
    description: 'Fuller arrangement with added instrumental layers',
    theory: 'Orchestral build-up, harmonic doubling, additional voices',
    example: 'Add strings, backing vocals, lead guitar, fuller drum kit'
  }
];

const chorusProgressions = [
  {
    name: 'VI-IV-I-V (Emotional Arc)',
    progression: 'Am - F - C - G',
    function: 'vi - IV - I - V',
    description: 'Starts dark (minor), moves through stability to strong resolution',
    usage: 'Pop, rock ballads, emotional peaks',
    theory: 'Minor vi creates tension, IV provides stability, I-V creates strong cadential motion'
  },
  {
    name: 'I-V-vi-IV (Pop Formula)',
    progression: 'C - G - Am - F',
    function: 'I - V - vi - IV',
    description: 'Bright start, dramatic minor turn, stable resolution',
    usage: 'Modern pop, indie rock, anthemic choruses',
    theory: 'Strong tonic start, dominant motion, deceptive resolution to vi, plagal motion'
  },
  {
    name: '♭VII-IV-I (Modal Power)',
    progression: 'B♭ - F - C',
    function: '♭VII - IV - I',
    description: 'Borrowed from minor mode, creates powerful drive to tonic',
    usage: 'Rock anthems, power ballads, triumphant choruses',
    theory: 'Mixolydian ♭VII creates modal flavor, strong plagal-authentic motion'
  }
];

const chorusTypes = [
  {
    type: 'Anthemic Chorus',
    characteristics: ['High energy', 'Wide vocal range', 'Power chords', 'Full arrangement'],
    harmony: 'Strong I-V relationships, modal interchange',
    examples: ['Arena rock', 'Pop anthems', 'Worship songs'],
    function: 'Maximum emotional impact and sing-along appeal'
  },
  {
    type: 'Intimate Chorus',
    characteristics: ['Moderate dynamics', 'Closer harmonies', 'Subtle builds', 'Focused arrangement'],
    harmony: 'Jazz-influenced progressions, extended chords',
    examples: ['Singer-songwriter', 'Indie folk', 'Soft rock'],
    function: 'Emotional depth without overwhelming dynamics'
  },
  {
    type: 'Dynamic Chorus',
    characteristics: ['Builds throughout', 'Layered vocals', 'Progressive arrangement', 'Multiple peaks'],
    harmony: 'Modulating progressions, sequential patterns',
    examples: ['Progressive rock', 'Gospel', 'R&B'],
    function: 'Continuous development and building excitement'
  }
];

export default function ChorusStructurePage() {
  return (
    <Layout>
      <Header
        title="Chorus Structure Analysis"
        subtitle="Understanding how choruses create emotional peaks through harmonic tension and melodic climax"
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
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Chorus: Emotional Heart of the Song</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The chorus represents the emotional and musical peak of a song. It's where all the harmonic, 
              melodic, and rhythmic elements combine to create maximum impact. Understanding chorus construction 
              reveals how composers manipulate tension and release to create memorable, emotionally powerful moments.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-orange-200">
                <div className="text-orange-600 text-2xl mb-2">⚡</div>
                <h3 className="font-semibold text-gray-900 mb-2">Emotional Peak</h3>
                <p className="text-gray-600 text-sm">Maximum harmonic tension and melodic climax</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-orange-200">
                <div className="text-orange-600 text-2xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-900 mb-2">Memorable Hook</h3>
                <p className="text-gray-600 text-sm">Catchy melodies and lyrics that stick with listeners</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-orange-200">
                <div className="text-orange-600 text-2xl mb-2">🔄</div>
                <h3 className="font-semibold text-gray-900 mb-2">Harmonic Release</h3>
                <p className="text-gray-600 text-sm">Resolution of tension built in verses and pre-choruses</p>
              </div>
            </div>
          </div>
        </section>

        {/* Chorus Characteristics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Chorus Characteristics</h2>
          <div className="space-y-6">
            {chorusCharacteristics.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-300 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.aspect}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Theory</h4>
                    <p className="text-gray-700 text-sm">{item.theory}</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Example</h4>
                    <p className="text-gray-700 text-sm">{item.example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Chorus Progressions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Powerful Chorus Progressions</h2>
          <div className="space-y-6">
            {chorusProgressions.map((prog, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-4">
                  <h3 className="text-xl font-bold text-white">{prog.name}</h3>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Chord Progression</h4>
                      <div className="font-mono text-lg">{prog.progression}</div>
                      <div className="text-sm text-gray-600 mt-1">({prog.function})</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Common In</h4>
                      <p className="text-gray-700 text-sm">{prog.usage}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Emotional Effect</h4>
                    <p className="text-gray-700">{prog.description}</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Theory Analysis</h4>
                    <p className="text-gray-700 text-sm">{prog.theory}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Types of Choruses */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Types of Chorus Structures</h2>
          <div className="grid gap-6">
            {chorusTypes.map((chorus, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{chorus.type}</h3>
                <p className="text-gray-700 mb-4">{chorus.function}</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Characteristics</h4>
                    <ul className="space-y-1">
                      {chorus.characteristics.map((char, i) => (
                        <li key={i} className="text-gray-700 text-sm flex items-center gap-2">
                          <span className="text-orange-500">•</span>
                          {char}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Harmonic Approach</h4>
                    <p className="text-gray-700 text-sm">{chorus.harmony}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Genre Examples</h4>
                  <div className="flex flex-wrap gap-2">
                    {chorus.examples.map((example, i) => (
                      <span key={i} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Harmonic Techniques */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Advanced Harmonic Techniques</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🎵 Modal Interchange</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-mono text-sm">I - ♭VII - ♭VI - ♭VII - I</div>
                  <div className="text-xs text-gray-600 mt-1">Mixolydian flavor in major key</div>
                </div>
                <p className="text-gray-700 text-sm">
                  Borrowing chords from parallel modes creates unexpected harmonic color 
                  and emotional depth in choruses.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🔄 Sequential Progressions</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-mono text-sm">vi - IV - I - V / v - ♭III - ♭VII - IV</div>
                  <div className="text-xs text-gray-600 mt-1">Sequential pattern with key change</div>
                </div>
                <p className="text-gray-700 text-sm">
                  Repeating harmonic patterns at different pitch levels creates 
                  building excitement and forward momentum.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">⬆️ Modulation</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-mono text-sm">C → D (up a whole step)</div>
                  <div className="text-xs text-gray-600 mt-1">Classic key change for final chorus</div>
                </div>
                <p className="text-gray-700 text-sm">
                  Strategic key changes lift choruses to new emotional heights, 
                  especially effective in final repetitions.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🎭 Deceptive Resolution</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="font-mono text-sm">V - vi (instead of V - I)</div>
                  <div className="text-xs text-gray-600 mt-1">Delays gratification</div>
                </div>
                <p className="text-gray-700 text-sm">
                  Avoiding expected resolutions creates surprise and extends 
                  emotional tension for greater impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Analysis Framework */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Chorus Analysis Framework</h2>
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🎵 Musical Analysis</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Harmonic motion:</strong> How does it differ from verse?</li>
                  <li>• <strong>Melodic peak:</strong> Where is the highest note?</li>
                  <li>• <strong>Rhythmic energy:</strong> How does subdivision change?</li>
                  <li>• <strong>Dynamic build:</strong> How does volume/intensity grow?</li>
                  <li>• <strong>Textural density:</strong> What instruments are added?</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Emotional Analysis</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Tension creation:</strong> How is emotional tension built?</li>
                  <li>• <strong>Resolution:</strong> What provides harmonic/lyrical payoff?</li>
                  <li>• <strong>Memorability:</strong> What makes it stick in memory?</li>
                  <li>• <strong>Contrast:</strong> How does it differ from other sections?</li>
                  <li>• <strong>Repetition:</strong> What elements return vs. develop?</li>
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
                <li>1. Compare verse and chorus harmonies in the same song</li>
                <li>2. Identify the emotional peak moment in choruses</li>
                <li>3. Notice how arrangement changes from verse to chorus</li>
                <li>4. Find the harmonic "lift" points that create excitement</li>
                <li>5. Track how choruses develop through the song</li>
              </ol>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🎸 Playing Practice</h3>
              <ol className="space-y-2 text-gray-700 text-sm">
                <li>1. Learn powerful chorus progressions in multiple keys</li>
                <li>2. Practice dynamic builds with strumming intensity</li>
                <li>3. Experiment with modal interchange chords</li>
                <li>4. Try modulating choruses up by half or whole steps</li>
                <li>5. Write choruses using emotional progression templates</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <Link href="/lessons/songs/structure/verse" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
              ← Previous: Verse Structure
            </Link>
            <Link href="/lessons/songs/structure/bridge" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
              Next: Bridge Structure →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
