import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const warmupTypes = [
  {
    name: 'Finger Exercises',
    icon: <span style={{ fontSize: 32 }}>🤲</span>,
    href: '/lessons/practice/warmups/finger-exercises',
    description: 'Build finger strength, dexterity, and independence through targeted exercises.',
    duration: '5-10 min',
    difficulty: 'Beginner',
    color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    name: 'Picking Patterns',
    icon: <span style={{ fontSize: 32 }}>🎸</span>,
    href: '/lessons/practice/warmups/picking-patterns',
    description: 'Develop picking accuracy and speed with systematic pattern practice.',
    duration: '8-12 min',
    difficulty: 'Beginner',
    color: 'bg-green-50 border-green-200 hover:bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    name: 'Chord Changes',
    icon: <span style={{ fontSize: 32 }}>🔄</span>,
    href: '/lessons/practice/warmups/chord-changes',
    description: 'Master smooth, efficient transitions between chord positions.',
    duration: '6-10 min',
    difficulty: 'Intermediate',
    color: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    name: 'Scales & Modes',
    icon: <span style={{ fontSize: 32 }}>🎶</span>,
    href: '/lessons/practice/warmups/scales-modes',
    description: 'Run scales and modes to build speed, accuracy, and muscle memory.',
    duration: '10-15 min',
    difficulty: 'Intermediate',
    color: 'bg-orange-50 border-orange-200 hover:bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    name: 'Stretching',
    icon: <span style={{ fontSize: 32 }}>🧘</span>,
    href: '/lessons/practice/warmups/stretching',
    description: 'Prevent injury and increase flexibility with proper stretching routines.',
    duration: '3-5 min',
    difficulty: 'All Levels',
    color: 'bg-teal-50 border-teal-200 hover:bg-teal-100',
    iconColor: 'text-teal-600',
  },
  {
    name: 'Rhythm Drills',
    icon: <span style={{ fontSize: 32 }}>🥁</span>,
    href: '/lessons/practice/warmups/rhythm-drills',
    description: 'Sharpen timing and rhythmic precision with metronome exercises.',
    duration: '5-8 min',
    difficulty: 'All Levels',
    color: 'bg-red-50 border-red-200 hover:bg-red-100',
    iconColor: 'text-red-600',
  },
];

const warmupBenefits = [
  { icon: '🔥', title: 'Injury Prevention', description: 'Gradually prepare muscles and joints for intensive playing' },
  { icon: '⚡', title: 'Performance Enhancement', description: 'Improve coordination, speed, and accuracy from the start' },
  { icon: '🧠', title: 'Mental Focus', description: 'Center your mind and establish concentration for practice' },
  { icon: '💪', title: 'Muscle Memory', description: 'Reinforce proper technique and strengthen neural pathways' },
  { icon: '🎯', title: 'Consistency', description: 'Build reliable habits that lead to steady improvement' },
  { icon: '🎨', title: 'Creativity Flow', description: 'Prime your musical mind for creative expression and learning' },
];

const professionalTips = [
  {
    title: 'Start Slowly',
    description: 'Begin all exercises at a comfortable tempo. Speed comes naturally with consistency.',
    icon: '🐢'
  },
  {
    title: 'Use a Metronome',
    description: 'Develop timing and rhythmic precision from day one of your practice.',
    icon: '⏰'
  },
  {
    title: 'Listen to Your Body',
    description: 'Stop if you feel pain or excessive tension. Warmups should feel good.',
    icon: '👂'
  },
  {
    title: 'Stay Consistent',
    description: 'Regular 10-minute warmups are better than occasional long sessions.',
    icon: '📅'
  },
];

export default function WarmupsPage() {
  return (
    <Layout>
      <Header
        title="Guitar Warmup Routines"
        subtitle="Prepare your body and mind for optimal playing through systematic warmup practices"
      />
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-12">
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
            <div className="text-6xl mb-6">🔥</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Essential Guitar Warmups
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Start every practice session with purpose. Proper warmups prevent injury, enhance performance, 
              and prepare your mind and body for optimal learning and playing. From finger exercises to rhythmic drills, 
              build the foundation for a lifetime of healthy guitar playing.
            </p>
          </div>

          {/* Why Warmups Matter */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Warmups Are Essential</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {warmupBenefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Professional Warmup Philosophy */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Professional Warmup Philosophy</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Professional musicians understand that warmups are not just preparation—they're an investment in longevity, 
                  consistency, and peak performance. Whether you're practicing for 30 minutes or performing for hours, 
                  a proper warmup routine sets the stage for success.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {professionalTips.map((tip, index) => (
                    <div key={index} className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-400">
                      <div className="flex items-center mb-3">
                        <span className="text-2xl mr-3">{tip.icon}</span>
                        <h3 className="text-lg font-semibold text-gray-900">{tip.title}</h3>
                      </div>
                      <p className="text-gray-700">{tip.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Progressive Warmup Structure */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Progressive Warmup Structure</h2>
              <div className="max-w-4xl mx-auto">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6 mt-1">1</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Physical Preparation (3-5 min)</h3>
                      <p className="text-gray-600">Start with gentle stretching to prepare your arms, wrists, and fingers for playing.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 text-green-600 rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6 mt-1">2</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Basic Motor Skills (5-8 min)</h3>
                      <p className="text-gray-600">Simple finger exercises and picking patterns to activate muscle memory and coordination.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6 mt-1">3</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Skills (8-12 min)</h3>
                      <p className="text-gray-600">Scales, chord changes, and rhythmic patterns specific to your practice goals.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 text-orange-600 rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6 mt-1">4</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Musical Integration (5-10 min)</h3>
                      <p className="text-gray-600">Apply warmed-up skills to simple songs or musical passages before main practice.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Warmup Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Essential Warmup Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {warmupTypes.map((warmup) => (
                <Link
                  key={warmup.name}
                  href={warmup.href}
                  className={`${warmup.color} border-2 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 group`}
                >
                  <div className="text-center">
                    <div className={`${warmup.iconColor} mb-4 group-hover:scale-110 transition-transform`}>
                      {warmup.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{warmup.name}</h3>
                    <div className="flex justify-center gap-2 mb-3">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                        warmup.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                        warmup.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {warmup.difficulty}
                      </span>
                      <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                        {warmup.duration}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{warmup.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Sample Warmup Routines */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sample Warmup Routines</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Quick Warmup */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-green-600 mr-2">⚡</span>
                    Quick Warmup (10 min)
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Stretching</span>
                      <span className="text-gray-600">2 min</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Finger Exercises</span>
                      <span className="text-gray-600">3 min</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Picking Patterns</span>
                      <span className="text-gray-600">3 min</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Basic Scales</span>
                      <span className="text-gray-600">2 min</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-4 italic">Perfect for quick practice sessions or when time is limited.</p>
                </div>

                {/* Standard Warmup */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-blue-600 mr-2">🎯</span>
                    Standard Warmup (20 min)
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Stretching</span>
                      <span className="text-gray-600">3 min</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Finger Exercises</span>
                      <span className="text-gray-600">5 min</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Picking Patterns</span>
                      <span className="text-gray-600">4 min</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Scales & Modes</span>
                      <span className="text-gray-600">5 min</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Chord Changes</span>
                      <span className="text-gray-600">3 min</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-4 italic">Ideal for regular practice sessions and skill development.</p>
                </div>

                {/* Comprehensive Warmup */}
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg p-6 border border-purple-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-purple-600 mr-2">🚀</span>
                    Comprehensive (30 min)
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Stretching</span>
                      <span className="text-gray-600">5 min</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Finger Exercises</span>
                      <span className="text-gray-600">8 min</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Picking Patterns</span>
                      <span className="text-gray-600">6 min</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Scales & Modes</span>
                      <span className="text-gray-600">7 min</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rhythm Drills</span>
                      <span className="text-gray-600">4 min</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-4 italic">For performance preparation and intensive practice sessions.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Common Warmup Mistakes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="text-red-500 mr-2">✗</span>
                    What NOT to Do
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">•</span>
                      Starting with fast, intense playing
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">•</span>
                      Skipping warmups when short on time
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">•</span>
                      Forcing through tension or discomfort
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">•</span>
                      Using poor posture during warmups
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">•</span>
                      Rushing through exercises carelessly
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Best Practices
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      Begin slowly and gradually increase intensity
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      Always warm up, even for short sessions
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      Listen to your body and adjust accordingly
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      Maintain proper posture and hand position
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      Focus on quality over speed
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Get Started */}
          <section className="text-center">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Start Your Warmup Journey</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Consistent warmups are the secret to injury-free, progressive guitar development. 
                Start with basic exercises and gradually build your routine. Your future self will thank you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/lessons/practice/warmups/stretching" className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">
                  Start with Stretching
                </Link>
                <Link href="/lessons/practice/warmups/finger-exercises" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Begin Finger Exercises
                </Link>
                <Link href="/lessons/practice/warmups/picking-patterns" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                  Practice Picking Patterns
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
