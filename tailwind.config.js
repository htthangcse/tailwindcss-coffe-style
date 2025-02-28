/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // anh
    
  ],
  theme: {
    extend: {
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
  },
  plugins: [],
};
