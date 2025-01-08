/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation:{wiggle:'wiggle 3s linear infinite'},
      keyframes:{
        wiggle:{
          '0%': {
            borderRadius: '50%',
            transform: 'rotate(0deg)',
          },
          '50%': {
            borderRadius: '48%',
            transform: 'rotate(180deg)',
          },
          '100%': {
            borderRadius: '50%',
            transform: 'rotate(360deg)',
          },
        },
      }
    },
  },
  plugins: [],
};
