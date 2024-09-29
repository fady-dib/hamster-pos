const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');

// Define your site URL and all the routes that need to be included in the sitemap
const siteUrl = 'http://localhost:3000';
const routes = [
    '/'
];

// Generate the sitemap
const generateSitemap = async () => {
    try {
        const sitemap = new SitemapStream({ hostname: siteUrl });

        // Add each route to the sitemap
        routes.forEach(route => {
            sitemap.write({ url: route, changefreq: 'weekly', priority: 0.8 });
        });

        // End sitemap stream
        sitemap.end();

        // Write sitemap to file
        const sitemapXML = await streamToPromise(sitemap);
        fs.writeFileSync('./public/sitemap.xml', sitemapXML.toString());

        console.log('Sitemap generated successfully!');
    } catch (error) {
        console.error('Error generating sitemap:', error);
    }
};

generateSitemap();
