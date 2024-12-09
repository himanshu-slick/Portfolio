/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4070F4",
          dark: "#3060E0",
        },
        // Define standard colors that can be used across the app
        gray: {
          // Extend the default gray palette
          850: "#1f2937", // Additional shade between 800 and 900
        },
        // Brand colors
        "brand-blue": "#4070F4",
        "dark-navy": "#17194B",
        "darker-navy": "#1B1E2B",
      },
      backgroundColor: {
        // Add specific background colors if needed
        dark: {
          DEFAULT: "#1B1E2B",
          card: "#222436",
        },
      },
    },
  },
  plugins: [],
};
