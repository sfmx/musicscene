import Link from 'next/link';

export default function DAWPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/lessons/gear/recording" className="text-blue-600 hover:text-blue-800 font-medium">
          ← Back to Recording Gear
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8 mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Digital Audio Workstations (DAWs)
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          The heart of modern music production. DAWs provide the software environment 
          for recording, editing, mixing, and mastering your musical creations.
        </p>
      </div>

      {/* What is a DAW */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What is a DAW?</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            A Digital Audio Workstation is software that serves as the central hub for 
            music production. It integrates multitrack recording, MIDI sequencing, 
            audio editing, mixing, and often includes virtual instruments and effects.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Core Functions</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Recording:</strong> Capture audio and MIDI</li>
                <li>• <strong>Editing:</strong> Cut, copy, paste, time-stretch</li>
                <li>• <strong>Mixing:</strong> Balance levels, EQ, effects</li>
                <li>• <strong>Sequencing:</strong> Program MIDI instruments</li>
                <li>• <strong>Automation:</strong> Control parameters over time</li>
                <li>• <strong>Export:</strong> Render final mixes and masters</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Components</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Timeline:</strong> Arrange tracks in time</li>
                <li>• <strong>Mixer:</strong> Control individual track levels</li>
                <li>• <strong>Browser:</strong> Manage files and sounds</li>
                <li>• <strong>Piano Roll:</strong> Edit MIDI notes visually</li>
                <li>• <strong>Plugin Host:</strong> Load instruments and effects</li>
                <li>• <strong>Transport:</strong> Play, record, stop controls</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Popular DAWs */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular DAW Options</h2>
        
        <div className="space-y-6">
          {/* Pro Tools */}
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Avid Pro Tools</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">Strengths</h4>
                <ul className="text-blue-700 space-y-1">
                  <li>• Industry standard for professional audio</li>
                  <li>• Excellent audio editing capabilities</li>
                  <li>• Advanced mixing and automation</li>
                  <li>• Collaborative workflows (Pro Tools | Cloud)</li>
                  <li>• Extensive plugin ecosystem</li>
                  <li>• Professional post-production features</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-3">Best For</h4>
                <ul className="text-blue-700 space-y-1">
                  <li>• Professional recording studios</li>
                  <li>• Audio post-production</li>
                  <li>• Collaborative projects</li>
                  <li>• Complex audio editing</li>
                  <li>• Industry compatibility</li>
                </ul>
                <div className="mt-3 p-3 bg-blue-100 rounded">
                  <p className="text-blue-800 text-sm">
                    <strong>Pricing:</strong> Subscription $29.99/month or perpetual license ~$599
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Logic Pro */}
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Apple Logic Pro</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-800 mb-3">Strengths</h4>
                <ul className="text-green-700 space-y-1">
                  <li>• Excellent value with included content</li>
                  <li>• Intuitive Mac-native interface</li>
                  <li>• Comprehensive virtual instruments</li>
                  <li>• High-quality effects and processors</li>
                  <li>• Strong MIDI capabilities</li>
                  <li>• Integrated notation features</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-3">Best For</h4>
                <ul className="text-green-700 space-y-1">
                  <li>• Mac users wanting full package</li>
                  <li>• Songwriting and composition</li>
                  <li>• Electronic music production</li>
                  <li>• Home studios</li>
                  <li>• Musicians learning production</li>
                </ul>
                <div className="mt-3 p-3 bg-green-100 rounded">
                  <p className="text-green-800 text-sm">
                    <strong>Pricing:</strong> One-time purchase $199.99 (Mac App Store)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Ableton Live */}
          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ableton Live</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-800 mb-3">Strengths</h4>
                <ul className="text-purple-700 space-y-1">
                  <li>• Unique session view for live performance</li>
                  <li>• Excellent for electronic music</li>
                  <li>• Innovative audio manipulation tools</li>
                  <li>• Strong loop-based workflow</li>
                  <li>• Great for experimentation</li>
                  <li>• Seamless arrangement workflow</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 mb-3">Best For</h4>
                <ul className="text-purple-700 space-y-1">
                  <li>• Electronic music production</li>
                  <li>• Live performance and DJing</li>
                  <li>• Loop-based composition</li>
                  <li>• Sound design and experimentation</li>
                  <li>• Modern production workflows</li>
                </ul>
                <div className="mt-3 p-3 bg-purple-100 rounded">
                  <p className="text-purple-800 text-sm">
                    <strong>Pricing:</strong> Standard $449, Suite $749
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FL Studio */}
          <div className="bg-orange-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">FL Studio</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-800 mb-3">Strengths</h4>
                <ul className="text-orange-700 space-y-1">
                  <li>• Lifetime free updates</li>
                  <li>• Pattern-based sequencing</li>
                  <li>• Excellent for hip-hop and EDM</li>
                  <li>• User-friendly interface</li>
                  <li>• Strong step sequencer</li>
                  <li>• Affordable entry point</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-800 mb-3">Best For</h4>
                <ul className="text-orange-700 space-y-1">
                  <li>• Beat making and hip-hop production</li>
                  <li>• Electronic dance music</li>
                  <li>• Pattern-based composition</li>
                  <li>• Budget-conscious producers</li>
                  <li>• Learning music production</li>
                </ul>
                <div className="mt-3 p-3 bg-orange-100 rounded">
                  <p className="text-orange-800 text-sm">
                    <strong>Pricing:</strong> Fruity $99, Producer $199, All Plugins $399
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Reaper */}
          <div className="bg-teal-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cockos Reaper</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-teal-800 mb-3">Strengths</h4>
                <ul className="text-teal-700 space-y-1">
                  <li>• Extremely affordable and lightweight</li>
                  <li>• Highly customizable interface</li>
                  <li>• Powerful scripting capabilities</li>
                  <li>• Excellent for audio editing</li>
                  <li>• Low system resource usage</li>
                  <li>• Strong community support</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-teal-800 mb-3">Best For</h4>
                <ul className="text-teal-700 space-y-1">
                  <li>• Budget-conscious producers</li>
                  <li>• Audio editing and post-production</li>
                  <li>• Users who like customization</li>
                  <li>• Older or limited hardware</li>
                  <li>• Podcasting and voice work</li>
                </ul>
                <div className="mt-3 p-3 bg-teal-100 rounded">
                  <p className="text-teal-800 text-sm">
                    <strong>Pricing:</strong> $60 personal license, $225 commercial
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free DAW Options */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Free DAW Options</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Full-Featured Free DAWs</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800">Reaper (60-day trial)</h4>
                <p className="text-gray-600 text-sm">Full-featured trial, honor system</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Cakewalk by BandLab</h4>
                <p className="text-gray-600 text-sm">Professional DAW, completely free (Windows)</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">GarageBand</h4>
                <p className="text-gray-600 text-sm">Free with Mac, great for beginners</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Audacity</h4>
                <p className="text-gray-600 text-sm">Audio editing and basic recording</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Limited Free Versions</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800">Pro Tools First</h4>
                <p className="text-gray-600 text-sm">16 tracks, cloud-based projects</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Studio One Prime</h4>
                <p className="text-gray-600 text-sm">Unlimited tracks, limited features</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Tracktion T7</h4>
                <p className="text-gray-600 text-sm">Full version free, older but capable</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Ardour</h4>
                <p className="text-gray-600 text-sm">Open source, pay-what-you-want</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choosing Your DAW */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Choose Your DAW</h2>
        <div className="bg-yellow-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">🎯 Decision Factors</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-yellow-700 mb-3">Consider Your Needs</h4>
              <ul className="text-yellow-600 space-y-1 text-sm">
                <li>• <strong>Music Style:</strong> Different DAWs excel at different genres</li>
                <li>• <strong>Workflow:</strong> Linear vs. loop-based vs. session-based</li>
                <li>• <strong>Budget:</strong> One-time purchase vs. subscription</li>
                <li>• <strong>Platform:</strong> Windows, Mac, or Linux compatibility</li>
                <li>• <strong>Learning Curve:</strong> User-friendly vs. feature-rich</li>
                <li>• <strong>Collaboration:</strong> File sharing and compatibility needs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-700 mb-3">Try Before You Buy</h4>
              <ul className="text-yellow-600 space-y-1 text-sm">
                <li>• Most DAWs offer free trials</li>
                <li>• Start with free options (GarageBand, Reaper trial)</li>
                <li>• Watch tutorial videos for different DAWs</li>
                <li>• Consider bundled content and plugins</li>
                <li>• Check system requirements</li>
                <li>• Read user reviews and forums</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Essential DAW Concepts */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential DAW Concepts</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">Recording & Editing</h3>
            <ul className="text-blue-700 space-y-2">
              <li>• <strong>Tracks:</strong> Individual audio or MIDI channels</li>
              <li>• <strong>Regions/Clips:</strong> Recorded or imported audio segments</li>
              <li>• <strong>Quantization:</strong> Aligning timing to grid</li>
              <li>• <strong>Comping:</strong> Creating perfect takes from multiple recordings</li>
              <li>• <strong>Time Stretching:</strong> Changing tempo without pitch</li>
              <li>• <strong>Pitch Correction:</strong> Tuning vocal and instrumental parts</li>
            </ul>
          </div>
          
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-4">Mixing & Processing</h3>
            <ul className="text-green-700 space-y-2">
              <li>• <strong>Plugins:</strong> Software effects and instruments</li>
              <li>• <strong>Automation:</strong> Recording parameter changes over time</li>
              <li>• <strong>Sends & Returns:</strong> Routing for effects processing</li>
              <li>• <strong>Busing:</strong> Grouping tracks for processing</li>
              <li>• <strong>Bouncing/Rendering:</strong> Creating final audio files</li>
              <li>• <strong>Freeze/Commit:</strong> Converting MIDI or processed audio</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Workflow Tips */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">DAW Workflow Tips</h2>
        <div className="space-y-4">
          <div className="bg-indigo-50 rounded-lg p-4">
            <h3 className="font-semibold text-indigo-800 mb-2">Learn Keyboard Shortcuts</h3>
            <p className="text-indigo-700 text-sm">
              Master the essential shortcuts for your DAW. This dramatically speeds up your workflow 
              and keeps you in the creative flow rather than hunting through menus.
            </p>
          </div>
          <div className="bg-indigo-50 rounded-lg p-4">
            <h3 className="font-semibold text-indigo-800 mb-2">Organize Your Projects</h3>
            <p className="text-indigo-700 text-sm">
              Use consistent naming conventions, color coding, and folder structures. 
              Create templates for common project types to speed up startup.
            </p>
          </div>
          <div className="bg-indigo-50 rounded-lg p-4">
            <h3 className="font-semibold text-indigo-800 mb-2">Save and Backup Regularly</h3>
            <p className="text-indigo-700 text-sm">
              Set up automatic saving and maintain multiple backups. Consider cloud storage 
              for important projects and use version control.
            </p>
          </div>
          <div className="bg-indigo-50 rounded-lg p-4">
            <h3 className="font-semibold text-indigo-800 mb-2">Optimize Performance</h3>
            <p className="text-indigo-700 text-sm">
              Learn buffer size settings, freeze tracks with heavy processing, 
              and keep your system optimized for audio production.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
