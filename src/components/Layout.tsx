"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface LessonLink {
  href: string;
  label: string;
  icon: React.ReactNode;
  submenu?: { href: string; label: string }[];
}

const lessonLinks: LessonLink[] = [
  {
    href: '/',
    label: 'Home',
    icon: (
      // Home icon (Heroicons)
      <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V9h6v12" />
      </svg>
    ),
  },
  {
    href: '/lessons/gear',
    label: 'Gear',
    icon: (
      // Bolt icon (Heroicons)
      <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    href: '/lessons/theory',
    label: 'Theory',
    icon: (
      // Academic Cap icon (Heroicons)
      <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12.083 12.083 0 0118 20.5c0 .276-.112.526-.293.707A1 1 0 0116.5 22h-9a1 1 0 01-.707-1.707A.997.997 0 016 20.5c0-2.137.735-4.102 1.84-5.922L12 14z" />
      </svg>
    ),
  },
  {
    href: '/lessons/practice',
    label: 'Practice',
    icon: (
      // Rocket icon (Heroicons)
      <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7M15 7h4v4" />
      </svg>
    ),
  },
  {
    href: '/lessons/songs',
    label: 'Songs',
    icon: (
      // Musical Note icon (Heroicons)
      <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-2v13" />
        <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth={2} fill="none"/>
        <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth={2} fill="none"/>
      </svg>
    ),
    submenu: [
      { href: '/lessons/songs', label: 'All Song Lessons' },
      { href: '/lessons/songs/song-analysis', label: 'Song Analysis' },
      { href: '/lessons/songs/song-analysis/were-not-gonna-take-it', label: "We're Not Gonna Take It" },
      { href: '/lessons/songs/song-analysis/for-those-about-to-rock', label: 'For Those About to Rock' },
      { href: '/lessons/songs/song-analysis/thunderstruck', label: 'Thunderstruck' },
      { href: '/lessons/songs/song-analysis/back-in-black', label: 'Back in Black' },
      { href: '/lessons/songs/song-analysis/highway-to-hell', label: 'Highway to Hell' },
      { href: '/lessons/songs/song-analysis/you-shook-me-all-night-long', label: 'You Shook Me All Night Long' },
    ]
  },
  // Add more lesson categories as needed
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  return (
    <div className="font-sans">
      {/* Header with site title and icon menu */}
      <header className="bg-gray-900 text-white px-4 py-3">
        <div className="mb-2">
          <span className="text-xl font-bold">Music Scene</span>
        </div>
        <nav className="relative">
          <ul className="flex space-x-8 justify-center border-b border-gray-700 pb-2">
            {lessonLinks.map(link => (
              <li 
                key={link.href} 
                className="flex flex-col items-center relative"
                onMouseEnter={() => link.submenu && setOpenSubmenu(link.href)}
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                <Link
                  href={link.href}
                  className={`flex flex-col items-center px-3 py-1 rounded transition-colors ${
                    pathname === link.href || (link.submenu && link.submenu.some(sub => pathname === sub.href))
                      ? 'bg-white text-gray-900 font-semibold'
                      : 'hover:bg-gray-800'
                  }`}
                >
                  {link.icon}
                  <div className="flex items-center">
                    <span className="text-xs">{link.label}</span>
                    {link.submenu && (
                      <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </Link>
                
                {/* Submenu dropdown */}
                {link.submenu && openSubmenu === link.href && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-white text-gray-900 shadow-lg rounded-lg border min-w-64 z-50">
                    <ul className="py-2">
                      {link.submenu.map(subLink => (
                        <li key={subLink.href}>
                          <Link
                            href={subLink.href}
                            className={`block px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                              pathname === subLink.href ? 'bg-gray-100 font-semibold' : ''
                            }`}
                          >
                            {subLink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {children}
    </div>
  )
}
