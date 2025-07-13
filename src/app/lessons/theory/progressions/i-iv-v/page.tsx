import React from 'react';
import Link from 'next/link';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import MusicScore from '@/components/MusicScore';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const iivvProgression = `
tabstave notation=true key=C time=4/4
notes :w (3/5.3/4.2/3.1/2.0/1) | :w (1/6.3/5.3/4.2/3.1/2.1/1) | :w (3/6.2/5.0/4.0/3.3/2.3/1) | :w (3/5.3/4.2/3.1/2.0/1)
text ++,.1,I (C),:++,.2,IV (F),:++,.3,V (G),:++,.4,I (C)
`;

const strummingPattern = `
tabstave notation=true key=C time=4/4
notes :8d (3/5.3/4.2/3.1/2.0/1) :8u ## :8d ## :8u :8d ## :8u :8d ## :8u
text ++,.1,D,:++,.2,D,:++,.3,U,:++,.4,D,:++,.5,U,:++,.6,D,:++,.7,U,:++,.8,D,:++,.9,U
`;

const keyOfGProgression = `
tabstave notation=true key=G time=4/4
notes :w (3/6.2/5.0/4.0/3.3/2.3/1) | :w (3/5.3/4.2/3.1/2.0/1) | :w (2/5.1/4.0/3.0/2.0/1) | :w (3/6.2/5.0/4.0/3.2.3/1)
text ++,.1,I (G),:++,.2,IV (C),:++,.3,V (D),:++,.4,I (G)
`;

export default function IIVVProgressionPage() {
  return (
    <Layout>
      <Header
        title="I-IV-V Progression"
        subtitle="Master the most important chord progression in Western music"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-lg p-8 mb-8 not-prose">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              I-IV-V: The Foundation of Music
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Discover why this three-chord progression has been the backbone of popular music for centuries.
            </p>
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-2">What You&apos;ll Learn:</h3>
              <ul className="text-blue-700 space-y-1">
                <li>• Why I-IV-V works so well harmonically</li>
                <li>• How to play it in multiple keys</li>
                <li>• Common variations and substitutions</li>
                <li>• Famous songs using this progression</li>
                <li>• Practice exercises and strumming patterns</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Theory Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Understanding I-IV-V</h2>
          
          <div className="bg-green-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-green-800">Why Does I-IV-V Work?</h3>
            <p className="mb-4 text-green-700">
              The I-IV-V progression works because it outlines the most important harmonic functions:
            </p>
            <ul className="space-y-2 text-green-700">
              <li>• <strong>I (Tonic):</strong> Home base, stability, resolution</li>
              <li>• <strong>IV (Subdominant):</strong> Movement away from home, gentle tension</li>
              <li>• <strong>V (Dominant):</strong> Strong tension that wants to resolve back to I</li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">In the Key of C Major</h3>
            <div className="mb-4">
              <p className="text-blue-700 mb-4">Here&apos;s the classic I-IV-V progression in C major:</p>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <h4 className="font-semibold mb-2">I - C Major</h4>
                  <SimpleFretboardDiagram chord="C_major" />
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">IV - F Major</h4>
                  <SimpleFretboardDiagram chord="F_major" />
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">V - G Major</h4>
                  <SimpleFretboardDiagram chord="G_major" />
                </div>
              </div>
            </div>
          </div>

          <div className="my-8">
            <h3 className="text-xl font-semibold mb-4">Basic I-IV-V Progression</h3>
            <MusicScore 
              staves={[{
                id: 'i-iv-v-basic',
                notation: iivvProgression,
                title: 'I-IV-V in C Major'
              }]}
            />
          </div>
        </section>

        {/* Different Keys */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">I-IV-V in Different Keys</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-4">Key of G Major</h3>
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="text-center">
                  <h4 className="font-medium text-sm mb-2">I - G</h4>
                  <SimpleFretboardDiagram chord="G_major" />
                </div>
                <div className="text-center">
                  <h4 className="font-medium text-sm mb-2">IV - C</h4>
                  <SimpleFretboardDiagram chord="C_major" />
                </div>
                <div className="text-center">
                  <h4 className="font-medium text-sm mb-2">V - D</h4>
                  <SimpleFretboardDiagram chord="D_major" />
                </div>
              </div>
              <MusicScore 
                staves={[{
                  id: 'i-iv-v-g',
                  notation: keyOfGProgression,
                  title: 'I-IV-V in G Major'
                }]}
              />
            </div>
            
            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-4">Other Common Keys</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="font-medium">Key of A:</span>
                  <span>A - D - E</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="font-medium">Key of D:</span>
                  <span>D - G - A</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="font-medium">Key of E:</span>
                  <span>E - A - B</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="font-medium">Key of F:</span>
                  <span>F - Bb - C</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Musical Applications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Musical Applications</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-800">Genre Applications</h3>
              <ul className="space-y-2 text-purple-700">
                <li>• <strong>Rock & Roll:</strong> Chuck Berry, Elvis Presley</li>
                <li>• <strong>Blues:</strong> 12-bar blues variations</li>
                <li>• <strong>Country:</strong> Hank Williams, Johnny Cash</li>
                <li>• <strong>Folk:</strong> Bob Dylan, Neil Young</li>
                <li>• <strong>Pop:</strong> The Beatles, modern pop songs</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-orange-800">Famous Songs</h3>
              <ul className="space-y-2 text-orange-700">
                <li>• &quot;Wild Thing&quot; - The Troggs</li>
                <li>• &quot;Louie Louie&quot; - The Kingsmen</li>
                <li>• &quot;Twist and Shout&quot; - The Beatles</li>
                <li>• &quot;La Bamba&quot; - Ritchie Valens</li>
                <li>• &quot;Wonderful Tonight&quot; - Eric Clapton</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Practice Exercises</h2>
          
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Exercise 1: Basic Chord Changes</h3>
              <p className="mb-4">Practice smooth transitions between I-IV-V chords:</p>
              <div className="mb-4 space-y-2">
                <p><strong>Pattern:</strong> I (4 beats) - IV (4 beats) - V (4 beats) - I (4 beats)</p>
                <p><strong>Tempo:</strong> Start at 60 BPM, work up to 120 BPM</p>
                <p><strong>Focus:</strong> Clean chord changes, steady rhythm</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Exercise 2: Strumming Pattern</h3>
              <p className="mb-4">Practice this common strumming pattern with I-IV-V:</p>
              <MusicScore 
                staves={[{
                  id: 'strumming-pattern',
                  notation: strummingPattern,
                  title: 'Down-Up Strumming Pattern'
                }]}
              />
              <div className="mt-4 space-y-2">
                <p><strong>Pattern:</strong> D-D-U-D-U-D-U-D-U</p>
                <p><strong>Tips:</strong> Keep your strumming hand relaxed and maintain steady rhythm</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Exercise 3: Key Changes</h3>
              <div className="mb-4">
                <h4 className="font-medium mb-2">Practice I-IV-V in these keys:</h4>
                <ol className="list-decimal ml-6 space-y-1">
                  <li>C Major: C - F - G - C</li>
                  <li>G Major: G - C - D - G</li>
                  <li>D Major: D - G - A - D</li>
                  <li>A Major: A - D - E - A</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Common Variations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Common Variations</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-yellow-800">Rhythm Variations</h3>
              <ul className="space-y-2 text-yellow-700">
                <li>• <strong>I-IV-I-V:</strong> Return to I before V</li>
                <li>• <strong>I-IV-V-V:</strong> Extended dominant</li>
                <li>• <strong>I-I-IV-V:</strong> Extended tonic opening</li>
                <li>• <strong>I-IV-V-IV:</strong> Plagal cadence ending</li>
              </ul>
            </div>
            
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-800">Chord Substitutions</h3>
              <ul className="space-y-2 text-red-700">
                <li>• <strong>V7:</strong> Add 7th to dominant chord</li>
                <li>• <strong>vi instead of I:</strong> Relative minor substitution</li>
                <li>• <strong>ii instead of IV:</strong> Minor subdominant</li>
                <li>• <strong>IV/V:</strong> Secondary dominant</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Practice Strategy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Practice Strategy</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Week 1: Foundation</h3>
              <ul className="space-y-2 text-green-700">
                <li>• Master chord shapes</li>
                <li>• Practice smooth transitions</li>
                <li>• Work on basic strumming</li>
                <li>• Focus on C major key</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Week 2: Expansion</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• Add G and D major keys</li>
                <li>• Practice with metronome</li>
                <li>• Learn different strumming patterns</li>
                <li>• Try rhythm variations</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-800">Week 3+: Mastery</h3>
              <ul className="space-y-2 text-purple-700">
                <li>• Learn songs using I-IV-V</li>
                <li>• Experiment with substitutions</li>
                <li>• Practice in all keys</li>
                <li>• Add your own variations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="border-t pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <Link 
              href="/lessons/theory/progressions" 
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span className="mr-2">←</span>
              Back to Progressions Overview
            </Link>
            <Link 
              href="/lessons/theory/progressions/ii-v-i" 
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              Next: ii-V-I Progression
              <span className="ml-2">→</span>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </Layout>
  );
}
