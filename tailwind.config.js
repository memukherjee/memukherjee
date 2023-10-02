/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily  : {
        'sans': ['Open Sans', 'sans-serif'],
        'bebas': ['Bebas Neue', 'sans-serif'],
      },
      colors: {
        primary: "#777",
        secondary: "#aaa",
        accent: "#9851fc",
      },
      backgroundColor: {
        primary: "#111",
        accent: "#9851fc",
      },
    },
  },
  plugins: [],
}

