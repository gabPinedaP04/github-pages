/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pallete1': 'var(--color-pallete1)',
        'pallete2': 'var(--color-pallete2)',
        'pallete3': 'var(--color-pallete3)',
        'pallete4': 'var(--color-pallete4)',
        'pallete5': 'var(--color-pallete5)',
      },
    },
  },
  plugins: [],
}