import React, { memo } from "react";
import { Box, Typography } from "@mui/material";
import InstagramIcon from "@/assets/icons/instagram-icon.svg?react";
import PhoneIcon from "@/assets/icons/phone-call-icon.svg?react";
import promoImageGreen from "@/assets/images/photo-3green.svg";
import promoImageRight from "@/assets/images/photo-1.2.svg";
import { StarBadge } from "@components/ui/StarBadge";
import { GlowCircle } from "@/components/ui/GlowCircle";
import { Section } from "@components/ui/Section";
import {
  bodyTextSx,
  gradientHeadlineTextSx,
  sectionHeadingSx,
} from "@/constants/typography";

const Contact: React.FC = memo(() => {
  return (
    <Section className="py-8 sm:py-10 md:py-16 lg:py-[148px]">
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: "30px", md: "52px" },
            width: { xs: "100%", md: "50%" },
          }}
        >
          <Typography variant="h1" sx={{ ...sectionHeadingSx }}>
            Our
            <br />
            <Box component="span" sx={{ ...gradientHeadlineTextSx }}>
              Contacts
            </Box>
          </Typography>
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "relative",
              top: { md: 50 },
              left: { md: 80 },
            }}
          >
            <GlowCircle
              size={120}
              blur={140}
              gradient="linear-gradient(245deg, rgba(35,114,73,0.55) 0%, rgba(53,198,107,0.73) 51.85%)"
            />
          </Box>
          <Typography
            variant="body1"
            sx={{
              ...bodyTextSx,
              maxWidth: { xs: "100%", md: "444px" },
            }}
          >
            Have time to buy the most harmonious drinks in the new Starbucks coffee
            and don't forget about the discount!
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: 2, sm: 3 },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <InstagramIcon
                width={44}
                height={44}
                style={{ width: "clamp(32px, 4vw, 44px)", height: "clamp(32px, 4vw, 44px)" }}
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
                style={{ width: "clamp(32px, 4vw, 44px)", height: "clamp(32px, 4vw, 44px)" }}
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

        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", md: "50%" },
            display: { xs: "none", md: "flex" },
            justifyContent: { md: "flex-end" },
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={promoImageGreen}
            alt="Promo Green"
            sx={{
              width: "100%",
              maxWidth: { md: 354 },
              height: { md: 521 },
              objectFit: "cover",
              position: "relative",
              zIndex: 1,
              transform: "scaleX(-1)",
            }}
          />
          <Box
            component="img"
            src={promoImageRight}
            alt="Promo Right"
            sx={{
              position: "absolute",
              top: { md: -70, lg: -60 },
              left: { md: 50, lg: 150 },
              width: "100%",
              maxWidth: { md: 453 },
              height: { md: 620 },
              objectFit: "cover",
              zIndex: 2,
            }}
            draggable="true"
          />
          <Box
            sx={{
              position: "absolute",
              top: { md: -70, lg: -80 },
              left: { md: 60, lg: 130 },
              width: { md: 190, lg: 220 },
              height: { md: 190, lg: 220 },
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
              className="whitespace-pre-line transition-transform duration-500 hover:rotate-[-25deg]"
            />
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                position: "relative",
                top: { md: 0 },
                left: { md: 90 },
              }}
            >
              <GlowCircle
                size={120}
                blur={140}
                gradient="linear-gradient(245deg, rgba(35,114,73,0.55) 0%, rgba(53,198,107,0.73) 51.85%)"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Section>
  );
});

Contact.displayName = "Contact";

export default Contact;
