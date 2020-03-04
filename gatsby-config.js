module.exports = {
  siteMetadata: {
    title: 'My First Gatsby Project',
    author: 'Endy Ranaudo',
  },

  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    }
  ]
}
