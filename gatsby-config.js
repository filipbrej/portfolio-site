module.exports = {
  siteMetadata: {
    title: `Filip Brej | Software Developer`,
    description: `I'm Fil, a self-taught software developer building apps for the web using React and for iOS using Swift.`,
    author: `Filip Brej`,
    siteUrl: `https://codebyfil.dev`,
    social: {
      linkedin: `filipbrej`,
      github: `filipbrej`,
      email: `brej.filip@gmail.com`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:100, 300i, 300, 400i, 400, 600i, 600, 700i, 700, 800`,
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
