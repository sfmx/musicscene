"use client";

import React, { useState, useEffect } from 'react';

interface StageItem {
  id: string;
  label: string;
  icon: string;
}

const STAGES: StageItem[] = [
  { id: 'hero', label: 'Masterclass Hub', icon: '🎸' },
  { id: 'whats-new', label: 'Fresh Additions', icon: '✨' },
  { id: 'interactive-tools', label: 'Practice Tools', icon: '🎯' },
  { id: 'song-library', label: '226 Song Library', icon: '📚' },
  { id: 'why-songs-work', label: 'Harmonic Secrets', icon: '💡' },
  { id: 'theory-curriculum', label: 'Theory Curriculum', icon: '🎼' },
];

export default function HomeStageNavigator() {
  const [activeStage, setActiveStage] = useState('hero');
  const [hoveredStage, setHoveredStage] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Find current section by bounding rect
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      for (let i = STAGES.length - 1; i >= 0; i--) {
        const stage = STAGES[i];
        const el = document.getElementById(stage.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveStage(stage.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToStage = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      aria-label="Page Stage Navigation"
      className="hidden xl:flex fixed right-4 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-2 p-2 rounded-full bg-white/80 dark:bg-slate-900/85 border border-slate-200/90 dark:border-slate-800/90 backdrop-blur-md shadow-xl transition-all"
    >
      {STAGES.map((stage) => {
        const isActive = activeStage === stage.id;
        const isHovered = hoveredStage === stage.id;

        return (
          <div key={stage.id} className="relative flex items-center justify-center">
            {/* Hover Tooltip on Left */}
            {isHovered && (
              <div className="absolute right-7 py-1 px-2.5 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-[11px] font-bold shadow-xl whitespace-nowrap pointer-events-none transition-all flex items-center gap-1.5 animate-in fade-in zoom-in-95 duration-150">
                <span>{stage.icon}</span>
                <span>{stage.label}</span>
                <span className="w-1.5 h-1.5 bg-slate-900 dark:bg-white absolute -right-0.5 top-1/2 -translate-y-1/2 rotate-45" />
              </div>
            )}

            {/* Stage Pill / Dot */}
            <button
              onClick={() => scrollToStage(stage.id)}
              onMouseEnter={() => setHoveredStage(stage.id)}
              onMouseLeave={() => setHoveredStage(null)}
              aria-label={`Go to ${stage.label}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                isActive
                  ? 'w-2.5 h-6 bg-gradient-to-b from-amber-400 to-amber-600 shadow-sm shadow-amber-500/50 scale-105'
                  : 'w-2 h-2 bg-slate-300 dark:bg-slate-700 hover:bg-amber-400/80 hover:scale-125'
              }`}
            />
          </div>
        );
      })}
    </nav>
  );
}

