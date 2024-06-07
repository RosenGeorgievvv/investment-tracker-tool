/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: '#331D2C',
        darkerGray: '#331D2C',
        lightSidebar: '#435585',
        sidebarHover: '#3b4a6b', 
      },
    },
  },
  plugins: [],
}

