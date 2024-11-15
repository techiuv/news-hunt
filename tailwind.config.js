/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#D32F2F",
        articleBg: "rgba(255, 255, 255, 0.95)",
        headingText: "#B71C1C",
        descText: "#424242",
        authorText: "#757575",
      },
    },
  },
  plugins: [],
}
