import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ReverbEffectsPage() {
  return (
    <Layout>
      <Header
        title="Reverb & Ambience"
        subtitle="Master reverb effects to create depth, space, and atmosphere in your guitar sounds"
      />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Navigation */}
        <nav className="mb-8 text-sm">
          <Link href="/lessons/songs/effects" className="text-cyan-600 hover:text-cyan-800">
            ← Back to Effects Overview
          </Link>
        </nav>

        {/* Introduction */}
        <section className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Reverb</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Reverb is one of the most fundamental effects in music production, simulating the natural acoustic reflections 
            that occur in physical spaces. It adds depth, dimension, and atmosphere to your guitar sound, transforming 
            a dry signal into something that feels alive and situated in a real or imagined space.
          </p>
          <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
            <p className="text-gray-600 italic">
              "Reverb doesn't just add space—it creates the emotional context for your music, whether that's the intimate 
              closeness of a small room or the grandeur of a cathedral."
            </p>
          </div>
        </section>

        {/* Types of Reverb */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Reverb</h2>
          <div className="grid gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                🏠 <span className="ml-2">Room Reverb</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Characteristics:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Short decay time (0.3-1.2 seconds)</li>
                    <li>• Clear, defined reflections</li>
                    <li>• Natural, intimate sound</li>
                    <li>• Preserves note definition</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Musical Applications:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Country and folk guitar</li>
                    <li>• Jazz comping</li>
                    <li>• Blues rhythm parts</li>
                    <li>• Acoustic guitar simulation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                🎭 <span className="ml-2">Hall Reverb</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Characteristics:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Long decay time (2-8 seconds)</li>
                    <li>• Smooth, diffuse reflections</li>
                    <li>• Grand, spacious sound</li>
                    <li>• Rich harmonic content</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Musical Applications:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Ambient and post-rock</li>
                    <li>• Ballad solos</li>
                    <li>• Classical crossover</li>
                    <li>• Cinematic soundscapes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                🌸 <span className="ml-2">Spring Reverb</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Characteristics:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Distinctive "boing" character</li>
                    <li>• Medium decay with metallic overtones</li>
                    <li>• Vintage, analog warmth</li>
                    <li>• Crash sensitivity (dramatic effect when hit)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Musical Applications:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Surf rock</li>
                    <li>• Vintage country</li>
                    <li>• Rockabilly</li>
                    <li>• Classic rock rhythm</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                🏛️ <span className="ml-2">Plate Reverb</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Characteristics:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Bright, shimmering quality</li>
                    <li>• Fast initial buildup</li>
                    <li>• Dense, metallic character</li>
                    <li>• Classic studio sound</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Musical Applications:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Classic rock leads</li>
                    <li>• Vocal-style guitar lines</li>
                    <li>• 60s and 70s recordings</li>
                    <li>• Studio productions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Parameters */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding Reverb Parameters</h2>
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">🕰️ Decay Time</h3>
                <p className="text-gray-600 text-sm mb-2">How long the reverb takes to fade away</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Short (0.3-1s): Intimate, controlled</li>
                  <li>• Medium (1-3s): Natural, musical</li>
                  <li>• Long (3-8s): Dramatic, atmospheric</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">📏 Room Size</h3>
                <p className="text-gray-600 text-sm mb-2">The perceived size of the simulated space</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Small: Tight, present sound</li>
                  <li>• Medium: Balanced, natural</li>
                  <li>• Large: Spacious, enveloping</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">⚡ Pre-delay</h3>
                <p className="text-gray-600 text-sm mb-2">Time between dry signal and reverb onset</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• 0-10ms: Immediate, ambient</li>
                  <li>• 10-30ms: Natural separation</li>
                  <li>• 30ms+: Distinct echo effect</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">🎛️ Mix/Wet Level</h3>
                <p className="text-gray-600 text-sm mb-2">Balance between dry and reverb signal</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• 10-20%: Subtle enhancement</li>
                  <li>• 20-40%: Noticeable ambience</li>
                  <li>• 40%+: Atmospheric, dreamy</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Famous Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Reverb in Famous Songs</h2>
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">"In the Air Tonight" - Phil Collins</h3>
              <p className="text-blue-800 text-sm mb-3">
                <strong>Effect:</strong> Gated reverb on drums, but the guitar uses subtle hall reverb
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-blue-700 mb-2"><strong>Settings:</strong></p>
                  <ul className="text-blue-600 space-y-1">
                    <li>• Hall reverb, medium size</li>
                    <li>• 2-3 second decay</li>
                    <li>• 25% mix level</li>
                    <li>• High-frequency damping</li>
                  </ul>
                </div>
                <div>
                  <p className="text-blue-700 mb-2"><strong>Musical Effect:</strong></p>
                  <ul className="text-blue-600 space-y-1">
                    <li>• Creates atmospheric tension</li>
                    <li>• Supports the song's drama</li>
                    <li>• Complements the iconic drum sound</li>
                    <li>• Maintains clarity in the mix</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="font-semibold text-green-900 mb-2">"Wipeout" - The Surfaris</h3>
              <p className="text-green-800 text-sm mb-3">
                <strong>Effect:</strong> Classic spring reverb tank sound
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-green-700 mb-2"><strong>Settings:</strong></p>
                  <ul className="text-green-600 space-y-1">
                    <li>• Fender-style spring reverb</li>
                    <li>• High reverb level (6-8)</li>
                    <li>• Fast attack, medium decay</li>
                    <li>• Bright, splashy character</li>
                  </ul>
                </div>
                <div>
                  <p className="text-green-700 mb-2"><strong>Musical Effect:</strong></p>
                  <ul className="text-green-600 space-y-1">
                    <li>• Defines the surf rock genre</li>
                    <li>• Creates oceanic imagery</li>
                    <li>• Adds excitement and energy</li>
                    <li>• Vintage amp authenticity</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-2">"Shine On You Crazy Diamond" - Pink Floyd</h3>
              <p className="text-purple-800 text-sm mb-3">
                <strong>Effect:</strong> Long, lush hall reverb on lead guitar
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-purple-700 mb-2"><strong>Settings:</strong></p>
                  <ul className="text-purple-600 space-y-1">
                    <li>• Large hall reverb</li>
                    <li>• 4-6 second decay</li>
                    <li>• 40-50% mix level</li>
                    <li>• Smooth, diffuse character</li>
                  </ul>
                </div>
                <div>
                  <p className="text-purple-700 mb-2"><strong>Musical Effect:</strong></p>
                  <ul className="text-purple-600 space-y-1">
                    <li>• Creates vast, cosmic atmosphere</li>
                    <li>• Supports emotional expression</li>
                    <li>• Blends notes into sustained textures</li>
                    <li>• Enhances the song's epic scope</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technique and Application */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Reverb Techniques & Applications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
              <h3 className="font-semibold text-orange-900 mb-3">🎸 Playing Techniques</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <strong className="text-orange-800">Chord Voicings:</strong>
                  <p className="text-orange-700">Open voicings work better with reverb than dense, closed chords. The space allows reverb to enhance rather than muddy the sound.</p>
                </li>
                <li>
                  <strong className="text-orange-800">Note Sustain:</strong>
                  <p className="text-orange-700">Let notes ring and overlap slightly with reverb. This creates beautiful harmonic interactions and natural flow.</p>
                </li>
                <li>
                  <strong className="text-orange-800">Dynamic Control:</strong>
                  <p className="text-orange-700">Use your picking dynamics to control reverb perception. Softer playing makes reverb more prominent in the mix.</p>
                </li>
              </ul>
            </div>

            <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-200">
              <h3 className="font-semibold text-cyan-900 mb-3">🎛️ Mix Considerations</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <strong className="text-cyan-800">Frequency Balance:</strong>
                  <p className="text-cyan-700">Use high-cut filters on reverb returns to prevent harsh reflections. Low-cut prevents muddy buildup.</p>
                </li>
                <li>
                  <strong className="text-cyan-800">Stereo Imaging:</strong>
                  <p className="text-cyan-700">Wide stereo reverbs create space, while mono reverbs add depth without width. Match to your song's needs.</p>
                </li>
                <li>
                  <strong className="text-cyan-800">Send vs. Insert:</strong>
                  <p className="text-cyan-700">Use reverb as a send effect when possible to maintain mix clarity and create cohesive spatial imaging.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Reverb Mistakes</h2>
          <div className="bg-red-50 rounded-xl p-6 border border-red-200">
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h3 className="font-semibold text-red-900 mb-3">❌ What to Avoid</h3>
                <ul className="space-y-2 text-red-700">
                  <li>• Too much reverb overwhelming the dry signal</li>
                  <li>• Using long reverbs on fast, intricate passages</li>
                  <li>• Ignoring the song's tempo and mood</li>
                  <li>• Same reverb setting for all guitar parts</li>
                  <li>• Not considering other instruments in the mix</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-red-900 mb-3">✅ Best Practices</h3>
                <ul className="space-y-2 text-red-700">
                  <li>• Start with subtle settings and build up</li>
                  <li>• Match reverb to the song's emotional content</li>
                  <li>• Use pre-delay to maintain note definition</li>
                  <li>• EQ your reverb to fit the mix</li>
                  <li>• Consider the vocalist's reverb for cohesion</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Reverb Practice Exercises</h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-3">Exercise 1: Room Size Comparison</h3>
              <p className="text-gray-700 text-sm mb-3">
                Play the same chord progression (try Em - C - G - D) with three different reverb settings:
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Small room, short decay (intimate coffee shop)</li>
                <li>• Medium hall, moderate decay (concert hall)</li>
                <li>• Large hall, long decay (cathedral)</li>
              </ul>
              <p className="text-gray-600 text-sm mt-3">
                Notice how each setting changes the emotional impact and suggests different musical contexts.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-3">Exercise 2: Genre Matching</h3>
              <p className="text-gray-700 text-sm mb-3">
                Practice selecting appropriate reverb for different styles:
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Country: Short room reverb, bright character</li>
                <li>• Surf rock: Spring reverb, high mix level</li>
                <li>• Ambient: Long hall reverb, atmospheric</li>
                <li>• Blues: Subtle room reverb, natural feel</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-3">Exercise 3: Dynamic Reverb</h3>
              <p className="text-gray-700 text-sm mb-3">
                Use your guitar's volume control to create dynamic reverb effects:
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Set a moderate reverb level</li>
                <li>• Play at full volume, then roll back to create swells</li>
                <li>• Notice how reverb becomes more prominent at lower volumes</li>
                <li>• Practice creating ambient textures between chord changes</li>
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
                <Link href="/lessons/songs/effects/delay" className="block text-cyan-600 hover:text-cyan-800 text-sm">
                  → Delay & Echo Effects
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
                <li>• Convolution reverb and impulse responses</li>
                <li>• Reverse reverb effects</li>
                <li>• Gated reverb techniques</li>
                <li>• Reverb automation in DAWs</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
