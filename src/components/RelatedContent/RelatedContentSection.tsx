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

const TYPE_COLORS: Record<ContentType, { bg: string; border: string; text: string; hover: string }> = {
  'chord':         { bg: 'bg-blue-50',    border: 'border-blue-200',    text: 'text-blue-700',    hover: 'hover:bg-blue-100' },
  'scale':         { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', hover: 'hover:bg-emerald-100' },
  'interval':      { bg: 'bg-cyan-50',    border: 'border-cyan-200',    text: 'text-cyan-700',    hover: 'hover:bg-cyan-100' },
  'mode':          { bg: 'bg-teal-50',    border: 'border-teal-200',    text: 'text-teal-700',    hover: 'hover:bg-teal-100' },
  'progression':   { bg: 'bg-violet-50',  border: 'border-violet-200',  text: 'text-violet-700',  hover: 'hover:bg-violet-100' },
  'song-analysis': { bg: 'bg-orange-50',  border: 'border-orange-200',  text: 'text-orange-700',  hover: 'hover:bg-orange-100' },
  'practice':      { bg: 'bg-green-50',   border: 'border-green-200',   text: 'text-green-700',   hover: 'hover:bg-green-100' },
  'gear-lesson':   { bg: 'bg-purple-50',  border: 'border-purple-200',  text: 'text-purple-700',  hover: 'hover:bg-purple-100' },
  'song-lesson':   { bg: 'bg-amber-50',   border: 'border-amber-200',   text: 'text-amber-700',   hover: 'hover:bg-amber-100' },
};

function ContentCard({ entry }: { entry: ContentEntry }) {
  const colors = TYPE_COLORS[entry.contentType];
  return (
    <div className={`relative ${colors.bg} rounded-lg p-4 border ${colors.border} ${colors.hover} transition-all duration-200`}>
      <Link
        href={entry.url}
        className="absolute inset-0 rounded-lg z-0"
        aria-label={entry.title}
      />
      <div className="relative z-10 flex items-start gap-2">
        <span className="text-lg flex-shrink-0">{TYPE_ICONS[entry.contentType]}</span>
        <div className="min-w-0">
          <h4 className="font-semibold text-gray-900 text-sm leading-tight">{entry.title}</h4>
          {entry.difficulty && (
            <span className={`text-xs ${colors.text} capitalize mt-1 inline-block`}>{entry.difficulty}</span>
          )}
          {entry.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-1.5">
              {entry.tags.slice(0, 3).map((tag) => (
                <Link key={tag} href={`/lessons/tags/${tag}`} className="relative z-20 text-xs bg-white/70 text-gray-500 px-1.5 py-0.5 rounded hover:bg-white hover:text-blue-600 transition-colors">
                  {getTagLabel(tag)}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function RelatedGroup({ group }: { group: RelatedGroup }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-3">{group.title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
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
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore Related Content</h2>
        <div className="space-y-8">
          {displayGroups.map((group) => (
            <RelatedGroup key={group.title} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
