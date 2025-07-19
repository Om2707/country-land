/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0077B6", 
        secondary: "#48CAE4",
        accent: "#03045E",
      }
    },
  },
  plugins: [],
}