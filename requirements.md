## MusicScene Requirements and Architecture

_Last updated: 2025-04-18_

---

## 1. Overview

**Purpose:**  
Define and record functional, technical, and project requirements for musicscene.com.au, a static site providing educational guitar content, music theory lessons, and practical song analysis.

**Scope:**  
- Educational guitar theory and practical song analysis.
- Static site generation using Next.js + MDX.
- Automated and curated content creation.
- Modular, reusable design (aligned with ComputerScene).

---

## 2. Objectives and MVP

1. **Educational Guitar Content**  
   - Guitar theory lessons (keys, scales, chord progressions).
   - Practical application: analyzing popular songs (theory-based, not just tabs).
   - Recommendations on guitar gear and effects to match song sounds.
   - Visual diagrams (fretboard visualizer React component)
   - Affiliate link placeholders (gear recommendations)
   - Interactive content placeholders (future quizzes)
   - React components for theory visualization (simple fretboard diagram)

2. **Static Site Publishing**  
   - Next.js + MDX to manage rich content (lessons, diagrams, interactive visuals).
   - Incremental Static Regeneration (ISR) for content freshness.
   - GitHub Actions → AWS S3 + CloudFront

3. **Monetization Strategy**  
   - Affiliate marketing (guitars, pedals, music gear).
   - Premium content or courses (freemium model).
   - Display ads integration placeholders.

4. **Automation and Tool-Agnostic Documentation**  
   - Clearly structured Markdown documentation.
   - Automation pipeline for new lessons and gear recommendations.

---

## 3. Functional Requirements

| ID   | Feature                                   | Priority | Notes                                        |
|------|-------------------------------------------|----------|----------------------------------------------|
| F1   | Guitar theory lessons (structured content)| Must     | Organized by keys, scales, modes, progressions|
| F2   | Practical song analysis                   | Must     | Apply theory to popular song examples        |
| F3   | Interactive diagrams/visualizations       | Should   | Fretboard, chord shapes, scale diagrams      |
| F4   | Gear recommendations                      | Should   | Gear linked to song style/sound              |
| F5   | Static page generation                    | Must     | Next.js SSG + ISR                            |
| F6   | Automated content pipeline                | Could    | AI-assisted analysis of song theory          |
| F7   | CI/CD deployment                          | Should   | GitHub Actions → AWS S3 + CloudFront         |
| F8   | Monetization placeholders                 | Should   | Affiliate marketing and ads configurable     |

---

## 4. Technical Architecture

- **Content Creation and Automation**  
  - Curated content: structured MDX files.
  - Automation: AI-assisted content via OpenAI for theory explanations and song analyses.
  - Storage: Markdown + frontmatter metadata in `/content`.

- **Static Site Generator**  
  - Framework: Next.js + MDX.
  - Rendering: Static Generation + ISR for timely updates.
  - Interactive React components (e.g., fretboard diagrams, scale visualizers).

- **Hosting & CI/CD**  
  - Repository: GitHub org `musicscene`.
  - CI/CD: GitHub Actions deploying to AWS S3 + CloudFront.
  - Serverless functions: AWS Lambda for interactive quizzes or future dynamic content.

---

## 5. Project Structure

```
/requirements
  musicscene_requirements.md
/architecture
  architecture.md
/content
  /lessons
    /theory
      scales.md
      chords.md
      modes.md
    /songs
      YYYY-MM-DD-song-title.md
/pipeline
  generate_analysis.js
/site
  next.config.js
  /pages
  /components
    FretboardVisualizer.jsx
/scripts
  deploy.sh
```

---

## 6. Monetization Opportunities

- Affiliate marketing:
  - Guitar equipment (Amazon, Sweetwater, Reverb).
  - Premium lessons or theory books.
- Display advertising (Google AdSense).
- Premium educational content (course subscriptions).

---

## 7. Next Steps

1. Confirm the MusicScene requirements and structure.
2. Set up GitHub repository and Next.js project scaffold.
3. Develop initial structured theory content and practical song analysis.
4. Deploy basic MusicScene landing page via AWS.

---

## 8. MusicScene Design Guide

_Last updated: 2025-07-14_

This design guide documents the established patterns, components, and styling conventions used throughout the MusicScene website, particularly for chord theory lessons and educational content.

### 8.1 Overall Design Philosophy

**Modern Educational Interface:**
- Clean, professional appearance with excellent readability
- Card-based layout system for content organization
- Consistent color coding and visual hierarchy
- Responsive design optimized for desktop and mobile
- Accessibility-focused with clear navigation patterns

**Visual Identity:**
- Minimalist approach with strategic use of color
- Music-specific iconography and visual elements
- Professional typography with clear information hierarchy
- Consistent spacing and layout patterns

### 8.2 Technical Architecture

**Framework & Styling:**
- Next.js 15+ with TypeScript
- Tailwind CSS for styling system
- Client-side components for interactive elements
- Custom SVG components for musical diagrams

**Component Structure:**
```
Layout (overall page wrapper)
├── Header (hero section with title/subtitle)
├── Main Content (max-w-6xl container)
│   ├── Navigation breadcrumbs
│   ├── Hero Section (gradient background)
│   ├── Content Sections (white cards)
│   └── Navigation sections
└── Footer
```

### 8.3 Layout Patterns

#### 8.3.1 Page Structure Template
Every chord theory page follows this consistent structure:

1. **Header Component**: Dark hero section with large title and descriptive subtitle
2. **Navigation Breadcrumb**: Blue back-link to parent section
3. **Hero Section**: Gradient-background introduction with chord type overview
4. **Theory Fundamentals**: Two-column grid explaining core concepts
5. **Construction Details**: Multi-column breakdown of chord building
6. **Chord Diagrams**: Grid layout of interactive fretboard diagrams
7. **Progressions**: 2x2 grid of common progressions with examples
8. **Practice Techniques**: Skills-based practice recommendations
9. **Continue Your Journey**: Navigation to related chord types

#### 8.3.2 Container System
```css
/* Main content container */
.main-container {
  max-width: 6xl (1152px);
  margin: 0 auto;
  padding: 2rem 1rem; /* py-8 px-4 */
}

/* Section spacing */
.section-spacing {
  margin-bottom: 3rem; /* mb-12 */
}
```

### 8.4 Color System

#### 8.4.1 Chord Type Color Coding
Each chord type has an associated color theme for visual consistency:

- **Major Chords**: Blue theme (`blue-50`, `blue-200`, `blue-500`)
- **Minor Chords**: Slate/Gray theme (`slate-50`, `gray-200`, `slate-500`)
- **Seventh Chords**: Amber/Orange theme (`amber-50`, `amber-200`, `amber-500`)
- **Minor Seventh**: Purple theme (`purple-50`, `purple-200`, `purple-500`)
- **Major Seventh**: Emerald theme (`emerald-50`, `emerald-200`, `emerald-500`)
- **Suspended**: Teal theme (`teal-50`, `teal-200`, `teal-500`)
- **Diminished**: Red theme (`red-50`, `red-200`, `red-500`)
- **Augmented**: Orange theme (`orange-50`, `orange-200`, `orange-500`)

#### 8.4.2 Semantic Colors
```css
/* Navigation links */
.nav-link: text-blue-600 hover:text-blue-800

/* Background gradients */
.hero-gradient: bg-gradient-to-br from-{color}-50 to-{color}-100

/* Card backgrounds */
.card-bg: bg-white border border-gray-200 shadow-sm

/* Accent elements */
.bullet-points: text-{theme-color}-500
```

### 8.5 Typography System

#### 8.5.1 Hierarchy
```css
/* Page titles in header */
h1.page-title: text-5xl font-bold (Header component)

/* Section titles in hero */
h1.hero-title: text-3xl font-bold text-gray-900

/* Section headings */
h2.section-heading: text-2xl font-semibold text-gray-900

/* Subsection headings */
h3.subsection-heading: text-lg font-medium text-gray-800

/* Body text */
p.body-text: text-lg text-gray-700 leading-relaxed (hero)
p.regular-text: text-gray-600 (content sections)

/* Small descriptive text */
p.caption-text: text-sm text-gray-500
```

#### 8.5.2 Content Formatting
- Maximum line length: `max-w-4xl` for readability
- Consistent line-height: `leading-relaxed` for body text
- Bullet points with custom colored bullets matching theme
- Strong emphasis with `<strong>` tags for key terms

### 8.6 Component Specifications

#### 8.6.1 Header Component
```tsx
<Header
  title="[Chord Type] Theory"
  subtitle="[Descriptive explanation of the chord type and its musical significance]"
/>
```
- Dark background (`bg-gray-900`)
- White text for contrast
- Centered layout with responsive padding
- Height: `h-72` (18rem)

#### 8.6.2 Card Components
Standard white cards with consistent styling:
```css
.card {
  background: white;
  border: 1px solid #e5e7eb; /* border-gray-200 */
  border-radius: 0.75rem; /* rounded-xl */
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */
  padding: 1.5rem; /* p-6 */
}
```

#### 8.6.3 SimpleFretboardDiagram Component
Musical chord diagrams with:
- SVG-based rendering for scalability
- Consistent dimensions: 170×160px
- Fret markers and finger positions
- String and fret labels
- Clean, minimalist styling

#### 8.6.4 Grid Layouts
**Two-column responsive grid:**
```css
.two-col-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
}
@media (min-width: 768px) {
  .two-col-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

**Three-column responsive grid:**
```css
.three-col-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
}
@media (min-width: 768px) {
  .three-col-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### 8.7 Content Structure Patterns

#### 8.7.1 Theory Fundamentals Section
Two-column layout with:
- Left column: "What Are [Chord Type] Chords?"
- Right column: "Musical Applications"
- Bullet points with theme-colored markers
- Strong emphasis on key terms

#### 8.7.2 Chord Diagrams Section
- Grid layout: 2 chords per row on desktop (`md:grid-cols-2`)
- Each diagram includes chord name and fretboard visualization
- Consistent spacing and alignment

#### 8.7.3 Progressions Section
2×2 grid format with each progression card containing:
- **Title**: Chord progression in Roman numeral notation
- **Description**: Brief explanation of the progression's character
- **Example**: Specific key example (e.g., "In C major: CMaj7 - FMaj7 - Am7 - G7")
- **Songs**: Real-world song examples in quotes
- **Caption**: Small descriptive text about the feeling/character

#### 8.7.4 Navigation Sections
**Continue Your Chord Journey:**
- 2×2 grid of related chord types
- Each card includes icon, title, description, and skill level
- Color-coded by chord type
- Consistent hover effects

### 8.8 Interactive Elements

#### 8.8.1 Navigation Links
```css
.breadcrumb-link {
  color: #2563eb; /* text-blue-600 */
  display: inline-flex;
  align-items: center;
  transition: colors 150ms ease;
}
.breadcrumb-link:hover {
  color: #1d4ed8; /* text-blue-800 */
}
```

#### 8.8.2 Hover Effects
- Cards: Subtle background color shifts
- Links: Color transitions
- Buttons: Scale and shadow changes

### 8.9 Responsive Design

#### 8.9.1 Breakpoints
- Mobile-first approach
- Main breakpoint: `md` (768px) for two-column layouts
- Container padding adjusts: `px-4` on mobile, automatic margins on desktop

#### 8.9.2 Mobile Optimizations
- Single-column layouts on mobile
- Reduced padding and margins
- Touch-friendly interactive elements
- Readable font sizes across devices

### 8.10 Accessibility Guidelines

- High contrast ratios (dark text on light backgrounds)
- Semantic HTML structure with proper heading hierarchy
- Alt text for all diagrams and icons
- Keyboard navigation support
- Screen reader friendly markup

### 8.11 Content Guidelines

#### 8.11.1 Tone & Voice
- Educational but approachable
- Technical accuracy with clear explanations
- Progressive difficulty (beginner to advanced concepts)
- Real-world musical examples

#### 8.11.2 Content Structure
- Start with fundamentals, build complexity
- Include both theory and practical applications
- Provide concrete examples with song references
- Balance depth with accessibility

### 8.12 Future Design Considerations

- Dark mode implementation
- Enhanced interactive elements
- Animation and micro-interactions
- Advanced chord visualization
- Mobile app design patterns
- Progressive Web App features

---

## 7. Next Steps
