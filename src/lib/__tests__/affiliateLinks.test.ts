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
    expect(looksLikeProduct('Professional touring, airline travel, extremely valuable instruments')).toBe(false);
    expect(looksLikeProduct('Airline approved, professional touring')).toBe(false);
  });

  describe('Curated Priority Brands Expansion', () => {
    it('should match curated guitars with specific model prioritization', () => {
      const d18 = getAffiliateLink('Martin D-18');
      expect(d18).toBeDefined();
      expect(d18?.name).toBe('Martin D-18');
      expect(d18?.category).toBe('guitars');

      const taylor314 = getAffiliateLink('Taylor 314ce acoustic guitar');
      expect(taylor314).toBeDefined();
      expect(taylor314?.name).toBe('Taylor 314ce');

      const dot = getAffiliateLink('Epiphone Dot semi-hollow');
      expect(dot).toBeDefined();
      expect(dot?.name).toBe('Epiphone Dot semi-hollow');

      const tele = getAffiliateLink('Squier Telecaster');
      expect(tele).toBeDefined();
      expect(tele?.name).toBe('Squier Telecaster');

      const pacifica = getAffiliateLink('Yamaha Pacifica 112V');
      expect(pacifica).toBeDefined();
      expect(pacifica?.name).toBe('Yamaha Pacifica 112V');
    });

    it('should match curated amplifiers with specific model prioritization', () => {
      const bluesbreaker = getAffiliateLink('Marshall 1962 Bluesbreaker');
      expect(bluesbreaker).toBeDefined();
      expect(bluesbreaker?.name).toBe('Marshall 1962 Bluesbreaker');
      expect(bluesbreaker?.category).toBe('amps');

      const katana = getAffiliateLink('Boss Katana 50 Gen 3');
      expect(katana).toBeDefined();
      expect(katana?.name).toBe('Boss Katana 50 Gen 3');

      const bluesDeluxe = getAffiliateLink('Fender Blues Deluxe');
      expect(bluesDeluxe).toBeDefined();
      expect(bluesDeluxe?.name).toBe('Fender Blues Deluxe');

      const rocker = getAffiliateLink('Orange Rocker 15');
      expect(rocker).toBeDefined();
      expect(rocker?.name).toBe('Orange Rocker 15');

      const loudbox = getAffiliateLink('Fishman Loudbox Mini');
      expect(loudbox).toBeDefined();
      expect(loudbox?.name).toBe('Fishman Loudbox Mini');
    });

    it('should match curated effects and distortion pedals', () => {
      const ts9 = getAffiliateLink('Ibanez TS9 Tube Screamer');
      expect(ts9).toBeDefined();
      expect(ts9?.name).toBe('Ibanez TS9 Tube Screamer');

      const ds1 = getAffiliateLink('Boss DS-1 Distortion');
      expect(ds1).toBeDefined();
      expect(ds1?.name).toBe('Boss DS-1 Distortion');

      const cryBaby = getAffiliateLink('Dunlop Cry Baby GCB95');
      expect(cryBaby).toBeDefined();
      expect(cryBaby?.name).toBe('Dunlop Cry Baby GCB95');

      const rat = getAffiliateLink('ProCo Rat 2');
      expect(rat).toBeDefined();
      expect(rat?.name).toBe('ProCo RAT 2');
    });

    it('should match curated accessories and studio outboard', () => {
      const chroma = getAffiliateLink('ChromaCast Guitar Stand');
      expect(chroma).toBeDefined();
      expect(chroma?.name).toBe('ChromaCast Guitar Stand');

      const hercules = getAffiliateLink('Hercules GS414B PLUS');
      expect(hercules).toBeDefined();
      expect(hercules?.name).toBe('Hercules GS414B PLUS');

      const tortex = getAffiliateLink('Dunlop Tortex Standard Picks');
      expect(tortex).toBeDefined();
      expect(tortex?.name).toBe('Dunlop Tortex Standard Picks');

      const slinky = getAffiliateLink('Ernie Ball Regular Slinky');
      expect(slinky).toBeDefined();
      expect(slinky?.name).toBe('Ernie Ball Regular Slinky');

      const mogami = getAffiliateLink('Mogami 2524');
      expect(mogami).toBeDefined();
      expect(mogami?.name).toBe('Mogami 2524');

      const sm57 = getAffiliateLink('Shure SM57');
      expect(sm57).toBeDefined();
      expect(sm57?.name).toBe('Shure SM57');
    });

    it('should match brand-level fallbacks when generic brand is referenced', () => {
      const fender = getAffiliateLink('Fender');
      expect(fender).toBeDefined();
      expect(fender?.name).toBe('Fender');

      const marshall = getAffiliateLink('Marshall');
      expect(marshall).toBeDefined();
      expect(marshall?.name).toBe('Marshall');
    });
  });
});
