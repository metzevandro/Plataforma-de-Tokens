/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  plugins: 
    [require("tailwindcss"), require("autoprefixer")],

  theme: {
    fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'epilogue':['Epilogue', 'mono']
    },
    colors: {
      "blue":"#0079F1",
      "white":"#FFFFFF",
      "overlay":"#1F252E",
      "border":"#E5EAEF",
      "progress":"#1FC9FF",
      "open":"#2AC57A",
      "close":"#F05454",
      "light-blue":"#F3F9FF"
    },
    screens: {
      'phone': '320px',

      'tablet': '768px',

      'laptop': '1024px',

      'desktop': '1280px',
    },
}
}