/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage: {
        "header": "url('../src/images/desktop/image-hero.jpg')", 
       },
       fontFamily: {
       josefin: 'Josefin Sans',
       }
    },
  },
  plugins: [],
}

