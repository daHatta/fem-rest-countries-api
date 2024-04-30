import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "sm": "375px",
      "md": "750px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1440px",
    },
    colors: {
      clrBkgd: "hsl(var(--clr-background) / <alpha-value>)",
      clrInpt: "hsl(var(--clr-input) / <alpha-value>)",
      clrText: "hsl(var(--clr-text) / <alpha-value>)",
      clrElmt: "hsl(var(--clr-elements) / <alpha-value>)",
    },
    fontWeight: {
      light: "300",
      semibold: "600",
      extrabold: "800",
    },
  },
  plugins: [],
  darkMode: ["selector", "[data-theme='dark']"],
};
export default config;
