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
        primary: "#42BFDD",
        secondary: " #101828",
        tertiary: "#344054",
        inputborderColor: "#CBD5E1",
        bluishColor: "#CBD5E1",
        errorColor: "#D92D20",
        focusColor: "#A5B4FC",
        notificationColor: "#FF7548",
        validColor: "#048a81",
        darkBlue: "#0F172A",
        brownColor: "#CBD5E1",
      },
    },
  },
  plugins: [],
};
