// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2026-04-24',
  css: [],
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt'
  ],
  
  pwa: {
    registerType: 'autoUpdate',
    manifestFilename: 'manifest.webmanifest',
    manifest: {
      id: '/',
      name: 'AdDU Alumni Career Hub',
      short_name: 'AdDU Alumni',
      description: 'The official career network for Ateneo de Davao University Alumni.',
      start_url: '/',
      scope: '/',
      theme_color: '#0a1f44',
      background_color: '#ffffff',
      display: 'standalone',
      display_override: ['standalone'],
      icons: [
        {
          src: '/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any maskable'
        },
        {
          src: '/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ],
      screenshots: [
        {
          src: '/screenshot1.png',
          sizes: '1280x720',
          form_factor: 'wide'
        },
        {
          src: '/screenshot1.png',
          sizes: '720x1280',
          form_factor: 'mobile'
        }
      ]
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      navigateFallback: '/'
    }
  }
})