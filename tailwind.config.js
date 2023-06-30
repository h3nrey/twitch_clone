/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)',
      },
      colors: {
        bg: '#0E0E10',
        gray: '#2F2F35',
        thingray: '#67676B',
        lightgray: '#DEDEE3',
        darktext: "#adadb8",
        text: '#E0E0E1',
        darkgray: '#18181B',
        principal: '#8E31E2',
        salmon: "#ff8280",
        red: '#EB0400',
        green: "#00FF7F",
        yellow: "#D2C009",
        orange: "#F57F53",
        brown: "#D2691E",
        purple: "#AD54FE",
        lightMode_white: "#ffffff",
        lightMode_gray: "#F7F7F8",
        lightMode_thinGray: "#EFEFF1",
        lightMode_darkGray: "#DFDFE2",
        lightMode_black: "rgb(31, 31, 35)",
        lightMode_thinBlack: "#53535f",
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
