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
        sportsMd: "url('/live-sports.jpg')",
        sportsSm: "url('/live-sports-small.jpg')",
        newsMd: "url('/breaking-news.jpg')",
        newsSm: "url('/breaking-news-sm.jpg')",
        eventsMd: "url('/biggest-events.jpg')",
        eventsSm: "url('/biggest-events-sm.jpg')",
        'header-shadow':
          'linear-gradient(180deg,rgba(0, 0, 0, 0.76) 15.54%, rgba(0, 0, 0, 0.192) 60.23%, rgba(0, 0, 0, 8e-5) 100%)',
        'card-shadow':
          'linear-gradient(156.82deg,rgba(0, 0, 0, 0.6) 4.58%,rgba(0, 0, 0, 0) 69.61%),linear-gradient(24.5deg, rgba(0, 0, 0, 0.2) 4.71%, rgba(0, 0, 0, 0) 71.49%)',
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
