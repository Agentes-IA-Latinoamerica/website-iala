/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html', // por si usas HTML estático fuera de src
  ],
  theme: {
    extend: {
      colors: {
        iala: {
          dark: '#005199',
          light: '#FFFDEA',
        },
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite', // For a slower, continuous spin
        'spin-reverse': 'spin-reverse 3s linear infinite', // For reverse rotation
      },
      keyframes: {
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'spin-reverse': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(-360deg)' }, // Negative for reverse
        },
      },
    },
  },
  plugins: [],
};