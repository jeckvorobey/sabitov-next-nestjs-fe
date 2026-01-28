export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    scanPageMeta: true
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'SpaceX - Путешествие на Марс',
      meta: [
        { name: 'description', content: 'Путешествие на красную планету' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ]
    }
  }
})
