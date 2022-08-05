/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "../../node_modules/ui/**/*.{js,ts,jsx,tsx}",
    "../../node_modules/ui/dist/index.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
