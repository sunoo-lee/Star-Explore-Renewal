import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "space-black": "#0b0b0c",
        "star-blue": "#407ed9",
      },
      fontFamily: {
        avant: ["itc-avant-garde-gothic-pro", "sans-serif"],
        kr: ["Pretendard", "sans-serif"],
        noto: ["Noto Sans KR", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
