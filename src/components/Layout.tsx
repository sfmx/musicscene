"use client"
import React from 'react'
import NavBar from './Navigation/NavBar'
import Footer from './Footer'
import CommandPaletteProvider from './Search/CommandPaletteProvider'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CommandPaletteProvider>
      <div className="font-sans">
        <NavBar />
        {children}
        <Footer />
      </div>
    </CommandPaletteProvider>
  )
}
