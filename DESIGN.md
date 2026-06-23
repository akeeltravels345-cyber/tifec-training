# TIFEC Training — Design System

A reference for the design tokens and components used across the TIFEC Professional
Training site. All tokens are defined as CSS custom properties in
[`css/styles.css`](css/styles.css) under `:root`. Change a value there and it
updates everywhere.

Tone: calm, warm, aspirational. Teal + charcoal-ink with a gold accent;
serif display headings over a clean sans body.

---

## Colour

| Token | Value | Use |
|---|---|---|
| `--teal` | `#028090` | Primary brand; buttons, links, accents |
| `--teal-dark` | `#016b79` | Button hover, deep accents |
| `--teal-light` | `#e8f5f6` | Tints, tags, soft fills |
| `--teal-mid` | `#b2dde2` | Borders, muted accents |
| `--ink` | `#0e1f22` | Dark sections: nav, hero, footer, quote band |
| `--ink-soft` | `#2d4448` | Second stop in dark gradients |
| `--gold` | `#c9a84c` | Accent: hero/quote emphasis, active nav, badges |
| `--gold-light` | `#e3c878` | Gold text on dark backgrounds |
| `--text` | `#1a1a1a` | Body/heading text on light |
| `--muted` | `#555` | Secondary/body copy |
| `--white` | `#ffffff` | Base background |
| `--bg-soft` | `#f7fafa` | Alternating section background |
| `--border` | `#e3ecec` | Card/input borders, dividers |

**Signature combinations**
- *Light section:* `--white` / `--bg-soft` background, `--text` headings, `--teal` accents.
- *Dark section:* `--ink` → `--ink-soft` gradient, white text, `--gold` emphasis word.
- *Gradient (hero):* `linear-gradient(150deg, var(--ink) 0%, #013f48 60%, #015462 100%)`.

---

## Typography

| Token | Stack |
|---|---|
| `--serif` | `'Cormorant Garamond', Georgia, serif` — headings, italic accent words |
| `--sans` | `'DM Sans', system-ui, sans-serif` — body, UI, labels |

Loaded from Google Fonts (see `@import` at top of `styles.css`).

**Scale** (fluid via `clamp`)

| Element | Size | Notes |
|---|---|---|
| `h1` | `clamp(2.4rem, 5.2vw, 4rem)` | serif, weight 600, letter-spacing −0.5px |
| `h2` | `clamp(1.9rem, 3.6vw, 2.8rem)` | serif, weight 600 |
| `h3` | `clamp(1.35rem, 2.2vw, 1.7rem)` | serif |
| `h4` | `1.2rem` | serif |
| body | `17px` | sans, line-height 1.65 |
| `.lead` | `1.2rem` | intro paragraphs, line-height 1.7 |
| `.eyebrow` | `0.75rem` | uppercase, letter-spacing 2.5px, weight 600, teal |

**Accent words** — wrap emphasis words in `<em>`. Renders italic; colour is
`--teal` on light backgrounds, `--gold` on dark (hero, quote band).

---

## Primitives

| Token | Value |
|---|---|
| `--maxw` | `1140px` (content container) |
| `--radius` | `14px` (cards) |
| `--radius-sm` | `10px` (inputs, small cards) |
| Pill radius | `50px` (buttons, badges, tags) |
| `--shadow` | `0 10px 40px rgba(2,128,144,0.08)` |
| `--shadow-hover` | `0 18px 50px rgba(2,128,144,0.16)` |
| `--transition` | `0.25s ease` |

**Spacing / layout**
- `.section` — `90px` vertical padding (`64px` on mobile)
- `.section-sm` — `60px` vertical padding
- `.container` — max-width `--maxw`, `24px` horizontal padding
- Background helpers: `.bg-soft`, `.bg-teal-light`

---

## Components

| Class | What it is |
|---|---|
| `.btn` | Base pill button. Variants: `.btn-primary` (teal), `.btn-outline`, `.btn-light`. Sizes: `.btn-lg`, `.btn-block`. Auto-adapts on dark via `.nav .btn-outline` / `.hero .btn-outline`. |
| `.nav` | Sticky dark bar (`--ink`, blurred), white inverted logo, gold active link + underline. |
| `.hero` | Dark gradient hero with radial glow accents; white headline, gold `<em>`. |
| `.pillar` | 3-up benefit card with circular teal icon. |
| `.course-card` | Course tile; gold-on-hover top bar, `.tag`, `.meta` rows, `.card-link` arrow. |
| `.quote-section` | Full-width dark band; serif blockquote, gold accent, gold divider on `.sub`. |
| `.form-card` / `.form-control` | Form container + inputs; 2-col `.form-grid`, `.form-success` confirmation panel. |
| `.course-sidebar` + `.price-option` | Sticky pricing panel; `.featured` adds gold border + "Best Value" badge. `.sidebar-tbc` for unpriced courses. |
| `.fact-grid` / `.fact` | Course detail key-value tiles. |
| `.assess-table` | Assessment breakdown rows. |
| `.pay-card` + `.bank-details` | Deposit/payment blocks. `.callout` for highlighted notes. |
| `.cta-band` | Teal gradient call-to-action strip. |
| `.footer` | Dark footer (`--ink`) with gold top border, inverted logo, socials. |
| `.wa-float` | Fixed pulsing WhatsApp button (`#25d366`). |
| `.eyebrow` / `.tag` / `.badge` | Small labels (uppercase eyebrow, pill tag, hero badge). |
| `.reveal` | Scroll-in animation hook (toggled by `js/main.js`). |

---

## Responsive breakpoints

| Width | Effect |
|---|---|
| `≤ 940px` | Course detail layout collapses to single column; sidebar un-sticks; footer → 2 columns. |
| `≤ 768px` | Mobile nav (hamburger + dark dropdown); all grids → single column; reduced section padding. |

---

## Conventions

- **Tokens first.** Use the CSS variables above rather than hard-coded hex/px so the
  palette stays consistent and themeable from one place.
- **Accent sparingly.** Gold is an accent, not a fill — one emphasis word or one
  detail per section.
- **Dark / light rhythm.** Alternate light (`--white`/`--bg-soft`) and dark
  (`--ink`) sections for depth; keep dark text off dark backgrounds.
- **Pages share chrome.** Nav, footer, and WhatsApp float are duplicated in each
  HTML file — update all pages together (or factor into an include if the build
  grows).
