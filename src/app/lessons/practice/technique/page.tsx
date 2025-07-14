import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const techniqueTypes = [
  {
    name: 'Alternate Picking',
    icon: <span style={{ fontSize: 32 }}>🎸</span>,
    href: '/lessons/practice/technique/alternate-picking',
    description: 'Master precision and speed with alternating up and down strokes.',
    level: 'Beginner',
    color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    name: 'Legato',
    icon: <span style={{ fontSize: 32 }}>➰</span>,
    href: '/lessons/practice/technique/legato',
    description: 'Create smooth, flowing lines with hammer-ons, pull-offs, and slides.',
    level: 'Intermediate',
    color: 'bg-green-50 border-green-200 hover:bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    name: 'Sweep Picking',
    icon: <span style={{ fontSize: 32 }}>🧹</span>,
    href: '/lessons/practice/technique/sweep-picking',
    description: 'Execute lightning-fast arpeggios with fluid sweeping motions.',
    level: 'Advanced',
    color: 'bg-red-50 border-red-200 hover:bg-red-100',
    iconColor: 'text-red-600',
  },
  {
    name: 'String Skipping',
    icon: <span style={{ fontSize: 32 }}>⏭️</span>,
    href: '/lessons/practice/technique/string-skipping',
    description: 'Create wide intervallic lines by jumping across non-adjacent strings.',
    level: 'Intermediate',
    color: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    name: 'Bending & Vibrato',
    icon: <span style={{ fontSize: 32 }}>🎶</span>,
    href: '/lessons/practice/technique/bending-vibrato',
    description: 'Add soul and expression through controlled pitch bending and vibrato.',
    level: 'Beginner',
    color: 'bg-orange-50 border-orange-200 hover:bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    name: 'Tapping',
    icon: <span style={{ fontSize: 32 }}>👆</span>,
    href: '/lessons/practice/technique/tapping',
    description: 'Utilize both hands for spectacular runs and impossible intervals.',
    level: 'Advanced',
    color: 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100',
    iconColor: 'text-indigo-600',
  },
  {
    name: 'Palm Muting',
    icon: <span style={{ fontSize: 32 }}>✋</span>,
    href: '/lessons/practice/technique/palm-muting',
    description: 'Control dynamics and create punchy, percussive tones.',
    level: 'Beginner',
    color: 'bg-gray-50 border-gray-200 hover:bg-gray-100',
    iconColor: 'text-gray-600',
  },
  {
    name: 'Hybrid Picking',
    icon: <span style={{ fontSize: 32 }}>🤚</span>,
    href: '/lessons/practice/technique/hybrid-picking',
    description: 'Combine pick and fingers for complex rhythms and textures.',
    level: 'Intermediate',
    color: 'bg-teal-50 border-teal-200 hover:bg-teal-100',
    iconColor: 'text-teal-600',
  },
];

const famousPlayers = [
  { name: 'Steve Vai', techniques: ['Legato', 'Tapping', 'String Skipping'], genre: 'Rock/Metal' },
  { name: 'John Petrucci', techniques: ['Alternate Picking', 'Sweep Picking'], genre: 'Progressive Metal' },
  { name: 'Paul Gilbert', techniques: ['Alternate Picking', 'String Skipping'], genre: 'Rock/Shred' },
  { name: 'Frank Gambale', techniques: ['Sweep Picking', 'Legato'], genre: 'Fusion' },
  { name: 'Brett Garsed', techniques: ['Hybrid Picking', 'Legato'], genre: 'Fusion' },
  { name: 'Yngwie Malmsteen', techniques: ['Alternate Picking', 'Sweep Picking'], genre: 'Neoclassical' },
];

export default function TechniquePage() {
  return (
    <Layout>
      <Header
        title="Guitar Technique Mastery"
        subtitle="Develop precision, speed, and expression through systematic technique practice"
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <div className="mb-8">
            <Link 
              href="/lessons/practice" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span className="mr-2">←</span>
              Back to Practice
            </Link>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">🎸</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Master Guitar Technique
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Build the foundation for expressive playing through systematic development of essential guitar techniques. 
              From basic picking patterns to advanced two-handed tapping, develop the skills that will unlock your musical potential.
            </p>
          </div>

          {/* Why Technique Matters */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Technique Practice Matters</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Precision & Control</h3>
                  <p className="text-gray-600">
                    Develop the accuracy and consistency needed to execute complex musical ideas cleanly and reliably.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Speed & Fluidity</h3>
                  <p className="text-gray-600">
                    Build the physical foundation to play at any tempo while maintaining musical expression and clarity.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎨</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Expression & Style</h3>
                  <p className="text-gray-600">
                    Unlock advanced techniques that allow you to express complex musical ideas and develop your unique voice.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Learning Path */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Progressive Learning Path</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6">1</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Foundation Techniques</h3>
                    <p className="text-gray-600">Start with alternate picking, palm muting, and basic bending for solid fundamentals.</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-100 text-green-600 rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6">2</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Intermediate Skills</h3>
                    <p className="text-gray-600">Progress to legato, hybrid picking, and string skipping for expanded vocabulary.</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-red-100 text-red-600 rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6">3</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Advanced Mastery</h3>
                    <p className="text-gray-600">Master sweep picking and tapping for virtuosic expression and technical excellence.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technique Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Essential Guitar Techniques</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {techniqueTypes.map((technique) => (
                <Link
                  key={technique.name}
                  href={technique.href}
                  className={`${technique.color} border-2 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 group`}
                >
                  <div className="text-center">
                    <div className={`${technique.iconColor} mb-4 group-hover:scale-110 transition-transform`}>
                      {technique.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{technique.name}</h3>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                      technique.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                      technique.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {technique.level}
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{technique.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Practice Guidelines */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Effective Practice Guidelines</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Best Practices
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      Start slowly and focus on perfect execution
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      Use a metronome to develop timing and consistency
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      Practice in short, focused sessions (15-30 minutes)
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      Gradually increase tempo while maintaining accuracy
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      Record yourself to identify areas for improvement
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="text-red-500 mr-2">✗</span>
                    Common Mistakes
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">•</span>
                      Playing too fast before mastering slow execution
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">•</span>
                      Ignoring proper hand position and posture
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">•</span>
                      Practicing mistakes repeatedly without correction
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">•</span>
                      Neglecting to warm up before intense practice
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">•</span>
                      Focusing only on speed without musical application
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Famous Players */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Masters of Technique</h2>
              <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
                Study these guitarists who have pushed the boundaries of what's possible on the instrument through dedicated technique development.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {famousPlayers.map((player, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{player.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{player.genre}</p>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-gray-700">Signature Techniques:</p>
                      {player.techniques.map((technique, techIndex) => (
                        <span key={techIndex} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-1 mb-1">
                          {technique}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Daily Practice Routine */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Daily Technique Routine</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-3xl mb-3">🔥</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Warm-up</h3>
                  <p className="text-sm text-gray-600">5-10 minutes</p>
                  <p className="text-xs text-gray-500 mt-2">Chromatic exercises, stretches</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-3xl mb-3">🎯</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Focus Technique</h3>
                  <p className="text-sm text-gray-600">15-20 minutes</p>
                  <p className="text-xs text-gray-500 mt-2">Concentrate on one technique</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-3xl mb-3">🎵</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Musical Application</h3>
                  <p className="text-sm text-gray-600">10-15 minutes</p>
                  <p className="text-xs text-gray-500 mt-2">Apply to songs and solos</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-3xl mb-3">❄️</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Cool-down</h3>
                  <p className="text-sm text-gray-600">5 minutes</p>
                  <p className="text-xs text-gray-500 mt-2">Gentle stretches, relaxation</p>
                </div>
              </div>
            </div>
          </section>

          {/* Get Started */}
          <section className="text-center">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Begin?</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Start with the fundamentals and work your way up. Remember: consistent, focused practice is more valuable than speed. 
                Choose a technique that matches your current level and commit to daily practice.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/lessons/practice/technique/alternate-picking" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Start with Alternate Picking
                </Link>
                <Link href="/lessons/practice/technique/palm-muting" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                  Learn Palm Muting
                </Link>
                <Link href="/lessons/practice/technique/bending-vibrato" className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
                  Master Bending & Vibrato
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
