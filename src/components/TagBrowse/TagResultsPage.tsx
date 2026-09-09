"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getTagLabel } from '@/lib/tagTaxonomy';
import { getEntriesByTag, ContentEntry, ContentType } from '@/lib/contentIndex';
import { getDifficultyColor } from '@/utils/theme';

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

const TYPE_COLORS: Record<ContentType, { border: string; badge: string }> = {
  'chord':         { border: 'hover:border-emerald-500/50', badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' },
  'scale':         { border: 'hover:border-cyan-500/50',    badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' },
  'interval':      { border: 'hover:border-blue-500/50',    badge: 'bg-blue-500/10 text-blue-400 border-blue-500/30' },
  'mode':          { border: 'hover:border-teal-500/50',    badge: 'bg-teal-500/10 text-teal-400 border-teal-500/30' },
  'progression':   { border: 'hover:border-violet-500/50',  badge: 'bg-violet-500/10 text-violet-400 border-violet-500/30' },
  'song-analysis': { border: 'hover:border-amber-500/50',   badge: 'bg-amber-500/10 text-amber-400 border-amber-500/30' },
  'practice':      { border: 'hover:border-emerald-500/50', badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' },
  'gear-lesson':   { border: 'hover:border-purple-500/50',  badge: 'bg-purple-500/10 text-purple-400 border-purple-500/30' },
  'song-lesson':   { border: 'hover:border-orange-500/50',  badge: 'bg-orange-500/10 text-orange-400 border-orange-500/30' },
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
      <Header
        title={tagLabel}
        subtitle={`${entries.length} item${entries.length !== 1 ? 's' : ''} tagged "${tagLabel}"`}
        category="Tag Results"
      />
      <div className="min-h-screen bg-slate-950 text-slate-100 py-8">
        <main className="max-w-6xl mx-auto px-4">
          <Breadcrumbs pathname={`/lessons/tags/${tag}`} pageTitle={tagLabel} />

          {sortedGroups.length === 0 ? (
            <div className="text-center py-16 bg-slate-900/50 rounded-xl border border-slate-800 text-slate-400">
              No content found for this tag.
            </div>
          ) : (
            <div className="space-y-12">
              {sortedGroups.map(([type, items]) => {
                const conf = TYPE_COLORS[type] || { border: 'hover:border-slate-700', badge: 'bg-slate-800 text-slate-300 border-slate-700' };
                return (
                  <section key={type}>
                    <div className="flex items-center gap-3 mb-4">
                      <h2 className="text-xl font-bold text-white">{TYPE_LABELS[type]}</h2>
                      <span className={`text-xs px-2.5 py-0.5 rounded-full border ${conf.badge}`}>
                        {items.length}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {items.sort((a, b) => a.title.localeCompare(b.title)).map(entry => (
                        <Link
                          key={entry.id}
                          href={entry.url}
                          className={`bg-slate-900/90 rounded-xl p-4 border border-slate-800 ${conf.border} hover:bg-slate-800/80 transition-all duration-200 flex flex-col justify-between group shadow-lg`}
                        >
                          <h3 className="font-semibold text-white group-hover:text-cyan-300 transition-colors text-sm mb-2">{entry.title}</h3>
                          {entry.difficulty && (
                            <span className={`text-[11px] px-2 py-0.5 rounded-full border w-fit ${getDifficultyColor(entry.difficulty)}`}>
                              {entry.difficulty}
                            </span>
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
            <Link href="/lessons/tags" className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1 transition-colors">
              &larr; All Tags
            </Link>
          </div>
        </main>
      </div>
    </Layout>
  );
}
