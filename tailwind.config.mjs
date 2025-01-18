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
      green: '#1ab293'

    },
    extend: {},

  },
  plugins: [nextui()],
  darkMode: "class",
};
