# AGENTS.md

## What this is
- Multi-page static prototype of the National Art Gallery (Balai Seni Negara) site: `index.html` (home), `exhibitions.html`, `activities.html`, `collection.html` (search + filter grid), `collection-detail.html` (artwork detail, populated from `?id=`), `artists.html` (A–Z artist index), `artist-detail.html` (artist profile, populated from `?artist=`). `DESIGN.md` is the design-system spec. No package manager, build step, tests, or linting.
- Verify changes by opening a page in a browser (Windows: `start index.html`). No dev server needed, but pages require internet — Tailwind, fonts, icons, and the logo load from CDNs / `lh3.googleusercontent.com`. Local artwork images live in `images/` and need no internet.

## Collection pages are JS-driven
- `collection-data.js` is the single source of truth for the collection: the `COLLECTION` array (id, title, artist, medium, year, type, image, description), the `TYPES` list, the `ARTISTS` map (quote, bio, origin, active — prototype copy), and the shared `collectionCardHTML()` renderer. The collection/artist pages load it — edit artwork or artist data there, not in the HTML.
- `collection.html` renders the grid, search, and type-filter chips client-side (live filtering, results counter, empty state). It also accepts `?q=` (search text) and `?type=` (one of the TYPES ids) URL params to pre-filter — the artist pages link in via `?q=<artist name>`. `collection-detail.html` reads `?id=` and falls back to the first artwork on a bad/missing id; it also sets `document.title` and shows related works of the same type.
- `artists.html` derives its whole index from `COLLECTION` (name, media types, work count, year range) — there is no separate artist list to maintain. Its featured-artist section (Tan Choon Ghee) is hand-written HTML.
- `artist-detail.html` reads `?artist=<name>` (case-insensitive; falls back to the first artist alphabetically) and renders quote, bio, mono facts, featured work, and the artist's works with per-artist type-filter chips. Every artist in `ARTISTS` must exactly match `artist` fields in `COLLECTION` or the profile/work link breaks.
- The Tailwind Play CDN watches DOM mutations, so utility classes injected by JS template strings are styled correctly — no extra setup.

## Duplication warning (important)
- The `<head>` (inline Tailwind config + `theme()` styles), top nav, and footer are copy-pasted into all seven pages. Any token, nav, or footer change must be applied to every page or they drift. The nav marks the current page's link with `text-primary`.
- `images/` holds artwork/exhibition photos copied from `C:\workspace\images.gogallery`, where original filenames encode Artist · Title · Medium · Year — that metadata is the source of wall-label credits.

## Tailwind setup
- Tailwind runs via the Play CDN runtime (`cdn.tailwindcss.com?plugins=forms,container-queries`), not a compiled build. All design tokens (colors, fonts, spacing, font sizes) are defined in the inline `tailwind.config` script block in each page — edit tokens there (all copies).
- The inline `<style>` block uses `theme(...)` functions, which only work with the CDN runtime. Converting to a compiled Tailwind setup requires restructuring.
- Reuse the existing token utilities instead of raw values: `px-margin-mobile` / `md:px-margin-desktop`, `py-room-padding-y`, `gap-gutter`, `font-headline-*`, `font-label-mono`, and color classes like `bg-wall`, `bg-wall-alt`, `text-ink`, `text-ink-muted`, `border-line`.
- Reusable component patterns: room tag (mono eyebrow with 1px rule), wall label (title + 2 mono lines in a `border-ink` box overlapping the art frame), date pill (`border-ink-muted` mono box), section header (`border-b border-line pb-4`, H2 + BM mono subtitle + right-side link/counter).

## DESIGN.md vs index.html
- `index.html` is the source of truth for actual values; `DESIGN.md` expresses intent. Known drift: DESIGN.md names Fraunces as the display face (code uses Libre Caslan Text — actually Libre Caslon Text), uses CSS-var token names (`--red`, `--green`) that don't match the Tailwind color keys, and references a `bsn-homepage.html` that does not exist in this repo.
- Rules from DESIGN.md that must survive any edit:
  - Every artwork image carries a museum "wall label" (title + mono uppercase Artist · Medium · Year) — never an orphaned image.
  - Max 2 accent colors (red + green) per section; brass only for small metadata/eyebrow text.
  - Mono type is for factual/curatorial info only, never headlines or marketing copy.
  - Flat surfaces only — no gradients, drop shadows, or glow.
  - No two adjacent sections share the same background tone.

## Quirks
- The only remaining external image is the nav logo (`lh3.googleusercontent.com`); all other images are local files under `images/`.
- News/social card images are editorial photos, not artworks — they intentionally take a date pill or mono caption instead of a full wall label.
