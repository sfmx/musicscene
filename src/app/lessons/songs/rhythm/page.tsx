import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const topics = [
  {
    title: 'Strumming Patterns',
    href: '/lessons/songs/rhythm/strumming',
    icon: '🎸',
    description: 'Master basic and advanced strumming patterns through analysis of real songs and their rhythmic foundations.',
    difficulty: 'Beginner',
    theory: 'Time signatures, rhythmic subdivision, accent patterns'
  },
  {
    title: 'Fingerpicking Rhythms',
    href: '/lessons/songs/rhythm/fingerpicking',
    icon: '🤚',
    description: 'Learn fingerpicking patterns that create rhythmic complexity while maintaining melodic independence.',
    difficulty: 'Intermediate',
    theory: 'Polyrhythm, bass-melody independence, classical patterns'
  },
  {
    title: 'Palm Muting & Dynamics',
    href: '/lessons/songs/rhythm/palm-muting',
    icon: '🤫',
    description: 'Understand how palm muting creates rhythmic texture and dynamics in different musical contexts.',
    difficulty: 'Beginner',
    theory: 'Rhythmic articulation, dynamics, percussive effects'
  },
  {
    title: 'Syncopation & Off-beats',
    href: '/lessons/songs/rhythm/syncopation',
    icon: '🎭',
    description: 'Explore syncopated rhythms and how they create tension and groove in popular music.',
    difficulty: 'Intermediate',
    theory: 'Syncopation, off-beat emphasis, rhythmic displacement'
  },
  {
    title: 'Shuffle & Swing Rhythms',
    href: '/lessons/songs/rhythm/shuffle',
    icon: '🎷',
    description: 'Master shuffle and swing feels essential for blues, jazz, and many rock songs.',
    difficulty: 'Intermediate',
    theory: 'Triplet feel, swing eighth notes, blues shuffle'
  },
  {
    title: 'Latin Rhythms',
    href: '/lessons/songs/rhythm/latin',
    icon: '💃',
    description: 'Learn Latin guitar rhythms including bossa nova, samba, and Latin rock patterns.',
    difficulty: 'Advanced',
    theory: 'Clave rhythms, Latin percussion patterns, polyrhythm'
  },
  {
    title: 'Reggae & Ska Rhythms',
    href: '/lessons/songs/rhythm/reggae',
    icon: '🌴',
    description: 'Understand the distinctive upstroke emphasis and rhythmic patterns of reggae and ska music.',
    difficulty: 'Intermediate',
    theory: 'Off-beat emphasis, skank rhythm, reggae feel'
  },
  {
    title: 'Funk Rhythms',
    href: '/lessons/songs/rhythm/funk',
    icon: '🕺',
    description: 'Master the tight, percussive rhythms that define funk guitar playing and groove.',
    difficulty: 'Advanced',
    theory: 'Sixteenth note feel, ghost notes, rhythmic precision'
  },
];

export default function SongRhythmPage() {
  return (
    <Layout>
      <Header
        title="Rhythm & Strumming in Songs"
        subtitle="Master rhythmic guitar playing through real song examples and music theory understanding."
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Overview Section */}
        <section className="mb-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Rhythm: The Foundation of Music</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Feel Over Precision</h3>
              <p className="text-gray-600">Great rhythm guitar isn't just about playing the right notes at the right time—it's about creating a feel that makes people want to move.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Contextual Learning</h3>
              <p className="text-gray-600">Each rhythmic pattern serves the song. Learn when and why different patterns work through analysis of real musical examples.</p>
            </div>
          </div>
        </section>

        {/* Rhythm Categories */}
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
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {topic.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {topic.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
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

        {/* Learning Path */}
        <section className="mt-16 bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Rhythmic Development Path</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-800 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Foundation</h3>
              <p className="text-gray-600 text-sm">Start with basic strumming patterns and palm muting to build your rhythmic foundation.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-800 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Complexity</h3>
              <p className="text-gray-600 text-sm">Add syncopation and fingerpicking to create more sophisticated rhythmic textures.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-800 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Style</h3>
              <p className="text-gray-600 text-sm">Master genre-specific rhythms like shuffle, reggae, and Latin patterns.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-800 font-bold">4</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Mastery</h3>
              <p className="text-gray-600 text-sm">Develop advanced funk rhythms and polyrhythmic concepts for professional-level playing.</p>
            </div>
          </div>
        </section>

        {/* Practice Philosophy */}
        <section className="mt-12 bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-amber-900 mb-4">🎵 Rhythm Practice Philosophy</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-amber-800 mb-2"><strong>Metronome First:</strong></p>
              <p className="text-amber-700">Always practice with a metronome to develop internal timing. Start slow and gradually increase tempo while maintaining accuracy.</p>
            </div>
            <div>
              <p className="text-amber-800 mb-2"><strong>Feel the Groove:</strong></p>
              <p className="text-amber-700">Focus on how the rhythm makes you feel. Great rhythm players create a pocket that makes the music breathe and flow naturally.</p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mt-12 text-center">
          <div className="bg-orange-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">🚀 Start Your Rhythmic Journey</h3>
            <p className="text-gray-700 mb-4">
              Begin with fundamental strumming patterns to build your rhythmic foundation, then expand into style-specific techniques.
            </p>
            <Link 
              href="/lessons/songs/rhythm/strumming"
              className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors"
            >
              Start with Strumming Patterns →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
