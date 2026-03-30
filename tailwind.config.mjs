/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f7f4',
          100: '#e8ebe3',
          200: '#d4dac9',
          300: '#b5c0a4',
          400: '#96a67e',
          500: '#7a8d62',
          600: '#5f704c',
          700: '#4b583d',
          800: '#3e4834',
          900: '#353d2e',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf8f0',
          200: '#faf0de',
          300: '#f5e4c6',
          400: '#edd3a6',
          500: '#e4bf85',
        },
        warm: {
          50: '#fdfcfa',
          100: '#f9f6f0',
          200: '#f3ede2',
          300: '#e8dece',
          400: '#d4c4a8',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Cormorant Garamond"', 'Garamond', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'count': 'count 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
