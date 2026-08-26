const fs = require('fs');
const path = require('path');

const files = ['perfect-5th', 'minor-6th', 'major-6th', 'minor-7th'];
const baseDir = path.join(__dirname, 'src/data/intervals');

files.forEach(slug => {
  const filePath = path.join(baseDir, `${slug}.json`);
  const content = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(content);

  // Fix intervalExamples.examples: GuitarExample interface
  // caption -> description, colorSubtitle -> colorText, colorCaption -> colorDetail
  if (data.guitarApplications && data.guitarApplications.intervalExamples && data.guitarApplications.intervalExamples.examples) {
    data.guitarApplications.intervalExamples.examples = data.guitarApplications.intervalExamples.examples.map(ex => {
      const fixed = {};
      for (const [key, value] of Object.entries(ex)) {
        if (key === 'caption') fixed['description'] = value;
        else if (key === 'colorSubtitle') fixed['colorText'] = value;
        else if (key === 'colorCaption') fixed['colorDetail'] = value;
        else fixed[key] = value;
      }
      return fixed;
    });
  }

  // Fix chordConstructions.items: ChordConstruction interface
  // alphaTexCaption -> alphaTexDescription, colorCaption -> colorDetail
  if (data.guitarApplications && data.guitarApplications.chordConstructions && data.guitarApplications.chordConstructions.items) {
    data.guitarApplications.chordConstructions.items = data.guitarApplications.chordConstructions.items.map(item => {
      const fixed = {};
      for (const [key, value] of Object.entries(item)) {
        if (key === 'alphaTexCaption') fixed['alphaTexDescription'] = value;
        else if (key === 'colorCaption') fixed['colorDetail'] = value;
        else fixed[key] = value;
      }
      return fixed;
    });
  }

  // Fix fretboardPatterns: FretboardPattern interface
  // alphaTexCaption -> alphaTexDescription, remove subtitle, remove colorCaption
  if (data.guitarApplications && data.guitarApplications.fretboardPatterns) {
    data.guitarApplications.fretboardPatterns = data.guitarApplications.fretboardPatterns.map(pattern => {
      const fixed = {};
      for (const [key, value] of Object.entries(pattern)) {
        if (key === 'alphaTexCaption') fixed['alphaTexDescription'] = value;
        else if (key === 'subtitle') continue; // not in FretboardPattern interface
        else if (key === 'colorCaption') continue; // not in FretboardPattern interface
        else fixed[key] = value;
      }
      return fixed;
    });
  }

  // Fix journeySection.links: JourneyLink interface
  // actionText -> linkText, colorBg -> iconBg, colorBgHover -> iconHoverBg,
  // colorBorder -> hoverBorder, colorText -> linkColor, colorTextHover -> linkHoverColor
  if (data.journeySection && data.journeySection.links) {
    data.journeySection.links = data.journeySection.links.map(link => {
      const fixed = {};
      for (const [key, value] of Object.entries(link)) {
        if (key === 'actionText') fixed['linkText'] = value;
        else if (key === 'colorBg') fixed['iconBg'] = value;
        else if (key === 'colorBgHover') fixed['iconHoverBg'] = value;
        else if (key === 'colorBorder') fixed['hoverBorder'] = value;
        else if (key === 'colorText') fixed['linkColor'] = value;
        else if (key === 'colorTextHover') fixed['linkHoverColor'] = value;
        else fixed[key] = value;
      }
      return fixed;
    });
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
  console.log(`Fixed field names in: ${slug}.json`);
});

console.log('\nAll 4 interval JSON files updated with correct field names!');
