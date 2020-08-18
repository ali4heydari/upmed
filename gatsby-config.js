const faTranslations = require("./src/locales/fa/translations.json")

module.exports = {
  pathPrefix: `/landing-page`,
  siteMetadata: {
    title: faTranslations["website_name"],
    description: faTranslations["website_description"],
    author: `@alir3zafa`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-graphql-codegen`, // https://github.com/d4rekanguok/gatsby-typescript/tree/master/packages/gatsby-plugin-graphql-codegen
      options: {
        documentPaths: [
          "./src/**/*.{ts,tsx}",
          "./.cache/fragments/*.js",
          "./node_modules/gatsby-*/**/*.js",
        ],
        codegenConfig: {
          avoidOptionals: true,
          scalars: {
            DateTime: "string",
            Date: "string",
            JSON: "{ [key: string]: any }",
          },
          hooks: {
            afterOneFileWrite: "prettier --write",
          },
          codegenPlugins: [
            // built-in plugin.
            // Use `typescript` for `@graphql-codegen/typescript`
            // and `operations` for `@graphql-codegen/typescript-operations`
            {
              resolve: "typescript",
              options: {
                namingConvention: {
                  transformUnderscore: true,
                  enumValues: "keep",
                },
              },
            },
            {
              resolve: "operations",
              options: {
                namingConvention: {
                  transformUnderscore: true,
                  enumValues: "keep",
                },
              },
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#FF54AC`,
        display: `minimal-ui`,
        icon: `${__dirname}/static/images/histaff.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
