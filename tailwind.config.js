/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        sand: {
          50: '#F9F7F4',
          100: '#F5F1EB',
          200: '#E8E0D3',
          300: '#D4C4B0',
          400: '#BFA88A',
          500: '#A08B6B',
          600: '#8B7355',
          700: '#715E46',
          800: '#5D4D3C',
          900: '#4F4135',
        },
        olive: {
          50: '#F7F8F5',
          100: '#ECEEE6',
          200: '#D7DCC9',
          300: '#BCC5A4',
          400: '#9DAA7A',
          500: '#8B956D',
          600: '#6E7A4F',
          700: '#5A6340',
          800: '#4A5136',
          900: '#40462F',
        },
        terracotta: {
          50: '#FDF6F4',
          100: '#FAEBE7',
          200: '#F3D5CE',
          300: '#E9B5A8',
          400: '#DB8C7A',
          500: '#C17B6B',
          600: '#A55A47',
          700: '#8A4A3A',
          800: '#724032',
          900: '#5F382E',
        },
      },
    },
  },
  plugins: [],
};