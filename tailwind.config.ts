import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        portage: {
          50: "#eff5fe",
          100: "#e3ebfc",
          200: "#ccdbf9",
          300: "#adc2f4",
          400: "#879ded",
          500: "#6f81e5",
          600: "#545dd7",
          700: "#454bbd",
          800: "#3a4099",
          900: "#353b7a",
          950: "#1f2147",
        },
        sweden: {
          50: "#005B99",
          100: "#4e88ca",
          200: "#b7e9ff",
          300: "#FFD700",
          400: "#e9aa2b",
          500: "#F5F5F5",
          600: "#ebebeb",
          700: "#c2c2c2",
          800: "#333333",
          900: "#5c5c5c",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans"], // Define 'roboto' as a font family
      },
    },
  },
  plugins: [],
};
export default config;
