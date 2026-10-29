/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'luxury-black': '#111111',
        'charcoal': '#1A1A1A',
        'gold': '#B88735',
        'soft-gold': '#C9A24D',
        'cream': '#F4EFE7',
        'olive': '#2C3020',
        'warm-brown': '#8B6914',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
