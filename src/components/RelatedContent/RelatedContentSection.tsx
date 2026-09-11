"use client";

import React from 'react';
import Link from 'next/link';
import { getRelatedContentGrouped } from '@/lib/contentIndex';
import type { ContentEntry, ContentType, RelatedGroup } from '@/lib/contentIndex';
import { getTagLabel } from '@/lib/tagTaxonomy';

const TYPE_ICONS: Record<ContentType, string> = {
  'chord': '🎹',
  'scale': '🎼',
  'interval': '📐',
  'mode': '🎭',
  'progression': '🔄',
  'song-analysis': '🎸',
  'practice': '🎯',
  'gear-lesson': '⚡',
  'song-lesson': '🎵',
};

const TYPE_COLORS: Record<ContentType, { border: string; text: string; tagBg: string }> = {
  'chord':         { border: 'hover:border-cyan-500/50',    text: 'text-cyan-600 dark:text-cyan-400',    tagBg: 'bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300' },
  'scale':         { border: 'hover:border-blue-500/50',    text: 'text-blue-600 dark:text-blue-400',    tagBg: 'bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300' },
  'interval':      { border: 'hover:border-teal-500/50',    text: 'text-teal-600 dark:text-teal-400',    tagBg: 'bg-teal-50 dark:bg-teal-500/10 text-teal-700 dark:text-teal-300' },
  'mode':          { border: 'hover:border-indigo-500/50',  text: 'text-indigo-600 dark:text-indigo-400',  tagBg: 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300' },
  'progression':   { border: 'hover:border-purple-500/50',  text: 'text-purple-600 dark:text-purple-400',  tagBg: 'bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300' },
  'song-analysis': { border: 'hover:border-amber-500/50',   text: 'text-amber-600 dark:text-amber-400',   tagBg: 'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300' },
  'practice':      { border: 'hover:border-emerald-500/50', text: 'text-emerald-600 dark:text-emerald-400', tagBg: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300' },
  'gear-lesson':   { border: 'hover:border-fuchsia-500/50', text: 'text-fuchsia-600 dark:text-fuchsia-400', tagBg: 'bg-fuchsia-50 dark:bg-fuchsia-500/10 text-fuchsia-700 dark:text-fuchsia-300' },
  'song-lesson':   { border: 'hover:border-orange-500/50',  text: 'text-orange-600 dark:text-orange-400',  tagBg: 'bg-orange-50 dark:bg-orange-500/10 text-orange-700 dark:text-orange-300' },
};

function ContentCard({ entry }: { entry: ContentEntry }) {
  const colors = TYPE_COLORS[entry.contentType] || {
    border: 'hover:border-amber-500/50',
    text: 'text-amber-600 dark:text-amber-400',
    tagBg: 'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300',
  };

  return (
    <div className={`relative bg-white dark:bg-slate-900/90 rounded-xl p-4 border border-slate-200 dark:border-slate-800 ${colors.border} hover:bg-slate-50 dark:hover:bg-slate-850 transition-all duration-200 group flex flex-col justify-between shadow-sm`}>
      <Link
        href={entry.url}
        className="absolute inset-0 rounded-xl z-0"
        aria-label={entry.title}
      />
      <div className="relative z-10 flex items-start gap-2.5">
        <span className="text-xl p-1.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex-shrink-0 group-hover:scale-105 transition-transform">
          {TYPE_ICONS[entry.contentType]}
        </span>
        <div className="min-w-0">
          <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors text-sm leading-tight line-clamp-2">
            {entry.title}
          </h4>
          {entry.difficulty && (
            <span className={`text-[10px] font-bold ${colors.text} uppercase tracking-wider mt-1 inline-block`}>
              {entry.difficulty}
            </span>
          )}
        </div>
      </div>

      {entry.tags.length > 0 && (
        <div className="relative z-20 flex flex-wrap gap-1 mt-3 pt-2.5 border-t border-slate-200 dark:border-slate-800/80">
          {entry.tags.slice(0, 3).map((tag) => (
            <Link
              key={tag}
              href={`/lessons/tags/${tag}`}
              className="text-[10px] bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800 transition-colors"
            >
              {getTagLabel(tag)}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function RelatedGroup({ group }: { group: RelatedGroup }) {
  return (
    <div>
      <h3 className="text-base font-bold text-slate-800 dark:text-slate-300 mb-3 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-500 dark:bg-amber-400" />
        <span>{group.title}</span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {group.items.map((item) => (
          <ContentCard key={item.id} entry={item} />
        ))}
      </div>
    </div>
  );
}

interface RelatedContentSectionProps {
  contentId: string;
  maxGroups?: number;
  maxPerGroup?: number;
}

export default function RelatedContentSection({
  contentId,
  maxGroups = 3,
  maxPerGroup = 4,
}: RelatedContentSectionProps) {
  const groups = getRelatedContentGrouped(contentId, { maxPerGroup });

  const displayGroups = groups
    .sort((a, b) => b.items.length - a.items.length)
    .slice(0, maxGroups);

  if (displayGroups.length === 0) return null;

  return (
    <section className="mb-12">
      <div className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400 bg-amber-100/70 dark:bg-amber-500/10 px-3 py-1 rounded-full border border-amber-300 dark:border-amber-500/20">
            Connected Curriculum
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">Explore Related Content</h2>
        </div>

        <div className="space-y-8">
          {displayGroups.map((group) => (
            <RelatedGroup key={group.title} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
