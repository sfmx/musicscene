"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';
import Link from 'next/link';

export default function PowerChordsPage() {
  return (
    <Layout>
      <Header
        title="Power Chords"
        subtitle="Master the foundation of rock, metal, and punk music with comprehensive power chord techniques and theory"
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/lessons/songs/techniques" className="text-cyan-600 hover:text-cyan-800 text-sm">
            ← Back to Techniques
          </Link>
        </div>

        {/* Introduction */}
        <section className="mb-12 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Power Chords (5th Chords)</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                Power chords are two-note chords consisting of a root note and its perfect fifth. 
                They form the backbone of rock, metal, punk, and many other genres, providing 
                a powerful, driving sound that cuts through dense mixes.
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Also Known As:</strong> 5th chords, fifth chords</p>
                <p><strong>Notation:</strong> Root + "5" (e.g., E5, A5, C5)</p>
                <p><strong>Structure:</strong> Root + Perfect Fifth</p>
                <p><strong>Sound:</strong> Neutral, powerful, neither major nor minor</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 border border-orange-200">
              <h2 className="font-semibold text-gray-800 mb-3">Why Power Chords?</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Distortion-friendly:</strong> No third means no muddiness</li>
                <li>• <strong>Easy to play:</strong> Simple two-finger shapes</li>
                <li>• <strong>Moveable:</strong> Same shape works across the fretboard</li>
                <li>• <strong>Powerful sound:</strong> Foundation of rock music</li>
                <li>• <strong>Neutral tonality:</strong> Neither major nor minor</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Basic Power Chord Shapes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Basic Power Chord Shapes</h2>
          
          {/* 6th String Root Power Chords */}
          <div className="bg-white rounded-xl p-6 shadow-sm border mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">6th String Root Power Chords</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-medium text-gray-700 mb-3">E5 (Open)</h4>
                <SimpleFretboardDiagram chord="E5" />
                <div className="mt-3 text-sm text-gray-600">
                  <p>6th string open + 5th string 2nd fret</p>
                  <p><strong>Notes:</strong> E - B</p>
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-medium text-gray-700 mb-3">F5 (1st Fret)</h4>
                <SimpleFretboardDiagram chord="F5" />
                <div className="mt-3 text-sm text-gray-600">
                  <p>6th string 1st fret + 5th string 3rd fret</p>
                  <p><strong>Notes:</strong> F - C</p>
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-medium text-gray-700 mb-3">G5 (3rd Fret)</h4>
                <SimpleFretboardDiagram chord="G5" />
                <div className="mt-3 text-sm text-gray-600">
                  <p>6th string 3rd fret + 5th string 5th fret</p>
                  <p><strong>Notes:</strong> G - D</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-red-50 rounded-lg p-4 border border-red-200">
              <h4 className="font-semibold text-red-800 mb-2">6th String Pattern in Tab</h4>
              <AlphaTexRenderer
                alphaTex="(0.6 2.5) (1.6 3.5) (3.6 5.5) r"
                className="scale-75"
              />
              <p className="text-sm text-red-700 mt-2">
                <strong>Pattern:</strong> Root on 6th string, fifth is 2 frets higher on 5th string
              </p>
            </div>
          </div>

          {/* 5th String Root Power Chords */}
          <div className="bg-white rounded-xl p-6 shadow-sm border mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">5th String Root Power Chords</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-medium text-gray-700 mb-3">A5 (Open)</h4>
                <SimpleFretboardDiagram chord="A5" />
                <div className="mt-3 text-sm text-gray-600">
                  <p>5th string open + 4th string 2nd fret</p>
                  <p><strong>Notes:</strong> A - E</p>
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-medium text-gray-700 mb-3">B5 (2nd Fret)</h4>
                <SimpleFretboardDiagram chord="B5" />
                <div className="mt-3 text-sm text-gray-600">
                  <p>5th string 2nd fret + 4th string 4th fret</p>
                  <p><strong>Notes:</strong> B - F#</p>
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-medium text-gray-700 mb-3">C5 (3rd Fret)</h4>
                <SimpleFretboardDiagram chord="C5" />
                <div className="mt-3 text-sm text-gray-600">
                  <p>5th string 3rd fret + 4th string 5th fret</p>
                  <p><strong>Notes:</strong> C - G</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">5th String Pattern in Tab</h4>
              <AlphaTexRenderer
                alphaTex="(0.5 2.4) (2.5 4.4) (3.5 5.4) r"
                className="scale-75"
              />
              <p className="text-sm text-blue-700 mt-2">
                <strong>Pattern:</strong> Root on 5th string, fifth is 2 frets higher on 4th string
              </p>
            </div>
          </div>
        </section>

        {/* Playing Techniques */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Playing Techniques</h2>
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Picking Techniques */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Picking Techniques</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-medium text-green-800">Downstrokes</h4>
                  <ul className="text-green-700 space-y-1 mt-2">
                    <li>• Primary technique for power and aggression</li>
                    <li>• Creates consistent attack and tone</li>
                    <li>• Essential for punk and metal styles</li>
                    <li>• Use for driving rhythms</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-green-800">Alternate Picking</h4>
                  <ul className="text-green-700 space-y-1 mt-2">
                    <li>• For faster passages and complex rhythms</li>
                    <li>• Down-up-down-up motion</li>
                    <li>• More efficient for speed</li>
                    <li>• Different tonal character</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-green-800">Palm Muting</h4>
                  <ul className="text-green-700 space-y-1 mt-2">
                    <li>• Rest palm lightly on strings near bridge</li>
                    <li>• Creates tight, percussive sound</li>
                    <li>• Essential for modern rock/metal</li>
                    <li>• Control amount of muting for dynamics</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Fingering and Hand Position */}
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Fingering & Hand Position</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-medium text-purple-800">Basic Fingering</h4>
                  <ul className="text-purple-700 space-y-1 mt-2">
                    <li>• Index finger on root note</li>
                    <li>• Ring finger on fifth (2 frets higher)</li>
                    <li>• Keep fingers curved and close to frets</li>
                    <li>• Press firmly but don't over-squeeze</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-purple-800">Muting Technique</h4>
                  <ul className="text-purple-700 space-y-1 mt-2">
                    <li>• Use index finger to lightly touch higher strings</li>
                    <li>• Thumb can mute 6th string when playing 5th string root</li>
                    <li>• Avoid hitting unwanted strings when strumming</li>
                    <li>• Clean sound is crucial for power chords</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-purple-800">Octave Addition</h4>
                  <ul className="text-purple-700 space-y-1 mt-2">
                    <li>• Add pinky one string higher, same fret as root</li>
                    <li>• Creates fuller, thicker sound</li>
                    <li>• Common in modern rock and metal</li>
                    <li>• Example: E5 = E(6th) + B(5th) + E(4th)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Theory and Application */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Theory & Musical Application</h2>
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Music Theory */}
            <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
              <h3 className="text-xl font-semibold text-yellow-900 mb-4">Music Theory</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-medium text-yellow-800">Interval Structure</h4>
                  <ul className="text-yellow-700 space-y-1 mt-2">
                    <li>• Perfect Fifth interval (7 semitones)</li>
                    <li>• Most consonant interval after octave</li>
                    <li>• No third = no major/minor quality</li>
                    <li>• Harmonically stable and powerful</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-yellow-800">Why No Third?</h4>
                  <ul className="text-yellow-700 space-y-1 mt-2">
                    <li>• Third creates beating with distortion</li>
                    <li>• Cleaner sound through amplification</li>
                    <li>• Neutral tonality works in any key</li>
                    <li>• Focuses on harmonic rhythm</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-yellow-800">Harmonic Function</h4>
                  <ul className="text-yellow-700 space-y-1 mt-2">
                    <li>• Can function as major or minor chords</li>
                    <li>• Context determines harmonic meaning</li>
                    <li>• Excellent for modal music</li>
                    <li>• Foundation for chord progressions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Genres and Styles */}
            <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-200">
              <h3 className="text-xl font-semibold text-cyan-900 mb-4">Genres & Styles</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-medium text-cyan-800">Rock & Hard Rock</h4>
                  <ul className="text-cyan-700 space-y-1 mt-2">
                    <li>• Foundation of classic rock rhythm</li>
                    <li>• Often with moderate distortion</li>
                    <li>• Mixed with open chords</li>
                    <li>• Examples: AC/DC, Led Zeppelin</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-cyan-800">Metal</h4>
                  <ul className="text-cyan-700 space-y-1 mt-2">
                    <li>• Heavy distortion and palm muting</li>
                    <li>• Fast, aggressive rhythms</li>
                    <li>• Often in dropped tunings</li>
                    <li>• Examples: Metallica, Black Sabbath</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-cyan-800">Punk</h4>
                  <ul className="text-cyan-700 space-y-1 mt-2">
                    <li>• Fast downstrokes, simple progressions</li>
                    <li>• Raw, energetic sound</li>
                    <li>• Minimal effects, maximum attitude</li>
                    <li>• Examples: Ramones, Sex Pistols</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Progressions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Power Chord Progressions</h2>
          
          {/* Classic Rock Progression */}
          <div className="bg-white rounded-xl p-6 shadow-sm border mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Classic Rock: E5 - A5 - B5</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <AlphaTexRenderer
                  alphaTex="(0.6 2.5) (0.5 2.4) (2.5 4.4) r"
                  className="scale-75"
                />
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-gray-700">
                  <strong>Key of E:</strong> This progression uses the I-IV-V relationship in the key of E major.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• E5 = Tonic (home chord)</li>
                  <li>• A5 = Subdominant (tension builder)</li>
                  <li>• B5 = Dominant (wants to resolve to E5)</li>
                  <li>• Used in countless rock songs</li>
                </ul>
                <p className="text-gray-600 text-xs mt-3">
                  <strong>Famous examples:</strong> "Wild Thing," "Louie Louie," many punk and rock songs
                </p>
              </div>
            </div>
          </div>

          {/* Metal Progression */}
          <div className="bg-gray-50 rounded-xl p-6 border">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Metal: E5 - G5 - D5 - C5</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <AlphaTexRenderer
                  alphaTex="(0.6 2.5) (3.6 5.5) (10.6 12.5) (8.6 10.5)"
                  className="scale-75"
                />
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-gray-700">
                  <strong>Key of E minor:</strong> Modal progression with a dark, heavy sound.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• E5 = i (minor tonic)</li>
                  <li>• G5 = ♭III (relative major)</li>
                  <li>• D5 = ♭VII (subtonic)</li>
                  <li>• C5 = ♭VI (submediant)</li>
                </ul>
                <p className="text-gray-600 text-xs mt-3">
                  <strong>Style notes:</strong> Use palm muting and heavy distortion for authentic metal sound
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Practice Exercises</h2>
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Beginner Exercises */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Beginner Exercises</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-medium text-green-800">1. Chord Changes</h4>
                  <p className="text-green-700 mt-1">Practice switching between E5, A5, and D5. Start slow, focus on clean changes.</p>
                </div>
                <div>
                  <h4 className="font-medium text-green-800">2. Strumming Patterns</h4>
                  <p className="text-green-700 mt-1">Use all downstrokes: Down-Down-Up-Down. Keep steady tempo with metronome.</p>
                </div>
                <div>
                  <h4 className="font-medium text-green-800">3. Palm Muting</h4>
                  <p className="text-green-700 mt-1">Practice same chords with palm muting. Light touch, percussive sound.</p>
                </div>
                <div>
                  <h4 className="font-medium text-green-800">4. String Muting</h4>
                  <p className="text-green-700 mt-1">Ensure only the two power chord strings ring out clearly.</p>
                </div>
              </div>
            </div>

            {/* Advanced Exercises */}
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
              <h3 className="text-xl font-semibold text-orange-900 mb-4">Advanced Exercises</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-medium text-orange-800">1. Chromatic Movement</h4>
                  <p className="text-orange-700 mt-1">Move power chords chromatically up and down the neck. Build finger strength.</p>
                </div>
                <div>
                  <h4 className="font-medium text-orange-800">2. Octave Power Chords</h4>
                  <p className="text-orange-700 mt-1">Add the octave note with your pinky for fuller three-note power chords.</p>
                </div>
                <div>
                  <h4 className="font-medium text-orange-800">3. Fast Alternate Picking</h4>
                  <p className="text-orange-700 mt-1">Practice rapid alternate picking while maintaining chord clarity.</p>
                </div>
                <div>
                  <h4 className="font-medium text-orange-800">4. Rhythm Variations</h4>
                  <p className="text-orange-700 mt-1">Practice syncopated rhythms and complex strumming patterns.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Lessons */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Lessons</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lessons/songs/techniques/palm-muting" className="bg-white rounded-xl p-6 border border-gray-200 hover:border-cyan-300 transition-colors">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Palm Muting</h3>
              <p className="text-gray-600 text-sm">Essential technique for tight, percussive power chord sounds</p>
            </Link>
            <Link href="/lessons/songs/techniques/alternate-picking" className="bg-white rounded-xl p-6 border border-gray-200 hover:border-cyan-300 transition-colors">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Alternate Picking</h3>
              <p className="text-gray-600 text-sm">Develop speed and efficiency in your picking technique</p>
            </Link>
            <Link href="/lessons/songs/progressions/rock-progressions" className="bg-white rounded-xl p-6 border border-gray-200 hover:border-cyan-300 transition-colors">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Rock Progressions</h3>
              <p className="text-gray-600 text-sm">Common chord progressions using power chords</p>
            </Link>
          </div>
        </section>

        {/* Song Examples */}
        <section className="mb-12 bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Power Chord Song Examples</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Beginner-Friendly Songs</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>"Wild Thing" - The Troggs</strong> (A-D-E progression)</li>
                <li>• <strong>"Louie Louie" - The Kingsmen</strong> (Classic three-chord)</li>
                <li>• <strong>"Blitzkrieg Bop" - Ramones</strong> (Fast punk energy)</li>
                <li>• <strong>"Gloria" - Them</strong> (Simple but effective)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Intermediate Songs</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>"We're Not Gonna Take It" - Twisted Sister</strong> (E-A-B progression)</li>
                <li>• <strong>"Smoke on the Water" - Deep Purple</strong> (Famous riff)</li>
                <li>• <strong>"Come As You Are" - Nirvana</strong> (Grunge style)</li>
                <li>• <strong>"Iron Man" - Black Sabbath</strong> (Heavy metal foundation)</li>
              </ul>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </Layout>
  );
}
