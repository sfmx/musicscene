'use client';

import { getAffiliateLinkWithFallback } from '@/lib/affiliateLinks';

interface AffiliateLinkProps {
  productName: string;
  children?: React.ReactNode;
  className?: string;
}

export default function AffiliateLink({ productName, children, className = '' }: AffiliateLinkProps) {
  const product = getAffiliateLinkWithFallback(productName);

  if (!product) {
    return <>{children || productName}</>;
  }

  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer nofollow sponsored"
      title="Check price on Amazon (affiliate link)"
      className={`inline-flex items-center gap-1 hover:underline ${className}`}
    >
      {children || productName}
      <svg
        className="inline-block w-3 h-3 flex-shrink-0 opacity-60"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
      </svg>
    </a>
  );
}
