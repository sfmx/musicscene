import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CompressionEffectsPage() {
  return (
    <Layout>
      <Header
        title="Compression & Dynamics"
        subtitle="Master compression to control dynamics, enhance sustain, and improve your overall guitar sound"
      />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Navigation */}
        <nav className="mb-8 text-sm">
          <Link href="/lessons/songs/effects" className="text-cyan-600 hover:text-cyan-800">
            ← Back to Effects Overview
          </Link>
        </nav>

        {/* Introduction */}
        <section className="mb-12 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Compression</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Compression is one of the most fundamental yet misunderstood effects in guitar playing. While it may seem 
            transparent compared to distortion or delay, compression profoundly affects your guitar's dynamics, sustain, 
            and overall feel. It can make your playing more consistent, enhance sustain, and create the kind of polished, 
            professional sound heard on countless recordings.
          </p>
          <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
            <p className="text-gray-600 italic">
              "Compression doesn't just control volume—it shapes the very character of your attack, sustain, and 
              release, making it one of the most powerful tools for crafting your personal guitar sound."
            </p>
          </div>
        </section>

        {/* How Compression Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Compression Works</h2>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <p className="text-blue-800 mb-4">
              <strong>Compression reduces the dynamic range</strong> of your guitar signal by automatically 
              lowering the volume of loud signals and raising the volume of quiet signals. This creates 
              more consistent levels while affecting the attack and sustain characteristics.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">The Process:</h3>
                <ol className="text-blue-700 space-y-1 list-decimal list-inside">
                  <li>Signal exceeds the threshold level</li>
                  <li>Compressor reduces gain by the ratio amount</li>
                  <li>Attack time determines how quickly compression starts</li>
                  <li>Release time controls how quickly it stops</li>
                  <li>Make-up gain compensates for level reduction</li>
                </ol>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Musical Effects:</h3>
                <ul className="text-blue-700 space-y-1">
                  <li>• More consistent picking dynamics</li>
                  <li>• Enhanced sustain on single notes</li>
                  <li>• Tighter, more focused sound</li>
                  <li>• Better balance in complex playing</li>
                  <li>• Increased perceived loudness</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Parameters */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Compression Parameters</h2>
          <div className="grid gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                🎯 <span className="ml-2">Threshold</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">What It Does:</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Sets the level where compression begins. Signals above this level get compressed; 
                    signals below pass through unaffected.
                  </p>
                  <h4 className="font-medium text-gray-700 mb-2">Settings Guide:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• High threshold: Only peaks get compressed</li>
                    <li>• Medium threshold: Most normal playing compressed</li>
                    <li>• Low threshold: Everything gets compressed</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Musical Impact:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Higher = more dynamic range preserved</li>
                    <li>• Lower = more consistent, controlled sound</li>
                    <li>• Affects how much your playing dynamics come through</li>
                  </ul>
                  <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="text-yellow-800 text-sm">
                      <strong>Tip:</strong> Start with a medium threshold and adjust based on your playing strength.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                📊 <span className="ml-2">Ratio</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">What It Does:</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Determines how much the signal is reduced once it exceeds the threshold. 
                    Expressed as a ratio like 4:1, meaning 4dB input creates 1dB output above threshold.
                  </p>
                  <h4 className="font-medium text-gray-700 mb-2">Common Ratios:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• 2:1 to 4:1: Gentle, musical compression</li>
                    <li>• 4:1 to 8:1: Noticeable, controlled compression</li>
                    <li>• 10:1+: Heavy limiting, dramatic effect</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Musical Applications:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Low ratios: Transparent level control</li>
                    <li>• Medium ratios: Classic guitar compression</li>
                    <li>• High ratios: Special effects, country "squash"</li>
                  </ul>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-green-800 text-sm">
                      <strong>Sweet Spot:</strong> 3:1 to 6:1 works for most guitar applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                ⚡ <span className="ml-2">Attack & Release</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Attack Time:</h4>
                  <p className="text-gray-600 text-sm mb-2">How quickly compression starts after threshold is exceeded.</p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Fast (0.1-1ms): Catches note attacks, smooths picking</li>
                    <li>• Medium (1-10ms): Balanced, musical response</li>
                    <li>• Slow (10ms+): Preserves pick attack transients</li>
                  </ul>
                  
                  <h4 className="font-medium text-gray-700 mb-2 mt-4">Release Time:</h4>
                  <p className="text-gray-600 text-sm mb-2">How quickly compression stops after signal drops below threshold.</p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Fast (10-100ms): Quick recovery, can sound pumpy</li>
                    <li>• Medium (100ms-1s): Natural, musical decay</li>
                    <li>• Slow (1s+): Sustained, smooth release</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Musical Effects:</h4>
                  <ul className="text-gray-600 text-sm space-y-2 mb-4">
                    <li>• <strong>Fast Attack:</strong> Smooths aggressive picking, reduces note-to-note variation</li>
                    <li>• <strong>Slow Attack:</strong> Preserves note attack character, maintains punch</li>
                    <li>• <strong>Fast Release:</strong> Natural decay, can create pumping on sustained notes</li>
                    <li>• <strong>Slow Release:</strong> Enhanced sustain, smoother overall response</li>
                  </ul>
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-blue-800 text-sm">
                      <strong>Pro Tip:</strong> Match release time to the tempo and style of your music.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Compressors */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Guitar Compressors</h2>
          <div className="grid gap-6">
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
              <h3 className="font-semibold text-orange-900 mb-3">🔧 Optical Compressors</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-orange-700 mb-2"><strong>How They Work:</strong></p>
                  <p className="text-orange-600 mb-3">Use a light source and photocell to control gain reduction. The brighter the light, the more compression.</p>
                  <p className="text-orange-700 mb-2"><strong>Characteristics:</strong></p>
                  <ul className="text-orange-600 space-y-1">
                    <li>• Smooth, musical compression</li>
                    <li>• Slow, natural attack and release</li>
                    <li>• Transparent when set conservatively</li>
                    <li>• Vintage warmth and character</li>
                  </ul>
                </div>
                <div>
                  <p className="text-orange-700 mb-2"><strong>Best For:</strong></p>
                  <ul className="text-orange-600 space-y-1">
                    <li>• Clean rhythm guitar</li>
                    <li>• Jazz and blues</li>
                    <li>• Subtle dynamics control</li>
                    <li>• Recording applications</li>
                  </ul>
                  <p className="text-orange-700 mb-2 mt-3"><strong>Famous Examples:</strong></p>
                  <p className="text-orange-600">LA-2A, Empress Compressor, Origin Cali76</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-3">⚙️ VCA Compressors</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-purple-700 mb-2"><strong>How They Work:</strong></p>
                  <p className="text-purple-600 mb-3">Voltage Controlled Amplifier uses a control voltage to adjust gain reduction with precise timing.</p>
                  <p className="text-purple-700 mb-2"><strong>Characteristics:</strong></p>
                  <ul className="text-purple-600 space-y-1">
                    <li>• Fast, precise response</li>
                    <li>• Detailed parameter control</li>
                    <li>• Can be transparent or aggressive</li>
                    <li>• Consistent, repeatable results</li>
                  </ul>
                </div>
                <div>
                  <p className="text-purple-700 mb-2"><strong>Best For:</strong></p>
                  <ul className="text-purple-600 space-y-1">
                    <li>• Studio recording</li>
                    <li>• Precise dynamics control</li>
                    <li>• Modern country guitar</li>
                    <li>• Professional applications</li>
                  </ul>
                  <p className="text-purple-700 mb-2 mt-3"><strong>Famous Examples:</strong></p>
                  <p className="text-purple-600">DBX 160X, Boss CS-2, Keeley Compressor Pro</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="font-semibold text-red-900 mb-3">🎸 FET Compressors</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-red-700 mb-2"><strong>How They Work:</strong></p>
                  <p className="text-red-600 mb-3">Field Effect Transistor controls gain reduction, often with aggressive, punchy character.</p>
                  <p className="text-red-700 mb-2"><strong>Characteristics:</strong></p>
                  <ul className="text-red-600 space-y-1">
                    <li>• Fast attack, aggressive sound</li>
                    <li>• Colored, characterful compression</li>
                    <li>• Punchy, in-your-face response</li>
                    <li>• Often simpler controls</li>
                  </ul>
                </div>
                <div>
                  <p className="text-red-700 mb-2"><strong>Best For:</strong></p>
                  <ul className="text-red-600 space-y-1">
                    <li>• Rock and punk guitar</li>
                    <li>• Aggressive rhythm parts</li>
                    <li>• Adding sustain to solos</li>
                    <li>• Vintage-style compression</li>
                  </ul>
                  <p className="text-red-700 mb-2 mt-3"><strong>Famous Examples:</strong></p>
                  <p className="text-red-600">1176, Ross Compressor, MXR Dyna Comp</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications by Genre */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Compression Applications by Genre</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                <h3 className="font-semibold text-yellow-900 mb-3">🤠 Country Guitar</h3>
                <ul className="text-yellow-700 text-sm space-y-2">
                  <li>• <strong>Heavy compression (6:1-10:1 ratio)</strong></li>
                  <li>• Fast attack to control pick dynamics</li>
                  <li>• Medium release for sustain</li>
                  <li>• Creates the classic "Nashville" squash</li>
                  <li>• Makes chicken picking more consistent</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-3">🎷 Jazz Guitar</h3>
                <ul className="text-blue-700 text-sm space-y-2">
                  <li>• <strong>Light compression (2:1-3:1 ratio)</strong></li>
                  <li>• Slow attack to preserve note character</li>
                  <li>• Slow release for natural decay</li>
                  <li>• Maintains dynamic expression</li>
                  <li>• Evens out fingerpicking variations</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="font-semibold text-green-900 mb-3">🎸 Funk/R&B</h3>
                <ul className="text-green-700 text-sm space-y-2">
                  <li>• <strong>Medium compression (4:1-6:1 ratio)</strong></li>
                  <li>• Fast attack for tight rhythm</li>
                  <li>• Fast release for punchy response</li>
                  <li>• Emphasizes percussive playing</li>
                  <li>• Works great with clean tones</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <h3 className="font-semibold text-purple-900 mb-3">🎺 Blues Guitar</h3>
                <ul className="text-purple-700 text-sm space-y-2">
                  <li>• <strong>Subtle compression (2:1-4:1 ratio)</strong></li>
                  <li>• Medium attack to keep some dynamics</li>
                  <li>• Slow release for singing sustain</li>
                  <li>• Enhances bends and vibrato</li>
                  <li>• Maintains expressive playing</li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h3 className="font-semibold text-red-900 mb-3">🔥 Rock/Metal</h3>
                <ul className="text-red-700 text-sm space-y-2">
                  <li>• <strong>Moderate compression (3:1-6:1 ratio)</strong></li>
                  <li>• Medium attack for controlled aggression</li>
                  <li>• Medium release for sustain without muddiness</li>
                  <li>• Tightens palm muting</li>
                  <li>• Enhances lead guitar sustain</li>
                </ul>
              </div>

              <div className="bg-teal-50 rounded-xl p-6 border border-teal-200">
                <h3 className="font-semibold text-teal-900 mb-3">🌊 Ambient/Post-Rock</h3>
                <ul className="text-teal-700 text-sm space-y-2">
                  <li>• <strong>Light to medium compression (2:1-5:1)</strong></li>
                  <li>• Slow attack to preserve swells</li>
                  <li>• Very slow release for extended sustain</li>
                  <li>• Supports volume swells and ambient textures</li>
                  <li>• Works well with reverb and delay</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Famous Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Compression in Famous Recordings</h2>
          <div className="space-y-6">
            <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
              <h3 className="font-semibold text-yellow-900 mb-2">"Chicken Pickin'" - Country Guitar Style</h3>
              <p className="text-yellow-800 text-sm mb-3">
                <strong>Artists:</strong> Brad Paisley, Keith Urban, Brent Mason
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-yellow-700 mb-2"><strong>Compression Settings:</strong></p>
                  <ul className="text-yellow-600 space-y-1">
                    <li>• Heavy ratio (8:1-10:1)</li>
                    <li>• Fast attack</li>
                    <li>• Medium release</li>
                    <li>• High make-up gain</li>
                  </ul>
                </div>
                <div>
                  <p className="text-yellow-700 mb-2"><strong>Musical Effect:</strong></p>
                  <ul className="text-yellow-600 space-y-1">
                    <li>• Creates consistent pick attack</li>
                    <li>• Emphasizes string snaps and muting</li>
                    <li>• Allows complex fingerpicking patterns</li>
                    <li>• Signature country "squash" sound</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">"Sultans of Swing" - Dire Straits</h3>
              <p className="text-blue-800 text-sm mb-3">
                <strong>Effect:</strong> Subtle compression on Mark Knopfler's fingerpicked guitar
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-blue-700 mb-2"><strong>Compression Settings:</strong></p>
                  <ul className="text-blue-600 space-y-1">
                    <li>• Light ratio (3:1-4:1)</li>
                    <li>• Medium attack</li>
                    <li>• Slow release</li>
                    <li>• Conservative threshold</li>
                  </ul>
                </div>
                <div>
                  <p className="text-blue-700 mb-2"><strong>Musical Effect:</strong></p>
                  <ul className="text-blue-600 space-y-1">
                    <li>• Evens out fingerpicking dynamics</li>
                    <li>• Maintains natural expression</li>
                    <li>• Creates smooth, singing sustain</li>
                    <li>• Transparent, musical compression</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="font-semibold text-red-900 mb-2">"Comfortably Numb" Solo - Pink Floyd</h3>
              <p className="text-red-800 text-sm mb-3">
                <strong>Effect:</strong> Moderate compression enhancing David Gilmour's sustain
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-red-700 mb-2"><strong>Compression Settings:</strong></p>
                  <ul className="text-red-600 space-y-1">
                    <li>• Medium ratio (4:1-6:1)</li>
                    <li>• Slow attack</li>
                    <li>• Slow release</li>
                    <li>• Moderate threshold</li>
                  </ul>
                </div>
                <div>
                  <p className="text-red-700 mb-2"><strong>Musical Effect:</strong></p>
                  <ul className="text-red-600 space-y-1">
                    <li>• Extends note sustain dramatically</li>
                    <li>• Preserves note attack character</li>
                    <li>• Supports expressive bends and vibrato</li>
                    <li>• Creates singing, emotional tone</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Compression Mistakes</h2>
          <div className="bg-red-50 rounded-xl p-6 border border-red-200">
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h3 className="font-semibold text-red-900 mb-3">❌ What to Avoid</h3>
                <ul className="space-y-2 text-red-700">
                  <li>• Over-compressing and losing all dynamics</li>
                  <li>• Using compression to fix poor playing technique</li>
                  <li>• Setting attack too fast and losing pick attack</li>
                  <li>• Not compensating with make-up gain</li>
                  <li>• Using the same settings for all playing styles</li>
                  <li>• Ignoring how compression affects your amp's distortion</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-red-900 mb-3">✅ Best Practices</h3>
                <ul className="space-y-2 text-red-700">
                  <li>• Start with gentle settings and gradually increase</li>
                  <li>• Listen to how compression affects your playing feel</li>
                  <li>• Adjust settings based on musical context</li>
                  <li>• Use your ears, not just visual meter indicators</li>
                  <li>• Consider compression's interaction with other effects</li>
                  <li>• Practice playing with and without compression</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Compression Practice Exercises</h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-3">Exercise 1: Attack Time Comparison</h3>
              <p className="text-gray-700 text-sm mb-3">
                Play the same chord progression with different attack settings:
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Fast attack (0.1ms): Notice how pick attack is smoothed</li>
                <li>• Medium attack (5ms): Balanced response</li>
                <li>• Slow attack (20ms): Pick attack preserved, sustain enhanced</li>
              </ul>
              <p className="text-gray-600 text-sm mt-3">
                Pay attention to how each setting affects the character and feel of your playing.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-3">Exercise 2: Dynamic Range Exercise</h3>
              <p className="text-gray-700 text-sm mb-3">
                Practice playing with varying pick attack strengths:
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Very soft picking → medium → aggressive attack</li>
                <li>• Notice how compression affects the relationship between these levels</li>
                <li>• Try this with different ratio settings (2:1, 6:1, 10:1)</li>
                <li>• Observe how higher ratios reduce the difference between soft and hard picking</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-3">Exercise 3: Musical Context Practice</h3>
              <p className="text-gray-700 text-sm mb-3">
                Practice the same musical phrase in different styles:
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Country: Heavy compression, fast attack, chicken picking</li>
                <li>• Jazz: Light compression, slow attack, fingerpicking</li>
                <li>• Blues: Medium compression, medium attack, expressive bends</li>
                <li>• Funk: Punchy compression, fast attack/release, percussive style</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Advanced Concepts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced Compression Concepts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
              <h3 className="font-semibold text-indigo-900 mb-3">🔗 Serial Compression</h3>
              <p className="text-indigo-800 text-sm mb-3">
                Using multiple compressors in series for different purposes:
              </p>
              <ul className="text-indigo-700 text-sm space-y-1">
                <li>• First compressor: Fast attack, controls peaks</li>
                <li>• Second compressor: Slow attack, adds sustain</li>
                <li>• Each does a specific job without overworking</li>
                <li>• More natural-sounding than extreme single compression</li>
              </ul>
            </div>

            <div className="bg-pink-50 rounded-xl p-6 border border-pink-200">
              <h3 className="font-semibold text-pink-900 mb-3">🎛️ Parallel Compression</h3>
              <p className="text-pink-800 text-sm mb-3">
                Blending heavily compressed and uncompressed signals:
              </p>
              <ul className="text-pink-700 text-sm space-y-1">
                <li>• Maintains natural dynamics while adding sustain</li>
                <li>• Heavily compress one signal path</li>
                <li>• Blend with original uncompressed signal</li>
                <li>• Best of both worlds: punch and sustain</li>
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
                <li>• Multiband compression techniques</li>
                <li>• Sidechain compression applications</li>
                <li>• Compression in different recording situations</li>
                <li>• Hardware vs. software compression characteristics</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
