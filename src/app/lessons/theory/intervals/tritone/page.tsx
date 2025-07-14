"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MusicScore from '@/components/MusicScore';
import VexTabScriptLoader from '@/components/VexTabScriptLoader';
import Link from 'next/link';

export default function TritonePage() {
  return (
    <Layout>
      <VexTabScriptLoader />
      <Header
        title="Tritone Interval"
        subtitle="The Devil's Interval - 6 semitones of maximum tension that demands resolution and drives harmonic motion in Western music."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/lessons/theory/intervals" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="mr-2">←</span>
            Back to Intervals
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-purple-50 to-red-100 rounded-xl p-8 mb-12 border border-purple-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Tritone Interval 🔺</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            The tritone is the most distinctive and harmonically powerful interval in Western music, spanning 
            exactly 6 semitones and creating maximum harmonic tension. Historically called "diabolus in musica" 
            (the devil in music), this interval divides the octave perfectly in half and demands resolution to 
            consonant intervals. The tritone is the driving force behind dominant 7th chords, diminished chords, 
            and much of the harmonic motion that makes Western music so compelling. Its unique instability makes 
            it essential for creating tension, leading tones, and the satisfying resolutions that define tonal music.
          </p>
        </div>

        {/* Theory Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory Fundamentals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Interval Properties</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">🔺</span>
                  <span><strong>Size:</strong> 6 semitones (3 whole steps)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">🔺</span>
                  <span><strong>Quality:</strong> Augmented 4th / Diminished 5th</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">🔺</span>
                  <span><strong>Sound:</strong> Highly dissonant, unstable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">🔺</span>
                  <span><strong>Consonance:</strong> Strong dissonance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">🔺</span>
                  <span><strong>Function:</strong> Creates tension, demands resolution</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Common Examples</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">🔺</span>
                  <span><strong>C to F#/Gb:</strong> Classic tritone</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">🔺</span>
                  <span><strong>F to B:</strong> In C7 chord (F-B tritone)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">🔺</span>
                  <span><strong>B to F:</strong> In Bdim chord</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">🔺</span>
                  <span><strong>Ti to Fa:</strong> Leading tone to subdominant</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Historical Context */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Historical Context & Cultural Impact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Medieval Period</h3>
              <div className="space-y-3">
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">"Diabolus in Musica"</h4>
                  <p className="text-sm text-red-700">Medieval theorists called the tritone "the devil in music" and actively avoided it in composition, believing it created an evil or unsettling effect.</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">Church Prohibition</h4>
                  <p className="text-sm text-orange-700">The Catholic Church discouraged the use of tritones in sacred music, preferring the stability of perfect consonances.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Modern Usage</h3>
              <div className="space-y-3">
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Tonal Harmony</h4>
                  <p className="text-sm text-green-700">By the Baroque period, the tritone became essential for creating dominant function and driving harmonic progressions.</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Jazz & Blues</h4>
                  <p className="text-sm text-blue-700">Modern music embraces the tritone's tension for blues, jazz substitutions, and contemporary harmony.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Harmonic Function */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Harmonic Function & Voice Leading</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Dominant 7th Chords</h3>
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">V7 Function</h4>
                  <p className="text-sm text-purple-700 mb-2">The tritone between the 3rd and 7th of dominant chords:</p>
                  <ul className="text-xs text-purple-600 space-y-1">
                    <li>• G7: B to F (3rd to 7th)</li>
                    <li>• C7: E to Bb (3rd to 7th)</li>
                    <li>• D7: F# to C (3rd to 7th)</li>
                  </ul>
                </div>
                <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                  <h4 className="font-semibold text-indigo-800 mb-2">Resolution Patterns</h4>
                  <p className="text-sm text-indigo-700 mb-2">Tritones resolve by step in opposite directions:</p>
                  <ul className="text-xs text-indigo-600 space-y-1">
                    <li>• Leading tone (3rd) resolves up</li>
                    <li>• 7th resolves down</li>
                    <li>• Creates smooth voice leading</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Other Applications</h3>
              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">Diminished Chords</h4>
                  <p className="text-sm text-red-700 mb-2">Built from stacked minor 3rds, containing tritones:</p>
                  <ul className="text-xs text-red-600 space-y-1">
                    <li>• Cdim: C-Eb-Gb-A (C-Gb and Eb-A tritones)</li>
                    <li>• Used for chromatic harmony</li>
                    <li>• Creates maximum tension</li>
                  </ul>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">Tritone Substitution</h4>
                  <p className="text-sm text-orange-700 mb-2">Jazz technique replacing V7 with bII7:</p>
                  <ul className="text-xs text-orange-600 space-y-1">
                    <li>• Same tritone, different root</li>
                    <li>• Creates chromatic bass movement</li>
                    <li>• Advanced harmonic sophistication</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guitar Applications */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Guitar Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Fretboard Patterns</h3>
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">Common Positions</h4>
                  <ul className="text-sm text-purple-700 space-y-2">
                    <li>• <strong>Same string:</strong> 6 frets apart</li>
                    <li>• <strong>Adjacent strings:</strong> 1 fret apart (standard tuning)</li>
                    <li>• <strong>String pairs:</strong> E-Bb, A-Eb, D-Ab patterns</li>
                    <li>• <strong>Symmetrical:</strong> Divides octave in half</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">Chord Voicings</h4>
                  <ul className="text-sm text-red-700 space-y-2">
                    <li>• <strong>Dominant 7ths:</strong> Essential chord tones</li>
                    <li>• <strong>Diminished chords:</strong> Multiple tritones</li>
                    <li>• <strong>Altered dominants:</strong> #11, b5 extensions</li>
                    <li>• <strong>Blues harmony:</strong> b5 "blue note"</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Practical Usage</h3>
              <div className="space-y-4">
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">Blues & Rock</h4>
                  <ul className="text-sm text-orange-700 space-y-2">
                    <li>• <strong>Blue notes:</strong> b5 in blues scales</li>
                    <li>• <strong>Power chords + b5:</strong> Heavy metal harmony</li>
                    <li>• <strong>Chromatic runs:</strong> Passing tones</li>
                    <li>• <strong>Bend targets:</strong> Creating tension</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Jazz Applications</h4>
                  <ul className="text-sm text-green-700 space-y-2">
                    <li>• <strong>Dominant voicings:</strong> 3rd and 7th emphasis</li>
                    <li>• <strong>Tritone subs:</strong> Harmonic sophistication</li>
                    <li>• <strong>Altered scales:</strong> Lydian dominant, altered</li>
                    <li>• <strong>Comping:</strong> Essential voice leading</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Musical Examples */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Musical Examples & Famous Uses</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Classical Examples</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Wagner's "Tristan Chord"</h4>
                  <p className="text-sm text-gray-600 mb-2">Contains a prominent tritone creating harmonic ambiguity</p>
                  <p className="text-xs text-gray-500">Revolutionary use of chromaticism and unresolved tension</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Bach's "St. Matthew Passion"</h4>
                  <p className="text-sm text-gray-600 mb-2">Dramatic tritones for emotional intensity</p>
                  <p className="text-xs text-gray-500">Baroque master's use of dissonance for expression</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Popular Music</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Black Sabbath" - Black Sabbath</h4>
                  <p className="text-sm text-gray-600 mb-2">Opens with a prominent tritone (G to Db)</p>
                  <p className="text-xs text-gray-500">Heavy metal's embrace of the "devil's interval"</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">"Purple Haze" - Jimi Hendrix</h4>
                  <p className="text-sm text-gray-600 mb-2">Uses tritone-based chord progressions</p>
                  <p className="text-xs text-gray-500">Psychedelic rock's use of harmonic tension</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">👂 Recognition Training</h3>
              <ul className="text-purple-700 text-sm space-y-2">
                <li>• Practice identifying tritones by ear</li>
                <li>• Compare with perfect 4th and 5th</li>
                <li>• Listen to dominant 7th chord resolutions</li>
                <li>• Study blues b5 "blue note" sound</li>
                <li>• Analyze diminished chord progressions</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <h3 className="text-lg font-semibold text-red-800 mb-3">🎸 Technical Practice</h3>
              <ul className="text-red-700 text-sm space-y-2">
                <li>• Play tritones across all string pairs</li>
                <li>• Practice dominant 7th chord voicings</li>
                <li>• Work on diminished arpeggio patterns</li>
                <li>• Study blues scale with b5</li>
                <li>• Practice tritone substitution progressions</li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">🎵 Musical Application</h3>
              <ul className="text-orange-700 text-sm space-y-2">
                <li>• Compose using tritone tension-resolution</li>
                <li>• Analyze jazz standard progressions</li>
                <li>• Practice blues improvisation with b5</li>
                <li>• Study voice leading in dominant motion</li>
                <li>• Experiment with altered dominant chords</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Advanced Concepts */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Advanced Concepts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Enharmonic Equivalence</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Augmented 4th vs Diminished 5th</h4>
                  <p className="text-sm text-gray-600">Both span 6 semitones but have different harmonic functions and resolutions based on context.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Contextual Resolution</h4>
                  <p className="text-sm text-gray-600">Aug4 typically expands outward, Dim5 contracts inward, though both create the same interval.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Modern Applications</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Symmetrical Scales</h4>
                  <p className="text-sm text-gray-600">Diminished and whole-tone scales exploit tritone relationships for modern harmonic color.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Atonal Music</h4>
                  <p className="text-sm text-gray-600">20th-century composers use tritones freely without traditional resolution requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Intervals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Related Intervals & Comparisons</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">Perfect 4th</h3>
              <p className="text-sm text-green-700 mb-2">5 semitones - stable, consonant</p>
              <p className="text-xs text-green-600">Half-step lower than tritone, completely different character</p>
            </div>
            <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
              <h3 className="font-semibold text-emerald-800 mb-2">Perfect 5th</h3>
              <p className="text-sm text-emerald-700 mb-2">7 semitones - stable, consonant</p>
              <p className="text-xs text-emerald-600">Half-step higher than tritone, maximum stability</p>
            </div>
            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <h3 className="font-semibold text-red-800 mb-2">Minor 7th</h3>
              <p className="text-sm text-red-700 mb-2">10 semitones - part of dominant 7th</p>
              <p className="text-xs text-red-600">Combines with tritone in V7 chords for maximum harmonic drive</p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-50 to-red-50 rounded-xl p-8 border border-purple-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Master the Power of Tension</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              The tritone is the key to understanding harmonic motion. Explore how it resolves and creates the forward drive that makes music compelling.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/lessons/theory/intervals/perfect-4th" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Compare Perfect 4th
              </Link>
              <Link href="/lessons/theory/intervals/perfect-5th" className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors">
                Study Perfect 5th
              </Link>
              <Link href="/lessons/theory/intervals/minor-7th" className="bg-rose-600 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition-colors">
                Learn Minor 7th
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
