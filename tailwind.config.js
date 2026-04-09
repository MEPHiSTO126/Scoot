
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <--- Add this line
  ],
  theme: {
    extend: {
      colors: {
        'scoot-yellow': '#FCB72B',
        'dark-navy': '#495567',
        'dim-grey': '#939CAA',
        'light-grey': '#E5ECF4',
        'snow': '#F2F5F9',
        'light-yellow': '#FFF4DF',
      },
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
        sans: ['"Lexend Deca"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
