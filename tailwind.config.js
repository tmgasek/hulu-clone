module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        hulu: ['Khula'],
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
        'bg-shadow':
          'linear-gradient(90deg, rgba(5,24,31,1) 0%, rgba(6,32,42,1) 70%, rgba(8,44,61,1) 100%)',
        'bg-img-shadow':
          'linear-gradient(167deg, rgba(2,7,10,1) 58%, rgba(30,87,108,1) 100%);',
      },

      colors: {
        hulu: '#1ce783',
      },
    },
  },

  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@themesberg/flowbite/plugin'),
  ],
};
