/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg': "url('/images/weather-bg.png')",
      },
      container:{
        center: true,
      },
    },
  },
  plugins: [],
}