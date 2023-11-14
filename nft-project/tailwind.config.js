/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html, js, ts}", "./src/**/*"],
  theme: {
    extend: {},
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      searchbar: "#F5F5F5",
      nftName: "#f8f8f8"
    },
    boxSizing: ['border-box'],
  },
  plugins: [],
};
