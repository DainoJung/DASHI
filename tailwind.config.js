/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3449FF',
        dark: '#1E1E1E',
        'gray-light': '#F5F6F8',
        'gray-mid': '#A0A0A0',
        'gray-line': '#E0E0E0',
      },
      fontFamily: {
        sans: ['Pretendard', 'Inter', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      }
    },
  },
  plugins: [],
} 