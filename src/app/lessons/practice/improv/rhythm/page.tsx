"use client";

import VexTabRenderer from '@/components/VexTabRenderer';

export default function RhythmPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative py-24 px-6">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent mb-6">
            Rhythm in Improvisation
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Master the rhythmic foundation that drives compelling improvisation
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        
        {/* Fundamentals Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-sm font-bold">1</span>
            Rhythmic Fundamentals
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-300">Core Principles</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong>Pulse and Meter:</strong> Feel the underlying beat and time signature</li>
                <li>• <strong>Subdivision:</strong> Understanding note values and their relationships</li>
                <li>• <strong>Syncopation:</strong> Playing against the expected beat</li>
                <li>• <strong>Polyrhythm:</strong> Multiple rhythmic patterns simultaneously</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-300">Rhythmic Elements</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong>Accents:</strong> Emphasizing certain beats or notes</li>
                <li>• <strong>Displacement:</strong> Shifting patterns off the beat</li>
                <li>• <strong>Tuplets:</strong> Triplets, quintuplets, and odd groupings</li>
                <li>• <strong>Cross-rhythms:</strong> Conflicting rhythmic patterns</li>
              </ul>
            </div>
          </div>
        </div>

        {/* VexTab Examples Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-sm font-bold">♫</span>
            Rhythmic Examples
          </h2>
          
          <div className="grid gap-8">
            <div className="bg-black/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Basic Syncopation</h3>
              <VexTabRenderer 
                vextab="tabstave notation=true
notes :q E/4 ^3^ :8 A/4 ^5^ A/4 ^5^ :q E/4 ^3^ :8 D/4 ^2^ :q A/4 ^5^
tabstave
notes :q 3/2 :8 5/2 5/2 :q 3/2 :8 2/3 :q 5/2"
              />
            </div>

            <div className="bg-black/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Triplet Feel</h3>
              <VexTabRenderer 
                vextab="tabstave notation=true
notes :8t E/4 ^3^ A/4 ^5^ E/4 ^3^ :q A/4 ^5^ :8t D/4 ^2^ A/4 ^5^ D/4 ^2^ :q E/4 ^3^
tabstave
notes :8t 3/2 5/2 3/2 :q 5/2 :8t 2/3 5/2 2/3 :q 3/2"
              />
            </div>

            <div className="bg-black/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Displaced Accent Pattern</h3>
              <VexTabRenderer 
                vextab="tabstave notation=true
notes :8 E/4 ^3^ :q A/4 ^5^ :8 E/4 ^3^ A/4 ^5^ :q D/4 ^2^ :8 A/4 ^5^ E/4 ^3^
tabstave
notes :8 3/2 :q 5/2 :8 3/2 5/2 :q 2/3 :8 5/2 3/2"
              />
            </div>
          </div>
        </div>

        {/* Rhythmic Concepts Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center text-sm font-bold">2</span>
            Advanced Rhythmic Concepts
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-300 mb-3">Metric Modulation</h3>
              <p className="text-gray-300 text-sm">
                Changing the perceived pulse while maintaining the same tempo. Creates dramatic shifts in feel and energy.
              </p>
            </div>
            <div className="bg-black/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-300 mb-3">Hemiola</h3>
              <p className="text-gray-300 text-sm">
                Playing two beats against three, or three against two. Common in Latin and African-influenced music.
              </p>
            </div>
            <div className="bg-black/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-300 mb-3">Rhythmic Layers</h3>
              <p className="text-gray-300 text-sm">
                Building multiple rhythmic patterns simultaneously. Essential for solo guitar arrangements.
              </p>
            </div>
          </div>
        </div>

        {/* Genre Approaches Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-sm font-bold">🎵</span>
            Genre-Specific Rhythmic Approaches
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-black/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-orange-300 mb-3">Jazz Rhythm</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Swing eighth notes and syncopated accents</li>
                  <li>• Emphasis on beats 2 and 4</li>
                  <li>• Complex polyrhythmic structures</li>
                  <li>• Rhythmic conversation with rhythm section</li>
                </ul>
              </div>
              <div className="bg-black/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-orange-300 mb-3">Latin Rhythm</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Clave-based rhythmic patterns</li>
                  <li>• Consistent sixteenth-note feel</li>
                  <li>• Montuno-style accompaniment patterns</li>
                  <li>• Cross-rhythmic melodic phrasing</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-black/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-orange-300 mb-3">Funk/R&B Rhythm</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Strong emphasis on beat 1</li>
                  <li>• Sixteenth-note subdivisions</li>
                  <li>• Muted string percussive techniques</li>
                  <li>• Syncopated chord stabs and riffs</li>
                </ul>
              </div>
              <div className="bg-black/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-orange-300 mb-3">Rock Rhythm</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Strong backbeat emphasis</li>
                  <li>• Power chord rhythmic patterns</li>
                  <li>• Palm muting and accent techniques</li>
                  <li>• Driving eighth and sixteenth notes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Exercises Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-sm font-bold">3</span>
            Rhythmic Practice Exercises
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-purple-300 mb-4">Foundation Exercises</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold mt-1">•</span>
                  <div>
                    <strong>Metronome Practice:</strong> Play scales with different subdivisions
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold mt-1">•</span>
                  <div>
                    <strong>Accent Exercises:</strong> Shift accents through patterns
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold mt-1">•</span>
                  <div>
                    <strong>Clapping Rhythms:</strong> Internalize complex patterns
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-black/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-purple-300 mb-4">Advanced Exercises</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold mt-1">•</span>
                  <div>
                    <strong>Polyrhythmic Practice:</strong> Two against three patterns
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold mt-1">•</span>
                  <div>
                    <strong>Displacement Drills:</strong> Move patterns through the bar
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold mt-1">•</span>
                  <div>
                    <strong>Odd Time Signatures:</strong> 5/4, 7/8, and irregular meters
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
            Common Rhythmic Mistakes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4">
                <h3 className="text-red-300 font-semibold mb-2">Rushing or Dragging</h3>
                <p className="text-gray-300 text-sm">
                  Speeding up in exciting passages or slowing down in difficult sections. Practice with metronome consistently.
                </p>
              </div>
              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4">
                <h3 className="text-red-300 font-semibold mb-2">Poor Subdivision</h3>
                <p className="text-gray-300 text-sm">
                  Not feeling the subdivisions within beats. Count aloud and practice with different note values.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4">
                <h3 className="text-red-300 font-semibold mb-2">Weak Internal Pulse</h3>
                <p className="text-gray-300 text-sm">
                  Losing the beat when playing complex rhythms. Develop strong internal metronome through practice.
                </p>
              </div>
              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4">
                <h3 className="text-red-300 font-semibold mb-2">Ignoring Rests</h3>
                <p className="text-gray-300 text-sm">
                  Not giving proper weight to silence. Rests are as important as notes in rhythmic expression.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Routine Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center text-sm font-bold">📝</span>
            Daily Rhythmic Practice Routine
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6">
              <h3 className="text-emerald-300 font-semibold mb-4">Warm-up (10 mins)</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Metronome at comfortable tempo</li>
                <li>• Quarter note scales</li>
                <li>• Basic accent patterns</li>
                <li>• Simple syncopations</li>
              </ul>
            </div>
            <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6">
              <h3 className="text-emerald-300 font-semibold mb-4">Focus (20 mins)</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Target rhythmic concept</li>
                <li>• Progressively complex patterns</li>
                <li>• Different subdivisions</li>
                <li>• Musical application</li>
              </ul>
            </div>
            <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6">
              <h3 className="text-emerald-300 font-semibold mb-4">Application (15 mins)</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Improvise with rhythm focus</li>
                <li>• Genre-specific patterns</li>
                <li>• Play along with tracks</li>
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
            <a href="/lessons/practice/improv/scales" className="group bg-gradient-to-br from-green-600/20 to-teal-600/20 hover:from-green-600/30 hover:to-teal-600/30 rounded-xl p-4 border border-green-500/30 transition-all duration-300 hover:scale-105">
              <h3 className="font-semibold text-green-300 group-hover:text-green-200 mb-2">Scale Application</h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300">Using scales in improvisation</p>
            </a>
            <a href="/lessons/practice/improv/arpeggios" className="group bg-gradient-to-br from-orange-600/20 to-red-600/20 hover:from-orange-600/30 hover:to-red-600/30 rounded-xl p-4 border border-orange-500/30 transition-all duration-300 hover:scale-105">
              <h3 className="font-semibold text-orange-300 group-hover:text-orange-200 mb-2">Arpeggio Techniques</h3>
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
