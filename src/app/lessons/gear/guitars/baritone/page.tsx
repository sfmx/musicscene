import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const baritoneFeatures = [
  {
    title: 'Scale Length Options',
    items: [
      { name: '27" Scale', description: 'Shorter baritone scale, closer to standard guitar feel' },
      { name: '28-28.5" Scale', description: 'Most common baritone scale length, balanced tension' },
      { name: '30" Scale', description: 'Extended scale for maximum low-end clarity' },
      { name: 'Multi-Scale/Fanned', description: 'Different scale lengths per string for optimal tension' },
    ]
  },
  {
    title: 'Construction Differences',
    items: [
      { name: 'Reinforced Neck', description: 'Stronger construction to handle increased string tension' },
      { name: 'Larger Body', description: 'Often bigger than standard guitars for better low-end resonance' },
      { name: 'Heavy-Gauge Strings', description: 'Typically .013-.072 or heavier for proper tension' },
      { name: 'Adjusted Bracing', description: 'Internal bracing optimized for lower frequencies' },
    ]
  }
];

const tuningOptions = [
  {
    tuning: 'Standard Baritone',
    notes: 'B-E-A-D-F#-B',
    description: 'Most common baritone tuning. Perfect fourth down from standard guitar.',
    benefits: 'Familiar chord shapes, easy transition from standard guitar'
  },
  {
    tuning: 'Drop A Baritone',
    notes: 'A-E-A-D-F#-B',
    description: 'Baritone version of drop D tuning. Lowest string tuned to A.',
    benefits: 'Power chords on lowest two strings, heavy metal applications'
  },
  {
    tuning: 'Low C Tuning',
    notes: 'C-F-Bb-Eb-G-C',
    description: 'Extended range tuning for maximum low end.',
    benefits: 'Deep, powerful sound, extended range for composition'
  },
  {
    tuning: 'Nashville Tuning',
    notes: 'E-A-D-G-B-E (octaved)',
    description: 'Standard tuning with thinner strings tuned an octave higher.',
    benefits: 'Chimey, bell-like tones, complements standard guitars'
  }
];

const baritoneModels = [
  {
    category: 'Entry Level ($400-1000)',
    guitars: [
      { brand: 'Schecter', model: 'Hellraiser C-VI', price: '$600', features: '6-string baritone, active pickups, 28" scale' },
      { brand: 'ESP', model: 'LTD H-401B', price: '$500', features: 'Solid mahogany body, EMG pickups' },
      { brand: 'Gretsch', model: 'G5260', price: '$400', features: 'Electromatic series, hollow body baritone' },
    ]
  },
  {
    category: 'Professional ($1000-3000)',
    guitars: [
      { brand: 'PRS', model: 'SE 277', price: '$900', features: '7-string baritone, versatile pickups' },
      { brand: 'Fender', model: 'Bass VI', price: '$1200', features: '30" scale, bass/guitar hybrid' },
      { brand: 'Reverend', model: 'Descent H90', price: '$1100', features: 'P90 pickups, 26.75" scale' },
    ]
  },
  {
    category: 'High-End ($3000+)',
    guitars: [
      { brand: 'Gibson', model: 'Flying V Baritone', price: '$3500', features: 'Custom shop quality, 28" scale' },
      { brand: 'Fender', model: 'Custom Shop Bass VI', price: '$4000', features: 'Hand-built, vintage specifications' },
      { brand: 'PRS', model: 'Custom 24 Baritone', price: '$5000', features: 'Core series, premium tonewoods' },
    ]
  }
];

const musicalApplications = [
  {
    genre: 'Metal & Heavy Rock',
    description: 'Baritones excel in heavy music genres where low tunings are essential.',
    techniques: ['Down-tuned riffing', 'Extended range solos', 'Heavy rhythm work', 'Djent and progressive styles'],
    artists: ['Meshuggah', 'Periphery', 'Animals as Leaders', 'TesseracT']
  },
  {
    genre: 'Alternative & Indie',
    description: 'Unique tonal character adds depth to alternative and experimental music.',
    techniques: ['Atmospheric textures', 'Chord voicings', 'Melodic bass lines', 'Ambient soundscapes'],
    artists: ['Cure', 'My Bloody Valentine', 'Sonic Youth', 'Godspeed You! Black Emperor']
  },
  {
    genre: 'Country & Americana',
    description: 'Baritones provide rich, deep accompaniment in country and folk contexts.',
    techniques: ['Fingerpicking patterns', 'Open chord voicings', 'Slide guitar', 'Rhythmic strumming'],
    artists: ['Duane Eddy', 'Pat Green', 'Cross Canadian Ragweed', 'Jason Isbell']
  },
  {
    genre: 'Film & Game Scoring',
    description: 'Perfect for creating atmospheric and cinematic soundscapes.',
    techniques: ['Ambient textures', 'Drone notes', 'Harmonic intervals', 'Effects processing'],
    artists: ['Hans Zimmer', 'Trent Reznor', 'Gustavo Santaolalla', 'Austin Wintory']
  }
];

export default function BaritoneGuitarPage() {
  return (
    <Layout>
      <Header
        title="Baritone Guitars"
        subtitle="Explore the deep, powerful world of extended-range guitars"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-gray-100 to-slate-100 rounded-lg p-8 mb-8 not-prose">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Baritone Guitars: Go Lower, Go Deeper
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Discover the rich, powerful tones that only extended scale lengths and lower tunings 
              can provide. From thunderous metal riffs to haunting cinematic soundscapes.
            </p>
            <div className="bg-slate-50 rounded-lg p-4">
              <h3 className="font-semibold text-slate-800 mb-2">Baritone Advantages:</h3>
              <ul className="text-slate-700 space-y-1">
                <li>• Extended range without additional strings</li>
                <li>• Powerful low-end for heavy music</li>
                <li>• Unique tonal character in standard range</li>
                <li>• Perfect for down-tuned styles</li>
                <li>• Excellent string tension at low tunings</li>
              </ul>
            </div>
          </div>
        </div>

        {/* What Makes a Baritone */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What Defines a Baritone Guitar?</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Scale Length</h3>
              <p className="text-blue-700 mb-4">
                The defining characteristic of baritone guitars is their extended scale length, 
                typically 27-30 inches compared to standard guitars' 24.75-25.5 inches.
              </p>
              <div className="space-y-2 text-blue-700">
                <p><strong>Standard Guitar:</strong> 24.75" - 25.5"</p>
                <p><strong>Baritone Guitar:</strong> 27" - 30"</p>
                <p><strong>Bass Guitar:</strong> 34"</p>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Tuning Range</h3>
              <p className="text-green-700 mb-4">
                Baritones are typically tuned a fourth or fifth lower than standard guitars, 
                providing access to much deeper frequencies while maintaining playability.
              </p>
              <div className="space-y-2 text-green-700">
                <p><strong>Standard Tuning:</strong> E-A-D-G-B-E</p>
                <p><strong>Baritone Standard:</strong> B-E-A-D-F#-B</p>
                <p><strong>Low Range:</strong> Down to A or even lower</p>
              </div>
            </div>
          </div>
        </section>

        {/* Construction & Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Construction & Design</h2>
          
          {baritoneFeatures.map((feature, index) => (
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
          <h2 className="text-3xl font-bold mb-6">Popular Tuning Options</h2>
          
          <div className="space-y-4">
            {tuningOptions.map((tuning, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{tuning.tuning}</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-700">Tuning:</h4>
                    <div className="bg-gray-50 rounded p-3 font-mono text-lg font-semibold">
                      {tuning.notes}
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{tuning.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-700">Benefits:</h4>
                    <p className="text-gray-600 text-sm">{tuning.benefits}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Acoustic vs Electric Baritones */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Acoustic vs Electric Baritones</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-amber-800">Acoustic Baritone</h3>
              <div className="space-y-3 text-amber-700">
                <p><strong>Characteristics:</strong></p>
                <ul className="space-y-1 ml-4 text-sm">
                  <li>• Rich, woody low-end resonance</li>
                  <li>• Perfect for fingerpicking and folk</li>
                  <li>• Natural compression and sustain</li>
                  <li>• Ideal for songwriting and recording</li>
                </ul>
                
                <p><strong>Best for:</strong></p>
                <p className="text-sm">Country, folk, Americana, cinematic music, solo performance</p>
                
                <p><strong>Notable models:</strong></p>
                <p className="text-sm">Martin D-28BTE, Taylor Custom Baritone, Santa Cruz Baritone</p>
              </div>
            </div>
            
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-800">Electric Baritone</h3>
              <div className="space-y-3 text-red-700">
                <p><strong>Characteristics:</strong></p>
                <ul className="space-y-1 ml-4 text-sm">
                  <li>• Aggressive attack and definition</li>
                  <li>• Perfect for heavy, distorted tones</li>
                  <li>• Extended range for lead work</li>
                  <li>• Effects processing possibilities</li>
                </ul>
                
                <p><strong>Best for:</strong></p>
                <p className="text-sm">Metal, progressive rock, experimental music, film scoring</p>
                
                <p><strong>Notable models:</strong></p>
                <p className="text-sm">Fender Bass VI, PRS SE 277, Schecter Hellraiser</p>
              </div>
            </div>
          </div>
        </section>

        {/* Musical Applications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Musical Applications</h2>
          
          <div className="space-y-6">
            {musicalApplications.map((app, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{app.genre}</h3>
                <p className="text-gray-700 mb-4">{app.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-800">Key Techniques:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      {app.techniques.map((technique, techIndex) => (
                        <li key={techIndex}>• {technique}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-800">Notable Artists:</h4>
                    <div className="flex flex-wrap gap-2">
                      {app.artists.map((artist, artistIndex) => (
                        <span key={artistIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {artist}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Fender Bass VI */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Legendary Fender Bass VI</h2>
          
          <div className="bg-teal-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-teal-800">A Unique Instrument</h3>
            <p className="text-teal-700 mb-4">
              The Fender Bass VI, originally introduced in 1961, is perhaps the most famous baritone guitar. 
              With its 30-inch scale and unique tuning (E-E, one octave below standard guitar), 
              it occupies a special place between guitar and bass.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-teal-800">Specifications:</h4>
                <ul className="space-y-1 text-teal-700 text-sm">
                  <li>• 30" scale length</li>
                  <li>• E-A-D-G-B-E tuning (octave below guitar)</li>
                  <li>• Three single-coil pickups</li>
                  <li>• Jaguar-style body and electronics</li>
                  <li>• Floating bridge with vibrato</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-teal-800">Famous Users:</h4>
                <ul className="space-y-1 text-teal-700 text-sm">
                  <li>• The Beatles (various songs)</li>
                  <li>• The Cure (Robert Smith)</li>
                  <li>• Radiohead</li>
                  <li>• Jack White</li>
                  <li>• Peter Hook (New Order, Joy Division)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Models */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Recommended Baritone Guitars</h2>
          
          {baritoneModels.map((category, index) => (
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

        {/* Playing Techniques */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Baritone Playing Techniques</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-purple-800">🎸 Rhythm Techniques</h3>
              <ul className="space-y-2 text-purple-700">
                <li>• <strong>Power chords:</strong> Massive, thick sound in low register</li>
                <li>• <strong>Open chords:</strong> Rich, complex voicings</li>
                <li>• <strong>Palm muting:</strong> Percussive attack for metal styles</li>
                <li>• <strong>Drone notes:</strong> Sustained low notes under melodies</li>
                <li>• <strong>Chord extensions:</strong> Use the extended range for unique voicings</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-orange-800">🎼 Lead Techniques</h3>
              <ul className="space-y-2 text-orange-700">
                <li>• <strong>Extended range solos:</strong> Access to lower melodic register</li>
                <li>• <strong>Harmonic intervals:</strong> Rich two-note harmonies</li>
                <li>• <strong>Slide guitar:</strong> Excellent for atmospheric textures</li>
                <li>• <strong>Ambient picking:</strong> Spacious, cinematic soundscapes</li>
                <li>• <strong>Cross-picking:</strong> Complex fingerpicking patterns</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Setup and Maintenance */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Setup & Maintenance</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-yellow-800">🔧 Setup Considerations</h3>
              <ul className="space-y-2 text-yellow-700">
                <li>• <strong>String gauge:</strong> Heavier strings needed for proper tension</li>
                <li>• <strong>Intonation:</strong> Critical due to extended scale length</li>
                <li>• <strong>Action height:</strong> May need adjustment for comfortable playing</li>
                <li>• <strong>Nut slots:</strong> Must accommodate heavier strings</li>
                <li>• <strong>Bridge adjustment:</strong> Important for tuning stability</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-blue-800">🎯 String Recommendations</h3>
              <div className="space-y-3 text-blue-700">
                <p><strong>Standard Baritone (B-B):</strong></p>
                <p className="text-sm font-mono">.013-.017-.026-.036-.046-.060</p>
                
                <p><strong>Low A Tuning:</strong></p>
                <p className="text-sm font-mono">.014-.018-.028-.042-.056-.072</p>
                
                <p><strong>Bass VI Style:</strong></p>
                <p className="text-sm font-mono">.024-.034-.044-.056-.072-.084</p>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Getting Started with Baritone</h2>
          
          <div className="bg-indigo-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-indigo-800">🎯 For Guitar Players</h3>
            <div className="grid md:grid-cols-2 gap-6 text-indigo-700">
              <div>
                <h4 className="font-semibold mb-2">Familiar Territory</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Same chord shapes, different pitches</li>
                  <li>• Standard guitar techniques apply</li>
                  <li>• Familiar fretboard patterns</li>
                  <li>• Easy transition from 6-string guitar</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">New Considerations</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Heavier string tension requires adjustment</li>
                  <li>• Extended scale affects finger stretches</li>
                  <li>• Different tonal palette to explore</li>
                  <li>• May need to adjust playing style</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-green-800">💡 Practice Tips</h3>
            <ul className="space-y-2 text-green-700">
              <li>• <strong>Start with familiar songs:</strong> Learn songs you know in new tuning</li>
              <li>• <strong>Explore the low end:</strong> Take advantage of the extended range</li>
              <li>• <strong>Experiment with effects:</strong> Reverb and delay sound great on baritones</li>
              <li>• <strong>Play with others:</strong> Baritones complement standard guitars well</li>
              <li>• <strong>Record your playing:</strong> Hear how the baritone sits in a mix</li>
            </ul>
          </div>
        </section>

        {/* Navigation */}
        <section className="mb-12">
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Explore More Guitar Types</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/lessons/gear/guitars/acoustic" 
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-blue-600 mb-2">← Acoustic Guitars</h4>
                <p className="text-sm text-gray-600">Natural, unplugged acoustic sound</p>
              </Link>
              <Link 
                href="/lessons/gear/guitars/12-string" 
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-blue-600 mb-2">← 12-String Guitars</h4>
                <p className="text-sm text-gray-600">Rich, shimmering doubled-string sound</p>
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
