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
        brandColor: "#3B82F6",
        bluishColor: "#cae9f5",
        darkBlue: "#0F172A",
        brownColor: "#CBD5E1",
      },
    },
  },
  plugins: [],
};
