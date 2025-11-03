import React, { memo } from "react";
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

const CustomButton = memo(
  React.forwardRef<HTMLButtonElement, CustomButtonProps>(
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
              transition: "all 0.3s ease",
              "&:hover": {
                background: "linear-gradient(210deg, #35c66b 0%, #237249 100%)",
                transform: "translateY(-2px)",
                boxShadow: "0 4px 12px rgba(35, 114, 73, 0.4)",
              },
              "&:active": {
                transform: "translateY(0)",
              },
            }
          : {
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "#fff",
              background: "#121517",
              color: "#fff",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "#1e1e22",
                transform: "translateY(-2px)",
                borderColor: "#35c66b",
                boxShadow: "0 4px 12px rgba(255, 255, 255, 0.1)",
              },
              "&:active": {
                transform: "translateY(0)",
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
            padding: { xs: "10px 24px", sm: "12px 32px" },
            fontWeight: 500,
            ...variantStyles,
            "&:disabled": {
              opacity: 0.6,
              cursor: "not-allowed",
            },
            ...sx,
          }}
          {...props}
        >
          {children}
        </Button>
      );
    }
  )
);

CustomButton.displayName = "CustomButton";

export default CustomButton;
