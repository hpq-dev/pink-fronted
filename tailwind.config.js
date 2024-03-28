/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {},
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
        pattaya: ['Pattaya'],
        Anton: ['Anton']
      }
    },
  },
  plugins: [],
}

