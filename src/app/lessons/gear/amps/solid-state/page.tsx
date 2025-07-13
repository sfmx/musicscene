import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SolidStateAmpsPage() {
  return (
    <Layout>
      <Header
        title="Solid State Amplifiers"
        subtitle="Reliable, consistent, and affordable amplification for every guitarist"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg p-8 mb-8 not-prose">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Solid State Amplifiers: Modern Reliability
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Discover the advantages of transistor-based amplification - consistent tone, reliability, and affordability.
            </p>
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-2">What You&apos;ll Learn:</h3>
              <ul className="text-blue-700 space-y-1">
                <li>• How solid state technology works in amplifiers</li>
                <li>• Advantages and characteristics of transistor amplification</li>
                <li>• Best solid state amps for different applications</li>
                <li>• Modern innovations in solid state design</li>
                <li>• When to choose solid state over other technologies</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How Solid State Works */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">How Solid State Amplifiers Work</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Transistor Technology</h3>
              <p className="text-green-700 mb-4">
                Solid state amplifiers use transistors and integrated circuits instead of vacuum tubes. 
                Transistors are semiconductor devices that can amplify electrical signals efficiently and reliably.
              </p>
              <ul className="space-y-2 text-green-700">
                <li>• <strong>Bipolar transistors:</strong> Traditional amplification devices</li>
                <li>• <strong>MOSFET:</strong> Modern, efficient power transistors</li>
                <li>• <strong>Op-amps:</strong> Integrated circuits for precise control</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-800">Signal Processing</h3>
              <p className="text-purple-700 mb-4">
                Solid state amps process signals differently than tubes, resulting in distinct characteristics.
              </p>
              <div className="space-y-2 text-purple-700">
                <p>• <strong>Linear amplification:</strong> Accurate signal reproduction</p>
                <p>• <strong>Low impedance:</strong> Better speaker control</p>
                <p>• <strong>Fast response:</strong> Immediate transient handling</p>
                <p>• <strong>Consistent output:</strong> Stable across all volume levels</p>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages of Solid State */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Choose Solid State?</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-yellow-800">Reliability</h3>
              <p className="text-yellow-700 mb-4">
                Solid state components are extremely durable and consistent, making them ideal for touring 
                and professional applications where reliability is crucial.
              </p>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• No tubes to replace</li>
                <li>• Resistant to vibration</li>
                <li>• Stable in all climates</li>
                <li>• Long component lifespan</li>
              </ul>
            </div>
            
            <div className="bg-pink-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-pink-800">Affordability</h3>
              <p className="text-pink-700 mb-4">
                Lower manufacturing costs and minimal maintenance requirements make solid state amps 
                accessible to players of all budgets.
              </p>
              <ul className="text-pink-700 text-sm space-y-1">
                <li>• Lower initial cost</li>
                <li>• No tube replacement costs</li>
                <li>• Minimal maintenance</li>
                <li>• Energy efficient</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-indigo-800">Consistency</h3>
              <p className="text-indigo-700 mb-4">
                Solid state amps deliver the same tone every time you turn them on, regardless of 
                temperature, humidity, or age.
              </p>
              <ul className="text-indigo-700 text-sm space-y-1">
                <li>• No warm-up time needed</li>
                <li>• Stable frequency response</li>
                <li>• Predictable behavior</li>
                <li>• Studio-ready instantly</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tonal Characteristics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Solid State Tone Characteristics</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-teal-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-teal-800">Clean Tones</h3>
              <p className="text-teal-700 mb-4">
                Solid state amps excel at clean tones, offering crystal clarity and abundant headroom.
              </p>
              <ul className="space-y-2 text-teal-700">
                <li>• <strong>Clarity:</strong> Exceptional note definition</li>
                <li>• <strong>Headroom:</strong> Stays clean at high volumes</li>
                <li>• <strong>Frequency response:</strong> Accurate across the spectrum</li>
                <li>• <strong>Dynamic range:</strong> Wide volume range without distortion</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-orange-800">Distortion Characteristics</h3>
              <p className="text-orange-700 mb-4">
                Modern solid state amps have greatly improved their distortion qualities through advanced design.
              </p>
              <ul className="space-y-2 text-orange-700">
                <li>• <strong>Tight bass:</strong> Controlled low-end response</li>
                <li>• <strong>Articulate:</strong> Clear note separation</li>
                <li>• <strong>Consistent:</strong> Same tone at all volumes</li>
                <li>• <strong>Modern voicing:</strong> Works well for contemporary styles</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Famous Solid State Amplifiers */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Notable Solid State Amplifiers</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Classic Models</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Roland JC-120 Jazz Chorus</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    The gold standard for clean solid state tone. Famous for its built-in chorus effect.
                  </p>
                  <p className="text-xs text-gray-600">Notable users: Andy Summers, Robert Smith</p>
                </div>
                <div>
                  <h4 className="font-semibold">Fender Twin Reverb Solidstate</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Clean, powerful, and reliable. Popular for country and jazz applications.
                  </p>
                  <p className="text-xs text-gray-600">Used extensively in studios worldwide</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Modern Innovations</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Quilter SuperBlock US</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Ultra-portable yet powerful. Demonstrates modern solid state capabilities.
                  </p>
                  <p className="text-xs text-gray-600">200 watts in under 3 pounds</p>
                </div>
                <div>
                  <h4 className="font-semibold">Orange Pedal Baby 100</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Class A/B power amp designed for pedal users seeking clean amplification.
                  </p>
                  <p className="text-xs text-gray-600">Perfect for pedalboard setups</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modern Innovations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Modern Solid State Innovations</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-blue-800">Class D Technology</h3>
              <p className="text-blue-700 mb-4">
                Modern Class D amplification provides incredible power efficiency and reduced weight 
                without sacrificing tone quality.
              </p>
              <ul className="space-y-2 text-blue-700">
                <li>• <strong>Efficiency:</strong> Up to 95% power efficiency</li>
                <li>• <strong>Weight:</strong> Significantly lighter than traditional designs</li>
                <li>• <strong>Heat:</strong> Runs much cooler than Class A/B</li>
                <li>• <strong>Reliability:</strong> Fewer components to fail</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-green-800">Digital Signal Processing</h3>
              <p className="text-green-700 mb-4">
                Integration of DSP allows solid state amps to offer features impossible in analog designs.
              </p>
              <ul className="space-y-2 text-green-700">
                <li>• <strong>Built-in effects:</strong> Reverb, delay, modulation</li>
                <li>• <strong>Speaker simulation:</strong> Direct recording capabilities</li>
                <li>• <strong>Preset memory:</strong> Save and recall settings</li>
                <li>• <strong>MIDI control:</strong> Integration with modern rigs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Applications for Solid State</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-purple-800">Studio Work</h3>
              <p className="text-purple-700 mb-4">
                Consistent tone and immediate availability make solid state amps excellent for recording.
              </p>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>• No warm-up time</li>
                <li>• Consistent session to session</li>
                <li>• Low noise floor</li>
                <li>• Direct recording features</li>
              </ul>
            </div>
            
            <div className="bg-teal-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-teal-800">Live Performance</h3>
              <p className="text-teal-700 mb-4">
                Reliability and consistent output make solid state ideal for gigging musicians.
              </p>
              <ul className="text-teal-700 text-sm space-y-1">
                <li>• Weather resistant</li>
                <li>• No tube replacement</li>
                <li>• Instant on operation</li>
                <li>• Lightweight for transport</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-yellow-800">Clean Platform</h3>
              <p className="text-yellow-700 mb-4">
                Excellent as a clean platform for effects pedals and outboard processing.
              </p>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• Neutral tone canvas</li>
                <li>• High headroom</li>
                <li>• Effects loop quality</li>
                <li>• Pedal-friendly input</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Genres and Styles */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Musical Styles and Solid State</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-indigo-800">Ideal Genres</h3>
              <ul className="space-y-2 text-indigo-700">
                <li>• <strong>Jazz:</strong> Clean, clear articulation</li>
                <li>• <strong>Country:</strong> Bright, punchy clean tones</li>
                <li>• <strong>Funk:</strong> Tight, percussive response</li>
                <li>• <strong>Metal:</strong> Tight bass, clear note definition</li>
                <li>• <strong>Pop:</strong> Consistent, polished sound</li>
                <li>• <strong>Electronic music:</strong> Integration with digital systems</li>
              </ul>
            </div>
            
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-red-800">Challenging Genres</h3>
              <p className="text-red-700 mb-4">
                While modern solid state amps can handle any genre, some styles traditionally favor tubes:
              </p>
              <ul className="space-y-2 text-red-700">
                <li>• <strong>Blues:</strong> Prefers natural tube compression</li>
                <li>• <strong>Classic rock:</strong> Tube saturation is traditional</li>
                <li>• <strong>Vintage styles:</strong> Historical tube precedent</li>
              </ul>
              <p className="text-red-700 text-sm mt-4">
                Note: Many modern solid state amps can convincingly emulate these tones.
              </p>
            </div>
          </div>
        </section>

        {/* Maintenance and Care */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Maintenance and Care</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-green-800">Routine Maintenance</h3>
              <p className="text-green-700 mb-4">
                Solid state amps require minimal maintenance compared to tube amplifiers.
              </p>
              <ul className="space-y-2 text-green-700">
                <li>• <strong>Cleaning:</strong> Regular dusting of vents and controls</li>
                <li>• <strong>Connections:</strong> Check input jacks and speaker connections</li>
                <li>• <strong>Storage:</strong> Keep in dry environment when not in use</li>
                <li>• <strong>Transport:</strong> Protect from physical shock</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-orange-800">Troubleshooting</h3>
              <p className="text-orange-700 mb-4">
                Common issues and solutions for solid state amplifiers.
              </p>
              <ul className="space-y-2 text-orange-700">
                <li>• <strong>No sound:</strong> Check power, fuses, and connections</li>
                <li>• <strong>Distorted clean:</strong> Verify input levels and gain settings</li>
                <li>• <strong>Noise:</strong> Check for bad cables or grounding issues</li>
                <li>• <strong>Intermittent:</strong> Inspect jacks and switches</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Buying Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Choosing a Solid State Amp</h2>
          
          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-blue-800">💡 Recommendations by Budget</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Budget ($100-300)</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Fender Frontman series</li>
                  <li>• Boss Katana Mini</li>
                  <li>• Orange Crush 20</li>
                  <li>• Peavey Vypyr VIP</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Mid-Range ($300-800)</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Boss Katana 100</li>
                  <li>• Fender Mustang GTX</li>
                  <li>• Orange Crush Pro 120</li>
                  <li>• Quilter MicroPro</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Professional ($800+)</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Roland JC-120</li>
                  <li>• Quilter SuperBlock US</li>
                  <li>• Tech 21 Trademark 300</li>
                  <li>• Matrix GT1000FX</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Future of Solid State */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Future of Solid State</h2>
          
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Emerging Technologies</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">AI and Machine Learning</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Advanced algorithms are being developed to more accurately model tube behavior and create 
                  new tonal possibilities.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Improved Modeling</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Next-generation modeling technology continues to close the gap between solid state and 
                  tube amplification.
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
                href="/lessons/gear/amps/tube" 
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-blue-600 mb-2">← Tube Amps</h4>
                <p className="text-sm text-gray-600">Classic warmth and vintage tone</p>
              </Link>
              <Link 
                href="/lessons/gear/amps/modeling" 
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-blue-600 mb-2">Modeling Amps →</h4>
                <p className="text-sm text-gray-600">Digital versatility and amp simulation</p>
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
