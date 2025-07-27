# Song Analysis Page Conversion/Creation Prompt

## 🔗 COMPLETE WORKFLOW REFERENCE

**⚠️ IMPORTANT:** For the complete, detailed workflow, see:
**`docs/song-conversion-master-prompt.md`**

This file contains the comprehensive, step-by-step instructions with all requirements, common errors, and success criteria.

## 📋 QUICK CHECKLIST

### Essential Steps (In Order):
1. **Create internal reference tab file** (Ultimate Guitar research required)
2. **Create JSON data file** using template (verify with reference tab)
3. **Create page component** using exact template format
4. **Update data registry** (songData.ts imports and mappings)
5. **Validate everything** (TypeScript, build, lint, runtime)

### Critical Requirements:
- [ ] Internal reference tab created FIRST
- [ ] JSON uses `sections` (NOT `songSections`)
- [ ] JSON uses `similarTechniques` (NOT `similarSongs`)
- [ ] Chord arrays included for automatic diagrams
- [ ] Page component follows template exactly
- [ ] Data registry updated completely
- [ ] All validation steps pass

### Template Files:
- **JSON:** `src/data/songs/_template.json`
- **Page:** `src/components/SongAnalysis/_page-template.tsx`
- **Examples:** Any existing song in `src/data/songs/`

## 🚨 Quick Error Check

If you encounter issues:
1. **Build errors:** Check songData.ts imports and JSON syntax
2. **Missing content:** Verify JSON structure matches template exactly
3. **No chord diagrams:** Include `chords` arrays in sections and techniques
4. **Component errors:** Follow page template format exactly
5. **Data errors:** Use `sections` and `similarTechniques` property names

## 📚 Full Documentation

For complete instructions, troubleshooting, and examples:
- **Master Prompt:** `docs/song-conversion-master-prompt.md`
- **System Documentation:** `docs/song-analysis-system.md`
- **Reference Guidelines:** `src/data/songs/_reference-tabs/README.md`
