"use client";

import React from 'react';
import Link from 'next/link';

interface TheoryItem {
  name: string;
  slug: string;
  description?: string;
  type: 'scale' | 'mode' | 'chord' | 'progression';
}

interface TheoryContextBadgesProps {
  primaryKey?: string;
  modalCharacter?: string;
  scalesUsed?: Array<{ scale: string; application?: string }>;
  customItems?: Array<{ name: string; slug: string; description?: string; type?: 'scale' | 'mode' | 'chord' | 'progression' }>;
}

export default function TheoryContextBadges({
  primaryKey,
  modalCharacter,
  scalesUsed = [],
  customItems,
}: TheoryContextBadgesProps) {
  const items: TheoryItem[] = [];

  if (customItems && customItems.length > 0) {
    customItems.forEach(ci => {
      items.push({
        name: ci.name,
        slug: ci.slug,
        description: ci.description,
        type: ci.type || 'scale',
      });
    });
  } else {
    // Infer scales
    for (const s of scalesUsed) {
      const lower = s.scale.toLowerCase();
      let slug = '';
      if (lower.includes('harmonic minor')) slug = 'harmonic-minor';
      else if (lower.includes('melodic minor')) slug = 'melodic-minor';
      else if (lower.includes('pentatonic') && lower.includes('minor')) slug = 'minor-pentatonic';
      else if (lower.includes('pentatonic') && lower.includes('major')) slug = 'major-pentatonic';
      else if (lower.includes('blues')) slug = 'blues';
      else if (lower.includes('dorian')) slug = 'dorian';
      else if (lower.includes('mixolydian')) slug = 'mixolydian';
      else if (lower.includes('phrygian')) slug = 'phrygian';
      else if (lower.includes('lydian')) slug = 'lydian';
      else if (lower.includes('locrian')) slug = 'locrian';
      else if (lower.includes('minor')) slug = 'minor';
      else if (lower.includes('major')) slug = 'major';

      if (slug && !items.some(i => i.slug === slug && i.type === 'scale')) {
        items.push({
          name: s.scale,
          slug,
          description: s.application || 'Primary scale used in this song',
          type: 'scale',
        });
      }
    }

    // Infer mode
    if (modalCharacter) {
      const modeLower = modalCharacter.toLowerCase();
      const modeSlugs = ['ionian', 'dorian', 'phrygian', 'lydian', 'mixolydian', 'aeolian', 'locrian'];
      for (const m of modeSlugs) {
        if (modeLower.includes(m) && !items.some(i => i.slug === m && i.type === 'mode')) {
          const capName = m.charAt(0).toUpperCase() + m.slice(1) + ' Mode';
          items.push({
            name: capName,
            slug: m,
            description: `The harmonic character shaping ${primaryKey || 'this song'}`,
            type: 'mode',
          });
        }
      }
    }

    // Infer chord theory
    const isMinor = (primaryKey || '').toLowerCase().includes('minor') || (modalCharacter || '').toLowerCase().includes('aeolian');
    if (isMinor) {
      items.push({
        name: 'Minor Chord Mastery',
        slug: 'minor',
        description: 'Understand minor chord construction and voicings',
        type: 'chord',
      });
    } else {
      items.push({
        name: 'Major Chord Mastery',
        slug: 'major',
        description: 'Understand major chord construction and voicings',
        type: 'chord',
      });
    }
  }

  if (items.length === 0) return null;

  const getTypeUrl = (item: TheoryItem) => {
    switch (item.type) {
      case 'scale':
        return `/lessons/theory/scales/${item.slug}/`;
      case 'mode':
        return `/lessons/theory/modes/${item.slug}/`;
      case 'chord':
        return `/lessons/theory/chords/${item.slug}/`;
      case 'progression':
        return `/lessons/theory/progressions/${item.slug}/`;
      default:
        return `/lessons/theory/scales/${item.slug}/`;
    }
  };

  const getTypeColor = (type: TheoryItem['type']) => {
    switch (type) {
      case 'scale':
        return 'bg-blue-50 text-blue-800 border-blue-200 hover:border-blue-400 hover:bg-blue-100';
      case 'mode':
        return 'bg-purple-50 text-purple-800 border-purple-200 hover:border-purple-400 hover:bg-purple-100';
      case 'chord':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:border-emerald-400 hover:bg-emerald-100';
      case 'progression':
        return 'bg-amber-50 text-amber-800 border-amber-200 hover:border-amber-400 hover:bg-amber-100';
    }
  };

  const getTypeIcon = (type: TheoryItem['type']) => {
    switch (type) {
      case 'scale':
        return '🎼';
      case 'mode':
        return '🔄';
      case 'chord':
        return '🎸';
      case 'progression':
        return '🎹';
    }
  };

  return (
    <div className="mt-6 pt-5 border-t border-gray-100">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Related Music Theory Guides</span>
        <span className="text-xs text-gray-400">• Click to master concepts</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map((item, index) => (
          <Link
            key={index}
            href={getTypeUrl(item)}
            className={`group flex flex-col p-3 rounded-lg border transition-all duration-200 ${getTypeColor(item.type)}`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-semibold text-sm flex items-center gap-1.5">
                <span>{getTypeIcon(item.type)}</span>
                <span className="group-hover:underline">{item.name}</span>
              </span>
              <span className="text-xs opacity-75 font-mono group-hover:translate-x-0.5 transition-transform">→</span>
            </div>
            {item.description && (
              <p className="text-xs opacity-85 line-clamp-1">{item.description}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
