"use client";

import React from 'react';

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function HamburgerButton({ isOpen, onClick }: HamburgerButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative w-10 h-10 flex items-center justify-center rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
    >
      <div className="w-5 h-4 relative flex flex-col justify-between">
        <span
          className={`block h-0.5 w-full bg-current rounded transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-[7px]' : ''
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-current rounded transition-all duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-current rounded transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-[7px]' : ''
          }`}
        />
      </div>
    </button>
  );
}
