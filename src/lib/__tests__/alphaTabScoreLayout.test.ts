import { describe, it, expect } from 'vitest';
import { calculateScoreLayout } from '@/components/AlphaTexRenderer';

describe('calculateScoreLayout (Musical System Balancing & Bar Alignment)', () => {
  it('handles 1-bar tabs cleanly by filling container width', () => {
    const layoutMobile = calculateScoreLayout(1, 360);
    expect(layoutMobile.barsPerRow).toBe(-1);
    expect(layoutMobile.justifyLastSystem).toBe(true);

    const layoutDesktop = calculateScoreLayout(1, 1024);
    expect(layoutDesktop.barsPerRow).toBe(-1);
    expect(layoutDesktop.justifyLastSystem).toBe(true);
  });

  it('balances 2-bar tabs: 1 per line on mobile, all on 1 line on desktop', () => {
    // Mobile screen (< 600px): wraps into 1 bar per line so each bar is 100% and barlines match
    const layoutMobile = calculateScoreLayout(2, 380);
    expect(layoutMobile.barsPerRow).toBe(1);
    expect(layoutMobile.justifyLastSystem).toBe(true);

    // Desktop: fits on 1 line
    const layoutDesktop = calculateScoreLayout(2, 900);
    expect(layoutDesktop.barsPerRow).toBe(-1);
    expect(layoutDesktop.justifyLastSystem).toBe(true);
  });

  it('balances 4-bar tabs (e.g. Fade to Black, Voodoo Child) and never leaves a ragged 3+1 layout', () => {
    // Mobile (< 600px): 1 bar per line (4 balanced lines of 1 bar)
    const mobile = calculateScoreLayout(4, 400);
    expect(mobile.barsPerRow).toBe(1);
    expect(mobile.justifyLastSystem).toBe(true);

    // Standard desktop (900px - 1200px, as in the user screenshot):
    // Must be 2 bars per line (2 balanced lines of 2 bars, 50% each), NOT 3 bars + 1 orphan bar!
    const desktop = calculateScoreLayout(4, 1024);
    expect(desktop.barsPerRow).toBe(2);
    expect(desktop.justifyLastSystem).toBe(true);

    const laptop = calculateScoreLayout(4, 900);
    expect(laptop.barsPerRow).toBe(2);
    expect(laptop.justifyLastSystem).toBe(true);

    // Ultra-wide (>= 1250px): all 4 fit cleanly on 1 line
    const ultraWide = calculateScoreLayout(4, 1300);
    expect(ultraWide.barsPerRow).toBe(-1);
    expect(ultraWide.justifyLastSystem).toBe(true);
  });

  it('balances 3-bar tabs without comically stretching the orphan bar on multi-line wrap', () => {
    // Mobile (< 600px): 1 bar per line
    const mobile = calculateScoreLayout(3, 400);
    expect(mobile.barsPerRow).toBe(1);
    expect(mobile.justifyLastSystem).toBe(true);

    // Mid-width wrap (e.g. 700px): 2 bars on line 1, 1 bar on line 2
    // justifyLastSystem MUST be false so bar 3 doesn't stretch to 100% width
    const tablet = calculateScoreLayout(3, 700);
    expect(tablet.barsPerRow).toBe(2);
    expect(tablet.justifyLastSystem).toBe(false);

    // Desktop (>= 950px): all 3 fit on 1 line
    const desktop = calculateScoreLayout(3, 1024);
    expect(desktop.barsPerRow).toBe(-1);
    expect(desktop.justifyLastSystem).toBe(true);
  });

  it('balances 6-bar and 8-bar extended sections evenly', () => {
    // 6 bars at 1024px: 3 bars per row (2 lines of 3)
    const sixBars = calculateScoreLayout(6, 1024);
    expect(sixBars.barsPerRow).toBe(3);
    expect(sixBars.justifyLastSystem).toBe(true);

    // 8 bars at 1024px: 2 bars per row (4 lines of 2) or at 1300px: 4 bars per row (2 lines of 4)
    const eightBarsDesktop = calculateScoreLayout(8, 1024);
    expect(eightBarsDesktop.barsPerRow).toBe(2);
    expect(eightBarsDesktop.justifyLastSystem).toBe(true);

    const eightBarsWide = calculateScoreLayout(8, 1300);
    expect(eightBarsWide.barsPerRow).toBe(4);
    expect(eightBarsWide.justifyLastSystem).toBe(true);
  });
});

