module.exports = {
  content: [
    "./src/App.js",
    './public/index.html',
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    './src/components/**/*.{js,jsx,ts,tsx}',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}