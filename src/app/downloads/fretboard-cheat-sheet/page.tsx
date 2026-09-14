import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import LeadMagnetBanner from '@/components/Revenue/LeadMagnetBanner';

export const metadata: Metadata = {
  title: 'Free Printable Guitar Fretboard & Modal Cheat Sheet (PDF) | MusicScene',
  description: 'Download the free 3-page printable guitar fretboard roadmap PDF. Includes complete 12-fret note map, universal interval formulas, 7 modes matrix, and CAGED pentatonic shapes.',
  alternates: {
    canonical: 'https://musicscene.com.au/downloads/fretboard-cheat-sheet/',
  },
  openGraph: {
    title: 'Free Printable Guitar Fretboard & Modal Cheat Sheet (PDF)',
    description: 'High-resolution printable 3-page guitar cheat sheet with fretboard notes, interval formulas, 7 modes, and pentatonic boxes.',
    url: 'https://musicscene.com.au/downloads/fretboard-cheat-sheet/',
    siteName: 'MusicScene',
    locale: 'en_AU',
    type: 'website',
  },
};

export default function FretboardCheatSheetPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-10 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 dark:text-slate-400 mb-6 flex items-center gap-2 print:hidden">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
          <span>/</span>
          <Link href="/lessons" className="hover:text-blue-600 dark:hover:text-blue-400">Lessons</Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200 font-medium">Free Fretboard Cheat Sheet</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-10 print:mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50 rounded-full text-xs font-semibold mb-3 print:hidden">
            <span>🎁 FREE PRINTABLE PDF DOWNLOAD</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            The Ultimate Guitar Fretboard & Modal Roadmap
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-6">
            A vector-sharp 3-page reference guide designed for your music stand. Master the 12 frets, interval formulas, the 7 modes, and CAGED pentatonic boxes with zero guesswork.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 print:hidden">
            <a
              href="/downloads/fretboard-interval-modal-roadmap.pdf"
              download="fretboard-interval-modal-roadmap.pdf"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download Printable PDF (Free)</span>
            </a>
            <Link
              href="/lessons/practice/fretboard-trainer"
              className="px-5 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold rounded-xl transition-all text-sm flex items-center gap-2 cursor-pointer"
            >
              <span>Practice on Interactive Fretboard ➔</span>
            </Link>
          </div>
        </div>

        {/* Lead Magnet Banner for Email Capture */}
        <div className="print:hidden">
          <LeadMagnetBanner />
        </div>

        {/* Section 1 Preview: Fretboard */}
        <section className="bg-white dark:bg-slate-900/90 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800 mb-8">
          <div className="flex items-center justify-between mb-4 border-b border-slate-100 dark:border-slate-800 pb-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Page 1: The 12-Fret Master Fretboard Grid</h2>
            <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-md font-medium">Standard Tuning (E A D G B E)</span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
            In standard tuning, the notes on String 1 (High E) and String 6 (Low E) are identical at every single fret. The entire pattern repeats one octave higher starting at Fret 12.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-center border-collapse border border-slate-200 dark:border-slate-800">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200">
                  <th className="p-2 border border-slate-200 dark:border-slate-800 font-bold">String</th>
                  <th className="p-2 border border-slate-200 dark:border-slate-800">Open</th>
                  <th className="p-2 border border-slate-200 dark:border-slate-800">1</th>
                  <th className="p-2 border border-slate-200 dark:border-slate-800">2</th>
                  <th className="p-2 border border-slate-200 dark:border-slate-800 bg-blue-50 dark:bg-blue-950/40 font-bold">3 •</th>
                  <th className="p-2 border border-slate-200 dark:border-slate-800">4</th>
                  <th className="p-2 border border-slate-200 dark:border-slate-800 bg-blue-50 dark:bg-blue-950/40 font-bold">5 •</th>
                  <th className="p-2 border border-slate-200 dark:border-slate-800">6</th>
                  <th className="p-2 border border-slate-200 dark:border-slate-800 bg-blue-50 dark:bg-blue-950/40 font-bold">7 •</th>
                  <th className="p-2 border border-slate-200 dark:border-slate-800">8</th>
                  <th className="p-2 border border-slate-200 dark:border-slate-800 bg-blue-50 dark:bg-blue-950/40 font-bold">9 •</th>
                  <th className="p-2 border border-slate-200 dark:border-slate-800">10</th>
                  <th className="p-2 border border-slate-200 dark:border-slate-800">11</th>
                  <th className="p-2 border border-slate-200 dark:border-slate-800 bg-indigo-100 dark:bg-indigo-950/50 font-bold">12 ••</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 font-bold bg-slate-50 dark:bg-slate-800/50">1st (E)</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 font-bold text-blue-600 dark:text-blue-400">E</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800">F</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500">F#</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 bg-blue-50/50 dark:bg-blue-950/30 font-bold">G</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500">G#</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 bg-blue-50/50 dark:bg-blue-950/30 font-bold">A</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500">A#</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 bg-blue-50/50 dark:bg-blue-950/30 font-bold">B</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 font-bold text-red-600 dark:text-red-400">C</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 bg-blue-50/50 dark:bg-blue-950/30 text-slate-400 dark:text-slate-500">C#</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 font-bold">D</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500">D#</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 bg-indigo-50 dark:bg-indigo-950/40 font-bold text-blue-600 dark:text-blue-400">E</td>
                </tr>
                <tr>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 font-bold bg-slate-50 dark:bg-slate-800/50">2nd (B)</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 font-bold text-blue-600 dark:text-blue-400">B</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 font-bold text-red-600 dark:text-red-400">C</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500">C#</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 bg-blue-50/50 dark:bg-blue-950/30 font-bold">D</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500">D#</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 bg-blue-50/50 dark:bg-blue-950/30 font-bold text-blue-600 dark:text-blue-400">E</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800">F</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 bg-blue-50/50 dark:bg-blue-950/30 text-slate-400 dark:text-slate-500">F#</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 font-bold">G</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 bg-blue-50/50 dark:bg-blue-950/30 text-slate-400 dark:text-slate-500">G#</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 font-bold">A</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500">A#</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 bg-indigo-50 dark:bg-indigo-950/40 font-bold text-blue-600 dark:text-blue-400">B</td>
                </tr>
                <tr>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 font-bold bg-slate-50 dark:bg-slate-800/50">3rd (G)</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 font-bold text-blue-600 dark:text-blue-400">G</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500">G#</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 font-bold">A</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 bg-blue-50/50 dark:bg-blue-950/30 text-slate-400 dark:text-slate-500">A#</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 font-bold">B</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 bg-blue-50/50 dark:bg-blue-950/30 font-bold text-red-600 dark:text-red-400">C</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500">C#</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 bg-blue-50/50 dark:bg-blue-950/30 font-bold">D</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500">D#</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 bg-blue-50/50 dark:bg-blue-950/30 font-bold text-blue-600 dark:text-blue-400">E</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800">F</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500">F#</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 bg-indigo-50 dark:bg-indigo-950/40 font-bold text-blue-600 dark:text-blue-400">G</td>
                </tr>
                <tr>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 font-bold bg-slate-50 dark:bg-slate-800/50">4th (D)</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 font-bold text-blue-600 dark:text-blue-400">D</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500">D#</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 font-bold text-blue-600 dark:text-blue-400">E</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 bg-blue-50/50 dark:bg-blue-950/30">F</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500">F#</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 bg-blue-50/50 dark:bg-blue-950/30 font-bold">G</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500">G#</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 bg-blue-50/50 dark:bg-blue-950/30 font-bold">A</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500">A#</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 bg-blue-50/50 dark:bg-blue-950/30 font-bold">B</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 font-bold text-red-600 dark:text-red-400">C</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500">C#</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 bg-indigo-50 dark:bg-indigo-950/40 font-bold text-blue-600 dark:text-blue-400">D</td>
                </tr>
                <tr>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 font-bold bg-slate-50 dark:bg-slate-800/50">5th (A)</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 font-bold text-blue-600 dark:text-blue-400">A</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500">A#</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 font-bold">B</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 bg-blue-50/50 dark:bg-blue-950/30 font-bold text-red-600 dark:text-red-400">C</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500">C#</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 bg-blue-50/50 dark:bg-blue-950/30 font-bold">D</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500">D#</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 bg-blue-50/50 dark:bg-blue-950/30 font-bold text-blue-600 dark:text-blue-400">E</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800">F</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 bg-blue-50/50 dark:bg-blue-950/30 text-slate-400 dark:text-slate-500">F#</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 font-bold">G</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500">G#</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 bg-indigo-50 dark:bg-indigo-950/40 font-bold text-blue-600 dark:text-blue-400">A</td>
                </tr>
                <tr>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 font-bold bg-slate-50 dark:bg-slate-800/50">6th (E)</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 font-bold text-blue-600 dark:text-blue-400">E</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800">F</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500">F#</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 bg-blue-50/50 dark:bg-blue-950/30 font-bold">G</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500">G#</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 bg-blue-50/50 dark:bg-blue-950/30 font-bold">A</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500">A#</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 bg-blue-50/50 dark:bg-blue-950/30 font-bold">B</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 font-bold text-red-600 dark:text-red-400">C</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 bg-blue-50/50 dark:bg-blue-950/30 text-slate-400 dark:text-slate-500">C#</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 font-bold">D</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500">D#</td>
                  <td className="p-2 border border-slate-200 dark:border-slate-800 bg-indigo-50 dark:bg-indigo-950/40 font-bold text-blue-600 dark:text-blue-400">E</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2 Preview: The 7 Modes */}
        <section className="bg-white dark:bg-slate-900/90 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800 mb-8">
          <div className="flex items-center justify-between mb-4 border-b border-slate-100 dark:border-slate-800 pb-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Page 2: The 7 Modes of the Major Scale</h2>
            <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-md font-medium">Brightest to Darkest</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">1. Lydian (Brightest)</span>
              <h3 className="font-bold text-base text-slate-900 dark:text-white mt-0.5">1 - 2 - 3 - #4 - 5 - 6 - 7</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                <strong>Characteristic:</strong> #4 (Augmented 4th). Ethereal, celestial sci-fi mood (<em>The Simpsons</em>, Joe Satriani).
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">2. Ionian (Major)</span>
              <h3 className="font-bold text-base text-slate-900 dark:text-white mt-0.5">1 - 2 - 3 - 4 - 5 - 6 - 7</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                <strong>Characteristic:</strong> Natural Major 3rd and 7th. Triumphant, happy, stable resolution (<em>Let It Be</em>).
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">3. Mixolydian</span>
              <h3 className="font-bold text-base text-slate-900 dark:text-white mt-0.5">1 - 2 - 3 - 4 - 5 - 6 - b7</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                <strong>Characteristic:</strong> Flat 7th (b7). Classic rock drive, bluesy southern rock swagger (<em>Sweet Child O' Mine</em>).
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">4. Dorian</span>
              <h3 className="font-bold text-base text-slate-900 dark:text-white mt-0.5">1 - 2 - b3 - 4 - 5 - 6 - b7</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                <strong>Characteristic:</strong> Natural 6th (6) over minor. Funky, sophisticated Santana minor jam (<em>Oye Como Va</em>).
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">5. Aeolian (Natural Minor)</span>
              <h3 className="font-bold text-base text-slate-900 dark:text-white mt-0.5">1 - 2 - b3 - 4 - 5 - b6 - b7</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                <strong>Characteristic:</strong> Flat 6th (b6). Pure emotional drama and melodic sadness (<em>Stairway to Heaven</em>).
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">6. Phrygian</span>
              <h3 className="font-bold text-base text-slate-900 dark:text-white mt-0.5">1 - b2 - b3 - 4 - 5 - b6 - b7</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                <strong>Characteristic:</strong> Flat 2nd (b2). Spanish flamenco tension and heavy metal aggression (<em>Wherever I May Roam</em>).
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 Preview: Pentatonic Boxes */}
        <section className="bg-white dark:bg-slate-900/90 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800 mb-8">
          <div className="flex items-center justify-between mb-4 border-b border-slate-100 dark:border-slate-800 pb-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Page 3: The 5 CAGED Pentatonic Box Shapes</h2>
            <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-md font-medium">Interlocking Neck System</span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
            The 5 pentatonic box shapes connect end-to-end to cover the entire guitar neck. Combine Box 1 (E-Shape) and Box 4 (A-Shape) with the Blue Note (b5) to solo fluidly across octaves.
          </p>
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
            <h4 className="font-bold text-sm text-blue-900 mb-1">Interactive Companion Practice Tools:</h4>
            <p className="text-xs text-blue-600 dark:text-blue-400 leading-relaxed">
              Test your fretboard recall with our <Link href="/lessons/practice/fretboard-trainer" className="underline font-semibold">Interactive Fretboard Speed Quiz</Link> or jam over backing tracks in our <Link href="/lessons/practice/progression-player" className="underline font-semibold">12-Bar Blues & Chord Jam Station</Link>.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <div className="text-center py-8 border-t border-slate-200 dark:border-slate-800 print:hidden">
          <a
            href="/downloads/fretboard-interval-modal-roadmap.pdf"
            download="fretboard-interval-modal-roadmap.pdf"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all text-base cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download Free 3-Page Cheat Sheet (PDF)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
