// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  plugins: [
    '~/plugins/vuex.js',
  ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
