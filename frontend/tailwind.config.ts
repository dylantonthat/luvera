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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        logo: ["var(--font-libre-bodoni)", "serif"], // For "luvera" branding
        sans: ["var(--font-lexend)", "sans-serif"], // UI & smaller text
        display: ["var(--font-libre-caslon-display)", "serif"], // Headings & primary content
      },
    },
  },
  plugins: [],
} satisfies Config;


