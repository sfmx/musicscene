'use client';

import React from 'react';
import ProductCard from './ProductCard';

interface GearRecommendation {
  category: string;
  product: string;
  reason: string;
}

interface GearRecommendationsProps {
  title?: string;
  items: GearRecommendation[];
}

export default function GearRecommendations({ title = 'Recommended Gear for This Lesson', items }: GearRecommendationsProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 pb-3 border-b border-slate-200 dark:border-slate-800">{title}</h2>
      <div className={`grid gap-6 ${items.length === 1 ? 'md:grid-cols-1' : items.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
        {items.map((item, i) => (
          <ProductCard
            key={i}
            productName={item.product}
            category={item.category}
            label={item.category}
            toneNote={item.reason}
          />
        ))}
      </div>
    </section>
  );
}
