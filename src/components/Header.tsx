import React from 'react'

export default function Header({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <header className="relative h-72 bg-gray-900 text-white flex items-center justify-center">
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="mt-4 text-xl max-w-2xl">{subtitle}</p>
      </div>
    </header>
  )
}
