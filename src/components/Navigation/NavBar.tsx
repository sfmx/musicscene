"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getNavigationData, type NavCategory } from '@/lib/navigationData';
import MegaMenuPanel from './MegaMenuPanel';
import SearchTrigger from './SearchTrigger';
import MobileDrawer from './MobileDrawer';
import HamburgerButton from './HamburgerButton';
import ThemeToggle from '@/components/ThemeToggle';

const navData = getNavigationData();

export default function NavBar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Close menus on route change
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  // Escape key handler
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpenMenu(null);
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // Click outside handler
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const handleMouseEnter = useCallback((href: string) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpenMenu(href);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimerRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 150);
  }, []);

  const handleLinkClick = useCallback(() => {
    setOpenMenu(null);
  }, []);

  const openCommandPalette = useCallback(() => {
    window.dispatchEvent(new CustomEvent('open-command-palette'));
  }, []);

  function isActive(category: NavCategory) {
    return pathname.startsWith(category.href);
  }

  return (
    <header className="bg-white/95 dark:bg-slate-950/95 text-slate-800 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 backdrop-blur-md sticky top-0 z-40 transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top row: brand + mobile controls */}
        <div className="flex items-center justify-between py-3">
          <Link href="/" className="text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-amber-400 transition-colors">
            Music Scene
          </Link>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle compact />
            <SearchTrigger onClick={openCommandPalette} compact />
            <HamburgerButton isOpen={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)} />
          </div>
        </div>

        {/* Desktop navigation */}
        <nav ref={navRef} className="hidden lg:block pb-2" aria-label="Main navigation">
          <ul className="flex items-center justify-center gap-1 border-t border-slate-200 dark:border-slate-800 pt-2">
            {/* Home */}
            <li>
              <Link
                href="/"
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === '/'
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V9h6v12" />
                </svg>
                Home
              </Link>
            </li>

            {/* Category items */}
            {navData.map((category) => (
              <li
                key={category.href}
                className="relative"
                onMouseEnter={() => handleMouseEnter(category.href)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={category.href}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(category)
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                  }`}
                  aria-expanded={openMenu === category.href}
                  aria-haspopup="true"
                >
                  {category.label}
                  <svg className={`w-3 h-3 transition-transform ${openMenu === category.href ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>

                {openMenu === category.href && (
                  <MegaMenuPanel category={category} onLinkClick={handleLinkClick} />
                )}
              </li>
            ))}

            {/* Search trigger & Theme toggle */}
            <li className="ml-4 flex items-center gap-2">
              <SearchTrigger onClick={openCommandPalette} />
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile drawer */}
      <MobileDrawer
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        categories={navData}
        onSearch={openCommandPalette}
      />
    </header>
  );
}
