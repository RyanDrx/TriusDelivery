import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';
import sitemap from '@astrojs/sitemap';
import { sanityConfig } from './src/utils/sanity-client';

// https://astro.build/config
export default defineConfig({
    site: 'https://trius.delivery',
    image: {
        domains: ['cdn.sanity.io']
    },
    integrations: [
        tailwind({
            applyBaseStyles: false
        }),
        sitemap({
            changefreq: 'weekly',
            priority: 0.7,
            lastmod: new Date(),
            sitemapSize: 10000
        }),
        // Only add Sanity integration if projectId is properly configured
        sanityConfig.projectId !== 'placeholder-project-id' ? sanity(sanityConfig) : null
    ].filter(Boolean),
    vite: {
        server: {
            hmr: { path: '/vite-hmr/' },
            allowedHosts: ['.netlify.app']
        }
    },
    server: {
        port: 3000
    }
});
