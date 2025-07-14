import Link from 'next/link';

export default function InterfacesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/lessons/gear/recording" className="text-blue-600 hover:text-blue-800 font-medium">
          ← Back to Recording Gear
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Audio Interfaces
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          The bridge between analog and digital worlds. Audio interfaces convert your 
          instrument and microphone signals into digital audio your computer can record and process.
        </p>
      </div>

      {/* What is an Audio Interface */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What is an Audio Interface?</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            An audio interface is a hardware device that connects your instruments, microphones, 
            and studio monitors to your computer. It handles analog-to-digital conversion (ADC) 
            for recording and digital-to-analog conversion (DAC) for playback.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Functions</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Convert analog signals to digital (ADC)</li>
                <li>• Convert digital signals to analog (DAC)</li>
                <li>• Provide phantom power for condensers</li>
                <li>• Offer low-latency monitoring</li>
                <li>• Supply multiple inputs/outputs</li>
                <li>• Improve audio quality over built-in cards</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Why You Need One</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Better sound quality than computer audio</li>
                <li>• Professional XLR and TRS connections</li>
                <li>• Multiple simultaneous recordings</li>
                <li>• Direct monitoring without delay</li>
                <li>• Dedicated preamps for microphones</li>
                <li>• Proper impedance matching</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Specifications */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Specifications to Consider</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Specs</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Sample Rate & Bit Depth</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• <strong>44.1/48 kHz:</strong> Standard quality (CD/broadcast)</li>
                  <li>• <strong>96/192 kHz:</strong> High resolution recording</li>
                  <li>• <strong>24-bit:</strong> Professional dynamic range</li>
                  <li>• <strong>32-bit float:</strong> Maximum headroom</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Latency</h4>
                <p className="text-gray-700 text-sm">
                  Round-trip latency under 10ms is ideal for real-time monitoring 
                  and recording. Lower buffer sizes reduce latency but require more CPU.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Physical Features</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Inputs & Outputs</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• <strong>XLR:</strong> Microphone inputs with phantom power</li>
                  <li>• <strong>TRS/TS:</strong> Line and instrument inputs</li>
                  <li>• <strong>Combo jacks:</strong> XLR/TRS combination</li>
                  <li>• <strong>Monitor outputs:</strong> For studio speakers</li>
                  <li>• <strong>Headphone out:</strong> Independent monitoring</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Connection Types</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• <strong>USB:</strong> Most common, plug-and-play</li>
                  <li>• <strong>Thunderbolt:</strong> Faster, more channels</li>
                  <li>• <strong>PCIe:</strong> Internal cards for desktops</li>
                  <li>• <strong>Ethernet:</strong> Network audio protocols</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interface Categories */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Audio Interfaces</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">USB Interfaces</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">2-Channel (Beginner)</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• 1-2 mic/line inputs</li>
                  <li>• Direct monitoring</li>
                  <li>• Headphone output</li>
                  <li>• USB bus powered</li>
                  <li>• $50-200 range</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">4-8 Channel (Home Studio)</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Multiple combo inputs</li>
                  <li>• MIDI I/O</li>
                  <li>• Monitor mixing</li>
                  <li>• External power supply</li>
                  <li>• $200-800 range</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Multi-Channel (Professional)</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• 8+ simultaneous inputs</li>
                  <li>• Advanced routing</li>
                  <li>• DSP processing</li>
                  <li>• Expandable systems</li>
                  <li>• $800+ range</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Thunderbolt & PCIe Interfaces</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Thunderbolt Advantages</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Ultra-low latency performance</li>
                  <li>• High channel counts (32+ I/O)</li>
                  <li>• Stable, professional connection</li>
                  <li>• Chain multiple devices</li>
                  <li>• Best for demanding productions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">PCIe Cards</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Internal desktop installation</li>
                  <li>• Maximum performance and stability</li>
                  <li>• Professional studio standard</li>
                  <li>• Dedicated DSP processing</li>
                  <li>• Requires compatible computer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Famous Interfaces */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular Audio Interfaces</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-800 mb-4">Beginner Favorites</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-purple-700">Focusrite Scarlett Solo/2i2</h4>
                <p className="text-purple-600 text-sm">Industry standard for home recording beginners</p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700">PreSonus AudioBox USB 96</h4>
                <p className="text-purple-600 text-sm">Reliable and affordable 2x2 interface</p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700">Behringer U-Phoria UM2</h4>
                <p className="text-purple-600 text-sm">Ultra-budget option for getting started</p>
              </div>
            </div>
          </div>
          
          <div className="bg-orange-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-orange-800 mb-4">Professional Choice</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-orange-700">Universal Audio Apollo</h4>
                <p className="text-orange-600 text-sm">Premium preamps with onboard UAD processing</p>
              </div>
              <div>
                <h4 className="font-semibold text-orange-700">RME Babyface Pro FS</h4>
                <p className="text-orange-600 text-sm">Exceptional drivers and build quality</p>
              </div>
              <div>
                <h4 className="font-semibold text-orange-700">Zoom PodTrak P4/P8</h4>
                <p className="text-orange-600 text-sm">Specialized for podcasting and content creation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Setup and Usage Tips */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Setup & Usage Tips</h2>
        <div className="bg-yellow-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">🎯 Getting the Best Performance</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-yellow-700 mb-3">Driver Optimization</h4>
              <ul className="text-yellow-600 space-y-1 text-sm">
                <li>• Install latest drivers from manufacturer</li>
                <li>• Use ASIO drivers on Windows for low latency</li>
                <li>• Adjust buffer size for your needs</li>
                <li>• Close unnecessary programs while recording</li>
                <li>• Use dedicated USB ports (avoid hubs)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-700 mb-3">Level Setting</h4>
              <ul className="text-yellow-600 space-y-1 text-sm">
                <li>• Set input gain for optimal signal level</li>
                <li>• Avoid clipping (red lights/meters)</li>
                <li>• Use phantom power for condenser mics</li>
                <li>• Monitor with headphones during recording</li>
                <li>• Check direct monitoring vs. software monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Troubleshooting Common Issues</h2>
        <div className="space-y-4">
          <div className="bg-red-50 rounded-lg p-4">
            <h3 className="font-semibold text-red-800 mb-2">High Latency</h3>
            <p className="text-red-700 text-sm">
              <strong>Solution:</strong> Lower buffer size in DAW settings, use ASIO drivers, 
              close background apps, upgrade to faster interface.
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-4">
            <h3 className="font-semibold text-red-800 mb-2">No Signal/Crackling Audio</h3>
            <p className="text-red-700 text-sm">
              <strong>Solution:</strong> Check connections, update drivers, try different USB port, 
              adjust sample rate, check phantom power settings.
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-4">
            <h3 className="font-semibold text-red-800 mb-2">Interface Not Recognized</h3>
            <p className="text-red-700 text-sm">
              <strong>Solution:</strong> Install manufacturer drivers, try different cable/port, 
              check device manager, restart computer and interface.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
