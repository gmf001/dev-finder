/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '0.8rem'
    },
    extend: {
      colors: {
        dark: '#131c2f',
        'dark-accent': '#1f2a48',
        primary: '#0279ff'
      }
    }
  },
  plugins: []
};
