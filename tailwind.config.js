/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
  theme: [
    {
    mytheme: {
      "exgf": "#19D3AE",
      "nextgf": "#0FCFEC",
      "accent": "#3A4256",
      "neutral": "#3d4451",
    },
  },

],
},
  plugins: [require("daisyui")],
}
