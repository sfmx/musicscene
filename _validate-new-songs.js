const fs = require('fs');
const files = ['hotel-california','paranoid','iron-man','paint-it-black','satisfaction'];
files.forEach(f => {
  const d = JSON.parse(fs.readFileSync('c:/Source/musicscene/src/data/songs/' + f + '.json'));
  const required = ['songInfo','difficulty','musicalAnalysis','techniques','sections','equipment','learningPath','relatedSongs','practiceNotes','metadata'];
  const missing = required.filter(k => !(k in d));
  console.log(f + ': ' + (missing.length ? 'MISSING ' + missing.join(',') : 'ALL sections present'));
  console.log('  techniques: ' + d.techniques.length + ' | sections: ' + d.sections.length);
  console.log('  practiceNotes keys: ' + Object.keys(d.practiceNotes).join(', '));
  console.log('  learningPath keys: ' + Object.keys(d.learningPath).join(', '));
  console.log('  metadata.popularity: ' + d.metadata.popularity + ' | featured: ' + d.metadata.featured + ' | decade: ' + d.metadata.decade + ' | iconicRiff: ' + d.metadata.iconicRiff);
  console.log('  tags: ' + d.metadata.tags.join(', '));
  console.log('');
});
