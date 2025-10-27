
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0B0F14',
        'brand-light-text': '#E6F1FF',
        'brand-secondary-text': '#9FB3C8',
        'brand-cyan': '#7DF9FF',
        'brand-purple': '#A855F7',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'grotesk': ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
