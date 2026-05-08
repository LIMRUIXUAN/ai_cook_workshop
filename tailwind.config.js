/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#adc6ff",
        "on-primary": "#002e69",
        "on-surface": "#e5e2e1",
        surface: "#131313",
        background: "#0e0e0e",
      },
    },
  },
  plugins: [],
}
