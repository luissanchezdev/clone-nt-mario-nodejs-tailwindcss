/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/img/wave-white.png')",
        'wave-pattern-dots': "url('./src/assets/img/pattern-white-dots.png')",
        'wave-pattern': "url('./src/assets/img/pattern-characters-red.png')",
      },
      screens : {
        xsm: '320px'
      }
    },
  },
  plugins: [],
}