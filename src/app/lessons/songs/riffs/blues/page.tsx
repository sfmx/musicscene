import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const bluesRiffConcepts = [
  {
    concept: 'Blues Scale',
    theory: '1-b3-4-b5-5-b7',
    application: 'Foundation for most blues riffs and licks',
    example: 'E blues scale: E-G-A-Bb-B-D',
    riffExample: 'Classic turnaround licks use the b5 (Bb) for tension'
  },
  {
    concept: '12-Bar Blues Progression',
    theory: 'I-I-I-I-IV-IV-I-I-V-IV-I-V',
    application: 'Harmonic framework that guides riff construction',
    example: 'E blues: E7-E7-E7-E7-A7-A7-E7-E7-B7-A7-E7-B7',
    riffExample: 'Riffs emphasize chord tones during each section'
  },
  {
    concept: 'Call and Response',
    theory: 'Musical conversation between phrases',
    application: 'Creates space and interaction in blues playing',
    example: 'Guitar "asks" with ascending phrase, "answers" with descending',
    riffExample: 'Classic blues solos alternate between riff and space'
  },
  {
    concept: 'Shuffle Rhythm',
    theory: 'Triplet-based feel with long-short pattern',
    application: 'Gives blues its characteristic swing feel',
    example: 'Play eighth notes as triplet quarter-eighth patterns',
    riffExample: 'Most blues riffs use shuffle feel rather than straight time'
  }
];

const famousBluesRiffs = [
  {
    song: '"Sweet Home Chicago"',
    artist: 'Robert Johnson / Blues Brothers',
    key: 'E Major/Blues',
    analysis: 'Uses E blues scale with emphasis on chord tones',
    technique: 'Single-note lines with shuffle rhythm',
    theory: 'Outlines I-IV-V progression with blues scale embellishments',
    difficulty: 'Beginner',
    lessonFocus: 'Perfect introduction to blues scale and 12-bar form'
  },
  {
    song: '"Crossroads"',
    artist: 'Robert Johnson / Cream',
    key: 'A Blues',
    analysis: 'Combines major and minor pentatonic with blue notes',
    technique: 'Fast alternate picking with string bending',
    theory: 'Uses A blues scale with chromatic passing tones',
    difficulty: 'Intermediate',
    lessonFocus: 'Advanced blues scale application and speed development'
  },
  {
    song: '"The Thrill Is Gone"',
    artist: 'B.B. King',
    key: 'B Minor',
    analysis: 'Minor blues with sophisticated chord substitutions',
    technique: 'String bending and vibrato mastery',
    theory: 'Minor blues scale with jazz-influenced chord changes',
    difficulty: 'Intermediate',
    lessonFocus: 'Minor blues and expressive techniques'
  },
  {
    song: '"Pride and Joy"',
    artist: 'Stevie Ray Vaughan',
    key: 'E Blues',
    analysis: 'Texas blues style with aggressive attack',
    technique: 'Heavy picking with palm muting accents',
    theory: 'E blues scale with emphasis on rhythm and dynamics',
    difficulty: 'Intermediate',
    lessonFocus: 'Modern blues technique and rhythmic precision'
  }
];

const bluesTechniques = [
  {
    technique: 'String Bending',
    description: 'Bend strings to reach pitches between frets',
    theory: 'Creates blue notes and expressive pitch variation',
    practice: 'Bend 3rd fret G string up to match 5th fret pitch',
    musicalEffect: 'Adds emotion and vocal-like quality'
  },
  {
    technique: 'Vibrato',
    description: 'Rapid pitch oscillation on sustained notes',
    theory: 'Adds life and expressiveness to held tones',
    practice: 'Shake string parallel to frets, varying speed and width',
    musicalEffect: 'Makes notes sing and sustain longer'
  },
  {
    technique: 'Hammer-ons/Pull-offs',
    description: 'Create notes without picking',
    theory: 'Allows fluid melodic lines and legato phrasing',
    practice: 'Hammer from 2nd to 4th fret, pull off back to 2nd',
    musicalEffect: 'Smooth, connected phrases like vocal lines'
  },
  {
    technique: 'Double Stops',
    description: 'Play two notes simultaneously',
    theory: 'Creates harmony and fuller sound',
    practice: 'Play 3rd and 4th strings together in blues scale positions',
    musicalEffect: 'Adds harmonic richness and classic blues sound'
  }
];

export default function BluesRiffsPage() {
  return (
    <Layout>
      <Header
        title="Blues Riffs"
        subtitle="Master blues riffs through understanding of blues scales, 12-bar progressions, and call-and-response patterns"
      />
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Foundation of All Popular Music</h2>
          <div className="prose prose-lg text-gray-700 max-w-none">
            <p>
              Blues riffs are the DNA of rock, pop, jazz, and country music. Understanding blues theory gives you 
              the <strong>harmonic foundation</strong> and <strong>rhythmic feel</strong> that underlies almost 
              every genre. Start here to build your riff vocabulary from the ground up.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-blue-600 mb-2">🎵 Universal Language</h3>
                <p className="text-sm">Blues scales and 12-bar progressions appear in everything from "Johnny B. Goode" to "Hey Joe" to jazz standards.</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-blue-600 mb-2">🎸 Technique Foundation</h3>
                <p className="text-sm">Blues techniques like bending, vibrato, and call-and-response are essential for expressive playing in any style.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Theory Concepts */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">🎼 Essential Blues Theory</h2>
          <div className="space-y-6">
            {bluesRiffConcepts.map((concept, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{concept.concept}</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                    Core Theory
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-600 mb-1">Theory:</p>
                      <p className="font-mono text-sm text-gray-800">{concept.theory}</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="text-sm text-blue-600 mb-1">Example:</p>
                      <p className="text-sm text-blue-800">{concept.example}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-700"><strong>Application:</strong> {concept.application}</p>
                    <p className="text-sm text-gray-600"><strong>In Riffs:</strong> {concept.riffExample}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Famous Blues Riffs Analysis */}
        <section className="mb-12 bg-purple-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🎸 Iconic Blues Riffs Analyzed</h2>
          <div className="space-y-6">
            {famousBluesRiffs.map((riff, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border-l-4 border-purple-500">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{riff.song}</h3>
                    <p className="text-sm text-gray-600">by {riff.artist}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      riff.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                      riff.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {riff.difficulty}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">Key: {riff.key}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Harmonic Analysis:</p>
                    <p className="text-gray-700">{riff.analysis}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Technique Focus:</p>
                    <p className="text-gray-700">{riff.technique}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Theory Application:</p>
                    <p className="text-gray-700">{riff.theory}</p>
                  </div>
                </div>
                <div className="mt-4 bg-purple-50 p-3 rounded">
                  <p className="text-sm text-purple-700"><strong>Lesson Focus:</strong> {riff.lessonFocus}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Essential Techniques */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">🔧 Essential Blues Techniques</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {bluesTechniques.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{tech.technique}</h3>
                <div className="space-y-3">
                  <p className="text-sm text-gray-700">{tech.description}</p>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-sm text-gray-600 mb-1">Theory:</p>
                    <p className="text-sm text-gray-800">{tech.theory}</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <p className="text-sm text-blue-600 mb-1">Practice:</p>
                    <p className="text-sm text-blue-800">{tech.practice}</p>
                  </div>
                  <p className="text-sm text-gray-600"><strong>Musical Effect:</strong> {tech.musicalEffect}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practice Progression */}
        <section className="mb-12 bg-green-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📈 Your Blues Riff Learning Path</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="font-semibold text-gray-900 mb-3">Stage 1: Foundation (Weeks 1-2)</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Learn the E blues scale in open position</li>
                <li>• Practice basic 12-bar blues progression</li>
                <li>• Master shuffle rhythm with simple riffs</li>
                <li>• Learn "Sweet Home Chicago" main riff</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-yellow-500">
              <h3 className="font-semibold text-gray-900 mb-3">Stage 2: Expression (Weeks 3-4)</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Add string bending to your blues scale</li>
                <li>• Practice vibrato on sustained notes</li>
                <li>• Learn call-and-response phrasing</li>
                <li>• Study "The Thrill Is Gone" licks</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
              <h3 className="font-semibold text-gray-900 mb-3">Stage 3: Style Integration (Weeks 5-6)</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Combine multiple techniques in single riffs</li>
                <li>• Learn riffs in different keys (A, G, D blues)</li>
                <li>• Practice over backing tracks</li>
                <li>• Create your own blues riffs using learned concepts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quick Reference */}
        <section className="mb-12 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">📚 Blues Riff Quick Reference</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-blue-600 mb-2">Common Keys</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• E Blues (most common)</li>
                <li>• A Blues (good for vocals)</li>
                <li>• G Blues (open string friendly)</li>
                <li>• D Blues (versatile key)</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-green-600 mb-2">Essential Scales</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Minor Pentatonic + b5</li>
                <li>• Major Pentatonic</li>
                <li>• Mixolydian Mode</li>
                <li>• Minor Blues Scale</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-purple-600 mb-2">Rhythmic Feels</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Shuffle (triplet-based)</li>
                <li>• Straight Eighth Notes</li>
                <li>• Slow Blues (ballad feel)</li>
                <li>• Fast Boogie (driving eighth)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">🧭 Next Steps</h3>
            <div className="space-y-3">
              <Link 
                href="/lessons/songs/riffs/classic-rock"
                className="block text-sm text-blue-700 hover:text-blue-800 font-medium"
              >
                → Learn Classic Rock Riffs
              </Link>
              <Link 
                href="/lessons/songs/riffs/pop"
                className="block text-sm text-blue-700 hover:text-blue-800 font-medium"
              >
                → Explore Pop Riffs
              </Link>
              <Link 
                href="/lessons/songs/chords/progressions"
                className="block text-sm text-blue-700 hover:text-blue-800 font-medium"
              >
                → Study Chord Progressions
              </Link>
            </div>
          </div>
          <div className="bg-purple-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">🔗 Related Topics</h3>
            <div className="space-y-3">
              <Link 
                href="/lessons/songs/riffs/jazz"
                className="block text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                → Advanced Jazz Riffs
              </Link>
              <Link 
                href="/lessons/songs/techniques"
                className="block text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                → Guitar Techniques
              </Link>
              <Link 
                href="/lessons/songs/riffs"
                className="block text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                ← Back to Riffs Overview
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
