import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          25: "#f9fafc",
        },
      },
      boxShadow: {
        soft: "0 6px 30px -20px rgba(15, 23, 42, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
