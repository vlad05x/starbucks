import React from "react";
import Button from "@mui/material/Button";
import type { ButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import type { SxProps, Theme } from "@mui/material/styles";

export type ButtonVariantType = "gradient" | "dark";

export interface CustomButtonProps extends ButtonProps {
  loading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variantType?: ButtonVariantType;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  (
    {
      children,
      loading = false,
      disabled,
      startIcon,
      endIcon,
      variantType = "gradient",
      sx,
      ...props
    },
    ref
  ) => {
    const variantStyles: SxProps<Theme> =
      variantType === "gradient"
        ? {
            background: "linear-gradient(210deg, #237249 0%, #35c66b 100%)",
            color: "#fff",
            transition: "background 0.3s ease, transform 0.2s ease",
            "&:hover": {
              background: "linear-gradient(210deg, #35c66b 0%, #237249 100%)",
              transform: "scale(1.02)",
            },
          }
        : {
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#fff",
            background: "#121517",
            color: "#fff",
            transition: "background 0.3s ease, transform 0.2s ease",
            "&:hover": {
              background: "#1e1e22",
              transform: "scale(1.03)",
            },
          };

    return (
      <Button
        ref={ref}
        startIcon={
          loading ? <CircularProgress size={20} color="inherit" /> : startIcon
        }
        endIcon={endIcon}
        disabled={disabled || loading}
        sx={{
          borderRadius: "83px",
          textTransform: "none",
          padding: "12px 32px",
          ...variantStyles,
          ...sx,
        }}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

CustomButton.displayName = "CustomButton";

export default CustomButton;
