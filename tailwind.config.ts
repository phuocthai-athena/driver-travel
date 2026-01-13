import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Ocean Blue (trust)
        ocean: {
          50: "#e6f2ff",
          100: "#b3d9ff",
          200: "#80bfff",
          300: "#4da6ff",
          400: "#1a8cff",
          500: "#0066cc", // Primary Deep Ocean Blue
          600: "#0052a3",
          700: "#003d7a",
          800: "#002952",
          900: "#001429",
        },
        // Golden Yellow (highlights)
        gold: {
          50: "#fffef0",
          100: "#fff9c4",
          200: "#fff59d",
          300: "#fff176",
          400: "#ffeb3b",
          500: "#ffd700", // Primary Golden Yellow
          600: "#ffc400",
          700: "#ffb300",
          800: "#ffa000",
          900: "#ff8f00",
        },
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
