import React from 'react';

export interface HeaderBadge {
  label: string;
  value?: string;
  color?: string;
}

export default function Header({
  title,
  subtitle,
  className = '',
  category,
  badges,
  children,
}: {
  title: string;
  subtitle?: string;
  className?: string;
  category?: string;
  badges?: HeaderBadge[];
  children?: React.ReactNode;
}) {
  return (
    <header
      className={`relative bg-gradient-to-b from-slate-100/90 via-white to-slate-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 text-slate-900 dark:text-white overflow-hidden border-b border-slate-200 dark:border-slate-800 transition-colors ${
        className ? className : 'py-12 sm:py-16'
      }`}
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 opacity-10 dark:opacity-25 pointer-events-none bg-[radial-gradient(circle_at_50%_20%,_var(--tw-gradient-stops))] from-blue-600 via-purple-900 to-transparent" />
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Category Eyebrow */}
        {category && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-4 shadow-xs">
            <span className="flex h-1.5 w-1.5 rounded-full bg-amber-500 dark:bg-amber-400 animate-pulse" />
            <span>{category}</span>
          </div>
        )}

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Optional Metadata Badges */}
        {badges && badges.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {badges.map((b, idx) => (
              <span
                key={idx}
                className={`text-xs px-3 py-1 rounded-lg border font-mono ${
                  b.color || 'bg-white dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 shadow-xs'
                }`}
              >
                <span className="text-slate-500 dark:text-slate-400">{b.label}: </span>
                <strong className="text-slate-900 dark:text-white">{b.value}</strong>
              </span>
            ))}
          </div>
        )}

        {children && <div className="mt-6">{children}</div>}
      </div>
    </header>
  );
}
