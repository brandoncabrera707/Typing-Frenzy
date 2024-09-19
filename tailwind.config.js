/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html", "./dist/*.js", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        'placeholder-custom': '#0a0a0a',
        'wrongCharColor': '#E63946',
        'backgroundColor-100': '#F1FAEE',
        'backgroundColor-200': '#A8DADC',
        'backgroundColor-300': '#457B9D',
        'backgroundColor-400': '#1D3557'
      },
      keyframes: {
        blink: {
          '50%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}

