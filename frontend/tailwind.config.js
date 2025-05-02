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
        primary: {
          navy: '#1C1C4E',
          blue: '#1AB6E8',
          light: '#E1F6FB',
        },
        secondary: {
          gray: '#F9FAFB',
          charcoal: '#3A3A48',
          yellow: '#F1C40F',
        },
      },
    },
  },
  plugins: [],
} 