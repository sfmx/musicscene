'use client';

import React from 'react';
import { getExternalSongLinks, ExternalSongLink } from '@/lib/externalSongLinks';

interface ExternalSongLinksProps {
  title: string;
  artist: string;
}

const platformIcons: Record<string, React.ReactNode> = {
  spotify: (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-emerald-400" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-rose-500" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  'apple-music': (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-pink-400" fill="currentColor">
      <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043A5.022 5.022 0 0019.2.04a10.151 10.151 0 00-1.56-.04H6.36C5.77 0 5.18.04 4.6.13a5.02 5.02 0 00-1.43.39C1.89 1.09 1.06 2.23.47 3.56.17 4.26.05 5 .02 5.77 0 6.22 0 6.67 0 7.12v9.77c0 .44.01.88.04 1.33.06.9.22 1.78.6 2.6.5 1.08 1.27 1.91 2.29 2.49.58.33 1.2.53 1.86.63.47.08.95.11 1.43.12.55.01 1.1.01 1.65.01h9.36c.52 0 1.03 0 1.55-.02.68-.02 1.34-.12 1.98-.38a5.543 5.543 0 002.62-2.08c.43-.66.69-1.38.84-2.14.1-.5.14-1.01.16-1.52.01-.44.01-.88.01-1.33V7.12c0-.33 0-.66-.02-.99zM16.95 13.53c0 .72-.13 1.41-.46 2.05-.45.88-1.14 1.47-2.06 1.76-.47.15-.95.23-1.44.23-.29 0-.58-.03-.87-.09-.72-.15-1.28-.55-1.64-1.2-.23-.41-.32-.86-.32-1.33 0-.58.14-1.11.46-1.59.44-.66 1.06-1.07 1.82-1.28.47-.13.95-.2 1.44-.24.37-.03.74-.07 1.11-.13V11.5c0-.39-.04-.78-.18-1.15-.22-.59-.67-.92-1.29-.99-.18-.02-.37-.02-.55 0-.55.08-.96.38-1.18.89-.06.13-.1.27-.13.41-.05.18-.15.23-.33.19l-1.93-.38c-.16-.03-.2-.1-.17-.25.15-.74.49-1.37 1.03-1.88a4.017 4.017 0 012.23-.98c.46-.09.93-.12 1.4-.08.67.06 1.31.21 1.88.57.57.36.96.85 1.18 1.48.14.39.2.8.21 1.21v4.99l-.01-.01z" />
    </svg>
  ),
  'ultimate-guitar': (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-amber-400" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6c4.636 0 8.4 3.764 8.4 8.4s-3.764 8.4-8.4 8.4-8.4-3.764-8.4-8.4S7.364 3.6 12 3.6zm-1.2 4.8v7.2h2.4V8.4h-2.4z" />
    </svg>
  ),
  songsterr: (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-cyan-400" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  musicnotes: (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-blue-400" fill="currentColor">
      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
    </svg>
  ),
};

function LinkPill({ link }: { link: ExternalSongLink }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-all shadow-sm"
      title={link.label}
    >
      {platformIcons[link.icon]}
      <span>{link.platform}</span>
    </a>
  );
}

export default function ExternalSongLinks({ title, artist }: ExternalSongLinksProps) {
  const links = getExternalSongLinks(title, artist);
  const listenLinks = links.filter(l => l.category === 'listen');
  const tabLinks = links.filter(l => l.category === 'tabs' || l.category === 'sheet-music');

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400 bg-slate-900/40 p-3 rounded-xl border border-slate-800/80">
      <span className="font-bold text-slate-300">🎧 Stream:</span>
      <div className="flex flex-wrap gap-1.5">
        {listenLinks.map(link => <LinkPill key={link.platform} link={link} />)}
      </div>
      <span className="text-slate-700">|</span>
      <span className="font-bold text-slate-300">📄 External Tabs:</span>
      <div className="flex flex-wrap gap-1.5">
        {tabLinks.map(link => <LinkPill key={link.platform} link={link} />)}
      </div>
    </div>
  );
}
