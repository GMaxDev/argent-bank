/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-text": "#2c3e50",
        "dark-bg": "#12002b",
        "border-footer": "#ccc",
        "border-icon": "#00bc77",

      },
    },
  },
  plugins: [],
};
