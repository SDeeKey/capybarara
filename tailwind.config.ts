import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        waveDarken: "var(--waveDarken)",
        waveLighter: "var(--waveLighter)",
        gray: "var(--gray)",
        gray200: "var(--gray-200)",
      },
        /*fontFamily: {
          sans: ["Inter"],
        }*/
    },
  },
  plugins: [],
} satisfies Config;
