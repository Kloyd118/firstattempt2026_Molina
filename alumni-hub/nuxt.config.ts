// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-04-13',
  css: [],
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt'
  ],
  
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'AdDU Alumni Career Hub',
      short_name: 'AdDU Alumni',
      description: 'The official career network for Ateneo de Davao University Alumni.',
      theme_color: '#0a1f44',
      background_color: '#ffffff',
      display: 'standalone',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      navigateFallback: '/'
    },
    devOptions: {
      enabled: true,
      type: 'module'
    }
  }
})