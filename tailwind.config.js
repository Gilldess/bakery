/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8B5E3C",
        secondary: "#3E2723",
        accent: "#F5E6D3",
        softwhit: "#FFF8F0"
      }
    },
  },
  plugins: [],
}