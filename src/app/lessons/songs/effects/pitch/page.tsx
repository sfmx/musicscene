import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PitchEffectsPage() {
  return (
    <Layout>
      <Header
        title="Octave & Pitch Effects"
        subtitle="Explore pitch shifting, octave effects, and harmonizers for creating unique harmonic textures"
      />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Navigation */}
        <nav className="mb-8 text-sm">
          <Link href="/lessons/songs/effects" className="text-cyan-600 hover:text-cyan-800">
            ← Back to Effects Overview
          </Link>
        </nav>

        {/* Introduction */}
        <section className="mb-12 bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Pitch Effects</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pitch effects manipulate the fundamental frequency of your guitar signal, creating everything from subtle 
            detuning to dramatic octave shifts. These effects can double your guitar parts with harmony lines, create 
            bass-like low octaves, or transport your sound into entirely new frequency ranges. From the classic octave 
            fuzz of Hendrix to the complex harmonies of modern metal, pitch effects open up new sonic territories.
          </p>
          <div className="bg-white rounded-lg p-4 border-l-4 border-violet-500">
            <p className="text-gray-600 italic">
              "Pitch effects don't just change what you play—they multiply it, creating ensembles from single notes 
              and transforming your guitar into an orchestra of harmonic possibilities."
            </p>
          </div>
        </section>

        {/* How Pitch Detection Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Pitch Detection Works</h2>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <p className="text-blue-800 mb-4">
              <strong>Pitch effects</strong> first detect the fundamental frequency of your guitar signal, then 
              generate new frequencies based on mathematical relationships to create harmony, octaves, or entirely 
              different pitches.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Detection Methods:</h3>
                <ul className="text-blue-700 space-y-1">
                  <li>• <strong>Analog Frequency Doubling:</strong> Simple, fast, vintage character</li>
                  <li>• <strong>Digital Pitch Tracking:</strong> Accurate, complex harmonies possible</li>
                  <li>• <strong>Polyphonic Detection:</strong> Tracks multiple notes simultaneously</li>
                  <li>• <strong>Monophonic Detection:</strong> Single note at a time, more reliable</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Challenges:</h3>
                <ul className="text-blue-700 space-y-1">
                  <li>• Tracking speed and accuracy</li>
                  <li>• Handling complex chords</li>
                  <li>• Maintaining natural sound quality</li>
                  <li>• Avoiding glitches and artifacts</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Pitch Effects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Pitch Effects</h2>
          <div className="grid gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                🎯 <span className="ml-2">Octave Effects</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">How They Work:</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Generate a signal exactly one octave (12 semitones) above or below your original note. 
                    Octave up doubles the frequency, octave down halves it.
                  </p>
                  <h4 className="font-medium text-gray-700 mb-2">Common Types:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Octave Up: Adds brightness and presence</li>
                    <li>• Octave Down: Creates bass-like low end</li>
                    <li>• Dual Octave: Both up and down simultaneously</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Musical Applications:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Lead guitar: Adding sparkle and cutting power</li>
                    <li>• Bass simulation: Creating low-end thickness</li>
                    <li>• Organ-like textures: Multiple octaves together</li>
                    <li>• 12-string guitar simulation</li>
                  </ul>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-green-800 text-sm">
                      <strong>Famous Example:</strong> Jimi Hendrix's "Purple Haze" intro uses octave fuzz.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                🎼 <span className="ml-2">Pitch Shifters</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">How They Work:</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Shift pitch by any interval—not just octaves. Can create harmonies in specific keys, 
                    detune effects, or dramatic pitch bends.
                  </p>
                  <h4 className="font-medium text-gray-700 mb-2">Key Features:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Variable pitch intervals</li>
                    <li>• Real-time pitch bending</li>
                    <li>• Multiple voices simultaneously</li>
                    <li>• Mix control for blend with dry signal</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Musical Applications:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Harmonized guitar solos</li>
                    <li>• Detuning for alternative tunings</li>
                    <li>• Creating interval harmonies (3rds, 5ths, etc.)</li>
                    <li>• Special effects and sound design</li>
                  </ul>
                  <div className="mt-4 p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <p className="text-purple-800 text-sm">
                      <strong>Pro Tip:</strong> Use expression pedal control for smooth pitch bends and dives.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                🎵 <span className="ml-2">Intelligent Harmonizers</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">How They Work:</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Analyze your playing and automatically generate harmonies based on selected keys and scales. 
                    More musically intelligent than simple pitch shifters.
                  </p>
                  <h4 className="font-medium text-gray-700 mb-2">Advanced Features:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Key and scale selection</li>
                    <li>• Multiple harmony voices</li>
                    <li>• Voice leading and chord progressions</li>
                    <li>• Real-time key changes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Musical Applications:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Professional studio harmonies</li>
                    <li>• Live performance enhancement</li>
                    <li>• Complex arrangement creation</li>
                    <li>• Jazz and fusion harmony</li>
                  </ul>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-blue-800 text-sm">
                      <strong>Example:</strong> TC Electronic VoiceLive, Eventide H9 Harmonizer
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                🎸 <span className="ml-2">Whammy/Dive Bomb Effects</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">How They Work:</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Real-time pitch shifting controlled by an expression pedal, simulating the effect of 
                    a whammy bar or creating dramatic pitch dives and climbs.
                  </p>
                  <h4 className="font-medium text-gray-700 mb-2">Control Options:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Expression pedal for real-time control</li>
                    <li>• Preset intervals (octave, fifth, etc.)</li>
                    <li>• Momentary footswitch triggering</li>
                    <li>• Customizable pitch ranges</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Musical Applications:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Rock and metal lead effects</li>
                    <li>• Simulating extreme whammy bar use</li>
                    <li>• Creating impossible pitch intervals</li>
                    <li>• Sound effects and noise music</li>
                  </ul>
                  <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
                    <p className="text-red-800 text-sm">
                      <strong>Famous User:</strong> Tom Morello (Rage Against the Machine) signature technique
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Musical Theory Behind Harmonies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Musical Theory for Pitch Effects</h2>
          <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-amber-900 mb-3">🎼 Common Intervals</h3>
                <ul className="text-amber-800 text-sm space-y-2">
                  <li>• <strong>Perfect 5th (+7 semitones):</strong> Strong, stable harmony</li>
                  <li>• <strong>Major 3rd (+4 semitones):</strong> Sweet, consonant harmony</li>
                  <li>• <strong>Minor 3rd (+3 semitones):</strong> Darker, more complex</li>
                  <li>• <strong>Perfect 4th (+5 semitones):</strong> Open, suspended sound</li>
                  <li>• <strong>Octave (+12 semitones):</strong> Same note, different register</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-amber-900 mb-3">🎵 Key-Based Harmonies</h3>
                <ul className="text-amber-800 text-sm space-y-2">
                  <li>• <strong>Diatonic Harmonies:</strong> Stay within the key signature</li>
                  <li>• <strong>Parallel Intervals:</strong> Same interval throughout</li>
                  <li>• <strong>Voice Leading:</strong> Smooth movement between chords</li>
                  <li>• <strong>Modal Harmonies:</strong> Based on different modes</li>
                </ul>
                <div className="mt-4 p-3 bg-white rounded-lg border border-amber-300">
                  <p className="text-amber-700 text-sm">
                    <strong>Example:</strong> In C major, harmonizing with 3rds: C→E, D→F, E→G, F→A, etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Famous Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pitch Effects in Famous Songs</h2>
          <div className="space-y-6">
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-2">"Purple Haze" - Jimi Hendrix</h3>
              <p className="text-purple-800 text-sm mb-3">
                <strong>Effect:</strong> Octavia octave-up fuzz on the intro riff
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-purple-700 mb-2"><strong>Settings:</strong></p>
                  <ul className="text-purple-600 space-y-1">
                    <li>• Octave-up frequency doubling</li>
                    <li>• Combined with fuzz distortion</li>
                    <li>• Full wet signal (no dry blend)</li>
                    <li>• Analog frequency multiplication</li>
                  </ul>
                </div>
                <div>
                  <p className="text-purple-700 mb-2"><strong>Musical Effect:</strong></p>
                  <ul className="text-purple-600 space-y-1">
                    <li>• Creates otherworldly, psychedelic texture</li>
                    <li>• Adds cutting treble presence</li>
                    <li>• Defines the song's alien character</li>
                    <li>• Influenced generations of rock guitarists</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">"My Sharona" - The Knack</h3>
              <p className="text-blue-800 text-sm mb-3">
                <strong>Effect:</strong> Octave-down effect on the bass line
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-blue-700 mb-2"><strong>Settings:</strong></p>
                  <ul className="text-blue-600 space-y-1">
                    <li>• Octave-down pitch shifting</li>
                    <li>• Blended with original guitar</li>
                    <li>• Clean signal path</li>
                    <li>• Simulates bass guitar</li>
                  </ul>
                </div>
                <div>
                  <p className="text-blue-700 mb-2"><strong>Musical Effect:</strong></p>
                  <ul className="text-blue-600 space-y-1">
                    <li>• Creates thick low-end foundation</li>
                    <li>• Adds harmonic richness</li>
                    <li>• Fills out the arrangement</li>
                    <li>• Demonstrates octave-down utility</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="font-semibold text-green-900 mb-2">"Bulls on Parade" - Rage Against the Machine</h3>
              <p className="text-green-800 text-sm mb-3">
                <strong>Effect:</strong> DigiTech Whammy for radical pitch bends
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-green-700 mb-2"><strong>Settings:</strong></p>
                  <ul className="text-green-600 space-y-1">
                    <li>• Expression pedal controlled</li>
                    <li>• Wide pitch range (2+ octaves)</li>
                    <li>• Aggressive, digital character</li>
                    <li>• Used for rhythmic emphasis</li>
                  </ul>
                </div>
                <div>
                  <p className="text-green-700 mb-2"><strong>Musical Effect:</strong></p>
                  <ul className="text-green-600 space-y-1">
                    <li>• Creates aggressive, modern sound</li>
                    <li>• Adds rhythmic and melodic interest</li>
                    <li>• Defines Tom Morello's signature style</li>
                    <li>• Influences alternative and nu-metal</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
              <h3 className="font-semibold text-orange-900 mb-2">"The Spirit of Radio" - Rush</h3>
              <p className="text-orange-800 text-sm mb-3">
                <strong>Effect:</strong> Harmonized guitar solos (Alex Lifeson)
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-orange-700 mb-2"><strong>Settings:</strong></p>
                  <ul className="text-orange-600 space-y-1">
                    <li>• Intelligent harmonizer</li>
                    <li>• Perfect 5th and 3rd intervals</li>
                    <li>• Key-based harmony generation</li>
                    <li>• Mixed with original signal</li>
                  </ul>
                </div>
                <div>
                  <p className="text-orange-700 mb-2"><strong>Musical Effect:</strong></p>
                  <ul className="text-orange-600 space-y-1">
                    <li>• Creates full, orchestral guitar sound</li>
                    <li>• Adds sophistication to solos</li>
                    <li>• Supports progressive rock complexity</li>
                    <li>• Demonstrates musical harmony usage</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Considerations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Considerations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="font-semibold text-red-900 mb-3">⚠️ Tracking Challenges</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <strong className="text-red-800">Clean Signal Input:</strong>
                  <p className="text-red-700">Pitch detection works best with clean, undistorted signals. Place pitch effects early in your chain.</p>
                </li>
                <li>
                  <strong className="text-red-800">Single Note Playing:</strong>
                  <p className="text-red-700">Monophonic pitch effects track single notes more reliably than chords or complex intervals.</p>
                </li>
                <li>
                  <strong className="text-red-800">Attack Sensitivity:</strong>
                  <p className="text-red-700">Consistent pick attack helps tracking accuracy. Compression before pitch effects can help.</p>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-3">🔧 Optimization Tips</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <strong className="text-blue-800">Signal Chain Position:</strong>
                  <p className="text-blue-700">Guitar → Compression → Pitch Effects → Distortion → Modulation → Time Effects</p>
                </li>
                <li>
                  <strong className="text-blue-800">Playing Technique:</strong>
                  <p className="text-blue-700">Clean, articulate playing improves tracking. Avoid overlapping notes when possible.</p>
                </li>
                <li>
                  <strong className="text-blue-800">Latency Awareness:</strong>
                  <p className="text-blue-700">Digital pitch effects introduce small delays. Account for this in timing-critical situations.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Creative Applications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Creative Pitch Effect Techniques</h2>
          <div className="grid gap-6">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-3">🎨 Layering Techniques</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Octave Stacking:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Original + Octave up + Octave down</li>
                    <li>• Creates organ-like textures</li>
                    <li>• Massive, full-frequency sound</li>
                    <li>• Great for power chords and riffs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Interval Combinations:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Mix multiple harmony intervals</li>
                    <li>• Create chord-like textures from single notes</li>
                    <li>• Build complex harmonic structures</li>
                    <li>• Experiment with dissonant intervals</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-3">🎛️ Expression Control</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Real-Time Pitch Bending:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Expression pedal for smooth transitions</li>
                    <li>• Create impossible pitch ranges</li>
                    <li>• Simulate extreme whammy bar effects</li>
                    <li>• Add movement to sustained notes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Momentary Effects:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Quick octave jumps for emphasis</li>
                    <li>• Temporary harmonies on key notes</li>
                    <li>• Rhythmic pitch accents</li>
                    <li>• Dynamic arrangement enhancement</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-3">🔄 Feedback and Self-Oscillation</h3>
              <p className="text-gray-700 text-sm mb-3">
                Some pitch effects can create feedback loops and self-generating tones:
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Set up regenerative feedback circuits</li>
                <li>• Create evolving harmonic drones</li>
                <li>• Use for ambient and experimental music</li>
                <li>• Control with expression for dynamic textures</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Pitch Effect Mistakes</h2>
          <div className="bg-red-50 rounded-xl p-6 border border-red-200">
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h3 className="font-semibold text-red-900 mb-3">❌ What to Avoid</h3>
                <ul className="space-y-2 text-red-700">
                  <li>• Using pitch effects on overly distorted signals</li>
                  <li>• Playing complex chords through monophonic pitch shifters</li>
                  <li>• Ignoring the musical context and key</li>
                  <li>• Over-relying on effects instead of developing technique</li>
                  <li>• Not considering mix implications of frequency doubling</li>
                  <li>• Using harmonies that clash with other instruments</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-red-900 mb-3">✅ Best Practices</h3>
                <ul className="space-y-2 text-red-700">
                  <li>• Start with clean signals for best tracking</li>
                  <li>• Understand basic music theory for harmony</li>
                  <li>• Use pitch effects to enhance, not replace, musical ideas</li>
                  <li>• Practice clean playing technique first</li>
                  <li>• Consider how effects fit in the full mix</li>
                  <li>• Learn when NOT to use pitch effects</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pitch Effect Practice Exercises</h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-3">Exercise 1: Interval Recognition</h3>
              <p className="text-gray-700 text-sm mb-3">
                Practice single notes with different pitch shift intervals:
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Play C note, add perfect 5th (G) harmony</li>
                <li>• Try major 3rd (E), minor 3rd (E♭), perfect 4th (F)</li>
                <li>• Notice how each interval creates different emotional colors</li>
                <li>• Practice with different root notes to hear interval consistency</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-3">Exercise 2: Octave Layering</h3>
              <p className="text-gray-700 text-sm mb-3">
                Experiment with octave combinations on power chords:
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Play a simple power chord (E5, A5, D5)</li>
                <li>• Add octave up for brightness</li>
                <li>• Add octave down for bass foundation</li>
                <li>• Try all three together for massive sound</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-3">Exercise 3: Melody Harmonization</h3>
              <p className="text-gray-700 text-sm mb-3">
                Take a simple melody and practice adding harmonies:
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Start with Mary Had a Little Lamb or similar simple melody</li>
                <li>• Set harmonizer to key of G major</li>
                <li>• Try different harmony intervals (3rd, 5th, 6th)</li>
                <li>• Notice how some intervals work better than others</li>
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
                <Link href="/lessons/songs/effects/modulation" className="block text-cyan-600 hover:text-cyan-800 text-sm">
                  → Modulation Effects
                </Link>
                <Link href="/lessons/songs/effects/distortion" className="block text-cyan-600 hover:text-cyan-800 text-sm">
                  → Distortion & Overdrive
                </Link>
                <Link href="/lessons/songs/effects/signal-chain" className="block text-cyan-600 hover:text-cyan-800 text-sm">
                  → Signal Chain & Multi-Effects
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Advanced Topics:</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Polyphonic pitch detection and tracking</li>
                <li>• Custom harmony programming</li>
                <li>• MIDI control and automation</li>
                <li>• Granular synthesis applications</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
