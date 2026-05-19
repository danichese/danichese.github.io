import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

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
        muted: "var(--muted)",
        tech: "var(--tech-accent)",
        human: "var(--human-accent)",
        space: "var(--deep-space)",
        emerald: "rgb(var(--chaos-green))",
        blue: "rgb(var(--chaos-blue))",
        red: "rgb(var(--chaos-red))",
      },
    },
  },
  plugins: [typography],
} satisfies Config;
