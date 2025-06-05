"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const lessonLinks = [
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
  },
  // Add more lesson categories as needed
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="font-sans">
      {/* Header with site title and icon menu */}
      <header className="bg-gray-900 text-white px-4 py-3">
        <div className="mb-2">
          <span className="text-xl font-bold">Music Scene</span>
        </div>
        <nav>
          <ul className="flex space-x-8 justify-center border-b border-gray-700 pb-2">
            {lessonLinks.map(link => (
              <li key={link.href} className="flex flex-col items-center">
                <Link
                  href={link.href}
                  className={`flex flex-col items-center px-3 py-1 rounded transition-colors ${
                    pathname === link.href
                      ? 'bg-white text-gray-900 font-semibold'
                      : 'hover:bg-gray-800'
                  }`}
                >
                  {link.icon}
                  <span className="text-xs">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {children}
    </div>
  )
}
