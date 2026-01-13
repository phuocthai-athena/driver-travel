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
        // Sky Blue (inviting travel color)
        sky: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9", // Primary Sky Blue
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        // Sandy Beige (warm, trustworthy)
        sandy: {
          50: "#fefaf8",
          100: "#fdf4f0",
          200: "#fae8e0",
          300: "#f6d5c7",
          400: "#f0b8a3",
          500: "#e89f7a", // Primary Sandy Beige
          600: "#d9825a",
          700: "#c16647",
          800: "#9f5239",
          900: "#7f4330",
        },
      },
      fontFamily: {
        heading: ["Varela Round", "sans-serif"],
        body: ["Nunito Sans", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
