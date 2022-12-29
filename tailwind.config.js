/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#48309F",

          "secondary": "#8749E8",

          "accent": "#B784ED",

          "neutral": "#F4F5FA",

          "base-100": "#FFFFFF",

          "info": "#F66240",

          "success": "#f2f2f2",

          "warning": "#000000",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}