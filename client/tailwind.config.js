/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "poppins":["Poppins","serif"],
        "jost":["Jost","sans-serif"]
      },
      backgroundImage:{
        "btn_bg":"linear-gradient(-45deg, #f2f2f2 0, #0097e6 50%, #0e4099 51%, #07a9c0 71%, #3e87f4 100%)"
      }
    },
    animation:{
         'spin-slow': 'wiggle 3s linear infinite alternate',
         'bounce2': 'wiggle2 4s linear infinite alternate',

    },
    keyframes: {
      wiggle: {
        '0%': { transform: 'translateY(30px)' },
        '100%': { transform: 'translateY(-30px)' },
      },
      wiggle2: {
        '0%': { transform: 'translateX(20px)' },
        '100%': { transform: 'translateX(-20px)' },
      }
    }
  },
  plugins: [],
}