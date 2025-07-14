'use client';

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MusicScore from '@/components/MusicScore';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';

export default function MajorSeventhChordsPage() {
  return (
    <Layout>
      <Header
        title="Major Seventh Chord Theory"
        subtitle="Explore the dreamy, sophisticated sound of major seventh chords"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">Major Seventh Chords</h1>
          <p className="text-xl opacity-90 mb-4">
            Major seventh chords create a dreamy, floating quality that adds sophistication and beauty to harmony. They're essential for jazz, pop ballads, and contemporary music.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">Dreamy Sound</span>
            <span className="bg-white/20 px-3 py-1 rounded">Jazz Essential</span>
            <span className="bg-white/20 px-3 py-1 rounded">Pop Ballads</span>
            <span className="bg-white/20 px-3 py-1 rounded">Sophisticated</span>
          </div>
        </div>

        {/* Theory Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Major Seventh Chord Theory</h2>
          
          <div className="bg-pink-50 border-l-4 border-pink-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">What Are Major Seventh Chords?</h3>
            <p className="mb-2">Major seventh chords (Maj7) combine a major triad with a major seventh interval, creating a four-note chord with a dreamy, floating character.</p>
            <p className="text-sm text-gray-600">They're built by adding the natural seventh degree to a major triad.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-rose-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Chord Formula</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Root (1st):</span>
                  <span>C</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Major Third (3rd):</span>
                  <span className="text-rose-600 font-bold">E</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Perfect Fifth (5th):</span>
                  <span>G</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Major Seventh (7th):</span>
                  <span className="text-pink-600 font-bold">B</span>
                </div>
              </div>
              <div className="bg-white rounded p-3 mt-4">
                <p className="text-sm"><strong>Formula:</strong> 1 - 3 - 5 - 7</p>
                <p className="text-sm"><strong>Example:</strong> CMaj7 = C-E-G-B</p>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Interval Structure</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Root to Major 3rd:</span>
                  <span className="font-medium">4 semitones</span>
                </div>
                <div className="flex justify-between">
                  <span>Major 3rd to 5th:</span>
                  <span className="font-medium">3 semitones</span>
                </div>
                <div className="flex justify-between">
                  <span>5th to Major 7th:</span>
                  <span className="font-medium">4 semitones</span>
                </div>
                <div className="flex justify-between">
                  <span>Root to Major 7th:</span>
                  <span className="font-medium">11 semitones</span>
                </div>
              </div>
              <div className="bg-white rounded p-3 mt-4">
                <p className="text-sm"><strong>Character:</strong> Dreamy, floating, sophisticated</p>
              </div>
            </div>
          </div>
        </section>

        {/* Essential Major Seventh Chord Shapes */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Essential Major Seventh Chord Shapes</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎸 Start with These Shapes</h3>
            <p>These are the most practical and beautiful major seventh chord shapes for guitar.</p>
          </div>

          <div className="grid gap-6 mb-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Open Major Seventh Chords</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-medium mb-3">CMaj7</h4>
                  <SimpleFretboardDiagram chord="CMaj7" />
                  <p className="text-sm text-gray-600 mt-2">Beautiful, dreamy open sound</p>
                </div>
                <div className="text-center">
                  <h4 className="font-medium mb-3">FMaj7</h4>
                  <SimpleFretboardDiagram chord="FMaj7" />
                  <p className="text-sm text-gray-600 mt-2">Easier alternative to F barre</p>
                </div>
                <div className="text-center">
                  <h4 className="font-medium mb-3">DMaj7</h4>
                  <SimpleFretboardDiagram chord="DMaj7" />
                  <p className="text-sm text-gray-600 mt-2">Rich, warm character</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Moveable Major Seventh Forms</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <h4 className="font-medium mb-3">BMaj7 (6th string root)</h4>
                  <SimpleFretboardDiagram chord="BMaj7_barre" />
                  <p className="text-sm text-gray-600 mt-2">Moveable barre chord form</p>
                </div>
                <div className="text-center">
                  <h4 className="font-medium mb-3">GMaj7 (Alternative)</h4>
                  <SimpleFretboardDiagram chord="G" />
                  <p className="text-sm text-gray-600 mt-2">Easy fingering variation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison with Other Chords */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Understanding the Major Seventh Sound</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎵 Comparing Seventh Types</h3>
            <p>Understanding how major seventh chords differ from other seventh chords helps you choose the right harmony.</p>
          </div>

          <div className="grid gap-6 mb-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Seventh Chord Comparison</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Major Seventh (CMaj7)</h4>
                  <p className="text-sm mb-2"><strong>Notes:</strong> C-E-G-B</p>
                  <p className="text-sm text-gray-600">Dreamy, floating, sophisticated - no tension</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Dominant Seventh (C7)</h4>
                  <p className="text-sm mb-2"><strong>Notes:</strong> C-E-G-B♭</p>
                  <p className="text-sm text-gray-600">Bluesy, restless - wants to resolve</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Minor Seventh (Cm7)</h4>
                  <p className="text-sm mb-2"><strong>Notes:</strong> C-E♭-G-B♭</p>
                  <p className="text-sm text-gray-600">Mellow, contemplative - jazzy but stable</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Minor Major Seventh (CmMaj7)</h4>
                  <p className="text-sm mb-2"><strong>Notes:</strong> C-E♭-G-B</p>
                  <p className="text-sm text-gray-600">Mysterious, dark, tense - film score quality</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Musical Applications */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Musical Applications</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-pink-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎵 Genre Applications</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Jazz:</strong> Tonic chords in major keys</li>
                <li>• <strong>Pop Ballads:</strong> Emotional, dreamy moments</li>
                <li>• <strong>R&B:</strong> Smooth, sophisticated harmony</li>
                <li>• <strong>Bossa Nova:</strong> Brazilian jazz standards</li>
                <li>• <strong>Contemporary:</strong> Modern pop and indie</li>
              </ul>
            </div>

            <div className="bg-rose-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎭 Emotional Character</h3>
              <ul className="space-y-2 text-sm">
                <li>• Dreamy and floating</li>
                <li>• Sophisticated and elegant</li>
                <li>• Peaceful and serene</li>
                <li>• Romantic and beautiful</li>
                <li>• No harmonic tension</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Progressions */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Common Major Seventh Progressions</h2>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎵 Essential Progressions</h3>
            <p>These progressions showcase the beautiful, dreamy quality of major seventh chords.</p>
          </div>

          <div className="grid gap-6 mb-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Jazz and Contemporary Progressions</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">I-vi-ii-V with Maj7 (Jazz)</h4>
                  <p className="text-sm mb-2"><strong>In C Major:</strong> CMaj7 - Am7 - Dm7 - G7</p>
                  <p className="text-sm text-gray-600">Classic jazz turnaround with major seventh tonic</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">IMaj7-iiim7-VIMaj7 (Modern)</h4>
                  <p className="text-sm mb-2"><strong>In C Major:</strong> CMaj7 - Em7 - AMaj7</p>
                  <p className="text-sm text-gray-600">Contemporary pop/R&B progression</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Maj7 Circle Progression</h4>
                  <p className="text-sm mb-2"><strong>Example:</strong> CMaj7 - FMaj7 - BMaj7 - EMaj7</p>
                  <p className="text-sm text-gray-600">Floating, ethereal quality</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Ballad Progression</h4>
                  <p className="text-sm mb-2"><strong>Example:</strong> CMaj7 - Am7 - FMaj7 - G7</p>
                  <p className="text-sm text-gray-600">Perfect for emotional ballads</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Famous Examples */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Famous Songs Using Major Seventh Chords</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-pink-100 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎸 Classic Examples</h3>
              <ul className="space-y-2 text-sm">
                <li>• "Misty" - Jazz Standard (opens with EMaj7)</li>
                <li>• "Corcovado" - Antonio Carlos Jobim (Bossa Nova)</li>
                <li>• "Somewhere Over the Rainbow" - Jazz version</li>
                <li>• "Body and Soul" - Jazz Standard (CMaj7)</li>
                <li>• "All the Things You Are" - Jerome Kern</li>
              </ul>
            </div>

            <div className="bg-rose-100 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎵 Modern Applications</h3>
              <ul className="space-y-2 text-sm">
                <li>• "Breathe Me" - Sia (CMaj7 opening)</li>
                <li>• "Wonderful Tonight" - Eric Clapton</li>
                <li>• "Something" - The Beatles (CMaj7)</li>
                <li>• "Golden" - Jill Scott (R&B Maj7 harmony)</li>
                <li>• "Best Part" - Daniel Caesar (contemporary)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Voice Leading and Inversions */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Voice Leading and Inversions</h2>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎯 Smooth Voice Leading</h3>
            <p>Major seventh chords offer beautiful voice leading opportunities. Understanding inversions helps create smoother progressions.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Common Inversions</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded p-3">
                  <p className="font-medium">Root Position (CMaj7)</p>
                  <p className="text-sm text-gray-600">C-E-G-B (root in bass)</p>
                </div>
                <div className="bg-gray-50 rounded p-3">
                  <p className="font-medium">First Inversion (CMaj7/E)</p>
                  <p className="text-sm text-gray-600">E-G-B-C (third in bass)</p>
                </div>
                <div className="bg-gray-50 rounded p-3">
                  <p className="font-medium">Second Inversion (CMaj7/G)</p>
                  <p className="text-sm text-gray-600">G-B-C-E (fifth in bass)</p>
                </div>
                <div className="bg-gray-50 rounded p-3">
                  <p className="font-medium">Third Inversion (CMaj7/B)</p>
                  <p className="text-sm text-gray-600">B-C-E-G (seventh in bass)</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Voice Leading Tips</h3>
              <ul className="space-y-2 text-sm">
                <li>• Keep common tones between chords</li>
                <li>• Move voices in stepwise motion</li>
                <li>• Use inversions for smoother bass lines</li>
                <li>• The major seventh wants to resolve up</li>
                <li>• Practice connecting Maj7 to other sevenths</li>
                <li>• Use drop voicings for guitar arrangements</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Practice Exercises</h2>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎯 Building Major Seventh Skills</h3>
            <p>These exercises will help you master major seventh chords and their beautiful harmonic colors.</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Exercise 1: Open Maj7 Chord Changes</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="font-medium mb-2">Progression: CMaj7 - FMaj7 - DMaj7 - CMaj7</p>
                <p className="text-sm text-gray-600 mb-2">Play each chord for 4 beats, listen to the dreamy quality</p>
                <p className="text-sm">Focus on clean finger placement and letting notes ring</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Exercise 2: Maj7 to m7 Contrast</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="font-medium mb-2">Progression: CMaj7 - Am7 - FMaj7 - Dm7</p>
                <p className="text-sm text-gray-600 mb-2">Compare the dreamy Maj7 with mellow m7 sounds</p>
                <p className="text-sm">Notice the emotional contrast between chord types</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Exercise 3: Jazz Ballad Progression</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="font-medium mb-2">Progression: CMaj7 - Am7 - Dm7 - G7 - CMaj7</p>
                <p className="text-sm text-gray-600 mb-2">Classic ballad progression with Maj7 tonic</p>
                <p className="text-sm">Practice with slow, expressive strumming</p>
              </div>
            </div>
          </div>
        </section>

        {/* Playing Techniques */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Playing Techniques</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎸 Strumming Approaches</h3>
              <ul className="space-y-2 text-sm">
                <li>• Gentle, flowing strums for ballads</li>
                <li>• Let chords ring for maximum beauty</li>
                <li>• Use dynamics to express emotion</li>
                <li>• Fingerpicking brings out individual notes</li>
                <li>• Avoid heavy, aggressive strumming</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎵 Harmonic Techniques</h3>
              <ul className="space-y-2 text-sm">
                <li>• Practice chord inversions</li>
                <li>• Use open strings for richer sound</li>
                <li>• Connect chords with smooth voice leading</li>
                <li>• Experiment with different voicings</li>
                <li>• Add melody notes within chords</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Topics */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Related Topics</h2>
          
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4">Continue Your Learning Journey</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Related Chord Types</h4>
                <ul className="text-sm space-y-1">
                  <li>• Minor Seventh Chords</li>
                  <li>• Dominant Seventh Chords</li>
                  <li>• Extended Chords (9th, 11th)</li>
                  <li>• Add9 Chords</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Musical Applications</h4>
                <ul className="text-sm space-y-1">
                  <li>• Jazz Harmony</li>
                  <li>• Voice Leading</li>
                  <li>• Ballad Arrangements</li>
                  <li>• Contemporary Songwriting</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t">
          <a 
            href="/lessons/theory/chords/minor-seventh" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Previous: Minor Seventh Chords
          </a>
          <a 
            href="/lessons/theory/chords/suspended" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Next: Suspended Chords →
          </a>
        </div>
      </main>
      
      <Footer />
    </Layout>
  );
}
