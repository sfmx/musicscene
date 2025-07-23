import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const topics = [
  {
    title: 'Rhythm Guitar Techniques',
    href: '/lessons/songs/techniques/rhythm',
    icon: '🥁',
    description: 'Master strumming patterns, muting, and chord transitions that drive songs forward.',
    difficulty: 'Beginner',
    context: 'Essential for rhythm parts in pop, rock, and folk music'
  },
  {
    title: 'Lead Guitar Techniques',
    href: '/lessons/songs/techniques/lead',
    icon: '🎸',
    description: 'Develop picking techniques, bending, and vibrato for expressive melodic playing.',
    difficulty: 'Intermediate', 
    context: 'Critical for solos, fills, and melodic lines'
  },
  {
    title: 'Fingerpicking Patterns',
    href: '/lessons/songs/techniques/fingerpicking',
    icon: '🤚',
    description: 'Learn classical and contemporary fingerpicking approaches for acoustic songs.',
    difficulty: 'Intermediate',
    context: 'Perfect for acoustic ballads and fingerstyle arrangements'
  },
  {
    title: 'Percussive Techniques',
    href: '/lessons/songs/techniques/percussive',
    icon: '🥁',
    description: 'Add rhythmic percussion to your playing with palm slaps and body percussion.',
    difficulty: 'Intermediate',
    context: 'Modern acoustic and percussive guitar styles'
  },
  {
    title: 'String Bending & Vibrato',
    href: '/lessons/songs/techniques/bending',
    icon: '🎶',
    description: 'Master expressive techniques that bring emotion and character to your playing.',
    difficulty: 'Intermediate',
    context: 'Essential for blues, rock, and expressive lead playing'
  },
  {
    title: 'Advanced Picking',
    href: '/lessons/songs/techniques/advanced-picking',
    icon: '⚡',
    description: 'Explore hybrid picking, sweep picking, and economy picking for complex passages.',
    difficulty: 'Advanced',
    context: 'Technical passages in progressive and metal genres'
  },
  {
    title: 'Slide & Legato',
    href: '/lessons/songs/techniques/slide-legato',
    icon: '➰',
    description: 'Create smooth, connected phrases using slides, hammer-ons, and pull-offs.',
    difficulty: 'Intermediate',
    context: 'Smooth melodic lines and bluesy expressions'
  },
  {
    title: 'Effects Integration',
    href: '/lessons/songs/techniques/effects',
    icon: '🎛️',
    description: 'Learn how technique changes when using distortion, delay, reverb, and modulation.',
    difficulty: 'Advanced',
    context: 'Modern electric guitar tones and textures'
  }
];

const difficultyColors = {
  'Beginner': 'bg-green-100 text-green-800',
  'Intermediate': 'bg-yellow-100 text-yellow-800', 
  'Advanced': 'bg-red-100 text-red-800'
};

export default function SongTechniquesPage() {
  return (
    <Layout>
      <Header
        title="Techniques in Songs"
        subtitle="Master guitar techniques through real songs and musical contexts. Learn why, when, and how to apply each technique."
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Overview Section */}
        <section className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Learn Techniques Through Songs?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Musical Context</h3>
              <p className="text-gray-600">Understanding when and why techniques are used in real music makes practice more meaningful and memorable.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Progressive Learning</h3>
              <p className="text-gray-600">Each technique is taught through carefully selected songs that demonstrate its musical application and benefits.</p>
            </div>
          </div>
        </section>

        {/* Techniques Grid */}
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
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {topic.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {topic.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {topic.difficulty}
                  </span>
                  <span className="text-gray-500">
                    Context-based
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* Learning Path Section */}
        <section className="mt-16 bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Recommended Learning Path</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-800 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Foundation</h3>
              <p className="text-gray-600 text-sm">Start with picking patterns and basic strumming to build your rhythmic foundation.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-800 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Expression</h3>
              <p className="text-gray-600 text-sm">Add bending, vibrato, and hammer-ons to make your playing more expressive.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-800 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Advanced</h3>
              <p className="text-gray-600 text-sm">Master sweep picking, tapping, and other advanced techniques for complex passages.</p>
            </div>
          </div>
        </section>

        {/* Practice Tips */}
        <section className="mt-12 text-center">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="font-semibold text-amber-800 mb-2">💡 Practice Tip</h3>
            <p className="text-amber-700 text-sm">
              Focus on one technique at a time, but always practice it within the context of complete musical phrases or song sections. 
              This helps you understand how the technique serves the music, not just the technique itself.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
