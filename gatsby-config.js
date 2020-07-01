module.exports = {
  siteMetadata: {
    title: `Jack Zheng Portfolio`,
    description: `Portfolio for Jack Zheng.`,
    author: `@JackZheng10`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Titillium Web`,
              },
            ],
          },
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jack Zheng Portfolio`,
        short_name: `Jack Zheng Portfolio`,
        start_url: `/`,
        background_color: `#0099ff`,
        theme_color: `#0099ff`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site. //todo: figure out this configuration. add title, use helmet: https://www.gatsbyjs.org/docs/add-page-metadata/
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`, https://www.gatsbyjs.org/docs/add-a-manifest-file/#:~:text=Quoting%20Google%3A,file%20on%20every%20site%20build.
    // https://www.google.com/search?q=gatsby+change+tab+name&oq=gatsby+change+tab+name&aqs=chrome..69i57j33.3571j0j4&sourceid=chrome&ie=UTF-8
    // test site w/ web.dev and lighthouse
  ],
};
