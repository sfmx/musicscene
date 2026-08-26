"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getTagLabel } from '@/lib/tagTaxonomy';
import { getEntriesByTag, ContentEntry, ContentType } from '@/lib/contentIndex';

const TYPE_LABELS: Record<ContentType, string> = {
  'chord': 'Chords',
  'scale': 'Scales',
  'interval': 'Intervals',
  'mode': 'Modes',
  'progression': 'Progressions',
  'song-analysis': 'Song Analysis',
  'practice': 'Practice Exercises',
  'gear-lesson': 'Gear Lessons',
  'song-lesson': 'Song Lessons',
};

const TYPE_COLORS: Record<ContentType, { bg: string; border: string; hover: string }> = {
  'chord':         { bg: 'bg-blue-50',    border: 'border-blue-200',    hover: 'hover:bg-blue-100' },
  'scale':         { bg: 'bg-emerald-50', border: 'border-emerald-200', hover: 'hover:bg-emerald-100' },
  'interval':      { bg: 'bg-cyan-50',    border: 'border-cyan-200',    hover: 'hover:bg-cyan-100' },
  'mode':          { bg: 'bg-teal-50',    border: 'border-teal-200',    hover: 'hover:bg-teal-100' },
  'progression':   { bg: 'bg-violet-50',  border: 'border-violet-200',  hover: 'hover:bg-violet-100' },
  'song-analysis': { bg: 'bg-orange-50',  border: 'border-orange-200',  hover: 'hover:bg-orange-100' },
  'practice':      { bg: 'bg-green-50',   border: 'border-green-200',   hover: 'hover:bg-green-100' },
  'gear-lesson':   { bg: 'bg-purple-50',  border: 'border-purple-200',  hover: 'hover:bg-purple-100' },
  'song-lesson':   { bg: 'bg-amber-50',   border: 'border-amber-200',   hover: 'hover:bg-amber-100' },
};

interface Props {
  tag: string;
}

export default function TagResultsPage({ tag }: Props) {
  const entries = getEntriesByTag(tag);
  const tagLabel = getTagLabel(tag);

  // Group by content type
  const groups = new Map<ContentType, ContentEntry[]>();
  for (const entry of entries) {
    const list = groups.get(entry.contentType) || [];
    list.push(entry);
    groups.set(entry.contentType, list);
  }

  // Sort groups by number of items (descending)
  const sortedGroups = Array.from(groups.entries()).sort((a, b) => b[1].length - a[1].length);

  return (
    <Layout>
      <Header title={tagLabel} subtitle={`${entries.length} item${entries.length !== 1 ? 's' : ''} tagged "${tagLabel}"`} />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumbs pathname={`/lessons/tags/${tag}`} pageTitle={tagLabel} />

        {sortedGroups.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No content found for this tag.
          </div>
        ) : (
          <div className="space-y-10">
            {sortedGroups.map(([type, items]) => {
              const colors = TYPE_COLORS[type];
              return (
                <section key={type}>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">{TYPE_LABELS[type]}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {items.sort((a, b) => a.title.localeCompare(b.title)).map(entry => (
                      <Link
                        key={entry.id}
                        href={entry.url}
                        className={`${colors.bg} rounded-lg p-4 border ${colors.border} ${colors.hover} transition-all duration-200`}
                      >
                        <h3 className="font-semibold text-gray-900 text-sm">{entry.title}</h3>
                        {entry.difficulty && (
                          <span className="text-xs text-gray-500 capitalize mt-1 inline-block">{entry.difficulty}</span>
                        )}
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}

        <div className="mt-12 text-center">
          <Link href="/lessons/tags" className="text-blue-600 hover:text-blue-800 font-medium">
            &larr; All Tags
          </Link>
        </div>
      </main>
    </Layout>
  );
}
