import React, { memo } from "react";
import clsx from "clsx";
import { Box } from "@mui/material";

interface StarBadgeProps {
  label?: string;
  size?: number; 
  textColor?: string;
  fontSize?: string | object; 
  className?: string;
}

export const StarBadge: React.FC<StarBadgeProps> = memo(
  ({
    label = "5.0%",
    size = 220,
    textColor = "#fff",
    fontSize = "3.4375rem",
    className,
  }) => {
    const isResponsiveFontSize = typeof fontSize === "object";

    return (
      <Box
        className={clsx(
          "relative flex items-center justify-center select-none",
          className
        )}
        sx={{
          width: size,
          height: size,
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      >
        <svg
          viewBox="0 0 220 220"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
          style={{ width: "100%", height: "100%" }}
        >
          <defs>
            <filter
              id="dropShadow"
              x="0"
              y="0"
              width="220"
              height="220"
              colorInterpolationFilters="sRGB"
            >
              <feOffset dx="-4.5" dy="15.5" />
              <feGaussianBlur stdDeviation="13.2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0775 0 0 0 0 0.2416 0 0 0 0 0.1579 0 0 0 0.46 0"
              />
              <feBlend in="SourceGraphic" mode="normal" />
            </filter>

            <linearGradient
              id="greenGradient"
              x1="166.399"
              y1="174.788"
              x2="55.311"
              y2="90.4641"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#237249" />
              <stop offset="1" stopColor="#35C66B" />
            </linearGradient>
          </defs>

          <path
            d="M158.773 28.2443C165.707 26.268 172.444 31.9207 171.701 39.0922C171.127 44.6427 175.124 49.6227 180.667 50.2631C187.829 51.0906 191.89 58.8911 188.46 65.2326C185.805 70.1407 187.592 76.2712 192.468 78.9842C198.768 82.4895 199.535 91.2502 193.939 95.7963C189.608 99.3148 188.913 105.662 192.379 110.035C196.859 115.684 194.214 124.072 187.305 126.13C181.957 127.724 178.885 133.322 180.415 138.688C182.391 145.622 176.739 152.359 169.567 151.616C164.017 151.042 159.037 155.039 158.396 160.582C157.569 167.744 149.768 171.805 143.427 168.375C138.519 165.72 132.388 167.507 129.675 172.383C126.17 178.683 117.409 179.45 112.863 173.854C109.344 169.523 102.997 168.827 98.6243 172.294C92.9748 176.774 84.5877 174.129 82.529 167.219C80.9358 161.872 75.3374 158.8 69.971 160.33C63.0374 162.306 56.3007 156.653 57.043 149.482C57.6175 143.931 53.6206 138.951 48.0774 138.311C40.9152 137.484 36.8545 129.683 40.2847 123.341C42.9396 118.433 41.1527 112.303 36.2765 109.59C29.9762 106.085 29.2098 97.3239 34.8057 92.7778C39.1367 89.2593 39.8318 82.9117 36.3651 78.5392C31.8858 72.8897 34.5302 64.5025 41.4399 62.4439C46.7877 60.8506 49.8591 55.2522 48.3294 49.8859C46.3531 42.9522 52.0059 36.2155 59.1774 36.9578C64.7278 37.5323 69.7078 33.5355 70.3483 27.9922C71.1757 20.8301 78.9763 16.7694 85.3178 20.1996C90.2259 22.8544 96.3563 21.0676 99.0693 16.1914C102.575 9.89109 111.335 9.12463 115.881 14.7205C119.4 19.0515 125.748 19.7467 130.12 16.2799C135.77 11.8006 144.157 14.4451 146.215 21.3547C147.809 26.7025 153.407 29.7739 158.773 28.2443Z"
            fill="url(#greenGradient)"
            filter="url(#dropShadow)"
          />
        </svg>

        <Box
          component="span"
          className="absolute inset-0 flex items-center justify-center z-10 font-semibold text-center star-badge-text"
          sx={{
            color: textColor,
            ...(isResponsiveFontSize
              ? { fontSize }
              : { fontSize: fontSize as string }),
          }}
        >
          {label}
        </Box>
      </Box>
    );
  }
);

StarBadge.displayName = "StarBadge";
