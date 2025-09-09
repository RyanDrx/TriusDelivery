_Challenge mode: ON_ ✅

Great call. Let’s set the canonical domain to **[https://trius.delivery](https://trius.delivery)** and keep the legal name **Trius LLC**. Below is a clean Astro setup plus the best npm helpers.

---

## Update your schema helpers to the new domain

```ts
// src/lib/schema.ts
const ORG_URL = 'https://trius.delivery/';
export const ORG_ID = ORG_URL + '#org';
export const WEBSITE_ID = ORG_URL + '#website';

export function localBusiness() {
  return {
    '@type': 'LocalBusiness',
    '@id': ORG_ID,
    name: 'Trius LLC',
    alternateName: 'Trius Medical Courier',
    url: ORG_URL,
    logo: ORG_URL + 'static/logo.png',
    image: [ORG_URL + 'static/hero.jpg', ORG_URL + 'static/fleet.jpg'],
    slogan: 'Reliable medical courier services you can trust.',
    description:
      'Trius LLC provides HIPAA compliant and OSHA compliant medical courier services, including STAT specimen transport, scheduled medical logistics, and specialized equipment delivery across Washington, Oregon, Idaho, Montana, and California.',
    email: 'mailto:dispatch@trius.delivery',
    telephone: '+1-XXX-XXX-XXXX',
    priceRange: '$$',
    foundingDate: '2022',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '618 160th Street Ct E',
      addressLocality: 'Tacoma',
      addressRegion: 'WA',
      postalCode: '98445',
      addressCountry: 'US'
    },
    geo: { '@type': 'GeoCoordinates', latitude: '47.1379', longitude: '-122.4594' },
    areaServed: ['Washington', 'Oregon', 'Idaho', 'Montana', 'California'].map((n) => ({ '@type': 'State', name: n })),
    serviceArea: ['Washington', 'Oregon', 'Idaho', 'Montana', 'California'].map((n) => ({ '@type': 'AdministrativeArea', name: n })),
    knowsAbout: [
      'medical courier',
      'specimen transport',
      'STAT delivery',
      'chain of custody',
      'HIPAA compliance',
      'OSHA compliance',
      'temperature controlled transport',
      'biohazard handling',
      'laboratory logistics',
      'hospital logistics'
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59'
      }
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        telephone: '+1-XXX-XXX-XXXX',
        email: 'dispatch@trius.delivery',
        availableLanguage: ['English'],
        areaServed: ['US-WA', 'US-OR', 'US-ID', 'US-MT', 'US-CA']
      },
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        telephone: '+1-XXX-XXX-XXXX',
        email: 'sales@trius.delivery',
        availableLanguage: ['English'],
        areaServed: ['US-WA', 'US-OR', 'US-ID', 'US-MT', 'US-CA']
      }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Medical Courier Services',
      itemListElement: [
        { '@type': 'Offer', name: 'STAT Deliveries', itemOffered: { '@id': ORG_URL + '#service-stat' } },
        { '@type': 'Offer', name: 'Scheduled Routes', itemOffered: { '@id': ORG_URL + '#service-routes' } },
        { '@type': 'Offer', name: 'Specialized Equipment Transport', itemOffered: { '@id': ORG_URL + '#service-equipment' } }
      ]
    },
    sameAs: ['https://www.linkedin.com/company/YOUR_LINKEDIN', 'https://www.facebook.com/YOUR_FACEBOOK', 'https://x.com/YOUR_TWITTER']
  };
}

export function webSite() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: ORG_URL,
    name: 'Trius LLC',
    inLanguage: 'en',
    publisher: { '@id': ORG_ID },
    potentialAction: {
      '@type': 'SearchAction',
      target: ORG_URL + 'search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };
}

export function webPageHome() {
  return {
    '@type': 'WebPage',
    '@id': ORG_URL + '#webpage-home',
    url: ORG_URL,
    name: 'Medical Courier Services | Trius LLC',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    primaryImageOfPage: ORG_URL + 'static/hero.jpg',
    description:
      'HIPAA and OSHA compliant medical courier services. STAT deliveries, scheduled routes, and specialized equipment transport in WA, OR, ID, MT, and CA.',
    breadcrumb: { '@id': ORG_URL + '#breadcrumb-home' }
  };
}
```

Use your existing `Service` nodes, just swap `https://www.trius-llc.com/` for `https://trius.delivery/`.

---

## The easiest npm helpers to use with Astro

- **`astro-seo-schema`** — a `<Schema>` component that escapes and injects JSON-LD. Type safe via `schema-dts`.
  Install: `npm i astro-seo-schema schema-dts`
  Usage in a page:

  ````astro
  ---
  import { Schema } from 'astro-seo-schema';
  import { localBusiness, webSite, webPageHome } from '@/lib/schema';
  const json = { '@context': 'https://schema.org', '@graph': [localBusiness(), webSite(), webPageHome()] };
  ---

  <head>
    <Schema item={json} />
  </head>
  ``` :contentReference[oaicite:0]{(index = 0)}
  ````

- **`astro-seo`** or **`@astrolib/seo`** — convenient meta, Open Graph, and Twitter tags to complement the JSON-LD.

  ````astro
  ---
  import { SEO } from 'astro-seo'; // or: import { AstroSeo as SEO } from "@astrolib/seo";
  ---

  <SEO title="Medical Courier Services | Trius LLC" description="HIPAA and OSHA compliant medical courier services..." canonical="https://trius.delivery" />
  ``` :contentReference[oaicite:1]{(index = 1)}
  ````

- **`@astrojs/sitemap`** — official sitemap generator. Set `site: 'https://trius.delivery'` in `astro.config.mjs`.

  ````js
  // astro.config.mjs
  import { defineConfig } from 'astro/config';
  import sitemap from '@astrojs/sitemap';
  export default defineConfig({ site: 'https://trius.delivery', integrations: [sitemap()] });
  ``` :contentReference[oaicite:2]{index=2}

  ````

- **`schema-dts`** — TS typings for Schema.org if you want autocompletion and compile-time checks in your builders.

  ````ts
  import type { WithContext, LocalBusiness } from "schema-dts";
  const org: WithContext<LocalBusiness> = { "@context": "https://schema.org", "@type": "LocalBusiness", name: "Trius LLC" };
  ``` :contentReference[oaicite:3]{index=3}
  ````

---

## Drop-in SEO component using these tools

```astro
---
// src/components/SEO.astro
import { Schema } from 'astro-seo-schema';
export interface Props {
  title: string;
  description?: string;
  graph?: any[];
}
const { title, description = '', graph = [] } = Astro.props;
const json = { '@context': 'https://schema.org', '@graph': graph };
---

<title>{title}</title>
<meta name="description" content={description} />
<link rel="canonical" href={Astro.url.href} />
<Schema item={json} />
```

Use it:

```astro
---
// src/pages/index.astro
import SEO from '@/components/SEO.astro';
import { localBusiness, webSite, webPageHome } from '@/lib/schema';
const graph = [localBusiness(), webSite(), webPageHome()];
---

<head>
  <SEO
    title="Medical Courier Services | Trius LLC"
    description="HIPAA and OSHA compliant STAT deliveries, scheduled routes, and specialized equipment transport."
    graph={graph}
  />
</head>
```

---

If you want, I can refactor your full `@graph` into `schema.ts` builders with strict `schema-dts` types and wire up `@astrojs/sitemap` in `astro.config.mjs` using **trius.delivery** end to end.
_Challenge mode: ON_ ✅

Here are drop-in files to refactor your full `@graph` into typed builders for **trius.delivery**, plus a reusable SEO component and `astro.config.mjs` with sitemap. Replace the `YOUR_*` placeholders once and you are set.

---

## 1) Install deps

```bash
npm i astro-seo-schema schema-dts @astrojs/sitemap
```

---

## 2) `src/lib/schema.ts`

Typed builders with stable `@id` values and helpers to assemble per-page graphs.

```ts
// src/lib/schema.ts
import type {
  Graph,
  LocalBusiness,
  WebSite,
  WebPage,
  BreadcrumbList,
  Service,
  OfferCatalog,
  Offer,
  PostalAddress,
  GeoCoordinates,
  ContactPoint
} from 'schema-dts';

// ---- Site constants
export const ORIGIN = 'https://trius.delivery/';
export const ORG_ID = ORIGIN + '#org';
export const WEBSITE_ID = ORIGIN + '#website';

// Optional shared contact info
export const DISPATCH_EMAIL = 'dispatch@trius.delivery';
export const SALES_EMAIL = 'sales@trius.delivery';
export const MAIN_PHONE = '+1-XXX-XXX-XXXX';

// ---- Node builders

export function localBusiness(): LocalBusiness {
  const address: PostalAddress = {
    '@type': 'PostalAddress',
    streetAddress: '618 160th Street Ct E',
    addressLocality: 'Tacoma',
    addressRegion: 'WA',
    postalCode: '98445',
    addressCountry: 'US'
  };

  const geo: GeoCoordinates = {
    '@type': 'GeoCoordinates',
    latitude: '47.11123946737481',
    longitude: '-122.42302281020504'
  };

  const support: ContactPoint = {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    telephone: MAIN_PHONE,
    email: DISPATCH_EMAIL,
    availableLanguage: ['English'],
    areaServed: ['US-WA', 'US-OR', 'US-ID', 'US-MT', 'US-CA']
  };

  const sales: ContactPoint = {
    '@type': 'ContactPoint',
    contactType: 'sales',
    telephone: MAIN_PHONE,
    email: SALES_EMAIL,
    availableLanguage: ['English'],
    areaServed: ['US-WA', 'US-OR', 'US-ID', 'US-MT', 'US-CA']
  };

  const catalog: OfferCatalog = {
    '@type': 'OfferCatalog',
    name: 'Medical Courier Services',
    itemListElement: [
      offerRef('STAT Deliveries', '#service-stat'),
      offerRef('Scheduled Routes', '#service-routes'),
      offerRef('Specialized Equipment Transport', '#service-equipment')
    ]
  };

  return {
    '@type': 'LocalBusiness',
    '@id': ORG_ID,
    name: 'Trius LLC',
    alternateName: 'Trius Medical Courier',
    url: ORIGIN,
    logo: ORIGIN + 'static/logo.png',
    image: [ORIGIN + 'static/hero.jpg', ORIGIN + 'static/fleet.jpg'],
    slogan: 'Reliable medical courier services you can trust.',
    description:
      'Trius LLC provides HIPAA compliant and OSHA compliant medical courier services, including STAT specimen transport, scheduled medical logistics, and specialized equipment delivery across Washington, Oregon, Idaho, Montana, and California.',
    email: `mailto:${DISPATCH_EMAIL}`,
    telephone: MAIN_PHONE,
    priceRange: '$$',
    foundingDate: '2022',
    address,
    geo,
    areaServed: ['Washington', 'Oregon', 'Idaho', 'Montana', 'California'].map((n) => ({ '@type': 'State', name: n })),
    serviceArea: ['Washington', 'Oregon', 'Idaho', 'Montana', 'California'].map((n) => ({ '@type': 'AdministrativeArea', name: n })),
    knowsAbout: [
      'medical courier',
      'specimen transport',
      'STAT delivery',
      'chain of custody',
      'HIPAA compliance',
      'OSHA compliance',
      'temperature controlled transport',
      'biohazard handling',
      'laboratory logistics',
      'hospital logistics'
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59'
      }
    ],
    contactPoint: [support, sales],
    hasOfferCatalog: catalog,
    sameAs: ['https://www.linkedin.com/company/YOUR_LINKEDIN', 'https://www.facebook.com/YOUR_FACEBOOK', 'https://x.com/YOUR_TWITTER']
  };
}

export function webSite(): WebSite {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: ORIGIN,
    name: 'Trius LLC',
    inLanguage: 'en',
    publisher: { '@id': ORG_ID },
    potentialAction: {
      '@type': 'SearchAction',
      target: ORIGIN + 'search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };
}

export function webPageHome(): WebPage {
  return {
    '@type': 'WebPage',
    '@id': ORIGIN + '#webpage-home',
    url: ORIGIN,
    name: 'Medical Courier Services | Trius LLC',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    primaryImageOfPage: ORIGIN + 'static/hero.jpg',
    description:
      'HIPAA and OSHA compliant medical courier services. STAT deliveries, scheduled routes, and specialized equipment transport in WA, OR, ID, MT, and CA.',
    breadcrumb: { '@id': ORIGIN + '#breadcrumb-home' }
  };
}

export function breadcrumbHome(): BreadcrumbList {
  return {
    '@type': 'BreadcrumbList',
    '@id': ORIGIN + '#breadcrumb-home',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: ORIGIN },
      { '@type': 'ListItem', position: 2, name: 'Services', item: ORIGIN + 'services' },
      { '@type': 'ListItem', position: 3, name: 'Contact', item: ORIGIN + 'contact' }
    ]
  };
}

// ---- Services

export function serviceStat(): Service {
  return {
    '@type': 'Service',
    '@id': ORIGIN + '#service-stat',
    name: 'STAT Medical Courier Deliveries',
    serviceType: 'Medical courier',
    category: 'STAT delivery',
    provider: { '@id': ORG_ID },
    areaServed: ['Washington', 'Oregon', 'Idaho', 'Montana', 'California'],
    isRelatedTo: [{ '@id': ORIGIN + '#service-routes' }, { '@id': ORIGIN + '#service-equipment' }],
    description: 'Rapid, secure transport of specimens, organs, and urgent medical equipment with documented chain of custody and real time tracking.',
    termsOfService: ORIGIN + 'terms',
    url: ORIGIN + 'services/stat-delivery',
    hasMeasurement: [
      {
        '@type': 'QuantitativeValue',
        name: 'Response window',
        unitText: 'minutes',
        value: 'YOUR_AVG_MINUTES'
      }
    ],
    offers: {
      '@type': 'Offer',
      url: ORIGIN + 'request-quote?service=stat',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        price: '0'
      }
    }
  };
}

export function serviceRoutes(): Service {
  return {
    '@type': 'Service',
    '@id': ORIGIN + '#service-routes',
    name: 'Scheduled Medical Courier Routes',
    serviceType: 'Medical courier',
    category: 'Scheduled route',
    provider: { '@id': ORG_ID },
    areaServed: ['Washington', 'Oregon', 'Idaho', 'Montana', 'California'],
    description: 'Recurring pickups and deliveries for clinics, labs, and research centers. Route optimization improves reliability and reduces transit time.',
    url: ORIGIN + 'services/scheduled-routes',
    offers: {
      '@type': 'Offer',
      url: ORIGIN + 'request-route-estimate',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        price: '0'
      }
    }
  };
}

// Technology & Innovation Service details
export function serviceTechnology(): Service {
  return {
    '@type': 'Service',
    '@id': ORIGIN + '#service-technology',
    name: 'Technology & Innovation Platform',
    serviceType: 'Medical courier technology',
    category: 'Logistics technology',
    provider: { '@id': ORG_ID },
    areaServed: ['Washington', 'Oregon', 'Idaho', 'Montana', 'California'],
    description:
      'State-of-the-art logistics platform featuring real-time tracking, automated client updates, and advanced route optimization for maximum efficiency and transparency.',
    url: ORIGIN + 'services/technology',
    features: [
      'Real-time GPS tracking and automated updates',
      'Advanced route optimization algorithms',
      'Digital chain-of-custody documentation',
      'Automated notification system for stakeholders'
    ],
    offers: {
      '@type': 'Offer',
      url: ORIGIN + 'contact?service=technology',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        price: '0'
      }
    }
  };
}

// Training & Expertise Service details
export function serviceTraining(): Service {
  return {
    '@type': 'Service',
    '@id': ORIGIN + '#service-training',
    name: 'Professional Training & Expertise',
    serviceType: 'Medical courier training',
    category: 'Compliance training',
    provider: { '@id': ORG_ID },
    areaServed: ['Washington', 'Oregon', 'Idaho', 'Montana', 'California'],
    description:
      'Comprehensive training programs ensuring HIPAA and OSHA compliance, specimen handling expertise, and continuous professional development for all couriers.',
    url: ORIGIN + 'services/training',
    curriculum: [
      'HIPAA Privacy and PHI Protection',
      'OSHA Safety and Biohazard Procedures',
      'Proper Specimen Handling and Chain of Custody',
      'Temperature-Controlled Transport Protocols',
      'Professional Communication and Customer Service',
      'Continuous Training and Quality Improvement'
    ],
    offers: {
      '@type': 'Offer',
      url: ORIGIN + 'contact?service=training',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        price: '0'
      }
    }
  };
}

export function serviceEquipment(): Service {
  return {
    '@type': 'Service',
    '@id': ORIGIN + '#service-equipment',
    name: 'Specialized Medical Equipment Transport',
    serviceType: 'Medical courier',
    category: 'Specialized equipment',
    provider: { '@id': ORG_ID },
    areaServed: ['Washington', 'Oregon', 'Idaho', 'Montana', 'California'],
    description: 'Secure delivery of fragile or regulated medical devices with trained handlers and temperature controlled or secure vehicles as needed.',
    url: ORIGIN + 'services/specialized-equipment',
    offers: {
      '@type': 'Offer',
      url: ORIGIN + 'contact?service=equipment',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        price: '0'
      }
    }
  };
}

// ---- Page specific graphs

export function graphHome(): Graph {
  return withGraph(localBusiness(), webSite(), webPageHome(), breadcrumbHome());
}

export function graphServiceStat(): Graph {
  return withGraph(localBusiness(), webSite(), serviceStat());
}

export function graphServiceRoutes(): Graph {
  return withGraph(localBusiness(), webSite(), serviceRoutes());
}

export function graphServiceEquipment(): Graph {
  return withGraph(localBusiness(), webSite(), serviceEquipment());
}

// ---- Utilities

function withGraph(...items: any[]): Graph {
  return { '@context': 'https://schema.org', '@graph': items };
}

function offerRef(name: string, hashRef: string): Offer {
  return {
    '@type': 'Offer',
    name,
    itemOffered: { '@id': ORIGIN + hashRef }
  };
}
```

---

## 3) `src/components/SEO.astro`

Single head component that injects meta and JSON-LD using `astro-seo-schema`.

```astro
---
// src/components/SEO.astro
import { Schema } from 'astro-seo-schema';

export interface Props {
  title: string;
  description?: string;
  image?: string;
  noindex?: boolean;
  graph?: Record<string, any>[] | { '@context': string; '@graph': any[] }; // accept Graph or array
}

const { title, description = '', image, noindex = false, graph } = Astro.props;

// Allow either Graph or array of nodes
const json = Array.isArray(graph) ? { '@context': 'https://schema.org', '@graph': graph } : (graph ?? null);
---

<title>{title}</title>
<meta name="description" content={description} />
<link rel="canonical" href={Astro.url.href} />
{noindex && <meta name="robots" content="noindex,nofollow" />}

<meta property="og:title" content={title} />
{description && <meta property="og:description" content={description} />}
{image && <meta property="og:image" content={image} />}

{json && <Schema item={json} />}
```

---

## 4) Example pages

### `src/pages/index.astro`

```astro
---
import SEO from '@/components/SEO.astro';
import { graphHome } from '@/lib/schema';
const schema = graphHome();
---

<html lang="en">
  <head>
    <SEO
      title="Medical Courier Services | Trius LLC"
      description="HIPAA and OSHA compliant STAT deliveries, scheduled routes, and specialized equipment transport across WA, OR, ID, MT, and CA."
      graph={schema}
    />
  </head>
  <body>
    <!-- Home content -->
  </body>
</html>
```

### `src/pages/services/stat-delivery.astro`

```astro
---
import SEO from '@/components/SEO.astro';
import { graphServiceStat } from '@/lib/schema';
const schema = graphServiceStat();
---

<html lang="en">
  <head>
    <SEO
      title="STAT Medical Courier Deliveries | Trius LLC"
      description="Rapid, secure, HIPAA compliant transport for specimens, organs, and critical medical equipment with chain of custody and real time tracking."
      graph={schema}
    />
  </head>
  <body>
    <!-- STAT service content -->
  </body>
</html>
```

Repeat similarly for the routes and equipment pages using `graphServiceRoutes()` and `graphServiceEquipment()`.

---

## 5) `astro.config.mjs`

Enable sitemap with the correct site origin.

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://trius.delivery',
  integrations: [sitemap()]
});
```

---

## 6) Quick checks

- Keep `@id` values stable across all pages.
- Use absolute URLs everywhere.
- Validate in Google Rich Results and Schema Markup Validator after you fill the placeholders.
- Do not collect PHI in forms. Your schema reflects operational fields only.
