# Content Depth Pass

Rewrite a single data-driven content page (JSON file consumed by a shared template component) to replace thin, templated, "what not why" text with substantive, accurate writing — without changing the JSON schema, the React template, or the page structure.

## Usage

```
/deepen-content src/data/gear-lessons/accessories/tuners.json
```

Or process several in one go:

```
/deepen-content all remaining accessories gear pages
```

---

## Why This Exists

Google flagged musicscene.com.au as "low value content" for AdSense. Investigation found two separate causes:

1. **Fragment-style writing** — descriptions were comma-separated keyword lists ("Clamps across all six strings at chosen fret. Raises pitch by semitones.") instead of sentences a person would actually read.
2. **Scaled content abuse pattern** — ~34 gear-lesson pages (and likely more content types) share an identical section skeleton (`Types of X` → `Choosing the Right X` → `Famous X Users` → `X Care & Maintenance`) with only the noun swapped. This is a specific Google spam policy category (part of the March 2024 core update), distinct from writing quality.

**The JSON + shared-template architecture is not the problem.** Identical structure across many pages is normal for reference content (Wikipedia infoboxes, Wirecutter buying guides) — what matters is whether each field contains real substance or interchangeable filler. `src/data/gear-lessons/accessories/capos.json` is the reference example: same schema, same component, same section titles as every other gear page, but rewritten to explain *why* things are true rather than just stating them. Diff that file against its git history to see the before/after.

## What Counts as "Thin" (Diagnostic Checklist)

For every text field in the file (`introduction.text`, `introduction.columns[].text`, `sections[].cards[].description`), check for:

- **Fragment lists**: sentences that are really just comma-separated keywords ("Fast and convenient, reliable clamping, good for live performance") rather than connected prose. Card `fields`/`items` are fine to keep as genuinely short structured facts (specs, pros/cons, model names) — the problem is specifically when the `description` paragraph itself reads like a list.
- **Generic instructions with no reasoning**: "Clean the padding regularly" states *what* but not *why* — what actually fails if you don't, what it feels/sounds like when it does. Every description should answer "why does this matter" or "what happens if you ignore this."
- **Interchangeable boilerplate**: if you could swap the product name and the sentence would still sound true, it's not saying anything specific about *this* product.
- **Unverifiable or wrong specific claims**: vague celebrity/brand name-drops with no real substance behind them ("Taylor Swift: Capo for accessible chord progressions") are worse than generic text — they read as confident but aren't backed by anything. Specific factual claims (an artist's exact technique, a fret number, a historical detail) must be either genuinely well-established or verified before shipping — do not invent specifics. **Use WebSearch to check any claim you're not confident about before including it.** If it can't be verified, soften it to something safely general or remove it rather than guess.
- **Structural mismatches**: an `items` list that mixes concrete facts (product names) with generic advice phrases in the same flat list is a sign the content should be split into labeled `fields` instead (e.g. `{ "label": "Recommended Models", "value": "..." }`), matching the pattern used elsewhere in the same file.

## Rewrite Process

1. **Read the full JSON file** before editing anything — get the whole picture, not just one section.
2. **Rewrite each thin field** into 2-4 sentences of connected prose that explains the underlying mechanism, trade-off, or consequence — the same depth as the capos.json reference example. Keep the actual claims musically/technically accurate; don't fabricate specifics to sound more authoritative.
3. **Fact-check anything checkable.** Before naming a specific artist technique, model spec, or historical detail, verify it with WebSearch if you're not already confident. If sources disagree or it can't be confirmed, generalize the claim or drop it — don't keep an invented specific just because it reads well.
4. **Fix structural inconsistencies** (items vs. fields) as you find them, matching the schema patterns already used elsewhere in the file.
5. **Do not touch**: the JSON schema/field names, section order, `layout` values, the React template component, or factually-fine `fields`/`items` data that's already legitimate structured reference info (specs, pros/cons, price tiers).
6. **Validate**:
   ```
   python -c "import json; json.load(open('<file>', encoding='utf-8'))"   # valid JSON
   npx tsc --noEmit                                                        # no type errors
   ```
7. **Spot-check rendering** against the local dev server (`npm run dev` on port 3333) — curl the page and grep for a phrase from your rewrite to confirm it's actually live, not just saved to disk.

## Target Files

Gear-lesson data files under `src/data/gear-lessons/`:

- `accessories/` — cables, capos ✅, cases, metronomes, picks, slides, stands, straps, tuners
- `amps/` — bass, hybrid, mini, modeling, solid-state, tube
- `effects/` — chorus, compressor, delay, distortion, fuzz, overdrive, reverb, tremolo, wah
- `guitars/` — 12-string, acoustic, baritone, bass, classical, electric
- `recording/` — cables, daw, interfaces, microphones, monitors-headphones, preamps

The same process generalizes to any other JSON-driven content directory that shows the same fragment/templated pattern (e.g. `src/data/song-lessons/`, `src/data/scales/`) — check for the same diagnostic signs before assuming a rewrite is needed; some content types may already be written with real depth.

## Validation Checklist

- [ ] JSON is still valid (parses without error)
- [ ] `npx tsc --noEmit` passes
- [ ] No fragment-style `description` fields remain
- [ ] No generic "what not why" instructions remain
- [ ] Any specific factual claim about a real person/product has been verified or removed
- [ ] `items` vs `fields` usage is structurally consistent with the rest of the file
- [ ] Rendered page (local dev server) shows the new text

## Previous Successful Applications

- ✅ **capos.json** (`src/data/gear-lessons/accessories/capos.json`) — full rewrite of introduction, all 6 sections, and the "Famous Capo Users" section specifically (removed an incorrect Keith Richards claim and unverifiable Taylor Swift/Mumford & Sons entries after WebSearch fact-checking; restructured "Choosing the Right Capo" from mixed items to labeled fields). Reference example for all future passes.
