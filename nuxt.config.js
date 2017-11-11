const cookieParser = require('cookie-parser')
module.exports = {
  /*
  ** Headers of the page
  */
  env: {
    api: (process.env.NODE_ENV !== 'production') ? 'http://localhost:8000/' : 'https://api.ioshaven.co/',
    redirect: (process.env.NODE_ENV !== 'production') ? 'http://localhost:3000/' : 'https://ioshaven.co/'
  },
  head: {
    title: 'iOS Haven',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'},
      {name: 'apple-mobile-web-app-title', content: 'iOS Haven'},
      {name: 'application-name', content: 'iOS Haven'},
      {name: 'theme-color', content: '#ffffff'}
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet', href: '/fa/css/fontawesome-pro-brands.css'},
      {rel: 'stylesheet', href: '/fa/css/fontawesome-pro-solid.css'},
      {rel: 'stylesheet', href: '/fa/css/fontawesome-pro-light.css'},
      {rel: 'stylesheet', href: '/fa/css/fontawesome-pro-regular.css'},
      {rel: 'stylesheet', href: '/fa/css/fontawesome-pro-core.css'},
      {rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png?v=QEMYzE9pb35555'},
      {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png?v=QEMYzE9pb35555'},
      {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png?v=QEMYzE9pb35555'},
      {rel: 'manifest', href: '/favicons/manifest.json?v=QEMYzE9pb35555'},
      {rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg?v=QEMYzE9pb35555', color: '#e81e1e'},
      {rel: 'shortcut icon', href: '/favicons/favicon.ico?v=QEMYzE9pb35555'}
    ]
  },
  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL: (process.env.NODE_ENV !== 'production') ? 'http://localhost:8000/' : 'https://api.ioshaven.co/',
    browserBaseURL: (process.env.NODE_ENV !== 'production') ? 'http://localhost:8000/' : 'https://api.ioshaven.co/'
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
    // vendor: ['axios']
  },
  serverMiddleware: [
    cookieParser()
  ]
}
