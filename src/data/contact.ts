// src/data/contact.ts
// Single source of truth for Trius LLC NAP (name, address, phone) data.
// Every component, page, and schema builder should import from here rather
// than hardcoding contact details, so local-SEO citations stay consistent.

export const COMPANY_NAME = 'Trius LLC' as const;
export const COMPANY_ALT_NAME = 'Trius Medical Courier' as const;

// Phone
export const PHONE_DISPLAY = '(253) 231-0615' as const;
export const PHONE_E164 = '+12532310615' as const;
export const PHONE_E164_DASHED = '+1-253-231-0615' as const;
export const PHONE_TEL_HREF = `tel:${PHONE_E164}` as const;

// Email
export const DISPATCH_EMAIL = 'Triusllccouriers@outlook.com' as const;
export const SALES_EMAIL = 'Triusllccouriers@outlook.com' as const;
export const EMAIL_HREF = `mailto:${DISPATCH_EMAIL}` as const;

// Postal address (P.O. Box; canonical NAP address)
export interface PostalAddressParts {
    readonly streetAddress: string;
    readonly locality: string;
    readonly region: string;
    readonly postalCode: string;
    readonly country: string;
}

export const ADDRESS: PostalAddressParts = {
    streetAddress: 'P.O. Box 1304',
    locality: 'Spanaway',
    region: 'WA',
    postalCode: '98387',
    country: 'US'
} as const;

/** "Spanaway, WA" */
export const ADDRESS_CITY_STATE = `${ADDRESS.locality}, ${ADDRESS.region}` as const;
/** "Spanaway, WA 98387" */
export const ADDRESS_LINE_2 = `${ADDRESS.locality}, ${ADDRESS.region} ${ADDRESS.postalCode}` as const;
/** "P.O. Box 1304, Spanaway, WA 98387" */
export const ADDRESS_SINGLE_LINE = `${ADDRESS.streetAddress}, ${ADDRESS_LINE_2}` as const;

// Hours
export const HOURS_TEXT = '24 hours a day, 7 days a week, 365 days a year' as const;
export const HOURS_SHORT = '24/7' as const;

// Company facts
export const FOUNDED_YEAR = '2022' as const;
export const FOUNDER_NAME = 'Kevin Hyatt' as const;

// Service footprint
export const SERVICE_STATES = ['Washington', 'Oregon', 'Idaho', 'Montana', 'California'] as const;
export const SERVICE_STATES_DISPLAY = ['Washington', 'Oregon', 'Idaho', 'Montana', 'Northern California'] as const;
export const SERVICE_STATE_CODES = ['US-WA', 'US-OR', 'US-ID', 'US-MT', 'US-CA'] as const;

// Location phrasing for prose (keeps the Tacoma market keyword without
// contradicting the NAP city).
export const BASED_IN_SHORT = 'Based in Spanaway, WA' as const;
export const BASED_IN_PHRASE = 'Based in Spanaway, WA, serving the greater Tacoma area' as const;
export const HEADQUARTERED_IN = 'Spanaway, Washington (greater Tacoma area)' as const;
