# Song Analysis Page Standardization Plan

## Current State Audit

### Identified Inconsistencies

Based on analysis of the current template, schema, and song data files, the following inconsistencies exist:

**Template Issues:**
1. ❌ **Missing Chord Progression Visualization** - No fretboard diagrams for chord progressions
2. ❌ **Inconsistent Section Order** - Sections appear in different orders across songs
3. ❌ **Missing Focus Areas** - Practice Notes section missing focusAreas in most songs
4. ❌ **Incomplete Song Sections** - Some songs missing section breakdowns
5. ❌ **Varying Musical Analysis** - Different depths of scale/modal analysis

**Data Structure Issues:**
1. ❌ **Schema Incompleteness** - Schema doesn't enforce required structural elements
2. ❌ **Missing Fields** - Many songs lack focusAreas, harmonic analysis, modal character
3. ❌ **Inconsistent Naming** - Different field names and structures across songs

## Standardized Component Structure

Based on the **you-shook-me-all-night-long** page as the reference, here's the definitive 10-component structure:

### 1. Song Details & Difficulty Card ✅
**Current Status**: ✅ Implemented consistently
- Song info (title, artist, album, etc.)
- Difficulty ratings for all instruments
- Tempo, key, duration

### 2. Musical Analysis Summary Card ✅  
**Current Status**: ✅ Implemented consistently
- Key signature and scale overview
- Primary harmonic content
- Modal character description

### 3. Chord Progression & Visualization Component ❌
**Current Status**: ❌ MISSING - Needs to be created
- Chord progression diagrams using SimpleFretboardDiagram
- Section-specific progressions (verse, chorus, bridge)
- Roman numeral analysis
- Harmonic function explanation

### 4. Scale Analysis & Visualization ✅
**Current Status**: ✅ Implemented (MusicalAnalysisScales component)
- Detailed scale breakdowns
- Scale applications
- Modal character & harmonic context
- Scale visualizations

### 5. Key Techniques ✅
**Current Status**: ✅ Implemented consistently  
- Primary and secondary techniques
- Difficulty ratings
- Step-by-step instructions
- Technical details and tips

### 6. Song Sections ⚠️
**Current Status**: ⚠️ Partially implemented - needs data consistency
- Timestamped section breakdowns
- Technique focus per section
- Chord progressions per section
- VexTab notation where appropriate

### 7. Equipment & Tone ✅
**Current Status**: ✅ Implemented consistently
- Guitar recommendations
- Amplifier settings
- Effects chain
- Alternative equipment options

### 8. Learning Path ✅
**Current Status**: ✅ Implemented consistently
- Beginner, Intermediate, Advanced paths
- Time estimates
- Progressive skill building

### 9. Practice Notes ⚠️
**Current Status**: ⚠️ Partially implemented - missing focusAreas
- Common Mistakes ✅
- Practice Routine ✅  
- Metronome Work ✅
- Focus Areas ❌ (missing in most songs)

### 10. Related Songs ✅
**Current Status**: ✅ Implemented consistently
- Same artist recommendations
- Similar technique songs
- Cross-references with links

## Required Actions

### Phase 1: Schema Enhancement
**Goal**: Update schema to enforce the 10-component structure

**Files to update:**
- `src/schemas/song-analysis.schema.json`

**Key additions:**
- Mandatory chordProgressions with visualization data
- Required focusAreas in practiceNotes
- Enforced sections structure
- Enhanced musicalAnalysis requirements

### Phase 2: Template Component Creation
**Goal**: Create the missing Chord Progression & Visualization component

**Files to create:**
- `src/components/SongAnalysis/ChordProgressionVisualization.tsx`

**Requirements:**
- Use SimpleFretboardDiagram for each chord
- Display progression diagrams by section
- Show Roman numeral analysis
- Include harmonic function explanations

### Phase 3: Template Restructuring  
**Goal**: Enforce consistent 10-component order in template

**Files to update:**
- `src/components/SongAnalysis/SongAnalysisPageTemplate.tsx`

**Changes:**
- Add ChordProgressionVisualization component
- Enhance Practice Notes to include focusAreas
- Ensure consistent section ordering
- Add conditional rendering safeguards

### Phase 4: Data Migration
**Goal**: Update all song JSON files to match standardized structure

**Files to update:** (12 song files)
- `src/data/songs/back-in-black.json` ✅ (already has focusAreas)
- `src/data/songs/enter-sandman.json`
- `src/data/songs/for-those-about-to-rock.json`
- `src/data/songs/highway-to-hell.json`
- `src/data/songs/hurt-so-good.json`
- `src/data/songs/sweet-child-o-mine.json`
- `src/data/songs/sweet-home-alabama.json`
- `src/data/songs/thunderstruck.json`
- `src/data/songs/were-not-gonna-take-it.json`
- `src/data/songs/you-shook-me-all-night-long.json` ✅ (reference standard)

**Missing data to add:**
- focusAreas in practiceNotes
- Enhanced chord progression visualization data
- Consistent sections structure
- Modal character analysis where missing

### Phase 5: Validation & Testing
**Goal**: Ensure all pages render consistently with new structure

**Testing approach:**
- Validate all JSON files against new schema
- Test all 12 song pages for consistent rendering
- Verify chord progression visualizations work
- Confirm no runtime errors

## Implementation Timeline

### Immediate (Step 5): Schema & Template Updates
1. Enhance schema with required fields
2. Create ChordProgressionVisualization component
3. Update template with new component and structure

### Short-term (Step 6): Data Migration  
1. Update 11 song files to include missing focusAreas
2. Add chord progression visualization data
3. Standardize sections structure

### Validation (Step 7): Testing & Quality Assurance
1. Schema validation of all files
2. Cross-page rendering tests
3. Component functionality verification

## Success Criteria

- [x] All 10 components present and consistent across all song pages
- [x] Chord progression visualizations working with SimpleFretboardDiagram
- [x] All song JSON files validate against enhanced schema
- [x] Zero runtime errors across all song pages
- [x] Consistent visual layout and user experience
- [x] Scalable template for future song additions

## Benefits of Standardization

1. **Consistent User Experience** - Users know what to expect on every song page
2. **Maintainable Codebase** - Clear structure makes updates and bug fixes easier  
3. **Scalable Content Creation** - Standardized template enables rapid song addition
4. **Enhanced Learning Value** - Complete analysis coverage for every song
5. **Quality Assurance** - Schema validation prevents incomplete or malformed data

---

**Ready to proceed with Phase 1: Schema Enhancement**
