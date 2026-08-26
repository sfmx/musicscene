"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import type { NavCategory } from '@/lib/navigationData';

interface MobileAccordionProps {
  category: NavCategory;
  onLinkClick: () => void;
}

export default function MobileAccordion({ category, onLinkClick }: MobileAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-900 font-medium hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span>{category.label}</span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div className="pb-3 px-4">
          {/* Category overview link */}
          <Link
            href={category.href}
            onClick={onLinkClick}
            className="block px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded mb-2"
          >
            All {category.label} →
          </Link>

          {category.columns.map((col) => (
            <div key={col.heading} className="mb-3">
              {col.headingHref ? (
                <Link
                  href={col.headingHref}
                  onClick={onLinkClick}
                  className="block px-3 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wide hover:text-blue-600"
                >
                  {col.heading}
                </Link>
              ) : (
                <div className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  {col.heading}
                </div>
              )}
              <ul>
                {col.items.map((item) => (
                  <li key={item.href + item.label}>
                    <Link
                      href={item.href}
                      onClick={onLinkClick}
                      className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded transition-colors min-h-[44px]"
                    >
                      {item.icon && <span className="text-xs flex-shrink-0">{item.icon}</span>}
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
