module.exports = {
  siteMetadata: {
    title: "RBL Art Designs - Tech For the People",
    author: "Salem Aziel",
    siteUrl: "https://rblartdesign.com",
    siteImage: "/static/assets/bg.jpg",
    description: "Tech for the people. Web development and tech consulting.",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets/`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'RBL Art Designs - Tech for the people. Web development and tech consulting.',
        short_name: 'RBL Art Designs',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'minimal-ui',
        icon: 'static/assets/logo-idea1-150px-whiteshadow.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '2',
        matomoUrl: 'https://m.rblartdesign.com',
        siteUrl: 'https://rblartdesign.com',
        matomoJsScript: 'stats.js',
        matomoPhpScript: 'stats.php',
        disableCookies: true,
        respectDnt: true,
      }
    },
    'gatsby-plugin-remove-generator',
//    {
//      resolve: `gatsby-plugin-gdpr-cookies`,
//      options: {
//        googleAnalytics: {
//          trackingId: '', // leave empty if you want to disable the tracker
//          cookieName: 'gatsby-gdpr-google-analytics', // default
//          anonymize: true, // default
//          allowAdFeatures: false // default
//        },
//        googleTagManager: {
//          trackingId: '', // leave empty if you want to disable the tracker
//          cookieName: 'gatsby-gdpr-google-tagmanager', // default
//          dataLayerName: 'dataLayer', // default
//        },
//        facebookPixel: {
//          pixelId: '', // leave empty if you want to disable the tracker
//          cookieName: 'gatsby-gdpr-facebook-pixel', // default
//        },
//        tikTokPixel: {
//          pixelId: '', // leave empty if you want to disable the tracker
//          cookieName: 'gatsby-gdpr-tiktok-pixel', // default
//        },
//      hotjar: {
//        hjid: '0000000',
//        hjsv: '6',
//        cookieName: 'gatsby-gdpr-hotjar', // default
//      },
//        // defines the environments where the tracking should be available  - default is ["production"]
//        environments: ['production', 'development']
//      },
//    },
    'gatsby-plugin-sass',
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-sitemap`
  ],
}
