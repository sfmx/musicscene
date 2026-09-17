import fs from 'fs';

const content = fs.readFileSync('src/lib/alphaTexValidator.ts', 'utf8');
const lines = content.split('\n');

let braceDepth = 0;
let parenDepth = 0;

for (let i = 0; i < Math.min(110, lines.length); i++) {
  const line = lines[i];
  for (const ch of line) {
    if (ch === '{') braceDepth++;
    if (ch === '}') braceDepth--;
    if (ch === '(') parenDepth++;
    if (ch === ')') parenDepth--;
  }
  console.log(`${(i + 1).toString().padStart(3)}: [B:${braceDepth}, P:${parenDepth}] ${line.trimEnd()}`);
}

