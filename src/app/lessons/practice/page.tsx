import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import React from 'react';

const categories = [
  {
    title: 'Warm-ups',
    href: '/lessons/practice/warmups',
    icon: '🤲',
    description: 'Prepare your hands and mind for optimal practice sessions',
    color: 'bg-orange-50 border-orange-200 hover:bg-orange-100',
    iconColor: 'text-orange-600',
    concepts: ['Finger independence', 'Picking preparation', 'Chord transitions', 'Scale patterns', 'Stretching routines', 'Rhythm exercises']
  },
  {
    title: 'Technique',
    href: '/lessons/practice/technique',
    icon: '🎯',
    description: 'Master fundamental guitar techniques with progressive exercises',
    color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
    iconColor: 'text-blue-600',
    concepts: ['Alternate picking', 'Legato playing', 'Sweep picking', 'String skipping', 'Bending & vibrato', 'Tapping', 'Palm muting', 'Hybrid picking']
  },
  {
    title: 'Improvisation',
    href: '/lessons/practice/improv',
    icon: '🎶',
    description: 'Develop creative expression and spontaneous musical ideas',
    color: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
    iconColor: 'text-purple-600',
    concepts: ['Phrasing concepts', 'Call & response', 'Motif development', 'Target notes', 'Scale improvisation', 'Arpeggio improvisation', 'Rhythmic variation']
  },
];

const practicePhilosophy = [
  {
    title: 'Quality Over Quantity',
    description: 'Focused, mindful practice is more effective than mindless repetition',
    icon: '💎',
    color: 'bg-emerald-50 border-emerald-200'
  },
  {
    title: 'Progressive Difficulty',
    description: 'Start slow and simple, gradually increase speed and complexity',
    icon: '📈',
    color: 'bg-blue-50 border-blue-200'
  },
  {
    title: 'Regular Consistency',
    description: 'Daily practice sessions build muscle memory and technique',
    icon: '📅',
    color: 'bg-indigo-50 border-indigo-200'
  },
  {
    title: 'Goal-Oriented Focus',
    description: 'Set specific, measurable objectives for each practice session',
    icon: '🎯',
    color: 'bg-red-50 border-red-200'
  },
];

const practiceStructure = [
  { phase: 'Warm-up', duration: '10-15 min', description: 'Prepare hands and mind for focused practice', color: 'bg-orange-100' },
  { phase: 'Technique Work', duration: '15-20 min', description: 'Focus on specific technical challenges', color: 'bg-blue-100' },
  { phase: 'Song/Repertoire', duration: '15-20 min', description: 'Apply techniques to musical material', color: 'bg-green-100' },
  { phase: 'Creative Expression', duration: '10-15 min', description: 'Improvisation and musical exploration', color: 'bg-purple-100' },
  { phase: 'Cool-down', duration: '5 min', description: 'Relaxation and reflection on progress', color: 'bg-gray-100' },
];

const practiceTools = [
  {
    title: 'Metronome Training',
    description: 'Develop rock-solid timing and rhythmic precision',
    icon: '⏰',
    tips: ['Start slow and focus on accuracy', 'Practice with different subdivisions', 'Use accents to develop groove', 'Gradually increase tempo']
  },
  {
    title: 'Recording & Analysis',
    description: 'Record yourself to identify areas for improvement',
    icon: '🎙️',
    tips: ['Record technical exercises', 'Analyze tone and timing', 'Compare with reference recordings', 'Track progress over time']
  },
  {
    title: 'Practice Journal',
    description: 'Document your practice sessions and track progress',
    icon: '📝',
    tips: ['Set daily practice goals', 'Note challenges and breakthroughs', 'Track tempo improvements', 'Plan next session focus']
  },
  {
    title: 'Mental Practice',
    description: 'Visualize and study away from the instrument',
    icon: '🧠',
    tips: ['Study music theory concepts', 'Visualize fretboard patterns', 'Listen to reference recordings', 'Plan practice strategies']
  },
];

export default function PracticePage() {
  return (
    <Layout>
      <Header
        title="Guitar Practice Hub"
        subtitle="Master your instrument with structured, progressive practice sessions designed to build technique, creativity, and musical expression."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <div className="mb-8">
            <Link 
              href="/lessons" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span className="mr-2">←</span>
              Back to Lessons
            </Link>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">🎸</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Guitar Practice Hub
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transform your guitar playing with structured, progressive practice sessions. Whether you're warming up, 
              building technique, or exploring creative expression, these practice modules will help you achieve your 
              musical goals efficiently and effectively.
            </p>
          </div>

          {/* Practice Philosophy */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Effective Practice Principles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {practicePhilosophy.map((principle, index) => (
                  <div key={index} className={`${principle.color} rounded-lg p-6 border-2`}>
                    <div className="text-3xl mb-3">{principle.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{principle.title}</h3>
                    <p className="text-sm text-gray-700">{principle.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Practice Structure */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Ideal Practice Session Structure</h2>
              <div className="space-y-4">
                {practiceStructure.map((phase, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`${phase.color} rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="text-lg font-semibold text-gray-900">{phase.phase}</h3>
                        <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">{phase.duration}</span>
                      </div>
                      <p className="text-gray-600">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>💡 Pro Tip:</strong> Adjust timing based on your available practice time. Even 15-20 minutes of focused practice is more valuable than an hour of unfocused playing.
                </p>
              </div>
            </div>
          </section>

          {/* Practice Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Practice Categories</h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className={`${category.color} border-2 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 group`}
                >
                  <div className="text-center mb-4">
                    <div className={`${category.iconColor} text-4xl mb-3 group-hover:scale-110 transition-transform`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-sm text-gray-700 mb-4">{category.description}</p>
                  </div>
                  <div className="space-y-2">
                    {category.concepts.map((concept, index) => (
                      <div key={index} className="text-xs bg-white bg-opacity-60 rounded px-3 py-1">
                        {concept}
                      </div>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Practice Tools & Tips */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Essential Practice Tools</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {practiceTools.map((tool, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-4">{tool.icon}</span>
                      <h3 className="text-xl font-semibold text-gray-900">{tool.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-4">{tool.description}</p>
                    <ul className="space-y-2">
                      {tool.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="text-sm text-gray-600 flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Practice Motivation */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Building Consistent Practice Habits</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Motivation Strategies</h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-2">Set Achievable Goals</h4>
                      <p className="text-sm text-green-700">Break large goals into smaller, daily objectives that build momentum and confidence.</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">Track Your Progress</h4>
                      <p className="text-sm text-blue-700">Document improvements, no matter how small. Progress tracking maintains motivation during challenging periods.</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                      <h4 className="font-semibold text-purple-800 mb-2">Celebrate Milestones</h4>
                      <p className="text-sm text-purple-700">Acknowledge achievements and reward yourself for consistent practice and improvement.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Overcoming Challenges</h3>
                  <div className="space-y-4">
                    <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                      <h4 className="font-semibold text-yellow-800 mb-2">When You Feel Stuck</h4>
                      <p className="text-sm text-yellow-700">Plateaus are normal. Try new techniques, different genres, or take a short break to return refreshed.</p>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                      <h4 className="font-semibold text-red-800 mb-2">Limited Practice Time</h4>
                      <p className="text-sm text-red-700">Focus on specific challenges. Even 15 minutes of targeted practice is better than no practice at all.</p>
                    </div>
                    <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                      <h4 className="font-semibold text-indigo-800 mb-2">Maintaining Interest</h4>
                      <p className="text-sm text-indigo-700">Vary your practice routine, learn songs you love, and connect with other musicians for inspiration.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Getting Started */}
          <section className="text-center">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Start Your Practice Journey</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Choose a practice category that matches your current goals. Each section provides structured exercises, 
                progressive challenges, and expert guidance to help you improve efficiently and enjoyably.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/lessons/practice/warmups" className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold">
                  Begin with Warm-ups
                </Link>
                <Link href="/lessons/practice/technique" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Build Technique
                </Link>
                <Link href="/lessons/practice/improv" className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
                  Explore Improvisation
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
