import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-md mx-auto text-center">
        <h3 className="text-xl mb-2">Stay in Tune</h3>
        <p className="mb-4">Get new lessons straight to your inbox.</p>
        <form className="flex">
          <input
            type="email"
            placeholder="you@example.com"
            className="flex-grow px-4 py-2 rounded-l border-none"
          />
          <button type="submit" className="px-4 bg-indigo-500 hover:bg-indigo-600 rounded-r">
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  )
}
