"use client";

import React from 'react';
import Link from 'next/link';
import type { NavCategory } from '@/lib/navigationData';

interface MegaMenuPanelProps {
  category: NavCategory;
  onLinkClick: () => void;
}

export default function MegaMenuPanel({ category, onLinkClick }: MegaMenuPanelProps) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 z-50 w-screen max-w-3xl">
      <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6">
        <div className={`grid gap-6 ${
          category.columns.length === 2 ? 'grid-cols-2' :
          category.columns.length >= 3 ? 'grid-cols-3' : 'grid-cols-1'
        }`}>
          {category.columns.map((col) => (
            <div key={col.heading}>
              {col.headingHref ? (
                <Link
                  href={col.headingHref}
                  onClick={onLinkClick}
                  className="text-sm font-semibold text-gray-900 uppercase tracking-wide hover:text-blue-600 transition-colors"
                >
                  {col.heading}
                </Link>
              ) : (
                <div className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                  {col.heading}
                </div>
              )}
              <ul className="mt-2 space-y-1" role="menu">
                {col.items.map((item) => (
                  <li key={item.href + item.label} role="menuitem">
                    <Link
                      href={item.href}
                      onClick={onLinkClick}
                      className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded px-2 py-1.5 transition-colors"
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

        {category.featured && category.featured.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-3">
            {category.featured.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onLinkClick}
                className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                {item.label} →
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
