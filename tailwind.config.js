/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "gray-default": "#3C424A", /// Background
      "white-word": "#E1EAF2", /// Color titles and sub's
      "gray-word": "#878787", /// Color options (Or #6C727B)
      "gray-word-contents": "#8B929A", /// Color todo's messages
      "gray-input": "#343A40", /// Input color
      "gray-modal-options": "#484F59", /// Modals color
      yellow: "#FACC15",
      "black-border": "#2E3238", /// Borders
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
