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
      { rootMargin: "-50% 0px -50% 0px" }
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
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-lg border border-gray-200 p-2 max-w-48">
      <h4 className="text-xs font-semibold text-gray-900 mb-2 px-2">Jump to Section</h4>
      <nav className="space-y-1">
        {sections.map((section) => {
          const sectionId = section.toLowerCase().replace(/\s+/g, '-');
          const isActive = activeSection === sectionId;

          return (
            <button
              key={section}
              onClick={() => scrollToSection(sectionId)}
              className={`w-full text-left px-2 py-1 text-xs rounded transition-colors ${
                isActive
                  ? 'bg-blue-100 text-blue-800 font-medium'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
              }`}
            >
              {section}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default SectionNavigation;