"use client";

import React, { useState, useEffect, useCallback } from 'react';
import CommandPalette from './CommandPalette';

export default function CommandPaletteProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  // Global Cmd+K / Ctrl+K shortcut
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Listen for custom event from NavBar's SearchTrigger
  useEffect(() => {
    function handleCustomOpen() {
      open();
    }
    window.addEventListener('open-command-palette', handleCustomOpen);
    return () => window.removeEventListener('open-command-palette', handleCustomOpen);
  }, [open]);

  return (
    <>
      {children}
      <CommandPalette isOpen={isOpen} onClose={close} />
    </>
  );
}
