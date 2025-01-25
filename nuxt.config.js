export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Style-Forge',
    htmlAttrs: {
      lang: 'en',
      'data-theme': 'auto',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'CSS framework with themes, utilities, flexbox, and grid for creating responsive websites',
      },
      {
        name: 'keywords',
        content:
          'style-forge, CSS framework, modern design, responsive design, utilities, web development, frontend, UI components, CSS grid, CSS flexbox, themes, form validation, custom themes, grid, flex, input, select, switch, textarea, helpers, colors',
      },

      { name: 'format-detection', content: 'telephone=no' },

      { property: 'og:title', content: 'Style-Forge' },
      {
        property: 'og:description',
        content: 'CSS framework with themes, utilities, flexbox, and grid for creating responsive websites',
      },
      { property: 'og:url', content: 'https://style-forge.github.io/' },
      { property: 'og:image', content: '/images/main.png' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:title', content: 'Style-Forge' },
      {
        name: 'twitter:description',
        content: 'CSS framework with themes, utilities, flexbox, and grid for creating responsive websites',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: '/images/main.png' },
    ],
    link: [
      { rel: 'apple-touch-icon', size: '180x180', href: '/icons/icon-180x180.png' },
      { rel: 'icon', type: '32x32', href: '/icons/icon-32x32.png' },
      { rel: 'icon', type: '16x16', href: '/icons/icon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: true },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,200,0,0',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/support.js', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    friendlyErrors: false,
    publicPath: '_',
    extractCSS: true,
    postcss: {
      postcssOptions: {
        plugins: {
          'postcss-preset-env': false,
        },
      },
    },
  },

  /* /// */
  loading: false,
  loadingIndicator: false,

  router: {
    mode: 'abstract',
  },

  generate: {
    cache: false,
    fallback: false,
  },

  server: {
    port: 5173,
  },
}
