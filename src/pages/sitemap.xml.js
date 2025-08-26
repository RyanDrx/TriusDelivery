export async function GET() {
  const pages = [
    '',
    '/about',
    '/contact', 
    '/coverage',
    '/privacy',
    '/services',
    '/services/scheduled-routes',
    '/services/specialized-equipment',
    '/services/stat-delivery',
    '/terms'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>https://trius.delivery${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
