import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
      components: {
        dirs: [
          '~/components',
          {
            path: '~//components',
            extensions: ['vue'],
            prefix: 'nuxt'
          }
        ]
      },
      typescript: {
        strict: true
      }

})
