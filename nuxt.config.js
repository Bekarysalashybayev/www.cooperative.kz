export default {
  server: {
    port: 3000
  },
  head: {
    title: 'cooperative',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=0.4' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css'}],
  },

  css: [
    '~/assets/css/default.css',
  ],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    'vue-ssr-carousel/nuxt'
  ],

  modules: [
  ],

  build: {
    babel: {
      compact: true,
    },
  },
}
