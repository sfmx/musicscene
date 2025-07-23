import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const techniques = [
  {
    title: 'Hammer-ons',
    difficulty: 'Beginner',
    description: 'Ascending legato technique using finger strikes',
    musicalContext: 'Smooth scalar passages, expressive melodies',
    songs: ['Blackbird - Beatles', 'Tears in Heaven - Clapton', 'Dust in the Wind - Kansas']
  },
  {
    title: 'Pull-offs',
    difficulty: 'Beginner', 
    description: 'Descending legato technique using finger lifts',
    musicalContext: 'Graceful descending lines, blues expressions',
    songs: ['Stairway to Heaven - Led Zeppelin', 'Blackbird - Beatles', 'Classical Gas - Mason Williams']
  },
  {
    title: 'Slides',
    difficulty: 'Intermediate',
    description: 'Smooth pitch transitions between frets',
    musicalContext: 'Blues bends, country licks, rock solos',
    songs: ['Sweet Child O\' Mine - GNR', 'Layla - Clapton', 'Hotel California - Eagles']
  },
  {
    title: 'Legato Scales',
    difficulty: 'Intermediate',
    description: 'Fluid scalar passages using minimal picking',
    musicalContext: 'Fast runs, smooth melodies, technical passages',
    songs: ['Eruption - Van Halen', 'For the Love of God - Vai', 'Tender Surrender - Vai']
  },
  {
    title: 'Blues Legato',
    difficulty: 'Intermediate',
    description: 'Expressive legato in blues contexts',
    musicalContext: 'Vocal-like phrasing, emotional expression',
    songs: ['The Thrill is Gone - B.B. King', 'Little Wing - Hendrix', 'Red House - Hendrix']
  },
  {
    title: 'Cascading Legato',
    difficulty: 'Advanced',
    description: 'Complex legato patterns across multiple strings',
    musicalContext: 'Virtuosic passages, progressive rock/metal',
    songs: ['Tender Surrender - Vai', 'Always With Me - Satriani', 'Glasgow Kiss - Petrucci']
  }
];

const musicalConcepts = [
  {
    title: 'Phrasing & Expression',
    icon: '🎵',
    description: 'How legato techniques create vocal-like, expressive melodic lines',
    theory: 'Legato allows for smoother phrase connections and more natural musical breathing'
  },
  {
    title: 'Velocity Control',
    icon: '⚡',
    description: 'Managing dynamics and speed in legato passages',
    theory: 'Non-picked notes require finger strength and control for consistent volume'
  },
  {
    title: 'Harmonic Context',
    icon: '🎼',
    description: 'How legato enhances chord tones and scale relationships',
    theory: 'Smooth transitions emphasize melodic contour over rhythmic attack'
  },
  {
    title: 'Genre Applications',
    icon: '🎸',
    description: 'Style-specific approaches to slide and legato techniques',
    theory: 'Different genres emphasize different aspects of legato playing'
  }
];

const practiceExercises = [
  {
    title: 'Basic Hammer-On/Pull-Off',
    level: 'Beginner',
    description: 'Simple two-note patterns on single strings',
    focus: 'Clean articulation, consistent volume',
    progression: 'Start slow, increase speed gradually'
  },
  {
    title: 'Chromatic Legato',
    level: 'Intermediate', 
    description: 'Four-finger chromatic patterns with legato',
    focus: 'Finger independence, smooth transitions',
    progression: 'Practice in all positions, various string sets'
  },
  {
    title: 'Scale Legato',
    level: 'Intermediate',
    description: 'Major/minor scales using legato techniques',
    focus: 'Musical phrasing, proper fingering',
    progression: 'All positions, increasing tempo'
  },
  {
    title: 'Slide Combinations',
    level: 'Advanced',
    description: 'Complex patterns combining slides with legato',
    focus: 'Pitch accuracy, smooth execution',
    progression: 'Melodic contexts, improvisation'
  }
];

const difficultyColors = {
  'Beginner': 'bg-green-100 text-green-800',
  'Intermediate': 'bg-yellow-100 text-yellow-800',
  'Advanced': 'bg-red-100 text-red-800'
} as const;

export default function SlideLegato() {
  return (
    <Layout>
      <Header
        title="Slide & Legato Techniques"
        subtitle="Master smooth, connected playing through slides, hammer-ons, and pull-offs. Create vocal-like phrasing and expressive melodic lines."
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Navigation */}
        <nav className="mb-8">
          <Link href="/lessons/songs/techniques" className="text-blue-600 hover:text-blue-800">
            ← Back to Song Techniques
          </Link>
        </nav>

        {/* Overview */}
        <section className="mb-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Legato Matters</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Musical Expression</h3>
              <p className="text-gray-600">Legato techniques allow for smooth, vocal-like phrasing that connects notes naturally and expressively.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Technical Efficiency</h3>
              <p className="text-gray-600">Reducing pick attacks creates faster, more fluid passages while adding dynamic variety to your playing.</p>
            </div>
          </div>
        </section>

        {/* Technique Types */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Legato Techniques</h2>
          <div className="grid gap-6">
            {techniques.map((technique, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{technique.title}</h3>
                    <p className="text-gray-600 mb-3">{technique.description}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[technique.difficulty as keyof typeof difficultyColors]}`}>
                    {technique.difficulty}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Musical Context</h4>
                    <p className="text-sm text-gray-600">{technique.musicalContext}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Example Songs</h4>
                    <ul className="text-sm text-gray-600">
                      {technique.songs.map((song, i) => (
                        <li key={i} className="mb-1">• {song}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Musical Concepts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Musical Concepts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {musicalConcepts.map((concept, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{concept.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-900">{concept.title}</h3>
                </div>
                <p className="text-gray-600 mb-3">{concept.description}</p>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-sm text-blue-800"><strong>Theory:</strong> {concept.theory}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practice Exercises */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Progressive Exercises</h2>
          <div className="grid gap-4">
            {practiceExercises.map((exercise, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{exercise.title}</h3>
                    <p className="text-gray-600 mb-2">{exercise.description}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[exercise.level as keyof typeof difficultyColors]}`}>
                    {exercise.level}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Focus Areas</h4>
                    <p className="text-sm text-gray-600">{exercise.focus}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Progression Path</h4>
                    <p className="text-sm text-gray-600">{exercise.progression}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Tips */}
        <section className="mb-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Mastery</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Finger Strength</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Build finger independence through chromatic exercises</li>
                <li>• Practice hammer-ons/pull-offs at various string tensions</li>
                <li>• Develop consistent volume across all fingers</li>
                <li>• Use proper finger angles for maximum power</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Slide Precision</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Practice pitch accuracy with slow, controlled slides</li>
                <li>• Maintain consistent pressure throughout the slide</li>
                <li>• Use ear training to develop accurate pitch targeting</li>
                <li>• Combine slides with vibrato for expressive phrases</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Song Applications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Through Songs</h2>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended Learning Path</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">1</span>
                <div>
                  <h4 className="font-medium text-gray-800">Start with "Blackbird" - Beatles</h4>
                  <p className="text-sm text-gray-600">Perfect for learning basic hammer-ons and pull-offs in a musical context</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">2</span>
                <div>
                  <h4 className="font-medium text-gray-800">Progress to "Tears in Heaven" - Clapton</h4>
                  <p className="text-sm text-gray-600">Introduces slides and more complex legato patterns</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full mr-3 mt-1">3</span>
                <div>
                  <h4 className="font-medium text-gray-800">Master "Tender Surrender" - Vai</h4>
                  <p className="text-sm text-gray-600">Advanced cascading legato and expressive techniques</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Footer */}
        <nav className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Link href="/lessons/songs/techniques" className="text-blue-600 hover:text-blue-800">
            ← Back to Techniques
          </Link>
          <div className="flex space-x-4">
            <Link href="/lessons/songs/techniques/bending" className="text-blue-600 hover:text-blue-800">
              String Bending →
            </Link>
            <Link href="/lessons/songs/techniques/effects" className="text-blue-600 hover:text-blue-800">
              Effects Integration →
            </Link>
          </div>
        </nav>
      </main>
      <Footer />
    </Layout>
  );
}
