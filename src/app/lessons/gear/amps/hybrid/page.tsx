import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HybridAmpsPage() {
  return (
    <Layout>
      <Header
        title="Hybrid Amplifiers"
        subtitle="Best of both worlds - tube warmth meets solid state reliability"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-lg p-8 mb-8 not-prose">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Hybrid Amplifiers: Perfect Balance
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Experience the perfect marriage of tube warmth and solid state reliability in modern hybrid designs.
            </p>
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-2">What You&apos;ll Learn:</h3>
              <ul className="text-green-700 space-y-1">
                <li>• How hybrid technology combines the best of both worlds</li>
                <li>• Different hybrid configurations and their characteristics</li>
                <li>• Advantages of hybrid designs for modern players</li>
                <li>• Popular hybrid amplifiers and their unique features</li>
                <li>• When hybrid amps are the ideal choice</li>
              </ul>
            </div>
          </div>
        </div>

        {/* What Are Hybrid Amps */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Understanding Hybrid Technology</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">The Hybrid Concept</h3>
              <p className="text-blue-700 mb-4">
                Hybrid amplifiers strategically combine vacuum tubes and solid state components to 
                maximize the benefits of each technology while minimizing their drawbacks.
              </p>
              <ul className="space-y-2 text-blue-700">
                <li>• <strong>Tubes:</strong> Provide warmth and musical compression</li>
                <li>• <strong>Solid state:</strong> Offers reliability and consistent power</li>
                <li>• <strong>Synergy:</strong> Each technology handles what it does best</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-800">Design Philosophy</h3>
              <p className="text-purple-700 mb-4">
                Hybrid designs aim to capture the musicality of tubes while maintaining the 
                practicality and reliability that modern musicians need.
              </p>
              <div className="space-y-2 text-purple-700">
                <p>• <strong>Cost-effective:</strong> Fewer tubes = lower cost</p>
                <p>• <strong>Reliable:</strong> Solid state power section durability</p>
                <p>• <strong>Musical:</strong> Tube preamp character</p>
                <p>• <strong>Practical:</strong> Best of both technologies</p>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Hybrid Configurations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Hybrid Configurations</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-yellow-800">Tube Preamp + Solid State Power</h3>
              <p className="text-yellow-700 mb-4">
                The most common hybrid configuration uses tubes in the preamp section for tone shaping 
                and solid state in the power section for reliability and output.
              </p>
              <ul className="space-y-2 text-yellow-700">
                <li>• <strong>Tone character:</strong> Tubes shape the sound</li>
                <li>• <strong>Power reliability:</strong> Solid state amp section</li>
                <li>• <strong>Cost-effective:</strong> Fewer tubes needed</li>
                <li>• <strong>Examples:</strong> Mesa Boogie Express, Peavey Classic series</li>
              </ul>
            </div>
            
            <div className="bg-teal-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-teal-800">Solid State Preamp + Tube Power</h3>
              <p className="text-teal-700 mb-4">
                Less common but effective for players who want the power tube saturation 
                with solid state preamp precision and features.
              </p>
              <ul className="space-y-2 text-teal-700">
                <li>• <strong>Precise control:</strong> Solid state preamp consistency</li>
                <li>• <strong>Power tube warmth:</strong> Tube output stage character</li>
                <li>• <strong>Modern features:</strong> Digital preamp capabilities</li>
                <li>• <strong>Examples:</strong> Some modern high-gain designs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Advantages of Hybrid Design */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Choose Hybrid Amplifiers?</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-pink-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-pink-800">Balanced Performance</h3>
              <p className="text-pink-700 mb-4">
                Hybrid amps offer the musical qualities of tubes with the practical benefits 
                of solid state technology.
              </p>
              <ul className="text-pink-700 text-sm space-y-1">
                <li>• Tube warmth and compression</li>
                <li>• Solid state reliability</li>
                <li>• Reduced maintenance</li>
                <li>• Consistent performance</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-indigo-800">Cost Effectiveness</h3>
              <p className="text-indigo-700 mb-4">
                Get tube tone at a lower cost, with reduced maintenance expenses 
                over the amplifier&apos;s lifetime.
              </p>
              <ul className="text-indigo-700 text-sm space-y-1">
                <li>• Lower purchase price</li>
                <li>• Fewer tubes to replace</li>
                <li>• Reduced maintenance costs</li>
                <li>• Energy efficient operation</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-orange-800">Modern Features</h3>
              <p className="text-orange-700 mb-4">
                Hybrid designs can incorporate modern features while maintaining 
                the musical character of tube amplification.
              </p>
              <ul className="text-orange-700 text-sm space-y-1">
                <li>• Digital effects integration</li>
                <li>• USB recording interfaces</li>
                <li>• Preset memory systems</li>
                <li>• MIDI compatibility</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Popular Hybrid Amplifiers */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Notable Hybrid Amplifiers</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Classic Hybrids</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Peavey Classic 30</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Tube preamp with solid state power section. Known for versatility and reliability.
                  </p>
                  <p className="text-xs text-gray-600">Great for blues, rock, and country</p>
                </div>
                <div>
                  <h4 className="font-semibold">Mesa Boogie Express 5:25</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    All-tube preamp with solid state rectifier. Combines vintage tone with modern reliability.
                  </p>
                  <p className="text-xs text-gray-600">Versatile for multiple genres</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Modern Innovations</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Orange Rocker 15</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Tube preamp with solid state power amp and built-in attenuator for home use.
                  </p>
                  <p className="text-xs text-gray-600">Perfect for home and small venues</p>
                </div>
                <div>
                  <h4 className="font-semibold">Blackstar HT Club 40</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    ISF (Infinite Shape Feature) control blends American and British voicings.
                  </p>
                  <p className="text-xs text-gray-600">Innovative tone shaping capabilities</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Considerations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Hybrid Amp Maintenance</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-green-800">Reduced Maintenance</h3>
              <p className="text-green-700 mb-4">
                Hybrid amps require less maintenance than full tube amplifiers while still providing 
                much of the tube character.
              </p>
              <ul className="space-y-2 text-green-700">
                <li>• <strong>Fewer tubes:</strong> Only preamp tubes need replacement</li>
                <li>• <strong>No bias adjustment:</strong> Solid state power section</li>
                <li>• <strong>Longer tube life:</strong> Preamp tubes last longer</li>
                <li>• <strong>No output tube matching:</strong> Simplified service</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-blue-800">Service Schedule</h3>
              <p className="text-blue-700 mb-4">
                Typical maintenance schedule for hybrid amplifiers is much more relaxed than full tube amps.
              </p>
              <ul className="space-y-2 text-blue-700">
                <li>• <strong>Preamp tubes:</strong> Replace every 2-5 years</li>
                <li>• <strong>Basic cleaning:</strong> Annual dust removal</li>
                <li>• <strong>Control cleaning:</strong> As needed for scratchy pots</li>
                <li>• <strong>Professional service:</strong> Every 5-10 years</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tone Characteristics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Hybrid Tone Characteristics</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-purple-800">Clean Tones</h3>
              <p className="text-purple-700 mb-4">
                Hybrid amps often excel at clean tones, combining tube warmth with solid state headroom.
              </p>
              <ul className="space-y-2 text-purple-700">
                <li>• <strong>Tube preamp warmth:</strong> Musical compression and harmonics</li>
                <li>• <strong>SS power headroom:</strong> Clean at high volumes</li>
                <li>• <strong>Consistent response:</strong> Reliable performance night after night</li>
                <li>• <strong>Dynamic range:</strong> Good touch sensitivity</li>
              </ul>
            </div>
            
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-red-800">Overdriven Tones</h3>
              <p className="text-red-700 mb-4">
                Overdrive characteristics depend heavily on the specific hybrid configuration used.
              </p>
              <ul className="space-y-2 text-red-700">
                <li>• <strong>Preamp saturation:</strong> Tube preamp provides musical distortion</li>
                <li>• <strong>Controlled breakup:</strong> More predictable than full tube</li>
                <li>• <strong>Tight response:</strong> Solid state power aids note definition</li>
                <li>• <strong>Volume independence:</strong> Same tone at all volumes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Best Applications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">When to Choose Hybrid</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-teal-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-teal-800">Gigging Musicians</h3>
              <p className="text-teal-700 mb-4">
                Perfect for musicians who need reliability without sacrificing too much tone character.
              </p>
              <ul className="text-teal-700 text-sm space-y-1">
                <li>• Consistent night-to-night performance</li>
                <li>• Reduced risk of tube failure</li>
                <li>• Lower maintenance between gigs</li>
                <li>• Good balance of tone and practicality</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-yellow-800">Home Players</h3>
              <p className="text-yellow-700 mb-4">
                Excellent for players who want tube character without the full maintenance commitment.
              </p>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• Lower volume tube tone access</li>
                <li>• Minimal maintenance requirements</li>
                <li>• Often include headphone outputs</li>
                <li>• Good value for money</li>
              </ul>
            </div>
            
            <div className="bg-pink-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-pink-800">Studio Use</h3>
              <p className="text-pink-700 mb-4">
                Reliable for studio work where consistency and minimal downtime are crucial.
              </p>
              <ul className="text-pink-700 text-sm space-y-1">
                <li>• No warm-up time needed</li>
                <li>• Consistent session to session</li>
                <li>• Good direct recording capabilities</li>
                <li>• Multiple tonal options available</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Comparing Hybrid Approaches */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Hybrid vs. Other Technologies</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Feature</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Hybrid</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Full Tube</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Solid State</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Modeling</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium">Tube Character</td>
                  <td className="px-6 py-4 text-green-600">Good</td>
                  <td className="px-6 py-4 text-green-600">Excellent</td>
                  <td className="px-6 py-4 text-red-600">Limited</td>
                  <td className="px-6 py-4 text-yellow-600">Variable</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Reliability</td>
                  <td className="px-6 py-4 text-green-600">Very Good</td>
                  <td className="px-6 py-4 text-yellow-600">Good</td>
                  <td className="px-6 py-4 text-green-600">Excellent</td>
                  <td className="px-6 py-4 text-green-600">Excellent</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Maintenance</td>
                  <td className="px-6 py-4 text-green-600">Low</td>
                  <td className="px-6 py-4 text-red-600">High</td>
                  <td className="px-6 py-4 text-green-600">Very Low</td>
                  <td className="px-6 py-4 text-green-600">Very Low</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Cost</td>
                  <td className="px-6 py-4 text-yellow-600">Medium</td>
                  <td className="px-6 py-4 text-red-600">High</td>
                  <td className="px-6 py-4 text-green-600">Low</td>
                  <td className="px-6 py-4 text-yellow-600">Medium</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Versatility</td>
                  <td className="px-6 py-4 text-yellow-600">Good</td>
                  <td className="px-6 py-4 text-yellow-600">Good</td>
                  <td className="px-6 py-4 text-yellow-600">Good</td>
                  <td className="px-6 py-4 text-green-600">Excellent</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Buying Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Choosing a Hybrid Amplifier</h2>
          
          <div className="bg-green-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-green-800">💡 Recommendations by Use</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Home Practice</h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Orange Rocker 15</li>
                  <li>• Blackstar HT-1R</li>
                  <li>• Vox AC15C1</li>
                  <li>• Peavey Classic 20 MH</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Small Venues</h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Peavey Classic 30</li>
                  <li>• Mesa Express 5:25</li>
                  <li>• Blackstar HT Club 40</li>
                  <li>• Orange Rocker 32</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Professional</h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Mesa Express 5:50</li>
                  <li>• Peavey Classic 50</li>
                  <li>• Blackstar HT Stage 100</li>
                  <li>• Orange Rockerverb 50C</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Future of Hybrid Technology */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Future of Hybrid Design</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Emerging Trends</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Digital Integration</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Modern hybrid amps increasingly incorporate digital features while maintaining 
                  analog tube character in critical signal path areas.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Improved Efficiency</h4>
                <p className="text-gray-700 text-sm mb-4">
                  New designs focus on maximizing the musical benefits of tubes while 
                  minimizing their traditional drawbacks through intelligent engineering.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="mb-12">
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Explore More Amplifier Types</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/lessons/gear/amps/modeling" 
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-blue-600 mb-2">← Modeling Amps</h4>
                <p className="text-sm text-gray-600">Digital versatility and modern features</p>
              </Link>
              <Link 
                href="/lessons/gear/amps/bass" 
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-blue-600 mb-2">Bass Amps →</h4>
                <p className="text-sm text-gray-600">Specialized amplification for bass guitar</p>
              </Link>
            </div>
            <div className="mt-4">
              <Link 
                href="/lessons/gear/amps" 
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                ← Back to All Amplifiers
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </Layout>
  );
}
