/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-dark': '#2a2a2a',
        'bg-gradient':
          'linear-gradient(91deg,#130007 10%,#320125 100%,#0e0e0e 100%)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        radley: ['Radley', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: {
            300: '#0098DA',
            400: '#2874fc',
            500: '#1741a3',
            600: '#0a2b7a',
          },
          cyan: {
            500: '#00B9B7',
          },
          gray: {
            100: '#EBF2F5',
            300: '#C4C4CC',
            400: '#8D8D99',
            500: '#333333',
            700: '#29292E',
            800: '#202024',
            900: '#121214',
          },
          green: {
            100: '#EBF2F5',
            300: '#A8CF40',
            400: '#85B827',
            500: '#49A91F',
            600: '#37C77F',
            700: '#285E61',
          },
          yellow: {
            200: '#FEF84C',
            400: '#EAD43A',
            500: '#E9CF37',
            600: '#FCB900',
          },
          orange: {
            300: '#FB6962',
            500: '#FF6900',
          },
          pink: {
            300: '#db2777',
            400: '#A1479C',
            500: '#A4079B',
          },
          purple: {
            300: '#A8518A',
            500: '#9B51E0',
            600: '#6C63FF',
          },
          red: {
            200: '#FF6584',
            300: '#EC5E87',
            400: '#FB6962',
            500: '#da0b50',
            600: '#9D0208',
            700: '#6A040F',
          },
          white: '#FEFEFE',
        },
      },
    },
  },
  plugins: [],
};
