module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { extend: {
    keyframes: {
      marquee: {
        "0%": { transform: "translateX(0%)" },
        "100%": { transform: "translateX(-85%)" },
      },
    },
    animation: {
      marquee: "marquee 28s linear infinite",
    }
  } },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};