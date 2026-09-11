'use client';

import React from 'react';
import Link from 'next/link';
import { SequentialNav as SequentialNavType } from '@/lib/sequentialNav';

interface Props {
  nav: SequentialNavType;
  typeLabel?: string;
}

export default function SequentialNav({ nav, typeLabel }: Props) {
  if (!nav.prev && !nav.next) return null;

  const prevLabel = typeLabel ? `Previous ${typeLabel}` : 'Previous';
  const nextLabel = typeLabel ? `Next ${typeLabel}` : 'Next';

  return (
    <section className="border-t border-slate-200 dark:border-slate-800 pt-10 mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {nav.prev ? (
          <Link
            href={nav.prev.href}
            className="group bg-white dark:bg-slate-900/90 hover:bg-slate-50 dark:hover:bg-slate-800/90 border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 dark:hover:border-slate-700 rounded-xl p-4 transition-all duration-200 flex items-center gap-3 shadow-md"
          >
            <span className="text-amber-600 dark:text-amber-400 font-bold text-lg group-hover:-translate-x-1 transition-transform">
              ←
            </span>
            <div className="text-left">
              <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {prevLabel}
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors line-clamp-1">
                {nav.prev.label}
              </div>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nav.next ? (
          <Link
            href={nav.next.href}
            className="group bg-white dark:bg-slate-900/90 hover:bg-slate-50 dark:hover:bg-slate-800/90 border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 dark:hover:border-slate-700 rounded-xl p-4 transition-all duration-200 flex items-center justify-between sm:justify-end gap-3 text-right shadow-md"
          >
            <div className="text-left sm:text-right">
              <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {nextLabel}
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors line-clamp-1">
                {nav.next.label}
              </div>
            </div>
            <span className="text-amber-600 dark:text-amber-400 font-bold text-lg group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </section>
  );
}
