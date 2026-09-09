import React from 'react';
import Link from 'next/link';
import { ChordData } from '@/lib/chordData';
import { ColorSchemeClasses } from '@/utils/theme';

interface ChordNavigationSectionProps {
  journeySection: ChordData['journeySection'];
  colorScheme: ColorSchemeClasses;
}

export default function ChordNavigationSection({ journeySection, colorScheme }: ChordNavigationSectionProps) {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 rounded-2xl p-8 border border-slate-800 shadow-xl mb-12">
      <h2 className="text-2xl font-bold text-white mb-3 text-center">{journeySection.title}</h2>
      <p className="text-slate-400 mb-8 text-center max-w-2xl mx-auto text-sm">{journeySection.description}</p>

      <div className="grid md:grid-cols-3 gap-6">
        {journeySection.links.map((link, i) => (
          <Link
            key={i}
            href={`/lessons/theory/chords/${link.slug}`}
            className="group bg-slate-950/80 rounded-xl p-6 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/60 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-950/50 border border-cyan-500/30 group-hover:border-cyan-400/60 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                <span className="text-xl font-bold">{link.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{link.title}</h3>
              <p className="text-xs text-slate-400 mb-4">{link.description}</p>
            </div>
            <div className="text-center pt-3 border-t border-slate-800/80">
              <span className="text-cyan-400 group-hover:text-cyan-300 font-semibold text-xs tracking-wide uppercase transition-colors">
                {link.linkText} &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
