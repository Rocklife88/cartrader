import * as path from 'path';

export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', 'nuxt-primevue',  '@nuxtjs/color-mode'],
    colorMode: {
        classSuffix: ''
      },
      primevue: {
        /* Options */
    },
    css: ['primevue/resources/themes/aura-light-green/theme.css']


})