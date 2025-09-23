'use client';

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';

export default function UnisonPage() {
  return (
    <Layout>
      <Header
        title="Unison Interval"
        subtitle="The foundation of musical pitch - where two voices share the exact same note, creating perfect unity and reinforcement in musical harmony."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/lessons/theory/intervals" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="mr-2">←</span>
            Back to Interval Theory
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Unison Interval</h1>
          <p className="text-xl opacity-90 mb-4">
            The unison is the fundamental building block of musical pitch, where two or more voices 
            play or sing the exact same note, creating perfect unity and reinforcement.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">0 Semitones</span>
            <span className="bg-white/20 px-3 py-1 rounded">Perfect Unity</span>
            <span className="bg-white/20 px-3 py-1 rounded">Foundation of Pitch</span>
            <span className="bg-white/20 px-3 py-1 rounded">Harmonic Reinforcement</span>
          </div>
        </div>

        {/* Theory Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory Fundamentals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">What is Unison?</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Definition:</strong> Two or more notes of identical pitch</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Distance:</strong> 0 semitones (no interval)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Quality:</strong> Perfect unison</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Sound:</strong> Pure, reinforced, unified</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Function:</strong> Reinforcement, doubling, texture</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Musical Applications</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Orchestration:</strong> Doubling parts for volume and richness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Guitar:</strong> Playing same notes on different strings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Vocals:</strong> Choir sections singing in unison</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Production:</strong> Layering identical parts for thickness</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Unison on Guitar */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Unison on Guitar</h2>
          
          {/* Same Note, Different Strings */}
          <div className="mb-10">
            <h3 className="text-xl font-medium text-gray-800 mb-6">Same Pitch, Different Timbres</h3>
            <p className="text-gray-600 mb-6">
              The guitar's tuning allows you to play the same pitch on multiple strings, creating unison intervals with different timbres and fingering options.
            </p>
            
            <div className="grid lg:grid-cols-3 gap-6">
              {/* E Note Unisons */}
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-5 border border-indigo-200">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-indigo-800 mb-2">E Note Unisons</h4>
                  <p className="text-sm text-indigo-700 mb-3">Same E note on different strings</p>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="E_1st_open" />
                      <p className="text-xs text-indigo-600 mt-1">E (1st string open)</p>
                    </div>
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="E_2nd_5th" />
                      <p className="text-xs text-indigo-600 mt-1">E (2nd string 5th fret)</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <AlphaTexRenderer 
                      alphaTex="4.1{w} 4.1{w}" 
                      title="E Note Unison"
                      className="scale-75"
                    />
                  </div>
                  <p className="text-xs text-indigo-600">Different timbres, same pitch</p>
                </div>
              </div>

              {/* A Note Unisons */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-5 border border-purple-200">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-purple-800 mb-2">A Note Unisons</h4>
                  <p className="text-sm text-purple-700 mb-3">Concert A (440 Hz) locations</p>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="A_5th_open" />
                      <p className="text-xs text-purple-600 mt-1">A (5th string open)</p>
                    </div>
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="A_1st_5th" />
                      <p className="text-xs text-purple-600 mt-1">A (1st string 5th fret)</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <AlphaTexRenderer 
                      alphaTex="2.1{w} 4.1{w}" 
                      title="A Note Unison"
                      className="scale-75"
                    />
                  </div>
                  <p className="text-xs text-purple-600">Reference pitch standard</p>
                </div>
              </div>

              {/* D Note Unisons */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-5 border border-blue-200">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">D Note Unisons</h4>
                  <p className="text-sm text-blue-700 mb-3">Common fingering options</p>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="D_4th_open" />
                      <p className="text-xs text-blue-600 mt-1">D (4th string open)</p>
                    </div>
                    <div className="text-center">
                      <SimpleFretboardDiagram chord="D_3rd_7th" />
                      <p className="text-xs text-blue-600 mt-1">D (3rd string 7th fret)</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <AlphaTexRenderer 
                      alphaTex="3.1{w} 4.1{w}" 
                      title="D Note Unison"
                      className="scale-75"
                    />
                  </div>
                  <p className="text-xs text-blue-600">Flexible positioning</p>
                </div>
              </div>
            </div>
          </div>

          {/* Timbral Differences and Applications */}
          <div className="mb-10">
            <h3 className="text-xl font-medium text-gray-800 mb-6">Timbral Differences & Musical Applications</h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Timbral Characteristics */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
                <h4 className="text-lg font-semibold text-green-800 mb-4">🎯 Timbral Characteristics</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-medium text-green-700 mb-2">String Thickness Effects</h5>
                    <AlphaTexRenderer 
                      alphaTex="4.1{h} 4.1{h} | 2.1{h} 4.1{h}" 
                      title="String Thickness Timbral Differences"
                      className="scale-75"
                    />
                    <p className="text-xs text-green-600 mt-2">Same pitch, different timbres from string thickness</p>
                  </div>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• <strong>Thicker strings:</strong> Warmer, fuller tone</li>
                    <li>• <strong>Thinner strings:</strong> Brighter, more focused tone</li>
                    <li>• <strong>Fretted vs open:</strong> Sustain and harmonic differences</li>
                  </ul>
                </div>
              </div>

              {/* Musical Applications */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border border-orange-200">
                <h4 className="text-lg font-semibold text-orange-800 mb-4">🎵 Musical Applications</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-medium text-orange-700 mb-2">Melodic Doubling</h5>
                    <AlphaTexRenderer 
                      alphaTex="4.1{q} 4.2{q} 4.3{q} 4.4{q} | 5.1{q} 5.2{q} 5.3{q} 5.4{q}" 
                      title="Melodic Doubling - Unison Across Octaves"
                      className="scale-75"
                    />
                    <p className="text-xs text-orange-600 mt-2">Same melody in unison across octaves</p>
                  </div>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• <strong>Lead doubling:</strong> Thicker melodic lines</li>
                    <li>• <strong>Harmonic reinforcement:</strong> Stronger presence</li>
                    <li>• <strong>Orchestral effects:</strong> Section unisons</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Applications */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-800 mb-6">Technical Applications & Techniques</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-4 border border-teal-200">
                <h4 className="text-lg font-semibold text-teal-800 mb-3">🎸 Guitar Techniques</h4>
                <ul className="text-sm text-teal-700 space-y-2">
                  <li>• <strong>Octave doubling:</strong> Fuller melodic sound</li>
                  <li>• <strong>String bending:</strong> Reaching unison pitches</li>
                  <li>• <strong>Harmonics:</strong> Natural unison overtones</li>
                  <li>• <strong>Slide techniques:</strong> Smooth unison transitions</li>
                  <li>• <strong>Fingering options:</strong> Different positions, same note</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-lg p-4 border border-rose-200">
                <h4 className="text-lg font-semibold text-rose-800 mb-3">🎼 Ensemble Playing</h4>
                <ul className="text-sm text-rose-700 space-y-2">
                  <li>• <strong>Choir sections:</strong> Voices in unison</li>
                  <li>• <strong>Guitar layers:</strong> Multiple guitar parts</li>
                  <li>• <strong>Bass doubling:</strong> Root note reinforcement</li>
                  <li>• <strong>Orchestral unisons:</strong> Section strength</li>
                  <li>• <strong>Power and unity:</strong> Collective sound</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-4 border border-amber-200">
                <h4 className="text-lg font-semibold text-amber-800 mb-3">🎚️ Production Uses</h4>
                <ul className="text-sm text-amber-700 space-y-2">
                  <li>• <strong>Track layering:</strong> Identical parts for thickness</li>
                  <li>• <strong>Stereo doubling:</strong> Left/right placement</li>
                  <li>• <strong>Dynamic emphasis:</strong> Important melodic lines</li>
                  <li>• <strong>Harmonic clarity:</strong> Reinforcing key notes</li>
                  <li>• <strong>Mix density:</strong> Fuller arrangements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Musical Examples */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Musical Examples & Techniques</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">Melodic Doubling</h3>
              <p className="text-blue-700 text-sm mb-4">
                Playing the same melody on different strings or in different octaves creates 
                richness and allows for smooth voice leading.
              </p>
              <div className="space-y-2 text-sm">
                <div><strong>Technique:</strong> Parallel melodies in unison</div>
                <div><strong>Effect:</strong> Thicker, more present melodic lines</div>
                <div><strong>Usage:</strong> Lead guitar doubling, orchestral sections</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-4">Harmonic Reinforcement</h3>
              <p className="text-purple-700 text-sm mb-4">
                Multiple instruments playing the same notes creates powerful reinforcement 
                without adding harmonic complexity.
              </p>
              <div className="space-y-2 text-sm">
                <div><strong>Technique:</strong> Multiple voices on same pitch</div>
                <div><strong>Effect:</strong> Increased volume and presence</div>
                <div><strong>Usage:</strong> Choir unisons, guitar/bass doubling</div>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Applications */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practical Applications</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="text-lg font-medium text-green-800 mb-3">Guitar Techniques</h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Octave doubling for fuller sound</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>String bending to reach unison</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Harmonics creating unison overtones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Slide techniques between unisons</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <h3 className="text-lg font-medium text-orange-800 mb-3">Ensemble Playing</h3>
              <ul className="space-y-2 text-sm text-orange-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Choir sections in unison</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Orchestral doubling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Band arrangement layering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Vocal harmony foundations</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-medium text-blue-800 mb-3">Studio Production</h3>
              <ul className="space-y-2 text-sm text-blue-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Double-tracking instruments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Layering for thickness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Creating stereo width</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Phase relationships</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Common Examples in Music */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Common Examples in Music</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Famous Unison Passages</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Classical Music</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Beethoven's 9th Symphony - "Ode to Joy" unison opening</li>
                    <li>• Bach's Brandenburg Concertos - instrumental doubling</li>
                    <li>• Mozart's Piano Sonatas - octave unisons</li>
                    <li>• Vivaldi's "Four Seasons" - string section unisons</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Popular Music</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Queen - "We Are The Champions" choir unisons</li>
                    <li>• The Beatles - vocal doubling techniques</li>
                    <li>• Led Zeppelin - guitar/bass unison riffs</li>
                    <li>• Pink Floyd - atmospheric unison textures</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Exercises</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">👂 Ear Training</h3>
              <ul className="text-indigo-700 text-sm space-y-2">
                <li>• Compare unison notes on different strings</li>
                <li>• Listen for timbral differences in unisons</li>
                <li>• Practice identifying perfect unisons</li>
                <li>• Train ear for slight tuning variations</li>
                <li>• Study harmonic reinforcement effects</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">🎸 Technical Practice</h3>
              <ul className="text-purple-700 text-sm space-y-2">
                <li>• Master unison positions across strings</li>
                <li>• Practice smooth unison transitions</li>
                <li>• Work on consistent tone in unisons</li>
                <li>• Study unison scales and patterns</li>
                <li>• Develop unison fingering alternatives</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">🎵 Musical Application</h3>
              <ul className="text-slate-700 text-sm space-y-2">
                <li>• Create melodies using unison doubling</li>
                <li>• Practice unison harmonization</li>
                <li>• Study classical unison techniques</li>
                <li>• Explore different unison timbres</li>
                <li>• Analyze unison usage in favorite songs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Continue Your Journey */}
        <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-xl p-8 border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Continue Your Interval Journey</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            From perfect unity, explore the intervals that add tension, movement, and harmony to music.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/theory/intervals/minor-2nd" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <span className="text-2xl">😬</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Minor 2nd</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Take the first step - explore the tightest, most dissonant interval.
                </p>
                <span className="text-red-600 font-medium text-sm group-hover:text-red-700">
                  Feel the tension →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/intervals/major-2nd" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <span className="text-2xl">🚶</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Major 2nd</h3>
                <p className="text-sm text-gray-600 mb-4">
                  The foundation of scales - discover how melodies move step by step.
                </p>
                <span className="text-orange-600 font-medium text-sm group-hover:text-orange-700">
                  Start moving →
                </span>
              </div>
            </Link>
            
            <Link href="/lessons/theory/intervals/octave" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Octave</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Return to unity - the same note in a different register completes the circle.
                </p>
                <span className="text-purple-600 font-medium text-sm group-hover:text-purple-700">
                  Complete the cycle →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </Layout>
  );
}
