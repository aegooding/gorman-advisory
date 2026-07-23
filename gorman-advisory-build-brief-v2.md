# Gorman Advisory — Website Build Brief
## Claude Code Instructions · Single Page Landing Site · v2.0

---

## PROJECT OVERVIEW

Build a single-page scrolling landing site for **Gorman Advisory**, a supply chain and business growth advisory firm. The site should feel premium, credible, and modern — suited to C-suite and operations leadership audiences. The primary conversion action is a **Contact Us form**.

All assets are located in a local `/assets` folder. Assume this structure:

```
/assets/
  /logos/
    Logo.png
    Logo Blue.svg
    Logo Soft Blue.svg
    Logo Steel Blue.svg
  /images/
    AdobeStock_1902617246.jpeg
    AdobeStock_295572929.jpeg
    AdobeStock_629236232.jpeg
    AdobeStock_1647047641.jpeg
    AdobeStock_933409560.jpeg
```

---

## COLOUR PALETTE — PALETTE 02 (Midnight / Electric Lime)

```css
:root {
  --midnight:  #0A1E3C;  /* Primary — dominant brand colour, ~55% of page */
  --lime:      #C6F135;  /* Accent — CTAs, highlights, active states, ~5% */
  --coolgrey:  #E8EBEF;  /* Ground — light section backgrounds, ~30% */
  --steel:     #3D6B9E;  /* Secondary — eyebrows, muted UI, tags, ~10% */
  --ink:       #1E3050;  /* Body text on light backgrounds */
  --card:      #F4F6F9;  /* Card surfaces on light backgrounds */
  --dark-card: #1A3560;  /* Card surfaces on midnight backgrounds */
  --line:      #D0D8E4;  /* Hairlines and dividers */
}
```

### Colour usage rules
- **Lime** is used only for primary CTAs, active states, and key highlights. Never use as a background for body text.
- **Lime text rule:** Always pair Lime elements with `--midnight` as the text/foreground colour. Never white-on-lime.
- **Midnight** dominates — hero, services section, why us section, nav, and footer are all midnight.
- **Cool Grey** is used for lighter alternating sections (What We Do, Results, Contact).
- Lime on Midnight passes WCAG AA for large text and UI elements only.

---

## TYPOGRAPHY

Load via Google Fonts CDN in `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,600;8..60,700&family=Public+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

| Role | Font | Weight | Size |
|---|---|---|---|
| Display / H1 | Source Serif 4 | 700 | clamp(36px, 5vw, 56px), line-height 1.08, letter-spacing -0.02em |
| H2 Section headings | Source Serif 4 | 600 | clamp(26px, 3.5vw, 36px), line-height 1.15 |
| H3 Card / subsection headings | Public Sans | 700 | 18–20px |
| Body copy | Public Sans | 400 | 15–16px, line-height 1.65 |
| Eyebrows / kickers | JetBrains Mono | 500 | 11–12px, letter-spacing 0.1em, uppercase |
| Data / status tags | JetBrains Mono | 400 | 12–13px |
| CTA buttons | Public Sans | 700 | 14–15px |
| Nav links | Public Sans | 600 | 14px |
| Captions / footer meta | Public Sans | 400 | 13px |

---

## LOGO USAGE

- **On Midnight (dark) backgrounds** — nav, footer, dark sections: use `Logo Steel Blue.svg` at `opacity: 0.85`
- **On Cool Grey (light) backgrounds**: use `Logo Blue.svg` or `Logo Soft Blue.svg`
- Logo appears in the **nav** and **footer only** — max height 36px in nav
- Do **not** centre the logo as a hero element or repeat it mid-page
- The goal is integrated, not prominent — the logo should feel confident, not shouty

---

## PHOTO USAGE & TREATMENT

| File | Placement |
|---|---|
| `AdobeStock_1902617246.jpeg` | Hero — full-width background with `rgba(10,30,60,0.72)` overlay |
| `AdobeStock_295572929.jpeg` | "What We Do" section — right-column image panel |
| `AdobeStock_629236232.jpeg` | Services section — subtle section divider or card background |
| `AdobeStock_1647047641.jpeg` | "Why Gorman Advisory" — muted background at `opacity: 0.15`, `mix-blend-mode: luminosity` |
| `AdobeStock_933409560.jpeg` | Contact section — muted decorative panel |

**All images must be treated** — either via dark overlay (`rgba(10,30,60,0.X)`) or `filter: saturate(0.75)`. No raw ungraded images placed directly on the page.

---

## PAGE SECTIONS & COPY

Use all copy below **verbatim**. Do not paraphrase, rewrite, or add marketing language.

---

### SECTION 1 — NAV (sticky)

- Background: `--midnight`, transparent on load → `rgba(10,30,60,0.95)` + `backdrop-filter: blur(12px)` after scrolling 60px
- Left: `Logo Steel Blue.svg` (opacity 0.85, height 36px)
- Right links: `Services` · `Why Us` · `Contact Us`
- `Contact Us` is a Lime pill button: `background: var(--lime); color: var(--midnight); border-radius: 99px; padding: 8px 18px; font-weight: 700`
- Mobile: hamburger toggle, links stack vertically in a midnight dropdown

---

### SECTION 2 — HERO

Full viewport height (`100vh`). Background: `AdobeStock_1902617246.jpeg`, centred, cover, with `rgba(10,30,60,0.72)` overlay div on top. Content vertically centred.

**Eyebrow** (JetBrains Mono, `--steel`, 12px, uppercase, letter-spacing 0.1em):
```
Business Growth & Supply Chain Advisory
```

**H1** (Source Serif 4 700, white):
```
Your supply chain is either costing you money or making you money.
We make sure it's the latter.
```

**Body paragraph** (Public Sans 400, `rgba(255,255,255,0.80)`, max-width 58ch):
```
Gorman Advisory works alongside leadership teams to improve commercial
performance, reduce costs, strengthen supplier relationships, and drive
sustainable revenue growth — with practical industry experience and a
commercial mindset that gets things done.
```

**Primary CTA** (Lime pill button, Midnight text, links to #contact):
```
Talk to us
```

**Secondary link** (white, no background, underline on hover, links to #services):
```
See how we work ↓
```

---

### SECTION 3 — WHAT WE DO

Background: `--coolgrey`. Two-column layout (text left 55%, image right 45%). Image: `AdobeStock_295572929.jpeg`, object-fit cover, slight border-radius, `filter: saturate(0.80)`.

**Eyebrow** (JetBrains Mono, `--steel`):
```
What we do
```

**H2** (Source Serif 4 600, `--midnight`):
```
Independent advice. Measurable outcomes.
```

**Body** (Public Sans 400, `--ink`):
```
We partner with businesses to identify opportunities across their supply
chain and commercial operations — ones that are often hiding in plain sight.
Whether you need to cut freight costs, win more revenue, tighten procurement,
or rethink your strategy, we deliver solutions that create real business results.
```

---

### SECTION 4 — SERVICES

Background: `--midnight`. ID: `services`. 2x2 card grid.

**Eyebrow** (JetBrains Mono, `--steel`):
```
Our services
```

**H2** (Source Serif 4 600, white):
```
Four ways we create value
```

**Card 1 — Supply Chain & Logistics**

H3 (Public Sans 700, `--lime`):
```
Supply Chain & Logistics
```
Body (Public Sans 400, `rgba(255,255,255,0.75)`):
```
We review, optimise, and restructure how your goods move — domestically
and internationally.
```
List items (bullet colour `--steel`):
```
• International freight management (air, sea and customs)
• Domestic freight optimisation (road, rail and coastal shipping)
• Warehousing and distribution reviews
• Supplier sourcing, procurement and contract negotiations
```

**Card 2 — Commercial Growth**

H3:
```
Commercial Growth
```
Body:
```
We help you find new revenue and extract more value from what you already have.
```
List:
```
• Sales and commercial team reviews
• New product and revenue stream development
• Go-to-market planning and growth strategies
• Margin improvement and profitability programs
```

**Card 3 — Procurement & Compliance**

H3:
```
Procurement & Compliance
```
Body:
```
We bring rigour and discipline to how you buy — and make sure you're protected.
```
List:
```
• Freight tenders and RFQ management
• Customs and compliance reviews
• Supplier and packaging audits
• Strategic procurement and cost-reduction initiatives
```

**Card 4 — Finance & Strategy**

H3:
```
Finance & Strategy
```
Body:
```
We help leadership teams see the bigger picture — and act on it.
```
List:
```
• Foreign exchange and trade finance solutions
• Supply chain network reviews and optimisation
• Business transformation and operational improvement programs
• Executive leadership and board-level advisory
```

**Card styling:**
```css
.service-card {
  background: var(--dark-card);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 14px;
  padding: 32px;
  transition: transform 0.2s ease, border-left 0.2s ease;
}
.service-card:hover {
  transform: translateY(-4px);
  border-left: 3px solid var(--lime);
}
```

---

### SECTION 5 — RESULTS

Background: `--coolgrey`. Two-column layout (text left, checklist right).

**Eyebrow** (JetBrains Mono, `--steel`):
```
What we deliver
```

**H2** (Source Serif 4 600, `--midnight`):
```
Practical outcomes that strengthen your business.
```

**Body** (Public Sans 400, `--ink`):
```
Our focus is on tangible improvements across your operations —
not reports that sit on a shelf.
```

**Checklist — right column** (5 items, each separated by `var(--line)` border-bottom, padding 14px 0):

Tick styling: Lime-filled circle (`background: var(--lime)`, 22px x 22px, border-radius 50%) with a Midnight SVG checkmark inside. Item text: Public Sans 500, `--ink`, 16px.

```
✓  Lower operating and supply chain costs
✓  Improved revenue and profit margins
✓  Greater operational efficiency
✓  Enhanced compliance and risk management
✓  Stronger supplier and customer relationships
```

---

### SECTION 6 — WHY GORMAN ADVISORY

Background: `--midnight`. Optional: `AdobeStock_1647047641.jpeg` as a right-side panel at `opacity: 0.15`, `mix-blend-mode: luminosity`. Content max-width 640px, centred or left-offset.

**Eyebrow** (JetBrains Mono, `--steel`):
```
Why Gorman Advisory
```

**H2** (Source Serif 4 600, white):
```
Independent. Commercial. Results Focused.
```

**Paragraph 1** (Public Sans 400, `rgba(255,255,255,0.78)`, max-width 62ch):
```
We provide objective advice backed by real-world commercial and supply chain
experience. Unlike large consulting firms, we don't bring a methodology —
we bring judgment. We work closely with business owners, executives and
leadership teams to uncover opportunities, challenge existing thinking, and
implement strategies that actually deliver.
```

**Paragraph 2** (Public Sans 400, `rgba(255,255,255,0.78)`, max-width 62ch):
```
Our approach is straightforward: identify the opportunities, solve the complex
challenges, and create lasting value for our clients. No jargon. No unnecessary
complexity. Just clear thinking and practical action.
```

---

### SECTION 7 — CONTACT

Background: `--coolgrey`. ID: `contact`. Optional: `AdobeStock_933409560.jpeg` as a muted right-panel at `filter: saturate(0.5) brightness(0.9)`. Form sits in a white card (`border-radius: 14px`, `padding: 40px`, `box-shadow: 0 4px 32px rgba(10,30,60,0.08)`).

**Eyebrow** (JetBrains Mono, `--steel`):
```
Get in touch
```

**H2** (Source Serif 4 600, `--midnight`):
```
Ready to unlock value across your supply chain and commercial operations?
```

**Body** (Public Sans 400, `--ink`):
```
Tell us about your business and what you're trying to achieve.
We'll respond within one business day.
```

**Form fields** (labels: JetBrains Mono 500, 11px, uppercase, `--steel`):

| Field | Type | Required |
|---|---|---|
| Name | text | Yes |
| Company | text | Yes |
| Email | email | Yes |
| Phone | tel | No — label: "Phone (optional)" |
| How can we help? | textarea (5 rows) | Yes |

**Input styling:**
```css
input, textarea {
  width: 100%;
  background: white;
  border: 1.5px solid var(--line);
  border-radius: 8px;
  padding: 12px 14px;
  font-family: 'Public Sans', sans-serif;
  font-size: 15px;
  color: var(--ink);
  transition: border-color 0.2s;
}
input:focus, textarea:focus { border-color: var(--steel); outline: none; }
input:valid, textarea:valid { border-color: var(--lime); }
```

**Submit button** (full-width, Lime background, Midnight text, bold, 14px border-radius, 16px padding vertical):
```
Send message
```
On hover: `transform: scale(1.02)`.

**On successful submit** — hide the form, show inline success message (Public Sans, `--midnight`, centred):
```
Thanks — we'll be in touch within one business day.
```

**Below form** (Public Sans 400, `--ink`):
```
Or email us directly:
```
Followed by a Lime-coloured underline link: `pg@gormanadvisory.com`

---

### SECTION 8 — FOOTER

Background: `--midnight`. Two columns + bottom bar.

**Left column:**
- `Logo Steel Blue.svg` at `opacity: 0.85`, height 32px
- Below logo (JetBrains Mono 400, `--steel`, 12px):
```
Supply Chain Advisory | Logistics Solutions
```

**Right column:**
- Nav links (Public Sans 500, `rgba(255,255,255,0.65)`, hover white): `Services` · `Why Us` · `Contact`
- Email (Public Sans 400, `--lime`, underline): `pg@gormanadvisory.com`

**Bottom bar** (hairline `rgba(255,255,255,0.10)` above, Public Sans 400, `rgba(255,255,255,0.40)`, 13px):
```
© 2026 Gorman Advisory. All rights reserved.
```

---

## INTERACTIONS & ANIMATION

- **Scroll reveal:** `IntersectionObserver` — on viewport entry: `opacity: 0 → 1`, `translateY(20px → 0)`, `transition: 0.5s ease`.
- **Nav scroll state:** Add class `scrolled` at > 60px scroll — applies `background: rgba(10,30,60,0.95)` + `backdrop-filter: blur(12px)`.
- **Cards on hover:** `translateY(-4px)` + left lime border.
- **Buttons on hover:** `transform: scale(1.02)`.
- **No parallax. No looping animations. No autoplay.** Credibility over flair.

---

## TECHNICAL REQUIREMENTS

- Pure **HTML + CSS + vanilla JS** — no frameworks, no npm, no build tools
- Single output file: `index.html` with embedded `<style>` and `<script>` at end of `<body>`
- Mobile-first. Breakpoints: `640px` and `1024px`
- All images: `loading="lazy"` + descriptive `alt` text
- `scroll-behavior: smooth` on `html` element
- Required meta tags:
  ```html
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Gorman Advisory — Supply Chain Advisory and Business Growth consulting. We help organisations reduce costs, strengthen supplier relationships, and drive sustainable revenue growth.">
  <meta property="og:title" content="Gorman Advisory">
  <meta property="og:description" content="Independent supply chain and commercial advisory. Practical outcomes for leadership teams.">
  <title>Gorman Advisory — Supply Chain & Business Growth Advisory</title>
  ```
- No external JS. Google Fonts CDN only.
- Asset paths: relative, e.g. `assets/images/AdobeStock_1902617246.jpeg`

---

## OUTPUT

Single file: `index.html`
