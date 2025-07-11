"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MusicScore from '@/components/MusicScore';
import VexTabScriptLoader from '@/components/VexTabScriptLoader';

export default function StretchingPage() {
  return (
    <Layout>
      <VexTabScriptLoader />
      <Header
        title="Stretching Exercises"
        subtitle="Essential stretches and warm-up exercises to prevent injury and improve playing comfort."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-xl p-8 mb-12 border border-teal-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Guitar Stretching & Warm-Up Exercises</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            Proper stretching and warm-up exercises are crucial for preventing injury and maintaining 
            healthy playing habits. These exercises will help you prepare your hands, wrists, and arms 
            for practice sessions while building flexibility and reducing tension.
          </p>
        </div>

        {/* Safety Guidelines */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Safety & Warm-Up Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Before You Play</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  Always warm up before intense practice
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  Start with gentle movements and stretches
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  Never force or push through pain
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  Hold stretches for 15-30 seconds
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">During Practice</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-1">•</span>
                  Take regular breaks every 20-30 minutes
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-1">•</span>
                  Stop if you feel pain or excessive tension
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-1">•</span>
                  Keep shoulders relaxed and posture upright
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-1">•</span>
                  Shake out hands and arms periodically
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pre-Playing Stretches Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Pre-Playing Stretches
          </h2>
          <div className="space-y-8">
            
            {/* Exercise 1: Wrist Flexibility Stretches */}
            <div className="bg-white rounded-xl border border-blue-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Wrist Flexibility Stretches</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Essential</span>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Gentle wrist stretches help maintain flexibility and prevent repetitive strain injuries.
                  These movements prepare your wrists for the various positions required in guitar playing.
                </p>
                
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <h4 className="font-medium text-blue-900 mb-3">Stretch Sequence:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-blue-800 text-sm">
                    <li><strong>Wrist Extension:</strong> Extend arm forward, gently pull fingers back toward body (15-30 seconds)</li>
                    <li><strong>Wrist Flexion:</strong> Extend arm forward, gently push hand down toward floor (15-30 seconds)</li>
                    <li><strong>Wrist Circles:</strong> Make slow, gentle circles in both directions (8-10 rotations each)</li>
                    <li><strong>Side-to-Side:</strong> Move hand from side to side while keeping forearm stable (10-15 reps)</li>
                  </ol>
                </div>
              </div>
              
              <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="font-medium text-blue-900 mb-2">Important Notes</h4>
                <p className="text-blue-800 text-sm leading-relaxed">
                  Perform these stretches gently and slowly. You should feel a mild stretch, never pain.
                  These movements help prevent carpal tunnel syndrome and tendonitis.
                </p>
              </div>
            </div>

            {/* Exercise 2: Finger Extension Stretches */}
            <div className="bg-white rounded-xl border border-green-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Finger Extension & Independence</h3>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Flexibility</span>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  These exercises improve finger flexibility and independence while gently stretching
                  the small muscles and tendons in your hands.
                </p>
                
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <h4 className="font-medium text-green-900 mb-3">Exercise Sequence:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-green-800 text-sm">
                    <li><strong>Finger Spreads:</strong> Spread fingers wide apart, hold for 5 seconds, repeat 5 times</li>
                    <li><strong>Individual Finger Lifts:</strong> Place hand flat, lift each finger individually (5 reps per finger)</li>
                    <li><strong>Finger Extensions:</strong> Gently pull each finger back with other hand (hold 10 seconds each)</li>
                    <li><strong>Thumb Stretches:</strong> Pull thumb across palm toward pinky, then extend away from palm</li>
                  </ol>
                </div>
              </div>
              
              <div className="mt-6 bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="font-medium text-green-900 mb-2">Practice Notes</h4>
                <p className="text-green-800 text-sm leading-relaxed">
                  Focus on controlled, gentle movements. These exercises help prevent trigger finger
                  and improve finger independence for complex chord shapes and techniques.
                </p>
              </div>
            </div>

            {/* Exercise 3: Arm & Shoulder Preparation */}
            <div className="bg-white rounded-xl border border-purple-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Arm & Shoulder Preparation</h3>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Posture</span>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Upper body stretches help maintain proper posture and prevent tension in the neck,
                  shoulders, and upper back that can affect your playing.
                </p>
                
                <div className="bg-purple-50 rounded-lg p-4 mb-4">
                  <h4 className="font-medium text-purple-900 mb-3">Movement Sequence:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-purple-800 text-sm">
                    <li><strong>Shoulder Rolls:</strong> Roll shoulders backward in large circles (8-10 rotations)</li>
                    <li><strong>Neck Stretches:</strong> Gently tilt head to each side, hold 15 seconds</li>
                    <li><strong>Arm Circles:</strong> Small to large circles, forward and backward (5 each direction)</li>
                    <li><strong>Cross-Body Stretch:</strong> Pull arm across chest, hold 15-20 seconds each arm</li>
                  </ol>
                </div>
              </div>
              
              <div className="mt-6 bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h4 className="font-medium text-purple-900 mb-2">Practice Notes</h4>
                <p className="text-purple-800 text-sm leading-relaxed">
                  Good posture is essential for injury prevention. These stretches help counteract
                  the forward head position and rounded shoulders common in guitar players.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Guitar-Specific Warm-Ups Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Guitar-Specific Warm-Up Exercises
          </h2>
          <div className="space-y-8">
            
            {/* Exercise 4: Gentle Finger Warm-Up */}
            <div className="bg-white rounded-xl border border-amber-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  4
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Gentle Finger Warm-Up</h3>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full">Guitar</span>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Start your practice session with these gentle movements on the guitar to gradually
                  prepare your fingers for more demanding exercises.
                </p>
              </div>
              
              <MusicScore
                title="Gentle Finger Warm-Up Exercise"
                staves={[{
                  id: 'gentle-finger-warmup',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=C
notes :w 1/6 | 1/5 | 1/4 | 1/3 | 1/2 | 1/1`,
                  width: 550,
                  scale: 1.0,
                  title: 'Single Finger Press - Very Slow and Gentle'
                }]}
              />
              
              <div className="mt-6 bg-amber-50 rounded-lg p-4 border border-amber-200">
                <h4 className="font-medium text-amber-900 mb-2">Warm-Up Notes</h4>
                <p className="text-amber-800 text-sm leading-relaxed mb-3">
                  Press each fret very gently and slowly. Focus on minimal pressure - just enough to get
                  a clear note. This prepares your fingers without strain. Repeat on each string.
                </p>
                <div className="flex items-center justify-center bg-amber-100 rounded-md py-2 px-4">
                  <span className="text-amber-700 font-medium text-sm">🎵 Suggested tempo: 40 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 5: Progressive Stretch Patterns */}
            <div className="bg-white rounded-xl border border-red-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  5
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Progressive Stretch Patterns</h3>
                <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full">Flexibility</span>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Gradually increase finger stretches on the guitar to improve reach and flexibility.
                  Start with comfortable intervals and slowly expand your range.
                </p>
              </div>
              
              <MusicScore
                title="Progressive Stretch Pattern Exercise"
                staves={[{
                  id: 'progressive-stretch',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=C
notes :h 1/6 2/6 | 1/6 3/6 | 1/6 4/6 | 2/6 4/6`,
                  width: 550,
                  scale: 1.0,
                  title: 'Gradual Finger Stretching Exercise'
                }]}
              />
              
              <div className="mt-6 bg-red-50 rounded-lg p-4 border border-red-200">
                <h4 className="font-medium text-red-900 mb-2">Stretch Notes</h4>
                <p className="text-red-800 text-sm leading-relaxed mb-3">
                  Start with 1-2 fret intervals, then gradually increase to 1-3, then 1-4, then 2-4.
                  Only stretch as far as comfortable. This builds flexibility over time.
                </p>
                <div className="flex items-center justify-center bg-red-100 rounded-md py-2 px-4">
                  <span className="text-red-700 font-medium text-sm">🎵 Suggested tempo: 50 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 6: Hand Position Awareness */}
            <div className="bg-white rounded-xl border border-indigo-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  6
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Hand Position Awareness</h3>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">Technique</span>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Practice proper hand positioning and relaxation techniques to maintain healthy
                  playing habits and prevent tension buildup during practice.
                </p>
              </div>
              
              <MusicScore
                title="Hand Position Awareness Exercise"
                staves={[{
                  id: 'hand-position-awareness',
                  notation: `options space=20 font-size=14
tabstave notation=true time=4/4 key=C
notes :q 0/6 0/5 0/4 0/3 | 0/2 0/1 0/2 0/3 | 0/4 0/5 0/6 ##`,
                  width: 550,
                  scale: 1.0,
                  title: 'Open String Position Check'
                }]}
              />
              
              <div className="mt-6 bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                <h4 className="font-medium text-indigo-900 mb-2">Position Notes</h4>
                <p className="text-indigo-800 text-sm leading-relaxed mb-3">
                  Play open strings while focusing on thumb position behind the neck, relaxed shoulders,
                  and curved fingers. Check for tension and consciously relax between notes.
                </p>
                <div className="flex items-center justify-center bg-indigo-100 rounded-md py-2 px-4">
                  <span className="text-indigo-700 font-medium text-sm">🎵 Focus on position, not tempo</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Post-Practice Cool Down Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Post-Practice Cool Down
          </h2>
          
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center font-semibold text-sm">
                ✓
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Cool Down Routine</h3>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Recovery</span>
            </div>
            
            <div className="mb-4">
              <p className="text-gray-700 leading-relaxed mb-4">
                End your practice session with these gentle movements to help your muscles recover
                and prevent stiffness.
              </p>
              
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-medium text-slate-900 mb-3">Cool Down Sequence:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-slate-800 text-sm">
                    <li><strong>Gentle Shaking:</strong> Shake hands and arms loosely for 10-15 seconds</li>
                    <li><strong>Finger Massage:</strong> Gently massage each finger and the palm</li>
                    <li><strong>Wrist Circles:</strong> Slow, gentle circles in both directions</li>
                  </ul>
                  <ul className="space-y-2 text-slate-800 text-sm">
                    <li><strong>Shoulder Rolls:</strong> Release tension with backward rolls</li>
                    <li><strong>Deep Breathing:</strong> 3-5 deep breaths to relax your whole body</li>
                    <li><strong>Gentle Stretches:</strong> Repeat any stretches that felt particularly good</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Essential Tips Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Essential Stretching Tips
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-lg font-semibold text-teal-900 mb-4">Safety First</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 mt-1">•</span>
                  <span className="text-teal-800">Never force stretches or push through pain</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 mt-1">•</span>
                  <span className="text-teal-800">Start gently and gradually increase range of motion</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 mt-1">•</span>
                  <span className="text-teal-800">Stop immediately if you experience sharp pain</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 mt-1">•</span>
                  <span className="text-teal-800">Consistency is more important than intensity</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Why Stretching Matters</h3>
              <p className="text-blue-800 leading-relaxed">
                Regular stretching and warm-up exercises are essential for injury prevention and optimal 
                performance. They improve flexibility, reduce muscle tension, increase blood flow, and 
                help maintain healthy joints. Taking just 5-10 minutes before and after practice can 
                significantly extend your playing career and improve your comfort while playing.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
