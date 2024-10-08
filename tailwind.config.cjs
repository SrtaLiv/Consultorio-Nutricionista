/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Bricolage Grotesque Variable",
          "Inter Variable",
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        'custom-footer': 'rgba(246, 240, 237, 1)',
        'soft': 'rgba(250, 229, 227, 1)'
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
