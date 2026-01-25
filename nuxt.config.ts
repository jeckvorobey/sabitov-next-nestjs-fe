export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    scanPageMeta: true
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint']
})
