/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '50%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}

