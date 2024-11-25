/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./**/*.html'],
    theme: {
      extend: {
        padding: {
          '8': '8rem'
        },
        fontFamily: {
          'sans': ['"Syne"', 'sans-serif']
        },
        fontSize: {
          "13": "13rem"
        },
        gap: {
          '30': '26%'
        },
        inset: {
          '15': '6%',
          '38': '3.8rem'  
        },
        width: {
          '50': '50%',
          '60': '60%'
        },
        height: {
          '10': '10%'
        },
        minHeight: {
          '28': '22rem'
        },
        minWidth: {
          '50': '50rem',
          '120': '120%'
        },
        maxWidth: {
          '800': '800px'
        },
        borderRadius: {
          '4xl': '2.5rem'
        }
      },
    plugins: [],
  }
}