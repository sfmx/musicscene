import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function WahEffectsPage() {
  return (
    <Layout>
      <Header
        title="Wah & Filter Effects"
        subtitle="Master expressive filter effects for dynamic tone control and musical phrasing"
      />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Navigation */}
        <nav className="mb-8 text-sm">
          <Link href="/lessons/songs/effects" className="text-cyan-600 hover:text-cyan-800">
            ← Back to Effects Overview
          </Link>
        </nav>

        {/* Introduction */}
        <section className="mb-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Filter Effects</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Filter effects work by selectively emphasizing or reducing certain frequencies in your guitar signal. 
            The wah pedal is the most famous filter effect, but the family includes auto-wahs, envelope filters, 
            and various resonant filters. These effects can make your guitar "talk," add funk and expression, 
            or create synthetic, otherworldly textures.
          </p>
          <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
            <p className="text-gray-600 italic">
              "The wah pedal doesn't just change your tone—it gives your guitar a voice, allowing you to 
              shape each note's character in real-time and create the kind of expressive phrasing that 
              defines funk, soul, and rock guitar."
            </p>
          </div>
        </section>

        {/* How Filters Work */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Filters Work</h2>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-blue-900 mb-3">Basic Filtering Concepts</h3>
                <ul className="text-blue-700 text-sm space-y-2">
                  <li>• <strong>Bandpass Filter:</strong> Emphasizes a specific frequency range</li>
                  <li>• <strong>Resonance/Q:</strong> How narrow and pronounced the filter peak is</li>
                  <li>• <strong>Cutoff Frequency:</strong> The center frequency being emphasized</li>
                  <li>• <strong>Sweep Range:</strong> The frequency range the filter can cover</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-3">Control Methods</h3>
                <ul className="text-blue-700 text-sm space-y-2">
                  <li>• <strong>Manual:</strong> Foot pedal for real-time control</li>
                  <li>• <strong>Auto-Wah:</strong> LFO sweeps the filter automatically</li>
                  <li>• <strong>Envelope Filter:</strong> Your playing dynamics control the sweep</li>
                  <li>• <strong>Expression Pedal:</strong> Hands-free continuous control</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Wah Pedals */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Wah & Filter Effects</h2>
          <div className="grid gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                👄 <span className="ml-2">Classic Wah Pedal</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Characteristics:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Manual foot control of filter sweep</li>
                    <li>• Vocal-like "wah" sound</li>
                    <li>• Bandpass filter with resonance</li>
                    <li>• Inductor-based circuit (vintage models)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Musical Applications:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Lead guitar expression</li>
                    <li>• Funk rhythm guitar</li>
                    <li>• Rock solos</li>
                    <li>• Creating talking guitar effects</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
                <p className="text-orange-800 text-sm">
                  <strong>Famous Models:</strong> Cry Baby, Vox V847, Wilson Shaft Wah
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                🤖 <span className="ml-2">Auto-Wah</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Characteristics:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• LFO-controlled filter sweep</li>
                    <li>• Rhythmic, cyclic filtering</li>
                    <li>• No foot control required</li>
                    <li>• Rate and depth controls</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Musical Applications:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Psychedelic textures</li>
                    <li>• Rhythmic emphasis</li>
                    <li>• Ambient soundscapes</li>
                    <li>• Consistent filtering patterns</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                📈 <span className="ml-2">Envelope Filter</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Characteristics:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Playing dynamics control filter</li>
                    <li>• Attack-sensitive response</li>
                    <li>• Quack/funk sound</li>
                    <li>• Sensitivity and range controls</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Musical Applications:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Funk rhythm guitar</li>
                    <li>• Percussive playing styles</li>
                    <li>• Bass guitar (very popular)</li>
                    <li>• Synth-like textures</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                <p className="text-green-800 text-sm">
                  <strong>Famous Models:</strong> Mutron III, MXR Envelope Filter, EHX Q-Tron
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                ⚡ <span className="ml-2">Resonant Filters</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Characteristics:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• High resonance/Q settings</li>
                    <li>• Synthesizer-style filtering</li>
                    <li>• Can self-oscillate</li>
                    <li>• Multiple filter types (LP, HP, BP)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Musical Applications:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Electronic music</li>
                    <li>• Experimental sounds</li>
                    <li>• Industrial/noise music</li>
                    <li>• Sound design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wah Technique */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Wah Pedal Technique</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-3">🦶 Foot Technique</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <strong className="text-purple-800">Toe vs. Heel:</strong>
                  <p className="text-purple-700">Toe down = treble emphasis, heel down = bass emphasis. Most expressive range is in the middle.</p>
                </li>
                <li>
                  <strong className="text-purple-800">Rocking Motion:</strong>
                  <p className="text-purple-700">Smooth, continuous rocking creates flowing wah sounds. Abrupt movements create percussive effects.</p>
                </li>
                <li>
                  <strong className="text-purple-800">Parking Positions:</strong>
                  <p className="text-purple-700">Leave the pedal in specific positions for tonal colors: toe down for solos, heel down for rhythm.</p>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-3">🎸 Musical Coordination</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <strong className="text-blue-800">Note Timing:</strong>
                  <p className="text-blue-700">Coordinate wah movement with note attacks for maximum expression. The wah should enhance, not fight, your phrasing.</p>
                </li>
                <li>
                  <strong className="text-blue-800">Bend Integration:</strong>
                  <p className="text-blue-700">Combine wah sweeps with string bends for even more expressive range.</p>
                </li>
                <li>
                  <strong className="text-blue-800">Rhythm Patterns:</strong>
                  <p className="text-blue-700">In funk, coordinate wah with chord stabs and muted notes for percussive effects.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Famous Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Wah in Famous Songs</h2>
          <div className="space-y-6">
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="font-semibold text-red-900 mb-2">"Voodoo Child (Slight Return)" - Jimi Hendrix</h3>
              <p className="text-red-800 text-sm mb-3">
                <strong>Effect:</strong> Cry Baby wah pedal with Marshall stack
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-red-700 mb-2"><strong>Technique:</strong></p>
                  <ul className="text-red-600 space-y-1">
                    <li>• Aggressive rocking motion</li>
                    <li>• Coordinated with string bends</li>
                    <li>• Wide sweep range</li>
                    <li>• High-gain amp interaction</li>
                  </ul>
                </div>
                <div>
                  <p className="text-red-700 mb-2"><strong>Musical Effect:</strong></p>
                  <ul className="text-red-600 space-y-1">
                    <li>• Defines the song's aggression</li>
                    <li>• Creates talking guitar effects</li>
                    <li>• Enhances Hendrix's expressiveness</li>
                    <li>• Became a wah template for rock</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-2">"Shaft" - Isaac Hayes (Theme)</h3>
              <p className="text-purple-800 text-sm mb-3">
                <strong>Effect:</strong> Wah pedal on rhythm guitar
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-purple-700 mb-2"><strong>Technique:</strong></p>
                  <ul className="text-purple-600 space-y-1">
                    <li>• Rhythmic chord stabs</li>
                    <li>• Synchronized with drums</li>
                    <li>• Parked in sweet spot</li>
                    <li>• Clean to slightly overdriven tone</li>
                  </ul>
                </div>
                <div>
                  <p className="text-purple-700 mb-2"><strong>Musical Effect:</strong></p>
                  <ul className="text-purple-600 space-y-1">
                    <li>• Creates funk groove foundation</li>
                    <li>• Adds percussive element</li>
                    <li>• Defines '70s soul/funk sound</li>
                    <li>• Emphasizes rhythmic pattern</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="font-semibold text-green-900 mb-2">"White Room" - Cream</h3>
              <p className="text-green-800 text-sm mb-3">
                <strong>Effect:</strong> Wah pedal parked in treble position
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-green-700 mb-2"><strong>Technique:</strong></p>
                  <ul className="text-green-600 space-y-1">
                    <li>• Pedal in fixed toe-down position</li>
                    <li>• No sweeping motion</li>
                    <li>• Bright, cutting tone</li>
                    <li>• Used as tone shaper, not effect</li>
                  </ul>
                </div>
                <div>
                  <p className="text-green-700 mb-2"><strong>Musical Effect:</strong></p>
                  <ul className="text-green-600 space-y-1">
                    <li>• Creates distinctive tonal character</li>
                    <li>• Cuts through dense mix</li>
                    <li>• Emphasizes high-end clarity</li>
                    <li>• Demonstrates static wah usage</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
              <h3 className="font-semibold text-yellow-900 mb-2">"Bulls on Parade" - Rage Against the Machine</h3>
              <p className="text-yellow-800 text-sm mb-3">
                <strong>Effect:</strong> Digitech Whammy with wah-style expression
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-yellow-700 mb-2"><strong>Technique:</strong></p>
                  <ul className="text-yellow-600 space-y-1">
                    <li>• Pitch shifting controlled by expression</li>
                    <li>• Aggressive riff coordination</li>
                    <li>• Drop tuning with effect</li>
                    <li>• Percussive muting technique</li>
                  </ul>
                </div>
                <div>
                  <p className="text-yellow-700 mb-2"><strong>Musical Effect:</strong></p>
                  <ul className="text-yellow-600 space-y-1">
                    <li>• Creates aggressive, modern sound</li>
                    <li>• Defines Tom Morello's style</li>
                    <li>• Combines filtering with pitch effects</li>
                    <li>• Influences alternative/nu-metal</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Signal Chain Placement */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Wah in the Signal Chain</h2>
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">🔌 Traditional Placement</h3>
                <p className="text-gray-700 text-sm mb-3">Guitar → Wah → Distortion → Amp</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Wah affects frequency content before distortion</li>
                  <li>• Creates focused distortion character</li>
                  <li>• Classic rock and blues sound</li>
                  <li>• Natural, musical interaction</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">🎛️ Modern Placement</h3>
                <p className="text-gray-700 text-sm mb-3">Guitar → Distortion → Wah → Amp</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Wah shapes already-distorted signal</li>
                  <li>• More dramatic filtering effects</li>
                  <li>• Modern metal and alternative sound</li>
                  <li>• Can create feedback issues at high gain</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
              <h4 className="font-medium text-gray-800 mb-2">💡 Experiment with Both!</h4>
              <p className="text-gray-600 text-sm">
                Different placement creates different characters. Try both positions with your setup 
                to discover which works best for your style and the specific song you're playing.
              </p>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Wah Mistakes</h2>
          <div className="bg-red-50 rounded-xl p-6 border border-red-200">
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h3 className="font-semibold text-red-900 mb-3">❌ What to Avoid</h3>
                <ul className="space-y-2 text-red-700">
                  <li>• Constant, aimless sweeping without musical purpose</li>
                  <li>• Fighting the song's rhythm with wah timing</li>
                  <li>• Using wah on every single note or chord</li>
                  <li>• Ignoring the sweet spots in the pedal's range</li>
                  <li>• Poor foot technique causing inconsistent control</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-red-900 mb-3">✅ Best Practices</h3>
                <ul className="space-y-2 text-red-700">
                  <li>• Use wah to enhance musical phrases, not dominate them</li>
                  <li>• Practice coordinating foot and hand movements</li>
                  <li>• Learn to park the pedal in useful positions</li>
                  <li>• Match wah intensity to the song's emotional content</li>
                  <li>• Study how masters like Hendrix and Page use wah musically</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Wah Practice Exercises</h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-3">Exercise 1: Sweet Spot Discovery</h3>
              <p className="text-gray-700 text-sm mb-3">
                Play sustained chords while slowly rocking the wah pedal through its entire range:
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Find the "quack" position (usually around 1/3 toe down)</li>
                <li>• Locate the smooth vocal position (around 2/3 toe down)</li>
                <li>• Identify the cutting lead position (full toe down)</li>
                <li>• Note the warm rhythm position (heel down)</li>
              </ul>
              <p className="text-gray-600 text-sm mt-3">
                These positions will become your go-to spots for different musical situations.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-3">Exercise 2: Rhythm Coordination</h3>
              <p className="text-gray-700 text-sm mb-3">
                Practice a simple chord progression (Em - Am - Em - Am) with different wah patterns:
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• On the beat: Move pedal with each chord change</li>
                <li>• Off the beat: Move pedal on the "and" of each beat</li>
                <li>• Syncopated: Create funky off-beat emphasis patterns</li>
                <li>• Static: Park in one position for each chord</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-3">Exercise 3: Lead Line Expression</h3>
              <p className="text-gray-700 text-sm mb-3">
                Play a simple pentatonic phrase (A minor pentatonic works well) and practice:
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• One sweep per phrase</li>
                <li>• One sweep per note</li>
                <li>• Emphasizing specific notes with quick sweeps</li>
                <li>• Combining with string bends for maximum expression</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Advanced Techniques */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced Wah Techniques</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
              <h3 className="font-semibold text-indigo-900 mb-3">🎯 Precision Techniques</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <strong className="text-indigo-800">Heel-Toe Technique:</strong>
                  <p className="text-indigo-700">Quick heel-to-toe movements for percussive wah effects, especially effective in funk.</p>
                </li>
                <li>
                  <strong className="text-indigo-800">Half-Cocked Wah:</strong>
                  <p className="text-indigo-700">Park the pedal partially engaged for a unique tonal color that cuts through a mix.</p>
                </li>
                <li>
                  <strong className="text-indigo-800">Volume Swells:</strong>
                  <p className="text-indigo-700">Combine volume swells with wah sweeps for atmospheric, violin-like effects.</p>
                </li>
              </ul>
            </div>

            <div className="bg-pink-50 rounded-xl p-6 border border-pink-200">
              <h3 className="font-semibold text-pink-900 mb-3">🔄 Modern Applications</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <strong className="text-pink-800">MIDI Control:</strong>
                  <p className="text-pink-700">Use MIDI controllers to precisely automate wah sweeps or control multiple parameters.</p>
                </li>
                <li>
                  <strong className="text-pink-800">Multi-Band Filtering:</strong>
                  <p className="text-pink-700">Some modern pedals offer multiple frequency bands for more complex filtering.</p>
                </li>
                <li>
                  <strong className="text-pink-800">Envelope Following:</strong>
                  <p className="text-pink-700">Let your playing dynamics control the wah automatically for hands-free expression.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mt-12 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Continue Your Effects Journey</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Related Effects:</h3>
              <div className="space-y-2">
                <Link href="/lessons/songs/effects/distortion" className="block text-cyan-600 hover:text-cyan-800 text-sm">
                  → Distortion & Overdrive
                </Link>
                <Link href="/lessons/songs/effects/modulation" className="block text-cyan-600 hover:text-cyan-800 text-sm">
                  → Modulation Effects
                </Link>
                <Link href="/lessons/songs/effects/signal-chain" className="block text-cyan-600 hover:text-cyan-800 text-sm">
                  → Signal Chain & Multi-Effects
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Advanced Topics:</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Custom wah modifications and mods</li>
                <li>• Expression pedal routing techniques</li>
                <li>• Combining wah with other filters</li>
                <li>• Building custom filter circuits</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
