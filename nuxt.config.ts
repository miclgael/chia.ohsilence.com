// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   app: {
    pageTransition: { 
      name: 'slide-fade',
      mode: 'out-in'
    },
    head: {
      bodyAttrs: {
        'data-theme': 'light'
      }
    }
  },
  
  // Move @ directory to src/
  // https://nuxt.com/docs/api/configuration/nuxt-config#srcdir
  srcDir: 'src/',

  // Use "chia" components as a layer of this project
  // https://nuxt.com/docs/api/configuration/nuxt-config#extends
  // @see https://github.com/nuxt/nuxt/issues/12347 
  // extends: 'github:miclgael/chia#main',
  extends: '../chia', // <- temporary `generate` workaround

  // Use Volar for TS support
  // https://nuxt.com/docs/api/configuration/nuxt-config#tsconfig
  typescript: { shim: false },

  // Configure PicoCSS
  // https://nuxt.com/docs/api/configuration/nuxt-config#css 
  css: ['@picocss/pico', '@/assets/css/pico.css'],
  
  runtimeConfig: {
    PRINTIFY_API_KEY: process.env.PRINTIFY_API_KEY,
    PRINTIFY_BASE_URL: process.env.PRINTIFY_BASE_URL,
    PRINTIFY_SHOP_ID: process.env.PRINTIFY_SHOP_ID
  },
  
  // Nuxt extensions to load
  // https://nuxt.com/docs/api/configuration/nuxt-config#modules
  modules: ['@nuxt/content', '@nuxt/image-edge'],

  // Config for official content module
  // https://content.nuxtjs.org/api/configuration
  content: {},

  // Config for official image module
  // https://v1.image.nuxtjs.org/configuration
  image: {
    domains: ['ohsilence.com']
  },

})
