import fs from 'fs';
import path from 'path';

const OUT_DIR = path.resolve('out');

function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getAllHtmlFiles(fullPath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const htmlFiles = getAllHtmlFiles(OUT_DIR);

// Build map of valid routes from out/
const validRoutes = new Set();
for (const file of htmlFiles) {
  let rel = path.relative(OUT_DIR, file).replace(/\\/g, '/');
  if (rel === 'index.html') {
    validRoutes.add('/');
  } else if (rel.endsWith('/index.html')) {
    validRoutes.add('/' + rel.slice(0, -'index.html'.length));
    validRoutes.add('/' + rel.slice(0, -'/index.html'.length));
  } else if (rel.endsWith('.html')) {
    validRoutes.add('/' + rel.slice(0, -'.html'.length));
    validRoutes.add('/' + rel.slice(0, -'.html'.length) + '/');
  }
}
// Also add root
validRoutes.add('/');

console.log(`Indexed ${validRoutes.size} route variations across ${htmlFiles.length} files.`);

// Link regex: <a\s+[^>]*href=["']([^"']+)["']
const linkRegex = /<a\s+[^>]*href=["']([^"']+)["']/gi;

const brokenLinks = [];
const stylingIssues = [];

for (const filePath of htmlFiles) {
  const content = fs.readFileSync(filePath, 'utf8');
  let relPath = path.relative(OUT_DIR, filePath).replace(/\\/g, '/');
  let route = relPath === 'index.html' ? '/' : '/' + relPath.replace(/\/index\.html$/, '/').replace(/\.html$/, '/');

  // Skip 404.html from broken link origin
  if (relPath.includes('404')) continue;

  // 1. Check Links
  let match;
  linkRegex.lastIndex = 0;
  while ((match = linkRegex.exec(content)) !== null) {
    const href = match[1];
    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('#') || href.startsWith('javascript:')) {
      continue;
    }
    
    // Normalize target url (strip hash, query params)
    let cleanHref = href.split('?')[0].split('#')[0];
    if (!cleanHref) continue; // hash only

    // Relative links vs absolute
    let target = cleanHref;
    if (!target.startsWith('/')) {
      // relative to current route
      target = path.posix.join(route, target);
    }
    // Check if target or target + '/' is valid or is an existing static asset in out/
    const targetWithSlash = target.endsWith('/') ? target : target + '/';
    const targetWithoutSlash = target.endsWith('/') ? target.slice(0, -1) : target;
    const staticFilePath = path.join(OUT_DIR, target.replace(/^\//, ''));

    if (!validRoutes.has(target) && !validRoutes.has(targetWithSlash) && !validRoutes.has(targetWithoutSlash) && !fs.existsSync(staticFilePath)) {
      brokenLinks.push({
        sourcePage: route,
        href,
        resolvedTarget: target
      });
    }
  }

  // 2. Check for suspicious hardcoded dark styling in light mode
  // e.g. class="..." containing bg-slate-950 or bg-slate-900 or bg-black without dark:
  // We can look at class attributes
  const classRegex = /class="([^"]*)"/gi;
  let classMatch;
  while ((classMatch = classRegex.exec(content)) !== null) {
    const classStr = classMatch[1];
    if (classStr.includes('pointer-events-none') || classStr.includes('tooltip') || classStr.includes('guitar') || classStr.includes('fretboard')) {
      continue;
    }
    const tokens = classStr.split(/\s+/);
    const hasDarkBgVariant = tokens.some(tok => tok.startsWith('dark:bg-'));
    const hasLightVariant = tokens.some(tok => tok.startsWith('dark:text-') || tok.startsWith('dark:border-'));

    // Check for hardcoded dark background without dark: counterpart
    for (const t of tokens) {
      if ((t === 'bg-slate-950' || t === 'bg-slate-900' || t === 'bg-gray-900' || t === 'bg-gray-950') && !hasDarkBgVariant) {
        // Exclude intentionally dark banners/callouts (e.g. LeadMagnet, dark heroes)
        if (!classStr.includes('gradient') && !classStr.includes('rounded-3xl') && !classStr.includes('shadow-2xl')) {
          stylingIssues.push({
            page: route,
            issue: `Hardcoded dark background without dark: counterpart: '${t}' in: ${classStr.slice(0, 100)}`
          });
        }
      }

      // Check for hardcoded light bg without dark: variant
      if ((t === 'bg-white' || t === 'bg-slate-50' || t === 'bg-gray-50') && !hasDarkBgVariant) {
        // Exclude elements inside naturally light or embedded components
        if (!classStr.includes('gradient') && !classStr.includes('badge')) {
          stylingIssues.push({
            page: route,
            issue: `Hardcoded light background without dark: alternative: '${t}' in: ${classStr.slice(0, 100)}`
          });
        }
      }
    }
  }
}

console.log(`\n================================`);
console.log(`AUDIT RESULTS:`);
console.log(`Total broken link occurrences: ${brokenLinks.length}`);
console.log(`Total styling issue occurrences: ${stylingIssues.length}`);
console.log(`================================\n`);

// Deduplicate broken links
const uniqueBrokenLinks = {};
for (const bl of brokenLinks) {
  const key = `${bl.sourcePage} -> ${bl.href} (${bl.resolvedTarget})`;
  uniqueBrokenLinks[key] = (uniqueBrokenLinks[key] || 0) + 1;
}

console.log(`Unique Broken Links (${Object.keys(uniqueBrokenLinks).length}):`);
for (const [link, count] of Object.entries(uniqueBrokenLinks)) {
  console.log(`  [x${count}] ${link}`);
}

// Group styling issues by issue type & component pattern
const issuePatterns = {};
for (const si of stylingIssues) {
  // extract key identifier
  const match = si.issue.match(/in:\s*(.*)$/);
  const snippet = match ? match[1] : si.issue;
  if (!issuePatterns[snippet]) {
    issuePatterns[snippet] = { count: 0, pages: [] };
  }
  issuePatterns[snippet].count++;
  if (issuePatterns[snippet].pages.length < 3) {
    issuePatterns[snippet].pages.push(si.page);
  }
}

console.log(`\nStyling Issue Patterns (${Object.keys(issuePatterns).length}):`);
for (const [pattern, data] of Object.entries(issuePatterns)) {
  console.log(`  [x${data.count}] ${pattern} (e.g. on ${data.pages.join(', ')})`);
}

