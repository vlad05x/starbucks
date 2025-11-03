import React, { memo } from "react";
import theme from "@/theme";
import { Box, Typography, Container } from "@mui/material";
import CustomButton from "@components/ui/Button";
import StatsBlock from "@components/ui/StatsBlock";
import CupCoffee from "@/assets/images/CupCoffeMain.svg";
import { GlowCircle } from "@components/ui/GlowCircle";
import { StarBadge } from "@components/ui/StarBadge";

const HeroSection: React.FC = memo(() => {
  return (
    <section 
      className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-20 py-8 sm:py-10 md:py-16 lg:py-20 min-h-[90vh] md:min-h-auto"
      style={{ overflowX: "hidden", width: "100%", maxWidth: "100vw" }}
    >
      <Container
        maxWidth={false}
        sx={{ 
          maxWidth: 1290, 
          mx: "auto", 
          px: { xs: 2, sm: 3 },
          // overflowX: "hidden",
          width: "100%",
        }}
      >
        <Box
          className="flex flex-col md:flex-row items-center w-full"
          sx={{
            gap: { xs: 8, sm: 12, md: 16, lg: 20, xl: "155px" },
          }}
        >
          <Box
            className="md:w-1/2 flex justify-center order-1 md:order-2 relative w-full"
            sx={{
              minHeight: { xs: "300px", sm: "400px", md: "auto" },
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
              <GlowCircle
                size={400}
                blur={120}
                gradient="rgba(255,255,255,0.04)"
                className="hidden sm:block"
              />
              <GlowCircle
                size={200}
                blur={120}
                gradient="rgba(255,255,255,0.04)"
                className="block sm:hidden"
              />
            </Box>
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
                position: "absolute",
                bottom: { xs: -20, sm: 280, md: 250 },
                right: { xs: -32, sm: 200, md: 300 },
                zIndex: 0,
              }}
            >
              <GlowCircle
                size={350}
                blur={140}
                gradient="linear-gradient(245deg, rgba(35,114,73,0.55) 0%, rgba(53,198,107,0.73) 51.85%)"
                className="hidden "
              />
              <GlowCircle
                size={200}
                blur={140}
                gradient="linear-gradient(245deg, rgba(35,114,73,0.55) 0%, rgba(53,198,107,0.73) 51.85%)"
                className="block sl:hidden"
              />
            </Box>

            <Box
              component="img"
              src={CupCoffee}
              alt="Starbucks Coffee Cup"
              loading="eager"
              className="relative z-10 animate-floating hover:rotate-12 hover:scale-105 transition-transform duration-700 ease-in-out"
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
                  lg: "150px" 
                },
                zIndex: 20,
                transform: {
                  xs: "translate(0, 0) rotate(-15deg)",
                  sm: "translate(50%, -50%) rotate(-15deg)",
                },
                maxWidth: { xs: "calc(50vw - 10px)", sm: "none" },
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
                  className="rotate-[-15deg] hover:rotate-25 transition-transform duration-500"
                />
              </Box>
            </Box>
          </Box>

          <Box
            className="md:w-1/2 flex flex-col order-2 md:order-1 w-full"
            sx={{
              gap: { xs: 6, sm: 8, md: 10, lg: "54px" },
              alignItems: { xs: "flex-start", md: "flex-start" },
              textAlign: { xs: "left", md: "left" },
            }}
          >
            <Box className="relative w-full">
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: { xs: "-20px", sm: 0 },
                  zIndex: 0,
                }}
              >
                <GlowCircle
                  size={180}
                  blur={80}
                  gradient="linear-gradient(245deg, rgba(35,114,73,0.35) 0%, rgba(53,198,107,0.5) 51.85%)"
                  className="hidden sm:block"
                />
                <GlowCircle
                  size={100}
                  blur={60}
                  gradient="linear-gradient(245deg, rgba(35,114,73,0.35) 0%, rgba(53,198,107,0.5) 51.85%)"
                  className="block sm:hidden"
                />
              </Box>

              <Typography
                variant="h1"
                sx={{
                  width: { xs: "100%", sm: "100%", md: 543 },
                  lineHeight: 1.2,
                  fontSize: { xs: "2rem", sm: "3rem", md: "4rem", lg: "5rem" },
                  position: "relative",
                  zIndex: 10,
                }}
              >
                New Cafe
                <br />
                by{" "}
                <Box
                  component="span"
                  sx={{
                    ...theme.typography.h1Gradient,
                    fontSize: {
                      xs: "2rem",
                      sm: "3rem",
                      md: "4rem",
                      lg: "5rem",
                    },
                    lineHeight: 1.2,
                  }}
                >
                  StarBucks
                </Box>
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.9375rem", sm: "1rem", md: "1.125rem" },
                lineHeight: 1.6,
                maxWidth: { xs: "100%", md: "90%" },
              }}
            >
              Have time to buy the most harmonious drinks in the new Starbucks
              coffee and don't forget about the discount!
            </Typography>

            <Box
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full"
              sx={{
                width: { xs: "100%", sm: "auto" },
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
              <Box className="relative">
                <CustomButton
                  variantType="dark"
                  sx={{
                    width: { xs: "100%", sm: 140, md: 167 },
                    height: { xs: 56, sm: 64, md: 74 },
                    fontSize: { xs: "1.125rem", sm: "1.25rem", md: "1.5rem" },
                    zIndex: 10,
                    position: "relative",
                  }}
                >
                  More
                </CustomButton>

                <Box
                  sx={{
                    position: "absolute",
                    top: { xs: -80, sm: -80, md: -80 },
                    left: { xs: -64, sm: -64, md: -64 },
                    zIndex: 0,
                  }}
                >
                  <GlowCircle
                    size={300}
                    blur={130}
                    className="hidden md:block"
                  />
                  <GlowCircle
                    size={200}
                    blur={100}
                    className="block md:hidden"
                  />
                </Box>
              </Box>
            </Box>

            <Box sx={{ width: "100%", mt: { xs: 2, md: 0 } }}>
              <StatsBlock />
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
