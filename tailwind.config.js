/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "presets/**/*.{js,vue,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
  
  
}

module.exports = {

  plugins: [
      require('flowbite/plugin')
  ]

}

