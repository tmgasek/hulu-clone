module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        hulu: ['Khula'],
        graphik: ['Graphik Web Regular'],
      },
      screens: {
        '3xl': '2000px',
      },
      backgroundImage: {
        headerMd: "url('/header.jpg')",
        headerSm: "url('/header-sm.jpg')",
        'header-shadow':
          'linear-gradient(180deg,rgba(0, 0, 0, 0.76) 15.54%, rgba(0, 0, 0, 0.192) 60.23%, rgba(0, 0, 0, 8e-5) 100%)',
      },
      colors: {
        hulu: '#1ce783',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
