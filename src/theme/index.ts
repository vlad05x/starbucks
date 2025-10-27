import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#006241",
      light: "#1e8c5e",
      dark: "#00472f",
      contrastText: "#fff",
    },
    gradients: {
      primary: "linear-gradient(223deg, #237249 0%, #35c66b 100%)",
    },
    secondary: {
      main: "#d4af37",
      light: "#e3c766",
      dark: "#9b7c1a",
      contrastText: "#000",
    },
    background: { default: "#121618", paper: "#1a1a1a" },
    text: { primary: "#d9d9d9", secondary: "#616161" },
  },
  typography: {
    fontFamily: "var(--font-family)",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1Gradient: {
      fontWeight: 800,
      fontSize: "5rem",
      lineHeight: "109%",
      letterSpacing: "-0.03em",
      background: "linear-gradient(223deg, #237249 0%, #35c66b 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    h1: {
      fontWeight: 800,
      fontSize: "5rem",
      color: "#fff",
      lineHeight: "109%",
      letterSpacing: "-0.03em",
    },
    body1: {
      fontSize: "1.25rem",
      fontWeight: 400,
      color: "#d9d9d9",
      lineHeight: "163%",
      letterSpacing: "-0.02em",
    },
    button: { textTransform: "none", fontWeight: 500 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 83,
          fontSize: "1.5rem",
          fontWeight: 639,
          lineHeight: "146%",
          letterSpacing: "-0.02em",
        },
      },
    },
  },
});

export default theme;
