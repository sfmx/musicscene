import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ModulationEffectsPage() {
  return (
    <Layout>
      <Header
        title="Modulation Effects"
        subtitle="Master chorus, phaser, flanger, and tremolo to create movement and texture in your guitar sound"
      />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Navigation */}
        <nav className="mb-8 text-sm">
          <Link href="/lessons/songs/effects" className="text-cyan-600 hover:text-cyan-800">
            ← Back to Effects Overview
          </Link>
        </nav>

        {/* Introduction */}
        <section className="mb-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Modulation</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Modulation effects work by continuously varying certain parameters of your guitar signal—whether that's 
            pitch, amplitude, frequency, or phase. This creates movement, texture, and life in your sound, transforming 
            static tones into dynamic, evolving textures that can enhance everything from subtle rhythm parts to 
            otherworldly lead sounds.
          </p>
          <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
            <p className="text-gray-600 italic">
              "Modulation effects don't just change your sound—they make it breathe, pulse, and move through space, 
              adding the organic quality that makes electronic effects feel musical and alive."
            </p>
          </div>
        </section>

        {/* LFO Fundamentals */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">LFO: The Heart of Modulation</h2>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <p className="text-blue-800 mb-4">
              <strong>Low Frequency Oscillator (LFO)</strong> is the engine behind most modulation effects. 
              It generates a repeating wave that modulates various parameters of your signal.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Common LFO Wave Shapes:</h3>
                <ul className="text-blue-700 space-y-1">
                  <li>• <strong>Sine:</strong> Smooth, natural modulation</li>
                  <li>• <strong>Triangle:</strong> Linear up/down movement</li>
                  <li>• <strong>Square:</strong> Abrupt on/off switching</li>
                  <li>• <strong>Sawtooth:</strong> Gradual rise, sudden drop</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Key Parameters:</h3>
                <ul className="text-blue-700 space-y-1">
                  <li>• <strong>Rate/Speed:</strong> How fast the LFO cycles</li>
                  <li>• <strong>Depth:</strong> How much the parameter changes</li>
                  <li>• <strong>Phase:</strong> Starting point of the wave cycle</li>
                  <li>• <strong>Sync:</strong> Tempo-locked or free-running</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Chorus */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Chorus: Doubling and Thickness</h2>
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">How Chorus Works</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Chorus creates multiple "voices" by slightly delaying and pitch-modulating copies of your signal. 
                  The subtle pitch variations simulate the natural imperfections when multiple musicians play the same part.
                </p>
                <h4 className="font-medium text-gray-700 mb-2">Key Parameters:</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• <strong>Rate:</strong> LFO speed (0.1-10 Hz)</li>
                  <li>• <strong>Depth:</strong> Pitch modulation amount</li>
                  <li>• <strong>Mix:</strong> Wet/dry balance</li>
                  <li>• <strong>Delay Time:</strong> Base delay (5-40ms)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Musical Applications</h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• <strong>Clean Rhythm:</strong> Adds richness without distortion</li>
                  <li>• <strong>Arpeggios:</strong> Creates shimmering, harp-like textures</li>
                  <li>• <strong>Ballad Leads:</strong> Smooth, singing sustain</li>
                  <li>• <strong>12-String Simulation:</strong> Octave chorus for jangly sound</li>
                </ul>
                <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-green-800 text-sm">
                    <strong>Pro Tip:</strong> Use subtle chorus (low rate, shallow depth) for natural thickening, 
                    or dramatic settings for '80s-style textures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Phaser */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Phaser: Sweeping Frequency Notches</h2>
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">How Phaser Works</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Phaser splits your signal, delays one copy slightly, then mixes them back together. 
                  This creates moving notches in the frequency spectrum, producing the characteristic "swooshing" sound.
                </p>
                <h4 className="font-medium text-gray-700 mb-2">Key Parameters:</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• <strong>Rate:</strong> Sweep speed</li>
                  <li>• <strong>Depth:</strong> Range of frequency sweep</li>
                  <li>• <strong>Feedback:</strong> Resonance and intensity</li>
                  <li>• <strong>Stages:</strong> Number of phase-shift stages (4, 6, 8, 12)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Musical Applications</h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• <strong>Funk Rhythm:</strong> Percussive, rhythmic sweeping</li>
                  <li>• <strong>Psychedelic Leads:</strong> Swirling, hypnotic textures</li>
                  <li>• <strong>Space Rock:</strong> Atmospheric, otherworldly sounds</li>
                  <li>• <strong>Progressive Rock:</strong> Complex, evolving timbres</li>
                </ul>
                <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="text-orange-800 text-sm">
                    <strong>Stage Count:</strong> More stages = deeper notches and more dramatic effect. 
                    4-stage is subtle, 12-stage is very pronounced.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flanger */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Flanger: The Jet Engine Effect</h2>
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">How Flanger Works</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Similar to chorus but with shorter delays (0.5-10ms) and more feedback. 
                  The very short delay times create dramatic comb filtering effects, 
                  producing the characteristic "jet plane" swoosh.
                </p>
                <h4 className="font-medium text-gray-700 mb-2">Key Parameters:</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• <strong>Rate:</strong> LFO speed</li>
                  <li>• <strong>Depth:</strong> Delay time modulation</li>
                  <li>• <strong>Feedback:</strong> Regeneration amount</li>
                  <li>• <strong>Manual:</strong> Center delay time</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Musical Applications</h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• <strong>Rock Solos:</strong> Dramatic sweeps and buildups</li>
                  <li>• <strong>Ambient Textures:</strong> Slow, evolving soundscapes</li>
                  <li>• <strong>Sound Effects:</strong> Jet planes, whooshes</li>
                  <li>• <strong>Filter Sweeps:</strong> Manual control for expressive sweeps</li>
                </ul>
                <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-red-800 text-sm">
                    <strong>High Feedback Warning:</strong> Extreme feedback settings can create 
                    oscillation and very loud sounds. Start conservatively!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tremolo */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tremolo: Amplitude Modulation</h2>
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">How Tremolo Works</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Tremolo modulates the amplitude (volume) of your signal, creating rhythmic pulsing. 
                  It's one of the oldest effects, built into many vintage amplifiers.
                </p>
                <h4 className="font-medium text-gray-700 mb-2">Key Parameters:</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• <strong>Rate:</strong> Pulse speed</li>
                  <li>• <strong>Depth:</strong> Volume variation amount</li>
                  <li>• <strong>Waveform:</strong> Shape of modulation</li>
                  <li>• <strong>Hard/Soft:</strong> Abrupt vs. smooth transitions</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Musical Applications</h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• <strong>Surf Rock:</strong> Fast, aggressive tremolo</li>
                  <li>• <strong>Country:</strong> Subtle rhythmic pulsing</li>
                  <li>• <strong>Ambient:</strong> Slow, breathing textures</li>
                  <li>• <strong>Rhythmic Patterns:</strong> Synced to song tempo</li>
                </ul>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-blue-800 text-sm">
                    <strong>Tremolo vs. Vibrato:</strong> Tremolo modulates volume, vibrato modulates pitch. 
                    Many guitar amps labeled "vibrato" actually produce tremolo!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Famous Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Modulation in Famous Songs</h2>
          <div className="space-y-6">
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-2">"Money for Nothing" - Dire Straits</h3>
              <p className="text-purple-800 text-sm mb-3">
                <strong>Effect:</strong> Chorus on the main riff guitar
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-purple-700 mb-2"><strong>Settings:</strong></p>
                  <ul className="text-purple-600 space-y-1">
                    <li>• Medium rate chorus</li>
                    <li>• Moderate depth</li>
                    <li>• Clean tone with subtle drive</li>
                    <li>• Wide stereo spread</li>
                  </ul>
                </div>
                <div>
                  <p className="text-purple-700 mb-2"><strong>Musical Effect:</strong></p>
                  <ul className="text-purple-600 space-y-1">
                    <li>• Adds richness to single-note riff</li>
                    <li>• Creates '80s character</li>
                    <li>• Supports the song's polished production</li>
                    <li>• Enhances the fingerpicked technique</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
              <h3 className="font-semibold text-orange-900 mb-2">"Barracuda" - Heart</h3>
              <p className="text-orange-800 text-sm mb-3">
                <strong>Effect:</strong> Phaser on the main riff
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-orange-700 mb-2"><strong>Settings:</strong></p>
                  <ul className="text-orange-600 space-y-1">
                    <li>• Slow to medium rate phaser</li>
                    <li>• High feedback for intensity</li>
                    <li>• 6-8 stage phaser</li>
                    <li>• Mixed with overdriven amp</li>
                  </ul>
                </div>
                <div>
                  <p className="text-orange-700 mb-2"><strong>Musical Effect:</strong></p>
                  <ul className="text-orange-600 space-y-1">
                    <li>• Creates menacing, aggressive character</li>
                    <li>• Emphasizes the riff's rhythm</li>
                    <li>• Adds movement to sustained notes</li>
                    <li>• Defines the song's sonic signature</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="font-semibold text-green-900 mb-2">"Miserlou" - Dick Dale</h3>
              <p className="text-green-800 text-sm mb-3">
                <strong>Effect:</strong> Fast tremolo with reverb
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-green-700 mb-2"><strong>Settings:</strong></p>
                  <ul className="text-green-600 space-y-1">
                    <li>• Very fast tremolo rate</li>
                    <li>• Deep intensity</li>
                    <li>• Combined with spring reverb</li>
                    <li>• Clean, bright amp tone</li>
                  </ul>
                </div>
                <div>
                  <p className="text-green-700 mb-2"><strong>Musical Effect:</strong></p>
                  <ul className="text-green-600 space-y-1">
                    <li>• Creates urgent, driving energy</li>
                    <li>• Defines surf rock aesthetic</li>
                    <li>• Adds percussive element</li>
                    <li>• Emphasizes the fast picking technique</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-200">
              <h3 className="font-semibold text-cyan-900 mb-2">"Ain't Talkin' 'Bout Love" - Van Halen</h3>
              <p className="text-cyan-800 text-sm mb-3">
                <strong>Effect:</strong> Flanger on the main riff
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-cyan-700 mb-2"><strong>Settings:</strong></p>
                  <ul className="text-cyan-600 space-y-1">
                    <li>• Medium rate flanger</li>
                    <li>• Moderate feedback</li>
                    <li>• Manual sweep for emphasis</li>
                    <li>• High-gain Marshall tone</li>
                  </ul>
                </div>
                <div>
                  <p className="text-cyan-700 mb-2"><strong>Musical Effect:</strong></p>
                  <ul className="text-cyan-600 space-y-1">
                    <li>• Adds jet-like swooshes</li>
                    <li>• Enhances the riff's aggression</li>
                    <li>• Creates '70s hard rock character</li>
                    <li>• Complements Eddie's playing style</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Techniques */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Creative Modulation Techniques</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
              <h3 className="font-semibold text-indigo-900 mb-3">🎛️ Parameter Control</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <strong className="text-indigo-800">Expression Pedal Control:</strong>
                  <p className="text-indigo-700">Control rate or depth with an expression pedal for real-time modulation shaping.</p>
                </li>
                <li>
                  <strong className="text-indigo-800">Tempo Sync:</strong>
                  <p className="text-indigo-700">Lock LFO rates to song tempo for rhythmically relevant modulation (1/4 notes, 1/8 notes, etc.).</p>
                </li>
                <li>
                  <strong className="text-indigo-800">Manual Mode:</strong>
                  <p className="text-indigo-700">Turn off the LFO and manually control the sweep for precise, musical phrasing.</p>
                </li>
              </ul>
            </div>

            <div className="bg-pink-50 rounded-xl p-6 border border-pink-200">
              <h3 className="font-semibold text-pink-900 mb-3">🔄 Effect Combinations</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <strong className="text-pink-800">Chorus + Delay:</strong>
                  <p className="text-pink-700">Classic combination for lush, spacious lead sounds.</p>
                </li>
                <li>
                  <strong className="text-pink-800">Phaser + Distortion:</strong>
                  <p className="text-pink-700">Place phaser after distortion for dramatic, harmonically rich sweeps.</p>
                </li>
                <li>
                  <strong className="text-pink-800">Tremolo + Reverb:</strong>
                  <p className="text-pink-700">Pulsing ambient textures, great for atmospheric parts.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Modulation Mistakes</h2>
          <div className="bg-red-50 rounded-xl p-6 border border-red-200">
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h3 className="font-semibold text-red-900 mb-3">❌ What to Avoid</h3>
                <ul className="space-y-2 text-red-700">
                  <li>• Using the same rate for all modulation effects</li>
                  <li>• Maximum depth settings that overwhelm the dry signal</li>
                  <li>• Ignoring the musical context and tempo</li>
                  <li>• Combining too many modulation effects simultaneously</li>
                  <li>• Using effects as a crutch for poor playing technique</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-red-900 mb-3">✅ Best Practices</h3>
                <ul className="space-y-2 text-red-700">
                  <li>• Start with subtle settings and gradually increase</li>
                  <li>• Match modulation rates to musical phrases</li>
                  <li>• Use tempo sync when appropriate</li>
                  <li>• Consider the other instruments in the arrangement</li>
                  <li>• Learn to play cleanly before adding modulation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Modulation Practice Exercises</h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-3">Exercise 1: LFO Rate Relationships</h3>
              <p className="text-gray-700 text-sm mb-3">
                Set up a chorus effect and play a sustained chord. Experiment with these rate relationships:
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Very slow (0.1-0.5 Hz): Subtle, almost imperceptible movement</li>
                <li>• Slow (0.5-2 Hz): Natural, musical breathing</li>
                <li>• Medium (2-5 Hz): Obvious but musical</li>
                <li>• Fast (5-10 Hz): Dramatic, effect-heavy</li>
              </ul>
              <p className="text-gray-600 text-sm mt-3">
                Notice how each rate creates a different emotional impact and musical character.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-3">Exercise 2: Effect Comparison</h3>
              <p className="text-gray-700 text-sm mb-3">
                Play the same musical phrase (try an Am pentatonic run) through each modulation effect:
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Chorus: Notice the thickening and shimmer</li>
                <li>• Phaser: Hear the frequency notches sweeping</li>
                <li>• Flanger: Feel the dramatic jet-plane swooshes</li>
                <li>• Tremolo: Experience the rhythmic pulsing</li>
              </ul>
              <p className="text-gray-600 text-sm mt-3">
                This helps you understand when each effect is most musically appropriate.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-3">Exercise 3: Tempo-Synced Modulation</h3>
              <p className="text-gray-700 text-sm mb-3">
                Use a metronome at 120 BPM and practice these tempo relationships:
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Tremolo at quarter note rate (2 Hz at 120 BPM)</li>
                <li>• Phaser at half note rate (1 Hz at 120 BPM)</li>
                <li>• Chorus at whole note rate (0.5 Hz at 120 BPM)</li>
              </ul>
              <p className="text-gray-600 text-sm mt-3">
                Learn to hear how modulation can enhance or fight against the song's rhythm.
              </p>
            </div>
          </div>
        </section>

        {/* Advanced Concepts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced Modulation Concepts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
              <h3 className="font-semibold text-yellow-900 mb-3">🔬 Phase Relationships</h3>
              <p className="text-yellow-800 text-sm mb-3">
                When using multiple modulation effects, consider how their LFOs interact:
              </p>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• In-phase: Effects reinforce each other</li>
                <li>• Out-of-phase: Creates complex, evolving patterns</li>
                <li>• Different rates: Creates beating and interference patterns</li>
              </ul>
            </div>

            <div className="bg-teal-50 rounded-xl p-6 border border-teal-200">
              <h3 className="font-semibold text-teal-900 mb-3">📊 Stereo Modulation</h3>
              <p className="text-teal-800 text-sm mb-3">
                Stereo modulation effects can create width and movement:
              </p>
              <ul className="text-teal-700 text-sm space-y-1">
                <li>• Opposite phase LFOs for ping-pong effects</li>
                <li>• Different rates on left/right for complexity</li>
                <li>• Stereo chorus for wide, enveloping textures</li>
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
                <Link href="/lessons/songs/effects/wah" className="block text-cyan-600 hover:text-cyan-800 text-sm">
                  → Wah & Filter Effects
                </Link>
                <Link href="/lessons/songs/effects/pitch" className="block text-cyan-600 hover:text-cyan-800 text-sm">
                  → Octave & Pitch Effects
                </Link>
                <Link href="/lessons/songs/effects/signal-chain" className="block text-cyan-600 hover:text-cyan-800 text-sm">
                  → Signal Chain & Multi-Effects
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Advanced Topics:</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Ring modulation and frequency modulation</li>
                <li>• LFO waveform shaping</li>
                <li>• Envelope-controlled modulation</li>
                <li>• Multi-tap modulation delays</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
