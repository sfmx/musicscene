import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const distortionTypes = [
  {
    type: 'Overdrive',
    character: 'Warm, natural saturation',
    usage: 'Blues, classic rock, country, jazz-rock',
    description: 'Simulates natural tube amp saturation, maintains note clarity and dynamics',
    examples: 'Ibanez TS-9, Boss Blues Driver, tube amp breakup',
    technique: 'Works best with moderate gain, responds to picking dynamics'
  },
  {
    type: 'Distortion',
    character: 'More aggressive, compressed saturation',
    usage: 'Hard rock, metal, punk, grunge',
    description: 'Higher gain with more compression, creates thicker harmonic content',
    examples: 'Boss DS-1, Pro Co RAT, Marshall distortion',
    technique: 'Higher sustain, less dynamic response, good for power chords'
  },
  {
    type: 'Fuzz',
    character: 'Extreme, often gated saturation',
    usage: 'Psychedelic rock, garage rock, stoner rock',
    description: 'Extreme clipping creates square wave-like distortion with unique harmonics',
    examples: 'Big Muff Pi, Fuzz Face, Tone Bender',
    technique: 'Very high gain, can be gated, works well with single notes'
  },
  {
    type: 'High-Gain Distortion',
    character: 'Tight, focused, high-output',
    usage: 'Modern metal, prog rock, djent',
    description: 'Very high gain with tight low-end response, clear note separation',
    examples: 'Mesa Boogie Rectifier, EVH 5150, Friedman BE-OD',
    technique: 'Requires precise playing, works with complex chords and fast passages'
  }
];

const gainStaging = [
  {
    stage: 'Guitar → Overdrive',
    purpose: 'First stage of distortion',
    settings: 'Low to moderate gain, volume to taste',
    effect: 'Adds warmth and slight compression to signal',
    considerations: 'Sets foundation for rest of signal chain'
  },
  {
    stage: 'Overdrive → Amp',
    purpose: 'Drive the amp input',
    settings: 'Use overdrive to push amp into natural distortion',
    effect: 'Creates natural tube saturation and compression',
    considerations: 'Balance between pedal and amp distortion'
  },
  {
    stage: 'High-Gain Setup',
    purpose: 'Maximum distortion',
    settings: 'High gain from amp or high-gain pedal',
    effect: 'Thick distortion, high sustain, compressed dynamics',
    considerations: 'Requires noise gate, precise playing technique'
  },
  {
    stage: 'Clean + Distortion Blend',
    purpose: 'Best of both worlds',
    settings: 'Clean signal blended with distorted signal',
    effect: 'Maintains clarity while adding harmonic content',
    considerations: 'Useful for complex chords and fingerpicking'
  }
];

const eqAndDistortion = [
  {
    frequency: 'Bass (80-250 Hz)',
    effect: 'Low-end warmth and power',
    distortionImpact: 'Too much creates muddiness in distorted signal',
    recommendation: 'Cut slightly for clarity, boost for power'
  },
  {
    frequency: 'Low-Mid (250-500 Hz)',
    effect: 'Body and thickness',
    distortionImpact: 'Can make distortion sound congested',
    recommendation: 'Often needs cutting in high-gain settings'
  },
  {
    frequency: 'Mid (500 Hz-2 kHz)',
    effect: 'Fundamental note clarity',
    distortionImpact: 'Critical for note definition in distorted signal',
    recommendation: 'Boost for clarity, cut for scooped sound'
  },
  {
    frequency: 'High-Mid (2-5 kHz)',
    effect: 'Attack and presence',
    distortionImpact: 'Affects pick attack clarity',
    recommendation: 'Boost for cutting through mix'
  },
  {
    frequency: 'Treble (5 kHz+)',
    effect: 'Brightness and air',
    distortionImpact: 'Too much creates harshness',
    recommendation: 'Adjust to taste, roll off if too harsh'
  }
];

const distortionInSongs = [
  {
    song: '"Smoke on the Water" - Deep Purple',
    distortionType: 'Marshall amp overdrive',
    musical_function: 'Drives the iconic riff with natural tube saturation',
    technique: 'Moderate gain allows chord clarity while adding power',
    lesson: 'Natural amp distortion can be more musical than extreme pedal distortion'
  },
  {
    song: '"Smells Like Teen Spirit" - Nirvana',
    distortionType: 'High-gain amp distortion',
    musical_function: 'Creates aggressive texture that matches song energy',
    technique: 'High gain with palm muting for tight rhythm sound',
    lesson: 'Distortion level should match the emotional content of the song'
  },
  {
    song: '"Purple Haze" - Jimi Hendrix',
    distortionType: 'Fuzz Face fuzz pedal',
    musical_function: 'Creates psychedelic, sustaining lead tones',
    technique: 'High-gain fuzz responds to volume knob and playing dynamics',
    lesson: 'Extreme distortion can be musical when used with appropriate technique'
  },
  {
    song: '"Back in Black" - AC/DC',
    distortionType: 'Marshall JTM45 natural overdrive',
    musical_function: 'Provides punch and clarity for rhythm playing',
    technique: 'Clean enough for chord clarity, dirty enough for attitude',
    lesson: 'Sometimes less distortion is more effective than maximum gain'
  }
];

export default function DistortionPage() {
  return (
    <Layout>
      <Header
        title="Distortion & Overdrive Effects"
        subtitle="Understand how distortion shapes tone, harmonic content, and playing technique in different musical contexts."
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Core Concept */}
        <section className="mb-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Distortion: More Than Just Volume</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">🔥 Harmonic Enhancement</h3>
              <p className="text-gray-600 mb-3">
                Distortion doesn't just make things louder—it adds harmonic content that didn't exist in the original signal, creating richness and sustain.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Physics:</strong> Distortion clips the waveform, creating additional harmonics that give the characteristic "warm" or "aggressive" sound
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">🎯 Musical Function</h3>
              <p className="text-gray-600 mb-3">
                Different types of distortion serve different musical purposes. The key is matching the distortion character to the song's needs.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Rule:</strong> Use the minimum amount of distortion needed to achieve the musical effect you want
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Distortion */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Distortion & Their Applications</h2>
          <div className="space-y-6">
            {distortionTypes.map((distortion, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="grid md:grid-cols-6 gap-4">
                  <div className="md:col-span-1">
                    <h3 className="font-semibold text-gray-800 text-lg mb-2">{distortion.type}</h3>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                      {distortion.character}
                    </span>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-medium text-gray-700 mb-2">Description:</h4>
                    <p className="text-sm text-gray-600">{distortion.description}</p>
                  </div>
                  <div className="md:col-span-1">
                    <h4 className="font-medium text-gray-700 mb-2">Best For:</h4>
                    <p className="text-xs text-gray-600">{distortion.usage}</p>
                  </div>
                  <div className="md:col-span-1">
                    <h4 className="font-medium text-gray-700 mb-2">Examples:</h4>
                    <p className="text-xs text-gray-500">{distortion.examples}</p>
                  </div>
                  <div className="md:col-span-1">
                    <h4 className="font-medium text-gray-700 mb-2">Technique:</h4>
                    <p className="text-xs text-gray-500 italic">{distortion.technique}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gain Staging */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Gain Staging: Building Your Distortion</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {gainStaging.map((stage, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{stage.stage}</h3>
                <p className="text-blue-800 text-sm mb-3">{stage.purpose}</p>
                <div className="bg-white p-3 rounded-lg mb-3">
                  <h4 className="font-medium text-blue-800 mb-1">Settings:</h4>
                  <p className="text-sm text-blue-700">{stage.settings}</p>
                </div>
                <div className="mb-3">
                  <h4 className="font-medium text-blue-800 mb-1">Effect:</h4>
                  <p className="text-sm text-blue-700">{stage.effect}</p>
                </div>
                <p className="text-blue-600 text-xs italic">
                  <strong>Note:</strong> {stage.considerations}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* EQ and Distortion */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">EQ & Distortion Interaction</h2>
          <div className="bg-gray-50 p-6 rounded-xl">
            <p className="text-gray-700 mb-6">
              EQ dramatically affects how distortion sounds. Understanding frequency response helps you shape distorted tones effectively.
            </p>
            <div className="space-y-4">
              {eqAndDistortion.map((freq, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <h3 className="font-semibold text-gray-800">{freq.frequency}</h3>
                      <p className="text-sm text-gray-600">{freq.effect}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">Distortion Impact:</h4>
                      <p className="text-sm text-gray-600">{freq.distortionImpact}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 mb-1">Recommendation:</h4>
                      <p className="text-sm text-gray-600">{freq.recommendation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Distortion in Famous Songs */}
        <section className="mb-12 bg-green-50 rounded-xl p-8 border border-green-200">
          <h2 className="text-2xl font-bold text-green-900 mb-6">🎵 Distortion in Famous Songs</h2>
          <div className="space-y-4">
            {distortionInSongs.map((song, index) => (
              <div key={index} className="bg-white p-4 rounded-lg">
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <h3 className="font-semibold text-green-800 mb-1">{song.song}</h3>
                    <p className="text-sm text-green-600">{song.distortionType}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-700 mb-1">Musical Function:</h4>
                    <p className="text-sm text-green-600">{song.musical_function}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-700 mb-1">Technique:</h4>
                    <p className="text-sm text-green-600">{song.technique}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-700 mb-1">Lesson:</h4>
                    <p className="text-xs text-green-500 italic">{song.lesson}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Playing Technique with Distortion */}
        <section className="mb-12 bg-purple-50 rounded-xl p-8 border border-purple-200">
          <h2 className="text-2xl font-bold text-purple-900 mb-6">🎸 Playing Technique with Distortion</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-purple-800 mb-3">Picking Dynamics</h3>
              <p className="text-purple-700 text-sm mb-3">
                Light overdrive responds to picking dynamics. Hard picking increases distortion, soft picking cleans up the sound.
              </p>
              <p className="text-xs text-purple-600 italic">
                Practice controlling dynamics to shape your tone
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-purple-800 mb-3">Palm Muting</h3>
              <p className="text-purple-700 text-sm mb-3">
                Essential for controlling high-gain distortion. Creates tight, focused sound and prevents unwanted feedback.
              </p>
              <p className="text-xs text-purple-600 italic">
                Crucial technique for metal and hard rock
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-purple-800 mb-3">Note Clarity</h3>
              <p className="text-purple-700 text-sm mb-3">
                High distortion can mask poor technique. Focus on clean fretting and precise timing to maintain clarity.
              </p>
              <p className="text-xs text-purple-600 italic">
                Clean practice helps distorted playing
              </p>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12 bg-amber-50 rounded-xl p-8 border border-amber-200">
          <h2 className="text-2xl font-bold text-amber-900 mb-6">⚠️ Common Distortion Mistakes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-amber-800 mb-3">Too Much Gain</h3>
              <p className="text-amber-700 text-sm mb-3">
                More distortion isn't always better. Excessive gain can mask note definition and make everything sound muddy.
              </p>
              <p className="text-amber-600 text-xs italic">
                Start with less gain than you think you need
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-amber-800 mb-3">Ignoring Clean Tone</h3>
              <p className="text-amber-700 text-sm mb-3">
                Distortion can't fix a bad clean tone. Start with a good clean sound, then add distortion as needed.
              </p>
              <p className="text-amber-600 text-xs italic">
                Good tone starts with good fundamentals
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-amber-800 mb-3">Wrong Type for Style</h3>
              <p className="text-amber-700 text-sm mb-3">
                Using high-gain metal distortion for blues or light overdrive for metal won't serve the music.
              </p>
              <p className="text-amber-600 text-xs italic">
                Match distortion type to musical context
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-amber-800 mb-3">No Dynamic Control</h3>
              <p className="text-amber-700 text-sm mb-3">
                Constant high-gain distortion removes dynamics and makes everything sound the same intensity.
              </p>
              <p className="text-amber-600 text-xs italic">
                Use distortion to enhance dynamics, not eliminate them
              </p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="text-center">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Continue Your Effects Journey</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/lessons/songs/effects/delay"
                className="inline-flex items-center px-4 py-2 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors"
              >
                Next: Delay & Echo →
              </Link>
              <Link 
                href="/lessons/songs/effects"
                className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
              >
                ← Back to Effects Overview
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
