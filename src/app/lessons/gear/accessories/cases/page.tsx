import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const caseTypes = [
  {
    name: 'Hard Cases',
    protection: 'Maximum',
    weight: 'Heavy',
    price: '$100-500+',
    travel: 'Excellent',
    features: ['Rigid shell construction', 'Plush interior lining', 'Multiple latches', 'Lockable'],
    pros: ['Ultimate protection', 'Professional appearance', 'Stackable', 'Security locks'],
    cons: ['Heavy weight', 'Bulky storage', 'Higher cost', 'Less flexibility'],
    bestFor: 'Expensive guitars, air travel, professional touring, long-term storage',
  },
  {
    name: 'Soft Gig Bags',
    protection: 'Good',
    weight: 'Light',
    price: '$30-200',
    travel: 'Good',
    features: ['Padded fabric construction', 'Shoulder straps', 'External pockets', 'Lightweight'],
    pros: ['Lightweight', 'Storage pockets', 'Easy to carry', 'Affordable'],
    cons: ['Less protection', 'Not stackable', 'Wear over time', 'Limited security'],
    bestFor: 'Regular transport, local gigs, practice sessions, budget protection',
  },
  {
    name: 'Hybrid Cases',
    protection: 'Very Good',
    weight: 'Medium',
    price: '$150-400',
    travel: 'Very Good',
    features: ['Semi-rigid construction', 'Reinforced corners', 'Backpack straps', 'Weather resistance'],
    pros: ['Good protection', 'Manageable weight', 'Versatile carrying', 'Weather resistant'],
    cons: ['Compromise solution', 'More expensive than soft', 'Still bulkier than gig bags'],
    bestFor: 'Frequent gigging, moderate travel, versatile protection needs',
  },
  {
    name: 'Flight Cases',
    protection: 'Maximum+',
    weight: 'Very Heavy',
    price: '$300-1000+',
    travel: 'Airline Safe',
    features: ['ATA specifications', 'Wheels and handles', 'TSA locks', 'Shock absorption'],
    pros: ['Airline approved', 'Professional touring', 'Ultimate protection', 'Organized storage'],
    cons: ['Very expensive', 'Extremely heavy', 'Overkill for most', 'Requires storage space'],
    bestFor: 'Professional touring, airline travel, extremely valuable instruments',
  },
];

const caseFeatures = [
  {
    feature: 'Interior Padding',
    importance: 'Critical',
    options: ['Plush velvet', 'Dense foam', 'Custom molded', 'Removable padding'],
    consideration: 'Protects finish and prevents movement inside case',
  },
  {
    feature: 'Neck Support',
    importance: 'Critical',
    options: ['Padded block', 'Adjustable support', 'Custom cradle', 'Reinforced area'],
    consideration: 'Prevents neck stress and headstock damage',
  },
  {
    feature: 'Storage Compartments',
    importance: 'Convenient',
    options: ['Accessory pockets', 'Music storage', 'Cable compartments', 'Pick holders'],
    consideration: 'Keeps accessories organized and readily available',
  },
  {
    feature: 'Carrying System',
    importance: 'Important',
    options: ['Shoulder straps', 'Backpack style', 'Handle grips', 'Wheeled options'],
    consideration: 'Affects comfort and ease of transport',
  },
];

const famousCases = [
  {
    brand: 'Gibson',
    model: 'Historic Cases',
    feature: 'Vintage-correct styling and protection',
    users: 'Collectors and vintage guitar owners',
  },
  {
    brand: 'TKL',
    model: 'Professional Cases',
    feature: 'High-quality construction, great protection',
    users: 'Professional musicians and studios',
  },
  {
    brand: 'Gator',
    model: 'Transit Series',
    feature: 'Lightweight with excellent protection',
    users: 'Touring musicians and working players',
  },
  {
    brand: 'SKB',
    model: 'Flight Cases',
    feature: 'Military-grade protection for air travel',
    users: 'International touring acts',
  },
];

export default function CasesPage() {
  return (
    <Layout>
      <Header
        title="Guitar Cases & Bags Guide"
        subtitle="Protect your investment - choosing the right case for your guitar and lifestyle"
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
        <div className="bg-gradient-to-r from-indigo-100 to-blue-100 rounded-lg p-8 mb-8 not-prose">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Cases & Bags: Protecting Your Investment
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Your guitar deserves proper protection. From basic gig bags to professional flight cases, 
              learn how to choose the right protection for your instrument and playing situation.
            </p>
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-2">In This Guide:</h3>
              <ul className="text-blue-700 space-y-1">
                <li>• Hard cases vs. soft bags comparison</li>
                <li>• Protection levels and travel considerations</li>
                <li>• Essential features and quality indicators</li>
                <li>• Sizing and fit for different guitar types</li>
                <li>• Professional case recommendations</li>
                <li>• Care and maintenance of cases</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Protection Matters */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Proper Protection Matters</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-800">Common Guitar Damage</h3>
              <ul className="space-y-2 text-red-700">
                <li>• <strong>Finish Damage:</strong> Scratches, dents, and chips</li>
                <li>• <strong>Structural Issues:</strong> Cracks in body or neck</li>
                <li>• <strong>Hardware Problems:</strong> Bent tuners, damaged electronics</li>
                <li>• <strong>Environmental:</strong> Temperature and humidity damage</li>
                <li>• <strong>Impact Damage:</strong> Drops and collisions</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Protection Benefits</h3>
              <ul className="space-y-2 text-green-700">
                <li>• <strong>Value Preservation:</strong> Maintains resale value</li>
                <li>• <strong>Playability:</strong> Prevents setup and intonation issues</li>
                <li>• <strong>Peace of Mind:</strong> Transport without worry</li>
                <li>• <strong>Professional Image:</strong> Organized and prepared appearance</li>
                <li>• <strong>Storage:</strong> Safe keeping between sessions</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6 mt-6">
            <h3 className="text-lg font-semibold mb-3 text-yellow-800">💰 Cost of Repairs vs. Protection</h3>
            <p className="text-yellow-700 mb-3">
              A quality case costs much less than repairing damage. Consider these typical repair costs:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Minor Repairs</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Finish touch-up: $50-150</li>
                  <li>• Nut replacement: $75-200</li>
                  <li>• Tuner repair: $30-100</li>
                  <li>• Setup adjustment: $50-150</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Major Repairs</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Neck reset: $300-800</li>
                  <li>• Crack repair: $200-600</li>
                  <li>• Headstock repair: $300-1000</li>
                  <li>• Electronics repair: $100-400</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Prevention Cost</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Quality gig bag: $50-150</li>
                  <li>• Hard case: $150-400</li>
                  <li>• Flight case: $300-800</li>
                  <li>• Insurance peace of mind: Priceless</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Case Types */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Types of Guitar Cases & Bags</h2>
          
          <div className="space-y-6">
            {caseTypes.map((caseType, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{caseType.name}</h3>
                    <p className="text-sm text-gray-600">
                      Protection: {caseType.protection} • Weight: {caseType.weight} • Travel: {caseType.travel}
                    </p>
                  </div>
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                    {caseType.price}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Features</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {caseType.features.map((feature, i) => (
                        <li key={i}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Advantages</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {caseType.pros.map((pro, i) => (
                        <li key={i} className="text-green-600">+ {pro}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Disadvantages</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {caseType.cons.map((con, i) => (
                        <li key={i} className="text-red-600">- {con}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Best For</h4>
                    <p className="text-sm text-gray-600">{caseType.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Essential Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Essential Case Features</h2>
          
          <div className="space-y-4">
            {caseFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-800">{feature.feature}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    feature.importance === 'Critical' ? 'bg-red-100 text-red-800' :
                    feature.importance === 'Important' ? 'bg-orange-100 text-orange-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {feature.importance}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Available Options</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {feature.options.map((option, i) => (
                        <li key={i}>• {option}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Why It Matters</h4>
                    <p className="text-sm text-gray-600">{feature.consideration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sizing & Fit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Sizing & Fit Considerations</h2>
          
          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-purple-800">Getting the Right Fit</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Body Shapes</h4>
                <ul className="space-y-1 text-purple-700 text-sm">
                  <li>• <strong>Dreadnought:</strong> Most common acoustic size</li>
                  <li>• <strong>Concert/OM:</strong> Smaller acoustic body</li>
                  <li>• <strong>Jumbo:</strong> Large acoustic, special case needed</li>
                  <li>• <strong>Classical:</strong> Wide neck, specific cases</li>
                  <li>• <strong>Electric:</strong> Stratocaster, Les Paul variations</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Length Considerations</h4>
                <ul className="space-y-1 text-purple-700 text-sm">
                  <li>• <strong>Scale Length:</strong> 24.75" vs. 25.5"</li>
                  <li>• <strong>Headstock:</strong> Angled vs. straight</li>
                  <li>• <strong>Overall Length:</strong> Different between brands</li>
                  <li>• <strong>Extended Range:</strong> 7+ string guitars</li>
                  <li>• <strong>Travel Size:</strong> 3/4 and parlor guitars</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Fit Testing</h4>
                <ul className="space-y-1 text-purple-700 text-sm">
                  <li>• Guitar should sit securely</li>
                  <li>• No pressure on neck or body</li>
                  <li>• Case should close easily</li>
                  <li>• Check all contact points</li>
                  <li>• Verify headstock clearance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Brands */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Trusted Case Manufacturers</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {famousCases.map((brand, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{brand.brand}</h3>
                <p className="font-medium text-gray-700 mb-2">{brand.model}</p>
                <p className="text-sm text-gray-600 mb-2"><strong>Specialty:</strong> {brand.feature}</p>
                <p className="text-sm text-gray-600"><strong>Popular with:</strong> {brand.users}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-teal-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-teal-800">Other Notable Brands</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <h4 className="font-semibold text-teal-700 mb-2">Premium</h4>
                <ul className="text-teal-700 text-sm space-y-1">
                  <li>• Calton Cases</li>
                  <li>• Hoffee Cases</li>
                  <li>• Ameritage</li>
                  <li>• BAM Cases</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-teal-700 mb-2">Professional</h4>
                <ul className="text-teal-700 text-sm space-y-1">
                  <li>• Guardian Cases</li>
                  <li>• Pelican</li>
                  <li>• Road Runner</li>
                  <li>• ProRockGear</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-teal-700 mb-2">Value</h4>
                <ul className="text-teal-700 text-sm space-y-1">
                  <li>• ChromaCast</li>
                  <li>• Musician's Gear</li>
                  <li>• Reunion Blues</li>
                  <li>• Fender Cases</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-teal-700 mb-2">Specialized</h4>
                <ul className="text-teal-700 text-sm space-y-1">
                  <li>• Bobelock (Violin)</li>
                  <li>• Hiscox (Lightweight)</li>
                  <li>• Featherweight</li>
                  <li>• Mono Cases</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Case Care */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Case Care & Maintenance</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-orange-800">Regular Maintenance</h3>
              <ul className="space-y-2 text-orange-700 text-sm">
                <li>• <strong>Clean Interior:</strong> Vacuum and wipe down regularly</li>
                <li>• <strong>Check Latches:</strong> Ensure proper operation</li>
                <li>• <strong>Inspect Hinges:</strong> Oil if necessary</li>
                <li>• <strong>Handle Care:</strong> Check attachment points</li>
                <li>• <strong>Lock Function:</strong> Keep mechanisms working</li>
                <li>• <strong>Weatherstripping:</strong> Replace if damaged</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-green-800">Storage Tips</h3>
              <ul className="space-y-2 text-green-700 text-sm">
                <li>• <strong>Dry Environment:</strong> Prevent mold and mildew</li>
                <li>• <strong>Temperature Stable:</strong> Avoid extreme changes</li>
                <li>• <strong>Proper Position:</strong> Store upright when possible</li>
                <li>• <strong>Empty Pockets:</strong> Remove accessories when storing</li>
                <li>• <strong>Pest Prevention:</strong> Check for insects</li>
                <li>• <strong>Air Circulation:</strong> Don't seal completely long-term</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Selection Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Choosing Your Guitar Case</h2>
          
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-blue-800">Decision Matrix</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Home/Studio Player</h4>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• <strong>Need:</strong> Basic protection, storage</li>
                  <li>• <strong>Recommendation:</strong> Quality gig bag</li>
                  <li>• <strong>Budget:</strong> $50-150</li>
                  <li>• <strong>Features:</strong> Padding, pockets, shoulder straps</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Regular Performer</h4>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• <strong>Need:</strong> Transport protection, organization</li>
                  <li>• <strong>Recommendation:</strong> Hybrid or hard case</li>
                  <li>• <strong>Budget:</strong> $150-400</li>
                  <li>• <strong>Features:</strong> Durability, storage, easy transport</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Touring Musician</h4>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• <strong>Need:</strong> Maximum protection, airline safe</li>
                  <li>• <strong>Recommendation:</strong> Flight case or premium hard</li>
                  <li>• <strong>Budget:</strong> $300-1000+</li>
                  <li>• <strong>Features:</strong> ATA rating, wheels, TSA locks</li>
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
              href="/lessons/gear/accessories/stands"
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Guitar Stands</h3>
              <p className="text-sm text-gray-600">Safe display and easy access</p>
            </Link>
            
            <Link 
              href="/lessons/gear/accessories/straps"
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Guitar Straps</h3>
              <p className="text-sm text-gray-600">Comfort for standing performance</p>
            </Link>
            
            <Link 
              href="/lessons/gear/accessories/cables"
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Guitar Cables</h3>
              <p className="text-sm text-gray-600">Connect your gear reliably</p>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </Layout>
  );
}
