import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const topics = [
  {
    title: 'Scale Application',
    href: '/lessons/songs/lead/scales',
    icon: '🎼',
    description: 'Learn how to choose and apply scales over chord progressions in real songs for melodic lead playing.',
    difficulty: 'Intermediate',
    theory: 'Scale-chord relationships, modal interchange, key centers'
  },
  {
    title: 'Phrasing & Expression',
    href: '/lessons/songs/lead/phrasing',
    icon: '🎭',
    description: 'Develop musical phrasing using bends, vibrato, and timing to create expressive lead guitar lines.',
    difficulty: 'Intermediate',
    theory: 'Musical phrases, rhythmic displacement, expression techniques'
  },
  {
    title: 'Solo Construction',
    href: '/lessons/songs/lead/construction',
    icon: '🏗️',
    description: 'Understand how to build compelling solos using motivic development, tension, and resolution.',
    difficulty: 'Advanced',
    theory: 'Motivic development, harmonic tension, structural analysis'
  },
  {
    title: 'Melodic Intervals',
    href: '/lessons/songs/lead/intervals',
    icon: '📏',
    description: 'Master the use of intervals to create memorable melodies and understand their emotional impact.',
    difficulty: 'Intermediate',
    theory: 'Interval theory, melodic motion, harmonic intervals'
  },
  {
    title: 'Blues Lead Techniques',
    href: '/lessons/songs/lead/blues',
    icon: '🎷',
    description: 'Learn essential blues lead techniques including bending, call-and-response, and blues scale application.',
    difficulty: 'Beginner',
    theory: 'Blues scales, chord-tone targeting, blues harmony'
  },
  {
    title: 'Rock Lead Guitar',
    href: '/lessons/songs/lead/rock',
    icon: '🤘',
    description: 'Master rock lead techniques including power chord melodies, pentatonic applications, and aggressive phrasing.',
    difficulty: 'Intermediate',
    theory: 'Pentatonic scales, power chord harmony, rock phrasing'
  },
  {
    title: 'Jazz Lead Concepts',
    href: '/lessons/songs/lead/jazz',
    icon: '🎺',
    description: 'Explore jazz lead guitar through chord substitutions, altered scales, and sophisticated harmonic concepts.',
    difficulty: 'Advanced',
    theory: 'Altered scales, chord extensions, jazz harmony'
  },
  {
    title: 'Country Lead Techniques',
    href: '/lessons/songs/lead/country',
    icon: '🤠',
    description: 'Learn country lead guitar including chicken picking, hybrid picking, and Telecaster-style phrasing.',
    difficulty: 'Intermediate',
    theory: 'Major pentatonic, hybrid picking, country harmony'
  },
];

export default function SongLeadPage() {
  return (
    <Layout>
      <Header
        title="Lead Guitar & Solos in Songs"
        subtitle="Master lead guitar through analysis of great solos and understanding of melodic construction."
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Overview Section */}
        <section className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Lead Guitar: Melody Meets Theory</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Tell a Story</h3>
              <p className="text-gray-600">Great lead guitar doesn't just play notes—it tells a musical story through melodic phrases, tension, and resolution.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Theory in Action</h3>
              <p className="text-gray-600">Understanding scales, chord tones, and harmonic function allows you to play meaningful melodies that support the song.</p>
            </div>
          </div>
        </section>

        {/* Lead Guitar Concepts */}
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
                  <span className="text-gray-500 text-xs">
                    {topic.theory}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* Solo Development Process */}
        <section className="mt-16 bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Solo Development Method</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-800 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Analyze</h3>
              <p className="text-gray-600 text-sm">Study the chord progression and identify key centers, chord tones, and available scales.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-800 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Phrase</h3>
              <p className="text-gray-600 text-sm">Create short musical phrases that outline the harmony and express the song's emotion.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-800 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Develop</h3>
              <p className="text-gray-600 text-sm">Build longer passages by connecting phrases and creating motivic development throughout the solo.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-800 font-bold">4</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Express</h3>
              <p className="text-gray-600 text-sm">Add expression through bending, vibrato, and dynamics to make the solo uniquely yours.</p>
            </div>
          </div>
        </section>

        {/* Famous Solo Analysis */}
        <section className="mt-12 bg-indigo-50 border border-indigo-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-indigo-900 mb-4">🎸 Analysis: "Comfortably Numb" Solo</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-indigo-800 mb-2"><strong>Harmonic Foundation:</strong></p>
              <p className="text-indigo-700">Built over Bm-A-G-Em progression using B minor pentatonic as the primary scale choice.</p>
            </div>
            <div>
              <p className="text-indigo-800 mb-2"><strong>Phrasing Technique:</strong></p>
              <p className="text-indigo-700">Uses space, bends, and vibrato to create emotional expression rather than speed or complexity.</p>
            </div>
            <div>
              <p className="text-indigo-800 mb-2"><strong>Structural Elements:</strong></p>
              <p className="text-indigo-700">Builds from simple motifs to complex passages, creating a narrative arc throughout the solo.</p>
            </div>
          </div>
        </section>

        {/* Practice Approach */}
        <section className="mt-12 bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-amber-900 mb-4">🎯 Lead Guitar Practice Strategy</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-amber-800 mb-2"><strong>Learn the Harmony:</strong></p>
              <p className="text-amber-700">Before playing lead, understand the chord progression thoroughly. Play the chords, identify the key, and find chord tones on the fretboard.</p>
            </div>
            <div>
              <p className="text-amber-800 mb-2"><strong>Sing Your Ideas:</strong></p>
              <p className="text-amber-700">If you can't sing a melody, it's probably not memorable. Practice singing melodic ideas before playing them on guitar.</p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mt-12 text-center">
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">🚀 Begin Your Lead Journey</h3>
            <p className="text-gray-700 mb-4">
              Start with scale application to understand the theoretical foundation, then develop your phrasing and expression.
            </p>
            <Link 
              href="/lessons/songs/lead/scales"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start with Scale Application →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
