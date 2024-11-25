import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import daisyUI from "daisyui";
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
      keyframes: {
        "border-top": {
          "0%": { transform: "scaleX(0)", filter: "blur(4px)", opacity: "0" },
          "100%": { transform: "scaleX(1)", filter: "blur(4px)", opacity: "1" },
        },
        "border-right": {
          "0%": { transform: "scaleY(0)", filter: "blur(4px)", opacity: "0" },
          "100%": { transform: "scaleY(1)", filter: "blur(4px)", opacity: "1" },
        },
        "border-bottom": {
          "0%": { transform: "scaleX(0)", filter: "blur(4px)", opacity: "0" },
          "100%": { transform: "scaleX(1)", filter: "blur(4px)", opacity: "1" },
        },
        "border-left": {
          "0%": { transform: "scaleY(0)", filter: "blur(4px)", opacity: "0" },
          "100%": { transform: "scaleY(1)", filter: "blur(4px)", opacity: "1" },
        },
      },
      animation: {
        "border-top": "border-top 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        "border-right": "border-right 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s forwards",
        "border-bottom": "border-bottom 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s forwards",
        "border-left": "border-left 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.9s forwards",
      },
    },
  },
  daisyui: {
    themes: true, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
  plugins: [typography, daisyUI],
} satisfies Config;
