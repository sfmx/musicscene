import affiliateData from '@/data/affiliate-products.json';
import { REVENUE_CONFIG } from './revenueConfig';
import { AFFILIATE_BRANDS } from './affiliateBrands';

export interface AffiliateProduct {
  name: string;
  url: string;
  category: string;
}

function buildUrl(template: string): string {
  return template.replace('{tag}', REVENUE_CONFIG.amazonAssociateTag);
}

/**
 * Returns affiliate product info for a product name, or null if no match.
 * Matching is case-insensitive: the product name must contain the pattern.
 * Products are ordered most-specific-first in the JSON, so the first match wins.
 */
export function getAffiliateLink(productName: string): AffiliateProduct | null {
  const lower = productName.toLowerCase();
  for (const product of affiliateData.products) {
    if (lower.includes(product.pattern.toLowerCase())) {
      return {
        name: product.pattern,
        url: buildUrl(product.url),
        category: product.category,
      };
    }
  }
  return null;
}

// Pre-compute lowercase brands for efficient matching
const BRANDS_LOWER = AFFILIATE_BRANDS.map(b => b.toLowerCase());

// Brands with 4 or fewer characters need word-boundary matching to avoid false positives
// e.g., "ART" shouldn't match "Start", "DOD" shouldn't match "Dodge"
const SHORT_BRAND_THRESHOLD = 4;

/**
 * Checks if a text string looks like a product name by detecting known brand names.
 * Returns false for generic descriptions, specs, or short strings.
 */
export function looksLikeProduct(text: string): boolean {
  if (!text || text.length < 5) return false;

  const lower = text.toLowerCase();

  // Skip pure numbers, prices, or spec-like strings
  if (/^\$?\d/.test(text.trim())) return false;
  if (/^\d+[\s-]?(bit|hz|khz|ms|bpm|mm|"|inch)/i.test(text.trim())) return false;

  // Skip common false-positive phrases where brand names appear as substrings
  if (/\bartists?\b/i.test(text) && !/\b(audio-technica|art)\s+\w/i.test(text)) return false;
  if (/^(start|begin|try|use|play|keep|avoid|practice)\b/i.test(text.trim())) return false;

  return BRANDS_LOWER.some((brand, idx) => {
    if (!lower.includes(brand)) return false;
    // For short brands, require word boundary to avoid false positives
    if (AFFILIATE_BRANDS[idx].length <= SHORT_BRAND_THRESHOLD) {
      const regex = new RegExp(`\\b${brand.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
      return regex.test(text);
    }
    return true;
  });
}

/**
 * Strips price suffixes, parenthetical notes, and leading bullets from product strings.
 * "Shure SM57 – $99" → "Shure SM57"
 * "Boss DS-1 (classic)" → "Boss DS-1"
 */
export function extractProductName(text: string): string {
  let cleaned = text.trim();
  // Remove leading bullet characters
  cleaned = cleaned.replace(/^[•\-–—]\s*/, '');
  // Remove trailing price patterns: " – $99", " - $149.99", " ($99)"
  cleaned = cleaned.replace(/\s*[-–—]\s*\$[\d,.]+\s*$/, '');
  cleaned = cleaned.replace(/\s*\(\$[\d,.]+\)\s*$/, '');
  // Remove trailing parenthetical notes
  cleaned = cleaned.replace(/\s*\([^)]*\)\s*$/, '');
  return cleaned.trim();
}

/**
 * Returns affiliate product info with automatic fallback.
 * 1. Tries explicit database match (curated links take priority)
 * 2. Falls back to auto-generated Amazon search URL if text contains a known brand
 * 3. Returns null if text doesn't look like a product
 */
export function getAffiliateLinkWithFallback(productName: string): AffiliateProduct | null {
  // Try explicit database match first
  const explicit = getAffiliateLink(productName);
  if (explicit) return explicit;

  // Check if this looks like a product name
  if (!looksLikeProduct(productName)) return null;

  // Generate Amazon search URL as fallback
  const searchTerm = extractProductName(productName);
  if (searchTerm.length < 3) return null;

  const encoded = encodeURIComponent(searchTerm).replace(/%20/g, '+');
  return {
    name: searchTerm,
    url: `https://www.amazon.com.au/s?k=${encoded}&tag=${REVENUE_CONFIG.amazonAssociateTag}`,
    category: 'auto',
  };
}
