"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import type { NavCategory } from '@/lib/navigationData';
import MobileAccordion from './MobileAccordion';
import ThemeToggle from '@/components/ThemeToggle';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  categories: NavCategory[];
  onSearch: () => void;
}

export default function MobileDrawer({ isOpen, onClose, categories, onSearch }: MobileDrawerProps) {
  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Escape key
  useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 z-50 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800">
          <Link href="/" onClick={onClose} className="text-lg font-bold text-slate-900 dark:text-white">
            Music Scene
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Search button */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800">
          <button
            onClick={() => { onClose(); onSearch(); }}
            className="flex items-center gap-2 w-full px-3 py-2.5 bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4 text-slate-500 dark:text-slate-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path strokeLinecap="round" d="m21 21-4.35-4.35" />
            </svg>
            Search all content...
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto h-[calc(100%-130px)]">
          {/* Home link */}
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-3 text-slate-800 dark:text-slate-200 font-medium hover:bg-slate-100 dark:hover:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800/60 min-h-[44px]"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V9h6v12" />
            </svg>
            Home
          </Link>

          {/* Category accordions */}
          {categories.map((category) => (
            <MobileAccordion
              key={category.href}
              category={category}
              onLinkClick={onClose}
            />
          ))}

          {/* Browse all */}
          <Link
            href="/search"
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-3 text-blue-600 dark:text-cyan-400 font-medium hover:bg-slate-100 dark:hover:bg-slate-800/60 min-h-[44px]"
          >
            Browse All Content →
          </Link>
        </div>
      </div>
    </>
  );
}
