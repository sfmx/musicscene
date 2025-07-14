import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const standTypes = [
  {
    name: 'A-Frame Stands',
    stability: 'Good',
    portability: 'Excellent',
    price: '$15-50',
    capacity: '1 guitar',
    features: ['Foldable design', 'Lightweight', 'Adjustable width', 'Rubber padding'],
    pros: ['Very portable', 'Affordable', 'Universal fit', 'Easy setup'],
    cons: ['Less stable', 'Single guitar only', 'Can tip over', 'Basic protection'],
    bestFor: 'Home practice, travel, temporary setups, budget solution',
  },
  {
    name: 'Tripod Stands',
    stability: 'Very Good',
    portability: 'Good',
    price: '$25-80',
    capacity: '1 guitar',
    features: ['Three-leg base', 'Adjustable height', 'Locking mechanisms', 'Auto-grip yokes'],
    pros: ['Very stable', 'Height adjustable', 'Secure grip', 'Professional grade'],
    cons: ['Bulkier', 'More expensive', 'Single instrument', 'Longer setup time'],
    bestFor: 'Stage performance, studio use, valuable instruments, professional settings',
  },
  {
    name: 'Multi-Guitar Stands',
    stability: 'Excellent',
    portability: 'Poor',
    price: '$50-200',
    capacity: '3-9 guitars',
    features: ['Multiple slots', 'Heavy base', 'Protective padding', 'Stable platform'],
    pros: ['Multiple guitars', 'Very stable', 'Space efficient', 'Organization'],
    cons: ['Not portable', 'Expensive', 'Takes floor space', 'Heavy'],
    bestFor: 'Studios, music rooms, guitar collections, permanent setups',
  },
  {
    name: 'Wall Hangers',
    stability: 'Excellent',
    portability: 'None',
    price: '$10-40 each',
    capacity: '1 per hanger',
    features: ['Wall mounted', 'Auto-grip mechanism', 'Protective padding', 'Space saving'],
    pros: ['Saves floor space', 'Secure mounting', 'Display value', 'Multiple options'],
    cons: ['Permanent installation', 'Wall damage risk', 'Height limitations', 'Access issues'],
    bestFor: 'Permanent display, space saving, guitar collections, wall decoration',
  },
];

const hangerTypes = [
  {
    type: 'Basic Hook Hangers',
    security: 'Low',
    features: ['Simple hook design', 'Manual placement', 'Basic padding'],
    safety: 'Requires careful placement, risk of falling',
    price: '$5-15',
  },
  {
    type: 'Auto-Grip Hangers',
    security: 'High',
    features: ['Automatic locking', 'Weight-activated grip', 'Release mechanism'],
    safety: 'Very secure, guitar locked in place',
    price: '$15-40',
  },
  {
    type: 'Hercules Hangers',
    security: 'Very High',
    features: ['AGS (Auto Grip System)', 'Professional grade', 'Instant lock/release'],
    safety: 'Industry standard for security',
    price: '$20-50',
  },
];

const famousSetups = [
  {
    artist: 'Joe Bonamassa',
    setup: 'Multiple Hercules multi-guitar stands',
    description: 'Professional touring setup with secure, quick-access stands',
  },
  {
    artist: 'Eric Clapton',
    setup: 'Studio wall hangers and tripod stands',
    description: 'Combination of display and performance-ready setups',
  },
  {
    artist: 'John Mayer',
    setup: 'Premium tripod stands for stage',
    description: 'High-end stands for valuable vintage guitars during live shows',
  },
  {
    artist: 'Guitar Center Stores',
    setup: 'Wall hanging display systems',
    description: 'Retail environment showcasing guitars while keeping them secure',
  },
];

export default function StandsPage() {
  return (
    <Layout>
      <Header
        title="Guitar Stands & Hangers Guide"
        subtitle="Safe storage and easy access - protect your guitar while keeping it ready to play"
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
        <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-lg p-8 mb-8 not-prose">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Guitar Stands & Hangers: Safe Storage Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Keep your guitar safe, accessible, and ready to play. From portable stands to permanent 
              wall hangers, discover the best storage solutions for every situation.
            </p>
            <div className="bg-teal-50 rounded-lg p-4">
              <h3 className="font-semibold text-teal-800 mb-2">In This Guide:</h3>
              <ul className="text-teal-700 space-y-1">
                <li>• Stand types and their specific advantages</li>
                <li>• Wall hanging systems and installation</li>
                <li>• Safety features and stability considerations</li>
                <li>• Multi-guitar storage solutions</li>
                <li>• Professional vs. budget options</li>
                <li>• Setup tips for different environments</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Stands Matter */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Proper Storage Matters</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Protection Benefits</h3>
              <ul className="space-y-2 text-green-700">
                <li>• <strong>Fall Prevention:</strong> Secure positioning prevents accidents</li>
                <li>• <strong>Finish Protection:</strong> Padded contact points prevent damage</li>
                <li>• <strong>Neck Support:</strong> Proper angle prevents neck stress</li>
                <li>• <strong>Environmental:</strong> Keeps guitar off floor, away from hazards</li>
                <li>• <strong>Organization:</strong> Dedicated space for each instrument</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Convenience & Access</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• <strong>Quick Access:</strong> Guitar always ready to play</li>
                <li>• <strong>Practice Motivation:</strong> Visible instrument encourages playing</li>
                <li>• <strong>Space Efficiency:</strong> Organized storage saves room</li>
                <li>• <strong>Display Value:</strong> Show off your instruments</li>
                <li>• <strong>Workflow:</strong> Seamless practice and performance setup</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-6 mt-6">
            <h3 className="text-lg font-semibold mb-3 text-red-800">⚠️ Common Storage Mistakes</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Poor Positioning</h4>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Leaning against walls</li>
                  <li>• Laying flat on surfaces</li>
                  <li>• High traffic area placement</li>
                  <li>• Unstable surface positioning</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Environmental Hazards</h4>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Direct sunlight exposure</li>
                  <li>• Heating/cooling vents</li>
                  <li>• High humidity areas</li>
                  <li>• Temperature fluctuations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Safety Issues</h4>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Inadequate stand stability</li>
                  <li>• Wrong size for guitar</li>
                  <li>• Pet or child accessibility</li>
                  <li>• Crowded arrangements</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Stand Types */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Types of Guitar Stands</h2>
          
          <div className="space-y-6">
            {standTypes.map((stand, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{stand.name}</h3>
                    <p className="text-sm text-gray-600">
                      Stability: {stand.stability} • Portability: {stand.portability} • Capacity: {stand.capacity}
                    </p>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                    {stand.price}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Features</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {stand.features.map((feature, i) => (
                        <li key={i}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Advantages</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {stand.pros.map((pro, i) => (
                        <li key={i} className="text-green-600">+ {pro}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Disadvantages</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {stand.cons.map((con, i) => (
                        <li key={i} className="text-red-600">- {con}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Best Applications</h4>
                    <p className="text-sm text-gray-600">{stand.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Wall Hangers */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Wall Hanger Systems</h2>
          
          <div className="bg-purple-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-purple-800">Types of Wall Hangers</h3>
            <div className="space-y-4">
              {hangerTypes.map((hanger, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-purple-200">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-purple-800">{hanger.type}</h4>
                    <span className="text-sm font-medium text-purple-600">{hanger.price}</span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-purple-700"><strong>Security:</strong> {hanger.security}</p>
                      <ul className="text-sm text-purple-600 mt-1">
                        {hanger.features.map((feature, i) => (
                          <li key={i}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-purple-700"><strong>Safety:</strong> {hanger.safety}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-yellow-800">Installation Considerations</h3>
              <ul className="space-y-2 text-yellow-700 text-sm">
                <li>• <strong>Wall Type:</strong> Drywall, plaster, concrete, brick</li>
                <li>• <strong>Stud Location:</strong> Use stud finder for secure mounting</li>
                <li>• <strong>Weight Capacity:</strong> Check hanger rating vs. guitar weight</li>
                <li>• <strong>Height Placement:</strong> Consider accessibility and safety</li>
                <li>• <strong>Spacing:</strong> Allow clearance between multiple hangers</li>
                <li>• <strong>Level Installation:</strong> Use level for straight mounting</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-orange-800">Safety Guidelines</h3>
              <ul className="space-y-2 text-orange-700 text-sm">
                <li>• <strong>Proper Anchors:</strong> Use appropriate wall anchors</li>
                <li>• <strong>Weight Limits:</strong> Don't exceed manufacturer specs</li>
                <li>• <strong>Regular Inspection:</strong> Check mounting periodically</li>
                <li>• <strong>Children/Pets:</strong> Consider accessibility and safety</li>
                <li>• <strong>Backup Support:</strong> Wall studs for heavy guitars</li>
                <li>• <strong>Professional Install:</strong> For valuable instruments</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Multi-Guitar Solutions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Multi-Guitar Storage Solutions</h2>
          
          <div className="bg-teal-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-teal-800">Organization Strategies</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-teal-700 mb-2">Floor Stands</h4>
                <ul className="space-y-1 text-teal-700 text-sm">
                  <li>• <strong>3-Guitar Stands:</strong> Compact solution</li>
                  <li>• <strong>5-Guitar Racks:</strong> Medium collections</li>
                  <li>• <strong>7+ Guitar Stands:</strong> Large collections</li>
                  <li>• <strong>Modular Systems:</strong> Expandable options</li>
                  <li>• <strong>Rolling Stands:</strong> Mobile storage</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-teal-700 mb-2">Wall Systems</h4>
                <ul className="space-y-1 text-teal-700 text-sm">
                  <li>• <strong>Slatwall Systems:</strong> Adjustable positioning</li>
                  <li>• <strong>Grid Systems:</strong> Flexible arrangements</li>
                  <li>• <strong>Track Systems:</strong> Sliding positions</li>
                  <li>• <strong>Custom Installations:</strong> Built-in solutions</li>
                  <li>• <strong>Display Cases:</strong> Protected showcase</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-teal-700 mb-2">Hybrid Solutions</h4>
                <ul className="space-y-1 text-teal-700 text-sm">
                  <li>• <strong>Wall + Floor:</strong> Maximize space usage</li>
                  <li>• <strong>Cases + Stands:</strong> Protected and accessible</li>
                  <li>• <strong>Rotating Displays:</strong> Space-efficient viewing</li>
                  <li>• <strong>Climate Controlled:</strong> Premium protection</li>
                  <li>• <strong>Security Systems:</strong> Theft protection</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Brands */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Trusted Stand Manufacturers</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {famousSetups.map((setup, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{setup.artist}</h3>
                <p className="font-medium text-gray-700 mb-2">{setup.setup}</p>
                <p className="text-sm text-gray-600">{setup.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-indigo-800">Recommended Brands</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <h4 className="font-semibold text-indigo-700 mb-2">Premium</h4>
                <ul className="text-indigo-700 text-sm space-y-1">
                  <li>• Hercules Stands</li>
                  <li>• Ultimate Support</li>
                  <li>• K&M (König & Meyer)</li>
                  <li>• String Swing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-700 mb-2">Professional</h4>
                <ul className="text-indigo-700 text-sm space-y-1">
                  <li>• On-Stage Stands</li>
                  <li>• ProLine</li>
                  <li>• QuikLok</li>
                  <li>• Yorkville</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-700 mb-2">Value</h4>
                <ul className="text-indigo-700 text-sm space-y-1">
                  <li>• Fender Stands</li>
                  <li>• ChromaCast</li>
                  <li>• Musician's Gear</li>
                  <li>• Stageline</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-700 mb-2">Specialized</h4>
                <ul className="text-indigo-700 text-sm space-y-1">
                  <li>• Guitar Hangers Co.</li>
                  <li>• StoreWALL</li>
                  <li>• Rubbermaid</li>
                  <li>• Custom Builders</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Selection Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Choosing the Right Storage Solution</h2>
          
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-blue-800">Decision Factors</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Space Considerations</h4>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• Available floor space</li>
                  <li>• Wall space and mounting options</li>
                  <li>• Room traffic patterns</li>
                  <li>• Multi-purpose room usage</li>
                  <li>• Future expansion needs</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Usage Patterns</h4>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• Frequency of guitar changes</li>
                  <li>• Practice vs. performance needs</li>
                  <li>• Display vs. storage priority</li>
                  <li>• Accessibility requirements</li>
                  <li>• Portability needs</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Guitar Collection</h4>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• Number of instruments</li>
                  <li>• Guitar types and sizes</li>
                  <li>• Value and rarity</li>
                  <li>• Growth expectations</li>
                  <li>• Special needs instruments</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Setup Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Setup & Safety Tips</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-green-800">Optimal Placement</h3>
              <ul className="space-y-2 text-green-700 text-sm">
                <li>• <strong>Away from Traffic:</strong> Avoid high-activity areas</li>
                <li>• <strong>Stable Surface:</strong> Level, solid flooring</li>
                <li>• <strong>Climate Controlled:</strong> Avoid temperature extremes</li>
                <li>• <strong>Good Lighting:</strong> Easy to see and access</li>
                <li>• <strong>Clear Space:</strong> Room for safe movement</li>
                <li>• <strong>Pet/Child Safe:</strong> Consider household safety</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-orange-800">Maintenance Schedule</h3>
              <ul className="space-y-2 text-orange-700 text-sm">
                <li>• <strong>Weekly:</strong> Check stability and positioning</li>
                <li>• <strong>Monthly:</strong> Clean padding and surfaces</li>
                <li>• <strong>Quarterly:</strong> Inspect all connections and joints</li>
                <li>• <strong>Annually:</strong> Deep clean and lubricate mechanisms</li>
                <li>• <strong>As Needed:</strong> Replace worn padding or parts</li>
                <li>• <strong>After Moves:</strong> Re-check all installations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Accessories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Related Accessories</h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              href="/lessons/gear/accessories/cases"
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Cases & Bags</h3>
              <p className="text-sm text-gray-600">Protection for transport and storage</p>
            </Link>
            
            <Link 
              href="/lessons/gear/accessories/straps"
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Guitar Straps</h3>
              <p className="text-sm text-gray-600">Comfort for standing performance</p>
            </Link>
            
            <Link 
              href="/lessons/gear/accessories/picks"
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Guitar Picks</h3>
              <p className="text-sm text-gray-600">Essential tools for playing</p>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </Layout>
  );
}
