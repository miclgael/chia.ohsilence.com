// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: 'view',
      mode: 'out-in'
    },
    head: {
      bodyAttrs: {
        'data-theme': 'light'
      },
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap',
          hid: 'google-font-dela-gothic-one'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicons/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          href: '/favicons/favicon.ico'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicons/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicons/favicon-16x16.png'
        },
        {
          rel: 'manifest',
          href: '/favicons/manifest.json'
        },
        {
          type: 'text/plain',
          rel: 'author',
          href: 'https://www.ohsilence.com/humans.txt'
        }
      ]
    }
  },

  // Move @ directory to src/
  // https://nuxt.com/docs/api/configuration/nuxt-config#srcdir
  srcDir: 'src/',

  // Use "chia" components as a layer of this project
  // https://nuxt.com/docs/api/configuration/nuxt-config#extends
  // @see https://github.com/nuxt/nuxt/issues/12347 
  // extends: 'github:miclgael/chia#main',
  extends: 'tmp/chia-core_v0-0-1', // <- temporary `generate` workaround

  // Use Volar for TS support
  // https://nuxt.com/docs/api/configuration/nuxt-config#tsconfig
  typescript: { shim: false },

  // Configure PicoCSS
  // https://nuxt.com/docs/api/configuration/nuxt-config#css 
  css: ['@picocss/pico', '@/assets/css/pico.css', '@/assets/css/global.css'],

  runtimeConfig: {
    PRINTIFY_API_KEY: process.env.PRINTIFY_API_KEY,
    PRINTIFY_BASE_URL: process.env.PRINTIFY_BASE_URL,
    PRINTIFY_SHOP_ID: process.env.PRINTIFY_SHOP_ID,
    CF_API_TOKEN: process.env.CF_API_TOKEN,
    CF_ACCOUNT_ID: process.env.CF_ACCOUNT_ID
  },

  // Nuxt extensions to load
  // https://nuxt.com/docs/api/configuration/nuxt-config#modules
  modules: ['@nuxt/content', '@nuxt/image-edge'],

  // Config for official content module
  // https://content.nuxtjs.org/api/configuration
  content: {},

  // Config for official image module
  // https://v1.image.nuxtjs.org/configuration
  image: {}
})
