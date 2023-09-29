import 'vuetify/styles'
import { createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'


const myCustomLightTheme = {
  dark: false,
  colors: {
    // background: '#FFFFFF',
    // surface: '#FFFFFF',
    primary: '#162114',
    // 'primary-darken-1': '#d17766',
    secondary: '#DE9E1A',
    // 'secondary-darken-1': '#018786',
    // error: '#B00020',
    // info: '#2196F3',
    // success: '#4CAF50',
    // warning: '#FB8C00',
  },
}

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme
      }
    },
    icons: {
      defaultSet: 'mdi',
    }
  })
  nuxtApp.vueApp.use(vuetify, {
    iconfont: 'md'
  })
})
