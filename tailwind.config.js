/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lubri-blue': '#60A5FA',
        'lubri-gold': '#EAB308',
        'lubri-dark': '#111827',
      }
    },
  },
  plugins: [],
}