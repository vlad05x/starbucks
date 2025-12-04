import React, { memo } from "react";
import { Box, Typography } from "@mui/material";
import CustomButton from "@components/ui/Button";
import StatsBlock from "@components/ui/StatsBlock";
import CupCoffee from "@/assets/images/CupCoffeMain.svg";
import { GlowCircle } from "@components/ui/GlowCircle";
import { StarBadge } from "@components/ui/StarBadge";
import { Section } from "@components/ui/Section";
import {
  bodyTextSx,
  gradientHeadlineTextSx,
  sectionHeadingSx,
} from "@/constants/typography";

const HeroSection: React.FC = memo(() => {
  return (
    <Section
      className="py-8 sm:py-10 md:py-16 lg:py-20"
      sx={{
        minHeight: { xs: "90vh", md: "auto" },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          width: "100%",
          gap: { xs: 8, sm: 12, md: 16, lg: 20, xl: "155px" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            order: { xs: 2, md: 1 },
            display: "flex",
            flexDirection: "column",
            gap: { xs: 6, sm: 8, md: 10, lg: "54px" },
          }}
        >
          <Box sx={{ position: "relative", width: "100%" }}>
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: { xs: "-20px", sm: 0 },
                zIndex: 0,
              }}
            >
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <GlowCircle
                  size={180}
                  blur={80}
                  gradient="linear-gradient(245deg, rgba(35,114,73,0.35) 0%, rgba(53,198,107,0.5) 51.85%)"
                />
              </Box>
              <Box sx={{ display: { xs: "block", sm: "none" } }}>
                <GlowCircle
                  size={100}
                  blur={60}
                  gradient="linear-gradient(245deg, rgba(35,114,73,0.35) 0%, rgba(53,198,107,0.5) 51.85%)"
                />
              </Box>
            </Box>

            <Typography
              variant="h1"
              sx={{ ...sectionHeadingSx }}
            >
              New Cafe
              <br />
              by{" "}
              <Box component="span" sx={{ ...gradientHeadlineTextSx }}>
                StarBucks
              </Box>
            </Typography>
          </Box>

          <Typography
            variant="body1"
            sx={{
              ...bodyTextSx,
              maxWidth: { xs: "100%", md: "90%" },
            }}
          >
            Have time to buy the most harmonious drinks in the new Starbucks
            coffee and don't forget about the discount!
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 3, sm: 4 },
              width: "100%",
            }}
          >
            <CustomButton
              variantType="gradient"
              sx={{
                width: { xs: "100%", sm: 280, md: 333 },
                height: { xs: 56, sm: 64, md: 74 },
                fontSize: { xs: "1.125rem", sm: "1.25rem", md: "1.5rem" },
              }}
            >
              Select a coffee
            </CustomButton>
            <Box sx={{ position: "relative", width: { xs: "100%", sm: "auto" } }}>
              <CustomButton
                variantType="dark"
                sx={{
                  width: { xs: "100%", sm: 140, md: 167 },
                  height: { xs: 56, sm: 64, md: 74 },
                  fontSize: { xs: "1.125rem", sm: "1.25rem", md: "1.5rem" },
                  position: "relative",
                  zIndex: 1,
                }}
              >
                More
              </CustomButton>

              <Box
                sx={{
                  position: "absolute",
                  top: { xs: -80, md: -80 },
                  left: { xs: -64, md: -64 },
                  zIndex: 0,
                }}
              >
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                  <GlowCircle size={300} blur={130} />
                </Box>
                <Box sx={{ display: { xs: "block", md: "none" } }}>
                  <GlowCircle size={200} blur={100} />
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ width: "100%", mt: { xs: 2, md: 0 } }}>
            <StatsBlock />
          </Box>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            order: { xs: 1, md: 2 },
            display: "flex",
            justifyContent: "center",
            minHeight: { xs: "300px", sm: "400px", md: "auto" },
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: { xs: -40, sm: -60, md: -80 },
              left: { xs: -40, sm: -60, md: -64 },
              zIndex: 0,
            }}
          >
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <GlowCircle size={400} blur={120} gradient="rgba(255,255,255,0.04)" />
            </Box>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <GlowCircle size={200} blur={120} gradient="rgba(255,255,255,0.04)" />
            </Box>
          </Box>

          <Box
            sx={{
              position: "absolute",
              bottom: { xs: -20, sm: 280, md: 250 },
              right: { xs: -32, sm: 200, md: 300 },
              zIndex: 0,
            }}
          >
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <GlowCircle
                size={350}
                blur={140}
                gradient="linear-gradient(245deg, rgba(35,114,73,0.55) 0%, rgba(53,198,107,0.73) 51.85%)"
              />
            </Box>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <GlowCircle
                size={200}
                blur={140}
                gradient="linear-gradient(245deg, rgba(35,114,73,0.55) 0%, rgba(53,198,107,0.73) 51.85%)"
              />
            </Box>
          </Box>

          <Box
            component="img"
            src={CupCoffee}
            alt="Starbucks Coffee Cup"
            loading="eager"
            className="relative z-10 animate-floating"
            sx={{
              width: {
                xs: "200px",
                sm: "280px",
                md: "380px",
                lg: "450px",
                xl: "500px",
              },
              height: "auto",
              maxWidth: "100%",
              objectFit: "contain",
              transition: "transform 0.7s ease-in-out",
              "&:hover": {
                transform: "rotate(12deg) scale(1.05)",
              },
            }}
          />

          <Box
            sx={{
              position: "absolute",
              top: { xs: "-10px", sm: "20px", md: "40px", lg: "60px" },
              right: {
                xs: "clamp(0px, 5vw, 90px)",
                sm: "clamp(0px, 10vw, 230px)",
                md: "100px",
                lg: "150px",
              },
              zIndex: 20,
              maxWidth: { xs: "calc(50vw - 10px)", sm: "none" },
              transform: {
                xs: "translate(0, 0) rotate(-15deg)",
                sm: "translate(50%, -50%) rotate(-15deg)",
              },
            }}
          >
            <Box
              sx={{
                width: { xs: 120, sm: 160, md: 200, lg: 220 },
                height: { xs: 120, sm: 160, md: 200, lg: 220 },
              }}
              className="[&>div]:w-full [&>div]:h-full"
            >
              <StarBadge
                label="45%"
                size={220}
                textColor="#fff"
                fontSize={{
                  xs: "1.5rem",
                  sm: "2rem",
                  md: "2.5rem",
                  lg: "3rem",
                  xl: "3.4375rem",
                }}
                className="rotate-[-15deg] transition-transform duration-500 hover:rotate-25"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
