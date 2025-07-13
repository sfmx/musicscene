import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ModelingAmpsPage() {
  return (
    <Layout>
      <Header
        title="Modeling Amplifiers"
        subtitle="Digital versatility - hundreds of amps, effects, and possibilities in one package"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-8 mb-8 not-prose">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Modeling Amplifiers: The Digital Revolution
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Experience the power of digital modeling - access legendary amplifiers, effects, and sounds from music history.
            </p>
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold text-purple-800 mb-2">What You&apos;ll Learn:</h3>
              <ul className="text-purple-700 space-y-1">
                <li>• How digital modeling technology recreates classic amps</li>
                <li>• Advantages of modeling for modern musicians</li>
                <li>• Best modeling amps for different needs and budgets</li>
                <li>• Getting great tones from modeling technology</li>
                <li>• Integration with modern recording and performance setups</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How Modeling Works */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">How Modeling Technology Works</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Digital Signal Processing</h3>
              <p className="text-blue-700 mb-4">
                Modeling amps use sophisticated digital algorithms to simulate the behavior of classic amplifiers, 
                speakers, and effects down to the component level.
              </p>
              <ul className="space-y-2 text-blue-700">
                <li>• <strong>Circuit modeling:</strong> Simulates tube and transistor behavior</li>
                <li>• <strong>Speaker simulation:</strong> Models cabinet and speaker response</li>
                <li>• <strong>Room modeling:</strong> Recreates acoustic environments</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Advanced Algorithms</h3>
              <p className="text-green-700 mb-4">
                Modern modeling uses machine learning and advanced mathematics to capture the nuances 
                of analog amplification.
              </p>
              <div className="space-y-2 text-green-700">
                <p>• <strong>Neural networks:</strong> AI-powered tone modeling</p>
                <p>• <strong>Impulse responses:</strong> Precise speaker cabinet modeling</p>
                <p>• <strong>Non-linear processing:</strong> Accurate tube saturation</p>
                <p>• <strong>Dynamic response:</strong> Touch-sensitive playing feel</p>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages of Modeling */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Choose Modeling Amplifiers?</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-yellow-800">Versatility</h3>
              <p className="text-yellow-700 mb-4">
                Access hundreds of amplifier models, effects, and speaker cabinets in a single unit, 
                covering every genre and era of music.
              </p>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• Multiple amp models</li>
                <li>• Built-in effects</li>
                <li>• Speaker simulations</li>
                <li>• Preset storage</li>
              </ul>
            </div>
            
            <div className="bg-pink-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-pink-800">Modern Features</h3>
              <p className="text-pink-700 mb-4">
                Modeling amps offer features impossible in analog amplifiers, perfect for modern 
                recording and performance needs.
              </p>
              <ul className="text-pink-700 text-sm space-y-1">
                <li>• USB recording interface</li>
                <li>• Bluetooth connectivity</li>
                <li>• Mobile app control</li>
                <li>• MIDI integration</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-indigo-800">Practicality</h3>
              <p className="text-indigo-700 mb-4">
                Perfect for home practice, recording, and venues where volume control and 
                consistency are important.
              </p>
              <ul className="text-indigo-700 text-sm space-y-1">
                <li>• Silent practice with headphones</li>
                <li>• No tube maintenance</li>
                <li>• Lightweight and portable</li>
                <li>• Instant tone access</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Types of Modeling */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Types of Modeling Technology</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-teal-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-teal-800">Analog Modeling</h3>
              <p className="text-teal-700 mb-4">
                Uses analog circuits to approximate tube and transistor behavior. Simpler but effective approach.
              </p>
              <ul className="space-y-2 text-teal-700">
                <li>• <strong>Circuit-based:</strong> Analog components mimic tube response</li>
                <li>• <strong>Real-time:</strong> Zero latency processing</li>
                <li>• <strong>Natural feel:</strong> Responds like analog circuits</li>
                <li>• <strong>Examples:</strong> Tech 21 SansAmp, AMT Electronics</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-orange-800">Digital Modeling</h3>
              <p className="text-orange-700 mb-4">
                Computer-based processing that can model any amplifier with extreme accuracy and flexibility.
              </p>
              <ul className="space-y-2 text-orange-700">
                <li>• <strong>DSP-based:</strong> Software algorithms process signal</li>
                <li>• <strong>Precise modeling:</strong> Exact component-level simulation</li>
                <li>• <strong>Updateable:</strong> New models via firmware updates</li>
                <li>• <strong>Examples:</strong> Line 6 Helix, Fractal Axe-FX</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Popular Modeling Platforms */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Leading Modeling Amplifiers</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Professional Level</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Fractal Audio Axe-FX III</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Industry-leading modeling processor used by top touring musicians worldwide.
                  </p>
                  <p className="text-xs text-gray-600">Notable users: Steve Vai, John Petrucci</p>
                </div>
                <div>
                  <h4 className="font-semibold">Line 6 Helix Floor</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Comprehensive modeling system with intuitive interface and extensive I/O.
                  </p>
                  <p className="text-xs text-gray-600">Popular in studios and live rigs</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Consumer Favorites</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Boss Katana Series</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Excellent modeling amps that blend digital versatility with analog feel.
                  </p>
                  <p className="text-xs text-gray-600">Great value for money and reliability</p>
                </div>
                <div>
                  <h4 className="font-semibold">Fender Mustang GTX</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Modern modeling with classic Fender aesthetics and smartphone integration.
                  </p>
                  <p className="text-xs text-gray-600">Ideal for home and small venue use</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Great Tones */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Maximizing Your Modeling Amp</h2>
          
          <div className="bg-purple-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-purple-800">🎯 Tone Tips</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Start with Presets</h4>
                <ul className="space-y-1 text-purple-700 text-sm">
                  <li>• Explore factory presets first</li>
                  <li>• Learn what each model excels at</li>
                  <li>• Use presets as starting points</li>
                  <li>• Download artist presets online</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Fine-Tuning</h4>
                <ul className="space-y-1 text-purple-700 text-sm">
                  <li>• Adjust for your guitar and playing style</li>
                  <li>• Consider your output device (speakers/headphones)</li>
                  <li>• Use global EQ to match your room</li>
                  <li>• Save your tweaked versions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Recording Applications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Recording with Modeling Amps</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-blue-800">Direct Recording</h3>
              <p className="text-blue-700 mb-4">
                Modeling amps excel at direct recording, eliminating the need for microphones and acoustic treatment.
              </p>
              <ul className="space-y-2 text-blue-700">
                <li>• <strong>USB interface:</strong> Direct to DAW recording</li>
                <li>• <strong>Cabinet simulation:</strong> No microphone needed</li>
                <li>• <strong>Consistent results:</strong> Same tone every time</li>
                <li>• <strong>Silent recording:</strong> Perfect for home studios</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-green-800">Live Performance</h3>
              <p className="text-green-700 mb-4">
                Modern modeling amps provide professional live performance capabilities with advanced features.
              </p>
              <ul className="space-y-2 text-green-700">
                <li>• <strong>FRFR speakers:</strong> Full range, flat response monitoring</li>
                <li>• <strong>Preset switching:</strong> Song-specific tones instantly</li>
                <li>• <strong>Effects integration:</strong> Complete signal processing</li>
                <li>• <strong>Backup reliability:</strong> Multiple amp models available</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Comparison with Traditional Amps */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Modeling vs. Traditional Amplifiers</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Feature</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Modeling</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tube</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Solid State</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium">Versatility</td>
                  <td className="px-6 py-4 text-green-600">Excellent</td>
                  <td className="px-6 py-4 text-yellow-600">Limited</td>
                  <td className="px-6 py-4 text-yellow-600">Limited</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Recording Features</td>
                  <td className="px-6 py-4 text-green-600">Excellent</td>
                  <td className="px-6 py-4 text-red-600">Limited</td>
                  <td className="px-6 py-4 text-yellow-600">Good</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Authenticity</td>
                  <td className="px-6 py-4 text-yellow-600">Very Good</td>
                  <td className="px-6 py-4 text-green-600">Excellent</td>
                  <td className="px-6 py-4 text-blue-600">Good</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Maintenance</td>
                  <td className="px-6 py-4 text-green-600">Low</td>
                  <td className="px-6 py-4 text-red-600">High</td>
                  <td className="px-6 py-4 text-green-600">Low</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Learning Curve</td>
                  <td className="px-6 py-4 text-yellow-600">Medium</td>
                  <td className="px-6 py-4 text-green-600">Easy</td>
                  <td className="px-6 py-4 text-green-600">Easy</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Software and Apps */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Software Integration</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-indigo-800">Mobile Apps</h3>
              <p className="text-indigo-700 mb-4">
                Many modern modeling amps include smartphone and tablet apps for easy preset management.
              </p>
              <ul className="space-y-2 text-indigo-700">
                <li>• <strong>Preset creation:</strong> Build tones on your phone</li>
                <li>• <strong>Amp control:</strong> Wireless parameter adjustment</li>
                <li>• <strong>Preset sharing:</strong> Download community presets</li>
                <li>• <strong>Firmware updates:</strong> Keep your amp current</li>
              </ul>
            </div>
            
            <div className="bg-teal-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-teal-800">Computer Software</h3>
              <p className="text-teal-700 mb-4">
                Desktop editors provide advanced editing capabilities and preset organization.
              </p>
              <ul className="space-y-2 text-teal-700">
                <li>• <strong>Advanced editing:</strong> Deep parameter control</li>
                <li>• <strong>Preset library:</strong> Organize thousands of presets</li>
                <li>• <strong>Backup/restore:</strong> Protect your custom settings</li>
                <li>• <strong>Visual feedback:</strong> See parameter changes graphically</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Buying Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Choosing a Modeling Amp</h2>
          
          <div className="bg-orange-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-orange-800">💡 Consider Your Needs</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">Beginner ($100-400)</h4>
                <ul className="text-orange-700 text-sm space-y-1">
                  <li>• Fender Mustang LT25</li>
                  <li>• Boss Katana Mini</li>
                  <li>• Yamaha THR5</li>
                  <li>• Positive Grid Spark</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">Intermediate ($400-1000)</h4>
                <ul className="text-orange-700 text-sm space-y-1">
                  <li>• Boss Katana 100</li>
                  <li>• Fender Mustang GTX100</li>
                  <li>• Line 6 Spider V 240</li>
                  <li>• Blackstar ID:Core 100</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">Professional ($1000+)</h4>
                <ul className="text-orange-700 text-sm space-y-1">
                  <li>• Line 6 Helix Floor</li>
                  <li>• Fractal Axe-FX III</li>
                  <li>• Neural DSP Quad Cortex</li>
                  <li>• Kemper Profiler</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Future of Modeling */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Future of Modeling</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Emerging Technologies</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">AI and Machine Learning</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Advanced AI algorithms are creating more accurate and responsive amp models, 
                  learning from real amplifier behavior.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Cloud Integration</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Cloud-based preset sharing, automatic updates, and AI-powered tone matching 
                  are becoming standard features.
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
                href="/lessons/gear/amps/solid-state" 
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-blue-600 mb-2">← Solid State Amps</h4>
                <p className="text-sm text-gray-600">Reliable, consistent, and affordable</p>
              </Link>
              <Link 
                href="/lessons/gear/amps/hybrid" 
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-blue-600 mb-2">Hybrid Amps →</h4>
                <p className="text-sm text-gray-600">Combining tube warmth with solid state reliability</p>
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
