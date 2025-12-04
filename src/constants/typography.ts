import type { SxProps, Theme } from "@mui/material/styles";
import theme from "@/theme";

export const sectionHeadingSx: SxProps<Theme> = {
  width: { xs: "100%", sm: "100%", md: 543 },
  lineHeight: 1.2,
  fontSize: { xs: "2rem", sm: "3rem", md: "4rem", lg: "5rem" },
  position: "relative",
  zIndex: 10,
};

export const gradientHeadlineTextSx: SxProps<Theme> = {
  ...theme.typography.h1Gradient,
  fontSize: { xs: "2rem", sm: "3rem", md: "4rem", lg: "5rem" },
  lineHeight: 1.2,
};

export const bodyTextSx: SxProps<Theme> = {
  fontSize: { xs: "0.9375rem", sm: "1rem", md: "1.125rem" },
  lineHeight: 1.6,
};
