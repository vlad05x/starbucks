/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#121618",
      },
      maxWidth: {
        container: "1290px",
      },
      backgroundImage: {
        gradientPrimary: "linear-gradient(223deg, #237249 0%, #35c66b 100%)",
      },
      fontFamily: {
        montserrat: ["var(--font-family)"],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
    },
  },
  plugins: [],
};
