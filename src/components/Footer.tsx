import React from 'react'
import Link from 'next/link'
import NewsletterSignup from './Revenue/NewsletterSignup'

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800 transition-colors">
      {/* Newsletter */}
      <div className="border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-md mx-auto text-center py-8">
          <NewsletterSignup variant="footer" />
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Lessons */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">Lessons</h3>
            <ul className="space-y-2">
              <li><Link href="/lessons/songs/song-analysis" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm">Song Analysis</Link></li>
              <li><Link href="/lessons/theory" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm">Music Theory</Link></li>
              <li><Link href="/lessons/practice" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm">Practice</Link></li>
              <li><Link href="/lessons/gear" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm">Gear Guides</Link></li>
            </ul>
          </div>

          {/* Theory */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">Theory</h3>
            <ul className="space-y-2">
              <li><Link href="/lessons/theory/scales" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm">Scales</Link></li>
              <li><Link href="/lessons/theory/chords" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm">Chords</Link></li>
              <li><Link href="/lessons/theory/progressions" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm">Progressions</Link></li>
              <li><Link href="/lessons/theory/intervals" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm">Intervals</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm">About</Link></li>
              <li><Link href="/contact" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm">Contact</Link></li>
              <li><Link href="/affiliate-disclosure" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm">Affiliate Disclosure</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm">Terms of Service</Link></li>
              <li><Link href="/sitemap" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm">Site Index</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} MusicScene. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 text-center md:text-right max-w-md">
            MusicScene is a participant in the Amazon Services LLC Associates Program. Some links are affiliate links &mdash; we may earn a commission at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  )
}
