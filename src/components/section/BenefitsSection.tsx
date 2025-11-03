import React, { memo } from "react";
import { Box, Typography, Card } from "@mui/material";
import { StarBadge } from "../ui/StarBadge";
import HeartVector from "@/assets/images/HeartVector.svg";
import MoneyVector from "@/assets/images/MoneyVector.svg";
import RocketVector from "@/assets/images/RocketVector.svg";

const features = [
  {
    icon: HeartVector,
    iconAlt: "Heart",
    title: "Tasty",
    description: "We have the most delicious coffee",
  },
  {
    icon: RocketVector,
    iconAlt: "Rocket",
    title: "Fast",
    description: "Our cafe will serve you quickly",
  },
  {
    icon: MoneyVector,
    iconAlt: "Money",
    title: "Available",
    description: "Cafe will serve at the most pleasant prices",
  },
] as const;

const FeatureItem: React.FC<{ feature: (typeof features)[number] }> = memo(
  ({ feature }) => (
    <Box className="flex flex-col items-center text-center">
      <Box className="relative w-24 sm:w-28 md:w-32 lg:w-36 h-24 sm:h-28 md:h-32 lg:h-36 flex items-center justify-center">
        <Box
          className="absolute w-20 sm:w-24 md:w-28 lg:w-32 h-20 sm:h-24 md:h-28 lg:h-32 rounded-full"
          sx={{
            background: "linear-gradient(135deg, #4ade80, #22c55e)",
          }}
        />
        <Box
          component="img"
          src={feature.icon}
          alt={feature.iconAlt}
          loading="lazy"
          className="relative z-10 w-[80px] sm:w-[100px] md:w-[120px] lg:w-[143px] h-auto"
          sx={{
            maxHeight: { xs: "100px", sm: "130px", md: "150px", lg: "183px" },
          }}
        />
      </Box>

      <Typography
        variant="h5"
        component="h3"
        className="mb-2 mt-3 sm:mt-4 text-center"
        sx={{
          fontFamily: "var(--font-family)",
          fontWeight: 500,
          fontSize: { xs: "1.125rem", sm: "1.5rem", md: "1.75rem", lg: "2rem" },
          lineHeight: "1.63",
          letterSpacing: "-0.02em",
          color: "#121517",
        }}
      >
        {feature.title}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "rgba(18, 21, 23, 0.9)",
          maxWidth: { xs: "100%", sm: "14rem", md: "16rem" },
          fontSize: { xs: "0.8125rem", sm: "0.9375rem", md: "1rem" },
          lineHeight: 1.5,
          px: { xs: 1, sm: 0 },
        }}
      >
        {feature.description}
      </Typography>
    </Box>
  )
);

FeatureItem.displayName = "FeatureItem";

export const BenefitsSection: React.FC = memo(() => {
  return (
    <Box
      component="section"
      className="relative flex justify-center items-center py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 z-10 overflow-hidden"
    >
      <Box
        className="absolute z-20"
        sx={{
          top: { xs: "90px", sm: "120px", md: "150px", lg: "50px" },
          left: { xs: "auto", md: "2%", lg: "18%" },
          right: { xs: "0px", sm: "20px", md: "auto" },
          transform: {
            xs: "rotate(-10deg)",
            sm: "rotate(-12deg)",
            md: "rotate(-15deg)",
          },
        }}
      >
        <Box
          sx={{
            width: { xs: 100, sm: 140, md: 160, lg: 178 },
            height: { xs: 100, sm: 140, md: 160, lg: 178 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StarBadge
            label={"WE\nHAVE"}
            size={178}
            className="whitespace-pre-line hover:rotate-25 transition-transform duration-500"
            textColor="#fff"
            fontSize={{
              xs: "0.75rem",
              sm: "1rem",
              md: "1.25rem",
              lg: "1.5rem",
            }}
          />
        </Box>
      </Box>

      <Card
        className="relative z-10 w-full max-w-5xl rounded-2xl sm:rounded-3xl shadow-2xl"
        sx={{
          borderRadius: { xs: "24px", sm: "32px", md: "40px", lg: "46px" },
          background:
            "linear-gradient(230deg, #fff 3.94%, #e5e5e5 64.08%, #fbfbfb 88.62%)",
          width: { xs: "100%", sm: "95%", md: "90%", lg: "1029px" },
          height: { xs: "auto", md: "auto", lg: "372px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: { xs: 3, sm: 4, md: 6, lg: 8 },
          mt: { xs: 10, sm: 12, md: 14, lg: 0 },
        }}
      >
        <Box
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 justify-items-center w-full"
          sx={{
            gap: { xs: 4, sm: 6, md: 8, lg: 10 },
          }}
        >
          {features.map((feature) => (
            <FeatureItem key={feature.title} feature={feature} />
          ))}
        </Box>
      </Card>
    </Box>
  );
});

BenefitsSection.displayName = "BenefitsSection";
