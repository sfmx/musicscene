"use client";

import React, { useEffect } from 'react';

interface ClientRedirectProps {
  to: string;
}

export default function ClientRedirect({ to }: ClientRedirectProps) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center p-8 text-center text-slate-700 dark:text-slate-300">
      <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-4" />
      <p className="text-sm">
        Redirecting to <a href={to} className="text-amber-500 font-bold underline">{to}</a>...
      </p>
    </div>
  );
}
