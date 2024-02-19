/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "synthwave",
      "halloween",
      "bumblebee",
      "emerald",
      "corporate",
      "forest",
      "dracula",
      "aqua",
      "luxury",
      "lofi",
    ],
  },
};
