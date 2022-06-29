/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  daisyui: {
    themes: ["light", "dark"],
  },

  plugins: [require("daisyui")],
};
