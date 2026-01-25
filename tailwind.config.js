/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,vue,ts}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.{js,vue,ts}",
    "./pages/**/*.{js,vue,ts}",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      colors: {
        'space-dark': '#16151D',
        'space-blue': {
          100: '#23599C',
          200: '#263E66',
          300: '#111F2D',
          400: '#09213D',
        },
        'nav-border': '#989393',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-space': 'linear-gradient(180deg, #263E66 0%, #09213D 36%, #111F2D 63%, #23599C 100%)',
        'gradient-button': 'linear-gradient(180deg, #263E66 0%, #09213D 36%, #111F2D 63%, #23599C 100%)',
      },
    },
  },
  plugins: [],
}
