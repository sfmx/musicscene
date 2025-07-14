'use client';

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import Link from 'next/link';

export default function MinorSeventhChordsPage() {
  return (
    <Layout>
      <Header
        title="Minor Seventh Chord Theory"
        subtitle="Explore the smooth, jazzy sophistication of minor seventh chords - essential for modern harmony and emotional expression."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/lessons/theory/chords" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="mr-2">←</span>
            Back to Chord Theory
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl p-8 mb-12 border border-gray-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Minor Seventh Chords</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            Minor seventh chords represent the perfect marriage of emotional depth and harmonic sophistication. 
            By adding the minor seventh to a minor triad, these four-note chords create the smooth, contemplative 
            sound that defines jazz, R&B, soul, and modern popular music. With their mellow character and rich 
            harmonic texture, minor seventh chords provide the essential vocabulary for expressing complex emotions 
            while maintaining sophisticated musical elegance. From intimate ballads to smooth jazz progressions, 
            these chords offer musicians the tools to create music that is both emotionally resonant and 
            harmonically advanced.
          </p>
        </div>

        {/* Theory Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Theory Fundamentals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">What Are Minor Seventh Chords?</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-slate-500 mt-1">•</span>
                  <span><strong>Definition:</strong> Four-note chords with minor triad + minor seventh</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-500 mt-1">•</span>
                  <span><strong>Formula:</strong> Root + Minor 3rd + Perfect 5th + Minor 7th</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-500 mt-1">•</span>
                  <span><strong>Interval Pattern:</strong> 3 + 4 + 3 semitones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-500 mt-1">•</span>
                  <span><strong>Sound Quality:</strong> Smooth, mellow, contemplative</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-500 mt-1">•</span>
                  <span><strong>Function:</strong> ii7, iii7, vi7 chords in major keys</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Musical Applications</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-slate-500 mt-1">•</span>
                  <span><strong>Jazz Standards:</strong> Essential for jazz harmony and improvisation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-500 mt-1">•</span>
                  <span><strong>R&B and Soul:</strong> Smooth grooves and emotional ballads</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-500 mt-1">•</span>
                  <span><strong>Neo-Soul:</strong> Modern sophisticated harmony</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-500 mt-1">•</span>
                  <span><strong>Pop Ballads:</strong> Rich harmonic texture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Essential Minor Seventh Chords */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Essential Minor Seventh Chords</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Am7 Chord */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">A Minor Seventh (Am7)</h3>
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <SimpleFretboardDiagram chord="Am7" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium mb-2">Notes: A - C - E - G</h4>
                  <p className="text-gray-600 mb-3">The most accessible minor seventh chord for beginners.</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Finger Position:</strong></p>
                    <p>• 2nd fret, D string (middle finger)</p>
                    <p>• Open A, E, G, B, E strings</p>
                    <p>• Easiest m7 chord - just lift one finger from Am</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Em7 Chord */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">E Minor Seventh (Em7)</h3>
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <SimpleFretboardDiagram chord="Em7" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium mb-2">Notes: E - G - B - D</h4>
                  <p className="text-gray-600 mb-3">Beautiful open voicing with rich harmonic content.</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Finger Position:</strong></p>
                    <p>• 2nd fret, A string (middle finger)</p>
                    <p>• Open E, D, G, B, E strings</p>
                    <p>• Same fingering as Em, ethereal sound</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dm7 Chord */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">D Minor Seventh (Dm7)</h3>
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <SimpleFretboardDiagram chord="Dm7" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium mb-2">Notes: D - F - A - C</h4>
                  <p className="text-gray-600 mb-3">Rich, warm sound perfect for jazz and ballads.</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Finger Position:</strong></p>
                    <p>• 1st fret, E string (index finger)</p>
                    <p>• 2nd fret, G string (middle finger)</p>
                    <p>• Open D, A strings</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bm7 Chord */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">B Minor Seventh (Bm7)</h3>
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <SimpleFretboardDiagram chord="Bm7" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium mb-2">Notes: B - D - F# - A</h4>
                  <p className="text-gray-600 mb-3">Essential for jazz ii-V-i progressions in A minor.</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Finger Position:</strong></p>
                    <p>• 2nd fret, A string (index finger)</p>
                    <p>• 2nd fret, D string (middle finger)</p>
                    <p>• 2nd fret, G string (ring finger)</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Common Chord Progressions */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Common Minor Seventh Progressions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold mb-4">ii-V-i in Minor (Jazz)</h3>
              <p className="text-gray-600 mb-4">The essential minor jazz progression with smooth voice leading.</p>
              <div className="space-y-2">
                <p><strong>In A minor:</strong> Bm7♭5 - E7 - Am7</p>
                <p><strong>Songs:</strong> &quot;Autumn Leaves&quot;, &quot;Summertime&quot;</p>
                <p className="text-sm text-gray-500">Creates elegant harmonic motion</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold mb-4">R&B Groove Progression</h3>
              <p className="text-gray-600 mb-4">Smooth, soulful progression for contemporary styles.</p>
              <div className="space-y-2">
                <p><strong>Example:</strong> Am7 - Dm7 - Em7 - Am7</p>
                <p><strong>Songs:</strong> &quot;Isn&apos;t She Lovely&quot;, &quot;Golden&quot;</p>
                <p className="text-sm text-gray-500">Perfect for R&B and Neo-Soul</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Jazz Turnaround</h3>
              <p className="text-gray-600 mb-4">Classic progression for smooth jazz and standards.</p>
              <div className="space-y-2">
                <p><strong>In C major:</strong> Am7 - Dm7 - G7 - CMaj7</p>
                <p><strong>Songs:</strong> &quot;Fly Me to the Moon&quot;, &quot;All of Me&quot;</p>
                <p className="text-sm text-gray-500">Elegant voice leading and resolution</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Bossa Nova Style</h3>
              <p className="text-gray-600 mb-4">Brazilian jazz progression with sophisticated harmony.</p>
              <div className="space-y-2">
                <p><strong>Example:</strong> Am7 - D7 - Dm7 - G7</p>
                <p><strong>Songs:</strong> &quot;Girl from Ipanema&quot;, &quot;Corcovado&quot;</p>
                <p className="text-sm text-gray-500">Smooth, flowing Brazilian feel</p>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Techniques */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Practice Techniques</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Beginner Focus</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• Master Am7 and Em7 first</li>
                <li>• Practice smooth transitions</li>
                <li>• Use light strumming patterns</li>
                <li>• Focus on clean chord changes</li>
                <li>• Listen to the seventh interval</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Intermediate Practice</h3>
              <ul className="space-y-2 text-green-700">
                <li>• Add Dm7 and Bm7</li>
                <li>• Practice jazz progressions</li>
                <li>• Work on syncopated rhythms</li>
                <li>• Learn different voicings</li>
                <li>• Experiment with fingerpicking</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Advanced Techniques</h3>
              <ul className="space-y-2 text-purple-700">
                <li>• Minor seventh extensions</li>
                <li>• Voice leading studies</li>
                <li>• Altered minor sevenths</li>
                <li>• Modal progressions</li>
                <li>• Jazz comping patterns</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Emotional Context and Usage */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Emotional Context and Musical Usage</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Emotional Characteristics</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-slate-400 pl-4">
                  <h4 className="font-medium">Smooth and Contemplative</h4>
                  <p className="text-gray-600 text-sm">Minor seventh chords create a mellow, introspective mood perfect for ballads and quiet moments.</p>
                </div>
                <div className="border-l-4 border-slate-400 pl-4">
                  <h4 className="font-medium">Sophisticated and Jazzy</h4>
                  <p className="text-gray-600 text-sm">The added seventh brings harmonic sophistication without overwhelming complexity.</p>
                </div>
                <div className="border-l-4 border-slate-400 pl-4">
                  <h4 className="font-medium">Flowing and Relaxed</h4>
                  <p className="text-gray-600 text-sm">Perfect for creating smooth progressions that flow naturally from one chord to the next.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Genre Applications</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Jazz and Standards</h4>
                  <p className="text-gray-600 text-sm">Essential for jazz harmony, providing smooth voice leading and sophisticated sound.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">R&B and Soul</h4>
                  <p className="text-gray-600 text-sm">Create lush, emotional backdrops for soulful melodies and grooves.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Neo-Soul and Modern R&B</h4>
                  <p className="text-gray-600 text-sm">Contemporary artists use these chords for sophisticated harmonic textures.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Bossa Nova and Latin Jazz</h4>
                  <p className="text-gray-600 text-sm">Essential for Brazilian styles and smooth Latin grooves.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Your Chord Journey */}
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-8 border border-slate-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Continue Your Chord Journey</h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Now that you&apos;ve mastered minor seventh chords, explore more advanced harmony to expand your 
            musical expression. Each lesson builds upon these foundations to create even more sophisticated 
            and beautiful music.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/lessons/theory/chords/minor" className="group">
              <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all duration-200 group-hover:border-blue-300">
                <div className="text-blue-600 mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Minor Chords</h3>
                <p className="text-gray-600 text-sm">Review the emotional foundation of minor harmony</p>
              </div>
            </Link>

            <Link href="/lessons/theory/chords/seventh" className="group">
              <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all duration-200 group-hover:border-blue-300">
                <div className="text-purple-600 mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2C7 1.448 7.448 1 8 1s1 .448 1 1v2M17 4V2c0-.552.448-1 1-1s1 .448 1 1v2M3 10h18M5 6h14c1.105 0 2 .895 2 2v11c0 1.105-.895 2-2 2H5c-1.105 0-2-.895-2-2V8c0-1.105.895-2 2-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Seventh Chords</h3>
                <p className="text-gray-600 text-sm">Explore dominant and major seventh harmonies</p>
              </div>
            </Link>

            <Link href="/lessons/theory/chords/major-seventh" className="group">
              <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all duration-200 group-hover:border-blue-300">
                <div className="text-green-600 mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Major Seventh Chords</h3>
                <p className="text-gray-600 text-sm">Master dreamy, floating major seventh harmony</p>
              </div>
            </Link>

            <Link href="/lessons/theory/chords/extended" className="group">
              <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all duration-200 group-hover:border-blue-300">
                <div className="text-orange-600 mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Extended Chords</h3>
                <p className="text-gray-600 text-sm">Advanced jazz harmony with 9ths, 11ths, and 13ths</p>
              </div>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div>
              <h4 className="font-medium mb-2">Theory Mastery</h4>
              <ul className="text-sm space-y-1">
                <li>• Chord Construction</li>
                <li>• Voice Leading</li>
                <li>• Jazz Harmony</li>
                <li>• Modal Applications</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Technical Skills</h4>
              <ul className="text-sm space-y-1">
                <li>• Smooth Transitions</li>
                <li>• Jazz Comping</li>
                <li>• Fingerpicking Patterns</li>
                <li>• Chord Voicings</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Practical Application</h4>
              <ul className="text-sm space-y-1">
                <li>• R&B Grooves</li>
                <li>• Jazz Standards</li>
                <li>• Ballad Accompaniment</li>
                <li>• Neo-Soul Progressions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t">
          <Link 
            href="/lessons/theory/chords/seventh" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Previous: Seventh Chords
          </Link>
          <Link 
            href="/lessons/theory/chords/major-seventh" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Next: Major Seventh Chords →
          </Link>
        </div>
      </main>
      
      <Footer />
    </Layout>
  );
}
