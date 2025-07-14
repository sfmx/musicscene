'use client';

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MusicScore from '@/components/MusicScore';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';

export default function MinorSeventhChordsPage() {
  return (
    <Layout>
      <Header
        title="Minor Seventh Chord Theory"
        subtitle="Master the smooth, jazzy sound of minor seventh chords"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">Minor Seventh Chords</h1>
          <p className="text-xl opacity-90 mb-4">
            Minor seventh chords combine the emotional depth of minor triads with the sophistication of seventh harmony, creating smooth, jazzy, and contemplative sounds.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">Jazz Essential</span>
            <span className="bg-white/20 px-3 py-1 rounded">Smooth Sound</span>
            <span className="bg-white/20 px-3 py-1 rounded">R&B Foundation</span>
            <span className="bg-white/20 px-3 py-1 rounded">Contemplative</span>
          </div>
        </div>

        {/* Theory Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Minor Seventh Chord Theory</h2>
          
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">What Are Minor Seventh Chords?</h3>
            <p className="mb-2">Minor seventh chords (m7) combine a minor triad with a minor seventh interval, creating a four-note chord with a mellow, jazzy character.</p>
            <p className="text-sm text-gray-600">They're built by adding the flatted seventh degree to a minor triad.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Chord Formula</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Root (1st):</span>
                  <span>A</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Minor Third (♭3rd):</span>
                  <span className="text-purple-600 font-bold">C</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Perfect Fifth (5th):</span>
                  <span>E</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Minor Seventh (♭7th):</span>
                  <span className="text-indigo-600 font-bold">G</span>
                </div>
              </div>
              <div className="bg-white rounded p-3 mt-4">
                <p className="text-sm"><strong>Formula:</strong> 1 - ♭3 - 5 - ♭7</p>
                <p className="text-sm"><strong>Example:</strong> Am7 = A-C-E-G</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Interval Structure</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Root to Minor 3rd:</span>
                  <span className="font-medium">3 semitones</span>
                </div>
                <div className="flex justify-between">
                  <span>Minor 3rd to 5th:</span>
                  <span className="font-medium">4 semitones</span>
                </div>
                <div className="flex justify-between">
                  <span>5th to Minor 7th:</span>
                  <span className="font-medium">3 semitones</span>
                </div>
                <div className="flex justify-between">
                  <span>Root to Minor 7th:</span>
                  <span className="font-medium">10 semitones</span>
                </div>
              </div>
              <div className="bg-white rounded p-3 mt-4">
                <p className="text-sm"><strong>Character:</strong> Mellow, contemplative</p>
              </div>
            </div>
          </div>
        </section>

        {/* Essential Minor Seventh Chord Shapes */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Essential Minor Seventh Chord Shapes</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎸 Start with These Shapes</h3>
            <p>These are the most practical and commonly used minor seventh chord shapes for guitar.</p>
          </div>

          <div className="grid gap-6 mb-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Open Minor Seventh Chords</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-medium mb-3">Am7</h4>
                  <SimpleFretboardDiagram chord="Am7" />
                  <p className="text-sm text-gray-600 mt-2">Easiest m7 chord - just remove one finger</p>
                </div>
                <div className="text-center">
                  <h4 className="font-medium mb-3">Em7</h4>
                  <SimpleFretboardDiagram chord="Em7" />
                  <p className="text-sm text-gray-600 mt-2">Same fingering as Em, beautiful open sound</p>
                </div>
                <div className="text-center">
                  <h4 className="font-medium mb-3">Dm7</h4>
                  <SimpleFretboardDiagram chord="Dm7" />
                  <p className="text-sm text-gray-600 mt-2">Rich, warm sound - great for jazz</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Extended Minor Seventh Chords</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <h4 className="font-medium mb-3">Bm7</h4>
                  <SimpleFretboardDiagram chord="Bm7" />
                  <p className="text-sm text-gray-600 mt-2">Open position alternative to barre chord</p>
                </div>
                <div className="text-center">
                  <h4 className="font-medium mb-3">Fm7 (Barre)</h4>
                  <SimpleFretboardDiagram chord="Dm7_barre" />
                  <p className="text-sm text-gray-600 mt-2">Moveable barre chord form</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Musical Applications */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Musical Applications</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎵 Genre Applications</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Jazz:</strong> Essential for ii-V-i progressions</li>
                <li>• <strong>R&B/Soul:</strong> Smooth grooves and ballads</li>
                <li>• <strong>Neo-Soul:</strong> Modern R&B harmony</li>
                <li>• <strong>Funk:</strong> Rhythm guitar foundations</li>
                <li>• <strong>Bossa Nova:</strong> Brazilian jazz standards</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎭 Emotional Character</h3>
              <ul className="space-y-2 text-sm">
                <li>• Mellow and laid-back</li>
                <li>• Contemplative and introspective</li>
                <li>• Sophisticated yet approachable</li>
                <li>• Smooth and flowing</li>
                <li>• Less tense than dominant 7ths</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Progressions */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Common Minor Seventh Progressions</h2>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎵 Essential Progressions</h3>
            <p>These progressions showcase the smooth, jazzy character of minor seventh chords.</p>
          </div>

          <div className="grid gap-6 mb-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Jazz and R&B Progressions</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">ii-V-i in Minor (Jazz)</h4>
                  <p className="text-sm mb-2"><strong>In A minor:</strong> Bm7♭5 - E7 - Am7</p>
                  <p className="text-sm text-gray-600">Essential minor jazz progression</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">vi-ii-V-I with m7 (Jazz)</h4>
                  <p className="text-sm mb-2"><strong>In C Major:</strong> Am7 - Dm7 - G7 - CMaj7</p>
                  <p className="text-sm text-gray-600">Smooth jazz turnaround</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">R&B Groove Progression</h4>
                  <p className="text-sm mb-2"><strong>Example:</strong> Am7 - Dm7 - Em7 - Am7</p>
                  <p className="text-sm text-gray-600">Classic R&B/Neo-Soul progression</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Bossa Nova Changes</h4>
                  <p className="text-sm mb-2"><strong>Example:</strong> Am7 - D7 - Dm7 - G7</p>
                  <p className="text-sm text-gray-600">Brazilian jazz style</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Famous Examples */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Famous Songs Using Minor Seventh Chords</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-100 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎸 Classic Examples</h3>
              <ul className="space-y-2 text-sm">
                <li>• "Autumn Leaves" - Jazz Standard (m7 chords)</li>
                <li>• "Fly Me to the Moon" - Frank Sinatra (Am7-Dm7)</li>
                <li>• "The Girl from Ipanema" - Bossa Nova (m7 harmony)</li>
                <li>• "So What" - Miles Davis (modal m7 chords)</li>
                <li>• "Maiden Voyage" - Herbie Hancock (m7 suspensions)</li>
              </ul>
            </div>

            <div className="bg-purple-100 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎵 Modern Applications</h3>
              <ul className="space-y-2 text-sm">
                <li>• "Isn't She Lovely" - Stevie Wonder (R&B m7s)</li>
                <li>• "Killing Me Softly" - Roberta Flack (smooth jazz)</li>
                <li>• "Golden" - Jill Scott (Neo-Soul m7 harmony)</li>
                <li>• "Come Through and Chill" - Miguel (modern R&B)</li>
                <li>• "Best Part" - Daniel Caesar (contemporary soul)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Practice Exercises</h2>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
            <h3 className="font-bold text-lg mb-2">🎯 Building Minor Seventh Skills</h3>
            <p>These exercises will help you master minor seventh chords and their smooth voice leading.</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Exercise 1: Open m7 Chord Changes</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="font-medium mb-2">Progression: Am7 - Dm7 - Em7 - Am7</p>
                <p className="text-sm text-gray-600 mb-2">Play each chord for 4 beats, focus on smooth transitions</p>
                <p className="text-sm">Listen to the flowing, jazzy sound</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Exercise 2: Jazz ii-V-i in Minor</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="font-medium mb-2">Progression: Bm7♭5 - E7 - Am7</p>
                <p className="text-sm text-gray-600 mb-2">Essential minor jazz progression</p>
                <p className="text-sm">Practice in different keys for flexibility</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="font-bold text-lg mb-4">Exercise 3: R&B Groove Pattern</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="font-medium mb-2">Progression: Am7 - Dm7 - Am7 - Em7</p>
                <p className="text-sm text-gray-600 mb-2">Use syncopated strumming patterns</p>
                <p className="text-sm">Focus on rhythm and groove</p>
              </div>
            </div>
          </div>
        </section>

        {/* Playing Techniques */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Playing Techniques</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎸 Strumming Patterns</h3>
              <ul className="space-y-2 text-sm">
                <li>• Light, flowing strums for jazz</li>
                <li>• Syncopated patterns for R&B</li>
                <li>• Gentle fingerpicking for ballads</li>
                <li>• Emphasize off-beats for funk</li>
                <li>• Use dynamics for expression</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🎵 Voice Leading</h3>
              <ul className="space-y-2 text-sm">
                <li>• Connect chords with smooth movement</li>
                <li>• Keep common tones when possible</li>
                <li>• Move voices in stepwise motion</li>
                <li>• Practice chord inversions</li>
                <li>• Focus on the seventh resolution</li>
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
                  <li>• Major Seventh Chords</li>
                  <li>• Minor Major Seventh</li>
                  <li>• Minor Ninth Chords</li>
                  <li>• Half-Diminished Chords</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Musical Applications</h4>
                <ul className="text-sm space-y-1">
                  <li>• Jazz Harmony</li>
                  <li>• R&B/Soul Progressions</li>
                  <li>• Voice Leading</li>
                  <li>• Modal Harmony</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t">
          <a 
            href="/lessons/theory/chords/minor" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Previous: Minor Chords
          </a>
          <a 
            href="/lessons/theory/chords/major-seventh" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Next: Major Seventh Chords →
          </a>
        </div>
      </main>
      
      <Footer />
    </Layout>
  );
}
