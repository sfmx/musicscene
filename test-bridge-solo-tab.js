// Test specifically for the Bridge/Solo tablature that's not rendering
// "12.6b14 12.6 14.5 12.6h14.6p12.6 7.2 9.3 9.4 |"

const bridgeSoloTab = "12.6b14 12.6 14.5 12.6h14.6p12.6 7.2 9.3 9.4 |";

console.log("=== BRIDGE/SOLO TABLATURE TEST ===");
console.log("Testing:", bridgeSoloTab);
console.log("");

// Test 1: Basic syntax validation
function validateBasicSyntax(notation) {
  console.log("1. BASIC SYNTAX CHECK:");
  
  // Check for valid fret.string patterns
  const basicNotePattern = /\d+\.\d+/g;
  const basicNotes = notation.match(basicNotePattern);
  console.log("   Basic notes found:", basicNotes);
  
  // Check for technique markers
  const bendPattern = /\d+\.\d+b\d+/g;
  const hammerPattern = /\d+\.\d+h\d+\.\d+/g;
  const pulloffPattern = /\d+\.\d+p\d+\.\d+/g;
  
  const bends = notation.match(bendPattern);
  const hammers = notation.match(hammerPattern);
  const pulloffs = notation.match(pulloffPattern);
  
  console.log("   Bends found:", bends);
  console.log("   Hammer-ons found:", hammers);
  console.log("   Pull-offs found:", pulloffs);
  
  return { basicNotes, bends, hammers, pulloffs };
}

// Test 2: AlphaTab specific validation
function testAlphaTabCompatibility(notation) {
  console.log("\n2. ALPHATAB COMPATIBILITY CHECK:");
  
  // Check if all techniques are properly formatted for AlphaTab
  console.log("   Checking bend notation 'b' syntax...");
  console.log("   Checking hammer-on 'h' syntax...");
  console.log("   Checking pull-off 'p' syntax...");
  
  // Test individual components
  const components = notation.split(' ');
  console.log("   Individual components:", components);
  
  components.forEach((comp, index) => {
    if (comp.includes('b')) {
      console.log(`   Component ${index}: "${comp}" - BEND notation`);
    } else if (comp.includes('h')) {
      console.log(`   Component ${index}: "${comp}" - HAMMER-ON notation`);
    } else if (comp.includes('p')) {
      console.log(`   Component ${index}: "${comp}" - PULL-OFF notation`);
    } else if (comp.includes('.')) {
      console.log(`   Component ${index}: "${comp}" - BASIC note`);
    } else {
      console.log(`   Component ${index}: "${comp}" - OTHER (${comp})`);
    }
  });
}

// Test 3: Simplified versions
function createSimplifiedVersions(notation) {
  console.log("\n3. SIMPLIFIED TEST VERSIONS:");
  
  // Version 1: Just the basic notes without techniques
  const basicOnly = "12.6 12.6 14.5 12.6 14.6 12.6 7.2 9.3 9.4 |";
  console.log("   Basic notes only:", basicOnly);
  
  // Version 2: Just the bend
  const bendOnly = "12.6b14 |";
  console.log("   Bend only:", bendOnly);
  
  // Version 3: Just hammer-on + pull-off
  const hammerPullOnly = "12.6h14.6p12.6 |";
  console.log("   Hammer + Pull only:", hammerPullOnly);
  
  // Version 4: Alternative bend syntax
  const altBend = "12.6 b14 |";
  console.log("   Alternative bend syntax:", altBend);
  
  return { basicOnly, bendOnly, hammerPullOnly, altBend };
}

// Test 4: Compare with working examples
function compareWithWorkingExamples() {
  console.log("\n4. COMPARISON WITH WORKING EXAMPLES:");
  
  const workingSimple = "7.2 9.3 9.4 |";
  const workingChord = "7.2 9.3 9.4 2.2 4.3 4.4 |";
  
  console.log("   Working simple:", workingSimple);
  console.log("   Working chord:", workingChord);
  console.log("   Problem tab:   ", bridgeSoloTab);
  
  console.log("\n   Key differences:");
  console.log("   - Problem tab uses fret 12 and 14 (higher frets)");
  console.log("   - Problem tab uses bend notation (b)");
  console.log("   - Problem tab uses hammer-on/pull-off (h/p)");
  console.log("   - Working tabs use only basic fret.string notation");
}

// Run all tests
const syntaxResults = validateBasicSyntax(bridgeSoloTab);
testAlphaTabCompatibility(bridgeSoloTab);
const simplified = createSimplifiedVersions(bridgeSoloTab);
compareWithWorkingExamples();

console.log("\n=== RECOMMENDATIONS ===");
console.log("1. Test the simplified versions in Storybook");
console.log("2. Check if AlphaTab supports bend notation 'b'");
console.log("3. Check if hammer-on 'h' and pull-off 'p' syntax is correct");
console.log("4. Try alternative notation formats");
console.log("5. Check AlphaTab documentation for technique notation");

console.log("\n=== NEXT STEPS ===");
console.log("Create a Storybook story to test these variations:");
console.log(`- Basic: "${simplified.basicOnly}"`);
console.log(`- Bend: "${simplified.bendOnly}"`);
console.log(`- Hammer/Pull: "${simplified.hammerPullOnly}"`);
console.log(`- Original: "${bridgeSoloTab}"`);
