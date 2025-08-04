import Link from 'next/link'
import React from 'react'
import Layout from '@/components/Layout'
import Header from '@/components/Header'

const topics = [
  {
    title: 'Song Analysis Method',
    href: '/lessons/songs/analysis-method',
    icon: '🔬',
    description: 'Learn our systematic approach to breaking down songs with music theory'
  },
  {
    title: 'Complete Song Analysis',
    href: '/lessons/songs/song-analysis',
    icon: '🎵',
    description: 'In-depth breakdowns of iconic songs with theory, technique, and equipment analysis'
  },
  {
    title: 'Song Structure Analysis',
    href: '/lessons/songs/structure',
    icon: '🧩',
    description: 'Understanding how verses, choruses, and bridges work together'
  },
  {
    title: 'Chord Progressions in Songs',
    href: '/lessons/songs/chords',
    icon: '🎼',
    description: 'Identify and understand chord progressions in real songs'
  },
  {
    title: 'Riffs & Melodic Analysis',
    href: '/lessons/songs/riffs',
    icon: '🎸',
    description: 'Break down riffs, licks, and melodies with scale and mode theory'
  },
  {
    title: 'Guitar Techniques in Context',
    href: '/lessons/songs/techniques',
    icon: '�',
    description: 'Learn techniques through real song applications'
  },
  {
    title: 'Rhythm & Strumming Patterns',
    href: '/lessons/songs/rhythm',
    icon: '🥁',
    description: 'Master rhythm patterns and strumming techniques from songs'
  },
  {
    title: 'Lead Guitar & Solos',
    href: '/lessons/songs/lead',
    icon: '🎤',
    description: 'Analyze lead guitar parts and solo construction'
  },
  {
    title: 'Effects & Tone Analysis',
    href: '/lessons/songs/effects',
    icon: '🎛️',
    description: 'Understand how effects shape the sound of famous songs'
  }
]

export default function SongLessonsPage() {
  return (
    <Layout>
      <Header
        title="Song Learning with Music Theory"
        subtitle="Master your favorite songs while understanding the theory behind them"
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Beyond Just Tablature: Theory-Based Song Learning
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p>
                Learning songs is one of the most enjoyable aspects of playing guitar, but simply reading 
                tablature only scratches the surface. Our approach teaches you to understand <em>why</em> 
                songs work the way they do, connecting every riff, chord, and technique to fundamental 
                music theory concepts.
              </p>
              <p>
                By analyzing songs through the lens of theory, you'll develop the skills to:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
                <li>• Identify chord progressions by ear</li>
                <li>• Understand why certain scales work over progressions</li>
                <li>• Learn songs faster by recognizing patterns</li>
                <li>• Improvise confidently over song structures</li>
                <li>• Transpose songs to different keys</li>
                <li>• Write your own songs using proven formulas</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Learning Path */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Learning Path</h2>
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                1. Analysis Method
              </div>
              <div className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                2. Song Structure
              </div>
              <div className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                3. Chord Progressions
              </div>
              <div className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                4. Song Breakdowns
              </div>
              <div className="px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                5. Advanced Techniques
              </div>
            </div>
          </div>
        </section>

        {/* Topic Cards */}
        <section className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <Link
              key={topic.href}
              href={topic.href}
              className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl group-hover:scale-110 transition-transform">
                  {topic.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* Featured Songs */}
        <section className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Featured Song Analyses</h2>
            <Link 
              href="/lessons/songs/song-analysis"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View All →
            </Link>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 border border-purple-100">
            <div className="text-center">
              <div className="text-6xl mb-4">🎵</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Complete Song Breakdowns Available
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Dive deep into classic songs with our comprehensive analysis system. Each breakdown includes 
                chord progressions, scale analysis, techniques, and equipment insights.
              </p>
              <Link 
                href="/lessons/songs/song-analysis"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Explore Song Analyses
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
