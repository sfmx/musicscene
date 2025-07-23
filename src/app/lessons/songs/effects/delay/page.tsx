import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const delayTypes = [
  {
    type: 'Analog Delay',
    character: 'Warm, slightly degraded repeats',
    timing: '20ms - 600ms typically',
    usage: 'Classic rock, blues, vintage sounds',
    description: 'Uses analog circuitry for warm, musical repeats that gradually degrade',
    examples: 'Boss DM-2, MXR Carbon Copy, tape echo units',
    musicalFunction: 'Adds warmth and vintage character to single notes and chords'
  },
  {
    type: 'Digital Delay',
    character: 'Clean, precise repeats',
    timing: '1ms - several seconds',
    usage: 'Modern rock, pop, ambient music',
    description: 'Crystal clear repeats with precise timing and multiple features',
    examples: 'Boss DD-7, TC Electronic Flashback, Strymon Timeline',
    musicalFunction: 'Provides clean repeats and complex timing options'
  },
  {
    type: 'Tape Echo',
    character: 'Warm, saturated, slightly wobbly',
    timing: 'Variable, often 100-800ms',
    usage: 'Psychedelic rock, ambient, experimental',
    description: 'Uses actual tape loops for organic, imperfect repeats',
    examples: 'Echoplex EP-3, Roland Space Echo, Fulltone Tube Tape Echo',
    musicalFunction: 'Creates organic, musical textures with natural modulation'
  },
  {
    type: 'Multi-Tap Delay',
    character: 'Complex rhythmic patterns',
    timing: 'Multiple timing subdivisions',
    usage: 'Progressive rock, ambient, soundscapes',
    description: 'Multiple delay taps create complex rhythmic and harmonic textures',
    examples: 'Empress Echosystem, Eventide TimeFactor, Boss DD-500',
    musicalFunction: 'Creates complex rhythmic patterns and harmonic intervals'
  }
];

const delayTimings = [
  {
    subdivision: 'Quarter Note',
    timing: 'Matches beat',
    bpm_120: '500ms',
    bpm_140: '429ms',
    musicalEffect: 'Reinforces the main beat, adds power to single notes',
    usage: 'Rock solos, emphasis, power'
  },
  {
    subdivision: 'Eighth Note',
    timing: 'Twice as fast as beat',
    bpm_120: '250ms',
    bpm_140: '214ms',
    musicalEffect: 'Creates faster rhythm, adds movement',
    usage: 'Country, rockabilly, active rhythm parts'
  },
  {
    subdivision: 'Dotted Eighth',
    timing: '3/4 of quarter note',
    bpm_120: '375ms',
    bpm_140: '321ms',
    musicalEffect: 'Creates syncopated feel, very musical timing',
    usage: 'U2 style, ambient rock, atmospheric sounds'
  },
  {
    subdivision: 'Sixteenth Note',
    timing: 'Four times faster than beat',
    bpm_120: '125ms',
    bpm_140: '107ms',
    musicalEffect: 'Very fast repeat, creates texture more than rhythm',
    usage: 'Ambient textures, fast picking emphasis'
  },
  {
    subdivision: 'Triplet',
    timing: 'Three even divisions per beat',
    bpm_120: '167ms',
    bpm_140: '143ms',
    musicalEffect: 'Creates shuffle feel, blues timing',
    usage: 'Blues, shuffle rhythms, triplet-based songs'
  }
];

const delaySettings = [
  {
    parameter: 'Delay Time',
    description: 'Time between original signal and repeat',
    effect: 'Determines rhythmic relationship to the song',
    tips: 'Match to song tempo for musical timing, or use non-musical timing for texture'
  },
  {
    parameter: 'Feedback/Repeats',
    description: 'How many times the delay repeats',
    effect: 'Controls how long the delay tail lasts',
    tips: 'Low settings for subtle enhancement, high settings for ambient washes'
  },
  {
    parameter: 'Mix/Level',
    description: 'Balance between dry and delayed signal',
    effect: 'How prominent the delay effect is',
    tips: 'Start low and increase until you hear the effect clearly, then back off slightly'
  },
  {
    parameter: 'Modulation',
    description: 'Slight variation in delay time',
    effect: 'Adds movement and prevents static repeats',
    tips: 'Subtle amounts add life, too much creates chorus-like warbling'
  }
];

const delayInSongs = [
  {
    song: '"Where the Streets Have No Name" - U2',
    delayType: 'Digital delay with dotted eighth timing',
    timing: '~380ms dotted eighth note delay',
    musical_function: 'Creates signature rhythmic pattern and spatial depth',
    technique: 'Edge plays simple parts, delay creates complex rhythmic interaction',
    lesson: 'Simple playing + musical delay timing = complex, beautiful textures'
  },
  {
    song: '"Run Like Hell" - Pink Floyd',
    delayType: 'Digital delay with quarter note timing',
    timing: 'Quarter note delay matching song tempo',
    musical_function: 'Reinforces the driving rhythm and adds power',
    technique: 'Precise timing creates mechanical, driving feel',
    lesson: 'Delay can reinforce and enhance rhythmic feel when timed correctly'
  },
  {
    song: '"Slapback" - Rockabilly style',
    delayType: 'Very short analog delay (tape echo)',
    timing: '80-120ms single repeat',
    musical_function: 'Adds dimension without obvious repetition',
    technique: 'Single short repeat thickens sound without creating obvious echo',
    lesson: 'Very short delays can enhance tone without obvious effect'
  },
  {
    song: '"Shine On You Crazy Diamond" - Pink Floyd',
    delayType: 'Long analog delay with high feedback',
    timing: 'Long delay time with multiple repeats',
    musical_function: 'Creates ambient, expansive atmosphere',
    technique: 'Long, fading repeats create sense of space and time',
    lesson: 'Long delays can create emotional and atmospheric effects'
  }
];

export default function DelayPage() {
  return (
    <Layout>
      <Header
        title="Delay & Echo Effects"
        subtitle="Learn how delay effects create space, rhythmic complexity, and atmospheric textures in songs."
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Core Concept */}
        <section className="mb-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Delay: Time as a Musical Element</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">🔄 Temporal Effects</h3>
              <p className="text-gray-600 mb-3">
                Delay effects repeat your signal after a specified time interval, creating everything from subtle thickening to complex rhythmic patterns.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Key Insight:</strong> The timing of delay repeats can either reinforce the song's rhythm or create counter-rhythms for complexity
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">🎵 Musical vs. Atmospheric</h3>
              <p className="text-gray-600 mb-3">
                Delay can serve rhythmic/musical functions (timed to song tempo) or atmospheric functions (creating space and ambience).
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Application:</strong> Musical timing enhances rhythm; non-musical timing creates texture and atmosphere
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Delay */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Delay Effects</h2>
          <div className="space-y-6">
            {delayTypes.map((delay, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="grid md:grid-cols-7 gap-4">
                  <div className="md:col-span-1">
                    <h3 className="font-semibold text-gray-800 text-lg mb-2">{delay.type}</h3>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                      {delay.character}
                    </span>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-medium text-gray-700 mb-2">Description:</h4>
                    <p className="text-sm text-gray-600">{delay.description}</p>
                  </div>
                  <div className="md:col-span-1">
                    <h4 className="font-medium text-gray-700 mb-2">Timing:</h4>
                    <p className="text-xs text-gray-600">{delay.timing}</p>
                  </div>
                  <div className="md:col-span-1">
                    <h4 className="font-medium text-gray-700 mb-2">Best For:</h4>
                    <p className="text-xs text-gray-600">{delay.usage}</p>
                  </div>
                  <div className="md:col-span-1">
                    <h4 className="font-medium text-gray-700 mb-2">Examples:</h4>
                    <p className="text-xs text-gray-500">{delay.examples}</p>
                  </div>
                  <div className="md:col-span-1">
                    <h4 className="font-medium text-gray-700 mb-2">Function:</h4>
                    <p className="text-xs text-gray-500 italic">{delay.musicalFunction}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Delay Timing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Musical Delay Timing</h2>
          <div className="bg-gray-50 p-6 rounded-xl mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">Calculating Delay Time</h3>
            <p className="text-gray-700 mb-3">
              To calculate delay time for musical subdivisions: <strong>60,000 ÷ BPM = quarter note in milliseconds</strong>
            </p>
            <p className="text-gray-600 text-sm">
              Then divide or multiply for different subdivisions (eighth note = ÷2, dotted eighth = ×0.75, etc.)
            </p>
          </div>
          <div className="space-y-4">
            {delayTimings.map((timing, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="grid md:grid-cols-6 gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-800">{timing.subdivision}</h3>
                    <p className="text-sm text-gray-600">{timing.timing}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1">120 BPM:</h4>
                    <p className="text-sm text-blue-600 font-mono">{timing.bpm_120}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1">140 BPM:</h4>
                    <p className="text-sm text-blue-600 font-mono">{timing.bpm_140}</p>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-medium text-gray-700 mb-1">Musical Effect:</h4>
                    <p className="text-sm text-gray-600">{timing.musicalEffect}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1">Usage:</h4>
                    <p className="text-xs text-gray-500">{timing.usage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Delay Settings */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Delay Parameters</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {delaySettings.map((setting, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-green-900 mb-2">{setting.parameter}</h3>
                <p className="text-green-800 text-sm mb-3">{setting.description}</p>
                <div className="bg-white p-3 rounded-lg mb-3">
                  <h4 className="font-medium text-green-800 mb-1">Effect:</h4>
                  <p className="text-sm text-green-700">{setting.effect}</p>
                </div>
                <p className="text-green-600 text-xs italic">
                  <strong>Tips:</strong> {setting.tips}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Delay in Famous Songs */}
        <section className="mb-12 bg-purple-50 rounded-xl p-8 border border-purple-200">
          <h2 className="text-2xl font-bold text-purple-900 mb-6">🎵 Delay in Famous Songs</h2>
          <div className="space-y-4">
            {delayInSongs.map((song, index) => (
              <div key={index} className="bg-white p-4 rounded-lg">
                <div className="grid md:grid-cols-12 gap-4">
                  <div className="md:col-span-3">
                    <h3 className="font-semibold text-purple-800 mb-1">{song.song}</h3>
                    <p className="text-sm text-purple-600">{song.delayType}</p>
                    <p className="text-xs text-purple-500 font-mono">{song.timing}</p>
                  </div>
                  <div className="md:col-span-3">
                    <h4 className="font-medium text-purple-700 mb-1">Musical Function:</h4>
                    <p className="text-sm text-purple-600">{song.musical_function}</p>
                  </div>
                  <div className="md:col-span-3">
                    <h4 className="font-medium text-purple-700 mb-1">Technique:</h4>
                    <p className="text-sm text-purple-600">{song.technique}</p>
                  </div>
                  <div className="md:col-span-3">
                    <h4 className="font-medium text-purple-700 mb-1">Lesson:</h4>
                    <p className="text-xs text-purple-500 italic">{song.lesson}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Creative Delay Techniques */}
        <section className="mb-12 bg-indigo-50 rounded-xl p-8 border border-indigo-200">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6">🎨 Creative Delay Techniques</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-indigo-800 mb-3">Self-Oscillation</h3>
              <p className="text-indigo-700 text-sm mb-3">
                Turn feedback up until delay begins to self-oscillate, creating infinite repeats and pitch changes.
              </p>
              <p className="text-xs text-indigo-600 italic">
                Great for psychedelic effects and ambient textures
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-indigo-800 mb-3">Delay Throws</h3>
              <p className="text-indigo-700 text-sm mb-3">
                Kick delay in and out rhythmically using the pedal switch to create specific effect moments.
              </p>
              <p className="text-xs text-indigo-600 italic">
                Adds dramatic emphasis to specific notes or phrases
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibent text-indigo-800 mb-3">Reverse Delay</h3>
              <p className="text-indigo-700 text-sm mb-3">
                Some delays can reverse the delayed signal, creating backwards echo effects.
              </p>
              <p className="text-xs text-indigo-600 italic">
                Creates mysterious, otherworldly textures
              </p>
            </div>
          </div>
        </section>

        {/* Delay and Rhythm */}
        <section className="mb-12 bg-amber-50 rounded-xl p-8 border border-amber-200">
          <h2 className="text-2xl font-bold text-amber-900 mb-6">🥁 Delay and Rhythm Interaction</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-amber-800 mb-3">Syncopated Timing</h3>
              <p className="text-amber-700 text-sm mb-3">
                Dotted eighth delays create syncopation against straight rhythms, adding rhythmic complexity without playing complex parts.
              </p>
              <p className="text-amber-600 text-xs italic">
                The Edge's signature sound relies heavily on this concept
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-amber-800 mb-3">Polyrhythmic Effects</h3>
              <p className="text-amber-700 text-sm mb-3">
                Multiple delay taps at different timing subdivisions can create polyrhythmic textures from simple input.
              </p>
              <p className="text-amber-600 text-xs italic">
                Useful for progressive rock and experimental music
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-amber-800 mb-3">Call and Response</h3>
              <p className="text-amber-700 text-sm mb-3">
                Use delay to create musical conversations between your playing and the delayed repeats.
              </p>
              <p className="text-amber-600 text-xs italic">
                Play phrases that complement their own delay
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-amber-800 mb-3">Tempo Changes</h3>
              <p className="text-amber-700 text-sm mb-3">
                Fixed delay times create interesting effects when tempo changes within a song.
              </p>
              <p className="text-amber-600 text-xs italic">
                Can create tension or release depending on context
              </p>
            </div>
          </div>
        </section>

        {/* Practical Applications */}
        <section className="mb-12 bg-green-50 rounded-xl p-8 border border-green-200">
          <h2 className="text-2xl font-bold text-green-900 mb-6">🎯 Practical Delay Applications</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-2">Lead Guitar</h3>
              <p className="text-green-700 text-sm mb-2">
                Quarter or eighth note delays add sustain and power to single-note lines.
              </p>
              <p className="text-xs text-green-600 italic">
                Settings: 250-500ms, low feedback, moderate mix
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-2">Ambient Pads</h3>
              <p className="text-green-700 text-sm mb-2">
                Long delays with high feedback create expansive, atmospheric textures.
              </p>
              <p className="text-xs text-green-600 italic">
                Settings: 800ms+, high feedback, high mix
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-2">Rhythmic Enhancement</h3>
              <p className="text-green-700 text-sm mb-2">
                Musical timing enhances rhythm parts without additional playing.
              </p>
              <p className="text-xs text-green-600 italic">
                Settings: Tempo-synced, single repeat, low mix
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-2">Slapback Thickening</h3>
              <p className="text-green-700 text-sm mb-2">
                Very short delays thicken sound without obvious repetition.
              </p>
              <p className="text-xs text-green-600 italic">
                Settings: 80-120ms, single repeat, low mix
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
                href="/lessons/songs/effects/reverb"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Next: Reverb & Ambience →
              </Link>
              <Link 
                href="/lessons/songs/effects/distortion"
                className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
              >
                ← Previous: Distortion & Overdrive
              </Link>
              <Link 
                href="/lessons/songs/effects"
                className="inline-flex items-center px-4 py-2 bg-gray-500 text-white font-medium rounded-lg hover:bg-gray-600 transition-colors"
              >
                Effects Overview
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
