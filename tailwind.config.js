/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0e70a4', // Trius Blue (matches logo)
                    dark: '#0a5680',
                    light: '#2d8dbe'
                },
                secondary: {
                    DEFAULT: '#5fa843', // Healthcare Green (bridges to logo green)
                    dark: '#4a8a33',
                    light: '#97cc6c'
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
                heading: ['Inter', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
                brand: ['Orbitron', 'sans-serif']
            }
        }
    }
};
