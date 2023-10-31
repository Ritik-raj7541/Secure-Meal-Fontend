/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepGreen: '#97C4B8',
        lightBlue: '#CCF3EE',
        skin: '#CCF3EE',
        lightPink: 'F9CEEE'
      }
    },
    
  },
  plugins: [],
}