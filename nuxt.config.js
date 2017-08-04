module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Baptiste Debever\'s personal website',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Baptiste Debever - I am an Engineering Managerial Student, but also Full-Stack Web Developer and Freelance.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat' },
      { rel: 'stylesheet', href: '/css/app.min.css' }
    ]
  },
  generate: {
    routes: [
      '/',
      '/hello-static-blogging',
      '/about'
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
    /* ['@nuxtjs/google-analytics', { ua: 'YOUR_ANALYTICS_ID' }], */
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
