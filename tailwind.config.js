/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        lato: ['var(--font-lato)'],
        openSans: ['var(--font-open-sans)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        revenueColor: '#DDEFE0',
        transactionColor: '#F4ECDD',
        likeColor: '#EFDADA',
        userColor: '#DEE0EF',
        borderBlue: '#6972C3',
        borderGreen: '#9BDD7C',
      },
    },
  },
  plugins: [require('daisyui')],
}
