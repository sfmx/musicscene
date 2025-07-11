import React from 'react';
import Link from 'next/link';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import MusicScore from '@/components/MusicScore';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const augmentedProgression = `
stave
notes :q C/5 E/5 G#/5 C/6
options space=20
stave
notes :q F/5 A/5 C#/6 F/6
options space=20
stave
notes :q G/5 B/5 D#/6 G/6
options space=20
`;

const augmentedExercise = `
tabstave notation=true key=C time=4/4
notes :q 8/3 0/2 1/1 8/3 | 13/4 9/3 10/2 13/4
text :w,.1,C+,:w,.2,F+,:w,.3,G+,:w,.4,C+
`;

const chromaticMovement = `
tabstave notation=true key=C time=4/4
notes :q 8/3 9/3 10/3 11/3 | 0/2 1/2 2/2 3/2 | 1/1 2/1 3/1 4/1
text ++,.1,C+ to Db+ to D+ to Eb+
`;

export default function AugmentedChordsPage() {
  return (
    <Layout>
      <Header
        title="Augmented Chords"
        subtitle="Master the mysterious and colorful world of augmented harmony"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-8 mb-8 not-prose">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Augmented Chords: The Sound of Mystery
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Explore the unique, floating quality of augmented chords and their dramatic harmonic possibilities.
            </p>
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold text-purple-800 mb-2">What You&apos;ll Learn:</h3>
              <ul className="text-purple-700 space-y-1">
                <li>• Augmented chord construction and theory</li>
                <li>• Common fingerings and chord shapes</li>
                <li>• Musical applications and stylistic uses</li>
                <li>• Practice progressions and exercises</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Theory Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Understanding Augmented Chords</h2>
          
          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">Construction</h3>
            <p className="mb-4">
              An augmented chord is built with:
            </p>
            <ul className="space-y-2">
              <li><strong>Root:</strong> The foundation note</li>
              <li><strong>Major Third:</strong> 4 semitones above the root</li>
              <li><strong>Augmented Fifth:</strong> 8 semitones above the root (raised 5th)</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-green-800">Unique Properties</h3>
            <ul className="space-y-2">
              <li>• Contains only major thirds (4 semitones each)</li>
              <li>• Symmetrical structure creates harmonic ambiguity</li>
              <li>• Each note can function as the root</li>
              <li>• Creates a floating, unresolved sound</li>
              <li>• Only 4 unique augmented chords exist (due to symmetry)</li>
            </ul>
          </div>

          <div className="my-8">
            <h3 className="text-xl font-semibold mb-4">Basic Augmented Chords</h3>
            <MusicScore 
              staves={[{
                id: 'augmented-progression',
                notation: augmentedProgression,
                title: 'Basic Augmented Chords'
              }]}
            />
          </div>
        </section>

        {/* Chord Shapes Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Essential Chord Shapes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Root Position Shapes</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">C Augmented (C+)</h4>
                  <SimpleFretboardDiagram chord="C_augmented" />
                </div>
                <div>
                  <h4 className="font-medium mb-2">F Augmented (F+)</h4>
                  <SimpleFretboardDiagram chord="F_augmented" />
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Higher Position Shapes</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">G Augmented (G+)</h4>
                  <SimpleFretboardDiagram chord="G_augmented" />
                </div>
                <div>
                  <h4 className="font-medium mb-2">D Augmented (D+)</h4>
                  <SimpleFretboardDiagram chord="D_augmented" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-yellow-800">💡 Fingering Tips</h3>
            <ul className="space-y-2 text-yellow-700">
              <li>• Use your index finger to barre when possible</li>
              <li>• Practice the symmetrical patterns across the fretboard</li>
              <li>• Focus on clean fretting to avoid muddy sounds</li>
              <li>• Experiment with different inversions and voicings</li>
            </ul>
          </div>
        </section>

        {/* Musical Applications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Musical Applications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-800">Common Uses</h3>
              <ul className="space-y-2">
                <li>• <strong>Chromatic passing chords:</strong> Smooth voice leading</li>
                <li>• <strong>Tension and release:</strong> Creating harmonic drama</li>
                <li>• <strong>Modulation aid:</strong> Transitioning between keys</li>
                <li>• <strong>Jazz harmony:</strong> Extended chord progressions</li>
                <li>• <strong>Film scoring:</strong> Mysterious or supernatural moods</li>
              </ul>
            </div>
            
            <div className="bg-pink-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-pink-800">Style Applications</h3>
              <ul className="space-y-2">
                <li>• <strong>Jazz:</strong> Extended harmonies and substitutions</li>
                <li>• <strong>Classical:</strong> Romantic period harmony</li>
                <li>• <strong>Film music:</strong> Suspense and mystery</li>
                <li>• <strong>Progressive rock:</strong> Unconventional harmonies</li>
                <li>• <strong>Neo-soul:</strong> Colorful chord progressions</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-red-800">🎵 Famous Examples</h3>
            <ul className="space-y-2 text-red-700">
              <li>• "Oh! Darling" by The Beatles (chromatic movement)</li>
              <li>• "All of Me" by Gerald Marks (jazz standard)</li>
              <li>• Classical composers like Liszt and Wagner</li>
              <li>• Film scores by John Williams and Danny Elfman</li>
            </ul>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Practice Exercises</h2>
          
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Exercise 1: Basic Augmented Chords</h3>
              <p className="mb-4">Practice these fundamental augmented chord shapes:</p>
              <MusicScore 
                staves={[{
                  id: 'augmented-exercise',
                  notation: augmentedExercise,
                  title: 'Basic Augmented Exercise'
                }]}
              />
              <div className="mt-4 space-y-2">
                <p><strong>Practice Tips:</strong></p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Start slowly and focus on clean chord changes</li>
                  <li>Listen to the unique floating quality of each chord</li>
                  <li>Practice with a metronome at 60-80 BPM</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Exercise 2: Chromatic Movement</h3>
              <p className="mb-4">Practice chromatic movement using augmented chords:</p>
              <MusicScore 
                staves={[{
                  id: 'chromatic-movement',
                  notation: chromaticMovement,
                  title: 'Chromatic Movement Exercise'
                }]}
              />
              <div className="mt-4 space-y-2">
                <p><strong>Practice Focus:</strong></p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Smooth voice leading between chords</li>
                  <li>Minimal finger movement when possible</li>
                  <li>Notice the symmetrical patterns</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Exercise 3: Resolution Practice</h3>
              <div className="mb-4">
                <h4 className="font-medium mb-2">Common Resolutions:</h4>
                <ul className="space-y-2">
                  <li>• <strong>C+ → F:</strong> Augmented to major (up a 4th)</li>
                  <li>• <strong>C+ → F#:</strong> Augmented to major (up a tritone)</li>
                  <li>• <strong>C+ → Am:</strong> Augmented to minor (down a 3rd)</li>
                  <li>• <strong>C+ → Dm:</strong> Augmented to minor (up a 2nd)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Strategy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Practice Strategy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Week 1-2: Foundation</h3>
              <ul className="space-y-2">
                <li>• Learn basic augmented chord shapes</li>
                <li>• Practice chord construction theory</li>
                <li>• Work on clean fretting technique</li>
                <li>• Explore the symmetrical patterns</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Week 3-4: Application</h3>
              <ul className="space-y-2">
                <li>• Practice chromatic movement</li>
                <li>• Work on common resolutions</li>
                <li>• Integrate into progressions</li>
                <li>• Experiment with different voicings</li>
              </ul>
            </div>
          </div>

          <div className="bg-orange-50 rounded-lg p-6 mt-6">
            <h3 className="text-lg font-semibold mb-3 text-orange-800">🎯 Practice Goals</h3>
            <ul className="space-y-2 text-orange-700">
              <li>• Memorize at least 4 augmented chord shapes</li>
              <li>• Understand the symmetrical structure</li>
              <li>• Practice smooth resolutions to major/minor chords</li>
              <li>• Incorporate into improvisation and composition</li>
            </ul>
          </div>
        </section>

        {/* Navigation */}
        <section className="border-t pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <Link 
              href="/lessons/theory/chords/diminished" 
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span className="mr-2">←</span>
              Previous: Diminished Chords
            </Link>
            <Link 
              href="/lessons/theory/chords" 
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Chords Overview
            </Link>
            <div className="text-gray-500">End of Chord Theory</div>
          </div>
        </section>
      </main>
      
      <Footer />
    </Layout>
  );
}
