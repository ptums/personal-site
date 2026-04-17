/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "tech-pattern": "url('/images/tech-6.webp')",
      },
    },
  },
  plugins: [],
};
