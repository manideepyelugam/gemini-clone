/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        body : ['Poppins']
      },
      keyframes: {
        loader: {
          '0%': { backgroundPosition: '-800px 0px' },
          '100%': { backgroundPosition: '800px 0px' },
        },
      },
      animation: {
        loader: 'loader 2s linear infinite',
      },
    },
  },
  plugins: [],
}