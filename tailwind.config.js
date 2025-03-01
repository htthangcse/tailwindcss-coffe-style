/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // anh
    
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      fontFamily:{
        Karla:['Karla', 'san-serif']
      }
    },
    // backgroundImage: {
    //   'slider-bg': "url('/img/slider.jpg')",
    // },
    // colors: {
    //   'coffee': {
    //     200: '#C89F94',
    //     400: '#A25F4B',
    //   }
    // }
    keyframes: {
      fadeIn: {
        from: {opacity: 0},
        to: {opacity: 1},
      },
    },
    animation: {
      fadeIn: 'fadeIn .5s ease-in-out',
    },
  },
  plugins: [],
};
