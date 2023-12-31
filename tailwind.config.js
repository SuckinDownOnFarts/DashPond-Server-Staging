/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
    ],

    // darkMode: 'class',
    theme: {
        screens: {
            zero: '0px',
            xs: '360px',
            sm: '576px',
            md: '992px',
            lg: '1200px',
            xl: '1408px',

            //ONE-OFFS
            reportMd: '1082px',

            frontPageCarousel: '960px',

            mantineSm: '767px',
            
        },
        // fontFamily: {
        //     'body': [
        //   'Inter', 
        //   'ui-sans-serif', 
        //   'system-ui', 
        //   '-apple-system', 
        //   'system-ui', 
        //   'Segoe UI', 
        //   'Roboto', 
        //   'Helvetica Neue', 
        //   'Arial', 
        //   'Noto Sans', 
        //   'sans-serif', 
        //   'Apple Color Emoji', 
        //   'Segoe UI Emoji', 
        //   'Segoe UI Symbol', 
        //   'Noto Color Emoji'
        //   ],
        //     'sans': [
        //       'Inter var', 'sans'
        //   ],
        // },
        // extend: {
        //   fontSize: {
        //     14: '14px',
        //   },
        // backgroundColor: {
        //   'main-bg': 'white',
        //   'main-dark-bg': '#20232A',
        //   'secondary-dark-bg': '#33373E',
        //   'light-gray': '#F7F7F7',
        //   'half-transparent': 'rgba(0, 0, 0, 0.5)',
        // },
        // borderWidth: {
        //   1: '1px',
        // },
        // borderColor: {
        //   color: 'rgba(0, 0, 0, 0.1)',
        // },
        // width: {
        //   400: '400px',
        //   760: '760px',
        //   780: '780px',
        //   800: '800px',
        //   1000: '1000px',
        //   1200: '1200px',
        //   1400: '1400px',
        // },
        // height: {
        //   80: '80px',
        // },
        // minHeight: {
        //   590: '590px',
        // },
        // backgroundImage: {
        //   'hero-pattern':
        //     "url('/public/images/welcome-bg.svg')"
        // },
        // },
    },
    // plugins: [
    //   require('@tailwindcss/forms'),
    // ],
};