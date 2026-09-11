"use client";

import React, { useState, useEffect } from "react";

interface SectionNavigationProps {
  sections: string[];
}

const SectionNavigation: React.FC<SectionNavigationProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -40% 0px" }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.toLowerCase().replace(/\s+/g, '-'));
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-2xl rounded-2xl border border-slate-200 dark:border-slate-700/80 p-2.5 max-w-48 hidden xl:block animate-fadeIn">
      <div className="flex items-center gap-1.5 px-2 mb-2 pb-1.5 border-b border-slate-200 dark:border-slate-800">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-500 dark:bg-amber-400 animate-pulse" />
        <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">Quick Jump</h4>
      </div>
      <nav className="space-y-0.5">
        {sections.map((section) => {
          const sectionId = section.toLowerCase().replace(/\s+/g, '-');
          const isActive = activeSection === sectionId;

          return (
            <button
              key={section}
              onClick={() => scrollToSection(sectionId)}
              className={`w-full text-left px-2.5 py-1.5 text-xs rounded-lg transition-all flex items-center justify-between ${
                isActive
                  ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300 font-bold border border-amber-500/30 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span className="truncate">{section}</span>
              {isActive && <span className="text-[10px] text-amber-600 dark:text-amber-400">●</span>}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default SectionNavigation;