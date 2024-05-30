/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'loguin-red': '#B21B2C',
        'loguin-blue': '#181724',
        'loguin-red-dark': '#7e131f'
      },
    },
  },
  plugins: [],
}

