/** @type {import ('tailwindcss').Config} */

module.exports ={
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        darkBlue:'#192244',
        darkestBlue:'#0d233b',
        darksBlue:'#1d2b36',
      
    
        lighterGreen:'#106236',
        greyBlack:'#181B38',
        grey:'#fafafa',
        darkGreen:'#00d3ac',
        lightGreen:'#acfce3',
        purpleBlue:'#6945d8'
      }},
  
  },
  plugins: [],
}

