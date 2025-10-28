import React from "react";
import { Box, Typography, Card } from "@mui/material";
import { StarBadge } from "../ui/StarBadge";
import HeartVector from "@/assets/images/HeartVector.svg";
import MoneyVector from "@/assets/images/MoneyVector.svg";
import RocketVector from "@/assets/images/RocketVector.svg";

const features = [
  {
    icon: (
      <img
        src={HeartVector}
        className="w-[100px] sm:w-[120px] md:w-[143px] h-[130px] sm:h-[150px] md:h-[183px]"
        alt="Heart"
      />
    ),
    title: "Tasty",
    description: "We have the most delicious coffee",
  },
  {
    icon: (
      <img
        src={RocketVector}
        className="w-[100px] sm:w-[120px] md:w-[143px] h-[130px] sm:h-[150px] md:h-[183px]"
        alt="Rocket"
      />
    ),
    title: "Fast",
    description: "Our cafe will serve you quickly",
  },
  {
    icon: (
      <img
        src={MoneyVector}
        className="w-[100px] sm:w-[120px] md:w-[143px] h-[130px] sm:h-[150px] md:h-[183px]"
        alt="Money"
      />
    ),
    title: "Available",
    description: "Cafe will serve at the most pleasant prices",
  },
];

export const BenefitsSection: React.FC = () => {
  return (
    <Box
      component="section"
      className="relative flex justify-center items-center py-16 sm:py-20 md:py-28 px-4 sm:px-6 z-10"
    >
      <Box
        className="absolute top-5 left-60 sm:top-12 sm:left-20 md:left-90 z-20"
        sx={{
          transform: {
            xs: "rotate(-10deg)",
            sm: "rotate(-12deg)",
            md: "rotate(-15deg)",
          },
        }}
      >
        <StarBadge
          label={"WE\nHAVE"}
          size={178}
          className="whitespace-pre-line hover:rotate-25 transition-transform duration-500"
          textColor="#fff"
          fontSize="1.5rem"
        />
      </Box>

      <Card
        className="relative z-10 w-full max-w-5xl rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-16 shadow-2xl"
        sx={{
          borderRadius: { xs: "30px", sm: "40px", md: "46px" },
          background:
            "linear-gradient(230deg, #fff 3.94%, #e5e5e5 64.08%, #fbfbfb 88.62%)",
          width: { xs: "100%", sm: "90%", md: "1029px" },
          height: { xs: "auto", sm: "auto", md: "372px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          className="
             grid 
      grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-3 
      gap-6 sm:gap-8 
      justify-items-center
      w-full
          "
        >
          {features.map((feature) => (
            <Box
              key={feature.title}
              className="flex flex-col items-center text-center"
            >
              <Box className="relative w-28 sm:w-32 md:w-36 h-28 sm:h-32 md:h-36 flex items-center justify-center">
                <Box
                  className="absolute w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full"
                  sx={{
                    background: "linear-gradient(135deg, #4ade80, #22c55e)",
                  }}
                />
                <Box className="relative z-10">{feature.icon}</Box>
              </Box>

              <Typography
                variant="h5"
                component="h3"
                className="mb-2 text-center"
                sx={{
                  fontFamily: "var(--font-family)",
                  fontWeight: 500,
                  fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
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
                  maxWidth: { xs: "12rem", sm: "14rem", md: "16rem" },
                  fontSize: { xs: "0.875rem", sm: "1rem", md: "1rem" },
                }}
              >
                {feature.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Card>
    </Box>
  );
};
