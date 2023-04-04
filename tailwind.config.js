/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        info: "rgb(var(--color-info) / <alpha-value>)",
        success: "rgb(var(--color-success) / <alpha-value>)",
        warn: "rgb(var(--color-warn) / <alpha-value>)",
        error: "rgb(var(--color-error) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
        background: "rgb(var(--color-background) / <alpha-value>)",
        divider_menu: "rgb(var(--color-divider_menu) / <alpha-value>)",
        transparent: "transparent",
        current: "currentColor",
        divider: "rgb(var(--color-divider) / <alpha-value>)",
      },
      backgroundImage: {
        avatar: "url('/img/john_apco.png')",
      },
      keyframes: {
        blink: {
          "50%": { "border-color": "transparent" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
      },
      animation: {
        blink: "blink 1s steps(1) infinite",
        typing:
          "typing 3s steps(30) 1s infinite alternate, blink 1s steps(1) infinite",
      },
    },
  },
  plugins: [],
};
