import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B56b02",
        secondary: "#3f6c51",
        info: "#EFF6EE",
      },
      fontFamily: {
        sans: ["--var(--font-nobile)"],
        serif: ["--var(--font-bree-serif)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
