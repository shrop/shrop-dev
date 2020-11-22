/* eslint-disable camelcase */
module.exports = {
  siteMetadata: {
    title: 'Mark Shropshire | Shrop',
    description: 'A creative leader who has a heart for helping individuals be their best while working with teams delivering best-in-class software projects built with open source technologies.',
    author: 'Mark Shropshire',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'shrop.dev',
        short_name: 'shrop.dev',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
