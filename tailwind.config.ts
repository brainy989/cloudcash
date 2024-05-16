import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        forestBlue: {
          light: '#197BBD',
          DEFAULT: '#0F4264'
        },
        aliceBlue: {
          light: '#E5E5E5',
          DEFAULT: '#F0F7FF'
        },
        paternoster: {
          light: '#F8F8F',
          DEFAULT: '#C7C7C7',
          dark: '#696969'
        },
        bauhaus: {
          light: '#AEAEAE',
          DEFAULT: '#404040'
        },
        narenjiOrange: {
          DEFAULT: '#FFC145',
          dark: '#FCAE73'
        }
      },
      boxShadow: {
        'custom-xs': '0px 0px 1px 0px rgba(0, 0, 0, 0.1)',
        'custom-sm': '0px 2px 6px 0px rgba(0, 0, 0, 0.1)',
        'custom-lg': '0px 16px 24px 0px rgba(0, 0, 0, 0.15)',
        'custom-combined': '0px 0px 1px 0px rgba(0, 0, 0, 0.1), 0px 2px 6px 0px rgba(0, 0, 0, 0.1), 0px 16px 24px 0px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
};
export default config;
