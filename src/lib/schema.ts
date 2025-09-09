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
    ImageObject
} from 'schema-dts';

// ---- Site constants
export const ORIGIN = 'https://trius.delivery/';
export const ORG_ID = ORIGIN + '#org';
export const WEBSITE_ID = ORIGIN + '#website';

// Optional shared contact info
export const DISPATCH_EMAIL = 'Triusllccouriers@outlook.com';
export const SALES_EMAIL = 'Triusllccouriers@outlook.com';
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
            target: ORIGIN + 'search?q={search_term_string}'
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
        primaryImageOfPage: {
            '@type': 'ImageObject',
            url: ORIGIN + 'static/hero.jpg'
        },
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
        description:
            'Recurring pickups and deliveries for clinics, labs, and research centers. Route optimization improves reliability and reduces transit time.',
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
