import React, { memo } from "react";
import { Box, Typography } from "@mui/material";

interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: "9k+", label: "Premium Users" },
  { value: "2k+", label: "Happy Customer" },
  { value: "28+", label: "Awards Winning" },
] as const;

const StatItem: React.FC<{ stat: StatItem }> = memo(({ stat }) => {
  const numberPart = stat.value.slice(0, -1);
  const plusPart = stat.value.slice(-1);
  const labelWords = stat.label.split(" ");

  return (
    <Box
      sx={{
        flex: { xs: "0 0 auto", sm: "1 1 0" },
        width: { xs: "100%", sm: "auto" },
        minWidth: { xs: "auto", sm: "120px", md: "150px" },
        textAlign: { xs: "center", sm: "left" },
      }}
    >
      <Typography
        variant="h3"
        component="div"
        sx={{
          fontWeight: 400,
          fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem", lg: "3.875rem" },
          color: "#fff",
          display: "inline-flex",
          alignItems: "center",
          lineHeight: 1.2,
        }}
      >
        {numberPart}
        <Box
          component="span"
          sx={{
            background: "linear-gradient(210deg, #237249 0%, #35c66b 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
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
          mt: { xs: 0.5, sm: 1 },
          color: "#d9d9d9",
          fontWeight: 400,
          fontSize: {
            xs: "0.875rem",
            sm: "1rem",
            md: "1.125rem",
            lg: "1.25rem",
          },
          lineHeight: 1.44,
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
});

StatItem.displayName = "StatItem";

const StatsBlock: React.FC = memo(() => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: { xs: "flex-start", sm: "space-between" },
        gap: { xs: 8, sm: 3, md: 4 },
        width: "100%",
        alignItems: { xs: "center", sm: "flex-start" },
      }}
    >
      {stats.map((stat, index) => (
        <StatItem key={index} stat={stat} />
      ))}
    </Box>
  );
});

StatsBlock.displayName = "StatsBlock";

export default StatsBlock;
