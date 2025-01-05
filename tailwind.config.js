/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      colors: {
        "background": {
          50: "#E8E8E8",
          100: "#D1D1D1",
          200: "#A3A3A3",
          300: "#787878",
          400: "#4A4A4A",
          500: "#1C1C1C",
          600: "#171717",
          700: "#121212",
          800: "#0A0A0A",
          900: "#050505",
          950: "#030303"
        },
        "defaultskin": {
          50: "#FFF8E5",
          100: "#FFF1CC",
          200: "#FFE49E",
          300: "#FFD56B",
          400: "#FFC738",
          500: "#FFB707",
          600: "#D19600",
          700: "#9E7100",
          800: "#6B4D00",
          900: "#332500",
          950: "#191200"
        }
      },
      extend: {
        keyframes: {
          marquee: {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(-100%)' },
          },
        },
        animation: {
          marquee: 'marquee 10s linear infinite',
        },
      },
    },
  plugins: [],
}