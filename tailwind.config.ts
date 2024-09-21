import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      colors: {
        red: "#EA5454",
        cyan: "#44D3D2",
        yellow: "#FCAE4A",
        blue: "#549EF2",
        gray: "#4D4F62",
        background: "#FAFAFA",
        white: "#FFFFFF",
      },
  },
  plugins: [],
};
export default config;
