# Reusable Prompt Template: Data-Driven Page Migration

This prompt template can be used to convert any group of custom pages into a data-driven, templated system similar to what was done for scales pages.

## **Template Instructions:**

Replace the following placeholders with the specific content type:
- `[CONTENT_TYPE]` = scales, chords, intervals, techniques, etc.
- `[CONTENT_TYPE_PLURAL]` = scales, chords, intervals, techniques, etc.
- `[EXAMPLE_SLUG]` = minor, major-7th, perfect-5th, alternate-picking, etc.
- `[SCHEMA_NAME]` = scale-analysis, chord-analysis, interval-analysis, etc.

---

# **Data-Driven [CONTENT_TYPE] Page Migration**

The [CONTENT_TYPE] pages e.g. `src\app\lessons\theory\[CONTENT_TYPE_PLURAL]\[EXAMPLE_SLUG]\page.tsx` are all custom. Can you:

## **1) Design a Data-Driven Template Approach**
Create a templated and component-based approach like has been done for the song-analysis pages e.g. `src\app\lessons\theory\songs\song-analysis\back-in-black.tsx`. This also references a JSON data file and JSON schema definition file e.g. `src\data\songs\back-in-black.json`.

### **Target Architecture:**
**Current (Custom Pages):**
```
/[CONTENT_TYPE_PLURAL]/[EXAMPLE_SLUG]/page.tsx (700+ lines of custom code)
```

**Target (Data-Driven Template):**
```
/[CONTENT_TYPE_PLURAL]/[EXAMPLE_SLUG]/page.tsx (10 lines using [CONTENT_TYPE]AnalysisPageTemplate)
/data/[CONTENT_TYPE_PLURAL]/[EXAMPLE_SLUG].json (structured data)
/schemas/[SCHEMA_NAME].schema.json (validation)
```

## **2) List Pages That Need Conversion**
Identify all [CONTENT_TYPE] pages that need to be converted to the data-driven approach.

## **3) Create Research Pages Structure**
Create research pages for the content like what was done for song-analysis e.g. `src\data\songs\_research_notes`. Structure:
```
/src/data/[CONTENT_TYPE_PLURAL]/
/src/data/[CONTENT_TYPE_PLURAL]/_research-notes/
/src/components/[CONTENT_TYPE]Analysis/
```

## **4) Create JSON Schema Definition**
Create a comprehensive JSON schema definition file at:
`src/schemas/[SCHEMA_NAME].schema.json`

### **Schema Requirements:**
- Follow the same patterns as `song-analysis.schema.json`
- Include all necessary properties for [CONTENT_TYPE] content
- Provide proper validation and required fields
- Support AlphaTex notation for musical examples
- Include metadata section with slug, tags, category, lastUpdated

## **5) Test JSON Data Against Schema**
- Create sample JSON data file for [EXAMPLE_SLUG]
- Validate using: `npx ajv validate -s src/schemas/[SCHEMA_NAME].schema.json -d src/data/[CONTENT_TYPE_PLURAL]/[EXAMPLE_SLUG].json`
- Ensure data validates successfully

## **6) Create Shared Components**
Create reusable components following the SongAnalysis pattern:

### **Required Components:**
```
/src/components/[CONTENT_TYPE]Analysis/
├── [CONTENT_TYPE]AnalysisPageTemplate.tsx (main template)
├── [CONTENT_TYPE]InfoSection.tsx
├── [CONTENT_TYPE]TheorySection.tsx  
├── [CONTENT_TYPE]ExamplesSection.tsx
├── [CONTENT_TYPE]PracticeSection.tsx
├── [CONTENT_TYPE]RelatedSection.tsx
└── [CONTENT_TYPE]LearningPathSection.tsx
```

### **Data Library:**
```
/src/lib/[CONTENT_TYPE]Data.ts
```
With functions:
- `get[CONTENT_TYPE]Data(slug: string): [CONTENT_TYPE]Data | null`
- `getAll[CONTENT_TYPE]Slugs(): string[]`
- `get[CONTENT_TYPE_PLURAL]ByCategory(category: string): [CONTENT_TYPE]Data[]`
- `get[CONTENT_TYPE_PLURAL]ByTag(tag: string): [CONTENT_TYPE]Data[]`
- `getFeatured[CONTENT_TYPE_PLURAL](): [CONTENT_TYPE]Data[]`

## **7) Migrate First Page and Test**
- Back up original page: `page-original-backup.tsx`
- Replace with template approach:
  ```tsx
  "use client";
  import [CONTENT_TYPE]AnalysisPageTemplate from '@/components/[CONTENT_TYPE]Analysis/[CONTENT_TYPE]AnalysisPageTemplate';

  export default function [EXAMPLE_SLUG]Analysis() {
    return (
      <[CONTENT_TYPE]AnalysisPageTemplate 
        [CONTENT_TYPE]Slug="[EXAMPLE_SLUG]" 
        displayName="[Display Name]" 
      />
    );
  }
  ```
- Test build and functionality

## **8) Migrate All Remaining Pages**
Systematically convert all remaining [CONTENT_TYPE] pages using the same pattern:
- Create JSON data files for each
- Replace page components with template usage
- Validate all data against schema
- Test each conversion

## **9) Validation and Quality Assurance**
- Run `npm run type-check` to ensure no TypeScript errors
- Test build: `npm run build`
- Validate all JSON data files against schema
- Verify all pages render correctly
- Check that AlphaTex notation displays properly

## **Expected Benefits:**
1. **Consistency**: All [CONTENT_TYPE] pages use the same structure
2. **Maintainability**: Content updates only require JSON changes
3. **Scalability**: Easy to add new [CONTENT_TYPE_PLURAL] by creating JSON files
4. **Quality**: Schema validation ensures data consistency
5. **Performance**: Component reuse and efficient rendering
6. **Developer Experience**: Clear separation of content and presentation

## **File Structure After Migration:**
```
/src/
├── components/[CONTENT_TYPE]Analysis/          (Reusable components)
├── data/[CONTENT_TYPE_PLURAL]/                 (JSON data files)
├── data/[CONTENT_TYPE_PLURAL]/_research-notes/ (Research documentation)  
├── lib/[CONTENT_TYPE]Data.ts                   (Data management functions)
├── schemas/[SCHEMA_NAME].schema.json           (Validation schema)
└── app/lessons/.../[CONTENT_TYPE_PLURAL]/      (Simplified page components)
```

---

## **Usage Notes:**
- This template has been successfully applied to convert scales pages
- Adapt the schema properties based on the specific content type
- Follow the established patterns from song-analysis and scale-analysis
- Test thoroughly after each conversion
- Keep original files as backups until migration is complete

## **Previous Successful Applications:**
- ✅ **Scales Pages**: Converted from custom 700+ line pages to data-driven 10-line templates
- ✅ **Song Analysis**: Original system that established the pattern

**This template can be applied to any repetitive content type in the MusicScene codebase.**