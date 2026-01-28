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
        'space-dark': '#0a0a12',
        'space-bg': '#16151D',
        'space-blue': {
          100: '#23599C',
          200: '#263E66',
          300: '#111F2D',
          400: '#09213D',
        },
        'space-orange': {
          DEFAULT: '#ff3f04',
          light: '#ee8521',
          dark: '#d05217',
        },
        'nav-border': '#989393',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-space': 'linear-gradient(180deg, #263E66 0%, #09213D 36%, #111F2D 63%, #23599C 100%)',
        'gradient-button': 'linear-gradient(180deg, #263E66 0%, #09213D 36%, #111F2D 63%, #23599C 100%)',
        'gradient-orange': 'linear-gradient(to bottom, #ee8521, #d05217)',
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    },
  ],
}
