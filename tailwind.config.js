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
        bg: '#0E0E10',
        gray: '#2F2F35',
        thingray: '#67676B',
        lightgray: '#DEDEE3',
        text: '#E0E0E1',
        darkgray: '#18181B',
        principal: '#8E31E2',
        red: '#EB0400',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        xl: { max: '1279px' },

        lg: { max: '1000px' },

        md: { max: '700px' },

        sm: { max: '500px' },
      },
    },
  },
  plugins: [],
}
