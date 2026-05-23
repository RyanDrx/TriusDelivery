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
    ContactPoint,
    Person,
    State,
    City,
    FAQPage,
    ContactPage,
} from 'schema-dts';
import { homeFaqs, equipmentFaqs, routesFaqs, statFaqs, coverageHighlights } from '../data/seoContent';

// ---- Site constants
export const ORIGIN = 'https://trius.delivery/';
export const ORG_ID = ORIGIN + '#org';
export const WEBSITE_ID = ORIGIN + '#website';
export const FOUNDER_ID = ORIGIN + '#kevin-hyatt';

// Optional shared contact info
export const DISPATCH_EMAIL = 'Triusllccouriers@outlook.com';
export const SALES_EMAIL = 'Triusllccouriers@outlook.com';
export const MAIN_PHONE = '+1-253-231-0615';

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
        latitude: '47.1379',
        longitude: '-122.4594'
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
        logo: ORIGIN + 'logos/Trius_Logo.svg',
        image: [ORIGIN + 'Images/Courier%20handoff.webp', ORIGIN + 'Images/vehicle%20package.webp'],
        slogan: 'Reliable medical courier services you can trust.',
        description:
            'Trius LLC provides professional medical courier services, including STAT specimen transport, scheduled medical logistics, and specialized equipment delivery across Washington, Oregon, Idaho, Montana, and California.',
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
            'medical logistics',
            'secure transport',
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
        founder: { '@id': FOUNDER_ID },
        // sameAs: populate with LinkedIn company page, Google Business Profile,
        // BBB profile, and any industry directory listings as they're created.
        sameAs: []
    };
}

export function founder(): Person {
    return {
        '@type': 'Person',
        '@id': FOUNDER_ID,
        name: 'Kevin Hyatt',
        jobTitle: 'Founder',
        worksFor: { '@id': ORG_ID },
        image: ORIGIN + 'kevin_profile.webp',
        description:
            'Founder of Trius LLC. Background in orthopedic operations and logistics. Started Trius in 2022 to deliver the reliability and accountability that medical professionals deserve.'
    };
}

export function webSite(): WebSite {
    return {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: ORIGIN,
        name: 'Trius LLC',
        inLanguage: 'en',
        publisher: { '@id': ORG_ID }
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
        primaryImageOfPage: {
            '@type': 'ImageObject',
            url: ORIGIN + 'Images/medical%20back%20stehescope.webp'
        },
        description: 'Professional medical courier services. STAT deliveries, scheduled routes, and specialized equipment transport in WA, OR, ID, MT, and CA.',
        breadcrumb: { '@id': ORIGIN + '#breadcrumb-home' }
    };
}

export function breadcrumbHome(): BreadcrumbList {
    return {
        '@type': 'BreadcrumbList',
        '@id': ORIGIN + '#breadcrumb-home',
        itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: ORIGIN }]
    };
}

export function breadcrumb(items: Array<{ name: string; url: string }>, id?: string): BreadcrumbList {
    return {
        '@type': 'BreadcrumbList',
        ...(id && { '@id': id }),
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: ORIGIN },
            ...items.map((item, i) => ({
                '@type': 'ListItem' as const,
                position: i + 2,
                name: item.name,
                item: ORIGIN + item.url.replace(/^\//, '')
            }))
        ]
    };
}

// ---- Page-level helpers

interface WebPageOpts {
    path: string;
    name: string;
    description: string;
    image?: string;
    breadcrumbId?: string;
}

export function webPage(opts: WebPageOpts): WebPage {
    const url = ORIGIN + opts.path.replace(/^\//, '');
    const id = `${url}#webpage`;
    const buildDate = new Date().toISOString().split('T')[0];
    return {
        '@type': 'WebPage',
        '@id': id,
        url,
        name: opts.name,
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': ORG_ID },
        description: opts.description,
        inLanguage: 'en',
        ...(opts.image && {
            primaryImageOfPage: {
                '@type': 'ImageObject',
                url: ORIGIN + opts.image.replace(/^\//, '')
            }
        }),
        ...(opts.breadcrumbId && { breadcrumb: { '@id': opts.breadcrumbId } }),
        datePublished: '2022-04-15',
        dateModified: buildDate
    };
}

export function faqPage(id: string, faqs: ReadonlyArray<{ question: string; answer: string }>): FAQPage {
    return {
        '@type': 'FAQPage',
        '@id': id,
        mainEntity: faqs.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer
            }
        }))
    };
}

export function statesServed(): State[] {
    return coverageHighlights.map((s) => {
        const slug = s.name.toLowerCase().replace(/\s+/g, '-');
        const cities: City[] = s.cities.map((c) => ({
            '@type': 'City',
            name: c
        }));
        return {
            '@type': 'State',
            '@id': `${ORIGIN}#area-${slug}`,
            name: s.name,
            description: s.description,
            containedInPlace: { '@type': 'Country', name: 'United States' },
            containsPlace: cities
        };
    });
}

export function contactPage(): ContactPage {
    const url = ORIGIN + 'contact';
    return {
        '@type': 'ContactPage',
        '@id': `${url}#webpage`,
        url,
        name: 'Contact Trius LLC | Medical Courier Services',
        description:
            'Contact Trius LLC for medical courier services. 24/7 STAT line available. Request quotes for scheduled routes and specialized equipment transport.',
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': ORG_ID },
        inLanguage: 'en',
        datePublished: '2022-04-15',
        dateModified: new Date().toISOString().split('T')[0],
        breadcrumb: { '@id': `${url}#breadcrumb` }
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
        offers: {
            '@type': 'Offer',
            url: ORIGIN + 'contact?service=stat',
            availability: 'https://schema.org/InStock',
            priceSpecification: {
                '@type': 'PriceSpecification',
                priceCurrency: 'USD',
                price: undefined,
                eligibleTransactionVolume: {
                    '@type': 'PriceSpecification',
                    name: 'Contact for custom quote'
                }
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
        description:
            'Recurring pickups and deliveries for clinics, labs, and research centers. Route optimization improves reliability and reduces transit time.',
        url: ORIGIN + 'services/scheduled-routes',
        offers: {
            '@type': 'Offer',
            url: ORIGIN + 'contact?service=routes',
            availability: 'https://schema.org/InStock',
            priceSpecification: {
                '@type': 'PriceSpecification',
                priceCurrency: 'USD',
                price: undefined,
                eligibleTransactionVolume: {
                    '@type': 'PriceSpecification',
                    name: 'Contact for custom quote'
                }
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
                price: undefined,
                eligibleTransactionVolume: {
                    '@type': 'PriceSpecification',
                    name: 'Contact for custom quote'
                }
            }
        }
    };
}

// ---- Page specific graphs

export function graphHome(): Graph {
    return withGraph(localBusiness(), webSite(), webPageHome(), breadcrumbHome(), homeFaqPage());
}

export function graphAbout(): Graph {
    const breadcrumbId = ORIGIN + 'about#breadcrumb';
    return withGraph(
        localBusiness(),
        webSite(),
        founder(),
        webPage({
            path: 'about',
            name: 'About Trius LLC | Medical Courier Services',
            description:
                'Learn about Trius LLC, a healthcare-only medical courier service founded in 2022 by Kevin Hyatt and headquartered in Tacoma, Washington.',
            image: 'kevin_profile.webp',
            breadcrumbId
        }),
        breadcrumb([{ name: 'About', url: 'about' }], breadcrumbId)
    );
}

export function graphCoverage(): Graph {
    const breadcrumbId = ORIGIN + 'coverage#breadcrumb';
    return withGraph(
        localBusiness(),
        webSite(),
        webPage({
            path: 'coverage',
            name: 'Coverage Areas | Trius LLC Medical Courier',
            description:
                'Trius medical courier coverage across Washington, Oregon, Idaho, Montana, and Northern California. State-by-state service areas and major cities.',
            breadcrumbId
        }),
        breadcrumb([{ name: 'Coverage', url: 'coverage' }], breadcrumbId),
        ...statesServed()
    );
}

export function graphContact(): Graph {
    const breadcrumbId = ORIGIN + 'contact#breadcrumb';
    return withGraph(
        localBusiness(),
        webSite(),
        contactPage(),
        breadcrumb([{ name: 'Contact', url: 'contact' }], breadcrumbId)
    );
}

export function graphServices(): Graph {
    const breadcrumbId = ORIGIN + 'services#breadcrumb';
    return withGraph(
        localBusiness(),
        webSite(),
        webPage({
            path: 'services',
            name: 'Medical Courier Services | Trius LLC',
            description:
                'Trius medical courier services: STAT specimen transport, scheduled lab routes, and specialized equipment delivery across the Pacific Northwest and Northern California.',
            breadcrumbId
        }),
        serviceStat(),
        serviceRoutes(),
        serviceEquipment(),
        breadcrumb([{ name: 'Services', url: 'services' }], breadcrumbId)
    );
}

export function graphServiceStat(): Graph {
    const path = 'services/stat-delivery';
    const breadcrumbId = ORIGIN + path + '#breadcrumb';
    return withGraph(
        localBusiness(),
        webSite(),
        serviceStat(),
        webPage({
            path,
            name: 'STAT Medical Courier Deliveries | Trius LLC',
            description:
                'Urgent STAT medical courier service for specimens, organs, surgical instruments, and other time-sensitive medical materials. 24/7 dispatch with verified chain of custody.',
            breadcrumbId
        }),
        faqPage(ORIGIN + path + '#faq', statFaqs),
        breadcrumb(
            [
                { name: 'Services', url: 'services' },
                { name: 'STAT Deliveries', url: path }
            ],
            breadcrumbId
        )
    );
}

export function graphServiceRoutes(): Graph {
    const path = 'services/scheduled-routes';
    const breadcrumbId = ORIGIN + path + '#breadcrumb';
    return withGraph(
        localBusiness(),
        webSite(),
        serviceRoutes(),
        webPage({
            path,
            name: 'Scheduled Medical Courier Routes | Trius LLC',
            description:
                'Recurring medical courier routes for laboratories, hospitals, clinics, and research centers. Daily, weekly, or custom schedules with dedicated couriers.',
            breadcrumbId
        }),
        faqPage(ORIGIN + path + '#faq', routesFaqs),
        breadcrumb(
            [
                { name: 'Services', url: 'services' },
                { name: 'Scheduled Routes', url: path }
            ],
            breadcrumbId
        )
    );
}

export function graphServiceEquipment(): Graph {
    const path = 'services/specialized-equipment';
    const breadcrumbId = ORIGIN + path + '#breadcrumb';
    return withGraph(
        localBusiness(),
        webSite(),
        serviceEquipment(),
        webPage({
            path,
            name: 'Specialized Medical Equipment Transport | Trius LLC',
            description:
                'Secure transport of fragile, regulated, and temperature-sensitive medical equipment. Temperature-controlled vehicles, hazmat-certified handlers, full insurance.',
            breadcrumbId
        }),
        faqPage(ORIGIN + path + '#faq', equipmentFaqs),
        breadcrumb(
            [
                { name: 'Services', url: 'services' },
                { name: 'Specialized Equipment', url: path }
            ],
            breadcrumbId
        )
    );
}

export function graphLegal(slug: 'privacy' | 'terms', name: string, description: string): Graph {
    const breadcrumbId = ORIGIN + slug + '#breadcrumb';
    return withGraph(
        localBusiness(),
        webSite(),
        webPage({
            path: slug,
            name,
            description,
            breadcrumbId
        }),
        breadcrumb([{ name, url: slug }], breadcrumbId)
    );
}

export function graphNotFound(): Graph {
    return withGraph(
        localBusiness(),
        webSite(),
        webPage({
            path: '404',
            name: 'Page Not Found | Trius LLC',
            description: 'The page you requested could not be found. Return to Trius LLC for reliable medical courier services across the Pacific Northwest and Northern California.'
        })
    );
}

export function graphThanks(): Graph {
    return withGraph(
        localBusiness(),
        webSite(),
        webPage({
            path: 'thanks',
            name: 'Request Received | Trius LLC',
            description: 'Your medical courier quote request was received. Trius LLC will respond within 24 hours. For urgent STAT pickups, call (253) 231-0615.'
        })
    );
}

// ---- Utilities

function withGraph(
    ...items: (LocalBusiness | WebSite | WebPage | BreadcrumbList | Service | Person | State | FAQPage | ContactPage)[]
): Graph {
    return { '@context': 'https://schema.org', '@graph': items };
}

function offerRef(name: string, hashRef: string): Offer {
    return {
        '@type': 'Offer',
        name,
        itemOffered: { '@id': ORIGIN + hashRef }
    };
}

function homeFaqPage() {
    return {
        '@type': 'FAQPage',
        '@id': ORIGIN + '#faq-home',
        mainEntity: homeFaqs.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer
            }
        }))
    };
}
