import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const electricFeatures = [
  {
    title: 'Pickup Types',
    items: [
      { name: 'Single-Coil', description: 'Bright, crisp tone with some hum. Classic Stratocaster sound.' },
      { name: 'Humbucker', description: 'Warm, powerful tone with no hum. Great for rock and jazz.' },
      { name: 'P90', description: 'Single-coil with more output. Punchy midrange character.' },
      { name: 'Active', description: 'Battery-powered pickups with high output and EQ control.' },
    ]
  },
  {
    title: 'Body Styles',
    items: [
      { name: 'Solid Body', description: 'Most common. Sustain and feedback resistance.' },
      { name: 'Semi-Hollow', description: 'Some acoustic resonance with electric versatility.' },
      { name: 'Hollow Body', description: 'Maximum acoustic character, prone to feedback.' },
      { name: 'Chambered', description: 'Weight relief with some acoustic properties.' },
    ]
  }
];

const guitarModels = [
  {
    category: 'Beginner ($150-500)',
    guitars: [
      { brand: 'Squier', model: 'Classic Vibe Stratocaster', price: '$400', features: 'Quality Fender design, versatile pickups' },
      { brand: 'Epiphone', model: 'Les Paul Studio', price: '$300', features: 'Humbuckers, classic LP tone' },
      { brand: 'Yamaha', model: 'Pacifica 112V', price: '$350', features: 'HSS configuration, excellent value' },
    ]
  },
  {
    category: 'Intermediate ($500-1500)',
    guitars: [
      { brand: 'Fender', model: 'Player Stratocaster', price: '$800', features: 'Modern Strat with Player series upgrades' },
      { brand: 'Gibson', model: 'Les Paul Studio', price: '$1300', features: 'USA-made, classic Gibson tone' },
      { brand: 'PRS', model: 'SE Custom 24', price: '$900', features: 'Versatile, high-quality Korean construction' },
    ]
  },
  {
    category: 'Professional ($1500+)',
    guitars: [
      { brand: 'Fender', model: 'American Professional II Strat', price: '$1800', features: 'Top-tier Fender with V-Mod pickups' },
      { brand: 'Gibson', model: 'Les Paul Standard', price: '$2800', features: 'Premium USA Gibson with BurstBucker pickups' },
      { brand: 'PRS', model: 'Core Custom 24', price: '$4000', features: 'USA-made PRS with incredible fit and finish' },
    ]
  }
];

const ampRecommendations = [
  {
    category: 'Practice Amps (5-15W)',
    amps: [
      { brand: 'Fender', model: 'Champion 20', price: '$100', features: 'Multiple amp models, effects' },
      { brand: 'Boss', model: 'Katana Mini', price: '$100', features: 'Portable, battery power, great tone' },
      { brand: 'Vox', model: 'Pathfinder 10', price: '$80', features: 'Classic Vox tone, simple controls' },
    ]
  },
  {
    category: 'Small Gigs (15-30W)',
    amps: [
      { brand: 'Fender', model: 'Blues Junior IV', price: '$400', features: 'Tube amp, spring reverb, classic tone' },
      { brand: 'Vox', model: 'AC15C1', price: '$600', features: 'British tone, Celestion speaker' },
      { brand: 'Marshall', model: 'DSL20CR', price: '$500', features: 'Classic Marshall crunch, two channels' },
    ]
  }
];

export default function ElectricGuitarPage() {
  return (
    <Layout>
      <Header
        title="Electric Guitars"
        subtitle="Harness the power and versatility of electric guitars"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-8 mb-8 not-prose">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Electric Guitars: Shape Your Sound
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              From clean jazz tones to screaming metal leads, electric guitars offer 
              unparalleled versatility and the power to cut through any mix.
            </p>
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-2">Electric Guitar Advantages:</h3>
              <ul className="text-blue-700 space-y-1">
                <li>• Incredible tonal variety through amps and effects</li>
                <li>• Perfect for band settings and live performance</li>
                <li>• Lower string action for fast, technical playing</li>
                <li>• Volume control independent of playing dynamics</li>
                <li>• Sustain and feedback control for expressive playing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sound Characteristics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Sound & Versatility</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Clean Tones</h3>
              <ul className="space-y-2 text-green-700">
                <li>• <strong>Jazz:</strong> Warm, smooth hollow-body tones</li>
                <li>• <strong>Funk:</strong> Crisp single-coil attack</li>
                <li>• <strong>Country:</strong> Bright Telecaster twang</li>
                <li>• <strong>R&B:</strong> Smooth Stratocaster cleans</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-orange-800">Crunch & Overdrive</h3>
              <ul className="space-y-2 text-orange-700">
                <li>• <strong>Blues:</strong> Singing sustain and natural compression</li>
                <li>• <strong>Classic Rock:</strong> Warm tube saturation</li>
                <li>• <strong>Alternative:</strong> Modern amp distortion</li>
                <li>• <strong>Punk:</strong> Aggressive, cutting overdrive</li>
              </ul>
            </div>
            
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-800">High Gain</h3>
              <ul className="space-y-2 text-red-700">
                <li>• <strong>Metal:</strong> Tight, aggressive distortion</li>
                <li>• <strong>Progressive:</strong> Clear, articulate high gain</li>
                <li>• <strong>Djent:</strong> Modern, precise attack</li>
                <li>• <strong>Shred:</strong> Singing leads with endless sustain</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pickup Types and Body Styles */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Construction & Electronics</h2>
          
          {electricFeatures.map((feature, index) => (
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

        {/* Classic Models */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Iconic Electric Guitar Models</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-yellow-800">Fender Stratocaster</h3>
              <ul className="space-y-2 text-yellow-700 text-sm">
                <li>• Three single-coil pickups</li>
                <li>• Tremolo bridge system</li>
                <li>• Bright, cutting tone</li>
                <li>• Legends: Hendrix, Gilmour, Clapton</li>
              </ul>
            </div>
            
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-red-800">Gibson Les Paul</h3>
              <ul className="space-y-2 text-red-700 text-sm">
                <li>• Dual humbucker pickups</li>
                <li>• Mahogany body, maple cap</li>
                <li>• Warm, powerful tone</li>
                <li>• Legends: Page, Slash, Bonamassa</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-800">Fender Telecaster</h3>
              <ul className="space-y-2 text-blue-700 text-sm">
                <li>• Two single-coil pickups</li>
                <li>• Fixed bridge design</li>
                <li>• Bright, twangy character</li>
                <li>• Legends: Springsteen, Keith Richards</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-purple-800">Gibson SG</h3>
              <ul className="space-y-2 text-purple-700 text-sm">
                <li>• Dual humbuckers</li>
                <li>• Lightweight, thin body</li>
                <li>• Aggressive, cutting tone</li>
                <li>• Legends: Angus Young, Tony Iommi</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-green-800">PRS Custom 24</h3>
              <ul className="space-y-2 text-green-700 text-sm">
                <li>• Versatile pickup configurations</li>
                <li>• Modern design philosophy</li>
                <li>• Exceptional craftsmanship</li>
                <li>• Used by: Tremonti, Santana</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-indigo-800">Ibanez RG Series</h3>
              <ul className="space-y-2 text-indigo-700 text-sm">
                <li>• Fast, thin necks</li>
                <li>• High-output pickups</li>
                <li>• Perfect for metal and shred</li>
                <li>• Used by: Vai, Satriani, Petrucci</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Recommended Models */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Recommended Electric Guitars</h2>
          
          {guitarModels.map((category, index) => (
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

        {/* Amplifier Basics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Essential: You Need an Amplifier</h2>
          
          <div className="bg-orange-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-orange-800">Why Amps Matter</h3>
            <p className="text-orange-700 mb-4">
              An electric guitar without an amplifier is like a car without an engine. 
              The amp shapes your tone just as much as the guitar itself.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-orange-700">
              <div>
                <h4 className="font-semibold mb-2">Tube Amps</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Warm, natural distortion</li>
                  <li>• Touch-sensitive dynamics</li>
                  <li>• Classic rock and blues tones</li>
                  <li>• More expensive, need maintenance</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Solid State Amps</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Reliable and consistent</li>
                  <li>• Clean headroom</li>
                  <li>• Lower cost and maintenance</li>
                  <li>• Great for beginners</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Amp Recommendations */}
          {ampRecommendations.map((category, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800">{category.category}</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Brand</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Model</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Features</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {category.amps.map((amp, ampIndex) => (
                      <tr key={ampIndex} className={ampIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-4 py-3 font-medium">{amp.brand}</td>
                        <td className="px-4 py-3">{amp.model}</td>
                        <td className="px-4 py-3 font-semibold text-green-600">{amp.price}</td>
                        <td className="px-4 py-3 text-sm">{amp.features}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </section>

        {/* Effects and Pedals */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Effects & Tone Shaping</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-purple-800">Essential Effects</h3>
              <ul className="space-y-3 text-purple-700">
                <li>• <strong>Overdrive/Distortion:</strong> Adds gain and sustain</li>
                <li>• <strong>Reverb:</strong> Spatial ambience and depth</li>
                <li>• <strong>Delay:</strong> Echo effects for atmosphere</li>
                <li>• <strong>Chorus:</strong> Lush, shimmering modulation</li>
                <li>• <strong>Tuner:</strong> Essential for staying in tune</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-blue-800">Effect Chain Order</h3>
              <div className="space-y-2 text-blue-700">
                <div className="text-sm font-mono bg-white rounded p-2">
                  Guitar → Tuner → Overdrive → Modulation → Delay → Reverb → Amp
                </div>
                <p className="text-sm">
                  This is a typical signal chain, though experimentation is encouraged!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Playing Techniques */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Electric Guitar Techniques</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Power Chords</h3>
              <p className="text-gray-700 text-sm mb-2">
                Two or three-note chords that form the backbone of rock music.
              </p>
              <div className="text-xs text-gray-600">Essential for: Rock, punk, metal</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Bending</h3>
              <p className="text-gray-700 text-sm mb-2">
                Pushing strings to change pitch for expressive, vocal-like effects.
              </p>
              <div className="text-xs text-gray-600">Essential for: Blues, rock, lead guitar</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Vibrato</h3>
              <p className="text-gray-700 text-sm mb-2">
                Rapid pitch variations to add emotion and sustain to notes.
              </p>
              <div className="text-xs text-gray-600">Essential for: All styles, especially leads</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Palm Muting</h3>
              <p className="text-gray-700 text-sm mb-2">
                Muffling strings with the picking hand for percussive attack.
              </p>
              <div className="text-xs text-gray-600">Essential for: Metal, punk, rhythm guitar</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Legato</h3>
              <p className="text-gray-700 text-sm mb-2">
                Smooth, connected notes using hammer-ons and pull-offs.
              </p>
              <div className="text-xs text-gray-600">Essential for: Jazz, fusion, shred</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Tremolo/Whammy</h3>
              <p className="text-gray-700 text-sm mb-2">
                Using the tremolo arm to create pitch bends and dives.
              </p>
              <div className="text-xs text-gray-600">Essential for: Rock, metal, surf music</div>
            </div>
          </div>
        </section>

        {/* Maintenance */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Maintenance & Setup</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-yellow-800">🧼 Regular Care</h3>
              <ul className="space-y-2 text-yellow-700">
                <li>• Wipe down after each use</li>
                <li>• Keep electronics clean and dry</li>
                <li>• Check tuning stability regularly</li>
                <li>• Store properly to avoid temperature extremes</li>
                <li>• Use quality cables to avoid signal loss</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-green-800">🔧 Professional Setup</h3>
              <ul className="space-y-2 text-green-700">
                <li>• Action adjustment for comfort</li>
                <li>• Intonation for accurate tuning</li>
                <li>• Pickup height optimization</li>
                <li>• Fret leveling if needed</li>
                <li>• Electronics cleaning and tightening</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="mb-12">
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Explore More Guitar Types</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/lessons/gear/guitars/bass" 
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-blue-600 mb-2">Bass Guitars →</h4>
                <p className="text-sm text-gray-600">The foundation of the rhythm section</p>
              </Link>
              <Link 
                href="/lessons/gear/guitars/acoustic" 
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-blue-600 mb-2">← Acoustic Guitars</h4>
                <p className="text-sm text-gray-600">Natural, unplugged sound</p>
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
