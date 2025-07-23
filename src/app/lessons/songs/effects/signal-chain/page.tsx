import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SignalChainEffectsPage() {
  return (
    <Layout>
      <Header
        title="Multi-Effects & Signal Chain"
        subtitle="Master the art of combining effects and building professional signal chains for any musical situation"
      />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Navigation */}
        <nav className="mb-8 text-sm">
          <Link href="/lessons/songs/effects" className="text-cyan-600 hover:text-cyan-800">
            ← Back to Effects Overview
          </Link>
        </nav>

        {/* Introduction */}
        <section className="mb-12 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Art of Signal Chain Design</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Your signal chain—the order and combination of effects between your guitar and amplifier—is like 
            arranging instruments in an orchestra. Each effect influences those that follow, creating complex 
            interactions that can make or break your sound. Understanding signal flow, impedance matching, 
            and effect interaction is crucial for crafting professional tones and avoiding common pitfalls.
          </p>
          <div className="bg-white rounded-lg p-4 border-l-4 border-indigo-500">
            <p className="text-gray-600 italic">
              "A well-designed signal chain is invisible—it serves the music without drawing attention to itself, 
              while a poor signal chain fights against you at every turn."
            </p>
          </div>
        </section>

        {/* Signal Flow Fundamentals */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Signal Flow Fundamentals</h2>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <p className="text-blue-800 mb-4">
              <strong>Signal flow</strong> is the path your guitar signal takes from pickup to speaker. 
              Each effect in the chain processes the signal it receives and passes a modified version 
              to the next effect. Order matters because each effect colors the signal for everything downstream.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Key Concepts:</h3>
                <ul className="text-blue-700 space-y-1">
                  <li>• <strong>Gain Staging:</strong> Managing signal levels through the chain</li>
                  <li>• <strong>Impedance:</strong> Electrical resistance affecting tone</li>
                  <li>• <strong>Headroom:</strong> Available dynamic range before clipping</li>
                  <li>• <strong>Noise Floor:</strong> Background noise accumulation</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Common Issues:</h3>
                <ul className="text-blue-700 space-y-1">
                  <li>• Tone loss from improper impedance matching</li>
                  <li>• Unwanted distortion from overloaded effects</li>
                  <li>• Noise buildup from high-gain pedals</li>
                  <li>• Interaction problems between effect types</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Classic Signal Chain Order */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Classic Signal Chain Order</h2>
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                🎸 Guitar → [Effect Chain] → 🔊 Amplifier
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-gray-700 text-sm font-mono">
                  Guitar → Wah → Compression → Overdrive → Distortion → Pitch → Modulation → Delay → Reverb → Amp
                </p>
              </div>
            </div>
            
            <div className="grid gap-4">
              <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                <h4 className="font-semibold text-red-900 mb-2">1. Filter Effects (Wah, EQ)</h4>
                <p className="text-red-700 text-sm mb-2">
                  <strong>Why First:</strong> Work best with the guitar's natural signal before any processing.
                </p>
                <ul className="text-red-600 text-sm space-y-1">
                  <li>• Wah pedals detect frequency content accurately</li>
                  <li>• EQ shapes tone before distortion</li>
                  <li>• Filters interact naturally with pickup output</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">2. Dynamics (Compression, Gates)</h4>
                <p className="text-green-700 text-sm mb-2">
                  <strong>Why Here:</strong> Control dynamics before distortion for consistent drive response.
                </p>
                <ul className="text-green-600 text-sm space-y-1">
                  <li>• Compression evens out picking dynamics</li>
                  <li>• Gates control noise before amplification</li>
                  <li>• Provides consistent signal to drive pedals</li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                <h4 className="font-semibold text-orange-900 mb-2">3. Drive Effects (Overdrive, Distortion, Fuzz)</h4>
                <p className="text-orange-700 text-sm mb-2">
                  <strong>Why Here:</strong> Generate harmonics that modulation and time effects can process.
                </p>
                <ul className="text-orange-600 text-sm space-y-1">
                  <li>• Multiple drive pedals can be stacked</li>
                  <li>• Lower gain before higher gain typically</li>
                  <li>• Creates harmonic content for later effects</li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">4. Pitch Effects (Octave, Harmony, Whammy)</h4>
                <p className="text-purple-700 text-sm mb-2">
                  <strong>Why Here:</strong> Need relatively clean signal for accurate pitch tracking.
                </p>
                <ul className="text-purple-600 text-sm space-y-1">
                  <li>• Pitch detection works better before heavy distortion</li>
                  <li>• Generated harmonies can be processed by later effects</li>
                  <li>• Avoids tracking problems from modulation</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">5. Modulation (Chorus, Phaser, Flanger, Tremolo)</h4>
                <p className="text-blue-700 text-sm mb-2">
                  <strong>Why Here:</strong> Add movement and texture to the complete harmonic content.
                </p>
                <ul className="text-blue-600 text-sm space-y-1">
                  <li>• Modulate the full frequency spectrum</li>
                  <li>• Create movement in sustained sounds</li>
                  <li>• Avoid modulating time-based effects</li>
                </ul>
              </div>

              <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-200">
                <h4 className="font-semibold text-cyan-900 mb-2">6. Time Effects (Delay, Echo)</h4>
                <p className="text-cyan-700 text-sm mb-2">
                  <strong>Why Here:</strong> Repeat the complete processed signal including modulation.
                </p>
                <ul className="text-cyan-600 text-sm space-y-1">
                  <li>• Delay repeats include all previous processing</li>
                  <li>• Creates complex rhythmic patterns</li>
                  <li>• Avoids feedback issues with drive pedals</li>
                </ul>
              </div>

              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                <h4 className="font-semibold text-indigo-900 mb-2">7. Ambience (Reverb)</h4>
                <p className="text-indigo-700 text-sm mb-2">
                  <strong>Why Last:</strong> Create natural spatial environment for the complete sound.
                </p>
                <ul className="text-indigo-600 text-sm space-y-1">
                  <li>• Simulates natural acoustic space</li>
                  <li>• Processes entire signal chain as one source</li>
                  <li>• Final polish for professional sound</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Alternative Chain Philosophies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Alternative Signal Chain Approaches</h2>
          <div className="grid gap-6">
            <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
              <h3 className="font-semibold text-yellow-900 mb-3">🎸 Amp-Centric Approach</h3>
              <p className="text-yellow-800 text-sm mb-3">
                <strong>Philosophy:</strong> Use the amplifier as the primary distortion source, effects enhance natural amp tone.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-yellow-700 mb-2"><strong>Before Amp (Preamp):</strong></p>
                  <ul className="text-yellow-600 space-y-1">
                    <li>• Compressor</li>
                    <li>• Overdrive (as boost)</li>
                    <li>• Wah</li>
                    <li>• Pitch effects</li>
                  </ul>
                </div>
                <div>
                  <p className="text-yellow-700 mb-2"><strong>After Amp (Effects Loop):</strong></p>
                  <ul className="text-yellow-600 space-y-1">
                    <li>• Modulation effects</li>
                    <li>• Delay</li>
                    <li>• Reverb</li>
                    <li>• Volume pedal</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="font-semibold text-green-900 mb-3">🎛️ Pedal-Centric Approach</h3>
              <p className="text-green-800 text-sm mb-3">
                <strong>Philosophy:</strong> Create all tones with pedals, use clean amp as neutral platform.
              </p>
              <div className="text-sm">
                <p className="text-green-700 mb-2"><strong>Complete Chain Before Amp:</strong></p>
                <p className="text-green-600 mb-3">
                  Guitar → Full pedal chain → Clean amplifier input
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-green-700 mb-2"><strong>Advantages:</strong></p>
                    <ul className="text-green-600 space-y-1">
                      <li>• Consistent sound across different amps</li>
                      <li>• Total control over every parameter</li>
                      <li>• Easier to record direct</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-green-700 mb-2"><strong>Considerations:</strong></p>
                    <ul className="text-green-600 space-y-1">
                      <li>• Requires high-quality clean amplifier</li>
                      <li>• More complex signal chain management</li>
                      <li>• Need good DI options for recording</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-3">🔄 Parallel Processing</h3>
              <p className="text-purple-800 text-sm mb-3">
                <strong>Philosophy:</strong> Split signal into multiple paths for complex, layered sounds.
              </p>
              <div className="text-sm">
                <p className="text-purple-700 mb-2"><strong>Common Applications:</strong></p>
                <ul className="text-purple-600 space-y-1 mb-3">
                  <li>• Wet/dry/wet rigs (clean center, effects left/right)</li>
                  <li>• Bass/guitar frequency splitting</li>
                  <li>• Multiple amp combinations</li>
                  <li>• Parallel compression or distortion</li>
                </ul>
                <div className="bg-white rounded-lg p-3 border border-purple-300">
                  <p className="text-purple-700 text-xs">
                    <strong>Example:</strong> Guitar → Splitter → Path A (Clean) + Path B (Heavy Effects) → Mixer → Amp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Effects Loop Fundamentals */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding Effects Loops</h2>
          <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
            <p className="text-amber-800 mb-4">
              <strong>Effects loops</strong> allow you to place effects between your amplifier's preamp and power amp sections, 
              processing the already-distorted signal from your amp's preamp.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h3 className="font-semibold text-amber-900 mb-2">How It Works:</h3>
                <p className="text-amber-700 mb-2 font-mono text-xs">
                  Guitar → Amp Preamp → [Effects Loop] → Amp Power Section → Speaker
                </p>
                <ul className="text-amber-600 space-y-1">
                  <li>• Send: Signal from preamp to effects</li>
                  <li>• Return: Processed signal back to power amp</li>
                  <li>• Mix: Blend dry/wet signals</li>
                  <li>• Level: Match effect output to amp input</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-amber-900 mb-2">Best Effects for Loop:</h3>
                <ul className="text-amber-600 space-y-1">
                  <li>• Delay and reverb (maintain clarity)</li>
                  <li>• Chorus and modulation</li>
                  <li>• Volume pedals</li>
                  <li>• Noise gates (in some cases)</li>
                </ul>
                <div className="mt-3 p-2 bg-white rounded border border-amber-300">
                  <p className="text-amber-700 text-xs">
                    <strong>Avoid:</strong> Distortion, overdrive, and pitch effects typically work better before the amp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Multi-Effects Systems */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Multi-Effects Systems</h2>
          <div className="grid gap-6">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-3">🎛️ All-in-One Units</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">Advantages:</h4>
                  <ul className="text-blue-700 space-y-1">
                    <li>• Preset storage and recall</li>
                    <li>• Internal signal routing flexibility</li>
                    <li>• Cost-effective for many effects</li>
                    <li>• MIDI control and automation</li>
                    <li>• Built-in amp modeling</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">Considerations:</h4>
                  <ul className="text-blue-700 space-y-1">
                    <li>• Learning curve for programming</li>
                    <li>• Fixed upgrade path</li>
                    <li>• May not excel at specific effects</li>
                    <li>• Digital conversion artifacts</li>
                    <li>• Menu diving for real-time adjustments</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-white rounded-lg border border-blue-300">
                <p className="text-blue-800 text-sm">
                  <strong>Popular Units:</strong> Line 6 Helix, Boss GT-1000, Fractal Audio Axe-FX, Kemper Profiler
                </p>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="font-semibold text-green-900 mb-3">🔗 Modular Pedalboard Systems</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-green-800 mb-2">Advantages:</h4>
                  <ul className="text-green-700 space-y-1">
                    <li>• Choose best pedal for each effect type</li>
                    <li>• Upgrade individual components</li>
                    <li>• Hands-on control for all parameters</li>
                    <li>• Analog warmth and character</li>
                    <li>• Flexible signal routing options</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-green-800 mb-2">Considerations:</h4>
                  <ul className="text-green-700 space-y-1">
                    <li>• Higher total cost</li>
                    <li>• More complex power and cabling</li>
                    <li>• Preset changes require multiple switches</li>
                    <li>• Size and weight considerations</li>
                    <li>• Potential for noise and signal degradation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-3">🎯 Hybrid Approaches</h3>
              <p className="text-purple-800 text-sm mb-3">
                Many guitarists combine multi-effects with individual pedals for the best of both worlds.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-purple-700 mb-2">Common Combinations:</h4>
                  <ul className="text-purple-600 space-y-1">
                    <li>• Multi-effects for modulation and time effects</li>
                    <li>• Individual pedals for drive and dynamics</li>
                    <li>• Specialty pedals for unique sounds</li>
                    <li>• Switching systems for preset changes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-purple-700 mb-2">Integration Tips:</h4>
                  <ul className="text-purple-600 space-y-1">
                    <li>• Use loops to integrate individual pedals</li>
                    <li>• MIDI control for synchronized changes</li>
                    <li>• Careful gain staging throughout system</li>
                    <li>• Consider buffering and impedance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting Common Issues */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Troubleshooting Signal Chain Issues</h2>
          <div className="grid gap-6">
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="font-semibold text-red-900 mb-3">⚠️ Common Problems & Solutions</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-medium text-red-800">Tone Loss/Dullness</h4>
                  <p className="text-red-700 mb-1"><strong>Causes:</strong> Too many buffered pedals, impedance mismatch, cable length</p>
                  <p className="text-red-600"><strong>Solutions:</strong> Use fewer pedals, add buffer at start, check cable quality, use loop bypass</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-red-800">Noise Issues</h4>
                  <p className="text-red-700 mb-1"><strong>Causes:</strong> Ground loops, power supply noise, high-gain pedal placement</p>
                  <p className="text-red-600"><strong>Solutions:</strong> Isolated power supply, noise gate, proper grounding, shielded cables</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-red-800">Unexpected Distortion</h4>
                  <p className="text-red-700 mb-1"><strong>Causes:</strong> Overloaded inputs, impedance mismatches, gain staging issues</p>
                  <p className="text-red-600"><strong>Solutions:</strong> Adjust output levels, check input ratings, use attenuator pads</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-red-800">Effect Interaction Problems</h4>
                  <p className="text-red-700 mb-1"><strong>Causes:</strong> Wrong order, incompatible impedances, feedback loops</p>
                  <p className="text-red-600"><strong>Solutions:</strong> Reorder effects, use buffers, check for ground loops</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="font-semibold text-green-900 mb-3">🔧 Maintenance Best Practices</h3>
              <ul className="text-green-700 text-sm space-y-2">
                <li>• Regular cable testing and replacement</li>
                <li>• Clean power connections and jacks</li>
                <li>• Check battery levels in active pedals</li>
                <li>• Document your signal chain setup</li>
                <li>• Keep spare cables and batteries</li>
                <li>• Use quality, short patch cables</li>
                <li>• Organize cables to prevent interference</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Building Your First Professional Chain */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Building Your First Professional Signal Chain</h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
            <h3 className="font-semibold text-gray-800 mb-4">Step-by-Step Approach</h3>
            <div className="grid gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border">
                <h4 className="font-medium text-gray-800 mb-2">Step 1: Define Your Core Sound</h4>
                <p className="text-gray-600">Start with your amp's natural tone. Decide if you want amp distortion or pedal distortion as your foundation.</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 border">
                <h4 className="font-medium text-gray-800 mb-2">Step 2: Add Essential Effects</h4>
                <p className="text-gray-600">Begin with: Tuner → Compressor → Overdrive → Delay → Reverb. This covers 80% of musical needs.</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 border">
                <h4 className="font-medium text-gray-800 mb-2">Step 3: Test and Optimize</h4>
                <p className="text-gray-600">Play music you know well. Listen for tone loss, noise, or unwanted interactions. Adjust levels and order as needed.</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 border">
                <h4 className="font-medium text-gray-800 mb-2">Step 4: Expand Strategically</h4>
                <p className="text-gray-600">Add effects based on musical needs: wah for expression, chorus for texture, pitch effects for special sounds.</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 border">
                <h4 className="font-medium text-gray-800 mb-2">Step 5: Document and Refine</h4>
                <p className="text-gray-600">Record your signal chain, settings, and what works for different songs. Continue refining based on musical needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Genre-Specific Recommendations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Signal Chains by Genre</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                <h3 className="font-semibold text-yellow-900 mb-3">🎸 Classic Rock</h3>
                <p className="text-yellow-700 text-sm mb-2 font-mono">
                  Guitar → Wah → Compressor → Overdrive → Fuzz → Chorus → Delay → Reverb → Amp
                </p>
                <ul className="text-yellow-600 text-sm space-y-1">
                  <li>• Emphasis on amp distortion</li>
                  <li>• Wah for expressive solos</li>
                  <li>• Tape-style delay for ambience</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="font-semibold text-green-900 mb-3">🎺 Jazz/Fusion</h3>
                <p className="text-green-700 text-sm mb-2 font-mono">
                  Guitar → Compressor → Chorus → Delay → Reverb → Clean Amp
                </p>
                <ul className="text-green-600 text-sm space-y-1">
                  <li>• Clean foundation</li>
                  <li>• Subtle compression for consistency</li>
                  <li>• Light modulation and ambience</li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h3 className="font-semibold text-red-900 mb-3">🔥 Modern Metal</h3>
                <p className="text-red-700 text-sm mb-2 font-mono">
                  Guitar → Gate → Overdrive → High-Gain Amp → [Loop: Chorus → Delay] → Power Amp
                </p>
                <ul className="text-red-600 text-sm space-y-1">
                  <li>• Noise gate for tight palm muting</li>
                  <li>• Overdrive to tighten high-gain amp</li>
                  <li>• Effects loop for modulation</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-3">🌊 Ambient/Post-Rock</h3>
                <p className="text-blue-700 text-sm mb-2 font-mono">
                  Guitar → Volume → Compressor → Overdrive → Pitch → Modulation → Multiple Delays → Reverb → Amp
                </p>
                <ul className="text-blue-600 text-sm space-y-1">
                  <li>• Volume swells for dynamics</li>
                  <li>• Multiple delays for complex textures</li>
                  <li>• Heavy reverb for atmosphere</li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <h3 className="font-semibold text-purple-900 mb-3">🤠 Country</h3>
                <p className="text-purple-700 text-sm mb-2 font-mono">
                  Guitar → Heavy Compressor → Light Overdrive → Chorus → Delay → Reverb → Clean Amp
                </p>
                <ul className="text-purple-600 text-sm space-y-1">
                  <li>• Heavy compression for "squash"</li>
                  <li>• Clean or edge-of-breakup amp</li>
                  <li>• Subtle modulation and ambience</li>
                </ul>
              </div>

              <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                <h3 className="font-semibold text-indigo-900 mb-3">🎵 Funk/R&B</h3>
                <p className="text-indigo-700 text-sm mb-2 font-mono">
                  Guitar → Wah → Compressor → Light Overdrive → Chorus → Clean Amp
                </p>
                <ul className="text-indigo-600 text-sm space-y-1">
                  <li>• Wah for rhythmic emphasis</li>
                  <li>• Compression for consistent dynamics</li>
                  <li>• Clean, punchy tone foundation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Concepts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced Signal Chain Concepts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-pink-50 rounded-xl p-6 border border-pink-200">
              <h3 className="font-semibold text-pink-900 mb-3">🎛️ Switching Systems</h3>
              <ul className="text-pink-700 text-sm space-y-2">
                <li>• <strong>Loop Switchers:</strong> Bypass entire effect chains</li>
                <li>• <strong>MIDI Controllers:</strong> Automate multiple changes</li>
                <li>• <strong>Preset Systems:</strong> Store and recall complete setups</li>
                <li>• <strong>A/B Switches:</strong> Compare different signal paths</li>
              </ul>
            </div>

            <div className="bg-teal-50 rounded-xl p-6 border border-teal-200">
              <h3 className="font-semibold text-teal-900 mb-3">🔄 Signal Splitting</h3>
              <ul className="text-teal-700 text-sm space-y-2">
                <li>• <strong>Wet/Dry Rigs:</strong> Separate clean and processed signals</li>
                <li>• <strong>Frequency Splitting:</strong> Different effects for bass/treble</li>
                <li>• <strong>Stereo Processing:</strong> Left/right channel independence</li>
                <li>• <strong>Parallel Compression:</strong> Blend compressed/uncompressed</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Signal Chain Practice Exercises</h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-3">Exercise 1: Order Experiments</h3>
              <p className="text-gray-700 text-sm mb-3">
                Try these order changes with a basic chain (Overdrive → Chorus → Delay):
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Standard: Overdrive → Chorus → Delay</li>
                <li>• Experiment 1: Chorus → Overdrive → Delay</li>
                <li>• Experiment 2: Overdrive → Delay → Chorus</li>
                <li>• Notice how each change affects the overall character</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-3">Exercise 2: Gain Staging</h3>
              <p className="text-gray-700 text-sm mb-3">
                Practice proper level management through your chain:
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Set each effect to unity gain (same level in/out)</li>
                <li>• Add one effect at a time, checking levels</li>
                <li>• Listen for unwanted distortion or noise increase</li>
                <li>• Adjust individual effect levels as needed</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-3">Exercise 3: Genre Adaptation</h3>
              <p className="text-gray-700 text-sm mb-3">
                Take the same song and adapt your signal chain for different genres:
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Start with a simple song like "Wild Thing"</li>
                <li>• Play it as: Country, Metal, Jazz, Ambient</li>
                <li>• Change effects order and settings for each style</li>
                <li>• Notice how signal chain supports different musical approaches</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mt-12 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Mastering Your Signal Chain</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Continue Learning:</h3>
              <div className="space-y-2">
                <Link href="/lessons/songs/effects/compression" className="block text-cyan-600 hover:text-cyan-800 text-sm">
                  → Compression & Dynamics
                </Link>
                <Link href="/lessons/songs/effects/distortion" className="block text-cyan-600 hover:text-cyan-800 text-sm">
                  → Distortion & Overdrive
                </Link>
                <Link href="/lessons/songs/effects/delay" className="block text-cyan-600 hover:text-cyan-800 text-sm">
                  → Delay & Echo Effects
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Advanced Topics:</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• MIDI control and automation systems</li>
                <li>• Recording direct vs. amplifier techniques</li>
                <li>• Live sound and PA system integration</li>
                <li>• Custom switching and routing systems</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
