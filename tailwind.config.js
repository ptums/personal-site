/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./routes/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
      },
      backgroundImage: {
        "tech-pattern": "url('/images/tech-6.webp')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
