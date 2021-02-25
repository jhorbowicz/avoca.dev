export default {
  components: true,
  buildModules: [
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-fonts', {
      families: {
        Montserrat: [400, 600],
        Cormorant: {
          wght: [400, 600, 700],
          ital: [400]
        },
      }
    }]
  ],
  css: ['~/assets/css/global', '~/assets/css/tailwind'],
  target: 'static',
  head: {
    title: 'Internet retreat',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'avoca.dev',
        name: 'avoca.dev',
        content: 'under construction'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }]
  }
}
