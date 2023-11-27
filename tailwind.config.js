/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        mainFont: ['"League Spartan"'],
      },
      colors: {
        primaryColor: "#512051",
        secondColor: "#EE69A4",
        thirdColor: "#927B91",
        fourthColor: "#F7F2F7",
      },
    },
  },
  plugins: [],
};
