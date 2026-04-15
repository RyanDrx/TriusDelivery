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
