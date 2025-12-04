import { memo, useId } from "react";
import { Box } from "@mui/material";

export type ScrollDirection = "left" | "right";

export interface ScrollButtonProps {
  direction: ScrollDirection;
  onClick?: () => void;
}

const ScrollButtonComponent = ({ direction, onClick }: ScrollButtonProps) => {
  const gradientId = useId();
  const isLeft = direction === "left";
  const arrowPath = isLeft
    ? "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
    : "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z";
  const gradientKey = `${gradientId}-${direction}`;

  return (
    <Box
      role="button"
      aria-label={`Scroll ${direction}`}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick?.();
        }
      }}
      sx={{
        width: 84,
        height: 84,
        borderRadius: "29px",
        backgroundColor: "transparent",
        flexShrink: 0,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        border: "1px solid transparent",
        transition: "all 0.3s ease",
        outline: "none",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: "29px",
          padding: "1px",
          background: "linear-gradient(223deg, #237249 0%, #35c66b 100%)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
          transition: "all 0.3s ease",
        },
        "&:hover, &:focus-visible": {
          transform: "scale(1.05)",
          "&::before": {
            background: "linear-gradient(223deg, #35c66b 0%, #237249 100%)",
          },
          "& svg": {
            transform: isLeft ? "translateX(-3px)" : "translateX(3px)",
          },
        },
        "&:active": {
          transform: "scale(0.98)",
        },
      }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "relative",
          zIndex: 1,
          transition: "transform 0.3s ease",
        }}
      >
        <defs>
          <linearGradient
            id={gradientKey}
            x1={isLeft ? "0%" : "100%"}
            y1="0%"
            x2={isLeft ? "100%" : "0%"}
            y2="100%"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#237249" />
            <stop offset="100%" stopColor="#35c66b" />
          </linearGradient>
        </defs>
        <path d={arrowPath} fill={`url(#${gradientKey})`} />
      </svg>
    </Box>
  );
};

export const ScrollButton = memo(ScrollButtonComponent);

ScrollButton.displayName = "ScrollButton";
