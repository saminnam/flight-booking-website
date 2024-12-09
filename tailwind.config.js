/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/flight-hero1.png')", 
        "card-pattern": "url('/src/assets/card-bg.png)",
        "footer-pattern": "url('src/assets/footer-bg.png')",
        "common-hero-pattern": "url('src/assets/common-hero.png')",
        "contact-bg-pattern": "url('https://i.pinimg.com/736x/7f/66/66/7f6666aa2f349d5eee1ff8c8b411b74b.jpg')"
      },
    },
  },
  plugins: [],
};
