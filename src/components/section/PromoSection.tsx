import React, { memo } from "react";
import { Box, Typography } from "@mui/material";
import { GlowCircle } from "@/components/ui/GlowCircle";
import CustomButton from "@/components/ui/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { StarBadge } from "@components/ui/StarBadge";
import promoImage from "@/assets/images/photo-2.svg";
import promoImageLeft from "@/assets/images/photo-1.svg";
import promoImageGreen from "@/assets/images/photo-3green.svg";
import { Section } from "@components/ui/Section";
import {
  bodyTextSx,
  gradientHeadlineTextSx,
  sectionHeadingSx,
} from "@/constants/typography";

const PromoSection: React.FC = memo(() => {
  return (
    <Section
      className="py-8 sm:py-10 md:py-16 lg:py-20"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 10, md: "290px" },
          alignItems: "flex-start",
          width: "100%",
          mt: { xs: 10, md: 0 },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: { xs: "80%", md: "50%" },
            display: "flex",
            justifyContent: { xs: "flex-start", md: "center" },
            alignItems: "center",
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

        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            gap: { xs: 6, sm: 8, md: 10, lg: "54px" },
            textAlign: "left",
          }}
        >
          <Box sx={{ position: "relative", width: "100%" }}>
            <Box
              sx={{
                position: "absolute",
                top: 50,
                left: { xs: 0, lg: "160px" },
                zIndex: 0,
                display: { xs: "none", sm: "block" },
              }}
            >
              <GlowCircle
                size={180}
                blur={80}
                gradient="linear-gradient(245deg, rgba(35,114,73,0.35) 0%, rgba(53,198,107,0.5) 51.85%)"
              />
            </Box>

            <Typography variant="h1" sx={{ ...sectionHeadingSx }}>
              We make
              <br />
              <Box component="span" sx={{ ...gradientHeadlineTextSx }}>
                delicious
              </Box>
            </Typography>
          </Box>

          <Typography
            variant="body1"
            sx={{
              ...bodyTextSx,
              maxWidth: { xs: "70%", md: "80%" },
            }}
          >
            Only in 2021 we have made more than 100,000 orders for you, your loved
            ones, all of you, and in 2022 we are ready to destroy the market
          </Typography>
          <Box sx={{ position: "relative", width: "100%", display: "flex" }}>
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
                left: "40%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                pointerEvents: "none",
              }}
            >
              <CustomButton
                startIcon={<PlayArrowIcon sx={{ fontSize: { xs: 20, md: 24 } }} />}
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
    </Section>
  );
});

export default PromoSection;
