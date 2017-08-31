module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Baptiste Debever\'s | Full-stack web developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Engineering Managerial Student, expected to get my degree in 2019 - Full-Stack Web Developer and Freelancer during my spare time. I love wandering around the web.' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:title', content: 'Baptiste Debever\'s | Full-stack web developer' },
      { property: 'og:description', content: 'Baptiste Debever\'s | Full-stack web developer' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat' },
      { rel: 'stylesheet', href: 'css/app.min.css' }
    ]
  },
  generate: {
    routes: [
      '/',
      '/fresh-new-website',
      '/3-months-sf9'
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FF5543' },
  /*
  ** Build configuration
  */
  build: {
    extend: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1KO
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1 KO
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ],
    /*
    ** Run ESLINT on save
  */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
  ],
  plugins: [],
  modules: [
    '@nuxtjs/font-awesome',
    '@nuxtjs/sitemap',
    '@nuxtjs/pwa',
    ['@nuxtjs/google-analytics', { ua: 'UA-79931702-3' }],
    ['@nuxtjs/markdownit', { html: true, linkify: true, breaks: true }]
  ],
  /*
   ** Customize manifest.json
   */
  manifest: {
    name: 'Baptiste Debever',
    short_name: "BD",
    description: "Baptiste Debever's personal website",
    theme_color: '#FF5543',
    start_url: '/'
  }
}
