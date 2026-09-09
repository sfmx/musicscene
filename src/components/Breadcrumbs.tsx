'use client';

import React from 'react';
import Link from 'next/link';
import { getBreadcrumbs } from '@/lib/breadcrumbs';
import { getBreadcrumbJsonLd } from '@/lib/jsonLd';
import JsonLdScript from '@/components/JsonLdScript';

interface BreadcrumbsProps {
  pathname: string;
  pageTitle?: string;
}

export default function Breadcrumbs({ pathname, pageTitle }: BreadcrumbsProps) {
  const crumbs = getBreadcrumbs(pathname, pageTitle);
  const jsonLd = getBreadcrumbJsonLd(
    crumbs.map((c) => ({ name: c.label, url: c.href }))
  );

  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <JsonLdScript data={jsonLd} />
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400 bg-slate-900/60 py-2 px-3.5 rounded-xl border border-slate-800/80 w-fit">
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={crumb.href} className="flex items-center">
              {i > 0 && (
                <span className="mx-2 text-slate-600 font-bold" aria-hidden="true">
                  /
                </span>
              )}
              {isLast ? (
                <span className="text-amber-300 font-semibold" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  {i === 0 && <span className="text-[10px]">🏠</span>}
                  <span>{crumb.label}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
