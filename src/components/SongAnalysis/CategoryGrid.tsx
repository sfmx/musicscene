"use client";

import React from 'react';
import Link from 'next/link';
import SongCard from './SongCard';
import type { SongListItem } from '@/lib/songList';

export interface CategorySection {
  title: string;
  description?: string;
  songs: SongListItem[];
  viewAllLink?: string;
  onViewAll?: () => void;
  icon?: string;
  maxDisplay?: number;
  totalCount?: number;
}

interface CategoryGridProps {
  sections: CategorySection[];
  variant?: 'default' | 'compact';
}

export default function CategoryGrid({ sections, variant = 'default' }: CategoryGridProps) {
  return (
    <div className="space-y-12">
      {sections.map((section, index) => {
        const total = section.totalCount || section.songs.length;
        const displayLimit = section.maxDisplay || (variant === 'compact' ? 8 : 6);

        return (
          <section key={index} className="space-y-6">
            {/* Section Header */}
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                {section.icon && (
                  <span className="text-2xl sm:text-3xl shrink-0">{section.icon}</span>
                )}
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span>{section.title}</span>
                    {total > 0 && (
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 font-mono">
                        {total}
                      </span>
                    )}
                  </h2>
                  {section.description && (
                    <p className="text-slate-600 dark:text-slate-400 mt-1 text-xs sm:text-sm">{section.description}</p>
                  )}
                </div>
              </div>

              {section.onViewAll ? (
                <button
                  type="button"
                  onClick={section.onViewAll}
                  className="inline-flex items-center text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-semibold text-xs sm:text-sm transition-colors cursor-pointer group px-3 py-1.5 rounded-lg hover:bg-amber-500/10"
                >
                  <span>View All {total > displayLimit ? `(${total})` : ''}</span>
                  <svg className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ) : section.viewAllLink ? (
                <Link
                  href={section.viewAllLink}
                  className="inline-flex items-center text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-semibold text-xs sm:text-sm transition-colors group px-3 py-1.5 rounded-lg hover:bg-amber-500/10"
                >
                  <span>View All {total > displayLimit ? `(${total})` : ''}</span>
                  <svg className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : null}
            </div>

            {/* Songs Grid */}
            {section.songs.length > 0 ? (
              <div className={`grid gap-6 ${
                variant === 'compact' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                  : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              }`}>
                {section.songs
                  .slice(0, displayLimit)
                  .map((song) => (
                    <SongCard 
                      key={song.slug} 
                      song={song} 
                      variant={index === 0 && variant === 'default' ? 'featured' : 'default'}
                      showMetadata={variant !== 'compact'}
                    />
                  ))
                }
              </div>
            ) : (
              <div className="text-center py-12 bg-slate-100/60 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="text-slate-400 dark:text-slate-600 text-4xl mb-4">🎸</div>
                <p className="text-slate-700 dark:text-slate-300 font-medium">No songs available in this category yet.</p>
                <p className="text-sm text-slate-500 mt-2">Check back soon for new additions!</p>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
