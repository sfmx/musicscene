import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const classicalFeatures = [
  {
    title: 'Construction Details',
    items: [
      { name: 'Nylon Strings', description: 'Gentle on fingers, warm tone, traditional sound' },
      { name: 'Wide Neck', description: 'Usually 2" at nut, accommodates fingerstyle technique' },
      { name: 'Flat Fretboard', description: 'No radius for classical playing position' },
      { name: 'Traditional Bridge', description: 'Tie-block system for string attachment' },
    ]
  },
  {
    title: 'Wood Selection',
    items: [
      { name: 'Spruce Top', description: 'Most common, bright and responsive' },
      { name: 'Cedar Top', description: 'Warmer, immediate response, popular choice' },
      { name: 'Rosewood Back/Sides', description: 'Rich overtones, traditional choice' },
      { name: 'Cypress Back/Sides', description: 'Flamenco favorite, bright and percussive' },
    ]
  }
];

const classicalModels = [
  {
    category: 'Student ($200-800)',
    guitars: [
      { brand: 'Yamaha', model: 'C40', price: '$150', features: 'Solid spruce top, perfect starter guitar' },
      { brand: 'Córdoba', model: 'C3M', price: '$300', features: 'All-mahogany construction, warm tone' },
      { brand: 'Alhambra', model: '1C', price: '$600', features: 'Spanish-made, solid cedar top' },
    ]
  },
  {
    category: 'Intermediate ($800-2500)',
    guitars: [
      { brand: 'Yamaha', model: 'GC22S', price: '$1200', features: 'All solid woods, professional tone' },
      { brand: 'Córdoba', model: 'C7 SP', price: '$900', features: 'Solid spruce top, European spruce' },
      { brand: 'Alhambra', model: '4P', price: '$1800', features: 'Cedar top, Indian rosewood, excellent value' },
    ]
  },
  {
    category: 'Professional ($2500+)',
    guitars: [
      { brand: 'Ramirez', model: '1A', price: '$8000+', features: 'Legendary Spanish maker, concert quality' },
      { brand: 'Hauser', model: 'III', price: '$15000+', features: 'German tradition, incredible craftsmanship' },
      { brand: 'Smallman', model: 'Concert', price: '$20000+', features: 'Australian innovation, lattice bracing' },
    ]
  }
];

const playingTechniques = [
  {
    technique: 'Rest Stroke (Apoyando)',
    description: 'Finger plucks through string and rests on next string',
    benefits: ['Powerful, focused tone', 'Good for melodies', 'Traditional technique'],
    usage: 'Scales, single-note passages, emphasized notes'
  },
  {
    technique: 'Free Stroke (Tirando)',
    description: 'Finger plucks string without touching adjacent strings',
    benefits: ['Allows chord playing', 'Lighter touch', 'More versatile'],
    usage: 'Arpeggios, chords, rapid passages'
  },
  {
    technique: 'Tremolo',
    description: 'Rapid repetition of single note with a-m-i fingers',
    benefits: ['Creates sustained melody effect', 'Beautiful classical sound', 'Advanced expression'],
    usage: 'Romantic pieces, Spanish repertoire'
  },
  {
    technique: 'Rasgueado',
    description: 'Flamenco strumming technique with multiple fingers',
    benefits: ['Percussive rhythm', 'Flamenco authenticity', 'Dynamic expression'],
    usage: 'Flamenco music, rhythmic accompaniment'
  }
];

const repertoireCategories = [
  {
    period: 'Renaissance & Baroque',
    composers: ['John Dowland', 'Gaspar Sanz', 'Robert de Visée', 'Sylvius Leopold Weiss'],
    characteristics: 'Lute transcriptions, contrapuntal textures, dance forms',
    keyWorks: ['Dowland Lute Songs', 'Bach BWV 996-1000', 'Weiss Sonatas']
  },
  {
    period: 'Classical & Romantic',
    composers: ['Fernando Sor', 'Mauro Giuliani', 'Francisco Tárrega', 'Napoléon Coste'],
    characteristics: 'Guitar-specific compositions, technical studies, salon pieces',
    keyWorks: ['Sor Studies', 'Giuliani Concertos', 'Tárrega Recuerdos de la Alhambra']
  },
  {
    period: 'Modern & Contemporary',
    composers: ['Heitor Villa-Lobos', 'Leo Brouwer', 'Joaquín Rodrigo', 'Roland Dyens'],
    characteristics: 'Extended techniques, world music influences, avant-garde approaches',
    keyWorks: ['Villa-Lobos Preludes', 'Rodrigo Concierto de Aranjuez', 'Brouwer Études']
  }
];

export default function ClassicalGuitarPage() {
  return (
    <Layout>
      <Header
        title="Classical Guitars"
        subtitle="Master the art of traditional guitar technique and repertoire"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-lg p-8 mb-8 not-prose">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Classical Guitar: The Art of Finger Mastery
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Discover the refined world of classical guitar, where centuries of tradition 
              meet sophisticated technique to create some of music's most beautiful sounds.
            </p>
            <div className="bg-amber-50 rounded-lg p-4">
              <h3 className="font-semibold text-amber-800 mb-2">Classical Guitar Hallmarks:</h3>
              <ul className="text-amber-700 space-y-1">
                <li>• Nylon strings for warm, mellow tone</li>
                <li>• Fingerstyle technique without picks</li>
                <li>• Wide neck for complex fingerings</li>
                <li>• Rich classical and flamenco repertoire</li>
                <li>• Emphasis on proper posture and technique</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Classical vs Steel String */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Classical vs Steel-String Acoustic</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Classical Guitar</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• <strong>Strings:</strong> Nylon (trebles) and wound nylon/silver (basses)</li>
                <li>• <strong>Neck:</strong> Wide (2" at nut), flat fretboard</li>
                <li>• <strong>Sound:</strong> Warm, mellow, intimate</li>
                <li>• <strong>Technique:</strong> Fingerstyle only, classical position</li>
                <li>• <strong>Repertoire:</strong> Classical, flamenco, bossa nova</li>
                <li>• <strong>Volume:</strong> Quieter, perfect for solo performance</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Steel-String Acoustic</h3>
              <ul className="space-y-2 text-green-700">
                <li>• <strong>Strings:</strong> Steel core with bronze/phosphor bronze wrap</li>
                <li>• <strong>Neck:</strong> Narrower (1.75" typical), radiused fretboard</li>
                <li>• <strong>Sound:</strong> Bright, projective, cutting</li>
                <li>• <strong>Technique:</strong> Picks, strumming, various positions</li>
                <li>• <strong>Repertoire:</strong> Folk, country, rock, pop</li>
                <li>• <strong>Volume:</strong> Louder, cuts through band mix</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Construction and Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Construction & Design</h2>
          
          {classicalFeatures.map((feature, index) => (
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

        {/* Playing Position */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Classical Playing Position</h2>
          
          <div className="bg-purple-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-purple-800">Traditional Posture</h3>
            <div className="grid md:grid-cols-2 gap-6 text-purple-700">
              <div>
                <h4 className="font-semibold mb-2">Body Position</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Sit on front edge of chair</li>
                  <li>• Back straight, relaxed shoulders</li>
                  <li>• Left foot elevated on footstool</li>
                  <li>• Guitar rests on left thigh</li>
                  <li>• Guitar at 45-degree angle</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Hand Position</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Left thumb behind neck, not wrapped</li>
                  <li>• Right hand curved, fingers approach strings at angle</li>
                  <li>• Wrist straight, not bent</li>
                  <li>• Fingertips perpendicular to strings</li>
                  <li>• Relaxed, natural movement</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-yellow-800">💡 Modern Alternatives</h3>
            <p className="text-yellow-700 mb-3">
              Many players now use guitar supports, cushions, or straps to achieve 
              the proper playing angle without a footstool, reducing strain.
            </p>
            <ul className="space-y-1 text-yellow-700 text-sm">
              <li>• Ergoplay or A-Frame supports</li>
              <li>• Cushions and pillows</li>
              <li>• Classical guitar straps</li>
              <li>• Adjustable height chairs</li>
            </ul>
          </div>
        </section>

        {/* Playing Techniques */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Essential Techniques</h2>
          
          <div className="space-y-6">
            {playingTechniques.map((tech, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{tech.technique}</h3>
                <p className="text-gray-700 mb-4">{tech.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-800">Benefits:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      {tech.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex}>• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-800">Best Used For:</h4>
                    <p className="text-gray-600 text-sm">{tech.usage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Classical Repertoire */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Classical Guitar Repertoire</h2>
          
          <div className="space-y-6">
            {repertoireCategories.map((period, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{period.period}</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-700">Key Composers:</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {period.composers.map((composer, composerIndex) => (
                        <span key={composerIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                          {composer}
                        </span>
                      ))}
                    </div>
                    
                    <h4 className="font-semibold mb-2 text-gray-700">Essential Works:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      {period.keyWorks.map((work, workIndex) => (
                        <li key={workIndex}>• {work}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-700">Characteristics:</h4>
                    <p className="text-gray-600 text-sm">{period.characteristics}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Flamenco Connection */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Flamenco Guitar</h2>
          
          <div className="bg-red-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-red-800">The Spanish Tradition</h3>
            <p className="text-red-700 mb-4">
              Flamenco guitar shares the nylon-string construction of classical guitar 
              but emphasizes rhythm, percussion, and passionate expression.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-red-800">Flamenco Differences:</h4>
                <ul className="space-y-1 text-red-700 text-sm">
                  <li>• Lower string action for percussive effects</li>
                  <li>• Cypress back/sides for brighter tone</li>
                  <li>• Tap plates (golpeadores) to protect top</li>
                  <li>• More aggressive playing style</li>
                  <li>• Emphasis on rhythm and passion</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-red-800">Key Techniques:</h4>
                <ul className="space-y-1 text-red-700 text-sm">
                  <li>• Rasgueado (flamenco strumming)</li>
                  <li>• Golpe (percussive tapping)</li>
                  <li>• Alzapúa (thumb technique)</li>
                  <li>• Picado (fast scale passages)</li>
                  <li>• Tremolo (rapid note repetition)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Models */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Recommended Classical Guitars</h2>
          
          {classicalModels.map((category, index) => (
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

        {/* Learning Path */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Classical Guitar Learning Path</h2>
          
          <div className="space-y-6">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-green-800">🎯 Foundation (Months 1-12)</h3>
              <div className="grid md:grid-cols-2 gap-4 text-green-700">
                <div>
                  <h4 className="font-semibold mb-2">Technique</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Proper posture and hand position</li>
                    <li>• Rest stroke and free stroke</li>
                    <li>• Basic scales and arpeggios</li>
                    <li>• Simple chord progressions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Repertoire</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Beginner method books (Carcassi, etc.)</li>
                    <li>• Simple classical pieces</li>
                    <li>• Folk song arrangements</li>
                    <li>• Basic sight-reading</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-blue-800">🚀 Development (Years 2-3)</h3>
              <div className="grid md:grid-cols-2 gap-4 text-blue-700">
                <div>
                  <h4 className="font-semibold mb-2">Advanced Technique</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Barre chords and advanced fingerings</li>
                    <li>• Tremolo technique</li>
                    <li>• Advanced arpeggios and scales</li>
                    <li>• Dynamic control and expression</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Intermediate Repertoire</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Sor studies and sonatinas</li>
                    <li>• Bach lute suites (easier movements)</li>
                    <li>• Villa-Lobos Preludes</li>
                    <li>• Spanish pieces (Tárrega)</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-purple-800">🎼 Mastery (Years 4+)</h3>
              <div className="grid md:grid-cols-2 gap-4 text-purple-700">
                <div>
                  <h4 className="font-semibold mb-2">Advanced Skills</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Concert-level technique</li>
                    <li>• Extended techniques</li>
                    <li>• Interpretation and style</li>
                    <li>• Performance preparation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Advanced Repertoire</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Major concertos (Rodrigo, etc.)</li>
                    <li>• Complete Bach lute suites</li>
                    <li>• Modern masterworks</li>
                    <li>• Personal interpretation development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Practice Strategy</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-yellow-800">🎯 Effective Practice</h3>
              <ul className="space-y-2 text-yellow-700">
                <li>• <strong>Slow practice:</strong> Build muscle memory correctly</li>
                <li>• <strong>Metronome use:</strong> Develop steady rhythm</li>
                <li>• <strong>Repetition:</strong> Perfect small sections before combining</li>
                <li>• <strong>Mental practice:</strong> Study scores away from guitar</li>
                <li>• <strong>Recording:</strong> Listen to your playing objectively</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-blue-800">🧘 Physical Wellness</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• <strong>Posture breaks:</strong> Avoid strain and injury</li>
                <li>• <strong>Hand exercises:</strong> Maintain flexibility</li>
                <li>• <strong>Gradual increase:</strong> Build endurance slowly</li>
                <li>• <strong>Proper warm-up:</strong> Scales and technical exercises</li>
                <li>• <strong>Relaxation:</strong> Stay loose and natural</li>
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
                href="/lessons/gear/guitars/12-string" 
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-blue-600 mb-2">12-String Guitars →</h4>
                <p className="text-sm text-gray-600">Rich, shimmering acoustic sound</p>
              </Link>
              <Link 
                href="/lessons/gear/guitars/bass" 
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-blue-600 mb-2">← Bass Guitars</h4>
                <p className="text-sm text-gray-600">The foundation of the rhythm section</p>
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
