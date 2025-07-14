import Link from 'next/link';

export default function CablesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/lessons/gear/recording" className="text-blue-600 hover:text-blue-800 font-medium">
          ← Back to Recording Gear
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg p-8 mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Cables & Studio Accessories
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          The often-overlooked foundation of every studio. Quality cables and accessories 
          ensure reliable connections, proper signal flow, and professional workflow in your recording setup.
        </p>
      </div>

      {/* Why Cables Matter */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Quality Cables Matter</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            Your studio is only as strong as its weakest link. Poor cables can introduce noise, 
            cause signal loss, create intermittent connections, and even damage equipment. 
            Quality cables provide clean signal transfer and reliable long-term performance.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Signs of Poor Cables</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Crackling or intermittent signals</li>
                <li>• Noticeable hum or buzz when connected</li>
                <li>• Loss of high-frequency detail</li>
                <li>• Physical wear and connector corrosion</li>
                <li>• Need to wiggle or adjust for connection</li>
                <li>• Different sound with cable movement</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits of Quality Cables</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Clean, transparent signal transfer</li>
                <li>• Excellent noise rejection and shielding</li>
                <li>• Durable construction for long life</li>
                <li>• Reliable connections every time</li>
                <li>• Better high-frequency response</li>
                <li>• Professional appearance and feel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Audio Cable Types */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Audio Cable Types</h2>
        
        <div className="space-y-6">
          {/* XLR Cables */}
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">XLR Cables (Microphone Cables)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">Characteristics</h4>
                <ul className="text-blue-700 space-y-1">
                  <li>• 3-pin balanced connection (Male to Female)</li>
                  <li>• Excellent noise rejection via balanced design</li>
                  <li>• Locking connector prevents accidental disconnection</li>
                  <li>• Can carry phantom power (+48V)</li>
                  <li>• Professional standard for microphones</li>
                  <li>• Available in various lengths</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">Applications</h4>
                <ul className="text-blue-700 space-y-1">
                  <li>• Microphone to preamp/interface connections</li>
                  <li>• Line-level connections between pro gear</li>
                  <li>• Digital audio connections (AES/EBU)</li>
                  <li>• Long cable runs without signal degradation</li>
                  <li>• Studio and live sound applications</li>
                  <li>• Connecting balanced outputs to inputs</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-blue-100 rounded">
              <h5 className="font-semibold text-blue-800 mb-2">Recommended XLR Cables</h5>
              <p className="text-blue-700 text-sm">
                <strong>Mogami 2534:</strong> Industry standard, excellent shielding • 
                <strong>Canare L-4E6S:</strong> Star-quad design, superior noise rejection • 
                <strong>Neutrik connectors:</strong> Gold standard for XLR terminations
              </p>
            </div>
          </div>

          {/* TRS/TS Cables */}
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">TRS & TS Cables (1/4" Phone Cables)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-800 mb-3">TRS (Tip-Ring-Sleeve)</h4>
                <ul className="text-green-700 space-y-1">
                  <li>• Balanced connection with 3 conductors</li>
                  <li>• Good noise rejection like XLR</li>
                  <li>• Used for line-level balanced connections</li>
                  <li>• Monitor outputs to studio speakers</li>
                  <li>• Insert points on mixing consoles</li>
                  <li>• Headphone connections (stereo)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-3">TS (Tip-Sleeve)</h4>
                <ul className="text-green-700 space-y-1">
                  <li>• Unbalanced connection with 2 conductors</li>
                  <li>• Standard guitar/instrument cable</li>
                  <li>• Shorter runs to minimize noise pickup</li>
                  <li>• Effects pedal connections</li>
                  <li>• High-impedance instrument inputs</li>
                  <li>• Patch bay connections</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-green-100 rounded">
              <h5 className="font-semibold text-green-800 mb-2">Quality 1/4" Cable Brands</h5>
              <p className="text-green-700 text-sm">
                <strong>Monster Cable:</strong> Excellent for instruments • 
                <strong>Mogami 2524:</strong> Professional balanced lines • 
                <strong>George L's:</strong> Low-capacitance instrument cables • 
                <strong>Planet Waves:</strong> Reliable and affordable
              </p>
            </div>
          </div>

          {/* RCA/Phono Cables */}
          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">RCA/Phono Cables</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-800 mb-3">Characteristics</h4>
                <ul className="text-purple-700 space-y-1">
                  <li>• Unbalanced connections (Left & Right)</li>
                  <li>• Consumer audio standard</li>
                  <li>• Typically red (right) and white/black (left)</li>
                  <li>• Lower professional application</li>
                  <li>• Simple plug-in connection</li>
                  <li>• Prone to noise on longer runs</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 mb-3">Studio Applications</h4>
                <ul className="text-purple-700 space-y-1">
                  <li>• Connecting consumer audio devices</li>
                  <li>• CD players and audio sources</li>
                  <li>• Some audio interface outputs</li>
                  <li>• Turntable connections</li>
                  <li>• Tape deck and vintage gear</li>
                  <li>• Short patch connections</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Digital Cables */}
          <div className="bg-orange-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Digital Audio Cables</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">USB</h4>
                <ul className="text-orange-600 text-sm space-y-1">
                  <li>• Computer to audio interface</li>
                  <li>• USB-A, USB-B, USB-C variants</li>
                  <li>• Different speeds (2.0, 3.0, 3.1)</li>
                  <li>• Keep cables under 5 meters</li>
                  <li>• Use quality shielded cables</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">S/PDIF Optical</h4>
                <ul className="text-orange-600 text-sm space-y-1">
                  <li>• Toslink optical connections</li>
                  <li>• Digital audio via light</li>
                  <li>• Immune to electrical interference</li>
                  <li>• Consumer and pro equipment</li>
                  <li>• Handle with care (glass fiber)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">S/PDIF Coaxial</h4>
                <ul className="text-orange-600 text-sm space-y-1">
                  <li>• RCA-style digital connection</li>
                  <li>• 75-ohm impedance cable</li>
                  <li>• Clock and audio data combined</li>
                  <li>• More robust than optical</li>
                  <li>• Professional and consumer gear</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Accessories */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Studio Accessories</h2>
        
        <div className="space-y-6">
          {/* Mic Stands and Boom Arms */}
          <div className="bg-teal-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Microphone Stands & Boom Arms</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-teal-800 mb-3">Stand Types</h4>
                <ul className="text-teal-700 space-y-1">
                  <li>• <strong>Tripod Stands:</strong> Stable base, good for vocals</li>
                  <li>• <strong>Round Base:</strong> Heavy, excellent stability</li>
                  <li>• <strong>Desktop Stands:</strong> Compact for podcasting</li>
                  <li>• <strong>Boom Arms:</strong> Desk-mounted, space-saving</li>
                  <li>• <strong>Low Profile:</strong> Guitar amps and drums</li>
                  <li>• <strong>Overhead Stands:</strong> Tall for drum overheads</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-teal-800 mb-3">Key Features</h4>
                <ul className="text-teal-700 space-y-1">
                  <li>• Quality locking mechanisms</li>
                  <li>• Sturdy construction for stability</li>
                  <li>• Appropriate height range</li>
                  <li>• Boom arm length and positioning</li>
                  <li>• Standard 5/8" threaded connection</li>
                  <li>• Foldable legs for transport</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-teal-100 rounded">
              <p className="text-teal-700 text-sm">
                <strong>Recommended Brands:</strong> K&M (German engineering), On-Stage Stands (affordable), 
                Atlas Sound (heavy-duty), Gator Boom Arms (desktop)
              </p>
            </div>
          </div>

          {/* Shock Mounts and Pop Filters */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Shock Mounts & Pop Filters</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-indigo-800 mb-3">Shock Mounts</h4>
                <ul className="text-indigo-700 space-y-1">
                  <li>• Isolate microphone from stand vibrations</li>
                  <li>• Elastic suspension system</li>
                  <li>• Essential for condenser microphones</li>
                  <li>• Match to your specific microphone</li>
                  <li>• Universal mounts available</li>
                  <li>• Reduce handling noise and floor vibration</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-800 mb-3">Pop Filters</h4>
                <ul className="text-indigo-700 space-y-1">
                  <li>• Prevent plosive sounds (P, B, T, K)</li>
                  <li>• Fabric or mesh construction</li>
                  <li>• Clamp-on or boom-mounted</li>
                  <li>• Essential for vocal recording</li>
                  <li>• Maintain 4-6 inches from microphone</li>
                  <li>• Washable fabric types preferred</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Power Conditioning */}
          <div className="bg-yellow-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Power Conditioning & Distribution</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-yellow-800 mb-3">Power Conditioners</h4>
                <ul className="text-yellow-700 space-y-1">
                  <li>• Clean AC power for audio equipment</li>
                  <li>• Filter electrical noise and interference</li>
                  <li>• Surge protection for valuable gear</li>
                  <li>• Voltage regulation for consistency</li>
                  <li>• Multiple filtered outlets</li>
                  <li>• Some include lights and voltage display</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-800 mb-3">Power Distribution</h4>
                <ul className="text-yellow-700 space-y-1">
                  <li>• Rack-mounted power strips</li>
                  <li>• Individual outlet switching</li>
                  <li>• Front and rear outlet configurations</li>
                  <li>• Circuit breaker protection</li>
                  <li>• Remote power control options</li>
                  <li>• Current metering on advanced units</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-yellow-100 rounded">
              <p className="text-yellow-700 text-sm">
                <strong>Popular Brands:</strong> Furman (power conditioning), Tripp Lite (UPS and distribution), 
                APC (battery backup), Monster Power (consumer-friendly options)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organization and Workflow */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Studio Organization & Workflow</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Cable Management</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• <strong>Velcro Ties:</strong> Reusable, gentle on cables</li>
              <li>• <strong>Cable Trays:</strong> Under-desk organization</li>
              <li>• <strong>Patch Bays:</strong> Centralized connection point</li>
              <li>• <strong>Cable Labels:</strong> Identify connections quickly</li>
              <li>• <strong>Cable Snakes:</strong> Multi-channel cable bundles</li>
              <li>• <strong>Cord Protectors:</strong> Prevent damage at stress points</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Storage Solutions</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• <strong>Cable Reels:</strong> Organize long cables</li>
              <li>• <strong>Drawer Organizers:</strong> Small accessories and adapters</li>
              <li>• <strong>Wall Hooks:</strong> Hang frequently used cables</li>
              <li>• <strong>Rack Drawers:</strong> Store small items in rack</li>
              <li>• <strong>Equipment Cases:</strong> Protect gear during transport</li>
              <li>• <strong>Parts Bins:</strong> Organize connectors and adapters</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Connectors and Adapters */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Connectors & Adapters</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Common Adapters</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• XLR Male to 1/4" TRS</li>
                <li>• XLR Female to 1/4" TRS</li>
                <li>• 1/4" TRS to RCA (stereo)</li>
                <li>• 1/4" to 3.5mm (headphone)</li>
                <li>• RCA to 3.5mm adapters</li>
                <li>• Impedance matching transformers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Specialty Connectors</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Speakon (speaker connections)</li>
                <li>• Banana plugs (power amps)</li>
                <li>• BNC (word clock, video)</li>
                <li>• MIDI DIN connectors</li>
                <li>• USB-A to USB-B adapters</li>
                <li>• Optical to coaxial converters</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cable Repair</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Soldering iron and solder</li>
                <li>• Heat shrink tubing</li>
                <li>• Replacement connectors</li>
                <li>• Cable tester for troubleshooting</li>
                <li>• Wire strippers and cutters</li>
                <li>• Electrical tape and markers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Buying Recommendations */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Cable & Accessory Buying Guide</h2>
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">🎯 Essential Studio Cable Kit</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-blue-700 mb-3">Starter Kit ($100-200)</h4>
              <ul className="text-blue-600 text-sm space-y-1">
                <li>• 2-3 XLR microphone cables (10-20 feet)</li>
                <li>• 2-3 TRS balanced line cables</li>
                <li>• 2-3 TS instrument cables (various lengths)</li>
                <li>• USB cable for your audio interface</li>
                <li>• Basic microphone stand and boom arm</li>
                <li>• Pop filter and shock mount</li>
                <li>• Power strip with surge protection</li>
                <li>• Velcro ties for cable management</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-700 mb-3">Professional Kit ($300-500)</h4>
              <ul className="text-blue-600 text-sm space-y-1">
                <li>• Premium XLR cables (Mogami/Canare)</li>
                <li>• Multiple TRS/TS cables (various lengths)</li>
                <li>• Digital cables (S/PDIF, AES/EBU)</li>
                <li>• Professional mic stands (K&M, Atlas)</li>
                <li>• Quality shock mounts for each mic type</li>
                <li>• Power conditioner (Furman M-8X2)</li>
                <li>• Patch bay for connection management</li>
                <li>• Cable tester and repair kit</li>
                <li>• Comprehensive adapter collection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Tips */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Cable Care & Maintenance</h2>
        <div className="space-y-4">
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">Proper Handling</h3>
            <p className="text-green-700 text-sm">
              Avoid tight bends, especially near connectors. Use the "over-under" coiling technique 
              for XLR and balanced cables to prevent twisting and maintain longevity.
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">Storage Best Practices</h3>
            <p className="text-green-700 text-sm">
              Store cables loosely coiled, away from heat sources and sharp edges. 
              Keep them clean and dry. Use cable organizers to prevent tangling.
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">Regular Testing</h3>
            <p className="text-green-700 text-sm">
              Test cables periodically with a cable tester or multimeter. 
              Look for continuity, shorts, and proper pin connections. Address issues early.
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">When to Replace</h3>
            <p className="text-green-700 text-sm">
              Replace cables showing physical damage, intermittent connections, or notable 
              signal degradation. Don't let bad cables compromise your recordings.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
