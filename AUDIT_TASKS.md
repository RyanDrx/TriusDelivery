# Trius LLC — Site Audit Task List

> Generated from a combined Principal Engineer, Design Expert, and SEO Expert review.

---

## 🔴 Critical (Fix Immediately)

### Security & Engineering
- [x] Add security headers to `netlify.toml` — CSP, X-Frame-Options, HSTS, X-Content-Type-Options, Referrer-Policy
- [x] Sanitize `marked.parse()` output — Add DOMPurify to all `set:html={marked.parse(body)}` calls (Card, Footer, SecondaryHero, Cta, +4 more)
- [x] Replace `innerHTML` in `InteractiveCoverageMap.astro` (line 567) — Use DOM methods or sanitized templating
- [x] Add SRI hashes to Leaflet CDN scripts in `InteractiveCoverageMap.astro` (lines 257-270)

### Design & Accessibility
- [x] Fix secondary color contrast — `#5fa843` fails WCAG AA on white (2.93:1). Use `text-secondary-dark` (#4a8a33) for all body text
- [x] Remove `text-secondary-light` (#97cc6c) from any text usage — 1.88:1 ratio, only use for backgrounds/fills
- [x] Audit `primary-light` (#2d8dbe) usage — 3.71:1, restrict to large/bold text only (18pt+)

### SEO
- [x] Add `og:image` prop to all page Layout calls — index, services, about, contact, coverage, all service subpages
- [x] Add `og:type` and `og:locale` meta tags to `SEO.astro` and/or `Layout.astro`
- [x] Fix heading hierarchy — Change `<h1>` in `Header.astro` (line 85) to `<div>` or `<span>`; keep single H1 per page
- [x] Fix or remove SearchAction schema — `schema.ts` line 127 points to non-existent `/search` page

---

## 🟠 High (Fix This Week)

### Security & Engineering
- [x] Create `src/pages/404.astro` — Custom 404 page with navigation back to home
- [ ] Update outdated dependencies — Especially `marked` (15→18, XSS history), `@sanity/client` (7.9→7.21), review Astro 6 migration
- [x] Render honeypot field in contact form — `netlify-honeypot` is configured but hidden `<input name="bot-field">` missing from form HTML
- [x] Wrap Stackbit reload script in dev check — `Layout.astro` line 169: add `import.meta.env.DEV` guard
- [ ] Add Leaflet local fallback — Self-host or npm install leaflet to avoid CDN single-point-of-failure
- [ ] Enable TypeScript strict mode — Add `strict: true` to `tsconfig.json`

### Design & Accessibility
- [ ] Add dark mode support — Implement `dark:` class variants across components (lower priority for medical industry but improves accessibility)

### SEO
- [x] Fix JSON-LD pricing schema — Remove `price: '0'` or replace with contact URL in `schema.ts` (lines 182-235)
- [x] Add breadcrumb schema to service pages — stat-delivery, scheduled-routes, specialized-equipment
- [x] Wrap page content in `<main>` element — Update `Layout.astro` to add `<main>` around `<slot />`
- [x] Fix alt text fallback — `ResponsiveImage.astro` line 25: require alt text instead of defaulting to empty string
- [x] Deduplicate meta descriptions (Layout handles meta, SEO adds schema) — Pages pass title/description to both Layout and SEO component; consolidate

---

## 🟡 Medium (Next Sprint)

### Engineering
- [ ] Centralize contact info — Create single source of truth in `siteConfig.js` for phone, email, address used across contact.astro, schema.ts, Footer
- [ ] Deduplicate coverage data in `InteractiveCoverageMap.astro` — Define once in frontmatter, pass to JS via `define:vars`
- [x] Optimize Google Fonts loading — Reduce from 18 font weights to essential (400, 600, 700); async load with `media="print" onload`
- [x] Add explicit `output: 'static'` (already done) to `astro.config.mjs`
- [x] Remove `@ts-ignore` in `InteractiveCoverageMap.astro` line 273 — Properly type the window event

### Design
- [x] Replace hardcoded button widths — Remove `min-w-[280px]`, `min-w-[320px]`; use `w-full sm:w-auto`
- [x] Standardize button padding — Create consistent size scheme across HomeHero, SecondaryHero, Cta
- [x] Add `focus-visible:ring-2` states to all nav links, buttons, and form inputs
- [x] Add `sr-only` screen reader text — Mobile menu toggle, icon badges, decorative elements
- [ ] Standardize section max-widths — Document when to use `max-w-4xl` vs `max-w-5xl` vs `max-w-7xl`
- [x] Fix footer hover colors — `hover:text-secondary-light` on dark backgrounds may fail contrast
- [x] Fix hero heights — Replace fixed viewport units with values accounting for browser chrome

### SEO
- [x] Add breadcrumb schema to legal pages — privacy.astro, terms.astro (done)
- [x] Use `ContactPage` schema type for contact.astro
- [x] Add "Related Services" cross-linking between service subpages
- [x] Add static fallback/noscript image for interactive coverage map
- [x] Fix canonical URL formatting — `Layout.astro`: assign `path.replace()` result back to variable

---

## 🔵 Low (Polish / Nice-to-Have)

### Engineering
- [x] Remove or document dead code in `src/archive/`
- [ ] Migrate excessive scoped `<style>` blocks to Tailwind utilities
- [ ] Replace `[key: string]: any` TypeScript props with explicit interfaces
- [x] Remove unused `Fragment` (all Fragment imports are used) imports from pages

### Design
- [x] Tone down CTA hover animations — `scale-110` → `scale-105`, `-translate-y-2` → `-translate-y-1`
- [x] Remove inline `!important` styles in `Footer.astro` line 46 — Use Tailwind classes
- [ ] Document shadow elevation system for consistent depth
- [ ] Unify trust badge styling between Header and Footer
- [x] Increase trust bar text size — `text-xs` may be too small for older users
- [ ] Extract inline gradient definitions to CSS variables

### SEO
- [x] Add favicon preload hint
- [x] Add sitemap link in footer
- [x] Remove or differentiate duplicate SecondaryHero on homepage
- [x] Add `twitter:domain` meta tag
- [ ] Add FAQ structured data (FAQPage schema)
- [x] Add font preload hints (Orbitron bundled locally, Google Fonts async) for critical fonts
- [ ] Add `rel="alternate"` / hreflang tags for future internationalization

---

## ✅ No Action Needed (Passing)

- WebP images with lazy loading ✓
- Component-based Astro architecture ✓
- `prefers-reduced-motion` respected in animations ✓
- Accessible mobile menu (aria-label, aria-expanded) ✓
- Schema.org JSON-LD for LocalBusiness ✓
- Semantic HTML (section, nav, footer) ✓
- Strong CTA hierarchy (primary/secondary/accent) ✓
- Google Fonts preconnect configured ✓
- Proper robots.txt with sitemap reference ✓

---

## 🎨 Design Polish Pass (Professional Quality)

> From a deep design review focused on why the site feels amateur in places.
> Principle: **"Professional healthcare ≠ visual drama."** Strip the noise.

### 🚨 P0 — Critical Design Issues

- [x] Fix hardcoded hex colors in `Cards.astro` (lines 121-129) — Icon feature colors use old palette (`#1c3c3d`, `#2f855a`) instead of Tailwind theme. Replace inline styles with Tailwind `text-primary`/`text-secondary`/`text-accent` classes
- [x] Reduce hero title size in `HomeHero.astro` (line 74) — `text-9xl` is too aggressive for a medical brand. Change to `text-6xl lg:text-7xl` for professional credibility
- [x] Remove banner watermark texture from `Cards.astro` (lines 59-68) — Opacity-3 background image + white overlay = zero visual contribution. Delete both layers
- [x] Remove banner watermark from `HomeHero.astro` (lines 36-42) — Same texture overlay at opacity 0.05 adds noise on high-contrast monitors

### ⚠️ P1 — Major Design Issues

- [x] Simplify hero gradient overlays in `HomeHero.astro` (lines 15-21) — 3 stacked gradients is excessive. Keep only: base image + ONE primary gradient overlay. Remove tertiary gradient and `bg-white/10` texture
- [x] Remove pulsing red dot in `Header.astro` trust bar (line 30) — `animate-pulse` on status dots feels alarmist. Use static dots instead
- [x] Clean up font stack in `tailwind.config.js` (lines 32-36) — Heading and body both default to Inter with unnecessary fallbacks. Simplify to `['Inter', 'sans-serif']`. Audit all `font-brand` (Orbitron) usage outside the logo
- [x] Reduce button hover animations across site — Multiple components use `scale + translate-y + shadow jump + shine` simultaneously. Pick ONE effect (shadow change). Remove `hover:scale-105`, `hover:-translate-y-1`, `hover:shadow-xl` from:
  - `HomeHero.astro` (lines 110-117)
  - `Cta.astro` (lines 42-50)
  - `Cards.astro` (line 53)
- [x] Fix hardcoded colors in `TrustSection.astro` — Star icons use `style='color: #047857'` (line 91) instead of `text-secondary`. Background images at 15% opacity on testimonials add nothing — remove them
- [x] Fix card hover effects in `Cards.astro` (line 53) — `hover:scale-105` + `hover:shadow-2xl` is two competing effects. Keep only shadow change

### 🟡 P2 — Cleanup & Refinement

- [x] Simplify or remove header trust bar — 3 badges add 46px of fixed height and visual clutter. Consider removing entirely or making it appear only on homepage
- [x] Fix testimonial scrollbars in `TrustSection.astro` (line 98) — `max-h-[200px] overflow-y-auto` causes scrollbars inside cards. Increase card height or truncate quotes in logic instead of CSS overflow
- [x] Consolidate CTA layout in `Cta.astro` — Dual white boxes (main CTA + supporting) dilute the message. Merge "Why Healthcare Organizations Choose Trius" content into the main CTA card as a 3-column grid
- [x] Standardize nav link font weights in `Header.astro` — Nav uses `font-medium`, Contact uses `font-semibold`, STAT uses `font-bold`. Standardize to `font-medium`; let color/background be the hierarchy
- [x] Reduce logo container visual weight in `Header.astro` — `border + shadow-sm + group-hover:shadow-md` is heavy. Reduce border to `border-slate-200/40`, remove `shadow-sm`
- [x] Simplify section backgrounds on `index.astro` — WaveClip + gradient + background image + white overlay = 4 layers per section. Reduce to 1-2 layers
- [x] Remove redundant hero trust checkmarks in `HomeHero.astro` (lines 130-165) — 6 trust indicators in hero is overloaded. Keep only the 3 credential badges; remove "No setup fees" / "Instant quotes" feature checkmarks
- [x] Clean up footer state icons in `Footer.astro` — 5 state cards with icons + headings + city lists is repetitive. Condense to "Service Areas: WA, OR, ID, MT, CA" with link to coverage map
- [x] Consider neutral dark footer background — `Footer.astro` uses primary color as footer background. Traditional professional sites use neutral dark (`bg-neutral-dark`). Evaluate the change
