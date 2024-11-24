/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/flight-hero1.png')", // use an absolute path
        'card-pattern': "url('/src/assets/card-bg.png)",
        'footer-pattern': "url('src/assets/footer-bg.png')"
      },
    },
  },
  plugins: [],
}
