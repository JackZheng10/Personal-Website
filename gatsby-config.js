module.exports = {
  siteMetadata: {
    title: `Jack Zheng Portfolio`,
    description: `Personal website/portfolio for Jack Zheng`,
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
        name: `Jack Zheng Portfolio`,
        short_name: `Jack Zheng Portfolio`,
        start_url: `/`,
        background_color: `#0099FF`,
        theme_color: `#0099FF`,
        display: `minimal-ui`,
        icon: `src/images/Logo.png`,
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
