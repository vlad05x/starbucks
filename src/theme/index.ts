import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    gradients: {
      primary: string;
    };
  }
  interface PaletteOptions {
    gradients?: {
      primary?: string;
    };
  }
}

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
    h1: { fontSize: "2rem", fontWeight: 700 },
    body1: {
      fontSize: "19px",
      fontWeight: 400,
      color: "#d9d9d9",
      textShadow: "0 4px 4px rgba(0,0,0,0.25)",
    },
    button: { textTransform: "none", fontWeight: 500 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 83 },
      },
    },
  },
});

export default theme;
