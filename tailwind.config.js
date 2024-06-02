/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    colors: {
      'nav-dark': "#1a1a1a",
      'main-light': "#f9fafe",
      'main-dark': "#222222",
      'b-light': "#e6ebf4",
      'b-dark': "#4e4e4e",
      'accent': '#6469ff',
      'white': '#ffffff',
      'text-dark': "#d8d8d8",
      'green': '#17a600',
      'input-dark': "#424242"
    },
    extend: {
      screens: {
        xs: '480px',
      },
      fontFamily: {
        inter: ['Inter var', 'sans-serif'],
      },
      boxShadow: {
        card: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.2)',
        cardhover: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.4)',
      },
    },
  },
  plugins: [],
};

