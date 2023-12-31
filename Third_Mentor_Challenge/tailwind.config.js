/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '375px',
      lg: '1440px',
    },
    extend: {
      colors: {
        Orange: 'hsl(26, 100%, 55%)',
        paleOrange: 'hsl(25, 100%, 94%)',
        veryDarkBlue: 'hsl(220, 13%, 13%)',
        darkGrayishBlue: 'hsl(219, 9%, 45%)',
        grayishBlue: 'hsl(220, 14%, 75%)',
        lightGrayishBlue: 'hsl(223, 64%, 98%)',
        White: 'hsl(0, 0%, 100%)',
        Black: 'hsla(0, 0%, 0%, 0.2)',
      },
      width: {
        small:'274px',
      },
      fontSize: {
        Small: '14.8px',
        Large: '44px',
      },
      margin: {
       SMALL: '360px',
      },
    },
  },
  plugins: [],
}

