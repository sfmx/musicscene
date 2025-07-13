import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TubeAmpsPage() {
  return (
    <Layout>
      <Header
        title="Tube Amplifiers"
        subtitle="The gold standard of guitar amplification - warmth, dynamics, and vintage tone"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-8 mb-8 not-prose">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Tube Amplifiers: The Heart of Rock & Roll
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Discover why vacuum tube amplifiers remain the preferred choice of professional musicians worldwide.
            </p>
            <div className="bg-orange-50 rounded-lg p-4">
              <h3 className="font-semibold text-orange-800 mb-2">What You&apos;ll Learn:</h3>
              <ul className="text-orange-700 space-y-1">
                <li>• How vacuum tubes create their legendary warm tone</li>
                <li>• Different tube types and their sonic characteristics</li>
                <li>• Famous tube amplifiers and their signature sounds</li>
                <li>• Maintenance, care, and tube replacement</li>
                <li>• Why tubes still matter in the digital age</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How Tube Amps Work */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">How Tube Amplifiers Work</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Vacuum Tube Technology</h3>
              <p className="text-blue-700 mb-4">
                Vacuum tubes, invented in the early 1900s, amplify electrical signals by controlling the flow of electrons 
                through a vacuum. This process creates the warm, musical distortion that guitarists love.
              </p>
              <ul className="space-y-2 text-blue-700">
                <li>• <strong>Cathode:</strong> Heated element that emits electrons</li>
                <li>• <strong>Anode:</strong> Attracts electrons, completing the circuit</li>
                <li>• <strong>Grid:</strong> Controls electron flow, creating amplification</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-800">The Tube Amp Signal Chain</h3>
              <p className="text-green-700 mb-4">
                Understanding the signal path helps you appreciate how each stage contributes to the final tone.
              </p>
              <div className="space-y-2 text-green-700">
                <p>• <strong>Input:</strong> Guitar signal enters the first preamp tube</p>
                <p>• <strong>Preamp:</strong> Multiple tube stages shape and color the tone</p>
                <p>• <strong>Power tubes:</strong> Amplify the signal to drive speakers</p>
                <p>• <strong>Output transformer:</strong> Matches impedance to speakers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tube Types */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Common Tube Types</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-purple-800">Preamp Tubes</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-700">12AX7 (ECC83)</h4>
                  <p className="text-purple-600 text-sm">High gain, bright tone. Most common preamp tube.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700">12AU7 (ECC82)</h4>
                  <p className="text-purple-600 text-sm">Lower gain, warmer tone. Often used in reverb circuits.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700">12AT7 (ECC81)</h4>
                  <p className="text-purple-600 text-sm">Medium gain, balanced tone. Good for phase inverters.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-teal-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-teal-800">Power Tubes</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-teal-700">EL34</h4>
                  <p className="text-teal-600 text-sm">British sound, compressed midrange. Used in Marshall amps.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-700">6L6</h4>
                  <p className="text-teal-600 text-sm">American tone, tight bass, clear highs. Fender's choice.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-700">KT88</h4>
                  <p className="text-teal-600 text-sm">High power, excellent headroom. Used in high-end amps.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages and Characteristics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Choose Tube Amplifiers?</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-yellow-800">Tonal Warmth</h3>
              <p className="text-yellow-700 mb-4">
                Tubes produce even-order harmonics that sound musical and pleasing to the ear, 
                creating the legendary "warmth" that digital technology struggles to replicate.
              </p>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• Natural compression</li>
                <li>• Harmonic richness</li>
                <li>• Musical saturation</li>
              </ul>
            </div>
            
            <div className="bg-pink-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-pink-800">Dynamic Response</h3>
              <p className="text-pink-700 mb-4">
                Tube amps respond to your playing dynamics like no other amplification technology, 
                rewarding technique and touch sensitivity.
              </p>
              <ul className="text-pink-700 text-sm space-y-1">
                <li>• Touch sensitivity</li>
                <li>• Pick attack response</li>
                <li>• Volume knob cleanup</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-indigo-800">Natural Overdrive</h3>
              <p className="text-indigo-700 mb-4">
                When pushed, tubes distort in a musical way that enhances rather than masks 
                the original signal, creating the classic rock and blues tones.
              </p>
              <ul className="text-indigo-700 text-sm space-y-1">
                <li>• Smooth saturation</li>
                <li>• Musical breakup</li>
                <li>• Sustain and bloom</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Famous Tube Amplifiers */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Legendary Tube Amplifiers</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Classic American Amps</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Fender Twin Reverb</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    The gold standard for clean tone. Used by countless country, jazz, and rock players.
                  </p>
                  <p className="text-xs text-gray-600">Notable users: Eric Johnson, Mark Knopfler</p>
                </div>
                <div>
                  <h4 className="font-semibold">Fender Deluxe Reverb</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Perfect balance of clean headroom and natural tube breakup. Studio favorite.
                  </p>
                  <p className="text-xs text-gray-600">Notable users: John Mayer, Keith Richards</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">British Legends</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Marshall JCM800</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    The sound of 80s rock and metal. Aggressive midrange and singing sustain.
                  </p>
                  <p className="text-xs text-gray-600">Notable users: Slash, Zakk Wylde</p>
                </div>
                <div>
                  <h4 className="font-semibold">Vox AC30</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Chimey, bright tone with beautiful natural compression. The Beatles' choice.
                  </p>
                  <p className="text-xs text-gray-600">Notable users: Brian May, The Edge</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance and Care */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Tube Amp Maintenance</h2>
          
          <div className="bg-red-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-red-800">⚠️ Safety First</h3>
            <p className="text-red-700 mb-4">
              Tube amplifiers contain high voltages that can be lethal. Always have qualified technicians 
              perform internal maintenance and repairs.
            </p>
            <ul className="text-red-700 space-y-1">
              <li>• Never remove the chassis while plugged in</li>
              <li>• Capacitors can hold charge even when unplugged</li>
              <li>• Always use proper safety procedures</li>
            </ul>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-green-800">Routine Maintenance</h3>
              <ul className="space-y-2 text-green-700">
                <li>• <strong>Tube replacement:</strong> Every 1-3 years depending on use</li>
                <li>• <strong>Bias adjustment:</strong> When replacing power tubes</li>
                <li>• <strong>Cleaning:</strong> Keep vents clear of dust and debris</li>
                <li>• <strong>Transport care:</strong> Remove tubes for long moves</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-blue-800">Signs Your Tubes Need Replacement</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• Loss of volume or power</li>
                <li>• Increased noise or microphonics</li>
                <li>• Distorted or weak tone</li>
                <li>• Red plating (visible through tube glass)</li>
                <li>• Intermittent cutting out</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tube Amp vs Others */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Tube vs. Other Technologies</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Feature</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tube Amps</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Solid State</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Modeling</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium">Tone Quality</td>
                  <td className="px-6 py-4 text-green-600">Warm, musical</td>
                  <td className="px-6 py-4 text-yellow-600">Clean, accurate</td>
                  <td className="px-6 py-4 text-blue-600">Versatile, varied</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Maintenance</td>
                  <td className="px-6 py-4 text-red-600">High</td>
                  <td className="px-6 py-4 text-green-600">Low</td>
                  <td className="px-6 py-4 text-green-600">Low</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Weight</td>
                  <td className="px-6 py-4 text-red-600">Heavy</td>
                  <td className="px-6 py-4 text-green-600">Light</td>
                  <td className="px-6 py-4 text-yellow-600">Medium</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Cost</td>
                  <td className="px-6 py-4 text-red-600">High</td>
                  <td className="px-6 py-4 text-green-600">Low</td>
                  <td className="px-6 py-4 text-yellow-600">Medium</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Reliability</td>
                  <td className="px-6 py-4 text-yellow-600">Good</td>
                  <td className="px-6 py-4 text-green-600">Excellent</td>
                  <td className="px-6 py-4 text-green-600">Excellent</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Buying Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Buying Your First Tube Amp</h2>
          
          <div className="bg-orange-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-orange-800">💡 Beginner Recommendations</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">Budget ($300-600)</h4>
                <ul className="text-orange-700 text-sm space-y-1">
                  <li>• Fender Blues Junior</li>
                  <li>• Vox AC15</li>
                  <li>• Marshall DSL20CR</li>
                  <li>• Orange Crush 35RT</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">Mid-Range ($600-1200)</h4>
                <ul className="text-orange-700 text-sm space-y-1">
                  <li>• Fender Deluxe Reverb</li>
                  <li>• Vox AC30</li>
                  <li>• Marshall JCM800 Studio</li>
                  <li>• Mesa Boogie Express</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">Professional ($1200+)</h4>
                <ul className="text-orange-700 text-sm space-y-1">
                  <li>• Fender Twin Reverb</li>
                  <li>• Marshall Plexi</li>
                  <li>• Mesa Boogie Mark V</li>
                  <li>• Dumble-style boutique</li>
                </ul>
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
                href="/lessons/gear/amps/solid-state" 
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-blue-600 mb-2">Solid State Amps →</h4>
                <p className="text-sm text-gray-600">Reliable, affordable, and low maintenance</p>
              </Link>
              <Link 
                href="/lessons/gear/amps/modeling" 
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-blue-600 mb-2">Modeling Amps →</h4>
                <p className="text-sm text-gray-600">Digital versatility and modern features</p>
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
