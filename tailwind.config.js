/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#1c3c3d', // Trius Blue (Trust/Medical)
                    dark: '#1b2b2b',
                    light: '#30696b'
                },
                secondary: {
                    DEFAULT: '#9f7358', // Trius Brown (Compliance/Safety)
                    dark: '#7d5c44',
                    light: '#b8895f'
                },
                accent: {
                    DEFAULT: '#C53030', // Alert Red (STAT/Urgency)
                    dark: '#9B2C2C',
                    light: '#E53E3E'
                },
                neutral: {
                    DEFAULT: '#4A5568', // Professional Gray
                    dark: '#2D3748',
                    light: '#718096'
                },
                'base-100': '#FFFFFF', // White backgrounds
                'base-200': '#F7FAFC', // Light Gray Background
                'base-300': '#E2E8F0', // Slightly darker gray
                'base-content': '#4A5568' // Body text gray (matches neutral)
            },
            fontFamily: {
                heading: ['Inter', 'Montserrat', 'sans-serif'],
                body: ['Inter', 'Roboto', 'sans-serif'],
                brand: ['Orbitron', 'Inter', 'sans-serif']
            }
        }
    }
};
