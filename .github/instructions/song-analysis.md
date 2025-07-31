---
applyTo: "src/app/lessons/songs/song-analysis/**/*.tsx"
---

# Song Analysis Process Instructions

## Process Prompt

**Use this prompt to initiate the song analysis creation or migration process:**

```
I need to [create a new song analysis / migrate an existing song analysis] for "[SONG TITLE]" by [ARTIST]. 

For new songs: Please guide me through the complete song analysis creation process, starting with research and reference material gathering, through to JSON schema-compliant data creation, AlphaTab notation implementation, and final page generation using our standardized components.

For existing songs: Please guide me through the migration process to ensure the page is schema-compliant, uses our standardized components, and has been converted from VexTab to AlphaTab notation.

The song analysis should be valuable for both budding guitarists and professional musicians, with accurate technical information, progressive learning paths, and proper musical notation.
```

## Target Audience Segmentation

### Primary Segments

#### **1. Developing Guitarists (Beginner to Intermediate)**

**Sub-segments:**
- **Absolute Beginners (0-6 months)**: Just picked up a guitar, learning basic chords
- **Developing Players (6 months - 2 years)**: Can play basic songs, want to learn favorites
- **Intermediate Students (2-5 years)**: Solid fundamentals, ready for technique challenges

**Shared Characteristics:**
- Learn best through songs they already love and know
- Need clear, step-by-step progression to avoid overwhelm
- Visual learners who benefit from diagrams and notation
- Want to avoid developing bad habits early
- Motivated by measurable progress and achievement

**Pain Points:**
- "I can play basic chords but this song seems impossible"
- "I'm playing it but it doesn't sound right"
- "I don't know which techniques to learn next"
- "The tabs online are confusing or inaccurate"

**Success Metrics:**
- Can successfully play through entire song at target tempo
- Demonstrates proper technique without bad habits
- Understands why techniques work (not just how)
- Can apply learned techniques to similar songs

#### **2. Advanced Players & Music Professionals**

**Sub-segments:**
- **Advanced Hobbyists**: 5+ years experience, want to master challenging material
- **Music Instructors**: Teaching guitar, need reliable reference material
- **Working Musicians**: Performing/recording, need accurate arrangements
- **Music Students**: Formal education, analyzing songs for theory/technique

**Shared Characteristics:**
- Value technical accuracy and authoritative sources
- Need efficient access to detailed information
- Want professional-grade analysis and insights
- Appreciate equipment specifications and tone details
- Use content for teaching or performance preparation

**Pain Points:**
- "The tabs online are simplified or wrong"
- "I need the actual amp settings and effects used"
- "My students need better structured learning material"
- "I need to learn this song quickly for a gig"

**Success Metrics:**
- Achieves professional-quality performance accuracy
- Successfully teaches techniques to students
- Adapts arrangements for different contexts (live/studio)
- Understands musical theory and harmonic analysis

## Process Decision Tree

```
START: Song Analysis Request
├── Existing Song Analysis Page?
│   ├── YES → Follow "Migration Process" (Steps A1-A5)
│   └── NO → Follow "New Song Creation Process" (Steps B1-B7)
```

## Migration Process (Existing Pages)

### Step A1: Content Audit
- [ ] Validate current content against JSON schema
- [ ] Identify VexTab → AlphaTab conversion requirements
- [ ] Document current component usage gaps
- [ ] List missing required schema fields

### Step A2: Data Extraction
- [ ] Extract existing content to JSON format
- [ ] Create/update internal reference tab file
- [ ] Cross-reference with multiple sources for accuracy
- [ ] Document research sources in _research_notes

### Step A3: Schema Compliance
- [ ] Ensure JSON structure matches song-analysis.schema.json
- [ ] Add all missing required fields
- [ ] Standardize data formats (difficulty levels, time stamps, etc.)
- [ ] Validate JSON syntax and schema compliance

### Step A4: Component Migration
- [ ] Replace custom implementations with standardized components
- [ ] Convert VexTab notation to AlphaTab format
- [ ] Update chord diagrams using SimpleFretboardDiagram
- [ ] Implement responsive layouts

### Step A5: Validation & Testing
- [ ] Run automated schema validation
- [ ] Verify component rendering in Storybook
- [ ] Cross-reference accuracy with internal reference tabs
- [ ] Test responsive design on multiple devices

## New Song Creation Process

### Step B1: Research & Reference Creation
- [ ] **Follow the comprehensive research guide**: `.github/instructions/song-analysis/song-analysis-research-and-references.md`
- [ ] **Use primary sources only**: Guitar World, Songsterr, TabsGuru, 911Tabs (Ultimate Guitar as fallback only)
- [ ] **Create research summary**: `src/data/songs/_research_notes/[song-slug]-research.md`
- [ ] **Create internal reference tab**: `src/data/songs/_reference-tabs/[song-slug].tab`
- [ ] **Cross-verify all technical details** (tempo, key, tuning) across minimum 3 sources
- [ ] **Document equipment specifications** from authoritative interviews/sources
- [ ] **Test all source links** for accessibility and accuracy

### Step B2: JSON Data File Creation
- [ ] **Create new JSON file**: `src/data/songs/[song-slug].json` (start from scratch or copy template)
- [ ] **Reference the research summary** for all song metadata and technical details
- [ ] **Cross-reference internal tab file** for accuracy verification
- [ ] **Structure according to schema**: `src/schemas/song-analysis.schema.json`
- [ ] **Fill all required fields** per schema requirements:
  - `songInfo` (title, artist, album, released, genre, key - all required)
  - `difficulty` (overall required, rhythmGuitar, leadGuitar, bass, drums optional)
  - `techniques` (array with name, description, difficulty required)
  - `sections` (array with name, description required)
  - `equipment`, `learningPath`, `relatedSongs`, `practiceNotes` (all required objects)
- [ ] **Validate JSON syntax and schema compliance** using VS Code or online validator
- [ ] **Cross-verify technical accuracy** against internal reference tab file

#### Schema Validation Process (from Step A3)
- [ ] **Ensure JSON structure matches** `song-analysis.schema.json` exactly
- [ ] **Validate all required fields** are present and properly formatted
- [ ] **Standardize data formats**:
  - Difficulty levels: "Beginner", "Intermediate", "Advanced", "Expert"
  - Time stamps: "MM:SS-MM:SS" format
  - Chord names: Standard notation (e.g., "B5", "E5", "F#5")
- [ ] **Test JSON parsing** in development environment

### Step B3: AlphaTab Notation Conversion
- [ ] **Reference AlphaTab test cases**: `src/components/stories/AlphaTexRenderer.stories.tsx`
- [ ] **Convert signature riffs** from ASCII tabs to AlphaTab format
- [ ] **Convert chord progressions** using AlphaTab chord notation
- [ ] **Convert strumming patterns** using AlphaTab rhythm notation
- [ ] **Convert key techniques** (power chords, palm muting, etc.)
- [ ] **Test all AlphaTab notation** in SimpleAlphaTab component
- [ ] **Validate rendering** in Storybook before integration

#### AlphaTab Conversion Guidelines

**Basic Note Conversion:**
- ASCII: `e|--3--5--7--|` → AlphaTab: `3.6 5.5 7.4 |`
- Fret number.string number format
- String numbers: 6=high E, 5=B, 4=G, 3=D, 2=A, 1=low E

**Chord Conversion:**
- ASCII Power Chord: `e|-----|B|-----|G|--9--|D|--9--|A|--7--|E|-----|` 
- AlphaTab: `(7.2 9.3 9.4).4 |` (fret.string format in parentheses)

**Rhythm Notation:**
- Quarter note: `.4` 
- Eighth note: `.8`
- Half note: `.2`
- Whole note: `.1`

**Common Techniques:**
- **Palm Muting**: Add `\dead` before notes
- **Hammer-on**: `3.6h5.6` (3rd fret hammer to 5th fret, 6th string)
- **Pull-off**: `5.6p3.6` (5th fret pull to 3rd fret, 6th string)
- **Bend**: `7.3b9` (7th fret bend to 9th fret pitch)

**Reference Examples from Stories:**
```typescript
// Basic notation
alphaTex: '3.6 5.5 7.4 |'

// Open string chord  
alphaTex: '(0.3 0.4).4 |'

// Chord progression
alphaTex: '(0.2 2.3 2.4).4 (3.2 0.3 0.4).4 |'
```

### Step B4: Page Generation
- [ ] Create song directory: `src/app/lessons/songs/song-analysis/[song-slug]/`
- [ ] Copy and customize page template
- [ ] Configure component mapping and props
- [ ] Set up proper routing and metadata

### Step B5: Component Integration
- [ ] **Use existing component architecture**: `src/components/SongAnalysis/`
- [ ] **Page template**: Copy `SongAnalysis/_page-template.tsx` to song directory
- [ ] **Component mapping**: Ensure all required sections have corresponding components
- [ ] **Integrate SimpleAlphaTab.tsx** for AlphaTab notation rendering
- [ ] **Integrate SimpleFretboardDiagram.tsx** for chord diagrams
- [ ] **Configure responsive layouts** using existing component grid system
- [ ] **Test component rendering** in isolation before page integration

#### Required Component Structure

**Core Page Components:**
```typescript
// Main page template (copy and customize)
SongAnalysisPageTemplate.tsx

// Section components (ensure all exist)
SongInfoHeader.tsx          // Song metadata and difficulty ratings
TechniquesSection.tsx       // Technique breakdowns with chord diagrams  
SongSections.tsx           // Song structure with AlphaTab notation
EquipmentSection.tsx       // Gear recommendations and settings
LearningPathSection.tsx    // Progressive skill development
PracticeNotesSection.tsx   // Practice guidance and common mistakes
RelatedSongsSection.tsx    // Cross-references to similar songs
```

**Visual Components Integration:**
```typescript
// AlphaTab notation (use for signature riffs, chord progressions)
import SimpleAlphaTab from '@/components/SimpleAlphaTab';

// Chord diagrams (use for technique examples, song sections)
import SimpleFretboardDiagram from '@/components/SimpleFretboardDiagram';

// Usage examples:
<SimpleAlphaTab 
  title="Main Riff"
  alphaTex="3.6 5.5 7.4 |"
  showValidation={false}
/>

<SimpleFretboardDiagram 
  chord="B5"
  frets={[null, 2, 4, 4, null, null]}
  fingers={[0, 1, 3, 4, 0, 0]}
/>
```

**Component Responsibilities:**

1. **SongInfoHeader**
   - Display song metadata from JSON
   - Show difficulty ratings with color coding
   - Responsive layout for all device sizes

2. **TechniquesSection** 
   - List all techniques from JSON with descriptions
   - **Auto-generate chord diagrams** when `chords` array present in technique details
   - **Use SimpleFretboardDiagram** for visual chord representations
   - Show difficulty levels and learning tips

3. **SongSections**
   - Display song structure (intro, verse, chorus, etc.)
   - **Integrate SimpleAlphaTab** for musical notation
   - **Auto-generate chord diagrams** for section chord progressions
   - Show timing information and performance notes

4. **Component Integration Checklist:**
   - [ ] All section components render without errors
   - [ ] SimpleAlphaTab renders all notation correctly
   - [ ] SimpleFretboardDiagram shows all chord shapes accurately
   - [ ] Responsive design works on mobile, tablet, desktop
   - [ ] Data flows correctly from JSON to components
   - [ ] Error handling for missing data
   - [ ] Loading states for heavy notation rendering

### Step B6: Content Review
- [ ] Technical accuracy verification against reference materials
- [ ] Educational content quality review
- [ ] Cross-reference links with existing song analyses
- [ ] Spell check and grammar review

### Step B7: Publication & Integration
- [ ] Add song to data registry (`src/lib/songData.ts`)
- [ ] Update navigation menus and indexes
- [ ] Create links in related song analyses
- [ ] Test full user journey from discovery to learning

## Research Artifacts Required

### src/data/songs/_reference-tabs/[song-slug].tab
**Purpose**: Internal accuracy reference for technical validation
**Content**: 
- Accurate tablature from verified primary sources (Guitar World, Songsterr, TabsGuru)
- Key, tempo, tuning information
- Main riffs and chord progressions
- Technical notes and timing markers

### src/data/songs/_research_notes/[song-slug]-research.md
**Purpose**: Document research process and source validation
**Content**:
- Primary source URLs and quality ratings (Guitar World, Songsterr, TabsGuru, 911Tabs)
- Cross-reference notes between sources
- Equipment research from official interviews/sources
- Technical accuracy verification notes
- Any discrepancies found and resolution decisions

### src/data/songs/[song-slug].json
**Purpose**: Schema-compliant data for page generation
**Content**:
- All required fields per song-analysis.schema.json
- AlphaTab notation in appropriate sections
- Progressive difficulty breakdowns
- Equipment specifications and alternatives
- Practice routines and learning paths

## Quality Assurance Requirements

### Automated Validation
- [ ] JSON schema validation passes
- [ ] TypeScript compilation successful
- [ ] Component tests pass in Jest
- [ ] Storybook renders without errors

### Content Quality Gates
- [ ] All required schema fields populated
- [ ] AlphaTab notation renders correctly
- [ ] Chord diagrams display properly
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Educational progression is logical and complete

### Technical Accuracy Standards
- [ ] Cross-referenced with at least 2 high-quality sources
- [ ] Internal reference tab matches published content
- [ ] Equipment recommendations are current and accurate
- [ ] Difficulty ratings are consistent with similar songs

## Next Steps for Process Refinement

### ✅ COMPLETED Areas:

1. **✅ Step B1 (Research & Reference Creation)** - Comprehensive research guide created in `docs/song-analysis-research-and-references.md`
2. **✅ Step B3 (AlphaTab Notation)** - Conversion guidelines added with examples from Storybook test cases
3. **✅ Component Integration Specifics** - Detailed component architecture and integration guide

### 🔄 REMAINING Priority Areas for Detailed Definition:

4. **Quality Automation Pipeline** - Specify automated validation commands and pass/fail criteria
5. **Content Strategy Implementation** - Layered information architecture for different skill levels
6. **Migration Process Refinement** - Detailed VexTab → AlphaTab conversion for existing pages

### Immediate Action Items:

- [x] ✅ Define detailed B1 research methodology
- [x] ✅ Create AlphaTab conversion guidelines for B3  
- [x] ✅ Document component integration patterns
- [ ] 🔄 Establish automated validation pipeline (JSON schema, TypeScript, Jest, Storybook)
- [ ] 🔄 Test complete process with a sample song creation
- [ ] 🔄 Refine migration process for existing pages (A1-A5)

### Process Readiness Assessment:

**✅ Ready for Autonomous Execution:**
- Research and reference creation (B1)
- AlphaTab notation conversion (B3)  
- Component integration (B5)
- Page generation workflow (B4)

**🔄 Needs Additional Definition:**
- Automated quality validation pipeline
- Complete migration workflow for existing pages
- Content layering strategy for different skill levels

### Testing Protocol:

**Next Steps**: Test the complete process with a sample song:
1. Execute: `"Follow the instructions in #file:song-analysis.md to create a page for 'Hurt So Good' by John Cougar Mellencamp"`
2. Identify any gaps or unclear instructions
3. Refine process based on real execution results
4. Establish quality validation automation
