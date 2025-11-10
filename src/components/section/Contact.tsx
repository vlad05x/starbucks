import React, { memo } from "react";
import { Box, Typography, Container } from "@mui/material";
import theme from "@/theme";
import InstagramIcon from "@/assets/icons/instagram-icon.svg?react";
import PhoneIcon from "@/assets/icons/phone-call-icon.svg?react";
import promoImageGreen from "@/assets/images/photo-3green.svg";
import promoImageRight from "@/assets/images/photo-1.2.svg";
import { StarBadge } from "@components/ui/StarBadge";

const Contact: React.FC = memo(() => {
  return (
    <section className="flex flex-col items-start justify-center px-4 sm:px-6 lg:px-8 xl:px-20 py-8 sm:py-10 md:py-16 lg:py-[148px]">
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
            alignItems: { xs: "flex-start", md: "flex-start" },
            justifyContent: "space-between",
            gap: { xs: 4, md: 6 },
            width: "100%",
          }}
        >
          {/* Left Content Block */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: "30px", md: "52px" },
              width: { xs: "100%", md: "50%" },
              order: { xs: 1, md: 1 },
            }}
          >
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
              Our
              <br />
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
                Contacts
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.9375rem", sm: "1rem", md: "1.125rem" },
                lineHeight: 1.6,
                maxWidth: { xs: "100%", md: "444px" },
                mt: { xs: 2, md: 0 },
              }}
            >
              Have time to buy the most harmonious drinks in the new Starbucks
              coffee and don't forget about the discount!
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column" },
                alignItems: { xs: "flex-start" },
                gap: { xs: 2, sm: 3 },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <InstagramIcon
                  width={44}
                  height={44}
                  style={{
                    width: "clamp(32px, 4vw, 44px)",
                    height: "clamp(32px, 4vw, 44px)",
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: { xs: "24px", sm: "28px", md: "32px" },
                    lineHeight: "132%",
                    color: "#fff",
                  }}
                >
                  @supercoffee
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <PhoneIcon
                  width={44}
                  height={44}
                  style={{
                    width: "clamp(32px, 4vw, 44px)",
                    height: "clamp(32px, 4vw, 44px)",
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: { xs: "24px", sm: "28px", md: "32px" },
                    lineHeight: "132%",
                    color: "#fff",
                  }}
                >
                  +7-999-999-99-99
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* Right Content Block */}
          <Box
            sx={{
              position: "relative",
              width: { xs: "100%", md: "50%" },
              display: { xs: "none", md: "flex" },
              justifyContent: { xs: "flex-start", md: "flex-end" },
              alignItems: "center",
              order: { xs: 2, md: 2 },
            }}
          >
            <Box
              component="img"
              src={promoImageGreen}
              alt="Promo Green"
              sx={{
                width: "100%",
                maxWidth: { xs: "80%", md: 354 },
                height: { xs: "auto", md: 521 },
                objectFit: "cover",
                position: "relative",
                zIndex: 1,
                transform: "scaleX(-1)",
              }}
            />
            <Box
              component="img"
              src={promoImageRight}
              alt="Promo Left"
              sx={{
                position: "absolute",
                top: { xs: -50, md: -70, lg: -60 },
                left: { xs: 10, md: 50, lg: 150 },
                width: "100%",
                maxWidth: { xs: "100%", md: 453 },
                height: { xs: "auto", md: 620 },
                objectFit: "cover",
                zIndex: 2,
              }}
              draggable="true"
            />
            <Box
              sx={{
                position: "absolute",
                top: { xs: -30, sm: -30, md: -70, lg: -80 },
                left: { xs: 0, sm: 12, md: 60, lg: 130 },
                width: { xs: 100, sm: 140, md: 190, lg: 220 },
                height: { xs: 100, sm: 140, md: 190, lg: 220 },
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
                className="whitespace-pre-line hover:rotate-[-25deg] transition-transform duration-500"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;
