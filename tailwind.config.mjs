/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
import { nextui } from '@nextui-org/react';

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      ...colors,
      green: '#1ab293',
      spatikaBlack: '#050505',
      spatikaDarkRed: '#610C27',
      spatikaDarkRed600: '#d52d6b',
      spatikaWarmGrey: '#AC9C8D',
      spatikalightPink: '#E3C1B4',
      spatikaOffWhite: '#DDD9CE',
      spatikaelightGray: '#EFECE9',
      spatikaelightGray200: '#dbd3cd',
      spatikaelightGrayTransparent: '#efece982'

    },
    extend: {},

  },
  plugins: [nextui()],
  darkMode: "class",
};
