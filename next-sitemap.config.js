/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.tailwindfan.com',
  exclude: ['/library/**/*.html'],
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
