import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const bluesTechniques = [
  {
    technique: 'String Bending',
    description: 'The signature sound of blues guitar - bending strings to reach expressive pitches',
    types: ['Quarter-tone bends', 'Half-step bends', 'Whole-step bends', 'Pre-bends', 'Bend and release'],
    application: 'Bend the minor 3rd to major 3rd, bend 4th to 5th, add emotional expression',
    examples: 'B.B. King vibrato bends, Albert King powerful bends'
  },
  {
    technique: 'Vibrato',
    description: 'Rapid pitch variations that add life and emotion to sustained notes',
    types: ['Finger vibrato', 'Wide vibrato', 'Fast vibrato', 'Slow vibrato', 'Controlled vibrato'],
    application: 'Add to any sustained note, especially at end of phrases or on chord tones',
    examples: 'B.B. King butterfly vibrato, Gary Moore wide vibrato'
  },
  {
    technique: 'Call and Response',
    description: 'Musical conversation between vocal-like guitar phrases',
    types: ['Question-answer phrases', 'Echo patterns', 'Imitation', 'Vocal mimicry'],
    application: 'Play a phrase, then "answer" it with a related phrase, like singing',
    examples: 'B.B. King conversational style, Muddy Waters vocals and guitar'
  },
  {
    technique: 'Chord-Tone Targeting',
    description: 'Landing on chord tones (root, 3rd, 5th, 7th) for harmonic connection',
    types: ['Root emphasis', '3rd targeting', '7th tensions', 'Chromatic approach'],
    application: 'Outline chord changes, create melodic logic over progression',
    examples: 'T-Bone Walker chord-based lines, jazz-blues approaches'
  }
];

const bluesScales = [
  {
    scale: 'Minor Pentatonic',
    degrees: '1-♭3-4-5-♭7',
    character: 'Core blues sound',
    usage: 'Foundation for all blues playing, works over most chord changes',
    example: 'A minor pentatonic: A-C-D-E-G',
    tip: 'Most important scale for blues - master this first'
  },
  {
    scale: 'Blues Scale',
    degrees: '1-♭3-4-♭5-5-♭7',
    character: 'Classic blues with tritone',
    usage: 'Add ♭5 (blue note) to minor pentatonic for authentic blues sound',
    example: 'A blues scale: A-C-D-D#-E-G',
    tip: 'The ♭5 creates the essential "blue note" tension'
  },
  {
    scale: 'Major Pentatonic',
    degrees: '1-2-3-5-6',
    character: 'Bright, country-blues',
    usage: 'Over major chords, country blues, more upbeat blues styles',
    example: 'A major pentatonic: A-B-C#-E-F#',
    tip: 'Great for major blues and country-influenced playing'
  },
  {
    scale: 'Mixolydian Mode',
    degrees: '1-2-3-4-5-6-♭7',
    character: 'Dominant, bluesy-major',
    usage: 'Over dominant 7th chords, blues-rock, Southern rock',
    example: 'A Mixolydian: A-B-C#-D-E-F#-G',
    tip: 'Perfect for dominant 7th chord contexts'
  }
];

const bluesProgressions = [
  {
    name: '12-Bar Blues',
    progression: 'I-I-I-I-IV-IV-I-I-V-IV-I-V',
    chords: 'A7-A7-A7-A7-D7-D7-A7-A7-E7-D7-A7-E7',
    approach: 'Use A minor pentatonic/blues scale throughout, target chord tones on changes',
    variations: 'Quick change (bar 2), turnaround variations, substitutions'
  },
  {
    name: '8-Bar Blues',
    progression: 'I-V-IV-I-I-V-IV-I',
    chords: 'A7-E7-D7-A7-A7-E7-D7-A7',
    approach: 'Shorter form allows for more concentrated development of ideas',
    variations: 'Common in folk blues, country blues, simpler progressions'
  },
  {
    name: 'Minor Blues',
    progression: 'i-i-i-i-iv-iv-i-i-V-iv-i-V',
    chords: 'Am-Am-Am-Am-Dm-Dm-Am-Am-E7-Dm-Am-E7',
    approach: 'A minor pentatonic works perfectly, emphasize minor character',
    variations: 'More melancholic feel, often slower tempos'
  },
  {
    name: 'Jazz Blues',
    progression: 'Imaj7-Vi7-IIm7-V7-IVmaj7-VII7-I-V7',
    chords: 'Amaj7-F#7-Bm7-E7-Dmaj7-G7-A-E7',
    approach: 'More complex harmony requires chord-specific scale choices',
    variations: 'Bird blues, bebop blues, sophisticated substitutions'
  }
];

const bluesLicks = [
  {
    name: 'King of the Blues Lick',
    description: 'B.B. King signature bend from minor 3rd to major 3rd with vibrato',
    technique: 'Bend C to C# over A7 chord, add wide vibrato',
    usage: 'Works over any dominant chord, transpose to different keys',
    variation: 'Can be done with pre-bend, quarter-tone bends, or slides'
  },
  {
    name: 'Albert King Box Move',
    description: 'String-skipping lick that moves across multiple strings',
    technique: 'Use aggressive bends and string skipping for power',
    usage: 'Great for climactic moments, building intensity',
    variation: 'Can be played with hybrid picking or all downstrokes'
  },
  {
    name: 'Freddie King Lick',
    description: 'Fast triplet run down the minor pentatonic scale',
    technique: 'Alternate picking or economy picking for speed',
    usage: 'Turnarounds, fills between vocal lines',
    variation: 'Can be played with different rhythmic subdivisions'
  },
  {
    name: 'Muddy Waters Slide Lick',
    description: 'Slide guitar approach adapted for regular playing',
    technique: 'Use slides between notes instead of individual attacks',
    usage: 'Creates vocal-like phrasing and smooth connections',
    variation: 'Can be combined with bends for extra expression'
  }
];

export default function BluesLeadPage() {
  return (
    <Layout>
      <Header
        title="Blues Lead Guitar Techniques"
        subtitle="Learn essential blues lead techniques including bending, call-and-response, and blues scale application."
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Core Concept */}
        <section className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Foundation of Lead Guitar</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">🎷 Blues: The Universal Language</h3>
              <p className="text-gray-600 mb-3">
                Blues is the foundation of virtually all modern lead guitar playing. Master blues techniques and you'll have the tools for rock, jazz, country, and beyond.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Core Elements:</strong> String bending, vibrato, call-and-response, chord-tone targeting, blue notes
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">🗣️ Vocal Approach</h3>
              <p className="text-gray-600 mb-3">
                Blues guitar mimics the human voice. Think of your guitar as singing - use bends for vocal inflection, vibrato for warmth, and phrases that "breathe."
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Practice:</strong> Sing a blues melody first, then recreate it on guitar with the same phrasing and expression
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Essential Techniques */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Blues Lead Techniques</h2>
          <div className="space-y-6">
            {bluesTechniques.map((technique, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="grid md:grid-cols-12 gap-4">
                  <div className="md:col-span-3">
                    <h3 className="font-semibold text-gray-800 text-lg mb-2">{technique.technique}</h3>
                    <p className="text-sm text-gray-600">{technique.description}</p>
                  </div>
                  <div className="md:col-span-3">
                    <h4 className="font-medium text-gray-700 mb-2">Types:</h4>
                    <ul className="space-y-1">
                      {technique.types.map((type, i) => (
                        <li key={i} className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded">
                          {type}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:col-span-3">
                    <h4 className="font-medium text-gray-700 mb-2">Application:</h4>
                    <p className="text-sm text-gray-600">{technique.application}</p>
                  </div>
                  <div className="md:col-span-3">
                    <h4 className="font-medium text-gray-700 mb-2">Examples:</h4>
                    <p className="text-xs text-gray-500 italic">{technique.examples}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blues Scales */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Blues Scales</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {bluesScales.map((scale, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-purple-900">{scale.scale}</h3>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                    {scale.character}
                  </span>
                </div>
                <p className="text-purple-800 font-mono text-sm mb-3">{scale.degrees}</p>
                <p className="text-purple-700 text-sm mb-3">{scale.usage}</p>
                <div className="bg-white p-3 rounded-lg mb-3">
                  <p className="text-sm text-purple-600">
                    <strong>Example:</strong> {scale.example}
                  </p>
                </div>
                <p className="text-purple-600 text-xs italic">
                  <strong>Tip:</strong> {scale.tip}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Blues Progressions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Blues Progressions & Approaches</h2>
          <div className="space-y-6">
            {bluesProgressions.map((progression, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-2">{progression.name}</h3>
                    <p className="text-sm text-blue-600 font-mono">{progression.progression}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">In A:</h4>
                    <p className="text-xs text-gray-600 font-mono">{progression.chords}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Scale Approach:</h4>
                    <p className="text-sm text-gray-600">{progression.approach}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Variations:</h4>
                    <p className="text-xs text-gray-500">{progression.variations}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Classic Blues Licks */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Classic Blues Licks</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {bluesLicks.map((lick, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">{lick.name}</h3>
                <p className="text-yellow-800 text-sm mb-3">{lick.description}</p>
                <div className="mb-3">
                  <h4 className="font-medium text-yellow-800 mb-1">Technique:</h4>
                  <p className="text-yellow-700 text-sm">{lick.technique}</p>
                </div>
                <div className="mb-3">
                  <h4 className="font-medium text-yellow-800 mb-1">Usage:</h4>
                  <p className="text-yellow-700 text-sm">{lick.usage}</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="text-yellow-600 text-xs">
                    <strong>Variation:</strong> {lick.variation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* String Bending Guide */}
        <section className="mb-12 bg-green-50 rounded-xl p-8 border border-green-200">
          <h2 className="text-2xl font-bold text-green-900 mb-6">🎸 String Bending Mastery</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-3">Quarter-Tone Bends</h3>
              <p className="text-green-700 text-sm mb-3">
                Bend the string slightly (1/4 semitone) for a "crying" or "blue" sound. Common on the minor 3rd.
              </p>
              <p className="text-xs text-green-600 italic">
                Essential for authentic blues expression
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-3">Half-Step Bends</h3>
              <p className="text-green-700 text-sm mb-3">
                Bend up exactly one fret (half-step). Most common bend, especially from minor 3rd to major 3rd.
              </p>
              <p className="text-xs text-green-600 italic">
                Practice with a tuner to get exact pitch
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-3">Whole-Step Bends</h3>
              <p className="text-green-700 text-sm mb-3">
                Bend up two frets (whole step). Requires more finger strength, often used for dramatic effect.
              </p>
              <p className="text-xs text-green-600 italic">
                Use multiple fingers for support
              </p>
            </div>
          </div>
        </section>

        {/* Blues Masters Study */}
        <section className="mb-12 bg-indigo-50 rounded-xl p-8 border border-indigo-200">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6">🎵 Learn from the Masters</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-800 mb-2">B.B. King - "The Thrill is Gone"</h3>
              <p className="text-indigo-700 text-sm">
                <strong>Signature:</strong> Butterfly vibrato, vocal-like phrasing, minimal notes with maximum expression
                <br/><strong>Learn:</strong> How to make every note count, call-and-response with vocals
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-800 mb-2">Albert King - "Born Under a Bad Sign"</h3>
              <p className="text-indigo-700 text-sm">
                <strong>Signature:</strong> Powerful string bending, upside-down guitar technique, aggressive attack
                <br/><strong>Learn:</strong> How to use bends for emotional impact, string-skipping techniques
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-800 mb-2">Freddie King - "Hide Away"</h3>
              <p className="text-indigo-700 text-sm">
                <strong>Signature:</strong> Faster blues playing, clean articulation, hybrid picking
                <br/><strong>Learn:</strong> How to play blues with speed while maintaining clarity
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-800 mb-2">Muddy Waters - "Mannish Boy"</h3>
              <p className="text-indigo-700 text-sm">
                <strong>Signature:</strong> Slide guitar approach, vocal-guitar conversation, Chicago blues style
                <br/><strong>Learn:</strong> How guitar can support and enhance vocals, rhythmic blues playing
              </p>
            </div>
          </div>
        </section>

        {/* Practice Routine */}
        <section className="mb-12 bg-amber-50 rounded-xl p-8 border border-amber-200">
          <h2 className="text-2xl font-bold text-amber-900 mb-6">🎯 Blues Practice Routine</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4">
              <div className="bg-amber-100 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                <span className="text-amber-800 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-amber-800 mb-2">Scale Practice</h3>
              <p className="text-amber-700 text-sm">
                Practice minor pentatonic and blues scales in all 5 positions. Focus on clean execution.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="bg-amber-100 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                <span className="text-amber-800 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-amber-800 mb-2">Bending Practice</h3>
              <p className="text-amber-700 text-sm">
                Practice quarter, half, and whole-step bends. Use a tuner to ensure accurate pitch.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="bg-amber-100 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                <span className="text-amber-800 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-amber-800 mb-2">Lick Learning</h3>
              <p className="text-amber-700 text-sm">
                Learn classic blues licks and practice them over different chord progressions.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="bg-amber-100 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                <span className="text-amber-800 font-bold">4</span>
              </div>
              <h3 className="font-semibold text-amber-800 mb-2">Jamming</h3>
              <p className="text-amber-700 text-sm">
                Play along with blues backing tracks, focusing on phrasing and expression over speed.
              </p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="text-center">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Continue Your Lead Guitar Journey</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/lessons/songs/lead/rock"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Next: Rock Lead Guitar →
              </Link>
              <Link 
                href="/lessons/songs/lead/intervals"
                className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
              >
                ← Previous: Melodic Intervals
              </Link>
              <Link 
                href="/lessons/songs/lead"
                className="inline-flex items-center px-4 py-2 bg-gray-500 text-white font-medium rounded-lg hover:bg-gray-600 transition-colors"
              >
                Lead Guitar Overview
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
