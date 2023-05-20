export default defineNuxtConfig({
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // https://nuxt.com/docs/getting-started/seo-meta
  app: {
    head: {
      title: 'Road Wings',
    },
    meta: [
      {
        'http-equiv': 'Cache-Control',
        content: 'no-store, no-cache, must-revalidate, proxy-revalidate',
      },
      { 'http-equiv': 'Pragma', content: 'no-cache' },
      { 'http-equiv': 'Expires', content: '0' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/styles.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxt/image-edge',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  router: {
    base: '/road-wings/',
  },
})
