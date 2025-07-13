import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BassAmpsPage() {
  return (
    <Layout>
      <Header
        title="Bass Amplifiers"
        subtitle="Powerful, focused amplification designed specifically for bass guitar"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-lg p-8 mb-8 not-prose">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Bass Amplifiers: Foundation of the Rhythm Section
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Discover amplification designed specifically for bass frequencies, power, and the unique needs of bass players.
            </p>
            <div className="bg-red-50 rounded-lg p-4">
              <h3 className="font-semibold text-red-800 mb-2">What You&apos;ll Learn:</h3>
              <ul className="text-red-700 space-y-1">
                <li>• How bass amps differ from guitar amplification</li>
                <li>• Power requirements and speaker configurations</li>
                <li>• Tube vs. solid state in bass amplification</li>
                <li>• Choosing the right amp for your style and venue</li>
                <li>• Professional bass amp setups and configurations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bass Amp Fundamentals */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Bass Amplification Fundamentals</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Why Bass Amps Are Different</h3>
              <p className="text-blue-700 mb-4">
                Bass frequencies require specialized amplification to reproduce the low-end accurately 
                and with sufficient power to compete with drums and other instruments.
              </p>
              <ul className="space-y-2 text-blue-700">
                <li>• <strong>Lower frequencies:</strong> 41Hz to 350Hz fundamental range</li>
                <li>• <strong>More power needed:</strong> Bass requires 3-10x more power</li>
                <li>• <strong>Speaker design:</strong> Larger drivers for low frequency response</li>
                <li>• <strong>Cabinet construction:</strong> Ported or sealed for bass response</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Head vs. Combo</h3>
              <p className="text-green-700 mb-4">
                Bass amps come in two main configurations, each with distinct advantages for different situations.
              </p>
              <div className="space-y-3 text-green-700">
                <div>
                  <p><strong>Combo Amps:</strong> All-in-one convenience</p>
                  <p className="text-sm">Perfect for practice, small venues, and easy transport</p>
                </div>
                <div>
                  <p><strong>Head + Cabinet:</strong> Modular flexibility</p>
                  <p className="text-sm">Professional choice for larger venues and custom setups</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Power Requirements */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Power and Volume Requirements</h2>
          
          <div className="bg-yellow-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-yellow-800">Understanding Bass Power Needs</h3>
            <p className="text-yellow-700 mb-4">
              Bass frequencies require significantly more power than guitar frequencies to achieve the same perceived volume.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Practice (15-50W)</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Home practice</li>
                  <li>• Small rehearsal rooms</li>
                  <li>• Recording (direct input)</li>
                  <li>• Apartment-friendly volumes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Small Gigs (100-300W)</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Coffee shops, small clubs</li>
                  <li>• Rehearsal with drums</li>
                  <li>• Mic&apos;d through PA</li>
                  <li>• Most common range</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Large Venues (500W+)</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Concert halls, large clubs</li>
                  <li>• Stadium backline</li>
                  <li>• No PA support needed</li>
                  <li>• Professional touring rigs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tube vs Solid State for Bass */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Tube vs. Solid State for Bass</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-purple-800">Tube Bass Amps</h3>
              <p className="text-purple-700 mb-4">
                Tube bass amps provide warmth and natural compression, popular in vintage and classic rock styles.
              </p>
              <ul className="space-y-2 text-purple-700">
                <li>• <strong>Warmth:</strong> Musical saturation and compression</li>
                <li>• <strong>Vintage tone:</strong> Classic 60s and 70s bass sounds</li>
                <li>• <strong>Natural limiting:</strong> Prevents harsh clipping</li>
                <li>• <strong>Drawbacks:</strong> Heavy, expensive, maintenance-intensive</li>
              </ul>
              <div className="mt-4 bg-white rounded p-3">
                <p className="text-sm font-semibold text-purple-800">Famous Tube Bass Amps:</p>
                <p className="text-xs text-purple-600">Ampeg SVT, Orange AD200, Hiwatt DR201</p>
              </div>
            </div>
            
            <div className="bg-teal-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-teal-800">Solid State Bass Amps</h3>
              <p className="text-teal-700 mb-4">
                Solid state dominates modern bass amplification due to power efficiency and reliability.
              </p>
              <ul className="space-y-2 text-teal-700">
                <li>• <strong>Power efficiency:</strong> More watts per pound</li>
                <li>• <strong>Tight bass:</strong> Controlled low-end response</li>
                <li>• <strong>Reliability:</strong> No tube replacement needed</li>
                <li>• <strong>Modern features:</strong> Effects, EQ, compression built-in</li>
              </ul>
              <div className="mt-4 bg-white rounded p-3">
                <p className="text-sm font-semibold text-teal-800">Popular SS Bass Amps:</p>
                <p className="text-xs text-teal-600">Hartke, SWR, GK, Markbass, TC Electronic</p>
              </div>
            </div>
          </div>
        </section>

        {/* Speaker Configurations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Bass Speaker Configurations</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-indigo-800">Common Configurations</h3>
              <div className="space-y-3 text-indigo-700">
                <div>
                  <h4 className="font-semibold">1x15&quot;</h4>
                  <p className="text-sm">Deep, warm bass response. Great for blues, jazz, reggae.</p>
                </div>
                <div>
                  <h4 className="font-semibold">2x10&quot;</h4>
                  <p className="text-sm">Balanced response, lighter weight. Versatile for many styles.</p>
                </div>
                <div>
                  <h4 className="font-semibold">4x10&quot;</h4>
                  <p className="text-sm">Punchy midrange, excellent for rock and funk. Industry standard.</p>
                </div>
                <div>
                  <h4 className="font-semibold">2x12&quot;</h4>
                  <p className="text-sm">Modern favorite. Combines deep bass with midrange clarity.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-orange-800">Choosing Speaker Size</h3>
              <p className="text-orange-700 mb-4">
                Different speaker sizes offer distinct tonal characteristics and practical considerations.
              </p>
              <ul className="space-y-2 text-orange-700">
                <li>• <strong>10&quot; speakers:</strong> Tight, punchy, easier to transport</li>
                <li>• <strong>12&quot; speakers:</strong> Balanced response, versatile</li>
                <li>• <strong>15&quot; speakers:</strong> Deep bass, warm tone, heavier</li>
                <li>• <strong>18&quot; subwoofers:</strong> Ultra-low frequencies for large venues</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Famous Bass Amplifiers */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Legendary Bass Amplifiers</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Classic Models</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Ampeg SVT Classic</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    The legendary 300-watt all-tube head. Defined the sound of rock bass for decades.
                  </p>
                  <p className="text-xs text-gray-600">Notable users: John Entwistle, Geddy Lee, Chris Squire</p>
                </div>
                <div>
                  <h4 className="font-semibold">Fender Bassman</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Vintage tube warmth and the original bass amplifier design from the 1950s.
                  </p>
                  <p className="text-xs text-gray-600">Historic significance in bass amp development</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Modern Standards</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Markbass Little Mark Series</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Lightweight, powerful, and versatile. Popular with touring musicians worldwide.
                  </p>
                  <p className="text-xs text-gray-600">Class D efficiency meets professional features</p>
                </div>
                <div>
                  <h4 className="font-semibold">Gallien-Krueger RB Series</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Known for punch and clarity. Favored by funk and rock bassists.
                  </p>
                  <p className="text-xs text-gray-600">Flea&apos;s signature sound for decades</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EQ and Tone Shaping */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Bass EQ and Tone Shaping</h2>
          
          <div className="bg-pink-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-pink-800">Essential EQ Frequencies for Bass</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <h4 className="font-semibold text-pink-700 mb-2">Sub Bass (20-60Hz)</h4>
                <p className="text-pink-700 text-sm">Feel more than heard. Use sparingly to avoid muddiness.</p>
              </div>
              <div>
                <h4 className="font-semibold text-pink-700 mb-2">Bass (60-250Hz)</h4>
                <p className="text-pink-700 text-sm">Fundamental frequencies. Core of bass tone.</p>
              </div>
              <div>
                <h4 className="font-semibold text-pink-700 mb-2">Low Mids (250Hz-2kHz)</h4>
                <p className="text-pink-700 text-sm">Note definition and punch. Critical for clarity.</p>
              </div>
              <div>
                <h4 className="font-semibold text-pink-700 mb-2">High Mids/Treble (2kHz+)</h4>
                <p className="text-pink-700 text-sm">Attack, string noise, harmonics. Adds presence.</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-blue-800">Genre-Specific EQ Tips</h3>
              <div className="space-y-3 text-blue-700">
                <div>
                  <h4 className="font-semibold">Rock/Metal</h4>
                  <p className="text-sm">Boost mids (400Hz-1kHz) for punch, control low end</p>
                </div>
                <div>
                  <h4 className="font-semibold">Jazz</h4>
                  <p className="text-sm">Emphasize 200-400Hz warmth, gentle high-end</p>
                </div>
                <div>
                  <h4 className="font-semibold">Funk</h4>
                  <p className="text-sm">Scoop mids, boost highs for slap/pop attack</p>
                </div>
                <div>
                  <h4 className="font-semibold">Reggae</h4>
                  <p className="text-sm">Deep bass emphasis, rolled-off highs</p>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-green-800">Common EQ Mistakes</h3>
              <ul className="space-y-2 text-green-700">
                <li>• <strong>Too much bass:</strong> Creates muddiness and poor definition</li>
                <li>• <strong>Scooped mids:</strong> Bass disappears in the mix</li>
                <li>• <strong>Harsh highs:</strong> Unpleasant string noise and fret buzz</li>
                <li>• <strong>Not considering room:</strong> EQ must adapt to acoustics</li>
                <li>• <strong>Ignoring the mix:</strong> Bass must complement, not compete</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Modern Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Modern Bass Amp Features</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-purple-800">Built-in Effects</h3>
              <p className="text-purple-700 mb-4">
                Many modern bass amps include essential effects processors built-in.
              </p>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>• Compression for even dynamics</li>
                <li>• EQ beyond basic tone controls</li>
                <li>• Distortion and overdrive</li>
                <li>• Chorus and modulation effects</li>
              </ul>
            </div>
            
            <div className="bg-teal-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-teal-800">Connectivity</h3>
              <p className="text-teal-700 mb-4">
                Modern connectivity options enhance versatility and integration.
              </p>
              <ul className="text-teal-700 text-sm space-y-1">
                <li>• XLR DI output for live sound</li>
                <li>• USB for direct recording</li>
                <li>• Bluetooth audio streaming</li>
                <li>• Effects loops for pedals</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-yellow-800">Practice Features</h3>
              <p className="text-yellow-700 mb-4">
                Features designed to enhance practice and learning sessions.
              </p>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• Headphone outputs for silent practice</li>
                <li>• Aux inputs for play-along tracks</li>
                <li>• Metronome and rhythm patterns</li>
                <li>• Recording capabilities</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Choosing the Right Bass Amp */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Choosing Your Bass Amplifier</h2>
          
          <div className="bg-red-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-red-800">💡 Decision Factors</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Performance Needs</h4>
                <ul className="space-y-1 text-red-700 text-sm">
                  <li>• Venue sizes you typically play</li>
                  <li>• Whether you need portability</li>
                  <li>• Genre and playing style requirements</li>
                  <li>• Budget for amp and potential cabinet</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Technical Considerations</h4>
                <ul className="space-y-1 text-red-700 text-sm">
                  <li>• Power requirements for your situations</li>
                  <li>• Preferred speaker configuration</li>
                  <li>• Need for built-in effects vs. pedals</li>
                  <li>• Recording and connectivity needs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Buying Recommendations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Bass Amp Recommendations</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-700 mb-2">Budget ($200-500)</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Fender Rumble 40</li>
                <li>• Ampeg BA-108v2</li>
                <li>• Orange Crush Bass 50</li>
                <li>• Hartke HD25</li>
              </ul>
              <p className="text-xs text-blue-600 mt-2">Great for practice and small venues</p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-700 mb-2">Mid-Range ($500-1200)</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Fender Rumble 500</li>
                <li>• Ampeg BA-210v2</li>
                <li>• Markbass CMD 121P</li>
                <li>• GK MB212</li>
              </ul>
              <p className="text-xs text-green-600 mt-2">Professional features, gig-ready power</p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h4 className="font-semibold text-purple-700 mb-2">Professional ($1200+)</h4>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>• Ampeg SVT Classic</li>
                <li>• Markbass Little Mark Tube 800</li>
                <li>• Mesa Boogie Subway D-800+</li>
                <li>• Aguilar Tone Hammer 700</li>
              </ul>
              <p className="text-xs text-purple-600 mt-2">Touring-grade reliability and tone</p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="mb-12">
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Explore More Amplifier Types</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/lessons/gear/amps/hybrid" 
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-blue-600 mb-2">← Hybrid Amps</h4>
                <p className="text-sm text-gray-600">Tube warmth meets solid state reliability</p>
              </Link>
              <Link 
                href="/lessons/gear/amps/mini" 
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-blue-600 mb-2">Mini/Practice Amps →</h4>
                <p className="text-sm text-gray-600">Portable solutions for home practice</p>
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
