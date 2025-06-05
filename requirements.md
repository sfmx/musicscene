
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

This document serves as the foundation for building **MusicScene** and complements your ongoing work on **ComputerScene**.
