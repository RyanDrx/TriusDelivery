Perfect — let’s extend the **vision doc** with **explicit style guidelines** so Copilot and teammates know exactly what to use and don’t “freestyle” colors or fonts. I’ll align it with Trius’s medical-professional trust vibe, while borrowing EVCO’s clean, industrial polish.

---

# Project Vision for Code Helpers

## Core Purpose

Build a modern, professional website for **Trius LLC**, a medical courier service specializing in **HIPAA/OSHA-compliant, STAT, and scheduled medical deliveries**. The site must attract healthcare organizations and labs across WA, OR, ID, MT, and CA by combining **EVCO’s professional polish** with **Trius’s compliance-driven trust messaging**.

---

## Guiding Principles

1. **Compliance First** – HIPAA/OSHA badges, trust content, and no PHI in forms.
2. **Clarity of Services** – STAT, Scheduled Routes, Specialized Equipment each as clear cards/subpages with CTAs.
3. **Conversion Simplicity** – “Request a Quote” funnel is central; fast, frictionless, reliable.
4. **EVCO Inspiration** – Clean typography, restrained color palette, modern industrial tone that signals reliability and expertise (avoid playful/flashy).
5. **SEO-Ready** – Metadata, schema (Organization, LocalBusiness/MedicalBusiness, Service), and coverage-area visibility.

---

## Technical Stack

* **Framework**: Astro (Static Site Generation with Islands Architecture).
* **CMS**: Sanity (Headless CMS for content management).
* **Styling**: Tailwind CSS v4 with DaisyUI components (utility-first, consistent branding).
* **Hosting**: Netlify (CI/CD, CDN, SSL).
* **Analytics/SEO**: GA4, Search Console, Ahrefs baseline.
* **Forms**: Secure Inquiry Form (Name, Company, Email, Phone, Service Needed, Notes). No PHI.
* **Performance**: Astro's built-in optimization, lazy loading, image optimization, responsive breakpoints.
* **Accessibility**: Alt text, ARIA/semantic headings, high-contrast buttons.

---

## User Funnel

**Primary Path:**
Hero CTA → Request a Quote Form → Confirmation → Delivery Scheduled

**Secondary Paths:**

* Service-specific CTAs → Quote form
* Coverage area map → Availability check

**Trust Elements:**
HIPAA/OSHA compliance badges, testimonials, coverage area visualization.

Tracking: Form submissions + CTA clicks logged in GA4.

---

## Pages & Features

1. **Home** – Hero with value prop, service highlights, trust badges, CTA above fold.
2. **About** – Mission, compliance, leadership, “Why Choose Trius LLC?” callout.
3. **Services** –

   * **STAT Deliveries** – Speed, verification, chain-of-custody.
   * **Scheduled Routes** – Recurring reliability, optimized logistics.
   * **Specialized Equipment** – Secure handling of fragile/regulated gear.
4. **Coverage Areas** – States served, map visualization, CTA.
5. **Contact** – Inquiry form, compliance disclaimer, 24hr response promise.

---

## Style Guidelines

### Colors (Trius Brand Palette)

* **Primary Blue (Trust / Medical)**: `#1A4E8A` (used for headers, CTAs, highlights)
* **Secondary Green (Compliance / Safety)**: `#2F855A` (HIPAA/OSHA emphasis, success states)
* **Neutral Gray (Professional Base)**: `#4A5568` (body text, icons, borders)
* **Light Gray Background**: `#F7FAFC` (section dividers, page background)
* **Alert Red (Urgency / STAT)**: `#C53030` (limited, only for STAT emphasis and form errors)
* **White**: `#FFFFFF` (clean whitespace, card contrast)

### Typography

* **Headings (H1–H3)**: `Inter Bold` or `Montserrat SemiBold`
* **Body Copy**: `Inter Regular` or `Roboto`
* **Fallbacks**: `sans-serif` stack
* **Line Height**: 1.5 for readability, especially on longer paragraphs

### Buttons & CTAs

* Primary CTA: Blue (`#1A4E8A`) background, white text, rounded-xl, hover → darker blue (`#153E6C`).
* Secondary CTA: Outline style with green border (`#2F855A`), white background, hover → filled green.
* Always **above the fold** and **after service blocks**.

### Imagery

* Realistic logistics visuals (couriers, vans, labs, equipment).
* Avoid generic stock art with smiling models.
* Favor **documentary-style photography** (similar to EVCO’s industrial brand).

### Layout & UI

* Grid-based (Tailwind’s `grid` utilities).
* Maximum width \~1200px for readability.
* Section spacing: `py-12` minimum to avoid cramping.
* Consistent padding (`px-6` mobile, `px-12` desktop).
* Cards: rounded-xl, soft shadows, plenty of whitespace.

---

## Milestones (Code Helper Focus)

1. **First Draft** – Pages scaffolded, placeholder content, forms wired.
2. **Feedback Iteration** – Revise design + content.
3. **Domain Launch** – Deploy, connect domain, enable indexing.
4. **Optimization** – Track behavior, tune CTAs, refine UX.

---

## Success Criteria

* **Conversion**: Smooth “Request Quote” flow.
* **Compliance Visibility**: HIPAA/OSHA assurance everywhere.
* **SEO Lift**: Indexed coverage across Pacific Northwest & West Coast.
* **Professional Feel**: Matches EVCO’s polish while tailored to healthcare logistics.
