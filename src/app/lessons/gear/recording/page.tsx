import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const recordingTypes = [
  {
    name: 'Audio Interfaces',
    icon: <span style={{ fontSize: 32 }}>🎚️</span>,
    href: '/lessons/gear/recording/interfaces',
    description: 'Connect your instruments and microphones to your computer.',
  },
  {
    name: 'Microphones',
    icon: <span style={{ fontSize: 32 }}>🎤</span>,
    href: '/lessons/gear/recording/microphones',
    description: 'Capture vocals and instruments with clarity.',
  },
  {
    name: 'DAWs',
    icon: <span style={{ fontSize: 32 }}>💻</span>,
    href: '/lessons/gear/recording/daw',
    description: 'Digital Audio Workstations for recording and mixing.',
  },
  {
    name: 'Monitors & Headphones',
    icon: <span style={{ fontSize: 32 }}>🎧</span>,
    href: '/lessons/gear/recording/monitors-headphones',
    description: 'Hear your music accurately while mixing and recording.',
  },
  {
    name: 'Preamps',
    icon: <span style={{ fontSize: 32 }}>🔊</span>,
    href: '/lessons/gear/recording/preamps',
    description: 'Boost microphone and instrument signals for recording.',
  },
  {
    name: 'Cables & Accessories',
    icon: <span style={{ fontSize: 32 }}>🔌</span>,
    href: '/lessons/gear/recording/cables',
    description: 'Essential connections and tools for your studio.',
  },
];

export default function RecordingPage() {
  return (
    <Layout>
      <Header
        title="Recording Gear & Home Studio"
        subtitle="Master the art of music production - from bedroom setups to professional studios"
      />
      
      <main className="prose mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-8 mb-8 not-prose">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Recording: Capture Your Music
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Build your dream studio with the right gear. From basic home recording to professional production, 
              understand the tools that bring your musical ideas to life.
            </p>
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-2">What You'll Learn:</h3>
              <ul className="text-blue-700 space-y-1">
                <li>• Essential recording gear for any budget</li>
                <li>• Setting up your home studio for best results</li>
                <li>• Understanding audio interfaces and signal flow</li>
                <li>• Choosing the right microphones for your needs</li>
                <li>• Digital Audio Workstation (DAW) selection and usage</li>
                <li>• Monitoring and mixing with proper speakers/headphones</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Recording Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Recording Equipment Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
            {recordingTypes.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex flex-col items-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300"
              >
                <div className="mb-4 text-blue-600">{item.icon}</div>
                <div className="font-bold text-xl mb-2 text-center">{item.name}</div>
                <div className="text-sm text-gray-600 text-center leading-relaxed">
                  {item.description}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Recording Fundamentals */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Home Studio Fundamentals</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Signal Chain</h3>
              <p className="text-green-700 mb-4">
                Understanding the path your audio takes from instrument to final recording.
              </p>
              <div className="space-y-2 text-green-700 text-sm">
                <p>1. <strong>Source:</strong> Guitar, voice, instrument</p>
                <p>2. <strong>Preamp:</strong> Boost signal level</p>
                <p>3. <strong>Interface:</strong> Convert to digital</p>
                <p>4. <strong>DAW:</strong> Record and process</p>
                <p>5. <strong>Monitors:</strong> Playback and mixing</p>
              </div>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-orange-800">Room Acoustics</h3>
              <p className="text-orange-700 mb-4">
                Your recording environment affects everything from capture to mixing.
              </p>
              <ul className="space-y-2 text-orange-700 text-sm">
                <li>• <strong>Treatment:</strong> Absorb reflections</li>
                <li>• <strong>Isolation:</strong> Prevent bleed and noise</li>
                <li>• <strong>Positioning:</strong> Optimize speaker placement</li>
                <li>• <strong>Monitoring:</strong> Accurate listening environment</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Studio Setup Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Studio Setup by Budget</h2>
          
          <div className="bg-yellow-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-3 text-yellow-800">🎯 Essential Setups</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Starter Studio ($300-800)</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• USB Audio Interface</li>
                  <li>• Dynamic Microphone</li>
                  <li>• Studio Headphones</li>
                  <li>• Free/Budget DAW</li>
                  <li>• Basic Cables</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Home Studio ($800-2500)</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Multi-input Interface</li>
                  <li>• Condenser + Dynamic Mics</li>
                  <li>• Studio Monitors + Headphones</li>
                  <li>• Professional DAW</li>
                  <li>• Acoustic Treatment</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Pro Setup ($2500+)</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• High-end Interface/Preamps</li>
                  <li>• Multiple Premium Mics</li>
                  <li>• Reference Monitors</li>
                  <li>• Full Room Treatment</li>
                  <li>• Hardware Processing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Famous Home Studios */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Legendary Home Studios</h2>
          
          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-purple-800">Studios That Changed Music</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Bedroom Productions</h4>
                <ul className="space-y-1 text-purple-700 text-sm">
                  <li>• <strong>Billie Eilish:</strong> Bedroom studio with Finneas</li>
                  <li>• <strong>Tame Impala:</strong> Kevin Parker's home setup</li>
                  <li>• <strong>Bon Iver:</strong> Cabin recordings (For Emma)</li>
                  <li>• <strong>Tyler, The Creator:</strong> Bedroom beats to Grammy wins</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Home Studio Legends</h4>
                <ul className="space-y-1 text-purple-700 text-sm">
                  <li>• <strong>Nine Inch Nails:</strong> Trent Reznor's home studio</li>
                  <li>• <strong>Beck:</strong> Multi-album home recordings</li>
                  <li>• <strong>Sufjan Stevens:</strong> Bedroom symphonies</li>
                  <li>• <strong>Mac DeMarco:</strong> Lo-fi home recordings</li>
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
