module.exports = {
  siteMetadata: {
    title: `Jack Zheng Personal Website`,
    description: `Personal Website for Jack Zheng`,
    author: `@JackZheng10`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: "Cairo",
              },
            ],
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jack Zheng Personal Website`,
        short_name: `Jack Zheng Personal Website`,
        start_url: `/`,
        background_color: `#0099ff`,
        theme_color: `#0099ff`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site. //todo: figure out this configuration. add title, use helmet: https://www.gatsbyjs.org/docs/add-page-metadata/
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about/`, `/projects/`, `/resume/`],
      },
    },
  ],
};
