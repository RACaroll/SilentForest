import { resolve } from 'path'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
        titleTemplate: 'Silent Forest',
        htmlAttrs: {
          lang: 'pt-br'
        },
        meta: [
            { charset: 'UTF-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            { hid: 'description', name: 'description', content: ''},
            { name: 'format-detection', content: 'telephone=yes' },
            { hid: 'd4sign-domain-verification', name: 'd4sign-domain-verification',content: 'd3f378e8-f6ab-47cd-a98b-4cb40d038c52'},
        ],
        // link: [
        //   { rel: 'icon', type: 'image/x-icon', href: 'favicon.png' }
        // ],
    },
  },
  alias: {
    'svg': resolve(__dirname, './assets/svg'),
    'node_modules': resolve(__dirname, './node_modules'),
    './': resolve( './*')
  },
  css: [
    "@/assets/scss/style.scss",
    'vuetify/lib/styles/main.sass'
  ],
  build: {        
    transpile: ['vuetify'],   
  },
  vite: {    
    define: {        
      'process.env.DEBUG': false,    
    },  
  },
  devtools: { enabled: true },
  components: [
    {path: '~/components', extensions: ['.vue'], }, 
    {path: '~/layouts', extensions: ['.vue'], },
  ],
})