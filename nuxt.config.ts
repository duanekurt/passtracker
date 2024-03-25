// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Password Tracker'
    },
    pageTransition: { name: 'slide-right', mode: 'out-in' },
    layoutTransition: { name: 'slide-right', mode: 'out-in' }
  },

  runtimeConfig: {
    public: {
      baseURL: process.env.API_BASE_URL,
      apiVersion: process.env.API_VERSION
    }
  },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
  ssr: false, // change to true on production
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
})
