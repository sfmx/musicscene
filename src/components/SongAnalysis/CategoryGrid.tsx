"use client";

import React from 'react';
import Link from 'next/link';
import SongCard from './SongCard';
import { SongListItem } from '@/lib/songData';

interface CategorySection {
  title: string;
  description?: string;
  songs: SongListItem[];
  viewAllLink?: string;
  icon?: string;
  maxDisplay?: number;
}

interface CategoryGridProps {
  sections: CategorySection[];
  variant?: 'default' | 'compact';
}

export default function CategoryGrid({ sections, variant = 'default' }: CategoryGridProps) {
  return (
    <div className="space-y-12">
      {sections.map((section, index) => (
        <section key={index} className="space-y-6">
          {/* Section Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {section.icon && (
                <span className="text-2xl">{section.icon}</span>
              )}
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {section.title}
                </h2>
                {section.description && (
                  <p className="text-slate-400 mt-1 text-sm">{section.description}</p>
                )}
              </div>
            </div>
            
            {section.viewAllLink && section.songs.length > (section.maxDisplay || 6) && (
              <Link 
                href={section.viewAllLink}
                className="inline-flex items-center text-amber-400 hover:text-amber-300 font-medium text-sm transition-colors"
              >
                View All
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </div>

          {/* Songs Grid */}
          {section.songs.length > 0 ? (
            <div className={`grid gap-6 ${
              variant === 'compact' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}>
              {section.songs
                .slice(0, section.maxDisplay || (variant === 'compact' ? 8 : 6))
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
            <div className="text-center py-12 bg-slate-900/50 rounded-xl border border-slate-800">
              <div className="text-slate-600 text-4xl mb-4">🎸</div>
              <p className="text-slate-300 font-medium">No songs available in this category yet.</p>
              <p className="text-sm text-slate-500 mt-2">Check back soon for new additions!</p>
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
