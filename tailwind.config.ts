import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      colors: {
        tealBrand: {
          DEFAULT: '#0B3D2E',
          hover: '#062A20',
          light: '#F1EBDA',
        },
        amberAccent: {
          DEFAULT: '#C9A227',
          soft: '#E6C766',
          hover: '#8A6D14',
        },
        slateSurface: {
          DEFAULT: '#FAF7EF',
          alt: '#F1EBDA',
          footer: '#FAF7EF',
        },
      },
      boxShadow: {
        soft: '0 18px 45px -15px rgba(15, 23, 42, 0.08)',
        card: '0 12px 32px -8px rgba(15, 23, 42, 0.06)',
        float: '0 16px 36px -6px rgba(15, 23, 42, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
