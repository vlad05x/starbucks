import { CSSProperties } from "react";

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

  interface TypographyVariants {
    h1Gradient: CSSProperties;
    bodyRegular: CSSProperties;
  }

  interface TypographyVariantsOptions {
    h1Gradient?: CSSProperties;
    bodyRegular?: CSSProperties;
  }
}
