import React from 'react';
import Link from 'next/link';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import MusicScore from '@/components/MusicScore';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const basicCircleOfFifths = `
tabstave notation=true key=C time=4/4
notes :w (3/5.3/4.2/3.1/2.0/1) | :w (0/5.2/4.2/3.1/2.0/1) | :w (x/6.x/5.2/4.2/3.1/2.3/1) | :w (3/6.2/5.0/4.0/3.3/2.3/1)
text ++,.1,C,:++,.2,Am,:++,.3,Dm,:++,.4,G
`;

const extendedCircle = `
tabstave notation=true key=C time=4/4
notes :w (3/5.3/4.2/3.1/2.0/1) | :w (0/5.2/4.2/3.1/2.0/1) | :w (x/6.x/5.2/4.2/3.1/2.3/1) | :w (3/6.2/5.0/4.0/3.3/2.3/1) |
notes :w (2/5.2/4.2/3.4/2.4/1) | :w (0/5.2/4.2/3.1/2.0/1) | :w (x/6.x/5.2/4.2/3.1/2.3/1) | :w (3/6.2/5.0/4.0/3.3/2.3/1)
text ++,.1,C,:++,.2,Am,:++,.3,Dm,:++,.4,G,:++,.5,Em,:++,.6,Am,:++,.7,Dm,:++,.8,G
`;

const jazzCircleOfFifths = `
tabstave notation=true key=C time=4/4
notes :w (x/6.3/5.2/4.4/3.5/2.x/1) | :w (x/6.0/5.1/4.0/3.0/2.x/1) | :w (x/6.x/5.1/4.2/3.1/2.x/1) | :w (3/6.x/5.4/4.3/3.4/2.x/1) |
notes :w (x/6.2/5.2/4.0/3.0/2.x/1) | :w (x/6.0/5.1/4.0/3.0/2.x/1) | :w (x/6.x/5.1/4.2/3.1/2.x/1) | :w (3/6.x/5.4/4.3/3.4.2.x/1)
text ++,.1,Cmaj7,:++,.2,Am7,:++,.3,Dm7,:++,.4,G7,:++,.5,Em7,:++,.6,Am7,:++,.7,Dm7,:++,.8,G7
`;

const descendingBassLine = `
tabstave notation=true key=C time=4/4
notes :w (3/5.3/4.2/3.1/2.0/1) | :w (0/5.2/4.2/3.1/2.0/1) | :w (x/6.x/5.2/4.2/3.1/2.3/1) | :w (3/6.2/5.0/4.0/3.3/2.3/1) |
notes :w (2/5.2/4.2/3.4/2.4/1) | :w (0/5.2/4.2/3.1/2.0/1) | :w (x/6.x/5.2/4.2/3.1/2.3/1) | :w (3/6.2/5.0/4.0/3.3/2.3/1)
text ++,.1,C/C,:++,.2,Am/A,:++,.3,Dm/D,:++,.4,G/G,:++,.5,Em/E,:++,.6,Am/A,:++,.7,Dm/D,:++,.8,G/G
`;

export default function CircleOfFifthsPage() {
  return (
    <Layout>
      <Header
        title="Circle of Fifths Progressions"
        subtitle="Master advanced harmonic movement and sophisticated voice leading"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-violet-100 to-indigo-100 rounded-lg p-8 mb-8 not-prose">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Circle of Fifths: Advanced Harmonic Movement
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Explore sophisticated progressions that move through keys using the powerful relationships in the circle of fifths.
            </p>
            <div className="bg-violet-50 rounded-lg p-4">
              <h3 className="font-semibold text-violet-800 mb-2">What You&apos;ll Learn:</h3>
              <ul className="text-violet-700 space-y-1">
                <li>• Understanding the circle of fifths relationship</li>
                <li>• How root motion by fifths creates strong harmony</li>
                <li>• Jazz applications and sophisticated voice leading</li>
                <li>• Sequential patterns and modulation techniques</li>
                <li>• Classical and contemporary applications</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Theory Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Understanding the Circle of Fifths</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">The Power of Fifth Relationships</h3>
              <p className="text-blue-700 mb-4">
                Moving by perfect fifths creates some of the strongest harmonic progressions in music. 
                This movement feels natural and inevitable to our ears.
              </p>
              <div className="space-y-2 text-blue-700">
                <div>• <strong>Root motion by 5ths:</strong> The strongest harmonic movement</div>
                <div>• <strong>Voice leading:</strong> Common tones and stepwise motion</div>
                <div>• <strong>Functional harmony:</strong> Clear sense of direction</div>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-800">The Circle Visualization</h3>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-800 mb-2">Circle of Fifths</div>
                <div className="text-sm text-green-700 space-y-1">
                  <div>C → G → D → A → E → B → F# → C#</div>
                  <div>↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓</div>
                  <div>F ← C ← G ← D ← A ← E ← B ← F#</div>
                </div>
              </div>
              <p className="text-green-700 text-sm mt-4">
                Moving clockwise increases sharps, counter-clockwise increases flats.
              </p>
            </div>
          </div>
        </section>

        {/* Basic Circle Progression */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Basic Circle of Fifths Progression</h2>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">C - Am - Dm - G</h3>
            <p className="text-gray-700 mb-4">
              This basic progression demonstrates root movement by descending fifths (or ascending fourths).
            </p>
            <MusicScore 
              staves={[{
                id: 'basic-circle-fifths',
                notation: basicCircleOfFifths,
                title: 'Basic Circle of Fifths Movement'
              }]}
            />
            <div className="mt-4 text-sm text-gray-600">
              <strong>Root movement:</strong> C (down 5th to) Am (down 5th to) Dm (down 5th to) G
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <h4 className="font-semibold mb-2">C Major</h4>
              <SimpleFretboardDiagram chord="C_major" />
              <p className="text-sm text-gray-600 mt-2">Starting point</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">A Minor</h4>
              <SimpleFretboardDiagram chord="A_minor" />
              <p className="text-sm text-gray-600 mt-2">Down a 5th</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">D Minor</h4>
              <SimpleFretboardDiagram chord="D_minor" />
              <p className="text-sm text-gray-600 mt-2">Down another 5th</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">G Major</h4>
              <SimpleFretboardDiagram chord="G_major" />
              <p className="text-sm text-gray-600 mt-2">Down another 5th</p>
            </div>
          </div>
        </section>

        {/* Extended Circle */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Extended Circle of Fifths</h2>
          
          <div className="bg-purple-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-purple-800">Longer Sequence</h3>
            <p className="text-purple-700 mb-4">
              Extending the circle creates longer, more sophisticated progressions that can span multiple measures.
            </p>
            <MusicScore 
              staves={[{
                id: 'extended-circle-fifths',
                notation: extendedCircle,
                title: 'Extended Circle: C-Am-Dm-G-Em-Am-Dm-G'
              }]}
            />
            <div className="mt-4 text-sm text-purple-700">
              <strong>Pattern:</strong> Each chord&apos;s root is a perfect fifth below the previous chord&apos;s root.
            </div>
          </div>
        </section>

        {/* Jazz Applications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Jazz Circle of Fifths</h2>
          
          <div className="bg-orange-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-orange-800">With Seventh Chords</h3>
            <p className="text-orange-700 mb-4">
              Jazz musicians often use seventh chords in circle progressions for richer harmony and smoother voice leading.
            </p>
            <MusicScore 
              staves={[{
                id: 'jazz-circle-fifths',
                notation: jazzCircleOfFifths,
                title: 'Jazz Circle with 7th Chords'
              }]}
            />
            <div className="mt-4 text-sm text-orange-700">
              <strong>Voice leading:</strong> Notice how the 7th of each chord resolves down to the 3rd of the next chord.
            </div>
          </div>
        </section>

        {/* Voice Leading and Bass Lines */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Voice Leading & Bass Movement</h2>
          
          <div className="bg-teal-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-teal-800">Descending Bass Line</h3>
            <p className="text-teal-700 mb-4">
              Circle progressions often feature a strong descending bass line that reinforces the harmonic movement.
            </p>
            <MusicScore 
              staves={[{
                id: 'descending-bass-circle',
                notation: descendingBassLine,
                title: 'Circle of Fifths with Descending Bass'
              }]}
            />
            <div className="mt-4 text-sm text-teal-700">
              <strong>Bass pattern:</strong> C - A - D - G - E - A - D - G (descending by fifths)
            </div>
          </div>
        </section>

        {/* Different Starting Points */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Circle Progressions in Different Keys</h2>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Starting Key</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">4-Chord Circle</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium">C Major</td>
                  <td className="px-6 py-4">C - Am - Dm - G</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">G Major</td>
                  <td className="px-6 py-4">G - Em - Am - D</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">D Major</td>
                  <td className="px-6 py-4">D - Bm - Em - A</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">A Major</td>
                  <td className="px-6 py-4">A - F#m - Bm - E</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">F Major</td>
                  <td className="px-6 py-4">F - Dm - Gm - C</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Musical Applications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Musical Applications</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-indigo-800">Classical Music</h3>
              <ul className="space-y-2 text-indigo-700">
                <li>• Bach chorales and fugues</li>
                <li>• Mozart and Beethoven sonatas</li>
                <li>• Sequence patterns in development sections</li>
                <li>• Modulation to related keys</li>
              </ul>
              <p className="text-indigo-700 text-sm mt-4">
                Circle progressions are fundamental to classical harmony and counterpoint.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-blue-800">Jazz Standards</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• "Autumn Leaves" - Circle in bridge</li>
                <li>• "All the Things You Are" - Extended circles</li>
                <li>• "Giant Steps" - Coltrane changes</li>
                <li>• "Fly Me to the Moon" - Circle sequences</li>
              </ul>
              <p className="text-blue-700 text-sm mt-4">
                Jazz heavily uses circle progressions for sophisticated harmonic movement.
              </p>
            </div>
          </div>
        </section>

        {/* Advanced Techniques */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Advanced Techniques</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-pink-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-pink-800">Tritone Substitutions</h3>
              <p className="text-pink-700 mb-4">
                Replace dominant chords with chords a tritone away for sophisticated jazz harmony.
              </p>
              <div className="bg-white rounded p-4 text-sm">
                <div className="font-semibold">Instead of: Am7 - D7 - G</div>
                <div className="text-gray-600">Try: Am7 - Ab7 - G</div>
              </div>
            </div>
            
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-yellow-800">Chromatic Movement</h3>
              <p className="text-yellow-700 mb-4">
                Add chromatic passing chords between circle changes for smoother voice leading.
              </p>
              <div className="bg-white rounded p-4 text-sm">
                <div className="font-semibold">Basic: C - Am - Dm - G</div>
                <div className="text-gray-600">With passing: C - C#dim7 - Dm - G</div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Strategies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Practice Strategies</h2>
          
          <div className="bg-green-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-3 text-green-800">🎯 Progressive Learning</h3>
            <ol className="space-y-3 text-green-700">
              <li><strong>1. Learn the basic pattern:</strong> Start with C-Am-Dm-G</li>
              <li><strong>2. Understand the theory:</strong> Identify the fifth relationships</li>
              <li><strong>3. Practice in all keys:</strong> Start with easier keys (G, D, A)</li>
              <li><strong>4. Add seventh chords:</strong> Practice jazz voicings</li>
              <li><strong>5. Work on voice leading:</strong> Focus on smooth transitions</li>
              <li><strong>6. Learn real songs:</strong> Apply to jazz standards and classical pieces</li>
            </ol>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-800">Technical Exercises</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• Practice circle progressions with metronome</li>
                <li>• Work on fingerpicking patterns</li>
                <li>• Practice with different rhythmic feels</li>
                <li>• Use alternate chord voicings</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-purple-800">Musical Applications</h3>
              <ul className="space-y-2 text-purple-700">
                <li>• Improvise melodies over circle progressions</li>
                <li>• Write songs using circle movement</li>
                <li>• Analyze famous songs for circle patterns</li>
                <li>• Practice modulating between keys</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Analysis Examples */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Song Analysis</h2>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Famous Circle of Fifths Examples</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-gray-800">"Autumn Leaves"</h4>
                <p className="text-gray-700 text-sm mb-2">Bridge section:</p>
                <div className="bg-white rounded p-3 text-sm font-mono">
                  Am7 - D7 - G - G<br/>
                  Em7 - A7 - D - D
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-gray-800">"All of Me"</h4>
                <p className="text-gray-700 text-sm mb-2">Measures 17-20:</p>
                <div className="bg-white rounded p-3 text-sm font-mono">
                  E7 - Am - Am<br/>
                  Dm - G7 - C
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="mb-12">
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Continue Learning</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/lessons/theory/progressions/vi-iv-i-v" 
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-blue-600 mb-2">← vi-IV-I-V Progression</h4>
                <p className="text-sm text-gray-600">Explore emotional modern progressions</p>
              </Link>
              <Link 
                href="/lessons/theory/chords" 
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-blue-600 mb-2">Advanced Chords →</h4>
                <p className="text-sm text-gray-600">Learn extended and altered harmonies</p>
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
