
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/flight-hero1.png')",
        "card-pattern": "url('/src/assets/card-bg.png)",
        "footer-pattern": "url('src/assets/footer-bg.png')",
        "Global-hero-pattern": "url('src/assets/global-hero.png')",
        "download-bg-pattern": "url('src/assets/image.jpeg')",
        "status-bg-pattern": "url('src/assets/flight-bg.jpg')",
        "left-bg-pattern": "url('src/assets/left-bg.png')",
        "right-bg-pattern": "url('src/assets/right-bg.jpg')",
      },
    },
  },
  plugins: [],
};
