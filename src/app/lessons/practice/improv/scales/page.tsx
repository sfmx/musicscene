"use client";

import VexTabRenderer from '@/components/VexTabRenderer';

export default function ScalesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative py-24 px-6">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Scale Application in Improvisation
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Transform scales from exercises into expressive musical vocabulary
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        
        {/* Fundamentals Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center text-sm font-bold">1</span>
            Scale Fundamentals for Improvisation
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-300">Core Principles</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong>Context over Memorization:</strong> Understanding when to use scales</li>
                <li>• <strong>Intervallic Thinking:</strong> Focus on relationships between notes</li>
                <li>• <strong>Phrase Construction:</strong> Building melodic lines from scale patterns</li>
                <li>• <strong>Harmonic Awareness:</strong> Connecting scales to chord progressions</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-300">Musical Application</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong>Target Notes:</strong> Emphasizing chord tones and tensions</li>
                <li>• <strong>Approach Notes:</strong> Using passing tones effectively</li>
                <li>• <strong>Scale Combinations:</strong> Mixing different scales smoothly</li>
                <li>• <strong>Modal Interchange:</strong> Borrowing from parallel modes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* VexTab Examples Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-sm font-bold">♫</span>
            Scale Application Examples
          </h2>
          
          <div className="grid gap-8">
            <div className="bg-black/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Pentatonic with Chromatic Approach</h3>
              <VexTabRenderer 
                vextab="tabstave notation=true
notes :q G/4 ^3^ :8 B-/4 ^b3^ B/4 ^3^ :q D/5 ^5^ :8 E-/5 ^b6^ E/5 ^6^ :q G/5 ^8^
tabstave
notes :q 3/3 :8 2/3 3/3 :q 5/3 :8 4/3 5/3 :q 8/3"
              />
            </div>

            <div className="bg-black/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Dorian Mode Application</h3>
              <VexTabRenderer 
                vextab="tabstave notation=true
notes :8 A/4 ^1^ B/4 ^2^ C/5 ^b3^ D/5 ^4^ E/5 ^5^ F/5 ^6^ G/5 ^b7^ A/5 ^8^
tabstave
notes :8 5/2 7/2 8/2 10/2 12/2 13/2 15/2 17/2"
              />
            </div>

            <div className="bg-black/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Blues Scale with Bends</h3>
              <VexTabRenderer 
                vextab="tabstave notation=true
notes :q G/4 ^1^ :8 B-/4 ^b3^ C/5 ^4^ :q D-/5 ^b5^ D/5 ^5^ :8 F/5 ^b7^ :q G/5 ^8^
tabstave
notes :q 3/3 :8 6/3 8/3 :q 9/3 10/3 :8 13/3 :q 15/3"
              />
            </div>
          </div>
        </div>

        {/* Scale Categories Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-sm font-bold">2</span>
            Essential Scale Categories
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-purple-300 mb-3">Pentatonic Scales</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Major pentatonic: bright, country feel</li>
                <li>• Minor pentatonic: blues, rock foundation</li>
                <li>• Chromatic additions for color</li>
                <li>• Position shifting and connections</li>
              </ul>
            </div>
            <div className="bg-black/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-purple-300 mb-3">Modal Scales</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Dorian: minor with raised 6th</li>
                <li>• Mixolydian: major with flat 7th</li>
                <li>• Lydian: major with raised 4th</li>
                <li>• Phrygian: dark, Spanish flavor</li>
              </ul>
            </div>
            <div className="bg-black/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-purple-300 mb-3">Exotic Scales</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Harmonic minor: classical tension</li>
                <li>• Diminished: symmetrical patterns</li>
                <li>• Whole tone: dreamy, impressionist</li>
                <li>• Altered: outside harmonic colors</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Scale Concepts Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-sm font-bold">3</span>
            Advanced Scale Concepts
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-black/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-orange-300 mb-3">Scale Superimposition</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Playing one scale over different chord types to create tension and release.
                </p>
                <ul className="space-y-1 text-gray-400 text-sm">
                  <li>• Pentatonic over major 7th chords</li>
                  <li>• Dorian over dominant chords</li>
                  <li>• Lydian over static harmony</li>
                </ul>
              </div>
              <div className="bg-black/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-orange-300 mb-3">Scale Sequencing</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Creating patterns within scales for coherent melodic development.
                </p>
                <ul className="space-y-1 text-gray-400 text-sm">
                  <li>• Ascending and descending patterns</li>
                  <li>• Skip patterns (3rds, 4ths, 5ths)</li>
                  <li>• Rhythmic displacement</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-black/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-orange-300 mb-3">Chromatic Connections</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Using chromatic notes to connect scale tones and create smooth voice leading.
                </p>
                <ul className="space-y-1 text-gray-400 text-sm">
                  <li>• Approach notes from above/below</li>
                  <li>• Chromatic enclosures</li>
                  <li>• Passing tones between chord changes</li>
                </ul>
              </div>
              <div className="bg-black/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-orange-300 mb-3">Motivic Development</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Using scales as source material for developing musical motifs.
                </p>
                <ul className="space-y-1 text-gray-400 text-sm">
                  <li>• Rhythmic variations of scale fragments</li>
                  <li>• Intervallic expansion/contraction</li>
                  <li>• Sequence transposition</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Genre Applications Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-sm font-bold">🎵</span>
            Genre-Specific Scale Applications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-black/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-indigo-300 mb-3">Blues & Rock</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Minor pentatonic as foundation</li>
                  <li>• Blue notes (b3, b5, b7) for expression</li>
                  <li>• Major pentatonic for resolution</li>
                  <li>• Mixolydian for dominant chord soloing</li>
                </ul>
              </div>
              <div className="bg-black/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-indigo-300 mb-3">Jazz & Fusion</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Dorian for minor ii-V progressions</li>
                  <li>• Altered scale over dominant chords</li>
                  <li>• Lydian dominant for tritone substitutions</li>
                  <li>• Chromatic approach tones</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-black/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-indigo-300 mb-3">Folk & Country</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Major pentatonic for bright melodies</li>
                  <li>• Mixolydian for modal flavor</li>
                  <li>• Natural minor for melancholy</li>
                  <li>• Open string incorporations</li>
                </ul>
              </div>
              <div className="bg-black/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-indigo-300 mb-3">Metal & Progressive</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Natural minor and harmonic minor</li>
                  <li>• Phrygian for dark atmosphere</li>
                  <li>• Diminished for chromatic runs</li>
                  <li>• Exotic scales for unique colors</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Strategies Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center text-sm font-bold">📚</span>
            Scale Practice Strategies
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-300 mb-4">Foundation Practice</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 font-bold mt-1">•</span>
                  <div>
                    <strong>Pattern Memorization:</strong> Learn scales in all positions
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 font-bold mt-1">•</span>
                  <div>
                    <strong>Intervallic Practice:</strong> Play scales in 3rds, 4ths, 5ths
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 font-bold mt-1">•</span>
                  <div>
                    <strong>Rhythmic Variations:</strong> Different note values and accents
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-black/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-300 mb-4">Application Practice</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 font-bold mt-1">•</span>
                  <div>
                    <strong>Backing Tracks:</strong> Practice over chord progressions
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 font-bold mt-1">•</span>
                  <div>
                    <strong>Melodic Phrases:</strong> Create musical sentences from scales
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 font-bold mt-1">•</span>
                  <div>
                    <strong>Call and Response:</strong> Answer scale phrases with variations
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Common Mistakes Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center text-sm font-bold">⚠</span>
            Common Scale Application Mistakes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4">
                <h3 className="text-red-300 font-semibold mb-2">Running Scales Mindlessly</h3>
                <p className="text-gray-300 text-sm">
                  Playing scales without musical intention. Focus on creating phrases and expressing emotions rather than just finger exercises.
                </p>
              </div>
              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4">
                <h3 className="text-red-300 font-semibold mb-2">Ignoring Harmony</h3>
                <p className="text-gray-300 text-sm">
                  Not considering the underlying chords. Always connect your scale choice to the harmonic context.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4">
                <h3 className="text-red-300 font-semibold mb-2">Over-reliance on Position</h3>
                <p className="text-gray-300 text-sm">
                  Staying in one fretboard position. Learn to connect positions and play across the entire neck.
                </p>
              </div>
              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4">
                <h3 className="text-red-300 font-semibold mb-2">Poor Note Choice</h3>
                <p className="text-gray-300 text-sm">
                  Not emphasizing important harmony notes. Target chord tones on strong beats for better harmonic connection.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Routine Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center text-sm font-bold">📝</span>
            Daily Scale Practice Routine
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6">
              <h3 className="text-emerald-300 font-semibold mb-4">Warm-up (15 mins)</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Major scale in one position</li>
                <li>• Pentatonic patterns</li>
                <li>• Basic interval exercises</li>
                <li>• Chromatic warm-ups</li>
              </ul>
            </div>
            <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6">
              <h3 className="text-emerald-300 font-semibold mb-4">Focus Study (25 mins)</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Target scale of the week</li>
                <li>• All positions and patterns</li>
                <li>• Intervallic variations</li>
                <li>• Harmonic context practice</li>
              </ul>
            </div>
            <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6">
              <h3 className="text-emerald-300 font-semibold mb-4">Application (20 mins)</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Improvise with target scales</li>
                <li>• Play over backing tracks</li>
                <li>• Create melodic phrases</li>
                <li>• Record and analyze</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Continue Your Journey</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a href="/lessons/practice/improv/call-response" className="group bg-gradient-to-br from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 rounded-xl p-4 border border-purple-500/30 transition-all duration-300 hover:scale-105">
              <h3 className="font-semibold text-purple-300 group-hover:text-purple-200 mb-2">Call & Response</h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300">Interactive musical conversation</p>
            </a>
            <a href="/lessons/practice/improv/motif-development" className="group bg-gradient-to-br from-blue-600/20 to-cyan-600/20 hover:from-blue-600/30 hover:to-cyan-600/30 rounded-xl p-4 border border-blue-500/30 transition-all duration-300 hover:scale-105">
              <h3 className="font-semibold text-blue-300 group-hover:text-blue-200 mb-2">Motif Development</h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300">Evolving musical ideas</p>
            </a>
            <a href="/lessons/practice/improv/rhythm" className="group bg-gradient-to-br from-orange-600/20 to-red-600/20 hover:from-orange-600/30 hover:to-red-600/30 rounded-xl p-4 border border-orange-500/30 transition-all duration-300 hover:scale-105">
              <h3 className="font-semibold text-orange-300 group-hover:text-orange-200 mb-2">Rhythm</h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300">Rhythmic improvisation techniques</p>
            </a>
            <a href="/lessons/practice/improv/arpeggios" className="group bg-gradient-to-br from-green-600/20 to-teal-600/20 hover:from-green-600/30 hover:to-teal-600/30 rounded-xl p-4 border border-green-500/30 transition-all duration-300 hover:scale-105">
              <h3 className="font-semibold text-green-300 group-hover:text-green-200 mb-2">Arpeggio Techniques</h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300">Harmonic improvisation</p>
            </a>
          </div>
          
          <div className="mt-8 text-center">
            <a href="/lessons/practice" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105">
              <span>← Back to Practice Lessons</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
