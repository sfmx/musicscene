"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getTagsByCategory, TagCategory } from '@/lib/tagTaxonomy';
import { getTagEntryCounts } from '@/lib/contentIndex';

const CATEGORY_CONFIG: { category: TagCategory; title: string; color: string; badgeBorder: string }[] = [
  { category: 'technique', title: 'Techniques', color: 'text-cyan-400', badgeBorder: 'hover:border-cyan-500/60' },
  { category: 'theory', title: 'Theory', color: 'text-amber-400', badgeBorder: 'hover:border-amber-500/60' },
  { category: 'gear', title: 'Gear & Equipment', color: 'text-purple-400', badgeBorder: 'hover:border-purple-500/60' },
  { category: 'genre', title: 'Genres', color: 'text-rose-400', badgeBorder: 'hover:border-rose-500/60' },
  { category: 'difficulty', title: 'Difficulty Levels', color: 'text-emerald-400', badgeBorder: 'hover:border-emerald-500/60' },
  { category: 'instrument', title: 'Instruments', color: 'text-teal-400', badgeBorder: 'hover:border-teal-500/60' },
  { category: 'content-type', title: 'Content Types', color: 'text-blue-400', badgeBorder: 'hover:border-blue-500/60' },
];

export default function TagIndexPage() {
  const counts = getTagEntryCounts();

  return (
    <Layout>
      <Header
        title="Browse by Tag"
        subtitle="Explore all content organized by topic and curriculum"
        category="Topic Taxonomy & Discovery"
      />
      <div className="min-h-screen bg-slate-950 text-slate-100 py-8">
        <main className="max-w-6xl mx-auto px-4">
          <Breadcrumbs pathname="/lessons/tags" pageTitle="Tags" />

          <div className="space-y-12">
            {CATEGORY_CONFIG.map(({ category, title, color, badgeBorder }) => {
              const tags = getTagsByCategory(category).filter(t => (counts[t.slug] || 0) > 0);
              if (tags.length === 0) return null;

              return (
                <section key={category} className="bg-slate-900/90 rounded-xl border border-slate-800 p-6 shadow-xl">
                  <h2 className={`text-xl font-bold ${color} mb-4`}>{title}</h2>
                  <div className="flex flex-wrap gap-3">
                    {tags.sort((a, b) => a.label.localeCompare(b.label)).map(tag => (
                      <Link
                        key={tag.slug}
                        href={`/lessons/tags/${tag.slug}`}
                        className={`bg-slate-950/80 px-4 py-2 rounded-xl border border-slate-800 ${badgeBorder} hover:bg-slate-900 hover:shadow-lg transition-all duration-200 group flex items-center gap-2`}
                      >
                        <span className="font-medium text-slate-200 group-hover:text-white transition-colors text-sm">{tag.label}</span>
                        <span className="text-xs text-slate-400 bg-slate-900 px-2 py-0.5 rounded-full border border-slate-800">{counts[tag.slug]}</span>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </main>
      </div>
    </Layout>
  );
}
