import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const strapTypes = [
  {
    name: 'Leather Straps',
    material: 'Premium leather',
    width: '2-4 inches',
    comfort: 'Excellent',
    durability: 'Very High',
    price: '$30-200+',
    features: ['Ages beautifully', 'Very durable', 'Professional look', 'Comfortable padding'],
    bestFor: 'Professional players, heavy guitars, stage performance',
  },
  {
    name: 'Nylon/Poly Straps',
    material: 'Synthetic fabric',
    width: '2-3 inches',
    comfort: 'Good',
    durability: 'High',
    price: '$10-50',
    features: ['Lightweight', 'Easy to clean', 'Variety of colors', 'Moisture resistant'],
    bestFor: 'Practice, casual playing, budget-conscious players',
  },
  {
    name: 'Neoprene Straps',
    material: 'Wetsuit material',
    width: '2-4 inches',
    comfort: 'Excellent',
    durability: 'High',
    price: '$20-80',
    features: ['Superior padding', 'Non-slip surface', 'Sweat resistant', 'Lightweight'],
    bestFor: 'Long practice sessions, heavy instruments, active players',
  },
  {
    name: 'Vintage Cloth',
    material: 'Woven fabric',
    width: '2-3 inches',
    comfort: 'Moderate',
    durability: 'Moderate',
    price: '$15-60',
    features: ['Classic look', 'Lightweight', 'Vintage aesthetic', 'Breathable'],
    bestFor: 'Vintage instruments, lighter guitars, style preference',
  },
];

const famousStraps = [
  {
    artist: 'Jimi Hendrix',
    strap: 'Psychedelic patterned cloth strap',
    description: 'Iconic colorful patterns that became part of his visual identity',
  },
  {
    artist: 'Slash',
    strap: 'Black leather strap with studs',
    description: 'Wide leather strap matching his rock aesthetic',
  },
  {
    artist: 'John Mayer',
    strap: 'Premium leather with vintage styling',
    description: 'High-quality leather straps from various boutique makers',
  },
  {
    artist: 'Keith Richards',
    strap: 'Simple black leather',
    description: 'Classic, no-nonsense leather strap for decades',
  },
];

export default function StrapsPage() {
  return (
    <Layout>
      <Header
        title="Guitar Straps Guide"
        subtitle="Comfort and style for standing performance - choose the right strap for your playing needs"
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
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-8 mb-8 not-prose">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Guitar Straps: Comfort Meets Style
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              A good guitar strap is essential for comfortable standing play. From basic nylon to 
              premium leather, discover how to choose the perfect strap for your instrument and playing style.
            </p>
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold text-purple-800 mb-2">In This Guide:</h3>
              <ul className="text-purple-700 space-y-1">
                <li>• Strap materials and their characteristics</li>
                <li>• Width, padding, and comfort considerations</li>
                <li>• Proper strap height and adjustment</li>
                <li>• Strap locks and security systems</li>
                <li>• Famous guitarist strap choices</li>
                <li>• Care and maintenance tips</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Straps Matter */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Your Strap Choice Matters</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Comfort & Ergonomics</h3>
              <ul className="space-y-2 text-green-700">
                <li>• <strong>Weight Distribution:</strong> Reduces shoulder and neck strain</li>
                <li>• <strong>Playing Position:</strong> Maintains consistent guitar height</li>
                <li>• <strong>Mobility:</strong> Allows free movement during performance</li>
                <li>• <strong>Stamina:</strong> Enables longer playing sessions</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Performance Benefits</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• <strong>Security:</strong> Prevents drops and accidents</li>
                <li>• <strong>Consistency:</strong> Maintains muscle memory positions</li>
                <li>• <strong>Confidence:</strong> Focus on playing, not holding the guitar</li>
                <li>• <strong>Stage Presence:</strong> Enables dynamic performance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Strap Types */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Types of Guitar Straps</h2>
          
          <div className="space-y-6">
            {strapTypes.map((strap, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{strap.name}</h3>
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                    {strap.price}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Specifications</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li><strong>Material:</strong> {strap.material}</li>
                      <li><strong>Width:</strong> {strap.width}</li>
                      <li><strong>Comfort:</strong> {strap.comfort}</li>
                      <li><strong>Durability:</strong> {strap.durability}</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Key Features</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {strap.features.map((feature, i) => (
                        <li key={i}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Best For</h4>
                    <p className="text-sm text-gray-600">{strap.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Strap Adjustment & Setup */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Proper Strap Setup & Adjustment</h2>
          
          <div className="bg-yellow-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-yellow-800">Finding Your Ideal Height</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Height Guidelines</h4>
                <ul className="space-y-2 text-yellow-700 text-sm">
                  <li>• <strong>Classical Position:</strong> Guitar body at chest level</li>
                  <li>• <strong>Standard Rock:</strong> Guitar at waist to upper hip</li>
                  <li>• <strong>Low Slung:</strong> Guitar at hip level or below</li>
                  <li>• <strong>Match Sitting:</strong> Same height as when seated</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Adjustment Tips</h4>
                <ul className="space-y-2 text-yellow-700 text-sm">
                  <li>• Start higher, adjust down gradually</li>
                  <li>• Ensure comfortable fretting hand position</li>
                  <li>• Check picking hand feels natural</li>
                  <li>• Test with both rhythm and lead playing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Strap Locks & Security */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Strap Locks & Security Systems</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-red-800">Screw-in Locks</h3>
              <p className="text-red-700 mb-3 text-sm">
                Replace existing strap pins with locking mechanisms.
              </p>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Schaller StrapLocks</li>
                <li>• Dunlop Dual Design</li>
                <li>• Most secure option</li>
                <li>• Requires installation</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-orange-800">Clip-on Locks</h3>
              <p className="text-orange-700 mb-3 text-sm">
                Attach to existing strap pins without modification.
              </p>
              <ul className="text-orange-700 text-sm space-y-1">
                <li>• Grolsch beer bottle washers</li>
                <li>• Commercial clip-on locks</li>
                <li>• No guitar modification</li>
                <li>• Easy to use</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-green-800">Built-in Security</h3>
              <p className="text-green-700 mb-3 text-sm">
                Straps with integrated locking mechanisms.
              </p>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Locking strap ends</li>
                <li>• Reinforced attachment</li>
                <li>• No additional hardware</li>
                <li>• Moderate security</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Famous Guitarist Straps */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Iconic Strap Choices</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {famousStraps.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.artist}</h3>
                <p className="font-medium text-gray-700 mb-2">{item.strap}</p>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Selection Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Choosing Your Guitar Strap</h2>
          
          <div className="bg-teal-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-teal-800">Selection Checklist</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-teal-700 mb-2">Consider Your Guitar</h4>
                <ul className="space-y-1 text-teal-700 text-sm">
                  <li>• <strong>Weight:</strong> Heavy guitars need wider straps</li>
                  <li>• <strong>Body shape:</strong> Balance and comfort factors</li>
                  <li>• <strong>Finish:</strong> Avoid strap materials that mark</li>
                  <li>• <strong>Value:</strong> Match strap quality to instrument</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-teal-700 mb-2">Playing Style Factors</h4>
                <ul className="space-y-1 text-teal-700 text-sm">
                  <li>• <strong>Activity level:</strong> Active players need secure straps</li>
                  <li>• <strong>Session length:</strong> Comfort for long practices</li>
                  <li>• <strong>Genre:</strong> Style and aesthetic considerations</li>
                  <li>• <strong>Performance:</strong> Stage reliability requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Care & Maintenance */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Strap Care & Maintenance</h2>
          
          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-purple-800">Keep Your Strap in Top Condition</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Leather Care</h4>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• Clean with leather cleaner</li>
                  <li>• Condition regularly</li>
                  <li>• Avoid extreme temperatures</li>
                  <li>• Store properly when not in use</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Fabric/Nylon Care</h4>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• Machine wash when needed</li>
                  <li>• Air dry completely</li>
                  <li>• Check stitching regularly</li>
                  <li>• Replace if fraying occurs</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">General Maintenance</h4>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• Inspect attachment points</li>
                  <li>• Check locks and hardware</li>
                  <li>• Replace before failure</li>
                  <li>• Have backup straps available</li>
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
              href="/lessons/gear/accessories/picks"
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Guitar Picks</h3>
              <p className="text-sm text-gray-600">Essential for most playing styles</p>
            </Link>
            
            <Link 
              href="/lessons/gear/accessories/stands"
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Guitar Stands</h3>
              <p className="text-sm text-gray-600">Safe storage between sessions</p>
            </Link>
            
            <Link 
              href="/lessons/gear/accessories/cases"
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Cases & Bags</h3>
              <p className="text-sm text-gray-600">Protection for your instrument</p>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </Layout>
  );
}
