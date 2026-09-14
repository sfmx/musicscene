import { describe, it, expect } from 'vitest';
import {
  getAffiliateLink,
  getAffiliateLinkWithFallback,
  getRetailerLinks,
  looksLikeProduct,
  extractProductName,
} from '../affiliateLinks';

describe('Affiliate Links & Curated Product Resolution', () => {
  it('should match curated entry for Vox AC15', () => {
    const link = getAffiliateLink('Vox AC15');
    expect(link).toBeDefined();
    expect(link?.name).toBe('Vox AC15');
    expect(link?.category).toBe('amps');
    expect(link?.url).toContain('Vox+AC15');
    expect(link?.url).toContain('tag=');
  });

  it('should match curated entry for Fender Princeton Reverb', () => {
    const link = getAffiliateLink('Fender Princeton Reverb');
    expect(link).toBeDefined();
    expect(link?.name).toBe('Fender Princeton Reverb');
    expect(link?.category).toBe('amps');
    expect(link?.url).toContain('Fender+Princeton+Reverb');
  });

  it('should match curated entry for Ibanez TS9', () => {
    const link = getAffiliateLink('Ibanez TS9');
    expect(link).toBeDefined();
    expect(link?.category).toBe('effects');
    expect(link?.url).toContain('Ibanez+TS9');
  });

  it('should match curated entry for Friedman BE-100', () => {
    const link = getAffiliateLink('Friedman BE-100');
    expect(link).toBeDefined();
    expect(link?.name).toBe('Friedman BE-100');
    expect(link?.category).toBe('amps');
  });

  it('should match curated entry for Fender Blues Junior', () => {
    const link = getAffiliateLink('Fender Blues Junior');
    expect(link).toBeDefined();
    expect(link?.category).toBe('amps');
  });

  it('should generate multi-retailer links with affiliate parameters', () => {
    const retailers = getRetailerLinks('Vox AC15');
    expect(retailers).toBeDefined();
    expect(retailers?.name).toBe('Vox AC15');
    expect(retailers?.amazonUrl).toContain('amazon.com.au');
    expect(retailers?.sweetwaterUrl).toContain('sweetwater.com');
    expect(retailers?.thomannUrl).toContain('thomann.de');
  });

  it('should clean product names with extractProductName', () => {
    expect(extractProductName('• Shure SM57 – $99')).toBe('Shure SM57');
    expect(extractProductName('Boss DS-1 (classic)')).toBe('Boss DS-1');
    expect(extractProductName('Fender Player Stratocaster ($849.99)')).toBe('Fender Player Stratocaster');
  });

  it('should correctly identify product strings and reject descriptions', () => {
    expect(looksLikeProduct('Fender Stratocaster')).toBe(true);
    expect(looksLikeProduct('Gibson Les Paul Standard')).toBe(true);
    expect(looksLikeProduct('Vox AC15')).toBe(true);
    expect(looksLikeProduct('Ibanez TS9')).toBe(true);
    expect(looksLikeProduct('Start with subtle settings')).toBe(false);
    expect(looksLikeProduct('120 BPM')).toBe(false);
  });
});
