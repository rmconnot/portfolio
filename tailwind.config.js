/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        xs: '26px',
        sm: '46px',
        md: '44px',
      },
    },
    screens: {
      xs: '576px',
      sm: '768px',
      md: '992px',
      lg: '1280px',
    }
  },
  plugins: [],
}
