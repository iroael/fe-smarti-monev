// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/logo/logo.webp' },
        // { rel: 'icon', type: 'image/png', href: '/images/favicon.png' },
        { rel: 'preconnect', href: "https://fonts.googleapis.com" },
        { rel: 'preconnect', href: "https://fonts.gstatic.com" },
        { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;family=Nunito+Sans:ital,wght@0,300;0,400;0,700;0,800;0,900;1,700&amp;display=swap" },
      ]
    }
  },

  css: ['~/assets/scss/app.scss'],
  modules: ['nuxt-icon', '@pinia/nuxt', 'floating-vue/nuxt', 'nuxt3-leaflet'],

  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },

  plugins: [
    { src: '~/plugins/plugins.ts', mode: 'client' },
    { src: '~/plugins/useBootstrap.client.ts', mode: 'client' },
  ],

  compatibilityDate: '2025-02-20',
})