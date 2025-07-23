import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const topics = [
  {
    title: 'Distortion & Overdrive',
    href: '/lessons/songs/effects/distortion',
    icon: '🔥',
    description: 'Understand how distortion shapes tone, harmonic content, and playing technique in different musical contexts.',
    difficulty: 'Beginner',
    theory: 'Harmonic saturation, frequency response, gain staging'
  },
  {
    title: 'Delay & Echo',
    href: '/lessons/songs/effects/delay',
    icon: '🔄',
    description: 'Learn how delay effects create space, rhythmic complexity, and atmospheric textures in songs.',
    difficulty: 'Intermediate',
    theory: 'Temporal effects, rhythmic subdivision, feedback loops'
  },
  {
    title: 'Reverb & Ambience',
    href: '/lessons/songs/effects/reverb',
    icon: '🌊',
    description: 'Explore how reverb simulates acoustic spaces and creates depth and atmosphere in guitar sounds.',
    difficulty: 'Beginner',
    theory: 'Acoustic modeling, frequency decay, spatial perception'
  },
  {
    title: 'Modulation Effects',
    href: '/lessons/songs/effects/modulation',
    icon: '🌀',
    description: 'Master chorus, phaser, and flanger effects and their role in creating movement and texture.',
    difficulty: 'Intermediate',
    theory: 'LFO modulation, phase relationships, frequency shifting'
  },
  {
    title: 'Wah & Filter Effects',
    href: '/lessons/songs/effects/wah',
    icon: '👄',
    description: 'Learn expressive filter effects and how they enhance melodic phrasing and rhythmic emphasis.',
    difficulty: 'Intermediate',
    theory: 'Frequency filtering, resonance, envelope following'
  },
  {
    title: 'Compression & Dynamics',
    href: '/lessons/songs/effects/compression',
    icon: '📊',
    description: 'Understand how compression affects playing dynamics, sustain, and the overall feel of guitar parts.',
    difficulty: 'Advanced',
    theory: 'Dynamic range, attack/release, gain reduction'
  },
  {
    title: 'Octave & Pitch Effects',
    href: '/lessons/songs/effects/pitch',
    icon: '🎚️',
    description: 'Explore pitch shifting, octave effects, and harmonizers for creating unique harmonic textures.',
    difficulty: 'Advanced',
    theory: 'Pitch detection, harmonic intervals, digital processing'
  },
  {
    title: 'Multi-Effects & Signal Chain',
    href: '/lessons/songs/effects/signal-chain',
    icon: '🔗',
    description: 'Learn how to order effects and create complex soundscapes using multiple effects together.',
    difficulty: 'Advanced',
    theory: 'Signal flow, impedance matching, effect interaction'
  },
];

export default function SongEffectsPage() {
  return (
    <Layout>
      <Header
        title="Effects & Tone in Songs"
        subtitle="Understand how guitar effects shape the sound of famous songs and learn to use them musically."
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Overview Section */}
        <section className="mb-12 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Effects: More Than Just Sound</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Musical Purpose</h3>
              <p className="text-gray-600">Effects aren't just about sounding cool—they serve specific musical functions, creating atmosphere, enhancing dynamics, and supporting the song's emotional content.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Context Matters</h3>
              <p className="text-gray-600">The same effect can sound completely different depending on the musical context, playing technique, and how it interacts with other instruments.</p>
            </div>
          </div>
        </section>

        {/* Effects Categories */}
        <section className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <Link
              key={topic.href}
              href={topic.href}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{topic.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors">
                    {topic.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {topic.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full">
                    {topic.difficulty}
                  </span>
                  <span className="text-gray-500 text-xs">
                    {topic.theory}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* Effects Learning Path */}
        <section className="mt-16 bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Effects Mastery Path</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-800 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Foundation</h3>
              <p className="text-gray-600 text-sm">Master basic effects like distortion and reverb to understand fundamental tone shaping concepts.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-800 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Expression</h3>
              <p className="text-gray-600 text-sm">Add expressive effects like wah and delay to enhance your musical phrasing and dynamics.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-800 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Texture</h3>
              <p className="text-gray-600 text-sm">Explore modulation effects to create movement and textural interest in your playing.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-800 font-bold">4</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Mastery</h3>
              <p className="text-gray-600 text-sm">Learn signal chain design and complex effect combinations for professional sound design.</p>
            </div>
          </div>
        </section>

        {/* Iconic Effects Usage */}
        <section className="mt-12 bg-indigo-50 border border-indigo-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-indigo-900 mb-4">🎸 Iconic Effects in Famous Songs</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-indigo-800 mb-2"><strong>"The Edge" (U2):</strong></p>
              <p className="text-indigo-700">Digital delay with dotted eighth note timing creates rhythmic complexity and spatial depth in songs like "Where the Streets Have No Name."</p>
            </div>
            <div>
              <p className="text-indigo-800 mb-2"><strong>"Purple Haze" (Hendrix):</strong></p>
              <p className="text-indigo-700">Fuzz distortion with octave effects creates the signature psychedelic sound that defined an era.</p>
            </div>
            <div>
              <p className="text-indigo-800 mb-2"><strong>"Money" (Pink Floyd):</strong></p>
              <p className="text-indigo-700">Phaser effect creates the swirling, hypnotic texture that supports the song's unusual 7/4 time signature.</p>
            </div>
          </div>
        </section>

        {/* Technical Understanding */}
        <section className="mt-12 bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-amber-900 mb-4">🔧 Understanding Effects Technically</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-amber-800 mb-2"><strong>Signal Processing:</strong></p>
              <p className="text-amber-700">Effects work by manipulating your guitar signal in different ways—altering frequency content, adding delays, or changing dynamic response.</p>
            </div>
            <div>
              <p className="text-amber-800 mb-2"><strong>Musical Application:</strong></p>
              <p className="text-amber-700">Each effect type serves different musical purposes. Understanding when and why to use effects makes them musical tools rather than just noise makers.</p>
            </div>
          </div>
        </section>

        {/* Equipment vs. Technique */}
        <section className="mt-12 bg-green-50 border border-green-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-green-900 mb-4">💡 Effects Philosophy</h3>
          <div className="text-sm text-green-800">
            <p className="mb-2">
              <strong>Remember:</strong> Great tone starts with good playing technique. Effects enhance your playing—they don't fix poor technique or lack of musical ideas.
            </p>
            <p>
              Focus on using effects to serve the music, not to impress with how many you can use at once. Sometimes the most powerful effect is turning everything off and playing clean.
            </p>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mt-12 text-center">
          <div className="bg-cyan-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">🚀 Start Your Effects Journey</h3>
            <p className="text-gray-700 mb-4">
              Begin with fundamental effects like distortion and reverb to understand basic tone shaping, then expand your palette.
            </p>
            <Link 
              href="/lessons/songs/effects/distortion"
              className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white font-medium rounded-lg hover:bg-cyan-700 transition-colors"
            >
              Start with Distortion & Overdrive →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
