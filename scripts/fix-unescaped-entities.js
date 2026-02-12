#!/usr/bin/env node

/**
 * Script to fix unescaped entities in JSX files
 * Replaces ' with &apos; and " with &quot; in JSX text content only
 */

const fs = require('fs');
const path = require('path');

// Get list of files from lint output passed as argument or from stdin
const lintOutput = process.argv[2];

if (!lintOutput) {
  console.error('Usage: node fix-unescaped-entities.js <lint-output-file>');
  process.exit(1);
}

// Parse lint output to get file:line:column info
const lines = fs.readFileSync(lintOutput, 'utf-8').split('\n');

let currentFile = null;
const fixes = new Map(); // Map<filePath, Array<{line, col, char}>>

for (const line of lines) {
  // Match file path lines like "./src/app/lessons/gear/accessories/cables/page.tsx"
  const fileMatch = line.match(/^\.\/(.+\.tsx?)$/);
  if (fileMatch) {
    currentFile = fileMatch[1];
    if (!fixes.has(currentFile)) {
      fixes.set(currentFile, []);
    }
    continue;
  }
  
  // Match error lines like "152:81  Error: `'` can be escaped..."
  const errorMatch = line.match(/^(\d+):(\d+)\s+Error:\s+`(['""])` can be escaped/);
  if (errorMatch && currentFile) {
    const lineNum = parseInt(errorMatch[1], 10);
    const colNum = parseInt(errorMatch[2], 10);
    const char = errorMatch[3];
    fixes.get(currentFile).push({ line: lineNum, col: colNum, char });
  }
}

console.log(`Found ${fixes.size} files with fixes needed`);

let totalFixed = 0;
let filesFixed = 0;

for (const [filePath, fileFixList] of fixes) {
  const fullPath = path.join(process.cwd(), filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.warn(`File not found: ${fullPath}`);
    continue;
  }
  
  const content = fs.readFileSync(fullPath, 'utf-8');
  const contentLines = content.split('\n');
  
  // Sort fixes by line desc, then column desc (to process from end to start)
  fileFixList.sort((a, b) => {
    if (a.line !== b.line) return b.line - a.line;
    return b.col - a.col;
  });
  
  let fixCount = 0;
  
  for (const fix of fileFixList) {
    const lineIdx = fix.line - 1;
    if (lineIdx >= contentLines.length) continue;
    
    const line = contentLines[lineIdx];
    const colIdx = fix.col - 1;
    
    if (colIdx >= line.length) continue;
    
    const charAtPos = line[colIdx];
    
    // Verify the character matches what we expect
    if (charAtPos !== fix.char) {
      // Sometimes the column is off by one, try nearby
      if (line[colIdx - 1] === fix.char) {
        const replacement = fix.char === "'" ? '&apos;' : '&quot;';
        contentLines[lineIdx] = line.slice(0, colIdx - 1) + replacement + line.slice(colIdx);
        fixCount++;
      } else if (line[colIdx + 1] === fix.char) {
        const replacement = fix.char === "'" ? '&apos;' : '&quot;';
        contentLines[lineIdx] = line.slice(0, colIdx + 1) + replacement + line.slice(colIdx + 2);
        fixCount++;
      }
      continue;
    }
    
    const replacement = fix.char === "'" ? '&apos;' : '&quot;';
    contentLines[lineIdx] = line.slice(0, colIdx) + replacement + line.slice(colIdx + 1);
    fixCount++;
  }
  
  if (fixCount > 0) {
    fs.writeFileSync(fullPath, contentLines.join('\n'));
    console.log(`Fixed ${fixCount} issues in ${filePath}`);
    totalFixed += fixCount;
    filesFixed++;
  }
}

console.log(`\nTotal: Fixed ${totalFixed} issues in ${filesFixed} files`);
