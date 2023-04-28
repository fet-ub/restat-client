/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screen: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "#3B82F6",
        bluishColor: "#CBD5E1",
        darkBlue: "#0F172A",
        brownColor: "#CBD5E1",
      },
    },
  },
  plugins: [],
};
