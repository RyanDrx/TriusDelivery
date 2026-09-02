import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import { sanityConfig } from './src/utils/sanity-client';

// https://astro.build/config
export default defineConfig({
    site: 'https://trius.delivery',
    output: 'static',
    compressHTML: true,
    image: {
        domains: ['cdn.sanity.io']
    },
    integrations: [
        icon(),
        tailwind({
            applyBaseStyles: false
        }),
        sitemap({
            changefreq: 'weekly',
            priority: 0.7,
            // Use a second-precision timestamp; some strict sitemap parsers reject
            // millisecond precision and treat the document as unreadable.
            lastmod: new Date(new Date().toISOString().split('.')[0] + 'Z'),
            // Pages that should not be advertised to crawlers:
            // - /thanks: post-submission page, already noindex
            // - /404: error route, already noindex
            filter: (page) => !page.includes('/thanks') && !page.includes('/404'),
            // Per-page priority so the sitemap reflects which URLs we want indexed first.
            serialize(item) {
                const url = new URL(item.url);
                const path = url.pathname.replace(/\/$/, '') || '/';
                let priority = 0.7;
                if (path === '/') priority = 1.0;
                else if (path.startsWith('/services')) priority = 0.9;
                else if (path === '/contact') priority = 0.9;
                else if (path === '/about' || path === '/coverage') priority = 0.7;
                else if (path === '/privacy' || path === '/terms') priority = 0.3;
                return { ...item, priority };
            }
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
