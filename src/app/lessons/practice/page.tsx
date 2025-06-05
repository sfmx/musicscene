import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import React from 'react';

const categories = [
  {
    title: 'Warm-ups',
    href: '/lessons/practice/warmups',
    icon: '🤲',
  },
  {
    title: 'Technique',
    href: '/lessons/practice/technique',
    icon: '🎯',
  },
  {
    title: 'Improvisation',
    href: '/lessons/practice/improv',
    icon: '🎶',
  },
  // Add more practice categories as needed
];

export default function PracticePage() {
  return (
    <Layout>
      <Header
        title="Practice"
        subtitle="Choose a practice focus: warm-ups, technique, improvisation, and more!"
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
            Select a practice category above to improve your skills!
          </p>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
