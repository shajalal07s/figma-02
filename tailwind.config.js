/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'color-primary': '#1D183A',
        'color-secondary': '#16A8AA',
        'color-text': '#1D183A',
        'color-boring': '#D9D9D9',
        'color-ass': '#333333',
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '40px',
        md: '50px',
      }
    }
  },
  plugins: [],
}