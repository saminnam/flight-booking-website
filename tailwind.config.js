/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./assets/flight-hero1.png')",
        "card-pattern": "url('./assets/card-bg.png)",
        "footer-pattern": "url('./assets/footer-bg.png')",
        "common-hero-pattern": "url('./assets/common-hero.png')",
        "download-bg-pattern": "url('./assets/image.jpeg')",
        "status-bg-pattern": "url('./assets/flight-bg.png')",
        "left-bg-pattern": "url('./assets/left-bg.png')",
        "right-bg-pattern": "url('./assets/right-bg.png')",
      },
    },
  },
  plugins: [],
};
