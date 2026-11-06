import { chromium } from 'playwright';
import * as path from 'path';
import * as fs from 'fs';

async function main() {
  const userDataDir = path.resolve(process.cwd(), '.playwright-session');
  console.log('Launching Playwright browser with persistent context...');
  console.log(`Session directory: ${userDataDir}`);

  const context = await chromium.launchPersistentContext(userDataDir, {
    headless: false,
    viewport: { width: 1280, height: 900 },
    args: ['--disable-blink-features=AutomationControlled'],
  });

  const page = context.pages().length > 0 ? context.pages()[0] : await context.newPage();

  const url = process.argv[2] || 'https://www.reddit.com/r/LearnGuitar/comments/1xkkymz/what_do_you_wish_youd_had_when_learning_guitar/';
  console.log(`Navigating to: ${url}`);
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });

  console.log('Page loaded. Waiting 4 seconds for comments to render...');
  await page.waitForTimeout(4000);

  const extract = async () => {
    return await page.evaluate(() => {
      // Shreddit modern web components
      const shredditComments = Array.from(document.querySelectorAll('shreddit-comment'));
      if (shredditComments.length > 0) {
        return shredditComments.map((c: any) => {
          const author = c.getAttribute('author') || '';
          const score = c.getAttribute('score') || '';
          const pTags = Array.from(c.querySelectorAll('p')).map((p: any) => p.innerText.trim());
          const body = pTags.join('\n\n') || c.innerText.trim();
          return { author, score, body };
        });
      }

      // Fallback: standard reddit selectors
      const commentNodes = Array.from(document.querySelectorAll('[data-testid="comment"], .Comment, div[id^="t1_"]'));
      return commentNodes.map((c: any) => {
        const text = c.innerText.trim();
        return { body: text };
      });
    });
  };

  let result = await extract();
  console.log(`Extracted ${result.length} comments from page.`);

  const outputPath = path.resolve(process.cwd(), '.playwright-session', 'extracted-comments.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf-8');
  console.log(`Saved comments to: ${outputPath}`);

  // Also print out top comments preview
  console.log('--- COMMENTS PREVIEW ---');
  for (let i = 0; i < Math.min(result.length, 10); i++) {
    const item = result[i] as any;
    console.log(`[#${i + 1}] Author: ${item.author || 'unknown'} (Score: ${item.score || '?'})`);
    console.log(item.body.slice(0, 300));
    console.log('------------------------');
  }

  console.log('\nBrowser window is now open on your screen. You can log in, browse, or post.');
  console.log('Keeping session active for 5 minutes...');

  // Keep open for user interaction
  await new Promise((resolve) => setTimeout(resolve, 300000)); // 5 minutes
  await context.close();
}

main().catch((err) => {
  console.error('Error in Playwright script:', err);
  process.exit(1);
});
