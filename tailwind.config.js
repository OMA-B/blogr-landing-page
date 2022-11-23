/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      sm: '450px',
      md: '680px',
      lg: '875px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: {
          100: "#FF8F71",
          200: "#FF565D",
        },
        secondary: '#535370',
        footer: "#2D2E40",
      },
      fontFamily: {
        'body': ['Overpass'],
        'other': ['Ubuntu']
      },
      borderRadius: {
        'large': '100px',
      },
      spacing: {
        'custom-1': '400px',
        'custom-2': '340px'
      }
    },
  },
  plugins: [],
}