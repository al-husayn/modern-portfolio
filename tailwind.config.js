import { heroui } from '@heroui/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{md,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      animation: {
        orbit: 'orbit calc(var(--duration)*1s) linear infinite',
      },
      keyframes: {
        orbit: {
          '0%': {
            transform:
              'rotate(calc(var(--angle)*1deg)) translateY(calc(var(--radius)*1px)) rotate(calc(var(--angle)*-1deg))',
          },
          '100%': {
            transform:
              'rotate(calc(var(--angle)*1deg + 360deg)) translateY(calc(var(--radius)*1px)) rotate(calc(var(--angle)*-1deg - 360deg))',
          },
        },
      },
      screens: {
        mdplus: '1040px',
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
};
