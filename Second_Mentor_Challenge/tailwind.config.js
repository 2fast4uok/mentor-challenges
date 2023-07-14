/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        veryDarkSupBlue: 'hsl(217, 54%, 11%)',
        veryDarkBlue: 'hsl(216, 50%, 16%)',
        darkBlue: 'hsl(215, 32%, 27%)',
        softBlue: 'hsl(215, 51%, 70%)',
        Cyan: 'hsl(178, 100%, 50%)'
      }
    },
  },
  plugins: [],
}

