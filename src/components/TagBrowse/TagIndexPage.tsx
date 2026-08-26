"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getTagsByCategory, TagCategory } from '@/lib/tagTaxonomy';
import { getTagEntryCounts } from '@/lib/contentIndex';

const CATEGORY_CONFIG: { category: TagCategory; title: string; color: string; bg: string; border: string }[] = [
  { category: 'technique', title: 'Techniques', color: 'text-blue-700', bg: 'bg-blue-50', border: 'border-blue-200' },
  { category: 'theory', title: 'Theory', color: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-200' },
  { category: 'gear', title: 'Gear & Equipment', color: 'text-purple-700', bg: 'bg-purple-50', border: 'border-purple-200' },
  { category: 'genre', title: 'Genres', color: 'text-orange-700', bg: 'bg-orange-50', border: 'border-orange-200' },
  { category: 'difficulty', title: 'Difficulty Levels', color: 'text-red-700', bg: 'bg-red-50', border: 'border-red-200' },
  { category: 'instrument', title: 'Instruments', color: 'text-teal-700', bg: 'bg-teal-50', border: 'border-teal-200' },
  { category: 'content-type', title: 'Content Types', color: 'text-gray-700', bg: 'bg-gray-50', border: 'border-gray-200' },
];

export default function TagIndexPage() {
  const counts = getTagEntryCounts();

  return (
    <Layout>
      <Header title="Browse by Tag" subtitle="Explore all content organized by topic" />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumbs pathname="/lessons/tags" pageTitle="Tags" />

        <div className="space-y-10">
          {CATEGORY_CONFIG.map(({ category, title, color, bg, border }) => {
            const tags = getTagsByCategory(category).filter(t => (counts[t.slug] || 0) > 0);
            if (tags.length === 0) return null;

            return (
              <section key={category}>
                <h2 className={`text-xl font-bold ${color} mb-4`}>{title}</h2>
                <div className="flex flex-wrap gap-3">
                  {tags.sort((a, b) => a.label.localeCompare(b.label)).map(tag => (
                    <Link
                      key={tag.slug}
                      href={`/lessons/tags/${tag.slug}`}
                      className={`${bg} px-4 py-2 rounded-lg border ${border} hover:shadow-md transition-all duration-200 group`}
                    >
                      <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{tag.label}</span>
                      <span className="ml-2 text-xs text-gray-400">{counts[tag.slug]}</span>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </Layout>
  );
}
