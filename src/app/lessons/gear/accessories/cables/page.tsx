import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const cableTypes = [
  {
    name: 'Standard Instrument Cable',
    type: 'TS (Tip-Sleeve)',
    length: '10-20 feet',
    impedance: 'High-Z',
    use: 'Guitar to amp',
    price: '$15-100+',
    features: ['Unbalanced signal', 'Standard 1/4" jacks', 'Basic shielding', 'Most common type'],
    bestFor: 'Direct guitar to amplifier connection, pedal connections',
  },
  {
    name: 'Balanced Cable',
    type: 'TRS (Tip-Ring-Sleeve)',
    length: '6-25 feet',
    impedance: 'Low-Z',
    use: 'Professional audio',
    price: '$20-150+',
    features: ['Balanced signal', 'Noise rejection', 'Longer runs possible', 'Professional grade'],
    bestFor: 'Studio recording, long cable runs, professional setups',
  },
  {
    name: 'Speaker Cable',
    type: 'TS Heavy Gauge',
    length: '4-12 feet',
    impedance: 'Low resistance',
    use: 'Amp head to cabinet',
    price: '$25-200+',
    features: ['Thick copper wire', 'High current capacity', 'Low resistance', 'Durable construction'],
    bestFor: 'Connecting amplifier heads to speaker cabinets',
  },
  {
    name: 'Patch Cable',
    type: 'TS Short',
    length: '6 inches - 3 feet',
    impedance: 'High-Z',
    use: 'Pedal connections',
    price: '$10-50',
    features: ['Short length', 'Flexible', 'Right-angle options', 'Space efficient'],
    bestFor: 'Connecting effects pedals in pedalboard setups',
  },
];

const cableSpecs = [
  {
    gauge: '20 AWG',
    resistance: 'Higher',
    capacitance: 'Lower',
    use: 'Short runs, budget cables',
    toneEffect: 'Brighter, less bass',
  },
  {
    gauge: '22 AWG',
    resistance: 'Medium',
    capacitance: 'Medium',
    use: 'General purpose, most common',
    toneEffect: 'Balanced frequency response',
  },
  {
    gauge: '24 AWG',
    resistance: 'Lower',
    capacitance: 'Higher',
    use: 'High-end cables, longer runs',
    toneEffect: 'Warmer, more bass',
  },
];

const famousCables = [
  {
    brand: 'Monster Cable',
    model: 'Rock Series',
    users: 'Many 80s/90s rock stars',
    features: 'Heavy marketing, thick construction',
  },
  {
    brand: 'George L\'s',
    model: 'Custom cables',
    users: 'Pedal enthusiasts, pros',
    features: 'Low capacitance, custom lengths',
  },
  {
    brand: 'Mogami',
    model: '2524',
    users: 'Studio professionals',
    features: 'Studio standard, excellent shielding',
  },
  {
    brand: 'Planet Waves',
    model: 'American Stage',
    users: 'Touring musicians',
    features: 'Lifetime warranty, road-tested',
  },
];

export default function CablesPage() {
  return (
    <Layout>
      <Header
        title="Guitar Cables Guide"
        subtitle="Connect your gear with confidence - understanding cables, quality, and tone impact"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="mb-8">
          <Link 
            href="/lessons/gear/accessories" 
            className="text-teal-600 hover:text-teal-800 font-medium"
          >
            ← Back to Accessories
          </Link>
        </nav>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-8 mb-8 not-prose">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Guitar Cables: Your Signal Chain Foundation
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Often overlooked but crucial to your sound, cables are the lifeline of your signal. 
              Learn how to choose quality cables that preserve your tone and last for years.
            </p>
            <div className="bg-red-50 rounded-lg p-4">
              <h3 className="font-semibold text-red-800 mb-2">In This Guide:</h3>
              <ul className="text-red-700 space-y-1">
                <li>• Cable types and their specific uses</li>
                <li>• How cable quality affects your tone</li>
                <li>• Length considerations and signal loss</li>
                <li>• Balanced vs. unbalanced connections</li>
                <li>• Professional cable management</li>
                <li>• Troubleshooting cable problems</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Cables Matter */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Cable Quality Matters</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-yellow-800">Signal Integrity</h3>
              <ul className="space-y-2 text-yellow-700">
                <li>• <strong>Frequency Response:</strong> Preserves your guitar's natural tone</li>
                <li>• <strong>Signal Strength:</strong> Maintains output level to your amp</li>
                <li>• <strong>Noise Rejection:</strong> Shields from electromagnetic interference</li>
                <li>• <strong>Clarity:</strong> Prevents signal degradation and loss</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Reliability & Performance</h3>
              <ul className="space-y-2 text-green-700">
                <li>• <strong>Durability:</strong> Withstands regular use and movement</li>
                <li>• <strong>Connection Quality:</strong> Reliable plugs and jacks</li>
                <li>• <strong>Flexibility:</strong> Easy to handle and position</li>
                <li>• <strong>Longevity:</strong> Years of dependable service</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-6 mt-6">
            <h3 className="text-lg font-semibold mb-3 text-red-800">⚠️ Common Cable Problems</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Signal Issues</h4>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Intermittent connection</li>
                  <li>• Crackling and noise</li>
                  <li>• Signal dropout</li>
                  <li>• Reduced output level</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Physical Damage</h4>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Broken solder joints</li>
                  <li>• Damaged plugs</li>
                  <li>• Internal wire breaks</li>
                  <li>• Bent or loose jacks</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Tonal Problems</h4>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• High-frequency loss</li>
                  <li>• Muddy or dull tone</li>
                  <li>• Reduced dynamics</li>
                  <li>• Loss of clarity</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cable Types */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Types of Guitar Cables</h2>
          
          <div className="space-y-6">
            {cableTypes.map((cable, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{cable.name}</h3>
                    <p className="text-sm text-gray-600">{cable.type} • {cable.use}</p>
                  </div>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    {cable.price}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Specifications</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li><strong>Type:</strong> {cable.type}</li>
                      <li><strong>Length:</strong> {cable.length}</li>
                      <li><strong>Impedance:</strong> {cable.impedance}</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Key Features</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {cable.features.map((feature, i) => (
                        <li key={i}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Best Applications</h4>
                    <p className="text-sm text-gray-600">{cable.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cable Construction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Cable Construction & Specifications</h2>
          
          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-blue-800">Wire Gauge & Tone Impact</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-blue-200">
                    <th className="text-left py-2 text-blue-800">Wire Gauge</th>
                    <th className="text-left py-2 text-blue-800">Resistance</th>
                    <th className="text-left py-2 text-blue-800">Capacitance</th>
                    <th className="text-left py-2 text-blue-800">Best Use</th>
                    <th className="text-left py-2 text-blue-800">Tone Effect</th>
                  </tr>
                </thead>
                <tbody>
                  {cableSpecs.map((spec, index) => (
                    <tr key={index} className="border-b border-blue-100">
                      <td className="py-2 text-blue-700 font-medium">{spec.gauge}</td>
                      <td className="py-2 text-blue-700">{spec.resistance}</td>
                      <td className="py-2 text-blue-700">{spec.capacitance}</td>
                      <td className="py-2 text-blue-700">{spec.use}</td>
                      <td className="py-2 text-blue-700">{spec.toneEffect}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-purple-800">Shielding Types</h3>
              <ul className="space-y-2 text-purple-700 text-sm">
                <li>• <strong>Braided Shield:</strong> Excellent coverage, flexible</li>
                <li>• <strong>Spiral Shield:</strong> Good flexibility, lower coverage</li>
                <li>• <strong>Foil Shield:</strong> 100% coverage, less flexible</li>
                <li>• <strong>Combination:</strong> Foil + braid for best protection</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-green-800">Connector Quality</h3>
              <ul className="space-y-2 text-green-700 text-sm">
                <li>• <strong>Neutrik:</strong> Professional standard, very reliable</li>
                <li>• <strong>Switchcraft:</strong> USA made, excellent quality</li>
                <li>• <strong>Amphenol:</strong> Military grade, extremely durable</li>
                <li>• <strong>G&H:</strong> Vintage-style, good quality</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Length & Signal Considerations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Cable Length & Signal Loss</h2>
          
          <div className="bg-orange-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-orange-800">Finding the Right Length</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">Short Cables (6-12 ft)</h4>
                <ul className="space-y-1 text-orange-700 text-sm">
                  <li>• <strong>Pros:</strong> Best tone preservation</li>
                  <li>• <strong>Pros:</strong> Lower capacitance</li>
                  <li>• <strong>Cons:</strong> Limited movement</li>
                  <li>• <strong>Best for:</strong> Studio, seated playing</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">Medium Cables (15-20 ft)</h4>
                <ul className="space-y-1 text-orange-700 text-sm">
                  <li>• <strong>Pros:</strong> Good balance of tone/mobility</li>
                  <li>• <strong>Pros:</strong> Adequate movement range</li>
                  <li>• <strong>Cons:</strong> Slight signal loss</li>
                  <li>• <strong>Best for:</strong> Most live situations</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">Long Cables (25+ ft)</h4>
                <ul className="space-y-1 text-orange-700 text-sm">
                  <li>• <strong>Pros:</strong> Maximum stage mobility</li>
                  <li>• <strong>Cons:</strong> Noticeable signal loss</li>
                  <li>• <strong>Cons:</strong> Higher capacitance</li>
                  <li>• <strong>Best for:</strong> Large stages, wireless backup</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Brands */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Professional Cable Brands</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {famousCables.map((cable, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{cable.brand}</h3>
                <p className="font-medium text-gray-700 mb-2">{cable.model}</p>
                <p className="text-sm text-gray-600 mb-2"><strong>Popular with:</strong> {cable.users}</p>
                <p className="text-sm text-gray-600">{cable.features}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cable Management */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Cable Management & Care</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-teal-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-teal-800">Proper Storage</h3>
              <ul className="space-y-2 text-teal-700 text-sm">
                <li>• <strong>Over-Under Wrapping:</strong> Prevents cable memory</li>
                <li>• <strong>Loose Coiling:</strong> Avoid tight wraps</li>
                <li>• <strong>Cable Bags:</strong> Protect from damage</li>
                <li>• <strong>Separate Storage:</strong> Keep power and audio apart</li>
                <li>• <strong>Label Cables:</strong> Identify length and purpose</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-indigo-800">Live Performance Tips</h3>
              <ul className="space-y-2 text-indigo-700 text-sm">
                <li>• <strong>Cable Routing:</strong> Away from foot traffic</li>
                <li>• <strong>Tape Down:</strong> Secure at critical points</li>
                <li>• <strong>Backup Cables:</strong> Always have spares</li>
                <li>• <strong>Quick Check:</strong> Test before every show</li>
                <li>• <strong>Easy Access:</strong> Keep backups accessible</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Cable Troubleshooting</h2>
          
          <div className="bg-red-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-red-800">Common Problems & Solutions</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Intermittent Signal</h4>
                <ul className="space-y-1 text-red-700 text-sm">
                  <li>• Check plug connection quality</li>
                  <li>• Clean jack contacts</li>
                  <li>• Test cable with different gear</li>
                  <li>• Look for internal breaks</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Noise & Crackling</h4>
                <ul className="space-y-1 text-red-700 text-sm">
                  <li>• Check for damaged shielding</li>
                  <li>• Ensure proper grounding</li>
                  <li>• Keep away from power sources</li>
                  <li>• Replace if shield is compromised</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Selection Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Choosing the Right Cable</h2>
          
          <div className="bg-yellow-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-yellow-800">Selection Checklist</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Budget Guidelines</h4>
                <ul className="space-y-1 text-yellow-700 text-sm">
                  <li>• <strong>$15-30:</strong> Basic quality cables</li>
                  <li>• <strong>$30-60:</strong> Good performance cables</li>
                  <li>• <strong>$60-100+:</strong> Professional grade</li>
                  <li>• <strong>Investment:</strong> Buy quality once</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Length Planning</h4>
                <ul className="space-y-1 text-yellow-700 text-sm">
                  <li>• Measure your typical setup</li>
                  <li>• Add 3-4 feet for movement</li>
                  <li>• Consider multiple lengths</li>
                  <li>• Don't buy longer than needed</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Quality Indicators</h4>
                <ul className="space-y-1 text-yellow-700 text-sm">
                  <li>• Lifetime warranty coverage</li>
                  <li>• Quality connector brands</li>
                  <li>• Proper shielding specs</li>
                  <li>• Professional endorsements</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Accessories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Related Accessories</h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              href="/lessons/gear/accessories/tuners"
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Tuners</h3>
              <p className="text-sm text-gray-600">Keep your signal chain in tune</p>
            </Link>
            
            <Link 
              href="/lessons/gear/accessories/straps"
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Guitar Straps</h3>
              <p className="text-sm text-gray-600">Comfort for standing performance</p>
            </Link>
            
            <Link 
              href="/lessons/gear/accessories/cases"
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Cases & Bags</h3>
              <p className="text-sm text-gray-600">Protection for your gear</p>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </Layout>
  );
}
