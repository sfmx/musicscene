import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const twelveStringFeatures = [
  {
    title: 'String Configuration',
    items: [
      { name: 'Octave Pairs (High E, B)', description: 'Same pitch strings for clarity in higher register' },
      { name: 'Octave Pairs (G, D, A, Low E)', description: 'Main string + octave higher for shimmer' },
      { name: 'Double Tension', description: 'Requires stronger neck and heavier construction' },
      { name: 'Wider Nut', description: 'Usually 1.875" to accommodate 12 strings' },
    ]
  },
  {
    title: 'Tonal Characteristics',
    items: [
      { name: 'Chorus Effect', description: 'Natural slight detuning creates lush, wide sound' },
      { name: 'Harmonic Richness', description: 'Octave doubling adds complex overtones' },
      { name: 'Sustain', description: 'More strings create longer-lasting notes' },
      { name: 'Volume', description: 'Nearly double the acoustic output of 6-string' },
    ]
  }
];

const tuningOptions = [
  {
    tuning: 'Standard 12-String',
    strings: 'E-E A-A D-d G-g B-B E-E',
    description: 'Most common tuning. High strings in unison, low strings octaved.',
    usage: 'Folk, rock, country, most popular styles'
  },
  {
    tuning: 'Nashville High Strung',
    strings: 'E-e A-a D-d G-g B-b E-e',
    description: 'All strings paired with octave higher version.',
    usage: 'Recording technique for fuller sound, session work'
  },
  {
    tuning: 'Drop D 12-String',
    strings: 'D-D A-A D-d G-g B-B E-E',
    description: 'Standard 12-string with both low strings tuned to D.',
    usage: 'Rock, alternative, heavier music styles'
  },
  {
    tuning: 'Open G 12-String',
    strings: 'D-D G-G D-d G-g B-B D-D',
    description: 'Open chord tuning creates rich, resonant sound.',
    usage: 'Slide guitar, folk, Celtic music'
  }
];

const twelveStringModels = [
  {
    category: 'Entry Level ($300-800)',
    guitars: [
      { brand: 'Takamine', model: 'GD30CE-12', price: '$400', features: 'Dreadnought, electronics, solid spruce top' },
      { brand: 'Yamaha', model: 'FG820-12', price: '$350', features: 'All solid wood, traditional build' },
      { brand: 'Epiphone', model: 'DR-212', price: '$200', features: 'Affordable entry point, mahogany body' },
    ]
  },
  {
    category: 'Intermediate ($800-2000)',
    guitars: [
      { brand: 'Taylor', model: '150e', price: '$1400', features: 'Dreadnought, ES2 electronics, walnut/spruce' },
      { brand: 'Martin', model: 'D12X1AE', price: '$900', features: 'HPL construction, electronics, Martin tone' },
      { brand: 'Guild', model: 'D-1212', price: '$1200', features: 'Traditional build, excellent value' },
    ]
  },
  {
    category: 'Professional ($2000+)',
    guitars: [
      { brand: 'Taylor', model: '356ce', price: '$3200', features: 'Grand symphony, premium tonewoods' },
      { brand: 'Martin', model: 'D-28-12', price: '$3500', features: 'All solid, East Indian rosewood, legendary tone' },
      { brand: 'Gibson', model: 'J-45 12-String', price: '$2800', features: 'Slope shoulder, vintage character' },
    ]
  }
];

const famousSongs = [
  {
    genre: 'Folk Rock',
    songs: [
      { artist: 'The Byrds', song: 'Mr. Tambourine Man', year: '1965', description: 'Jangly Rickenbacker 12-string electric sound' },
      { artist: 'Simon & Garfunkel', song: 'The Sound of Silence', year: '1964', description: 'Delicate fingerpicked 12-string acoustic' },
      { artist: 'Bob Dylan', song: 'Blowin\' in the Wind', year: '1963', description: 'Acoustic 12-string strumming' },
    ]
  },
  {
    genre: 'Rock',
    songs: [
      { artist: 'Led Zeppelin', song: 'Stairway to Heaven', year: '1971', description: 'Iconic acoustic 12-string intro' },
      { artist: 'The Eagles', song: 'Hotel California', year: '1976', description: '12-string adds texture to the acoustic parts' },
      { artist: 'Tom Petty', song: 'Free Fallin\'', year: '1989', description: 'Jangly electric 12-string throughout' },
    ]
  },
  {
    genre: 'Alternative/Indie',
    songs: [
      { artist: 'R.E.M.', song: 'Losing My Religion', year: '1991', description: 'Arpeggiated Rickenbacker 12-string electric' },
      { artist: 'The Smiths', song: 'How Soon Is Now?', year: '1984', description: 'Tremolo-drenched 12-string electric' },
      { artist: 'Radiohead', song: 'Exit Music', year: '1997', description: 'Haunting acoustic 12-string atmosphere' },
    ]
  }
];

export default function TwelveStringGuitarPage() {
  return (
    <Layout>
      <Header
        title="12-String Guitars"
        subtitle="Discover the lush, shimmering world of 12-string guitars"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-teal-100 to-blue-100 rounded-lg p-8 mb-8 not-prose">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              12-String Guitars: Orchestral Richness
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Experience the magical shimmer and harmonic complexity that only 
              12 strings can provide - from gentle folk ballads to soaring rock anthems.
            </p>
            <div className="bg-teal-50 rounded-lg p-4">
              <h3 className="font-semibold text-teal-800 mb-2">12-String Magic:</h3>
              <ul className="text-teal-700 space-y-1">
                <li>• Double the strings, triple the richness</li>
                <li>• Natural chorus effect from slight detuning</li>
                <li>• Massive acoustic projection and sustain</li>
                <li>• Iconic sound of 60s folk and rock</li>
                <li>• Perfect for rhythm and fingerpicking</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How 12-Strings Work */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The 12-String Difference</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">String Pairing System</h3>
              <div className="space-y-3 text-blue-700">
                <p className="font-semibold">High Strings (1st & 2nd):</p>
                <p className="text-sm">Both strings tuned to same pitch for clarity</p>
                
                <p className="font-semibold">Low Strings (3rd-6th):</p>
                <p className="text-sm">Main string + octave higher companion</p>
                
                <div className="bg-white rounded p-3 font-mono text-sm">
                  <div>6th: E (low) + E (octave)</div>
                  <div>5th: A + A (octave)</div>
                  <div>4th: D + d (octave)</div>
                  <div>3rd: G + g (octave)</div>
                  <div>2nd: B + B (same)</div>
                  <div>1st: E + E (same)</div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Sound Characteristics</h3>
              <ul className="space-y-2 text-green-700">
                <li>• <strong>Shimmer:</strong> Octave doubling creates bell-like quality</li>
                <li>• <strong>Chorus:</strong> Slight tuning variations add width</li>
                <li>• <strong>Sustain:</strong> More strings = longer decay</li>
                <li>• <strong>Harmonic richness:</strong> Complex overtone interactions</li>
                <li>• <strong>Volume:</strong> Nearly twice the acoustic output</li>
                <li>• <strong>Fullness:</strong> Fills frequency spectrum naturally</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Construction & Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Construction & Features</h2>
          
          {twelveStringFeatures.map((feature, index) => (
            <div key={feature.title} className="mb-8">
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {feature.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-lg mb-2 text-gray-800">{item.name}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Tuning Options */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Tuning Variations</h2>
          
          <div className="space-y-4">
            {tuningOptions.map((tuning, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{tuning.tuning}</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-700">String Configuration:</h4>
                    <div className="bg-gray-50 rounded p-3 font-mono text-sm">
                      {tuning.strings}
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{tuning.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-700">Best For:</h4>
                    <p className="text-gray-600 text-sm">{tuning.usage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Playing Techniques */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Playing Techniques</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-purple-800">🎸 Strumming Techniques</h3>
              <ul className="space-y-2 text-purple-700">
                <li>• <strong>Light touch:</strong> 12-strings respond to gentle dynamics</li>
                <li>• <strong>Open chords:</strong> Let strings ring for maximum shimmer</li>
                <li>• <strong>Partial chords:</strong> Use fewer fingers for easier fretting</li>
                <li>• <strong>Capo use:</strong> Reduces string tension, easier playing</li>
                <li>• <strong>Rhythm focus:</strong> 12-strings excel at accompaniment</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-orange-800">🎼 Fingerpicking Approaches</h3>
              <ul className="space-y-2 text-orange-700">
                <li>• <strong>Arpeggios:</strong> Showcase the harmonic richness</li>
                <li>• <strong>Travis picking:</strong> Classic folk fingerpicking patterns</li>
                <li>• <strong>Celtic style:</strong> Traditional fingerpicking suits 12-strings</li>
                <li>• <strong>Thumb-pick use:</strong> Helps with string pairs</li>
                <li>• <strong>Careful muting:</strong> Avoid unwanted string noise</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Famous Songs & Artists */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Iconic 12-String Songs</h2>
          
          {famousSongs.map((genre, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{genre.genre}</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Artist</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Song</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Year</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">12-String Use</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {genre.songs.map((song, songIndex) => (
                      <tr key={songIndex} className={songIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 font-medium">{song.artist}</td>
                        <td className="px-6 py-4">{song.song}</td>
                        <td className="px-6 py-4 text-gray-600">{song.year}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{song.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </section>

        {/* Acoustic vs Electric 12-String */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Acoustic vs Electric 12-String</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-amber-800">Acoustic 12-String</h3>
              <div className="space-y-3 text-amber-700">
                <p><strong>Advantages:</strong></p>
                <ul className="space-y-1 ml-4 text-sm">
                  <li>• Natural resonance and projection</li>
                  <li>• Perfect for campfire and intimate settings</li>
                  <li>• No amplification needed</li>
                  <li>• Rich harmonic complexity</li>
                </ul>
                
                <p><strong>Best for:</strong></p>
                <p className="text-sm">Folk, country, singer-songwriter, Celtic music</p>
                
                <p><strong>Famous models:</strong></p>
                <p className="text-sm">Taylor 356ce, Martin D-28-12, Guild F-212XL</p>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Electric 12-String</h3>
              <div className="space-y-3 text-blue-700">
                <p><strong>Advantages:</strong></p>
                <ul className="space-y-1 ml-4 text-sm">
                  <li>• Lower string tension, easier playing</li>
                  <li>• Effects processing possibilities</li>
                  <li>• Cuts through band mix</li>
                  <li>• Iconic jangly rock sound</li>
                </ul>
                
                <p><strong>Best for:</strong></p>
                <p className="text-sm">Rock, indie, alternative, jangle pop</p>
                
                <p><strong>Famous models:</strong></p>
                <p className="text-sm">Rickenbacker 330/12, Fender Electric XII, Epiphone Casino 12</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Models */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Recommended 12-String Guitars</h2>
          
          {twelveStringModels.map((category, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{category.category}</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Brand</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Model</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Key Features</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {category.guitars.map((guitar, guitarIndex) => (
                      <tr key={guitarIndex} className={guitarIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 font-medium">{guitar.brand}</td>
                        <td className="px-6 py-4">{guitar.model}</td>
                        <td className="px-6 py-4 font-semibold text-green-600">{guitar.price}</td>
                        <td className="px-6 py-4 text-sm">{guitar.features}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </section>

        {/* Maintenance & Setup */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Maintenance & Setup Considerations</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-red-800">⚠️ Special Considerations</h3>
              <ul className="space-y-2 text-red-700">
                <li>• <strong>Higher tension:</strong> More stress on neck and bridge</li>
                <li>• <strong>Tuning stability:</strong> 12 strings = 12 potential issues</li>
                <li>• <strong>String changes:</strong> More time-consuming process</li>
                <li>• <strong>Intonation:</strong> Each string pair must be set correctly</li>
                <li>• <strong>Neck adjustment:</strong> May need professional setup</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-green-800">🔧 Maintenance Tips</h3>
              <ul className="space-y-2 text-green-700">
                <li>• <strong>Quality strings:</strong> Use matched sets for best results</li>
                <li>• <strong>Regular tuning:</strong> Check tuning frequently</li>
                <li>• <strong>Humidity control:</strong> 12-strings are more sensitive</li>
                <li>• <strong>Professional setup:</strong> Worth the investment</li>
                <li>• <strong>Gentle handling:</strong> Respect the extra tension</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Learning Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Getting Started with 12-String</h2>
          
          <div className="bg-indigo-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-indigo-800">🎯 For Beginners</h3>
            <div className="grid md:grid-cols-2 gap-6 text-indigo-700">
              <div>
                <h4 className="font-semibold mb-2">Start Simple</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Begin with open chord strumming</li>
                  <li>• Use a capo to reduce tension</li>
                  <li>• Focus on rhythm over lead playing</li>
                  <li>• Learn partial chord shapes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Build Strength</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Practice regularly to build finger strength</li>
                  <li>• Don't over-practice initially</li>
                  <li>• Use lighter gauge strings if needed</li>
                  <li>• Take breaks to avoid strain</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-yellow-800">💡 Pro Tips</h3>
            <ul className="space-y-2 text-yellow-700">
              <li>• <strong>Use a good tuner:</strong> 12 strings require precision</li>
              <li>• <strong>Learn to tune efficiently:</strong> Develop a system</li>
              <li>• <strong>Experiment with capos:</strong> Easier playing and new sounds</li>
              <li>• <strong>Record yourself:</strong> Hear the full harmonic picture</li>
              <li>• <strong>Play with others:</strong> 12-strings shine in ensemble settings</li>
            </ul>
          </div>
        </section>

        {/* Navigation */}
        <section className="mb-12">
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Explore More Guitar Types</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/lessons/gear/guitars/baritone" 
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-blue-600 mb-2">Baritone Guitars →</h4>
                <p className="text-sm text-gray-600">Extended range for deeper tones</p>
              </Link>
              <Link 
                href="/lessons/gear/guitars/classical" 
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-blue-600 mb-2">← Classical Guitars</h4>
                <p className="text-sm text-gray-600">Traditional nylon-string instruments</p>
              </Link>
            </div>
            <div className="mt-4">
              <Link 
                href="/lessons/gear/guitars" 
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                ← Back to All Guitar Types
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </Layout>
  );
}
