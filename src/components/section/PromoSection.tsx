import React, { memo } from "react";
import { Box, Typography, Container } from "@mui/material";
import theme from "@/theme";
import { GlowCircle } from "../ui/GlowCircle";
import CustomButton from "@/components/ui/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { StarBadge } from "@components/ui/StarBadge";
import promoImage from "@/assets/images/photo-2.svg";
import promoImageLeft from "@/assets/images/photo-1.svg";
import promoImageGreen from "@/assets/images/photo-3green.svg";

const PromoSection: React.FC = memo(() => {
  return (
    <section
      className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-20 py-8 sm:py-10 md:py-16 lg:py-20"
      style={{ overflowX: "hidden", width: "100%", maxWidth: "100vw" }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 1290,
          mx: "auto",
          px: { xs: 2, sm: 3 },
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 10, md: "290px" },
            alignItems: "flex-start",
            width: "100%",
            marginTop: { xs: 10, md: 0 },
          }}
        >
          {/* Left Image Block */}
          <Box
            sx={{
              position: "relative",
              width: { xs: "80%", md: "50%" },
              display: "flex",
              justifyContent: { xs: "flex-start", md: "center" },
              alignItems: "center",
              order: { xs: 1, md: 1 },
              alignSelf: { xs: "flex-start", md: "flex-start" },
            }}
          >
            <Box
              component="img"
              src={promoImageGreen}
              alt="Promo Green"
              sx={{
                width: "100%",
                maxWidth: { xs: "80%", md: 465 },
                height: { xs: "auto", md: 684 },
                objectFit: "cover",
                position: "relative",
                zIndex: 1,
              }}
            />
            <Box
              component="img"
              src={promoImageLeft}
              alt="Promo Left"
              sx={{
                position: "absolute",
                top: { xs: -50, md: -80 },
                left: { xs: 10, md: 30 },
                width: "100%",
                maxWidth: { xs: "100%", md: 595 },
                height: { xs: "auto", md: 814 },
                objectFit: "cover",
                zIndex: 2,
              }}
              draggable="true"
            />
            {/* StarBadge positioned at top right */}
            <Box
              sx={{
                position: "absolute",
                top: { xs: -30, sm: -30, md: -70, lg: -80 },
                right: { xs: 0, sm: 12, md: -70, lg: -50 },
                width: { xs: 100, sm: 140, md: 160, lg: 220 },
                height: { xs: 100, sm: 140, md: 160, lg: 220 },
                zIndex: 3,
              }}
              className="[&>div]:w-full [&>div]:h-full"
            >
              <StarBadge
                label={"WE\nHAVE"}
                size={232}
                textColor="#fff"
                fontSize={{
                  xs: "0.75rem",
                  sm: "1rem",
                  md: "1.25rem",
                  lg: "2.375rem",
                }}
                className="whitespace-pre-line hover:rotate-25 transition-transform duration-500"
              />
            </Box>
          </Box>

          {/* Right Content Block */}
          <Box
            className="md:w-1/2 flex flex-col w-full"
            sx={{
              gap: { xs: 6, sm: 8, md: 10, lg: "54px" },
              alignItems: { xs: "flex-start", md: "flex-start" },
              textAlign: { xs: "left", md: "left" },
              order: { xs: 2, md: 2 },
              width: { xs: "100%", md: "50%" },
            }}
          >
            <Box className="relative w-full">
              <Box
                sx={{
                  position: "absolute",
                  top: 50,
                  left: { xs: "-0px", sm: 0, lg: "160px" },
                  zIndex: 0,
                }}
              >
                <GlowCircle
                  size={180}
                  blur={80}
                  gradient="linear-gradient(245deg, rgba(35,114,73,0.35) 0%, rgba(53,198,107,0.5) 51.85%)"
                  className="hidden sm:block"
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
                We make
                <br />{" "}
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
                  delicious
                </Box>
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.9375rem", sm: "1rem", md: "1.125rem" },
                lineHeight: 1.6,
                maxWidth: { xs: "70%", md: "80%" },
              }}
            >
              Only in 2021 we have made more than 100,000 orders for you, your
              loved ones, all of you, and in 2022 we are ready to destroy the
              market
            </Typography>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                display: "flex",
              }}
            >
              <Box
                component="img"
                src={promoImage}
                alt="Promo"
                sx={{
                  width: "100%",
                  maxWidth: { xs: "80%", md: 447 },
                  height: { xs: "auto", md: 275 },
                  borderRadius: { xs: "16px", md: "24px" },
                  objectFit: "cover",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: { xs: "40%", md: "40%" },
                  transform: "translate(-50%, -50%)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  pointerEvents: "none",
                }}
              >
                <CustomButton
                  startIcon={
                    <PlayArrowIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
                  }
                  sx={{
                    width: { xs: "auto", md: "325px" },
                    height: { xs: 45, sm: 64, md: 75 },
                    fontSize: { xs: "1.125rem", sm: "1.25rem", md: "1.5rem" },
                    backdropFilter: "blur(10px)",
                    pointerEvents: "auto",
                  }}
                >
                  Cooking Process
                </CustomButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  );
});

export default PromoSection;
