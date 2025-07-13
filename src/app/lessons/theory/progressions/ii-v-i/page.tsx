import React from 'react';
import Link from 'next/link';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import MusicScore from '@/components/MusicScore';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const iiviProgression = `
tabstave notation=true key=C time=4/4
notes :w (x/6.x/5.2/4.2/3.1/2.3/1) | :w (3/6.2/5.0/4.0/3.3/2.3/1) | :w (3/5.3/4.2/3.1/2.0/1)
text ++,.1,ii (Dm),:++,.2,V (G),:++,.3,I (C)
`;

const jazzVoicings = `
tabstave notation=true key=C time=4/4
notes :w (x/6.5/5.3/4.5/3.5/2.x/1) | :w (3/6.x/5.4/4.3/3.4/2.x/1) | :w (x/6.3/5.2/4.4/3.5/2.x/1)
text ++,.1,Dm7,:++,.2,G7,:++,.3,Cmaj7
`;

const minorIIVI = `
tabstave notation=true key=C time=4/4
notes :w (x/6.x/5.1/4.2/3.1/2.x/1) | :w (2/6.x/5.1/4.2/3.1/2.x/1) | :w (x/6.x/5.1/4.1/3.0/2.x/1)
text ++,.1,Dm7b5,:++,.2,G7,:++,.3,Cm
`;

export default function IIVIProgressionPage() {
  return (
    <Layout>
      <Header
        title="ii-V-I Progression"
        subtitle="The cornerstone of jazz harmony and smooth voice leading"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-8 mb-8 not-prose">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              ii-V-I: The Heart of Jazz Harmony
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Master the progression that creates the smoothest voice leading and most sophisticated harmonic movement.
            </p>
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold text-purple-800 mb-2">What You&apos;ll Learn:</h3>
              <ul className="text-purple-700 space-y-1">
                <li>• Why ii-V-I creates such smooth voice leading</li>
                <li>• Basic and advanced chord voicings</li>
                <li>• Major and minor ii-V-I progressions</li>
                <li>• Jazz standards using this progression</li>
                <li>• Soloing and improvisation techniques</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Theory Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Understanding ii-V-I</h2>
          
          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">Why ii-V-I Works So Well</h3>
            <p className="mb-4 text-blue-700">
              The ii-V-I progression creates the smoothest possible voice leading:
            </p>
            <ul className="space-y-2 text-blue-700">
              <li>• <strong>ii (Subdominant function):</strong> Prepares the dominant</li>
              <li>• <strong>V (Dominant function):</strong> Creates tension that must resolve</li>
              <li>• <strong>I (Tonic function):</strong> Provides satisfying resolution</li>
              <li>• <strong>Voice leading:</strong> Each chord tone moves by step or stays the same</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-green-800">In the Key of C Major</h3>
            <div className="mb-4">
              <p className="text-green-700 mb-4">Basic ii-V-I in C major uses these chords:</p>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <h4 className="font-semibold mb-2">ii - D minor</h4>
                  <SimpleFretboardDiagram chord="D_minor" />
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">V - G Major</h4>
                  <SimpleFretboardDiagram chord="G_major" />
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">I - C Major</h4>
                  <SimpleFretboardDiagram chord="C_major" />
                </div>
              </div>
            </div>
          </div>

          <div className="my-8">
            <h3 className="text-xl font-semibold mb-4">Basic ii-V-I Progression</h3>
            <MusicScore 
              staves={[{
                id: 'ii-v-i-basic',
                notation: iiviProgression,
                title: 'ii-V-I in C Major'
              }]}
            />
          </div>
        </section>

        {/* Jazz Voicings */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Jazz Voicings</h2>
          
          <div className="bg-yellow-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-yellow-800">Seventh Chords</h3>
            <p className="text-yellow-700 mb-4">
              Jazz musicians typically use seventh chords for richer harmony:
            </p>
            <ul className="space-y-2 text-yellow-700">
              <li>• <strong>ii7:</strong> Minor 7th chord (Dm7)</li>
              <li>• <strong>V7:</strong> Dominant 7th chord (G7)</li>
              <li>• <strong>Imaj7:</strong> Major 7th chord (Cmaj7)</li>
            </ul>
          </div>

          <div className="my-8">
            <h3 className="text-xl font-semibold mb-4">Jazz ii-V-I with 7th Chords</h3>
            <MusicScore 
              staves={[{
                id: 'jazz-voicings',
                notation: jazzVoicings,
                title: 'Dm7 - G7 - Cmaj7'
              }]}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-4">Extended Voicings</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-gray-50 rounded">
                  <h4 className="font-medium mb-1">Dm9 (ii9)</h4>
                  <p className="text-gray-600">Adds the 9th (E) for color</p>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <h4 className="font-medium mb-1">G13 (V13)</h4>
                  <p className="text-gray-600">Rich dominant sound with 13th</p>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <h4 className="font-medium mb-1">Cmaj9 (Imaj9)</h4>
                  <p className="text-gray-600">Sophisticated major chord resolution</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-4">Voice Leading Tips</h3>
              <ul className="space-y-2 text-sm">
                <li>• Move chord tones by the smallest possible intervals</li>
                <li>• Keep common tones between chords</li>
                <li>• Use inversions to create smooth bass lines</li>
                <li>• Drop unnecessary notes for cleaner sound</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Minor ii-V-I */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Minor ii-V-I</h2>
          
          <div className="bg-red-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-red-800">Minor Key Differences</h3>
            <p className="text-red-700 mb-4">
              In minor keys, the ii-V-I progression uses different chord qualities:
            </p>
            <ul className="space-y-2 text-red-700">
              <li>• <strong>ii7b5:</strong> Half-diminished 7th chord (Dm7b5)</li>
              <li>• <strong>V7:</strong> Dominant 7th chord (G7) - same as major</li>
              <li>• <strong>i:</strong> Minor chord (Cm)</li>
            </ul>
          </div>

          <div className="my-8">
            <h3 className="text-xl font-semibold mb-4">Minor ii-V-I in C Minor</h3>
            <MusicScore 
              staves={[{
                id: 'minor-ii-v-i',
                notation: minorIIVI,
                title: 'Dm7b5 - G7 - Cm'
              }]}
            />
          </div>
        </section>

        {/* Musical Applications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Musical Applications</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-800">Jazz Standards</h3>
              <ul className="space-y-2 text-purple-700">
                <li>• &quot;Autumn Leaves&quot;</li>
                <li>• &quot;All The Things You Are&quot;</li>
                <li>• &quot;Fly Me To The Moon&quot;</li>
                <li>• &quot;Girl From Ipanema&quot;</li>
                <li>• &quot;There Will Never Be Another You&quot;</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-orange-800">Modern Usage</h3>
              <ul className="space-y-2 text-orange-700">
                <li>• <strong>R&B:</strong> Sophisticated chord progressions</li>
                <li>• <strong>Neo-soul:</strong> Modern jazz-influenced music</li>
                <li>• <strong>Bossa Nova:</strong> Brazilian jazz style</li>
                <li>• <strong>Fusion:</strong> Jazz-rock combinations</li>
                <li>• <strong>Gospel:</strong> Church music harmonies</li>
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
              <p className="mb-4">Practice ii-V-I with simple triads first:</p>
              <div className="mb-4 space-y-2">
                <p><strong>Progression:</strong> Dm - G - C (repeat)</p>
                <p><strong>Timing:</strong> 4 beats per chord</p>
                <p><strong>Focus:</strong> Smooth voice leading between chords</p>
                <p><strong>Tempo:</strong> Start at 60 BPM</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Exercise 2: Jazz Seventh Chords</h3>
              <p className="mb-4">Add seventh chords for jazz flavor:</p>
              <div className="mb-4 space-y-2">
                <p><strong>Progression:</strong> Dm7 - G7 - Cmaj7</p>
                <p><strong>Practice:</strong> Hold each chord for 4 beats</p>
                <p><strong>Focus:</strong> Clean fretting of 7th chord shapes</p>
                <p><strong>Listen:</strong> Notice the smoother voice leading</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Exercise 3: Different Keys</h3>
              <div className="mb-4">
                <h4 className="font-medium mb-2">Practice ii-V-I in these keys:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p><strong>C Major:</strong> Dm7 - G7 - Cmaj7</p>
                    <p><strong>F Major:</strong> Gm7 - C7 - Fmaj7</p>
                    <p><strong>G Major:</strong> Am7 - D7 - Gmaj7</p>
                  </div>
                  <div className="space-y-1">
                    <p><strong>D Major:</strong> Em7 - A7 - Dmaj7</p>
                    <p><strong>A Major:</strong> Bm7 - E7 - Amaj7</p>
                    <p><strong>E Major:</strong> F#m7 - B7 - Emaj7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Concepts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Advanced Concepts</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-indigo-800">Chord Substitutions</h3>
              <ul className="space-y-2 text-indigo-700">
                <li>• <strong>Tritone substitution:</strong> Replace V7 with bII7</li>
                <li>• <strong>Secondary dominants:</strong> V7/V before V7</li>
                <li>• <strong>Chromatic approaches:</strong> Add passing chords</li>
                <li>• <strong>Modal interchange:</strong> Borrow from parallel modes</li>
              </ul>
            </div>
            
            <div className="bg-teal-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-teal-800">Rhythm Variations</h3>
              <ul className="space-y-2 text-teal-700">
                <li>• <strong>Quick changes:</strong> ii-V in 2 beats each</li>
                <li>• <strong>Extended ii:</strong> Stay on ii for 2 measures</li>
                <li>• <strong>Turnarounds:</strong> I-vi-ii-V back to I</li>
                <li>• <strong>Cycle of fifths:</strong> Chain multiple ii-V&apos;s</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Practice Strategy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Practice Strategy</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Beginner Level</h3>
              <ul className="space-y-2 text-green-700">
                <li>• Master basic triad shapes</li>
                <li>• Practice in C major first</li>
                <li>• Focus on clean chord changes</li>
                <li>• Use simple strumming patterns</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Intermediate Level</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• Add seventh chords</li>
                <li>• Practice in multiple keys</li>
                <li>• Work on voice leading</li>
                <li>• Learn jazz standards</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-800">Advanced Level</h3>
              <ul className="space-y-2 text-purple-700">
                <li>• Use extended chords (9, 11, 13)</li>
                <li>• Practice substitutions</li>
                <li>• Improvise over changes</li>
                <li>• Compose with ii-V-I</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="border-t pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <Link 
              href="/lessons/theory/progressions/i-iv-v" 
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span className="mr-2">←</span>
              Previous: I-IV-V Progression
            </Link>
            <Link 
              href="/lessons/theory/progressions/i-v-vi-iv" 
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              Next: I-V-vi-IV Progression
              <span className="ml-2">→</span>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </Layout>
  );
}
