/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{jsx,js}'
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "navy":"#27374D",
        "bluee":"#526D82",
        "forbody":"#DDE6ED",
        "grisclarito":"#9DB2BF",
      }
    },
  },
  plugins: [],
}

