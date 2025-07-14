import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const accessoryTypes = [
  {
    name: 'Guitar Picks',
    icon: <span style={{ fontSize: 32 }}>🪙</span>,
    href: '/lessons/gear/accessories/picks',
    description: 'Essential for most guitarists. Available in many shapes and thicknesses.',
  },
  {
    name: 'Capos',
    icon: <span style={{ fontSize: 32 }}>🧲</span>,
    href: '/lessons/gear/accessories/capos',
    description: 'Change the key of your guitar easily.',
  },
  {
    name: 'Tuners',
    icon: <span style={{ fontSize: 32 }}>🎛️</span>,
    href: '/lessons/gear/accessories/tuners',
    description: 'Keep your instrument in perfect pitch.',
  },
  {
    name: 'Straps',
    icon: <span style={{ fontSize: 32 }}>🪢</span>,
    href: '/lessons/gear/accessories/straps',
    description: 'Play comfortably while standing.',
  },
  {
    name: 'Cables',
    icon: <span style={{ fontSize: 32 }}>🔌</span>,
    href: '/lessons/gear/accessories/cables',
    description: 'Connect your gear reliably.',
  },
  {
    name: 'Cases & Bags',
    icon: <span style={{ fontSize: 32 }}>🎒</span>,
    href: '/lessons/gear/accessories/cases',
    description: 'Protect your instrument on the go.',
  },
  {
    name: 'Stands & Hangers',
    icon: <span style={{ fontSize: 32 }}>🪑</span>,
    href: '/lessons/gear/accessories/stands',
    description: 'Store your instrument safely and accessibly.',
  },
  {
    name: 'Slides',
    icon: <span style={{ fontSize: 32 }}>🧊</span>,
    href: '/lessons/gear/accessories/slides',
    description: 'For blues and unique sounds.',
  },
  {
    name: 'Metronomes',
    icon: <span style={{ fontSize: 32 }}>⏲️</span>,
    href: '/lessons/gear/accessories/metronomes',
    description: 'Practice your timing and rhythm.',
  },
];

export default function AccessoriesPage() {
  return (
    <Layout>
      <Header
        title="Guitar Accessories & Essentials"
        subtitle="Complete your setup with the right tools - from picks to metronomes, everything you need to play better"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-lg p-8 mb-8 not-prose">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Accessories: The Essential Toolkit
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              The right accessories can transform your playing experience. From basic picks to advanced 
              tools, discover what every guitarist needs in their arsenal.
            </p>
            <div className="bg-teal-50 rounded-lg p-4">
              <h3 className="font-semibold text-teal-800 mb-2">What You'll Learn:</h3>
              <ul className="text-teal-700 space-y-1">
                <li>• Essential accessories every guitarist needs</li>
                <li>• How the right tools improve your playing</li>
                <li>• Quality vs. budget considerations</li>
                <li>• Maintenance and care for your accessories</li>
                <li>• Professional setup and organization tips</li>
                <li>• When and why to upgrade your gear</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Accessories Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Essential Guitar Accessories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
            {accessoryTypes.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex flex-col items-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-teal-300"
              >
                <div className="mb-4 text-teal-600">{item.icon}</div>
                <div className="font-bold text-xl mb-2 text-center">{item.name}</div>
                <div className="text-sm text-gray-600 text-center leading-relaxed">
                  {item.description}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Accessory Priorities */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Building Your Accessory Collection</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Essential First Purchases</h3>
              <p className="text-blue-700 mb-4">
                Start with the basics that every guitarist absolutely needs for proper playing and practice.
              </p>
              <ul className="space-y-2 text-blue-700 text-sm">
                <li>• <strong>Guitar Picks:</strong> Multiple thicknesses</li>
                <li>• <strong>Tuner:</strong> Clip-on or pedal style</li>
                <li>• <strong>Guitar Cable:</strong> Quality instrument cable</li>
                <li>• <strong>Strap:</strong> Comfortable and adjustable</li>
                <li>• <strong>Case/Bag:</strong> Protection for your guitar</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-orange-800">Next Level Additions</h3>
              <p className="text-orange-700 mb-4">
                Once you have the basics, these accessories will enhance your playing and practice.
              </p>
              <ul className="space-y-2 text-orange-700 text-sm">
                <li>• <strong>Capo:</strong> For key changes and new voicings</li>
                <li>• <strong>Guitar Stand:</strong> Safe storage and easy access</li>
                <li>• <strong>Metronome:</strong> Develop solid timing</li>
                <li>• <strong>Slide:</strong> For blues and experimental sounds</li>
                <li>• <strong>Multiple Cables:</strong> Backup and different lengths</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quality vs Budget */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Quality vs. Budget Considerations</h2>
          
          <div className="bg-yellow-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-3 text-yellow-800">🎯 Smart Shopping Tips</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Buy Quality Once</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Guitar cases and bags</li>
                  <li>• Instrument cables</li>
                  <li>• Guitar stands</li>
                  <li>• Quality tuners</li>
                  <li>• Professional straps</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Budget Options Work</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Guitar picks (try variety packs)</li>
                  <li>• Basic capos</li>
                  <li>• Simple metronomes</li>
                  <li>• Starter accessories</li>
                  <li>• Practice tools</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Upgrade When Ready</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Slides (material preference)</li>
                  <li>• Premium picks</li>
                  <li>• Advanced tuners</li>
                  <li>• Specialized accessories</li>
                  <li>• Performance gear</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Organization Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Accessory Organization & Care</h2>
          
          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-purple-800">Keep Everything Organized</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Storage Solutions</h4>
                <ul className="space-y-1 text-purple-700 text-sm">
                  <li>• Pick holders and dispensers</li>
                  <li>• Accessory pouches in guitar cases</li>
                  <li>• Dedicated accessory cases</li>
                  <li>• Wall-mounted organizers</li>
                  <li>• Practice station setup</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Maintenance Tips</h4>
                <ul className="space-y-1 text-purple-700 text-sm">
                  <li>• Clean cables and connectors regularly</li>
                  <li>• Store picks in dry environments</li>
                  <li>• Check tuner battery levels</li>
                  <li>• Inspect straps for wear</li>
                  <li>• Replace items before they fail</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Famous Guitarists' Accessories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Legendary Accessory Choices</h2>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Iconic Accessories in Music</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Famous Pick Users</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• <strong>Eddie Van Halen:</strong> Fender Heavy picks</li>
                  <li>• <strong>Eric Clapton:</strong> Martin Medium picks</li>
                  <li>• <strong>Brian May:</strong> Sixpence coin as pick</li>
                  <li>• <strong>Billy Gibbons:</strong> Mexican peso picks</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Iconic Slides & Capos</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• <strong>Duane Allman:</strong> Coricidin bottle slide</li>
                  <li>• <strong>Keith Richards:</strong> Open G capo setup</li>
                  <li>• <strong>Joni Mitchell:</strong> Custom tunings with capos</li>
                  <li>• <strong>Derek Trucks:</strong> Glass slide technique</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </Layout>
  );
}
