import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const acousticFeatures = [
  {
    title: 'Body Shapes',
    items: [
      { name: 'Dreadnought', description: 'Largest body, powerful bass response, versatile' },
      { name: 'Concert/Auditorium', description: 'Balanced tone, comfortable for smaller players' },
      { name: 'Grand Auditorium', description: 'Great for fingerpicking, balanced across frequencies' },
      { name: 'Parlor', description: 'Vintage feel, focused midrange, great for recording' },
      { name: 'Jumbo', description: 'Maximum volume and projection, bold sound' },
    ]
  },
  {
    title: 'Wood Types',
    items: [
      { name: 'Spruce Top', description: 'Bright, clear tone with good projection' },
      { name: 'Cedar Top', description: 'Warm, woody tone with quick response' },
      { name: 'Mahogany Top', description: 'Focused midrange, vintage character' },
      { name: 'Rosewood Back/Sides', description: 'Rich overtones, powerful bass' },
      { name: 'Maple Back/Sides', description: 'Bright, punchy tone with clarity' },
    ]
  }
];

const recommendedModels = [
  {
    category: 'Beginner ($100-400)',
    guitars: [
      { brand: 'Yamaha', model: 'FG830', price: '$200', features: 'Solid spruce top, great value' },
      { brand: 'Fender', model: 'CD-60S', price: '$180', features: 'Easy playability, balanced tone' },
      { brand: 'Epiphone', model: 'DR-100', price: '$120', features: 'Classic dreadnought, affordable' },
    ]
  },
  {
    category: 'Intermediate ($400-1200)',
    guitars: [
      { brand: 'Taylor', model: '114ce', price: '$800', features: 'Electronics, easy action, great for recording' },
      { brand: 'Martin', model: 'D-X2E', price: '$600', features: 'HPL construction, electronics, Martin tone' },
      { brand: 'Gibson', model: 'J-45 Studio', price: '$1000', features: 'Solid woods, vintage character' },
    ]
  },
  {
    category: 'Professional ($1200+)',
    guitars: [
      { brand: 'Martin', model: 'D-28', price: '$3000', features: 'All solid woods, legendary tone' },
      { brand: 'Taylor', model: '814ce', price: '$4000', features: 'Premium tonewoods, Expression System' },
      { brand: 'Gibson', model: 'J-45 Standard', price: '$2500', features: 'Iconic Gibson sound, handcrafted' },
    ]
  }
];

export default function AcousticGuitarPage() {
  return (
    <Layout>
      <Header
        title="Acoustic Guitars"
        subtitle="Master the natural, organic sound of acoustic guitars"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-8 mb-8 not-prose">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Acoustic Guitars: Pure, Natural Sound
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Discover the timeless appeal of acoustic guitars - from intimate fingerpicking 
              to powerful strumming, these instruments need no amplification to move hearts.
            </p>
            <div className="bg-amber-50 rounded-lg p-4">
              <h3 className="font-semibold text-amber-800 mb-2">What Makes Acoustics Special:</h3>
              <ul className="text-amber-700 space-y-1">
                <li>• Natural resonance and projection</li>
                <li>• Intimate, organic sound character</li>
                <li>• Perfect for songwriting and campfires</li>
                <li>• No electricity required - pure portability</li>
                <li>• Rich harmonic complexity from wood resonance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sound Characteristics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Sound Characteristics</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Steel-String Acoustics</h3>
              <ul className="space-y-2 text-green-700">
                <li>• <strong>Bright, crisp tone:</strong> Steel strings provide clarity and punch</li>
                <li>• <strong>Strong projection:</strong> Cuts through mix in band settings</li>
                <li>• <strong>Versatile dynamics:</strong> From gentle fingerpicking to aggressive strumming</li>
                <li>• <strong>Genre flexibility:</strong> Folk, country, rock, pop, blues</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Playing Styles</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• <strong>Strumming:</strong> Rhythm guitar for songs and accompaniment</li>
                <li>• <strong>Fingerpicking:</strong> Intricate melodies and complex arrangements</li>
                <li>• <strong>Flatpicking:</strong> Leads and fast bluegrass-style picking</li>
                <li>• <strong>Percussive:</strong> Body tapping and rhythm techniques</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Body Shapes and Woods */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Construction & Tonewoods</h2>
          
          {acousticFeatures.map((feature, index) => (
            <div key={feature.title} className="mb-8">
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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

        {/* Electronics vs Non-Electronics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Acoustic vs Acoustic-Electric</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-orange-800">Pure Acoustic</h3>
              <div className="space-y-3 text-orange-700">
                <p><strong>Pros:</strong></p>
                <ul className="space-y-1 ml-4">
                  <li>• Lower cost</li>
                  <li>• Pure, natural sound</li>
                  <li>• No electronics to fail</li>
                  <li>• Lighter weight</li>
                </ul>
                <p><strong>Best for:</strong> Home playing, small venues, recording with mics</p>
              </div>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-800">Acoustic-Electric</h3>
              <div className="space-y-3 text-purple-700">
                <p><strong>Pros:</strong></p>
                <ul className="space-y-1 ml-4">
                  <li>• Can be amplified</li>
                  <li>• Great for live performance</li>
                  <li>• Built-in tuners often included</li>
                  <li>• EQ controls</li>
                </ul>
                <p><strong>Best for:</strong> Live performance, recording direct, band settings</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Models */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Recommended Models by Budget</h2>
          
          {recommendedModels.map((category, index) => (
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

        {/* Maintenance Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Care & Maintenance</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-yellow-800">🧼 Daily Care</h3>
              <ul className="space-y-2 text-yellow-700">
                <li>• Wipe down strings after playing</li>
                <li>• Store in a case or on a stand</li>
                <li>• Keep away from extreme temperatures</li>
                <li>• Maintain 45-55% humidity</li>
                <li>• Loosen strings for long storage</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-blue-800">🔧 Periodic Maintenance</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• Change strings every 3-6 months</li>
                <li>• Professional setup annually</li>
                <li>• Check neck relief and intonation</li>
                <li>• Clean and condition fretboard</li>
                <li>• Polish body (avoid getting on strings)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Famous Players */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Legendary Acoustic Players</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="font-semibold text-lg mb-2">Fingerstyle Masters</h3>
              <ul className="space-y-1 text-gray-700">
                <li>Tommy Emmanuel</li>
                <li>Chet Atkins</li>
                <li>Andy McKee</li>
                <li>Kaki King</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="font-semibold text-lg mb-2">Singer-Songwriters</h3>
              <ul className="space-y-1 text-gray-700">
                <li>Bob Dylan</li>
                <li>Neil Young</li>
                <li>Taylor Swift</li>
                <li>Ed Sheeran</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="font-semibold text-lg mb-2">Bluegrass/Country</h3>
              <ul className="space-y-1 text-gray-700">
                <li>Tony Rice</li>
                <li>Norman Blake</li>
                <li>Brad Paisley</li>
                <li>Keith Whitley</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Buying Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Buying Guide</h2>
          
          <div className="bg-indigo-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-indigo-800">🎯 What to Look For</h3>
            <div className="grid md:grid-cols-2 gap-6 text-indigo-700">
              <div>
                <h4 className="font-semibold mb-2">Sound Quality</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Clear, balanced tone across all strings</li>
                  <li>• Good sustain and projection</li>
                  <li>• No buzzing or dead spots</li>
                  <li>• Harmonics ring clearly</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Playability</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Comfortable neck shape and width</li>
                  <li>• Appropriate string action height</li>
                  <li>• Easy fretting without excessive pressure</li>
                  <li>• Good intonation up the neck</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-red-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-red-800">⚠️ Red Flags to Avoid</h3>
            <ul className="space-y-2 text-red-700">
              <li>• High action that makes playing difficult</li>
              <li>• Visible cracks in the top or back</li>
              <li>• Buzzing that can't be fixed with setup</li>
              <li>• Warped or twisted neck</li>
              <li>• Loose or lifting bridge</li>
              <li>• Dead spots or notes that don't ring out</li>
            </ul>
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
                <h4 className="font-semibold text-blue-600 mb-2">Electric Guitars →</h4>
                <p className="text-sm text-gray-600">Versatile and expressive for rock, blues, and jazz</p>
              </Link>
              <Link 
                href="/lessons/gear/guitars/classical" 
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-blue-600 mb-2">Classical Guitars →</h4>
                <p className="text-sm text-gray-600">Nylon strings and traditional techniques</p>
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
