/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat Alternates", "sans-serif"],
      },
      backgroundImage: {
        landingBackGround: "url('/Group 42109.png')",
        weAreGround: "url('/weare.jpg')",

        weAreDesktop: "url('/wearedesktop.png')",
      },
      screens: {
        br550: "550px",
        br500: "500px",
        br450: "450px",
        br400: "400px",
        br350: "350px",
      },
    },
  },
  plugins: [],
};
