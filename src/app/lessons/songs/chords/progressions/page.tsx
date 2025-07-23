import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const commonProgressions = [
  {
    name: 'I-V-vi-IV (Pop Progression)',
    numerals: 'I - V - vi - IV',
    example: 'C - G - Am - F',
    description: 'The most popular progression in modern music',
    function: 'Tonic → Dominant → Relative Minor → Subdominant',
    emotional_effect: 'Bright, optimistic, familiar',
    songs: ['Let It Be - Beatles', 'Don\'t Stop Believin\' - Journey', 'With or Without You - U2'],
    theory: 'Strong tonic establishment, dominant tension, deceptive resolution to vi, plagal motion back'
  },
  {
    name: 'vi-IV-I-V (Emotional)',
    numerals: 'vi - IV - I - V',
    example: 'Am - F - C - G',
    description: 'Starts melancholy, builds to bright resolution',
    function: 'Relative Minor → Subdominant → Tonic → Dominant',
    emotional_effect: 'Melancholy to hopeful, emotional journey',
    songs: ['Complicated - Avril Lavigne', 'Grenade - Bruno Mars'],
    theory: 'Minor beginning creates vulnerability, major progression builds hope and energy'
  },
  {
    name: 'I-vi-IV-V (50s Progression)',
    numerals: 'I - vi - IV - V',
    example: 'C - Am - F - G',
    description: 'Classic doo-wop and early rock progression',
    function: 'Tonic → Relative Minor → Subdominant → Dominant',
    emotional_effect: 'Nostalgic, classic, circular',
    songs: ['Stand By Me - Ben E. King', 'Blue Moon - Various'],
    theory: 'Smooth voice leading, natural harmonic rhythm, perfect for loops'
  },
  {
    name: 'ii-V-I (Jazz Foundation)',
    numerals: 'ii - V - I',
    example: 'Dm - G - C',
    description: 'The cornerstone of jazz harmony',
    function: 'Subdominant → Dominant → Tonic',
    emotional_effect: 'Sophisticated, resolved, jazzy',
    songs: ['All The Things You Are', 'Autumn Leaves'],
    theory: 'Strongest possible cadential motion, ii prepares V which resolves to I'
  },
  {
    name: 'I-IV-V-I (Classical Cadence)',
    numerals: 'I - IV - V - I',
    example: 'C - F - G - C',
    description: 'The foundation of Western harmony',
    function: 'Tonic → Subdominant → Dominant → Tonic',
    emotional_effect: 'Complete, satisfying, traditional',
    songs: ['Twist and Shout', 'Wild Thing'],
    theory: 'Perfect cadential motion demonstrating all primary harmonic functions'
  },
  {
    name: 'vi-V-IV-V (Minor to Major)',
    numerals: 'vi - V - IV - V',
    example: 'Am - G - F - G',
    description: 'Creates dramatic tension before resolution',
    function: 'Relative Minor → Dominant → Subdominant → Dominant',
    emotional_effect: 'Dramatic, building, anticipatory',
    songs: ['Every Rose Has Its Thorn', 'More Than Words'],
    theory: 'Minor start creates darkness, repeated dominants build tension for eventual resolution'
  }
];

const progressionFunctions = [
  {
    function: 'Tonic (I)',
    role: 'Home, Stability, Rest',
    description: 'Provides harmonic stability and sense of resolution',
    chords: ['I', 'vi', 'iii'],
    usage: 'Song beginnings, endings, points of rest',
    emotion: 'Stable, comfortable, resolved'
  },
  {
    function: 'Subdominant (IV)',
    role: 'Departure, Contrast, Plagal',
    description: 'Moves away from tonic, provides gentle contrast',
    chords: ['IV', 'ii', 'vi'],
    usage: 'Bridge sections, pre-choruses, gentle motion',
    emotion: 'Warm, reflective, contemplative'
  },
  {
    function: 'Dominant (V)',
    role: 'Tension, Leading, Resolution',
    description: 'Creates tension that demands resolution to tonic',
    chords: ['V', 'viiº', 'V7'],
    usage: 'Ends of phrases, before choruses, climactic moments',
    emotion: 'Tense, urgent, expectant'
  }
];

const analysisSteps = [
  {
    step: '1. Identify the Key',
    description: 'Determine the tonal center of the song',
    process: 'Listen for the chord that feels like "home" - usually the first or last chord',
    example: 'If the progression feels resolved on C major, the key is C major'
  },
  {
    step: '2. Number the Chords',
    description: 'Assign Roman numerals based on scale degrees',
    process: 'Count up from the tonic: I, ii, iii, IV, V, vi, viiº',
    example: 'In C major: C=I, Dm=ii, Em=iii, F=IV, G=V, Am=vi, Bº=viiº'
  },
  {
    step: '3. Identify Functions',
    description: 'Determine the harmonic role each chord plays',
    process: 'Group chords by function: Tonic, Subdominant, Dominant',
    example: 'C-Am-F-G = I-vi-IV-V = Tonic-Tonic-Subdominant-Dominant'
  },
  {
    step: '4. Analyze Movement',
    description: 'Study how chords progress and create momentum',
    process: 'Look for patterns: circle of fifths, stepwise motion, functional progression',
    example: 'V-I creates strongest resolution, IV-I creates plagal cadence'
  }
];

export default function ChordProgressionsPage() {
  return (
    <Layout>
      <Header
        title="Chord Progressions"
        subtitle="Master the harmonic language of popular music through functional analysis"
      />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Navigation */}
        <section className="bg-blue-50 rounded-lg p-4 mb-8">
          <Link href="/lessons/songs/chords" className="text-blue-600 hover:text-blue-800 text-sm">
            ← Back to Chord Theory
          </Link>
        </section>

        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Chord Progressions</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Chord progressions are the backbone of all popular music. They create emotional journeys, 
              establish keys, and provide the harmonic framework that melodies and rhythms build upon. 
              Understanding how and why certain progressions work will unlock the language of harmony 
              and help you recognize patterns across all genres.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <div className="text-purple-600 text-2xl mb-2">🎼</div>
                <h3 className="font-semibold text-gray-900 mb-2">Harmonic Foundation</h3>
                <p className="text-gray-600 text-sm">Creates the emotional and tonal framework for songs</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <div className="text-purple-600 text-2xl mb-2">🔄</div>
                <h3 className="font-semibold text-gray-900 mb-2">Functional Movement</h3>
                <p className="text-gray-600 text-sm">Each chord has a role in creating tension and release</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <div className="text-purple-600 text-2xl mb-2">💫</div>
                <h3 className="font-semibold text-gray-900 mb-2">Emotional Impact</h3>
                <p className="text-gray-600 text-sm">Different progressions evoke distinct emotional responses</p>
              </div>
            </div>
          </div>
        </section>

        {/* Harmonic Functions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Harmonic Functions</h2>
          <div className="grid gap-6">
            {progressionFunctions.map((func, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-purple-300 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{func.function}</h3>
                    <p className="text-purple-600 font-medium">{func.role}</p>
                  </div>
                  <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    {func.emotion}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{func.description}</p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Common Chords</h4>
                    <div className="flex flex-wrap gap-2">
                      {func.chords.map((chord, i) => (
                        <span key={i} className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">
                          {chord}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Typical Usage</h4>
                    <p className="text-gray-700 text-sm">{func.usage}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Emotional Quality</h4>
                    <p className="text-gray-700 text-sm">{func.emotion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Progressions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Essential Chord Progressions</h2>
          <div className="space-y-8">
            {commonProgressions.map((progression, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 px-6 py-4">
                  <h3 className="text-xl font-bold text-white">{progression.name}</h3>
                  <div className="text-purple-100 text-sm mt-1">{progression.description}</div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Roman Numerals</h4>
                      <div className="font-mono text-lg">{progression.numerals}</div>
                      <div className="text-sm text-gray-600 mt-1">Example: {progression.example}</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Harmonic Function</h4>
                      <div className="text-sm">{progression.function}</div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Emotional Effect</h4>
                      <p className="text-gray-700 text-sm">{progression.emotional_effect}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Theory Analysis</h4>
                      <p className="text-gray-700 text-sm">{progression.theory}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Famous Examples</h4>
                    <div className="flex flex-wrap gap-2">
                      {progression.songs.map((song, i) => (
                        <span key={i} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                          {song}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Analysis Process */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Analyze Progressions</h2>
          <div className="grid gap-6">
            {analysisSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.step}</h3>
                    <p className="text-gray-700 mb-3">{step.description}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <h4 className="font-medium text-gray-900 mb-1">Process</h4>
                        <p className="text-gray-700 text-sm">{step.process}</p>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-3">
                        <h4 className="font-medium text-gray-900 mb-1">Example</h4>
                        <p className="text-gray-700 text-sm">{step.example}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Circle of Fifths Movement */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Circle of Fifths in Progressions</h2>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🔄 Descending Fifths</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="font-mono text-sm">C → F → Bb → Eb → Ab</div>
                    <div className="text-xs text-gray-600 mt-1">Each chord a fifth lower</div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Creates strong forward momentum. Very common in jazz and sophisticated pop music. 
                    Each chord naturally leads to the next.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">⬆️ Ascending Fifths</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="font-mono text-sm">C → G → D → A → E</div>
                    <div className="text-xs text-gray-600 mt-1">Each chord a fifth higher</div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Creates building energy and brightness. Common in rock and pop for building 
                    excitement toward choruses or climaxes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Practice Exercises</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🎯 Listening Practice</h3>
              <ol className="space-y-2 text-gray-700 text-sm">
                <li>1. Listen to popular songs and identify the chord progressions</li>
                <li>2. Notice how different progressions create different emotions</li>
                <li>3. Practice hearing the difference between major and minor chords</li>
                <li>4. Identify when songs use the same progression in different keys</li>
                <li>5. Listen for functional movement: tonic → dominant → tonic</li>
              </ol>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🎸 Playing Practice</h3>
              <ol className="space-y-2 text-gray-700 text-sm">
                <li>1. Learn each progression in multiple keys</li>
                <li>2. Practice smooth transitions between chords</li>
                <li>3. Experiment with different strumming patterns</li>
                <li>4. Try playing progressions with different chord voicings</li>
                <li>5. Write original melodies over familiar progressions</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <Link href="/lessons/songs/chords" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
              ← Back to Chord Theory
            </Link>
            <Link href="/lessons/songs/chords/roman-numerals" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
              Next: Roman Numeral Analysis →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
