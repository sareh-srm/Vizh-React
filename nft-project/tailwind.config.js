/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html, js, ts}", "./src/**/*"],
  theme: {
    extend: {},
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      searchbar: "#F5F5F5",
      nftName: "#f8f8f8",
      footer: "#0E0E0E",
      submitButton: "#93D39B",
      collections: "#BFBFBF",
      aboutUs: "#F8F8F8",
      tds: "#5B5B5B",
    },
    boxSizing: ['border-box'],
  },
  plugins: [],
};
