/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "768px",
      md: "960px",
    },
    extend: {
      fontFamily: {
        asap: ["asap"],
      },
      colors: {
        mediumGray: "#1A1A1A",
        darkGray: "#121212",
        lightGray: "#595959",
        mediumLightGray: "#161616",
        navTextGray: "#909090",
        tailBlue: "#20C5FE",
      },
    },
  },
  plugins: [],
};
