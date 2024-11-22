/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./**/*.html'],
    theme: {
      extend: {
        fontFamily: {
          'sans': ['"Syne"', 'sans-serif']
        },
        width: {
          '60': '60%'
        },
        minHeight: {
          '28': '22rem'
        },
        minWidth: {
          '50': '50rem'
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