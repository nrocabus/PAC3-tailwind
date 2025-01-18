/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ['./src/**/*.{html,js}'], // Canvia aquest camí si tens altres carpetes
 
  theme: {
    extend: {
      colors: {
        'red-filter': '#930c0c', 
        'green-console': '#05ec11',
        'blue-2025': '#5bc5db'
      },
      fontFamily: {
        'base':['-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'],
        'code': ['"Courier New"', 'Consolas', 'monospace'],
        'lucida': ['"Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif']
      },
      dropShadow: {
        'yellow': '0 35px 35px rgba(252, 211, 77, 1)'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(rgba(0, 0, 0, 0.773) 0%, rgba(57, 57, 57, 0.72) 50%, rgba(255, 255, 255, 0) 90%)',
        'default-profile': "url('/src/assets/images/avatar-3814049_640.png')",
        'article-cover': "url('/src/assets/images/httpswww.pexels.comphotoblue-and-red-light-from-computer-1933900.jpg')",
      }
  },
  plugins: [],
}
}

