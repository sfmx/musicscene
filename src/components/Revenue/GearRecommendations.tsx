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
      <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-slate-800">{title}</h2>
      <div className={`grid gap-4 ${items.length === 1 ? 'md:grid-cols-1' : items.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
        {items.map((item, i) => {
          const retailers = getRetailerLinks(item.product);

          return (
            <div key={i} className="bg-slate-900/90 rounded-xl border border-slate-800 p-5 hover:border-slate-700 shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{categoryIcons[item.category] || '🎵'}</span>
                  <span className="text-xs font-medium uppercase tracking-wide text-purple-400">{item.category}</span>
                </div>
                <div className="font-semibold text-white mb-1 hover:text-cyan-300 transition-colors">
                  <AffiliateLink productName={item.product} />
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">{item.reason}</p>
              </div>

              {retailers && (
                <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center gap-2 text-xs">
                  <span className="text-slate-500 font-medium">Check Price:</span>
                  <a
                    href={retailers.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow sponsored"
                    className="px-2.5 py-1 rounded bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 font-medium transition-colors border border-amber-500/30"
                  >
                    Amazon
                  </a>
                  <a
                    href={retailers.sweetwaterUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow sponsored"
                    className="px-2.5 py-1 rounded bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 font-medium transition-colors border border-blue-500/30"
                  >
                    Sweetwater
                  </a>
                  <a
                    href={retailers.thomannUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow sponsored"
                    className="px-2.5 py-1 rounded bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 font-medium transition-colors border border-emerald-500/30"
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
