module.exports = {
  siteMetadata: {
    title: 'Bean Heads',
    titleTemplate: '%s · Easily generate avatars for your projects',
    description:
      'Combine expressions, clothing, hair styles and colors into billions of different unique characters.',
    url: 'https://www.bigheads.io',
    // TODO:
    image: '/card.png', // Path to your image you placed in the 'static' folder
    twitterUsername: '@robertbrosma',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-postcss',
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     icon: 'src/images/favicon.png',
    //   },
    // },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-176816069-1',
      },
    },
  ],
}
