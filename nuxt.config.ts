// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'iBooks',
      htmlAttrs: {
        lang: 'pt-BR',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    }
  },
  css: ['normalize.css/normalize.css', '@/assets/scss/base.scss'],
  devtools: { enabled: true },
})
