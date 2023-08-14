/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  plugins: 
    // eslint-disable-next-line no-undef
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
    keyframes: {
      slideDown: {
        from: { height: 0 },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      slideUp: {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: 0 },
      },
      overlayShow: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      contentShow: {
        from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
        to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
      },
    },
    animation: {
      slideDown: 'slideDown 200ms',
      slideUp: 'slideUp 200ms',
      overlayShow: 'overlayShow 4000ms cubic-bezier(0.16, 1, 0.3, 1)',
      contentShow: 'contentShow 1000ms cubic-bezier(0.16, 1, 0.3, 1)',
    },
},
}