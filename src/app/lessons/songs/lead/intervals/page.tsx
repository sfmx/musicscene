import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const intervalTypes = [
  {
    interval: 'Unison/Octave',
    semitones: '0/12',
    character: 'Stable, Strong',
    emotion: 'Grounding, powerful, consonant',
    usage: 'Emphasis, resolution points, power',
    examples: 'Metal power chords, classical resolutions'
  },
  {
    interval: 'Minor 2nd',
    semitones: '1',
    character: 'Dissonant, Tense',
    emotion: 'Unease, suspense, grinding',
    usage: 'Create tension, chromatic passing tones',
    examples: 'Jaws theme, horror movie soundtracks'
  },
  {
    interval: 'Major 2nd',
    semitones: '2',
    character: 'Mildly Dissonant',
    emotion: 'Gentle tension, forward motion',
    usage: 'Stepwise motion, suspensions',
    examples: 'Classical melodies, pop vocal lines'
  },
  {
    interval: 'Minor 3rd',
    semitones: '3',
    character: 'Sad, Minor',
    emotion: 'Melancholy, introspective, blue',
    usage: 'Minor key melodies, blues expressions',
    examples: 'Blues scales, sad ballads'
  },
  {
    interval: 'Major 3rd',
    semitones: '4',
    character: 'Happy, Major',
    emotion: 'Bright, uplifting, consonant',
    usage: 'Major key melodies, upbeat music',
    examples: 'Pop hooks, country melodies'
  },
  {
    interval: 'Perfect 4th',
    semitones: '5',
    character: 'Open, Stable',
    emotion: 'Spacious, unresolved, ambiguous',
    usage: 'Folk melodies, hymns, suspensions',
    examples: '"Amazing Grace", "Here Comes the Bride"'
  },
  {
    interval: 'Tritone',
    semitones: '6',
    character: 'Unstable, Diabolic',
    emotion: 'Dark, evil, needs resolution',
    usage: 'Jazz tensions, metal riffs, blues',
    examples: '"Purple Haze", jazz dominant chords'
  },
  {
    interval: 'Perfect 5th',
    semitones: '7',
    character: 'Strong, Stable',
    emotion: 'Powerful, consonant, heroic',
    usage: 'Power chords, strong melodies',
    examples: 'Rock power chords, "Twinkle Twinkle"'
  },
  {
    interval: 'Minor 6th',
    semitones: '8',
    character: 'Sad, Yearning',
    emotion: 'Longing, melancholic, nostalgic',
    usage: 'Ballads, emotional passages',
    examples: '"The Way You Look Tonight"'
  },
  {
    interval: 'Major 6th',
    semitones: '9',
    character: 'Sweet, Pleasant',
    emotion: 'Warm, comfortable, stable',
    usage: 'Country, folk, sweet melodies',
    examples: '"My Bonnie Lies Over the Ocean"'
  },
  {
    interval: 'Minor 7th',
    semitones: '10',
    character: 'Unresolved, Jazzy',
    emotion: 'Sophisticated, needs resolution',
    usage: 'Jazz melodies, blues, dominant chords',
    examples: 'Jazz standards, "Somewhere"'
  },
  {
    interval: 'Major 7th',
    semitones: '11',
    character: 'Dreamy, Dissonant',
    emotion: 'Ethereal, floating, modern',
    usage: 'Jazz, modern harmony, atmosphere',
    examples: 'Jazz ballads, ambient music'
  }
];

const melodicMotion = [
  {
    type: 'Stepwise Motion',
    description: 'Moving by 2nd intervals (adjacent notes)',
    character: 'Smooth, flowing, singable',
    usage: 'Vocal-like melodies, classical themes, ballads',
    example: 'Most folk songs, "Mary Had a Little Lamb"'
  },
  {
    type: 'Skip Motion',
    description: 'Moving by 3rd intervals',
    character: 'Moderate activity, arpeggiated feel',
    usage: 'Chord outline melodies, moderate energy',
    example: 'Arpeggiated passages, "Do-Re-Mi" from Sound of Music'
  },
  {
    type: 'Leap Motion',
    description: 'Moving by 4th or larger intervals',
    character: 'Dramatic, attention-grabbing, angular',
    usage: 'Climactic moments, modern composition',
    example: '"Somewhere" (West Side Story), jazz melodies'
  },
  {
    type: 'Chromatic Motion',
    description: 'Moving by half-steps, using all 12 tones',
    character: 'Smooth but harmonically rich',
    usage: 'Jazz, blues, sophisticated harmony',
    example: 'Jazz walking bass lines, blues licks'
  }
];

const intervalApplications = [
  {
    musical_context: 'Blues Lead',
    key_intervals: ['Minor 3rd', 'Perfect 4th', 'Tritone', 'Minor 7th'],
    approach: 'Use minor 3rd for blue notes, tritone for tension, minor 7th for unresolved feel',
    example: 'B.B. King style bending minor 3rd to major 3rd over dominant chords'
  },
  {
    musical_context: 'Rock Melodies',
    key_intervals: ['Perfect 5th', 'Octave', 'Major 3rd', 'Perfect 4th'],
    approach: 'Strong consonant intervals for power and memorability',
    example: 'AC/DC riffs using power chord intervals, anthem-like melodies'
  },
  {
    musical_context: 'Jazz Lines',
    key_intervals: ['Major 7th', 'Minor 7th', 'Tritone', 'Minor 2nd'],
    approach: 'Complex intervals create sophisticated harmony and tension',
    example: 'Bebop lines with chromatic approach tones and chord extensions'
  },
  {
    musical_context: 'Country Lead',
    key_intervals: ['Major 6th', 'Major 3rd', 'Perfect 5th', 'Major 2nd'],
    approach: 'Bright, consonant intervals that support major key harmonies',
    example: 'Telecaster-style lead lines with chicken picking and major pentatonic'
  }
];

export default function MelodicIntervalsPage() {
  return (
    <Layout>
      <Header
        title="Melodic Intervals in Lead Guitar"
        subtitle="Master the use of intervals to create memorable melodies and understand their emotional impact."
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Core Concept */}
        <section className="mb-12 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Intervals: The DNA of Melody</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">🧬 What Are Intervals?</h3>
              <p className="text-gray-600 mb-3">
                An interval is the distance between two notes. Each interval has its own unique emotional character and sonic quality that affects how your melody feels.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Example:</strong> C to E (major 3rd) sounds happy, while C to E♭ (minor 3rd) sounds sad, even though it's just one semitone difference.
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">🎭 Emotional Language</h3>
              <p className="text-gray-600 mb-3">
                Understanding intervals gives you an emotional vocabulary. You can deliberately choose intervals to create specific feelings in your solos.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Practical Use:</strong> Want tension? Use tritones and minor 2nds. Want resolution? Use octaves and perfect 5ths.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interval Characteristics */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Interval Characteristics & Emotions</h2>
          <div className="space-y-4">
            {intervalTypes.map((interval, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                <div className="grid md:grid-cols-6 gap-3 items-center">
                  <div className="md:col-span-1">
                    <h3 className="font-semibold text-gray-800">{interval.interval}</h3>
                    <p className="text-sm text-blue-600 font-mono">{interval.semitones} semitones</p>
                  </div>
                  <div className="md:col-span-1">
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                      {interval.character}
                    </span>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-gray-600">{interval.emotion}</p>
                  </div>
                  <div className="md:col-span-1">
                    <p className="text-xs text-gray-500">{interval.usage}</p>
                  </div>
                  <div className="md:col-span-1">
                    <p className="text-xs text-gray-400 italic">{interval.examples}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Melodic Motion Types */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Melodic Motion</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {melodicMotion.map((motion, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{motion.type}</h3>
                <p className="text-blue-800 mb-3">{motion.description}</p>
                <div className="mb-3">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                    {motion.character}
                  </span>
                </div>
                <p className="text-blue-700 text-sm mb-2">{motion.usage}</p>
                <p className="text-blue-600 text-xs italic">{motion.example}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Interval Applications by Style */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Interval Applications by Musical Style</h2>
          <div className="space-y-6">
            {intervalApplications.map((application, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-2">{application.musical_context}</h3>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Key Intervals:</h4>
                    <div className="flex flex-wrap gap-1">
                      {application.key_intervals.map((interval, i) => (
                        <span key={i} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                          {interval}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Approach:</h4>
                    <p className="text-sm text-gray-600">{application.approach}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Example:</h4>
                    <p className="text-xs text-gray-500 italic">{application.example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Exercises */}
        <section className="mb-12 bg-green-50 rounded-xl p-8 border border-green-200">
          <h2 className="text-2xl font-bold text-green-900 mb-6">🎯 Interval Training Exercises</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-3">Interval Recognition</h3>
              <p className="text-green-700 text-sm mb-3">
                Play two notes and identify the interval. Start with perfect 5ths and octaves, gradually add more complex intervals.
              </p>
              <p className="text-xs text-green-600 italic">
                Develops ear training for melodic construction
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-3">Emotional Interval Exercise</h3>
              <p className="text-green-700 text-sm mb-3">
                Choose an emotion (sad, happy, tense) and create a melody using only intervals that support that emotion.
              </p>
              <p className="text-xs text-green-600 italic">
                Connects interval theory to emotional expression
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-3">Melodic Contour Practice</h3>
              <p className="text-green-700 text-sm mb-3">
                Create melodies using only stepwise motion, then only leaps, then combining both for contrast.
              </p>
              <p className="text-xs text-green-600 italic">
                Develops control over melodic flow and character
              </p>
            </div>
          </div>
        </section>

        {/* Advanced Concepts */}
        <section className="mb-12 bg-purple-50 rounded-xl p-8 border border-purple-200">
          <h2 className="text-2xl font-bold text-purple-900 mb-6">Advanced Interval Concepts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-purple-800 mb-3">🔄 Interval Inversion</h3>
              <p className="text-purple-700 mb-3">
                When you invert an interval (flip it upside down), you get its complement. This creates related but different emotional colors.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-purple-600">
                  <strong>Examples:</strong><br/>
                  Major 3rd → Minor 6th<br/>
                  Perfect 4th → Perfect 5th<br/>
                  Minor 2nd → Major 7th
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-purple-800 mb-3">🎭 Compound Intervals</h3>
              <p className="text-purple-700 mb-3">
                Intervals larger than an octave (9ths, 11ths, 13ths) have similar character to their simple forms but with added sophistication.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-purple-600">
                  <strong>Examples:</strong><br/>
                  Major 9th = Major 2nd + Octave<br/>
                  Perfect 11th = Perfect 4th + Octave<br/>
                  Major 13th = Major 6th + Octave
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Famous Interval Usage */}
        <section className="mb-12 bg-amber-50 rounded-xl p-8 border border-amber-200">
          <h2 className="text-2xl font-bold text-amber-900 mb-6">🎵 Famous Interval Usage in Guitar Solos</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-amber-800 mb-2">"Layla" - Derek and the Dominos</h3>
              <p className="text-amber-700 text-sm">
                <strong>Key Interval:</strong> Minor 3rd bends to Major 3rd
                <br/><strong>Effect:</strong> Creates the characteristic "crying" sound of blues lead guitar through interval manipulation
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-amber-800 mb-2">"Stairway to Heaven" - Led Zeppelin</h3>
              <p className="text-amber-700 text-sm">
                <strong>Key Interval:</strong> Perfect 4ths and 5ths in the main theme
                <br/><strong>Effect:</strong> Creates the folk-like, open sound that defines the melody's character
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-amber-800 mb-2">"Europa" - Santana</h3>
              <p className="text-amber-700 text-sm">
                <strong>Key Interval:</strong> Minor 6th leaps and Major 7th tensions
                <br/><strong>Effect:</strong> Creates the romantic, yearning quality through sophisticated interval choices
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-amber-800 mb-2">"Purple Haze" - Jimi Hendrix</h3>
              <p className="text-amber-700 text-sm">
                <strong>Key Interval:</strong> Tritone (augmented 4th)
                <br/><strong>Effect:</strong> Creates the dark, dissonant character that matches the song's psychedelic vibe
              </p>
            </div>
          </div>
        </section>

        {/* Practical Application */}
        <section className="mb-12 bg-indigo-50 rounded-xl p-8 border border-indigo-200">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6">💡 Practical Application Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-indigo-800 mb-3">Building Memorable Melodies</h3>
              <ul className="space-y-2 text-indigo-700 text-sm">
                <li>• Start with mostly stepwise motion for singability</li>
                <li>• Use one dramatic leap as a focal point</li>
                <li>• Balance consonant and dissonant intervals</li>
                <li>• Resolve dissonant intervals to consonant ones</li>
                <li>• Use repeated intervals to create unity</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-indigo-800 mb-3">Creating Emotional Impact</h3>
              <ul className="space-y-2 text-indigo-700 text-sm">
                <li>• Minor 2nds and 7ths for tension</li>
                <li>• Major 3rds and 6ths for warmth</li>
                <li>• Perfect 4ths and 5ths for strength</li>
                <li>• Tritones for edginess and instability</li>
                <li>• Octaves for power and resolution</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="text-center">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Continue Your Lead Guitar Journey</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/lessons/songs/lead/blues"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Next: Blues Lead Techniques →
              </Link>
              <Link 
                href="/lessons/songs/lead/construction"
                className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
              >
                ← Previous: Solo Construction
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
