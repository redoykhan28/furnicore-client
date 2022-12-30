/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#f09819",

          "secondary": "#8749E8",

          "accent": "#B784ED",

          "neutral": "#F4F5FA",

          "base-100": "#FFFFFF",

          "info": "#F77062",

          "success": "#FE5393",

          "warning": "#000000",

          "error": "#F87272",

        },
      },
    ],
  },
  plugins: [require("daisyui")],
}