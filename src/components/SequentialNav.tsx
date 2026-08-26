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
    <section className="border-t border-gray-200 pt-8 mt-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        {nav.prev ? (
          <Link
            href={nav.prev.href}
            className="group flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="mr-2 group-hover:-translate-x-1 transition-transform">&larr;</span>
            <div className="text-left">
              <div className="text-xs text-gray-500">{prevLabel}</div>
              <div className="text-sm font-medium">{nav.prev.label}</div>
            </div>
          </Link>
        ) : (
          <div />
        )}
        {nav.next ? (
          <Link
            href={nav.next.href}
            className="group flex items-center text-blue-600 hover:text-blue-800 transition-colors sm:text-right"
          >
            <div className="text-right">
              <div className="text-xs text-gray-500">{nextLabel}</div>
              <div className="text-sm font-medium">{nav.next.label}</div>
            </div>
            <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </section>
  );
}
