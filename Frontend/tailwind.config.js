/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'blue-custom': '#04293C',
        'green-custom':'#7BBF0D',
      },
      textColor:{
        'green-custom':'#7BBF0D',
      }
    },
    fontFamily: {
      'poppins-font': 'Poppins',
      'krub': ["Krub", "sans-serif"],
      'epilogue': ['Epilogue', 'sans-serif'],
    }
  },
  plugins: [],
}

