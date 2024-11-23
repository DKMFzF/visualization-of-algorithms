/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./**/*.html'],
    theme: {
      extend: {
        fontFamily: {
          'sans': ['"Syne"', 'sans-serif']
        },
        gap: {
          '30': '26%'
        },
        inset: {
          '15': '6%',
          '38': '3.8rem'  
        },
        width: {
          '60': '60%'
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