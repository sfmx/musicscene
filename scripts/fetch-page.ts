import { chromium } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  });
  const page = await context.newPage();

  const url = process.argv[2] || 'https://www.reddit.com/r/LearnGuitar/comments/1xkkymz/what_do_you_wish_youd_had_when_learning_guitar/';
  console.log('Navigating to:', url);
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });

  const title = await page.title();
  console.log('Title:', title);
  console.log('Final URL:', page.url());

  const dir = path.resolve(process.cwd(), '.playwright-session');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  await page.screenshot({ path: path.join(dir, 'screenshot.png'), fullPage: true });
  const html = await page.content();
  fs.writeFileSync(path.join(dir, 'page.html'), html, 'utf-8');

  // Extract text
  const bodyText = await page.evaluate(() => document.body.innerText);
  fs.writeFileSync(path.join(dir, 'body.txt'), bodyText, 'utf-8');
  console.log('Body length:', bodyText.length);

  await browser.close();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

