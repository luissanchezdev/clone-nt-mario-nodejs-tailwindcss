/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'wave-pattern': "url('./src/assets/img/wave-white.png')",
        'wave-pattern-dots': "url('./src/assets/img/pattern-white-dots.png')",
        'pattern-characteres-red': "url('./src/assets/img/pattern-characters-red.png')",
        'character-mario': "url('./src/assets/img/character-l.png')",
        'wave-pink': "url('./src/assets/img/wave-pink.png')",
        'yellow-dots': "url('./src/assets/img/pattern-yellow-dots.png')"
      },
      screens : {
        xsm: '320px'
      }
    },
  },
  plugins: [],
}