/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    /*
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'color1': '#54BAB9',
      'color2': '#18978F',
      'color3': '#E9DAC1',
      'color4': '#F7ECDE',
    },
    */
    fontFamily: {
      'sans': ['Poppins'],
      
    },

    extend: {
      backgroundImage: {
        'hero-img':'url("./assets/coverpage1.jpg")',
        'nav-img':'url("./assets/navsection.jpg")',
      },
    },
  },
  plugins: [],
};