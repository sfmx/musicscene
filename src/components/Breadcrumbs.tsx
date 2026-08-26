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
    <nav aria-label="Breadcrumb" className="mb-6">
      <JsonLdScript data={jsonLd} />
      <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={crumb.href} className="flex items-center">
              {i > 0 && (
                <span className="mx-1.5 text-gray-300" aria-hidden="true">
                  /
                </span>
              )}
              {isLast ? (
                <span className="text-gray-700 font-medium" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="hover:text-blue-600 transition-colors"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
