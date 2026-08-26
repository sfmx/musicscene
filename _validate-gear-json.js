const fs = require('fs');
const path = require('path');

const categories = ['effects', 'recording', 'accessories'];
const files = {
  effects: ['overdrive','distortion','fuzz','chorus','delay','reverb','wah','compressor','tremolo'],
  recording: ['interfaces','microphones','daw','monitors-headphones','preamps','cables'],
  accessories: ['picks','capos','tuners','straps','cables','cases','stands','slides','metronomes']
};

const required = ['slug','category','pageTitle','subtitle','heroGradient','backLink','introduction','sections'];
let issues = [];
let count = 0;

for (const cat of categories) {
  for (const f of files[cat]) {
    const fp = path.join('src/data/gear-lessons', cat, f + '.json');
    count++;
    const data = JSON.parse(fs.readFileSync(fp, 'utf8'));

    for (const field of required) {
      if (data[field] === undefined) {
        issues.push(fp + ' missing: ' + field);
      }
    }

    if (data.backLink) {
      if (!data.backLink.href || !data.backLink.label) {
        issues.push(fp + ' backLink missing href or label');
      }
    }

    if (data.introduction && !data.introduction.text) {
      issues.push(fp + ' introduction missing text');
    }

    if (!Array.isArray(data.sections) || data.sections.length === 0) {
      issues.push(fp + ' sections is empty or not array');
    }

    if (Array.isArray(data.sections)) {
      data.sections.forEach((s, i) => {
        if (!s.title) issues.push(fp + ' section[' + i + '] missing title');
        if (!s.layout) issues.push(fp + ' section[' + i + '] missing layout');

        // Validate layout value
        const validLayouts = ['grid-2', 'grid-3', 'grid-4', 'list', 'numbered-steps', 'table'];
        if (s.layout && !validLayouts.includes(s.layout)) {
          issues.push(fp + ' section[' + i + '] invalid layout: ' + s.layout);
        }

        // Table sections should have tableHeaders and tableRows
        if (s.layout === 'table') {
          if (!Array.isArray(s.tableHeaders)) {
            issues.push(fp + ' section[' + i + '] table layout missing tableHeaders');
          }
          if (!Array.isArray(s.tableRows)) {
            issues.push(fp + ' section[' + i + '] table layout missing tableRows');
          }
        }
      });
    }

    // Verify slug matches expected pattern
    const expectedSlug = cat + '-' + f;
    if (data.slug !== expectedSlug) {
      issues.push(fp + ' slug mismatch: got "' + data.slug + '" expected "' + expectedSlug + '"');
    }
  }
}

if (issues.length === 0) {
  console.log('All ' + count + ' detail files pass structural validation.');
} else {
  console.log('Issues found (' + issues.length + '):');
  issues.forEach(i => console.log('  -', i));
}
