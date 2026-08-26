const fs = require('fs');
const files = ['bad-moon-rising','twist-and-shout','wild-thing','la-bamba','knockin-on-heavens-door'];
const required = ['songInfo','difficulty','techniques','sections','equipment','learningPath','relatedSongs','practiceNotes','metadata'];

files.forEach(f => {
  const data = JSON.parse(fs.readFileSync('src/data/songs/' + f + '.json', 'utf8'));
  let missing = required.filter(k => !data[k]);
  let metaMissing = ['popularity','dateAdded','featured','decade'].filter(k => data.metadata[k] === undefined);
  let pracMissing = ['commonMistakes','practiceRoutine','focusAreas','metronomeWork'].filter(k => !data.practiceNotes[k]);
  let lpMissing = ['beginner','intermediate','advanced'].filter(k => !data.learningPath[k]);
  if (missing.length === 0 && metaMissing.length === 0 && pracMissing.length === 0 && lpMissing.length === 0) {
    console.log(f + '.json: ALL REQUIRED FIELDS OK - ' + data.sections.length + ' sections, ' + data.techniques.length + ' techniques');
  } else {
    console.log(f + '.json: MISSING - top:' + missing + ' meta:' + metaMissing + ' practice:' + pracMissing + ' lp:' + lpMissing);
  }
});
