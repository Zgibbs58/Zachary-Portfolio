/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        8: "14px",
      },
      rotate: {
        3: "-3deg",
      },
    },
  },
  plugins: [],
};
