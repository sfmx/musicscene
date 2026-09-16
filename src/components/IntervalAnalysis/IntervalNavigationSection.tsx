import React from 'react';
import Link from 'next/link';
import { IntervalData } from '@/lib/intervalData';

interface Props {
  journeySection: IntervalData['journeySection'];
}

export default function IntervalNavigationSection({ journeySection }: Props) {
  return (
    <div className="bg-gradient-to-br from-slate-100 via-white to-slate-100 dark:from-slate-900 dark:via-slate-900/95 dark:to-slate-950 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-xl mb-12">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-center">{journeySection.title}</h2>
      <p className="text-slate-600 dark:text-slate-400 mb-8 text-center max-w-2xl mx-auto text-sm">{journeySection.description}</p>
      <div className="grid md:grid-cols-3 gap-6">
        {journeySection.links.map((link, i) => (
          <Link
            key={i}
            href={`/lessons/theory/intervals/${link.slug}`}
            className="group bg-white dark:bg-slate-950/80 rounded-xl p-6 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-all duration-300 flex flex-col justify-between shadow-sm dark:shadow-none"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-500/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:border-cyan-400/60 transition-colors">
                <span className="text-2xl">{link.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">{link.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">{link.description}</p>
            </div>
            <div className="text-center pt-3 border-t border-slate-200 dark:border-slate-800/80">
              <span className="text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-300 font-semibold text-xs tracking-wide uppercase transition-colors">
                {link.linkText || link.actionText || 'Explore'} &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
