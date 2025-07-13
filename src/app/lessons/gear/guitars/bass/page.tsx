import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const bassFeatures = [
  {
    title: 'Bass Types',
    items: [
      { name: '4-String', description: 'Standard EADG tuning. Most common and versatile.' },
      { name: '5-String', description: 'Adds low B string. Extended range for modern music.' },
      { name: '6-String', description: 'Adds high C string. Guitar-like range for complex music.' },
      { name: 'Fretless', description: 'Smooth, vocal-like sound. Used in jazz and world music.' },
    ]
  },
  {
    title: 'Scale Length',
    items: [
      { name: 'Short Scale (30")', description: 'Easier to play, warmer tone. Great for smaller hands.' },
      { name: 'Medium Scale (32")', description: 'Balanced feel and tone. Good compromise.' },
      { name: 'Long Scale (34")', description: 'Standard scale. Tight low end, clear articulation.' },
      { name: 'Extra Long (35"+)', description: 'Extended range basses. Very tight low strings.' },
    ]
  }
];

const bassModels = [
  {
    category: 'Beginner ($200-600)',
    basses: [
      { brand: 'Yamaha', model: 'TRBX174', price: '$200', features: '4-string, lightweight, great starter bass' },
      { brand: 'Squier', model: 'Classic Vibe P-Bass', price: '$400', features: 'Precision Bass design, vintage vibe' },
      { brand: 'Ibanez', model: 'GSR200', price: '$250', features: 'Thin neck, modern styling, versatile tone' },
    ]
  },
  {
    category: 'Intermediate ($600-1500)',
    basses: [
      { brand: 'Fender', model: 'Player Precision Bass', price: '$800', features: 'Classic P-Bass tone, modern playability' },
      { brand: 'Music Man', model: 'SUB StingRay', price: '$900', features: 'Active electronics, punchy tone' },
      { brand: 'Warwick', model: 'RockBass Corvette', price: '$700', features: 'German design, distinctive tone' },
    ]
  },
  {
    category: 'Professional ($1500+)',
    basses: [
      { brand: 'Fender', model: 'American Professional II P-Bass', price: '$1800', features: 'Premium USA Precision Bass' },
      { brand: 'Music Man', model: 'StingRay', price: '$2400', features: 'Industry standard active bass' },
      { brand: 'Fodera', model: 'Monarch Standard', price: '$4000+', features: 'Hand-built NYC bass, ultimate quality' },
    ]
  }
];

const playingStyles = [
  {
    style: 'Fingerstyle',
    description: 'Using fingers to pluck strings. Warm, round tone.',
    genres: ['Jazz', 'Funk', 'R&B', 'Rock'],
    techniques: ['Walking bass lines', 'Groove playing', 'Melodic bass lines']
  },
  {
    style: 'Pick Playing',
    description: 'Using a plectrum for attack. Bright, cutting tone.',
    genres: ['Rock', 'Punk', 'Metal', 'Country'],
    techniques: ['Driving eighth notes', 'Aggressive attack', 'Fast passages']
  },
  {
    style: 'Slap & Pop',
    description: 'Percussive technique with thumb and fingers.',
    genres: ['Funk', 'Fusion', 'Hip-Hop', 'Modern R&B'],
    techniques: ['Rhythmic grooves', 'Percussive sounds', 'Complex patterns']
  },
  {
    style: 'Tapping',
    description: 'Two-handed technique for fast runs and chords.',
    genres: ['Progressive', 'Jazz Fusion', 'Metal'],
    techniques: ['Fast scales', 'Chord progressions', 'Solo bass pieces']
  }
];

export default function BassGuitarPage() {
  return (
    <Layout>
      <Header
        title="Bass Guitars"
        subtitle="Master the foundation of every great band"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-8 mb-8 not-prose">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Bass Guitars: The Heartbeat of Music
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              From thunderous rock foundations to intricate jazz walking lines, 
              the bass guitar provides the harmonic and rhythmic foundation that makes music move.
            </p>
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-2">Why Bass Matters:</h3>
              <ul className="text-green-700 space-y-1">
                <li>• Provides harmonic foundation with root notes</li>
                <li>• Bridges rhythm section with drums</li>
                <li>• Creates groove and feel in all genres</li>
                <li>• Essential for full band sound</li>
                <li>• Highly in-demand skill for musicians</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Role in Music */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Bass Guitar's Role</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-orange-800">Harmonic Foundation</h3>
              <ul className="space-y-2 text-orange-700">
                <li>• <strong>Root Notes:</strong> Establish chord progressions</li>
                <li>• <strong>Walking Lines:</strong> Connect chord changes smoothly</li>
                <li>• <strong>Counterpoint:</strong> Create independent melodic lines</li>
                <li>• <strong>Chord Tones:</strong> Reinforce harmonic movement</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Rhythmic Anchor</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• <strong>Pocket Playing:</strong> Lock in with the drummer</li>
                <li>• <strong>Groove Creation:</strong> Define the feel of songs</li>
                <li>• <strong>Syncopation:</strong> Add rhythmic interest</li>
                <li>• <strong>Timing:</strong> Keep the band together</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-800">Melodic Voice</h3>
              <ul className="space-y-2 text-purple-700">
                <li>• <strong>Bass Solos:</strong> Featured melodic passages</li>
                <li>• <strong>Fills:</strong> Connect sections and add interest</li>
                <li>• <strong>Hooks:</strong> Memorable bass lines that define songs</li>
                <li>• <strong>Lead Bass:</strong> Melody instrument in some contexts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bass Types and Construction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Bass Guitar Types & Construction</h2>
          
          {bassFeatures.map((feature, index) => (
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

        {/* Iconic Bass Models */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Legendary Bass Models</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-red-800">Fender Precision Bass</h3>
              <p className="text-red-700 mb-3 text-sm">
                The original electric bass guitar, introduced in 1951. 
                Deep, fundamental tone that defines rock and pop music.
              </p>
              <ul className="space-y-1 text-red-700 text-sm">
                <li>• Single split-coil pickup</li>
                <li>• Thick, punchy tone</li>
                <li>• Used by: James Jamerson, Paul McCartney</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-yellow-800">Fender Jazz Bass</h3>
              <p className="text-yellow-700 mb-3 text-sm">
                More versatile with two single-coil pickups and a thinner neck. 
                Bright, cutting tone perfect for funk and jazz.
              </p>
              <ul className="space-y-1 text-yellow-700 text-sm">
                <li>• Dual single-coil pickups</li>
                <li>• Bright, articulate tone</li>
                <li>• Used by: Jaco Pastorius, Marcus Miller</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-green-800">Music Man StingRay</h3>
              <p className="text-green-700 mb-3 text-sm">
                Active electronics and distinctive tone. 
                Punchy attack perfect for modern rock and funk.
              </p>
              <ul className="space-y-1 text-green-700 text-sm">
                <li>• Active humbucker pickup</li>
                <li>• Aggressive, modern tone</li>
                <li>• Used by: Flea, Louis Johnson</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-purple-800">Rickenbacker 4003</h3>
              <p className="text-purple-700 mb-3 text-sm">
                Distinctive look and jangly tone. 
                Famous for its use in rock and progressive music.
              </p>
              <ul className="space-y-1 text-purple-700 text-sm">
                <li>• Dual single-coil pickups</li>
                <li>• Bright, trebly character</li>
                <li>• Used by: Chris Squire, Geddy Lee</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Playing Techniques */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Bass Playing Techniques</h2>
          
          <div className="space-y-6">
            {playingStyles.map((style, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{style.style}</h3>
                <p className="text-gray-700 mb-4">{style.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-800">Best Genres:</h4>
                    <div className="flex flex-wrap gap-2">
                      {style.genres.map((genre, genreIndex) => (
                        <span key={genreIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-800">Key Techniques:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      {style.techniques.map((technique, techIndex) => (
                        <li key={techIndex}>• {technique}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Models */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Recommended Bass Guitars</h2>
          
          {bassModels.map((category, index) => (
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
                    {category.basses.map((bass, bassIndex) => (
                      <tr key={bassIndex} className={bassIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 font-medium">{bass.brand}</td>
                        <td className="px-6 py-4">{bass.model}</td>
                        <td className="px-6 py-4 font-semibold text-green-600">{bass.price}</td>
                        <td className="px-6 py-4 text-sm">{bass.features}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </section>

        {/* Bass Amplification */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Bass Amplification</h2>
          
          <div className="bg-indigo-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-indigo-800">Why Bass Amps Are Different</h3>
            <p className="text-indigo-700 mb-4">
              Bass frequencies require more power and larger speakers than guitar amps. 
              A proper bass amp is essential for good tone and adequate volume.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-indigo-800">Combo Amps</h4>
                <ul className="space-y-1 text-indigo-700 text-sm">
                  <li>• All-in-one solution</li>
                  <li>• Good for practice and small gigs</li>
                  <li>• 100-500 watts typical</li>
                  <li>• 12" or 15" speakers common</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-indigo-800">Head & Cabinet</h4>
                <ul className="space-y-1 text-indigo-700 text-sm">
                  <li>• Separate amp head and speaker cab</li>
                  <li>• More power and flexibility</li>
                  <li>• 500-1000+ watts available</li>
                  <li>• Multiple speaker configurations</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Practice (15-50W)</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Fender Rumble 25</li>
                <li>• Ampeg BA-108</li>
                <li>• Orange Crush Bass 25</li>
              </ul>
            </div>
            
            <div className="bg-white border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Small Gigs (100-300W)</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Fender Rumble 200</li>
                <li>• Ampeg BA-210</li>
                <li>• Markbass CMD 121H</li>
              </ul>
            </div>
            
            <div className="bg-white border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Large Venues (500W+)</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Ampeg SVT-4 Pro</li>
                <li>• Gallien-Krueger 1001RB</li>
                <li>• Mesa Boogie Strategy Eight:88</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Famous Bass Players */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Legendary Bass Players</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="font-semibold text-lg mb-2">Rock Legends</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>John Entwistle (The Who)</li>
                <li>John Paul Jones (Led Zeppelin)</li>
                <li>Paul McCartney (Beatles)</li>
                <li>Geddy Lee (Rush)</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="font-semibold text-lg mb-2">Funk Masters</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>James Brown (Various)</li>
                <li>Bootsy Collins</li>
                <li>Larry Graham</li>
                <li>Marcus Miller</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="font-semibold text-lg mb-2">Jazz Virtuosos</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>Jaco Pastorius</li>
                <li>Charles Mingus</li>
                <li>Ron Carter</li>
                <li>Stanley Clarke</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="font-semibold text-lg mb-2">Modern Innovators</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>Flea (Red Hot Chili Peppers)</li>
                <li>Les Claypool (Primus)</li>
                <li>Victor Wooten</li>
                <li>Esperanza Spalding</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Learning Path */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Learning Path for Bass</h2>
          
          <div className="space-y-6">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-green-800">🎯 Beginner (Months 1-6)</h3>
              <div className="grid md:grid-cols-2 gap-4 text-green-700">
                <div>
                  <h4 className="font-semibold mb-2">Technique Basics</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Proper fretting hand position</li>
                    <li>• Fingerstyle plucking technique</li>
                    <li>• Basic timing and rhythm</li>
                    <li>• Simple root note patterns</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Music Theory</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Note names on fretboard</li>
                    <li>• Major scale patterns</li>
                    <li>• Basic chord construction</li>
                    <li>• Reading bass clef notation</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-blue-800">🚀 Intermediate (Months 6-18)</h3>
              <div className="grid md:grid-cols-2 gap-4 text-blue-700">
                <div>
                  <h4 className="font-semibold mb-2">Advanced Techniques</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Walking bass lines</li>
                    <li>• Slap and pop fundamentals</li>
                    <li>• Playing with a pick</li>
                    <li>• Two-handed tapping basics</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Musical Development</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Groove and pocket playing</li>
                    <li>• Song structure awareness</li>
                    <li>• Playing with a drummer</li>
                    <li>• Genre-specific styles</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-purple-800">🎼 Advanced (18+ Months)</h3>
              <div className="grid md:grid-cols-2 gap-4 text-purple-700">
                <div>
                  <h4 className="font-semibold mb-2">Mastery Skills</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Advanced slap techniques</li>
                    <li>• Jazz improvisation</li>
                    <li>• Solo bass arrangements</li>
                    <li>• Extended range techniques</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Professional Skills</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Session playing</li>
                    <li>• Live performance</li>
                    <li>• Music production knowledge</li>
                    <li>• Teaching and mentoring</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="mb-12">
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Explore More Guitar Types</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/lessons/gear/guitars/electric" 
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-blue-600 mb-2">← Electric Guitars</h4>
                <p className="text-sm text-gray-600">Versatile and expressive instruments</p>
              </Link>
              <Link 
                href="/lessons/gear/guitars/classical" 
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-blue-600 mb-2">Classical Guitars →</h4>
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
