"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AlphaTexRenderer from '@/components/AlphaTexRenderer';

export default function LegatoPage() {
  return (
    <Layout>
      <Header
        title="Legato Technique"
        subtitle="Master the art of smooth, connected playing through hammer-ons, pull-offs, and advanced legato combinations."
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-100 rounded-xl p-8 mb-12 border border-emerald-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Legato Playing Mastery</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            Legato playing creates smooth, flowing musical lines by connecting notes seamlessly through 
            hammer-ons, pull-offs, and slides. This essential technique allows for expressive phrasing, 
            increased speed with less picking, and the ability to create vocal-like melodic passages 
            that sing with emotion and fluidity.
          </p>
        </div>

        {/* Technique Fundamentals */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Fundamental Principles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Hammer-On Technique</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  Strike the fret firmly with fingertip
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  Use quick, decisive finger motion
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  Maintain proper finger curvature
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  Generate volume from fretting hand
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  Keep unused fingers close to fretboard
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Pull-Off Technique</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  Pull finger across string (slight pluck)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  Move perpendicular to string direction
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  Pre-fret the lower note before pull-off
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  Control the volume and tone
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">•</span>
                  Practice smooth, controlled motion
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Basic Techniques Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Foundation Techniques
          </h2>
          <div className="space-y-8">
            
            {/* Exercise 1: Basic Hammer-Ons */}
            <div className="bg-white rounded-xl border border-green-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Basic Hammer-Ons</h3>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Foundation</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Start with simple two-note hammer-ons to develop the fundamental motion. Focus on 
                  generating clear, even volume from the fretting hand alone.
                </p>
                <div className="bg-green-50 rounded-lg p-3 mb-4">
                  <p className="text-green-800 text-sm"><strong>Technique:</strong> Pick the first note, then hammer the second note with your fretting finger</p>
                </div>
              </div>
              
              <AlphaTexRenderer
                alphaTex="5.6 5h7.6 5.5 5h7.5 5.4 5h7.4 5.3 5h7.3 | 5.2 5h7.2 5.1 5h7.1 7.6 7h9.6 7.5 7h9.5"
                title="Two-Fret Hammer-Ons on All Strings"
                className="scale-75"
              />
              
              <div className="mt-6 bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="font-medium text-green-900 mb-2">Practice Notes</h4>
                <p className="text-green-800 text-sm leading-relaxed mb-3">
                  Strike the fret firmly with your fingertip, not the pad. The hammered note should be 
                  as loud as the picked note. Practice on all strings to develop consistent technique.
                </p>
                <div className="flex items-center justify-center bg-green-100 rounded-md py-2 px-4">
                  <span className="text-green-700 font-medium text-sm">🎵 Suggested starting tempo: 60 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 2: Basic Pull-Offs */}
            <div className="bg-white rounded-xl border border-blue-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Basic Pull-Offs</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Foundation</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Develop smooth pull-off technique by learning to "pluck" the string with your fretting 
                  finger while revealing the lower fretted note underneath.
                </p>
                <div className="bg-blue-50 rounded-lg p-3 mb-4">
                  <p className="text-blue-800 text-sm"><strong>Technique:</strong> Pre-fret both notes, pick the higher note, then pull off to the lower note</p>
                </div>
              </div>
              
              <AlphaTexRenderer
                alphaTex="7p5.6 7p5.6 7p5.5 7p5.5 7p5.4 7p5.4 7p5.3 7p5.3 | 7p5.2 7p5.2 7p5.1 7p5.1 9p7.6 9p7.6 9p7.5 9p7.5"
                title="Two-Fret Pull-Offs on All Strings"
                className="scale-75"
              />
              
              <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="font-medium text-blue-900 mb-2">Practice Notes</h4>
                <p className="text-blue-800 text-sm leading-relaxed mb-3">
                  Before picking, make sure both fingers are properly positioned. The pull-off motion 
                  should be quick and decisive, moving perpendicular to the string.
                </p>
                <div className="flex items-center justify-center bg-blue-100 rounded-md py-2 px-4">
                  <span className="text-blue-700 font-medium text-sm">🎵 Suggested starting tempo: 60 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 3: Hammer-On Pull-Off Combinations */}
            <div className="bg-white rounded-xl border border-purple-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Hammer-On + Pull-Off Combinations</h3>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Essential</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Combine hammer-ons and pull-offs to create flowing three-note patterns. This forms 
                  the foundation for more complex legato passages.
                </p>
                <div className="bg-purple-50 rounded-lg p-3 mb-4">
                  <p className="text-purple-800 text-sm"><strong>Pattern:</strong> Pick - Hammer - Pull-Off (only one pick attack per group)</p>
                </div>
              </div>
              
              <AlphaTexRenderer
                alphaTex="5.6{8} 5h7p5.6{8} 5.5{8} 5h7p5.5{8} 5.4{8} 5h7p5.4{8} 5.3{8} 5h7p5.3{8} | 5.2{8} 5h7p5.2{8} 5.1{8} 5h7p5.1{8} 7.6{8} 7h9p7.6{8} 7.5{8} 7h9p7.5{8}"
                title="Three-Note Legato Groups on All Strings"
                className="scale-75"
              />
              
              <div className="mt-6 bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h4 className="font-medium text-purple-900 mb-2">Practice Notes</h4>
                <p className="text-purple-800 text-sm leading-relaxed mb-3">
                  Each three-note group should be completely smooth and connected. Focus on maintaining 
                  consistent volume and timing throughout the legato passage.
                </p>
                <div className="flex items-center justify-center bg-purple-100 rounded-md py-2 px-4">
                  <span className="text-purple-700 font-medium text-sm">🎵 Suggested starting tempo: 70 BPM</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Techniques Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Advanced Legato Techniques
          </h2>
          <div className="space-y-8">

            {/* Exercise 4: Four-Note Legato Patterns */}
            <div className="bg-white rounded-xl border border-amber-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  4
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Four-Note Legato Patterns</h3>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full">Intermediate</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Extend your legato technique to four-note patterns using combinations of hammer-ons 
                  and pull-offs. This develops finger independence and stamina.
                </p>
                <div className="bg-amber-50 rounded-lg p-3 mb-4">
                  <p className="text-amber-800 text-sm"><strong>Pattern:</strong> Pick - Hammer - Hammer - Pull-Off variations</p>
                </div>
              </div>
              
              <AlphaTexRenderer
                alphaTex="5.6{16} 5h7h9p7.6{16} 5.5{16} 5h7h9p7.5{16} 5.4{16} 5h7h9p7.4{16} 5.3{16} 5h7h9p7.3{16} | 5.2{16} 5h7h9p7.2{16} 5.1{16} 5h7h9p7.1{16} 7.6{16} 7h9h10p9.6{16} 7.5{16} 7h9h10p9.5{16}"
                title="Four-Note Legato Groups: Ascending and Descending"
                className="scale-75"
              />
              
              <div className="mt-6 bg-amber-50 rounded-lg p-4 border border-amber-200">
                <h4 className="font-medium text-amber-900 mb-2">Practice Notes</h4>
                <p className="text-amber-800 text-sm leading-relaxed mb-3">
                  Keep all four fingers close to the fretboard and pre-positioned. The third finger 
                  must be strong enough to generate a clear hammered note on the highest fret.
                </p>
                <div className="flex items-center justify-center bg-amber-100 rounded-md py-2 px-4">
                  <span className="text-amber-700 font-medium text-sm">🎵 Suggested starting tempo: 50 BPM (16th notes)</span>
                </div>
              </div>
            </div>

            {/* Exercise 5: Scale-Based Legato */}
            <div className="bg-white rounded-xl border border-red-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  5
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Scale-Based Legato Playing</h3>
                <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full">Musical</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Apply legato technique to musical scales, creating smooth, flowing lines that 
                  sound vocal and expressive. This bridges technical exercise with musical application.
                </p>
                <div className="bg-red-50 rounded-lg p-3 mb-4">
                  <p className="text-red-800 text-sm"><strong>Scale:</strong> A Minor Pentatonic with legato connections</p>
                </div>
              </div>
              
              <AlphaTexRenderer
                alphaTex="5.6{8} 5h8.6{8} 5.5{8} 5h7.5{8} 5.4{8} 5h7.4{8} 5.3{8} 5h7.3{8} | 5.2{8} 5h8.2{8} 5.1{8} 5h8.1{8} 8p5.1{8} 8p5.2{8} 7p5.3{8} 7p5.4{8}"
                title="A Minor Pentatonic with Legato Connections"
                className="scale-75"
              />
              
              <div className="mt-6 bg-red-50 rounded-lg p-4 border border-red-200">
                <h4 className="font-medium text-red-900 mb-2">Practice Notes</h4>
                <p className="text-red-800 text-sm leading-relaxed mb-3">
                  Focus on musical phrasing and expression. Vary the dynamics and timing slightly to 
                  create a vocal quality. Practice in different keys and scale positions.
                </p>
                <div className="flex items-center justify-center bg-red-100 rounded-md py-2 px-4">
                  <span className="text-red-700 font-medium text-sm">🎵 Suggested starting tempo: 80 BPM</span>
                </div>
              </div>
            </div>

            {/* Exercise 6: Cross-String Legato */}
            <div className="bg-white rounded-xl border border-indigo-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  6
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Cross-String Legato Patterns</h3>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">Advanced</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Master legato across multiple strings to create longer, more complex musical phrases. 
                  This technique is essential for advanced lead guitar playing.
                </p>
                <div className="bg-indigo-50 rounded-lg p-3 mb-4">
                  <p className="text-indigo-800 text-sm"><strong>Challenge:</strong> Maintain legato flow while changing strings</p>
                </div>
              </div>
              
              <AlphaTexRenderer
                alphaTex="5.6{16} 5h7h9.6{16} 7.5{16} 7h9.5{16} 7h9.4{16} 7.4{16} 7h9.3{16} 7.3{16} | 7h9.2{16} 7.2{16} 7h9.1{16} 9p7.1{16} 9p7.2{16} 7.2{16} 9p7.3{16} 7.3{16}"
                title="Flowing Cross-String Legato Patterns"
                className="scale-75"
              />
              
              <div className="mt-6 bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                <h4 className="font-medium text-indigo-900 mb-2">Practice Notes</h4>
                <p className="text-indigo-800 text-sm leading-relaxed mb-3">
                  Practice string transitions slowly to maintain the legato connection. Use minimal 
                  picking - only when necessary to move to a new string or restart a phrase.
                </p>
                <div className="flex items-center justify-center bg-indigo-100 rounded-md py-2 px-4">
                  <span className="text-indigo-700 font-medium text-sm">🎵 Progressive tempo: 40-100+ BPM</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Applications Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Advanced Legato Applications
          </h2>
          <div className="space-y-8">

            {/* Exercise 7: Slides and Legato */}
            <div className="bg-white rounded-xl border border-cyan-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  7
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Slides Combined with Legato</h3>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm rounded-full">Expressive</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Combine slides with hammer-ons and pull-offs to create extremely expressive and 
                  vocal-like passages. This technique is essential for blues and rock lead guitar.
                </p>
                <div className="bg-cyan-50 rounded-lg p-3 mb-4">
                  <p className="text-cyan-800 text-sm"><strong>Technique:</strong> Smooth slides connecting legato phrases</p>
                </div>
              </div>
              
              <AlphaTexRenderer
                alphaTex="5.6{8} 5s7h9p7.6{8} 5.5{8} 5s7h9p7.5{8} 7.4{8} 7s9h12p9.4{8} 7.3{8} 7s9h12p9.3{8} | 12p9s7.3 12p9s7.4 12p9s7.5 12p9s7.6"
                title="Expressive Slides Combined with Hammer-Ons and Pull-Offs"
                className="scale-75"
              />
              
              <div className="mt-6 bg-cyan-50 rounded-lg p-4 border border-cyan-200">
                <h4 className="font-medium text-cyan-900 mb-2">Practice Notes</h4>
                <p className="text-cyan-800 text-sm leading-relaxed mb-3">
                  Control the speed of your slides to match the musical context. Slow slides are more 
                  expressive, while quick slides add energy. Combine with vibrato for maximum effect.
                </p>
                <div className="flex items-center justify-center bg-cyan-100 rounded-md py-2 px-4">
                  <span className="text-cyan-700 font-medium text-sm">🎵 Focus on expression over speed</span>
                </div>
              </div>
            </div>

            {/* Exercise 8: Legato Speed Runs */}
            <div className="bg-white rounded-xl border border-orange-200 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  8
                </div>
                <h3 className="text-xl font-semibold text-gray-900">High-Speed Legato Runs</h3>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full">Virtuosic</span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Develop lightning-fast legato runs for impressive lead guitar solos. This technique 
                  allows for incredible speed with minimal pick attacks, creating fluid cascades of notes.
                </p>
                <div className="bg-orange-50 rounded-lg p-3 mb-4">
                  <p className="text-orange-800 text-sm"><strong>Goal:</strong> Maximum speed with crystal clear note definition</p>
                </div>
              </div>
              
              <AlphaTexRenderer
                alphaTex="12.1{16} 12h15h17h19p17p15p12.1{16} 12.2{16} 12h15h17h19p17p15p12.2{16} | 12.3{16} 12h15h17h19p17p15p12.3{16} 12.4{16} 12h15h17h19p17p15p12.4{16}"
                title="Extended Legato Runs for Speed Development"
                className="scale-75"
              />
              
              <div className="mt-6 bg-orange-50 rounded-lg p-4 border border-orange-200">
                <h4 className="font-medium text-orange-900 mb-2">Practice Notes</h4>
                <p className="text-orange-800 text-sm leading-relaxed mb-3">
                  Build speed gradually and always maintain clarity. Each note must be audible and 
                  in time. Use this technique sparingly in musical contexts for maximum impact.
                </p>
                <div className="flex items-center justify-center bg-orange-100 rounded-md py-2 px-4">
                  <span className="text-orange-700 font-medium text-sm">🎵 Progressive tempo: 60-150+ BPM</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Strategy Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Practice Strategy & Development
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
              <h3 className="text-lg font-semibold text-emerald-900 mb-4">Technical Development</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span className="text-emerald-800">Start with basic two-note hammer-ons and pull-offs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span className="text-emerald-800">Practice on all strings to develop consistent technique</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span className="text-emerald-800">Focus on volume consistency between picked and hammered notes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span className="text-emerald-800">Build finger strength gradually with longer patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span className="text-emerald-800">Practice both ascending and descending patterns</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Common Challenges</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">Weak Hammered Notes</h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    Strike the fret more decisively with your fingertip. Practice hammer-ons without 
                    picking the first note to isolate the technique.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">Inconsistent Pull-Offs</h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    Ensure the lower finger is properly positioned before the pull-off. Practice the 
                    pulling motion slowly to develop control.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">Finger Fatigue</h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    Build stamina gradually with short practice sessions. Rest between exercises and 
                    stretch your hands regularly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Musical Applications Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-300">
            Musical Applications & Styles
          </h2>
          
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Where to Use Legato Technique</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">Blues & Rock</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Expressive lead solos</li>
                  <li>• Emotional bending alternatives</li>
                  <li>• Smooth pentatonic runs</li>
                  <li>• Vocal-like phrasing</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">Jazz & Fusion</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Smooth melodic lines</li>
                  <li>• Fast bebop passages</li>
                  <li>• Connected arpeggios</li>
                  <li>• Chromatic approach notes</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">Metal & Progressive</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• High-speed runs</li>
                  <li>• Complex scale patterns</li>
                  <li>• Sweep picking alternatives</li>
                  <li>• Technical demonstrations</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-4 border border-emerald-200">
              <h4 className="font-medium text-emerald-900 mb-2">Practice Integration</h4>
              <p className="text-emerald-800 text-sm leading-relaxed">
                Once you've mastered the basic techniques, integrate legato into your regular practice routine. 
                Apply it to scales you already know, use it in improvisation, and experiment with combining 
                it with other techniques like bending, vibrato, and alternate picking for maximum musical expression.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
