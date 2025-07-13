import React from 'react';
import Link from 'next/link';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import MusicScore from '@/components/MusicScore';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const basicTwelveBarBlues = `
tabstave notation=true key=E time=4/4
notes :w (0/6.2/5.2/4.1/3.0/2.0/1) :w ## :w ## :w ## |
notes :w (0/5.2/4.2/3.1/2.0/1) :w ## :w (0/6.2/5.2/4.1/3.0/2.0/1) :w ## |
notes :w (2/6.2/5.1/4.0/3.0/2.0/1) :w (0/5.2/4.2/3.1/2.0/1) :w (0/6.2/5.2/4.1/3.0/2.0/1) :w (2/6.2/5.1/4.0/3.0/2.0/1)
text ++,.1,E7,:++,.5,E7,:++,.9,A7,:++,.11,E7,:++,.13,B7,:++,.14,A7,:++,.15,E7,:++,.16,B7
`;

const quickChangeBlues = `
tabstave notation=true key=E time=4/4
notes :w (0/6.2/5.2/4.1/3.0/2.0/1) :w (0/5.2/4.2/3.1/2.0/1) :w (0/6.2/5.2/4.1/3.0/2.0/1) :w ## |
notes :w (0/5.2/4.2/3.1/2.0/1) :w ## :w (0/6.2/5.2/4.1/3.0/2.0/1) :w ## |
notes :w (2/6.2/5.1/4.0/3.0/2.0/1) :w (0/5.2/4.2/3.1/2.0/1) :w (0/6.2/5.2/4.1/3.0/2.0/1) :w (2/6.2/5.1/4.0/3.0/2.0/1)
text ++,.1,E7,:++,.2,A7,:++,.3,E7,:++,.7,A7,:++,.11,E7,:++,.13,B7,:++,.14,A7,:++,.15,E7,:++,.16,B7
`;

const jazzBluesSubstitutions = `
tabstave notation=true key=C time=4/4
notes :w (x/6.3/5.2/4.4/3.5/2.x/1) :w (1/6.x/5.2/4.1/3.1/2.x/1) :w (x/6.3/5.2/4.4/3.5/2.x/1) :w (x/6.x/5.1/4.2/3.1/2.x/1) |
notes :w (1/6.x/5.2/4.1/3.1/2.x/1) :w ## :w (x/6.3/5.2/4.4/3.5/2.x/1) :w (0/6.x/5.1/4.0/3.0/2.x/1) |
notes :w (2/6.x/5.1/4.2/3.1/2.x/1) :w (1/6.x/5.2/4.1/3.1/2.x/1) :w (x/6.3/5.2/4.4/3.5/2.x/1) :w (x/6.x/5.4/4.3/3.4/2.x/1)
text ++,.1,C7,:++,.2,F7,:++,.3,C7,:++,.4,C#dim7,:++,.5,F7,:++,.9,C7,:++,.10,Am7,:++,.11,G7,:++,.12,F7,:++,.13,C7,:++,.14,G7
`;

export default function TwelveBarBluesPage() {
  return (
    <Layout>
      <Header
        title="12 Bar Blues Progression"
        subtitle="Master the backbone of blues, rock & roll, and R&B"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg p-8 mb-8 not-prose">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              12 Bar Blues: The Foundation of American Music
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Learn the progression that gave birth to blues, jazz, rock & roll, and countless other genres.
            </p>
            <div className="bg-indigo-50 rounded-lg p-4">
              <h3 className="font-semibold text-indigo-800 mb-2">What You&apos;ll Learn:</h3>
              <ul className="text-indigo-700 space-y-1">
                <li>• The basic 12-bar blues structure</li>
                <li>• Quick change and turnaround variations</li>
                <li>• Jazz blues substitutions and extensions</li>
                <li>• How to play in different keys</li>
                <li>• Rhythm patterns and strumming techniques</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Theory Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Understanding the 12 Bar Blues</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">The Structure</h3>
              <p className="text-blue-700 mb-4">
                The 12-bar blues follows a specific harmonic pattern that repeats every 12 bars. 
                It uses three chords: the I, IV, and V chords of a key.
              </p>
              <div className="bg-white rounded p-4">
                <div className="text-sm font-mono text-blue-800">
                  <div>Bars 1-4: I - I - I - I</div>
                  <div>Bars 5-8: IV - IV - I - I</div>
                  <div>Bars 9-12: V - IV - I - V (turnaround)</div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Historical Significance</h3>
              <p className="text-green-700 mb-4">
                The 12-bar blues emerged in the early 1900s and became the foundation for:
              </p>
              <ul className="space-y-2 text-green-700">
                <li>• Delta and country blues</li>
                <li>• Jazz standards and improvisation</li>
                <li>• Rock & roll and R&B</li>
                <li>• Modern blues and blues rock</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Basic Blues Progression */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Basic 12 Bar Blues (Key of E)</h2>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">Standard Pattern</h3>
            <MusicScore 
              staves={[{
                id: 'twelve-bar-basic',
                notation: basicTwelveBarBlues,
                title: '12 Bar Blues in E'
              }]}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <h4 className="font-semibold mb-2">I - E7</h4>
              <SimpleFretboardDiagram chord="E7" />
              <p className="text-sm text-gray-600 mt-2">The tonic chord - home base</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">IV - A7</h4>
              <SimpleFretboardDiagram chord="A7" />
              <p className="text-sm text-gray-600 mt-2">The subdominant - creates movement</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">V - B7</h4>
              <SimpleFretboardDiagram chord="B7" />
              <p className="text-sm text-gray-600 mt-2">The dominant - creates tension</p>
            </div>
          </div>
        </section>

        {/* Quick Change Blues */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Quick Change Blues</h2>
          
          <div className="bg-yellow-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-yellow-800">More Dynamic Movement</h3>
            <p className="text-yellow-700 mb-4">
              The quick change variation adds the IV chord in bar 2, creating more harmonic movement and interest.
            </p>
            <MusicScore 
              staves={[{
                id: 'twelve-bar-quick-change',
                notation: quickChangeBlues,
                title: 'Quick Change Blues in E'
              }]}
            />
            <div className="mt-4 text-sm text-yellow-700">
              <strong>Pattern:</strong> I - IV - I - I | IV - IV - I - I | V - IV - I - V
            </div>
          </div>
        </section>

        {/* Jazz Blues */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Jazz Blues Substitutions</h2>
          
          <div className="bg-purple-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-purple-800">Advanced Harmonic Movement</h3>
            <p className="text-purple-700 mb-4">
              Jazz musicians often substitute and extend the basic blues chords to create more sophisticated harmony.
            </p>
            <MusicScore 
              staves={[{
                id: 'jazz-blues-subs',
                notation: jazzBluesSubstitutions,
                title: 'Jazz Blues Substitutions in C'
              }]}
            />
            <div className="mt-4 text-sm text-purple-700">
              <strong>Common substitutions:</strong> Chromatic passing chords, ii-V substitutions, and extended harmony
            </div>
          </div>
        </section>

        {/* Different Keys */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">12 Bar Blues in Different Keys</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Key</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">I Chord</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">IV Chord</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">V Chord</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium">E</td>
                  <td className="px-6 py-4">E7</td>
                  <td className="px-6 py-4">A7</td>
                  <td className="px-6 py-4">B7</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">A</td>
                  <td className="px-6 py-4">A7</td>
                  <td className="px-6 py-4">D7</td>
                  <td className="px-6 py-4">E7</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">G</td>
                  <td className="px-6 py-4">G7</td>
                  <td className="px-6 py-4">C7</td>
                  <td className="px-6 py-4">D7</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">C</td>
                  <td className="px-6 py-4">C7</td>
                  <td className="px-6 py-4">F7</td>
                  <td className="px-6 py-4">G7</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Rhythm and Strumming */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Rhythm Patterns</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-red-800">Shuffle Feel</h3>
              <p className="text-red-700 mb-4">
                Traditional blues uses a shuffle rhythm with a swing feel. Think "triplet, triplet" rather than straight eighth notes.
              </p>
              <div className="bg-white rounded p-4 text-center">
                <div className="font-mono text-sm">♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫</div>
                <div className="text-xs text-gray-600 mt-1">Long-short, long-short pattern</div>
              </div>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-orange-800">Common Strumming</h3>
              <p className="text-orange-700 mb-4">
                A basic down-up strumming pattern works well for blues. Add emphasis on beats 1 and 3.
              </p>
              <div className="bg-white rounded p-4 text-center">
                <div className="font-mono text-sm">D - u - D - u -</div>
                <div className="text-xs text-gray-600 mt-1">Down, up, down, up pattern</div>
              </div>
            </div>
          </div>
        </section>

        {/* Famous Songs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Famous 12 Bar Blues Songs</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-indigo-800">Classic Blues</h3>
              <ul className="space-y-2 text-indigo-700">
                <li>• "Sweet Home Chicago" - Robert Johnson</li>
                <li>• "Stormy Monday" - T-Bone Walker</li>
                <li>• "The Thrill Is Gone" - B.B. King</li>
                <li>• "Pride and Joy" - Stevie Ray Vaughan</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-blue-800">Rock & Roll</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• "Johnny B. Goode" - Chuck Berry</li>
                <li>• "Hound Dog" - Elvis Presley</li>
                <li>• "Rock Around the Clock" - Bill Haley</li>
                <li>• "Blue Suede Shoes" - Carl Perkins</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Practice Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Practice Strategies</h2>
          
          <div className="bg-green-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-3 text-green-800">🎯 Step-by-Step Practice</h3>
            <ol className="space-y-3 text-green-700">
              <li><strong>1. Learn the chord shapes:</strong> Master E7, A7, and B7 cleanly</li>
              <li><strong>2. Practice the progression slowly:</strong> Focus on smooth transitions</li>
              <li><strong>3. Add rhythm:</strong> Start with simple down strums</li>
              <li><strong>4. Work on the shuffle feel:</strong> Listen to recordings and mimic the groove</li>
              <li><strong>5. Learn in other keys:</strong> Start with A and G</li>
              <li><strong>6. Play along with songs:</strong> Apply your skills to real music</li>
            </ol>
          </div>
          
          <div className="bg-yellow-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-yellow-800">💡 Pro Tips</h3>
            <ul className="space-y-2 text-yellow-700">
              <li>• Use dominant 7th chords for authentic blues sound</li>
              <li>• Practice with a metronome set to shuffle feel</li>
              <li>• Listen to different styles of blues for inspiration</li>
              <li>• Try fingerpicking patterns once you master strumming</li>
              <li>• Learn to play bass lines between chord changes</li>
            </ul>
          </div>
        </section>

        {/* Navigation */}
        <section className="mb-12">
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Continue Learning</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/lessons/theory/progressions/i-iv-v" 
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-blue-600 mb-2">← I-IV-V Progression</h4>
                <p className="text-sm text-gray-600">Learn the foundational three-chord progression</p>
              </Link>
              <Link 
                href="/lessons/theory/progressions/vi-iv-i-v" 
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-blue-600 mb-2">vi-IV-I-V Progression →</h4>
                <p className="text-sm text-gray-600">Explore modern pop progressions</p>
              </Link>
            </div>
            <div className="mt-4">
              <Link 
                href="/lessons/theory/progressions" 
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                ← Back to All Progressions
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </Layout>
  );
}
