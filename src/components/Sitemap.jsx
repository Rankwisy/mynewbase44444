import { useEffect } from "react";

/**
 * Sitemap Component
 * Generates and provides access to sitemap.xml data
 * 
 * Usage: Add this component to your app to enable sitemap generation
 * The sitemap will be accessible at the root level via proper routing
 */

export const generateSitemap = () => {
  const baseUrl = window.location.origin;
  const currentDate = new Date().toISOString().split('T')[0];
  
  const pages = [
    { path: '', priority: '1.0', changefreq: 'daily' }, // Home
    { path: '/services', priority: '0.9', changefreq: 'weekly' },
    { path: '/fleet', priority: '0.9', changefreq: 'weekly' },
    { path: '/testimonials', priority: '0.8', changefreq: 'weekly' },
    { path: '/about', priority: '0.7', changefreq: 'monthly' },
    { path: '/contact', priority: '0.8', changefreq: 'monthly' }
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${page.path}"/>
    <xhtml:link rel="alternate" hreflang="fr" href="${baseUrl}${page.path}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${page.path}"/>
  </url>`).join('\n')}
</urlset>`;

  return xml;
};

export default function Sitemap() {
  useEffect(() => {
    // Generate sitemap and make it available
    const sitemapXml = generateSitemap();
    
    // Store in sessionStorage for potential download or access
    sessionStorage.setItem('sitemap', sitemapXml);
    
    // Log sitemap for verification (remove in production)
    console.log('Sitemap generated:', sitemapXml);
    
    // Add sitemap link to head
    let link = document.querySelector('link[rel="sitemap"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'sitemap';
      link.type = 'application/xml';
      link.href = `${window.location.origin}/sitemap.xml`;
      document.head.appendChild(link);
    }
  }, []);

  return null;
}

/**
 * Robots.txt content for reference
 * This should be served at /robots.txt
 */
export const generateRobotsTxt = () => {
  const baseUrl = window.location.origin;
  
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow sensitive paths (if any)
# Disallow: /admin/
# Disallow: /api/
`;
};