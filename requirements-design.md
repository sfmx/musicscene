# Page Layout and Component Usage Guidelines

These rules ensure a consistent look and feel across all pages, especially for song breakdowns and practice exercises.

## 1. Layout and Structure
- Use the `<Layout>`, `<Header>`, and `<Footer>` components to wrap all page content.
- Place the main content inside a `<main className="prose mx-auto px-4 py-8">` block for consistent spacing and typography.

## 2. Header and Footer
- The `<Header>` should include a `title` and `subtitle` relevant to the page topic.
- The `<Footer>` should be placed at the bottom, outside the `<main>` block.

## 3. Section Headings and Content
- Use `<h1>` for the main page title inside `<main>`.
- Use `<h2>` for section headings.
- Use `<p>` for explanatory text and instructions.
- Use `<ul>` and `<li>` for tips or lists.

## 4. Visualizer Components
- For musical/tab/notation content, use the appropriate visualizer components:
  - `<TabAndNoteVisualizer>` for tab and note diagrams.
  - `<MusicNotationVisualizer>` for standard notation (if needed).
  - `<FretboardHighlight>` for fretboard diagrams, passing relevant props for the exercise or song section.

## 5. Styling
- Maintain the dark background for header/footer and white background for main content.
- Use consistent spacing (`mt-4`, `py-8`, etc.) as seen in the finger-exercises page.

## 6. Content Consistency
- Write clear, concise instructional text.
- Use similar formatting for exercises, breakdowns, or song sections.
- If showing musical examples, use the same data structure and prop names as in finger-exercises.

## 7. Component Imports
- Import all shared components from `@/components/`.

## 8. Accessibility
- Use semantic HTML for headings, lists, and paragraphs.

---

**Summary:**
When creating or updating pages (e.g., were-not-gonna-take-it), follow the structure, component usage, and styling conventions from `finger-exercises/page.tsx` for a unified user experience.
