# Design.md — Balai Seni Negara Visual Design System

Derived from the homepage mockup (`bsn-homepage.html`). Concept: the site is structured like **walking through the gallery** — sections are "rooms," and every artwork carries a **museum wall-label** (the signature UI element tying digital to physical).

## 1. Signature Element — Wall Label

The one thing this design is remembered by. A bordered tag mimicking a real gallery placard, attached to every artwork image.

| Property | Value |
|---|---|
| Structure | Title (serif, bold) + metadata line (mono, uppercase: Artist · Medium · Year) |
| Background | `--white` (#F7F5EF) |
| Border | 1px solid `--ink` |
| Placement | Overlapping bottom-left of hero art frame; inline below thumbnail in collection strip |
| Rule | Every artwork image gets a label. Never show artwork without attribution — this is both a design signature and a curatorial norm. |

## 2. Color Tokens

| Token | Hex | Use |
|---|---|---|
| `--wall` | `#EAE6DC` | Page background (warm gallery wall) |
| `--wall-2` | `#E1DCCE` | Secondary section background (featured exhibition block) |
| `--ink` | `#17140F` | Primary text, nav border, footer bg |
| `--ink-soft` | `#4A453C` | Secondary/muted text |
| `--red` | `#8A3324` | Primary accent — CTAs, batik-wax red |
| `--green` | `#34473A` | Secondary accent — gallery-rope green |
| `--brass` | `#A9825A` | Tertiary accent — placard/label details, eyebrows |
| `--line` | `#C7BFAE` | Hairline borders/dividers |
| `--white` | `#F7F5EF` | Card/label surfaces, art frame background |

**Rule:** max 2 accent colors (red + green) visible in any one section. Brass is reserved for small metadata/eyebrow text only — never large fills.

## 3. Typography

| Role | Typeface | Weight | Used for |
|---|---|---|---|
| Display | Fraunces | 500–600 | H1, H2, exhibition titles, wall-label title line |
| Body | IBM Plex Sans | 400–500 | Paragraphs, nav, buttons |
| Utility/mono | IBM Plex Mono | 400–500 | Wall-label metadata, room tags, tags/pills, footer, eyebrows |

**Rule:** mono type = factual/curatorial information only (dates, mediums, room numbers). Never used for marketing copy or headlines. This distinction is what makes the mono face feel intentional rather than decorative.

| Element | Size | Weight |
|---|---|---|
| H1 (hero) | 56px | 500 |
| H2 (section) | 28px | 500 |
| H3 (exhibition title) | 30px | 500 |
| Body | 14.5–15.5px | 400 |
| Mono / labels | 10.5–11.5px | 400–500 |
| Buttons | 13–13.5px | 500 |

## 4. Layout Pattern — "Rooms"

| Section | "Room" label | Content |
|---|---|---|
| Hero | Bilik 01 — Pameran Utama | Full statement headline + one featured artwork with wall label |
| Now showing | Eyebrow: "SEDANG BERLANGSUNG" | Large two-column feature block on `--wall-2` background |
| Permanent collection | "Dari Koleksi Kekal" | 4-column strip, each item with inline wall label |
| Visit / footer | Inverted (dark `--ink` bg) | 3-column: intro, hours/location, tickets/contact |

**Rule:** each major section is visually distinct (background shift or inversion) the way physical gallery rooms are — no two adjacent sections share the same background tone.

## 5. Components

| Component | Spec |
|---|---|
| Nav | Fixed-height, 1px bottom border, logo (serif, "NEGARA" in red) left, links center, lang toggle + CTA right |
| Buttons — primary | `--red` bg, `--white` text, 2px radius, sentence case, verb-first |
| Buttons — ghost | 1px `--ink` border, transparent bg |
| Art frame (hero) | `--white` bg, 1px `--line` border, 16px padding, wall label overlapping bottom edge |
| Tag/pill | 1px `--ink-soft` border, mono type, used for medium/year metadata |
| Room tag | Mono, small horizontal rule before text (`—`), sets scene for each section |

## 6. Content & Tone Rules

- Bilingual: Bahasa Malaysia primary, English toggle (BM/EN in nav, mono type)
- Sentence case throughout, verb-first CTAs ("Terokai Koleksi," "Baca Lanjut")
- Every artwork always paired with a label — no orphaned images
- Official government site: footer states "LAMAN WEB RASMI KERAJAAN MALAYSIA"

## 7. What NOT to do

- No gradients, drop shadows, or glow — flat surfaces only, consistent with a physical gallery's clean walls
- No more than 2 accent colors per section
- No numbered-step markers unless content is a genuine sequence (this site doesn't use them — rooms are spatial, not sequential)