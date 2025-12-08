/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html', // Search for classes in all HTML files in the project and subdirectories
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

