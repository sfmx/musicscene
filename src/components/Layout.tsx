"use client"
import React from 'react'
import NavBar from './Navigation/NavBar'
import Footer from './Footer'
import CommandPaletteProvider from './Search/CommandPaletteProvider'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CommandPaletteProvider>
      <div className="font-sans bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen transition-colors">
        <NavBar />
        {children}
        <Footer />
      </div>
    </CommandPaletteProvider>
  )
}
