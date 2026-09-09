'use client';

import AffiliateLink from './AffiliateLink';
import { getRetailerLinks } from '@/lib/affiliateLinks';

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
        {items.map((item, i) => {
          const retailers = getRetailerLinks(item.product);

          return (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{categoryIcons[item.category] || '🎵'}</span>
                  <span className="text-xs font-medium uppercase tracking-wide text-gray-500">{item.category}</span>
                </div>
                <p className="font-semibold text-gray-900 mb-1">
                  <AffiliateLink productName={item.product} />
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{item.reason}</p>
              </div>

              {retailers && (
                <div className="pt-3 border-t border-gray-100 flex flex-wrap items-center gap-2 text-xs">
                  <span className="text-gray-400 font-medium">Check Price:</span>
                  <a
                    href={retailers.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow sponsored"
                    className="px-2.5 py-1 rounded bg-amber-50 hover:bg-amber-100 text-amber-900 font-medium transition-colors border border-amber-200"
                  >
                    Amazon
                  </a>
                  <a
                    href={retailers.sweetwaterUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow sponsored"
                    className="px-2.5 py-1 rounded bg-blue-50 hover:bg-blue-100 text-blue-900 font-medium transition-colors border border-blue-200"
                  >
                    Sweetwater
                  </a>
                  <a
                    href={retailers.thomannUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow sponsored"
                    className="px-2.5 py-1 rounded bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-medium transition-colors border border-emerald-200"
                  >
                    Thomann
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
