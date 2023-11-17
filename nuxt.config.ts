// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
      '@nuxt/image',

      ['@nuxtjs/google-fonts', {
        families: {
          'Jost': [400, 500, 600, 700],
        }
      }

    ]
  ]
})
