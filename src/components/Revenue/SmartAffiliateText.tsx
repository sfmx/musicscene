'use client';

import React from 'react';
import AffiliateLink from './AffiliateLink';
import { looksLikeProduct } from '@/lib/affiliateLinks';

interface SmartAffiliateTextProps {
  text: string;
  className?: string;
}

/**
 * Renders text that may contain comma-separated product names.
 * If the text contains commas and at least one item looks like a product,
 * each item is individually wrapped with AffiliateLink.
 * Otherwise renders as plain text.
 */
export default function SmartAffiliateText({ text, className }: SmartAffiliateTextProps) {
  const parts = text.split(/,\s*/);

  if (parts.length > 1 && parts.some(part => looksLikeProduct(part.trim()))) {
    return (
      <>
        {parts.map((part, i) => (
          <React.Fragment key={i}>
            {i > 0 && ', '}
            <AffiliateLink productName={part.trim()} className={className} />
          </React.Fragment>
        ))}
      </>
    );
  }

  return <>{text}</>;
}
