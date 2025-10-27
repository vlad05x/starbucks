import React from "react";
import { Box, Typography } from "@mui/material";

interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: "9k+", label: "Premium Users" },
  { value: "2k+", label: "Happy Customer" },
  { value: "28+", label: "Awards Winning" },
];

const StatsBlock: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: { xs: 2, md: 4 },
        flexWrap: "wrap",
      }}
    >
      {stats.map((stat, index) => {
        const numberPart = stat.value.slice(0, -1);
        const plusPart = stat.value.slice(-1);
        const labelWords = stat.label.split(" ");

        return (
          <Box
            key={index}
            sx={{
              flex: "1 1 0",
              minWidth: { xs: "120px", sm: "150px" },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 400,
                fontSize: { xs: "2rem", sm: "3rem", md: "3.875rem" },
                color: "#fff",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              {numberPart}
              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(210deg, #237249 0%, #35c66b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  ml: 0.5,
                  fontWeight: 400,
                }}
              >
                {plusPart}
              </Box>
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                mt: 0.5,
                color: "#d9d9d9",
                fontWeight: 400,
                fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
                lineHeight: "144%",
                letterSpacing: "-0.02em",
              }}
            >
              {labelWords.map((word, i) => (
                <Box component="span" key={i} display="block">
                  {word}
                </Box>
              ))}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default StatsBlock;
