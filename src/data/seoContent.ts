import { PHONE_DISPLAY } from './contact';

export const homeFaqs = [
    {
        question: 'What areas does Trius serve for medical courier deliveries?',
        answer: 'Trius provides medical courier coverage across Washington, Oregon, Idaho, Montana, and Northern California. STAT availability is offered in core service markets, and scheduled routes support healthcare organizations throughout the broader regional network.'
    },
    {
        question: 'What types of medical items can Trius transport?',
        answer: 'Trius handles medical specimens, bloodwork, pathology materials, pharmaceuticals, surgical instruments, diagnostic equipment, and other time-sensitive healthcare deliveries that require secure handling, chain of custody, and reliable timing.'
    },
    {
        question: 'Do you offer 24/7 STAT medical courier service?',
        answer: 'Yes. Trius offers urgent STAT medical courier service for critical deliveries that cannot wait for a routine route. This includes immediate-response specimen moves, equipment handoffs, and other time-sensitive healthcare logistics.'
    },
    {
        question: 'Can Trius build recurring medical courier routes?',
        answer: 'Yes. Trius sets up recurring pickup and delivery schedules for laboratories, hospitals, clinics, surgery centers, pharmacies, and research facilities that need dependable daily, weekly, or custom route service.'
    }
] as const;

export const statFaqs = [
    {
        question: 'What qualifies as a STAT medical courier delivery?',
        answer: 'STAT delivery covers any urgent medical transport that cannot wait for a scheduled route. Common cases include specimen runs to reference laboratories, organ transport for transplant cases, urgent surgical instrument or implant delivery, and emergency pharmaceutical handoffs.'
    },
    {
        question: 'How quickly can Trius respond to a STAT request?',
        answer: 'In core markets, Trius dispatches within 30 minutes of an authorized STAT request. Response time varies by region: under 2 hours in Washington and Northern California, under 3 hours in Oregon, and under 4 to 6 hours in Idaho and Montana.'
    },
    {
        question: 'Do you provide chain-of-custody documentation for STAT deliveries?',
        answer: 'Yes. Every STAT pickup includes verified chain of custody from the moment Trius takes possession through final handoff. Documentation includes scanned barcodes, photo verification, signature confirmation, and timestamped GPS tracking.'
    },
    {
        question: 'Is STAT service available 24/7?',
        answer: `Yes. The Trius STAT line at ${PHONE_DISPLAY} is staffed 24 hours a day, 7 days a week, 365 days a year. A real person answers, not a menu or callback queue, because middle-of-the-night STAT cases cannot wait.`
    },
    {
        question: 'How is STAT delivery priced compared to scheduled service?',
        answer: 'STAT pricing reflects priority dispatch and dedicated routing. Quotes are provided in advance with no surge fees or after-hours markups. The Tuesday rate equals the Friday-midnight rate.'
    }
] as const;

export const routesFaqs = [
    {
        question: 'How do scheduled medical courier routes work?',
        answer: 'Trius designs recurring pickup and delivery schedules around your workflow. We assess pickup points, drop-off locations, and timing requirements, then build an optimized route that runs daily, weekly, or on whatever cadence your operation needs.'
    },
    {
        question: 'Can scheduled routes flex when our needs change?',
        answer: 'Yes. Schedule adjustments, additional stops, route consolidations, and seasonal volume changes are part of an ongoing partnership. Most adjustments are handled via a quick call with dispatch.'
    },
    {
        question: 'Will the same driver handle our route every day?',
        answer: 'Trius assigns dedicated couriers to recurring routes whenever possible so your team works with familiar faces who know your site protocols, access points, and contacts. Backup coverage is built in for vacations and sick days.'
    },
    {
        question: 'How are scheduled routes priced compared to STAT?',
        answer: 'Scheduled routes use bulk transport pricing tied to route frequency, distance, and stop count. The per-pickup cost is meaningfully lower than STAT because the route is planned and shared across multiple customers when overlap exists.'
    },
    {
        question: 'What types of healthcare organizations use scheduled routes?',
        answer: 'Laboratories receiving daily specimen runs, hospitals running interoffice transfers, surgery centers with regular implant or instrument turnaround, clinics with multi-site coordination, and research facilities moving samples between labs.'
    }
] as const;

export const equipmentFaqs = [
    {
        question: 'What medical equipment does Trius transport?',
        answer: 'Trius handles orthopedic implant trays, surgical instruments, diagnostic devices, temperature-sensitive pharmaceuticals, biohazard materials, fragile lab equipment, and other regulated medical cargo requiring specialized handling.'
    },
    {
        question: 'Do you offer temperature-controlled transport?',
        answer: 'Yes. Trius operates temperature-controlled vehicles for cold-chain transport of vaccines, pharmaceuticals, lab samples, and other heat-sensitive medical materials. Temperature logs are documented from pickup through delivery.'
    },
    {
        question: 'Are your drivers trained for biohazard or hazmat handling?',
        answer: 'Yes. Trius drivers are certified for biohazard materials and hazmat-classified medical cargo. Training covers safe packaging, secondary containment, spill response, and DOT-compliant labeling.'
    },
    {
        question: 'How is fragile or expensive equipment insured during transport?',
        answer: 'Every Trius pickup carries commercial cargo coverage plus liability insurance. High-value equipment, including $40K+ implant trays, is covered without policy adjustments. Insurance details are available on request.'
    },
    {
        question: 'Can you handle implant trays and surgical instruments?',
        answer: 'Yes. Trius drivers are SetTrax and Casechek certified, meaning they log into the same case management systems your sterile processing department uses. Scan, verify, confirm. No training lag on day one.'
    }
] as const;

export const coverageHighlights = [
    {
        name: 'Washington',
        serviceLevel: '24/7 STAT and scheduled routes',
        responseTime: 'Under 2 hours in core markets',
        description: 'Regional support for hospitals, laboratories, surgery centers, and clinic networks across the Puget Sound and major statewide corridors.',
        cities: ['Seattle', 'Tacoma', 'Spokane', 'Bellevue', 'Everett', 'Olympia', 'Federal Way', 'Kent']
    },
    {
        name: 'Oregon',
        serviceLevel: '24/7 STAT and scheduled routes',
        responseTime: 'Under 3 hours in core markets',
        description:
            'Coverage for healthcare facilities throughout the Portland metro, the Willamette Valley, and major medical delivery lanes across the state.',
        cities: ['Portland', 'Eugene', 'Salem', 'Bend', 'Medford', 'Hillsboro', 'Beaverton', 'Gresham']
    },
    {
        name: 'Idaho',
        serviceLevel: 'Scheduled routes and equipment transport',
        responseTime: 'Under 4 hours in core markets',
        description:
            'Support for laboratories, clinics, and specialty healthcare operations with scheduled courier coverage and controlled equipment handoffs.',
        cities: ['Boise', 'Meridian', 'Nampa', 'Idaho Falls', 'Pocatello', 'Twin Falls', 'Lewiston', 'Caldwell']
    },
    {
        name: 'Montana',
        serviceLevel: 'Scheduled routes and equipment transport',
        responseTime: 'Under 6 hours in core markets',
        description:
            'Regional medical logistics support for hospitals, research teams, and healthcare vendors moving sensitive materials across longer distances.',
        cities: ['Billings', 'Missoula', 'Great Falls', 'Bozeman', 'Helena', 'Kalispell', 'Butte', 'Whitefish']
    },
    {
        name: 'Northern California',
        serviceLevel: '24/7 STAT and scheduled routes',
        responseTime: 'Under 2 hours in core markets',
        description:
            'Healthcare courier support for high-density medical systems, laboratories, and device teams throughout Northern California service corridors.',
        cities: ['San Francisco', 'Sacramento', 'San Jose', 'Oakland', 'Santa Rosa', 'Stockton', 'Modesto', 'Palo Alto']
    }
] as const;
