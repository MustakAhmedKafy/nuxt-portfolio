/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,vue}",
    "./components/**/*.{html,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "2rem",
          lg: "2rem",
          xl: "2rem",
          "2xl": "2rem",
        },
      },
      screens: {
        "small-mobile": "430px",
        // => @media (min-width: 320px) { ... }

        mobile: "576px",
        // => @media (min-width: 480px) { ... }

        tablet: "786px",
        // => @media (min-width: 640px) { ... }

        laptop: "992px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1200px",
        // => @media (min-width: 1280px) { ... }

        "large-desktop": "1400px",
        // => @media (min-width: 1600px) { ... }
      },
      colors: {
        // Primary - Indigo (matches CSS variables)
        primary: {
          DEFAULT: "#6366f1",
          light: "#818cf8",
          dark: "#4f46e5",
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
        // Accent - Purple
        accent: {
          DEFAULT: "#a855f7",
          light: "#c084fc",
          dark: "#9333ea",
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
        },
        // Other colors
        secondary: "#374151",
        success: "#22c55e",
        danger: "#ef4444",
        warning: "#f59e0b",
        info: "#3b82f6",
        light: "#f8fafc",
        dark: "#0f172a",
      },

      // fontFamily: {
      //   poppins: ['Poppins', 'sans-serif'],

      // },
      screens: {
        "2xl": { max: "1535px" },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
