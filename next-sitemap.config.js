module.exports = {
  siteUrl: 'https://marx-blog-taupe.vercel.app',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'], // <= exclude here
  robotsTxtOptions: {
  additionalSitemaps: [ 
    'https://marx-blog-taupe.vercel.app/server-sitemap.xml', // <==== Add here 
  ], 
}, 
}