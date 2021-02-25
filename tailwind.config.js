module.exports = {
  purge: [
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
     './plugins/**/*.{js,ts}',
     './nuxt.config.js',
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        main: ['Cormorant', 'serif'],
        accent: ['Montserrat', 'sans-serif']
      },
      colors: {
        cultured: '#eef0f2',
        xiketic: '#010121',
        'russian-violet': '#2e0f57',
        jet: '#292929',
        'mximum-blue-purple': '#91a1f3'
      },
      maxWidth: {
        page: '1200px'
      },
      gridTemplateRows: {
         '7': 'repeat(7, minmax(0, 1fr))',
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
