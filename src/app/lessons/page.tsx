// src/app/lessons/page.tsx
import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';
import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// (Optional) any React components you want to expose to MDX:
const components = {
  // You can add `<MyChart />` or `<Fretboard />` here later
};

const categories = [
  {
    title: 'Theory Lessons',
    href: '/lessons/theory',
    icon: '🎼',
  },
  {
    title: 'Song Analysis',
    href: '/lessons/songs',
    icon: '🎸',
  },
  {
    title: 'Gear & Effects',
    href: '/lessons/gear',
    icon: '⚙️',
  },
];

export default function LessonsPage() {
  return (
    <Layout>
      <Header
        title="Lessons"
        subtitle="Choose your path: theory, song analysis, or gear. Start learning and playing smarter!"
      />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <section className="grid gap-8 grid-cols-1 sm:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="flex flex-col items-center justify-center space-y-2 p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-5xl">{cat.icon}</div>
              <div className="text-lg font-medium">{cat.title}</div>
            </Link>
          ))}
        </section>
        <section className="mt-16 text-center">
          <p className="text-gray-700">
            Select a category above to get started with your guitar journey!
          </p>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
