'use client';

import AffiliateLink from './AffiliateLink';

interface GearRecommendation {
  category: string;
  product: string;
  reason: string;
}

interface GearRecommendationsProps {
  title?: string;
  items: GearRecommendation[];
}

const categoryIcons: Record<string, string> = {
  Guitar: '🎸',
  Amp: '🔊',
  Pedal: '🎛️',
  Accessory: '🎵',
  Strings: '🎶',
  Picks: '🪶',
  Recording: '🎙️',
  Metronome: '⏱️',
};

export default function GearRecommendations({ title = 'Recommended Gear for This Lesson', items }: GearRecommendationsProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-300">{title}</h2>
      <div className={`grid gap-4 ${items.length === 1 ? 'md:grid-cols-1' : items.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
        {items.map((item, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">{categoryIcons[item.category] || '🎵'}</span>
              <span className="text-xs font-medium uppercase tracking-wide text-gray-500">{item.category}</span>
            </div>
            <p className="font-semibold text-gray-900 mb-1">
              <AffiliateLink productName={item.product} />
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">{item.reason}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
