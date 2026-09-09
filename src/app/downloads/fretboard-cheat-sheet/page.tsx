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
    <div className="min-h-screen bg-slate-50 text-gray-900 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-xs text-gray-500 mb-6 flex items-center gap-2 print:hidden">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link href="/lessons" className="hover:text-blue-600">Lessons</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">Free Fretboard Cheat Sheet</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-10 print:mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold mb-3 print:hidden">
            <span>🎁 FREE PRINTABLE PDF DOWNLOAD</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            The Ultimate Guitar Fretboard & Modal Roadmap
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6">
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
              className="px-5 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-xl transition-all text-sm flex items-center gap-2 cursor-pointer"
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
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 mb-8">
          <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
            <h2 className="text-xl font-bold text-gray-900">Page 1: The 12-Fret Master Fretboard Grid</h2>
            <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md font-medium">Standard Tuning (E A D G B E)</span>
          </div>
          <p className="text-sm text-gray-600 mb-6">
            In standard tuning, the notes on String 1 (High E) and String 6 (Low E) are identical at every single fret. The entire pattern repeats one octave higher starting at Fret 12.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-center border-collapse border border-gray-200">
              <thead>
                <tr className="bg-slate-100 text-gray-700">
                  <th className="p-2 border border-gray-200 font-bold">String</th>
                  <th className="p-2 border border-gray-200">Open</th>
                  <th className="p-2 border border-gray-200">1</th>
                  <th className="p-2 border border-gray-200">2</th>
                  <th className="p-2 border border-gray-200 bg-blue-50 font-bold">3 •</th>
                  <th className="p-2 border border-gray-200">4</th>
                  <th className="p-2 border border-gray-200 bg-blue-50 font-bold">5 •</th>
                  <th className="p-2 border border-gray-200">6</th>
                  <th className="p-2 border border-gray-200 bg-blue-50 font-bold">7 •</th>
                  <th className="p-2 border border-gray-200">8</th>
                  <th className="p-2 border border-gray-200 bg-blue-50 font-bold">9 •</th>
                  <th className="p-2 border border-gray-200">10</th>
                  <th className="p-2 border border-gray-200">11</th>
                  <th className="p-2 border border-gray-200 bg-indigo-100 font-bold">12 ••</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-gray-200 font-bold bg-gray-50">1st (E)</td>
                  <td className="p-2 border border-gray-200 font-bold text-blue-700">E</td>
                  <td className="p-2 border border-gray-200">F</td>
                  <td className="p-2 border border-gray-200 text-gray-400">F#</td>
                  <td className="p-2 border border-gray-200 bg-blue-50/50 font-bold">G</td>
                  <td className="p-2 border border-gray-200 text-gray-400">G#</td>
                  <td className="p-2 border border-gray-200 bg-blue-50/50 font-bold">A</td>
                  <td className="p-2 border border-gray-200 text-gray-400">A#</td>
                  <td className="p-2 border border-gray-200 bg-blue-50/50 font-bold">B</td>
                  <td className="p-2 border border-gray-200 font-bold text-red-600">C</td>
                  <td className="p-2 border border-gray-200 bg-blue-50/50 text-gray-400">C#</td>
                  <td className="p-2 border border-gray-200 font-bold">D</td>
                  <td className="p-2 border border-gray-200 text-gray-400">D#</td>
                  <td className="p-2 border border-gray-200 bg-indigo-50 font-bold text-blue-700">E</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-200 font-bold bg-gray-50">2nd (B)</td>
                  <td className="p-2 border border-gray-200 font-bold text-blue-700">B</td>
                  <td className="p-2 border border-gray-200 font-bold text-red-600">C</td>
                  <td className="p-2 border border-gray-200 text-gray-400">C#</td>
                  <td className="p-2 border border-gray-200 bg-blue-50/50 font-bold">D</td>
                  <td className="p-2 border border-gray-200 text-gray-400">D#</td>
                  <td className="p-2 border border-gray-200 bg-blue-50/50 font-bold text-blue-700">E</td>
                  <td className="p-2 border border-gray-200">F</td>
                  <td className="p-2 border border-gray-200 bg-blue-50/50 text-gray-400">F#</td>
                  <td className="p-2 border border-gray-200 font-bold">G</td>
                  <td className="p-2 border border-gray-200 bg-blue-50/50 text-gray-400">G#</td>
                  <td className="p-2 border border-gray-200 font-bold">A</td>
                  <td className="p-2 border border-gray-200 text-gray-400">A#</td>
                  <td className="p-2 border border-gray-200 bg-indigo-50 font-bold text-blue-700">B</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-200 font-bold bg-gray-50">3rd (G)</td>
                  <td className="p-2 border border-gray-200 font-bold text-blue-700">G</td>
                  <td className="p-2 border border-gray-200 text-gray-400">G#</td>
                  <td className="p-2 border border-gray-200 font-bold">A</td>
                  <td className="p-2 border border-gray-200 bg-blue-50/50 text-gray-400">A#</td>
                  <td className="p-2 border border-gray-200 font-bold">B</td>
                  <td className="p-2 border border-gray-200 bg-blue-50/50 font-bold text-red-600">C</td>
                  <td className="p-2 border border-gray-200 text-gray-400">C#</td>
                  <td className="p-2 border border-gray-200 bg-blue-50/50 font-bold">D</td>
                  <td className="p-2 border border-gray-200 text-gray-400">D#</td>
                  <td className="p-2 border border-gray-200 bg-blue-50/50 font-bold text-blue-700">E</td>
                  <td className="p-2 border border-gray-200">F</td>
                  <td className="p-2 border border-gray-200 text-gray-400">F#</td>
                  <td className="p-2 border border-gray-200 bg-indigo-50 font-bold text-blue-700">G</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-200 font-bold bg-gray-50">4th (D)</td>
                  <td className="p-2 border border-gray-200 font-bold text-blue-700">D</td>
                  <td className="p-2 border border-gray-200 text-gray-400">D#</td>
                  <td className="p-2 border border-gray-200 font-bold text-blue-700">E</td>
                  <td className="p-2 border border-gray-200 bg-blue-50/50">F</td>
                  <td className="p-2 border border-gray-200 text-gray-400">F#</td>
                  <td className="p-2 border border-gray-200 bg-blue-50/50 font-bold">G</td>
                  <td className="p-2 border border-gray-200 text-gray-400">G#</td>
                  <td className="p-2 border border-gray-200 bg-blue-50/50 font-bold">A</td>
                  <td className="p-2 border border-gray-200 text-gray-400">A#</td>
                  <td className="p-2 border border-gray-200 bg-blue-50/50 font-bold">B</td>
                  <td className="p-2 border border-gray-200 font-bold text-red-600">C</td>
                  <td className="p-2 border border-gray-200 text-gray-400">C#</td>
                  <td className="p-2 border border-gray-200 bg-indigo-50 font-bold text-blue-700">D</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-200 font-bold bg-gray-50">5th (A)</td>
                  <td className="p-2 border border-gray-200 font-bold text-blue-700">A</td>
                  <td className="p-2 border border-gray-200 text-gray-400">A#</td>
                  <td className="p-2 border border-gray-200 font-bold">B</td>
                  <td className="p-2 border border-gray-200 bg-blue-50/50 font-bold text-red-600">C</td>
                  <td className="p-2 border border-gray-200 text-gray-400">C#</td>
                  <td className="p-2 border border-gray-200 bg-blue-50/50 font-bold">D</td>
                  <td className="p-2 border border-gray-200 text-gray-400">D#</td>
                  <td className="p-2 border border-gray-200 bg-blue-50/50 font-bold text-blue-700">E</td>
                  <td className="p-2 border border-gray-200">F</td>
                  <td className="p-2 border border-gray-200 bg-blue-50/50 text-gray-400">F#</td>
                  <td className="p-2 border border-gray-200 font-bold">G</td>
                  <td className="p-2 border border-gray-200 text-gray-400">G#</td>
                  <td className="p-2 border border-gray-200 bg-indigo-50 font-bold text-blue-700">A</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-200 font-bold bg-gray-50">6th (E)</td>
                  <td className="p-2 border border-gray-200 font-bold text-blue-700">E</td>
                  <td className="p-2 border border-gray-200">F</td>
                  <td className="p-2 border border-gray-200 text-gray-400">F#</td>
                  <td className="p-2 border border-gray-200 bg-blue-50/50 font-bold">G</td>
                  <td className="p-2 border border-gray-200 text-gray-400">G#</td>
                  <td className="p-2 border border-gray-200 bg-blue-50/50 font-bold">A</td>
                  <td className="p-2 border border-gray-200 text-gray-400">A#</td>
                  <td className="p-2 border border-gray-200 bg-blue-50/50 font-bold">B</td>
                  <td className="p-2 border border-gray-200 font-bold text-red-600">C</td>
                  <td className="p-2 border border-gray-200 bg-blue-50/50 text-gray-400">C#</td>
                  <td className="p-2 border border-gray-200 font-bold">D</td>
                  <td className="p-2 border border-gray-200 text-gray-400">D#</td>
                  <td className="p-2 border border-gray-200 bg-indigo-50 font-bold text-blue-700">E</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2 Preview: The 7 Modes */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 mb-8">
          <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
            <h2 className="text-xl font-bold text-gray-900">Page 2: The 7 Modes of the Major Scale</h2>
            <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md font-medium">Brightest to Darkest</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-gray-200">
              <span className="text-xs font-bold text-blue-600 uppercase">1. Lydian (Brightest)</span>
              <h3 className="font-bold text-base text-gray-900 mt-0.5">1 - 2 - 3 - #4 - 5 - 6 - 7</h3>
              <p className="text-xs text-gray-600 mt-1">
                <strong>Characteristic:</strong> #4 (Augmented 4th). Ethereal, celestial sci-fi mood (<em>The Simpsons</em>, Joe Satriani).
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-gray-200">
              <span className="text-xs font-bold text-blue-600 uppercase">2. Ionian (Major)</span>
              <h3 className="font-bold text-base text-gray-900 mt-0.5">1 - 2 - 3 - 4 - 5 - 6 - 7</h3>
              <p className="text-xs text-gray-600 mt-1">
                <strong>Characteristic:</strong> Natural Major 3rd and 7th. Triumphant, happy, stable resolution (<em>Let It Be</em>).
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-gray-200">
              <span className="text-xs font-bold text-blue-600 uppercase">3. Mixolydian</span>
              <h3 className="font-bold text-base text-gray-900 mt-0.5">1 - 2 - 3 - 4 - 5 - 6 - b7</h3>
              <p className="text-xs text-gray-600 mt-1">
                <strong>Characteristic:</strong> Flat 7th (b7). Classic rock drive, bluesy southern rock swagger (<em>Sweet Child O' Mine</em>).
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-gray-200">
              <span className="text-xs font-bold text-blue-600 uppercase">4. Dorian</span>
              <h3 className="font-bold text-base text-gray-900 mt-0.5">1 - 2 - b3 - 4 - 5 - 6 - b7</h3>
              <p className="text-xs text-gray-600 mt-1">
                <strong>Characteristic:</strong> Natural 6th (6) over minor. Funky, sophisticated Santana minor jam (<em>Oye Como Va</em>).
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-gray-200">
              <span className="text-xs font-bold text-blue-600 uppercase">5. Aeolian (Natural Minor)</span>
              <h3 className="font-bold text-base text-gray-900 mt-0.5">1 - 2 - b3 - 4 - 5 - b6 - b7</h3>
              <p className="text-xs text-gray-600 mt-1">
                <strong>Characteristic:</strong> Flat 6th (b6). Pure emotional drama and melodic sadness (<em>Stairway to Heaven</em>).
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-gray-200">
              <span className="text-xs font-bold text-blue-600 uppercase">6. Phrygian</span>
              <h3 className="font-bold text-base text-gray-900 mt-0.5">1 - b2 - b3 - 4 - 5 - b6 - b7</h3>
              <p className="text-xs text-gray-600 mt-1">
                <strong>Characteristic:</strong> Flat 2nd (b2). Spanish flamenco tension and heavy metal aggression (<em>Wherever I May Roam</em>).
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 Preview: Pentatonic Boxes */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 mb-8">
          <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
            <h2 className="text-xl font-bold text-gray-900">Page 3: The 5 CAGED Pentatonic Box Shapes</h2>
            <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md font-medium">Interlocking Neck System</span>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            The 5 pentatonic box shapes connect end-to-end to cover the entire guitar neck. Combine Box 1 (E-Shape) and Box 4 (A-Shape) with the Blue Note (b5) to solo fluidly across octaves.
          </p>
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
            <h4 className="font-bold text-sm text-blue-900 mb-1">Interactive Companion Practice Tools:</h4>
            <p className="text-xs text-blue-700 leading-relaxed">
              Test your fretboard recall with our <Link href="/lessons/practice/fretboard-trainer" className="underline font-semibold">Interactive Fretboard Speed Quiz</Link> or jam over backing tracks in our <Link href="/lessons/practice/progression-player" className="underline font-semibold">12-Bar Blues & Chord Jam Station</Link>.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <div className="text-center py-8 border-t border-gray-200 print:hidden">
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
